---
name: northern-lights-ui
description: Build northern lights UI components (aurora borealis ribbons, snowy landscape, pine silhouettes, cabin warmth, star field, ice crystal air) with flowing aurora animations, dark night sky, and the magical natural light show of the arctic. Trigger this skill when the user asks for northern lights design, aurora borealis UI, northern landscape interface, aurora animation, arctic night aesthetic, winter cabin UI, snowfield layout, star field background, or magical polar night interfaces.
---

# Northern Lights UI

Use this skill to design and implement enchanted arctic night interfaces: aurora borealis ribbon animations flowing across dark skies, star field backgrounds, pine tree silhouettes framing snowy landscapes, warm cabin glows as focal points, and ice crystal sparkle accents throughout. The aesthetic captures the magical moment of standing under the northern lights in a silent snowy wilderness.

## Non-Negotiable Foundations

- Northern Lights UI is ENCHANTED DARKNESS: the base environment is deep night sky, lit only by aurora ribbons, stars, and cabin windows.
- The aurora is the hero: flowing ribbons of green, blue, and purple MUST animate across the sky — this is the defining visual element.
- Pine silhouettes anchor the bottom edge: dark triangular tree shapes form a jagged horizon line against the snow.
- Snow covers the ground: a white-to-pale-blue gradient base layer beneath everything.
- The cabin provides warm contrast: a small structure with glowing amber/orange windows is the sole warmth in the scene.
- Star field fills the sky: scattered white dots of varying size and opacity create depth in the night sky above.
- Ice crystal sparkles appear on surfaces: small white sparkle dots that appear and fade near interactive elements.
- The aesthetic is magical, vast, quiet, and awe-inspiring — the emotional experience of witnessing the northern lights.

## Core Material Recipes

### 1) Night Sky Background

Dark gradient backdrop with aurora overlay zone.

- `bg-gradient-to-b from-[#0a0a2a] via-[#0e0e35] to-[#121830]` (deep night sky gradient).
- Star field: `bg-[radial-gradient(1px_1px_at_10%_20%,#f0f0ff_1px,transparent_0),radial-gradient(1px_1px_at_30%_10%,#f0f0ff_0.8px,transparent_0),radial-gradient(1.5px_1.5px_at_50%_5%,#f0f0ff_1px,transparent_0),radial-gradient(1px_1px_at_70%_15%,#f0f0ff_0.6px,transparent_0),radial-gradient(1px_1px_at_90%_25%,#f0f0ff_1px,transparent_0),radial-gradient(1.5px_1.5px_at_15%_35%,#f0f0ff_0.8px,transparent_0),radial-gradient(1px_1px_at_85%_40%,#f0f0ff_1px,transparent_0)] bg-[size:200px_200px]`.
- Aurora zone: reserve the top 60% of the viewport for aurora ribbon animation.

### 2) Aurora Ribbon Animation

Flowing colored bands that sweep across the sky.

```html
<div class="absolute inset-0 overflow-hidden pointer-events-none">
  <div class="aurora-ribbon absolute w-[200%] h-40 top-[5%] -left-1/2 bg-gradient-to-r from-transparent via-[#40e080]/30 to-transparent blur-3xl rounded-[50%]"></div>
  <div class="aurora-ribbon-2 absolute w-[180%] h-32 top-[12%] -left-[40%] bg-gradient-to-r from-transparent via-[#40a0e0]/25 to-transparent blur-3xl rounded-[50%]"></div>
  <div class="aurora-ribbon-3 absolute w-[160%] h-24 top-[8%] -left-[30%] bg-gradient-to-r from-transparent via-[#8a40c0]/20 to-transparent blur-3xl rounded-[50%]"></div>
</div>
```

