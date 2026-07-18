---
name: melancholic-rain-ui
description: Build melancholic rain UI components (rain streaks, wet window, tears on glass, gray sky, empty bench, puddle reflection, distant figure) with somber rain effects, reflective wet surfaces, and the quiet sadness of a rainy day. Trigger this skill when the user asks for rain UI, melancholic effects, wet glass, rain streaks, tears on glass, gray sky design, puddle reflection, empty bench, somber atmosphere, rainy day interfaces, wet surface effects, or sorrowful atmospheric components.
---

# Melancholic Rain UI

Use this skill to design and implement atmospheric interfaces that capture the quiet sadness of a rainy day: vertical rain streaks falling at steady intervals, wet glass surfaces blurred by scattered droplets, tear-like single drops sliding down transparent surfaces, overcast gray sky gradients draining all warmth, empty bench silhouettes suggesting absence, puddle reflections mirroring content below in soft distortion, and distant figure silhouettes fading into the rain. The mood is somber, contemplative, and gently sorrowful -- the world washed in gray, heavy with unspoken feeling.

## Non-Negotiable Foundations

- Melancholic Rain UI is reflection-driven. The entire visual language lives in wet, reflective surfaces that mirror and distort content. Depth and mood are communicated through vertical rain streaks, surface blur, and mirrored reflections, NOT through shadows or bright accents.
- Rain streaks are the ambient substrate: thin vertical lines (1-2px wide, 40-120px tall) that fall from top to bottom at steady speed (1.5-3 second cycles). They are semi-transparent white or light gray (opacity 0.15-0.4), falling in slight diagonal (2-5 degrees) to suggest wind. Multiple streaks at different positions and timings create the impression of rainfall.
- Wet window glass is the primary surface treatment: content containers with a semi-transparent overlay of scattered droplet shapes, subtle blur (2-6px), and a cool gray tint. The surface looks like a window viewed from inside during rain -- content is visible but softened.
- Tear-like droplet is a single prominent drop element: an elongated teardrop shape (8-16px wide, 16-32px tall) with a radial gradient from translucent white to clear, sliding slowly down a surface. Maximum 2-3 per section. They suggest emotion, not just weather.
- Gray sky gradient is the base background: a vertical gradient from darker gray at top to slightly lighter gray at bottom, representing an overcast sky. The gradient is subtle (5-10% brightness difference) -- overcast skies are flat and featureless.
- Empty bench silhouette is a compositional element: a dark, low-opacity shape suggesting an empty park bench, conveying absence and solitude. It is decorative and structural, placed at section boundaries or within larger compositions.
- Puddle reflection is a vertical mirror mechanic: content above a horizontal line is duplicated below at reduced opacity (0.2-0.4) with a vertical flip and slight blur. The reflection suggests a wet ground surface.
- Distant figure silhouette is a tall, thin dark shape at low opacity (0.15-0.3) suggesting a person walking away in the rain. Maximum 1 per viewport. It is purely atmospheric and decorative.
- The color palette is desaturated and cool: rain grays, overcast grays, wet glass blue-grays, puddle blue-grays, bench darks, tear clear, figure shadow, and melancholy blue. No warm colors. No saturation. The world is drained.
- All rain streak, tear drop, and ambient animations MUST respect `prefers-reduced-motion`. Provide a static rain composition as the fallback state.

## Core Material Recipes

### 1) Rain Streak System (the ambient rainfall)

Multiple thin vertical lines falling at steady speed, slightly diagonal to suggest wind.

```css
.rain-streak {
  position: absolute;
  width: 1.5px;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(192, 208, 224, 0.4) 20%,
    rgba(192, 208, 224, 0.2) 80%,
    transparent 100%
  );
  border-radius: 0 0 2px 2px;
  animation: rain-fall linear infinite;
}
@keyframes rain-fall {
  0% {
    transform: translateY(-100px) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(calc(100vh + 100px)) translateX(15px);
    opacity: 0;
  }
}
```

