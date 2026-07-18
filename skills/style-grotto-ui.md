---
name: grotto-ui
description: Build grotto UI components (sacred cave shrine, stalactite formations, underground pool reflections, votive candle light, rocky chamber walls, sacred statue niche, dripping water effects, moss-covered stone) with cave-like framing, candlelight glow, and the mysterious reverence of sacred underground spaces. Trigger this skill when the user asks for grotto design, cave shrine UI, stalactite border, underground pool, votive candle glow, rocky chamber, sacred niche, dripping water animation, moss stone texture, or sacred underground-space interfaces.
---

# Grotto UI

Use this skill to design and implement interfaces inspired by sacred underground grottoes: dark rocky chamber walls with rough stone texture, stalactite formation borders dripping from the top, underground pool reflections on horizontal surfaces, votive candle amber glow spots, sacred statue niche frames, dripping water animations, moss-covered stone patches, and the mysterious, reverent atmosphere of a hidden cave shrine.

## Non-Negotiable Foundations

- A grotto is a sacred cave: dark stone walls, dripping water, flickering candlelight, and the hushed reverence of an underground shrine. Every surface should feel like rough-hewn rock or wet stone.
- Materials are stone, water, moss, and candlelight: dark granite walls, smooth wet stone, green moss patches, clear underground pools, and warm amber votive flames. Surfaces are rough, cool, and damp — never polished, synthetic, or bright.
- Colors come from the cave itself: near-black stone, cool grays with olive undertones, deep pool blue, warm candle amber, votive red, and moss green. The palette is dominated by dark values with small warm light sources.
- Stalactite formations are the signature decorative element — pointed drip shapes hanging from the top edge, created with CSS clip-path or SVG.
- Underground pool reflections appear as horizontal mirror effects with slight blur — the calm surface of water in a dark cave.
- Votive candle glow spots are small amber radial gradients — warm pinpoints of light in the surrounding darkness.
- Typography evokes sacred inscriptions carved in stone: serif letterforms that feel chiseled, with weight and permanence.
- The aesthetic is reverent, mysterious, and ancient — the opposite of bright, modern, or commercial. Everything should feel like it was discovered, not designed.

## Core Material Recipes

### 1) Cave Wall Surface (the foundational surface)

The signature grotto surface: dark rough stone with depth and texture.

- Background: `bg-[#1a1a1a]` (near-black cave interior).
- Stone grain texture: SVG noise overlay with stone-like variation at `opacity-[0.08]`.
- Subtle gradient: `bg-gradient-to-b from-[#1a1a1a] via-[#222218] to-[#1a1a1a]` (slight warm-cool variation across the wall).
- Rough edge: `bg-[linear-gradient(to_right,rgba(74,74,58,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(74,74,58,0.1)_1px,transparent_1px)] bg-[size:12px_12px]` (stone block grid).
- Border: `border border-[#3a3a2a]` (rough-cut stone edge).
- Shadow: `shadow-[0_4px_20px_rgba(0,0,0,0.4)]` (deep cave shadow).
- Full: `bg-gradient-to-b from-[#1a1a1a] via-[#222218] to-[#1a1a1a] bg-[linear-gradient(to_right,rgba(74,74,58,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(74,74,58,0.1)_1px,transparent_1px)] bg-[size:12px_12px] border border-[#3a3a2a] shadow-[0_4px_20px_rgba(0,0,0,0.4)] p-6 rounded-lg`.

### 2) Stalactite Formation Border (the signature element)

Pointed drip shapes hanging from the top edge, like calcium deposits built over millennia.

Using CSS clip-path to create stalactite shapes:

