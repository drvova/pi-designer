---
name: aboriginal-dot-art-ui
description: Build Aboriginal dot art UI components (Australian indigenous pointillism, earth-tone dots, rhythmic patterns, Dreamtime symbols, ochre palettes, concentric circle motifs) with dotted textures, earth pigments, and the ancient visual language of Aboriginal Australian painting. Trigger this skill when the user asks for Aboriginal dot art, indigenous Australian design, dot painting, Dreamtime aesthetic, ochre dots, or pointillism earth interfaces.
---

# Aboriginal Dot Art UI

Use this skill to design and implement patterned interfaces inspired by Aboriginal Australian dot painting: rhythmic dots in earth-tone pigments, concentric circle Dreamtime symbols, ochre and terracotta palettes, and the ancient visual language of the world's oldest continuous art tradition.

## Non-Negotiable Foundations

- Aboriginal dot art is defined by DOTS: small circles of paint applied systematically to create patterns, images, and symbolic meaning.
- Earth-tone pigments are mandatory: ochre yellow, terracotta red, burnt sienna, charcoal black, and cream/white.
- Concentric circles are a key motif representing water holes, campsites, and gathering places in Dreamtime iconography.
- Patterns are rhythmic and systematic — dots follow paths, outlines, and fill areas with consistent spacing.
- The aesthetic connects to landscape: desert sand tones, rock pigments, and the red earth of the Australian outback.
- Dots create both DECORATION and MEANING (animal tracks, journey paths, water sources encoded in the pattern).

## Core Material Recipes

### 1) Dotted Pattern Background

The foundational surface: rhythmic dot pattern.

```css
.dot-pattern {
  background-color: #c49a5a;
  background-image:
    radial-gradient(circle at 20% 20%, #8a3a1a 1.5px, transparent 2px),
    radial-gradient(circle at 50% 30%, #c4a043 1.5px, transparent 2px),
    radial-gradient(circle at 80% 20%, #3a2a0a 1.5px, transparent 2px),
    radial-gradient(circle at 30% 60%, #e8c87a 1.5px, transparent 2px),
    radial-gradient(circle at 70% 70%, #8a3a1a 1.5px, transparent 2px);
  background-size: 60px 60px;
}
```

Tailwind: `bg-[#c49a5a] bg-[radial-gradient(circle_at_20%_20%,#8a3a1a_2px,transparent_2px),radial-gradient(circle_at_50%_50%,#c4a043_2px,transparent_2px)] bg-[size:30px_30px]`.

### 2) Concentric Circle Motif

Dreamtime water hole / gathering place symbol.

```html
<svg viewBox="0 0 100 100" class="w-24 h-24">
  <g fill="none" stroke-width="2">
    <circle cx="50" cy="50" r="8" fill="#8a3a1a"/>
    <circle cx="50" cy="50" r="16" stroke="#c4a043"/>
    <circle cx="50" cy="50" r="24" stroke="#8a3a1a"/>
    <circle cx="50" cy="50" r="32" stroke="#3a2a0a"/>
    <circle cx="50" cy="50" r="40" stroke="#c4a043"/>
  </g>
  <!-- Dots around outer ring -->
  <g fill="#3a2a0a">
    <circle cx="50" cy="10" r="2"/>
    <circle cx="90" cy="50" r="2"/>
    <circle cx="50" cy="90" r="2"/>
    <circle cx="10" cy="50" r="2"/>
  </g>
</svg>
```

### 3) Ochre Surface

Earth-pigment card surface.

- `bg-[#c49a5a] rounded-lg p-6 border-2 border-[#8a3a1a] shadow-[0_2px_8px_rgba(58,42,10,0.15)]`.

### 4) Dot Trail Path

Dotted line representing a journey path or animal track.

```html
<svg viewBox="0 0 200 40" class="w-full">
  <g fill="#3a2a0a">
    <circle cx="10" cy="20" r="2.5"/>
    <circle cx="30" cy="18" r="2.5"/>
    <circle cx="50" cy="22" r="2.5"/>
    <circle cx="70" cy="20" r="2.5"/>
    <circle cx="90" cy="18" r="2.5"/>
    <circle cx="110" cy="22" r="2.5"/>
    <circle cx="130" cy="20" r="2.5"/>
    <circle cx="150" cy="18" r="2.5"/>
    <circle cx="170" cy="22" r="2.5"/>
    <circle cx="190" cy="20" r="2.5"/>
  </g>
</svg>
```

### 5) Dot Art Button

Earth-tone button with dotted border.

- `bg-[#8a3a1a] text-[#e8c87a] font-serif font-medium px-8 py-3 border-2 border-[#c4a043] hover:bg-[#9a4a2a] transition-colors rounded-none`.

## Color Palette System

| Color | Hex | Pigment | Role |
|---|---|---|---|
| Ochre Yellow | `#c4a043` | Yellow ochre | Primary dot color |
| Terracotta | `#c49a5a` | Red earth | Background surface |
| Burnt Sienna | `#8a3a1a` | Red ochre | Primary accent |
| Charcoal | `#3a2a0a` | Charcoal pigment | Dark dots, outlines |
| Sand Cream | `#e8c87a` | White ochre | Light accent, text |
| Deep Brown | `#2a1a08` | Dark earth | Text |

Rules: Earth pigments only. No blues, greens, or synthetic colors. The palette comes directly from the Australian landscape: red earth, yellow ochre, charcoal, and white clay.

## Typography Recommendations

- **Display:** Cinzel, Trajan Pro (classical caps with earthy weight).
- **Body:** Lora, EB Garamond (warm readable serif).
- **Labels:** `font-serif font-medium text-sm tracking-wide`.

## Reusable Tailwind Tokens

- Dot pattern: `bg-[radial-gradient(circle_at_20%_20%,#8a3a1a_2px,transparent_2px)] bg-[size:30px_30px]`.
- Ochre surface: `bg-[#c49a5a] border-2 border-[#8a3a1a]`.
- Dot trail: SVG circles `r="2.5" fill="#3a2a0a"` along a path.
- Concentric circle: nested `<circle>` elements in earth tones.

## Quality Checklist

- Dotted patterns are present on surfaces (the signature texture).
- Earth-tone palette (ochre, terracotta, charcoal — no synthetic colors).
- At least one concentric circle Dreamtime motif.
- At least one dot trail/journey path element.
- Ochre/terracotta card surfaces with earth-pigment borders.
- Typography is warm classical serif.
- The aesthetic reads as Aboriginal Australian dot painting.
- Dots are rhythmic and systematic (not random scatter).
- Everything connects to earth, landscape, and ancient tradition.

## Anti-Patterns

- Synthetic bright colors (palette is earth pigments only).
- Missing dot patterns (dots are THE defining feature).
- Curved flowing organic lines (Aboriginal art uses dots, not continuous lines).
- Modern sans-serif typography (use warm serif).
- Cool color palettes (no blues or greens — earth tones only).
- Random dot scatter (dots should be rhythmic and patterned).
- Missing concentric circle motifs (these are key Dreamtime symbols).
- Glossy or digital surfaces (the aesthetic is earth pigment on surface).
- Sharp angular geometric shapes (the art is built from DOTS).
- Light backgrounds (use terracotta/ochre earth tones).
