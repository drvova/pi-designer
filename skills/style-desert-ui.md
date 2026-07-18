---
name: desert-ui
description: Build desert / Sahara UI components (sand dune gradients, terracotta earth tones, sun-bleached surfaces, cracked earth textures, oasis accents, nomadic patterns) with warm sandy palettes, dune-shaped curves, and the vast serene emptiness of the desert. Trigger this skill when the user asks for desert design, Sahara aesthetic, arid landscape, sand dune UI, Bedouin style, or sun-bleached warm interfaces.
---

# Desert / Sahara UI

Use this skill to design and implementation warm, arid interfaces inspired by desert landscapes: sand dune gradients, cracked earth textures, terracotta surfaces, sun-bleached palettes, oasis green accents, and the vast serene emptiness of the Sahara.

## Core Material Recipes

### 1) Sand Dune Gradient Background

Warm desert sky-to-dune gradient.

- `bg-gradient-to-b from-[#e8c87a] via-[#d4a85a] to-[#b8843a]` (golden sand gradient).

### 2) Cracked Earth Surface

Arid cracked ground texture.

- `bg-[#c4a060]` base with SVG overlay of irregular crack lines at `opacity-30`.

### 3) Terracotta Panel

Sun-baked clay surface.

- `bg-gradient-to-br from-[#c47858] to-[#9a5a3a] rounded-lg p-6 shadow-[0_4px_12px_rgba(90,40,10,0.2)]`.

### 4) Oasis Button

Rare green button in the desert palette.

- `bg-gradient-to-r from-[#4a8a3a] to-[#2a6a2a] text-white font-medium rounded-full px-8 py-3 shadow-[0_4px_8px_rgba(0,0,0,0.15)] hover:shadow-[0_0_15px_rgba(74,138,58,0.3)] transition-all`.

### 5) Sun-Bleached Card

Faded, warm card surface.

- `bg-[#f0e0c0] rounded-lg p-6 border border-[#d4c098] shadow-[0_2px_8px_rgba(120,80,30,0.1)]`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Sand Gold | `#e8c87a` | Primary background |
| Dune | `#d4a85a` | Mid surfaces |
| Terracotta | `#c47858` | Warm accent |
| Deep Clay | `#9a5a3a` | Dark accent |
| Bleached Cream | `#f0e0c0` | Card surfaces |
| Cracked Earth | `#b8843a` | Textures |
| Oasis Green | `#4a8a3a` | Rare contrast accent |
| Sun Orange | `#e07a30` | Warm highlight |
| Deep Brown | `#3a2a0a` | Text |
| Sky Faded | `#a0c0d0` | Rare cool accent |

## Typography Recommendations

- **Display:** Lora, Fraunces, or Cormorant (warm serif with elegance).
- **Body:** Source Serif Pro, DM Serif (warm readable serif).
- **Labels:** `font-serif font-medium text-sm tracking-wide`.

## Reusable Tailwind Tokens

- Dune bg: `bg-gradient-to-b from-[#e8c87a] via-[#d4a85a] to-[#b8843a]`.
- Terracotta panel: `bg-gradient-to-br from-[#c47858] to-[#9a5a3a]`.
- Bleached card: `bg-[#f0e0c0] border border-[#d4c098] shadow-[0_2px_8px_rgba(120,80,30,0.1)]`.
- Oasis button: `bg-gradient-to-r from-[#4a8a3a] to-[#2a6a2a] text-white rounded-full`.

## Quality Checklist

- Warm sandy/terracotta color palette (no cool colors).
- At least one dune gradient surface.
- Cracked earth or sun-bleached texture present.
- Oasis green used sparingly as rare contrast.
- Typography is warm serif.
- The aesthetic reads as a vast serene desert landscape.
- Everything feels sun-baked, warm, and arid.

## Anti-Patterns

- Cool blue or green-dominant palettes (desert is warm sand).
- Missing cracked earth or sun-bleached texture.
- Dark backgrounds (desert is bright and sunlit).
- Sans-serif cold typography.
- Missing the oasis contrast (green in the desert is the signature surprise).
