---
name: tide-pool-ui
description: Build tide pool UI components (anemone colors, barnacle clusters, sea star, hermit crab, shallow water lens, kelp strand, salt spray) with transparent water surfaces, marine life accents, and the miniature ecosystem of a coastal tide pool. Trigger this skill when the user asks for tide pool design, coastal UI, marine tidepool aesthetic, ocean pool interface, anemone UI, sea star layout, kelp strand design, barnacle texture, shallow water effect, or coastal ecosystem interfaces.
---

# Tide Pool UI

Use this skill to design and implement living coastal interfaces: transparent water surface effects with ripple animations, colorful anemone accent elements, barnacle cluster textures, sea star focal points, hermit crab silhouettes, kelp strand flowing accents, and shallow water lens effects that create a subtle magnification feel. The aesthetic captures the miniature wonder of peering into a tide pool at low tide, teeming with hidden life.

## Non-Negotiable Foundations

- Tide Pool UI is TRANSPARENT WATER: surfaces have a glass-like water quality with ripple effects and depth perception.
- Anemone colors provide the primary accent palette: vibrant pinks and greens that contrast against neutral sand and stone.
- Barnacle texture appears on hard surfaces: small white bumps that create organic, tactile surfaces.
- The sea star is a signature motif: a five-pointed star shape used as a focal accent, never as a background pattern.
- Kelp strands flow through the design: wavy green lines that connect sections or accent edges.
- Salt spray mist appears on edges: subtle white-translucent gradients that suggest ocean spray.
- The shallow water lens effect creates depth: elements under the "water" appear slightly magnified or distorted.
- The aesthetic is alive, intimate, and detailed — the rich miniature world of a single tide pool.

## Core Material Recipes

### 1) Tide Pool Water Surface

Transparent blue circle with ripple effect.

```html
<div class="relative w-64 h-64 rounded-full bg-gradient-to-b from-[#4a8ab0]/20 via-[#4a8ab0]/35 to-[#4a8ab0]/50 shadow-[inset_0_0_30px_rgba(74,138,176,0.3),0_4px_20px_rgba(74,138,176,0.2)] overflow-hidden">
  <!-- Ripple ring 1 -->
  <div class="absolute inset-8 rounded-full border border-white/15 animate-[ripple_3s_ease-out_infinite]"></div>
  <!-- Ripple ring 2 -->
  <div class="absolute inset-16 rounded-full border border-white/10 animate-[ripple_3s_ease-out_infinite_1s]"></div>
  <!-- Ripple ring 3 -->
  <div class="absolute inset-20 rounded-full border border-white/5 animate-[ripple_3s_ease-out_infinite_2s]"></div>
</div>
```

- Water base: `bg-gradient-to-b from-[#4a8ab0]/20 via-[#4a8ab0]/35 to-[#4a8ab0]/50`.
- Ripple animation: `@keyframes ripple { 0% { transform: scale(1); opacity: 1; } 100% { transform: scale(2.5); opacity: 0; } }`.
- Inner shadow: `shadow-[inset_0_0_30px_rgba(74,138,176,0.3)]` (depth illusion).
- Water surface highlight: `before:absolute before:top-[10%] before:left-[15%] before:w-[35%] before:h-[20%] before:bg-white/15 before:rounded-full before:blur-md`.

### 2) Anemone Color Accent

Colorful tentacle shapes for accent elements.

```html
<div class="relative inline-flex items-center justify-center">
  <div class="w-16 h-16 rounded-full bg-[#d480a0] shadow-[0_0_15px_rgba(212,128,160,0.4)]"></div>
  <!-- Tentacle dots around the anemone -->
  <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-4 bg-[#d480a0]/80 rounded-full"></div>
  <div class="absolute top-1 -right-1 w-2 h-4 bg-[#60a040]/80 rounded-full rotate-45"></div>
  <div class="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-2 bg-[#d480a0]/80 rounded-full"></div>
  <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-4 bg-[#60a040]/80 rounded-full"></div>
  <div class="absolute top-1 -left-1 w-2 h-4 bg-[#d480a0]/80 rounded-full -rotate-45"></div>
  <div class="absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-2 bg-[#60a040]/80 rounded-full"></div>
</div>
```

