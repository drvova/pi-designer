---
name: inca-andean-ui
description: Build Inca/Andean UI components (terrace mountain architecture, geometric textile patterns, llama/alpaca motifs, tunic band designs, Inti sun god rays, earth and sky duality, Machu Picchu stonework) with precise stone masonry textures, woven band borders, and the monumental precision of the Inca empire. Trigger this skill when the user asks for Inca, Andean, Quechua, Machu Picchu, South American indigenous, or highland empire interfaces.
---

# Inca / Andean UI

Use this skill to design and implementation monumental interfaces inspired by the Inca Empire: precision stone masonry (Machu Picchu ashlar), terraced mountain architecture, geometric textile band patterns, llama/alpaca silhouettes, Inti sun god ray motifs, and the high-altitude civilization of the Andes.

## Core Material Recipes

### 1) Ashlar Stone Surface

Precision-cut Inca stonework (polygonal blocks fitting perfectly).

- `bg-[#8a8a7a]` (gray Andean granite).
- Stone pattern: SVG irregular polygon blocks fitting edge-to-edge with thin mortar lines `stroke="#5a5a4a" stroke-width="0.5"`.

### 2) Terraced Panel

Stepped terrace card (like Andean agricultural terraces).

- `bg-[#6a5a3a] [clip-path:polygon(0_0,100%_0,100%_85%,90%_90%,90%_100%,10%_100%,10%_90%,0_85%)] p-6 shadow-[0_4px_8px_rgba(0,0,0,0.2)]`.

### 3) Woven Textile Band Border

Geometric Andean textile pattern divider.

```html
<svg viewBox="0 0 200 16" class="w-full">
  <g fill="#c41e1e">
    <polygon points="0,8 10,0 20,8 10,16"/>
  </g>
  <g fill="#1a3a5a">
    <polygon points="20,8 30,0 40,8 30,16"/>
  </g>
  <g fill="#f5cc3a">
    <polygon points="40,8 50,0 60,8 50,16"/>
  </g>
  <g fill="#2a6a3a">
    <polygon points="60,8 70,0 80,8 70,16"/>
  </g>
</svg>
```

### 4) Inti Sun Motif

Sun god ray decoration.

```html
<svg viewBox="0 0 100 100" class="w-20 h-20 opacity-30">
  <g fill="#f5cc3a" stroke="#c47a1a" stroke-width="0.5">
    <circle cx="50" cy="50" r="20"/>
    <path d="M50,5 L53,20 L47,20 Z M50,95 L53,80 L47,80 Z M5,50 L20,47 L20,53 Z M95,50 L80,47 L80,53 Z"/>
    <path d="M18,18 L30,25 L26,30 Z M82,18 L70,25 L74,30 Z M18,82 L30,75 L26,70 Z M82,82 L70,75 L74,70 Z"/>
  </g>
</svg>
```

### 5) Llama Silhouette Accent

Andean pack animal SVG.

```html
<svg viewBox="0 0 60 60" class="w-15 h-15 opacity-40">
  <g fill="#3a2a1a">
    <path d="M25,5 Q30,8 25,15 Q20,12 25,5"/>
    <path d="M35,5 Q40,8 35,15 Q30,12 35,5"/>
    <path d="M20,15 L40,15 L42,30 L38,50 L34,50 L32,32 L28,32 L26,50 L22,50 L18,30 Z"/>
    <path d="M18,50 L20,58 L16,58 Z M38,50 L40,58 L44,58 Z"/>
  </g>
</svg>
```

### 6) Inca Button

Stone-and-gold monumental button.

- `bg-[#6a5a3a] text-[#f5cc3a] font-serif font-bold uppercase tracking-widest px-8 py-3 border-2 border-[#3a2a10] [clip-path:polygon(6px_0,calc(100%-6px)_0,100%_6px,100%_calc(100%-6px),calc(100%-6px)_100%,6px_100%,0_calc(100%-6px),0_6px)] shadow-[3px_3px_0_#3a2a10] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all`.

## Color Palette System

| Color | Hex | Material |
|---|---|---|
| Andean Granite | `#8a8a7a` | Stone surfaces |
| Earth Brown | `#6a5a3a` | Terraced panels |
| Dark Earth | `#3a2a10` | Shadows, borders |
| Inti Gold | `#f5cc3a` | Sun god, accents |
| Inca Red | `#c41e1e` | Textile pattern |
| Andean Blue | `#1a3a5a` | Textile pattern |
| Highland Green | `#2a6a3a` | Textile pattern |
| Stone Gray | `#a8a898` | Light stone |

Rules: Earthy granite browns/grays dominate. Gold (Inti sun), red, blue, and green appear in woven textile patterns. The palette should feel like the Andean highlands — stone temples, woven textiles, and golden sun.

## Typography Recommendations

- **Display:** Cinzel, Trajan Pro (monumental inscription caps).
- **Body:** Lora, EB Garamond (warm readable serif).
- **Labels:** `font-serif font-bold uppercase tracking-widest text-sm text-[#f5cc3a]`.

## Reusable Tailwind Tokens

- Ashlar stone: `bg-[#8a8a7a]` with polygonal SVG block pattern.
- Terraced panel: `[clip-path:polygon(stepped)] bg-[#6a5a3a]`.
- Inca button: `bg-[#6a5a3a] text-[#f5cc3a] [clip-path:octagon] shadow-[3px_3px_0_#3a2a10]`.
- Woven band: SVG repeating diamond/rhombus pattern in red/blue/yellow/green.
- Inti sun: SVG circle with triangular rays in gold.

## Quality Checklist

- At least one terraced panel (stepped clip-path).
- At least one woven textile band border.
- Inti sun god ray decoration present.
- Llama/alpaca silhouette accent.
- Color palette is earthy granite + Inti gold + woven textile colors.
- Octagonal clip-path on buttons (monumental geometric precision).
- Typography is monumental inscription serif.
- The aesthetic reads as Inca / Andean / South American indigenous.
- Everything feels monumental, geometric, and high-altitude.
- Precision stonework texture referenced (ashlar polygonal blocks).

## Anti-Patterns

- Missing terrace/stepped shapes (Andean terraces are iconic).
- Missing woven textile patterns (geometric bands are essential Inca art).
- Bright modern colors (palette is earthy stone + sun gold + textile reds/blues).
- Missing the Inti sun motif (the sun god is central to Inca religion).
- Smooth round shapes (Inca design is angular and geometric).
- Missing llama/alpaca references (these are essential Andean animals).
- Sans-serif typography (Inca design pairs with monumental serif).
- Missing the octagonal clip-path buttons (Inca geometry is angular).
- Light airy atmosphere (the aesthetic is monumental and high-altitude).
- Missing the stone masonry texture (Machu Picchu ashlar is world-famous).

## Accessibility Considerations

- Earthy surfaces with gold text must be verified for contrast (WCAG AA).
- Focus states: `focus:ring-2 focus:ring-[#f5cc3a]/50` (gold ring on stone).
- Decorative SVGs (sun, llama, textile) must be `aria-hidden="true"`.
- Terraced clip-path shapes must not cut off interactive areas.
- Respect the cultural significance of Inca symbols — use thoughtfully.
- Touch targets must be adequate despite angular geometric styling.
