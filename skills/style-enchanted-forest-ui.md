---
name: enchanted-forest-ui
description: Build enchanted forest UI components (fairy light, ancient tree, mushroom ring, firefly, mossy stone, mystical fog, glowing rune) with magical forest elements, bioluminescent accents, and the wonder of an enchanted woodland. Trigger this skill when the user asks for enchanted forest UI, fairy light design, magical woodland, bioluminescent interface, firefly particles, mushroom ring, ancient tree bark, mossy stone, glowing rune, or mystical forest components.
---

# Enchanted Forest UI

Use this skill to design and implement deep woodland interfaces with bioluminescent accents, fairy light orbs, ancient bark textures, mushroom ring formations, firefly particle animations, mystical fog layers, and glowing rune symbols. The enchanted forest is a place of ancient magic, living light, and organic wonder.

## Non-Negotiable Foundations

- Backgrounds are deep forest: dark greens fading to near-black, simulating a canopy that blocks the sky.
- Bioluminescent light sources provide the only illumination: fairy gold orbs, firefly yellow, rune glow teal, mushroom cap red.
- Organic shapes dominate: no hard rectangles on decorative elements; use rounded, irregular, naturally curved forms.
- Glow effects are essential: every light source emits layered warm light via `box-shadow` and `text-shadow`.
- Texture is everywhere: bark grain, moss fiber, stone roughness, fog wisps, fungal cap veining.
- Typography is serif or handwritten: the interface should feel carved into wood or written on leaves.
- The aesthetic is ancient, living, and magical: nature that has been growing for centuries, touched by enchantment.

## Core Material Recipes

### 1) Ancient Tree Trunk Panel

The foundational surface: massive bark texture with depth and embedded face features.

- Background gradient: `bg-gradient-to-b from-[#3a2a0a] via-[#4a3a1a] to-[#2a1a08]` (dark bark gradient).
- Bark grain texture: `bg-[repeating-linear-gradient(87deg,transparent_0px,transparent_8px,rgba(74,58,26,0.3)_8px,rgba(74,58,26,0.3)_9px)]`.
- Outer shadow: `shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_2px_8px_rgba(0,0,0,0.4)]`.
- Knot hole: pseudo-element `before` with `w-8 h-10 bg-[#1a0a00] rounded-[60%_40%_50%_50%] shadow-[inset_0_2px_6px_rgba(0,0,0,0.8)]` positioned at a natural irregularity.
- Moss patches: small green blobs at edges `w-12 h-4 bg-[radial-gradient(ellipse,rgba(58,106,42,0.6)_0%,transparent_70%)] rounded-full` placed along bottom or side edges.

### 2) Fairy Light Orbs (the signature element)

Tiny warm floating orbs of bioluminescent light drifting gently through the forest.

```css
@keyframes fairy-float {
  0% { transform: translateY(0) translateX(0) scale(0.8); opacity: 0.3; }
  25% { transform: translateY(-15px) translateX(5px) scale(1); opacity: 0.9; }
  50% { transform: translateY(-8px) translateX(-3px) scale(0.9); opacity: 0.6; }
  75% { transform: translateY(-20px) translateX(2px) scale(1.05); opacity: 0.85; }
  100% { transform: translateY(0) translateX(0) scale(0.8); opacity: 0.3; }
}
.fairy-orb {
  width: 6px; height: 6px;
  background: radial-gradient(circle, #f0e040 0%, #f0e040 40%, rgba(240,224,64,0) 70%);
  border-radius: 50%;
  box-shadow: 0 0 6px 2px rgba(240,224,64,0.4),
              0 0 12px 4px rgba(240,224,64,0.2),
              0 0 24px 8px rgba(240,224,64,0.1);
  animation: fairy-float 4s ease-in-out infinite;
}
```

- Multiple orbs at different positions, delays (0s, 1.2s, 2.8s), and durations (3s, 4s, 5s) create organic drift.
- Each orb radiates a triple-layer glow: close warm, mid diffuse, far ambient.

### 3) Firefly Particle Animation

Smaller, faster, more numerous than fairy lights: the swarm of living sparks.

```css
@keyframes firefly-drift {
  0% { transform: translate(0, 0); opacity: 0; }
  10% { opacity: 1; }
  50% { transform: translate(var(--fx, 30px), var(--fy, -40px)); opacity: 0.8; }
  90% { opacity: 1; }
  100% { transform: translate(var(--fx2, -20px), var(--fy2, -60px)); opacity: 0; }
}
.firefly {
  position: absolute;
  width: 3px; height: 3px;
  background: #f0d020;
  border-radius: 50%;
  box-shadow: 0 0 4px 1px rgba(240,208,32,0.6),
              0 0 8px 2px rgba(240,208,32,0.3);
  animation: firefly-drift var(--duration, 5s) ease-in-out infinite;
  animation-delay: var(--delay, 0s);
}
```

