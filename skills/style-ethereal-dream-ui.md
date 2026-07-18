---
name: ethereal-dream-ui
description: Build ethereal dream UI components (floating mist, soft glow aura, translucent layers, feather drift, moonbeam, cloud bank, spirit light) with soft luminous surfaces, translucent layering, and the weightless floating quality of a dream world. Trigger this skill when the user asks for dream UI, ethereal effects, floating mist, soft glow, translucent surfaces, moonbeam accents, spirit light, cloud bank shapes, feather drift, luminous aura, dreamlike interfaces, weightless design, or otherworldly atmospheric components.
---

# Ethereal Dream UI

Use this skill to design and implement atmospheric interfaces that capture the weightless, luminous quality of a dream world: floating mist layers drifting slowly across translucent surfaces, soft radial glow auras radiating from elements like distant spirit light, diagonal moonbeam shafts cutting through cloud banks, feather-drift particles spiraling downward in slow rotation, and a palette of dream whites, spirit blues, and mist pinks that glow from within. The mood is weightless, luminous, and gently surreal -- the world unmoored from gravity, bathed in soft inner light.

## Non-Negotiable Foundations

- Ethereal Dream UI is glow-driven. The entire visual language lives in radiant light emanating from surfaces and elements. Depth and hierarchy are communicated through radial gradient auras and opacity layering, NOT through drop shadows or heavy borders.
- Floating mist is the ambient substrate: slow-drifting translucent layers (20-40 second animation cycles) positioned at different vertical depths, each with heavy blur (30-60px) and low opacity (0.15-0.4). Mist layers move at different speeds to create parallax depth.
- Soft glow aura is the primary accent mechanic: every interactive or highlighted element gets a radial gradient halo (120-240px diameter) in a theme color, positioned behind the element with 40-60px blur. The aura should feel like light emanating from within, not light shining on a surface.
- Translucent layered surfaces are the content containers: multiple overlapping divs at different opacity levels (0.1, 0.25, 0.4, 0.6) with backdrop-blur, creating the impression of gauze-like dream layers. Content sits on the most opaque layer; decorative layers float behind it.
- Feather drift animation is a decorative particle effect: thin elongated shapes (2-4px wide, 12-20px tall) that drift downward with gentle rotation (360 degrees over 8-15 seconds) and horizontal sway. They are ambient, never blocking content.
- Moonbeam accent is a diagonal light shaft: a rotated (30-45 degrees) linear gradient strip (40-120px wide) that fades from translucent white to transparent, suggesting a beam of moonlight cutting through the dream space. Used as a compositional accent, never as a primary element.
- Cloud bank is a soft, rounded, white shape with heavy blur (20-40px) and low opacity (0.2-0.5). It suggests the billowing softness of clouds without hard edges. Positioned at section boundaries or compositional edges.
- Spirit light is a concentrated point glow: a small (20-40px) radial gradient circle that pulses gently (3-5 second cycle) at low opacity. It suggests a distant beacon or will-o'-the-wisp. Maximum 3 per viewport.
- The color palette is luminous and desaturated: dream whites with blue or pink undertones, spirit blues, moonbeam silvers, mist pinks, cloud creams. True black is never used; the darkest tone is a soft shadow lavender. All colors should feel like they emit faint light.
- All mist, feather, spirit light, and ambient animations MUST respect `prefers-reduced-motion`. Provide a static luminous composition as the fallback state.

## Core Material Recipes

### 1) Floating Mist Layer System (the ambient substrate)

Stacked translucent gradient overlays that drift at different speeds, creating volumetric dream haze.

