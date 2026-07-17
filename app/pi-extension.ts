import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";
import { registerDeckTool } from "../features/designer-deck/index.ts";
import { registerDoctorCommand } from "../features/designer-doctor/index.ts";
import { DESIGNER_SKILLS } from "../features/designer-resources/index.ts";
import { registerDesignerTool } from "../features/designer-tool/index.ts";
import { isEnabled, toggle } from "../features/mode-activation/index.ts";
import { getVibe, registerVibeCommand } from "../features/vibe-preferences/index.ts";

export default function designerExtension(pi: ExtensionAPI): void {
  pi.registerCommand("designer", {
    description: "Toggle the designer workflow on/off for this project",
    handler: async (_args, ctx) => {
      const enabled = toggle(ctx.cwd);
      ctx.ui.notify(enabled ? "DESIGNER MODE ON" : "DESIGNER MODE OFF", "info");
      ctx.ui.setEditorText("");
    },
  });
  registerVibeCommand(pi);
  registerDoctorCommand(pi, { isEnabled, skills: DESIGNER_SKILLS });
  if (isEnabled(process.cwd())) {
    registerDesignerTool(pi, { getVibe });
    registerDeckTool(pi);
  }
}
