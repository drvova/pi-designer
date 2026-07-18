---
name: euphoric-energy-ui
description: Build euphoric energy UI components (radiant burst, neon pulse, particle explosion, electric wave, high-energy gradient, dynamic motion, joyful splash) with vibrant saturated colors, energetic motion, and the peak excitement of euphoric moments. Trigger this skill when the user asks for euphoric design, high-energy UI, neon pulse, radiant burst, particle explosion, electric wave, vibrant gradient, dynamic motion, joyful splash, or peak-excitement interfaces.
---

# Euphoric Energy UI

Use this skill to design and implement interfaces that capture the explosive intensity of euphoric moments: radiant bursts of light, neon pulse animations, particle explosions, electric wave lines, high-energy saturated gradients, dynamic motion, and joyful color splashes. The aesthetic is maximum saturation, maximum energy, maximum impact — the visual equivalent of a rush of adrenaline, a moment of pure elation, or the peak of a crowd's collective excitement.

## Non-Negotiable Foundations

- Euphoric energy UI operates at maximum visual intensity: colors are FULLY SATURATED, motion is CONSTANT, and contrast is EXTREME.
- Neon glow effects are mandatory: every bright element must radiate outward with layered box-shadows, text-shadows, or drop-shadows that simulate luminous emission.
- Motion is not optional — it is a structural element: pulsing, radiating, exploding, and flowing animations communicate the energy that static elements cannot.
- The palette is electric: hot pinks, electric blues, neon yellows, energy greens, vibrant oranges, and deep purple — colors that feel charged and alive.
- Deep, near-black backgrounds (`#0a0a1a`) are the standard canvas: bright elements on dark surfaces create the highest possible contrast and the sensation of light emerging from darkness.
- The aesthetic is overwhelming in the best way — nothing is muted, nothing is subtle, nothing is calm. This is the visual peak, the climactic moment, the explosion of feeling.
- Light bleeds, color splatters, and energy lines are structural, not decorative. They communicate the raw power of the moment.

## Core Material Recipes

### 1) Radiant Burst Background

Lines of color exploding outward from a central point — the signature energy signature.

- Container: `relative overflow-hidden bg-[#0a0a1a]`.
- Center point: absolute positioned at `top-1/2 left-1/2`.
- Burst lines: 12-24 `div` elements radiating outward, each with:
  - `absolute origin-center`
  - `w-[2px] h-[40vh] bg-gradient-to-t from-[#ff40c0]/0 via-[#ff40c0]/60 to-[#ff40c0]/0`
  - Rotated at evenly spaced angles (15deg increments for 24 lines).
  - `animate-[pulse_3s_ease-in-out_infinite]` with staggered `animation-delay`.
- Central glow: `absolute w-32 h-32 rounded-full bg-[#ffffff]/20 blur-3xl`.
- Tailwind composite: parent `bg-[#0a0a1a] relative overflow-hidden` with child burst `div`s using `rotate-[Ndeg] origin-center w-[2px] h-[40vh] bg-gradient-to-t from-transparent via-[#ff40c0]/60 to-transparent animate-[pulse_3s_ease-in-out_infinite]`.

### 2) Neon Pulse Animation

A bright element that vibrates with glowing energy, simulating the thrum of neon.

```css
@keyframes neon-pulse {
  0%, 100% {
    box-shadow: 0 0 8px #ff40c0, 0 0 24px #ff40c0, 0 0 48px #ff40c080, 0 0 96px #ff40c040;
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 12px #ff40c0, 0 0 36px #ff40c0, 0 0 72px #ff40c080, 0 0 120px #ff40c040;
    transform: scale(1.02);
  }
}
```

Tailwind approximate:
- `animate-[neon-pulse_2s_ease-in-out_infinite]` with a CSS class defining the multi-layered box-shadow.
- The pulse is subtle in scale (2%) but dramatic in glow expansion — the energy is in the light, not the motion.

### 3) Particle Explosion

Scattered dots expanding outward from a point, simulating a burst of energy or confetti.

