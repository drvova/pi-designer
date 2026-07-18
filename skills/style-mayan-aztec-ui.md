---
name: mayan-aztec-ui
description: Build Mayan/Aztec UI components (Mesoamerican stepped pyramids, geometric glyph patterns, jade and obsidian palette, feathered serpent motifs, calendar stone geometry, cocoa brown accents) with stepped-fret patterns, terraced card shapes, and the powerful aesthetic of pre-Columbian Mesoamerican civilizations. Trigger this skill when the user asks for Mayan, Aztec, Mesoamerican design, stepped pyramid, calendar stone, feathered serpent, or pre-Columbian interfaces.
---

# Mayan / Aztec UI

Use this skill to design and implement powerful interfaces inspired by Mesoamerican civilizations: stepped pyramid silhouettes, geometric glyph patterns, jade and obsidian palettes, feathered serpent (Quetzalcoatl) motifs, calendar stone radial geometry, and the monumental, ceremonial weight of Aztec and Mayan art.

## Core Material Recipes

### 1) Stepped Pyramid Card

Terraced card shape referencing temple pyramids.

- `bg-[#6a4a2a] [clip-path:polygon(10%_0,90%_0,90%_10%,85%_10%,85%_20%,80%_20%,80%_30%,75%_30%,75%_100%,25%_100%,25%_30%,20%_30%,20%_20%,15%_20%,15%_10%,10%_10%)] p-8 shadow-[0_4px_12px_rgba(0,0,0,0.2)]`.

### 2) Calendar Stone Radial Pattern

Concentric geometric calendar stone SVG.

```html
<svg viewBox="0 0 200 200" class="w-40 h-40 opacity-30">
  <g fill="none" stroke="#c4a043" stroke-width="0.5">
    <circle cx="100" cy="100" r="95"/>
    <circle cx="100" cy="100" r="80"/>
    <circle cx="100" cy="100" r="60"/>
    <circle cx="100" cy="100" r="35"/>
    <!-- 8-ray sun face -->
    <path d="M100,60 L105,75 L100,140 L95,75 Z" fill="#c4a043" opacity="0.3"/>
    <path d="M60,100 L75,95 L140,100 L75,105 Z" fill="#c4a043" opacity="0.3"/>
    <!-- Triangle border pattern (aztec glyph band) -->
  </g>
  <g fill="#c4a043" opacity="0.4">
    <polygon points="100,5 105,15 95,15"/>
    <polygon points="195,100 185,105 185,95"/>
    <polygon points="100,195 105,185 95,185"/>
    <polygon points="5,100 15,95 15,105"/>
  </g>
</svg>
```

### 3) Step Fret (Greca) Pattern Border

Classic Mesoamerican geometric border pattern.

```html
<svg viewBox="0 0 200 20" class="w-full text-[#c4a043] opacity-30">
  <g fill="none" stroke="currentColor" stroke-width="1">
    <path d="M0,15 L0,5 L10,5 L10,10 L20,10 L20,5 L30,5 L30,15 L20,15 L20,20 L40,20 L40,15" />
    <!-- Repeat pattern across width -->
  </g>
</svg>
```

### 4) Obsidian Panel

Dark volcanic glass surface.

- `bg-gradient-to-br from-[#1a1a2a] to-[#0a0a14] border-2 border-[#3a3a4a] p-8 shadow-[inset_0_2px_4px_rgba(80,80,120,0.1),0_0_15px_rgba(80,80,120,0.08)]`.
- Obsidian sheen: `shadow-[inset_0_1px_0_rgba(120,120,160,0.15)]`.

### 5) Jade Accent Panel

Precious Mesoamerican jade green surface.

- `bg-gradient-to-br from-[#3a8a6a] to-[#2a6a4a] border-2 border-[#1a4a2a] p-8 shadow-[0_4px_12px_rgba(42,106,74,0.2)]`.

### 6) Aztec Button

Geometric ceremonial button.

- `bg-[#8a1a1a] text-[#f5d76e] font-serif font-bold uppercase tracking-widest px-8 py-3 [clip-path:polygon(8px_0,calc(100%-8px)_0,100%_8px,100%_calc(100%-8px),calc(100%-8px)_100%,8px_100%,0_calc(100%-8px),0_8px)] hover:bg-[#6a1010] transition-colors`.

