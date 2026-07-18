---
name: earth-tones-ui
description: Build earth tones UI components (warm clay, terracotta surface, sandstone gradient, walnut wood, moss green, dried sage, stone path) with natural earth colors, organic warmth, and the grounded stability of earth-toned palettes. Trigger this skill when the user asks for earth tones, terracotta design, clay aesthetics, sandstone surfaces, natural warm palette, grounded organic UI, or earthy grounded interfaces.
---

# Earth Tones UI

Use this skill to design and implement grounded, warm, earth-toned interfaces with terracotta surfaces, sandstone gradients, walnut wood accents, moss green highlights, and the organic stability of natural earth materials.

## Non-Negotiable Foundations

- Earth tones evoke geological permanence: clay, sandstone, walnut, moss, sage, and stone. Every element should feel grounded, natural, and enduring.
- Colors are pulled from real earth: terracotta reds, warm clay browns, sandstone golds, walnut darks, moss greens, and weathered stone grays.
- Surfaces mimic natural materials: layered sandstone strata, kiln-fired clay, weathered wood grain, polished river stone.
- Typography is sturdy and legible: slab serifs and warm sans-serifs that feel carved or pressed into earth.
- Borders and dividers use solid, earthy lines — not dashed or decorative, but firm like stone edges.
- The mood is stable, warm, and grounded — the opposite of airy, cold, or ephemeral.
- Textures reference real earth: dry clay cracks, sandstone grain, wood rings, stone surfaces with mineral flecks.

## Core Material Recipes

### 1) Warm Clay Surface

Primary card surface with terracotta warmth.

- Background: `bg-[#d4a87a]` (warm clay base).
- Texture: subtle SVG noise at `opacity-[0.06]` simulating fired clay granularity.
- Border: `border-2 border-[#b07040]` (kiln-fired edge).
- Shadow: `shadow-[0_4px_16px_rgba(90,50,20,0.12)]` (deep earth shadow).
- Inner gradient: subtle top-to-bottom `from-[#dab488] to-[#c49460]` for depth.
- Full: `bg-gradient-to-b from-[#dab488] to-[#c49460] border-2 border-[#b07040] shadow-[0_4px_16px_rgba(90,50,20,0.12)] p-6 rounded-xl`

### 2) Terracotta Pot Shape

Rounded container shaped like a terracotta planter.

- Background: `bg-[#c47040]` (terracotta red-brown).
- Shape: `rounded-t-3xl rounded-b-xl` (wider at top, narrower base).
- Rim: `border-t-4 border-[#a05830]` (thick top edge like pot rim).
- Shadow: `shadow-[0_6px_20px_rgba(80,30,10,0.15)]` (weight below).
- Full: `bg-[#c47040] rounded-t-3xl rounded-b-xl border-t-4 border-[#a05830] shadow-[0_6px_20px_rgba(80,30,10,0.15)] p-6 text-white`

### 3) Sandstone Gradient Layered Surface

Layered warm tones mimicking geological strata.

- Background: multi-stop gradient representing stone layers.
- `bg-[linear-gradient(180deg,#d4b888_0%,#c4a870_20%,#d4b888_25%,#b49860_50%,#d4b888_55%,#a48840_80%,#d4b888_85%)]` (layered strata effect).
- Border: `border border-[#a48840]`.
- Subtle horizontal grain: repeating SVG lines at `opacity-[0.08]`.
- Full: `bg-[linear-gradient(180deg,#d4b888_0%,#c4a870_20%,#d4b888_25%,#b49860_50%,#d4b888_55%,#a48840_80%,#d4b888_85%)] border border-[#a48840] p-6 rounded-lg`

### 4) Walnut Wood Grain Card

Dark rich surface with wood grain texture.

- Background: `bg-[#5a3a1a]` (deep walnut).
- Texture: repeating linear gradient simulating wood grain.
- `bg-[linear-gradient(90deg,#5a3a1a_0%,#6a4a2a_30%,#5a3a1a_32%,#6a4a2a_65%,#5a3a1a_67%)]`.
- Grain overlay: thin lines at `opacity-[0.12]` for fiber detail.
- Border: `border-2 border-[#4a2a0a]` (deep wood edge).
- Full: `bg-[linear-gradient(90deg,#5a3a1a_0%,#6a4a2a_30%,#5a3a1a_32%,#6a4a2a_65%,#5a3a1a_67%)] border-2 border-[#4a2a0a] shadow-[0_4px_12px_rgba(30,15,5,0.2)] p-6 rounded-lg text-[#e8d8c0]`

### 5) Moss Green Accent Panel

Natural green accent with organic feel.

- Background: `bg-[#5a7a3a]` (moss green).
- Texture: subtle radial dots at `opacity-[0.06]` for organic spore-like detail.
- Border: `border-2 border-[#4a6a2a]` (deeper moss edge).
- Shadow: `shadow-[0_2px_10px_rgba(60,80,30,0.15)]`.
- Full: `bg-[#5a7a3a] border-2 border-[#4a6a2a] shadow-[0_2px_10px_rgba(60,80,30,0.15)] p-5 rounded-lg text-white`

