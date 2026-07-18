---
name: roller-rink-ui
description: Build roller rink / roller disco UI components (70s-80s roller skating rink, disco ball reflections, neon track lighting, checkered floor patterns, quad skate silhouettes, funk/disco energy, mirror ball sparkle) with spinning disco ball animations, neon-laced floor patterns, and the rolling retro-funk energy of the roller disco. Trigger this skill when the user asks for roller rink design, roller disco UI, disco ball effect, neon floor track, checkered rink floor, quad skate aesthetic, 70s funk layout, 80s skating rink vibe, mirror ball sparkle, or retro disco energy.
---

# Roller Rink / Roller Disco UI

Use this skill to design and implement high-energy, retro-funk interfaces inspired by 70s-80s roller skating rinks: spinning disco ball reflections, neon-laced floor tracks, checkered rink surfaces, quad skate silhouettes, and the unmistakable groove of a Saturday night at the rink.

## Non-Negotiable Foundations

- Roller rink UI simulates a physical skating venue: dark space lit by disco lights, a checkered floor, neon track lines, and a wooden railing around the perimeter.
- The disco ball is the focal point: it hangs at the top and casts animated light spots across the entire surface.
- Neon is structural, not decorative: neon pink, orange, and gold lines define the floor track, borders, and interactive zones.
- The checkered floor is large-scale checkerboard (bigger squares than a diner), creating a receding perspective plane.
- The palette is funk-era: disco purple base, neon pink and orange accents, gold highlights, deep black background.
- Energy is constant and kinetic: elements strobe subtly, neon pulses, the disco ball never stops spinning.
- Quad skate silhouettes appear as decorative directional indicators and section markers.
- Shadows glow: in a neon-lit rink, shadows are colored glows, not dark drop shadows.
- The wooden rink railing frames the composition as a border element with warm brown texture.

## Core Material Recipes

### 1) Rink Floor Surface

Dark base surface with large checkered floor pattern and subtle perspective.

- Base background: `bg-[#0a0a14]` (deep rink black).
- Checker pattern using CSS grid or repeating gradient: alternating dark and slightly-lighter squares.
- Large squares (60px or larger, not the small diner checker).

```css
.rink-floor {
  background-color: #0a0a14;
  background-image:
    linear-gradient(45deg, #1a1a2e 25%, transparent 25%),
    linear-gradient(-45deg, #1a1a2e 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #1a1a2e 75%),
    linear-gradient(-45deg, transparent 75%, #1a1a2e 75%);
  background-size: 80px 80px;
  background-position: 0 0, 0 40px, 40px -40px, -40px 0px;
}
```

### 2) Spinning Disco Ball Reflection Overlay

An animated overlay of moving light spots cast by a spinning disco ball across the entire surface.

```css
@keyframes disco-sweep {
  0%, 100% {
    background-position: 0% 0%, 30% 70%, 60% 20%, 85% 50%;
    opacity: 0.6;
  }
  25% {
    background-position: 15% 40%, 50% 10%, 70% 60%, 20% 80%;
    opacity: 0.8;
  }
  50% {
    background-position: 40% 20%, 70% 50%, 20% 70%, 50% 10%;
    opacity: 0.5;
  }
  75% {
    background-position: 60% 60%, 20% 30%, 50% 50%, 80% 20%;
    opacity: 0.7;
  }
}

.disco-reflections {
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image:
    radial-gradient(circle at center, rgba(255,204,0,0.15) 0%, transparent 8%),
    radial-gradient(circle at center, rgba(255,0,170,0.12) 0%, transparent 6%),
    radial-gradient(circle at center, rgba(255,140,26,0.1) 0%, transparent 7%),
    radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, transparent 5%);
  background-size: 200px 200px, 180px 180px, 220px 220px, 160px 160px;
  background-repeat: no-repeat;
  animation: disco-sweep 8s ease-in-out infinite;
  mix-blend-mode: screen;
}
```

### 3) Neon Floor Track Border Lines

Glowing neon-bordered containers that simulate the painted track lines on the rink floor.

- Pink neon border: `border-2 border-[#ff00aa] shadow-[0_0_8px_rgba(255,0,170,0.6),inset_0_0_8px_rgba(255,0,170,0.3)]`.
- Orange neon border: `border-2 border-[#ff8c1a] shadow-[0_0_8px_rgba(255,140,26,0.6),inset_0_0_8px_rgba(255,140,26,0.3)]`.
- Gold neon border: `border-2 border-[#ffcc00] shadow-[0_0_8px_rgba(255,204,0,0.6),inset_0_0_8px_rgba(255,204,0,0.3)]`.
- Multi-color neon border (funk): combine all three using ring pseudo-elements or layered box-shadows.

