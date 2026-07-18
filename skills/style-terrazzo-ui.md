---
name: terrazzo-ui
description: Build terrazzo UI components (speckled composite material pattern, colorful chips embedded in cement, speckled texture, mid-century modern material aesthetic) with scattered color fragments, grouted surfaces, and the playful yet sophisticated look of terrazzo flooring. Trigger this skill when the user asks for terrazzo design, speckled pattern UI, composite material aesthetic, chip-pattern backgrounds, or mid-century material-inspired interfaces.
---

# Terrazzo UI

Use this skill to design and implementation interfaces inspired by terrazzo composite material: scattered colorful chips embedded in a cement/grout matrix, speckled texture patterns, and the playful yet sophisticated material aesthetic of mid-century terrazzo flooring.

## Non-Negotiable Foundations

- Terrazzo UI simulates the composite material: a neutral base matrix (cement/epoxy) with colorful chips (marble, glass, granite) scattered throughout.
- The speckled pattern is the SIGNATURE element — it must be present on backgrounds or card surfaces.
- Colors in the chips are bright and varied: reds, blues, greens, yellows, oranges, and blacks, scattered randomly.
- The base matrix is neutral: warm gray, cream, charcoal, or muted terracotta.
- Shapes of chips are organic and irregular: triangles, quadrilaterals, and curved shards of varying sizes.
- The aesthetic is material-driven — it should feel like a polished floor or countertop surface.

## Core Material Recipes

### 1) Terrazzo Pattern Background

The signature surface: speckled composite pattern.

CSS approach using multiple radial gradients to simulate scattered chips:
```css
.terrazzo-bg {
  background-color: #e0dcd4;
  background-image:
    radial-gradient(ellipse 8px 6px at 10% 20%, #c4471a 50%, transparent 51%),
    radial-gradient(ellipse 6px 4px at 30% 60%, #1a5a8a 50%, transparent 51%),
    radial-gradient(ellipse 5px 5px at 50% 30%, #2d5a27 50%, transparent 51%),
    radial-gradient(ellipse 7px 3px at 70% 70%, #e8a317 50%, transparent 51%),
    radial-gradient(ellipse 4px 6px at 85% 15%, #8a2a6a 50%, transparent 51%),
    radial-gradient(ellipse 6px 5px at 15% 85%, #1a1a1a 50%, transparent 51%),
    radial-gradient(ellipse 5px 4px at 60% 90%, #c4471a 50%, transparent 51%),
    radial-gradient(ellipse 4px 3px at 90% 50%, #2d5a27 50%, transparent 51%);
  background-size: 200px 200px;
}
```

Simpler Tailwind dot-pattern approximation:
- `bg-[#e0dcd4] bg-[radial-gradient(#c4471a_2px,transparent_2px),radial-gradient(#1a5a8a_1.5px,transparent_1.5px),radial-gradient(#2d5a27_2px,transparent_2px)] bg-[size:30px_30px,25px_25px,35px_35px] bg-[position:0_0,10px_5px,5px_15px]`.

For production use: an SVG pattern or tile image provides the most authentic terrazzo look.

### 2) Terrazzo Card

Card on a terrazzo-patterned or solid neutral surface.

- Solid surface: `bg-[#f5f3f0] rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-[#d4d0c8]`.
- With terrazzo accent: top strip `h-2 bg-[terrazzo-pattern] rounded-t-xl`.

### 3) Terrazzo Button

Material-inspired button with terrazzo accent border.

- Primary: `bg-[#2a2a2a] text-white font-medium rounded-lg px-6 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)] transition-all`.
- Terrazzo accent: `border-b-4 border-[#c4471a]` (colorful bottom border like a terrazzo chip).

### 4) Chip Divider

Divider made of scattered terrazzo-like colored fragments.

```html
<div class="flex items-center gap-2 my-6">
  <span class="w-3 h-2 bg-[#c4471a] rounded-sm rotate-12"></span>
  <span class="w-2 h-3 bg-[#1a5a8a] rounded-sm rotate-[-20deg]"></span>
  <span class="w-4 h-2 bg-[#2d5a27] rounded-sm rotate-5"></span>
  <span class="w-2 h-2 bg-[#e8a317] rounded-sm rotate-[-12deg]"></span>
  <span class="w-3 h-3 bg-[#8a2a6a] rounded-sm rotate-8"></span>
</div>
```

### 5) Polished Surface Sheen

Subtle sheen overlay suggesting polished terrazzo.

- `bg-gradient-to-br from-white/5 via-transparent to-white/5` overlay.
- Adds the glossy polished quality of sealed terrazzo.

## Color Palette System

