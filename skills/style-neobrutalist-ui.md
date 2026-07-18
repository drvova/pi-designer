---
name: neobrutalist-ui
description: Build neobrutalist UI components (bold colors, thick black borders, hard offset shadows, exaggerated proportions, playful energy) with stamped shapes, punchy interactions, and high-contrast visual energy. Trigger this skill when the user asks for neobrutalism, neo-brutalism, thick borders with hard shadows, bold stamped UI, or playful brutalist design.
---

# Neobrutalist UI

Use this skill to design and implement bold, playful interfaces with thick black borders, hard offset shadows, vibrant colors, and exaggerated interactive feedback.

## Non-Negotiable Foundations

- Every interactive element has a thick black border (`border-2` to `border-4`) and a hard offset shadow with zero blur (`shadow-[Xpx_Ypx_0_0_#000]`).
- Colors are bold, saturated, and bright. Pastels are acceptable for backgrounds but interactive elements pop with vibrancy.
- Borders and shadows are always pure black (`#000000`). This is non-negotiable for the stamped look.
- Corners are either sharp (`rounded-none`) or uniformly rounded (`rounded-xl` to `rounded-2xl`). Commit to one across the interface.
- The signature interaction is the "stamp press": on hover/active, the element translates toward its shadow, then presses flat.

## Core Material Recipes

### 1) Neobrutalist Card (the foundation)

The default stamped card with thick border and hard shadow.

- Background: a bold solid color (e.g., `bg-[#ffbe0b]`).
- Border: `border-2 border-black`.
- Shadow: `shadow-[6px_6px_0px_0px_#000000]`.
- Full one-liner:
  - `bg-[#ffbe0b] border-2 border-black rounded-xl shadow-[6px_6px_0px_0px_#000000] p-6`

### 2) Neobrutalist Button

The signature interactive element with stamp-press hover.

- Primary: `bg-[#ff006e] text-white font-bold border-2 border-black rounded-xl shadow-[6px_6px_0px_0px_#000000] px-6 py-3 hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#000000] transition-all`
- Secondary: `bg-white text-black font-bold border-2 border-black rounded-xl shadow-[6px_6px_0px_0px_#000000] px-6 py-3 hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#000000] transition-all`
- Accent: `bg-[#3a86ff] text-white font-bold border-2 border-black rounded-xl shadow-[6px_6px_0px_0px_#000000] px-6 py-3 hover:translate-x-1 hover:translate-y-1 hover:orphism-shadow transition-all`

### 3) Neobrutalist Input

Inputs with thick borders and harsh focus states.

- Standard: `bg-white border-2 border-black rounded-lg px-4 py-2 font-medium outline-none focus:shadow-[4px_4px_0px_0px_#000000] focus:translate-x-[-2px] focus:translate-y-[-2px] transition-all placeholder:text-gray-400`
- Filled: `bg-[#ffbe0b] border-2 border-black rounded-lg px-4 py-2 font-medium outline-none`

### 4) Neobrutalist Toggle/Switch

- Track (off): `bg-gray-200 border-2 border-black rounded-full w-14 h-8 p-1`
- Track (on): `bg-[#06d6a0] border-2 border-black rounded-full w-14 h-8 p-1`
- Knob: `bg-white border-2 border-black rounded-full w-5 h-5 transition-transform` (translate-x-5 when on)

## Shadow Offset Scale

The hard offset shadow is the core of neobrutalism. Scale it by element importance:

| Element Type | Offset | Example |
|---|---|---|
| Small (buttons, inputs) | 4-6px | `shadow-[4px_4px_0px_0px_#000000]` |
| Medium (cards, panels) | 6-8px | `shadow-[6px_6px_0px_0px_#000000]` |
| Large (hero, modals) | 8-12px | `shadow-[8px_8px_0px_0px_#000000]` |
| Hero/focal | 12-16px | `shadow-[12px_12px_0px_0px_#000000]` |

## Color Palette System

Neobrutalism uses bright, saturated, punchy colors. These are validated combinations:

### Core Neobrutalist Palette

- `#ff006e` (hot pink)
- `#8338ec` (electric purple)
- `#3a86ff` (azure blue)
- `#ffbe0b` (vivid yellow)
- `#06d6a0` (spring green)
- `#fb5607` (orange-red)
- `#000000` (black — borders and shadows)
- `#ffffff` (white)

### Assignment Rules

- Borders: always `#000000`.
- Shadows: always `#000000`.
- Backgrounds: any color from the palette.
- Text: `text-white` on dark/saturated backgrounds, `text-black` on yellow/white/light backgrounds.
- One dominant background color per card/section, with contrasting accent elements.

## Pattern and Accent Recipes

Neobrustalism often includes playful decorative patterns:

- Grid pattern background: `bg-[linear-gradient(#00000008_1px,transparent_1px),linear-gradient(90deg,#00000008_1px,transparent_1px)] bg-[size:24px_24px]`
- Dot pattern: `bg-[radial-gradient(#00000015_1px,0,transparent)] bg-[size:16px_16px]`
- Stripes: `bg-[repeating-linear-gradient(45deg,#ffbe0b,#ffbe0b_12px,#000_12px,#000_14px)]`
- Checkerboard: `bg-[conic-gradient(#000_90deg,#fff_90deg_180deg,#000_180deg_270deg,#fff_270deg)] bg-[size:24px_24px]`
- Star/confetti decorations: scattered absolutely positioned SVG stars or triangles in palette colors.

