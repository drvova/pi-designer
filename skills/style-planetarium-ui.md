---
name: planetarium-ui
description: Build planetarium UI components (domed ceiling projection, rotating star field, constellation line animations, celestial sphere dome, educational space shows, immersive dome theater) with 360-degree dome projection frames, constellation connect-the-dot interactions, and the educational awe of planetarium star shows. Trigger this skill when the user asks for planetarium design, dome projection UI, rotating star field, constellation line animation, celestial sphere, space show interface, dome theater, immersive star projection, educational astronomy display, or planetarium aesthetic.
---

# Planetarium / Dome Theater UI

Use this skill to design and implement immersive, awe-filled interfaces inspired by planetarium dome theaters: circular dome projection screens alive with rotating star fields, constellation connect-the-dot interactions, celestial sphere reference grids, and the quiet wonder of educational space shows. The aesthetic is projected darkness under a vast dome -- deep blacks filled with precisely placed starlight, constellation blue accents tracing mythic shapes, planet colors as warm highlights against infinite cosmic depth.

## Non-Negotiable Foundations

- The dome projection frame (circular or circular-clipped container with radial star field) must appear in every design -- it is the signature spatial identity of the planetarium experience.
- Rotating star field animation must be present on at least one element per view -- slow, organic rotation creating the illusion of Earth turning beneath the sky.
- Constellation lines (SVG polylines connecting star dots with labels) must appear in at least one element per page to establish the educational connect-the-dot motif.
- The palette must remain dome-dark dominant: deep dome blacks with star white, constellation blue, and planet color accents. No bright whites, no warm sandy tones, no saturated primaries outside the planet accent set.
- Celestial sphere reference circles (declination rings, right ascension meridians) must appear as subtle overlay geometry in at least one component.
- All star rotation and constellation line animations must respect `prefers-reduced-motion` and degrade to static positioned star fields.

## Core Material Recipes

### 1) Dome Projection Screen

Circular frame with radial star field background, the signature planetarium element.

```html
<div class="relative w-full aspect-square max-w-lg mx-auto rounded-full overflow-hidden bg-[#0a0a1a] border-2 border-[#2a3a4a]/40 shadow-[0_0_40px_rgba(10,10,26,0.9)]">
  <!-- Rotating star field layer -->
  <div class="absolute inset-0 animate-[spin_360s_linear_infinite]">
    <div class="absolute top-[12%] left-[18%] w-1 h-1 bg-[#f0f0ff] rounded-full opacity-90"></div>
    <div class="absolute top-[8%] left-[45%] w-0.5 h-0.5 bg-[#f0f0ff] rounded-full opacity-60"></div>
    <div class="absolute top-[20%] left-[72%] w-1 h-1 bg-[#f0f0ff] rounded-full opacity-80"></div>
    <div class="absolute top-[15%] left-[88%] w-0.5 h-0.5 bg-[#f0f0ff] rounded-full opacity-50"></div>
    <div class="absolute top-[5%] left-[30%] w-0.5 h-0.5 bg-[#f0f0ff] rounded-full opacity-40"></div>
    <div class="absolute top-[35%] left-[12%] w-1 h-1 bg-[#f0f0ff] rounded-full opacity-70"></div>
    <div class="absolute top-[45%] left-[55%] w-0.5 h-0.5 bg-[#f0f0ff] rounded-full opacity-55"></div>
    <div class="absolute top-[60%] left-[30%] w-1 h-1 bg-[#f0f0ff] rounded-full opacity-65"></div>
    <div class="absolute top-[70%] left-[80%] w-0.5 h-0.5 bg-[#f0f0ff] rounded-full opacity-45"></div>
    <div class="absolute top-[82%] left-[50%] w-1 h-1 bg-[#f0f0ff] rounded-full opacity-75"></div>
  </div>
  <!-- Constellation lines on dome -->
  <svg class="absolute inset-0 w-full h-full" style="pointer-events: none;">
    <polyline points="18%,12% 30%,22% 45%,18% 55%,30%" fill="none" stroke="#4a7aaa" stroke-width="0.5" opacity="0.3"/>
    <polyline points="72%,20% 80%,35% 88%,28% 82%,45%" fill="none" stroke="#4a7aaa" stroke-width="0.5" opacity="0.3"/>
    <polyline points="30%,60% 40%,50% 55%,55% 50%,70%" fill="none" stroke="#4a7aaa" stroke-width="0.5" opacity="0.25"/>
  </svg>
  <!-- Dome center glow -->
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,26,0.3)_60%,rgba(10,10,26,0.85)_100%)]"></div>
  <!-- Dome edge ring -->
  <div class="absolute inset-0 rounded-full border border-[#1a1a1a]"></div>
</div>
```

