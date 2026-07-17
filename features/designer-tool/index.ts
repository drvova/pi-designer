import { Type } from "typebox";
import { type ExtensionAPI } from "@mariozechner/pi-coding-agent";

const GuidanceSchema = Type.Object({
  skill: Type.Optional(Type.String({ description: "Specific skill to load (designer-master, design-md, expression, animate, review-skill). Omit to load all." })),
});

export interface DesignerToolDependencies {
  loadAllSkills(): string;
  loadSkill(name: string): string;
  getSkillList(): readonly { name: string; role: string }[];
  getVibe(cwd: string): string | undefined;
}

export function registerDesignerTool(pi: ExtensionAPI, dependencies: DesignerToolDependencies): void {
  pi.registerTool({
    name: "designer",
    label: "Designer",
    description: "Designer guidance for UI/UX, frontend, and visual work. Call this when the task involves building or improving interfaces, pages, components, layouts, styling, animation, or design systems.",
    promptSnippet: "Load UI/UX design skills, guidance, and project preferences",
    promptGuidelines: ["Call designer when the task involves UI, UX, frontend, layout, styling, animation, or visual design work."],
    parameters: GuidanceSchema,
    async execute(_toolCallId: string, params: any) {
      const skillName = params.skill;
      const content = skillName ? dependencies.loadSkill(skillName) : dependencies.loadAllSkills();
      const vibe = dependencies.getVibe(process.cwd());
      const available = dependencies.getSkillList().map((s) => `${s.name} (${s.role})`).join(", ");
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