- Container: `relative overflow-hidden`.
- Particles: 20-40 small `div` elements, each with:
  - `absolute rounded-full bg-[particle-color]`.
  - Size: `w-1 h-1` to `w-2 h-2`.
  - `animate-[particle-explode_1.5s_ease-out_forwards]`.
  - Each particle has a unique `--tx` and `--ty` CSS custom property for random direction.
- Animation: translate from center to `var(--tx)` `var(--ty)` with opacity fading from 1 to 0.
- Color variety: particles use colors from the euphoric palette randomly.
- The explosion radiates outward in all directions — no particle moves the same way.

### 4) Electric Wave Lines

Zigzag energy lines that crackle across the screen like lightning or audio waveforms.

```html
<svg viewBox="0 0 400 60" class="w-full h-16 text-[#40a0ff] opacity-80">
  <path d="M0,30 L20,10 L40,50 L60,5 L80,55 L100,15 L120,45 L140,8 L160,52 L180,20 L200,40 L220,12 L240,48 L260,18 L280,42 L300,10 L320,50 L340,15 L360,45 L380,20 L400,30" 
        fill="none" stroke="currentColor" stroke-width="2" 
        filter="url(#electric-glow)"/>
  <defs>
    <filter id="electric-glow">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
</svg>
```

The lines are sharp and angular — energy is jagged, not smooth. Each zigzag segment has a different amplitude, creating the chaotic pattern of real electrical discharge.

### 5) High-Energy Gradient

Saturated color transitions that move and shift — gradients that feel alive.

- Animated gradient: `bg-gradient-to-r from-[#ff40c0] via-[#40a0ff] to-[#40ff60] bg-[length:200%_100%] animate-[gradient-shift_4s_linear_infinite]`.
- Gradient keyframes: `background-position: 0% 50%` to `background-position: 100% 50%` and back.
- Alternative angular: `bg-[conic-gradient(from_0deg,#ff40c0,#40a0ff,#ffe040,#40ff60,#ff6020,#a040ff,#ff40c0)]`.
- The gradient is never static — it moves, shifts, and flows continuously.
- All colors in the gradient are fully saturated (100% saturation, maximum brightness).

### 6) Joyful Color Splash

Random bright color splatters that evoke confetti, paint guns, or celebratory bursts.

- Individual splash: `absolute rounded-full blur-[1px]` with random position, size, and color.
  - Sizes: `w-8 h-8` to `w-24 h-24`.
  - Colors from the euphoric palette at 60-90% opacity.
  - Shapes: circles, elongated ovals (stretched with `scale-x-[1.5]` or `scale-y-[0.6]`).
- Cluster pattern: 8-15 splashes positioned randomly within a container.
- Optional drip: some splashes have a `w-[3px]` vertical extension downward using `rounded-b-[50%]`.
- These feel like the visual aftermath of a celebration — spontaneous, joyful, uncontrolled.

### 7) Energy Ring

Expanding concentric rings that pulse outward from a central element — the ripple of energy.

- Container: `relative`.
- Rings: 3-5 `absolute rounded-full border-2 border-[color]` elements.
  - Each ring has a different size and animation delay.
  - `animate-[ring-expand_2s_ease-out_infinite]` — scales from 0.5 to 2.0 with opacity fading.
  - Staggered delays: `animation-delay: 0s, 0.4s, 0.8s, 1.2s`.
- Central element: a bright icon or text sitting at the origin point.
- The rings create the feeling of energy radiating outward from a powerful source.

### 8) Motion Blur Accent

A streak of color that suggests rapid movement — the afterimage of something moving too fast.

- Shape: `absolute h-[3px] rounded-full` with a gradient fade.
  - `bg-gradient-to-r from-transparent via-[#ff40c0] to-transparent`.
  - Width: `w-[200px]` to `w-[400px]`.
  - Rotation: random angle `rotate-[Ndeg]`.
- Multiple streaks at different angles create the sense of dynamic, multidirectional motion.
- These appear during transitions and loading — they say "something is moving fast."

## Color Palette System

### Core Euphoric Energy Palette

