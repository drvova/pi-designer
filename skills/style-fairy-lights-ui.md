---
name: fairy-lights-ui
description: Build fairy lights UI components (warm string light ambiance, Edison bulb bokeh, cascading copper wire, evening garden party glow, soft out-of-focus light orbs, festive warmth) with glowing bulb dot patterns, soft bokeh blur, and the cozy magical atmosphere of warm string lights at dusk. Trigger this skill when the user asks for fairy lights design, string lights UI, warm bokeh ambiance, Edison bulb glow, copper wire lights, garden party lighting, dusk glow, festive string lights, or cozy evening light interfaces.
---

# Fairy Lights UI

Use this skill to design and implement warm, atmospheric interfaces inspired by fairy lights and string lights: rows of glowing warm-gold bulbs with soft bokeh backgrounds, cascading copper wire connectors, evening dusk gradients, and the cozy magical glow of a garden party at twilight.

## Non-Negotiable Foundations

- Bulbs must emit warm gold glow via layered box-shadow halos — never flat colored dots.
- Bokeh background is mandatory — large soft out-of-focus warm light circles behind content.
- Copper wire connects bulbs in a cascading string path — visible or implied via subtle line.
- Dusk gradient background transitions from sunset warmth to evening blue/purple.
- All glow effects use warm hues (gold, amber, warm white) — never cool blue or neon.
- Surfaces feel soft, diffused, and dreamlike — hard edges only for content containers.
- The atmosphere is cozy and festive — warm ambient light at twilight.

## Core Material Recipes

### 1) String of Glowing Bulbs

Row of small warm-glowing bulbs connected by copper wire.

```html
<div class="relative flex items-center justify-center gap-6 py-4">
  <!-- Copper wire string -->
  <div class="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#b87333]/40 to-transparent"></div>
  <!-- Bulb 1 -->
  <div class="relative">
    <div class="w-3 h-4 rounded-t-full bg-gradient-to-b from-[#fff0c0] to-[#ffcc66] shadow-[0_0_8px_rgba(255,204,102,0.9),0_0_16px_rgba(255,140,48,0.5),0_0_32px_rgba(255,204,102,0.3)]"></div>
    <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1.5 bg-[#b87333]"></div>
  </div>
  <!-- Bulb 2 -->
  <div class="relative">
    <div class="w-3 h-4 rounded-t-full bg-gradient-to-b from-[#fff0c0] to-[#ffcc66] shadow-[0_0_8px_rgba(255,204,102,0.9),0_0_16px_rgba(255,140,48,0.5),0_0_32px_rgba(255,204,102,0.3)]"></div>
    <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1.5 bg-[#b87333]"></div>
  </div>
  <!-- Bulb 3 -->
  <div class="relative">
    <div class=" w-3 h-4 rounded-t-full bg-gradient-to-b from-[#fff0c0] to-[#ffcc66] shadow-[0_0_8px_rgba(255,204,102,0.9),0_0_16px_rgba(255,140,48,0.5),0_0_32px_rgba(255,204,102,0.3)]"></div>
    <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1.5 bg-[#b87333]"></div>
  </div>
</div>
```

Vary bulb spacing, glow intensity, and vertical position to create a natural cascading string. Some bulbs can be dimmer (use lower opacity or reduced shadow) for realistic variation.

### 2) Bokeh Blur Background

Large soft out-of-focus warm light circles behind content.

```html
<div class="absolute inset-0 overflow-hidden pointer-events-none">
  <!-- Large bokeh orb -->
  <div class="absolute -top-20 -left-10 w-72 h-72 rounded-full bg-[#ffcc66]/15 blur-3xl"></div>
  <!-- Medium bokeh orb -->
  <div class="absolute top-1/3 right-10 w-48 h-48 rounded-full bg-[#ff8c30]/12 blur-2xl"></div>
  <!-- Small bokeh orb -->
  <div class="absolute bottom-10 left-1/4 w-32 h-32 rounded-full bg-[#fff0c0]/20 blur-xl"></div>
  <!-- Distant warm glow -->
  <div class="absolute bottom-0 right-1/4 w-96 h-48 rounded-full bg-[#ffcc66]/8 blur-3xl"></div>
  <!-- Tiny bokeh dots -->
  <div class="absolute top-1/4 left-1/3 w-6 h-6 rounded-full bg-[#fff0c0]/30 blur-md"></div>
  <div class="absolute top-2/3 right-1/3 w-4 h-4 rounded-full bg-[#ff8c30]/25 blur-sm"></div>
</div>
```