### Matrix (Base) Colors

| Color | Hex | Material |
|---|---|---|
| Warm Gray | `#e0dcd4` | Standard cement matrix |
| Cream | `#f5f3f0` | Light epoxy matrix |
| Charcoal | `#2a2a2a` | Dark epoxy matrix |
| Terracotta | `#c47858` | Warm pigmented matrix |

### Chip Colors

| Color | Hex | Material |
|---|---|---|
| Red | `#c4471a` | Red marble chip |
| Blue | `#1a5a8a` | Blue glass chip |
| Green | `#2d5a27` | Green marble chip |
| Yellow | `#e8a317` | Ochre glass chip |
| Magenta | `#8a2a6a` | Recycled glass chip |
| Black | `#1a1a1a` | Black granite chip |
| White | `#f5f3f0` | White marble chip |
| Orange | `#e0552a` | Terracotta chip |

Rules: The matrix is always neutral (gray, cream, charcoal). Chips are bright and varied. 5-8 chip colors scattered throughout. The combination should feel like a mid-century Italian terrazzo floor.

## Typography Recommendations

Terrazzo UI pairs the material aesthetic with clean mid-century typography:

- **Primary:** DM Sans, Work Sans, or Poppins (clean modern sans-serif).
- **Display:** Archivo, Cocomat (geometric mid-century display).
- **Body:** Same as primary at `font-normal` to `font-medium`.
- **Labels:** `font-bold text-xs uppercase tracking-wide`.
- The typography should feel like mid-century modern signage on a terrazzo floor.

## Component Architecture Pattern

1. Terrazzo-patterned background (speckled composite texture).
2. Neutral solid cards floating on the patterned surface.
3. Chip-colored accent borders and dividers.
4. Polished surface sheen overlay.
5. Clean modern typography (mid-century modern feel).
6. Terrazzo accent strips on card tops/edges.

## Interaction Rules

- Default state: polished, material, textured.
- Hover: card lifts slightly (like a tile being raised).
  - `hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300`.
- Active: `active:translate-y-0 active:shadow-[0_2px_8px_rgba(0,0,0,0.08)]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#c4471a] focus:ring-offset-2`.
- Transitions: `transition-all duration-300 ease-out` (smooth, polished).

## Reusable Tailwind Tokens

- Terrazzo bg: multi-layer radial gradients or SVG pattern tile.
- Terrazzo card: `bg-[#f5f3f0] rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-[#d4d0c8]`
- Terrazzo button: `bg-[#2a2a2a] text-white font-medium rounded-lg px-6 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.1)]`
- Chip divider: `flex items-center gap-2` with rotated colored fragments.
- Polished sheen: `bg-gradient-to-br from-white/5 to-white/5`.

## Quality Checklist (must pass)

- Terrazzo speckled pattern is present on at least one major surface.
- Pattern uses 5-8 varied chip colors scattered in a neutral matrix.
- Chip shapes are organic and irregular (not uniform circles or squares).
- Base matrix color is neutral (warm gray, cream, or charcoal).
- At least one chip-colored accent border or divider.
- Polished surface sheen is present (subtle glossy quality).
- Typography is clean and modern (mid-century sans-serif).
- Cards float on the patterned surface with soft shadows.
- The aesthetic reads as polished composite flooring material.
- Colors are bright but not neon — they reference real marble/glass chips.

## Anti-Patterns

- Uniform dot patterns (terrazzo chips are irregular in size and shape).
- Only one or two chip colors (terrazzo has 5-8 varied colors).
- Bright neon colors (chips reference real marble, glass, and stone).
- Missing the neutral matrix base (chips must be embedded IN a base color).
- Flat matte finish without sheen (terrazzo is polished and glossy).
- Sharp, hard edges on cards (terrazzo cards should feel material and polished).
- Overwhelming the entire page with the pattern (use it on backgrounds or accent strips).
- Missing chip dividers (these are the signature terrazzo decorative element).
- Pure digital aesthetic without material reference (terrazzo is a PHYSICAL material).
- Consistent spacing of chips (real terrazzo chips are random and scattered).

## Accessibility Considerations

- Terrazzo background patterns must not reduce text contrast (use solid cards for text).
- The speckled pattern should be on backgrounds, not behind body text.
- Neutral solid cards provide readable surfaces on patterned backgrounds.
- Focus states: `focus:ring-2 focus:ring-[#c4471a]` (red chip-colored ring).
- Decorative chip fragments must be `aria-hidden="true"`.
- The pattern should be subtle enough not to cause visual distraction.
- Verify contrast of card text against the neutral card surface.
- Touch targets must be adequate despite material-inspired styling.
