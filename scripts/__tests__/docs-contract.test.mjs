#!/usr/bin/env node
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(path, "utf8");
const readme = read("README.md");
const agents = read("AGENTS.md");
const architecture = read("architecture.md");
const api = read("docs/extension-api.md");
const pkg = JSON.parse(read("package.json"));
const checks = [
  ["package identity", pkg.name === "pi-designer"],
  ["explicit Pi entrypoint", JSON.stringify(pkg.pi.extensions) === JSON.stringify(["./app/pi-extension.ts"])],
  ["no secondary host manifest", !pkg.omp],
  ["native install docs", /pi install npm:pi-designer/.test(readme) && /pi install npm:pi-designer/.test(agents)],
  ["activation contract", /PI_DESIGNER_MODE/.test(agents) && /always available/.test(readme)],
  ["feature slices documented", /app\/pi-extension\.ts[\s\S]*entities\/designer-skill[\s\S]*features\/[\s\S]*mode-activation[\s\S]*designer-prompt[\s\S]*designer-resources/.test(architecture)],
  ["native API documented", /ExtensionAPI/.test(api) && /before_agent_start/.test(api)],
  ["unsupported hooks rejected", /does not register `session_stop`/.test(api)],
  ["no removed host claims", !/oh-my-pi|\.omp\//i.test(`${readme}\n${agents}\n${architecture}\n${api}`)],
];
let failed = 0;
for (const [name, pass] of checks) {
  if (pass) console.log(`ok - ${name}`);
  else { failed += 1; console.error(`not ok - ${name}`); }
}
assert.equal(failed, 0);
console.log(`\n${checks.length} docs contract tests passed`);