### 2) Rotating Star Field Animation

Slow CSS rotation on star dot layer, the planetarium's signature motion.

```html
<style>
@keyframes star-twinkle { 0%,100% { opacity: 0.4; } 50% { opacity: 1; } }
@keyframes dome-rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
</style>
<div class="relative w-full h-64 bg-[#0a0a1a] rounded-full overflow-hidden">
  <!-- Rotating star layer -->
  <div class="absolute inset-0" style="animation: dome-rotate 300s linear infinite;">
    <div class="absolute top-[10%] left-[15%] w-1 h-1 bg-[#f0f0ff] rounded-full" style="animation: star-twinkle 4s ease-in-out infinite;"></div>
    <div class="absolute top-[25%] left-[60%] w-1.5 h-1.5 bg-[#f0f0ff] rounded-full" style="animation: star-twinkle 3s ease-in-out infinite; animation-delay: -1s;"></div>
    <div class="absolute top-[40%] left-[35%] w-0.5 h-0.5 bg-[#f0f0ff] rounded-full" style="animation: star-twinkle 5s ease-in-out infinite; animation-delay: -2s;"></div>
    <div class="absolute top-[60%] left-[80%] w-1 h-1 bg-[#f0f0ff] rounded-full" style="animation: star-twinkle 6s ease-in-out infinite;"></div>
    <div class="absolute top-[75%] left-[20%] w-0.5 h-0.5 bg-[#f0f0ff] rounded-full" style="animation: star-twinkle 4.5s ease-in-out infinite; animation-delay: -0.5s;"></div>
    <div class="absolute top-[15%] left-[85%] w-1 h-1 bg-[#f0f0ff] rounded-full" style="animation: star-twinkle 3.5s ease-in-out infinite; animation-delay: -1.5s;"></div>
    <div class="absolute top-[55%] left-[45%] w-0.5 h-0.5 bg-[#f0f0ff] rounded-full" style="animation: star-twinkle 5.5s ease-in-out infinite; animation-delay: -3s;"></div>
    <div class="absolute top-[90%] left-[65%] w-1 h-1 bg-[#f0f0ff] rounded-full" style="animation: star-twinkle 4s ease-in-out infinite; animation-delay: -2.5s;"></div>
  </div>
  <!-- Static overlay stars (do not rotate) -->
  <div class="absolute top-[30%] left-[50%] w-1.5 h-1.5 bg-[#f0f0ff] rounded-full shadow-[0_0_6px_#f0f0ff]"></div>
  <div class="absolute top-[50%] left-[25%] w-1 h-1 bg-[#f0f0ff] rounded-full shadow-[0_0_4px_#f0f0ff]"></div>
</div>
```

### 3) Constellation Line Pattern

SVG polyline connecting star dots with labels, the educational connect-the-dot motif.