- Generate 15-30 fireflies per container, each with unique CSS custom properties for path and timing.
- Fireflies are smaller (3px) than fairy orbs (6px) and move in irregular wandering paths.

### 4) Mushroom Ring Formation

A circle of mushrooms forming a natural portal or decorative ring.

```html
<svg viewBox="0 0 200 200" class="w-48 h-48">
  <!-- Mushroom caps arranged in a circle -->
  <g transform="translate(100,100)">
    <g transform="rotate(0) translate(0,-70)">
      <ellipse cx="0" cy="-8" rx="14" ry="8" fill="#c44040"/>
      <rect x="-3" y="0" width="6" height="14" rx="2" fill="#e8d8b0"/>
      <circle cx="-4" cy="-10" r="2" fill="#f0e8d0" opacity="0.6"/>
      <circle cx="3" cy="-8" r="1.5" fill="#f0e8d0" opacity="0.5"/>
    </g>
    <g transform="rotate(45) translate(0,-70)">
      <ellipse cx="0" cy="-8" rx="12" ry="7" fill="#c44040"/>
      <rect x="-3" y="0" width="6" height="12" rx="2" fill="#e8d8b0"/>
      <circle cx="-3" cy="-9" r="1.5" fill="#f0e8d0" opacity="0.5"/>
    </g>
    <!-- Repeat for 8 mushrooms total at 45-degree intervals -->
    <!-- Sizes vary: rx 10-14, ry 6-9, heights 10-16 -->
  </g>
</svg>
```

- Red caps with white spots (`#f0e8d0` dots) and pale stems.
- Mushrooms vary in size (rx 10-14px) for natural irregularity.
- Ring arrangement at 45-degree intervals around a central point.
- Optional faint glow at center: `bg-[radial-gradient(circle,rgba(64,192,160,0.15)_0%,transparent_60%)]`.

### 5) Mossy Stone Surface

A green-covered rock serving as a card, button, or panel surface.

- Stone base: `bg-gradient-to-br from-[#6a7a6a] via-[#5a6a5a] to-[#4a5a4a] rounded-[30%_35%_25%_40%]`.
- Moss overlay: `bg-[radial-gradient(ellipse_at_30%_70%,rgba(58,106,42,0.7)_0%,transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(58,106,42,0.5)_0%,transparent_40%)]`.
- Shadow: `shadow-[0_6px_20px_rgba(0,0,0,0.4),inset_0_2px_6px_rgba(0,0,0,0.3)]`.
- Rough edge: `rounded-[30%_35%_25%_40%]` (irregular organic shape, not a clean border-radius).
- Lichen spots: small dots of `rgba(180,200,140,0.4)` scattered across the stone surface.

### 6) Mystical Fog Layer

Translucent drifting fog that adds depth and mystery.

```css
@keyframes fog-drift {
  0% { transform: translateX(-5%); opacity: 0.3; }
  50% { transform: translateX(5%); opacity: 0.5; }
  100% { transform: translateX(-5%); opacity: 0.3; }
}
.fog-layer {
  background: linear-gradient(180deg,
    rgba(160,190,220,0) 0%,
    rgba(160,190,220,0.12) 30%,
    rgba(160,190,220,0.18) 50%,
    rgba(160,190,220,0.12) 70%,
    rgba(160,190,220,0) 100%
  );
  animation: fog-drift 12s ease-in-out infinite;
  pointer-events: none;
}
```

- Fog is translucent blue-white, never opaque.
- Two fog layers at different speeds (12s and 18s) create parallax depth.
- Positioned as `absolute inset-0` overlay with `pointer-events-none`.
- Opacity stays low (0.12-0.18 peak) so content beneath remains readable.

### 7) Glowing Rune Symbol

An ancient magical symbol that pulses with teal bioluminescent light.

- Symbol container: `flex items-center justify-center w-16 h-16`.
- Glow: `text-[#40c0a0] [text-shadow:0_0_8px_rgba(64,192,160,0.8),0_0_16px_rgba(64,192,160,0.5),0_0_32px_rgba(64,192,160,0.3)]`.
- Pulse animation:

```css
@keyframes rune-pulse {
  0%, 100% { opacity: 0.7; filter: drop-shadow(0 0 8px rgba(64,192,160,0.5)); }
  50% { opacity: 1; filter: drop-shadow(0 0 16px rgba(64,192,160,0.8)); }
}
.rune-symbol {
  animation: rune-pulse 3s ease-in-out infinite;
}
```

