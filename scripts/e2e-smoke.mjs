#!/usr/bin/env bun
/** Native Pi extension smoke check. */
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const args = process.argv.slice(2);
const reportFlag = args.indexOf("--report");
const reportPath = reportFlag >= 0 ? args[reportFlag + 1] : null;
if (!process.versions.bun) {
  const result = spawnSync("bun", [fileURLToPath(import.meta.url), ...args], { stdio: "inherit" });
  process.exit(result.error ? 0 : result.status ?? 1);
}
process.env.PI_DESIGNER_MODE = "1";
const extension = await import("../app/pi-extension.ts");
const commands = [];
const tools = [];
const handlers = new Map();
const api = {
  registerCommand(name, options) { commands.push({ name, options }); },
  on(name, handler) { handlers.set(name, handler); },
  registerTool(tool) { tools.push(tool.name); },
};
extension.default(api);
const tests = [];
const failures = [];
const check = (name, fn) => { try { fn(); tests.push(name); } catch (error) { failures.push({ name, reason: error instanceof Error ? error.message : String(error) }); } };
const assert = (condition, message) => { if (!condition) throw new Error(message); };
check("native commands", () => assert(JSON.stringify(commands.map(({ name }) => name)) === JSON.stringify(["designer", "designer-vibe", "designer-doctor"]), "unexpected commands"));
check("deferred tools registered", () => assert(JSON.stringify(tools) === JSON.stringify(["designer", "design_deck"]), "expected designer + design_deck"));
check("design rules always-on hook", () => assert(handlers.has("before_agent_start"), "expected before_agent_start for design rules"));
check("rules injected on every prompt", () => {
  const result = handlers.get("before_agent_start")({ prompt: "fix my database query", systemPrompt: "base" }, { cwd: process.cwd() });
  assert(result?.systemPrompt?.includes("[DESIGN RULES]"), "design rules not injected");
});
check("no session_stop or tool gates", () => assert(!handlers.has("session_stop") && !handlers.has("tool_call"), "unexpected gates"));
const report = { mode: "simulated", host: "pi", tests, skipped: [], failures, artifacts: reportPath ? [reportPath] : [] };
if (reportPath) { mkdirSync(dirname(reportPath), { recursive: true }); writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`); }
console.log(JSON.stringify(report, null, 2));
rmSync("/tmp/pi-designer-smoke", { recursive: true, force: true });
process.exit(failures.length ? 1 : 0);