```html
<svg viewBox="0 0 400 300" class="w-full h-full">
  <!-- Constellation stars (dots) -->
  <circle cx="80" cy="60" r="2" fill="#f0f0ff" opacity="0.9"/>
  <circle cx="120" cy="40" r="1.5" fill="#f0f0ff" opacity="0.8"/>
  <circle cx="160" cy="70" r="2.5" fill="#f0f0ff" opacity="1"/>
  <circle cx="200" cy="50" r="1.5" fill="#f0f0ff" opacity="0.7"/>
  <circle cx="240" cy="80" r="2" fill="#f0f0ff" opacity="0.85"/>
  <circle cx="280" cy="45" r="1.5" fill="#f0f0ff" opacity="0.75"/>
  <!-- Constellation connecting lines -->
  <polyline points="80,60 120,40 160,70 200,50 240,80 280,45" fill="none" stroke="#4a7aaa" stroke-width="1" opacity="0.5"/>
  <!-- Secondary constellation -->
  <circle cx="100" cy="180" r="2" fill="#f0f0ff" opacity="0.8"/>
  <circle cx="150" cy="160" r="1.5" fill="#f0f0ff" opacity="0.7"/>
  <circle cx="180" cy="200" r="2" fill="#f0f0ff" opacity="0.85"/>
  <circle cx="220" cy="170" r="1.5" fill="#f0f0ff" opacity="0.75"/>
  <polyline points="100,180 150,160 180,200 220,170" fill="none" stroke="#4a7aaa" stroke-width="1" opacity="0.4"/>
  <!-- Constellation labels -->
  <text x="120" y="32" fill="#4a7aaa" font-size="8" opacity="0.6" font-family="sans-serif">URSA MAJOR</text>
  <text x="150" y="150" fill="#4a7aaa" font-size="8" opacity="0.5" font-family="sans-serif">CASSIOPEIA</text>
</svg>
```

### 4) Celestial Sphere Reference Grid

Declination rings and RA meridians overlaid on dome.

```html
<svg viewBox="0 0 400 400" class="w-full h-full opacity-15">
  <!-- Declination circles (concentric rings) -->
  <circle cx="200" cy="200" r="180" fill="none" stroke="#2a3a4a" stroke-width="0.5"/>
  <circle cx="200" cy="200" r="140" fill="none" stroke="#2a3a4a" stroke-width="0.5"/>
  <circle cx="200" cy="200" r="100" fill="none" stroke="#2a3a4a" stroke-width="0.5"/>
  <circle cx="200" cy="200" r="60" fill="none" stroke="#2a3a4a" stroke-width="0.5"/>
  <circle cx="200" cy="200" r="20" fill="none" stroke="#4a7aaa" stroke-width="0.5"/>
  <!-- Right Ascension meridians (radial lines) -->
  <line x1="200" y1="20" x2="200" y2="380" stroke="#2a3a4a" stroke-width="0.3"/>
  <line x1="20" y1="200" x2="380" y2="200" stroke="#2a3a4a" stroke-width="0.3"/>
  <line x1="73" y1="73" x2="327" y2="327" stroke="#2a3a4a" stroke-width="0.3"/>
  <line x1="327" y1="73" x2="73" y2="327" stroke="#2a3a4a" stroke-width="0.3"/>
  <!-- Labels -->
  <text x="200" y="18" fill="#f0f0ff" font-size="7" text-anchor="middle" opacity="0.4">+90</text>
  <text x="200" y="395" fill="#f0f0ff" font-size="7" text-anchor="middle" opacity="0.4">-90</text>
  <text x="15" y="203" fill="#f0f0ff" font-size="7" opacity="0.4">0h</text>
  <text x="375" y="203" fill="#f0f0ff" font-size="7" opacity="0.4">12h</text>
</svg>
```

### 5) Show Timeline Scrubber

Horizontal scrubber for educational space show progression.

- Track: `relative w-full h-1.5 bg-[#2a3a4a] rounded-full overflow-hidden`.
- Fill: `absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-[#4a7aaa] to-[#3a1a5a] rounded-full`.
- Thumb: `absolute top-1/2 -translate-y-1/2 left-[45%] -translate-x-1/2 w-3.5 h-3.5 bg-[#f0f0ff] rounded-full border-2 border-[#4a7aaa] shadow-[0_0_8px_rgba(74,122,170,0.4)] cursor-pointer`.
- Chapter markers: `absolute top-1/2 -translate-y-1/2 w-0.5 h-3 bg-[#2a3a4a]` at 20%, 40%, 60%, 80%.
- Chapter labels: `text-[#f0f0ff]/40 text-[10px] font-mono mt-2 text-center` below each marker.
- Time display: `font-mono text-[#4a7aaa] text-xs` showing current timestamp.

