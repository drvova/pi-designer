---
name: holographic-display-ui
description: Build holographic display UI components (hologram projection, scan lines, flickering transparency, color channel separation, 3D wireframe, light field, prism refraction) with translucent holographic effects, scan line overlays, and the ethereal quality of holographic displays. Trigger this skill when the user asks for holographic UI, hologram design, holographic display, scan line overlay, 3D wireframe interface, RGB channel separation effect, light field visualization, prism refraction design, translucent display, or sci-fi projection aesthetic.
---

# Holographic Display UI

Use this skill to design and implement ethereal, translucent interfaces that capture the otherworldly quality of holographic displays: shimmering projection surfaces, horizontal scan line overlays, flickering transparency animations, RGB channel separation that splits text and shapes into offset color layers, 3D wireframe meshes, light field dot patterns, and prism refraction rainbows. The aesthetic is deep-void dark with luminous hologram cyan, magenta, and yellow -- a world where information appears projected from light itself, hovering between presence and absence.

## Non-Negotiable Foundations

- Holographic UI is set in PROJECTOR VOID: the background is always near-black (#0a0a1a) to simulate the dark environment that makes holographic projections visible.
- Three layers of holographic presence: base projection (the content), scan line overlay (the delivery medium), and channel separation (the optical artifact that proves it is a projection).
- Light IS the interface: elements are made of colored light, not solid surfaces. Every element should feel like it could flicker, shift, or dissolve.
- Translucency is mandatory: all panels, cards, and containers use low-opacity fills with backdrop-blur. Nothing is fully opaque except thin wireframe lines.
- Scan lines are the texture: thin horizontal lines overlay everything to sell the holographic projection aesthetic. They are non-negotiable.
- Colors are holographic primaries: cyan (#40e0ff) is the dominant projection color, magenta (#ff40c0) provides contrast and depth, yellow (#ffe040) appears in refraction effects. RGB channel separation uses pure red, green, and blue offsets.
- Data is displayed as projected light: floating labels, wireframe meshes, luminous readouts, and prism-split color edges.

## Core Material Recipes

### 1) Hologram Projection Panel

The foundational holographic surface: a translucent panel that appears to be projected from below, with a subtle upward glow and scan line overlay.

```html
<div class="relative bg-[#40e0ff]/[0.03] backdrop-blur-sm
            border border-[#40e0ff]/15 rounded-lg
            shadow-[0_0_30px_rgba(64,224,255,0.06),inset_0_1px_0_rgba(64,224,255,0.1)] p-6">
  <!-- Scan line overlay -->
  <div class="absolute inset-0 pointer-events-none rounded-lg overflow-hidden"
       aria-hidden="true">
    <div class="absolute inset-0"
         style="background: repeating-linear-gradient(
           0deg,
           transparent,
           transparent 2px,
           rgba(64,224,255,0.03) 2px,
           rgba(64,224,255,0.03) 4px
         );"></div>
  </div>
  <!-- Content -->
  <div class="relative z-10">
    <!-- slot for content -->
  </div>
</div>
```

Tailwind: Container uses `bg-[#40e0ff]/[0.03] backdrop-blur-sm border border-[#40e0ff]/15 rounded-lg`. Scan lines use `repeating-linear-gradient` with 4px period (2px transparent, 2px cyan at 3% opacity). Inset shadow at top edge simulates the projection source: `inset_0_1px_0_rgba(64,224,255,0.1)`.

### 2) Scan Line Overlay

Full-screen horizontal scan lines that layer over any content to sell the holographic projection medium.

```html
<div class="absolute inset-0 pointer-events-none z-50" aria-hidden="true">
  <!-- Static scan lines -->
  <div class="absolute inset-0"
       style="background: repeating-linear-gradient(
         0deg,
         transparent,
         transparent 3px,
         rgba(64,224,255,0.02) 3px,
         rgba(64,224,255,0.02) 4px
       );"></div>
  <!-- Animated scan beam (single bright line that moves) -->
  <div class="absolute left-0 right-0 h-px bg-[#40e0ff]/10"
       style="animation: scanBeam 4s linear infinite;"></div>
</div>

<style>
  @keyframes scanBeam {
    0% { top: -2px; opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { top: 100%; opacity: 0; }
  }
</style>
```

Tailwind: Overlay uses `absolute inset-0 pointer-events-none z-50`. Static scan lines use `repeating-linear-gradient` with 4px period. Animated scan beam is a 1px-tall div that translates top-to-bottom over 4 seconds. The scan beam adds life to the static overlay without being distracting.

### 3) RGB Channel Separation

The signature holographic artifact: text or elements split into offset red, green, and blue layers that create the chromatic aberration effect.

```html
<div class="relative inline-block">
  <!-- Base text (white, serves as anchor) -->
  <span class="relative z-10 font-mono text-2xl text-white/80
               tracking-wider">HOLOGRAM</span>
  <!-- Red channel offset -->
  <span class="absolute inset-0 font-mono text-2xl text-red-500/30
               tracking-wider -translate-x-[2px] -translate-y-[1px]
               pointer-events-none mix-blend-screen"
        aria-hidden="true">HOLOGRAM</span>
  <!-- Green channel offset -->
  <span class="absolute inset-0 font-mono text-2xl text-green-400/25
               tracking-wider translate-x-[1px] translate-y-[1px]
               pointer-events-none mix-blend-screen"
        aria-hidden="true">HOLOGRAM</span>
  <!-- Blue channel offset -->
  <span class="absolute inset-0 font-mono text-2xl text-blue-400/30
               tracking-wider translate-x-[1px] -translate-y-[1px]
               pointer-events-none mix-blend-screen"
        aria-hidden="true">HOLOGRAM</span>
</div>
```

Tailwind: Four stacked layers: base white text at z-10, then red at `text-red-500/30 -translate-x-[2px] -translate-y-[1px]`, green at `text-green-400/25 translate-x-[1px] translate-y-[1px]`, blue at `text-blue-400/30 translate-x-[1px] -translate-y-[1px]`. All offset layers use `mix-blend-screen` and `pointer-events-none`. Each offset is 1-2px in different directions to create the chromatic aberration. Red/green/blue channel copies use `aria-hidden="true"`.

### 4) Flickering Transparency Animation

Elements that subtly flicker in opacity to simulate holographic projection instability.

```html
<div class="relative animate-[hologramFlicker_8s_ease-in-out_infinite]">
  <style>
    @keyframes hologramFlicker {
      0%, 100% { opacity: 1; }
      92% { opacity: 1; }
      93% { opacity: 0.7; }
      94% { opacity: 1; }
      96% { opacity: 0.85; }
      97% { opacity: 1; }
    }
  </style>
  <!-- Content that flickers -->
</div>
```

Tailwind: Apply `animate-[hologramFlicker_8s_ease-in-out_infinite]` to any element. The keyframe is mostly stable (100% opacity) with brief dips at 92-97% of the cycle. This creates an occasional, subtle flicker rather than a constant pulse -- like a real holographic projection with minor signal fluctuation. The 8-second cycle keeps the flicker rare enough to not be annoying but frequent enough to be noticeable.

### 5) 3D Wireframe Mesh

A wireframe surface rendered in SVG or CSS that represents a holographic 3D projection of data or terrain.

```html
<div class="relative w-full h-48 bg-[#0a0a1a] rounded-lg overflow-hidden">
  <svg class="absolute inset-0 w-full h-full" viewBox="0 0 400 200"
       preserveAspectRatio="xMidYMid meet">
    <!-- Horizontal wireframe lines with perspective -->
    <g stroke="#40e0ff" stroke-width="0.5" fill="none" opacity="0.4">
      <path d="M50,40 L350,40"/>
      <path d="M30,60 L370,60"/>
      <path d="M15,80 L385,80"/>
      <path d="M5,100 L395,100"/>
      <path d="M15,120 L385,120"/>
      <path d="M30,140 L370,140"/>
      <path d="M50,160 L350,160"/>
    </g>
    <!-- Vertical wireframe lines converging to vanishing point -->
    <g stroke="#40e0ff" stroke-width="0.5" fill="none" opacity="0.3">
      <line x1="200" y1="20" x2="50" y2="160"/>
      <line x1="200" y1="20" x2="125" y2="160"/>
      <line x1="200" y1="20" x2="200" y2="160"/>
      <line x1="200" y1="20" x2="275" y2="160"/>
      <line x1="200" y1="20" x2="350" y2="160"/>
    </g>
    <!-- Perspective grid surface -->
    <g stroke="#40e0ff" stroke-width="0.3" fill="none" opacity="0.2">
      <line x1="50" y1="40" x2="200" y2="20"/>
      <line x1="350" y1="40" x2="200" y2="20"/>
      <line x1="30" y1="60" x2="200" y2="20"/>
      <line x1="370" y1="60" x2="200" y2="20"/>
    </g>
    <!-- Glow at vanishing point -->
    <circle cx="200" cy="20" r="3" fill="#40e0ff" opacity="0.6">
      <animate attributeName="opacity" values="0.4;0.8;0.4"
               dur="3s" repeatCount="indefinite"/>
    </circle>
  </svg>
</div>
```

Tailwind: Wireframe container uses `bg-[#0a0a1a] rounded-lg overflow-hidden`. All wireframe lines use `stroke="#40e0ff"` at low opacity (0.2-0.4) with `stroke-width="0.3-0.5"`. The vanishing point has a pulsing glow circle. Lines converge toward a central vanishing point above center, creating the classic holographic grid perspective.

### 6) Light Field Dots

A field of luminous dots that represents the holographic light field, with dots at varying sizes and opacities to suggest depth.

```html
<div class="absolute inset-0 pointer-events-none" aria-hidden="true">
  <!-- Far layer: small, dim dots -->
  <div class="absolute inset-0"
       style="background-image:
         radial-gradient(1px 1px at 10% 15%, rgba(64,224,255,0.3), transparent),
         radial-gradient(1px 1px at 25% 45%, rgba(64,224,255,0.2), transparent),
         radial-gradient(1px 1px at 40% 70%, rgba(64,224,255,0.25), transparent),
         radial-gradient(1px 1px at 55% 25%, rgba(64,224,255,0.15), transparent),
         radial-gradient(1px 1px at 70% 55%, rgba(64,224,255,0.3), transparent),
         radial-gradient(1px 1px at 85% 35%, rgba(64,224,255,0.2), transparent),
         radial-gradient(1px 1px at 15% 80%, rgba(64,224,255,0.25), transparent),
         radial-gradient(1px 1px at 60% 90%, rgba(64,224,255,0.15), transparent),
         radial-gradient(1px 1px at 90% 75%, rgba(64,224,255,0.2), transparent);
       background-size: 200px 200px;"></div>
  <!-- Near layer: larger, brighter dots -->
  <div class="absolute inset-0"
       style="background-image:
         radial-gradient(1.5px 1.5px at 20% 30%, rgba(255,64,192,0.25), transparent),
         radial-gradient(1.5px 1.5px at 50% 60%, rgba(64,224,255,0.35), transparent),
         radial-gradient(1.5px 1.5px at 80% 20%, rgba(255,224,64,0.2), transparent),
         radial-gradient(1.5px 1.5px at 35% 85%, rgba(64,224,255,0.3), transparent),
         radial-gradient(1.5px 1.5px at 65% 40%, rgba(255,64,192,0.2), transparent);
       background-size: 300px 300px;"></div>
</div>
```

Tailwind: Two layers of radial-gradient dots at different scales and opacities. Far layer uses 1px cyan dots at 15-30% opacity with 200px background-size. Near layer uses 1.5px dots in cyan, magenta, and yellow at 20-35% opacity with 300px background-size. The mix of colors in the near layer suggests the holographic spectrum.

### 7) Prism Refraction Edge

A decorative element that simulates light being refracted through a prism, producing a rainbow gradient edge on panels and dividers.

```html
<div class="relative">
  <!-- Panel content -->
  <div class="bg-[#40e0ff]/[0.03] backdrop-blur-sm border border-[#40e0ff]/10
              rounded-lg p-6">
    <!-- content -->
  </div>
  <!-- Prism refraction edge (bottom) -->
  <div class="absolute -bottom-px left-4 right-4 h-px"
       style="background: linear-gradient(
         90deg,
         transparent 0%,
         #ff4040 15%,
         #ff8040 25%,
         #ffe040 35%,
         #40ff40 50%,
         #40c0ff 65%,
         #4040ff 75%,
         #8040ff 85%,
         transparent 100%
       ); opacity: 0.5;"></div>
</div>
```

Tailwind: Prism refraction is a 1px-tall gradient line positioned at the bottom edge of a panel. The gradient uses the visible spectrum: red (#ff4040) -> orange (#ff8040) -> yellow (#ffe040) -> green (#40ff40) -> cyan (#40c0ff) -> blue (#4040ff) -> violet (#8040ff) with transparent ends. Opacity at 0.5 keeps it subtle. Applied with `absolute -bottom-px left-4 right-4 h-px`.

### 8) Holographic Button

A button that appears to be projected light, with channel separation on hover and a scan line texture.

```html
<button class="relative px-6 py-2.5 font-mono text-sm font-medium
               text-[#40e0ff] bg-[#40e0ff]/[0.06]
               border border-[#40e0ff]/25 rounded-md
               shadow-[0_0_15px_rgba(64,224,255,0.1)]
               hover:bg-[#40e0ff]/[0.12]
               hover:shadow-[0_0_25px_rgba(64,224,255,0.2)]
               hover:border-[#40e0ff]/40
               active:scale-[0.97]
               focus:outline-none focus:ring-1 focus:ring-[#40e0ff]/40
               transition-all duration-200">
  <!-- Scan line texture on button -->
  <span class="absolute inset-0 pointer-events-none rounded-md overflow-hidden"
        aria-hidden="true"
        style="background: repeating-linear-gradient(
          0deg, transparent, transparent 2px,
          rgba(64,224,255,0.04) 2px, rgba(64,224,255,0.04) 3px
        );"></span>
  <span class="relative z-10">ACTIVATE</span>
</button>
```

Tailwind: Button uses `bg-[#40e0ff]/[0.06] border-[#40e0ff]/25 text-[#40e0ff] shadow-[0_0_15px_rgba(64,224,255,0.1)]`. Scan line overlay inside uses `repeating-linear-gradient` at 3px period. Hover increases bg opacity to 12% and glow shadow. Active uses `scale-[0.97]`. Focus uses thin cyan ring.

### 9) Holographic Data Readout

A floating data label that appears projected in space, with channel separation and scan lines.

```html
<div class="inline-flex items-center gap-2 px-3 py-1.5
            bg-[#40e0ff]/[0.04] backdrop-blur-sm
            border border-[#40e0ff]/15 rounded
            font-mono text-xs text-[#40e0ff]/80">
  <span class="w-1.5 h-1.5 rounded-full bg-[#40e0ff]
               shadow-[0_0_6px_rgba(64,224,255,0.5)]
               animate-pulse"></span>
  <span>QUBIT_CORE_TEMP: 15.2 mK</span>
</div>
```

Tailwind: Readout uses `bg-[#40e0ff]/[0.04] backdrop-blur-sm border-[#40e0ff]/15 rounded font-mono text-xs text-[#40e0ff]/80`. Status indicator is a small pulsing cyan dot. The low-opacity background and monospace text create the projected-data aesthetic.

### 10) Holographic Divider

A horizontal divider that looks like a projected light line with prismatic color.

```html
<div class="relative h-px w-full my-6">
  <div class="absolute inset-0"
       style="background: linear-gradient(
         90deg,
         transparent 0%,
         rgba(64,224,255,0.4) 20%,
         rgba(255,64,192,0.3) 50%,
         rgba(64,224,255,0.4) 80%,
         transparent 100%
       );"></div>
</div>
```

Tailwind: Divider is a 1px-tall gradient line using `linear-gradient` from transparent -> cyan -> magenta -> cyan -> transparent. The bidirectional color shift (cyan -> magenta -> cyan) creates the holographic spectrum feel.

## Color Palette System

### Core Holographic Palette

| Color | Hex | Role |
|---|---|---|
| Projector Void | `#0a0a1a` | Primary background |
| Void Deep | `#06060f` | Deep background layer |
| Hologram Cyan | `#40e0ff` | Primary projection color, scan lines, text |
| Hologram Magenta | `#ff40c0` | Secondary projection, depth, channel offset |
| Hologram Yellow | `#ffe040` | Tertiary, refraction highlights, warnings |
| Scan Line Dark | `rgba(0,0,0,0.3)` | Scan line gaps (dark bars between lines) |
| Channel Red | `#ff4040` | RGB separation -- red channel offset |
| Channel Green | `#40ff40` | RGB separation -- green channel offset |
| Channel Blue | `#4040ff` | RGB separation -- blue channel offset |
| Wireframe Green | `#40ff40` | 3D wireframe meshes, grid lines |
| Prism Violet | `#8040ff` | Prism refraction spectrum endpoint |
| Hologram White | `#e0f0ff` | Primary text (blue-tinted white) |
| Hologram Dim | `#40e0ff/30` | Secondary text, labels, readouts |

### Channel Separation Values

| Channel | Color | Opacity | Offset Direction |
|---|---|---|---|
| Red | `#ff4040` | 25-35% | Left + up (1-2px) |
| Green | `#40ff40` | 20-30% | Right + down (1px) |
| Blue | `#4040ff` | 25-35% | Right + up (1px) |

Rules: The holographic void is even darker than quantum -- near-black with no warmth. Hologram cyan is the dominant color; it appears on scan lines, wireframes, text, and borders. Magenta provides depth and the secondary projection hue. Yellow appears only in refraction effects and rare highlights. The RGB channel separation colors (pure red, green, blue) are used exclusively for the chromatic aberration effect and never as standalone UI colors. Wireframe green (#40ff40) is distinct from channel green and is used only for 3D mesh rendering. All text is blue-tinted white (#e0f0ff) rather than pure white.

## Typography Recommendations

- **Display:** Share Tech Mono or Orbitron (holographic projection text, headers).
- **Body:** Inter or Exo 2 (clean, futuristic, readable on dark).
- **Data/Readouts:** JetBrains Mono or Fira Code (technical readouts, sensor data, coordinates).
- **Labels:** `font-mono text-[10px] uppercase tracking-[0.2em] text-[#40e0ff]/50` (projection labels, field markers).
- **Channel-separated text:** Use the RGB offset technique from Recipe 3 for titles and important labels. The base text should be `text-[#e0f0ff]/80` with red, green, and blue offset copies.

## Component Architecture Pattern

Holographic interfaces follow the projection-layer-stack pattern:

1. **Void Layer** (bottom): near-black background, sometimes with light field dots.
2. **Projection Layer** (middle): holographic panels, wireframe meshes, data readouts -- all translucent.
3. **Scan Line Layer** (overlay): thin horizontal lines covering the entire viewport at low opacity.
4. **Channel Layer** (top, selective): RGB separation applied to key titles and labels only.

This layering creates the illusion that content is being projected into the void and viewed through a holographic display medium. The scan line layer is the most important aesthetic element -- it must always be present.

## Interaction Rules

- Default: translucent, projected, ethereal. Elements hover in the void with low opacity and scan lines.
- Hover: projection intensifies -- opacity increases, glow brightens, channel separation becomes more visible.
  - `hover:bg-[#40e0ff]/[0.1] hover:shadow-[0_0_20px_rgba(64,224,255,0.15)] hover:border-[#40e0ff]/30 transition-all duration-200`.
- Active: `active:scale-[0.97]` with a brief flicker effect (opacity dip to 70% then back).
- Focus: `focus:outline-none focus:ring-1 focus:ring-[#40e0ff]/40 focus:ring-offset-1 focus:ring-offset-[#0a0a1a]`.
- Transitions: `transition-all duration-200 ease-out` (fast, responsive, light-speed feel).
- Channel separation on hover: key titles gain slightly more visible RGB offset on hover, reinforcing the holographic projection aesthetic.
- Scan beam: optional continuous scan beam (single bright line) traversing the viewport vertically at 4-second intervals.
- Flicker: important state changes (activation, error, measurement) trigger a brief 200ms opacity flicker.

## Reusable Tailwind Tokens

- Hologram void: `bg-[#0a0a1a]`.
- Hologram panel: `bg-[#40e0ff]/[0.03] backdrop-blur-sm border border-[#40e0ff]/15 rounded-lg shadow-[0_0_30px_rgba(64,224,255,0.06),inset_0_1px_0_rgba(64,224,255,0.1)]`.
- Hologram button: `bg-[#40e0ff]/[0.06] text-[#40e0ff] border border-[#40e0ff]/25 shadow-[0_0_15px_rgba(64,224,255,0.1)] hover:bg-[#40e0ff]/[0.12]`.
- Hologram text: `text-[#e0f0ff]/80 font-mono`.
- Hologram label: `font-mono text-[10px] uppercase tracking-[0.2em] text-[#40e0ff]/50`.
- Scan line overlay: `repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(64,224,255,0.02) 3px,rgba(64,224,255,0.02) 4px)`.
- Scan beam: `absolute left-0 right-0 h-px bg-[#40e0ff]/10` with `animation: scanBeam 4s linear infinite`.
- Channel separation (red): `text-red-500/30 -translate-x-[2px] -translate-y-[1px] mix-blend-screen`.
- Channel separation (green): `text-green-400/25 translate-x-[1px] translate-y-[1px] mix-blend-screen`.
- Channel separation (blue): `text-blue-400/30 translate-x-[1px] -translate-y-[1px] mix-blend-screen`.
- Wireframe line: SVG `stroke="#40e0ff"` `stroke-width="0.5"` `opacity="0.3"`.
- Light field dot (far): `radial-gradient(1px 1px at X% Y%, rgba(64,224,255,0.2), transparent)`.
- Light field dot (near): `radial-gradient(1.5px 1.5px at X% Y%, rgba(64,224,255,0.35), transparent)`.
- Prism edge: `linear-gradient(90deg, transparent 0%, #ff4040 15%, #ffe040 35%, #40ff40 50%, #40c0ff 65%, #8040ff 85%, transparent 100%)`.
- Hologram divider: `linear-gradient(90deg, transparent 0%, rgba(64,224,255,0.4) 20%, rgba(255,64,192,0.3) 50%, rgba(64,224,255,0.4) 80%, transparent 100%)`.
- Status indicator: `w-1.5 h-1.5 rounded-full bg-[#40e0ff] shadow-[0_0_6px_rgba(64,224,255,0.5)] animate-pulse`.
- Hologram flicker: `animate-[hologramFlicker_8s_ease-in-out_infinite]` (keyframe: 92-97% dips to 0.7-0.85 opacity).

## Quality Checklist

- Background is projector void dark (#0a0a1a) with no warm tones.
- Scan line overlay is present on all holographic surfaces (repeating-linear-gradient at 4px period).
- All panels and containers are translucent (opacity < 5% fill, backdrop-blur, transparent borders).
- At least one element uses RGB channel separation (offset red/green/blue text copies).
- 3D wireframe mesh or perspective grid is present somewhere in the interface.
- Light field dots provide depth texture in the background.
- Prism refraction rainbow appears on at least one edge or divider.
- Hologram flicker animation is applied to key elements.
- Glow effects use cyan-based shadows (`rgba(64,224,255,...)`) -- never gray or white.
- Typography uses monospace for all technical readouts and data labels.
- Transitions are fast (200ms) to match the light-speed holographic feel.
- The aesthetic evokes translucent projected light, not solid rendered surfaces.

## Anti-Patterns

- Light or white backgrounds (holographic UI requires dark void for projections to be visible).
- Opaque panels or solid fills (everything must be translucent with backdrop-blur).
- Missing scan lines (the horizontal line overlay is the most critical aesthetic element).
- Missing channel separation (RGB offset is the signature holographic artifact).
- Gray or white shadows (use cyan-tinted shadows for holographic glow).
- Heavy, solid borders (use thin, low-opacity borders that suggest light, not metal).
- Bouncy or playful animations (holographic transitions are fast and precise).
- Warm earth-tone colors (holographic palette is cyan/magenta/yellow -- the additive primaries).
- Missing wireframe or grid elements (3D wireframe is a core holographic visual).
- Fully opaque text without any projection effect (at minimum, use channel separation on titles).
- Constant, visible flicker (flicker should be rare and brief, not distracting).
- Missing depth cues (light field dots, perspective grids, and varying opacity layers create depth).

## Accessibility Considerations

- Hologram void backgrounds with blue-tinted white text (#e0f0ff) provide strong contrast (WCAG AA minimum, AAA for larger text).
- Scan line overlay at 2-3% opacity does not impact text readability.
- Channel-separated text must have a single accessible base layer at z-index above the offset copies.
- Focus states use cyan ring on void: `focus:ring-1 focus:ring-[#40e0ff]/40`.
- All decorative SVGs (wireframe, light field, scan lines) must be `aria-hidden="true"`.
- Flickering animations must respect `prefers-reduced-motion` -- disable flicker and scan beam for users who prefer reduced motion.
- RGB channel separation copies are decorative and must have `aria-hidden="true"` with only the base text layer accessible.
- Holographic data readouts need `aria-label` with the plain-text value.
- Wireframe visualizations need text alternatives describing the represented data or structure.
- Touch targets must be at least 44x44px despite the thin holographic border aesthetic.
- Prism refraction gradients are decorative and should not carry meaning.
- The dark background reduces eye strain, but the scan line overlay may cause issues for photosensitive users -- provide a toggle to disable it.