### 7) Feathered Serpent Motif

Quetzalcoatl decorative SVG accent.

```html
<svg viewBox="0 0 120 40" class="w-30 h-10 text-[#3a8a6a] opacity-30">
  <g fill="currentColor">
    <path d="M0,20 Q20,5 40,20 Q60,35 80,20 Q100,5 120,20" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <!-- Feathers -->
    <path d="M20,18 L18,10 M25,22 L28,30 M45,18 L42,10 M50,22 L53,30 M70,18 L67,10 M75,22 L78,30" stroke-width="0.5"/>
  </g>
</svg>
```

## Color Palette System

| Color | Hex | Material |
|---|---|---|
| Obsidian Black | `#1a1a2a` | Dark surface |
| Jade Green | `#3a8a6a` | Precious stone |
| Deep Jade | `#2a6a4a` | Secondary green |
| Terracotta | `#8a3a1a` | Ceramics |
| Gold | `#c4a043` | Ornaments, glyphwork |
| Light Gold | `#f5d76e` | Highlight, text on dark |
| Ceremonial Red | `#8a1a1a` | Blood, ritual |
| Limestone | `#d4c8a0` | Building stone |
| Cocoa | `#5a3a1a` | Text, structure |

Rules: Obsidian black, jade green, and gold form the core. Terracotta and ceremonial red provide warmth. The palette should feel like the interior of a Mesoamerican temple — volcanic stone, jade masks, gold ornaments, and limestone walls.

## Typography Recommendations

- **Display:** Cinzel, Trajan Pro (monumental inscription caps).
- **Body:** Lora, EB Garamond (classical readable serif).
- **Labels:** `font-serif font-bold uppercase tracking-widest text-sm`.

## Reusable Tailwind Tokens

- Stepped pyramid: `[clip-path:polygon(terraced_steps)]`.
- Obsidian: `bg-gradient-to-br from-[#1a1a2a] to-[#0a0a14] border-2 border-[#3a3a4a]`.
- Jade: `bg-gradient-to-br from-[#3a8a6a] to-[#2a6a4a] border-2 border-[#1a4a2a]`.
- Aztec button: `bg-[#8a1a1a] text-[#f5d76e] [clip-path:octagon]`.
- Greca border: SVG stepped-fret geometric pattern in gold.

## Quality Checklist

- At least one stepped pyramid (terraced clip-path) element.
- At least one calendar stone radial SVG pattern.
- Step-fret (greca) geometric border present.
- Obsidian black or jade green surfaces used.
- Feathered serpent (Quetzalcoatl) decorative motif.
- Geometric octagonal clip-path on buttons.
- Color palette is obsidian + jade + gold + terracotta.
- Typography is monumental inscription serif.
- The aesthetic reads as Mayan/Aztec / Mesoamerican ceremonial.
- Everything feels powerful, geometric, and monumentally heavy.

## Anti-Patterns

- Missing stepped pyramid shapes (these are the architectural signature).
- Missing geometric glyph/greca patterns (Mesoamerican geometry is essential).
- Bright modern colors (palette is obsidian + jade + gold + terracotta).
- Smooth rounded shapes (Mesoamerican design is angular and geometric).
- Missing the calendar stone radial pattern (the Sun Stone is iconic).
- Sans-serif typography (Mesoamerican design pairs with monumental serif).
- Missing the feathered serpent motif (Quetzalcoatl is a key deity reference).
- Light airy atmosphere (the aesthetic is monumental and ceremonial).
- Soft pastel tones (palette is dark obsidian + rich jade + gold).
- Missing octagonal/geometric clip-path on buttons (angular geometry is key).

## Accessibility Considerations

- Obsidian dark surfaces with gold text provide good contrast (verify WCAG AA).
- Focus states: `focus:ring-2 focus:ring-[#f5d76e]/50` (gold ring on obsidian).
- Calendar stone and serpent SVGs must be `aria-hidden="true"` when decorative.
- Stepped pyramid clip-paths must not cut off interactive areas.
- Touch targets must be adequate despite angular geometric styling.
- The dark palette is low eye-strain for extended viewing.
