---
name: monsoon-rain-ui
description: Build monsoon rain UI components (heavy rain curtain, umbrella colors, wet street reflections, puddle ripples, distant thunder, green revival) with rain animation overlays, wet reflective surfaces, and the dramatic atmosphere of tropical monsoon downpours. Trigger this skill when the user asks for monsoon UI, rain animation, wet glass effects, tropical downpour, rain curtain, umbrella color accents, puddle ripples, storm atmosphere, or weather-driven interfaces.
---

# Monsoon Rain UI

Use this skill to design and implement atmospheric interfaces that capture the full sensory weight of a tropical monsoon: diagonal rain curtains falling across the viewport, wet reflective glass and asphalt surfaces, colorful umbrella accents, puddle ripple animations, distant lightning flashes, and the deep green revival of soaked vegetation. The mood is dramatic, immersive, and alive with the rhythm of heavy rain.

## Non-Negotiable Foundations

- Monsoon Rain UI is atmosphere-first. The rain overlay, wet surfaces, and storm sky establish the entire visual language. Foreground content must survive visual noise from rain animation without losing readability.
- Rain is created with repeating diagonal lines using CSS pseudo-elements or SVG patterns, NOT with JavaScript particle systems. The animation is pure CSS `translateY` + opacity cycling on long thin elements. Keep it hardware-accelerated.
- Wet reflections are achieved by duplicating content with `transform: scaleY(-1)`, reducing opacity, applying `blur()`, and clipping with a gradient mask. This is the ONLY correct way to simulate wet surface reflections.
- Umbrella accents are round SVG shapes used as small decorative anchors — color pops against the gray storm. They are never the primary UI element; they are punctuation.
- Puddle ripples are concentric expanding circles with fading opacity, animated via CSS `@keyframes` on `transform: scale()` and `opacity`. They ground the composition and add tactile depth.
- Lightning is a full-viewport flash that triggers randomly (5-15 second intervals) using a single CSS animation on a white overlay at very low opacity. It must feel startling but not blinding.
- The color palette is storm-dominant: grays, dark blues, and asphalt tones as the base, with bright umbrella colors (red, yellow, blue) as controlled accents. Green revival is used sparingly for hope and life.
- All rain and weather animations MUST respect `prefers-reduced-motion`. Provide a static storm scene with no animation as the fallback state.

## Core Material Recipes

### 1) Rain Curtain Overlay (the signature element)

Diagonal falling rain lines via CSS pseudo-elements. No JavaScript needed.

```css
.rain-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 50;
  overflow: hidden;
}
.rain-overlay::before,
.rain-overlay::after {
  content: '';
  position: absolute;
  top: -100%;
  left: -20%;
  width: 140%;
  height: 300%;
  background-image:
    repeating-linear-gradient(
      105deg,
      transparent,
      transparent 98px,
      rgba(174, 194, 210, 0.15) 98px,
      rgba(174, 194, 210, 0.15) 100px
    );
}
.rain-overlay::before {
  animation: rain-fall 0.4s linear infinite;
}
.rain-overlay::after {
  background-image:
    repeating-linear-gradient(
      110deg,
      transparent,
      transparent 140px,
      rgba(174, 194, 210, 0.08) 140px,
      rgba(174, 194, 210, 0.08) 142px
    );
  animation: rain-fall 0.6s linear infinite;
  animation-delay: -0.15s;
}
@keyframes rain-fall {
  0% { transform: translateY(0); }
  100% { transform: translateY(33.333%); }
}
```

Tailwind arbitrary value approach (single layer, lighter weight):
- `fixed inset-0 pointer-events-none z-50 overflow-hidden before:content-[''] before:absolute before:top-[-100%] before:left-[-20%] before:w-[140%] before:h-[300%] before:bg-[repeating-linear-gradient(105deg,transparent,transparent_98px,rgba(174,194,210,0.15)_98px,rgba(174,194,210,0.15)_100px)] before:animate-[rain-fall_0.4s_linear_infinite]`

### 2) Storm Sky Background (the stage)

