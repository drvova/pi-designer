---
name: spring-meadow-ui
description: Build spring meadow UI components (wildflower scatter, butterfly dance, clover ground, bird song, morning dew, warm breeze, green rolling) with fresh green landscapes, colorful wildflower accents, and the renewed energy of springtime. Trigger this skill when the user asks for spring meadow UI, wildflower interfaces, pastoral spring design, meadow landscapes, nature renewal themes, springtime color palettes, or seasonal green interfaces.
---

# Spring Meadow UI

Use this skill to design and implement fresh, nature-inspired interfaces with rolling green hills, scattered wildflower accents, delicate butterfly and bird motifs, morning dew reflections, and the renewed energy of a springtime landscape. The style centers on organic green gradients, playful floral color bursts, and layered depth that evokes walking through an open meadow at sunrise.

## Non-Negotiable Foundations

- Spring Meadow UI is a landscape-driven style. The meadow IS the design; layered ground, sky, and floral elements compose the full visual field.
- Rolling green hills are created using curved SVG paths or CSS `border-radius` ellipses positioned at the bottom third of the viewport. They must overlap in 2-3 layers with varying shades of green for depth.
- Wildflower scatter is achieved by placing small colored circles (4-12px) and tiny SVG flower shapes at randomized positions across the meadow ground area. Colors must come from the wildflower palette — never random.
- Morning dew is rendered as small reflective dots (2-6px) with a radial gradient from white center to transparent, positioned on leaf and surface elements with subtle `box-shadow` glow.
- Foreground content must be clean and high-contrast against the green landscape. Cards and text sit above the meadow, not within it.
- The warm sunlight gradient (top-to-bottom from warm cream to transparent) unifies the entire scene and provides the golden hour atmosphere.

## Core Material Recipes

### 1) Rolling Green Hills (the foundation)

Multiple layered curved shapes at the bottom of the viewport using SVG or CSS, each a different green shade for parallax depth.

SVG approach (most flexible):
```html
<svg viewBox="0 0 1440 320" class="absolute bottom-0 w-full">
  <path fill="#5a9a3a" d="M0,224 C160,160 320,288 480,224 C640,160 800,288 960,224 C1120,160 1280,288 1440,224 L1440,320 L0,320 Z"/>
  <path fill="#4a8a2a" d="M0,256 C200,192 400,304 600,256 C800,208 1000,304 1200,256 C1300,232 1400,288 1440,256 L1440,320 L0,320 Z"/>
  <path fill="#2a6a1a" d="M0,288 C240,240 480,304 720,280 C960,256 1200,304 1440,280 L1440,320 L0,320 Z"/>
</svg>
```

CSS approach (simpler):
```css
.hill-far    { background: #5a9a3a; border-radius: 50% 50% 0 0 / 100% 100% 0 0; }
.hill-mid    { background: #4a8a2a; border-radius: 60% 40% 0 0 / 100% 100% 0 0; }
.hill-near   { background: #2a6a1a; border-radius: 40% 60% 0 0 / 100% 100% 0 0; }
```

Tailwind arbitrary value equivalent:
- Far hill: `absolute bottom-0 w-full h-[200px] bg-[#5a9a3a] rounded-t-[50%]`
- Mid hill: `absolute bottom-0 w-full h-[180px] bg-[#4a8a2a] rounded-t-[60%]`
- Near hill: `absolute bottom-0 w-full h-[160px] bg-[#2a6a1a] rounded-t-[40%]`

### 2) Wildflower Scatter (floral accents)

Small colored dots and SVG flower shapes scattered across the meadow ground area. Each flower is a tiny cluster of petals around a center dot.

```html
<div class="absolute w-3 h-3 bg-[#8a40c0] rounded-full shadow-[0_0_4px_rgba(138,64,192,0.5)]"></div>
<div class="absolute w-2 h-2 bg-[#f0d020] rounded-full shadow-[0_0_3px_rgba(240,208,32,0.4)]"></div>
<div class="absolute w-3 h-3 bg-[#d480a0] rounded-full shadow-[0_0_4px_rgba(212,128,160,0.5)]"></div>
```