```css
.mist-layer-back {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(160, 192, 240, 0.15) 0%,
    rgba(160, 192, 240, 0.08) 40%,
    rgba(208, 216, 232, 0.05) 70%,
    transparent 100%
  );
  filter: blur(50px);
  animation: dream-mist-back 35s ease-in-out infinite alternate;
}
.mist-layer-mid {
  position: absolute;
  bottom: 10%;
  left: -15%;
  right: -15%;
  height: 50%;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(240, 208, 224, 0.12) 30%,
    rgba(248, 244, 255, 0.2) 60%,
    rgba(240, 240, 255, 0.3) 100%
  );
  filter: blur(40px);
  animation: dream-mist-mid 28s ease-in-out infinite alternate;
}
.mist-layer-front {
  position: absolute;
  bottom: 0;
  left: -8%;
  right: -8%;
  height: 35%;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(248, 244, 255, 0.15) 40%,
    rgba(240, 240, 255, 0.35) 100%
  );
  filter: blur(25px);
  animation: dream-mist-front 22s ease-in-out infinite alternate;
}
@keyframes dream-mist-back {
  0% { transform: translateX(-3%) translateY(0); }
  100% { transform: translateX(3%) translateY(-2%); }
}
@keyframes dream-mist-mid {
  0% { transform: translateX(-5%) translateY(1%); }
  100% { transform: translateX(5%) translateY(-1%); }
}
@keyframes dream-mist-front {
  0% { transform: translateX(-2%) translateY(2%); }
  100% { transform: translateX(4%) translateY(-1%); }
}
```

Tailwind equivalent for the back mist layer:
- `absolute inset-0 bg-gradient-to-b from-[rgba(160,192,240,0.15)] via-[rgba(160,192,240,0.08)] to-transparent blur-[50px] animate-[dream-mist-back_35s_ease-in-out_infinite_alternate]`

Tailwind for mid mist layer:
- `absolute bottom-[10%] -left-[15%] -right-[15%] h-[50%] bg-gradient-to-b from-transparent via-[rgba(240,208,224,0.12)] to-[rgba(240,240,255,0.3)] blur-[40px] animate-[dream-mist-mid_28s_ease-in-out_infinite_alternate]`

Tailwind for front mist layer:
- `absolute bottom-0 -left-[8%] -right-[8%] h-[35%] bg-gradient-to-b from-transparent via-[rgba(248,244,255,0.15)] to-[rgba(240,240,255,0.35)] blur-[25px] animate-[dream-mist-front_22s_ease-in-out_infinite_alternate]`

### 2) Soft Glow Aura (element illumination)

Radial gradient halos behind interactive or highlighted elements. The core accent mechanic.

```css
.glow-aura {
  position: absolute;
  inset: -60px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(160, 192, 240, 0.25) 0%,
    rgba(160, 192, 240, 0.08) 40%,
    transparent 70%
  );
  filter: blur(40px);
  pointer-events: none;
  z-index: -1;
}
```

Tailwind glow aura variants:
- Spirit blue aura: `relative before:absolute before:-inset-[60px] before:rounded-full before:bg-[radial-gradient(circle_at_50%_50%,rgba(160,192,240,0.25)_0%,rgba(160,192,240,0.08)_40%,transparent_70%)] before:blur-[40px] before:pointer-events-none before:z-[-1]`
- Mist pink aura: `relative before:absolute before:-inset-[60px] before:rounded-full before:bg-[radial-gradient(circle_at_50%_50%,rgba(240,208,224,0.25)_0%,rgba(240,208,224,0.08)_40%,transparent_70%)] before:blur-[40px] before:pointer-events-none before:z-[-1]`
- Aura gold aura: `relative before:absolute before:-inset-[60px] before:rounded-full before:bg-[radial-gradient(circle_at_50%_50%,rgba(240,224,160,0.25)_0%,rgba(240,224,160,0.08)_40%,transparent_70%)] before:blur-[40px] before:pointer-events-none before:z-[-1]`

Inline SVG approach for precise aura control (recommended for key elements):

```html
<div class="relative inline-block">
  <svg class="absolute -inset-[60px] w-[calc(100%+120px)] h-[calc(100%+120px)] pointer-events-none" aria-hidden="true">
    <defs>
      <radialGradient id="spirit-blue-aura" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="rgba(160,192,240,0.3)"/>
        <stop offset="40%" stop-color="rgba(160,192,240,0.08)"/>
        <stop offset="100%" stop-color="rgba(160,192,240,0)"/>
      </radialGradient>
      <filter id="aura-blur">
        <feGaussianBlur stdDeviation="20"/>
      </filter>
    </defs>
    <ellipse cx="50%" cy="50%" rx="45%" ry="45%" fill="url(#spirit-blue-aura)" filter="url(#aura-blur)"/>
  </svg>
  <!-- Element goes here -->
</div>
```

