---
name: mysterious-shadow-ui
description: Build mysterious shadow UI components (deep shadow layers, dim light source, hidden form, fog wisps, candle flame, iron gate, secret passage) with dark shadow gradients, hidden elements, and the suspenseful atmosphere of mystery. Trigger this skill when the user asks for mysterious UI, shadow design, dark mystery components, suspenseful interfaces, gothic shadow layers, hidden elements, fog effects, candle-lit interfaces, iron gate aesthetics, secret passage layouts, or atmospheric dark design.
---

# Mysterious Shadow UI

Use this skill to design and implement suspenseful, atmosphere-rich interfaces where deep shadow layers, dim warm light, translucent fog, and hidden silhouettes create a sense of mystery and discovery. Every element is partially obscured, revealed only by the faintest glow, inviting the user to peer closer into the darkness.

## Non-Negotiable Foundations

- Shadow depth is the primary design tool. Layers of progressive darkness create spatial depth, mystery, and a sense of peering into hidden space.
- A dim, warm light source is the only brightness. A small candle flame or amber glow pierces the darkness, drawing the eye and anchoring composition.
- Hidden forms exist as barely-visible silhouettes. Shapes emerge from shadow only when the light catches them, never fully revealed.
- Fog wisps provide atmospheric depth. Translucent, flowing shapes drift across surfaces, creating layered distance and soft obstruction.
- The palette is overwhelmingly dark. Light is rare, warm, and precious. Color beyond amber/warm tones appears only as subtle undertones in the darkness.
- Opacity and blur are primary tools. `opacity-10` through `opacity-40` and `blur-sm` through `blur-xl` define visibility, not color contrast.

## Core Material Recipes

### 1) Deep Shadow Layers

Progressive dark gradient layers create the sensation of peering into depth. Stack multiple shadow surfaces from lightest-dark to deepest-dark.

- Deepest background: `bg-[#050510]` (the void beyond all shadow).
- Primary shadow surface: `bg-[#0a0a0a]` with `shadow-[inset_0_0_80px_rgba(0,0,0,0.8)]`.
- Mid shadow layer: `bg-[#1a1a2a]` with `shadow-[0_0_60px_rgba(10,10,20,0.6)]`.
- Near shadow surface: `bg-[#2a2a3a]` with `shadow-[0_4px_30px_rgba(0,0,0,0.4)]`.
- Progressive stacking: Each layer is slightly lighter than the one behind it, creating a parallax depth illusion.
  - Layer 1 (deepest): `bg-[#050510] absolute inset-0`
  - Layer 2: `bg-[#0a0a0a]/90 absolute inset-4 rounded-3xl`
  - Layer 3: `bg-[#1a1a2a]/80 absolute inset-8 rounded-2xl`
  - Layer 4 (closest): `bg-[#2a2a3a]/70 relative rounded-xl p-8`
- Vignette overlay: `bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,16,0.8)_70%,rgba(5,5,16,1)_100%)]`
- Shadow inset depth: `shadow-[inset_0_2px_20px_rgba(0,0,0,0.6),inset_0_-1px_10px_rgba(255,204,102,0.03)]`

### 2) Dim Light Source

A small warm glow in the darkness serves as the focal anchor. It illuminates nearby surfaces faintly while leaving everything else in shadow.

- Candle glow ambient: `bg-[radial-gradient(circle_at_50%_40%,rgba(255,170,68,0.15)_0%,rgba(255,170,68,0.05)_30%,transparent_60%)]`
- Warm light pool on surface: `bg-[radial-gradient(ellipse_at_center,rgba(255,204,102,0.12)_0%,transparent_70%)]`
- Light falloff on content: `text-[#ffcc66] drop-shadow-[0_0_8px_rgba(255,204,102,0.3)]`
- Ember scatter (small warm particles): `bg-[#ffcc66] rounded-full w-1 h-1 opacity-20 blur-[1px]` scattered at random positions.
- Light cone from above: `bg-[conic-gradient(from_250deg_at_50%_0%,transparent_0deg,rgba(255,170,68,0.08)_10deg,transparent_20deg)]`
- Ambient warmth on nearby surfaces: `shadow-[0_0_40px_rgba(255,170,68,0.06)]`

