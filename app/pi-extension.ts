import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";
import { PACKAGE_ROOT } from "../shared/package-paths.ts";
import { registerDesignAudit } from "../features/design-audit/index.ts";
import { registerDeckTool } from "../features/designer-deck/index.ts";
import { registerDoctorCommand } from "../features/designer-doctor/index.ts";
import { DESIGNER_SKILLS, loadAllSkills, loadSkill } from "../features/designer-resources/index.ts";
import { registerDesignerFlags } from "../features/designer-flags/index.ts";
import { registerDesignSession } from "../features/designer-naming/index.ts";
import { registerDesignerRenderer } from "../features/designer-renderer/index.ts";
import { registerDesignerSession } from "../features/designer-session/index.ts";
import { registerDesignerShortcuts } from "../features/designer-shortcuts/index.ts";
import { registerDesignerStatus } from "../features/designer-status/index.ts";
import { registerDesignRules } from "../features/design-rules/index.ts";
import { registerDesignerTool } from "../features/designer-tool/index.ts";
import { registerDesignValidator } from "../features/design-validator/index.ts";
import { isEnabled, toggle } from "../features/mode-activation/index.ts";
import { clearVibe, getVibe, registerVibeCommand, setVibe } from "../features/vibe-preferences/index.ts";

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
    registerDesignRules(pi, { isEnabled });
    registerDesignerTool(pi, { loadAllSkills, loadSkill, getSkillList: () => DESIGNER_SKILLS, getVibe });
    registerDeckTool(pi);
    registerDesignerShortcuts(pi, { toggle, loadAllSkills });
    registerDesignerSession(pi, { isEnabled, getVibe, setVibe, clearVibe });
    registerDesignerStatus(pi, { isEnabled, getVibe, skillCount: DESIGNER_SKILLS.length });
    registerDesignAudit(pi, { isEnabled });
    registerDesignerFlags(pi, { loadSkill });
    registerDesignValidator(pi, { isEnabled, packageRoot: PACKAGE_ROOT });
    registerDesignerRenderer(pi);
    registerDesignSession(pi);
  }
}
