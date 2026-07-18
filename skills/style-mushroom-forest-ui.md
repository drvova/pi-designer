---
name: mushroom-forest-ui
description: Build mushroom forest UI components (fungi cluster, decaying log, bioluminescent glow, spore clouds, damp earth, moss carpet, fern unfurl) with earthy damp textures, bioluminescent accents, and the magical undergrowth of a fungal forest floor. Trigger this skill when the user asks for mushroom forest, fungi UI, bioluminescent glow, forest floor, spore cloud, damp earth, fern unfurl, moss carpet, decaying log, or magical undergrowth interfaces.
---

# Mushroom Forest UI

Use this skill to design and implement damp, glowing interfaces inspired by the mushroom forest aesthetic: cluster-capped fungi rising from decaying logs, bioluminescent glow painting the undergrowth, spore clouds drifting lazily through dark canopy shade, moss-carpeted ground under unfurling fern fiddleheads, and the quiet magical decay of a living forest floor where everything grows from rot.

## Non-Negotiable Foundations

The mushroom forest aesthetic lives or dies on these invariants. Every component must satisfy all of them.

1. **Damp is the default.** Every surface carries a suggestion of moisture: subtle radial gradients suggesting dew, soft glow halos suggesting humidity diffusing light, and dark saturated earth tones that read as wet soil. No surface is dry, matte, or flat.

2. **Bioluminescence is the accent.** The only bright color in the entire palette is the soft green-blue bioluminescent glow (`#40c0a0`). It appears sparingly as radial gradients, text accents, border glows, and hover states. It never dominates大面积 surfaces.

3. **Decay is beautiful.** Rotting wood, crumbling bark, and decomposing leaf litter are not blemishes to hide -- they are the primary texture language. Weathered surfaces, irregular edges, and organic asymmetry signal authenticity.

4. **Darkness is the canvas.** Backgrounds are near-black earth tones. Content surfaces are slightly lighter dark earth. The contrast comes from bioluminescent glow and pale spore accents, not from light backgrounds.

5. **Organic shapes dominate.** No hard rectangles. Caps are elliptical, logs are irregular, ferns spiral, moss is amorphous. Every shape borrows from nature's geometry: curves, spirals, clusters, and asymmetry.

6. **Everything grows from something.** Components emerge from surfaces rather than floating above them. Cards grow from the earth. Buttons rise from moss. Navigation emerges from bark. Nothing is disconnected from the ground.

## Core Material Recipes

### 1) Damp Earth Background

Wet soil canvas with subtle moisture gradients and organic texture.

- `bg-gradient-to-b from-[#1a1208] via-[#2a1a0e] to-[#1e1008]` (dark earth base, slightly warm).
- Moisture sheen: `bg-[radial-gradient(ellipse_at_25%_20%,rgba(64,192,160,0.03)_0%,transparent_50%)]` (faint bioluminescent humidity in upper region).
- Soil specks: `bg-[radial-gradient(rgba(100,80,50,0.12)_1px,transparent_1px)] bg-[size:6px_6px]` (fine dirt particles).
- Damp spots: `bg-[radial-gradient(circle_at_70%_60%,rgba(40,30,15,0.3)_0%,transparent_15%)]` (moisture-darkened patches).

### 2) Mushroom Cluster SVG

A cluster of mushrooms in varying sizes and cap shapes, growing from a shared base.

