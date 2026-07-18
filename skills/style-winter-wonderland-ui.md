---
name: winter-wonderland-ui
description: Build winter wonderland UI components (snow-covered pine, icicle curtain, frozen lake, snowflake close-up, warm cabin window, smoke curl) with crystalline snow surfaces, icicle accents, and the peaceful silence of a fresh snowfall. Trigger this skill when the user asks for winter wonderland UI, snowy interfaces, frozen landscape design, ice and snow themes, winter cabin aesthetics, icicle or snowflake accents, or cold crystalline interfaces.
---

# Winter Wonderland UI

Use this skill to design and implement crystalline, serene interfaces with snow-covered surfaces, hanging icicle accents, frozen lake reflections, detailed snowflake motifs, warm cabin glow contrasts, and the peaceful hush of a winter landscape. The style centers on cool blue-white palettes, sharp crystalline shapes, and the striking contrast between freezing exterior cold and warm interior light.

## Non-Negotiable Foundations

- Winter Wonderland UI is a landscape-driven style. The frozen world IS the design; snow, ice, and crystalline structures compose the visual field.
- Snow surfaces are created with soft, layered white-to-pale-blue gradients that simulate drifted, undulating snow. The surface should feel soft and deep, not flat and sterile.
- Icicle curtains are sharp, downward-pointing triangular shapes hanging from edges (top of cards, header bars, panel tops). They use transparent-to-frosted gradients for a crystalline appearance.
- The frozen lake effect uses a smooth horizontal gradient with subtle vertical reflection lines and a faint blue-white shimmer to simulate ice.
- Warm cabin window glow is the critical contrast element — a small rectangle of golden-yellow light (`#ffcc66`) against the cold landscape creates the emotional center of the design.
- Snowflake accents are detailed six-pointed crystalline SVGs placed decoratively. They must be geometrically precise (6-fold symmetry), not generic star shapes.
- Chimney smoke is rendered as a translucent, slowly curling SVG path or CSS gradient animation rising from the cabin roof.

## Core Material Recipes

### 1) Snow-Covered Pine Trees (landscape elements)

Layered SVG trees with white snow caps on branch tips against dark green trunks.

```html
<svg class="w-20 h-28" viewBox="0 0 80 112">
  <!-- Tree trunk -->
  <rect x="35" y="80" width="10" height="32" fill="#3a2a1a"/>
  <!-- Tree layers (dark green) -->
  <polygon points="40,8 10,50 70,50" fill="#1a3a1a"/>
  <polygon points="40,28 5,70 75,70" fill="#1a3a1a"/>
  <polygon points="40,48 0,90 80,90" fill="#1a3a1a"/>
  <!-- Snow caps on branches -->
  <path d="M40,8 C38,14 14,48 10,50 C18,46 32,42 40,38 C48,42 62,46 70,50 C66,48 42,14 40,8Z" fill="#f8fcff" opacity="0.9"/>
  <path d="M40,28 C38,34 9,68 5,70 C14,66 28,62 40,56 C52,62 66,66 75,70 C71,68 42,34 40,28Z" fill="#f8fcff" opacity="0.85"/>
  <path d="M40,48 C38,54 4,88 0,90 C12,86 26,82 40,76 C54,82 68,86 80,90 C76,88 42,54 40,48Z" fill="#f8fcff" opacity="0.8"/>
</svg>
```

Tailwind positioning:
- Pine tree: `absolute bottom-0 opacity-90`
- Multiple trees at varying sizes: `w-16 h-24`, `w-24 h-36`, `w-20 h-28` for depth variation.

### 2) Icicle Curtain (hanging edge accent)

Sharp, elongated triangular shapes hanging from a top edge with transparent-to-frosted gradients.

```html
<div class="flex gap-[2px]">
  <div class="w-3 h-12 bg-gradient-to-b from-[#d0e8ff] to-transparent clip-path-[polygon(20%_0%,80%_0%,50%_100%)]"></div>
  <div class="w-2 h-8 bg-gradient-to-b from-[#d0e8ff] to-transparent clip-path-[polygon(15%_0%,85%_0%,50%_100%)]"></div>
  <div class="w-3 h-16 bg-gradient-to-b from-[#d0e8ff] to-transparent clip-path-[polygon(20%_0%,80%_0%,50%_100%)]"></div>
  <div class="w-2 h-10 bg-gradient-to-b from-[#d0e8ff] to-transparent clip-path-[polygon(15%_0%,85%_0%,50%_100%)]"></div>
  <div class="w-3 h-14 bg-gradient-to-b from-[#d0e8ff] to-transparent clip-path-[polygon(20%_0%,80%_0%,50%_100%)]"></div>
</div>
```