### 3) Hidden Form Silhouettes

Barely-visible shapes emerge from the shadow background. They are present but not fully defined, requiring the user to look carefully.

- Hidden card: `bg-[#1a1a2a] border border-white/[0.03] rounded-2xl p-6 shadow-[0_0_40px_rgba(0,0,0,0.5)]`
- Silhouette text: `text-white/[0.06]` for barely visible labels that emerge on hover.
- Ghost icon: `text-white/[0.08] opacity-40 blur-[0.5px]` to suggest a form without showing it.
- Reveal on hover: `opacity-[0.04] hover:opacity-60 transition-opacity duration-700` for elements that slowly emerge from darkness.
- Hidden border trace: `border border-white/[0.02]` that becomes `hover:border-white/10` to reveal structure.
- Shadow figure card: `bg-gradient-to-b from-[#1a1a2a]/40 to-[#0a0a0a]/80 rounded-2xl p-8 backdrop-blur-sm`
- Peering effect (content slightly more visible on hover): `brightness-[0.3] hover:brightness-[0.6] transition-all duration-1000`

### 4) Fog Wisps

Translucent flowing shapes that drift across surfaces, creating atmospheric depth and soft visual obstruction.

- Fog layer 1: `bg-white/[0.02] blur-xl rounded-full w-96 h-32` positioned absolutely.
- Fog layer 2: `bg-[#1a1a2a]/10 blur-2xl rounded-full w-[500px] h-40` for deeper atmospheric fog.
- Fog drift animation: `animate-[fogDrift_20s_ease-in-out_infinite]` with CSS keyframes translating horizontally.
- Fog wisp (thin): `bg-gradient-to-r from-transparent via-white/[0.03] to-transparent h-px w-full` for fine horizontal wisps.
- Ground fog: `bg-gradient-to-t from-white/[0.04] via-white/[0.02] to-transparent h-24` at the base of content areas.
- Fog opacity layers:
  - Far fog: `opacity-[0.03]` (barely perceptible).
  - Mid fog: `opacity-[0.06]` (visible obstruction).
  - Near fog: `opacity-[0.1]` (clear atmospheric element).
- Animated fog bank: `bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)] animate-[fogPulse_8s_ease-in-out_infinite]`
- Fog veil over content: `backdrop-blur-[2px] bg-white/[0.02]` layered on top of readable content.

### 5) Candle Flame

A small warm flickering light that serves as the primary illumination point and emotional anchor.

- Flame body: `bg-gradient-to-t from-[#ffaa44] via-[#ffcc66] to-[#ffeeaa] rounded-[50%_50%_50%_50%/60%_60%_40%_40%] w-3 h-5`
- Flame glow: `shadow-[0_0_12px_rgba(255,170,68,0.6),0_0_30px_rgba(255,204,102,0.3),0_0_60px_rgba(255,170,68,0.15)]`
- Flame flicker animation: `animate-[flicker_3s_ease-in-out_infinite_alternate]` with subtle scale and opacity changes.
- Candle base: `bg-[#3a2a1a] rounded-b-lg w-4 h-6` beneath the flame.
- Wax drip: `bg-[#4a3a2a] rounded-full w-1.5 h-3` on the side of the candle body.
- Warm light radius: Surrounding 80px radius gets `bg-[radial-gradient(circle,rgba(255,170,68,0.08)_0%,transparent_100%)]`.
- Flame inner glow: `bg-[radial-gradient(circle,rgba(255,238,170,0.4)_0%,rgba(255,170,68,0.1)_50%,transparent_100%)] w-2 h-3`
- Tealight variant: `bg-[radial-gradient(circle,rgba(255,204,102,0.5)_30%,rgba(255,170,68,0.2)_60%,transparent_100%)] w-2 h-2 rounded-full`
- Ambient warmth on nearby text: `text-[#ffcc66]/90` for illuminated content near the flame.

