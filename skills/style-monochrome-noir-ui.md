---
name: monochrome-noir-ui
description: Build monochrome noir UI components (pure black and white, high contrast, film grain, venetian blind shadow, noir portrait, cigarette smoke, detective desk) with strict black-and-white palette, film noir aesthetics, and dramatic contrast. Trigger this skill when the user asks for noir UI, film noir design, detective aesthetic, monochrome noir, black and white drama, noir components, cinematic dark UI, or moody high-contrast interfaces.
---

# Monochrome Noir UI

Use this skill to design and implement stark, cinematic interfaces that evoke the visual language of 1940s film noir: razor-sharp contrast, venetian blind shadows slicing across surfaces, film grain texture, and the smoky atmosphere of a rain-slicked city at midnight.

## Non-Negotiable Foundations

- Strictly black and white palette with zero chromatic color. The entire system operates in grayscale. Any hint of hue violates the noir contract.
- Maximum contrast as the primary design lever. Noir lives in the extremes: deep blacks against stark whites, with controlled midtones used sparingly for depth.
- Film grain is a texture layer, not an afterthought. Every surface carries a subtle noise overlay to simulate celluloid grain and unify the composition.
- Hard shadow lighting is mandatory. Shadows are cast by a single directional light source (imagine a desk lamp or venetian blind), creating sharp-edged geometric shadow shapes, never soft gradients.
- The venetian blind shadow is a signature motif. Horizontal stripe shadows across cards, panels, and hero sections establish the noir atmosphere instantly.
- Typography must be bold, condensed, and authoritative. Think newspaper headlines, case file headers, typewriter output. The type carries the mood when color cannot.
- Every component should feel like it belongs on a detective desk: heavy, tactile, grounded. No floating pastels, no airy gradients, no playful rounded corners.
- Noir is not just dark mode. It is a specific aesthetic language with its own rules about grain, shadow geometry, and contrast ratios that differ from generic dark themes.

## Core Material Recipes

### 1) Surface and Background

Noir surfaces are layered through extreme contrast and shadow geometry, not subtle tint shifts.

- Primary background: `bg-[#0a0a0a]` (noir black, the dominant surface).
- Secondary surface: `bg-[#141414]` for elevated panels and cards.
- Tertiary surface: `bg-[#1a1a1a]` for input wells and inset areas.
- Film grain overlay: a pseudo-element with `background-image: url("data:image/svg+xml,...")` using an SVG noise filter at `opacity-[0.03]` to `opacity-[0.06]`, covering the entire surface with `mix-blend-mode: overlay`.
- Hard shadow direction: `shadow-[8px_8px_0px_#000000]` or `shadow-[12px_12px_0px_rgba(0,0,0,0.8)]` to simulate a single hard light source from the upper-left.
- Inset depth: `shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)]` for wells, sunken areas, and recessed surfaces.

### 2) Venetian Blind Shadow

The venetian blind shadow is the defining noir visual element. It is a repeating horizontal stripe shadow cast across a surface.

- Container: `relative overflow-hidden` on any card, hero, or panel.
- Shadow layer: absolute-positioned div with `background: repeating-linear-gradient(180deg, rgba(0,0,0,0.4) 0px, rgba(0,0,0,0.4) 8px, transparent 8px, transparent 24px)`.
- Angle variation: `transform: skew-y-[-2deg]` or `skew-y-[-4deg]` to add a slight diagonal slant as if light passes through angled blinds.
- Opacity control: `opacity-40` to `opacity-70` depending on whether the shadow is decorative (low) or atmospheric (high).
- Animation (optional): `animate-[venetian_8s_ease-in-out_infinite]` shifting `background-position-y` slowly to simulate light moving through blinds.
- Do NOT apply to small components (buttons, badges, inputs). Reserve for cards, hero sections, and full-width panels.

### 3) Buttons

Noir buttons are bold, decisive, and high-contrast. They carry the weight of a stamped case file.

- Primary button: `bg-[#f5f5f5] text-[#0a0a0a] font-bold uppercase tracking-widest text-xs px-8 py-3`
  - Shadow: `shadow-[4px_4px_0px_#000000]` (hard drop shadow).
  - Hover: `hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px]` (shadow retracts on press).
  - Active: `active:shadow-none active:translate-x-[4px] active:translate-y-[4px]` (fully pressed).
  - `transition-all duration-100` for snappy, decisive feel.