- Base class: `bg-gradient-to-r from-transparent via-[#40e080]/30 to-transparent blur-3xl rounded-[50%]`.
- Green ribbon: `via-[#40e080]/30` (primary aurora color).
- Blue ribbon: `via-[#40a0e0]/25` (secondary aurora color).
- Purple ribbon: `via-[#8a40c0]/20` (tertiary accent).
- Animation: `@keyframes aurora-flow { 0% { transform: translateX(-30%) scaleY(1); } 50% { transform: translateX(10%) scaleY(1.4); } 100% { transform: translateX(-30%) scaleY(1); } }` with `animation: aurora-flow 12s ease-in-out infinite`.

### 3) Snowy Landscape Base

White-to-pale-blue ground layer at the bottom.

- Snow ground: `absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-b from-[#f0f4ff]/90 to-[#f8fcff]`.
- Snow texture: `bg-[radial-gradient(rgba(255,255,255,0.6)_1px,transparent_1px)] bg-[size:12px_12px]`.
- Snow drifts: `before:absolute before:bottom-[25%] before:left-0 before:right-0 before:h-8 before:bg-[radial-gradient(ellipse_120%_100%_at_50%_100%,#f8fcff,transparent)]`.

### 4) Pine Tree Silhouettes

Dark triangular shapes forming the horizon line.

```html
<svg viewBox="0 0 1200 200" class="absolute bottom-[25%] left-0 right-0 w-full text-[#0a1a0a]" preserveAspectRatio="none">
  <polygon points="50,200 65,60 80,200"/>
  <polygon points="100,200 120,30 140,200"/>
  <polygon points="170,200 185,70 200,200"/>
  <polygon points="230,200 255,20 280,200"/>
  <polygon points="310,200 325,80 340,200"/>
  <polygon points="370,200 390,40 410,200"/>
  <polygon points="440,200 455,65 470,200"/>
  <polygon points="500,200 530,15 560,200"/>
  <polygon points="580,200 595,75 610,200"/>
  <polygon points="640,200 660,35 680,200"/>
  <polygon points="710,200 730,55 750,200"/>
  <polygon points="780,200 800,25 820,200"/>
  <polygon points="850,200 865,70 880,200"/>
  <polygon points="910,200 935,45 960,200"/>
  <polygon points="990,200 1005,60 1020,200"/>
  <polygon points="1050,200 1075,30 1100,200"/>
  <polygon points="1120,200 1140,50 1160,200"/>
</svg>
```

- Pine color: `fill-[#0a1a0a]` (near-black green).
- Sizing: vary heights by adjusting the top point Y value (15-80) for natural rhythm.
- Positioning: `absolute bottom-[25%]` overlapping the snow-to-sky transition.

### 5) Cabin with Warm Window Glow

Small cabin structure with glowing amber windows.

```html
<div class="absolute bottom-[28%] left-[15%] w-16 h-12">
  <!-- Roof -->
  <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[36px] border-r-[36px] border-b-[14px] border-l-transparent border-r-transparent border-b-[#2a1a0a]"></div>
  <!-- Wall -->
  <div class="absolute top-0 left-0 right-0 h-full bg-[#3a2a1a] rounded-sm"></div>
  <!-- Window glow -->
  <div class="absolute top-2 left-2 w-5 h-5 bg-[#ffcc66] rounded-sm shadow-[0_0_12px_#ffcc66,0_0_24px_rgba(255,204,102,0.5)]"></div>
  <div class="absolute top-2 right-2 w-5 h-5 bg-[#ffcc66] rounded-sm shadow-[0_0_12px_#ffcc66,0_0_24px_rgba(255,204,102,0.5)]"></div>
  <!-- Door -->
  <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-6 bg-[#4a3a2a] rounded-t-sm"></div>
</div>
```

- Window glow: `bg-[#ffcc66] shadow-[0_0_12px_#ffcc66,0_0_24px_rgba(255,204,102,0.5)]`.
- Cabin wall: `bg-[#3a2a1a]` (dark warm wood).
- Roof: CSS triangle using borders `border-b-[#2a1a0a]`.

### 6) Ice Crystal Sparkle Accent

Small white sparkles that appear near interactive elements.