- Anemone body: `bg-[#d480a0] rounded-full shadow-[0_0_15px_rgba(212,128,160,0.4)]`.
- Tentacles: small rounded rectangles positioned radially, alternating between pink and green.
- Green variant: `bg-[#60a040] shadow-[0_0_12px_rgba(96,160,64,0.35)]`.

### 3) Barnacle Cluster Texture

Small white bump pattern for hard surface textures.

- Barnacle texture: `bg-[radial-gradient(circle_3px_3px_at_8px_8px,#e0d8d0_2px,transparent_2.5px),radial-gradient(circle_2.5px_2.5px_at_20px_6px,#e0d8d0_1.8px,transparent_2px),radial-gradient(circle_3px_3px_at_14px_20px,#e0d8d0_2px,transparent_2.5px),radial-gradient(circle_2px_2px_at_28px_18px,#d8d0c8_1.5px,transparent_1.8px),radial-gradient(circle_2.5px_2.5px_ at_4px_28px,#e0d8d0_1.8px,transparent_2px)] bg-[size:32px_32px]`.
- Barnacle border: `border border-[#e0d8d0]`.
- Barnacle card: `bg-[#e0d8d0]/30 bg-[radial-gradient(circle_3px_3px_at_8px_8px,#e0d8d0_2px,transparent_2.5px),radial-gradient(circle_2.5px_2.5px_at_20px_6px,#e0d8d0_1.8px,transparent_2px)] bg-[size:32px_32px] rounded-xl p-4`.

### 4) Sea Star Focal Accent

Five-pointed star SVG used as a signature motif.

```html
<svg viewBox="0 0 60 60" class="w-12 h-12 text-[#e07020] drop-shadow-[0_2px_6px_rgba(224,112,32,0.4)]">
  <polygon points="30,2 36,22 58,22 40,34 48,56 30,42 12,56 20,34 2,22 24,22" fill="currentColor"/>
</svg>
```

- Sea star color: `text-[#e07020]` (warm orange, the primary focal accent).
- Shadow: `drop-shadow-[0_2px_6px_rgba(224,112,32,0.4)]`.
- Variant colors: pale sea star `text-[#e0a060]`, purple sea star `text-[#8060c0]`.
- Usage: one per view as a focal point or badge accent, never repeated as a pattern.

### 5) Hermit Crab Silhouette

Small crab-in-shell shape for playful accents.

```html
<svg viewBox="0 0 48 36" class="w-12 h-9 text-[#c09060]">
  <!-- Shell spiral -->
  <ellipse cx="28" cy="20" rx="14" ry="12" fill="none" stroke="currentColor" stroke-width="2"/>
  <path d="M28,10 Q36,14 32,22 Q28,28 22,24" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <!-- Legs -->
  <line x1="14" y1="26" x2="8" y2="32" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="10" y1="24" x2="4" y2="28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  <!-- Claw -->
  <path d="M18,18 L12,14 L8,16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Eyes -->
  <circle cx="14" cy="14" r="1.5" fill="currentColor"/>
</svg>
```

- Hermit color: `text-[#c09060]` (warm sand-brown shell).
- Shell texture lines: subtle internal strokes for spiral detail.
- Usage: small decorative accent near text or as a loading indicator.

### 6) Kelp Strand Accent

Wavy green line that flows along edges or connects sections.

```html
<svg viewBox="0 0 200 40" class="w-full h-8 text-[#3a6a2a] opacity-40">
  <path d="M0,20 Q25,5 50,20 T100,20 T150,20 T200,20" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
</svg>
```

- Kelp color: `text-[#3a6a2a]` (dark kelp green).
- Wave path: `Q25,5 50,20 T100,20 T150,20 T200,20` (sinusoidal wave).
- Animation: slow drift `@keyframes kelp-sway { 0%,100% { transform: translateX(0) rotate(0deg); } 50% { transform: translateX(5px) rotate(1deg); } }`.
- Kelp divider: horizontal wavy line separating sections.
- Kelp border: vertical kelp strand along the left edge of a card.

### 7) Shallow Water Lens Effect

Slight magnification/distortion for elements "underwater."