```html
<svg viewBox="0 0 120 90" class="w-full h-auto opacity-90">
  <!-- Large cap mushroom -->
  <ellipse cx="35" cy="25" rx="22" ry="16" fill="#8a6a4a"/>
  <ellipse cx="35" cy="23" rx="20" ry="14" fill="#7a5a3a"/>
  <ellipse cx="33" cy="20" rx="6" ry="3" fill="#e8dcc0" opacity="0.2"/>
  <!-- Gills under large cap -->
  <line x1="20" y1="36" x2="24" y2="42" stroke="#e8dcc0" stroke-width="0.5" opacity="0.4"/>
  <line x1="25" y1="38" x2="28" y2="44" stroke="#e8dcc0" stroke-width="0.5" opacity="0.3"/>
  <line x1="30" y1="39" x2="32" y2="46" stroke="#e8dcc0" stroke-width="0.5" opacity="0.4"/>
  <line x1="35" y1="40" x2="36" y2="47" stroke="#e8dcc0" stroke-width="0.5" opacity="0.3"/>
  <line x1="40" y1="39" x2="40" y2="46" stroke="#e8dcc0" stroke-width="0.5" opacity="0.4"/>
  <line x1="45" y1="38" x2="43" y2="44" stroke="#e8dcc0" stroke-width="0.5" opacity="0.3"/>
  <line x1="48" y1="36" x2="46" y2="42" stroke="#e8dcc0" stroke-width="0.5" opacity="0.4"/>
  <!-- Large stem -->
  <rect x="31" y="38" width="8" height="32" rx="3" fill="#c4b898"/>
  <!-- Small round-cap mushroom -->
  <ellipse cx="75" cy="40" rx="14" ry="11" fill="#8a6a4a"/>
  <ellipse cx="75" cy="38" rx="12" ry="9" fill="#9a7a5a"/>
  <!-- Small gills -->
  <line x1="66" y1="48" x2="68" y2="52" stroke="#e8dcc0" stroke-width="0.5" opacity="0.3"/>
  <line x1="71" y1="50" x2="72" y2="55" stroke="#e8dcc0" stroke-width="0.5" opacity="0.3"/>
  <line x1="76" y1="51" x2="76" y2="56" stroke="#e8dcc0" stroke-width="0.5" opacity="0.3"/>
  <line x1="81" y1="50" x2="80" y2="55" stroke="#e8dcc0" stroke-width="0.5" opacity="0.3"/>
  <line x1="85" y1="48" x2="83" y2="52" stroke="#e8dcc0" stroke-width="0.5" opacity="0.3"/>
  <!-- Small stem -->
  <rect x="72" y="50" width="6" height="22" rx="2" fill="#c4b898"/>
  <!-- Tiny bell-cap mushroom -->
  <ellipse cx="98" cy="52" rx="9" ry="7" fill="#7a5a3a"/>
  <ellipse cx="98" cy="50" rx="8" ry="5.5" fill="#8a6a4a"/>
  <!-- Tiny stem -->
  <rect x="96" y="56" width="4" height="14" rx="1.5" fill="#c4b898"/>
  <!-- Bioluminescent glow on cap edges -->
  <ellipse cx="35" cy="20" rx="18" ry="12" fill="none" stroke="#40c0a0" stroke-width="0.5" opacity="0.15"/>
  <ellipse cx="75" cy="36" rx="12" ry="9" fill="none" stroke="#40c0a0" stroke-width="0.5" opacity="0.1"/>
  <!-- Base moss -->
  <ellipse cx="55" cy="70" rx="45" ry="5" fill="#3a6a2a" opacity="0.4"/>
</svg>
```

### 3) Decaying Log Surface Card

Weathered bark texture with bioluminescent edge glow.

- Log base: `bg-gradient-to-r from-[#5a4a3a] via-[#4a3a2a] to-[#3a2a1a]` (weathered wood gradient).
- Bark grain: `bg-[repeating-linear-gradient(3deg,transparent_0px,transparent_4px,rgba(80,60,30,0.08)_4px,rgba(80,60,30,0.08)_5px)]` (subtle wood grain lines).
- Rot spots: `bg-[radial-gradient(circle_at_20%_50%,rgba(60,40,20,0.2)_0%,transparent_20%)]` (decomposition patches).
- Damp sheen: `bg-[radial-gradient(ellipse_at_80%_30%,rgba(64,192,160,0.04)_0%,transparent_30%)]` (bioluminescent moisture on bark).
- Border: `border border-[#3a2a1a]` (dark earth edge).
- Slight irregular shape: `[clip-path:polygon(0_2%,5%_0,20%_3%,45%_1%,70%_4%,95%_0,100_3%,98%_100%,80%_97%,50%_100%,20%_96%,0_100%)]`.

### 4) Bioluminescent Glow Effect

Soft green-blue radial glow for accents, hover states, and ambient light.

