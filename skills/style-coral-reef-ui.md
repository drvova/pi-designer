---
name: coral-reef-ui
description: Build coral reef UI components (underwater coral gardens, colorful tropical fish palette, brain coral textures, anemone tentacles, reef biodiversity, dappled underwater light) with vibrant reef colors, organic coral-shaped elements, and the teeming biodiversity of underwater ecosystems. Trigger this skill when the user asks for coral reef design, underwater tropical UI, reef ecosystem, aquarium aesthetic, or colorful marine interfaces.
---

# Coral Reef UI

Use this skill to design and implementation vibrant, biodiverse interfaces inspired by coral reef ecosystems: colorful coral formations, tropical fish palettes, brain coral textures, sea anemone elements, dappled underwater caustic light, and the teeming abundance of reef life.

## Core Material Recipes

### 1) Underwater Caustic Background

Dappled sunlight filtering through water.

- `bg-gradient-to-b from-[#0077be] via-[#005a8a] to-[#003a5a]` (ocean depth).
- Caustic light: `bg-[radial-gradient(ellipse_at_20%_10%,rgba(180,230,255,0.1)_0%,transparent_40%),radial-gradient(ellipse_at_70%_30%,rgba(180,230,255,0.08)_0%,transparent_30%)]`.

### 2) Brain Coral Surface

Textured coral-reef panel.

- `bg-gradient-to-br from-[#e07a5a] to-[#c45a3a] rounded-[2rem] p-6 shadow-[0_4px_12px_rgba(0,30,60,0.2)] border border-[#a04020]`.
- Texture: `bg-[radial-gradient(rgba(255,200,180,0.1)_1px,transparent_1px)] bg-[size:6px_6px]` (brain coral maze pattern).

### 3) Clownfish Button

Vibrant reef-colored button (orange-white-black like a clownfish).

- `bg-gradient-to-r from-[#ff6b35] to-[#e04500] text-white font-bold rounded-full px-8 py-3 border-2 border-white shadow-[0_4px_12px_rgba(0,30,60,0.3)] hover:shadow-[0_0_20px_rgba(255,107,53,0.4)] transition-all`.

### 4) Anemone Accent

Organic waving tentacle decoration.

```html
<svg viewBox="0 0 80 60" class="w-20 h-12 opacity-50">
  <g stroke="#ff6b9d" stroke-width="1.5" fill="none" stroke-linecap="round">
    <path d="M10,50 Q8,30 12,10"/>
    <path d="M20,50 Q18,25 22,5"/>
    <path d="M30,50 Q28,30 32,12"/>
    <path d="M40,50 Q38,20 42,8"/>
    <path d="M50,50 Q48,30 52,14"/>
    <path d="M60,50 Q58,25 62,6"/>
    <path d="M70,50 Q68,30 72,12"/>
  </g>
</svg>
```

### 5) Sea Glass Panel

Translucent water-colored panel.

- `bg-[#0077be]/20 backdrop-blur-md border border-[#40b0e0]/30 rounded-2xl p-6 shadow-[0_0_20px_rgba(0,119,190,0.1)]`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Reef Orange | `#ff6b35` | Primary accent (coral, clownfish) |
| Reef Teal | `#00a8a8` | Cool accent (tropical water) |
| Brain Coral | `#e07a5a` | Surface texture |
| Anemone Pink | `#ff6b9d` | Secondary accent |
| Starfish Purple | `#8a4aba` | Rare accent |
| Ocean Blue | `#0077be` | Background depth |
| Shallow Aqua | `#40d0e0` | Shallow water |
| Reef Cream | `#fff5ee` | Light surface (sand/skeleton) |

Rules: Vibrant and biodiverse — the palette should teem with color like a healthy reef. Warm corals and pinks contrast with cool teals and blues. Everything is saturated and alive.

## Typography Recommendations

- **Display:** Quicksand, Nunito (rounded, organic, friendly).
- **Body:** DM Sans, Source Sans Pro (clean readable sans).
- The typography should feel organic and flowing, like underwater movement.

## Reusable Tailwind Tokens

- Ocean bg: `bg-gradient-to-b from-[#0077be] via-[#005a8a] to-[#003a5a]`.
- Brain coral panel: `bg-gradient-to-br from-[#e07a5a] to-[#c45a3a] rounded-[2rem]`.
- Clownfish button: `bg-gradient-to-r from-[#ff6b35] to-[#e04500] text-white rounded-full border-2 border-white`.
- Sea glass: `bg-[#0077be]/20 backdrop-blur-md border border-[#40b0e0]/30`.

## Quality Checklist

- Vibrant reef colors (coral orange, anemone pink, tropical teal).
- At least one brain coral textured surface.
- Dappled underwater caustic light effect.
- At least one organic/anemone SVG decoration.
- The aesthetic reads as a thriving coral reef ecosystem.
- Everything feels colorful, alive, and biodiverse.
- Cool ocean blue contrasts with warm reef colors.

## Anti-Patterns

- Muted or desaturated colors (reefs are vibrantly alive).
- Missing organic coral/anemone decorations.
- Dark abyssal aesthetic (coral reefs are in shallow sunlit water).
- Flat untextured surfaces (brain coral needs texture).
- Missing the warm/cool contrast (warm reef on cool water).
- Rigid geometric shapes (reef is organic and flowing).