CSS clip-path for icicle shape:
```css
.icicle {
  clip-path: polygon(20% 0%, 80% 0%, 50% 100%);
  background: linear-gradient(180deg, rgba(208,232,255,0.9) 0%, rgba(208,232,255,0.3) 60%, transparent 100%);
}
```

Tailwind equivalent:
- Icicle base: `bg-gradient-to-b from-[#d0e8ff] via-[rgba(208,232,255,0.3)] to-transparent`
- Icicle shape: `clip-path-[polygon(20%_0%,80%_0%,50%_100%)]`
- Vary heights: `h-6`, `h-8`, `h-10`, `h-12`, `h-16` with alternating `w-2` and `w-3`.

### 3) Frozen Lake Surface

A smooth, reflective horizontal surface with subtle vertical streaks and a pale blue shimmer.

```css
.frozen-lake {
  background:
    linear-gradient(180deg, rgba(176,212,240,0.1) 0%, rgba(176,212,240,0.3) 50%, rgba(176,212,240,0.1) 100%),
    linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 25%, transparent 50%, rgba(255,255,255,0.05) 75%, transparent 100%),
    linear-gradient(180deg, #b0d4f0 0%, #c8d8e8 40%, #d8e4f0 100%);
  background-size: 100% 100%, 60px 100%, 100% 100%;
}
```

Tailwind approach:
- Frozen lake: `bg-gradient-to-b from-[#b0d4f0] via-[#c8d8e8] to-[#d8e4f0]`
- Ice sheen overlay: `bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.05)_25%,transparent_50%,rgba(255,255,255,0.05)_75%,transparent_100%)] bg-[length:60px_100%]`

### 4) Snowflake SVG Accent (detailed crystal)

Precise six-fold symmetric snowflake with branching arms. This is the signature decorative element.

```html
<svg class="w-12 h-12" viewBox="0 0 48 48">
  <g stroke="#b0d4f0" stroke-width="1.2" fill="none" opacity="0.7">
    <!-- Main arms (6-fold symmetry) -->
    <line x1="24" y1="4" x2="24" y2="44"/>
    <line x1="6.7" y1="14" x2="41.3" y2="34"/>
    <line x1="6.7" y1="34" x2="41.3" y2="14"/>
    <!-- Branch arms -->
    <line x1="24" y1="10" x2="20" y2="6"/>
    <line x1="24" y1="10" x2="28" y2="6"/>
    <line x1="24" y1="38" x2="20" y2="42"/>
    <line x1="24" y1="38" x2="28" y2="42"/>
    <!-- Diagonal branches -->
    <line x1="12" y1="18" x2="8" y2="16"/>
    <line x1="12" y1="18" x2="10" y2="22"/>
    <line x1="36" y1="30" x2="40" y2="32"/>
    <line x1="36" y1="30" x2="38" y2="26"/>
    <line x1="12" y1="30" x2="8" y2="32"/>
    <line x1="12" y1="30" x2="10" y2="26"/>
    <line x1="36" y1="18" x2="40" y2="16"/>
    <line x1="36" y1="18" x2="38" y2="22"/>
    <!-- Center hexagon -->
    <polygon points="24,18 29.2,21 29.2,27 24,30 18.8,27 18.8,21" stroke-width="0.8"/>
  </g>
</svg>
```

Tailwind positioning:
- Snowflake: `absolute opacity-60 text-[#b0d4f0]`
- Large decorative: `w-16 h-16 opacity-30`
- Small accent: `w-6 h-6 opacity-50`

### 5) Warm Cabin Window Glow

The critical contrast element — a small golden rectangle against the cold landscape, creating emotional warmth.

