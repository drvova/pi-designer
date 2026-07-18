import { type ExtensionAPI, type ExtensionContext } from "@mariozechner/pi-coding-agent";

export interface DesignerShortcutDependencies {
  toggle(cwd: string): boolean;
  loadAllSkills(): string;
}

export function registerDesignerShortcuts(pi: ExtensionAPI, deps: DesignerShortcutDependencies): void {
  pi.registerShortcut("ctrl+d", {
    description: "Toggle designer mode on/off",
    handler: (ctx: ExtensionContext) => {
      const enabled = deps.toggle(ctx.cwd);
      ctx.ui.notify(enabled ? "DESIGN MODE ON" : "DESIGN MODE OFF", "info");
      ctx.ui.setStatus("designer", enabled ? "DESIGN: ON" : undefined);
      ctx.ui.setWidget("designer-status", enabled ? ["DESIGN MODE ON"] : undefined);
    },
  });

  pi.registerShortcut("ctrl+shift+d", {
    description: "Quick-load designer skills summary to editor",
    handler: (ctx: ExtensionContext) => {
      const skills = deps.loadAllSkills();
      const summary = skills.slice(0, 3000) + (skills.length > 3000 ? "\n\n... (truncated)" : "");
      ctx.ui.setEditorText(summary);
      ctx.ui.notify("Designer skills loaded to editor.", "info");
    },
  });
}
