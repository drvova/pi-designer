---
name: darkroom-ui
description: Build darkroom UI components (photography developing, red safelight ambiance, chemical trays, film negatives, developing prints, amber bottle chemistry, the alchemical magic of analog photography) with deep red safelight glow, monochrome image treatments, and the mysterious ritual of film development. Trigger this skill when the user asks for darkroom design, photography developing, red safelight, film darkroom, analog photo, or developing room interfaces.
---

# Darkroom UI

Use this skill to design and implement atmospheric interfaces inspired by analog photography darkrooms: deep red safelight illumination, chemical developing trays, film strip negatives, emerging print quality, amber chemistry bottles, and the quiet, alchemical ritual of light becoming image.

## Core Material Recipes

### 1) Safelight Background

The signature darkroom surface: deep red ambient light in darkness.

- `bg-[#1a0505]` (near-black with red tint).
- Red glow: `bg-[radial-gradient(ellipse_at_50%_30%,rgba(200,30,30,0.12)_0%,transparent_60%)]`.
- The red is AMBIENT (filling the space) not a screen-filling bright color.

### 2) Developing Tray Panel

Dark chemical tray surface.

- `bg-gradient-to-br from-[#2a1515] to-[#1a0a0a] border border-[#4a2020] rounded-lg p-8 shadow-[0_0_20px_rgba(200,30,30,0.06)]`.

### 3) Film Strip Accent

Film negative strip decoration.

- `bg-[#0a0a0a] h-8 flex items-center gap-1 p-1` with frame cutouts: children `w-12 h-6 bg-[#2a2a2a] border border-[#1a1a1a]` separated by `w-1 h-full bg-[#0a0a0a]` (the perforation gaps).
- Sprocket holes: `bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_4px,#000_4px,#000_5px)] h-1` at top and bottom.

### 4) Emerging Print Card

A photograph "emerging" in the developer — partially visible.

- `bg-[#d4c4a8] border border-[#5a3a1a] p-4` with content partially obscured: `[mask-image:radial-gradient(circle_at_50%_50%,black_30%,transparent_70%)]` (center is visible, edges fade — like a print developing).

### 5) Amber Bottle Accent

Darkroom chemical bottle SVG.

```html
<svg viewBox="0 0 30 60" class="w-8 h-16">
  <rect x="8" y="10" width="14" height="45" rx="2" fill="#8a5a1a" opacity="0.7"/>
  <rect x="11" y="2" width="8" height="10" fill="#5a3a0a"/>
  <rect x="10" y="20" width="10" height="8" fill="#d4c4a8" opacity="0.8"/>
  <text x="15" y="26" font-size="3" fill="#3a1a08" text-anchor="middle">D-76</text>
</svg>
```

### 6) Darkroom Button

Red-lit developing button.

- `bg-gradient-to-b from-[#8a1a1a] to-[#4a0808] text-[#e8c4a0] font-mono text-sm uppercase tracking-widest px-8 py-3 border border-[#c43030]/40 shadow-[0_0_15px_rgba(200,30,30,0.15)] hover:shadow-[0_0_25px_rgba(200,30,30,0.3)] transition-all`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Darkroom Black | `#1a0505` | Primary background |
| Safelight Red | `rgba(200,30,30,0.12)` | Ambient glow |
| Deep Red | `#4a0808` | Dark surfaces |
| Developer Brown | `#d4c4a8` | Print/paper surface |
| Amber | `#8a5a1a` | Chemical bottles |
| Faded Photo | `#8a7a6a` | Monochrome images |
| Warm Red | `#8a1a1a` | Interactive accent |
| Pale Amber | `#e8c4a0` | Text on dark |

Rules: The palette is DARK with RED ambient light. Brown/amber tones reference photographic chemistry and paper. Everything should feel like it's lit by a single safelight bulb in an otherwise pitch-black room.

## Typography Recommendations

- **Display:** Courier Prime, IBM Plex Mono (typewriter/technical — like photo log notes).
- **Body:** Lora (warm readable serif for print text).
- **Labels:** `font-mono text-xs uppercase tracking-widest text-[#e8c4a0]/60` (chemical labels like "D-76", "FIXER", "STOP").

## Reusable Tailwind Tokens

- Safelight bg: `bg-[#1a0505] bg-[radial-gradient(ellipse_at_50%_30%,rgba(200,30,30,0.12)_0%,transparent_60%)]`.
- Developing tray: `bg-gradient-to-br from-[#2a1515] to-[#1a0a0a] border border-[#4a2020]`.
- Darkroom button: `bg-gradient-to-b from-[#8a1a1a] to-[#4a0808] text-[#e8c4a0] shadow-[0_0_15px_rgba(200,30,30,0.15)]`.
- Film strip: dark row with frame cutouts and sprocket holes.
- Amber bottle: SVG brown bottle with label.

## Quality Checklist

- Background is dark with red ambient safelight glow.
- At least one film strip or negative decoration.
- Amber chemical bottle accent present.
- Color palette is dark-black + safelight-red + amber-brown.
- Developing tray panel surfaces used.
- Monochrome/sepia image treatment on photos.
- Typography mixes monospace (technical) with serif (warm).
- The aesthetic reads as photography darkroom / analog developing.
- Everything feels mysterious, alchemical, and quietly ritualistic.
- Red is AMBIENT GLOW, not screen-filling bright red.

## Anti-Patterns

- Bright red backgrounds (the red is AMBIENT — deep darkness with red glow).
- Bright multi-color palettes (darkroom is monochrome + safelight red + amber).
- Missing film strip or negative decorations (these are essential photo references).
- Light or bright surfaces (darkroom is DARK).
- Missing chemical bottle decorations (amber bottles are signature props).
- Modern digital photography references (this is ANALOG FILM developing).
- Fast bright animations (motion should be slow and contemplative).
- Missing the developing tray surfaces (these are where prints emerge).
- Sans-serif cold typography (darkroom mixes warm serif with technical mono).
- Cheerful bright atmosphere (darkroom is mysterious and ritualistic).

## Accessibility Considerations

- Dark backgrounds with amber/cream text must be carefully verified (WCAG AA — `#e8c4a0` on `#1a0505` passes).
- Focus states: `focus:ring-2 focus:ring-[#c43030]/50` (red glow ring on dark).
- Film strip and chemical bottle SVGs must be `aria-hidden="true"` when decorative.
- The dark aesthetic is low eye-strain but the red tint may affect some users.
- Safelight glow must not reduce text contrast.
- Touch targets must be adequate despite dark atmospheric styling.
