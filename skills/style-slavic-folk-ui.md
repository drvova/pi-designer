---
name: slavic-folk-ui
description: Build Slavic folk art UI components (Khokhloma floral patterns, Matryoshka nesting dolls, red-and-gold folk painting, onion dome silhouettes, gusli string patterns, Eastern European village warmth) with bold floral borders, nesting-doll shapes, and the rich decorative tradition of Russian and Eastern European folk art. Trigger this skill when the user asks for Slavic folk, Khokhloma, Matryoshka, Russian folk art, Eastern European patterns, or onion dome interfaces.
---

# Slavic Folk Art UI

Use this skill to design and implement richly decorative interfaces inspired by Slavic folk art: Khokhloma floral patterns (red-and-gold on black), Matryoshka nesting doll shapes, onion dome silhouettes, bold geometric borders, and the warm, abundant decorative tradition of Russian and Eastern European villages.

## Core Material Recipes

### 1) Khokhloma Panel

The signature surface: red and gold floral painting on dark wood.

- `bg-[#1a1008]` (dark lacquered wood).
- Floral overlay: SVG of stylized red/gold flowers and leaves: `stroke="#c4a043" fill="#c41e1e"` organic curling plant patterns.
- Gold berries: small `fill="#c4a043"` dots scattered among the flowers.

### 2) Matryoshka Card

Nesting-doll shaped card (ovoid/tapered silhouette).

- `bg-gradient-to-b from-[#c41e1e] to-[#8a1010] [clip-path:polygon(30%_0,70%_0,80%_15%,85%_35%,85%_70%,75%_95%,25%_95%,15%_70%,15%_35%,20%_15%)] p-8 text-center`.
- Face area: `bg-[#f5ead0] rounded-t-full mt-4` (the doll's face area).

### 3) Onion Dome Silhouette

Russian Orthodox church dome SVG.

```html
<svg viewBox="0 0 60 80" class="w-15 h-20 opacity-30">
  <path fill="#c4a043" d="M30,0 L33,8 L27,8 Z M30,8 Q15,15 15,35 Q15,50 30,50 L30,80 L30,50 Q45,50 45,35 Q45,15 30,8"/>
</svg>
```

### 4) Folk Floral Border

Khokhloma-style decorative border.

```html
<svg viewBox="0 0 200 30" class="w-full">
  <g stroke="#c4a043" stroke-width="0.5" fill="#c41e1e">
    <path d="M0,15 Q15,5 30,15 Q45,25 60,15 Q75,5 90,15 Q105,25 120,15 Q135,5 150,15 Q165,25 180,15 Q195,5 200,15" fill="none" stroke-width="1.5"/>
    <circle cx="30" cy="15" r="4"/>
    <circle cx="90" cy="15" r="4"/>
    <circle cx="150" cy="15" r="4"/>
    <ellipse cx="15" cy="10" rx="3" ry="1.5" fill="#3a8a3a"/>
    <ellipse cx="45" cy="20" rx="3" ry="1.5" fill="#3a8a3a"/>
    <ellipse cx="75" cy="10" rx="3" ry="1.5" fill="#3a8a3a"/>
  </g>
</svg>
```

### 5) Folk Button

Red-and-gold folk-styled button.

- `bg-[#c41e1e] text-[#f5d76e] font-serif font-bold uppercase tracking-wider px-8 py-3 border-2 border-[#c4a043] hover:bg-[#a01010] transition-colors rounded-none`.

### 6) Wood Texture Surface

Turned wood (like a Matryoshka blank).

- `bg-gradient-to-b from-[#b8893a] to-[#8a6a1a]` (golden birch wood).
- Grain: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_6px,rgba(60,40,10,0.05)_6px,rgba(60,40,10,0.05)_7px)]`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Folk Red | `#c41e1e` | Primary Khokhloma color |
| Dark Red | `#8a1010` | Deep shadows |
| Gold | `#c4a043` | Floral ornament, accents |
| Light Gold | `#f5d76e` | Text on dark |
| Lacquer Black | `#1a1008` | Background (lacquered wood) |
| Birch Wood | `#b8893a` | Raw wood surface |
| Folk Green | `#3a8a3a` | Leaves and stems |
| Cream | `#f5ead0` | Doll faces, light surfaces |

Rules: Red, gold, and black dominate (the Khokhloma palette). Green appears in floral leaves. The palette should feel like a Russian village crafts market — lacquered wood, painted flowers, and warm gold.

## Typography Recommendations

- **Display:** Playfair Display, Cinzel (classical serif with Slavic elegance).
- **Alternative:** Any Cyrillic-capable serif for Russian text accents.
- **Body:** Lora, EB Garamond (warm readable serif).
- **Labels:** `font-serif font-bold uppercase tracking-wider text-sm`.

## Reusable Tailwind Tokens

- Khokhloma panel: `bg-[#1a1008]` with SVG red/gold floral overlay.
- Matryoshka card: `[clip-path:polygon(doll_shape)] bg-gradient-to-b from-[#c41e1e] to-[#8a1010]`.
- Folk button: `bg-[#c41e1e] text-[#f5d76e] border-2 border-[#c4a043] rounded-none`.
- Floral border: SVG curling vine with red flowers and green leaves.
- Onion dome: SVG pointed dome silhouette in gold.

## Quality Checklist

- At least one Khokhloma floral pattern (red-and-gold on dark).
- At least one Matryoshka nesting-doll shape (ovoid clip-path).
- Onion dome silhouette decoration present.
- Folk floral SVG border with curling stems and flowers.
- Color palette is red + gold + black (+ green leaves).
- Lacquered dark wood background surfaces used.
- Typography is classical serif with Slavic warmth.
- The aesthetic reads as Slavic/Russian folk art.
- Everything feels warm, decorative, and culturally rich.
- Floral patterns are abundant and organic (not geometric).

## Anti-Patterns

- Missing floral/folk patterns (Khokhloma is the defining feature).
- Angular geometric shapes (Slavic folk art is ORGANIC and FLORAL).
- Bright modern colors (palette is folk red + gold + lacquer black).
- Missing the Matryoshka doll shape (this is the most recognizable form).
- Missing onion dome references (Russian architecture is essential).
- Sans-serif typography (Slavic folk pairs with classical serif).
- Sparse minimal decoration (Slavic folk is ABUNDANT and ORNATE).
- Missing the gold floral ornament on dark lacquer (the signature treatment).
- Dark moody atmosphere (Slavic folk is warm and celebratory).
- Clean modern surfaces (the aesthetic is lacquered and painted wood).

## Accessibility Considerations

- Dark lacquer backgrounds with gold text provide good contrast (verify WC AA — `#f5d76e` on `#1a1008` passes).
- Focus states: `focus:ring-2 focus:ring-[#f5d76e]/50` (gold ring on lacquer).
- Floral and onion dome SVGs must be `aria-hidden="true"` when decorative.
- Matryoshka clip-path shapes must not cut off interactive areas.
- The dense floral patterns should not reduce text contrast.
- Touch targets must be adequate despite ornate border styling.