- Ambient panel glow: `shadow-[0_0_40px_rgba(64,192,160,0.08),0_0_80px_rgba(64,192,160,0.04)]`.
- Text accent: `text-[#40c0a0]` with `text-shadow: 0 0 12px rgba(64,192,160,0.3)` (glowing text).
- Hover intensification: `hover:shadow-[0_0_30px_rgba(64,192,160,0.15),0_0_60px_rgba(64,192,160,0.08)]`.
- Radial dot: `bg-[radial-gradient(circle,rgba(64,192,160,0.5)_0%,rgba(64,192,160,0.1)_40%,transparent_70%)]`.
- Pulsing animation (spore or glow pulse): `animate-[bioluminescent-pulse_4s_ease-in-out_infinite]` with keyframes fading opacity between 0.3 and 0.8.

### 5) Spore Particle Animation

Floating luminous dots drifting upward through the dark atmosphere.

```html
<div class="relative w-full h-64 overflow-hidden bg-[#1a1208]">
  <!-- Spore particles -->
  <div class="absolute inset-0" aria-hidden="true">
    <div class="absolute w-1 h-1 rounded-full bg-[#40c0a0] opacity-30 animate-[spore-float_8s_linear_infinite]" style="left:15%; animation-delay:0s; bottom:10%"></div>
    <div class="absolute w-0.5 h-0.5 rounded-full bg-[#40c0a0] opacity-20 animate-[spore-float_12s_linear_infinite]" style="left:30%; animation-delay:2s; bottom:5%"></div>
    <div class="absolute w-1.5 h-1.5 rounded-full bg-[#40c0a0] opacity-15 animate-[spore-float_10s_linear_infinite]" style="left:50%; animation-delay:4s; bottom:15%"></div>
    <div class="absolute w-0.5 h-0.5 rounded-full bg-[#d4d0c0] opacity-25 animate-[spore-float_14s_linear_infinite]" style="left:65%; animation-delay:1s; bottom:8%"></div>
    <div class="absolute w-1 h-1 rounded-full bg-[#40c0a0] opacity-20 animate-[spore-float_9s_linear_infinite]" style="left:80%; animation-delay:3s; bottom:12%"></div>
    <div class="absolute w-0.5 h-0.5 rounded-full bg-[#d4d0c0] opacity-18 animate-[spore-float_11s_linear_infinite]" style="left:42%; animation-delay:5s; bottom:3%"></div>
  </div>
</div>
```

Required keyframes:

```css
@keyframes spore-float {
  0% { transform: translateY(0) translateX(0); opacity: 0; }
  10% { opacity: var(--tw-opacity, 0.3); }
  90% { opacity: var(--tw-opacity, 0.2); }
  100% { transform: translateY(-250px) translateX(20px); opacity: 0; }
}
@keyframes bioluminescent-pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
}
```

### 6) Moss Carpet Texture

Fuzzy green surface for grounding elements, sidebar backgrounds, and decorative bands.

- Base: `bg-[#2a4a1a]` (deep moss green).
- Fuzzy texture: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_2px,rgba(80,120,40,0.1)_2px,rgba(80,120,40,0.1)_3px)]` (vertical fiber suggestion).
- Speckle overlay: `bg-[radial-gradient(rgba(100,160,50,0.08)_1px,transparent_1px)] bg-[size:4px_4px]` (tiny moss bumps).
- Damp variation: `bg-[radial-gradient(circle_at_60%_40%,rgba(50,80,30,0.15)_0%,transparent_30%)]` (darker wet patches in moss).
- Edge fade: `mask-image:linear-gradient(to_bottom,black_0%,black_70%,transparent_100%)` (moss thins at edges).

### 7) Fern Unfurl SVG (Fiddlehead Spiral)

A tightly coiled fern frond beginning to open.

```html
<svg viewBox="0 0 60 80" class="w-12 h-16 opacity-70">
  <!-- Stem -->
  <path d="M30 75 Q28 55 30 40" fill="none" stroke="#4a8a3a" stroke-width="3" stroke-linecap="round"/>
  <!-- Fiddlehead spiral -->
  <path d="M30 40 Q25 35 22 30 Q18 22 22 16 Q28 10 34 16 Q38 22 34 28 Q30 32 30 40" fill="none" stroke="#4a8a3a" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Inner spiral detail -->
  <path d="M30 38 Q27 34 26 30 Q25 25 28 22 Q31 19 33 23 Q34 27 32 30 Q30 33 30 38" fill="none" stroke="#3a6a2a" stroke-width="1.5" stroke-linecap="round"/>
  <!-- Bioluminescent edge glow -->
  <path d="M30 40 Q25 35 22 30 Q18 22 22 16 Q28 10 34 16 Q38 22 34 28" fill="none" stroke="#40c0a0" stroke-width="0.5" opacity="0.2"/>
