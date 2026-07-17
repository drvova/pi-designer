import { mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { getAgentDir } from "@mariozechner/pi-coding-agent";

const STATE_FILE = join(getAgentDir(), "designer-state.json");
type State = Record<string, boolean>;

function readState(): State {
  try {
    const parsed = JSON.parse(readFileSync(STATE_FILE, "utf8")) as unknown;
    if (!parsed || typeof parsed !== "object") return {};
    return Object.fromEntries(Object.entries(parsed as Record<string, unknown>).filter((entry): entry is [string, boolean] => typeof entry[1] === "boolean"));
  } catch {
    return {};
  }
}

function writeState(state: State): void {
  mkdirSync(getAgentDir(), { recursive: true });
  const temporary = `${STATE_FILE}.${process.pid}.tmp`;
  writeFileSync(temporary, `${JSON.stringify(state, null, 2)}\n`, { mode: 0o600 });
  renameSync(temporary, STATE_FILE);
}

export function isEnabled(cwd: string): boolean {
  if (process.env.PI_DESIGNER_MODE === "1") return true;
  if (process.env.PI_DESIGNER_MODE === "0") return false;
  return readState()[cwd] !== false;
}

export function toggle(cwd: string): boolean {
  const state = readState();
  const enabled = state[cwd] === false;
  state[cwd] = enabled;
  writeState(state);
  return enabled;
}