```css
.stalactite-border {
  clip-path: polygon(
    0% 0%, 5% 0%, 5% 40%, 7% 55%, 8% 65%, 7.5% 70%, 6.5% 65%, 6% 55%, 5% 40%,
    12% 0%, 18% 0%, 18% 55%, 19.5% 70%, 20% 80%, 19.5% 85%, 18.5% 80%, 17.5% 70%, 17% 55%, 16% 0%,
    25% 0%, 25% 30%, 26.5% 45%, 27% 55%, 26.5% 60%, 25.5% 55%, 25% 45%, 24.5% 30%, 24% 0%,
    35% 0%, 35% 50%, 36.5% 65%, 37% 75%, 36.5% 80%, 35.5% 75%, 35% 65%, 34.5% 50%, 34% 0%,
    45% 0%, 45% 25%, 46% 38%, 46.5% 48%, 46% 52%, 45% 48%, 44.5% 38%, 44% 25%, 43% 0%,
    55% 0%, 55% 45%, 56.5% 60%, 57% 70%, 56.5% 75%, 55.5% 70%, 55% 60%, 54.5% 45%, 54% 0%,
    65% 0%, 65% 35%, 66.5% 50%, 67% 60%, 66.5% 65%, 65.5% 60%, 65% 50%, 64.5% 35%, 64% 0%,
    75% 0%, 75% 55%, 76.5% 70%, 77% 82%, 76.5% 88%, 75.5% 82%, 75% 70%, 74.5% 55%, 74% 0%,
    85% 0%, 85% 30%, 86% 42%, 86.5% 50%, 86% 55%, 85% 50%, 84.5% 42%, 84% 30%, 83% 0%,
    95% 0%, 95% 40%, 96.5% 55%, 97% 65%, 96.5% 70%, 95.5% 65%, 95% 55%, 94.5% 40%, 94% 0%,
    100% 0%
  );
}
```

For SVG stalactites (more control over individual drips):

```html
<svg viewBox="0 0 400 50" class="w-full h-12" preserveAspectRatio="none" aria-hidden="true">
  <path d="M0,0 L400,0 L400,8 L380,8 L382,28 L383,35 L382,38 L380,35 L379,28 L378,8 L360,8 L363,22 L364,28 L363,30 L361,28 L360,22 L358,8 L340,8 L341,18 L342,22 L341,24 L340,22 L339,18 L338,8 L320,8 L322,32 L323,40 L322,44 L321,40 L320,32 L319,8 L300,8 L302,24 L303,30 L302,32 L301,30 L300,24 L299,8 L280,8 L281,15 L282,18 L281,20 L280,18 L279,15 L278,8 L260,8 L262,36 L263,44 L262,48 L261,44 L260,36 L259,8 L240,8 L242,20 L243,24 L242,26 L241,24 L240,20 L239,8 L220,8 L222,28 L223,34 L222,36 L221,34 L220,28 L219,8 L200,8 L201,16 L202,18 L201,20 L200,18 L199,16 L198,8 L180,8 L182,38 L183,46 L182,50 L181,46 L180,38 L179,8 L160,8 L162,22 L163,26 L162,28 L161,26 L160,22 L159,8 L140,8 L141,12 L142,14 L141,16 L140,14 L139,12 L138,8 L120,8 L122,30 L123,38 L122,42 L121,38 L120,30 L119,8 L100,8 L102,18 L103,22 L102,24 L101,22 L100,18 L99,8 L80,8 L82,34 L83,42 L82,46 L81,42 L80,34 L79,8 L60,8 L61,14 L62,16 L61,18 L60,16 L59,14 L58,8 L40,8 L42,26 L43,32 L42,34 L41,32 L40,26 L39,8 L20,8 L22,20 L23,24 L22,26 L21,24 L20,20 L19,8 L0,8 Z" fill="#2a2a1a" opacity="0.9"/>
</svg>
```

### 3) Underground Pool Reflection

A horizontal mirror effect simulating the still surface of an underground pool.

- Base surface: `bg-gradient-to-b from-[#0a1a2a] via-[#1a3a5a] to-[#0a1a2a]` (deep water gradient).
- Reflection effect: content above is duplicated below with `transform: scaleY(-1)` and `opacity-0.3` with `blur(1px)`.
- Water surface line: `border-t border-[#2a5a8a]/30` (thin blue line marking water level).
- Ripple texture: `bg-[repeating-linear-gradient(0deg,transparent_0px,rgba(42,90,138,0.08)_2px,transparent_4px)]` (subtle horizontal ripples).
- Full pool panel:

```html
<div class="relative overflow-hidden rounded-lg">
  <!-- Pool surface -->
  <div class="bg-gradient-to-b from-[#0a1a2a] via-[#1a3a5a] to-[#0a1a2a] p-8">
    <p class="text-[#c0c0c0] font-serif text-lg">Sacred waters still</p>
  </div>
  <!-- Reflection -->
  <div class="h-12 bg-gradient-to-b from-[#1a3a5a] via-[#0a1a2a] to-[#0a0a1a] overflow-hidden relative">
    <div class="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0px,rgba(42,90,138,0.06)_1px,transparent_3px)]"></div>
    <p class="text-[#c0c0c0] font-serif text-lg transform scale-y-[-1] opacity-20 blur-[1px]">Sacred waters still</p>
  </div>
</div>
```