- Rune SVG: angular geometric symbols inspired by elder futhark or fictional glyph systems.
- Symbol stroke: `stroke="#40c0a0" stroke-width="2" fill="none"` for an outlined carved look.
- Background circle behind rune: `w-20 h-20 rounded-full bg-[radial-gradient(circle,rgba(64,192,160,0.1)_0%,transparent_70%)]`.

### 8) Enchanted Forest Button

A dark bark button with fairy gold text and organic glow.

- Base: `bg-gradient-to-b from-[#2a4a1a] to-[#1a3a0a] rounded-full px-8 py-3 border border-[#3a6a2a]/50`.
- Text: `text-[#f0e040] font-serif font-medium tracking-wide`.
- Glow: `shadow-[0_0_12px_rgba(240,224,64,0.2),0_4px_12px_rgba(0,0,0,0.4)]`.
- Hover: `hover:shadow-[0_0_20px_rgba(240,224,64,0.4),0_4px_16px_rgba(0,0,0,0.5)] hover:border-[#3a6a2a]/80`.
- Active: `active:translate-y-0.5 active:shadow-[0_0_8px_rgba(240,224,64,0.3),0_2px_8px_rgba(0,0,0,0.4)]`.

## Color Palette System

### Core Enchanted Forest Palette

| Color | Hex | Role |
|---|---|---|
| Forest Green | `#1a4a2a` | Primary forest depth |
| Fairy Gold | `#f0e040` | Fairy light orbs, highlights, primary accent |
| Mushroom Red | `#c44040` | Mushroom caps, warning accents |
| Firefly Yellow | `#f0d020` | Firefly particles, sparkle effects |
| Moss Green | `#3a6a2a` | Moss, foliage, secondary green |
| Fog Blue | `rgba(160,190,220,0.15)` | Mystical fog (translucent) |
| Rune Glow | `#40c0a0` | Glowing runes, magical symbols |
| Bark Brown | `#4a3a1a` | Tree trunk, wood surfaces |
| Bark Dark | `#2a1a08` | Deep bark shadows |
| Bark Light | `#6a5a2a` | Bark highlights, carved text |
| Leaf Green | `#2a6a3a` | Living foliage accents |
| Lichen Pale | `#b4c88c` | Lichen spots, aged growth |
| Star White | `#f0e8d0` | Mushroom spots, starlight |
| Night Black | `#0a1a08` | Deep forest floor |

Rules: Forest greens and bark browns form the material base. Fairy gold and firefly yellow provide all warm illumination. Rune glow teal provides cool magical accents. Mushroom red is used sparingly for contrast. Fog blue is always translucent and atmospheric. The palette should feel like a dark woodland lit by living things.

## Typography Recommendations

- **Display headings:** Cinzel Decorative, Uncial Antiqua, or MedievalSharp (carved, ancient letterforms).
- **Alternative display:** IM Fell English, Almendra (hand-lettered fantasy feel).
- **Body:** Lora, Crimson Text, or EB Garamond (warm readable serif with organic curves).
- **Rune/label text:** A custom geometric uppercase face or `font-mono tracking-[0.3em] uppercase` for mystical inscriptions.
- **Labels:** `font-serif italic text-sm tracking-wide text-[#f0e040]/70` (fairy gold italic labels).
- Typography should feel carved into bark, inscribed on stone, or written in luminous ink on leaves.
- Avoid all sans-serif. The enchanted forest is ancient and organic, never geometric or modern.

## Component Architecture Pattern

1. Deep forest background (dark green to near-black gradient).
2. Tree trunk or bark panels as primary content surfaces.
3. Fairy light orbs and firefly particles floating throughout.
4. Mossy stone elements for cards and containers.
5. Glowing rune symbols for navigation and status indicators.
6. Mystical fog layers between content sections.
7. Mushroom ring formations as decorative section dividers.

## Interaction Rules

- Default state: dark forest with soft fairy gold illumination.
- Hover: fairy orbs brighten and drift closer, mossy stones gain a subtle green glow (`hover:shadow-[0_0_12px_rgba(58,106,42,0.3)]`).
- Active: rune pulse intensifies, button presses into bark (`active:translate-y-0.5`).
- Focus: rune glow ring `focus:ring-2 focus:ring-[#40c0a0]/60` (teal magical outline).
- Transitions: `transition-all duration-300` (slow, organic, like growth — not digital).
- Firefly drift: continuous, organic, never linear or mechanical.
- Fog drift: very slow parallax (12s-18s cycle), always gentle.