Tailwind approach for rain streaks (varied timings and positions):
- Base streak: `absolute w-[1.5px] bg-gradient-to-b from-transparent via-[rgba(192,208,224,0.3)] to-transparent rounded-b-sm`
- Streak 1: add `left-[8%] h-[80px] animate-[rain-fall_2.2s_linear_infinite]`
- Streak 2: add `left-[18%] h-[100px] animate-[rain-fall_2.8s_linear_infinite] animation-delay-[-0.5s]`
- Streak 3: add `left-[32%] h-[60px] animate-[rain-fall_1.8s_linear_infinite] animation-delay-[-1.2s]`
- Streak 4: add `left-[45%] h-[90px] animate-[rain-fall_2.5s_linear_infinite] animation-delay-[-0.8s]`
- Streak 5: add `left-[58%] h-[70px] animate-[rain-fall_2.0s_linear_infinite] animation-delay-[-1.5s]`
- Streak 6: add `left-[72%] h-[110px] animate-[rain-fall_3.0s_linear_infinite] animation-delay-[-0.3s]`
- Streak 7: add `left-[85%] h-[85px] animate-[rain-fall_2.4s_linear_infinite] animation-delay-[-1.8s]`
- Streak 8: add `left-[93%] h-[65px] animate-[rain-fall_1.9s_linear_infinite] animation-delay-[-0.6s]`

Rain container: `absolute inset-0 overflow-hidden pointer-events-none` wrapping all streaks.

### 2) Wet Window Glass (primary surface treatment)

Content containers that look like windows viewed from inside during rain -- semi-transparent overlay, droplet scatter, subtle blur, cool gray tint.

```css
.wet-glass {
  position: relative;
  background: rgba(160, 176, 192, 0.15);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(192, 208, 224, 0.25);
  border-radius: 12px;
  overflow: hidden;
}
.wet-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle 3px at 15% 20%, rgba(192, 208, 224, 0.3) 0%, transparent 100%),
    radial-gradient(circle 2px at 35% 45%, rgba(192, 208, 224, 0.25) 0%, transparent 100%),
    radial-gradient(circle 4px at 55% 15%, rgba(192, 208, 224, 0.2) 0%, transparent 100%),
    radial-gradient(circle 2px at 75% 60%, rgba(192, 208, 224, 0.3) 0%, transparent 100%),
    radial-gradient(circle 3px at 25% 75%, rgba(192, 208, 224, 0.25) 0%, transparent 100%),
    radial-gradient(circle 2px at 65% 80%, rgba(192, 208, 224, 0.2) 0%, transparent 100%),
    radial-gradient(circle 3px at 85% 30%, rgba(192, 208, 224, 0.25) 0%, transparent 100%),
    radial-gradient(circle 2px at 45% 55%, rgba(192, 208, 224, 0.3) 0%, transparent 100%);
  pointer-events: none;
}
```

Tailwind wet glass card:
- `relative bg-[rgba(160,176,192,0.15)] backdrop-blur-[4px] border border-[rgba(192,208,224,0.25)] rounded-xl overflow-hidden`

Droplet scatter overlay (Tailwind inline):
- `before:absolute before:inset-0 before:bg-[radial-gradient(circle_3px_at_15%_20%,rgba(192,208,224,0.3)_0%,transparent_100%),radial-gradient(circle_2px_at_35%_45%,rgba(192,208,224,0.25)_0%,transparent_100%),radial-gradient(circle_4px_at_55%_15%,rgba(192,208,224,0.2)_0%,transparent_100%),radial-gradient(circle_2px_at_75%_60%,rgba(192,208,224,0.3)_0%,transparent_100%),radial-gradient(circle_3px_at_25%_75%,rgba(192,208,224,0.25)_0%,transparent_100%)] before:pointer-events-none`

