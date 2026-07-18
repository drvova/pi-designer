import { type ExtensionAPI, type ExtensionContext, type TurnEndEvent } from "@mariozechner/pi-coding-agent";
import { existsSync } from "node:fs";
import { join } from "node:path";

export interface DesignValidatorDependencies {
  isEnabled(cwd: string): boolean;
  packageRoot: string;
}

const UI_FILE_PATTERN = /\.(?:css|tsx|jsx|html|vue|svelte)$/i;

interface Finding { rule: string; file: string; }

export function registerDesignValidator(pi: ExtensionAPI, deps: DesignValidatorDependencies): void {
  pi.on("turn_end", async (_event: TurnEndEvent, ctx: ExtensionContext) => {
    if (!deps.isEnabled(ctx.cwd)) return;
    if (!ctx.sessionManager) return;

    const entries = ctx.sessionManager.getEntries();
    const recent = entries.slice(-20);
    const uiFiles = new Set<string>();

    for (const entry of recent) {
      const record = entry as unknown as Record<string, unknown>;
      if (record.type !== "tool_result") continue;
      const details = record.details as Record<string, unknown> | undefined;
      const path = details?.path as string | undefined;
      if (path && UI_FILE_PATTERN.test(path)) uiFiles.add(path);
    }

    if (uiFiles.size === 0) return;

    const slopScript = join(deps.packageRoot, "scripts", "fix-ai-slop.mjs");
    if (!existsSync(slopScript)) return;

    const findings: Finding[] = [];

    for (const filePath of uiFiles) {
      const fullPath = filePath.startsWith("/") ? filePath : join(ctx.cwd, filePath);
      if (!existsSync(fullPath)) continue;

      try {
        const result = await pi.exec(process.execPath, [slopScript, "--json", fullPath], { cwd: ctx.cwd, timeout: 30_000 });
        if (result.code !== 0) continue;
        const report = JSON.parse(result.stdout || "{}") as { issues?: { rule: string }[] };
        for (const issue of report.issues ?? []) findings.push({ rule: issue.rule, file: filePath });
      } catch { /* validator not available */ }
    }

    if (findings.length > 0) {
      ctx.ui.setStatus("designer-validate", `VALIDATED: ${findings.length} finding(s)`);
      const uniqueRules = [...new Set(findings.map((f) => f.rule))].slice(0, 5);
      ctx.ui.notify(`Design validation: ${findings.length} issue(s)\n${uniqueRules.join(", ")}`, "warning");
    } else {
      ctx.ui.setStatus("designer-validate", "VALIDATED: clean");
    }
  });
}
