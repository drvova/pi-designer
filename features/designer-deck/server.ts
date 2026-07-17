import { createServer, type IncomingMessage, type ServerResponse, type Server } from "node:http";
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { getClientHtml, getExportHtml } from "./client.ts";
import type { DeckServerState, DeckSnapshot, Slide, DesignOption } from "./types.ts";

const HEARTBEAT_GRACE_MS = 60_000;
const IDLE_TIMEOUT_MS = 300_000;

export class DeckServer {
  private server: Server | null = null;
  private port = 0;
  private sseClients = new Set<ServerResponse>();
  private lastHeartbeat = Date.now();
  private idleTimer: ReturnType<typeof setTimeout> | null = null;
  private resolveSelection: ((value: unknown) => void) | null = null;
  private state: DeckServerState = {
    slides: [], selectedOptions: {}, notes: [], summary: "", theme: "auto",
    models: [], thinkingLevels: [], selectedModel: "", thinkingLevel: "",
    generating: false, lastActivity: Date.now(),
  };
  private deckDir: string;
  private cwd: string;

  constructor(cwd: string) {
    this.cwd = cwd;
    this.deckDir = join(cwd, ".designer-decks");
  }

  get url(): string { return `http://localhost:${this.port}`; }
  get isRunning(): boolean { return this.server?.listening ?? false; }

  start(): Promise<string> {
    return new Promise((resolve) => {
      this.server = createServer((req, res) => this.handle(req, res));
      this.server.listen(0, "127.0.0.1", () => {
        const addr = this.server!.address();
        this.port = typeof addr === "object" && addr ? addr.port : 0;
        this.startHeartbeatCheck();
        resolve(this.url);
      });
    });
  }

  stop(): void {
    if (this.idleTimer) clearTimeout(this.idleTimer);
    for (const client of this.sseClients) { try { client.end(); } catch {} }
    this.sseClients.clear();
    this.server?.close();
    this.server = null;
  }

  present(slides: Slide[], columns?: number): void {
    for (const slide of slides) {
      if (columns) slide.columns = columns;
      else if (!slide.columns) slide.columns = slide.options.length <= 1 ? 1 : Math.min(4, slide.options.length);
    }
    this.state.slides = slides;
    this.state.lastActivity = Date.now();
    this.broadcast({ type: "deck", state: this.sanitizedState() });
  }

  generateMore(slideId: string, options: DesignOption[]): void {
    const slide = this.state.slides.find((s) => s.id === slideId);
    if (!slide) return;
    slide.options.push(...options);
    slide.columns = slide.options.length <= 1 ? 1 : Math.min(4, slide.options.length);
    this.state.generating = false;
    this.state.lastActivity = Date.now();
    this.broadcast({ type: "update", state: this.sanitizedState() });
    this.armIdleTimer();
  }

  setGenerating(models: string[], thinkingLevels: string[]): void {
    this.state.generating = true;
    this.state.models = models;
    this.state.thinkingLevels = thinkingLevels;
    this.broadcast({ type: "generating", state: this.sanitizedState() });
  }

  waitForSelection(): Promise<unknown> {
    return new Promise((resolve) => { this.resolveSelection = resolve; });
  }

  save(summary?: string): string {
    if (!existsSync(this.deckDir)) mkdirSync(this.deckDir, { recursive: true });
    const deckId = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
    const snapshot: DeckSnapshot = {
      slides: this.state.slides,
      selectedOptions: this.state.selectedOptions,
      notes: this.state.notes,
      summary: summary ?? this.state.summary,
      savedAt: new Date().toISOString(),
    };
    const path = join(this.deckDir, `${deckId}.json`);
    writeFileSync(path, JSON.stringify(snapshot, null, 2));
    return deckId;
  }

  list(): { deckId: string; savedAt: string; slides: number }[] {
    if (!existsSync(this.deckDir)) return [];
    return readdirSync(this.deckDir)
      .filter((f) => f.endsWith(".json"))
      .map((f) => {
        try {
          const snap = JSON.parse(readFileSync(join(this.deckDir, f), "utf8")) as DeckSnapshot;
          return { deckId: f.replace(".json", ""), savedAt: snap.savedAt, slides: snap.slides.length };
        } catch { return null; }
      })
      .filter(Boolean) as { deckId: string; savedAt: string; slides: number }[];
  }

  open(deckId: string): boolean {
    const path = join(this.deckDir, `${deckId}.json`);
    if (!existsSync(path)) return false;
    const snap = JSON.parse(readFileSync(path, "utf8")) as DeckSnapshot;
    this.state.slides = snap.slides;
    this.state.selectedOptions = snap.selectedOptions;
    this.state.notes = snap.notes;
    this.state.summary = snap.summary ?? "";
    this.broadcast({ type: "deck", state: this.sanitizedState() });
    return true;
  }

  exportDeck(deckId?: string): string | null {
    const id = deckId ?? this.save();
    const path = join(this.deckDir, `${id}.json`);
    if (!existsSync(path)) return null;
    const snap = JSON.parse(readFileSync(path, "utf8")) as DeckSnapshot;
    const exportPath = join(this.deckDir, `${id}-export.html`);
    writeFileSync(exportPath, getExportHtml(snap));
    return exportPath;
  }