### 6) Dried Sage Leaf Badge

Muted gray-green badge for labels and tags.

- Background: `bg-[#8a9a7a]` (dried sage).
- Border: `border border-[#7a8a6a]` (subtle sage edge).
- Shape: `rounded-full` (leaf-like softness).
- Full: `bg-[#8a9a7a] border border-[#7a8a6a] text-white px-4 py-1.5 rounded-full text-sm font-medium`

### 7) Stone Path Arrangement

Horizontal layout of stone-like rounded blocks for navigation or steps.

- Each stone: `bg-[#8a8a7a] rounded-2xl border border-[#7a7a6a] px-6 py-4` (gray stone).
- Active stone: `bg-[#b08050] border-[#9a7040]` (warm clay stone for current step).
- Gap: `gap-3` (stones close but not touching).
- Shadow: `shadow-[0_2px_6px_rgba(60,60,50,0.1)]` (grounded).
- Full: `flex gap-3` container with `bg-[#8a8a7a] rounded-2xl border border-[#7a7a6a] px-6 py-4 shadow-[0_2px_6px_rgba(60,60,50,0.1)]` per stone.

## Color Palette System

### Core Earth Tones Palette

| Color | Hex | Role |
|---|---|---|
| Terracotta | `#c47040` | Primary accent, warmth, CTA |
| Clay Warm | `#b08050` | Secondary accent, surfaces |
| Sandstone | `#d4b888` | Light backgrounds, highlights |
| Walnut | `#5a3a1a` | Dark text, structure, wood |
| Moss Green | `#5a7a3a` | Nature accent, success states |
| Sage Gray-Green | `#8a9a7a` | Labels, muted accents |
| Stone Gray | `#8a8a7a` | Neutral, borders, dividers |
| Earth Dark | `#3a2a1a` | Deep text, strong contrast |

### Extended Tones

| Color | Hex | Role |
|---|---|---|
| Warm Cream | `#f0e4d0` | Light backgrounds |
| Desert Sand | `#e8d4b8` | Card surfaces |
| Burnt Sienna | `#a05830` | Deep terracotta, hover |
| Olive Moss | `#4a6a2a` | Deep green, borders |
| Slate Stone | `#6a6a5a` | Secondary text |
| Pale Sand | `#f5ead8` | Page background |
| Rich Loam | `#4a3020` | Darkest text |

Rules: All colors should be pulled from natural earth materials. No bright neons, cool blues, or synthetic hues. The palette should feel like a cross-section of geological layers — warm, layered, and permanent. Greens are always mossy and muted, never bright or electric.

## Typography Recommendations

Earth tones typography is sturdy, grounded, and carved — like letters pressed into wet clay or stamped into wood.

- **Display headings:** Rockwell, Zilla Slab, or Arvo (sturdy slab serifs that feel carved from stone).
- **Body:** Source Sans 3, Nunito Sans, or IBM Plex Sans (warm, legible, grounded sans-serif).
- **Accent/carved:** Bitter, Rokkitt, or Courier Prime (slab-serif for labels and carved feel).
- **Monospace accent:** IBM Plex Mono or Fira Code (for code or data that feels like stone inscriptions).
- Avoid thin, delicate, or script typefaces. Earth tones need weight and presence.
- Heading weights should be 700+ for that carved-into-stone impression.
- Line heights should be generous (1.6-1.8 for body) to give text room to breathe like paths between stones.

## Component Architecture Pattern

1. Warm sandstone or cream background with subtle earth texture.
2. Stone strata or clay gradient section dividers.
3. Walnut or clay cards with solid earth-tone borders.
4. Terracotta primary buttons, moss green secondary buttons.
5. Dried sage badges and stone gray dividers.
6. Carved slab-serif headings, warm sans-serif body.
7. Stone path navigation with active-state clay highlights.
8. Moss green for success, terracotta for warnings, stone gray for neutral.

## Interaction Rules

- Default state: grounded, stable, warm.
- Hover: gentle lift with deepening shadow.
  - `hover:shadow-[0_8px_24px_rgba(90,50,20,0.18)] hover:-translate-y-0.5 transition-all duration-300`.
- Active: `active:translate-y-0 active:shadow-[0_2px_8px_rgba(90,50,20,0.12)]` (settles back into earth).
- Focus: `focus:ring-2 focus:ring-[#c47040]/40 focus:ring-offset-2 focus:ring-offset-[#f0e4d0]`.
- Transitions: `transition-all duration-300 ease-out` (smooth but substantial, like shifting earth).
- No bouncy, springy, or playful motion. Everything feels solid, deliberate, and weighty.
- Loading states should feel like slow geological processes, not digital spinners.