### 3) Translucent Layered Surfaces (content containers)

Multiple overlapping translucent divs creating gauze-like dream depth. Content sits on the most opaque layer.

```css
.dream-surface-back {
  position: absolute;
  inset: -20px;
  background: rgba(240, 240, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.15);
}
.dream-surface-mid {
  position: absolute;
  inset: -10px;
  background: rgba(240, 240, 255, 0.2);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.dream-surface-front {
  position: relative;
  background: rgba(248, 244, 255, 0.45);
  backdrop-filter: blur(16px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  padding: 24px;
}
```

Tailwind equivalent:
- Back surface: `absolute -inset-5 bg-[rgba(240,240,255,0.1)] backdrop-blur-[8px] rounded-3xl border border-white/15`
- Mid surface: `absolute -inset-2.5 bg-[rgba(240,240,255,0.2)] backdrop-blur-[12px] rounded-[20px] border border-white/20`
- Front surface: `relative bg-[rgba(248,244,255,0.45)] backdrop-blur-[16px] rounded-2xl border border-white/35 p-6`

Full stack Tailwind pattern (wrapper):
- `relative p-5`: wrapper for the surface stack
- Inside wrapper, three nested divs with back/mid/front classes above

### 4) Feather Drift Animation (ambient particles)

Thin elongated shapes drifting downward with gentle rotation and horizontal sway.

```css
.feather {
  position: absolute;
  width: 3px;
  height: 16px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.6),
    rgba(208, 216, 232, 0.3)
  );
  border-radius: 50%;
  filter: blur(0.5px);
  animation: feather-fall 12s ease-in-out infinite;
}
@keyframes feather-fall {
  0% {
    transform: translateY(-20px) translateX(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  50% {
    transform: translateY(50vh) translateX(30px) rotate(180deg);
    opacity: 0.4;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    transform: translateY(100vh) translateX(-10px) rotate(360deg);
    opacity: 0;
  }
}
```

Tailwind approach for feather particles:
- Base feather: `absolute w-[3px] h-4 bg-gradient-to-b from-white/60 to-[rgba(208,216,232,0.3)] rounded-full blur-[0.5px]`
- Feather 1: add `left-[15%] animate-[feather-fall_12s_ease-in-out_infinite]`
- Feather 2: add `left-[45%] animate-[feather-fall_15s_ease-in-out_infinite] animation-delay-[-4s]`
- Feather 3: add `left-[75%] animate-[feather-fall_10s_ease-in-out_infinite] animation-delay-[-7s]`
- Feather 4: add `left-[30%] animate-[feather-fall_14s_ease-in-out_infinite] animation-delay-[-2s]`
- Feather 5: add `left-[60%] animate-[feather-fall_11s_ease-in-out_infinite] animation-delay-[-9s]`

### 5) Moonbeam Accent (diagonal light shaft)

A rotated linear gradient strip suggesting a beam of moonlight cutting through the dream space.

```css
.moonbeam {
  position: absolute;
  width: 80px;
  height: 200%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(208, 216, 232, 0.12) 20%,
    rgba(240, 240, 255, 0.2) 50%,
    rgba(208, 216, 232, 0.12) 80%,
    transparent 100%
  );
  transform: rotate(-35deg);
  filter: blur(15px);
  pointer-events: none;
}
```

Tailwind moonbeam variants:
- Narrow beam: `absolute w-20 h-[200%] bg-gradient-to-r from-transparent via-[rgba(240,240,255,0.2)] to-transparent rotate-[-35deg] blur-[15px] pointer-events-none`
- Wide beam: `absolute w-[120px] h-[200%] bg-gradient-to-r from-transparent via-[rgba(208,216,232,0.12)] to-transparent rotate-[-30deg] blur-[25px] pointer-events-none`
- Soft beam: `absolute w-16 h-[200%] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.15)] to-transparent rotate-[-40deg] blur-[20px] pointer-events-none`

Positioning tips:
- Place beams at 20-40% from the left or right edge, extending from top to bottom of the section
- Maximum 2 moonbeam accents per viewport section
- Beams should pass behind content, never in front of interactive elements
- Use `overflow-hidden` on the parent to clip beam ends cleanly