Layer multiple bokeh orbs at different sizes, opacities, and blur levels. Warm gold and amber tones only. More orbs at varying depth create richer atmosphere.

### 3) Copper Wire String

Cascading copper wire connecting bulbs across a content area.

```html
<svg class="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1200 200">
  <path d="M0,40 Q150,80 300,50 T600,60 T900,35 T1200,55"
        stroke="#b87333" stroke-width="1" fill="none" opacity="0.4"/>
</svg>
```

Use gentle quadratic curves for natural drape. For a hanging string: `M0,0 Q100,60 200,20 Q300,80 400,30` creates a sagging wire between anchor points.

### 4) Dusk Gradient Background

Sunset-to-evening blue gradient backdrop.

```html
<div class="bg-gradient-to-b from-[#3a1a4a] via-[#2a1a3a] to-[#1a2a4a]">
  <!-- Content -->
</div>
```

For a warmer sunset-to-dusk: `from-[#4a2a1a] via-[#3a1a4a] to-[#1a2a4a]`. For a pure evening sky: `from-[#2a1a4a] to-[#1a2a4a]`. The transition from warm purple to cool blue is the dusk signature.

### 5) Warm Bulb Dot Pattern

Repeating pattern of tiny glowing bulbs for decorative strips or dividers.

```css
.fairy-bulb-pattern {
  background-image:
    radial-gradient(circle at center, #ffcc66 1px, rgba(255,140,48,0.3) 3px, transparent 5px);
  background-size: 24px 24px;
  background-position: 0 0;
}
```

```html
<div class="fairy-bulb-pattern h-2 w-full opacity-70"></div>
```

For denser Edison-bulb style: increase the gradient radius and add a secondary amber halo layer.

### 6) Glowing Bulb Indicator

Single warm bulb used as a status indicator or list bullet.

```html
<div class="flex items-center gap-3">
  <div class="relative w-2.5 h-2.5 rounded-full bg-[#ffcc66] shadow-[0_0_6px_rgba(255,204,102,0.9),0_0_12px_rgba(255,140,48,0.5)]"></div>
  <span class="text-[#fff0c0]">Warm indicator label</span>
</div>
```

Scale up for larger indicators: use `w-4 h-4` with deeper shadow layers. Use amber (`#ff8c30`) for caution/dimmed states.

### 7) Garden Party Card

Floating glass-like card over bokeh background.

- `bg-[#1a1a2a]/40 backdrop-blur-md border border-[#ffcc66]/20 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)]`.
- Inner glow: overlay `bg-gradient-to-b from-[#ffcc66]/5 to-transparent`.
- Top string light accent: place a row of glowing bulbs along the top edge.

### 8) Festive String Light Border

Decorative fairy light border wrapping around a panel edge.

```html
<div class="relative">
  <!-- Bulbs along top edge -->
  <div class="absolute -top-2 left-0 right-0 flex justify-around items-center">
    <div class="w-2 h-2.5 rounded-t-full bg-[#ffcc66] shadow-[0_0_6px_rgba(255,204,102,0.8),0_0_12px_rgba(255,140,48,0.4)]"></div>
    <div class="w-2 h-2.5 rounded-t-full bg-[#ffcc66] shadow-[0_0_6px_rgba(255,204,102,0.8),0_0_12px_rgba(255,140,48,0.4)]"></div>
    <div class="w-2 h-2.5 rounded-t-full bg-[#ffcc66] shadow-[0_0_6px_rgba(255,204,102,0.8),0_0_12px_rgba(255,140,48,0.4)]"></div>
  </div>
  <div class="bg-[#1a1a2a]/40 backdrop-blur-md border border-[#ffcc66]/20 rounded-2xl p-6 pt-8">
    Content here
  </div>
</div>
```

### 9) Fairy Lights Button

Warm glowing call-to-action button.