Wet glass variant -- heavy rain:
- `relative bg-[rgba(160,176,192,0.2)] backdrop-blur-[6px] border border-[rgba(192,208,224,0.3)] rounded-xl overflow-hidden`

Wet glass variant -- light rain:
- `relative bg-[rgba(160,176,192,0.1)] backdrop-blur-[2px] border border-[rgba(192,208,224,0.15)] rounded-xl overflow-hidden`

### 3) Tear-Like Droplet (emotional accent)

A single prominent teardrop shape sliding slowly down a surface. Pure CSS approach.

```css
.tear-drop {
  position: absolute;
  width: 10px;
  height: 22px;
  background: linear-gradient(
    180deg,
    rgba(192, 208, 224, 0.5) 0%,
    rgba(192, 208, 224, 0.3) 50%,
    rgba(192, 208, 224, 0.1) 100%
  );
  border-radius: 50% 50% 50% 50% / 30% 30% 70% 70%;
  filter: blur(0.5px);
  animation: tear-slide 6s ease-in infinite;
}
@keyframes tear-slide {
  0% {
    transform: translateY(0);
    opacity: 0.7;
  }
  70% {
    opacity: 0.5;
  }
  100% {
    transform: translateY(120px);
    opacity: 0;
  }
}
```

Tailwind tear drop:
- `absolute w-[10px] h-[22px] bg-gradient-to-b from-[rgba(192,208,224,0.5)] via-[rgba(192,208,224,0.3)] to-[rgba(192,208,224,0.1)] rounded-[50%_50%_50%_50%/30%_30%_70%_70%] blur-[0.5px] animate-[tear-slide_6s_ease-in_infinite]`

SVG approach for precise teardrop shape (recommended):

```html
<svg viewBox="0 0 12 28" class="absolute w-3 h-7" aria-hidden="true">
  <defs>
    <linearGradient id="tear-grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="rgba(192,208,224,0.6)"/>
      <stop offset="50%" stop-color="rgba(192,208,224,0.3)"/>
      <stop offset="100%" stop-color="rgba(192,208,224,0.05)"/>
    </linearGradient>
  </defs>
  <path d="M6 0 C6 0, 0 12, 0 17 C0 22, 2.7 26, 6 28 C9.3 26, 12 22, 12 17 C12 12, 6 0, 6 0 Z" fill="url(#tear-grad)" filter="url(#tear-blur)"/>
  <defs>
    <filter id="tear-blur"><feGaussianBlur stdDeviation="0.3"/></filter>
  </defs>
</svg>
```

Tear placement tips:
- Position along the right or left edge of a wet glass surface
- 1-2 tears per card maximum
- Vary animation timing (5-8 second cycles) and starting position
- Tears are the emotional core -- place them where the eye naturally rests

### 4) Gray Sky Gradient (base background)

A flat, overcast sky gradient that drains all warmth from the interface.

```css
.sky-overcast {
  background: linear-gradient(
    180deg,
    #6a7a8a 0%,
    #7a8a98 30%,
    #8a8a8a 60%,
    #969aa0 100%
  );
}
```

Tailwind sky gradients:
- Standard overcast: `bg-gradient-to-b from-[#6a7a8a] via-[#7a8a98] to-[#969aa0]`
- Heavy overcast: `bg-gradient-to-b from-[#5a6a7a] via-[#6a7a8a] to-[#8a8a8a]`
- Light overcast: `bg-gradient-to-b from-[#7a8a98] via-[#8a9aa8] to-[#a0a8b0]`
- Stormy overcast: `bg-gradient-to-b from-[#4a5a6a] via-[#5a6a7a] to-[#7a7a7a]`

### 5) Puddle Reflection (vertical mirror)

Content above a horizontal line is duplicated below at reduced opacity with vertical flip and blur.