### 6) Planet Orbital Path Accent

Decorative orbital arc with planet dot.

```html
<div class="relative w-full h-20 bg-[#0a0a1a] rounded-lg overflow-hidden">
  <!-- Orbital arc path -->
  <svg class="absolute inset-0 w-full h-full" style="pointer-events: none;">
    <ellipse cx="50%" cy="120%" rx="60%" ry="45%" fill="none" stroke="#2a3a4a" stroke-width="0.5" stroke-dasharray="4,4"/>
  </svg>
  <!-- Mars -->
  <div class="absolute top-[30%] left-[25%] w-2.5 h-2.5 bg-[#c45a3a] rounded-full shadow-[0_0_6px_rgba(196,90,58,0.5)]"></div>
  <!-- Jupiter -->
  <div class="absolute top-[20%] left-[55%] w-3 h-3 bg-[#c49a3a] rounded-full shadow-[0_0_8px_rgba(196,154,58,0.4)]"></div>
  <!-- Saturn -->
  <div class="absolute top-[35%] left-[78%] w-2.5 h-2.5 bg-[#c4a040] rounded-full shadow-[0_0_6px_rgba(196,160,64,0.4)]">
    <!-- Saturn ring -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-1 border border-[#c4a040]/40 rounded-full"></div>
  </div>
  <!-- Planet labels -->
  <div class="absolute top-[55%] left-[25%] -translate-x-1/2 text-[#c45a3a] text-[9px] font-mono opacity-60">Mars</div>
  <div class="absolute top-[55%] left-[55%] -translate-x-1/2 text-[#c49a3a] text-[9px] font-mono opacity-60">Jupiter</div>
  <div class="absolute top-[65%] left-[78%] -translate-x-1/2 text-[#c4a040] text-[9px] font-mono opacity-60">Saturn</div>
</div>
```

### 7) Nebula Background Panel

Deep space atmospheric glow for content sections.

- Container: `relative bg-[#0a0a1a] rounded-lg overflow-hidden p-6`.
- Nebula glow primary: `absolute top-0 right-0 w-48 h-48 bg-[#3a1a5a]/15 rounded-full blur-3xl`.
- Nebula glow secondary: `absolute bottom-0 left-10 w-32 h-32 bg-[#4a7aaa]/10 rounded-full blur-2xl`.
- Content sits above nebula glows with z-index.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Dome Black | `#0a0a1a` | Primary background, dome projection surface, deepest darkness |
| Star White | `#f0f0ff` | Stars, primary text on dark, constellation dots |
| Constellation Blue | `#4a7aaa` | Constellation lines, interactive accents, educational highlights |
| Mars Red | `#c45a3a` | Mars orbital accent, warning indicators, red planet highlights |
| Jupiter Amber | `#c49a3a` | Jupiter orbital accent, warm secondary highlight |
| Saturn Gold | `#c4a040` | Saturn orbital accent, premium accent, brass-like warmth |
| Nebula Purple | `#3a1a5a` | Atmospheric glow, deep space backgrounds, show gradients |
| Grid Gray | `#2a3a4a` | Celestial reference grid lines, structural dividers, secondary borders |
| Dome Edge | `#1a1a1a` | Dome frame borders, shadow depth, secondary dark |
| Dome Interior | `#0d0d20` | Slightly lighter dark for card backgrounds, layered depth |

Rules: Dome black dominates all backgrounds. Star white and constellation blue provide all primary and interactive highlights. Planet colors (Mars red, Jupiter amber, Saturn gold) appear only as orbital accents and thematic highlights -- never as background fills. Nebula purple adds atmospheric depth behind content. The palette should feel like lying on your back inside a dark dome, watching the universe slowly rotate above you -- immersive, educational, awe-inspiring.