- Secondary button: `bg-transparent border-2 border-[#f5f5f5] text-[#f5f5f5] font-bold uppercase tracking-widest text-xs px-8 py-3`
  - Hover: `hover:bg-[#f5f5f5] hover:text-[#0a0a0a]` (inverts on hover).
- Ghost button: `bg-transparent text-[#6a6a6a] uppercase tracking-widest text-xs hover:text-[#f5f5f5] hover:bg-white/5`
- Danger button: `bg-[#f5f5f5] text-[#0a0a0a]` with `ring-2 ring-offset-2 ring-offset-[#0a0a0a] ring-[#f5f5f5]` for focus.
- Icon-only button: `p-3 rounded-none text-[#6a6a6a] hover:text-[#f5f5f5] hover:bg-white/5`

### 4) Cards

Noir cards are heavy, grounded objects that sit on a surface like evidence on a desk.

- Standard card: `bg-[#141414] border border-[#2a2a2a] p-6 shadow-[6px_6px_0px_#000000]` (hard shadow, no blur).
- Elevated card: `bg-[#1a1a1a] border border-[#333333] p-6 shadow-[8px_8px_0px_#000000] shadow-[12px_12px_0px_rgba(0,0,0,0.3)]` (double shadow for depth).
- Noir portrait card: `bg-[#0a0a0a] p-0 overflow-hidden` with inner container `p-6 border-t-4 border-[#f5f5f5]` for the dramatic top accent line.
- Desk surface card: `bg-[#1a1a1a] border border-[#2a2a2a] p-6` with `background-image: url("data:image/svg+xml,...")` using a subtle paper/wood grain texture at `opacity-[0.04]`.
- Hover interaction: `hover:shadow-[8px_8px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200` (card lifts toward the light).
- Venetian blind card: wrap content in `relative overflow-hidden` and add the blind shadow layer (see Venetian Blind Shadow recipe above).

### 5) Inputs

Noir inputs are stark, functional, and typewriter-like.

- Standard input: `bg-[#0a0a0a] border-b-2 border-[#333333] focus:border-[#f5f5f5] text-[#f5f5f5] font-mono text-sm px-0 py-3 w-full outline-none transition-colors duration-150`
- Boxed input: `bg-[#141414] border border-[#2a2a2a] text-[#f5f5f5] font-mono text-sm px-4 py-3 focus:border-[#6a6a6a] focus:shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)] outline-none`
- Search input: `bg-[#0a0a0a] border border-[#2a2a2a] text-[#f5f5f5] font-mono text-sm px-4 py-3 pl-12 focus:border-[#6a6a6a] outline-none`
  - Search icon: absolute-positioned `text-[#6a6a6a]` magnifying glass SVG.
- Textarea: same as boxed input with `resize-none min-h-[120px]`
- Label: `text-[#6a6a6a] text-xs font-bold uppercase tracking-[0.2em] mb-2 block`
- Placeholder text: `placeholder:text-[#4a4a4a] placeholder:font-mono placeholder:italic`

### 6) Cigarette Smoke Curl

Wispy, translucent white shapes that suggest smoke rising from an unseen cigarette. Used as decorative atmospheric elements.

- Smoke SVG: an absolute-positioned inline SVG path using cubic bezier curves in white with `opacity-20` to `opacity-40`.
- Base element: `absolute w-16 h-32 pointer-events-none` positioned at the bottom-right of a card or hero.
- Color: `fill-none stroke-[#f5f5f5] stroke-[0.5px] opacity-20`
- Animation: `animate-[smoke-drift_6s_ease-in-out_infinite]` translating upward (`-translate-y-8`) and fading to `opacity-0` over the cycle.
- Smoke curl keyframes: `@keyframes smoke-drift { 0% { opacity: 0.2; transform: translateY(0) scaleX(1); } 50% { opacity: 0.1; transform: translateY(-20px) scaleX(1.3); } 100% { opacity: 0; transform: translateY(-40px) scaleX(0.8); } }`
- Limit to one smoke element per visible section. Two or more creates visual noise that undermines the noir restraint.

### 7) Detective Desk Surface