### 4) Votive Candle Glow Spot

A small amber radial gradient — the warm pinpoints of candlelight in darkness.

- Single glow: `bg-[radial-gradient(circle_at_center,rgba(255,140,48,0.4)_0%,rgba(255,140,48,0.15)_30%,transparent_70%)]` (warm amber center fading to transparent).
- Candle flame: small teardrop SVG shape above a rectangle:
```html
<div class="relative w-4 h-8">
  <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-4 bg-[#f0e0c0] rounded-sm opacity-80"></div>
  <div class="absolute bottom-3 left-1/2 -translate-x-1/2 w-3 h-4 bg-[radial-gradient(ellipse_at_bottom,#ff8c30_0%,#c44a10_50%,transparent_100%)] rounded-full animate-pulse"></div>
  <!-- Glow halo -->
  <div class="absolute -inset-8 bg-[radial-gradient(circle,rgba(255,140,48,0.15)_0%,transparent_70%)] rounded-full"></div>
</div>
```
- Multiple votive arrangement (a row of candles):
```html
<div class="flex items-end justify-center gap-8 py-4">
  <div class="relative w-3 h-6"><div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-3 bg-[#f0e0c0] rounded-sm"></div><div class="absolute bottom-2 left-1/2 -translate-x-1/2 w-2.5 h-3.5 bg-[radial-gradient(ellipse_at_bottom,#ff8c30_0%,#c44a10_50%,transparent_100%)] rounded-full animate-pulse"></div></div>
  <div class="relative w-3 h-8"><div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-4 bg-[#f0e0c0] rounded-sm"></div><div class="absolute bottom-3 left-1/2 -translate-x-1/2 w-2.5 h-3.5 bg-[radial-gradient(ellipse_at_bottom,#ff8c30_0%,#c44a10_50%,transparent_100%)] rounded-full animate-pulse"></div></div>
  <div class="relative w-3 h-7"><div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-3.5 bg-[#f0e0c0] rounded-sm"></div><div class="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-2.5 h-3.5 bg-[radial-gradient(ellipse_at_bottom,#ff8c30_0%,#c44a10_50%,transparent_100%)] rounded-full animate-pulse"></div></div>
</div>
```

### 5) Rocky Archway Frame

A rough stone arch framing content, like the entrance to a sacred chamber.

- Arch shape using CSS clip-path or SVG:
```html
<div class="relative">
  <div class="absolute inset-0 bg-[#3a3a2a] rounded-t-[50%] opacity-80" style="clip-path: ellipse(55% 45% at 50% 100%)"></div>
  <div class="relative m-8 mt-16 bg-[#1a1a1a] border border-[#3a3a2a] rounded-lg p-6 shadow-[inset_0_4px_20px_rgba(0,0,0,0.5)]">
    <!-- Content inside the arch -->
  </div>
</div>
```

- Stone texture on the arch: SVG noise overlay on the gray surface.
- Moss on arch edges: small green patches at the base of the arch using `bg-[radial-gradient(circle,rgba(58,90,42,0.4)_0%,transparent_70%)]` positioned at bottom-left and bottom-right.

### 6) Dripping Water Animation

Small water droplets falling from stalactite tips — a subtle, continuous animation.

```css
@keyframes drip {
  0% { transform: translateY(0); opacity: 0.8; }
  60% { opacity: 0.8; }
  100% { transform: translateY(60px); opacity: 0; }
}

.water-drop {
  width: 2px;
  height: 6px;
  background: linear-gradient(to bottom, rgba(100,160,220,0.6), rgba(100,160,220,0.2));
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  animation: drip 3s ease-in infinite;
}
```

Implementation:

```html
<div class="absolute bottom-0 left-[20%]">
  <div class="water-drop" style="animation-delay: 0s;"></div>
</div>
<div class="absolute bottom-0 left-[55%]">
  <div class="water-drop" style="animation-delay: 1.2s;"></div>
</div>
<div class="absolute bottom-0 left-[78%]">
  <div class="water-drop" style="animation-delay: 2.1s;"></div>
</div>
```

- Splash on impact: tiny expanding ring at the bottom using a radial border animation.
- Drip sound effect visual: subtle ripple circle expanding from the impact point.

### 7) Moss-Covered Stone Patch

Green moss growing on dark stone — organic texture patches for accents.