| Color | Hex | Role |
|---|---|---|
| Euphoric Pink | `#ff40c0` | Primary energy, passion, peak excitement |
| Electric Blue | `#40a0ff` | Dynamic accent, electricity, trust |
| Neon Yellow | `#ffe040` | High visibility, joy, warning energy |
| Energy Green | `#40ff60` | Vitality, growth, forward momentum |
| Vibrant Orange | `#ff6020` | Warmth, enthusiasm, explosive energy |
| Purple Pulse | `#a040ff` | Depth, mystery, cosmic energy |
| Radiant White | `#ffffff` | Peak brightness, light source, flash |
| Deep Contrast | `#0a0a1a` | Canvas background, maximum contrast |

### Extended Palette

| Color | Hex | Role |
|---|---|---|
| Hot Magenta | `#ff10a0` | Aggressive accent, intense emotion |
| Cyan Flash | `#20f0ff` | Cool energy, digital, futuristic |
| Lime Spark | `#80ff00` | Fresh energy, natural power |
| Coral Burst | `#ff4060` | Warm urgency, heartbeat |
| Indigo Deep | `#2020a0` | Deep base, night sky energy |
| Gold Flash | `#ffd000` | Achievement, peak, celebration |
| Rose Neon | `#ff2080` | Romantic energy, warm pulse |
| White Glow | `#ffffff` with 40% opacity | Layered light, diffused glow |

Rules: Colors are ALWAYS fully saturated and high-brightness. Every hue should feel like it is emitting light, not reflecting it. The background is always dark to maximize contrast. Color transitions between hues are rapid and dramatic — no muted blends or gradual shifts. Energy is instantaneous.

## Typography Recommendations

Euphoric energy typography is bold, luminous, and impossible to ignore — every word vibrates with intensity:

- **Display headings:** Space Grotesk, Outfit, or Syne (bold geometric, modern, high-impact).
- **Accent text:** Orbitron or Rajdhani (futuristic, angular, electric feel).
- **Body text:** Inter or Space Grotesk at medium weight (clean, fast, readable at speed).
- **Label text:** `font-sans font-bold uppercase tracking-wider` (labels that shout, not whisper).
- **Numeric displays:** JetBrains Mono or Space Mono (data, scores, counters with technical precision).
- Text should have `text-shadow` glow effects: `drop-shadow-[0_0_8px_currentColor]` to simulate light emission.
- Avoid serif fonts, thin weights, or decorative scripts. Euphoria is bold, geometric, and loud.

## Component Architecture Pattern

1. Deep dark background (`#0a0a1a`) as the canvas for maximum contrast.
2. Radiant burst or particle explosion as the hero energy element.
3. High-energy gradient headers with animated color shift.
4. Neon-glow cards and buttons with layered box-shadow emission.
5. Electric wave lines as section dividers and decorative accents.
6. Joyful color splashes as background texture and celebration markers.
7. Energy rings around interactive elements and focal points.
8. Motion blur accents during transitions and loading states.
9. Bold, luminous typography with text-shadow glow.
10. Continuous animation on at least two elements at all times — static screens are unacceptable.

## Interaction Rules

- Default state: pulsing, glowing, alive — even at rest, elements radiate energy.
- Hover: intensity increase (glow expands, scale grows, colors brighten).
  - `hover:shadow-[0_0_20px_#ff40c0,0_0_40px_#ff40c080] hover:scale-[1.05] transition-all duration-150`.
- Active: `active:scale-[0.95] active:shadow-[0_0_30px_#ff40c0,0_0_60px_#ff40c080]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#ff40c0] focus:ring-offset-2 focus:ring-offset-[#0a0a1a] focus:shadow-[0_0_16px_#ff40c0]`.
- Transitions: `transition-all duration-150 ease-out` (fast — energy does not wait).
- Animations: continuous pulsing, radiating, exploding, shifting — the interface never rests.
- Click feedback: particle burst on click (`animate-[particle-explode_0.6s_ease-out_forwards]` from click point).
- Loading states: full radiant burst animation with spinning energy rings — loading is itself an energetic event.

## Reusable Tailwind Tokens

