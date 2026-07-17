# Native Pi extension API

`pi-designer` is a native Pi package. Its explicit entrypoint is
`app/pi-extension.ts`, which receives Pi's `ExtensionAPI` from
`@mariozechner/pi-coding-agent`.

## Composition root

```ts
import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

export default function designerExtension(pi: ExtensionAPI): void {
  // register commands and compose feature handlers here
}
```

The composition root owns registration. Feature modules return handlers or
registration functions and do not invent a second host interface.

## Supported hooks

| Pi hook | Purpose |
| --- | --- |
| `resources_discover` | expose the five package-relative skills when mode is enabled |
| `before_agent_start` | replace an earlier designer marker and inject one current prompt |

The extension intentionally does not register `session_stop`, `tool_call`, or
`tool_result`. Pi's public lifecycle uses `session_shutdown`, and this package
has no need to intercept tools or create an artificial delivery gate.

## Activation

- Obvious design prompts activate through a local classifier before the agent starts.
- `/designer` toggles state for the current working directory.
- `PI_DESIGNER_MODE=1` forces the workflow on.
- `PI_DESIGNER_MODE=0` forces it off.
- State is stored under Pi's configured agent directory in
  `designer-state.json`.

`/designer-vibe` stores project preferences in `designer-vibes.json`, and
`/designer-doctor` renders a native Pi health report through
`ctx.ui.setEditorText()`.
