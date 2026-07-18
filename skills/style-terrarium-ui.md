---
name: terrarium-ui
description: Build terrarium UI components (glass jar ecosystem, layered pebble/sand/soil substrate, condensation droplets, moss coverage, tiny plant sprouts, enclosed humidity, self-contained miniature garden) with glass jar framing, condensation textures, and the self-sustaining beauty of a closed ecosystem. Trigger this skill when the user asks for terrarium design, glass jar UI, closed ecosystem interface, cloche aesthetic, condensation texture, moss coverage design, or miniature garden components.
---

# Terrarium UI

Use this skill to design and implement interfaces inspired by terrariums: glass jar or cloche framing with translucent blurred surfaces, layered substrate bottoms (pebble, sand, soil horizontal bands), condensation droplet overlays, moss texture patches, tiny plant sprouts, and the self-sustaining beauty of a closed miniature ecosystem.

## Non-Negotiable Foundations

- Terrarium UI uses a GLASS JAR or CLOCHE as the primary container frame: rounded shapes with translucent, backdrop-blurred surfaces.
- The substrate bottom is always visible as HORIZONTAL COLOR BANDS: pebble, sand, and soil layers stacked from bottom up.
- Condensation droplets are scattered across the glass surface as small translucent white dots — the signature texture of enclosed humidity.
- Moss patches appear as green fuzzy textured areas, representing living coverage inside the jar.
- Tiny plant SVG sprouts grow upward from the substrate, the living elements of the ecosystem.
- A humidity haze permeates the interior: soft white/green diffusion, never crisp or dry.
- Colors follow the palette of natural materials: glass-white translucent, pebble gray, sand tan, soil brown, moss green, sprout green.
- The aesthetic is organic, enclosed, self-sustaining, and delicately alive.

## Core Material Recipes

### 1) Glass Jar Frame

The signature container: rounded translucent glass with backdrop blur.

```html
<div class="relative rounded-[3rem] bg-white/10 backdrop-blur-md border border-white/30 shadow-[inset_0_2px_10px_rgba(255,255,255,0.3),0_8px_32px_rgba(0,0,0,0.1)] overflow-hidden">
  <!-- Glass reflection streak -->
  <div class="absolute top-0 left-[10%] w-[20%] h-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
  <!-- Content -->
  <div class="relative z-10 p-6">Content here</div>
</div>
```

- Apothecary shape variant: `rounded-b-[3rem] rounded-t-[1.5rem]` with a lid element on top.
- Cloche dome variant: `rounded-t-full rounded-b-2xl` for a bell-jar silhouette.

### 2) Layered Substrate Bottom

Horizontal color bands: pebble, sand, soil from bottom up.

```html
<div class="absolute bottom-0 left-0 right-0 h-1/3">
  <!-- Soil layer (bottom) -->
  <div class="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-b from-[#5a3a1a] to-[#4a2a0a]"></div>
  <!-- Sand layer (middle) -->
  <div class="absolute bottom-[50%] left-0 right-0 h-[30%] bg-gradient-to-b from-[#d4a868] to-[#c49858]"></div>
  <!-- Pebble layer (top) -->
  <div class="absolute bottom-[80%] left-0 right-0 h-[20%] bg-gradient-to-b from-[#9a9a8a] to-[#8a8a7a]"></div>
</div>
```

CSS-only substrate texture:
- `bg-[linear-gradient(to_bottom,#8a8a7a_0%,#8a8a7a_6%,#d4a868_6%,#d4a868_16%,#4a2a0a_16%)]` (proportional bands).

### 3) Condensation Droplet Overlay

Scattered small white dots on the glass surface.

```html
<svg class="absolute inset-0 w-full h-full opacity-40 pointer-events-none" viewBox="0 0 400 400" preserveAspectRatio="none">
  <circle cx="30" cy="40" r="2" fill="white" opacity="0.5"/>
  <circle cx="75" cy="90" r="1.5" fill="white" opacity="0.4"/>
  <circle cx="120" cy="30" r="2.5" fill="white" opacity="0.6"/>
  <circle cx="200" cy="70" r="1.5" fill="white" opacity="0.3"/>
  <circle cx="280" cy="50" r="2" fill="white" opacity="0.5"/>
  <circle cx="340" cy="100" r="1" fill="white" opacity="0.4"/>
  <circle cx="50" cy="150" r="2" fill="white" opacity="0.4"/>
  <circle cx="160" cy="180" r="1.5" fill="white" opacity="0.5"/>
  <circle cx="250" cy="160" r="2.5" fill="white" opacity="0.3"/>
  <circle cx="320" cy="200" r="1.5" fill="white" opacity="0.4"/>
</svg>
```