- `bg-gradient-to-b from-[#ffcc66] to-[#ff8c30] text-[#1a0a04] font-medium px-8 py-3 rounded-full shadow-[0_0_12px_rgba(255,204,102,0.5),0_4px_12px_rgba(255,140,48,0.3)] hover:shadow-[0_0_20px_rgba(255,204,102,0.7),0_4px_16px_rgba(255,140,48,0.5)] hover:scale-105 active:scale-95 transition-all`.

## Color Palette System

| Color | Hex | Material |
|---|---|---|
| Warm Bulb Gold | `#ffcc66` | Primary bulb glow, buttons |
| Deep Amber | `#ff8c30` | Secondary glow, button gradient bottom |
| Bright Bulb | `#fff0c0` | Bulb highlight, bright center |
| Copper Wire | `#b87333` | String connectors, wire |
| Dusk Blue | `#1a2a4a` | Evening background bottom |
| Evening Purple | `#3a1a4a` | Dusk background mid, gradient |
| Dusk Transition | `#2a1a3a` | Background blend zone |
| Bokeh Warm White | `#fff0c0` at low opacity | Out-of-focus orbs |
| Warm Text | `#fff0c0` | Primary text on dark dusk |
| Soft Amber Text | `#ffd8a0` | Secondary text, captions |

Rules: Warm bulb gold and amber dominate all glowing elements. Dusk blue and evening purple form the atmospheric background. Copper wire is subtle and connective. Bokeh warm white appears only as blurred background orbs at low opacity. The palette should feel like a warm garden at twilight — golden bulbs against a deepening purple-blue sky.

## Typography Recommendations

- **Display:** Playfair Display, Cormorant Garamond (elegant evening serif for headers).
- **Body:** Quicksand, Nunito (warm rounded sans-serif for cozy readability).
- **Accents / Labels:** `font-light tracking-wide` for dreamy spacious labels.
- **Bulb Labels:** `text-[#fff0c0] font-light` for soft warm text.
- **Headlines:** `font-serif text-3xl font-light tracking-wide text-[#fff0c0]` for warm glowing headers.
- **Numerals:** Light-weight lining figures for a delicate, festive feel.

## Component Architecture Pattern

```
FairyLights
├── DuskBackground (gradient from evening purple to dusk blue)
│   └── BokehLayer (multiple soft warm orbs at varying blur/size/opacity)
│       └── CopperWireString (SVG curved path connecting bulbs)
│           └── BulbRow (array of warm-glowing bulbs at cascading heights)
│               └── ContentContainer
│                   ├── GardenPartyCard (glassmorphic backdrop-blur card)
│                   │   └── StringLightBorder (bulbs along card edge)
│                   ├── GlowingBulbIndicator (warm dot for list items/status)
│                   └── FairyLightsButton (warm gold glowing CTA)
```

Each layer is composable: bokeh density is adjustable, bulb count scales, wire path can be straight or cascading.

## Interaction Rules

- **Bulb twinkle:** Bulbs gently pulse opacity and glow radius at staggered intervals to simulate real fairy light flicker. Use `animate-pulse` with custom delays per bulb.
- **Bokeh drift:** Background bokeh orbs slowly drift position using `transition-transform duration-[8000ms]` for ambient movement.
- **Bulb hover:** Hovering a bulb intensifies its glow — `shadow-[0_0_16px_rgba(255,204,102,1)]` with `hover:scale-110`.
- **Card hover:** Garden party cards lift slightly and intensify their inner warm glow on hover.
- **Button press:** Fairy lights buttons compress (`active:scale-95`) and intensify glow on press.
- **Scroll parallax:** Bokeh layers move at different speeds on scroll for depth.
- **All transitions** use soft, eased curves (`ease-out`, `ease-in-out`) to maintain the dreamy atmosphere. No sharp or instant transitions.

## Reusable Tailwind Tokens

