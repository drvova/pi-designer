---
name: savanna-ui
description: Build savanna / safari UI components (African grassland, golden acacia silhouettes, warm dusty earth, sunset migrations, baobab trees, tribal beadwork patterns, warm ochre and amber palette) with wide golden horizons, acacia tree silhouettes, and the majestic emptiness of the African savanna. Trigger this skill when the user asks for savanna, safari, African grassland, Serengeti, acacia tree, baobab, or warm golden safari interfaces.
---

# Savanna / Safari UI

Use this skill to design and implementation warm, expansive interfaces inspired by the African savanna: golden grass plains, flat-top acacia silhouettes, massive baobab trees, warm dusty earth tones, tribal beadwork border patterns, and the majestic, sun-drenched emptiness of the Serengeti.

## Core Material Recipes

### 1) Savanna Horizon Background

Golden sky-to-grass gradient with flat horizon.

- `bg-gradient-to-b from-[#e8a540] via-[#f5cc60] to-[#c49030]` (sunset sky to golden grass).
- Flat horizon line: `border-b-2 border-[#8a5a1a]` at the grassline.

### 2) Acacia Tree Silhouette

Flat-top umbrella acacia decoration.

```html
<svg viewBox="0 0 100 80" class="w-24 h-20 opacity-60">
  <g fill="#3a2a10">
    <rect x="47" y="40" width="6" height="40"/>
    <path d="M30,40 Q50,25 70,40 L72,38 Q50,22 28,38 Z" />
    <ellipse cx="50" cy="35" rx="25" ry="6"/>
  </g>
</svg>
```

### 3) Baobab Tree Accent

Massive bottle-shaped baobab SVG.

```html
<svg viewBox="0 0 80 100" class="w-20 h-24 opacity-40">
  <g fill="#5a3a1a">
    <path d="M20,90 Q15,60 25,40 Q20,20 40,15 Q60,20 55,40 Q65,60 60,90 Z"/>
    <path d="M25,40 L15,20 M30,35 L20,10 M40,30 L40,5 M50,35 L60,10 M55,40 L65,20" stroke="#5a3a1a" stroke-width="2" fill="none"/>
  </g>
</svg>
```

### 4) Tribal Beadwork Border

Colorful African beadwork pattern divider.

```html
<div class="flex justify-center gap-1 py-2">
  <span class="w-3 h-3 rounded-full bg-[#c41e1e]"></span>
  <span class="w-3 h-3 rounded-full bg-[#1a1a1a]"></span>
  <span class="w-3 h-3 rounded-full bg-[#f5cc3a]"></span>
  <span class="w-3 h-3 rounded-full bg-[#1a3a5a]"></span>
  <span class="w-3 h-3 rounded-full bg-[#2a6a3a]"></span>
  <span class="w-3 h-3 rounded-full bg-[#ffffff]"></span>
</div>
```

### 5) Dusty Earth Panel

Warm savanna-toned card surface.

- `bg-gradient-to-br from-[#d4a868] to-[#a87838] rounded-lg p-6 border border-[#8a5a20] shadow-[0_2px_8px_rgba(80,50,10,0.15)]`.

### 6) Safari Button

Warm ochre earth-tone button.

- `bg-gradient-to-b from-[#c47a1a] to-[#8a4a08] text-[#fff5e0] font-serif font-medium px-8 py-3 border-2 border-[#5a2a04] shadow-[0_3px_0_#5a2a04] hover:translate-y-1 hover:shadow-[0_1px_0_#5a2a04] active:shadow-none transition-all`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Savanna Gold | `#e8a540` | Primary sky/background |
| Warm Grass | `#c49030` | Lower background |
| Dusty Earth | `#a87838` | Card surfaces |
| Warm Ochre | `#c47a1a` | Accent, buttons |
| Dark Earth | `#5a2a04` | Shadows, borders |
| Acacia Brown | `#3a2a10` | Tree silhouettes |
| Tribal Red | `#c41e1e` | Beadwork accent |
| Bead Blue | `#1a3a5a` | Beadwork accent |
| Bead Yellow | `#f5cc3a` | Beadwork accent |
| Cream | `#fff5e0` | Text on dark |

Rules: Warm golden/ochre/amber tones dominate — the savanna at sunset. Earth browns provide depth. Tribal beadwork adds the only multi-color accents (red/black/yellow/blue/green/white beads).

## Typography Recommendations

- **Display:** Playfair Display, Cormorant (elegant warm serif).
- **Body:** Lora, EB Garamond (warm readable serif).
- **Labels:** `font-serif font-medium text-sm tracking-wide`.

## Reusable Tailwind Tokens

- Savanna bg: `bg-gradient-to-b from-[#e8a540] via-[#f5cc60] to-[#c49030]`.
- Dusty panel: `bg-gradient-to-br from-[#d4a868] to-[#a87838] border border-[#8a5a20]`.
- Safari button: `bg-gradient-to-b from-[#c47a1a] to-[#8a4a08] border-2 border-[#5a2a04] shadow-[0_3px_0_#5a2a04]`.
- Beadwork: row of small colored circles `w-3 h-3 rounded-full`.
- Acacia silhouette: SVG flat-top tree.

## Quality Checklist

- Warm golden savanna gradient background.
- At least one acacia or baobab tree silhouette SVG.
- Tribal beadwork border divider present.
- Dusty earth-toned card surfaces.
- Color palette is golden/ochre/amber (warm sunset tones).
- Flat horizon line present (the savanna is flat and wide).
- Typography is warm elegant serif.
- The aesthetic reads as African savanna / safari / Serengeti.
- Everything feels warm, expansive, and majestically empty.
- The horizon is FLAT and WIDE (endless grassland).

## Anti-Patterns

- Cool blue or green dominant palette (savanna is warm gold and ochre).
- Missing tree silhouettes (acacia/baobab are the iconic savanna flora).
- Missing the flat horizon (the savanna is defined by its FLAT expanse).
- Dense forest or jungle aesthetic (savanna is OPEN grassland).
- Missing tribal beadwork accents (these add cultural richness).
- Modern cold minimalist design (savanna is warm and earthy).
- Sans-serif cold typography (savanna pairs with warm serif).
- Dark moody atmosphere (savanna is sun-drenched and golden).
- Missing the warm dusty earth texture on surfaces.
- Sharp angular shapes (the savanna is organic and flowing).

## Accessibility Considerations

- Warm golden backgrounds with dark earth text provide good contrast (verify WCAG AA).
- Focus states: `focus:ring-2 focus:ring-[#5a2a04]/40` (dark earth ring on gold).
- Tree silhouette and beadwork SVGs must be `aria-hidden="true"` when decorative.
- The wide flat layout should maintain logical reading order.
- Touch targets must be adequate despite earthy border styling.
- Respect cultural significance of tribal beadwork patterns — use meaningfully.
