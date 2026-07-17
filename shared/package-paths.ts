import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export const PACKAGE_ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
export const SKILLS_ROOT = join(PACKAGE_ROOT, "skills");
export const PROMPT_MARKER_RE = /\n?\[DESIGNER MODE: ACTIVE v5\][\s\S]*?\[\/DESIGNER MODE\]\n?/g;
