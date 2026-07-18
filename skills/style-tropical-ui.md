---
name: tropical-ui
description: Build tropical UI components (lush jungle foliage, vibrant exotic flowers, palm leaves, sunset gradients, bamboo textures, bird-of-paradise colors) with saturated greens, flamingo pinks, hibiscus reds, and the warm, vibrant energy of a tropical paradise. Trigger this skill when the user asks for tropical design, jungle UI, paradise aesthetic, exotic foliage, Hawaiian design, or Caribbean vibrant interfaces.
---

# Tropical UI

Use this skill to design and implementation vibrant, lush interfaces inspired by tropical paradises: dense jungle foliage, exotic flowers, palm leaf patterns, bamboo textures, flamingo and hibiscus colors, and the warm, energetic aesthetic of equatorial abundance.

## Non-Negotiable Foundations

- Tropical UI celebrates lush abundance: dense foliage, vibrant flowers, and the sensory richness of a tropical environment.
- Colors are SATURATED and warm: jungle greens, flamingo pinks, hibiscus reds, mango oranges, banana yellows, and ocean turquoises.
- Palm leaves and tropical flowers (hibiscus, bird-of-paradise, plumeria) are essential botanical motifs.
- Backgrounds suggest tropical warmth: sunset gradients, beach sand tones, or deep jungle canopy.
- Textures reference tropical materials: bamboo, rattan, palm fronds, and tropical wood.
- The aesthetic is warm, vibrant, and slightly exotic — it should feel like a vacation.

## Core Material Recipes

### 1) Jungle Canopy Background

Deep tropical green gradient backdrop.

- `bg-gradient-to-b from-[#1a4a2a] via-[#2a5a3a] to-[#0a3a1a]` (jungle canopy to forest floor).
- Leaf pattern overlay: scattered SVG palm leaves at low opacity.

### 2) Sunset Paradise Gradient

The iconic tropical sunset.

- `bg-gradient-to-b from-[#ff6b35] via-[#f7931e] to-[#ffd23f]` (orange to gold sunset).
- Sky-to-ocean: `bg-gradient-to-b from-[#ff6b9d] via-[#ff8c42] to-[#06c4a1]` (pink to turquoise).

### 3) Palm Leaf Card

Card with palm leaf decoration.

- `bg-[#fff8f0] rounded-[2rem] p-6 shadow-[0_4px_16px_rgba(42,90,58,0.15)]`.
- Palm leaf SVG in corner: `absolute top-0 right-0 w-32 h-32 text-[#2a6a3a] opacity-20`.

### 4) Hibiscus Button

Vibrant tropical button.

- `bg-gradient-to-r from-[#e02060] to-[#c01040] text-white font-bold rounded-full px-8 py-3 shadow-[0_4px_12px_rgba(224,32,96,0.3)] hover:shadow-[0_6px_20px_rgba(224,32,96,0.4)] hover:scale-[1.02] transition-all`.

### 5) Flamingo Pink Surface

Soft warm pink surface.

- `bg-[#ff8fa3] rounded-[2rem] p-6 text-white shadow-[0_4px_16px_rgba(255,143,163,0.2)]`.

### 6) Bamboo Divider

Textured bamboo divider.

- `h-3 bg-gradient-to-r from-[#a07030] via-[#c4a040] to-[#a07030] rounded-full`.
- Segments: `bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_30px,rgba(0,0,0,0.15)_30px,rgba(0,0,0,0.15)_32px)]`.

### 7) Tropical Flower SVG

Hibiscus or plumeria decoration.

```html
<svg viewBox="0 0 60 60" class="w-12 h-12 opacity-60">
  <g fill="#e02060">
    <ellipse cx="30" cy="15" rx="8" ry="12" opacity="0.8"/>
    <ellipse cx="45" cy="25" rx="8" ry="12" opacity="0.7" transform="rotate(72 45 25)"/>
    <ellipse cx="40" cy="42" rx="8" ry="12" opacity="0.8" transform="rotate(144 40 42)"/>
    <ellipse cx="20" cy="42" rx="8" ry="12" opacity="0.7" transform="rotate(216 20 42)"/>
    <ellipse cx="15" cy="25" rx="8" ry="12" opacity="0.8" transform="rotate(288 15 25)"/>
    <circle cx="30" cy="30" r="5" fill="#ffd23f"/>
  </g>
</svg>
```

