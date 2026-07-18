---
name: greenhouse-ui
description: Build greenhouse/botanical garden UI components (glass pane panels, lush overflowing plants, warm humid light, hanging vines, terracotta pots, botanical illustrations, Victorian conservatory) with glass-and-iron structure, abundant greenery, and the nurturing warmth of a plant-filled conservatory. Trigger this skill when the user asks for greenhouse design, botanical garden UI, conservatory, plant shop, terrarium, or Victorian greenhouse interfaces.
---

# Greenhouse / Botanical Garden UI

Use this skill to design and implementation lush, nurturing interfaces inspired by greenhouses and botanical conservatories: glass-pane panels, iron-framework transparency, overflowing tropical plants, hanging vines, warm humid light, terracotta pots, and the abundant life of a plant-filled space.

## Core Material Recipes

### 1) Greenhouse Glass Panel

Translucent glass-pane panel with iron framework grid.

- `bg-white/20 backdrop-blur-md border border-white/40 rounded-lg p-6 shadow-[0_0_20px_rgba(34,139,34,0.08)]`.
- Iron grid: `bg-[linear-gradient(rgba(60,60,60,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(60,60,60,0.1)_1px,transparent_1px)] bg-[size:100px_100px]` (greenhouse pane dividers).

### 2) Lush Plant Background

Abundant greenery backdrop.

- `bg-gradient-to-b from-[#e8f5e9] to-[#c8e6c9]` (soft botanical green).
- Scattered leaf SVGs at varying sizes and rotations across the background at `opacity-20`.

### 3) Terracotta Pot Card

Warm clay pot-shaped card.

- `bg-gradient-to-b from-[#c47850] to-[#a05a30] rounded-b-lg rounded-t-sm p-6 border border-[#8a4a20] shadow-[0_4px_12px_rgba(112,60,20,0.15)]`.

### 4) Hanging Vine Accent

Dangling vine decoration from top of panels.

```html
<svg viewBox="0 0 200 80" class="w-full opacity-20">
  <g fill="none" stroke="#2e7d32" stroke-width="1">
    <path d="M20,0 Q25,20 20,40 Q15,55 25,70"/>
    <path d="M60,0 Q65,15 55,35 Q60,50 50,65"/>
    <path d="M100,0 Q95,25 105,45 Q100,60 110,75"/>
    <path d="M140,0 Q145,20 135,40 Q140,55 150,70"/>
    <path d="M180,0 Q175,18 185,38 Q180,52 190,68"/>
  </g>
  <g fill="#4caf50" opacity="0.6">
    <ellipse cx="20" cy="40" rx="4" ry="2" transform="rotate(-30 20 40)"/>
    <ellipse cx="55" cy="35" rx="4" ry="2" transform="rotate(20 55 35)"/>
    <ellipse cx="105" cy="45" rx="5" ry="2.5" transform="rotate(-15 105 45)"/>
    <ellipse cx="135" cy="40" rx="4" ry="2" transform="rotate(25 135 40)"/>
    <ellipse cx="185" cy="38" rx="4" ry="2" transform="rotate(-20 185 38)"/>
  </g>
</svg>
```

### 5) Greenhouse Button

Organic green button with botanical warmth.

- `bg-gradient-to-b from-[#4caf50] to-[#2e7d32] text-white font-medium rounded-full px-8 py-3 border border-[#1b5e20] shadow-[0_3px_8px_rgba(46,125,50,0.2)] hover:shadow-[0_0_15px_rgba(76,175,80,0.3)] transition-all`.

### 6) Botanical Nameplate

Scientific plant label.

- `bg-white border border-[#c8e6c9] rounded-sm px-3 py-1 font-serif italic text-sm text-[#2e7d32]` (italic Latin name like *Monstera deliciosa*).

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Leaf Green | `#4caf50` | Primary accent |
| Forest Green | `#2e7d32` | Secondary green |
| Pale Green | `#e8f5e9` | Background |
| Sage | `#a5d6a7` | Muted surface |
| Terracotta | `#c47850` | Pot/card warm accent |
| Warm Clay | `#a05a30` | Deep pot accent |
| Glass White | `rgba(255,255,255,0.2)` | Translucent panels |
| Iron Gray | `#3c3c3c` | Framework grid |
| Sunlight Gold | `#fdd835` | Warm light accent |

Rules: Greens dominate everywhere — the interface should look like it's OVERGROWN with plants. Terracotta provides warm contrast. Glass translucency creates the conservatory atmosphere.

## Typography Recommendations

- **Display:** Fraunces, Bricolage Grotesque (warm organic serif).
- **Body:** Lora, DM Sans (warm readable).
- **Labels:** `font-serif italic text-sm` (scientific botanical Latin names in italic).
- Typography should feel organic and warm — like hand-lettered plant labels.

## Reusable Tailwind Tokens

- Greenhouse glass: `bg-white/20 backdrop-blur-md border border-white/40 shadow-[0_0_20px_rgba(34,139,34,0.08)]`.
- Iron grid: pane-divider grid overlay.
- Terracotta card: `bg-gradient-to-b from-[#c47850] to-[#a05a30] rounded-b-lg rounded-t-sm border border-[#8a4a20]`.
- Greenhouse button: `bg-gradient-to-b from-[#4caf50] to-[#2e7d32] rounded-full border border-[#1b5e20]`.
- Botanical label: `bg-white border border-[#c8e6c9] font-serif italic text-[#2e7d32]`.
- Vine SVG: organic hanging paths with leaf ellipses.

## Quality Checklist

- At least one translucent glass-pane panel with iron grid.
- Green color palette dominates (abundant plant life).
- At least one hanging vine or botanical SVG decoration.
- Terracotta pot-shaped card surfaces.
- Glass-and-iron conservatory structure visible.
- Botanical scientific name labels (italic Latin).
- Warm humid lighting quality (soft golden-green ambiance).
- Typography is warm organic serif.
- The aesthetic reads as greenhouse / botanical conservatory / plant shop.
- Everything feels lush, alive, and nurturing.

## Anti-Patterns

- Dark or cold palettes (greenhouse is warm and green).
- Missing plant/botanical decorations (greenery is the defining feature).
- Opaque solid panels (greenhouses are GLASS — use translucency).
- Missing terracotta accents (pots are essential greenhouse objects).
- Sans-serif cold typography (greenhouse is warm and organic).
- Missing iron framework grid (the glass-pane structure is characteristic).
- Sharp sterile minimalism (greenhouse is overflowing with life).
- Missing the botanical Latin name labels (these add authenticity).
- Monochrome palettes (greenhouse is multi-green with warm pot accents).
- Modern digital surfaces (the aesthetic is Victorian conservatory).

