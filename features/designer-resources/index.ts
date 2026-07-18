import { join } from "node:path";
import { existsSync, readFileSync } from "node:fs";
import type { DesignerSkill } from "../../entities/designer-skill/index.ts";
import { SKILLS_ROOT } from "../../shared/package-paths.ts";

export { readFileSync };

export const DESIGNER_SKILLS: readonly DesignerSkill[] = Object.freeze([
  { name: "designer-master", file: join(SKILLS_ROOT, "designer-master.md"), role: "core" },
  { name: "design-md", file: join(SKILLS_ROOT, "design-md.md"), role: "visual-system" },
  { name: "expression", file: join(SKILLS_ROOT, "expression.md"), role: "expression" },
  { name: "animate", file: join(SKILLS_ROOT, "animate.md"), role: "motion" },
  { name: "review-skill", file: join(SKILLS_ROOT, "review-skill.md"), role: "review" },
  { name: "design-laws", file: join(SKILLS_ROOT, "design-laws.md"), role: "laws" },
  { name: "ui-polish", file: join(SKILLS_ROOT, "ui-polish.md"), role: "polish" },
  { name: "motion-craft", file: join(SKILLS_ROOT, "motion-craft.md"), role: "motion-engineering" },
  { name: "visual-system", file: join(SKILLS_ROOT, "visual-system.md"), role: "design-system" },
]);

const SKILL_BY_NAME = new Map(DESIGNER_SKILLS.map((skill) => [skill.name, skill]));

export function loadSkill(name: string): string {
  const skill = SKILL_BY_NAME.get(name);
  if (!skill || !existsSync(skill.file)) return "";
  return readFileSync(skill.file, "utf8");
}

export function loadAllSkills(): string {
  return DESIGNER_SKILLS
    .filter((skill) => existsSync(skill.file))
    .map((skill) => `--- ${skill.name} (${skill.role}) ---\n${readFileSync(skill.file, "utf8")}`)
    .join("\n\n");
}

export const DESIGNER_SUMMARY = `Designer guidance for UI/UX, frontend, and visual work. Call this when the task involves building or improving interfaces, pages, components, layouts, styling, animation, or design systems.`;
