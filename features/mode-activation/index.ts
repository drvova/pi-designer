import { mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { getAgentDir } from "@mariozechner/pi-coding-agent";
import { isDesignTask } from "../design-intent/index.ts";

const STATE_FILE = join(getAgentDir(), "designer-state.json");
const GLOBAL_STATE_KEY = "*";
type State = Record<string, boolean>;

function readState(): State {
  try {
    const parsed = JSON.parse(readFileSync(STATE_FILE, "utf8")) as unknown;
    if (!parsed || typeof parsed !== "object") return {};
    const record = parsed as Record<string, unknown>;
    if (typeof record.enabled === "boolean") return { [GLOBAL_STATE_KEY]: record.enabled };
    return Object.fromEntries(Object.entries(record).filter((entry): entry is [string, boolean] => typeof entry[1] === "boolean"));
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
  const state = readState();
  return state[cwd] === true || state[GLOBAL_STATE_KEY] === true;
}

export function shouldActivate(cwd: string, prompt: string): boolean {
  if (process.env.PI_DESIGNER_MODE === "1") return true;
  if (process.env.PI_DESIGNER_MODE === "0") return false;
  const state = readState();
  return state[cwd] === true || state[GLOBAL_STATE_KEY] === true || isDesignTask(prompt);
}

export function toggle(cwd: string): boolean {
  const state = readState();
  delete state[GLOBAL_STATE_KEY];
  const enabled = state[cwd] !== true;
  if (enabled) state[cwd] = true;
  else delete state[cwd];
  writeState(state);
  return enabled;
}
