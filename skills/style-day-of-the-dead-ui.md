---
name: day-of-the-dead-ui
description: Build Dia de los Muertos / Day of the Dead UI components (sugar skull motifs, marigold petals, papel picado cut-paper banners, candle-lit ofrendas, vibrant calavera patterns, Mexican folk art celebration) with purple/orange/pink palettes, decorative skull patterns, and the joyful remembrance of Mexican tradition. Trigger this skill when the user asks for Dia de los Muertos, Day of the Dead, sugar skull UI, calavera design, Mexican folk art, or ofrenda interfaces.
---

# Dia de los Muertos / Day of the Dead UI

Use this skill design and implementation vibrant, celebratory interfaces inspired by Dia de los Muertos: sugar skull motifs, marigold petal (cempasuchil) accents, papel picado cut-paper banners, candle-lit ofrenda warmth, calavera patterns, and the joyful Mexican celebration of life and death.

## Core Material Recipes

### 1) Papel Picado Banner

Cut-paper decorative banner (traditional Mexican folk art).

```html
<svg viewBox="0 0 200 60" class="w-full">
  <path fill="#8a2aba" d="M0,0 L200,0 L200,40 Q180,50 160,40 Q140,50 120,40 Q100,50 80,40 Q60,50 40,40 Q20,50 0,40 Z"/>
  <!-- Cut-out decorative shapes within the banner -->
  <circle cx="40" cy="15" r="4" fill="transparent"/>
  <circle cx="100" cy="15" r="4" fill="transparent"/>
  <circle cx="160" cy="15" r="4" fill="transparent"/>
  <path d="M90,25 L100,30 L110,25" fill="none" stroke="transparent" stroke-width="2"/>
</svg>
```

Multiple banners in different colors: purple, orange, pink, green.

### 2) Sugar Skull Motif

Decorative calavera (skull) SVG with flower eyes.

```html
<svg viewBox="0 0 80 100" class="w-20 h-24">
  <g fill="#f5ead0" stroke="#8a2aba" stroke-width="1.5">
    <path d="M40,5 Q15,5 15,30 Q15,50 20,60 Q15,70 15,80 Q15,95 40,95 Q65,95 65,80 Q65,70 60,60 Q65,50 65,30 Q65,5 40,5 Z"/>
  </g>
  <!-- Flower eyes -->
  <g fill="#ff6b35">
    <circle cx="28" cy="35" r="6"/>
    <circle cx="52" cy="35" r="6"/>
  </g>
  <circle cx="28" cy="35" r="3" fill="#8a2aba"/>
  <circle cx="52" cy="35" r="3" fill="#8a2aba"/>
  <!-- Decorative mouth/teeth -->
  <path d="M25,65 L30,70 L35,65 L40,70 L45,65 L50,70 L55,65" fill="none" stroke="#8a2aba" stroke-width="1"/>
  <!-- Forehead decoration -->
  <path d="M30,15 Q40,5 50,15" fill="none" stroke="#ff6b35" stroke-width="2"/>
  <circle cx="40" cy="12" r="3" fill="#ffcc00"/>
</svg>
```

### 3) Marigold Border

Cempasuchil (marigold) petal pattern border.

```html
<div class="flex justify-around py-2">
  <span class="text-2xl">🌼</span>
  <span class="text-2xl">🌼</span>
  <span class="text-2xl">🌼</span>
  <span class="text-2xl">🌼</span>
  <span class="text-2xl">🌼</span>
</div>
```

Or SVG marigold circles: `rounded-full bg-[#ff8c1a] w-6 h-6` in a repeating row.

### 4) Ofrenda Surface

Warm candle-lit card surface.

- `bg-gradient-to-br from-[#3a1a4a] to-[#2a0a3a] border-2 border-[#ff8c1a] p-6 shadow-[0_0_20px_rgba(255,140,26,0.15)]`.
- Candle glow: `shadow-[0_0_30px_rgba(255,140,26,0.1)]`.

### 5) Calavera Button

Vibrant festive button.

