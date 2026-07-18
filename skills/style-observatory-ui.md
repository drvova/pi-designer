---
name: observatory-ui
description: Build observatory UI components (telescope dome, star charts, celestial coordinate grids, eyepiece viewfinders, planetarium projections, weathered copper dome, brass telescope hardware, deep sky object catalogs) with dome silhouette headers, star chart backgrounds, and the patient wonder of astronomical observation. Trigger this skill when the user asks for observatory design, telescope dome UI, star chart interface, celestial coordinate grid, eyepiece viewfinder, planetarium projection, copper dome patina, brass telescope hardware, deep sky catalog, or astronomical observation aesthetic.
---

# Observatory / Astronomical UI

Use this skill to design and implement contemplative, wonder-filled interfaces inspired by astronomical observatories: weathered copper domes, brass telescope hardware, star chart dot-and-line patterns, celestial coordinate grids, eyepiece viewfinder circular frames, and deep sky object catalogs. The aesthetic is patient observation under vast night skies -- dark backgrounds alive with precise starlight, warm copper and brass accents against infinite cosmic depth.

## Non-Negotiable Foundations

- The telescope dome silhouette or copper dome patina must appear in every design -- it is the signature architectural identity.
- Star chart patterns (dot-and-line constellation motifs) must be present as background or decorative elements in every view.
- The palette must remain dark-dominant: deep night sky backgrounds with star white, brass, and copper-green accents. No bright whites, no warm sandy tones, no saturated primary colors.
- Celestial coordinate grid lines (right ascension / declination) must appear in at least one element per page to ground the astronomical theme.
- The atmosphere must feel vast, quiet, and contemplative -- this is not a bustling dashboard. Space and negative area are features, not waste.
- All star-pattern animations must respect `prefers-reduced-motion` and degrade to static dot patterns.

## Core Material Recipes

### 1) Telescope Dome Silhouette Header

Rounded dome with slit opening, weathered copper gradient.

```html
<div class="relative w-full h-48 bg-[#0a0a2a] overflow-hidden">
  <!-- Star background -->
  <div class="absolute inset-0">
    <div class="absolute top-[12%] left-[18%] w-1 h-1 bg-[#f0f0f0] rounded-full opacity-80"></div>
    <div class="absolute top-[8%] left-[45%] w-0.5 h-0.5 bg-[#f0f0f0] rounded-full opacity-60"></div>
    <div class="absolute top-[20%] left-[72%] w-1 h-1 bg-[#f0f0f0] rounded-full opacity-70"></div>
    <div class="absolute top-[15%] left-[88%] w-0.5 h-0.5 bg-[#f0f0f0] rounded-full opacity-50"></div>
    <div class="absolute top-[5%] left-[30%] w-0.5 h-0.5 bg-[#f0f0f0] rounded-full opacity-40"></div>
  </div>
  <!-- Dome silhouette -->
  <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-36">
    <!-- Dome body (rounded top) -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-56 h-28 bg-gradient-to-b from-[#4a6a5a] to-[#3a5a4a] rounded-t-[50%]">
      <!-- Dome slit opening -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-20 bg-[#0a0a2a] rounded-t-full"></div>
      <!-- Copper patina streaks -->
      <div class="absolute inset-0 bg-[repeating-linear-gradient(100deg,transparent_0px,transparent_20px,rgba(74,106,90,0.15)_20px,rgba(74,106,90,0.15)_21px)] rounded-t-[50%]"></div>
    </div>
    <!-- Dome base -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-60 h-8 bg-[#3a5a4a] rounded-sm"></div>
    <!-- Dome trim ring -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 w-60 h-1.5 bg-[#c4a043]/40"></div>
  </div>
</div>
```

### 2) Star Chart Background Pattern

Constellation dot-and-line pattern as subtle background.