Layered radial and linear gradients creating a dark, moody storm sky with depth.

```css
background:
  radial-gradient(ellipse 120% 60% at 50% 0%, #2a3a4a 0%, transparent 70%),
  radial-gradient(ellipse 80% 40% at 20% 30%, #1a2a3a 0%, transparent 60%),
  radial-gradient(ellipse 90% 50% at 80% 20%, #3a4a5a 0%, transparent 60%),
  linear-gradient(180deg, #2a3a4a 0%, #3a3a3a 40%, #4a4a4a 100%);
```

Tailwind arbitrary value equivalent:
- `bg-[radial-gradient(ellipse_120%_60%_at_50%_0%,#2a3a4a_0%,transparent_70%),radial-gradient(ellipse_80%_40%_at_20%_30%,#1a2a3a_0%,transparent_60%),linear-gradient(180deg,#2a3a4a_0%,#3a3a3a_40%,#4a4a4a_100%)]`

### 3) Wet Reflection Effect (mirrored wet surface)

Content duplicated and flipped with blur and opacity fade to simulate wet asphalt or glass.

Tailwind classes for the reflection container:
- `relative overflow-hidden`
- Reflection child: `absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-transparent via-[#3a3a3a]/20 to-[#6a7a8a]/30 backdrop-blur-sm transform scale-y-[-1] opacity-20 mask-image-[linear-gradient(to_top,transparent_0%,black_40%,transparent_100%)]`

For a reflected card on wet ground:
- Original card: `relative z-10 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl`
- Reflection: `absolute top-full left-0 right-0 h-3/4 bg-gradient-to-b from-white/5 to-transparent transform scale-y-[-1] blur-md opacity-15 rounded-xl`

### 4) Puddle Ripple Animation (grounding detail)

Concentric circles expanding outward with fading opacity, placed at bottom of composition.

```css
.puddle-ripple {
  position: absolute;
  bottom: 8%;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 40px;
}
.puddle-ripple::before,
.puddle-ripple::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(74, 122, 154, 0.4);
  border-radius: 50%;
  animation: ripple-expand 3s ease-out infinite;
}
.puddle-ripple::after {
  animation-delay: 1s;
}
@keyframes ripple-expand {
  0% {
    width: 0;
    height: 0;
    opacity: 0.6;
  }
  100% {
    width: 160px;
    height: 50px;
    opacity: 0;
  }
}
```

Tailwind approach for a single ripple:
- `absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[120px] h-[40px] before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:border before:border-[#4a7a9a]/40 before:rounded-full before:animate-[ripple-expand_3s_ease-out_infinite]`

### 5) Lightning Flash Effect (dramatic punctuation)

Full-screen white overlay that flashes briefly at random intervals.

```css
.lightning-flash {
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.03);
  pointer-events: none;
  z-index: 40;
  animation: lightning 8s ease-in-out infinite;
}
@keyframes lightning {
  0%, 90%, 100% { opacity: 0; background: rgba(255, 255, 255, 0); }
  92% { opacity: 1; background: rgba(255, 255, 255, 0.15); }
  93% { opacity: 0; background: rgba(255, 255, 255, 0); }
  94% { opacity: 1; background: rgba(255, 255, 255, 0.08); }
  95% { opacity: 0; }
}
```

Tailwind classes:
- `fixed inset-0 pointer-events-none z-40 animate-[lightning_8s_ease-in-out_infinite] bg-transparent`

### 6) Colorful Umbrella Accent (controlled color pops)

Round umbrella SVG shapes used as small decorative accents. Bright color against storm gray.

Inline SVG pattern for an umbrella accent:

```html
<svg viewBox="0 0 80 60" class="w-16 h-12" aria-hidden="true">
  <path d="M40 5 C20 5 5 20 5 35 L40 35 L75 35 C75 20 60 5 40 5Z" fill="#c41e1e" opacity="0.85"/>
  <line x1="40" y1="35" x2="40" y2="55" stroke="#2a2a2a" stroke-width="2" stroke-linecap="round"/>
  <path d="M40 55 Q36 58 34 55" stroke="#2a2a2a" stroke-width="1.5" fill="none"/>
</svg>
```