### 6) Iron Gate Silhouette

Ornate vertical bars that frame content, suggest barriers, and create rhythmic shadow patterns.

- Gate bar: `bg-[#2a2a2a] w-1.5 h-full rounded-sm` repeated with `gap-6` to `gap-8`.
- Gate frame: `bg-[#2a2a2a] h-1.5 w-full` (top and bottom rails).
- Gate arch top: `rounded-t-[50%] border-t border-l border-r border-[#2a2a2a]` for arched gate tops.
- Gate finial (top decoration): `bg-[#2a2a2a] w-3 h-3 rotate-45` at the top of each bar.
- Gate scrollwork: `border border-[#2a2a2a]/60 rounded-full w-8 h-4` between bars for ornamental details.
- Gate shadow on ground: `bg-gradient-to-b from-[#0a0a0a] to-transparent h-16 opacity-80` at the base.
- Gate silhouette opacity: `opacity-30` to `opacity-50` so bars appear as shadows rather than solid objects.
- Gate behind content: `absolute inset-0 pointer-events-none opacity-20` so content reads over the gate pattern.
- Rusted iron texture: `bg-[#2a2a2a] bg-[url('data:image/svg+xml,...')]` with a subtle noise overlay via CSS.

### 7) Secret Passage Opening

A dark doorway or portal that suggests depth beyond the visible surface, inviting exploration.

- Passage opening: `bg-[#050510] rounded-t-[40%] w-48 h-64 mx-auto` for a tall dark arch.
- Passage frame: `border-2 border-[#2a2a2a] rounded-t-[40%] p-px` surrounding the opening.
- Depth gradient inside passage: `bg-gradient-to-b from-[#050510] via-[#0a0a1a] to-[#000005]` inside the arch.
- Passage light leak at threshold: `bg-gradient-to-t from-[#050510] via-[#0a0a1a] to-[rgba(255,170,68,0.05)]` at the bottom edge.
- Fog spilling from passage: `bg-white/[0.03] blur-xl rounded-full h-32 w-64` positioned at the passage base.
- Passage reveal animation: `opacity-0 hover:opacity-100 transition-opacity duration-1000` for the inner depth gradient.
- Threshold line: `bg-[#2a2a2a] h-px w-full` at the bottom of the passage.
- Passage glow edge: `shadow-[inset_0_0_30px_rgba(255,170,68,0.04)]` on the inner frame to suggest distant light.
- Suggestion of steps: `bg-[#1a1a2a] h-2 w-full opacity-20` repeated downward with increasing opacity.

## Color Palette System

### Primary Palette

| Name | Hex | Tailwind | Usage |
|---|---|---|---|
| Shadow Deep | `#0a0a0a` | `bg-[#0a0a0a]` | Primary background, deepest shadow layer |
| Shadow Mid | `#1a1a2a` | `bg-[#1a1a2a]` | Secondary surfaces, cards in shadow |
| Shadow Near | `#2a2a3a` | `bg-[#2a2a3a]` | Closest surfaces, hover states, borders |
| Void | `#050510` | `bg-[#050510]` | Deepest recesses, passage interiors |
| Iron Dark | `#2a2a2a` | `bg-[#2a2a2a]` | Gate bars, structural elements |
| Mystery Purple | `#2a1a3a` | `bg-[#2a1a3a]` | Subtle color undertone in shadow layers |

### Accent and Light Palette