- Lens container: `bg-[#4a8ab0]/10 rounded-2xl p-4 backdrop-blur-[2px]`.
- Magnification illusion: `before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-white/5 before:via-transparent before:to-[#4a8ab0]/10`.
- Surface highlight: `after:absolute after:top-2 after:left-[10%] after:w-[40%] after:h-1 after:bg-white/20 after:rounded-full after:blur-sm`.
- Content inside: `relative z-10` to sit above the water effects.

### 8) Salt Spray Edge Effect

White-translucent gradient that suggests ocean mist.

- Salt spray: `bg-gradient-to-r from-white/10 via-white/5 to-transparent`.
- Heavy spray: `bg-gradient-to-t from-transparent via-white/8 to-white/15`.
- Spray dots: `bg-[radial-gradient(circle_1px_1px_at_center,rgba(255,255,255,0.4),transparent)] bg-[size:8px_8px]`.
- Spray along edge: `before:absolute before:top-0 before:right-0 before:w-24 before:h-full before:bg-gradient-to-l before:from-white/10 before:to-transparent`.

### 9) Tide Pool Card

Content card with water surface and marine life accents.

- `bg-gradient-to-b from-[#d4b878]/10 via-white/50 to-white/70 border border-[#4a8ab0]/15 rounded-2xl p-6 shadow-[0_4px_20px_rgba(74,138,176,0.1)]`.
- Water edge: `before:absolute before:top-0 before:left-[5%] before:right-[5%] before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#4a8ab0]/30 before:to-transparent`.
- Sand texture bottom: `after:absolute after:bottom-0 after:left-0 after:right-0 after:h-8 after:bg-gradient-to-t after:from-[#d4b878]/15 after:to-transparent`.

## Color Palette System

### Core Tide Pool Palette

| Color | Hex | Role |
|---|---|---|
| Pool Water | `#4a8ab0` | Primary water surfaces, borders, accents |
| Anemone Pink | `#d480a0` | Primary accent, interactive highlights |
| Anemone Green | `#60a040` | Secondary accent, living organism color |
| Barnacle White | `#e0d8d0` | Textures, hard surface accents, bump patterns |
| Sea Star Orange | `#e07020` | Focal accent, badge highlights, CTAs |
| Kelp Green | `#3a6a2a` | Dividers, flowing accents, vegetation |
| Sand Bottom | `#d4b878` | Background warmth, ground layer |
| Salt Spray | `rgba(255,255,255,0.15)` | Edge mist, surface highlights |
| Pool Deep | `#2a5a78` | Deep water shadows, text on light |
| Shell Tan | `#c09060` | Secondary warm accent, hermit crab, wood |

### Extended Coastal Tones

| Color | Hex | Role |
|---|---|---|
| Wet Rock | `#5a6a70` | Neutral surface, card backgrounds |
| Tide Foam | `#f0f0ea` | White water, foam, lightest surface |
| Algae Dark | `#2a4a20` | Deep vegetation, dark accents |
| Coral Pale | `#e0a0a0` | Soft anemone variant, gentle highlights |

Rules: Water blues and anemone pinks dominate the accent palette. Sand provides warm-neutral grounding. Barnacle white appears only as texture, never as a primary fill. Sea star orange is reserved for the single most important accent on any view. Kelp green connects sections but never overwhelms. Salt spray is always translucent — it is mist, not substance.

## Typography Recommendations

- **Display:** DM Serif Display, Lora, or Crimson Pro (organic serif with natural warmth).
- **Body:** DM Sans, Source Sans 3 (clean, readable, friendly).
- **Data:** JetBrains Mono (for tide times, depth readings, temperature data).
- **Accent:** Caveat or Kalam (handwritten feel for labels and annotations, as if scrawled in wet sand).
- **Labels:** `font-medium text-sm tracking-wide text-[#2a5a78]` (pool deep blue).
- Typography should feel ALIVE and ORGANIC — like text discovered on driftwood, mixed with clean scientific labels. Serif fonts carry the natural warmth; monospace carries the data precision.

## Interaction Rules

- Default: calm, clear, with gentle water reflections.
- Hover: ripple effect on the element, anemone color glow intensifies.
  - `hover:shadow-[0_0_20px_rgba(212,128,160,0.2),0_4px_16px_rgba(74,138,176,0.15)] hover:border-[#4a8ab0]/25 transition-all duration-400`.