```html
<div class="relative w-16 h-12 bg-[#6a4a2a] rounded-sm p-1">
  <div class="w-full h-full bg-[#ffcc66] rounded-sm shadow-[0_0_20px_4px_rgba(255,204,102,0.6),0_0_40px_8px_rgba(255,204,102,0.3)]"></div>
  <!-- Window cross frame -->
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="w-full h-[2px] bg-[#6a4a2a]"></div>
  </div>
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="h-full w-[2px] bg-[#6a4a2a]"></div>
  </div>
</div>
```

Tailwind tokens:
- Cabin wood frame: `bg-[#6a4a2a] rounded-sm p-1`
- Window warm glow: `bg-[#ffcc66] shadow-[0_0_20px_4px_rgba(255,204,102,0.6),0_0_40px_8px_rgba(255,204,102,0.3)]`
- Window cross: `absolute inset-0 flex items-center justify-center`

### 6) Chimney Smoke Curl (animated)

A translucent, slowly rising curl of smoke from the cabin chimney using SVG path animation or CSS.

```html
<svg class="w-8 h-20" viewBox="0 0 32 80">
  <path d="M16,80 C16,70 10,60 16,50 C22,40 10,30 16,20 C22,10 16,5 16,0"
        fill="none" stroke="rgba(180,190,200,0.3)" stroke-width="3" stroke-linecap="round">
    <animate attributeName="d"
      values="M16,80 C16,70 10,60 16,50 C22,40 10,30 16,20 C22,10 16,5 16,0;
              M16,80 C16,70 22,60 16,50 C10,40 22,30 16,20 C10,10 16,5 16,0;
              M16,80 C16,70 10,60 16,50 C22,40 10,30 16,20 C22,10 16,5 16,0"
      dur="6s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.3;0.15;0.3" dur="6s" repeatCount="indefinite"/>
  </path>
</svg>
```

Tailwind positioning:
- Smoke: `absolute -top-20 left-1/2 -translate-x-1/2 opacity-30`
- Alternative CSS approach: use `animate-[smoke_6s_ease-in-out_infinite]` with a custom `@keyframes smoke` that oscillates a transform.

### 7) Fresh Snow Surface Texture

A subtle, slightly uneven white surface with soft shadows that simulates fresh, undisturbed snow.

```css
.snow-texture {
  background:
    radial-gradient(ellipse 120px 40px at 30% 20%, rgba(255,255,255,0.6) 0%, transparent 70%),
    radial-gradient(ellipse 100px 30px at 70% 40%, rgba(255,255,255,0.5) 0%, transparent 70%),
    radial-gradient(ellipse 140px 35px at 50% 70%, rgba(255,255,255,0.4) 0%, transparent 70%),
    linear-gradient(180deg, #f0f6fc 0%, #f8fcff 50%, #e8f0f8 100%);
}
```

Tailwind approach:
- Snow surface: `bg-[linear-gradient(180deg,#f0f6fc_0%,#f8fcff_50%,#e8f0f8_100%)]`
- Snow drift highlights: `bg-[radial-gradient(ellipse_120px_40px_at_30%_20%,rgba(255,255,255,0.6)_0%,transparent_70%)]`

### 8) Winter Content Card (foreground)

Clean, crystalline content cards with icy borders and subtle frost effects.

- Frost card on snow: `bg-white/80 backdrop-blur-sm border border-[#b0d4f0]/30 rounded-xl shadow-[0_4px_20px_rgba(176,212,240,0.2)]`
- Glass ice card: `bg-[rgba(248,252,255,0.6)] backdrop-blur-md border border-white/40 rounded-xl`
- Warm cabin card (contrast): `bg-[#6a4a2a] rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.2)]` with warm interior content.

## Color Palette System

### Primary Winter Palette

| Role | Color | Hex | Tailwind |
|------|-------|-----|----------|
| Snow White | Primary surface | `#f8fcff` | `bg-[#f8fcff]` |
| Ice Blue | Accent cool | `#b0d4f0` | `bg-[#b0d4f0]` |
| Pine Dark Green | Deep accent | `#1a3a1a` | `bg-[#1a3a1a]` |
| Icicle Clear | Transparent accent | `#d0e8ff` | `bg-[#d0e8ff]` |
| Sky Winter Pale | Atmosphere | `#c8d8e8` | `bg-[#c8d8e8]` |

### Warm Contrast Palette

