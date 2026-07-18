#!/usr/bin/env node
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const rules = readFileSync("shared/design-rules.ts", "utf8");
const tool = readFileSync("features/designer-tool/index.ts", "utf8");
const deck = readFileSync("features/designer-deck/index.ts", "utf8");
const app = readFileSync("app/pi-extension.ts", "utf8");
const source = `${rules}\n${tool}\n${deck}\n${app}`;

// Extract the rules string length from the source
const rulesMatch = rules.match(/\[DESIGN RULES\][\s\S]*?\[\/DESIGN RULES\]/);
const rulesLen = rulesMatch ? rulesMatch[0].length : 99999;

const checks = [
  ["design rules are always-on", /\[DESIGN RULES\]/.test(rules)],
  ["rules cover shadows and radius", /One light source|concentric radius/i.test(rules)],
  ["rules cover contrast", /4\.5:1|contrast/i.test(rules)],
  ["rules cover animation", /transform and opacity|prefers-reduced-motion/i.test(rules)],
  ["rules reject AI defaults", /violet.*purple.*cyan|AI default/i.test(rules)],
  ["rules are compact (<2500 chars)", rulesLen < 2500],
  ["skills are deferred tool", /registerTool\(/.test(tool)],
  ["no resources_discover for skills", !/resources_discover/.test(source)],
  ["no secondary host coupling", !/\bOMP\b|oh-my-pi|session_stop|\.omp\//i.test(source)],
];
let failed = 0;
for (const [name, pass] of checks) {
  if (pass) console.log(`ok - ${name}`);
  else { failed += 1; console.error(`not ok - ${name}`); }
}
assert.equal(failed, 0);
console.log(`\n${checks.length} prompt contract tests passed`);
