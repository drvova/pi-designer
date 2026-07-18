---
name: risograph-ui
description: Build risograph / riso-print UI components (grainy print texture, limited spot-color layers, visible misregistration, fluorescent ink colors, warm paper backgrounds) with two-to-three color print logic, ink overlap effects, and the tactile warmth of independent press printing. Trigger this skill when the user asks for risograph, riso print, spot-color design, grainy print texture, indie-press aesthetic, or two-color offset interfaces.
---

# Risograph UI

Use this skill to design and implement interfaces that replicate the tactile warmth of risograph printing: limited spot-color ink layers, visible grain texture, intentional misregistration between colors, fluorescent ink palettes on warm paper, and the handmade quality of independent press publishing.

## Non-Negotiable Foundations

- Risograph design simulates a 2-3 color print process: each color is a separate "ink layer" with its own registration. The magic is in the OVERLAP and MISREGISTRATION.
- The paper surface is always warm off-white (`#f5f0e6`), never pure white. Grain texture is mandatory.
- Colors are fluorescent and saturated (riso ink is uniquely vivid): fluorescent pink, federal blue, sun yellow, mint green, tangerine.
- Misregistration is a FEATURE, not a bug: colors are offset by 2-4px in random directions, simulating imperfect print alignment.
- Grain texture is mandatory: SVG `feTurbulence` filter or dot pattern overlay simulates paper/ink interaction.
- The aesthetic is intentionally imperfect, warm, and handmade — the opposite of smooth digital design.

## Core Material Recipes

### 1) Warm Paper Background

The foundational riso surface: warm off-white paper with grain.

- Background: `bg-[#f5f0e6]` (warm cream paper).
- Grain overlay (mandatory): SVG `feTurbulence` noise at `opacity-[0.08]` with `mix-blend-mode: multiply`.
  - SVG: `<svg><filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/></filter><rect width="100%" height="100%" filter="url(#grain)"/></svg>` as a `bg-image` data URI or pseudo-element.

### 2) Two-Color Offset Card

The signature riso element: a card with two color layers that are intentionally misaligned.

- Layer 1 (blue): `bg-[#0066cc]` positioned at `translate-x-0 translate-y-0`.
- Layer 2 (pink): `bg-[#ff5bae]` positioned at `translate-x-[3px] translate-y-[2px]` with `mix-blend-mode: multiply`.
- Paper: `bg-[#f5f0e6]` base showing through where layers don't cover.
- Container: `relative` with both layers absolutely positioned, then content on top.
- Full effect requires 3 stacked elements: paper base, offset color 1, offset color 2, then content.

### 3) Offset Print Shadow (riso-style)

Instead of a drop shadow, use offset color blocks (simulating ink misregistration).

- `shadow-[3px_3px_0_0_#0066cc,5px_5px_0_0_#ff5bae]` (blue + pink offset layers).
- Alternative: `shadow-[2px_2px_0_0_#ff5bae]` (single color offset).

### 4) Halftone Fill Area

Riso uses halftone/stippling to create tonal variation with single-color ink.

- Fine dots: `bg-[radial-gradient(#0066cc_1px,transparent_1px)] bg-[size:8px_8px]`.
- Medium dots: `bg-[radial-gradient(#ff5bae_2px,transparent_2px)] bg-[size:12px_12px]`.
- Variable density: combine two patterns at different sizes and positions.

### 5) Riso Button

Bold, flat button with offset print shadow and fluorescent ink color.

- Pink: `bg-[#ff5bae] text-white font-bold text-base px-6 py-3 shadow-[3px_3px_0_0_#0066cc] hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0_0_#0066cc] transition-all`.
- Blue: `bg-[#0066cc] text-white font-bold px-6 py-3 shadow-[3px_3px_0_0_#ff5bae]`.

### 6) Duotone Image Treatment

Grayscale image with two-color riso treatment.

```css
.riso-duotone {
  filter: grayscale(100%) contrast(1.2);
  background: linear-gradient(135deg, #ff5bae, #0066cc);
  background-blend-mode: multiply;
  background-size: cover;
}
```

Or use `mix-blend-mode: multiply` on two overlaid colored versions of the same image.

### 7) Registration Mark Decoration

Small printer's registration marks as decorative accents.

```html
<svg viewBox="0 0 20 20" class="w-4 h-4">
  <circle cx="10" cy="10" r="8" fill="none" stroke="#0066cc" stroke-width="0.5"/>
  <line x1="10" y1="0" x2="10" y2="20" stroke="#0066cc" stroke-width="0.5"/>
  <line x1="0" y1="10" x2="20" y2="10" stroke="#0066cc" stroke-width="0.5"/>
  <circle cx="10" cy="10" r="3" fill="none" stroke="#ff5bae" stroke-width="0.5"/>
</svg>
```

## Color Palette System

### Core Riso Ink Colors

| Ink | Hex | Character |
|---|---|---|
| Fluorescent Pink | `#ff5bae` | Primary, energetic, the most riso color |
| Federal Blue | `#0066cc` | Structural, text, shadows |
| Sun Yellow | `#f5d547` | Bright, warm, overprints well |
| Mint Green | `#3eb489` | Fresh, nature |
| Tangerine | `#ff7f3f` | Warm, energetic |
| Plum | `#8b4789` | Deep, rich |
| Black | `#1a1a1a` | Text, line work |
| Paper Cream | `#f5f0e6` | Background (warm off-white) |