| Role | Color | Hex | Tailwind |
|------|-------|-----|----------|
| Cabin Wood | Warm structural | `#6a4a2a` | `bg-[#6a4a2a]` |
| Window Warm | Golden glow | `#ffcc66` | `bg-[#ffcc66]` |
| Smoke Gray-Translucent | Atmospheric | `rgba(180,190,200,0.3)` | `bg-[rgba(180,190,200,0.3)]` |

### Supporting Cool Tones

| Role | Color | Hex | Tailwind |
|------|-------|-----|----------|
| Frost Light | Subtle cool | `#e0ecf4` | `bg-[#e0ecf4]` |
| Deep Ice | Shadow blue | `#8ab4d8` | `bg-[#8ab4d8]` |
| Snow Shadow | Cool gray | `#d0dce8` | `bg-[#d0dce8]` |
| Night Sky | Deep winter | `#1a2840` | `bg-[#1a2840]` |

### Content Colors

| Role | Color | Hex | Tailwind |
|------|-------|-----|----------|
| Text Primary | Deep navy | `#1a2840` | `text-[#1a2840]` |
| Text Secondary | Cool gray | `#4a6080` | `text-[#4a6080]` |
| Card Background | Frost white | `rgba(248,252,255,0.8)` | `bg-[rgba(248,252,255,0.8)]` |
| Card Border | Ice tint | `#b0d4f0/30` | `border-[#b0d4f0]/30` |

Rules: the cool palette dominates at 85%+ of surface area. Warm cabin tones appear only as deliberate contrast accents — the golden window glow, the cabin wood frame. Never let warm tones overtake the winter atmosphere.

## Component Architecture Pattern

1. Winter sky gradient background (upper 60% — pale blue `#c8d8e8` to deep winter `#1a2840` for night scenes).
2. Optional snowfall particle layer (small white dots drifting downward with gentle horizontal sway).
3. Fresh snow surface (white-to-pale-blue gradient at the bottom with subtle drift textures).
4. Snow-covered pine trees (positioned along the snow line at varying sizes for depth).
5. Icicle curtain (hanging from card tops, header edges, or panel overhangs).
6. Frozen lake surface (if applicable — smooth reflective blue-white horizontal band).
7. Cabin element with warm window glow (the emotional anchor — small, warm, intentional).
8. Chimney smoke curl (translucent, animated, rising from the cabin).
9. Snowflake accents (scattered decoratively at varying sizes and opacities).
10. Clean foreground content (cards, text, buttons with crystalline frost styling).
11. Noise texture overlay (optional — SVG `feTurbulence` at `opacity-[0.015]` for snow grain).

## Interaction Rules

- Snowfall particles drift gently (3-8s per cycle, slight horizontal sine wave).
- Snowflakes can have a slow rotation animation (30-60s full rotation) for ambient crystal shimmer.
- Icicles can have a very subtle drip animation (a small opacity pulse at the tip every 4-6s).
- Chimney smoke curls continuously with a slow 6s oscillation.
- Foreground elements use standard interactions (hover, focus, active).
- Hover on frost cards: subtle glow intensification `hover:shadow-[0_8px_30px_rgba(176,212,240,0.3)]`.
- Hover on warm cabin card: glow intensification `hover:shadow-[0_0_30px_8px_rgba(255,204,102,0.4)]`.
- Do not over-animate; the winter scene should feel still and peaceful, with motion as exception.
- Respect `prefers-reduced-motion`: disable all snowfall, snowflake rotation, icicle drip, and smoke animations.

## Reusable Tailwind Tokens

- Sky gradient day: `bg-gradient-to-b from-[#c8d8e8] via-[#d8e4f0] to-[#f0f6fc]`
- Sky gradient night: `bg-gradient-to-b from-[#1a2840] via-[#2a3858] to-[#4a6080]`
- Snow surface: `bg-gradient-to-b from-[#f0f6fc] via-[#f8fcff] to-[#e8f0f8]`
- Icicle: `bg-gradient-to-b from-[#d0e8ff] via-[rgba(208,232,255,0.3)] to-transparent clip-path-[polygon(20%_0%,80%_0%,50%_100%)]`
- Frost card: `bg-white/80 backdrop-blur-sm border border-[#b0d4f0]/30 rounded-xl shadow-[0_4px_20px_rgba(176,212,240,0.2)]`
- Glass ice card: `bg-[rgba(248,252,255,0.6)] backdrop-blur-md border border-white/40 rounded-xl`
- Warm window: `bg-[#ffcc66] shadow-[0_0_20px_4px_rgba(255,204,102,0.6),0_0_40px_8px_rgba(255,204,102,0.3)]`
- Cabin wood: `bg-[#6a4a2a] rounded-sm`
- Snowflake: `opacity-60 text-[#b0d4f0]`
- Smoke: `stroke-[rgba(180,190,200,0.3)] stroke-width-3`
- Text primary: `text-[#1a2840]`, Text secondary: `text-[#4a6080]`