## Reusable Tailwind Tokens

- Forest floor: `bg-gradient-to-b from-[#1a4a2a] to-[#0a1a08]`
- Bark panel: `bg-gradient-to-b from-[#3a2a0a] via-[#4a3a1a] to-[#2a1a08] bg-[repeating-linear-gradient(87deg,transparent_0px,transparent_8px,rgba(74,58,26,0.3)_8px,rgba(74,58,26,0.3)_9px)] shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_2px_8px_rgba(0,0,0,0.4)]`
- Mossy stone: `bg-gradient-to-br from-[#6a7a6a] via-[#5a6a5a] to-[#4a5a4a] rounded-[30%_35%_25%_40%] shadow-[0_6px_20px_rgba(0,0,0,0.4)]`
- Fairy orb: `rounded-full bg-[radial-gradient(circle,#f0e040_0%,rgba(240,224,64,0)_70%)] shadow-[0_0_6px_2px_rgba(240,224,64,0.4),0_0_24px_8px_rgba(240,224,64,0.1)]`
- Rune glow: `text-[#40c0a0] [text-shadow:0_0_8px_rgba(64,192,160,0.8),0_0_16px_rgba(64,192,160,0.5),0_0_32px_rgba(64,192,160,0.3)]`
- Fog layer: `absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(160,190,220,0)_0%,rgba(160,190,220,0.15)_50%,rgba(160,190,220,0)_100%)]`
- Mushroom accent: `bg-[#c44040] shadow-[0_0_8px_rgba(196,64,64,0.3)]`
- Enchanted button: `bg-gradient-to-b from-[#2a4a1a] to-[#1a3a0a] text-[#f0e040] font-serif rounded-full border border-[#3a6a2a]/50 shadow-[0_0_12px_rgba(240,224,64,0.2),0_4px_12px_rgba(0,0,0,0.4)]`
- Firefly: `w-1 h-1 rounded-full bg-[#f0d020] shadow-[0_0_4px_1px_rgba(240,208,32,0.6)]`
- Moss patch: `bg-[radial-gradient(ellipse,rgba(58,106,42,0.6)_0%,transparent_70%)] rounded-full`

## Quality Checklist (must pass)

- At least one fairy light orb animation present (the signature element).
- At least one firefly particle animation present.
- Background uses deep forest green-to-black gradient.
- At least one tree trunk / bark panel surface.
- Glowing rune symbol with teal pulse animation.
- Mystical fog layer between content sections.
- Color palette includes forest green + fairy gold + bark brown + rune glow.
- Typography is serif or handwritten (no sans-serif).
- Mushroom ring or mossy stone decorative element present.
- The aesthetic reads as ancient magical woodland, not modern forest.
- Glow effects use triple-layer shadows (close, mid, far).
- Transitions are organic and slow (300ms+), never digital and snappy.

## Anti-Patterns

- Light or bright backgrounds (enchanted forest is dark canopy, not sunlit meadow).
- Modern flat clean design (enchanted forest is textured, organic, and aged).
- Sans-serif typography (the forest is ancient, not corporate).
- Missing glow/bioluminescent effects (fairy lights are the signature).
- Sharp geometric shapes (organic rounded and irregular forms only).
- Cold blue or neon color schemes (enchanted forest is warm gold + deep green).
- Missing fog or atmospheric effects (the mist creates depth and mystery).
- Digital or mechanical animations (motion should feel like wind, drift, and growth).
- Pure black without green tint (the darkest shadows are `#0a1a08`, not `#000000`).
- Missing texture (every surface needs bark grain, moss fiber, or stone roughness).
- Overly saturated colors (the palette is dark and moody, not candy-colored).
- Missing the mushroom ring or mossy stone (organic elements are essential).
- Modern card layouts with hard shadows (cards should be mossy stones or bark panels).

## Accessibility Considerations

- Forest dark with fairy gold text provides strong contrast (verify WCAG AA).
- Dark bark panels with light text must meet contrast ratios.
- Firefly and fairy orb animations must respect `prefers-reduced-motion` (stop all particle drift).
- Rune glow effects should not blur text readability.
- Decorative SVGs (mushroom rings, tree faces) must be `aria-hidden="true"`.
- Focus states must be clearly visible: `focus:ring-2 focus:ring-[#40c0a0]/60`.
- Fog layers are decorative: `pointer-events-none` and low opacity.
- Touch targets must be adequate despite organic styling (minimum 44x44px).
- Do not rely on glow color alone for meaning; pair with text labels.
- Provide reduced-motion alternatives that preserve the forest atmosphere without animation (static fairy orbs with fixed glow, static fog at medium opacity).
