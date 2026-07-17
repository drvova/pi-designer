# pi-designer architecture

`pi-designer` is a native Pi package with one explicit composition root and
feature-sliced runtime modules. It does not contain a second host adapter,
lifecycle installer, host bridge, or tool gate.

## Feature slices

```text
app/pi-extension.ts                     composition root
entities/designer-skill/                  skill entity model
features/
  mode-activation/                      /designer + PI_DESIGNER_MODE + state
  designer-prompt/                       before_agent_start prompt composition
  designer-resources/                    resources_discover skill exposure
  vibe-preferences/                      /designer-vibe + persistent preferences
  designer-doctor/                      /designer-doctor health report
  plan-validation/                      pure plan checks
shared/
  designer-prompt.ts                     prompt text
  package-paths.ts                       package resource paths
skills/                                  package resources loaded by Pi
```

The root is the only module that receives and wires `ExtensionAPI`. Features
own one user-facing concern and depend downward on pure shared logic or the
Pi SDK. They do not import a host adapter, shell out to a CLI, or register
unsupported lifecycle events.

## Dependency direction

```text
app -> features -> entities
 |       |
 └──────> shared
```

`app` is the composition layer. `features` own user-facing behavior and accept
dependencies from the composition root when they need another feature's data.
`entities` contain only domain models. `shared` contains reusable infrastructure
and pure prompt/path primitives; it never imports upward. The release check scans
these boundaries so a feature cannot quietly become another composition root.

## Runtime flow

```text
Pi loads package
  -> app/pi-extension.ts composes feature registrations
  -> /designer toggles the current cwd
  -> resources_discover exposes skills
  -> before_agent_start injects one normalized prompt when enabled
  -> Pi continues its normal agent lifecycle
```

Prompt injection uses Pi's documented `BeforeAgentStartEvent.systemPrompt`
string and returns `BeforeAgentStartEventResult.systemPrompt`. Resource
activation returns `undefined` when disabled and `{ skillPaths }` when enabled.

## State and provider boundary

State is per working directory and persisted beneath Pi's configured agent
folder. The extension uses no provider-specific API, MCP mutation, or tool
interception. User-controlled MCP configuration stays
owned by Pi and the user.
## Verification

Run `npm test` and `npm run check:release`. The extension tests use the real
native factory with a small fake `ExtensionAPI` surface; they do not claim to
be live-model or live-host end-to-end evidence.
