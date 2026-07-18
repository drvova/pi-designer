import { type ExtensionAPI, type ExtensionContext, type TurnEndEvent } from "@mariozechner/pi-coding-agent";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

export interface DesignAuditDependencies {
  isEnabled(cwd: string): boolean;
}

const UI_FILE_PATTERN = /\.(?:css|tsx|jsx|html|vue|svelte)$/i;
const AI_DEFAULT_PATTERNS = [
  { pattern: /#6366f1|#818cf8|#312e81/i, label: "AI default indigo/violet palette" },
  { pattern: /#06b6d4|#22d3ee|#67e8f9/i, label: "AI default cyan accent" },
  { pattern: /transition:\s*all\b/i, label: "transition: all (should name specific property)" },
  { pattern: /box-shadow:\s*0\s+0\s+(?:20|30|40|50)px\s+rgba/i, label: "Diffuse glow shadow (too generic)" },
];

export function registerDesignAudit(pi: ExtensionAPI, deps: DesignAuditDependencies): void {
  pi.on("turn_end", async (_event: TurnEndEvent, ctx: ExtensionContext) => {
    if (!deps.isEnabled(ctx.cwd)) return;
    if (!ctx.sessionManager) return;

    const entries = ctx.sessionManager.getEntries();
    const modifiedUiFiles = new Set<string>();
    const recent = entries.slice(-20);

    for (const entry of recent) {
      const record = entry as unknown as Record<string, unknown>;
      if (record.type !== "tool_result") continue;
      const details = record.details as Record<string, unknown> | undefined;
      if (!details) continue;
      const path = details.path as string | undefined;
      if (path && UI_FILE_PATTERN.test(path)) modifiedUiFiles.add(path);
    }

    if (modifiedUiFiles.size === 0) return;

    const findings: string[] = [];
    for (const filePath of modifiedUiFiles) {
      const fullPath = filePath.startsWith("/") ? filePath : join(ctx.cwd, filePath);
      if (!existsSync(fullPath)) continue;
      try {
        const content = readFileSync(fullPath, "utf8").slice(0, 50000);
        for (const check of AI_DEFAULT_PATTERNS) {
          if (check.pattern.test(content)) {
            findings.push(`${filePath}: ${check.label}`);
          }
        }
      } catch {
        // File may have been deleted or is binary
      }
    }

    if (findings.length > 0) {
      ctx.ui.setStatus("designer-audit", `DESIGN CHECK: ${findings.length} warning(s)`);
      const report = findings.slice(0, 5).join("\n");
      ctx.ui.notify(`Design audit found ${findings.length} potential issue(s):\n${report}`, "warning");
    }
  });
}
