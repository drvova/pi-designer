import { Type } from "typebox";
import { type ExtensionAPI } from "@mariozechner/pi-coding-agent";
import { DeckServer } from "./server.ts";
import type { Slide, DesignOption } from "./types.ts";

let deckServer: DeckServer | null = null;

const BlockSchema = Type.Object({
  type: Type.Union([Type.Literal("code"), Type.Literal("mermaid"), Type.Literal("html"), Type.Literal("image")]),
  content: Type.String({ description: "Code source, mermaid source, raw HTML, or image file path" }),
  language: Type.Optional(Type.String({ description: "Language for code blocks (e.g. jsx, css, ts)" })),
});

const OptionSchema = Type.Object({
  id: Type.String(),
  title: Type.String(),
  blocks: Type.Optional(Type.Array(BlockSchema)),
  previewHtml: Type.Optional(Type.String({ description: "Raw HTML preview with inline styles" })),
  aside: Type.Optional(Type.String({ description: "Explanatory text below preview" })),
});

const SlideSchema = Type.Object({
  id: Type.String(),
  prompt: Type.String(),
  options: Type.Array(OptionSchema),
  columns: Type.Optional(Type.Number({ description: "1-4, auto-detected if omitted" })),
});

export function registerDeckTool(pi: ExtensionAPI): void {
  pi.registerTool({
    name: "design_deck",
    label: "Design Deck",
    description: "Present a visual design deck with multi-slide options and high-fidelity previews. The model presents design options in a browser; the user selects interactively.",
    promptSnippet: "Open a visual design deck with live previews for UI/UX options",
    promptGuidelines: ["Call design_deck when you have concrete design options to present for the user to choose from."],
    parameters: Type.Object({
      action: Type.Union([
        Type.Literal("present"),
        Type.Literal("generate_more"),
        Type.Literal("save"),
        Type.Literal("list"),
        Type.Literal("open"),
        Type.Literal("export"),
        Type.Literal("close"),
      ], { description: "present: show deck, generate_more: add options, save/list/open/export/close" }),
      slides: Type.Optional(Type.Array(SlideSchema)),
      slideId: Type.Optional(Type.String({ description: "Target slide for generate_more" })),
      options: Type.Optional(Type.Array(OptionSchema, { description: "New options for generate_more" })),
      columns: Type.Optional(Type.Number()),
      deckId: Type.Optional(Type.String()),
      path: Type.Optional(Type.String()),
      models: Type.Optional(Type.Array(Type.String())),
      thinkingLevels: Type.Optional(Type.Array(Type.String())),
      summary: Type.Optional(Type.String()),
    }),
    async execute(_toolCallId: string, params: any) {
      const p = params as {
        action: string;
        slides?: Slide[];
        slideId?: string;
        options?: DesignOption[];
        columns?: number;
        deckId?: string;
        path?: string;
        models?: string[];
        thinkingLevels?: string[];
        summary?: string;
      };

      switch (p.action) {
        case "present": {
          if (!p.slides?.length) return { content: [{ type: "text", text: "No slides provided." }], details: {} };
          if (!deckServer?.isRunning) {
            deckServer = new DeckServer(process.cwd());
            const url = await deckServer.start();
            const { spawn } = await import("node:child_process");
            const open = process.platform === "darwin" ? "open" : process.platform === "win32" ? "start" : "xdg-open";
            spawn(open, [url], { detached: true, stdio: "ignore" }).unref();
          }
          deckServer!.present(p.slides, p.columns);
          const selection = await deckServer!.waitForSelection();
          return { content: [{ type: "text", text: JSON.stringify(selection, null, 2) }], details: { selection } } as any;
        }

        case "generate_more": {
          if (!deckServer?.isRunning) return { content: [{ type: "text", text: "No active deck. Call action 'present' first." }], details: {} };
          if (p.models) deckServer.setGenerating(p.models, p.thinkingLevels ?? []);
          if (p.slideId && p.options) deckServer.generateMore(p.slideId, p.options);
          return { content: [{ type: "text", text: "Options pushed to deck." }], details: {} };
        }

        case "save": {
          if (!deckServer?.isRunning) return { content: [{ type: "text", text: "No active deck." }], details: {} };
          const deckId = deckServer.save(p.summary);
          return { content: [{ type: "text", text: `Deck saved as ${deckId}.` }], details: { deckId } };
        }

        case "list": {
          if (!deckServer) deckServer = new DeckServer(process.cwd());
          const decks = deckServer.list();
          return { content: [{ type: "text", text: JSON.stringify(decks, null, 2) }], details: { decks } };
        }

        case "open": {
          if (!deckServer) deckServer = new DeckServer(process.cwd());
          if (!deckServer.isRunning) { const url = await deckServer.start(); const { spawn } = await import("node:child_process"); const open = process.platform === "darwin" ? "open" : process.platform === "win32" ? "start" : "xdg-open"; spawn(open, [url], { detached: true, stdio: "ignore" }).unref(); }
          const ok = deckServer.open(p.deckId ?? "");
          return { content: [{ type: "text", text: ok ? "Deck opened." : "Deck not found." }], details: { opened: ok } };
        }

        case "export": {
          if (!deckServer) deckServer = new DeckServer(process.cwd());
          const exportPath = deckServer.exportDeck(p.deckId);
          return { content: [{ type: "text", text: exportPath ? `Exported to ${exportPath}.` : "Export failed." }], details: { exportPath } };
        }

        case "close": {
          deckServer?.stop();
          deckServer = null;
          return { content: [{ type: "text", text: "Deck closed." }], details: {} };
        }

        default:
          return { content: [{ type: "text", text: `Unknown action: ${p.action}` }], details: {} };
      }
    },
  });
}