```html
<style>
@keyframes star-twinkle { 0%,100% { opacity: 0.4; } 50% { opacity: 1; } }
</style>
<div class="absolute inset-0 bg-[#0a0a2a] overflow-hidden">
  <!-- Star dots -->
  <div class="absolute top-[10%] left-[15%] w-1 h-1 bg-[#f0f0f0] rounded-full" style="animation: star-twinkle 4s ease-in-out infinite;"></div>
  <div class="absolute top-[25%] left-[60%] w-1.5 h-1.5 bg-[#f0f0f0] rounded-full" style="animation: star-twinkle 3s ease-in-out infinite; animation-delay: -1s;"></div>
  <div class="absolute top-[40%] left-[35%] w-0.5 h-0.5 bg-[#f0f0f0] rounded-full" style="animation: star-twinkle 5s ease-in-out infinite; animation-delay: -2s;"></div>
  <div class="absolute top-[60%] left-[80%] w-1 h-1 bg-[#f0f0f0] rounded-full" style="animation: star-twinkle 6s ease-in-out infinite;"></div>
  <div class="absolute top-[75%] left-[20%] w-0.5 h-0.5 bg-[#f0f0f0] rounded-full" style="animation: star-twinkle 4.5s ease-in-out infinite; animation-delay: -0.5s;"></div>
  <div class="absolute top-[15%] left-[85%] w-1 h-1 bg-[#f0f0f0] rounded-full" style="animation: star-twinkle 3.5s ease-in-out infinite; animation-delay: -1.5s;"></div>
  <div class="absolute top-[55%] left-[45%] w-0.5 h-0.5 bg-[#f0f0f0] rounded-full" style="animation: star-twinkle 5.5s ease-in-out infinite; animation-delay: -3s;"></div>
  <!-- Constellation lines -->
  <svg class="absolute inset-0 w-full h-full" style="pointer-events: none;">
    <line x1="15%" y1="10%" x2="35%" y2="40%" stroke="#f0f0f0" stroke-width="0.5" opacity="0.15"/>
    <line x1="35%" y1="40%" x2="60%" y2="25%" stroke="#f0f0f0" stroke-width="0.5" opacity="0.15"/>
    <line x1="60%" y1="25%" x2="80%" y2="60%" stroke="#f0f0f0" stroke-width="0.5" opacity="0.15"/>
    <line x1="20%" y1="75%" x2="45%" y2="55%" stroke="#f0f0f0" stroke-width="0.5" opacity="0.12"/>
  </svg>
</div>
```

### 3) Celestial Coordinate Grid

Right Ascension / Declination grid overlay.

```html
<svg viewBox="0 0 400 300" class="w-full h-full opacity-20">
  <defs>
    <pattern id="ra-dec" width="40" height="30" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="30" stroke="#f0f0f0" stroke-width="0.3"/>
      <line x1="0" y1="0" x2="40" y2="0" stroke="#f0f0f0" stroke-width="0.3"/>
    </pattern>
  </defs>
  <rect width="400" height="300" fill="url(#ra-dec)"/>
  <!-- Major grid lines (RA every 4 hours, Dec every 30 degrees) -->
  <line x1="0" y1="150" x2="400" y2="150" stroke="#c4a043" stroke-width="0.5" opacity="0.3"/>
  <line x1="200" y1="0" x2="200" y2="300" stroke="#c4a043" stroke-width="0.5" opacity="0.3"/>
  <!-- Axis labels -->
  <text x="395" y="148" fill="#f0f0f0" font-size="6" opacity="0.4" text-anchor="end">RA 12h</text>
  <text x="5" y="8" fill="#f0f0f0" font-size="6" opacity="0.4">Dec +60</text>
  <text x="5" y="298" fill="#f0f0f0" font-size="6" opacity="0.4">Dec -60</text>
</svg>
```

### 4) Eyepiece Viewfinder Frame

Circular frame simulating telescope eyepiece view.

```html
<div class="relative w-64 h-64 mx-auto">
  <!-- Outer ring (brass) -->
  <div class="absolute inset-0 rounded-full border-4 border-[#c4a043] shadow-[0_0_20px_rgba(196,160,67,0.2)]"></div>
  <!-- Inner ring -->
  <div class="absolute inset-3 rounded-full border-2 border-[#c4a043]/40"></div>
  <!-- Viewport (circular clip) -->
  <div class="absolute inset-6 rounded-full bg-[#0a0a2a] overflow-hidden">
    <!-- Stars inside viewport -->
    <div class="absolute top-[20%] left-[30%] w-2 h-2 bg-[#f0f0f0] rounded-full shadow-[0_0_6px_#f0f0f0]"></div>
    <div class="absolute top-[50%] left-[60%] w-1 h-1 bg-[#f0f0f0] rounded-full shadow-[0_0_4px_#f0f0f0]"></div>
    <div class="absolute top-[35%] left-[45%] w-1.5 h-1.5 bg-[#f0f0f0] rounded-full shadow-[0_0_5px_#f0f0f0]"></div>
    <div class="absolute top-[65%] left-[25%] w-0.5 h-0.5 bg-[#f0f0f0] rounded-full"></div>
    <div class="absolute top-[40%] left-[75%] w-1 h-1 bg-[#f0f0f0] rounded-full shadow-[0_0_3px_#f0f0f0]"></div>
    <!-- Nebula glow -->
    <div class="absolute top-[30%] left-[35%] w-20 h-20 bg-[#4a2a6a]/20 rounded-full blur-xl"></div>
  </div>
  <!-- Crosshair reticle -->
  <svg class="absolute inset-0 w-full h-full" style="pointer-events: none;">
    <line x1="50%" y1="24" x2="50%" y2="calc(100% - 24)" stroke="#c4a043" stroke-width="0.5" opacity="0.3"/>
    <line x1="24" y1="50%" x2="calc(100% - 24)" y2="50%" stroke="#c4a043" stroke-width="0.5" opacity="0.3"/>
  </svg>
  <!-- Brass knobs -->
  <div class="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-[#c4a043] to-[#8a6a23] rounded-full shadow-sm"></div>
  <div class="absolute -left-2 top-1/3 w-3 h-3 bg-gradient-to-br from-[#c4a043] to-[#8a6a23] rounded-full shadow-sm"></div>
</div>
```