```html
<div class="sparkle absolute">
  <svg viewBox="0 0 12 12" class="w-3 h-3 text-[#f0f0ff]">
    <path d="M6,0 L7,4 L12,6 L7,8 L6,12 L5,8 L0,6 L5,4 Z" fill="currentColor"/>
  </svg>
</div>
```

- Sparkle shape: four-pointed star SVG.
- Color: `text-[#f0f0ff]` (star white).
- Animation: `@keyframes sparkle-pulse { 0%,100% { opacity: 0; transform: scale(0.5); } 50% { opacity: 1; transform: scale(1); } }` with staggered delays.

### 7) Star Field Layer

Scattered white dots with varying opacity for depth.

- Close stars: `bg-[radial-gradient(circle_1.5px_1.5px_at_center,#f0f0ff,transparent)] bg-[size:80px_60px] bg-[position:0px_0px]`.
- Far stars: `bg-[radial-gradient(circle_0.8px_0.8px_at_center,#f0f0ff_0.5,transparent)] bg-[size:40px_30px] bg-[position:10px_5px]`.
- Star twinkle: `@keyframes twinkle { 0%,100% { opacity: 0.3; } 50% { opacity: 1; } }` applied to individual star layers.

### 8) Aurora Card

Content card set against the night sky with aurora reflection.

- `bg-[#0e0e35]/80 backdrop-blur-sm border border-[#40e080]/10 rounded-xl p-6 shadow-[0_0_20px_rgba(64,224,128,0.08),0_0_40px_rgba(64,160,224,0.05)]`.
- Top edge glow: `before:absolute before:top-0 before:left-[10%] before:right-[10%] before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#40e080]/40 before:to-transparent`.

## Color Palette System

### Core Northern Lights Palette

| Color | Hex | Role |
|---|---|---|
| Aurora Green | `#40e080` | Primary aurora ribbon color |
| Aurora Blue | `#40a0e0` | Secondary aurora ribbon color |
| Aurora Purple | `#8a40c0` | Tertiary aurora accent |
| Night Sky | `#0a0a2a` | Primary background |
| Deep Sky | `#0e0e35` | Panel/card backgrounds |
| Star White | `#f0f0ff` | Stars, sparkles, text on dark |
| Snow White | `#f8fcff` | Snow ground, highlights |
| Pine Dark | `#0a1a0a` | Tree silhouettes |
| Cabin Warm | `#ffcc66` | Window glow, warmth accent |
| Cabin Wood | `#3a2a1a` | Cabin structure |
| Ice Crystal | `#b0d0e0` | Subtle border accents |

### Extended Aurora Tones

| Color | Hex | Role |
|---|---|---|
| Aurora Teal | `#20d0b0` | Mid-transition between green and blue |
| Aurora Pink | `#c060e0` | Rare purple-pink aurora moments |
| Sky Midnight | `#121830` | Deepest sky gradient stop |
| Snow Shadow | `#e0e8f0` | Snow shadow areas |

Rules: Dark backgrounds dominate (70%+ of surface area). Aurora colors appear as flowing animated gradients, never as solid fills. Warm cabin tones appear only as small focal points. Snow and stars provide white accents. The palette tells the story of darkness illuminated by natural wonder.

## Typography Recommendations

- **Display:** Space Grotesk, Sora, or Outfit (modern geometric that reads well against dark skies).
- **Body:** Inter, DM Sans (clean readability on dark backgrounds).
- **Data:** JetBrains Mono (for coordinates, temperatures, aurora intensity readings).
- **Accent:** Cinzel or Playfair Display for headings that evoke the majesty of the night sky.
- **Labels:** `font-medium text-sm tracking-wider text-[#f0f0ff]/70` (muted star-white on dark).
- Typography should feel AWE-INSPIRING yet readable — like constellations mapped across a dark sky. Light weight text on dark backgrounds with generous letter-spacing.

## Interaction Rules

- Default: dark, mysterious, aurora-lit.
- Hover: aurora glow intensifies around the element, sparkle accents appear.
  - `hover:shadow-[0_0_20px_rgba(64,224,128,0.15),0_0_40px_rgba(64,160,224,0.1)] hover:border-[#40e080]/20 transition-all duration-500`.