</svg>
```

### 8) Damp Earth Content Panel

A content container that appears to emerge from the wet forest floor.

- Base: `bg-[#2a1a0e]` (dark damp earth).
- Top edge organic: `[clip-path:polygon(0_4%,8%_2%,15%_5%,30%_1%,50%_3%,70%_0%,85%_4%,92%_2%,100_5%,100_100%,0_100%)]`.
- Moisture gradient: `bg-[linear-gradient(180deg,rgba(64,192,160,0.03)_0%,transparent_30%,transparent_100%)]` (bioluminescent moisture at top).
- Border: `border border-[#3a2a1a]` (dark soil edge).
- Inner shadow: `shadow-[inset_0_2px_15px_rgba(0,0,0,0.4),inset_0_-1px_10px_rgba(64,192,160,0.02)]`.

### 9) Fungi Cluster Card

A card surface that hosts multiple small mushrooms along its bottom edge.

- Card base: `bg-[#2a1a0e] border border-[#3a2a1a] p-6 pb-12 relative overflow-hidden`.
- Bottom moss band: `absolute bottom-0 left-0 right-0 h-8 bg-[#2a4a1a] opacity-40`.
- Tiny mushroom silhouettes along bottom edge as inline SVG (3-5 small mushrooms of varying heights, `fill="#5a4a3a"`, positioned with `absolute bottom-6`).
- Content sits above the mushroom garden in pale cream text `text-[#d4d0c0]`.

### 10) Mushroom Button

Organic button shaped like a mushroom cap with gill texture.

- Base: `bg-gradient-to-b from-[#6a5a3a] to-[#4a3a2a] text-[#e8dcc0] font-serif font-medium px-8 py-3 rounded-t-full rounded-b-lg border border-[#3a2a1a]`.
- Gill texture on hover: `hover:bg-[linear-gradient(180deg,#6a5a3a_0%,#5a4a3a_100%)]`.
- Pressed state: `active:translate-y-0.5 active:shadow-none`.
- Subtle glow: `shadow-[0_2px_8px_rgba(64,192,160,0.08)] hover:shadow-[0_2px_16px_rgba(64,192,160,0.12)]`.
- Transition: `transition-all duration-200`.

### 11) Decaying Log Divider

A horizontal divider that looks like a fallen log separating content sections.

- Height: `h-3 relative overflow-hidden`.
- Wood body: `bg-gradient-to-r from-[#3a2a1a] via-[#5a4a3a] to-[#3a2a1a] rounded-full`.
- Bark detail: `bg-[repeating-linear-gradient(5deg,transparent_0px,transparent_3px,rgba(80,60,30,0.15)_3px,rgba(80,60,30,0.15)_4px)]`.
- Moss patches: two `absolute w-4 h-2 rounded-full bg-[#3a6a2a] opacity-30` at irregular positions.
- Tiny mushrooms growing from log: inline SVG, 2-3 tiny mushroom shapes along top edge.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Earth Dark | `#3a2a1a` | Primary background, borders |
| Earth Deep | `#1a1208` | Deepest background, void |
| Earth Mid | `#2a1a0e` | Surface panels, cards |
| Mushroom Cap | `#8a6a4a` | Mushroom caps, warm earth accent |
| Mushroom Cap Light | `#9a7a5a` | Cap highlights, lighter surfaces |
| Mushroom Gill Cream | `#e8dcc0` | Primary text, gill details, light accent |
| Spore Pale | `#d4d0c0` | Secondary text, spore particles |
| Bioluminescent | `#40c0a0` | Primary accent glow, hover states, links |
| Bioluminescent Dim | `#30a080` | Dimmed bioluminescent, borders |
| Moss Green | `#3a6a2a` | Moss surfaces, organic decoration |
| Moss Bright | `#4a8a3a` | Fern, living vegetation |
| Decay Brown | `#5a4a3a` | Weathered wood, decaying surfaces |
| Stem Cream | `#c4b898` | Mushroom stems, light warm neutral |

Rules: Dark earth tones dominate 80%+ of any surface. Bioluminescent green-blue appears in accents only, never as a background fill. Mushroom cap brown provides warm mid-tones. Cream/pale colors are reserved for text and fine detail. The palette reads as damp, dark, and softly glowing.

## Typography Recommendations

- **Display:** Cinzel Decorative, Cormorant Garamond, or EB Garamond (elegant serif with organic weight).
- **Body:** Lora, Crimson Text, or Spectral (warm readable serif with slight personality).
- **Labels:** `font-serif font-medium text-xs uppercase tracking-widest text-[#8a6a4a]` (earthy small caps).
- **Bioluminescent accent text:** `text-[#40c0a0] font-serif italic` with `text-shadow: 0 0 8px rgba(64,192,160,0.3)`.
- Typography should feel ancient, organic, and slightly mysterious -- like text carved into bark or illuminated in a fungal manuscript.

## Component Architecture Pattern

### Layout Shell

```
<mushroom-forest-shell>
  <moss-sidebar />        <!-- Left: moss carpet texture, navigation -->
  <main-content>          <!-- Center: damp earth background -->
    <spore-atmosphere />   <!-- Overlay: floating spore particles -->
    <decay-log-header />   <!-- Top: weathered log with title -->
    <fungi-cards />        <!-- Grid: mushroom cluster cards -->
    <fern-divider />       <!-- Section break: fern unfurl SVGs -->
    <bioluminescent-nav /> <!-- Bottom: glowing navigation dots -->
  </main-content>
  <damp-footer />          <!-- Dark earth footer with root-like lines -->
</mushroom-forest-shell>
```

### Card Hierarchy

1. **Damp Earth Panel** -- base container, dark soil surface.
2. **Decaying Log Card** -- weathered wood texture, primary content.
3. **Fungi Cluster Card** -- card with mushroom garden at bottom edge.
4. **Crystallized Sap Badge** -- small accent badge, amber-gold glow.

### Elevation Stack (bottom to top)

1. Deep earth void (`#1a1208`).
2. Damp earth surface (`#2a1a0e`).
3. Decaying log panel (`#5a4a3a` gradient).
4. Moss carpet accent (`#3a6a2a`).
5. Bioluminescent glow (`#40c0a0` radial, 8% opacity).

## Interaction Rules

### Hover

- Cards lift slightly: `hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(64,192,160,0.1)] transition-all duration-300`.
- Bioluminescent glow intensifies on hover: glow opacity increases from 8% to 15%.
- Mushroom caps slightly enlarge on hover: `hover:scale-105 transition-transform duration-300`.
- Spore density increases near hovered elements (CSS animation speed increases).

### Focus

- `focus:outline-none focus:ring-2 focus:ring-[#40c0a0]/30 focus:ring-offset-2 focus:ring-offset-[#1a1208]` (bioluminescent ring on dark earth offset).

### Active/Pressed

- Buttons sink into the moss: `active:translate-y-0.5 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]`.
- Active cards flatten: `active:translate-y-0 active:shadow-none`.

### Scroll

- Spore particles parallax at 0.3x scroll speed.
- Moss carpet edges fade in/out using `opacity` transitions triggered by intersection observer.
- Bioluminescent glow on header intensifies as user scrolls deeper (more darkness, more glow contrast).

### Transitions

- All transitions use `duration-300 ease-out` for organic, unhurried feel.
- No spring physics -- mushroom forest is slow, damp, and deliberate.
- Glow effects use `duration-500` for slower, more atmospheric pulsing.

## Reusable Tailwind Tokens

- Damp earth: `bg-[#2a1a0e] border border-[#3a2a1a]`.
- Deep earth void: `bg-[#1a1208]`.
- Decaying log: `bg-gradient-to-r from-[#5a4a3a] via-[#4a3a2a] to-[#3a2a1a]`.
- Moss carpet: `bg-[#2a4a1a] bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_2px,rgba(80,120,40,0.1)_2px,rgba(80,120,40,0.1)_3px)]`.
- Bioluminescent glow: `shadow-[0_0_30px_rgba(64,192,160,0.08)]`.
- Bioluminescent text: `text-[#40c0a0] text-shadow-[0_0_10px_rgba(64,192,160,0.3)]`.
- Mushroom button: `bg-gradient-to-b from-[#6a5a3a] to-[#4a3a2a] text-[#e8dcc0] rounded-t-full rounded-b-lg border border-[#3a2a1a]`.
- Spore particle: `w-1 h-1 rounded-full bg-[#40c0a0] opacity-30`.
- Log divider: `h-3 bg-gradient-to-r from-[#3a2a1a] via-[#5a4a3a] to-[#3a2a1a] rounded-full`.
- Fern accent: SVG `fill="#4a8a3a"` with `opacity-70`.
- Gilled text: `text-[#e8dcc0] font-serif`.
- Damp surface: `bg-[#2a1a0e] shadow-[inset_0_2px_15px_rgba(0,0,0,0.4)]`.

## Quality Checklist

- Background is dark damp earth (deep browns/near-blacks, not pure black).
- Bioluminescent glow appears as accent, never as background fill.
- At least one mushroom cluster or fungi SVG decoration present.
- At least one decaying wood or bark texture visible.
- Spore particles float in at least one atmospheric region.
- Moss carpet texture grounds at least one surface or section.
- Fern unfurl SVG or living vegetation accent present.
- Organic clip-path shapes used for at least one card or panel edge.
- Color palette is earth-dark dominant with bioluminescent accent.
- Typography is serif-based, warm, and slightly ancient-feeling.
- The aesthetic reads as mushroom forest / fungal undergrowth / bioluminescent damp.
- Everything feels damp, living, decomposing, and softly glowing.
- No pure white surfaces anywhere.
- No hard geometric rectangles without organic softening.

## Anti-Patterns

- Pure black (`#000000`) backgrounds (mushroom forest uses warm dark earth, not void black).
- Bright bioluminescent backgrounds (the glow is an accent, not a fill).
- Dry matte surfaces (everything is damp in the mushroom forest).
- Hard rectangular cards without organic edge treatment.
- Sans-serif typography (mushroom forest needs warm serif, not geometric sans).
- Missing mushroom or fungi motifs (these are essential).
- Missing moss or living vegetation (the forest floor is alive).
- Clean polished surfaces (mushroom forest is damp, decaying, organic).
- Bright saturated colors beyond the bioluminescent accent.
- Light or white text backgrounds (dark earth is the only canvas).
- Fast spring animations (mushroom forest is slow, damp, deliberate).
- Perfect symmetry (organic asymmetry is fundamental).
- Missing spore atmosphere (the air should feel alive).
- Neon or electric greens (bioluminescent is `#40c0a0`, not lime or neon).
- Wood textures without decay (mushroom forest wood is rotting, not polished).

## Accessibility Considerations

- Dark earth backgrounds with cream (`#e8dcc0`) or pale (`#d4d0c0`) text provide strong contrast. Verify WCAG AA minimum 4.5:1 for body text, 3:1 for large text.
- Bioluminescent accent color `#40c0a0` on dark earth `#1a1208` must be checked: use `#e8dcc0` for essential text, reserve `#40c0a0` for decorative accents and interactive states only.
- Focus rings use bioluminescent green-blue: `focus:ring-[#40c0a0]/30` -- visible against dark earth, distinct from hover glow.
- All decorative SVGs (mushrooms, ferns, spore particles) must have `aria-hidden="true"`.
- Spore particle animations must respect `prefers-reduced-motion: reduce` -- disable floating animations, show static particles instead.
- Organic clip-path shapes must not clip interactive content or cut off focus indicators.
- Touch targets remain at minimum 44x44px despite organic styling.
- The dark aesthetic reduces eye strain for extended viewing sessions.
- Color is never the sole indicator of state -- pair glow effects with text or icon changes for hover/active/focus states.
- Bioluminescent pulse animations pause on `prefers-reduced-motion: reduce`.
- High contrast mode: ensure all decorative gradients collapse to solid dark backgrounds with visible borders.