### 6) Cloud Bank (soft rounded shapes)

Soft, blurred, white rounded shapes suggesting the billowing softness of clouds.

```css
.cloud-bank {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(
    ellipse at 50% 50%,
    rgba(248, 244, 255, 0.4) 0%,
    rgba(240, 240, 255, 0.15) 50%,
    transparent 70%
  );
  filter: blur(30px);
}
```

Tailwind cloud bank variants:
- Large cloud: `absolute w-[400px] h-[160px] rounded-full bg-[radial-gradient(ellipse_at_50%_50%,rgba(248,244,255,0.4)_0%,rgba(240,240,255,0.15)_50%,transparent_70%)] blur-[30px]`
- Small cloud: `absolute w-[200px] h-[80px] rounded-full bg-[radial-gradient(ellipse_at_50%_50%,rgba(248,244,255,0.3)_0%,rgba(240,240,255,0.1)_50%,transparent_70%)] blur-[25px]`
- Wispy cloud: `absolute w-[300px] h-[60px] rounded-full bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,255,255,0.2)_0%,rgba(240,240,255,0.05)_60%,transparent_80%)] blur-[40px]`

SVG cloud cluster for more control:

```html
<svg viewBox="0 0 500 200" class="absolute bottom-[5%] left-[10%] w-[500px] h-[200px] opacity-40" aria-hidden="true">
  <defs>
    <filter id="cloud-blur">
      <feGaussianBlur stdDeviation="15"/>
    </filter>
  </defs>
  <ellipse cx="250" cy="120" rx="180" ry="60" fill="rgba(248,244,255,0.4)" filter="url(#cloud-blur)"/>
  <ellipse cx="180" cy="100" rx="120" ry="50" fill="rgba(240,240,255,0.3)" filter="url(#cloud-blur)"/>
  <ellipse cx="340" cy="110" rx="100" ry="45" fill="rgba(248,244,255,0.25)" filter="url(#cloud-blur)"/>
</svg>
```

### 7) Spirit Light (ethereal point glow)

Concentrated radial gradient points that pulse gently, suggesting distant beacons or will-o'-the-wisps.

```css
.spirit-light {
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(160, 192, 240, 0.8) 0%,
    rgba(160, 192, 240, 0.3) 30%,
    rgba(160, 192, 240, 0.05) 60%,
    transparent 100%
  );
  filter: blur(4px);
  animation: spirit-pulse 4s ease-in-out infinite;
}
@keyframes spirit-pulse {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.3); }
}
```

Tailwind spirit light variants:
- Blue spirit: `absolute w-6 h-6 rounded-full bg-[radial-gradient(circle,rgba(160,192,240,0.8)_0%,rgba(160,192,240,0.3)_30%,transparent_60%)] blur-[4px] animate-[spirit-pulse_4s_ease-in-out_infinite]`
- Pink spirit: `absolute w-6 h-6 rounded-full bg-[radial-gradient(circle,rgba(240,208,224,0.8)_0%,rgba(240,208,224,0.3)_30%,transparent_60%)] blur-[4px] animate-[spirit-pulse_5s_ease-in-out_infinite] animation-delay-[-1.5s]`
- Gold spirit: `absolute w-5 h-5 rounded-full bg-[radial-gradient(circle,rgba(240,224,160,0.8)_0%,rgba(240,224,160,0.3)_30%,transparent_60%)] blur-[3px] animate-[spirit-pulse_3.5s_ease-in-out_infinite] animation-delay-[-2s]`

Maximum 3 spirit lights visible per viewport. Vary position, size (16-32px), color, and animation timing to avoid repetition.

### 8) Dream Glass Card (foreground content)

Cards that feel like objects floating in dream space -- translucent, luminous, gently layered.