| Name | Hex | Tailwind | Usage |
|---|---|---|---|
| Dim Light Warm | `#ffcc66` | `text-[#ffcc66]` | Primary warm light, illuminated text |
| Candle Amber | `#ffaa44` | `bg-[#ffaa44]` | Flame body, warm accent elements |
| Flame Bright | `#ffeeaa` | `bg-[#ffeeaa]` | Flame highlight, brightest point |
| Fog Gray | `rgba(180,180,190,0.06)` | `bg-white/[0.04]` | Translucent fog wisps |
| Fog Warm | `rgba(255,204,102,0.03)` | `bg-[#ffcc66]/[0.03]` | Warm-toned fog near light sources |

### Text Colors

| Name | Tailwind | Usage |
|---|---|---|
| Illuminated | `text-[#ffcc66]` | Text near light source, primary headings |
| Dim | `text-white/40` | Secondary text in shadow |
| Ghost | `text-white/[0.08]` | Hidden text, barely visible labels |
| Ember | `text-[#ffaa44]` | Warm accent text, links near flame |
| Faint | `text-white/10` | Tertiary text, captions in deep shadow |

### Background Tints

| Name | Tailwind | Usage |
|---|---|---|
| Shadow Gradient L1 | `bg-gradient-to-b from-[#1a1a2a] to-[#0a0a0a]` | Card backgrounds |
| Shadow Gradient L2 | `bg-gradient-to-b from-[#0a0a0a] to-[#050510]` | Deep surface transitions |
| Warm Undertone | `bg-[radial-gradient(circle,rgba(255,170,68,0.06)_0%,transparent_70%)]` | Ambient warmth near light |
| Cool Undertone | `bg-[radial-gradient(circle,rgba(42,26,58,0.15)_0%,transparent_70%)]` | Mysterious purple haze |

## Spacing System

Mysterious shadow UI uses moderate spacing. Too much whitespace breaks the sense of enclosure; too little collapses the atmosphere.

- Base unit: `4px` (Tailwind `1`).
- Section spacing: `space-y-12` to `space-y-16` between major sections.
- Card internal padding: `p-6` to `p-8`.
- Element spacing within cards: `gap-4` to `gap-6`.
- Page margins: `px-6` (mobile) to `px-10` (desktop), max-width `max-w-5xl`.
- Fog element spacing: `gap-16` to `gap-24` (fog needs room to breathe).
- Gate bar spacing: `gap-6` to `gap-8` between iron bars.
- Shadow layer spacing: `inset-4`, `inset-8`, `inset-12` for progressive nesting.

## Typography Hierarchy

Typography in mysterious shadow UI is sparse, warm-toned near light sources, and ghostly in the shadows. Headings glow faintly; body text is dim.

| Element | Size | Weight | Color | Effects |
|---|---|---|---|---|
| Page title | `text-4xl` to `text-5xl` | `font-bold` | `text-[#ffcc66]` | `drop-shadow-[0_0_12px_rgba(255,204,102,0.4)]` |
| Section title | `text-2xl` to `text-3xl` | `font-semibold` | `text-[#ffcc66]/80` | `drop-shadow-[0_0_8px_rgba(255,204,102,0.2)]` |
| Card title | `text-lg` to `text-xl` | `font-semibold` | `text-white/50` | None (dim, not illuminated) |
| Body | `text-base` | `font-normal` | `text-white/30` | `leading-relaxed` |
| Hidden label | `text-sm` | `font-medium` | `text-white/[0.06]` | `blur-[0.5px]` (barely visible) |
| Caption | `text-xs` | `font-normal` | `text-white/10` | None |

Rules:
- Use one serif or serif-like font for headings (optional, adds gothic character).
- Maximum two font families total.
- Illuminated text (near candle/light) uses warm amber tones; distant text uses cool white at low opacity.
- Line height for body: `leading-relaxed` minimum.
- Headings: `tracking-wide` to add an inscribed, monumental feel.
- Labels and captions: `tracking-wider` for an engraved quality.

## Component Architecture Pattern