### 5) Deep Sky Object Card

Catalog entry card with star-field background and metadata.

- Card base: `bg-[#0d0d2a] border border-[#c4a043]/20 rounded-lg p-5 shadow-[0_0_10px_rgba(10,10,42,0.8)]`.
- Object designation: `font-mono text-[#c4a043] text-sm tracking-wider` (NGC/Messier catalog numbers).
- Object name: `text-[#f0f0f0] text-lg font-semibold`.
- Magnitude/type: `text-[#f0f0f0]/50 text-xs uppercase tracking-widest`.
- Mini star field overlay: `bg-[repeating-conic-gradient(#f0f0f0_0%_0.5%,transparent_0.5%_100%)] bg-[length:80px_80px] opacity-5`.

### 6) Planetarium Projection Panel

Full-sky projection with fisheye distortion effect.

- Container: `relative w-full aspect-square max-w-lg mx-auto rounded-full overflow-hidden bg-[#0a0a2a] border-2 border-[#c4a043]/30`.
- Fisheye gradient: `bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_70%,rgba(0,0,0,0.8)_100%)]`.
- Horizon ring: `absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#1a1a3a] to-transparent`.

### 7) Brass Telescope Hardware Button

Metallic button with brass gradient and engraved feel.

- `bg-gradient-to-b from-[#c4a043] to-[#8a6a23] text-[#0a0a2a] font-semibold px-6 py-2.5 rounded-md shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:from-[#d4b053] hover:to-[#9a7a33] transition-all`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Dome Copper-Green | `#4a6a5a` | Dome silhouettes, primary architectural element |
| Night Sky | `#0a0a2a` | Primary background, deepest darkness |
| Star White | `#f0f0f0` | Stars, primary text on dark, constellation lines |
| Brass | `#c4a043` | Hardware accents, grid highlights, interactive elements |
| Chart Paper | `#f0ead0` | Rare warm accent, paper-texture labels (use sparingly) |
| Nebula Purple | `#4a2a6a` | Atmospheric glow, deep sky object highlights |
| Copper Dark | `#3a5a4a` | Dome shadow, secondary structural surfaces |
| Midnight Blue | `#0d0d2a` | Card backgrounds, slightly lighter than night sky |
| Observatory Stone | `#4a4a5a` | Structural neutral, building walls, dividers |

Rules: Night sky dark dominates. Brass and star white provide all highlights. Copper-green and nebula purple add chromatic identity. Chart paper appears only in rare label contexts. The palette should feel like standing inside a dark dome looking out at the cosmos -- vast, quiet, precise.

## Typography Recommendations

- **Display:** Libre Baskerville, Playfair Display (serif elegance -- like engraved observatory plaques).
- **Body:** Inter, IBM Plex Sans (clean readable sans-serif for long catalog entries).
- **Catalog Data:** `font-mono text-[#c4a043] text-xs tracking-[0.15em]` (RA/Dec coordinates, NGC/Messier designations).
- **Labels:** `font-medium uppercase tracking-[0.25em] text-[10px] text-[#f0f0f0]/40` (section dividers, category headings).
- Typography should feel like it was engraved into brass plates and printed on antique star charts -- precise, measured, and timeless.

## Component Architecture Pattern

- **Dome Header:** Full-width dark banner with telescope dome silhouette centered, star-field background, and dome copper-green gradient against night sky `bg-[#0a0a2a]`.
- **Star Chart Panels:** Dark content panels (`bg-[#0d0d2a]`) with subtle star-dot backgrounds and brass-accented borders.
- **Eyepiece Modals:** Circular-framed overlay panels with brass ring borders for focused detail views (like looking through the telescope).
- **Coordinate Grid Dividers:** Celestial coordinate grid lines separating major sections instead of plain horizontal rules.
- **Catalog Table Layout:** Rows of deep sky object cards with uniform brass designation labels and consistent metadata alignment.
- **Observatory Footer:** Dome base stone texture (`bg-[#4a4a5a]`) with brass trim line separating it from content above.