A textured surface that grounds components like objects on a real desk.

- Surface container: `bg-[#1a1a1a] relative` with a subtle noise texture layer at `opacity-[0.03]`.
- Optional wood grain: `background-image: repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.015) 60px, rgba(255,255,255,0.015) 61px)` for faint vertical grain lines.
- Edge shadow: `shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_inset_0_-1px_0_rgba(0,0,0,0.3)]` for a pressed-in desk edge.
- Components placed on the desk: use `relative z-10` with their own hard shadows to appear as objects resting on the surface.

## Color Palette System

### Noir Palette

| Name | Hex | Tailwind | Usage |
|---|---|---|---|
| Noir Black | `#0a0a0a` | `bg-[#0a0a0a]` / `text-[#0a0a0a]` | Primary background, darkest surface |
| Noir White | `#f5f5f5` | `bg-[#f5f5f5]` / `text-[#f5f5f5]` | Primary text on dark, light buttons |
| Shadow | `#1a1a1a` | `bg-[#1a1a1a]` | Secondary surfaces, card backgrounds |
| Surface | `#141414` | `bg-[#141414]` | Elevated panels, nested cards |
| Border Dark | `#2a2a2a` | `border-[#2a2a2a]` | Standard borders on dark surfaces |
| Border Light | `#333333` | `border-[#333333]` | Subtle dividers, input borders |
| Midtone | `#4a4a4a` | `text-[#4a4a4a]` / `bg-[#4a4a4a]` | Tertiary text, disabled states, placeholders |
| Gray | `#6a6a6a` | `text-[#6a6a6a]` / `bg-[#6a6a6a]` | Secondary text, labels, icons |
| Highlight | `#e0e0e0` | `text-[#e0e0e0]` / `bg-[#e0e0e0]` | Subdued highlights, secondary light text |
| Film Grain | SVG noise | `opacity-[0.03]` overlay | Texture layer on all surfaces |

### Contrast Ratios