Five-petal flower SVG (inline):
```html
<svg class="absolute w-4 h-4" viewBox="0 0 16 16">
  <circle cx="8" cy="3" r="2.5" fill="#8a40c0" opacity="0.8"/>
  <circle cx="12" cy="6" r="2.5" fill="#8a40c0" opacity="0.8"/>
  <circle cx="11" cy="11" r="2.5" fill="#8a40c0" opacity="0.8"/>
  <circle cx="5" cy="11" r="2.5" fill="#8a40c0" opacity="0.8"/>
  <circle cx="4" cy="6" r="2.5" fill="#8a40c0" opacity="0.8"/>
  <circle cx="8" cy="7" r="2" fill="#f0d020"/>
</svg>
```

Tailwind tokens for scattered placement:
- Flower base: `absolute w-3 h-3 rounded-full`
- Purple wildflower: `bg-[#8a40c0] shadow-[0_0_4px_rgba(138,64,192,0.5)]`
- Yellow wildflower: `bg-[#f0d020] shadow-[0_0_3px_rgba(240,208,32,0.4)]`
- Pink wildflower: `bg-[#d480a0] shadow-[0_0_4px_rgba(212,128,160,0.5)]`

### 3) Butterfly SVG Accent

Simple two-wing butterfly shapes that can be placed as decorative accents on cards or near floral elements.

```html
<svg class="w-8 h-6" viewBox="0 0 32 24">
  <path d="M16,12 C12,4 2,2 4,12 C6,18 14,16 16,12Z" fill="#8a40c0" opacity="0.7"/>
  <path d="M16,12 C20,4 30,2 28,12 C26,18 18,16 16,12Z" fill="#d480a0" opacity="0.7"/>
  <line x1="16" y1="8" x2="16" y2="18" stroke="#2a6a1a" stroke-width="0.8"/>
  <circle cx="14" cy="7" r="0.5" fill="#2a6a1a"/>
  <circle cx="18" cy="7" r="0.5" fill="#2a6a1a"/>
</svg>
```

Tailwind positioning:
- Butterfly: `absolute opacity-70 hover:opacity-100 transition-opacity duration-500`

### 4) Morning Dew Drops (reflective accents)

Small circular dots with radial gradients that simulate water droplets catching sunlight on leaves and surfaces.

```css
.dew-drop {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), #e0e8f0 40%, transparent 70%);
  box-shadow: 0 0 3px 1px rgba(224,232,240,0.4);
}
```

Tailwind equivalent:
- Dew drop: `w-[5px] h-[5px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.95),#e0e8f0_40%,transparent_70%)] shadow-[0_0_3px_1px_rgba(224,232,240,0.4)]`
- Large dew: `w-[8px] h-[8px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.9),#e0e8f0_45%,transparent_75%)] shadow-[0_0_5px_2px_rgba(224,232,240,0.3)]`

### 5) Warm Sunlight Gradient (atmosphere)

A top-to-bottom gradient that bathes the scene in warm morning light, transitioning from golden cream to transparent.

```css
.sunlight-overlay {
  background: linear-gradient(180deg, rgba(255,245,208,0.3) 0%, rgba(255,245,208,0.1) 40%, transparent 70%);
}
```

Tailwind equivalent:
- Sunlight: `bg-gradient-to-b from-[rgba(255,245,208,0.3)] via-[rgba(255,245,208,0.1)] to-transparent`

### 6) Clover Ground Texture

A repeating pattern of small shamrock shapes that creates a subtle ground texture across the meadow surface.

```css
.clover-texture {
  background-image:
    radial-gradient(circle at 20% 30%, #2a6a1a 1px, transparent 1px),
    radial-gradient(circle at 40% 50%, #2a6a1a 0.8px, transparent 0.8px),
    radial-gradient(circle at 60% 20%, #2a6a1a 1px, transparent 1px),
    radial-gradient(circle at 80% 60%, #2a6a1a 0.7px, transparent 0.7px);
  background-size: 40px 40px, 35px 35px, 45px 45px, 38px 38px;
}
```

Tailwind approach using CSS background utility:
- Clover texture: `bg-[radial-gradient(circle_at_20%_30%,#2a6a1a_1px,transparent_1px),radial-gradient(circle_at_40%_50%,#2a6a1a_0.8px,transparent_0.8px)] bg-[size:40px_40px,35px_35px]`

### 7) Bird Silhouette Accent

Small bird-in-flight SVG silhouettes placed in the sky area for pastoral atmosphere.

```html
<svg class="w-6 h-3" viewBox="0 0 24 12">
  <path d="M0,8 Q6,2 12,6 Q18,2 24,8" fill="none" stroke="#2a6a1a" stroke-width="1.5" opacity="0.4"/>
</svg>
```

Tailwind positioning:
- Bird: `absolute opacity-40 text-[#2a6a1a]`