  private sanitizedState() {
    return {
      slides: this.state.slides,
      selectedOptions: this.state.selectedOptions,
      notes: this.state.notes,
      summary: this.state.summary,
      theme: this.state.theme,
      models: this.state.models,
      thinkingLevels: this.state.thinkingLevels,
      selectedModel: this.state.selectedModel,
      thinkingLevel: this.state.thinkingLevel,
      generating: this.state.generating,
    };
  }

  private armIdleTimer(): void {
    if (this.idleTimer) clearTimeout(this.idleTimer);
    this.idleTimer = setTimeout(() => {
      this.broadcast({ type: "idle_timeout" });
      this.stop();
    }, IDLE_TIMEOUT_MS);
  }

  private startHeartbeatCheck(): void {
    setInterval(() => {
      if (Date.now() - this.lastHeartbeat > HEARTBEAT_GRACE_MS && this.sseClients.size === 0) {
        this.stop();
      }
    }, 15_000);
  }

  private broadcast(data: unknown): void {
    const msg = `data: ${JSON.stringify(data)}\n\n`;
    for (const client of this.sseClients) { try { client.write(msg); } catch {} }
  }

  private handle(req: IncomingMessage, res: ServerResponse): void {
    const url = req.url ?? "/";
    if (url === "/" || url === "/index.html") { this.serveHtml(res); return; }
    if (url === "/sse") { this.handleSse(req, res); return; }
    if (url === "/heartbeat" && req.method === "POST") { this.lastHeartbeat = Date.now(); res.writeHead(200); res.end(); return; }
    if (url === "/select" && req.method === "POST") { this.handleSelect(req, res); return; }
    if (url === "/theme" && req.method === "POST") { this.handleTheme(req, res); return; }
    if (url === "/model" && req.method === "POST") { this.handleModel(req, res); return; }
    if (url === "/cancel" && req.method === "POST") { this.handleCancel(req, res); return; }
    if (url.startsWith("/image/") ) { this.serveImage(url.slice(7), res); return; }
    res.writeHead(404); res.end("Not found");
  }

  private serveHtml(res: ServerResponse): void {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(getClientHtml());
  }

  private serveImage(path: string, res: ServerResponse): void {
    const resolved = path.startsWith("/") ? path : join(this.cwd, decodeURIComponent(path));
    if (!existsSync(resolved)) { res.writeHead(404); res.end(); return; }
    const ext = resolved.split(".").pop()?.toLowerCase() ?? "";
    const mime: Record<string, string> = { png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", gif: "image/gif", svg: "image/svg+xml", webp: "image/webp" };
    res.writeHead(200, { "Content-Type": mime[ext] ?? "application/octet-stream" });
    res.end(readFileSync(resolved));
  }

  private handleSse(req: IncomingMessage, res: ServerResponse): void {
    res.writeHead(200, { "Content-Type": "text/event-stream", "Cache-Control": "no-cache", Connection: "keep-alive" });
    res.write(`data: ${JSON.stringify({ type: "deck", state: this.sanitizedState() })}\n\n`);
    this.sseClients.add(res);
    this.lastHeartbeat = Date.now();
    req.on("close", () => { this.sseClients.delete(res); });
  }

  private async handleSelect(req: IncomingMessage, res: ServerResponse): Promise<void> {
    const body = await this.readBody(req);
    const { slideId, optionId, notes, summary } = JSON.parse(body) as { slideId: string; optionId: string; notes?: string; summary?: string };
    this.state.selectedOptions[slideId] = optionId;
    if (notes) { const existing = this.state.notes.find((n) => n.slideId === slideId && n.optionId === optionId); if (existing) existing.note = notes; else this.state.notes.push({ slideId, optionId, note: notes }); }
    if (summary) this.state.summary = summary;
    this.state.lastActivity = Date.now();
    if (this.idleTimer) { clearTimeout(this.idleTimer); this.idleTimer = null; }
    this.broadcast({ type: "selection", slideId, optionId });
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: true }));
    if (this.resolveSelection) { this.resolveSelection({ slideId, optionId, notes, summary }); this.resolveSelection = null; }
  }

  private async handleTheme(req: IncomingMessage, res: ServerResponse): Promise<void> {
    const body = await this.readBody(req);
    const { theme } = JSON.parse(body) as { theme: "light" | "dark" | "auto" };
    this.state.theme = theme;
    res.writeHead(200); res.end();
  }

  private async handleModel(req: IncomingMessage, res: ServerResponse): Promise<void> {
    const body = await this.readBody(req);
    const { model, thinkingLevel } = JSON.parse(body) as { model?: string; thinkingLevel?: string };
    if (model) this.state.selectedModel = model;
    if (thinkingLevel) this.state.thinkingLevel = thinkingLevel;
    res.writeHead(200); res.end();
  }

  private handleCancel(_req: IncomingMessage, res: ServerResponse): void {
    res.writeHead(200); res.end();
    if (this.resolveSelection) { this.resolveSelection({ cancelled: true }); this.resolveSelection = null; }
  }

  private readBody(req: IncomingMessage): Promise<string> {
    return new Promise((resolve) => {
      let body = "";
      req.on("data", (chunk) => (body += chunk));
      req.on("end", () => resolve(body));
    });
  }
}