### Two-Color Combinations (Validated Pairs)

| Color 1 | Color 2 | Overlap Color | Vibe |
|---|---|---|---|
| Pink `#ff5bae` | Blue `#0066cc` | Purple | Classic riso |
| Yellow `#f5d547` | Blue `#0066cc` | Green | Editorial |
| Pink `#ff5bae` | Yellow `#f5d547` | Orange | Warm, joyful |
| Mint `#3eb489` | Pink `#ff5bae` | Brown | Unexpected |
| Blue `#0066cc` | Yellow `#f5d547` | Green | Nature |

Rules: Choose 2-3 ink colors maximum per design. The overlap color (where inks mix via `mix-blend-mode: multiply`) is a key design consideration. Always use warm cream paper as the base.

## Typography Recommendations

Risograph typography is bold, friendly, and slightly offbeat:

- **Primary:** Space Grotesk, Bricolage Grotesque, or DM Sans (contemporary, friendly sans).
- **Display:** Archivo Black, Anton, or Fraunces (bold poster-style display).
- **Alternative display:** Cooper Hewitt, Univers (geometric sans for editorial).
- **Mono:** Space Mono, JetBrains Mono (for metadata and technical labels).
- Avoid serif fonts for primary text unless using a heavy display serif for headings only.
- Typography should feel like it was screen-printed: bold, flat, confident.

## Component Architecture Pattern

1. Warm cream paper background with mandatory grain texture overlay.
2. Two-color offset cards (misaligned color layers with multiply blend).
3. Halftone fill areas (single-color tonal variation via dot patterns).
4. Offset print shadow buttons (multi-color offset instead of drop shadows).
5. Duotone image treatments (grayscale + two riso ink colors).
6. Registration mark decorations (small crosshair printer marks).
7. Bold flat typography in riso ink colors.

## Interaction Rules

- Default state: warm, printed, slightly imperfect.
- Hover: offset shadows compress (colors slide toward alignment).
  - `hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0_0_#0066cc] transition-all duration-150`.
- Active: `active:translate-x-[3px] active:translate-y-[3px] active:shadow-none`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#ff5bae] focus:ring-offset-2 focus:ring-offset-[#f5f0e6]`.
- Transitions: `transition-all duration-150` (snappy, like a print press).

## Reusable Tailwind Tokens

- Paper bg: `bg-[#f5f0e6]` (warm cream).
- Grain overlay: SVG `feTurbulence` at `opacity-[0.08] mix-blend-multiply`.
- Pink + blue offset: `shadow-[3px_3px_0_0_#0066cc,5px_5px_0_0_#ff5bae]`.
- Riso button: `bg-[#ff5bae] text-white font-bold px-6 py-3 shadow-[3px_3px_0_0_#0066cc]`.
- Halftone: `bg-[radial-gradient(#0066cc_1px,transparent_1px)] bg-[size:8px_8px]`.
- Blue text: `text-[#0066cc]`.
- Pink text: `text-[#ff5bae]`.

## Quality Checklist (must pass)

- Background is warm cream paper (`#f5f0e6`), never pure white.
- Grain texture overlay is present on all surfaces (mandatory).
- 2-3 color palette maximum (limited spot colors, like real riso).
- Color layers are intentionally misaligned (offset registration).
- `mix-blend-mode: multiply` used where colors overlap.
- Offset print shadows instead of drop shadows.
- Halftone/dot patterns used for tonal variation.
- Typography is bold, flat, and confident.
- At least one duotone image treatment (if images are used).
- The aesthetic feels printed, handmade, and warm — not digitally smooth.

## Anti-Patterns

- Pure white backgrounds (riso requires warm cream paper).
- Smooth digital drop shadows with blur (use hard offset print shadows).
- More than 3 colors (riso is a limited-ink process).
- Missing grain texture (paper/ink grain is mandatory).
- Perfectly aligned color layers (misregistration is the point).
- Gradients (riso uses flat color fills and halftone, not gradients).
- Glossy, glass, or translucent effects (riso is opaque, flat, printed).
- Digital font effects (riso typography is bold, flat, screen-printed).
- Missing the paper texture (the grain IS the aesthetic).
- Too many blend modes (stick to `multiply` for authentic riso overlap).

## Accessibility Considerations

- Warm cream paper with dark blue text provides excellent contrast (WCAG AAA territory).
- Fluorescent pink text on cream must be verified for contrast (may fail AA at small sizes — use pink for large text and accents only).
- Grain texture overlay must not reduce text contrast below WCAG AA.
- Focus states: `focus:ring-2 focus:ring-[#ff5bae] focus:ring-offset-2`.
- Halftone patterns must be subtle enough not to reduce text legibility.
- Registration marks are decorative: `aria-hidden="true"`.
- Duotone images need proper `alt` text.
- Ensure color is not the sole information channel (include text labels alongside color-coded elements).