1. Deep shadow background (layered gradient surfaces).
2. Atmospheric layer (fog wisps, ambient light gradient).
3. Content surface (card or panel emerging from shadow).
4. Illumination point (candle flame or warm glow anchoring the layout).
5. Hidden elements (silhouettes, ghost borders, barely-visible text).
6. Structural frames (iron gate bars, passage arches, border traces).
7. Vignette overlay (radial gradient closing the edges into darkness).

The composition is always: darkness first, light second, content third. The user should feel they are discovering content in a dark space, not reading a lit page.

## Interaction Rules

- Default state: hidden or deeply dim. Elements exist at `opacity-[0.04]` to `opacity-30`.
- Hover state: elements slowly emerge. `hover:opacity-60 transition-opacity duration-700`. The reveal is gradual, not instant.
- Active state: full visibility for the hovered element. `opacity-80` with `text-[#ffcc66]` illumination.
- Focus state: `focus:ring-1 focus:ring-[#ffcc66]/30 focus:outline-none` (a faint warm ring, barely visible).
- Candle flicker: `animate-[flicker_3s_ease-in-out_infinite_alternate]` with keyframes that vary `opacity` between `0.8` and `1` and `scale` between `0.98` and `1.02`.
- Fog drift: `animate-[fogDrift_20s_ease-in-out_infinite]` with keyframes translating `translateX` from `-20px` to `20px`.
- Gate shadow sway: `animate-[gateShadow_12s_ease-in-out_infinite_alternate]` shifting gate shadow position subtly.
- Passage reveal: On hover, inner depth gradient fades in over `duration-1000` to suggest entering the passage.
- No instant transitions. All motion is slow (`duration-500` to `duration-1000`) to maintain the contemplative, suspenseful pace.
- Scroll-triggered fog: New fog wisps fade in as the user scrolls, creating progressive atmospheric depth.

## Reusable Tailwind Tokens

Core backgrounds:

- Void: `bg-[#050510]`
- Deep shadow: `bg-[#0a0a0a]`
- Mid shadow: `bg-[#1a1a2a]`
- Near shadow: `bg-[#2a2a3a]`
- Iron: `bg-[#2a2a2a]`
- Mystery undertone: `bg-[#2a1a3a]`

Light and accent:

- Candle glow: `bg-[#ffcc66]`
- Flame body: `bg-[#ffaa44]`
- Flame bright: `bg-[#ffeeaa]`
- Warm ambient: `bg-[radial-gradient(circle,rgba(255,170,68,0.1)_0%,transparent_70%)]`

Text tokens:

- Illuminated text: `text-[#ffcc66]`
- Dim text: `text-white/40`
- Ghost text: `text-white/[0.08]`
- Ember text: `text-[#ffaa44]`
- Faint text: `text-white/10`

Surface patterns:

- Shadow card: `bg-[#1a1a2a] border border-white/[0.03] rounded-2xl p-6 shadow-[0_0_40px_rgba(0,0,0,0.5)]`
- Hidden card: `bg-[#0a0a0a] border border-white/[0.02] rounded-2xl p-6 opacity-80`
- Fog wisp: `bg-white/[0.03] blur-xl rounded-full w-96 h-32`
- Gate bar: `bg-[#2a2a2a] w-1.5 h-full rounded-sm opacity-40`
- Passage opening: `bg-[#050510] rounded-t-[40%] w-48 h-64`

Atmosphere overlays:

- Vignette: `bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,16,0.8)_70%,rgba(5,5,16,1)_100%)]`
- Warm ambient: `bg-[radial-gradient(circle,rgba(255,170,68,0.08)_0%,transparent_60%)]`
- Fog veil: `backdrop-blur-[2px] bg-white/[0.02]`

Animation tokens:

- Candle flicker: `animate-[flicker_3s_ease-in-out_infinite_alternate]`
- Fog drift: `animate-[fogDrift_20s_ease-in-out_infinite]`
- Slow reveal: `transition-opacity duration-700`
- Deep reveal: `transition-opacity duration-1000`