```html
<div class="relative border-2 border-[#ff00aa] rounded-2xl
            shadow-[0_0_8px_rgba(255,0,170,0.6),inset_0_0_8px_rgba(255,0,170,0.3)]
            bg-[#0a0a14]/80 p-8">
  <!-- content -->
</div>
```

### 4) Quad Skate Silhouette SVG

A minimalist quad skate silhouette used as a directional indicator, section marker, or decorative element.

```html
<svg viewBox="0 0 64 80" class="w-8 h-10" aria-hidden="true">
  <!-- Boot -->
  <path d="M18 8 L46 8 L46 38 L42 42 L22 42 L18 38 Z" fill="currentColor"/>
  <!-- Toe stop -->
  <circle cx="32" cy="48" r="3" fill="currentColor"/>
  <!-- Wheels -->
  <rect x="20" y="50" width="6" height="14" rx="3" fill="currentColor"/>
  <rect x="38" y="50" width="6" height="14" rx="3" fill="currentColor"/>
  <!-- Laces -->
  <line x1="32" y1="10" x2="32" y2="38" stroke="#0a0a14" stroke-width="1.5" stroke-dasharray="2 2"/>
</svg>
```

Color the skate silhouette with neon colors: `text-[#ff00aa]`, `text-[#ff8c1a]`, `text-[#ffcc00]`.

### 5) Wooden Rink Railing Border

A warm textured border element simulating the wooden railing around the rink perimeter.

```css
.rink-railing {
  border: 8px solid;
  border-image: repeating-linear-gradient(
    90deg,
    #8a6a3a 0px,
    #7a5a2a 4px,
    #8a6a3a 8px,
    #9a7a4a 12px
  ) 1;
  background-color: #6a4a2a;
  box-shadow: inset 0 0 12px rgba(0,0,0,0.4), 0 4px 8px rgba(0,0,0,0.3);
}
```

Or as a simpler Tailwind approach: `border-8 border-[#8a6a3a] shadow-[inset_0_0_12px_rgba(0,0,0,0.4)]`.

### 6) Strobing Colored Light Effect

A subtle, periodic color wash that simulates rink lighting changing colors overhead.

```css
@keyframes rink-strobe {
  0%, 100% { background-color: rgba(106, 42, 138, 0.15); }
  33% { background-color: rgba(255, 0, 170, 0.12); }
  66% { background-color: rgba(255, 140, 26, 0.12); }
}

.rink-light-wash {
  position: absolute;
  inset: 0;
  animation: rink-strobe 6s ease-in-out infinite;
  mix-blend-mode: screen;
  pointer-events: none;
}
```

Keep the strobe subtle and slow (6s+ cycle) to avoid seizure triggers. Never exceed 3 flashes per second.

### 7) Neon Glow Text

Text with neon tube glow effect for headlines and section labels in funk-era colors.

- Pink neon: `text-[#ff00aa] [text-shadow:0_0_8px_rgba(255,0,170,0.6)]`.
- Orange neon: `text-[#ff8c1a] [text-shadow:0_0_8px_rgba(255,140,26,0.6)]`.
- Gold neon: `text-[#ffcc00] [text-shadow:0_0_8px_rgba(255,204,0,0.6)]`.
- White neon (disco ball reflection): `text-white [text-shadow:0_0_8px_rgba(255,255,255,0.5),0_0_16px_rgba(255,204,0,0.3)]`.
- Display font: Monoton, Bungee, or Audiowide for the authentic rink-sign feel.

### 8) Disco Ball Centerpiece

A decorative disco ball element at the top of the layout that is the source of reflections.

```html
<div class="relative mx-auto w-24 h-24 rounded-full
            bg-[radial-gradient(circle_at_30%_30%,#fff,#ccc_30%,#888_60%,#444)]
            shadow-[0_0_20px_rgba(255,204,0,0.4)] animate-spin"
     style="animation-duration: 12s; animation-timing-function: linear;"
     aria-hidden="true">
  <!-- Facet grid overlay -->
  <div class="absolute inset-0 rounded-full opacity-40"
       style="background-image:
         repeating-linear-gradient(0deg, transparent 0, transparent 6px, rgba(0,0,0,0.3) 6px, rgba(0,0,0,0.3) 7px),
         repeating-linear-gradient(90deg, transparent 0, transparent 6px, rgba(0,0,0,0.3) 6px, rgba(0,0,0,0.3) 7px);">
  </div>
</div>
```

