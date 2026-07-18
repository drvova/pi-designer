import { type BeforeAgentStartEvent, type ExtensionAPI, type ExtensionContext } from "@mariozechner/pi-coding-agent";
import { DESIGN_RULES, DESIGN_RULES_MARKER_RE } from "../../shared/design-rules.ts";

export interface DesignRulesDependencies {
  isEnabled(cwd: string): boolean;
}

export function registerDesignRules(pi: ExtensionAPI, dependencies: DesignRulesDependencies): void {
  pi.on("before_agent_start", (event: BeforeAgentStartEvent, ctx: ExtensionContext) => {
    if (!dependencies.isEnabled(ctx.cwd)) return;
    const systemPrompt = event.systemPrompt.replace(DESIGN_RULES_MARKER_RE, "").trim();
    return { systemPrompt: systemPrompt ? `${systemPrompt}\n\n${DESIGN_RULES}` : DESIGN_RULES };
  });
}