- Dream glass (standard): `bg-[rgba(248,244,255,0.35)] backdrop-blur-[16px] rounded-2xl border border-white/30 shadow-[0_4px_24px_rgba(160,192,240,0.1)]`
- Deep dream glass (more translucent): `bg-[rgba(240,240,255,0.2)] backdrop-blur-[20px] rounded-2xl border border-white/20 shadow-[0_2px_16px_rgba(160,192,240,0.06)]`
- Luminous card (with glow aura): combine dream glass with a `before:` pseudo-element aura -- `bg-[rgba(248,244,255,0.4)] backdrop-blur-[14px] rounded-2xl border border-white/35 relative before:absolute before:-inset-[40px] before:rounded-[32px] before:bg-[radial-gradient(circle,rgba(160,192,240,0.12)_0%,transparent_70%)] before:blur-[30px] before:pointer-events-none before:z-[-1]`
- Solid dream card: `bg-[#f0f0ff]/70 backdrop-blur-sm rounded-2xl shadow-[0_2px_12px_rgba(160,192,240,0.08)] border border-[rgba(160,192,240,0.15)]`

### 9) Translucent Button (interactive element)

Buttons that glow and breathe within the dream space.

- Primary dream button: `bg-[rgba(160,192,240,0.3)] hover:bg-[rgba(160,192,240,0.45)] backdrop-blur-md text-[#3a4a6a] font-medium rounded-xl border border-[rgba(160,192,240,0.3)] hover:border-[rgba(160,192,240,0.5)] transition-all duration-300 shadow-[0_0_20px_rgba(160,192,240,0.1)] hover:shadow-[0_0_30px_rgba(160,192,240,0.2)]`
- Secondary dream button: `bg-white/15 hover:bg-white/25 backdrop-blur-md text-[#4a5a7a] font-medium rounded-xl border border-white/25 hover:border-white/40 transition-all duration-300`
- Ghost dream button: `bg-transparent hover:bg-white/10 text-[#6a7a9a] font-medium rounded-xl border border-transparent hover:border-white/20 transition-all duration-300`

## Color Palette System

### Primary Dream Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Dream White | `#f0f0ff` | Primary background, base surface, fog mist |
| Spirit Blue | `#a0c0f0` | Glow auras, primary accent, spirit lights |
| Moonbeam Silver | `#d0d8e8` | Secondary surfaces, subtle borders, beam tints |
| Mist Pink | `#f0d0e0` | Warm accent, secondary aura, feminine elements |
| Cloud Cream | `#f8f4ff` | Card backgrounds, elevated surfaces, cloud fills |
| Aura Gold | `#f0e0a0` | Tertiary accent, highlight dots, warmth accents |
| Shadow Lavender | `#c0b0d0` | Deep accents, shadow tint, structural lines |
| Night Soft | `#1a1a2a` | Text on light surfaces, deepest contrast |

### Glow Aura Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Aura Spirit Blue | `rgba(160, 192, 240, 0.25)` | Primary glow, interactive element halos |
| Aura Mist Pink | `rgba(240, 208, 224, 0.25)` | Secondary glow, warm accent halos |
| Aura Gold | `rgba(240, 224, 160, 0.25)` | Tertiary glow, highlight halos |
| Aura Lavender | `rgba(192, 176, 208, 0.2)` | Subtle glow, decorative element halos |
| Aura White | `rgba(255, 255, 255, 0.3)` | Pure light glow, spirit light core |

### Surface Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Surface Dream | `rgba(248, 244, 255, 0.45)` | Primary content surface, card front |
| Surface Mist | `rgba(240, 240, 255, 0.2)` | Secondary surface, card mid-layer |
| Surface Gauze | `rgba(240, 240, 255, 0.1)` | Decorative surface, card back-layer |
| Border Dream | `rgba(255, 255, 255, 0.35)` | Primary border, card edges |
| Border Mist | `rgba(255, 255, 255, 0.15)` | Subtle border, secondary edges |
| Shadow Glow | `rgba(160, 192, 240, 0.1)` | Card shadows, elevation glow |

### Text Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Text Night | `#1a1a2a` | Primary text, headings |
| Text Deep | `#3a4a6a` | Secondary text, body copy |
| Text Mist | `#6a7a9a` | Tertiary text, captions, hints |
| Text Ghost | `#9aa0b8` | Quarternary text, ambient labels |
| Text Glow | `#a0c0f0` | Accent text, links, interactive labels |