```css
.puddle-surface {
  position: relative;
  overflow: hidden;
}
.puddle-reflection {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 40%;
  transform: scaleY(-1);
  opacity: 0.25;
  filter: blur(3px);
  mask-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.4) 0%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.4) 0%,
    transparent 100%
  );
}
```

Tailwind puddle reflection pattern:
- Container: `relative overflow-hidden`
- Reflection layer: `absolute left-0 right-0 bottom-0 h-[40%] scaleY-[-1] opacity-25 blur-[3px] mask-image-[linear-gradient(180deg,rgba(0,0,0,0.4)_0%,transparent_100%)]`

Inline SVG ripple overlay for puddle realism:

```html
<svg class="absolute bottom-0 left-0 w-full h-[40%] pointer-events-none opacity-20" viewBox="0 0 400 160" preserveAspectRatio="none" aria-hidden="true">
  <defs>
    <filter id="puddle-distort">
      <feTurbulence type="fractalNoise" baseFrequency="0.02 0.06" numOctaves="3" seed="2"/>
      <feDisplacementMap in="SourceGraphic" scale="4"/>
    </filter>
  </defs>
  <rect width="400" height="160" fill="rgba(90,106,122,0.1)" filter="url(#puddle-distort)"/>
</svg>
```

### 6) Empty Bench Silhouette (compositional element)

A dark, reduced-opacity shape suggesting absence and solitude.

```html
<svg viewBox="0 0 160 80" class="absolute bottom-[10%] left-[15%] w-32 h-16 opacity-25" aria-hidden="true">
  <!-- Bench seat -->
  <rect x="20" y="25" width="120" height="6" rx="2" fill="#3a3a3a"/>
  <!-- Bench back -->
  <rect x="25" y="10" width="110" height="5" rx="1.5" fill="#3a3a3a"/>
  <rect x="25" y="18" width="110" height="3" rx="1" fill="#3a3a3a" opacity="0.7"/>
  <!-- Bench legs -->
  <rect x="30" y="31" width="4" height="35" rx="1" fill="#3a3a3a"/>
  <rect x="126" y="31" width="4" height="35" rx="1" fill="#3a3a3a"/>
  <!-- Cross brace -->
  <line x1="32" y1="55" x2="128" y2="55" stroke="#3a3a3a" stroke-width="2" opacity="0.5"/>
</svg>
```

Tailwind wrapper for bench silhouette:
- `absolute pointer-events-none opacity-[0.2]` to `opacity-[0.35]` depending on distance
- Far bench: `opacity-[0.12] blur-[1px]` -- barely visible through rain
- Near bench: `opacity-[0.25]` -- recognizable but still muted

### 7) Distant Figure Silhouette (atmospheric element)

A tall, thin dark shape suggesting a person walking away into the rain.

```html
<svg viewBox="0 0 30 80" class="absolute bottom-[15%] right-[25%] w-8 h-20 opacity-20" aria-hidden="true">
  <!-- Head -->
  <circle cx="15" cy="8" r="5" fill="#2a2a2a"/>
  <!-- Body -->
  <path d="M15 13 L15 45" stroke="#2a2a2a" stroke-width="3" stroke-linecap="round"/>
  <!-- Arms (slightly forward, suggesting walking) -->
  <path d="M15 22 L8 32" stroke="#2a2a2a" stroke-width="2" stroke-linecap="round"/>
  <path d="M15 22 L22 35" stroke="#2a2a2a" stroke-width="2" stroke-linecap="round"/>
  <!-- Legs (walking stance) -->
  <path d="M15 45 L9 70" stroke="#2a2a2a" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M15 45 L21 68" stroke="#2a2a2a" stroke-width="2.5" stroke-linecap="round"/>
</svg>
```

Tailwind wrapper for figure silhouette:
- `absolute pointer-events-none opacity-[0.15] blur-[0.5px]`
- The figure should be small (relative to viewport) and positioned at mid-to-far distance
- Maximum 1 figure per viewport -- solitary, not a crowd

### 8) Wet Surface Highlight (rain-slicked accent)

