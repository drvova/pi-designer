import { existsSync } from "node:fs";
import { join } from "node:path";
import { type ExtensionAPI, type ExtensionContext } from "@mariozechner/pi-coding-agent";
import type { DesignerSkill } from "../../entities/designer-skill/index.ts";
import { SKILLS_ROOT } from "../../shared/package-paths.ts";

export const DESIGNER_SKILLS: readonly DesignerSkill[] = Object.freeze([
  { name: "designer-master", file: join(SKILLS_ROOT, "designer-master.md"), role: "core" },
  { name: "design-md", file: join(SKILLS_ROOT, "design-md.md"), role: "visual-system" },
  { name: "expression", file: join(SKILLS_ROOT, "expression.md"), role: "expression" },
  { name: "animate", file: join(SKILLS_ROOT, "animate.md"), role: "motion" },
  { name: "review-skill", file: join(SKILLS_ROOT, "review-skill.md"), role: "review" },
]);

export function registerResourceDiscovery(pi: ExtensionAPI): void {
  pi.on("resources_discover", (_event: unknown, _ctx: ExtensionContext) => ({
    skillPaths: DESIGNER_SKILLS.map((skill) => skill.file).filter(existsSync),
  }));
}