Rules: dream whites and soft blues dominate (55-65% of visible area). Pinks and golds appear as warm accents (10-15%). Lavender and silver fill structural roles (15-20%). Night soft appears only in text for contrast (5-10%). Every color should feel like it could emit faint light -- avoid fully opaque, matte appearances.

## Typography Recommendations

- Headings: `text-2xl` to `text-4xl`, `font-light` or `font-normal`, `tracking-wide`, `text-[#1a1a2a]` -- light weight matches the weightless atmosphere. The text should feel like it floats.
- Body: `text-base` to `text-lg`, `font-normal`, `text-[#3a4a6a]`, `leading-relaxed` -- readable against translucent surfaces.
- Caption/small: `text-sm`, `text-[#6a7a9a]` -- muted, receding into the dream haze.
- Accent text: `text-[#a0c0f0] font-medium` -- spirit blue for links, interactive labels, and emphasis.
- Ambient/decorative text: `text-[#9aa0b8] opacity-50` -- barely there, like text remembered from a dream.
- Recommended fonts: Inter Light/Regular, Outfit, Plus Jakarta Sans, or any geometric sans-serif that feels clean and weightless at lighter weights.
- AVOID bold/black font weights -- they ground the interface too heavily. Maximum weight for headings is `font-medium` (500).
- Letter spacing: `tracking-wide` or `tracking-wider` on headings adds air and ethereal quality.
- Line height: `leading-loose` (1.75) on body text for breathing room and a sense of floating.
- Text over dream surfaces: add subtle `text-shadow: 0 0 20px rgba(160,192,240,0.15)` via `drop-shadow-[0_0_20px_rgba(160,192,240,0.15)]` to blend text with the luminous atmosphere.
- Drop cap (optional for editorial): first letter at `text-5xl font-light text-[#a0c0f0]` to create a dreamlike entrance point.

## Component Architecture Pattern