## Typography Recommendations

- **Display:** Libre Baskerville, Playfair Display (serif elegance -- like engraved planetarium show title cards).
- **Body:** Inter, IBM Plex Sans (clean readable sans-serif for educational descriptions and show notes).
- **Star/Planet Data:** `font-mono text-[#4a7aaa] text-xs tracking-[0.12em]` (coordinates, magnitudes, star catalog IDs).
- **Constellation Labels:** `font-mono text-[#4a7aaa] text-[10px] tracking-[0.2em] uppercase opacity-60` (placed near constellation lines).
- **Show Titles:** `text-[#f0f0ff] text-xl font-semibold tracking-wide` (educational show headings, bold against dome dark).
- **Labels:** `font-medium uppercase tracking-[0.25em] text-[10px] text-[#f0f0ff]/35` (section dividers, timeline chapter names).
- Typography should feel like show title cards projected onto a dome -- large, luminous, and awe-inspiring at display scale, precise and readable at data scale.

## Component Architecture Pattern

- **Dome Projection Hero:** Full-width circular-clipped dome with rotating star field, constellation overlay, and nebula glow -- the hero experience.
- **Star Field Content Panels:** Dark panels (`bg-[#0d0d20]`) with subtle star-dot backgrounds and constellation blue accent borders.
- **Show Timeline Section:** Horizontal scrubber with chapter markers separating educational show segments below the dome.
- **Planet Orbital Accent Row:** Decorative orbital arcs with planet dots used as section dividers or thematic accents.
- **Constellation Info Cards:** Cards pairing a constellation SVG with name, star count, and seasonal visibility data.
- **Dome Edge Footer:** Dark footer (`bg-[#1a1a1a]`) with grid gray top border, separating from content above.

## Interaction Rules

- Star field rotates at extremely slow speed (300s+ per revolution) -- the motion should be barely perceptible, creating ambient immersion rather than visual distraction.
- Individual stars twinkle at different random intervals (3-7s range) with staggered delays for organic non-repeating patterns.
- Constellation line SVGs animate in sequentially as they enter viewport, drawing the constellation shape point by point over 2-3 seconds.
- Planet orbital dots drift slowly along their arc paths (8-10s cycle) with easing that suggests elliptical orbits.
- Show timeline scrubber thumb has constellation blue glow intensification on hover and drag.
- Dome projection frame subtly scales (1.02x) on hover with increased shadow depth, suggesting the dome coming alive.
- Star dots have `shadow-[0_0_4px_#f0f0ff]` that pulses with their twinkle animation for depth.
- All motion pauses when user hovers over the dome frame, suggesting audience attention stopping the show.
- Brass buttons have a subtle press-down effect: `active:translate-y-0.5 active:shadow-none`.

## Reusable Tailwind Tokens

- Dome black: `bg-[#0a0a1a]`.
- Star dot: `w-1 h-1 bg-[#f0f0ff] rounded-full` with `shadow-[0_0_4px_#f0f0ff]`.
- Star dot bright: `w-1.5 h-1.5 bg-[#f0f0ff] rounded-full shadow-[0_0_6px_#f0f0ff]`.
- Constellation line: `stroke="#4a7aaa" stroke-width="1" opacity="0.4"`.
- Constellation label: `font-mono text-[#4a7aaa] text-[10px] tracking-[0.2em] uppercase opacity-60`.
- Dome edge ring: `rounded-full border-2 border-[#2a3a4a]/40`.
- Dome interior: `bg-[#0d0d20]`.
- Nebula glow: `bg-[#3a1a5a]/15 rounded-full blur-3xl`.
- Constellation blue accent: `text-[#4a7aaa]` or `border-[#4a7aaa]/30`.
- Planet Mars: `bg-[#c45a3a] shadow-[0_0_6px_rgba(196,90,58,0.5)]`.
- Planet Jupiter: `bg-[#c49a3a] shadow-[0_0_8px_rgba(196,154,58,0.4)]`.
- Planet Saturn: `bg-[#c4a040] shadow-[0_0_6px_rgba(196,160,64,0.4)]`.
- Grid reference: `stroke="#2a3a4a" stroke-width="0.5" opacity="0.15"`.
- Data mono: `font-mono text-[#4a7aaa] text-xs tracking-[0.12em]`.
- Dome gradient center: `bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,26,0.3)_60%,rgba(10,10,26,0.85)_100%)]`.

