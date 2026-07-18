import { type ExtensionAPI, type ExtensionContext, type SessionStartEvent } from "@mariozechner/pi-coding-agent";

export interface DesignerStatusDependencies {
  isEnabled(cwd: string): boolean;
  getVibe(cwd: string): string | undefined;
  skillCount: number;
}

function updateStatus(ctx: ExtensionContext, deps: DesignerStatusDependencies): void {
  const enabled = deps.isEnabled(ctx.cwd);
  const vibe = deps.getVibe(ctx.cwd);

  ctx.ui.setStatus("designer", enabled ? `DESIGN: ON` : undefined);

  if (enabled && ctx.hasUI) {
    const lines = [
      `\x1b[1mDESIGN MODE\x1b[0m ON  \x1b[2m|\x1b[0m  ${deps.skillCount} skills available`,
      vibe ? `Vibe: ${vibe.slice(0, 60)}${vibe.length > 60 ? "..." : ""}` : "No vibe set (/designer-vibe)",
    ];
    ctx.ui.setWidget("designer-status", lines, { placement: "aboveEditor" });
  } else {
    ctx.ui.setWidget("designer-status", undefined);
  }
}

export function registerDesignerStatus(pi: ExtensionAPI, deps: DesignerStatusDependencies): void {
  pi.on("session_start", (_event: SessionStartEvent, ctx: ExtensionContext) => {
    updateStatus(ctx, deps);
  });

  pi.on("agent_end", (_event, ctx: ExtensionContext) => {
    updateStatus(ctx, deps);
  });
}