| Pair | Ratio | WCAG |
|---|---|---|
| Noir White on Noir Black | 17.8:1 | AAA (normal and large text) |
| Gray (#6a6a6a) on Noir Black | 5.2:1 | AA (normal text) |
| Midtone (#4a4a4a) on Noir Black | 2.9:1 | Large text only |
| Noir White on Shadow (#1a1a1a) | 15.5:1 | AAA |
| Noir Black on Noir White | 17.8:1 | AAA |

### Grain Overlay CSS

```css
.noir-grain::after {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.04;
  mix-blend-mode: overlay;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-size: 256px 256px;
}
```

## Typography Recommendations

Noir typography is authoritative, condensed, and high-contrast. Think of newspaper mastheads, typewritten reports, and stamped case files.

| Element | Font | Size | Weight | Transform | Spacing |
|---|---|---|---|---|---|
| Page title | Playfair Display or system serif | `text-5xl` to `text-7xl` | `font-black` | none | `tracking-tight` |
| Section title | Oswald or condensed sans | `text-3xl` to `text-4xl` | `font-bold` | `uppercase` | `tracking-wider` |
| Card title | Oswald or condensed sans | `text-xl` to `text-2xl` | `font-bold` | `uppercase` | `tracking-wide` |
| Body | IBM Plex Mono or system mono | `text-sm` to `text-base` | `font-normal` | none | `leading-relaxed` |
| Label/eyebrow | Space Grotesk or sans | `text-xs` | `font-bold` | `uppercase` | `tracking-[0.25em]` |
| Caption | IBM Plex Mono | `text-xs` | `font-light` | none | `tracking-wide` |
| Typewriter quote | Special Elite or Courier | `text-sm` to `text-base` | `font-normal` | none | `leading-loose` |

Rules:
- Maximum two font families: one serif or condensed display for headings, one monospace for body/labels.
- All labels and categories are `uppercase` with wide letter spacing.
- Body text uses monospace to evoke typewritten case files.
- Never use script, handwriting, or playful fonts. Noir is serious.
- Letter spacing: tighten display headings (`tracking-tight`), widen labels aggressively (`tracking-[0.2em]` to `tracking-[0.3em]`).
- Line height for body: `leading-relaxed` minimum; for typewriter passages: `leading-loose`.

## Component Architecture Pattern

1. Desk surface layer (textured background establishing the noir environment).
2. Content frames (cards with hard shadows, border accents, or venetian blind overlays).
3. Atmospheric overlays (film grain texture, optional smoke elements).
4. Typographic hierarchy (bold display headings, monospace body, uppercase labels).
5. Interactive elements (high-contrast buttons with hard shadow press feedback).

The atmosphere is built from the bottom: surface, then grain, then content, then shadow geometry. Components are placed as objects ON the desk, not floating in space.

## Interaction Rules

- Default state: high contrast, clean edges, hard shadow at rest position.
- Hover state: shadow retracts (`shadow-[2px_2px_0px_#000000]`) and element shifts slightly toward the shadow origin (`translate-x-[2px] translate-y-[2px]`), simulating a press toward the light source.
- Active state: shadow disappears (`shadow-none`) and element reaches full offset (`translate-x-[4px] translate-y-[4px]`), simulating full press into the surface.
- Focus state: `focus:outline-none focus:ring-2 focus:ring-[#f5f5f5] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]` (stark white ring on noir black).
- Transitions: `transition-all duration-100` for buttons (fast, decisive), `transition-all duration-200` for cards (slightly slower, weighted).
- No bounce, spring, or elastic easing. All motion is linear or ease-out. Noir moves with purpose, not playfulness.
- Venetian blind animation: slow, ambient drift only (`8s` to `12s` cycle), never triggered by interaction.
- Smoke drift: continuous ambient loop, never tied to user action.

## Reusable Tailwind Tokens

### Noir Surface Tokens

- Noir black bg: `bg-[#0a0a0a]`
- Shadow bg: `bg-[#1a1a1a]`
- Surface bg: `bg-[#141414]`
- Noir white text: `text-[#f5f5f5]`
- Gray text: `text-[#6a6a6a]`
- Midtone text: `text-[#4a4a4a]`
- Highlight text: `text-[#e0e0e0]`
- Standard border: `border-[#2a2a2a]`
- Subtle border: `border-[#333333]`

### Noir Component Tokens

- Primary button: `bg-[#f5f5f5] text-[#0a0a0a] font-bold uppercase tracking-widest text-xs px-8 py-3 shadow-[4px_4px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-100`
- Secondary button: `bg-transparent border-2 border-[#f5f5f5] text-[#f5f5f5] font-bold uppercase tracking-widest text-xs px-8 py-3 hover:bg-[#f5f5f5] hover:text-[#0a0a0a] transition-all duration-100`
- Card: `bg-[#141414] border border-[#2a2a2a] p-6 shadow-[6px_6px_0px_#000000]`
- Input: `bg-[#0a0a0a] border-b-2 border-[#333333] focus:border-[#f5f5f5] text-[#f5f5f5] font-mono text-sm px-0 py-3 outline-none transition-colors duration-150`
- Label: `text-[#6a6a6a] text-xs font-bold uppercase tracking-[0.25em]`
- Divider: `border-t border-[#2a2a2a]`
- Badge: `bg-[#1a1a1a] border border-[#333333] text-[#6a6a6a] text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1`
- Tooltip: `bg-[#0a0a0a] border border-[#333333] text-[#f5f5f5] text-xs font-mono px-3 py-2 shadow-[4px_4px_0px_#000000]`

### Noir Typography Tokens

- Display heading: `font-serif text-5xl font-black tracking-tight text-[#f5f5f5]`
- Section heading: `font-sans text-3xl font-bold uppercase tracking-wider text-[#f5f5f5]`
- Card heading: `font-sans text-xl font-bold uppercase tracking-wide text-[#f5f5f5]`
- Body text: `font-mono text-sm text-[#f5f5f5] leading-relaxed`
- Label: `font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#6a6a6a]`
- Caption: `font-mono text-xs font-light tracking-wide text-[#4a4a4a]`

### Noir Atmosphere Tokens

- Film grain: `relative overflow-hidden` with `.noir-grain::after` pseudo-element
- Venetian blind: `absolute inset-0 pointer-events-none` with `background: repeating-linear-gradient(180deg, rgba(0,0,0,0.4) 0px, rgba(0,0,0,0.4) 8px, transparent 8px, transparent 24px)`
- Smoke curl: `absolute bottom-0 right-0 w-16 h-32 pointer-events-none opacity-20` with smoke SVG
- Hard shadow rest: `shadow-[6px_6px_0px_#000000]`
- Hard shadow hover: `shadow-[3px_3px_0px_#000000]`
- Hard shadow active: `shadow-none`
- Desk texture: `bg-[#1a1a1a]` with noise overlay and optional vertical grain lines

## Quality Checklist (must pass)

- Palette contains only grayscale values: `#0a0a0a`, `#141414`, `#1a1a1a`, `#2a2a2a`, `#333333`, `#4a4a4a`, `#6a6a6a`, `#e0e0e0`, `#f5f5f5`. No other colors.
- Film grain overlay is present on all major surfaces (cards, hero sections, full-width panels).
- Venetian blind shadow appears on at least one focal element per screen (hero, featured card, or section header).
- All shadows are hard (zero blur radius). No `shadow-lg`, `shadow-xl`, or `shadow-2xTailwind defaults.
- Buttons have hard shadow press feedback (shadow retracts on hover, disappears on active).
- Typography uses at most two families: one display/heading font, one monospace/body font.
- All labels and categories are `uppercase` with wide letter spacing.
- Contrast ratio between text and background meets WCAG AA (4.5:1 minimum) for all readable text.
- No color exists outside the grayscale spectrum. Zero chromatic values.
- Smoke elements are limited to one per visible section and do not overlap interactive elements.
- Components feel grounded and heavy, not floating or airy.
- Focus states use stark white rings on dark backgrounds with offset.

## Anti-Patterns

- Using any chromatic color (blue, red, green, even desaturated tones). Noir is strictly grayscale.
- Applying soft, blurred shadows (`shadow-lg`, `shadow-xl`). Noir shadows are hard-edged with zero blur.
- Adding gradients between colors. Noir surfaces are flat with texture, not blended.
- Using rounded corners beyond `rounded-lg`. Noir is angular and sharp. `rounded-full` on buttons is acceptable for the pressed-stamp aesthetic only.
- Layering multiple venetian blind shadows at different angles on the same element.
- Placing film grain over interactive elements (buttons, inputs) where it can interfere with readability.
- Using script, handwriting, or decorative fonts. Noir typography is authoritative and functional.
- Adding color to smoke elements. Smoke is always `#f5f5f5` at low opacity.
- Making every card a venetian blind card. The motif is powerful because it is selective.
- Using soft focus effects, gaussian blur backgrounds, or frosted glass. Noir is sharp and hard-edged.
- Animating shadows with spring or bounce easing. Noir motion is linear and deliberate.
- Filling every surface with grain. Grain is atmospheric, not mandatory on every pixel.
- Treating noir as "just dark mode." Noir has specific shadow geometry, texture, and contrast rules that differ from generic dark themes.

## Accessibility Considerations

- Noir White on Noir Black provides 17.8:1 contrast ratio, exceeding WCAG AAA requirements.
- Gray text (#6a6a6a) on Noir Black meets WCAG AA at 5.2:1. Midtone (#4a4a4a) at 2.9:1 is large-text only.
- All interactive elements must have visible focus states. Use `ring-2 ring-[#f5f5f5] ring-offset-2 ring-offset-[#0a0a0a]` for the noir-standard focus ring.
- Film grain overlays must use `pointer-events-none` and must not reduce text contrast below WCAG AA thresholds. Test grain opacity at different screen densities.
- Venetian blind shadow overlays must not obscure interactive elements. Keep shadow layers behind content using `z-index` layering.
- Cigarette smoke elements are decorative and must be hidden from screen readers with `aria-hidden="true"` and `pointer-events-none`.
- Hard shadow buttons must maintain minimum 44x44px touch targets despite their visual heaviness.
- Uppercase typography with wide letter spacing can reduce readability for users with dyslexia. Ensure body text remains in normal case and only labels/headings use uppercase.
- The stark black-and-white palette can cause eye strain for photosensitive users during extended viewing. Consider offering a slightly warmer noir variant (warm gray midtones) as an option.
- All hover state changes (shadow retraction, translation) must also be achievable via keyboard focus for non-mouse users.
- Grain texture SVG must include `role="presentation"` or be wrapped in a container with `aria-hidden="true"` to prevent screen reader interpretation.
