---
name: linocut-ui
description: Build linocut UI components (relief printmaking texture, bold carved lines, high-contrast black-on-color, visible gouge marks, hand-pressed ink variation, block print aesthetic) with carved bold lines, limited palettes, and the tactile craft of linoleum block printing. Trigger this skill when the user asks for linocut, block print, relief print, woodcut UI, gouge texture, or carved printmaking interfaces.
---

# Linocut UI

Use this skill to design and implementation bold, textured interfaces inspired by linocut and woodcut relief printmaking: high-contrast carved lines, visible gouge marks, ink-pressed textures, limited palettes, and the raw tactile craft of block printing.

## Core Material Recipes

### 1) Linocut Print Surface

Background suggesting ink pressed onto paper from a carved block.

- `bg-[#e8dcc0]` (warm rice paper).
- Texture: SVG `feTurbulence` at `opacity-[0.06]` with `mix-blend-multiply` (uneven ink coverage).
- Slight grain: `bg-[radial-gradient(rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:3px_3px]`.

### 2) High-Contrast Carved Element

Bold black-on-cream with carved-out white spaces.

- `bg-[#1a1a1a] text-[#e8dcc0] p-8 rounded-none border-2 border-[#1a1a1a]`.
- The contrast is STARK — pure black ink on cream paper, with the negative space being where the linoleum was carved away.

### 3) Gouge Texture Overlay

Visible carving/gouging marks on black areas.

- SVG of irregular white lines carved into black: `stroke="#e8dcc0" stroke-width="0.5" opacity="0.3"` creating the look of gouge channels.

### 4) Block Print Illustration

Bold black-and-white carved illustration SVG.

```html
<svg viewBox="0 0 200 200" class="w-32 h-32">
  <!-- Bold black shape with carved-out white details -->
  <rect width="200" height="200" fill="#1a1a1a"/>
  <!-- White carved areas (where linoleum was removed) -->
  <circle cx="100" cy="80" r="30" fill="#e8dcc0"/>
  <path d="M60,120 Q100,100 140,120 L140,180 L60,180 Z" fill="#e8dcc0"/>
  <!-- Gouge texture lines within black areas -->
  <path d="M20,20 L40,25 M30,40 L50,35 M160,20 L180,30" stroke="#e8dcc0" stroke-width="0.5" opacity="0.4"/>
  <!-- Ink texture (uneven coverage) -->
  <circle cx="70" cy="60" r="3" fill="#3a3a3a" opacity="0.5"/>
  <circle cx="130" cy="100" r="2" fill="#3a3a3a" opacity="0.4"/>
</svg>
```

### 5) Linocut Button

Bold block-print button.

- `bg-[#1a1a1a] text-[#e8dcc0] font-bold text-base uppercase tracking-wider px-8 py-3 border-2 border-[#1a1a1a] rounded-none shadow-[2px_2px_0_rgba(0,0,0,0.3)] hover:shadow-[1px_1px_0_rgba(0,0,0,0.3)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all`.

### 6) Single-Color Accent Print

A colored ink print (red or blue on cream).

- `bg-[#8a1a1a] text-[#e8dcc0]` (red ink print).
- Same texture and gouge quality as the black version.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Ink Black | `#1a1a1a` | Primary carved/printed areas |
| Rice Paper | `#e8dcc0` | Background (the paper) |
| Red Ink | `#8a1a1a` | Single-color alternative |
| Blue Ink | `#1a3a5a` | Single-color alternative |
| Ink Shadow | `#3a3a3a` | Uneven ink texture |
| Paper Shadow | `rgba(0,0,0,0.06)` | Paper texture |

Rules: STRICTLY limited palette. Black ink on cream paper is the default. Optionally, ONE colored ink replaces black (red or blue). Never more than two colors (one ink + paper).

## Typography Recommendations

- **Display:** Anton, Impact, or Archivo Black (bold, blocky, carved-looking).
- **Body:** Special Elite, Courier Prime (typewriter style that pairs with printmaking).
- **Labels:** `font-bold uppercase tracking-widest text-sm`.
- Typography should look CARVED — heavy, bold, and high-contrast.

## Reusable Tailwind Tokens

- Linocut surface: `bg-[#e8dcc0]` with SVG noise + grain overlays.
- Carved element: `bg-[#1a1a1a] text-[#e8dcc0] border-2 border-[#1a1a1a] rounded-none`.
- Block print button: `bg-[#1a1a1a] text-[#e8dcc0] font-bold uppercase border-2 shadow-[2px_2px_0_rgba(0,0,0,0.3)]`.
- Gouge texture: SVG lines `stroke="#e8dcc0" stroke-width="0.5" opacity="0.3"`.
- Red ink: `bg-[#8a1a1a] text-[#e8dcc0]`.

## Quality Checklist

- Background is warm rice/paper tone (`#e8dcc0`), never pure white.
- Ink texture (uneven coverage) is visible on dark areas.
- High contrast between ink and paper (stark black on cream).
- At least one block print illustration with carved-out negative space.
- Gouge texture marks visible on black/ink areas.
- Palette is limited to ONE ink color + paper (maximum two colors).
- Typography is bold and carved-looking.
- The aesthetic reads as linocut / woodcut relief printmaking.
- Hard offset shadows (not soft blur) — like pressed ink.
- Everything feels hand-carved and hand-printed.

## Anti-Patterns

- More than two colors (linocut is strictly ink + paper).
- Soft blurred gradients (linocut is high-contrast flat ink).
- Pure white backgrounds (use warm paper `#e8dcc0`).
- Missing ink texture (uneven coverage is essential to the medium).
- Missing gouge/carving marks (visible tool marks are the signature).
- Photorealistic detail (linocut is bold and simplified).
- Rounded corners (block prints are sharp and angular).
- Smooth digital surfaces (the charm is in the handmade texture).
- Multiple ink colors mixing (each color is a SEPARATE block/pass).
- Missing the block print illustration (the carved SVG is essential).

## Accessibility Considerations

- High contrast (black on cream) provides excellent text legibility (WCAG AAA).
- Focus states: `focus:ring-2 focus:ring-[#1a1a1a]` (thick black ring on cream).
- Texture overlays must not reduce text contrast.
- Block print SVG illustrations must be `aria-hidden="true"` when decorative.
- The bold heavy typography is naturally accessible.
- Touch targets must be adequate despite blocky styling.