Tailwind wrapper for umbrella accents:
- `inline-block opacity-80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]`

Umbrella color variants (apply to the `fill` attribute):
- Red umbrella: `#c41e1e`
- Yellow umbrella: `#f0d020`
- Blue umbrella: `#2a6aaa`
- Green umbrella: `#4a8a3a`

### 7) Wet Glass Card (foreground content on rainy background)

Content cards that feel like looking through a rain-streaked window.

- Wet glass: `bg-white/[0.07] backdrop-blur-xl border border-white/[0.12] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]`
- Rain-streaked glass: add vertical streak lines via `bg-[repeating-linear-gradient(180deg,transparent,transparent_20px,rgba(255,255,255,0.03)_20px,rgba(255,255,255,0.03)_21px)]` on a child div inside the card.
- Solid contrast card: `bg-[#2a2a2a]/90 backdrop-blur-md rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.5)] border border-[#3a3a3a]/50`

### 8) Rain Cloud Header (thematic page header)

Dark, heavy header area suggesting overhead storm clouds.

```css
background:
  radial-gradient(ellipse 100% 80% at 50% 100%, #3a4a5a 0%, transparent 70%),
  radial-gradient(ellipse 120% 50% at 30% 0%, #2a3a4a 0%, transparent 60%),
  radial-gradient(ellipse 100% 40% at 70% 0%, #1a2a3a 0%, transparent 50%),
  linear-gradient(180deg, #1a2a3a 0%, #2a3a4a 100%);
```

Tailwind classes:
- `relative overflow-hidden py-16 bg-[radial-gradient(ellipse_100%_80%_at_50%_100%,#3a4a5a_0%,transparent_70%),radial-gradient(ellipse_120%_50%_at_30%_0%,#2a3a4a_0%,transparent_60%),linear-gradient(180deg,#1a2a3a_0%,#2a3a4a_100%)]`

### 9) Green Revival Accent (life in the storm)

Bright green used sparingly for plant life, growth indicators, and hopeful UI elements.

- Revival green text: `text-[#4a8a3a]`
- Revival green badge: `bg-[#4a8a3a]/20 text-[#4a8a3a] border border-[#4a8a3a]/30 rounded-full px-3 py-1 text-sm font-medium`
- Revival green glow: `shadow-[0_0_20px_rgba(74,138,58,0.3)]`

### 10) Distant Thunder Pulse (subtle ambient heartbeat)

A slow, barely-perceptible scale pulse on background elements simulating distant thunder vibration.

```css
@keyframes thunder-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.002); opacity: 0.98; }
}
```

Tailwind:
- `animate-[thunder-pulse_4s_ease-in-out_infinite]`

Apply to the background layer only, never to foreground content.

## Color Palette System

### Primary Storm Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Storm Sky | `#2a3a4a` | Primary background, header base |
| Rain Gray | `#6a7a8a` | Rain overlay lines, secondary text, borders |
| Wet Asphalt | `#3a3a3a` | Card backgrounds, dark surfaces, reflection base |
| Deep Night | `#1a1a2a` | Deepest background layer, shadows |
| Storm Cloud | `#4a5a6a` | Mid-tone surfaces, cloud formations |

### Umbrella Accent Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Umbrella Red | `#c41e1e` | Primary accent, alerts, CTAs, red umbrella |
| Umbrella Yellow | `#f0d020` | Secondary accent, warnings, yellow umbrella |
| Umbrella Blue | `#2a6aaa` | Info accent, links, blue umbrella |
| Umbrella Green | `#4a8a3a` | Success states, revival accent, green umbrella |

### Atmosphere Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Puddle Blue | `#4a7a9a` | Ripple borders, water highlights, reflections |
| Lightning White | `#f0f0f0` | Flash overlay (low opacity), text on dark |
| Mist Blue-Gray | `#8a9aaa` | Subtle atmospheric overlays, muted text |
| Wet Glass | `rgba(255,255,255,0.07)` | Glass card backgrounds, light streaks |
| Rain Drop | `rgba(174,194,210,0.15)` | Rain curtain line color |