- Dusk background: `bg-gradient-to-b from-[#3a1a4a] via-[#2a1a3a] to-[#1a2a4a]`.
- Bokeh orb (large): `rounded-full bg-[#ffcc66]/15 blur-3xl`.
- Bokeh orb (medium): `rounded-full bg-[#ff8c30]/12 blur-2xl`.
- Bokeh orb (small): `rounded-full bg-[#fff0c0]/20 blur-xl`.
- Bulb glow: `bg-[#ffcc66] shadow-[0_0_8px_rgba(255,204,102,0.9),0_0_16px_rgba(255,140,48,0.5),0_0_32px_rgba(255,204,102,0.3)]`.
- Bulb body: `rounded-t-full bg-gradient-to-b from-[#fff0c0] to-[#ffcc66]`.
- Copper wire: `bg-gradient-to-r from-transparent via-[#b87333]/40 to-transparent` or SVG path.
- Garden party card: `bg-[#1a1a2a]/40 backdrop-blur-md border border-[#ffcc66]/20 rounded-2xl`.
- Fairy lights button: `bg-gradient-to-b from-[#ffcc66] to-[#ff8c30] text-[#1a0a04] rounded-full shadow-[0_0_12px_rgba(255,204,102,0.5)]`.
- Warm text: `text-[#fff0c0]`.
- Bulb indicator: `rounded-full bg-[#ffcc66] shadow-[0_0_6px_rgba(255,204,102,0.9),0_0_12px_rgba(255,140,48,0.5)]`.
- Bulb pattern strip: `radial-gradient(circle at center, #ffcc66 1px, transparent 5px)` at `background-size: 24px 24px`.

## Quality Checklist

- At least one string of glowing warm bulbs with layered glow shadows.
- Bokeh blur background with multiple warm orbs at different sizes and depths.
- Copper wire connecting bulbs (visible path or implied gradient line).
- Dusk gradient background (evening purple to dusk blue transition).
- All glow effects use warm hues only (gold, amber, warm white).
- Garden party card uses glassmorphic backdrop-blur with warm border tint.
- Typography combines elegant serif headers with warm rounded body text.
- Bulbs have varied intensity/position for natural string light feel.
- Everything feels soft, diffused, and dreamlike — no harsh edges on atmosphere.
- Bulb glow uses three-layer shadow (tight + medium + wide) for realistic light falloff.
- The aesthetic reads as cozy evening garden party / fairy lights at dusk.
- Warm text is readable on dark dusk background.
- Content containers have subtle warm inner glow overlays.
- Festive warmth without being garish or neon.

## Anti-Patterns

- Missing bokeh background (bokeh is the defining atmospheric layer).
- Flat colored dots instead of glowing bulbs (the layered glow IS the signature).
- Cool blue or neon glow (fairy lights are warm gold/amber only).
- Hard sharp edges on atmospheric elements (everything should be soft and diffused).
- Missing copper wire connection (bulbs need to feel strung together).
- Bright pure-white backgrounds (background is always dusk gradient).
- Single flat glow layer (need at least three shadow layers for realistic light falloff).
- Uniform bulb brightness (real strings have natural variation and dimmer bulbs).
- Modern corporate sans-serif typography (needs elegant serif + warm rounded sans).
- Neon or fluorescent colors (this is incandescent warm bulb glow).
- Harsh instant transitions (all motion should be soft and eased).
- Missing dusk gradient (flat dark backgrounds lose the twilight atmosphere).
- Garish oversaturated glow (warmth should be cozy, not blinding).
- Single static bulb with no twinkle or variation (fairy lights feel alive).

## Accessibility Considerations

- Warm text (`#fff0c0`) on dusk blue (`#1a2a4a`) provides excellent contrast (WCAG AAA for body text).
- Bulb twinkle and bokeh drift animations must respect `prefers-reduced-motion` — reduce to steady glow and static orbs.
- Glowing bulb indicators must not be the sole indicator — pair with text labels or aria descriptions.
- Focus states: `focus:ring-2 focus:ring-[#ffcc66]/50` (warm gold ring).
- Bokeh background is decorative (`pointer-events-none`, `aria-hidden="true"`) to avoid confusing screen readers.
- Garden party card translucent surfaces must maintain adequate text contrast despite backdrop-blur.
- Touch targets for bulbs used as interactive elements must be adequate (minimum 44x44px clickable area).
- Button glow effects should not obscure text legibility — text sits above glow layers.
- The warm gradient overlays should not reduce text contrast on dusk backgrounds.
- `prefers-reduced-motion` disables bulb twinkle, bokeh drift, and scale animations.
