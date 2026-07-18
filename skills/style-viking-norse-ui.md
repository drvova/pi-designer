---
name: viking-norse-ui
description: Build Viking/Norse UI components (runic inscriptions, Mammen-style carvings, Urnes-style interlace, raven motifs, longship curves, dragon-head ornaments, aged bronze and iron) with runic typography accents, carved wood textures, and the rugged aesthetic of Norse craftsmanship. Trigger this skill when the user asks for Viking design, Norse UI, runic interface, Scandinavian medieval, dragon-prow, or Norse mythology interfaces.
---

# Viking / Norse UI

Use this skill to design and implementation rugged, ornate interfaces inspired by Viking Age art: runic inscriptions, Mammen-style carved ornamentation, Urnes-style interlaced animals, raven and dragon motifs, longship decorative elements, and the fierce craftsmanship of Norse artisans.

## Core Material Recipes

### 1) Carved Wood Surface

Aged oak or pine carved panel surface.

- `bg-gradient-to-br from-[#4a3a1a] via-[#3a2a10] to-[#2a1a08] border-2 border-[#5a4a2a] p-8 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]`.
- Wood grain: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_3px,rgba(0,0,0,0.04)_3px,rgba(0,0,0,0.04)_4px)]`.

### 2) Runic Inscription Accent

Elder Futhark or Younger Futhark runic text.

- `font-serif text-lg text-[#8a7a4a] tracking-[0.3em]` showing runes: ᚠᚢᚦᚨᚱᚲ (FUThARK).
- Or use Runic font: `font-[Noto_Futo_Runic]`.

### 3) Urnes-Style Interlace

Norse animal-interlace ornament (serpent/dragon looped patterns).

```html
<svg viewBox="0 0 200 40" class="w-full text-[#8a7a4a] opacity-30">
  <g fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M0,20 Q30,5 60,20 Q90,35 120,20 Q150,5 180,20 Q195,28 200,20"/>
    <path d="M0,20 Q30,35 60,20 Q90,5 120,20 Q150,35 180,20 Q195,12 200,20"/>
    <!-- Interlace cross-points -->
    <rect x="28" y="16" width="4" height="8" fill="#3a2a10"/>
    <rect x="58" y="16" width="4" height="8" fill="#3a2a10"/>
    <rect x="88" y="16" width="4" height="8" fill="#3a2a10"/>
    <rect x="118" y="16" width="4" height="8" fill="#3a2a10"/>
    <rect x="148" y="16" width="4" height="8" fill="#3a2a10"/>
    <rect x="178" y="16" width="4" height="8" fill="#3a2a10"/>
  </g>
</svg>
```

### 4) Raven/Dragon Motif

Simple Norse raven or dragon-head SVG.

```html
<svg viewBox="0 0 60 40" class="w-12 h-8 text-[#8a7a4a] opacity-40">
  <path fill="currentColor" d="M5,30 Q15,10 30,15 Q35,5 45,12 Q55,8 58,18 Q55,25 50,28 L50,35 Q40,35 35,30 L25,32 Q15,35 5,30"/>
  <circle cx="48" cy="16" r="1.5" fill="#3a2a10"/>
</svg>
```

### 5) Iron-Bound Button

Rugged iron and bronze button.

- `bg-gradient-to-b from-[#4a4a4a] to-[#2a2a2a] text-[#c4a843] font-bold uppercase tracking-wider px-8 py-3 border-2 border-[#8a7a4a] shadow-[0_3px_0_#1a1a1a] hover:translate-y-1 hover:shadow-[0_1px_0_#1a1a1a] active:shadow-none transition-all`.

### 6) Bronze Ring-Head Pin

Norse ring-headed pin decoration.

- `w-4 h-4 rounded-full bg-gradient-to-br from-[#c4a843] to-[#8a6a1a] border border-[#5a4a1a]` (bronze rivet/pin at corners of panels).

## Color Palette System

| Color | Hex | Material |
|---|---|---|
| Aged Oak | `#4a3a1a` | Carved wood surface |
| Dark Wood | `#2a1a08` | Deep shadow |
| Bronze | `#c4a843` | Metal ornaments |
| Dark Bronze | `#8a7a4a` | Secondary metal |
| Iron Gray | `#4a4a4a` | Weapons, tools |
| Dark Iron | `#2a2a2a` | Deep metal |
| Bone White | `#e8dcc0` | Text on dark |
| Blood Red | `#8a1a1a` | Rune accents |

Rules: Carved wood browns and bronze/iron metals dominate. The palette should feel like a Viking longhouse: dark wood, iron, and firelight. Colors are earthy, rugged, and masculine.

## Typography Recommendations

- **Display:** Cinzel, UnifrakturMaguntia (classical/runed feel).
- **Body:** EB Garamond, Lora (readable serif with weight).
- **Runes:** Noto Futo Runic for authentic runic text accents.
- **Labels:** `font-bold uppercase tracking-widest text-sm text-[#c4a843]`.

## Reusable Tailwind Tokens

- Carved wood: `bg-gradient-to-br from-[#4a3a1a] to-[#2a1a08] border-2 border-[#5a4a2a] shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]`.
- Iron button: `bg-gradient-to-b from-[#4a4a4a] to-[#2a2a2a] text-[#c4a843] border-2 border-[#8a7a4a]`.
- Bronze pin: `rounded-full bg-gradient-to-br from-[#c4a843] to-[#8a6a1a]`.
- Urnes interlace: SVG interwoven paths with over/under cross-points.

## Quality Checklist

- At least one carved wood surface (dark oak texture).
- At least one runic inscription or rune accent.
- Urnes-style or Mammen-style interlace ornament present.
- Raven or dragon-head decorative motif.
- Color palette is aged wood + bronze/iron (earthy and rugged).
- Bronze pin/rivet decorations at panel corners.
- Typography includes runic or medieval serif elements.
- The aesthetic reads as Viking Age / Norse craftsmanship.
- Everything feels rugged, ornate, and battle-ready.
- Iron and bronze metal surfaces present alongside carved wood.

## Anti-Patterns

- Light bright palettes (Viking aesthetic is dark wood and iron).
- Missing runic inscriptions (runes are the signature text element).
- Missing Urnes/Mammen interlace (Norse animal interlace is characteristic).
- Modern clean surfaces (everything should look hand-carved).
- Sans-serif typography (need medieval serif or runic fonts).
- Missing the raven/dragon motifs (these are key Norse symbols).
- Smooth polished metal (Norse metal is aged bronze and rough iron).
- Light wood tones (use dark aged oak like `#4a3a1a`).
- Celtic-style knotwork (Viking interlace is different — more animal/serpentine).
- Missing wood-grain texture (carved surfaces need visible grain).