## Component Architecture Pattern

1. Background scene (solid bold color or subtle pattern).
2. Content cards (thick borders, hard shadows).
3. Interactive elements (buttons, inputs with stamp-press interactions).
4. Typography hierarchy (bold, heavy weights).
5. Decorative accents (stars, squiggles, badges — optional but encouraged).

The composition is playful but structured. Cards float on bold backgrounds, each stamped with black ink.

## Interaction Rules

- Default state: full offset shadow, element sits at natural position.
- Hover state (the stamp approach): element translates toward shadow origin.
  - `hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#000000]`
- Active state (the stamp press): shadow fully collapses.
  - `active:translate-x-[6px] active:translate-y-[6px] active:shadow-none`
- Focus state: thick ring or restored full shadow: `focus:shadow-[4px_4px_0px_0px_#3a86ff]`.
- Transitions: `transition-all duration-150` (snappy, mechanical feel).
- Disabled state: `opacity-50` with no shadow movement on hover.

### The Stamp Interaction (Detailed)

This is the signature neobrutalist micro-interaction and must be consistent:

1. **Idle:** Element sits at `translate-x-0 translate-y-0` with full shadow.
2. **Hover:** Element moves toward the shadow by ~1/3 of the offset, shadow shrinks proportionally.
3. **Active/Pressed:** Element moves the full offset distance, shadow becomes zero. The element looks pressed flat against the surface.
4. **Release:** Snaps back to idle with a quick transition.

## Typography Rules

- Use bold, heavy sans-serif fonts: Space Grotesk, Archivo, DM Sans, or Inter at `font-bold` minimum.
- Display headings can use `font-black` (`900`) with `tracking-tight`.
- Labels/meta: `font-bold uppercase tracking-wide text-sm`.
- Body text: `font-medium text-base`.
- Avoid thin/light weights entirely. Neobrutalism is heavy and bold.
- Mono accents (Space Mono, JetBrains Mono) work well for data/labels.

## Reusable Tailwind Tokens

- Card: `bg-[#ffbe0b] border-2 border-black rounded-xl shadow-[6px_6px_0px_0px_#000000] p-6`
- Button: `bg-[#ff006e] text-white font-bold border-2 border-black rounded-xl shadow-[6px_6px_0px_0px_#000000] px-6 py-3 hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#000000] transition-all`
- Input: `bg-white border-2 border-black rounded-lg px-4 py-2 outline-none focus:shadow-[4px_4px_0px_0px_#000000] transition-all`
- Heading: `text-5xl font-black tracking-tight`
- Label: `font-bold uppercase tracking-wide text-sm`
- Grid pattern bg: `bg-[linear-gradient(#00000008_1px,transparent_1px),linear-gradient(90deg,#00000008_1px,0,transparent)] bg-[4px_4px]`
- Toggle: `w-14 h-8 border-2 border-black rounded-full bg-[#06d6a0] p-1`

## Quality Checklist (must pass)

- Every interactive element has a thick black border and hard offset shadow (zero blur).
- Borders and shadows are always pure black (`#000000`).
- Colors are bold and saturated.
- The stamp interaction (hover translates toward shadow, active presses flat) is consistent on all interactive elements.
- Corner radius is uniform (all sharp or all `rounded-xl`/`rounded-2xl`).
- Typography is bold (`font-bold` minimum, `font-black` for headings).
- Hierarchy is achieved through color contrast and shadow scale.
- Shadows scale with element size (bigger elements have bigger offsets).
- Focus states are thick and visible.

## Anti-Patterns

- Soft or blurred shadows (`shadow-lg` with blur breaks the stamped look).
- Thin borders (`border` without a width modifier is too subtle).
- Muted or pastel colors on interactive elements (neobrutalism is bold).
- Missing the stamp interaction on buttons (the press is the signature).
- Pure black borders with colored shadows (shadows must be black for consistency).
- Rounded and sharp corners mixed in the same interface (commit to one radius strategy).
- Light/thin typography (neobrutalism demands heavy weights).
- Gradients on surfaces (solid bold colors are the neobrutalist way).
- Animations that are too slow (transitions should be snappy: `duration-150`).

## Typography Recommendations

- Display heading: Archivo Black, Space Grotesk (700-900), Anton, Bebas Neue.
- Body: Space Grotesk, DM Sans, Inter (all at `font-bold` or `font-medium` minimum).
- Mono: Space Mono, JetBrains Mono for labels/data.
- Avoid: thin fonts, script fonts, decorative display fonts (neobrutalism is bold sans-serif).

## Accessibility Considerations

- Bold borders and high-contrast colors aid visual identification of interactive elements.
- The stamp interaction provides clear tactile feedback for clicks and hovers.
- Focus states must be thick and visible: `focus:shadow-[4px_4px_0px_0px_#3a86ff]` or `focus:ring-4 focus:ring-blue-500`.
- Ensure text contrast meets WCAG AA on bold-colored backgrounds.
- The stamp press movement must not interfere with keyboard navigation (it is visual only).
- Decorative elements (stars, squiggles) must not interfere with touch targets or screen reader content.
- Provide `prefers-reduced-motion` support: disable translate transforms, keep color-only state changes.