- Variant: `bg-[radial-gradient(circle_at_15%_20%,white_1px,transparent_1.5px),radial-gradient(circle_at_70%_40%,white_1px,transparent_1.5px),radial-gradient(circle_at_40%_80%,white_0.5px,transparent_1px)] bg-[size:120px_120px]` for CSS-only droplets.

### 4) Moss Texture Patch

Green fuzzy textured coverage area.

```html
<div class="absolute rounded-full opacity-70" style="background:radial-gradient(circle_at_30%_30%,#5a8a3a,#3a6a2a);filter:blur(1px)">
  <!-- Bumps SVG for fuzzy texture -->
  <svg class="w-full h-full opacity-40" viewBox="0 0 100 50">
    <circle cx="10" cy="15" r="4" fill="#4a7a2a"/>
    <circle cx="30" cy="10" r="5" fill="#3a6a2a"/>
    <circle cx="55" cy="20" r="4" fill="#5a8a3a"/>
    <circle cx="75" cy="12" r="6" fill="#3a6a2a"/>
    <circle cx="90" cy="18" r="3" fill="#4a7a2a"/>
    <circle cx="20" cy="30" r="5" fill="#3a6a2a"/>
    <circle cx="45" cy="35" r="4" fill="#5a8a3a"/>
    <circle cx="70" cy="32" r="5" fill="#4a7a2a"/>
  </svg>
</div>
```

### 5) Tiny Plant Sprout SVG

Small plant growing upward from substrate.

```html
<svg viewBox="0 0 30 50" class="w-6 h-10">
  <!-- Stem -->
  <path d="M15,48 Q15,30 15,20" fill="none" stroke="#4a8a2a" stroke-width="1" stroke-linecap="round"/>
  <!-- Leaves -->
  <path d="M15,30 Q8,25 5,20 Q10,22 15,28" fill="#5a9a3a"/>
  <path d="M15,28 Q22,23 25,18 Q20,20 15,26" fill="#5a9a3a"/>
  <path d="M15,18 Q10,14 8,8 Q12,12 15,16" fill="#6aaa4a"/>
  <path d="M15,16 Q20,12 22,6 Q18,10 15,14" fill="#6aaa4a"/>
</svg>
```

### 6) Humidity Haze

Soft white-green diffusion overlay inside the jar.

- `bg-[radial-gradient(ellipse_at_center,rgba(200,230,200,0.15)_0%,transparent_70%)]`.
- Variant: `bg-white/5 backdrop-blur-[2px]` for a thicker fog effect.

### 7) Glass Lid / Cloche Top

Rounded lid or knob for the jar opening.

```html
<!-- Apothecary lid -->
<div class="absolute -top-3 left-1/2 -translate-x-1/2 w-1/3 h-6 rounded-t-full bg-gradient-to-b from-white/40 to-white/10 border border-white/30"></div>
<!-- Knob -->
<div class="absolute -top-5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white/30 border border-white/40"></div>
```

### 8) Terrarium Button

Button styled as a glass capsule or droplet.

- `rounded-full bg-white/15 backdrop-blur-md text-white font-light text-sm border border-white/25 px-6 py-2 shadow-[inset_0_1px_3px_rgba(255,255,255,0.3),0_4px_16px_rgba(0,0,0,0.08)] hover:bg-white/25 hover:border-white/40 transition-all duration-300`.

### 9) Condensation Divider

Droplet-styled section divider.

```html
<svg viewBox="0 0 200 8" class="w-full opacity-50">
  <circle cx="20" cy="4" r="1.5" fill="#a8c8a8"/>
  <circle cx="40" cy="4" r="1" fill="#a8c8a8"/>
  <circle cx="60" cy="4" r="2" fill="#a8c8a8"/>
  <circle cx="80" cy="4" r="1.5" fill="#a8c8a8"/>
  <circle cx="100" cy="4" r="1" fill="#a8c8a8"/>
  <circle cx="120" cy="4" r="2" fill="#a8c8a8"/>
  <circle cx="140" cy="4" r="1.5" fill="#a8c8a8"/>
  <circle cx="160" cy="4" r="1" fill="#a8c8a8"/>
  <circle cx="180" cy="4" r="2" fill="#a8c8a8"/>
</svg>
```

