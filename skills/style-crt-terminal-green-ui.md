---
name: crt-terminal-green-ui
description: Build CRT terminal green UI components (phosphor glow, scan lines, CRT curve, green text on black, blinking cursor, screen flicker, vintage boot sequence) with classic green phosphor CRT monitor aesthetics, scan line overlays, and the nostalgic computing of 1980s terminals. Trigger this skill when the user asks for CRT green UI, green phosphor display, vintage terminal, retro CRT monitor, green monochrome screen, 80s computer aesthetic, phosphor green terminal, CRT boot sequence, scan line overlay, or old-school green-on-black interface.
---

# CRT Terminal Green UI

Use this skill to design and implement green phosphor CRT monitor interfaces with authentic scan line overlays, barrel distortion curves, phosphor text glow, blinking block cursors, screen flicker animations, and vintage boot text sequences that recreate the nostalgic experience of 1980s monochrome green terminals.

## Non-Negotiable Foundations

- CRT green UI replicates the exact look of a green phosphor CRT monitor (IBM 5151, VT220, Zenith Z-19) applied to modern web interfaces. The entire visual identity revolves around green text glowing against a black screen with scan lines.
- Green-on-black is the only acceptable color scheme for primary content. Every piece of text, every border, every interactive element derives from the phosphor green palette. No other accent colors appear in normal state.
- Phosphor glow is the defining visual characteristic. Every green text element and green border must emit a soft outer glow that simulates CRT phosphor electron excitation hitting the glass face. This is not optional decoration; it is the identity of the interface.
- CRT scan lines are a mandatory overlay on every screen or container. Horizontal dark lines at regular intervals recreate the raster scan pattern of a real CRT. This overlay never blocks interaction and remains purely visual.
- The screen must appear slightly curved, as if viewed through a convex CRT glass face. A subtle barrel distortion effect via inset shadows or pseudo-elements achieves this without breaking layout.
- Blinking block cursor is present on any active input or idle terminal prompt. The cursor is a full character-width block, not a thin line. It blinks at approximately 530ms interval matching real hardware.
- Screen flicker is a subtle, periodic brightness variation that simulates the refresh rate instability of old CRTs. It applies to the entire screen container and must be extremely subtle to avoid triggering discomfort.
- Boot text sequence is the initial state of the interface: lines of green text appear one by one simulating a POST memory check, BIOS identification, and system initialization. This is an atmospheric element that runs once on load.
- The aesthetic communicates authority, precision, and vintage computing nostalgia. It is used for dashboards, monitoring tools, hacking interfaces, developer consoles, and retro-themed applications.

## Core Material Recipes

### 1) CRT Screen Container

The foundational wrapper: a CRT monitor screen with curvature, glow, and scan lines.

- Outer shell: `bg-black rounded-xl p-1 shadow-[0_0_60px_rgba(0,255,65,0.15),0_0_120px_rgba(0,255,65,0.05)]`.
- Inner screen: `relative bg-[#0a0a0a] rounded-lg overflow-hidden min-h-[400px]`.
- CRT curvature effect: `before:absolute before:inset-0 before:rounded-[8%/4%] before:shadow-[inset_0_0_80px_rgba(0,0,0,0.6),inset_0_0_200px_rgba(0,0,0,0.3)] before:pointer-events-none before:z-10`.
- Phosphor screen glow: `after:absolute after:inset-0 after:rounded-lg after:shadow-[inset_0_0_40px_rgba(0,255,65,0.03)] after:pointer-events-none after:z-10`.
- Content area: `relative z-[1] p-6 font-mono text-[#00ff41]`.

### 2) Phosphor Green Text

The signature glowing green text that defines CRT terminal aesthetics.

- Standard phosphor: `text-[#00ff41] [text-shadow:0_0_2px_rgba(0,255,65,0.9),0_0_4px_rgba(0,255,65,0.6),0_0_8px_rgba(0,255,65,0.3)]`.
- Bright phosphor (headings, emphasis): `text-[#40ff60] [text-shadow:0_0_3px_rgba(64,255,96,0.9),0_0_8px_rgba(64,255,96,0.5),0_0_16px_rgba(64,255,96,0.2)]`.
- Dim phosphor (secondary text): `text-[#00aa2a] [text-shadow:0_0_1px_rgba(0,170,42,0.6),0_0_3px_rgba(0,170,42,0.3)]`.
- Dead phosphor (disabled, off): `text-[#4a4a4a] [text-shadow:none]`.
- The three-layer text-shadow creates realistic phosphor bloom: a tight core glow, a medium halo, and a wide ambient spread.