## Interaction Rules

- Star twinkle animations run at different random intervals per star to create organic non-repeating patterns.
- Dome slit rotates subtly on hover (1-2 degree tilt) to suggest dome slewing to new targets.
- Eyepiece viewfinder frames expand slightly on hover with brass ring glow intensification.
- Catalog cards lift with `translate-y` and brass border opacity increases on hover, as if illuminated by the eyepiece light.
- Scroll-linked: star-field background parallax moves at half scroll speed, creating depth.
- Constellation line SVGs fade in sequentially as they enter viewport, drawing constellations as the user scrolls.
- Brass buttons have a subtle press-down effect: `active:translate-y-0.5 active:shadow-none`.

## Reusable Tailwind Tokens

- Night sky: `bg-[#0a0a2a]`.
- Star dot: `w-1 h-1 bg-[#f0f0f0] rounded-full` with `shadow-[0_0_4px_#f0f0f0]`.
- Constellation line: `stroke="#f0f0f0" stroke-width="0.5" opacity="0.15"`.
- Dome copper: `bg-gradient-to-b from-[#4a6a5a] to-[#3a5a4a]`.
- Brass accent: `text-[#c4a043]` or `border-[#c4a043]/30`.
- Brass hardware: `bg-gradient-to-b from-[#c4a043] to-[#8a6a23]`.
- Coordinate grid: `stroke="#c4a043" stroke-width="0.5" opacity="0.3"`.
- Catalog mono: `font-mono text-[#c4a043] text-xs tracking-[0.15em]`.
- Nebula glow: `bg-[#4a2a6a]/20 rounded-full blur-xl`.
- Eyepiece ring: `rounded-full border-4 border-[#c4a043]`.

## Quality Checklist

- Telescope dome silhouette or copper dome patina is visually prominent in at least one element per view.
- Star chart dot-and-line constellation pattern appears as background or decoration.
- Celestial coordinate grid lines present in at least one element per page.
- Night sky dark dominates all backgrounds.
- Brass accents used consistently for interactive elements and highlights.
- Star twinkle animations add life without overwhelming content.
- Eyepiece viewfinder circular frame used for at least one focused view or modal.
- Deep sky catalog entries use monospace brass-colored designation labels.
- Typography feels engraved and precise -- serif display, clean sans body.
- The aesthetic reads as an astronomical observatory -- vast, quiet, contemplative, precise.
- Large negative areas and spacing reinforce the sense of cosmic vastness.

## Anti-Patterns

- Bright white backgrounds (observatory interiors are dark for night vision).
- Warm sandy or earthy tones dominating (the palette is night sky, brass, copper-green).
- Missing dome silhouette or copper patina (the observatory IS the design identity).
- Missing star patterns or constellation motifs (the night sky is always present).
- Busy dense layouts with no breathing room (cosmic observation demands space and quiet).
- Saturated primary colors (the palette is restrained and nocturnal).
- Missing coordinate grid or astronomical reference geometry.
- Cartoonish or playful star shapes (these are precise scientific observations).
- Missing brass hardware accents (the telescope mechanism is essential to the theme).
- Fast flashy animations (observatory work is patient and deliberate -- motion should be slow and subtle).
- Sans-serif everywhere without any serif display faces (engraved plaques and star charts demand serif typography).

## Accessibility Considerations

- Star twinkle animations must respect `prefers-reduced-motion: reduce` -- replace with static dots at varied opacities.
- Star white `#f0f0f0` on night sky `#0a0a2a` exceeds 15:1 contrast ratio -- use this for all primary text.
- Brass `#c4a043` on night sky `#0a0a2a` exceeds 5:1 contrast ratio -- safe for secondary text and labels.
- Dome copper-green `#4a6a5a` on night sky `#0a0a2a` falls below 3:1 -- use only for large decorative elements, never for text.
- Coordinate grid lines must use opacity below `0.25` to avoid creating visual noise that competes with content.
- Constellation line SVGs must not overlap or obscure interactive elements -- use `pointer-events: none` and appropriate z-indexing.
- Eyepiece viewfinder frames must not clip content unexpectedly at narrow viewport widths -- ensure circular clip adapts or degrades to rounded-rectangle.
- Nebula purple glow effects must not reduce text legibility behind them -- apply only to decorative backgrounds, never behind text.
- Catalog data tables must maintain readable contrast across all rows -- use alternating subtle background shifts within the dark range (`#0a0a2a` to `#0d0d2a`).
- All interactive brass buttons must have visible focus indicators that exceed the brass gradient -- use `ring-2 ring-[#f0f0f0]` on focus-visible.
