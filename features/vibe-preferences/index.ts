import { mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { getAgentDir, type ExtensionCommandContext, type ExtensionAPI } from "@mariozechner/pi-coding-agent";

const VIBE_FILE = join(getAgentDir(), "designer-vibes.json");
type Vibes = Record<string, string>;

function readVibes(): Vibes {
  try {
    const parsed = JSON.parse(readFileSync(VIBE_FILE, "utf8")) as unknown;
    if (!parsed || typeof parsed !== "object") return {};
    return Object.fromEntries(Object.entries(parsed as Record<string, unknown>).filter((entry): entry is [string, string] => typeof entry[1] === "string" && entry[1].length > 0));
  } catch {
    return {};
  }
}

function writeVibes(vibes: Vibes): void {
  mkdirSync(getAgentDir(), { recursive: true });
  const temporary = `${VIBE_FILE}.${process.pid}.tmp`;
  writeFileSync(temporary, `${JSON.stringify(vibes, null, 2)}\n`, { mode: 0o600 });
  renameSync(temporary, VIBE_FILE);
}

export function getVibe(cwd: string): string | undefined { return readVibes()[cwd]?.slice(0, 1200); }

export function registerVibeCommand(pi: ExtensionAPI): void {
  pi.registerCommand("designer-vibe", {
    description: "Set persistent design preferences for this project",
    handler: async (args: string, ctx: ExtensionCommandContext) => {
      const text = args.trim();
      const vibes = readVibes();
      if (text === "clear") {
        delete vibes[ctx.cwd];
        writeVibes(vibes);
        ctx.ui.notify("Designer preferences cleared for this project.", "info");
      } else if (text) {
        vibes[ctx.cwd] = text;
        writeVibes(vibes);
        ctx.ui.notify("Designer preferences saved for this project.", "info");
      } else ctx.ui.notify(vibes[ctx.cwd] ? `Current preferences: ${vibes[ctx.cwd]}` : "Usage: /designer-vibe <preferences> | clear", "info");
      ctx.ui.setEditorText("");
    },
  });
}