- Base stone: `bg-[#3a3a2a]` (dark warm stone).
- Moss overlay: `bg-[radial-gradient(ellipse,rgba(58,90,42,0.5)_0%,rgba(58,90,42,0.2)_40%,transparent_70%)]` (green moss cluster).
- Moss texture: `bg-[linear-gradient(135deg,rgba(42,74,30,0.3)_25%,transparent_25%,transparent_50%,rgba(42,74,30,0.3)_50%,rgba(42,74,30,0.3)_75%,transparent_75%)] bg-[size:8px_8px]` (diagonal moss fibers).
- Full mossy stone:

```html
<div class="relative w-full h-24 bg-[#3a3a2a] rounded-lg overflow-hidden">
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(58,90,42,0.5)_0%,transparent_50%)]"></div>
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(42,74,30,0.4)_0%,transparent_40%)]"></div>
  <div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(42,74,30,0.15)_25%,transparent_25%,transparent_50%,rgba(42,74,30,0.15)_50%,rgba(42,74,30,0.15)_75%,transparent_75%)] bg-[size:8px_8px]"></div>
</div>
```

### 8) Sacred Niche Frame

A recessed alcove in the stone wall, framing a sacred statue or icon.

- Recess effect: deep inset shadow creating depth.
- Niche shape: rectangular with arched or rounded top.
- Inner glow from a candle within the niche.

```html
<div class="relative bg-[#1a1a1a] rounded-t-3xl p-8 shadow-[inset_0_8px_30px_rgba(0,0,0,0.7),0_2px_10px_rgba(0,0,0,0.3)] border border-[#2a2a1a]">
  <!-- Inner candle glow -->
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(255,140,48,0.08)_0%,transparent_60%)] rounded-t-3xl"></div>
  <!-- Statue/icon content -->
  <div class="relative z-10 text-center">
    <!-- Sacred content here -->
  </div>
</div>
```

### 9) Cave Wall Panel with Water Stain

A stone wall section with darker water-stain marks, like moisture seeping through rock.

- Base: `bg-[#2a2a1a]` (warm dark stone).
- Water stain: `bg-[radial-gradient(ellipse_at_30%_0%,rgba(26,58,90,0.15)_0%,transparent_50%)]` (darker blue-gray drip from top).
- Mineral streak: vertical gradient from blue-gray to transparent.

## Color Palette System

### Core Grotto Palette

| Color | Hex | Material | Role |
|---|---|---|---|
| Cave Dark | `#1a1a1a` | Deep stone | Primary background |
| Cave Dark Warm | `#222218` | Warm stone | Gradient mid-tone |
| Stone Gray | `#4a4a3a` | Exposed rock | Borders, secondary surfaces |
| Stone Light | `#5a5a4a` | Weathered rock | Text highlights on dark |
| Pool Blue | `#1a3a5a` | Underground water | Pool surfaces, water |
| Pool Blue Deep | `#0a1a2a` | Deep water | Water depths |
| Pool Blue Light | `#2a5a8a` | Shallow water | Water highlights, ripples |
| Candle Amber | `#ff8c30` | Votive flame | Primary warm accent |
| Candle Amber Soft | `#c44a10` | Flame edge | Amber shadows |
| Votive Red | `#c41e1e` | Red votive | Sacred fire accents |
| Moss Green | `#3a5a2a` | Living moss | Organic accents |
| Moss Dark | `#2a4a1a` | Shadow moss | Moss depth |
| Wet Stone | `#2a2a3a` | Damp rock | Water-stained surfaces |
| Candle Cream | `#f0e0c0` | Wax body | Candle elements |
| Sacred Silver | `#c0c0c0` | Metal fixtures | Altar fixtures, icons |
| Sacred Gold | `#a08020` | Gilded surface | Sacred accents |

Rules: Cave dark (`#1a1a1a`) dominates — this is an underground space where light is scarce. Warm amber (`#ff8c30`) and votive red (`#c41e1e`) are rare, precious light sources against the darkness. Pool blue (`#1a3a5a`) appears only on water surfaces. Moss green (`#3a5a2a`) appears only where moisture meets stone. The palette should feel like descending into a candlelit cave — mostly dark, with small warm pools of light and the cool blue-green of underground water. No whites, no bright colors, no clean surfaces.

## Typography Recommendations

Grotto typography evokes sacred inscriptions carved in stone and the hushed atmosphere of underground shrines:

