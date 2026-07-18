import { type ExtensionAPI, type ExtensionContext, type SessionStartEvent } from "@mariozechner/pi-coding-agent";

const ENTRY_TYPE = "designer-vibe";

export interface DesignerSessionDependencies {
  isEnabled(cwd: string): boolean;
  getVibe(cwd: string): string | undefined;
  setVibe(cwd: string, vibe: string): void;
  clearVibe(cwd: string): void;
}

export function registerDesignerSession(pi: ExtensionAPI, deps: DesignerSessionDependencies): void {
  pi.on("session_start", async (_event: SessionStartEvent, ctx: ExtensionContext) => {
    if (!deps.isEnabled(ctx.cwd)) return;
    try {
      const entries = ctx.sessionManager.getEntries();
      for (let i = entries.length - 1; i >= 0; i--) {
        const entry = entries[i] as unknown as Record<string, unknown>;
        if (entry.type === "custom" && entry.customType === ENTRY_TYPE) {
          const data = entry.data as { cwd?: string; vibe?: string } | undefined;
          if (data?.cwd === ctx.cwd && data?.vibe) {
            deps.setVibe(ctx.cwd, data.vibe);
            ctx.ui.notify("Designer vibe restored from session.", "info");
          }
          break;
        }
      }
    } catch {
      // Session entries not available — file-based state still works
    }
  });
}

export function persistVibeToSession(pi: ExtensionAPI, cwd: string, vibe: string): void {
  pi.appendEntry(ENTRY_TYPE, { cwd, vibe });
}

export function persistVibeClearToSession(pi: ExtensionAPI, cwd: string): void {
  pi.appendEntry(ENTRY_TYPE, { cwd, vibe: "" });
}
