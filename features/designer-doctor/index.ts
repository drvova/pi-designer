import { existsSync } from "node:fs";
import { type ExtensionAPI, type ExtensionCommandContext } from "@mariozechner/pi-coding-agent";
import type { DesignerSkill } from "../../entities/designer-skill/index.ts";

export interface DoctorDependencies {
  isEnabled(cwd: string): boolean;
  skills: readonly DesignerSkill[];
}

export function registerDoctorCommand(pi: ExtensionAPI, dependencies: DoctorDependencies): void {
  pi.registerCommand("designer-doctor", {
    description: "Check the native Pi designer extension and skill assets",
    handler: async (_args: string, ctx: ExtensionCommandContext) => {
      const lines = [
        "Designer doctor (Pi)", "", `Mode for cwd: ${dependencies.isEnabled(ctx.cwd) ? "enabled" : "disabled"}`,
        `PI_DESIGNER_MODE override: ${process.env.PI_DESIGNER_MODE ?? "none"}`, "",
        ...dependencies.skills.map((skill) => `${skill.name}: ${existsSync(skill.file) ? "present" : "missing"}`),
        "", "Activation: /designer or PI_DESIGNER_MODE=1|0", "Host: native Pi ExtensionAPI",
      ];
      ctx.ui.setEditorText(lines.join("\n"));
    },
  });
}