A horizontal gradient line suggesting a wet, reflective surface edge.

```css
.wet-highlight {
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(192, 208, 224, 0.4) 20%,
    rgba(192, 208, 224, 0.6) 50%,
    rgba(192, 208, 224, 0.4) 80%,
    transparent 100%
  );
}
```

Tailwind wet highlight:
- `absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(192,208,224,0.6)] to-transparent`

Use wet highlights as section dividers, card edge accents, or ground surface indicators.

### 9) Rain Glass Card (foreground content)

Cards that feel like objects behind a rain-streaked window -- cool, blurred, somber.

- Rain glass (standard): `bg-[rgba(138,138,138,0.15)] backdrop-blur-[4px] rounded-xl border border-[rgba(192,208,224,0.2)] shadow-[0_2px_16px_rgba(0,0,0,0.12)]`
- Heavy rain glass (more obscured): `bg-[rgba(106,122,138,0.2)] backdrop-blur-[6px] rounded-xl border border-[rgba(192,208,224,0.15)] shadow-[0_2px_12px_rgba(0,0,0,0.15)]`
- Solid rain card: `bg-[#8a8a8a]/30 backdrop-blur-sm rounded-xl shadow-[0_1px_8px_rgba(0,0,0,0.1)] border border-[rgba(192,208,224,0.15)]`

## Color Palette System

### Primary Rain Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Rain Gray | `#6a7a8a` | Primary background, sky, dominant surface |
| Sky Overcast | `#8a8a8a` | Secondary background, mid-ground surfaces |
| Wet Glass | `#a0b0c0` | Glass tints, transparent overlays, wet surfaces |
| Puddle Blue-Gray | `#5a6a7a` | Reflections, puddle surfaces, deep accents |
| Bench Dark | `#3a3a3a` | Silhouette fill, bench shapes, structural darks |
| Tear Clear | `#c0d0e0` | Droplets, tear highlights, wet surface highlights |
| Figure Shadow | `#2a2a2a` | Figure silhouettes, deepest darks, text on light |
| Melancholy Blue | `#4a5a6a` | Accent color, links, interactive states, depth |

### Rain Streak Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Streak Light | `rgba(192, 208, 224, 0.4)` | Standard rain streak opacity |
| Streak Dim | `rgba(192, 208, 224, 0.2)` | Distant or secondary streaks |
| Streak Bright | `rgba(192, 208, 224, 0.6)` | Close or prominent streaks |
| Streak Ghost | `rgba(192, 208, 224, 0.1)` | Background rain, barely visible |

### Surface Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Surface Wet | `rgba(160, 176, 192, 0.15)` | Primary glass card background |
| Surface Heavy | `rgba(106, 122, 138, 0.2)` | Heavy rain glass card background |
| Surface Solid | `#8a8a8a` with 30% opacity | Solid card backgrounds |
| Border Wet | `rgba(192, 208, 224, 0.25)` | Glass borders, card edges |
| Border Dim | `rgba(192, 208, 224, 0.15)` | Subtle borders, dividers |
| Highlight Wet | `rgba(192, 208, 224, 0.6)` | Wet surface edge highlights |

### Text Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Text Dark | `#2a2a2a` | Primary text, headings (on light surfaces) |
| Text Deep | `#3a4a5a` | Secondary text, body copy |
| Text Muted | `#5a6a7a` | Tertiary text, captions |
| Text Ghost | `#7a8a9a` | Quarternary text, hints, ambient labels |
| Text Rain | `#a0b0c0` | Accent text, links on dark backgrounds |

Rules: grays dominate (60-70% of visible area). Blue-grays fill secondary roles (15-20%). Dark grays appear in silhouettes and structural elements (10-15%). Tear clear appears only in droplets and wet highlights (5%). The palette should feel completely drained of warmth -- no reds, oranges, yellows, or greens. The world is monochrome blue-gray.