- `bg-gradient-to-r from-[#8a2aba] to-[#6a1a9a] text-[#ffcc00] font-bold uppercase tracking-wider px-8 py-3 border-2 border-[#ff8c1a] shadow-[0_0_15px_rgba(138,42,186,0.3)] hover:shadow-[0_0_25px_rgba(255,140,26,0.4)] transition-all`.

### 6) Papel Picado Card

Card with cut-paper decorative edge.

- `bg-[#ff6baa] p-6 [clip-path:polygon(0_0,100%_0,100%_100%,90%_85%,80%_100%,70%_85%,60%_100%,50%_85%,40%_100%,30%_85%,20%_100%,10%_85%,0_100%)]`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Mexican Purple | `#8a2aba` | Primary (purple represents mourning/faith) |
| Marigold Orange | `#ff8c1a` | Bright accent (cempasuchil flower) |
| Hot Pink | `#ff6baa` | Festive accent |
| Candle Yellow | `#ffcc00` | Light, warmth, gold |
| Sky Blue | `#5acaf0` | Rare cool accent |
| Ofrenda Dark | `#2a0a3a` | Dark surfaces |
 Bone White | `#f5ead0` | Skull/paper surface |
| Deep Red | `#c41e3a` | Blood/life accent |

Rules: Vibrant and celebratory. The palette should feel like a Mexican fiesta — bright purples, oranges, pinks, and yellows. No muted tones. Everything is alive with color.

## Typography Recommendations

- **Display:** Pacifico, Lobster, or Bungee (decorative, festive, Mexican-signage feel).
- **Body:** Nunito, Quicksand (rounded, friendly sans).
- **Labels:** `font-bold uppercase tracking-widest text-sm`.
- Typography should feel festive, celebratory, and full of life.

## Reusable Tailwind Tokens

- Ofrenda panel: `bg-gradient-to-br from-[#3a1a4a] to-[#2a0a3a] border-2 border-[#ff8c1a] shadow-[0_0_20px_rgba(255,140,26,0.15)]`.
- Calavera button: `bg-gradient-to-r from-[#8a2aba] to-[#6a1a9a] text-[#ffcc00] border-2 border-[#ff8c1a] shadow-[0_0_15px_rgba(138,42,186,0.3)]`.
- Papel picado edge: `[clip-path:polygon(...)]` with zigzag bottom.
- Marigold row: repeating `rounded-full bg-[#ff8c1a] w-6 h-6`.

## Quality Checklist

- At least one sugar skull / calavera motif.
- Papel picado cut-paper banner present.
- Marigold (orange) accents throughout.
- Vibrant purple/orange/pink color palette.
- At least one ofrenda (candle-lit) dark surface.
- Papel picado decorative edges on cards.
- Typography is festive and decorative.
- The aesthetic reads as Dia de los Muertos / Mexican folk art celebration.
- Everything feels joyful, vibrant, and celebratory — NOT morbid.
- Candle glow / warm light effects present.

## Anti-Patterns

- Muted or dark/dreary palettes (Dia de los Muertos is VIBRANT and CELEBRATORY).
- Morbid or scary skull imagery (sugar skulls are joyful and decorative).
- Missing papel picado banners (these are essential Mexican folk art).
- Missing marigold orange accents (cempasuchil is the flower of the dead).
- Somber funereal atmosphere (this is a CELEBRATION of life and death).
- Minimalist restraint (the aesthetic is maximalist and colorful).
- Sans-serif cold typography (needs festive decorative fonts).
- Missing candle/ofrenda warmth (the candle glow is the spiritual light).
- Sharp sterile edges (use papel picado decorative cut edges).
- Missing purple color (purple represents faith in the tradition).

## Accessibility Considerations

- Dark ofrenda surfaces with yellow/white text provide good contrast.
- Vibrant backgrounds with dark text must be verified (WCAG AA).
- Focus states: `focus:ring-2 focus:ring-[#ffcc00]/50` (candle gold ring).
- Sugar skull and papel picado SVGs must be `aria-hidden="true"` when decorative.
- The festive bright palette may cause visual overload — maintain clear hierarchy.
- Ensure touch targets are adequate despite decorative styling.
- Candle glow effects should not blur text readability.