- **Shrine headings:** A bold serif like Cinzel, Cormorant Garamond, or Trajan at `font-serif font-bold text-3xl text-[#c0c0c0] tracking-[0.15em] uppercase` for carved-stone inscriptions.
- **Inscription text:** A serif with weight like EB Garamond or Crimson Pro at `font-serif text-lg text-[#5a5a4a] italic` for sacred verse and prayers.
- **Cave labels:** A monospace or slab serif at `font-mono text-xs uppercase tracking-[0.3em] text-[#4a4a3a]` for stone-carved labels.
- **Body:** Lora or Spectral at `font-serif text-sm text-[#5a5a4a]` for readable text in low-light cave context.
- **Water text:** `font-serif text-lg text-[#2a5a8a]/60` for text that appears to be reflected in the pool.
- **Carved text effect:** Use `text-shadow` with dark offset to simulate chiseled letterforms: `[text-shadow:1px_1px_2px_rgba(0,0,0,0.8)]`.
- Avoid light sans-serif fonts alone. Grotto pairs heavy serif (carved inscriptions) with monospace (labels) and italic serif (sacred verse).

## Component Architecture Pattern

1. Near-black cave wall background with stone-grain texture.
2. Stalactite formation borders dripping from top edges.
3. Rocky archway frames around sacred content sections.
4. Votive candle glow spots as section accents and light sources.
5. Underground pool reflections beneath important content.
6. Sacred niche recessed alcoves for featured content or icons.
7. Moss-covered stone patches as organic decorative accents.
8. Dripping water animations for ambient atmosphere.
9. Stone-carved typography with heavy serif letterforms.

## Interaction Rules

- Default state: dark cave interior, reverent, mysterious, still.
- Hover: candle glow intensifies slightly, stone warms, subtle amber wash.
  - `hover:shadow-[0_0_20px_rgba(255,140,48,0.15)] hover:border-[#4a4a3a] transition-all duration-500`.
- Active: gentle press into stone (`active:translate-y-0.5 active:shadow-[inset_0_2px_8px_rgba(0,0,0,0.5)]`).
- Focus: amber glow ring `focus:ring-2 focus:ring-[#ff8c30]/30 focus:ring-offset-2 focus:ring-offset-[#1a1a1a]`.
- Transitions: `transition-all duration-500 ease-in-out` (slow, reverent — like candlelight flickering).
- Pool surface hover: gentle ripple effect (subtle scale oscillation on the reflection layer).
- Candle flame: continuous subtle pulse animation `animate-pulse` (flickering flame).
- Water drips: staggered animation delays for organic, non-uniform dripping.
- No fast, snappy, or aggressive motion. Everything feels like the deep stillness of an underground sanctuary, disturbed only by dripping water and flickering flame.

## Reusable Tailwind Tokens

- Cave wall: `bg-gradient-to-b from-[#1a1a1a] via-[#222218] to-[#1a1a1a] bg-[linear-gradient(to_right,rgba(74,74,58,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(74,74,58,0.1)_1px,transparent_1px)] bg-[size:12px_12px] border border-[#3a3a2a]`
- Stalactite clip-path: `clip-path: polygon(...)` with varied drip lengths
- Pool surface: `bg-gradient-to-b from-[#0a1a2a] via-[#1a3a5a] to-[#0a1a2a]`
- Pool ripple: `bg-[repeating-linear-gradient(0deg,transparent_0px,rgba(42,90,138,0.08)_2px,transparent_4px)]`
- Candle glow: `bg-[radial-gradient(circle_at_center,rgba(255,140,48,0.4)_0%,rgba(255,140,48,0.15)_30%,transparent_70%)]`
- Candle flame: `bg-[radial-gradient(ellipse_at_bottom,#ff8c30_0%,#c44a10_50%,transparent_100%)]`
- Votive red glow: `bg-[radial-gradient(circle_at_center,rgba(196,30,30,0.3)_0%,rgba(196,30,30,0.1)_30%,transparent_70%)]`
- Moss patch: `bg-[radial-gradient(ellipse,rgba(58,90,42,0.5)_0%,rgba(58,90,42,0.2)_40%,transparent_70%)]`
- Moss texture: `bg-[linear-gradient(135deg,rgba(42,74,30,0.3)_25%,transparent_25%,transparent_50%,rgba(42,74,30,0.3)_50%,rgba(42,74,30,0.3)_75%,transparent_75%)] bg-[size:8px_8px]`
- Sacred niche: `bg-[#1a1a1a] rounded-t-3xl shadow-[inset_0_8px_30px_rgba(0,0,0,0.7)] border border-[#2a2a1a]`
- Niche inner glow: `bg-[radial-gradient(ellipse_at_50%_30%,rgba(255,140,48,0.08)_0%,transparent_60%)]`
- Deep shadow: `shadow-[0_4px_20px_rgba(0,0,0,0.4)]`
- Inset depth: `shadow-[inset_0_4px_20px_rgba(0,0,0,0.5)]`
- Water stain: `bg-[radial-gradient(ellipse_at_30%_0%,rgba(26,58,90,0.15)_0%,transparent_50%)]`
- Carved text: `[text-shadow:1px_1px_2px_rgba(0,0,0,0.8)]`
- Amber ring: `focus:ring-2 focus:ring-[#ff8c30]/30 focus:ring-offset-2 focus:ring-offset-[#1a1a1a]`

