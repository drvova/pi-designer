import { type ExtensionAPI } from "@mariozechner/pi-coding-agent";

export function registerDesignSession(pi: ExtensionAPI): void {
  let named = false;

  pi.on("agent_start", () => {
    if (named) return;
    const style = pi.getFlag("design-style");
    if (typeof style === "string" && style) {
      pi.setSessionName(`Design: ${style}`);
      named = true;
    }
  });

  pi.on("tool_execution_end", (event: unknown) => {
    if (named) return;
    const record = event as Record<string, unknown>;
    if (record?.toolName === "designer") {
      pi.setSessionName("Design Session");
      named = true;
    }
  });
}