### Green Revival Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Revival Green | `#4a8a3a` | Primary green accent, growth indicators |
| Leaf Light | `#6aaa5a` | Hover state for green elements |
| Leaf Dark | `#3a6a2a` | Active/pressed state for green elements |
| Moss | `#2a4a2a` | Dark green surface, deep vegetation |

Rules: gray and blue-grays dominate (70%+ of the palette). Umbrella colors appear as controlled accents (15-20%). Green revival is used sparingly for emphasis and hope (5-10%). The palette should feel heavy, wet, and atmospheric with bright spots of color breaking through.

## Typography Recommendations

- Headings: `text-2xl` to `text-5xl`, `font-bold`, `tracking-tight`, `text-white` — must punch through rain overlay noise.
- Body: `text-base` to `text-lg`, `font-normal`, `text-white/80` — readable but not fighting the atmosphere.
- Rain-filtered text: add `drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]` to all text over rain overlays for legibility.
- Caption/small: `text-sm`, `text-[#8a9aaa]` — muted, atmospheric.
- Monospace accents (for data or stats): `font-mono text-[#6a7a8a]` — technical feel against organic rain.
- Recommended fonts: Inter for clean readability, IBM Plex Sans for technical weight, or any sturdy sans-serif that reads well against visual noise.
- Avoid thin/light font weights — rain overlays create visual interference that thin strokes cannot survive.
- Line height: `leading-relaxed` or `leading-loose` on body text over rain overlays for improved readability.

## Component Architecture Pattern

1. Storm sky gradient background (the stage — covers full viewport, dark base).
2. Rain cloud header (heavy gradient at top suggesting overhead clouds).
3. Rain curtain overlay (fixed, full viewport, pointer-events-none, high z-index, two pseudo-element layers at different speeds and angles).
4. Lightning flash layer (fixed, full viewport, pointer-events-none, slightly lower z-index than rain).
5. Main content area with wet glass cards or solid contrast cards.
6. Wet reflection effects on key elements (duplicated content, flipped, blurred, faded).
7. Puddle ripple animations at bottom of composition (grounding detail).
8. Colorful umbrella SVG accents placed strategically (small, decorative, bright).
9. Green revival accents on success states and hopeful elements.
10. Thunder pulse animation on background layer (barely perceptible vibration).

## Interaction Rules

- Rain overlay is always present and does not interact with pointer events.
- Card hover: subtle lift with darker shadow — `hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]` over 200ms ease.
- Button hover: brighten the umbrella color — `hover:bg-[#d42e2e]` for red, adjust for each accent.
- Lightning flash triggers on random intervals (8-15s) — no user interaction needed, purely ambient.
- Puddle ripples loop continuously — no interaction needed.
- Rain speed can increase on scroll or interaction to simulate intensifying storm (optional, subtle).
- All animations respect `prefers-reduced-motion: reduce` — freeze rain, disable lightning, disable ripples, keep static storm scene.
- Focus rings: `focus-visible:ring-2 focus-visible:ring-[#4a7a9a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2a3a4a]`.

## Reusable Tailwind Tokens

- Rain overlay: `fixed inset-0 pointer-events-none z-50 overflow-hidden`
- Storm sky: `bg-[radial-gradient(ellipse_120%_60%_at_50%_0%,#2a3a4a_0%,transparent_70%),linear-gradient(180deg,#2a3a4a_0%,#3a3a3a_40%,#4a4a4a_100%)]`
- Wet glass card: `bg-white/[0.07] backdrop-blur-xl border border-white/[0.12] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]`
- Solid contrast card: `bg-[#2a2a2a]/90 backdrop-blur-md rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.5)] border border-[#3a3a3a]/50`
- Text primary: `text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]`
- Text secondary: `text-white/60`
- Text muted: `text-[#8a9aaa]`
- Accent red: `bg-[#c41e1e] text-white`
- Accent yellow: `bg-[#f0d020] text-[#1a1a2a]`
- Accent blue: `bg-[#2a6aaa] text-white`
- Green revival: `bg-[#4a8a3a]/20 text-[#4a8a3a] border border-[#4a8a3a]/30`
- Puddle ripple: `border border-[#4a7a9a]/40 rounded-full`
- Lightning flash: `fixed inset-0 pointer-events-none z-40`
- Rain cloud header: `relative overflow-hidden py-16 bg-[radial-gradient(ellipse_100%_80%_at_50%_100%,#3a4a5a_0%,transparent_70%),linear-gradient(180deg,#1a2a3a_0%,#2a3a4a_100%)]`
- Noise texture: SVG `feTurbulence` at `opacity-[0.02] mix-blend-overlay` for organic grain

