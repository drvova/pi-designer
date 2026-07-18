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
  design-rules/                         before_agent_start — always-on design rules
  designer-tool/                        designer() tool — deferred skill loading
  designer-deck/                        design_deck() tool — visual presentation server
  designer-resources/                   skill catalog (380 skills)
  vibe-preferences/                     /designer-vibe + persistent preferences
  designer-doctor/                      /designer-doctor health report
  designer-status/                      setWidget + setStatus — live status panel
  designer-shortcuts/                   registerShortcut — Ctrl+D / Ctrl+Shift+D
  designer-session/                     session_start — vibe restore via appendEntry
  design-audit/                         turn_end — post-turn AI-slop check
  plan-validation/                      pure plan checks
shared/
  design-rules.ts                       compact design rules text (~1.9KB)
  package-paths.ts                       package resource paths
skills/                                  380 design skill files
```

## Two-layer architecture

```text
Layer 1: ALWAYS ON
  before_agent_start → injects DESIGN_RULES (~1.9KB, ~475 tokens)
  session_start → restores vibe from session entries
  turn_end → checks modified UI files for AI-default patterns
  agent_end → updates status widget and footer

Layer 2: DEFERRED (zero context cost until called)
  designer() tool → loads any of 380 skills on demand
  design_deck() tool → opens visual presentation server
```

## Dependency direction

```text
app -> features -> entities
 |       |
 └──────> shared
```

`app` is the composition layer. `features` own user-facing behavior and accept
dependencies from the composition root. `entities` contain only domain models.
`shared` contains reusable infrastructure and pure primitives. The release check
scans these boundaries so a feature cannot quietly become another composition root.

## Runtime flow

```text
Pi loads package
  -> app/pi-extension.ts composes feature registrations
  -> session_start restores vibe, sets status widget
  -> before_agent_start injects design rules every turn
  -> designer() loads skills on model demand (380 available)
  -> design_deck() opens visual presentation when needed
  -> turn_end audits UI files for AI-default patterns
  -> Ctrl+D toggles mode, Ctrl+Shift+D loads skills
  -> PI_DESIGNER_MODE=0 disables everything
```

## State and provider boundary

State is per working directory and persisted beneath Pi's configured agent
folder. The extension uses no provider-specific API, MCP mutation, or tool
interception. User-controlled MCP configuration stays owned by Pi and the user.

## Verification

Run `npm test` and `npm run check:release`. The extension tests use the real
native factory with a small fake `ExtensionAPI` surface; they do not claim to
be live-model or live-host end-to-end evidence.
