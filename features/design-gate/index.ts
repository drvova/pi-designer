import { type ExtensionAPI } from "@mariozechner/pi-coding-agent";

export interface DesignGateDependencies {
  isEnabled(cwd: string): boolean;
}

const UI_FILE_PATTERN = /\.(?:css|tsx|jsx|html|vue|svelte)$/i;

export function registerDesignGate(pi: ExtensionAPI, deps: DesignGateDependencies): void {
  let designerCalled = false;

  // Track when designer() is called
  pi.on("tool_execution_start", (event) => {
    const record = event as unknown as Record<string, unknown>;
    if (record.toolName === "designer") {
      designerCalled = true;
    }
  });

  // Block write/edit to UI files if designer hasn't been called
  pi.on("tool_call", async (event) => {
    if (!deps.isEnabled(process.cwd())) return;

    const record = event as unknown as Record<string, unknown>;
    const toolName = record.toolName as string;
    if (toolName !== "write" && toolName !== "edit") return;

    const input = record.input as Record<string, unknown> | undefined;
    const path = input?.path as string | undefined;
    if (!path || !UI_FILE_PATTERN.test(path)) return;

    if (!designerCalled) {
      return {
        block: true,
        reason: "Load a style skill first. Call designer({ skill: \"style-XXX-ui\" }) to pick a design direction before writing UI files. Browse available styles by calling designer() with no arguments.",
      };
    }
  });
}