### 8) Meadow Content Card (foreground)

Clean, high-contrast content cards that float above the meadow landscape with warm, spring-appropriate styling.

- Nature card on meadow: `bg-white/90 backdrop-blur-sm border border-[#5a9a3a]/20 rounded-2xl shadow-[0_8px_32px_rgba(90,154,58,0.15)]`
- Warm accent card: `bg-[#fff5d0]/80 backdrop-blur-sm border border-[#f0d020]/20 rounded-2xl`
- Green solid card: `bg-[#f0f8e8] rounded-2xl shadow-[0_4px_16px_rgba(42,106,26,0.1)]`

## Color Palette System

### Primary Meadow Palette

| Role | Color | Hex | Tailwind |
|------|-------|-----|----------|
| Meadow Green | Primary green | `#5a9a3a` | `bg-[#5a9a3a]` |
| Clover Dark Green | Ground deep | `#2a6a1a` | `bg-[#2a6a1a]` |
| Sky Blue | Upper atmosphere | `#87ceeb` | `bg-[#87ceeb]` |
| Sunlight Warm | Golden overlay | `#fff5d0` | `bg-[#fff5d0]` |
| Dew Silver | Reflective accents | `#e0e8f0` | `bg-[#e0e8f0]` |

### Wildflower Accent Palette

| Role | Color | Hex | Tailwind |
|------|-------|-----|----------|
| Wildflower Purple | Floral accent | `#8a40c0` | `bg-[#8a40c0]` |
| Wildflower Yellow | Floral accent | `#f0d020` | `bg-[#f0d020]` |
| Wildflower Pink | Floral accent | `#d480a0` | `bg-[#d480a0]` |

### Supporting Greens

| Role | Color | Hex | Tailwind |
|------|-------|-----|----------|
| Hill Far | Lightest green | `#6aaa4a` | `bg-[#6aaa4a]` |
| Hill Mid | Mid green | `#4a8a2a` | `bg-[#4a8a2a]` |
| Hill Near | Deepest green | `#2a6a1a` | `bg-[#2a6a1a]` |
| Leaf Light | Surface green | `#7aba5a` | `bg-[#7aba5a]` |

### Content Colors

| Role | Color | Hex | Tailwind |
|------|-------|-----|----------|
| Text Primary | Dark green | `#1a3a10` | `text-[#1a3a10]` |
| Text Secondary | Mid green | `#3a6a2a` | `text-[#3a6a2a]` |
| Card Background | Warm white | `#fefcf4` | `bg-[#fefcf4]` |
| Card Border | Green tint | `#5a9a3a/20` | `border-[#5a9a3a]/20` |

Rules: wildflower accents should never exceed 15% of total surface area — they are punctuation, not the paragraph. Use green as the dominant tone at all times.

## Component Architecture Pattern

1. Sky gradient background (upper 60% — light blue `#87ceeb` fading to warm `#fff5d0` at the horizon).
2. Optional sunlight overlay (warm golden gradient from top).
3. Rolling green hills (2-3 SVG or CSS curved layers at the bottom).
4. Clover ground texture (subtle repeating pattern on the nearest hill).
5. Wildflower scatter (small colored dots/shapes across the meadow surface).
6. Optional butterfly and bird accents (positioned decoratively in sky and meadow).
7. Morning dew drops (reflective dots on surfaces, cards, and leaves).
8. Clean foreground content (cards, text, buttons with high contrast against greens).
9. Noise texture overlay (optional — SVG `feTurbulence` at `opacity-[0.02]` for organic grain).

## Interaction Rules

- Wildflower scatter can gently pulse (subtle `scale(1)` to `scale(1.1)` over 3-4s) for a breathing meadow effect.
- Butterfly accents can have a slow drift animation (horizontal translate over 8-12s) to simulate fluttering.
- Dew drops can shimmer with a slow opacity cycle (0.6 to 1 over 2-3s).
- Foreground elements use standard interactions (hover, focus, active).
- Hover on cards: subtle lift `hover:shadow-[0_12px_40px_rgba(90,154,58,0.2)]` with a gentle `hover:-translate-y-0.5`.
- Do not over-animate the landscape; it should feel alive, not like a screensaver.
- Respect `prefers-reduced-motion`: disable all meadow animations (flower pulse, butterfly drift, dew shimmer).

## Reusable Tailwind Tokens