## Quality Checklist (must pass)

- Background uses a winter sky gradient (blue to pale, or deep navy for night scenes).
- Snow surface is present as a white-to-pale-blue gradient at the bottom.
- At least one snow-covered pine tree is present with visible snow caps on branches.
- Icicle elements (if used) have the correct triangular clip-path and transparent-to-frosted gradient.
- Snowflake accents use proper six-fold symmetry (not generic stars).
- Warm cabin window glow is present as a deliberate contrast element if a cabin is in the scene.
- The cool palette dominates at 85%+ of surface area.
- Frost/glass cards have subtle blue-tinted borders and shadows.
- Foreground text has clear contrast against snow and ice backgrounds.
- Animation (if used) is gentle, slow, and sparse — the scene feels still.
- `prefers-reduced-motion` disables all decorative animations.
- Snowflake SVGs have `aria-hidden="true"` for decorative instances.

## Anti-Patterns

- Warm or saturated colors dominating the palette (the scene must feel cold with warmth as exception only).
- Generic star shapes instead of six-fold symmetric snowflakes (snowflakes are hexagonal, not five-pointed).
- Flat white backgrounds without blue undertones (real snow has blue-gray shadows and depth).
- Icicles that are rounded or blunt (icicles are sharp, pointed, crystalline).
- Missing contrast between cold exterior and warm interior (the cabin glow is the emotional heart).
- Heavy, fast snowfall animation (snow falls gently and silently — no blizzard chaos).
- Oversized cabin or tree elements that dominate the scene (they should be modest, cozy, humble).
- Missing atmospheric depth (multiple tree layers at different sizes, foreground/background snow variation).
- Icicles without transparency gradient (solid-colored icicles look wrong — they must fade from frosted to clear).
- Bright or cheerful typography (winter typography should be clean, quiet, and reserved — no playful rounded fonts).
- Neon or electric blues (winter blues are muted, dusty, and pale — never electric or saturated).

## Typography and Density

- Winter Wonderland UI favors clean, geometric sans-serif fonts (Inter, DM Sans, Outfit, or system geometric).
- Primary labels: `text-xl` to `text-4xl`, `font-medium`, `tracking-wide`.
- Body: `text-base` to `text-lg`, `font-normal`, `leading-relaxed`.
- Text color: deep navy (`#1a2840`) on snow backgrounds, warm cream (`#fff5d0`) on dark night backgrounds.
- Keep content density low to moderate; the winter landscape needs stillness and breathing room.
- Generous whitespace reinforces the silence and spaciousness of a snowy scene.
- Avoid decorative or script fonts — winter clarity is geometric and precise, like ice crystals.

## Accessibility Considerations

- Verify text contrast against snow-white and ice-blue backgrounds — light-on-light is a common risk.
- Cards over snow must meet WCAG AA contrast ratio (4.5:1 for body text, 3:1 for large text).
- Animated snowfall, snowflake rotation, icicle drip, and smoke must respect `prefers-reduced-motion`.
- Provide a static fallback for reduced-motion users (all elements visible, no animation).
- Do not rely on blue tint alone to convey interactive state — pair with shape, icon, or text changes.
- Ensure sufficient touch targets for interactive elements within the winter landscape.
- Snowflake decorative elements must have `aria-hidden="true"` to avoid screen reader noise.
- Frost and glass card effects may reduce text readability — verify contrast at all backdrop-blur levels.
- Low-contrast ice-on-ice elements can be invisible to users with low vision — always pair with borders or shadows.
- The warm cabin glow should not flash or pulse rapidly — steady warmth, never strobing.