## Color Palette System

Roller rink UI uses a funk-era palette of deep disco backgrounds, electric neon accents, and warm wooden texture.

### Rink Base

| Color | Hex | Role |
|---|---|---|
| Disco Purple | `#6a2a8a` | Primary accent, section backgrounds |
| Rink Black | `#0a0a14` | Primary background, surface base |
| Floor Dark | `#1a1a2e` | Checker square (dark), card surface |
| Floor Light | `#2a2a3e` | Checker square (light) |
| Deep Indigo | `#1a0a2e` | Layered background depth |

### Neon Accents

| Color | Hex | Role |
|---|---|---|
| Neon Pink | `#ff00aa` | Primary neon, track borders, headings |
| Neon Orange | `#ff8c1a` | Secondary neon, highlights, CTA |
| Gold | `#ffcc00` | Disco ball glow, star accents, highlights |
| White Glow | `#ffffff` | Disco ball reflection, pure neon white |

### Texture / Railing

| Color | Hex | Role |
|---|---|---|
| Railing Brown | `#8a6a3a` | Wooden rink railing border |
| Railing Dark | `#6a4a2a` | Railing shadow, wood depth |
| Railing Light | `#9a7a4a` | Railing highlight, wood grain |

Rules: Backgrounds are always dark (rink black or deep purple). Neon colors are used for borders, text, and glows — never for large fills. Gold is the sparkle accent. The wooden railing frames the composition but never dominates.

## Typography Recommendations

Roller rink UI uses bold display fonts for signage and clean sans-serif for readability under neon.

- **Display/Headlines:** Monoton (neon tube sign feel), Bungee (bold blocky signage), or Audiowide (retro-futuristic digital).
- **Alternative display:** Faster One, Wallpoet, or Press Start 2P (arcade/8-bit crossover for playful rink energy).
- **Subheadings:** Anton, Oswald, or Bebas Neue (bold condensed uppercase, like rink signage).
- **Body:** Poppins, Montserrat, or Roboto (clean, readable on dark backgrounds).
- **Labels/Tags:** Archivo Black uppercase (event schedules, session times).
- **Numbers/Stats:** Tabular figures with Poppins or Montserrat (scoreboard feel).
- Neon glow should be applied via `text-shadow`, not font weight. Keep body text non-glowing for readability.

## Component Architecture Pattern

1. Dark rink-floor background (checkered pattern, deep black base).
2. Disco ball reflection overlay (fixed, animated, screen-blend, pointer-events-none).
3. Subtle rink light wash (strobing color overlay, slow cycle).
4. Wooden rink railing border frame (warm textured border around main content).
5. Neon-bordered content cards (glowing pink/orange/gold borders on dark cards).
6. Disco ball centerpiece (spinning radial gradient at top of layout).
7. Neon glow headlines and section labels (Monoton or Bungee with text-shadow glow).
8. Quad skate silhouette markers (directional indicators in neon colors).
9. Neon track-line dividers between sections (thin glowing lines, not plain borders).

Each section should feel like a zone of the rink — the skate floor, the snack bar, the DJ booth — each lit by neon and disco reflections.

## Interaction Rules

- Default state: disco ball spinning, reflections sweeping, neon borders glowing steadily.
- Hover state: neon border intensifies and card lifts slightly with a glow trail.
  - `hover:shadow-[0_0_16px_rgba(255,0,170,0.8),inset_0_0_12px_rgba(255,0,170,0.4)] hover:-translate-y-1 transition-all duration-300`.
- Active state: `active:scale-95` (pressing into the floor).
- Focus state: `focus:ring-4 focus:ring-[#ffcc00] focus:ring-offset-2 focus:ring-offset-[#0a0a14]`.
- Neon pulse on interactive elements: a subtle opacity oscillation on borders.
  ```css
  @keyframes neon-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
  .neon-pulse { animation: neon-pulse 3s ease-in-out infinite; }
  ```
- Strobing lights must respect `prefers-reduced-motion` (see Accessibility).
- Transitions: `transition-all duration-300 ease-out` (snappy, funky energy).

## Reusable Tailwind Tokens

