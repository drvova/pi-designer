# pi-designer

A native Pi UI/UX workflow with five conditional skills, evidence-aware
planning, and browser-first review.

## Install

```bash
pi install npm:pi-designer
```

For a local checkout, use Pi's package path or temporary extension loading:

```bash
pi install /absolute/path/to/pi-designer
# or
pi -e ./app/pi-extension.ts
```

Restart Pi or run `/reload` after changing an auto-discovered installation.

## Activation

```text
/designer
```

The mode is stored per project. Automation can override persisted state with
`PI_DESIGNER_MODE=1` or `PI_DESIGNER_MODE=0`. `/designer-vibe` stores persistent
project preferences, and `/designer-doctor` reports the native Pi package and
skill assets.

The extension is always available. Skills are exposed and the designer prompt
is injected on every turn — the model decides when to use them. Use `/designer`
to toggle off for a project, or set `PI_DESIGNER_MODE=0` to disable globally.

## What loads

- `designer-master`: product-design workflow and art direction
- `design-md`: visual-system contract
- `expression`: ambition and signature-moment toolkit
- `animate`: purposeful motion guidance
- `review-skill`: proportional delivery review

Skills are discovered from the installed package through Pi's documented
`resources_discover` event. No skill-read gate, tool interception, MCP mutation,
or unsupported host lifecycle emulation is used.

## Architecture

`app/pi-extension.ts` is the only Pi composition root. The `features/`
directories own mode activation, prompt injection, resource discovery,
preferences, doctor output, and pure plan validation. `shared/designer-prompt.ts` and `features/plan-validation`
contains host-independent prompt and validation logic. See
[architecture.md](architecture.md).

## Verification

```bash
npm test
npm run check:release
```

The automated extension tests exercise the native factory and documented Pi
hook result shapes. They are simulated host tests, not live-model evidence.
