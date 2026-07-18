#!/usr/bin/env node
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { extname, join } from "node:path";
import { spawnSync } from "node:child_process";
import { findSecrets, scanTree } from "../shared/security.mjs";

const root = process.cwd();
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const failures = [];
const requiredFiles = [
  "app/pi-extension.ts",
  "entities/designer-skill/index.ts",
  "entities/designer-skill/model.ts",
  "features/mode-activation/index.ts",
  "features/designer-tool/index.ts",
  "features/designer-resources/index.ts",
  "features/designer-doctor/index.ts",
  "features/plan-validation/index.ts",
  "features/vibe-preferences/index.ts",
  "features/designer-deck/index.ts",
  "features/designer-deck/types.ts",
  "features/designer-deck/server.ts",
  "features/designer-deck/client.ts",
  "features/design-rules/index.ts",
  "features/design-audit/index.ts",
  "features/designer-status/index.ts",
  "features/designer-shortcuts/index.ts",
  "features/designer-session/index.ts",
  "features/designer-flags/index.ts",
  "features/designer-naming/index.ts",
  "features/designer-renderer/index.ts",
  "features/design-validator/index.ts",
  "shared/design-rules.ts",
  "shared/package-paths.ts",
  "scripts/fix-ai-slop.mjs",
  "scripts/analyze-layout.mjs",
  "scripts/audit-data.mjs",
  "docs/extension-api.md",
  "data/ui-ux-pro-max/colors.csv",
  "data/ui-ux-pro-max/typography.csv",
  "skills/animate.md",
  "skills/design-md.md",
  "skills/designer-master.md",
  "skills/expression.md",
  "skills/review-skill.md",
];

if (pkg.name !== "pi-designer") failures.push(`Package name must be pi-designer, found ${pkg.name}`);
if (!/^\d+\.\d+\.\d+$/.test(pkg.version)) failures.push(`Invalid semver: ${pkg.version}`);
if (!pkg.pi || pkg.omp) failures.push("Package must declare only the native pi manifest");
if (JSON.stringify(pkg.pi?.extensions) !== JSON.stringify(["./app/pi-extension.ts"])) failures.push("Pi manifest must use the explicit native entrypoint");
for (const file of requiredFiles) if (!existsSync(join(root, file))) failures.push(`Missing release file: ${file}`);

const packed = spawnSync("npm", ["pack", "--dry-run", "--ignore-scripts", "--json"], { cwd: root, encoding: "utf8", timeout: 60_000, maxBuffer: 4 * 1024 * 1024 });
let packedFiles = [];
if (packed.status !== 0) failures.push(`npm pack --dry-run failed: ${packed.stderr || packed.stdout}`);
else {
  try { packedFiles = JSON.parse(packed.stdout)[0].files.map((entry) => entry.path); }
  catch (error) { failures.push(`Could not parse npm pack output: ${error instanceof Error ? error.message : String(error)}`); }
}
for (const file of requiredFiles) if (packedFiles.length > 0 && !packedFiles.includes(file)) failures.push(`Release tarball omits ${file}`);
for (const file of packedFiles) {
  if (file.includes("/__tests__/")) failures.push(`Release tarball should not contain tests: ${file}`);
  if (![".md", ".ts", ".js", ".mjs", ".json", ".yml", ".yaml", ".csv"].includes(extname(file))) continue;
  const content = readFileSync(join(root, file), "utf8");
  for (const finding of findSecrets(content)) failures.push(`${finding.label}: ${file}:${content.slice(0, finding.index).split("\n").length}`);
}
for (const finding of await scanTree(root)) failures.push(`${finding.label} in working tree: ${finding.file}:${finding.line}`);

const layerRules = [
  ["shared", /(?:^|[\\/])(?:app|entities|features)(?:[\\/])/],
  ["entities", /(?:^|[\\/])(?:app|features)(?:[\\/])/],
  ["features", /(?:^|[\\/])app(?:[\\/])/],
  ["app", /(?:^|[\\/])app(?:[\\/])/],
].map(([layer, forbidden]) => ({ layer, forbidden }));
for (const { layer, forbidden } of layerRules) {
  const directory = join(root, layer);
  if (!existsSync(directory)) continue;
  const files = [];
  const walk = (current) => {
    for (const entry of readdirSync(current, { withFileTypes: true })) {
      const full = join(current, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (/\.ts$/.test(entry.name)) files.push(full);
    }
  };
  walk(directory);
  for (const file of files) {
    const source = readFileSync(file, "utf8");
    if (layer === "app" && /registerCommand|\.on\(/.test(source) === false) failures.push(`App composition root does not register Pi API: ${file}`);
    if (layer !== "app" && forbidden.test(source)) failures.push(`FSD dependency violation in ${layer}: ${file}`);
  }
}
const runtime = readFileSync(join(root, "app/pi-extension.ts"), "utf8");
if (/\bomp\b|oh-my|OMP_|session_stop|tool_call|tool_result/.test(runtime)) failures.push("Native runtime contains a removed host or tool-gate seam");
if (failures.length > 0) { console.error("Release check failed:"); failures.forEach((failure) => console.error(`  - ${failure}`)); process.exit(1); }
console.log(`Release check passed for ${pkg.name}@${pkg.version} (${packedFiles.length} packed files)`);