## Quality Checklist (must pass)

- The dominant color is deep shadow (at least 80% of the visible area is `#0a0a0a` or darker).
- Warm light sources are small and rare (never more than 15% of the viewport is illuminated).
- Hidden elements are genuinely hard to see at first glance (opacity below 0.10 for ghost elements).
- Fog wisps are translucent and do not obstruct readable content.
- Candle flame has a visible glow radius that affects nearby surfaces.
- Iron gate elements are silhouette-weight, never solid and prominent.
- Secret passages have visible depth (inner gradient darker than the surrounding surface).
- All transitions are slow and smooth (no instant opacity changes, minimum `duration-500`).
- Typography near light sources uses warm amber tones; typography in shadow uses cool low-opacity white.
- The vignette closes edges into darkness on all sides.
- No bright white backgrounds exist anywhere in the interface.
- Atmospheric elements (fog, glow, flicker) animate subtly without distraction.
- The overall impression is discovery: the user feels they are finding content in darkness, not reading a lit page.

## Anti-Patterns

- Bright backgrounds or white surfaces (destroys the shadow atmosphere entirely).
- Instant hover reveals (the mystery requires gradual emergence, not a switch flip).
- Over-illuminating the page (the light must be rare and precious; too much warmth becomes a lantern, not a candle).
- Using flat solid colors without gradients (mysterious shadow requires layered depth, not flat planes).
- Visible hard edges on fog wisps (fog must be soft and blurred, never sharp).
- Making all content fully visible by default (hidden elements must be genuinely obscured).
- Using cool blue or cyan as a primary light color (mysterious shadow uses warm amber exclusively).
- Dense, tight text (mysterious shadow UI needs breathing room for atmosphere).
- Multiple bright focal points (there should be one candle, one light source, one anchor).
- Neon or saturated colors (everything is desaturated and dim).
- Fast animations (mysterious shadow moves slowly, deliberately, like fog drifting).
- Transparent or translucent backgrounds without blur (translucency without blur reads as a mistake, not atmosphere).
- Using drop shadows on illuminated text that are darker than the background (the glow is always warm, never dark).

## Typography Recommendations

- Serif heading (optional, adds gothic character): Crimson Text, EB Garamond, Playfair Display.
- Sans-serif body: Inter at low opacity, Source Sans 3, IBM Plex Sans.
- Monospace (for inscriptions, labels): JetBrains Mono, Fira Code.
- Display/ornamental (sparingly, for gate inscriptions or passage headers): Uncial Antiqua, MedievalSharp.
- Avoid rounded, playful, or geometric sans-serif fonts (they break the mysterious tone).

## Accessibility Considerations

- Despite the dark aesthetic, all readable text must meet WCAG AA contrast against its immediate background. Use `text-[#ffcc66]` (contrast ratio ~8:1 against `#0a0a0a`) for primary text and `text-white/40` at minimum for secondary text.
- Ghost text (`text-white/[0.08]`) is decorative only and must never contain critical information. Provide accessible alternatives.
- Focus states use `focus:ring-1 focus:ring-[#ffcc66]/30` which is subtle but visible against dark backgrounds. Verify the ring is perceptible.
- Fog wisps and atmospheric overlays must not obscure interactive elements. Use `pointer-events-none` on all decorative overlays.
- Candle flicker animations must respect `prefers-reduced-motion`: disable `flicker` and `fogDrift` animations when the user requests reduced motion.
- Ensure all interactive elements (buttons, links, inputs) have a minimum touch target of 44x44px even when visually dimmed.
- The dark palette benefits users with light sensitivity but may challenge users with low vision. Always provide a way to increase text visibility (e.g., a high-contrast mode or text size controls).
- Gate and passage decorative elements must have `aria-hidden="true"` so screen readers skip non-functional ornamentation.
- Hidden hover-reveal content must have a non-hover alternative (e.g., visible on focus or via a toggle) for keyboard-only and touch users.
