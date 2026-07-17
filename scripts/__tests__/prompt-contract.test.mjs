#!/usr/bin/env node
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const tool = readFileSync("features/designer-tool/index.ts", "utf8");
const app = readFileSync("app/pi-extension.ts", "utf8");
const source = `${tool}\n${app}`;
const checks = [
  ["designer is a deferred tool", /registerTool\(/.test(tool)],
  ["no before_agent_start injection", !/before_agent_start/.test(source)],
  ["no resources_discover", !/resources_discover/.test(source)],
  ["lightweight prompt snippet", /promptSnippet/.test(tool)],
  ["no heavy prompt always injected", !/DESIGNER_PROMPT.*systemPrompt/.test(source)],
  ["no secondary host coupling", !/\bOMP\b|oh-my-pi|session_stop|\.omp\//i.test(source)],
];
let failed = 0;
for (const [name, pass] of checks) {
  if (pass) console.log(`ok - ${name}`);
  else { failed += 1; console.error(`not ok - ${name}`); }
}
assert.equal(failed, 0);
console.log(`\n${checks.length} prompt contract tests passed`);
