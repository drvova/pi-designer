---
name: lighthouse-ui
description: Build lighthouse UI components (coastal beacon tower, rotating light beam, Fresnel lens prisms, black-and-white striped tower, keeper's quarters, foghorn elements, rocky cliff base, storm seas) with rotating beam animations, coastal storm atmosphere, and the steadfast guidance of maritime navigation. Trigger this skill when the user asks for lighthouse design, beacon tower UI, rotating beam animation, Fresnel lens, coastal storm interface, keeper's quarters layout, foghorn elements, rocky cliff base, storm sea waves, or maritime navigation guidance aesthetic.
---

# Lighthouse / Maritime Beacon UI

Use this skill to design and implement dramatic, steadfast interfaces inspired by lighthouse beacons: black-and-white or red-and-white striped towers, rotating beam sweep animations, Fresnel lens refraction prisms, keeper's house attachments, rocky cliff bases, and storm sea waves. The aesthetic is resilient guidance cutting through turbulent atmosphere -- bold contrast, warm beacon light, and the raw power of coastal storms.

## Non-Negotiable Foundations

- The lighthouse tower silhouette or stripe pattern must appear in every design -- it is the signature visual identity.
- At least one rotating beam or light-sweep animation must be present to convey the beacon function.
- The palette must remain high-contrast: beacon white, tower red, ocean storm dark, and cliff gray. No pastels, no neon, no warm earth tones.
- Storm atmosphere dominates -- dark skies, turbulent seas, wind-driven energy. This is not a calm sunny beach scene.
- All interactive elements must have sufficient contrast against dark storm backgrounds for readability.
- Animations must respect `prefers-reduced-motion` and degrade to a static glow when motion is disabled.

## Core Material Recipes

### 1) Lighthouse Tower Silhouette

Black-and-white or red-and-white striped tower with keeper's house base.

```html
<div class="relative w-32 h-64 mx-auto">
  <!-- Tower body with stripes -->
  <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-48 bg-[repeating-linear-gradient(0deg,#1a1a1a_0px,#1a1a1a_12px,#f5f5f0_12px,#f5f5f0_24px)] rounded-t-sm">
    <!-- Gallery walkway -->
    <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-2 bg-[#1a1a1a] rounded-sm"></div>
    <!-- Lantern room -->
    <div class="absolute -top-8 left-1/2 -translate-x-1/2 w-10 h-6 bg-[#f5f5f0]/80 border border-[#1a1a1a] rounded-t-lg backdrop-blur-sm"></div>
    <!-- Beacon light -->
    <div class="absolute -top-6 left-1/2 -translate-x-1/2 w-4 h-2 bg-[#ffcc00] rounded-full shadow-[0_0_20px_#ffcc00,0_0_40px_#ffcc00/50]"></div>
  </div>
  <!-- Keeper's house -->
  <div class="absolute bottom-0 left-1/2 translate-x-2 w-14 h-16 bg-[#f5f5f0] border border-[#6a6a6a] rounded-t-sm">
    <div class="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-5 bg-[#1a2a3a] rounded-t-sm"></div>
    <!-- Roof -->
    <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-[72px] h-4 bg-[#c41e1e] clip-path-[polygon(10%_100%,50%_0,90%_100%)]"></div>
  </div>
  <!-- Rocky cliff base -->
  <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-8 bg-[#6a6a6a] rounded-[40%_60%_50%_50%/100%_100%_0_0]"></div>
</div>
```

### 2) Rotating Beam Sweep Animation

CSS rotating light beam that sweeps across the viewport.

```html
<style>
@keyframes beam-sweep { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
@keyframes beam-pulse { 0%,100% { opacity: 0.6; } 50% { opacity: 1; } }
</style>
<div class="relative w-full h-48 overflow-hidden bg-[#1a2a3a]">
  <!-- Beam origin point -->
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#ffcc00] rounded-full shadow-[0_0_15px_#ffcc00] z-10"></div>
  <!-- Rotating beam -->
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] origin-center"
       style="animation: beam-sweep 8s linear infinite;">
    <!-- Beam strip -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-[300px] bg-gradient-to-b from-[#ffcc00]/80 via-[#ffcc00]/30 to-transparent origin-bottom"
         style="animation: beam-pulse 4s ease-in-out infinite;"></div>
    <!-- Secondary beam (opposite side) -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-[300px] bg-gradient-to-t from-[#ffcc00]/40 via-[#ffcc00]/10 to-transparent origin-top"></div>
  </div>
</div>
```

### 3) Fresnel Lens Refraction Prism

Concentric arc SVG representing Fresnel lens light concentration.

```html
<svg viewBox="0 0 200 200" class="w-40 h-40">
  <defs>
    <radialGradient id="fresnel-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffcc00" stop-opacity="0.8"/>
      <stop offset="60%" stop-color="#ffcc00" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#ffcc00" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="100" cy="100" r="80" fill="url(#fresnel-glow)"/>
  <!-- Fresnel concentric arcs -->
  <g fill="none" stroke="#f5f5f0" stroke-width="1.5" opacity="0.6">
    <path d="M100,20 A80,80 0 0,1 100,180" stroke-dasharray="4,6"/>
    <path d="M100,35 A65,65 0 0,1 100,165" stroke-dasharray="3,5"/>
    <path d="M100,50 A50,50 0 0,1 100,150" stroke-dasharray="2,4"/>
    <path d="M100,65 A35,35 0 0,1 100,135" stroke-dasharray="2,3"/>
    <path d="M100,80 A20,20 0 0,1 100,120"/>
  </g>
  <!-- Prism refraction lines -->
  <g stroke="#ffcc00" stroke-width="0.5" opacity="0.4">
    <line x1="100" y1="100" x2="20" y2="100"/>
    <line x1="100" y1="100" x2="180" y2="100"/>
    <line x1="100" y1="100" x2="100" y2="20"/>
    <line x1="100" y1="100" x2="100" y2="180"/>
    <line x1="100" y1="100" x2="44" y2="44"/>
    <line x1="100" y1="100" x2="156" y2="156"/>
    <line x1="100" y1="100" x2="44" y2="156"/>
    <line x1="100" y1="100" x2="156" y2="44"/>
  </g>
  <circle cx="100" cy="100" r="5" fill="#ffcc00"/>
</svg>
```

### 4) Storm Sea Wave Animation

Animated CSS wave shapes for turbulent ocean surface.

```html
<style>
@keyframes wave-roll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
@keyframes wave-surge { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
</style>
<div class="relative w-full h-24 overflow-hidden bg-[#1a2a3a]">
  <!-- Wave layer 1 (foreground) -->
  <div class="absolute bottom-0 left-0 w-[200%] h-16 bg-[#0d1a2a] opacity-80"
       style="animation: wave-roll 6s linear infinite;
              clip-path: polygon(0% 60%, 5% 45%, 10% 55%, 15% 40%, 20% 50%, 25% 35%, 30% 48%, 35% 38%, 40% 52%, 45% 42%, 50% 55%, 55% 40%, 60% 50%, 65% 35%, 70% 48%, 75% 40%, 80% 52%, 85% 38%, 90% 50%, 95% 42%, 100% 55%, 100% 100%, 0% 100%);">
  </div>
  <!-- Wave layer 2 (midground) -->
  <div class="absolute bottom-0 left-0 w-[200%] h-12 bg-[#1a2a3a] opacity-60"
       style="animation: wave-roll 9s linear infinite; animation-delay: -3s;
              clip-path: polygon(0% 50%, 4% 38%, 8% 48%, 12% 35%, 16% 45%, 20% 32%, 24% 42%, 28% 36%, 32% 48%, 36% 38%, 40% 50%, 44% 35%, 48% 45%, 52% 32%, 56% 42%, 60% 38%, 64% 50%, 68% 36%, 72% 48%, 76% 40%, 80% 52%, 84% 35%, 88% 48%, 92% 38%, 96% 50%, 100% 42%, 100% 100%, 0% 100%);">
  </div>
  <!-- Whitecap foam -->
  <div class="absolute bottom-8 left-[10%] w-8 h-1 bg-white/20 rounded-full"
       style="animation: wave-surge 3s ease-in-out infinite;"></div>
  <div class="absolute bottom-6 left-[55%] w-6 h-1 bg-white/15 rounded-full"
       style="animation: wave-surge 4s ease-in-out infinite; animation-delay: -1.5s;"></div>
</div>
```

### 5) Cliff Base Rock Formation

Rugged rocky cliff surface with layered stone texture.

- `bg-[#6a6a6a] bg-[repeating-linear-gradient(175deg,transparent_0px,transparent_8px,rgba(0,0,0,0.08)_8px,rgba(0,0,0,0.08)_9px)] clip-path-[polygon(0%_100%,5%_80%,12%_90%,20%_70%,28%_85%,35%_65%,42%_80%,50%_60%,58%_75%,65%_55%,72%_70%,80%_50%,88%_65%,95%_45%,100%_60%,100%_100%)]`.

### 6) Foghorn Warning Card

Alert card styled as a foghorn blast warning.

- `bg-[#1a2a3a] border-l-4 border-[#c41e1e] rounded-r-lg p-5 shadow-[inset_0_0_30px_rgba(0,0,0,0.3)]`.
- Fog effect: `bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_12px,rgba(245,245,240,0.03)_12px,rgba(245,245,240,0.03)_14px)]`.

### 7) Beacon Light Button

High-contrast button with beacon glow effect.

- `bg-[#c41e1e] text-[#f5f5f0] font-semibold px-8 py-3 rounded-lg shadow-[0_0_15px_rgba(204,30,30,0.4),0_0_30px_rgba(204,30,30,0.2)] hover:shadow-[0_0_25px_rgba(204,30,30,0.6),0_0_50px_rgba(204,30,30,0.3)] transition-shadow`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Beacon White | `#f5f5f0` | Tower stripes, text on dark, light surfaces |
| Tower Red | `#c41e1e` | Tower stripes, alert accents, primary action |
| Beam Yellow | `#ffcc00` | Rotating beam, beacon glow, warm highlights |
| Ocean Storm | `#1a2a3a` | Primary dark background, storm sea |
| Cliff Gray | `#6a6a6a` | Rocky base, neutral secondary surfaces |
| Sky Storm | `#2a3a4a` | Secondary dark, atmospheric gradient mid-tone |
| Deep Night | `#0d1a2a` | Deepest ocean, wave foreground |
| Keeper Cream | `#e8e0d0` | Keeper's house walls, warm light accents |
| Rust Orange | `#8a4a2a` | Weathered metal, rust accents on hardware |

Rules: The palette is defined by stark contrast -- beacon white and tower red against deep storm blues and grays. Beam yellow is the sole warm highlight. No pastels, no muted tones. This is a palette forged in wind and salt spray.

## Typography Recommendations

- **Display:** Bebas Neue, Oswald (bold condensed -- like tower signage painted in high wind).
- **Body:** DM Sans, Inter (clean readable sans-serif that holds up against dark backgrounds).
- **Labels:** `font-bold uppercase tracking-[0.2em] text-xs text-[#f5f5f0]/60` (like stenciled tower identification numbers).
- **Warnings:** `font-mono font-bold text-[#c41e1e] tracking-wider` (foghorn alert severity).
- Typography should feel authoritative and unmissable -- painted on metal plates bolted to storm-beaten structures.

## Component Architecture Pattern

- **Tower Header:** Full-width dark banner with lighthouse silhouette centered, rotating beam animation, and storm sky gradient `bg-gradient-to-b from-[#2a3a4a] to-[#1a2a3a]`.
- **Beacon Content Panels:** Dark panels (`bg-[#1a2a3a]`) with subtle fog texture overlays and beacon white text.
- **Keeper's Quarters Sidebar:** Warmer-toned sidebar (`bg-[#e8e0d0]`) for settings, navigation, or secondary content -- the human warmth beside the mechanical beacon.
- **Storm Wave Footer:** Animated wave dividers separating sections, building from `#1a2a3a` to `#0d1a2a`.
- **Foghorn Alerts:** Fixed-position toast notifications with red left border and fog texture, appearing from bottom.

## Interaction Rules

- Beacon glow buttons pulse gently on hover using `shadow` transitions to simulate light intensification.
- Beam sweep animation runs continuously but pauses on hover over the tower element (user focuses attention).
- Storm wave animations speed up slightly during page load then settle to steady rhythm.
- Card hover lifts with `translate-y` and increases shadow depth, as if rising on a swell.
- Scroll-linked parallax: tower silhouette moves slower than content, lighthouse stays anchored.
- Fog overlay opacity increases when scrolling past content into empty space.

## Reusable Tailwind Tokens

- Tower stripe: `bg-[repeating-linear-gradient(0deg,#1a1a1a_0px,#1a1a1a_12px,#f5f5f0_12px,#f5f5f0_24px)]`.
- Tower red stripe: `bg-[repeating-linear-gradient(0deg,#c41e1e_0px,#c41e1e_12px,#f5f5f0_12px,#f5f5f0_24px)]`.
- Beacon glow: `shadow-[0_0_15px_#ffcc00,0_0_40px_#ffcc00/50]`.
- Storm background: `bg-[#1a2a3a] bg-gradient-to-b from-[#2a3a4a] to-[#1a2a3a]`.
- Fog texture: `bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_12px,rgba(245,245,240,0.03)_12px,rgba(245,245,240,0.03)_14px)]`.
- Cliff rock: `bg-[#6a6a6a] bg-[repeating-linear-gradient(175deg,transparent_0px,transparent_8px,rgba(0,0,0,0.08)_8px,rgba(0,0,0,0.08)_9px)]`.
- Beacon button: `bg-[#c41e1e] text-[#f5f5f0] shadow-[0_0_15px_rgba(204,30,30,0.4)]`.
- Wave clip: `clip-path: polygon(...)` with `animation: wave-roll Ns linear infinite`.

## Quality Checklist

- Tower silhouette or stripe pattern is visually prominent in every view.
- At least one rotating beam or light-sweep animation is present.
- Storm atmosphere pervades -- dark sky gradients, turbulent wave elements.
- High contrast maintained: beacon white text on storm dark backgrounds.
- Fresnel lens or beacon glow element conveys concentrated light.
- Rocky cliff or keeper's house grounding element anchors the tower.
- Fog or mist texture overlays add atmospheric depth.
- Wave animation or wave-shaped dividers separate major sections.
- Typography is bold, condensed, and authoritative.
- The aesthetic reads as a lighthouse in a storm -- resilient, guiding, dramatic.

## Anti-Patterns

- Calm sunny beach colors (this is a storm, not a vacation).
- Soft pastels or muted earth tones (the palette is high-contrast storm and beacon).
- Missing tower silhouette or stripe pattern (the lighthouse IS the design).
- No beam or light animation (the rotating beacon is the core interaction metaphor).
- Light or white-dominant backgrounds (storm skies are dark, the beacon cuts through).
- Flat single-color backgrounds without atmospheric gradient or texture.
- Missing wave or water elements (the ocean is always present around a lighthouse).
- Thin weak typography that disappears against dark backgrounds.
- Rounded playful shapes (lighthouse architecture is angular, structural, industrial).
- Missing foghorn or warning UI patterns (a lighthouse exists to warn -- danger must be communicable).

## Accessibility Considerations

- Rotating beam animation must respect `prefers-reduced-motion: reduce` -- replace with static glow or slow fade pulse.
- Beacon yellow `#ffcc00` on storm dark `#1a2a3a` exceeds 4.5:1 contrast ratio; use this pair for all text-on-dark combinations.
- Tower red `#c41e1e` on beacon white `#f5f5f0` exceeds 4.5:1 contrast ratio for body text.
- Wave clip-path animations must not obscure content beneath them -- ensure content z-index is higher than decorative waves.
- Storm gradient backgrounds must not reduce text legibility -- overlay text on semi-transparent dark panels when gradients shift to lighter mid-tones.
- Fog texture overlays must use opacity below `0.05` to avoid reducing readability of underlying content.
- All beam animations must have a visible static alternative for users who cannot perceive motion.
- Warning/foghorn cards must use both color (red border) AND icon/text label to convey severity -- color alone is insufficient.
