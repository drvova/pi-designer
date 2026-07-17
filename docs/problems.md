# pi-designer engineering notes

## Current decisions

- Pi is the only supported host and `app/pi-extension.ts` is the only
  composition root.
- Activation is explicit: `/designer` toggles the current project and
  `PI_DESIGNER_MODE=1|0` provides automation overrides.
- The package exposes five conditional skills through the documented
  `resources_discover` hook.
- Prompt injection uses Pi's `before_agent_start` system-prompt result and
  removes an existing designer marker before adding the current prompt.
- There is no tool gate, host-specific delivery backstop, MCP mutation, or
  lifecycle installer.

## Verification boundary

The extension tests and `e2e:smoke` exercise the real factory against a small
fake `ExtensionAPI`. They prove registration and hook result behavior, not a
live model run. Use Pi itself for manual model-backed comparison and inspect
saved screenshots separately from deterministic checks.
