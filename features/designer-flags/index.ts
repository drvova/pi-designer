import { type ExtensionAPI } from "@mariozechner/pi-coding-agent";

export interface DesignerFlagDependencies {
  loadSkill(name: string): string;
}

const FLAG_STYLE = "design-style";

export function registerDesignerFlags(pi: ExtensionAPI, deps: DesignerFlagDependencies): void {
  pi.registerFlag(FLAG_STYLE, {
    description: "Pre-load a design style (e.g. cyberpunk, solarpunk, brutalist)",
    type: "string",
    default: "",
  });

  pi.on("session_start", () => {
    const style = pi.getFlag(FLAG_STYLE);
    if (typeof style === "string" && style) {
      const content = deps.loadSkill(`style-${style}-ui`);
      if (content) {
        pi.sendUserMessage(`Design style "${style}" is loaded. Apply it to this project.`, { deliverAs: "followUp" });
      }
    }
  });
}