- Active: `active:scale-[0.97] active:shadow-[0_0_25px_rgba(212,128,160,0.25)]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#4a8ab0]/30 focus:shadow-[0_0_12px_rgba(74,138,176,0.15)]`.
- Transitions: `transition-all duration-400 ease-out` (gentle, like water settling after a disturbance).
- Click ripple: expanding transparent circle from click point on interactive elements.
- Kelp strands sway gently on scroll or hover.

## Reusable Tailwind Tokens

- Pool water bg: `bg-gradient-to-b from-[#4a8ab0]/20 via-[#4a8ab0]/35 to-[#4a8ab0]/50`.
- Tide card: `bg-gradient-to-b from-[#d4b878]/10 via-white/50 to-white/70 border border-[#4a8ab0]/15 rounded-2xl`.
- Anemone accent: `bg-[#d480a0] shadow-[0_0_15px_rgba(212,128,160,0.4)]`.
- Sea star accent: `text-[#e07020] drop-shadow-[0_2px_6px_rgba(224,112,32,0.4)]`.
- Barnacle texture: `bg-[radial-gradient(circle_3px_3px_at_8px_8px,#e0d8d0_2px,transparent_2.5px)] bg-[size:32px_32px]`.
- Kelp strand: `text-[#3a6a2a] opacity-40`.
- Salt spray: `bg-gradient-to-r from-white/10 via-white/5 to-transparent`.
- Sand base: `bg-[#d4b878]/10`.
- Pool deep text: `text-[#2a5a78]`.

## Quality Checklist

- Water surfaces are transparent with visible ripple animation.
- At least one anemone color accent (pink or green) is present.
- Barnacle texture appears on at least one hard surface element.
- Sea star motif is present as a focal accent (one per view).
- Kelp strand divider or accent line is present.
- Salt spray effect appears on at least one edge or corner.
- Shallow water lens effect creates depth on at least one content block.
- Sand/warm neutral provides background grounding (not sterile white).
- The palette is dominated by water blues with pink/green/orange accents.
- Typography mixes organic serif with clean sans and handwritten accent.
- Marine life elements are SVG with correct proportions (not clipart-style).
- The overall scene reads as a living coastal tide pool ecosystem.
- Colors are saturated but not garish — natural marine life vibrancy.

## Anti-Patterns

- Pure white or sterile gray backgrounds (tide pool needs sand/water warmth).
- Solid opaque water (water must be transparent with visible depth).
- Missing ripple animation on water surfaces (still water feels dead).
- Sea star used as a repeating pattern (it is a focal accent, not wallpaper).
- Neon or electric blue (pool water is natural blue-gray, not synthetic).
- Missing barnacle texture (hard surfaces without texture feel plastic).
- Kelp strands that are rigid straight lines (kelp always flows and curves).
- Salt spray that is fully opaque (it is always translucent mist).
- Brown-only palette (tide pools are vibrant with anemone pinks and greens).
- Mechanical or grid-locked layouts (tide pools are organic, asymmetrical).
- Missing marine life (anemone, sea star, or kelp must be present).
- Overcrowded compositions (tide pools have breathing room between organisms).
- Warm oranges beyond the sea star (orange is reserved for the focal accent).

## Accessibility Considerations

- Light sand backgrounds with dark text (`#2a5a78` on `#f8f4ec`) provide strong contrast (WCAG AA+).
- Anemone pink accents on white must be tested for contrast — use only for decorative elements or pair with dark text labels.
- Sea star orange (`#e07020`) on white passes WCAG AA for large text; use darker `#b05010` for small text.
- Ripple animations must respect `prefers-reduced-motion`: reduce to static water effect.
- Kelp sway animations must respect `prefers-reduced-motion`.
- Marine life SVGs (`<svg>` for sea star, hermit crab, anemone) must be `aria-hidden="true"` when decorative.
- Salt spray overlays must not reduce text contrast — keep at very low opacity.
- Translucent water surfaces must maintain legibility of any content placed over them — verify contrast at all transparency levels.
- Touch targets must be adequate despite organic, flowing layout styles.
- Barnacle texture backgrounds must not interfere with text readability — verify at all zoom levels.
- Screen readers should announce tide pool themed content with clear semantic structure, not rely on visual marine metaphors.