## Reusable Tailwind Tokens

- Clay card: `bg-gradient-to-b from-[#dab488] to-[#c49460] border-2 border-[#b07040] shadow-[0_4px_16px_rgba(90,50,20,0.12)] p-6 rounded-xl`
- Walnut card: `bg-[linear-gradient(90deg,#5a3a1a_0%,#6a4a2a_30%,#5a3a1a_32%,#6a4a2a_65%,#5a3a1a_67%)] border-2 border-[#4a2a0a] p-6 rounded-lg text-[#e8d8c0]`
- Sandstone bg: `bg-[linear-gradient(180deg,#d4b888_0%,#c4a870_20%,#d4b888_25%,#b49860_50%,#d4b888_55%,#a48840_80%,#d4b888_85%)]`
- Terracotta button: `bg-[#c47040] text-white font-bold rounded-xl px-6 py-3 border-2 border-[#a05830] hover:bg-[#a05830] transition-colors`
- Moss button: `bg-[#5a7a3a] text-white font-bold rounded-xl px-6 py-3 border-2 border-[#4a6a2a] hover:bg-[#4a6a2a] transition-colors`
- Sage badge: `bg-[#8a9a7a] border border-[#7a8a6a] text-white px-4 py-1.5 rounded-full text-sm font-medium`
- Stone divider: `h-px bg-[#8a8a7a] opacity-40`
- Earth shadow: `shadow-[0_4px_16px_rgba(90,50,20,0.12)]`
- Pale sand bg: `bg-[#f5ead8]`
- Walnut text: `text-[#5a3a1a]`
- Earth dark text: `text-[#3a2a1a]`

## Quality Checklist (must pass)

- Color palette is warm and earthy (terracotta, clay, sandstone, walnut, moss, stone — no neons or cool tones).
- Borders are solid and firm (earth tones are about permanence, not decoration).
- At least one texture reference (clay grain, sandstone strata, wood grain, stone surface).
- Typography uses slab serifs or warm sans-serifs (carved, sturdy feel).
- Backgrounds are sandstone, cream, or warm pale tones (never pure white or cool gray).
- Shadows have warm brown undertones (no cool or blue shadows).
- The aesthetic feels grounded, stable, and enduring.
- At least one earth material metaphor (clay, sandstone, walnut, moss, stone).
- Motion is deliberate and weighty, not bouncy or playful.
- The mood reads as geological permanence and natural warmth.
- Green accents are always mossy and muted (never bright or electric).
- Warm cream (`#f0e4d0`) or pale sand (`#f5ead8`) is used as page background.

## Anti-Patterns

- Cool, blue, or neon color palettes (earth tones are warm and grounded).
- Dashed or decorative borders (earth tones use solid, firm edges like stone).
- Thin, delicate, or script typefaces (earth tones need weight and slab-serif presence).
- Sharp, angular shapes without rounding (earth tones are organic and rounded).
- Fast, bouncy, or springy animations (motion should be deliberate and substantial).
- Digital or technological references (earth tones reference natural materials, not circuits).
- Pure white or cool gray backgrounds (use warm cream `#f0e4d0` or pale sand `#f5ead8`).
- Missing material references (every surface should evoke a real earth material).
- Bright, electric, or kelly green (moss green `#5a7a3a` is muted and natural).
- Thin font weights below 400 (earth tones need carved, substantial letterforms).
- Cool-toned shadows (all shadows should have warm brown/amber undertones).
- Transparent or glass effects (earth tones are opaque and solid like real stone).

## Accessibility Considerations

- Earth tones require careful contrast checking; warm backgrounds with dark walnut text provide the strongest pairing.
- Walnut `#5a3a1a` on warm cream `#f0e4d0` passes WCAG AA for normal text (ratio approx 7.2:1).
- Earth dark `#3a2a1a` on sandstone `#d4b888` passes WCAG AA for large text (ratio approx 5.8:1).
- Terracotta `#c47040` on white fails contrast for small text — use only for large elements or on dark backgrounds.
- Moss green `#5a7a3a` on white is borderline — pair with dark text or use as a decorative accent only.
- Material textures must have `aria-hidden="true"` on decorative SVGs.
- Focus states: `focus:ring-2 focus:ring-[#c47040]/40` with sufficient offset to be visible against warm backgrounds.
- Stone path navigation items need `aria-current="step"` for the active stone.
- All animations must respect `prefers-reduced-motion` — remove translate and shadow transitions.
- Touch targets must be at least 44x44px despite the organic, rounded styling.
- Dried sage badges need sufficient color contrast for text inside — use white text on `#8a9a7a` (ratio approx 3.5:1 — for large text only) or dark `#3a2a1a` text on `#8a9a7a` (ratio approx 4.2:1 for normal text).
- Stone gray `#8a8a7a` is too light for text on light backgrounds — use only for decorative elements or on dark backgrounds.