### 3) CRT Scan Line Overlay

Horizontal raster lines that simulate the CRT electron beam scan pattern.

- Base scan lines: `absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_2px,rgba(0,0,0,0.25)_2px,rgba(0,0,0,0.25)_4px)] z-20`.
- Dense scan lines (closer to real hardware): `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_1px,rgba(0,0,0,0.2)_1px,rgba(0,0,0,0.2)_2px)]`.
- Scan line with phosphor bleed: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_2px,rgba(0,0,0,0.3)_2px,rgba(0,0,0,0.3)_3px,rgba(0,255,65,0.02)_3px,rgba(0,255,65,0.02)_4px)]`.
- Always `pointer-events-none` so interaction passes through to content beneath.
- Opacity range: `opacity-30` to `opacity-50` depending on screen brightness simulation.

### 4) Blinking Block Cursor

The classic green phosphor block cursor that blinks at hardware-accurate intervals.

- Cursor element: `inline-block w-[0.6em] h-[1.1em] bg-[#00ff41] align-baseline [text-shadow:0_0_4px_rgba(0,255,65,0.8)]`.
- Blink animation keyframes: `@keyframes cursor-blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }`.
- Apply: `animate-[cursor-blink_1.06s_step-end_infinite]` (530ms on, 530ms off — real CRT refresh rate).
- For input fields: cursor appears at end of typed text with `ml-0`.
- The cursor width matches approximately one monospace character width at the current font size.

### 5) Screen Flicker Animation

Subtle periodic brightness variation simulating CRT refresh instability.

- Flicker keyframes: `@keyframes crt-flicker { 0% { opacity: 1; } 3% { opacity: 0.97; } 6% { opacity: 1; } 42% { opacity: 0.98; } 44% { opacity: 1; } 77% { opacity: 0.96; } 80% { opacity: 1; } 92% { opacity: 0.98; } 100% { opacity: 1; } }`.
- Apply to screen container: `animate-[crt-flicker_8s_linear_infinite]`.
- Alternative subtle flicker: `@keyframes crt-subtle { 0%, 100% { opacity: 1; } 50% { opacity: 0.985; } }` with `animate-[crt-subtle_4s_ease-in-out_infinite]`.
- The flicker must be imperceptible at first glance but noticeable on sustained viewing — mimicking real CRT behavior.
- NEVER make flicker aggressive. If a user notices it instantly, it is too strong.

### 6) Boot Text Sequence

Typewriter-style text appearing line by line simulating a vintage POST boot.

- Container: `bg-[#0a0a0a] p-6 font-mono text-sm text-[#00ff41]`.
- Each line: `opacity-0 animate-[boot-line_0.1s_ease-out_forwards]` with staggered delays via `animation-delay` set per line.
- Boot line keyframes: `@keyframes boot-line { 0% { opacity: 0; transform: translateY(2px); } 100% { opacity: 1; transform: translateY(0); } }`.
- Typical boot content:
  - `BIOS Date: 04/01/1986`
  - `Memory Test: 640K OK`
  - `Display: Green Phosphor CRT`
  - `Loading system...`
  - `> _`
- Each line delays by 80-150ms from the previous line for realistic sequential appearance.
- Final line with blinking cursor indicates boot complete and system ready.

### 7) CRT Power-On Animation

The screen turning on: a bright horizontal line expanding to full screen.

- Keyframes: `@keyframes crt-power-on { 0% { transform: scaleY(0.005) scaleX(0.3); filter: brightness(10); } 30% { transform: scaleY(0.005) scaleX(1); filter: brightness(8); } 50% { transform: scaleY(0.3) scaleX(1); filter: brightness(3); } 80% { transform: scaleY(0.8) scaleX(1); filter: brightness(1.2); } 100% { transform: scaleY(1) scaleX(1); filter: brightness(1); } }`.
- Apply to screen: `animate-[crt-power-on_0.8s_cubic-bezier(0.2,0.8,0.4,1)_forwards]`.
- Background during animation: bright green line `bg-[#00ff41]` transitioning to `bg-[#0a0a0a]`.
- This animation runs once on initial render, not on every interaction.

### 8) Terminal Input with Prompt

Command-line input styled as a green CRT terminal prompt.

- Container: `flex items-center gap-2 font-mono text-sm`.
- Prompt prefix: `text-[#00ff41] [text-shadow:0_0_3px_rgba(0,255,65,0.7)] whitespace-nowrap` displaying `C:\>` or `root@host:~#`.
- Input field: `bg-transparent text-[#00ff41] caret-transparent outline-none flex-1 font-mono [text-shadow:0_0_2px_rgba(0,255,65,0.5)]` with custom block cursor rendered adjacent.
- Block cursor: `inline-block w-[0.6em] h-[1.1em] bg-[#00ff41] animate-[cursor-blink_1.06s_step-end_infinite]`.
- Focus ring: `focus:outline-none focus:ring-1 focus:ring-[#00aa2a]/50` for keyboard accessibility.

### 9) Green Data Table

Table component for displaying structured data in CRT aesthetic.

- Table container: `bg-[#0a0a0a] border border-[#00aa2a]/30 font-mono text-sm`.
- Header row: `bg-[#00ff41]/5 border-b border-[#00aa2a]/40 text-[#00ff41] [text-shadow:0_0_2px_rgba(0,255,65,0.5)]`.
- Header cells: `px-4 py-2 text-xs uppercase tracking-wider text-left font-bold`.
- Data rows: `border-b border-[#00aa2a]/10 text-[#00aa2a]`.
- Row hover: `hover:bg-[#00ff41]/5 hover:text-[#00ff41] transition-colors duration-100`.
- Cell padding: `px-4 py-2.5`.
- Alternating row dim: `even:bg-[#00ff41]/[0.02]`.

### 10) CRT Status Bar

Bottom status bar showing system status in the style of Norton Commander or midnight commander.

- Bar: `bg-[#00ff41]/10 border-t border-[#00aa2a]/30 px-4 py-1.5 flex items-center justify-between font-mono text-xs`.
- Left section: `text-[#00ff41]` with system info.
- Right section: `text-[#00aa2a]` with time, status indicators.
- Status indicators: `text-[#00ff41]` for online/active, `text-[#ffaa00]` for warnings (the only non-green allowed in alert state).
- Separator: `mx-3 text-[#00aa2a]/40` pipe character `|`.

## Color Palette System

### Primary Phosphor Green Palette

| Role | Hex | Tailwind | Purpose |
|---|---|---|---|
| Phosphor Green | `#00ff41` | `[#00ff41]` | Primary text, active elements, glow source |
| Phosphor Bright | `#40ff60` | `[#40ff60]` | Headings, emphasis, cursor, bright highlights |
| Phosphor Dim | `#00aa2a` | `[#00aa2a]` | Secondary text, borders, inactive elements |
| Phosphor Very Dim | `#006618` | `[#006618]` | Disabled states, very subtle borders |
| CRT Black | `#0a0a0a` | `[#0a0a0a]` | Screen background (never pure `#000`) |
| CRT Dark | `#050505` | `[#050505]` | Deep background behind screen bezel |
| Screen Bezel | `#1a1a1a` | `[#1a1a1a]` | Monitor housing, outer frame |
| Bezel Highlight | `#2a2a2a` | `[#2a2a2a]` | Bezel edges, raised surfaces |

### Warning and Alert Palette

| Role | Hex | Tailwind | Purpose |
|---|---|---|---|
| Amber Warning | `#ffaa00` | `[#ffaa00]` | Warning states, caution alerts (used sparingly) |
| Amber Glow | `#ffcc33` | `[#ffcc33]` | Amber text glow for emphasis |
| Red Critical | `#ff3333` | `[#ff3333]` | Critical errors, system failures only |
| Red Glow | `#ff5555` | `[#ff5555]` | Red text glow for error emphasis |

### Neutral Support Palette

| Role | Hex | Tailwind | Purpose |
|---|---|---|---|
| Paper White | `#c0c0c0` | `[#c0c0c0]` | Print simulation, paper backgrounds |
| Gray Dim | `#4a4a4a` | `[#4a4a4a]` | Dead phosphor, off-state text |
| Gray Mid | `#666666` | `[#666666]` | Scan line color, subtle dividers |
| Scan Line Dark | `#00000080` | `[#00000080]` | Scan line overlay color |
| Shadow Black | `rgba(0,0,0,0.5)` | `black/50` | CRT curvature inset shadows |

### Scan Line Overlay Colors

| Variant | Foreground | Background | Effect |
|---|---|---|---|
| Standard | `rgba(0,0,0,0.25)` | `transparent` | Classic subtle scan lines |
| Dense | `rgba(0,0,0,0.2)` | `transparent` | Closer lines, more authentic |
| Heavy | `rgba(0,0,0,0.35)` | `transparent` | Dramatic scan lines for dark scenes |
| Phosphor bleed | `rgba(0,0,0,0.3)` | `rgba(0,255,65,0.02)` | Scan lines with green tint between |

## Typography System

CRT green UI uses monospace exclusively. The only font family appearing in the interface is a monospace typeface. Hierarchy is expressed through size, weight, glow intensity, and phosphor brightness — never through font family changes.

| Element | Size | Weight | Color | Glow |
|---|---|---|---|---|
| Boot header | `text-2xl` to `text-3xl` | `font-bold` | Phosphor Bright `#40ff60` | Three-layer glow, wide spread |
| Screen title | `text-xl` to `text-2xl` | `font-bold` | Phosphor Green `#00ff41` | Two-layer glow |
| Section header | `text-base` to `text-lg` | `font-bold` | Phosphor Green `#00ff41` | Standard glow |
| Body text | `text-sm` | `font-normal` | Phosphor Green `#00ff41` | Subtle glow |
| Data value | `text-sm` | `font-mono` | Phosphor Bright `#40ff60` | Tight glow |
| Data label | `text-xs` | `font-bold uppercase` | Phosphor Dim `#00aa2a` | Minimal glow |
| Status text | `text-xs` | `font-normal` | Phosphor Dim `#00aa2a` | No glow |
| Boot sequence | `text-sm` | `font-normal` | Phosphor Green `#00ff41` | Subtle glow |
| Comment/hint | `text-xs` | `font-normal` | Gray Dim `#4a4a4a` | No glow |
| Dead text | `text-xs` | `font-normal` | Gray Dim `#4a4a4a` | No glow |

### Font Recommendations

| Font | Character | Best For |
|---|---|---|
| **VT323** | Authentic CRT pixel bitmap font | Display headings, boot text, decorative |
| **IBM Plex Mono** | Clean, technical, excellent readability | Primary body text, data display |
| **JetBrains Mono** | Modern, sharp, programming ligatures | Code display, input fields |
| **Share Tech Mono** | Military/industrial feel | Status bars, system readouts |
| **Fira Code** | Wide, clear character separation | Dense data tables |
| **Courier New** | Classic, universal availability | Fallback, maximum compatibility |
| **Cascadia Code** | Modern terminal font | Windows-flavor interfaces |
| **Source Code Pro** | Adobe, excellent hinting | Cross-platform consistency |

## Component Architecture Pattern

1. CRT monitor housing: outer bezel frame with rounded corners and subtle gradient simulating plastic or metal monitor casing.
2. CRT screen container: inner screen area with `#0a0a0a` background, CRT curvature via inset shadows, and phosphor glow ambient lighting.
3. Scan line overlay: `repeating-linear-gradient` positioned absolute over the screen content with `pointer-events-none`.
4. Screen content layer: all interactive and readable content positioned above scan lines with `relative z-[1]`.
5. Phosphor text layer: all text elements use green phosphor with multi-layer text-shadow for glow effect.
6. Blinking cursor: block cursor on active inputs or idle terminal prompts, blinking at hardware-accurate interval.
7. Status bar: bottom bar with system information in dim phosphor, always visible.
8. CRT power-on animation: initial screen turn-on effect on first render.
9. Boot sequence: typewriter text appearing line-by-line on initial load (optional, triggered by prop).
10. Screen flicker: global subtle brightness oscillation applied to the screen container.

## Interaction Rules

- Default state: bright green phosphor text on black background with active scan lines and gentle glow.
- Hover on interactive elements: `hover:bg-[#00ff41]/10 hover:text-[#40ff60]` with `transition-colors duration-100` for a phosphor brightening effect.
- Active/pressed: `active:bg-[#00ff41]/20 active:scale-[0.98]` with brief flash simulation.
- Selected items: `bg-[#00ff41]/10 text-[#40ff60] border-l-2 border-[#00ff41]` with left accent bar.
- Focus: `focus:outline-none focus:ring-1 focus:ring-[#00ff41]/50 focus:ring-offset-1 focus:ring-offset-[#0a0a0a]` visible phosphor ring.
- Disabled: `text-[#4a4a4a] cursor-not-allowed` simulating dead phosphor — no glow, no interactivity.
- Transitions: `transition-all duration-100` for fast digital response; never use slow or springy easing.
- Text selection: `::selection:bg-[#00ff41]/30 selection:text-[#40ff60]` green highlight on selected text.
- Scroll behavior: `scrollbar-thin scrollbar-track-[#0a0a0a] scrollbar-thumb-[#00aa2a]/40` for green-tinted scrollbars.

### Keyboard Shortcuts

- All interactive elements must be keyboard accessible.
- Tab order follows visual reading order.
- `Enter` / `Space` to activate buttons and links.
- `Escape` to close overlays and modals.
- `Arrow keys` for list and table navigation.
- Display shortcut hints in dim phosphor: `text-[#00aa2a] text-xs` showing `[Tab]`, `[Enter]`, `[Esc]`.

## Reusable Tailwind Tokens

- CRT screen: `bg-[#0a0a0a] rounded-lg overflow-hidden relative shadow-[inset_0_0_80px_rgba(0,0,0,0.6),inset_0_0_200px_rgba(0,0,0,0.3)]`
- CRT bezel: `bg-[#1a1a1a] rounded-xl p-1 shadow-[0_0_60px_rgba(0,255,65,0.15),0_0_120px_rgba(0,255,65,0.05)]`
- Scan lines: `absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_2px,rgba(0,0,0,0.25)_2px,rgba(0,0,0,0.25)_4px)] z-20`
- Phosphor text: `text-[#00ff41] [text-shadow:0_0_2px_rgba(0,255,65,0.9),0_0_4px_rgba(0,255,65,0.6),0_0_8px_rgba(0,255,65,0.3)]`
- Phosphor bright: `text-[#40ff60] [text-shadow:0_0_3px_rgba(64,255,96,0.9),0_0_8px_rgba(64,255,96,0.5),0_0_16px_rgba(64,255,96,0.2)]`
- Phosphor dim: `text-[#00aa2a] [text-shadow:0_0_1px_rgba(0,170,42,0.6),0_0_3px_rgba(0,170,42,0.3)]`
- Dead phosphor: `text-[#4a4a4a] [text-shadow:none]`
- Blinking cursor: `inline-block w-[0.6em] h-[1.1em] bg-[#00ff41] [text-shadow:0_0_4px_rgba(0,255,65,0.8)] animate-[cursor-blink_1.06s_step-end_infinite]`
- Status bar: `bg-[#00ff41]/10 border-t border-[#00aa2a]/30 px-4 py-1.5 flex items-center justify-between font-mono text-xs`
- Data panel: `bg-[#0a0a0a] border border-[#00aa2a]/30 rounded p-4 font-mono text-sm`
- Terminal input: `bg-transparent text-[#00ff41] caret-transparent outline-none flex-1 font-mono [text-shadow:0_0_2px_rgba(0,255,65,0.5)]`
- Green highlight row: `bg-[#00ff41]/10 text-[#40ff60] border-l-2 border-[#00ff41]`
- Disabled element: `text-[#4a4a4a] cursor-not-allowed [text-shadow:none]`
- Screen flicker: `animate-[crt-flicker_8s_linear_infinite]`
- CRT power-on: `animate-[crt-power-on_0.8s_cubic-bezier(0.2,0.8,0.4,1)_forwards]`
- Boot line stagger: `opacity-0 animate-[boot-line_0.1s_ease-out_forwards]`
- Selection highlight: `selection:bg-[#00ff41]/30 selection:text-[#40ff60]`
- Green scrollbar: `scrollbar-thin scrollbar-track-[#0a0a0a] scrollbar-thumb-[#00aa2a]/40`

## Quality Checklist (must pass)

- Every text element uses a monospace font — no sans-serif or serif anywhere in the interface.
- Background is CRT black (`#0a0a0a`) — never pure `#000000`, never white, never gray.
- All green text has phosphor glow via multi-layer `text-shadow` — no flat green text.
- CRT scan line overlay is present on every screen container — subtle, `pointer-events-none`, never blocks interaction.
- CRT curvature effect is present via inset shadows on screen containers — subtle barrel distortion, not extreme.
- Blinking block cursor appears on active inputs and idle terminal prompts — block shape, not thin line.
- Screen flicker animation is present and imperceptible at first glance — extremely subtle brightness variation.
- Phosphor glow uses three shadow layers: tight core, medium halo, wide ambient spread.
- Color usage: green for normal, bright green for emphasis, dim green for secondary, amber only for warnings, red only for critical.
- Transitions are fast (`duration-100`) — digital and crisp, never slow or springy.
- Boot sequence appears line-by-line with staggered delays on initial load (if implemented).
- CRT power-on animation plays once on initial render — screen turns on from a bright line.
- Scrollbars are green-themed, not browser default.
- Text selection uses green highlight, not default blue.
- Keyboard navigation is fully functional with visible focus states.
- All interactive elements have hover, active, and focus states in phosphor green.
- No decorative animations beyond cursor blink, scan line drift, and screen flicker.
- Screen flicker respects `prefers-reduced-motion`.

## Anti-Patterns

- Using any non-monospace font (sans-serif, serif, or decorative fonts break the terminal illusion).
- Pure black background `#000000` (use `#0a0a0a` — pure black looks flat, real CRTs emit faint light).
- Flat green text without `text-shadow` glow (green without phosphor bloom looks like a modern color, not a CRT).
- Aggressive or fast screen flicker (causes discomfort, epilepsy risk — flicker must be imperceptible at first glance).
- Scan lines that block pointer events or are too opaque (scan lines are decorative only, max `opacity-50`).
- Excessive CRT curvature that distorts layout (curvature is cosmetic — content must remain perfectly readable).
- Pure line cursor instead of block cursor (CRT terminals use block cursors, not thin I-beams).
- Mixing green and amber phosphor themes (pick one per screen; never mix).
- Using `#00ff00` instead of `#00ff41` for phosphor green (the correct P1 phosphor green is `#00ff41`, not pure green).
- Slow animations or spring easing (CRT interfaces are digital — use `step-end`, `linear`, or `ease-out` only).
- Light mode variant (CRT is inherently a light-on-dark technology; light mode is contradictory).
- Over-glowing text (phosphor glow should be 2-8px spread, not 20px neon radiance).
- Missing scan lines on any visible screen surface (every CRT display has scan lines).
- Boot sequence that loops or replays (boot runs once, then the interface is ready).
- Rounded corners on the screen itself (CRT screens are rectangular with very slight corner rounding at most).
- Status bar using non-green text (status bar uses dim green, not white or gray).

## Accessibility Considerations

- Phosphor green `#00ff41` on CRT black `#0a0a0a` provides contrast ratio of approximately 11.3:1 — well above WCAG AAA requirements.
- Ensure minimum font size of 14px (`text-sm`) for body text and 12px (`text-xs`) for labels — monospace fonts need slightly larger sizes for readability.
- Phosphor glow `text-shadow` must not cause text to appear blurry; test at all font sizes and adjust shadow spread accordingly.
- CRT scan lines are decorative: always `pointer-events-none`, never exceed `opacity-50`, and must not interfere with text legibility.
- Screen flicker animation must respect `prefers-reduced-motion: reduce` — disable or dramatically reduce flicker intensity.
- Boot text sequence must respect `prefers-reduced-motion: reduce` — show all text immediately without staggered animation.
- CRT power-on animation must respect `prefers-reduced-motion: reduce` — skip the animation and show the final screen state.
- Blinking cursor must respect `prefers-reduced-motion: reduce` — show static cursor without blink animation.
- All interactive elements must be keyboard navigable with visible focus indicators in phosphor green.
- Focus ring: `focus:ring-2 focus:ring-[#00ff41] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]` — high contrast against dark background.
- Ensure all text is selectable for screen reader compatibility despite the decorative overlay layers.
- Amber warning `#ffaa00` and red critical `#ff3333` colors must have sufficient contrast against the black background for colorblind users.
- Do not rely solely on color to convey status — pair green/amber/red with text labels or icons.
- Scan line overlay must not create visual artifacts that make text difficult to read for users with visual impairments.
- Provide a way to disable all CRT effects (scan lines, flicker, glow, curvature) for users who need a clean interface.
- Test the interface at 200% browser zoom to ensure scan lines and glow effects scale without breaking.
