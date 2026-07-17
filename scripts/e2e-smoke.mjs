#!/usr/bin/env bun
/** Native Pi extension smoke check using the documented hook surface. */
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
const handlers = new Map();
const api = { registerCommand(name, options) { commands.push({ name, options }); }, on(name, handler) { handlers.set(name, handler); } };
extension.default(api);
const tests = [];
const failures = [];
const check = (name, fn) => { try { fn(); tests.push(name); } catch (error) { failures.push({ name, reason: error instanceof Error ? error.message : String(error) }); } };
const assert = (condition, message) => { if (!condition) throw new Error(message); };
check("native commands", () => assert(JSON.stringify(commands.map(({ name }) => name)) === JSON.stringify(["designer", "designer-vibe", "designer-doctor"]), "unexpected command registration"));
check("native hooks", () => assert(JSON.stringify([...handlers.keys()]) === JSON.stringify(["resources_discover", "before_agent_start"]), "unexpected hook registration"));
check("skills", () => assert(handlers.get("resources_discover")({}, { cwd: process.cwd() }).skillPaths.length === 5, "expected five skills"));
check("prompt de-duplication", () => { const first = handlers.get("before_agent_start")({ prompt: "build a page", systemPrompt: "base" }, { cwd: process.cwd() }); const second = handlers.get("before_agent_start")({ prompt: "build a page", systemPrompt: first.systemPrompt }, { cwd: process.cwd() }); assert((second.systemPrompt.match(/\[DESIGNER MODE: ACTIVE v5\]/g) || []).length === 1, "prompt stacked"); });
const report = { mode: "simulated", host: "pi", tests, skipped: [], failures, artifacts: reportPath ? [reportPath] : [] };
if (reportPath) { mkdirSync(dirname(reportPath), { recursive: true }); writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`); }
console.log(JSON.stringify(report, null, 2));
rmSync("/tmp/pi-designer-smoke", { recursive: true, force: true });
process.exit(failures.length ? 1 : 0);