- Rink background: `bg-[#0a0a14]`
- Checkered floor overlay: CSS `background-image` with 45deg gradients (see recipe above).
- Neon pink card: `border-2 border-[#ff00aa] shadow-[0_0_8px_rgba(255,0,170,0.6),inset_0_0_8px_rgba(255,0,170,0.3)] bg-[#0a0a14]/80`
- Neon orange card: `border-2 border-[#ff8c1a] shadow-[0_0_8px_rgba(255,140,26,0.6),inset_0_0_8px_rgba(255,140,26,0.3)] bg-[#0a0a14]/80`
- Neon gold card: `border-2 border-[#ffcc00] shadow-[0_0_8px_rgba(255,204,0,0.6),inset_0_0_8px_rgba(255,204,0,0.3)] bg-[#0a0a14]/80`
- Neon glow text pink: `text-[#ff00aa] [text-shadow:0_0_8px_rgba(255,0,170,0.6)]`
- Neon glow text gold: `text-[#ffcc00] [text-shadow:0_0_8px_rgba(255,204,0,0.6)]`
- Disco ball: radial-gradient circle `animate-spin` with facet grid overlay.
- Wooden railing: `border-8 border-[#8a6a3a] shadow-[inset_0_0_12px_rgba(0,0,0,0.4)]`
- Hover neon intensify: `hover:shadow-[0_0_16px_rgba(255,0,170,0.8),inset_0_0_12px_rgba(255,0,170,0.4)] hover:-translate-y-1 transition-all duration-300`
- Skate silhouette: `text-[#ff00aa]` colored SVG, `aria-hidden="true"`

## Quality Checklist (must pass)

- Background is deep rink black (`#0a0a14`) with a checkered floor pattern.
- A spinning disco ball casts animated reflections across the surface.
- Neon borders (pink, orange, gold) glow with colored box-shadows on cards and containers.
- Disco ball centerpiece is present and continuously spinning.
- Wooden rink railing frames the composition as a warm border element.
- Quad skate silhouettes appear as directional or decorative markers.
- Neon glow text uses `text-shadow`, applied only to headings/labels, never body text.
- Strobing light effects are subtle and slow (6s+ cycle, never exceeding 3 flashes/second).
- The funk-era palette is consistent (disco purple, neon pink, neon orange, gold, black).
- Section dividers use neon track lines, not plain borders.
- Cards have translucent dark backgrounds (`bg-[#0a0a14]/80`) so disco reflections show through.
- The overall energy is kinetic and groovy — nothing feels static or corporate.

## Anti-Patterns

- Light backgrounds (the rink is dark; light surfaces kill the disco atmosphere).
- Static layouts with no movement (roller disco energy requires constant subtle motion).
- Neon colors as large background fills (neon is for borders, text, and glows only).
- Neon glow on body text (destroys readability; glow is for headlines and labels only).
- Small diner-style checkerboard (rink checker squares are large, 60px+).
- Missing disco ball (the ball is the focal point — omitting it removes the soul).
- Fast strobing (triggers seizures; keep cycles at 6s+ and never exceed 3 flashes/second).
- Dark drop shadows on neon cards (use colored neon glows, not black shadows).
- Flat wooden railing (the railing needs texture and inset shadow to feel physical).
- Corporate or minimal aesthetic (roller rink is maximalist funk — embrace it).
- Plain border dividers (use glowing neon track lines instead).
- Opaque cards that block disco reflections (cards should be translucent).
- Skipping the `prefers-reduced-motion` fallback for strobe and spin animations.

## Accessibility Considerations

- All strobing, spinning, and sweeping animations must respect `prefers-reduced-motion`:
  ```css
  @media (prefers-reduced-motion: reduce) {
    .disco-reflections, .rink-light-wash { animation: none; opacity: 0.3; }
    .disco-ball { animation: none; }
    .neon-pulse { animation: none; }
  }
  ```
- Strobe effects must never exceed 3 flashes per second (WCAG 2.3.1 threshold).
- Neon text must meet contrast minimums against dark backgrounds: neon pink `#ff00aa` on `#0a0a14` passes WCAG AA for large text; add a white or gold halo for smaller text via layered text-shadow.
- Body text on dark backgrounds should be `#e0e0e0` or lighter (never dark gray on black).
- Focus states must be highly visible against dark neon backgrounds: `focus:ring-4 focus:ring-[#ffcc00] focus:ring-offset-2 focus:ring-offset-[#0a0a14]`.
- Disco ball reflections and light washes must be `pointer-events: none` so they never block interaction.
- Decorative SVGs (skate silhouettes, disco ball, checker pattern) must be `aria-hidden="true"`.
- Ensure content reading order remains logical despite layered overlays and reflections.
- Interactive elements within neon-bordered cards must have clear, accessible names and roles.
- Provide a static, non-animated alternative layout for users who disable all motion.
