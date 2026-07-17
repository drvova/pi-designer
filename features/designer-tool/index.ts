import { Type } from "typebox";
import { type ExtensionAPI } from "@mariozechner/pi-coding-agent";
import { DESIGNER_SKILLS, DESIGNER_SUMMARY, loadSkill, loadAllSkills } from "../designer-resources/index.ts";

const GuidanceSchema = Type.Object({
  skill: Type.Optional(Type.String({ description: "Specific skill to load (designer-master, design-md, expression, animate, review-skill). Omit to load all." })),
});

export interface DesignerToolDependencies {
  getVibe(cwd: string): string | undefined;
}

export function registerDesignerTool(pi: ExtensionAPI, dependencies: DesignerToolDependencies): void {
  pi.registerTool({
    name: "designer",
    label: "Designer",
    description: DESIGNER_SUMMARY,
    promptSnippet: "Load UI/UX design skills, guidance, and project preferences",
    promptGuidelines: ["Call designer when the task involves UI, UX, frontend, layout, styling, animation, or visual design work."],
    parameters: GuidanceSchema,
    async execute(_toolCallId, params) {
      const skillName = (params as { skill?: string }).skill;
      const content = skillName ? loadSkill(skillName) : loadAllSkills();
      const vibe = dependencies.getVibe(process.cwd());
      const available = DESIGNER_SKILLS.map((s) => `${s.name} (${s.role})`).join(", ");
      const sections = [
        content || "No skills found.",
        vibe ? `\n## Owner preferences\n${vibe}` : "",
        `\nAvailable skills: ${available}`,
      ].join("\n");
      return {
        content: [{ type: "text", text: sections }],
        details: {},
      };
    },
  });
}