## Typography Recommendations

- Headings: `text-2xl` to `text-4xl`, `font-light` or `font-normal`, `tracking-wide`, `text-[#2a2a2a]` -- light weight matches the heavy, subdued atmosphere. Headings feel like thoughts in the rain -- present but muted.
- Body: `text-base` to `text-lg`, `font-normal`, `text-[#3a4a5a]`, `leading-relaxed` -- readable against wet glass surfaces.
- Caption/small: `text-sm`, `text-[#5a6a7a]` -- muted, receding into the overcast.
- Accent text: `text-[#4a5a6a] font-medium` -- melancholy blue for links, interactive labels, and emphasis.
- Ambient/decorative text: `text-[#7a8a9a] opacity-60` -- barely there, like words in the rain.
- Recommended fonts: Inter Light/Regular, IBM Plex Sans, Source Sans 3, or any clean sans-serif that feels steady and quiet at lighter weights.
- AVOID bold/black font weights -- they are too heavy for the somber mood. Maximum weight for headings is `font-medium` (500).
- Letter spacing: `tracking-wide` on headings adds a slow, deliberate quality.
- Line height: `leading-loose` (1.75) on body text for breathing room -- the rain slows everything down.
- Text over dark rain surfaces: use `text-[#c0d0e0]` (tear clear) for legibility on dark gray backgrounds.
- Text over light surfaces: use `text-[#2a2a2a]` (figure shadow) for maximum contrast.

## Component Architecture Pattern

1. Gray sky gradient background (the base -- overcast, draining all warmth).
2. Rain streak layer (falling vertical lines across the full viewport).
3. Distant figure silhouette (small, low-opacity, walking away).
4. Empty bench silhouette (mid-ground, suggesting absence).
5. Puddle reflection area (bottom section, mirroring content above).
6. Wet highlight divider (horizontal line separating sections).
7. Content area with rain glass cards (translucent surfaces with droplet scatter).
8. Tear-like droplets on card surfaces (1-2 per card, sliding slowly).
9. Rain streak layer overlay (second pass, slightly more prominent streaks).
10. Wet surface highlights on card edges (catching ambient light).
11. Figure silhouette foreground accent (one figure, slightly larger, suggesting proximity).
12. Rain streak foreground (heaviest streaks, closest to viewer).

## Interaction Rules

- Rain streaks fall continuously -- no user interaction needed.
- Card hover: surface becomes slightly more transparent, revealing more content through the rain -- `hover:bg-[rgba(160,176,192,0.1)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.15)]` over 400ms ease. Rain UI is heavy; interactions should feel like pressing through wet glass.
- Button hover: subtle brightness increase -- `hover:bg-[rgba(74,90,106,0.4)]` for melancholy blue, `hover:bg-[rgba(138,138,138,0.25)]` for gray variants. No aggressive transforms.
- Button click: brief opacity dip -- `active:opacity-80` over 100ms. Feels like a heavy press.
- Card entrance: fade-in with slight downward drift -- `animate-[rain-descent_0.5s_ease-out]` where `rain-descent` goes from `opacity:0; transform:translateY(-8px)` to `opacity:1; transform:translateY(0)`. Like rain landing.
- Tear drops slide slowly and continuously -- no user interaction.
- Rain streaks are purely ambient -- no interaction, but they should pass behind interactive elements.
- All animations respect `prefers-reduced-motion: reduce` -- freeze rain, stop tear slides, keep surfaces static.
- Focus indicators: `focus-visible:ring-2 focus-visible:ring-[#a0b0c0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#8a8a8a]` -- wet glass ring on overcast offset.
- Scroll behavior: as user scrolls, rain streaks continue falling regardless of scroll position (they are viewport-fixed). Optional: puddle reflections shift opacity slightly with scroll.
- Modal/overlay: heavy rain glass overlay -- `bg-[rgba(90,106,122,0.6)] backdrop-blur-[12px]` covering the viewport, with rain continuing behind.