### 10) Pebble Texture Accent

Small rounded stones along substrate surface.

```html
<svg class="w-full opacity-60" viewBox="0 0 200 10">
  <ellipse cx="20" cy="6" rx="5" ry="3" fill="#8a8a7a"/>
  <ellipse cx="45" cy="5" rx="4" ry="2.5" fill="#9a9a8a"/>
  <ellipse cx="70" cy="7" rx="6" ry="3" fill="#7a7a6a"/>
  <ellipse cx="100" cy="5" rx="4" ry="2.5" fill="#8a8a7a"/>
  <ellipse cx="130" cy="6" rx="5" ry="3" fill="#9a9a8a"/>
  <ellipse cx="160" cy="5" rx="4" ry="2.5" fill="#7a7a6a"/>
  <ellipse cx="185" cy="7" rx="5" ry="3" fill="#8a8a7a"/>
</svg>
```

## Color Palette System

### Terrarium Ecosystem Palette

| Element | Color | Hex | Role |
|---|---|---|---|
| Glass | White Translucent | `white/10` to `white/25` | Jar surface, blur surfaces |
| Pebble | Gray | `#8a8a7a` | Bottom substrate band |
| Sand | Tan | `#d4a868` | Middle substrate band |
| Soil | Brown | `#4a2a0a` | Darkest substrate band |
| Moss | Green | `#3a6a2a` | Living coverage patches |
| Sprout | Green | `#5a9a3a` | Plant growth, leaves |
| Condensation | White | `white/40` to `white/60` | Droplets, haze |
| Bark/Twig | Dark Brown | `#3a2a0a` | Decorative branches |
| Humidity Haze | Pale Green-White | `#c8e6c8/15` | Interior diffusion |
| Interior Glow | Soft Green | `#a8c8a8` | Ambient light, dividers |

Rules: Glass translucency is always the container. Substrate bands are always visible at the bottom in fixed order: pebble (top), sand (middle), soil (bottom). Moss and sprout greens are the only saturated colors. Condensation is always white and translucent. The palette is natural, earthy, and low-contrast — the glass diffuses everything inside it.

## Typography Recommendations

Terrarium typography is organic, light, and airy:

- **Primary:** Quicksand, Nunito, or Muli (rounded, organic sans-serif for headings).
- **Body:** Inter, Source Sans Pro (clean, readable body text).
- **Accent:** Caveat, Patrick Hand (handwritten accents for plant labels, species names).
- **Labels:** `font-sans font-light text-sm text-white/90` for interior labels.
- **Headings:** `font-sans font-medium text-xl text-white/95` on glass surfaces.
- **Plant Labels:** `font-handwritten italic text-sm text-[#5a9a3a]` (handwritten feel).
- The typography should feel like a botanist's field journal inside a glass case.

## Component Architecture Pattern

1. Glass jar/cloche container with `backdrop-blur-md` and translucent border.
2. Glass reflection streak overlay (diagonal light gradient on one side).
3. Humidity haze diffusion inside the jar.
4. Content layer (text, cards, data) above the haze, inside the glass.
5. Condensation droplet overlay scattered across the glass surface.
6. Moss texture patches at the base or corners inside the jar.
7. Layered substrate bottom (pebble/sand/soil horizontal bands).
8. Pebble texture accents along the substrate surface line.
9. Tiny plant sprout SVGs growing upward from the substrate.
10. Glass lid or cloche top decoration.
11. Condensation droplet dividers between content sections.

## Interaction Rules

- Default state: calm, enclosed, gently alive.
- Hover: glass brightens, condensation shimmers, droplets grow slightly.
  - `hover:bg-white/20 hover:border-white/40 hover:shadow-[inset_0_2px_15px_rgba(255,255,255,0.4),0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-500`.
- Active: `active:scale-[0.98]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#5a9a3a]/40`.
- Transitions: `transition-all duration-500` (slow, organic, like watching a plant grow).
- Condensation droplets can subtly grow/shrink on a CSS animation loop.
- Moss patches can slowly pulse (breathing ecosystem effect).
- Plant sprouts can have a gentle sway animation (wind inside the jar).
- Optional: cursor proximity causes condensation to form near the pointer.

