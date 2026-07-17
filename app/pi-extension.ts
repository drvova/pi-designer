import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";
import { registerDoctorCommand } from "../features/designer-doctor/index.ts";
import { registerPromptInjection } from "../features/designer-prompt/index.ts";
import { DESIGNER_SKILLS, registerResourceDiscovery } from "../features/designer-resources/index.ts";
import { isEnabled, shouldActivate, toggle } from "../features/mode-activation/index.ts";
import { getVibe, registerVibeCommand } from "../features/vibe-preferences/index.ts";

export default function designerExtension(pi: ExtensionAPI): void {
  const dependencies = { shouldActivate, getVibe };
  pi.registerCommand("designer", {
    description: "Toggle the native Pi designer workflow for this project",
    handler: async (_args, ctx) => {
      const enabled = toggle(ctx.cwd);
      ctx.ui.notify(enabled ? "DESIGNER MODE ON" : "DESIGNER MODE OFF", "info");
      ctx.ui.setEditorText("");
    },
  });
  registerVibeCommand(pi);
  registerDoctorCommand(pi, { isEnabled, skills: DESIGNER_SKILLS });
  registerResourceDiscovery(pi);
  registerPromptInjection(pi, dependencies);
}