## Reusable Tailwind Tokens

- Sky overcast: `bg-gradient-to-b from-[#6a7a8a] via-[#7a8a98] to-[#969aa0]`
- Rain streak base: `absolute w-[1.5px] bg-gradient-to-b from-transparent via-[rgba(192,208,224,0.3)] to-transparent rounded-b-sm`
- Rain container: `absolute inset-0 overflow-hidden pointer-events-none`
- Wet glass card: `bg-[rgba(160,176,192,0.15)] backdrop-blur-[4px] border border-[rgba(192,208,224,0.25)] rounded-xl`
- Heavy rain glass: `bg-[rgba(106,122,138,0.2)] backdrop-blur-[6px] border border-[rgba(192,208,224,0.15)] rounded-xl`
- Solid rain card: `bg-[#8a8a8a]/30 backdrop-blur-sm rounded-xl border border-[rgba(192,208,224,0.15)]`
- Tear drop: `absolute w-[10px] h-[22px] bg-gradient-to-b from-[rgba(192,208,224,0.5)] via-[rgba(192,208,224,0.3)] to-[rgba(192,208,224,0.1)] rounded-[50%_50%_50%_50%/30%_30%_70%_70%] blur-[0.5px]`
- Wet highlight: `absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(192,208,224,0.6)] to-transparent`
- Puddle reflection: `absolute left-0 right-0 bottom-0 h-[40%] scaleY-[-1] opacity-25 blur-[3px] mask-image-[linear-gradient(180deg,rgba(0,0,0,0.4)_0%,transparent_100%)]`
- Text dark: `text-[#2a2a2a]`
- Text deep: `text-[#3a4a5a]`
- Text muted: `text-[#5a6a7a]`
- Text ghost: `text-[#7a8a9a]`
- Text rain: `text-[#a0b0c0]`
- Text over dark: `text-[#c0d0e0]`
- Button melancholy: `bg-[rgba(74,90,106,0.25)] hover:bg-[rgba(74,90,106,0.4)] backdrop-blur-md text-[#c0d0e0] font-medium rounded-lg border border-[rgba(160,176,192,0.2)] hover:border-[rgba(160,176,192,0.35)] transition-all duration-300`
- Button gray: `bg-[rgba(138,138,138,0.15)] hover:bg-[rgba(138,138,138,0.25)] backdrop-blur-md text-[#5a6a7a] font-medium rounded-lg border border-[rgba(192,208,224,0.15)] hover:border-[rgba(192,208,224,0.3)] transition-all duration-300`
- Focus ring: `focus-visible:ring-2 focus-visible:ring-[#a0b0c0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#8a8a8a]`
- Bench silhouette: `absolute pointer-events-none opacity-[0.2]`
- Figure silhouette: `absolute pointer-events-none opacity-[0.15] blur-[0.5px]`

## Quality Checklist (must pass)