1. Dream white background (the base -- soft, luminous, #f0f0ff or gradient to cloud cream).
2. Moonbeam accents (2-3 diagonal light shafts at varying positions, behind content).
3. Cloud bank shapes (soft blurred ellipses at compositional edges and section boundaries).
4. Floating mist layer back (full-width gradient, slow drift, highest position in mist stack).
5. Spirit light points (2-3 gentle pulsing glows at scattered positions).
6. Feather drift particles (5-7 thin shapes drifting downward with rotation).
7. Translucent layered surfaces (gauze-like overlapping containers at 3 opacity levels).
8. Content area with dream glass cards (most opaque layer, contains actual content).
9. Floating mist layer mid (rising from bottom, medium drift speed).
10. Translucent buttons with glow auras (interactive elements with radial halos).
11. Floating mist layer front (heaviest blur, closest to viewer).
12. Moonbeam accent pass-through (one beam overlapping content area for depth).
13. Spirit light foreground accent (one small pulse near content for liveliness).

## Interaction Rules

- Floating mist layers drift slowly and continuously -- no user interaction needed.
- Card hover: glow aura intensifies and surface becomes slightly more opaque -- `hover:bg-[rgba(248,244,255,0.55)] hover:shadow-[0_8px_40px_rgba(160,192,240,0.15)]` over 400ms ease. Dream UI is weightless; interactions should feel like gentle pressure on air.
- Button hover: aura expands and surface brightens -- `hover:bg-[rgba(160,192,240,0.45)] hover:shadow-[0_0_30px_rgba(160,192,240,0.2)]` over 300ms ease.
- Button click: brief scale-down -- `active:scale-[0.97]` over 100ms, then release. Feels like pressing into soft mist.
- Card entrance: fade-in with upward drift -- `animate-[dream-rise_0.6s_ease-out]` where `dream-rise` goes from `opacity:0; transform:translateY(12px)` to `opacity:1; transform:translateY(0)`.
- Feather drift particles are purely decorative -- no interaction.
- Spirit lights are purely decorative -- no interaction, but they should be positioned to avoid overlapping interactive elements.
- All animations respect `prefers-reduced-motion: reduce` -- freeze mist, disable feather drift, stop spirit pulse, keep moonbeams static.
- Focus indicators: `focus-visible:ring-2 focus-visible:ring-[#a0c0f0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f0f0ff]` -- luminous blue ring on dream white offset.
- Scroll behavior: as user scrolls, mist layers can shift opacity slightly to create a sense of drifting through dream space (optional, subtle 10-15% opacity range).
- Modal/overlay: dream glass overlay with heavier blur -- `bg-[rgba(240,240,255,0.5)] backdrop-blur-[24px]` covering the viewport.

## Reusable Tailwind Tokens

- Dream base: `bg-[#f0f0ff]` or `bg-gradient-to-b from-[#f0f0ff] to-[#f8f4ff]`
- Moonbeam narrow: `absolute w-20 h-[200%] bg-gradient-to-r from-transparent via-[rgba(240,240,255,0.2)] to-transparent rotate-[-35deg] blur-[15px] pointer-events-none`
- Cloud bank large: `absolute w-[400px] h-[160px] rounded-full bg-[radial-gradient(ellipse_at_50%_50%,rgba(248,244,255,0.4)_0%,transparent_70%)] blur-[30px]`
- Dream glass card: `bg-[rgba(248,244,255,0.35)] backdrop-blur-[16px] rounded-2xl border border-white/30 shadow-[0_4px_24px_rgba(160,192,240,0.1)]`
- Deep dream glass: `bg-[rgba(240,240,255,0.2)] backdrop-blur-[20px] rounded-2xl border border-white/20`
- Solid dream card: `bg-[#f0f0ff]/70 backdrop-blur-sm rounded-2xl border border-[rgba(160,192,240,0.15)]`
- Spirit light: `absolute w-6 h-6 rounded-full bg-[radial-gradient(circle,rgba(160,192,240,0.8)_0%,transparent_60%)] blur-[4px] animate-[spirit-pulse_4s_ease-in-out_infinite]`
- Feather particle: `absolute w-[3px] h-4 bg-gradient-to-b from-white/60 to-[rgba(208,216,232,0.3)] rounded-full blur-[0.5px]`
- Text night: `text-[#1a1a2a]`
- Text deep: `text-[#3a4a6a]`
- Text mist: `text-[#6a7a9a]`
- Text ghost: `text-[#9aa0b8]`
- Text spirit: `text-[#a0c0f0]`
- Text over dream surface: `text-[#1a1a2a] drop-shadow-[0_0_20px_rgba(160,192,240,0.15)]`
- Button primary: `bg-[rgba(160,192,240,0.3)] hover:bg-[rgba(160,192,240,0.45)] backdrop-blur-md text-[#3a4a6a] font-medium rounded-xl border border-[rgba(160,192,240,0.3)] hover:border-[rgba(160,192,240,0.5)] transition-all duration-300 shadow-[0_0_20px_rgba(160,192,240,0.1)] hover:shadow-[0_0_30px_rgba(160,192,240,0.2)]`
- Button secondary: `bg-white/15 hover:bg-white/25 backdrop-blur-md text-[#4a5a7a] font-medium rounded-xl border border-white/25 hover:border-white/40 transition-all duration-300`
- Glow aura spirit: `before:absolute before:-inset-[60px] before:rounded-full before:bg-[radial-gradient(circle,rgba(160,192,240,0.25)_0%,transparent_70%)] before:blur-[40px] before:pointer-events-none before:z-[-1]`
- Focus ring: `focus-visible:ring-2 focus-visible:ring-[#a0c0f0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f0f0ff]`
- Mist layer base: `absolute inset-0 bg-gradient-to-b from-[rgba(160,192,240,0.15)] via-[rgba(160,192,240,0.08)] to-transparent blur-[50px]`

## Quality Checklist (must pass)

- Background uses luminous, desaturated colors (#f0f0ff range). No bright or saturated backgrounds.
- Floating mist layers are stacked (minimum 3) at different positions, opacities, and drift speeds for parallax depth.
- Glow auras exist behind every interactive or highlighted element. Auras are radial gradients, not box-shadows.
- Translucent layered surfaces use 2-3 opacity levels for gauze-like depth. Content sits on the most opaque layer.
- Moonbeam accents are diagonal, soft-edged (15-25px blur), and limited to 2-3 per viewport section.
- Cloud bank shapes use radial gradients with 25-40px blur. No hard edges on any cloud element.
- Spirit lights pulse gently (3-5 second cycles) at low opacity. Maximum 3 visible per viewport.
- Feather drift particles are thin (2-4px), tall (12-20px), and drift slowly (8-15 second cycles).
- Typography uses light to normal font weights. No bold headings. Atmosphere is weightless.
- Colors are luminous and desaturated. The palette reads as soft, light-emitting surfaces.
- Dream glass cards use backdrop-blur (14-20px) and translucent backgrounds (0.2-0.45 opacity).
- Buttons have glow aura effects that intensify on hover.
- `prefers-reduced-motion` disables all mist drift, feather fall, spirit pulse, and ambient animations.
- Content remains readable over all translucent layers -- test text contrast against every opacity combination.
- No element uses fully opaque, matte coloring -- everything has a hint of translucency or luminosity.

## Anti-Patterns

- Bright, saturated colors (dream UI is luminous and desaturated -- neon or vivid hues break the ethereal mood).
- Bold or heavy font weights (too grounding for the weightless atmosphere -- keep to light/normal/medium maximum).
- Hard-edged shapes (dreams are soft -- all shapes should have blur, rounded corners, or gradient masks).
- Fast animations (dream movement is slow and floating -- anything under 8 seconds feels rushed).
- Drop shadows as primary depth mechanic (dream depth comes from glow auras and opacity layering, not shadows).
- Fully opaque backgrounds on cards (dream surfaces must be translucent -- fully opaque is a different design).
- More than 3 spirit lights visible at once (they lose their ethereal quality when crowded).
- Moonbeam accents in front of interactive content (beams pass behind, never obstructing interaction).
- Pure white (#ffffff) as a surface color (too stark -- use dream white #f0f0ff with blue/pink undertones).
- Dark backgrounds (dream UI is light-dominant -- dark themes invert the luminous quality).
- Sharp corners on any element (dreams have no hard edges -- minimum border-radius 12px for cards, 8px for buttons).
- Using glow auras as attention-demanding indicators (auras are ambient, not urgent -- use color or text for urgency).
- Feather particles that overlap or obscure content (particles are ambient decoration, positioned away from interactive zones).
- Box-shadow as the primary card depth mechanism (use glow aura pseudo-elements instead for the dream aesthetic).
- Text directly on top of moonbeam accents (beams can reduce text legibility -- offset content from beam paths).
- Symmetrical or rigid grid layouts (dream compositions should feel organic and asymmetric).

## Accessibility Considerations

- All mist, feather, spirit light, and ambient animations must respect `prefers-reduced-motion: reduce`. Provide a static luminous composition as fallback with no drift, pulse, or rotation.
- Text contrast must be verified against the full range of translucent surface opacity states. Translucent layers change the effective background color -- test at every overlay combination. Minimum WCAG AA contrast ratio of 4.5:1 for body text.
- Moonbeam, cloud bank, spirit light, and feather elements must have `aria-hidden="true"` since they are decorative background elements.
- Focus indicators must be visible against luminous backgrounds. Use spirit blue (#a0c0f0) rings with white offset for maximum visibility.
- Do not rely on glow color alone to convey meaning -- spirit blue aura, mist pink aura, and aura gold must be paired with text labels or icons when indicating state.
- Screen reader users experience the same content hierarchy without dream effects. Dream atmosphere is purely visual.
- Test with Windows High Contrast Mode -- translucent surfaces may become invisible, so content structure and text must be self-sufficient without backdrop-blur or opacity tricks.
- Minimum touch target size of 44x44px for interactive elements -- translucent buttons can feel imprecise; ensure adequate padding.
- Dream glass cards with `backdrop-blur` may cause performance issues on low-end devices -- provide a solid `bg-[#f0f0ff]/90` fallback card style.
- Ensure `z-index` stacking allows keyboard focus to reach all interactive elements above decorative layers (mist, moonbeams, clouds).
- Color contrast for spirit light status indicators must meet 3:1 minimum against the background -- supplement with text or shape differentiation.
- Translucent button states (default, hover, focus, active) must all maintain sufficient contrast for text readability.
- Feather drift and mist animations should not trigger vestibular disorders -- keep motion amplitude small (under 5% of viewport) and speed slow (over 8 seconds per cycle).