## Quality Checklist (must pass)

- Rain curtain uses repeating-linear-gradient on pseudo-elements, NOT images or JavaScript particles.
- Rain overlay is `pointer-events-none` and does not block interaction with content.
- Storm sky uses layered radial-gradient with dark base colors (#2a3a4a range).
- Wet reflections use scaleY(-1) with blur and opacity fade, NOT duplicated DOM elements.
- Lightning flash is extremely subtle (opacity 0.08-0.15 at peak) — a hint, not a spotlight.
- Puddle ripples use concentric expanding circles with CSS animation, positioned at composition bottom.
- Umbrella accents are small SVG shapes, not large UI elements. Maximum 3-4 visible at once.
- All text over rain overlay has shadow or backdrop for legibility.
- Green revival color is used sparingly — it should feel like life breaking through, not a green theme.
- `prefers-reduced-motion` disables all rain, lightning, ripple, and pulse animations.
- Focus indicators are visible against the dark storm background.
- Color contrast ratios meet WCAG AA for all text content.

## Anti-Patterns

- JavaScript particle rain (use CSS repeating-linear-gradient instead — cheaper, smoother, GPU-accelerated).
- Full-opacity lightning flash (blinding and accessibility-hostile — keep at 0.08-0.15 peak opacity).
- Rain overlay without `pointer-events-none` (blocks all user interaction).
- Reflections that are just a blurred copy without gradient mask fade (looks like a smudge, not a wet surface).
- Umbrella accents that are too large or too numerous (competes with content, becomes a toy).
- Green revival color dominating the palette (breaks the storm atmosphere — it must be sparse).
- Using pure black (#000000) as the storm base (too flat — use dark blue-grays like #1a2a3a for depth).
- Fast rain animation (feels like static noise, not rain — 0.3-0.6s per cycle is correct).
- No `prefers-reduced-motion` support (rain animation is intense and must be optional).
- Text without drop-shadow over rain overlay (unreadable when rain lines cross the text).
- Puddle ripples placed above the fold (they belong at the bottom, grounding the scene).
- Flat single-color backgrounds (monsoon UI requires layered gradients for atmospheric depth).

## Accessibility Considerations

- Rain animation must be disableable via `prefers-reduced-motion: reduce`. Provide a static storm background as fallback.
- Lightning flash must not exceed 0.15 opacity at peak. Avoid strobing effects. If using randomized timing, ensure minimum 6 seconds between flashes.
- All text must meet WCAG AA contrast (4.5:1 for body, 3:1 for large text) against the storm background. Use drop-shadows or backdrop-blur containers to guarantee contrast.
- Rain overlay must be `pointer-events: none` so all interactive elements remain accessible.
- Umbrella SVG accents must have `aria-hidden="true"` since they are decorative.
- Puddle ripple animations must not create seizure risk — keep opacity transitions smooth, never snapping.
- Focus indicators must be clearly visible against dark storm backgrounds. Use high-contrast focus rings (#4a7a9a or white).
- Do not rely on color alone to convey state — umbrella colors as accents must be paired with icons, text, or shape differences.
- Screen reader users should experience the same content hierarchy without rain effects. The rain is visual atmosphere only.
- Test with Windows High Contrast Mode — rain overlays may disappear, so content must remain functional without them.