- Hill far: `absolute bottom-0 w-full h-[200px] bg-[#5a9a3a] rounded-t-[50%]`
- Hill mid: `absolute bottom-0 w-full h-[180px] bg-[#4a8a2a] rounded-t-[60%]`
- Hill near: `absolute bottom-0 w-full h-[160px] bg-[#2a6a1a] rounded-t-[40%]`
- Wildflower purple: `w-3 h-3 rounded-full bg-[#8a40c0] shadow-[0_0_4px_rgba(138,64,192,0.5)]`
- Wildflower yellow: `w-2 h-2 rounded-full bg-[#f0d020] shadow-[0_0_3px_rgba(240,208,32,0.4)]`
- Wildflower pink: `w-3 h-3 rounded-full bg-[#d480a0] shadow-[0_0_4px_rgba(212,128,160,0.5)]`
- Dew drop: `w-[5px] h-[5px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.95),#e0e8f0_40%,transparent_70%)]`
- Sunlight overlay: `absolute inset-0 bg-gradient-to-b from-[rgba(255,245,208,0.3)] via-[rgba(255,245,208,0.1)] to-transparent`
- Sky gradient: `bg-gradient-to-b from-[#87ceeb] via-[#b8e0f0] to-[#fff5d0]`
- Meadow card: `bg-white/90 backdrop-blur-sm border border-[#5a9a3a]/20 rounded-2xl shadow-[0_8px_32px_rgba(90,154,58,0.15)]`
- Text primary: `text-[#1a3a10]`, Text secondary: `text-[#3a6a2a]`

## Quality Checklist (must pass)

- Background includes a sky gradient transitioning from blue to warm cream.
- At least 2 overlapping green hill layers are present at the bottom.
- Wildflower scatter uses colors from the wildflower accent palette (purple, yellow, pink).
- Wildflower density is restrained — scattered, not cluttered.
- Morning dew drops have a radial gradient with a bright center and transparent edge.
- Sunlight warm gradient is present as an atmospheric overlay.
- Foreground content has clear contrast against the green landscape.
- Butterfly and bird accents are subtle (low opacity, small scale).
- Clover texture (if used) is subtle and does not dominate the ground plane.
- Animation (if used) is gentle and slow (3s+ duration).
- `prefers-reduced-motion` disables all decorative animations.

## Anti-Patterns

- Neon or artificial greens (spring meadow uses organic, earthy greens — not electric or fluorescent).
- Overcrowding with wildflowers (the meadow should feel open and breathable, not like a pattern fill).
- Missing sky or horizon (the meadow needs a sky above to feel like a place, not a green rectangle).
- Flat single-color ground (requires layered hills for depth and realism).
- Heavy or fast animations (nature moves gently — no rapid pulsing or spinning elements).
- Low contrast text on green backgrounds (use warm white or very dark green for readability).
- Symmetrical wildflower placement (flowers scatter randomly in nature, not in grids).
- Oversized decorative elements (butterflies and birds should be accents, not dominant features).
- Missing dew or atmospheric elements (the morning dew and sunlight gradient are what make this feel like spring, not just summer).
- Using cold or muted greens (spring meadow greens are vivid and alive — desaturated greens feel autumnal).

## Typography and Density

- Spring Meadow UI favors rounded, friendly sans-serif fonts (Nunito, Quicksand, Poppins, or system rounded).
- Primary labels: `text-xl` to `text-4xl`, `font-semibold`, `tracking-tight`.
- Body: `text-base` to `text-lg`, `font-normal`, `leading-relaxed`.
- Text color: dark green (`#1a3a10`) on light backgrounds, warm white on dark green surfaces.
- Keep content density moderate to low; the meadow landscape needs visual breathing room.
- Card padding should be generous (`p-6` to `p-8`) to maintain the open, airy feel.

## Accessibility Considerations

- Verify text contrast against the full range of green background variations.
- Cards over meadow must meet WCAG AA contrast ratio (4.5:1 for body text).
- Animated wildflowers, butterflies, and dew must respect `prefers-reduced-motion`.
- Provide a static fallback for reduced-motion users (all elements visible, no animation).
- Do not rely on flower color alone to convey meaning — pair with labels or icons.
- Ensure sufficient touch targets for interactive elements within the meadow landscape.
- Color-blind users may not distinguish wildflower purple from wildflower pink — use shape or label differentiation.
- Decorative SVG elements (butterflies, birds, flowers) must have `aria-hidden="true"` or empty `alt` attributes.
- Ground texture patterns must not create visual vibration or seizure risk — keep contrast low on texture layers.