## Quality Checklist

- Dome projection frame (circular, radial star field) is visually prominent in at least one element per view.
- Rotating star field animation present on at least one element per view, rotating at ambient speed.
- Constellation lines (SVG polylines with labels) appear in at least one element per page.
- Celestial sphere reference circles (declination rings or RA meridians) present in at least one element per page.
- Dome black dominates all backgrounds.
- Constellation blue used consistently for interactive elements, educational highlights, and constellation lines.
- Planet colors (Mars red, Jupiter amber, Saturn gold) appear only as orbital accents and thematic highlights.
- Star twinkle animations add organic life without overwhelming content.
- Show timeline scrubber uses constellation blue gradient and chapter markers.
- Typography feels like projected title cards -- serif display, clean sans body, monospace data.
- The aesthetic reads as a planetarium dome theater -- immersive, educational, awe-inspiring, vast.
- Large negative areas and slow motion reinforce the sense of cosmic scale and contemplative wonder.

## Anti-Patterns

- Bright white backgrounds (planetarium interiors are dark for projection visibility).
- Fast or flashy animations (the dome rotates slowly -- motion should be ambient and meditative).
- Missing dome projection frame (the dome IS the design identity).
- Missing rotating star field (the planetarium's signature ambient motion).
- Missing constellation lines or labels (the educational connect-the-dot motif is essential).
- Busy dense layouts with no breathing room (the dome demands vast open space).
- Saturated primary colors outside the planet accent set (the palette is restrained and nocturnal).
- Missing celestial reference grid geometry (the educational astronomical context).
- Cartoonish or playful star shapes (these are precise projected stars).
- Planet colors used as background fills (they are orbital accents only).
- Constellation blue lines too opaque or thick (they should whisper, not shout).
- Nebula purple glow behind text (reduces legibility -- use only in decorative backgrounds).
- Missing Saturn ring on Saturn dot (the ring silhouette is essential planet identification).
- Sans-serif everywhere without serif display faces (show title cards demand serif typography).

## Accessibility Considerations

- Star rotation and twinkle animations must respect `prefers-reduced-motion: reduce` -- replace with static star positions at varied opacities and disable all rotation.
- Star white `#f0f0ff` on dome black `#0a0a1a` exceeds 17:1 contrast ratio -- use this for all primary text.
- Constellation blue `#4a7aaa` on dome black `#0a0a1a` exceeds 5:1 contrast ratio -- safe for secondary text, labels, and interactive elements.
- Mars red `#c45a3a` on dome black `#0a0a1a` exceeds 4.5:1 contrast ratio -- safe for text labels and planet data.
- Jupiter amber `#c49a3a` on dome black `#0a0a1a` exceeds 5:1 contrast ratio -- safe for text.
- Grid gray `#2a3a4a` on dome black `#0a0a1a` falls below 2:1 -- use only for decorative reference geometry, never for text.
- Constellation line SVGs must use `pointer-events: none` to avoid blocking interactions with elements beneath.
- Celestial reference grid must remain at low opacity (below 0.25) to avoid creating visual noise that competes with content.
- Dome edge ring borders must adapt at narrow viewport widths -- degrade from circular clip to rounded rectangle.
- Nebula purple glow effects must not reduce text legibility -- apply only to decorative backgrounds, never behind readable text.
- Show timeline scrubber must have visible focus indicators that exceed the constellation blue glow -- use `ring-2 ring-[#f0f0ff]` on focus-visible.
- Planet labels must maintain readable contrast -- use planet color on dark, never planet color on nebula glow.