- Active: `active:scale-[0.98] active:shadow-[0_0_30px_rgba(64,224,128,0.2)]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#40e080]/30 focus:shadow-[0_0_15px_rgba(64,224,128,0.15)]`.
- Transitions: `transition-all duration-500 ease-out` (slow, flowing, like aurora movement).
- Aurora ribbon animation should NEVER pause or stutter — it must flow continuously.

## Reusable Tailwind Tokens

- Night sky bg: `bg-gradient-to-b from-[#0a0a2a] via-[#0e0e35] to-[#121830]`.
- Aurora panel: `bg-[#0e0e35]/80 backdrop-blur-sm border border-[#40e080]/10 rounded-xl`.
- Aurora glow: `shadow-[0_0_20px_rgba(64,224,128,0.1),0_0_40px_rgba(64,160,224,0.06)]`.
- Snow base: `bg-gradient-to-b from-[#f0f4ff]/90 to-[#f8fcff]`.
- Cabin glow: `bg-[#ffcc66] shadow-[0_0_12px_#ffcc66,0_0_24px_rgba(255,204,102,0.5)]`.
- Star text: `text-[#f0f0ff]`.
- Pine silhouette: `text-[#0a1a0a]`.
- Aurora button: `bg-gradient-to-r from-[#40e080]/20 via-[#40a0e0]/20 to-[#8a40c0]/20 text-[#f0f0ff] border border-[#40e080]/20 rounded-full hover:from-[#40e080]/30 hover:via-[#40a0e0]/30 hover:to-[#8a40c0]/30`.

## Quality Checklist

- Background is deep night sky gradient (dark blue-purple, never black).
- Aurora ribbon animation present and flowing (green, blue, purple bands).
- Star field with varying star sizes and twinkle animation.
- Pine tree silhouettes form the horizon line along the bottom.
- Snow-covered ground layer at the bottom of the scene.
- At least one cabin with warm amber window glow (the sole warm element).
- Ice crystal sparkle accents near interactive elements.
- Content panels use dark translucent surfaces with subtle aurora border glow.
- Typography is light-on-dark with generous spacing.
- Aurora colors never appear as solid fills — always as gradients/overlays.
- The overall scene reads as a magical arctic night landscape.
- Warm cabin glow is SMALL and FOCAL — it must not overwhelm the cool palette.

## Anti-Patterns

- Light or white backgrounds (northern lights is a NIGHT scene).
- Solid aurora color fills (aurora is always flowing, transparent, gradient-based).
- Missing star field (the sky is empty without it).
- Missing pine silhouettes (the landscape has no depth without the tree line).
- Warm colors beyond the cabin windows (warmth is scarce and precious here).
- Bright saturated cabin (the cabin is small and dark with only glowing windows visible).
- Stuttering or paused aurora animation (the lights must flow continuously).
- Black backgrounds instead of deep blue-purple (night sky is never pure black).
- Cluttered layouts (northern lights is vast, open, and awe-inspiring).
- Aurora ribbons that are too opaque or solid (they should be translucent and ethereal).
- Missing snow on the ground (the landscape must have a white base).

## Accessibility Considerations

- Dark backgrounds with light text (`#f0f0ff` on `#0a0a2a`) provide strong contrast (WCAG AAA).
- Aurora ribbon animations must respect `prefers-reduced-motion`: disable or reduce animation speed.
- Star twinkle animations must respect `prefers-reduced-motion`.
- Sparkle effects must be `aria-hidden="true"` as they are decorative.
- Pine silhouette SVGs must be `aria-hidden="true"`.
- Cabin glow must not be the sole indicator of interactive elements — pair with text or icon labels.
- Translucent panels must maintain text contrast at all aurora animation states — verify text legibility throughout the animation cycle.
- Aurora ribbon color changes must maintain sufficient contrast with any text overlapping them.
- Touch targets must be adequate despite the atmospheric dark styling.
- High-contrast mode: ensure content remains readable when aurora effects are disabled.
