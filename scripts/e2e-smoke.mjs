#!/usr/bin/env bun
/** Native Pi extension smoke check. */
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const args = process.argv.slice(2);
const reportFlag = args.indexOf("--report");
const reportPath = reportFlag >= 0 ? args[reportFlag + 1] : null;
if (!process.versions.bun) {
  const result = spawnSync("bun", [fileURLToPath(import.meta.url), ...args], { stdio: "inherit" });
  process.exit(result.error ? 0 : result.status ?? 1);
}
process.env.PI_DESIGNER_MODE = "1";
const extension = await import("../app/pi-extension.ts");
const commands = [], tools = [], shortcuts = [], flags = [], renderers = [];
const handlers = new Map();
const api = {
  registerCommand(name, options) { commands.push({ name, options }); },
  on(name, handler) { handlers.set(name, handler); },
  registerTool(tool) { tools.push(tool.name); },
  registerShortcut(key) { shortcuts.push(key); },
  registerFlag(name) { flags.push(name); },
  registerMessageRenderer(type) { renderers.push(type); },
  getFlag: () => "",
  appendEntry() {},
  setSessionName() {},
  exec: async () => ({ stdout: "{}", stderr: "", code: 0, killed: false }),
};
extension.default(api);
const tests = [], failures = [];
const check = (name, fn) => { try { fn(); tests.push(name); } catch (error) { failures.push({ name, reason: error instanceof Error ? error.message : String(error) }); } };
const assert = (condition, message) => { if (!condition) throw new Error(message); };
check("commands", () => assert(commands.length === 3, "expected 3 commands"));
check("deferred tools", () => assert(tools.length === 2, "expected 2 tools"));
check("design rules hook", () => assert(handlers.has("before_agent_start"), "missing rules hook"));
check("session hooks", () => assert(handlers.has("session_start"), "missing session_start"));
check("audit hooks", () => assert(handlers.has("turn_end"), "missing turn_end"));
check("naming hooks", () => assert(handlers.has("agent_start") && handlers.has("tool_execution_end"), "missing naming hooks"));
check("keyboard shortcuts", () => assert(shortcuts.includes("ctrl+d"), "expected ctrl+d"));
check("flags", () => assert(flags.includes("design-style"), "expected design-style flag"));
check("renderers", () => assert(renderers.includes("designer-result"), "expected renderer"));
check("rules injected", () => {
  const r = handlers.get("before_agent_start")({ prompt: "test", systemPrompt: "base" }, { cwd: process.cwd() });
  assert(r?.systemPrompt?.includes("[DESIGN RULES]"), "rules not injected");
});
check("no tool gates", () => assert(!handlers.has("session_stop") && !handlers.has("tool_call"), "unexpected gates"));
const report = { mode: "simulated", host: "pi", tests, skipped: [], failures, artifacts: reportPath ? [reportPath] : [] };
if (reportPath) { mkdirSync(dirname(reportPath), { recursive: true }); writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`); }
console.log(JSON.stringify(report, null, 2));
rmSync("/tmp/pi-designer-smoke", { recursive: true, force: true });
process.exit(failures.length ? 1 : 0);