## Reusable Tailwind Tokens

- Glass jar: `rounded-[3rem] bg-white/10 backdrop-blur-md border border-white/30 shadow-[inset_0_2px_10px_rgba(255,255,255,0.3),0_8px_32px_rgba(0,0,0,0.1)]`
- Glass reflection: `absolute top-0 left-[10%] w-[20%] h-full bg-gradient-to-b from-white/20 to-transparent`
- Substrate bands: `bg-[linear-gradient(to_bottom,#8a8a7a_0%,#8a8a7a_6%,#d4a868_6%,#d4a868_16%,#4a2a0a_16%)]`
- Condensation overlay: SVG scattered white circles at `opacity-40`.
- Moss patch: `rounded-full opacity-70` with `radial-gradient(#5a8a3a,#3a6a2a)` and SVG bump texture.
- Humidity haze: `bg-[radial-gradient(ellipse_at_center,rgba(200,230,200,0.15)_0%,transparent_70%)]`
- Plant sprout: SVG stem + leaf paths in `#5a9a3a` and `#6aaa4a`.
- Glass button: `rounded-full bg-white/15 backdrop-blur-md text-white font-light border border-white/25 shadow-[inset_0_1px_3px_rgba(255,255,255,0.3)]`
- Pebble accent: SVG scattered ellipses in `#8a8a7a`/`#9a9a8a`/`#7a7a6a`.
- Condensation divider: SVG scattered droplet circles in `#a8c8a8`.

## Quality Checklist (must pass)

- Glass jar or cloche container with backdrop-blur and translucent border is the primary frame.
- Layered substrate bottom (pebble/sand/soil) visible as horizontal color bands.
- Condensation droplets scattered across the glass surface (small white dots).
- At least one moss texture patch with fuzzy/green coverage.
- At least one tiny plant sprout SVG growing from the substrate.
- Humidity haze / interior diffusion present (soft glow).
- Glass reflection streak on one side of the jar.
- Condensation droplet dividers between content sections.
- Substrate band colors follow the fixed order (pebble gray, sand tan, soil brown).
- Glass lid or cloche top decoration present.
- Transitions are slow and organic (duration-500), not sharp.
- The aesthetic reads as a self-contained miniature glass ecosystem.
- Everything feels organic, enclosed, delicately alive, and low-contrast.

## Anti-Patterns

- Opaque containers (glass must be translucent with backdrop-blur, never solid).
- Missing substrate bands (the layered bottom is a foundational element).
- Missing condensation droplets (these are the signature texture of enclosed humidity).
- Bright neon or high-saturation colors (the palette is natural and earthy).
- Sharp angular containers (use rounded, organic shapes like jars and cloches).
- Missing moss or plant elements (the terrarium must feel alive, not empty).
- Crisp, dry surfaces (everything inside should have humidity haze and diffusion).
- Fast, snappy transitions (use slow organic timing, duration-500).
- Missing glass reflection (the light streak is what sells the glass material).
- Dark backgrounds without glass contrast (the jar needs to read as translucent).
- Modern minimalist sterility (terrariums are organic, textured, and alive).
- Flat single-color substrate (use gradient bands, not solid fills).
- Missing humidity haze (the interior diffusion is what makes it feel enclosed).

## Accessibility Considerations

- White text on glass over dark backgrounds provides good contrast, but on light backgrounds the glass surface needs darker text (`text-[#3a2a0a]` on light substrates).
- Condensation and moss overlays must not reduce text contrast (keep decorative SVGs behind content at low opacity).
- Focus states: `focus:ring-2 focus:ring-[#5a9a3a]/40` (sprout green ring).
- Glass jar, condensation, moss, and plant SVGs must be `aria-hidden="true"`.
- Interior content must maintain logical reading order despite layered z-index.
- The translucent surfaces can reduce contrast in certain lighting — always test text legibility on glass.
- Touch targets (glass buttons) must have minimum 44x44px hit area.
- Slow transitions (duration-500) are accessibility-friendly but ensure motion-reduce preferences are respected: `motion-reduce:transition-none motion-reduce:duration-0`.
