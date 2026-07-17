#!/usr/bin/env node
/** Model-backed visual review through an OpenAI-compatible vision endpoint. */
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { basename, join, resolve } from "node:path";
import { REVIEW_CATEGORIES, validateReview } from "../shared/design-review.mjs";

const args = process.argv.slice(2);
const value = (flag, fallback = "") => {
  const index = args.indexOf(flag);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};
const target = resolve(value("--target", "."));
const model = value("--model", process.env.DESIGNER_REVIEW_MODEL || "vision-model");
const baseUrl = value("--base-url", process.env.DESIGNER_REVIEW_BASE_URL || "http://localhost:1234/v1").replace(/\/$/, "");
const apiKey = process.env.DESIGNER_REVIEW_API_KEY || "";
const maxTime = Number(value("--max-time", "240"));
const screenshots = [];
const walk = (dir, depth) => {
  if (depth > 3) return;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory() && !["node_modules", "dist", ".git", "build"].includes(entry.name)) walk(full, depth + 1);
    else if (entry.isFile() && (/screenshot[^/]*\.png$/i.test(entry.name) || (/\.png$/i.test(entry.name) && /(?:^|[/\\])screenshots$/i.test(dir)))) screenshots.push(full);
  }
};
walk(target, 0);
screenshots.sort((a, b) => Number(/full/i.test(b)) - Number(/full/i.test(a)));
if (!screenshots.length) { console.error(`No screenshots found under ${target}; capture before requesting a review.`); process.exit(2); }
const readDoc = (name) => existsSync(join(target, name)) ? readFileSync(join(target, name), "utf8").slice(0, 3000) : "(absent)";
const categoryLines = Object.entries(REVIEW_CATEGORIES).map(([key, question]) => `"${key}": { "score": 0 | 1 | 2, "reason": "<grounded in what you see>" } // ${question}`).join("\n");
const systemPrompt = "You are a demanding design director reviewing a shipped page from screenshots. Score 0 = clear problem, 1 = acceptable, 2 = genuinely strong and product-specific. Reply with only JSON.";
const userText = [`Screenshots attached: ${screenshots.map(basename).join(", ")}.`, "DESIGN.md (intent):", readDoc("DESIGN.md"), "PRODUCT.md (facts):", readDoc("PRODUCT.md"), "Fill exactly this JSON shape:", `{ "review": {\n${categoryLines}\n}, "verdict": "release-passable" | "usable but not good enough" | "technically valid but visually weak" | "failed", "memorable": "<one thing>", "topFixes": ["<fix>", "<fix>", "<fix>"] }`].join("\n");
const imageParts = screenshots.slice(0, 3).map((path) => ({ type: "image_url", image_url: { url: `data:image/png;base64,${readFileSync(path).toString("base64")}` } }));
const controller = new AbortController();
const timer = setTimeout(() => controller.abort(), maxTime * 1000);
let content;
try {
  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}) },
    body: JSON.stringify({ model, temperature: 0.2, max_tokens: 1800, messages: [{ role: "system", content: systemPrompt }, { role: "user", content: [{ type: "text", text: userText }, ...imageParts] }] }),
    signal: controller.signal,
  });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${(await response.text()).slice(0, 400)}`);
  content = (await response.json())?.choices?.[0]?.message?.content || "";
} catch (error) {
  console.error(`Review request failed: ${error instanceof Error ? error.message : String(error)}`);
  process.exit(3);
} finally { clearTimeout(timer); }
let parsed;
for (let start = content.indexOf("{"); start >= 0 && !parsed; start = content.indexOf("{", start + 1)) {
  for (let end = start, depth = 0; end < content.length; end += 1) {
    if (content[end] === "{") depth += 1;
    if (content[end] === "}" && --depth === 0) { try { const candidate = JSON.parse(content.slice(start, end + 1)); if (candidate?.review) parsed = candidate; } catch {} break; }
  }
}
if (!parsed) { console.error("Reviewer produced no parseable rubric JSON."); process.exit(3); }
const validation = validateReview(parsed.review);
if (!validation.ok) { console.error(`Rubric invalid: ${validation.errors.join("; ")}`); process.exit(3); }
const reviewDocument = { reviewedAt: new Date().toISOString(), model, screenshots: screenshots.slice(0, 3).map(basename), review: parsed.review, verdict: parsed.verdict || null, memorable: parsed.memorable || null, topFixes: Array.isArray(parsed.topFixes) ? parsed.topFixes.slice(0, 5) : [] };
writeFileSync(join(target, "design-review.json"), `${JSON.stringify(reviewDocument, null, 2)}\n`);
if (args.includes("--json")) console.log(JSON.stringify(reviewDocument, null, 2));
else console.log(`Review written to ${join(target, "design-review.json")}`);
