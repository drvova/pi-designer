---
name: zine-punk-ui
description: Build zine punk UI components (DIY photocopy aesthetic, hand-stapled booklet styling, toner-bleed textures, cut-and-paste layouts, sharpie handwriting, DIY punk culture) with photocopier distress, ransom-note typography, and the raw self-published energy of zine culture. Trigger this skill when the user asks for zine punk, DIY zine, photocopy aesthetic, cut-and-paste layout, punk publishing, or underground press interfaces.
---

# Zine Punk UI

Use this skill to design and implementation raw, self-published interfaces inspired by DIY zine culture: photocopier distress textures, cut-and-paste collage layouts, ransom-note typography, toner-bleed effects, sharpie handwriting, and the raw, authentic energy of underground self-publishing.

## Core Material Recipes

### 1) Photocopier Background

Grainy photocopy paper surface.

- `bg-[#f0ede8]` (newsprint gray-white).
- Toner texture: SVG `feTurbulence` at `opacity-[0.08]` with `mix-blend-multiply` (heavy grain).
- Streak: `bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.04)_30%,transparent_31%)]` (copy streak).

### 2) Ransom Note Typography

Words assembled from different cut-out letters.

- Each letter: different `font-family`, `font-size`, `bg-color`, and `padding` (as if cut from different sources).
- Letter rotation: random `rotate-[Ndeg]` per letter.
- Example: `<span class="font-serif text-2xl bg-white px-1">D</span><span class="font-mono text-xl bg-black text-white px-1">I</span><span class="font-bold text-3xl bg-[#ffcc00] px-1">Y</span>`.

### 3) Sharpie Heading

Hand-written heading with thick marker effect.

- `font-[Permanent_Marker] text-4xl text-[#1a1a1a] tracking-wide` with slight rotation `rotate-[-1deg]`.

### 4) Stapled Edge Accent

DIY booklet stapled binding.

- Left edge: `border-l-2 border-[#8a8a8a]` with small silver rectangles (staples): `absolute left-0 top-[25%] w-3 h-1 bg-[#c0c0c0] shadow-[1px_1px_1px_rgba(0,0,0,0.3)]`.

### 5) Toner-Bleed Button

Button with photocopier ink-bleed effect.

- `bg-[#1a1a1a] text-[#f0ede8] font-mono font-bold uppercase text-sm px-6 py-3 shadow-[2px_2px_0_rgba(0,0,0,0.4)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all`.

### 6) Cut-and-Paste Card

Card with irregular cut edges.

- `bg-white p-6 [clip-path:polygon(2%_0,98%_1%,100%_98%,1%_100%)] shadow-[3px_3px_8px_rgba(0,0,0,0.2)]` (irregular cut edge).
- Tape strip: `absolute -top-2 left-1/3 w-16 h-6 bg-[#ffcc00]/30 rotate-[-3deg]` (cellophane tape).

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Newsprint | `#f0ede8` | Primary background |
| Toner Black | `#1a1a1a` | Primary text, ink |
| Sharpie Black | `#0a0a0a` | Headings |
| Photocopy Gray | `#8a8a8a` | Muted elements |
| Highlighter Yellow | `#ffcc00` | Accent, tape |
| Red Pen | `#dc2626` | Corrections, stamps |
| Ballpoint Blue | `#1a3a8a` | Handwritten accents |

Rules: Mostly black-and-white newsprint with occasional bright accents (yellow tape, red pen marks). The palette should feel like a black-and-white photocopier with hand-applied color.

## Typography Recommendations

- **Sharpie headings:** Permanent Marker, Caveat (thick marker).
- **Typewriter body:** Courier Prime, Special Elite (typewriter font).
- **Ransom note:** Mix of ALL fonts randomly per letter.
- **Labels:** `font-mono font-bold uppercase text-xs tracking-wider`.
- The key is MIXING — every element should look like it was sourced from a different publication.

## Reusable Tailwind Tokens

- Photocopy bg: `bg-[#f0ede8]` with heavy SVG noise overlay.
- Ransom note: mixed `font-*`, `bg-*`, and `rotate-*` per letter.
- Sharpie: `font-[Permanent_Marker] text-[#1a1a1a]`.
- Toner button: `bg-[#1a1a1a] text-[#f0ede8] shadow-[2px_2px_0_rgba(0,0,0,0.4)]`.
- Cut edge: `[clip-path:polygon(2%_0,98%_1%,100%_98%,1%_100%)]`.
- Tape strip: `bg-[#ffcc00]/30 rotate-[-3deg]`.

## Quality Checklist

- Background has heavy photocopier grain/texture.
- At least one ransom-note typography element (mixed fonts per letter).
- Sharpie/marker handwritten heading present.
- Cut-and-paste card with irregular clip-path edges.
- Toner-bleed offset shadows on buttons.
- Staple or tape decorations present.
- Typography mixes at least 3 different font families.
- The aesthetic reads as a self-published DIY punk zine.
- Everything feels raw, authentic, and handmade.
- Color is mostly newsprint B&W with occasional bright accent.

## Anti-Patterns

- Clean polished digital design (zines are raw and photocopied).
- Single consistent font (zines mix fonts from cut-out sources).
- Smooth gradients or glossy effects (zine aesthetic is matte and grainy).
- Perfect alignment (everything should be slightly off, cut, and pasted).
- Light subtle textures (zine grain should be HEAVY and visible).
- Professional corporate styling (zines are anti-corporate by nature).
- Missing the photocopy/toner distress (this is the signature texture).
- Symmetrical grid layout (zine is chaotic cut-and-paste).
- Bright multi-color palettes (zines are mostly B&W with rare accents).
- Missing sharpie/handwriting elements (these add the personal DIY touch).