## Color Palette System

### Core Tropical Palette

| Color | Hex | Role |
|---|---|---|
| Jungle Green | `#1a4a2a` | Primary dark, foliage |
| Palm Green | `#2a6a3a` | Secondary green |
| Flamingo Pink | `#ff8fa3` | Primary warm accent |
| Hibiscus Red | `#e02060` | Bold accent, buttons |
| Mango Orange | `#ff8c42` | Warm highlight |
| Sunset Gold | `#ffd23f` | Bright accent |
| Ocean Turquoise | `#06c4a1` | Cool accent |
| Sand Cream | `#fff8f0` | Light surface |
| Bamboo Brown | `#a07030` | Divider, structural |
| Deep Coconut | `#3a2a0a` | Text, contrast |

Rules: Saturated and vibrant. The palette should feel like a Caribbean sunset over a jungle beach. Warm pinks, oranges, and golds pair with cool turquoise and deep greens. No muted or desaturated tones.

## Typography Recommendations

- **Display:** Poppins, Pacifico, or Lobster (warm, rounded, vacation-friendly).
- **Body:** DM Sans, Nunito (friendly readable sans).
- **Accents:** Permanent Marker or Caveat (handwritten travel-journal feel).
- Typography should feel warm, approachable, and slightly exotic.

## Interaction Rules

- Default: warm, vibrant, lush.
- Hover: elements bloom (scale up gently with warm glow).
  - `hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(224,32,96,0.4)] transition-all duration-300`.
- Active: `active:scale-[0.98]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#06c4a1]/40`.
- Transitions: `transition-all duration-300 ease-out` (warm, natural, organic).

## Reusable Tailwind Tokens

- Jungle bg: `bg-gradient-to-b from-[#1a4a2a] to-[#0a3a1a]`.
- Sunset bg: `bg-gradient-to-b from-[#ff6b35] via-[#f7931e] to-[#ffd23f]`.
- Palm card: `bg-[#fff8f0] rounded-[2rem] shadow-[0_4px_16px_rgba(42,90,58,0.15)]`.
- Hibiscus button: `bg-gradient-to-r from-[#e02060] to-[#c01040] text-white rounded-full shadow-[0_4px_12px_rgba(224,32,96,0.3)]`.
- Bamboo divider: `h-3 bg-gradient-to-r from-[#a07030] via-[#c4a040] to-[#a07030] rounded-full`.
- Turquoise accent: `text-[#06c4a1]`.

## Quality Checklist

- Color palette is saturated and tropical (jungle green, flamingo pink, hibiscus red).
- At least one palm leaf or tropical flower SVG decoration.
- Sunset gradient or jungle canopy background present.
- Cards are warm cream with organic rounded shapes.
- Bamboo or rattan texture divider present.
- Buttons are vibrant (pink, red, or turquoise) with rounded pill shapes.
- Typography is warm and friendly (rounded sans-serif).
- The aesthetic reads as a tropical paradise or jungle environment.
- Everything feels warm, vibrant, and abundant.
- No muted, cold, or desaturated colors.

## Anti-Patterns

- Muted or desaturated colors (tropical is vivid and saturated).
- Cold palettes (no blue-gray — use warm greens, pinks, and oranges).
- Missing botanical decorations (palm leaves and flowers are essential).
- Sharp angular shapes (tropical is organic and rounded).
- Sans-serif cold typography (tropical is warm and rounded).
- Missing sunset gradient (the tropical sunset is iconic).
- Dark moody atmosphere (tropical is bright and warm).
- Bamboo/rattan textures missing (these add the tropical material reference).
- Minimalist restraint (tropical is lush and abundant).
- Corporate sterile design (tropical is a vacation, not a boardroom).

## Accessibility Considerations

- Warm cream backgrounds with dark text provide good contrast (verify WCAG AA).
- Vibrant buttons with white text must be verified (especially pink/red).
- Focus states: `focus:ring-2 focus:ring-[#06c4a1]/40` (turquoise ring, visible on warm surfaces).
- Botanical SVG decorations must be `aria-hidden="true"`.
- Saturated backgrounds must not reduce text contrast.
- Touch targets must be adequate despite organic rounded styling.
- The bright palette may cause glare — ensure sufficient text contrast.
