---
name: goblincore-ui
description: Build goblincore UI components (earthy mossy textures, foraged mushrooms, forest floor debris, cracked porcelain, rusty keys, hoarded trinkets, candle-lit cave warmth) with moss greens, muddy browns, and the feral comfort of the goblin aesthetic. Trigger this skill when the user asks for goblincore, forest floor, mossy earthy, foraged aesthetic, cave cozy, or feral cottage interfaces.
---

# Goblincore UI

Use this skill to design and implementation earthy, feral interfaces inspired by the goblincore aesthetic: moss-covered surfaces, foraged mushroom decorations, forest floor textures, cracked-and-mended ceramics, rusty found objects, candle-lit warmth, and the cozy dirtiness of a creature's hoard.

## Core Material Recipes

### 1) Mossy Earth Surface

Dark earthy background with moss texture.

- `bg-gradient-to-br from-[#2a3a1a] via-[#1a2a10] to-[#0a1a08]`.
- Moss: `bg-[radial-gradient(ellipse_at_30%_40%,rgba(100,140,50,0.08)_0%,transparent_30%)]`.
- Specks: `bg-[radial-gradient(rgba(120,100,60,0.1)_1px,transparent_1px)] bg-[size:8px_8px]` (dirt/fungus specks).

### 2) Cracked Porcelain Shard Card

Mended broken pottery surface.

- `bg-[#e0dccc] p-6 [clip-path:polygon(0_5%,12%_0,35%_8%,50%_0,75%_10%,100%_5%,95%_100%,70%_92%,40%_100%,15%_95%,0_90%)] shadow-[0_4px_8px_rgba(0,0,0,0.2)]`.
- Kintsugi crack: thin SVG gold/bronze line running across the surface `stroke="#8a6a2a" stroke-width="1"` (broken-and-mended with gold).

### 3) Mushroom Accent

Simple foraged mushroom SVG.

```html
<svg viewBox="0 0 40 50" class="w-10 h-12 opacity-50">
  <ellipse cx="20" cy="15" rx="15" ry="10" fill="#8a4a30"/>
  <ellipse cx="15" cy="12" rx="3" ry="2" fill="#e8dcc0" opacity="0.6"/>
  <ellipse cx="25" cy="14" rx="2" ry="1.5" fill="#e8dcc0" opacity="0.5"/>
  <rect x="16" y="20" width="8" height="25" rx="3" fill="#e0dccc"/>
</svg>
```

### 4) Candle-Lit Glow Panel

Warm candlelight on dark earth.

- `bg-[#1a1208] border border-[#5a3a1a] p-8 shadow-[inset_0_0_30px_rgba(255,180,80,0.05),0_0_15px_rgba(255,160,60,0.06)]`.

### 5) Goblin Button

Earthy, rough-hewn button.

- `bg-gradient-to-b from-[#4a5a2a] to-[#2a3a1a] text-[#c4a878] font-serif font-medium px-8 py-3 border border-[#3a4a1a] shadow-[0_3px_0_#1a2a08] hover:translate-y-1 hover:shadow-[0_1px_0_#1a2a08] active:shadow-none transition-all`.

### 6) Rusty Key Accent

Found object decoration (rusty key or coin).

```html
<svg viewBox="0 0 20 50" class="w-5 h-12 opacity-40">
  <circle cx="10" cy="8" r="6" fill="none" stroke="#8a5a2a" stroke-width="2"/>
  <rect x="8" y="14" width="4" height="30" fill="#8a5a2a"/>
  <rect x="8" y="35" width="6" height="3" fill="#8a5a2a"/>
  <rect x="8" y="30" width="4" height="2" fill="#8a5a2a"/>
</svg>
```

### 7) Twine / Rustic String Divider

Rough twine binding element.

- `h-1 bg-[#8a7a4a] rounded-full bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_2px,rgba(0,0,0,0.15)_2px,rgba(0,0,0,0.15)_3px)]` (rough twine texture).

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Deep Earth | `#1a1208` | Dark background |
| Mossy Green | `#4a5a2a` | Primary accent |
| Forest Dark | `#2a3a1a` | Surface |
| Fungus Brown | `#8a4a30` | Mushroom caps |
| Dirt Speck | `#786440` | Texture |
| Candle Orange | `#ffa040` | Warm light glow |
| Cracked Ceramic | `#e0dccc` | Shard cards |
| Rust | `#8a5a2a` | Found objects |
| Twine | `#8a7a4a` | Rustic dividers |

Rules: Dark earthy greens and browns dominate. Nothing is clean, bright, or polished. Everything looks foraged, found, and slightly dirty. Candle warmth provides the only light.

## Typography Recommendations

- **Display:** MedievalSharp, Almendra, or Cormorant (rough medieval/organic serif).
- **Body:** Lora, EB Garamond (warm aged serif).
- **Labels:** `font-serif font-medium text-sm text-[#c4a878]`.
- Typography should feel hand-scrawled, earthy, and slightly unrefined.

## Reusable Tailwind Tokens

- Mossy earth: `bg-gradient-to-br from-[#2a3a1a] to-[#0a1a08]`.
- Cracked shard: `[clip-path:polygon(...irregular...)] bg-[#e0dccc]`.
- Candle glow: `shadow-[inset_0_0_30px_rgba(255,180,80,0.05)]`.
- Goblin button: `bg-gradient-to-b from-[#4a5a2a] to-[#2a3a1a] text-[#c4a878] border border-[#3a4a1a] shadow-[0_3px_0_#1a2a08]`.
- Twine: `h-1 bg-[#8a7a4a] rounded-full` with rough pattern overlay.

## Quality Checklist

- Background is dark mossy earth (green-brown, not clean).
- At least one mushroom or fungus SVG decoration.
- At least one cracked/mended ceramic surface (kintsugi or irregular clip-path).
- Candle-lit warm glow on dark surfaces.
- Earthy color palette (moss green, dirt brown, rust, candle orange).
- Rusty found-object decorations (keys, coins).
- Rough twine/string dividers.
- Typography is rough organic/medieval serif.
- The aesthetic reads as goblincore / forest floor / feral cozy.
- Everything feels foraged, dirty, and wonderfully earthy.

## Anti-Patterns

- Clean bright polished surfaces (goblincore is DIRTY and EARTHEN).
- Modern minimalist design (goblincore is cluttered with found objects).
- Bright saturated colors (palette is muted earth tones).
- Smooth perfect shapes (everything is cracked, mossy, or irregular).
- Sans-serif typography (goblincore needs rough organic/medieval serif).
- Missing mushroom/fungus decorations (these are essential goblincore motifs).
- Missing candle-lit warmth (the cave/hole light source).
- Missing cracked ceramics (kintsugi or broken-and-mended objects).
- Light airy aesthetic (goblincore is dark, cozy, subterranean).
- Perfect symmetric layouts (goblincore is asymmetrical and hoarded).

## Accessibility Considerations

- Dark earthy backgrounds with light cream/gold text provide good contrast (verify WCAG AA).
- Focus states: `focus:ring-2 focus:ring-[#c4a878]/40` (warm gold ring on dark earth).
- Decorative SVGs (mushrooms, keys) must be `aria-hidden="true"`.
- The dark aesthetic is low eye-strain (good for extended viewing).
- Touch targets must be adequate despite rough earthen styling.
- Cracked clip-path shapes must not cut off interactive areas.