- Dark canvas: `bg-[#0a0a1a]`.
- Neon glow: `shadow-[0_0_8px_currentColor,0_0_24px_currentColor,0_0_48px_rgba(255,64,192,0.5)]`.
- Text glow: `drop-shadow-[0_0_8px_currentColor]` with `text-[#ff40c0]`.
- Energy button: `bg-[#ff40c0] text-white font-bold rounded-full px-8 py-3 shadow-[0_0_12px_#ff40c0,0_0_32px_#ff40c080] hover:shadow-[0_0_20px_#ff40c0,0_0_48px_#ff40c080] hover:scale-[1.05] transition-all duration-150`.
- Particle: `absolute rounded-full bg-[color] animate-[particle-explode_1.5s_ease-out_forwards]`.
- Electric wave: SVG with `feGaussianBlur` filter and sharp zigzag path.
- Gradient shift: `bg-gradient-to-r from-[#ff40c0] via-[#40a0ff] to-[#40ff60] bg-[length:200%_100%] animate-[gradient-shift_4s_linear_infinite]`.
- Energy ring: `absolute rounded-full border-2 border-[color] animate-[ring-expand_2s_ease-out_infinite]`.
- Motion streak: `absolute h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#ff40c0] to-transparent`.
- Neon card: `bg-[#0a0a1a]/80 border border-[#ff40c0]/30 rounded-xl shadow-[0_0_12px_rgba(255,64,192,0.15)] backdrop-blur-sm`.

## Quality Checklist (must pass)

- Background is dark (`#0a0a1a` or similar deep tone) for maximum contrast.
- At least two colors from the euphoric palette are fully saturated (100% saturation).
- Neon glow effect is present on at least one primary element (layered box-shadow).
- Animation or continuous motion is present on at least two elements.
- Typography is bold, geometric, and uses text-shadow or drop-shadow glow.
- Electric wave SVG or equivalent angular line element is present.
- Color palette uses exclusively saturated, high-brightness hues — no muted or desaturated colors.
- Interactive elements have fast, responsive transitions (150ms or less).
- At least one particle, burst, or explosion element is present.
- The overall feeling is intense, vibrant, and overwhelmingly energetic.
- Focus states are clearly visible with both ring and glow effects.
- The interface never feels static — there is always energy in motion.

## Anti-Patterns

- Muted, desaturated, or pastel colors (euphoric energy is maximum saturation).
- Slow, contemplative animations (energy is fast, instant, explosive).
- Light or white backgrounds (dark backgrounds are mandatory for contrast).
- Serif, script, or decorative typography (energy demands bold geometric type).
- Thin font weights (everything is medium to extra-bold).
- Static, motionless screens (the interface must always be alive with motion).
- Subtle, understated hover effects (hover effects must be dramatic and noticeable).
- Single-color palettes (euphoric energy uses multiple saturated colors simultaneously).
- Sharp, hard-edged shadows without glow (every shadow should have a luminous component).
- Missing animation on primary elements (animation is structural, not decorative here).
- Calm, gentle transitions (transitions are fast and impactful).
- Pure black backgrounds without any depth (add subtle gradient or particle texture to dark backgrounds).

## Accessibility Considerations

- High-saturation colors on dark backgrounds generally provide strong contrast, but verify WCAG AA for all text.
- Bright neon text on dark backgrounds: ensure minimum 4.5:1 contrast ratio for body text, 3:1 for large text.
- Continuous animations must respect `prefers-reduced-motion` — provide a static, high-contrast fallback.
- Pulsing and glowing effects must not trigger photosensitive responses — avoid rapid flashing above 3 Hz.
- Focus states must be visible against the dark background with both ring color and glow effect.
- Color alone should not convey meaning — combine with icons, text labels, or shape changes.
- Particle explosions and motion effects must be decorative only — `aria-hidden="true"` on all particle and burst containers.
- Neon glow text must have sufficient contrast beyond the glow effect itself (the glow is decorative; the text color must stand alone).
- Interactive elements must be clearly distinguishable from decorative energy elements — use border, size, or shape differentiation.
- Screen readers must be able to navigate the interface without encountering animation-dependent information.
- The energetic aesthetic should not prevent users from identifying, understanding, or interacting with all functional elements.
- Loading animations should include a text alternative or status indicator for screen readers.
