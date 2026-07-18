import { type ExtensionAPI } from "@mariozechner/pi-coding-agent";

const DESIGNER_RESULT_TYPE = "designer-result";

export function registerDesignerRenderer(pi: ExtensionAPI): void {
  pi.registerMessageRenderer(DESIGNER_RESULT_TYPE, (message) => {
    const text = typeof message.content === "string"
      ? message.content
      : Array.isArray(message.content)
        ? message.content.map((b: any) => b?.text || "").join("")
        : "";

    if (!text) return undefined;

    const lines = text.split("\n").slice(0, 30);
    const truncated = text.split("\n").length > 30;
    const display = lines.map((l) => `  ${l}`).join("\n");

    return {
      type: "text",
      text: truncated ? `${display}\n  ... (${text.length} chars total)` : display,
    } as any;
  });
}