## Quality Checklist (must pass)

- Background is dark cave stone (not flat black — must have texture, grain, or gradient variation).
- At least one stalactite formation element (CSS clip-path or SVG drip shapes from top).
- At least one votive candle glow spot (amber radial gradient) providing warm light.
- Underground pool reflection effect appears on at least one surface or section.
- Color palette is dominated by dark values with small warm accents (candle amber, votive red).
- Typography uses heavy serif letterforms (carved-stone inscriptions, not light sans-serif).
- At least one moss-covered stone patch or organic texture accent.
- Rocky archway or sacred niche framing around at least one content section.
- Dripping water animation or visual (CSS keyframe drips or static drip shapes).
- Shadows are deep, dark, and cave-like (black undertones, not warm brown).
- The aesthetic reads as a sacred underground grotto (dark, reverent, mysterious).
- Motion is slow and reverent (flickering flame, dripping water, not fast transitions).
- Light sources are small and precious (candle glow, not flood illumination).
- No element feels clean, modern, or digitally polished.

## Anti-Patterns

- Flat, textureless black backgrounds (grotto requires visible stone grain and depth).
- Bright or white backgrounds (grotto is underground — dark by nature).
- Missing stalactite formations (these are the signature silhouette of a cave).
- Overuse of candlelight (small glow spots, not flood illumination — darkness dominates).
- Smooth, polished, or glossy surfaces (stone is rough, wet, and ancient).
- Light or thin sans-serif typography (grotto needs carved-stone weight).
- Fast, snappy, or bouncy animations (grotto is slow, deep, and still — only drip and flicker).
- Clean, modern, or technological references (grotto is ancient, sacred, and natural).
- No water elements (dripping water and pool reflections are essential to the cave atmosphere).
- Overly bright moss (moss in a cave is dark, shadowy green — not bright).
- Symmetrical or grid-perfect layouts (cave formations are organic and irregular).
- Missing depth/shadow effects (caves are defined by depth, recess, and shadow).
- Pure gray without warm undertone (stone has olive/warm cast — not cool digital gray).

## Accessibility Considerations

- Cave dark (`#1a1a1a`) backgrounds require light text (`#c0c0c0` or `#5a5a4a` for secondary) — verify WCAG AA.
- Candle amber (`#ff8c30`) on dark backgrounds provides good contrast (WCAG AA).
- Pool blue (`#1a3a5a`) text on dark backgrounds may fail contrast — use only for decorative text or pair with lighter variants.
- Moss green (`#3a5a2a`) on dark backgrounds fails contrast — use only as decorative texture, never for text.
- All decorative SVGs (stalactites, drips, moss) must be `aria-hidden="true"`.
- Dripping water animation must respect `prefers-reduced-motion`: replace animation with static drip shapes.
- Candle flame pulse must respect `prefers-reduced-motion`: remove `animate-pulse` and show static flame.
- Focus states: `focus:ring-2 focus:ring-[#ff8c30]/30 focus:ring-offset-2 focus:ring-offset-[#1a1a1a]` (amber glow visible against dark).
- Pool reflections are decorative — `aria-hidden="true"` on reflected content duplicates.
- Dark interfaces are inherently low-contrast — ensure all interactive elements have visible focus and sufficient text contrast.
- Touch targets must be adequate despite dark, atmospheric styling (minimum 44x44px).
- Sacred inscriptions and carved text must have sufficient size (16px+) for readability in the heavy serif font.
