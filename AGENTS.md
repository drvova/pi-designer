# AGENTS.md — pi-designer

## Purpose

`pi-designer` is a toggleable native `/designer` workflow for Pi. It uses five
conditional skills and the official Pi extension API.

## Prerequisites

- Node.js 20.19 or newer
- Pi
- npm and a configured model provider

## Install

```bash
pi install npm:pi-designer
```

For local work, use `pi install /absolute/path/to/pi-designer` or test the
entrypoint with `pi -e ./app/pi-extension.ts`. Do not copy the extension
into a second discovery path.

## Runtime contract

- `app/pi-extension.ts` is the sole Pi composition root.
- `/designer` toggles state for the current working directory.
- `PI_DESIGNER_MODE=1|0` overrides persisted state for automation.
- `/designer-vibe` persists project preferences and `/designer-doctor` reports health.
- `resources_discover` exposes package-relative skills only while enabled.
- `before_agent_start` injects one normalized prompt only while enabled.
- Obvious design prompts activate through a local classifier; `/designer` and `PI_DESIGNER_MODE=1|0` remain explicit overrides.
- Pi tests simulate the documented extension surface; they are not live-model E2E proof.

## Architecture rules

Keep feature ownership in `features/` and pure shared logic in `shared/`.
`app/pi-extension.ts` wires features and is the only place that composes the
Pi API. Use Pi's exported `ExtensionAPI`, `ExtensionContext`, and
`ExtensionCommandContext` types instead of structural host facsimiles.

FSD dependency direction is mandatory: `app -> features -> entities`, with
`shared` usable only as a downward dependency. Features must not import sibling
features; compose cross-feature dependencies in `app/pi-extension.ts`.

Do not add a second host adapter, lifecycle installer, second manifest, or
compatibility layer. Do not store keys in the repository. Run `npm test` and
`npm run check:release` before release decisions.