- Background uses overcast gray gradients (#6a7a8a to #969aa0 range). No bright, warm, or saturated backgrounds.
- Rain streaks are thin (1-2px), fall at steady speed (1.5-3 second cycles), and have slight diagonal offset (2-5 degrees).
- Wet glass surfaces use backdrop-blur (2-6px) with scattered droplet patterns and cool gray tints.
- Tear drops are elongated shapes with gradient fill, sliding slowly (5-8 second cycles). Maximum 2-3 per section.
- Puddle reflections use vertical flip, reduced opacity (0.2-0.4), and blur (2-4px) with mask gradient fade.
- Empty bench silhouettes are dark shapes at low opacity (0.12-0.35). Maximum 1-2 per composition.
- Distant figure silhouettes are small, thin, and very low opacity (0.15-0.25). Maximum 1 per viewport.
- Typography uses light to normal font weights. No bold headings. Atmosphere is heavy and subdued.
- Colors are completely desaturated and cool. No warm tones anywhere in the palette.
- Rain glass cards have enough backdrop-blur to separate content from rain while maintaining the wet feel.
- Wet highlight lines appear at section boundaries and card edges for surface realism.
- `prefers-reduced-motion` disables all rain, tear, and ambient animations.
- Content remains readable over all wet glass surfaces -- test text contrast against every blur and opacity combination.
- The palette reads as monochrome blue-gray with no exceptions.

## Anti-Patterns

- Warm colors (rain UI is completely cool and desaturated -- any warmth breaks the somber mood).
- Bold or heavy font weights (too loud for the subdued atmosphere -- keep to light/normal/medium maximum).
- Fast rain animation (rain falls steadily and meditatively -- under 1 second feels frantic, not melancholic).
- Hard-edged rain drops (rain is fluid -- use blur, gradient masks, and rounded shapes).
- Bright accent colors (there are no bright accents in the rain -- melancholy blue is the strongest "color").
- Saturated backgrounds (overcast skies drain all saturation -- gray is the dominant tone).
- Symmetrical or cheerful layouts (rain compositions should feel asymmetric and heavy).
- More than 1 figure silhouette per viewport (solitude is the point -- multiple figures suggest company).
- More than 2-3 tear drops per section (they lose emotional weight when multiplied).
- Puddle reflections at full opacity (they must be ghostly -- maximum 0.4 opacity).
- Pure white (#ffffff) as a surface color (too stark -- use tear clear #c0d0e0 or wet glass tints).
- Drop shadows as primary depth mechanic (rain depth comes from streaks, blur, and reflection, not shadows).
- Horizontal rain (rain falls vertically or with very slight diagonal -- never horizontal).
- Rain streaks in front of interactive content (streaks pass behind cards and buttons, never obscuring interaction).
- Text directly on top of rain streak animation (streaks reduce legibility -- use backdrop-blur cards for text content).
- Cheerful copy or messaging (the tone must match the visual mood -- somber, contemplative, quietly sad).

## Accessibility Considerations

- All rain streak, tear drop, and ambient animations must respect `prefers-reduced-motion: reduce`. Provide a static rain composition as fallback with no falling, sliding, or drifting.
- Text contrast must be verified against the full range of wet glass opacity states. Translucent surfaces change the effective background color -- test at every overlay combination. Minimum WCAG AA contrast ratio of 4.5:1 for body text.
- Rain streaks, tear drops, bench silhouettes, figure silhouettes, and puddle reflections must have `aria-hidden="true"` since they are decorative background elements.
- Focus indicators must be visible against both dark overcast backgrounds and light wet glass surfaces. Use wet glass (#a0b0c0) rings with appropriate offset color.
- Do not rely on rain streak density or tear drop presence to convey meaning -- rain atmosphere is purely visual, not informational.
- Screen reader users experience the same content hierarchy without rain effects. Rain is purely atmosphere.
- Test with Windows High Contrast Mode -- translucent wet glass surfaces may become invisible, so content structure must be self-sufficient without backdrop-blur or opacity tricks.
- Minimum touch target size of 44x44px for interactive elements -- wet glass UI's translucent edges can make targets feel imprecise.
- Wet glass cards with `backdrop-blur` may cause performance issues on low-end devices -- provide a solid `bg-[#8a8a8a]/40` fallback card style.
- Ensure `z-index` stacking allows keyboard focus to reach all interactive elements above rain streak layers.
- Color contrast for melancholy blue interactive states must meet 4.5:1 minimum against both dark and light background variants.
- Rain streak animations falling across the viewport may trigger vestibular disorders -- provide reduced-motion fallback and keep streak amplitude small (under 5% horizontal movement per cycle).
- Puddle reflections should not duplicate interactive elements -- reflections are decorative mirrors of static content only.
- Tear drop elements that suggest emotional state (error indicators, warnings) must be paired with text labels -- visual emotion alone is insufficient for status communication.
