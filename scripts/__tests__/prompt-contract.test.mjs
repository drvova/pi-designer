#!/usr/bin/env node
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const extension = readFileSync("shared/designer-prompt.ts", "utf8");
const skills = readFileSync("skills/designer-master.md", "utf8");
const source = `${extension}\n${skills}`;
const checks = [
  ["native Pi package", /native Pi/i.test(source)],
  ["no skill-read gate", !/tool_call.*gate|skill-read hard gate/i.test(source)],
  ["immediate builds do not ask questions", /build immediately, do not ask preference questions/i.test(source)],
  ["approval plans stay read-only", /plan or approval, stay read-only, write no project files/i.test(source)],
  ["product facts are closed", /closed fact set/i.test(source)],
  ["simulated AI is labelled", /simulated AI interaction as live reasoning/i.test(source)],
  ["responsive and accessible implementation", /semantic HTML, visible focus, keyboard behavior, responsive layouts/i.test(source)],
  ["no secondary host coupling", !/\bOMP\b|oh-my-pi|session_stop|\.omp\//i.test(source)],
];
let failed = 0;
for (const [name, pass] of checks) {
  if (pass) console.log(`ok - ${name}`);
  else { failed += 1; console.error(`not ok - ${name}`); }
}
assert.equal(failed, 0);
console.log(`\n${checks.length} prompt contract tests passed`);
