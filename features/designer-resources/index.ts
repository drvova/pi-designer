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
  { name: "ref-ai-ds-starter-stack", file: join(SKILLS_ROOT, "ref-ai-ds-starter-stack.md"), role: "reference" },
  { name: "ref-animation-vocabulary-skill", file: join(SKILLS_ROOT, "ref-animation-vocabulary-skill.md"), role: "reference" },
  { name: "ref-apple-design-skill", file: join(SKILLS_ROOT, "ref-apple-design-skill.md"), role: "reference" },
  { name: "ref-better-colors-accessibility-contrast", file: join(SKILLS_ROOT, "ref-better-colors-accessibility-contrast.md"), role: "reference" },
  { name: "ref-better-colors-color-conversion", file: join(SKILLS_ROOT, "ref-better-colors-color-conversion.md"), role: "reference" },
  { name: "ref-better-colors-gamut-and-tailwind", file: join(SKILLS_ROOT, "ref-better-colors-gamut-and-tailwind.md"), role: "reference" },
  { name: "ref-better-colors-palette-generation", file: join(SKILLS_ROOT, "ref-better-colors-palette-generation.md"), role: "reference" },
  { name: "ref-better-colors-skill", file: join(SKILLS_ROOT, "ref-better-colors-skill.md"), role: "reference" },
  { name: "ref-better-typography-choosing-fonts", file: join(SKILLS_ROOT, "ref-better-typography-choosing-fonts.md"), role: "reference" },
  { name: "ref-better-typography-css-cheat-sheet", file: join(SKILLS_ROOT, "ref-better-typography-css-cheat-sheet.md"), role: "reference" },
  { name: "ref-better-typography-details-and-accessibility", file: join(SKILLS_ROOT, "ref-better-typography-details-and-accessibility.md"), role: "reference" },
  { name: "ref-better-typography-skill", file: join(SKILLS_ROOT, "ref-better-typography-skill.md"), role: "reference" },
  { name: "ref-better-typography-spacing-and-sizing", file: join(SKILLS_ROOT, "ref-better-typography-spacing-and-sizing.md"), role: "reference" },
  { name: "ref-better-typography-variable-fonts-and-opentype", file: join(SKILLS_ROOT, "ref-better-typography-variable-fonts-and-opentype.md"), role: "reference" },
  { name: "ref-better-typography-wrapping-and-punctuation", file: join(SKILLS_ROOT, "ref-better-typography-wrapping-and-punctuation.md"), role: "reference" },
  { name: "ref-better-ui-animations", file: join(SKILLS_ROOT, "ref-better-ui-animations.md"), role: "reference" },
  { name: "ref-better-ui-performance", file: join(SKILLS_ROOT, "ref-better-ui-performance.md"), role: "reference" },
  { name: "ref-better-ui-skill", file: join(SKILLS_ROOT, "ref-better-ui-skill.md"), role: "reference" },
  { name: "ref-better-ui-surfaces", file: join(SKILLS_ROOT, "ref-better-ui-surfaces.md"), role: "reference" },
  { name: "ref-claude", file: join(SKILLS_ROOT, "ref-claude.md"), role: "reference" },
  { name: "ref-emil-design-eng-skill", file: join(SKILLS_ROOT, "ref-emil-design-eng-skill.md"), role: "reference" },
  { name: "ref-feel-better-animations", file: join(SKILLS_ROOT, "ref-feel-better-animations.md"), role: "reference" },
  { name: "ref-feel-better-performance", file: join(SKILLS_ROOT, "ref-feel-better-performance.md"), role: "reference" },
  { name: "ref-feel-better-readme", file: join(SKILLS_ROOT, "ref-feel-better-readme.md"), role: "reference" },
  { name: "ref-feel-better-skill", file: join(SKILLS_ROOT, "ref-feel-better-skill.md"), role: "reference" },
  { name: "ref-feel-better-surfaces", file: join(SKILLS_ROOT, "ref-feel-better-surfaces.md"), role: "reference" },
  { name: "ref-feel-better-typography", file: join(SKILLS_ROOT, "ref-feel-better-typography.md"), role: "reference" },
  { name: "ref-find-animation-opportunities-skill", file: join(SKILLS_ROOT, "ref-find-animation-opportunities-skill.md"), role: "reference" },
  { name: "ref-improve-animations-audit", file: join(SKILLS_ROOT, "ref-improve-animations-audit.md"), role: "reference" },
  { name: "ref-improve-animations-plan-template", file: join(SKILLS_ROOT, "ref-improve-animations-plan-template.md"), role: "reference" },
  { name: "ref-improve-animations-skill", file: join(SKILLS_ROOT, "ref-improve-animations-skill.md"), role: "reference" },
  { name: "ref-make-anything-beautiful-rabinnfx", file: join(SKILLS_ROOT, "ref-make-anything-beautiful-rabinnfx.md"), role: "reference" },
  { name: "ref-oklch-accessibility-contrast", file: join(SKILLS_ROOT, "ref-oklch-accessibility-contrast.md"), role: "reference" },
  { name: "ref-oklch-color-conversion", file: join(SKILLS_ROOT, "ref-oklch-color-conversion.md"), role: "reference" },
  { name: "ref-oklch-gamut-and-tailwind", file: join(SKILLS_ROOT, "ref-oklch-gamut-and-tailwind.md"), role: "reference" },
  { name: "ref-oklch-palette-generation", file: join(SKILLS_ROOT, "ref-oklch-palette-generation.md"), role: "reference" },
  { name: "ref-oklch-readme", file: join(SKILLS_ROOT, "ref-oklch-readme.md"), role: "reference" },
  { name: "ref-oklch-skill", file: join(SKILLS_ROOT, "ref-oklch-skill.md"), role: "reference" },
  { name: "ref-readme", file: join(SKILLS_ROOT, "ref-readme.md"), role: "reference" },
  { name: "ref-review-animations-skill", file: join(SKILLS_ROOT, "ref-review-animations-skill.md"), role: "reference" },
  { name: "ref-review-animations-standards", file: join(SKILLS_ROOT, "ref-review-animations-standards.md"), role: "reference" },
  { name: "ref-skill-ui", file: join(SKILLS_ROOT, "ref-skill-ui.md"), role: "reference" },
  { name: "ref-the-content-system-by-rabinnfx", file: join(SKILLS_ROOT, "ref-the-content-system-by-rabinnfx.md"), role: "reference" },
  { name: "ref-the-contentmaxing-system-v2-rabinnfx", file: join(SKILLS_ROOT, "ref-the-contentmaxing-system-v2-rabinnfx.md"), role: "reference" },
  { name: "ref-the-creativity-system-rabinnfx", file: join(SKILLS_ROOT, "ref-the-creativity-system-rabinnfx.md"), role: "reference" },
  { name: "ref-the-visual-identity-system-rabinnfx", file: join(SKILLS_ROOT, "ref-the-visual-identity-system-rabinnfx.md"), role: "reference" },
  { name: "ref-ux-laws", file: join(SKILLS_ROOT, "ref-ux-laws.md"), role: "reference" },
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
