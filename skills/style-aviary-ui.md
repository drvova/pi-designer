---
name: aviary-ui
description: Build aviary UI components (mesh enclosure, tropical bird, nesting box, branch perch, water fountain, feather accent, flight path) with bird enclosure surfaces, feather textures, and the lively atmosphere of an aviary bird sanctuary. Trigger this skill when the user asks for aviary design, bird sanctuary UI, bird enclosure, tropical bird interface, zoo aviary, feather texture, parrot UI, nesting box aesthetic, flight path animation, or bird sanctuary-inspired design.
---

# Aviary / Bird Sanctuary UI

Use this skill to design and implement lively, warm interfaces inspired by bird aviaries and tropical bird sanctuaries: wire mesh enclosure panels, tropical bird silhouettes in vivid color, wooden nesting boxes, natural branch perches, splashing water fountains, iridescent feather accents, and dotted flight path arcs that trace the joyful movement of birds through open air.

## Non-Negotiable Foundations

Every aviary interface must satisfy these requirements or it is not an aviary:

1. **Wire mesh texture is the structural surface.** The aviary is an enclosure — wire grid patterns define the architecture. Every major panel or container must carry a subtle mesh grid overlay. The grid is the cage; the cage is the building. Flat untextured panels without mesh suggest a pet shop, not an aviary.

2. **Tropical bird color as the primary accent system.** Aviaries house tropical birds — parrots, toucans, macaws. The accent palette MUST include vivid tropical bird colors: parrot green, toucan orange, macaw blue. These are not decorations sprinkled on top; they are the chromatic identity of the space. A muted or monochrome interface is not an aviary.

3. **Natural wood and branch materials.** Perches, nesting boxes, and structural supports are wood. Brown wood tones `#6a4a2a` branch brown and `#8a6a3a` nest wood appear on at least one structural element per screen. The enclosure is built from natural materials, not sterile metal.

4. **Open sky as the background.** An aviary is an outdoor enclosure with sky visible through the mesh. Backgrounds must suggest open sky — light blue gradient or pale sky blue. The enclosure is airy and bright, not dark or enclosed.

5. **Movement and life in every view.** Birds move. Feathers drift. Water splashes. Flight paths arc. Every screen must include at least one element of motion — a floating feather, a drifting bird silhouette, a dotted flight path, or a water splash animation. An aviary without movement is a museum exhibit, not a living space.

## Core Material Recipes

### 1) Wire Mesh Enclosure Panel

The fundamental structural surface — a translucent panel with wire grid overlay suggesting the aviary mesh.

- `bg-white/20 backdrop-blur-md border border-gray-300/40 rounded-lg p-6 shadow-[0_0_20px_rgba(192,192,192,0.1)]`.
- Mesh grid: `bg-[linear-gradient(rgba(100,100,100,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(100,100,100,0.08)_1px,transparent_1px)] bg-[size:24px_24px]` (fine wire mesh at 24px spacing — like actual aviary hardware cloth).
- Sky behind: the panel should sit over a sky-blue gradient background so the mesh reads as enclosure over open air.

### 2) Sky Background

Open-air sky visible through and beyond the enclosure.

- `bg-gradient-to-b from-[#87ceeb] via-[#a8d8f0] to-[#d4ecf8]` (clear blue sky fading to pale horizon).
- Optional light clouds: `bg-[radial-gradient(ellipse_80px_30px_at_25%_35%,rgba(255,255,255,0.3),transparent),radial-gradient(ellipse_100px_25px_at_70%_55%,rgba(255,255,255,0.2),transparent)]` (wispy clouds behind the mesh).

### 3) Wooden Nesting Box

A warm brown wooden box with entrance hole — used as a card, info panel, or feature container.

- `bg-gradient-to-b from-[#a07840] to-[#8a6a3a] rounded-lg p-6 border border-[#6a4a2a] shadow-[0_4px_16px_rgba(80,50,20,0.2)]`.
- Wood grain: `bg-[repeating-linear-gradient(85deg,transparent,transparent_12px,rgba(106,74,42,0.08)_12px,rgba(106,74,42,0.08)_14px)]` (subtle horizontal grain lines).
- Entrance hole: `w-10 h-10 rounded-full bg-[#3a2a1a] border-2 border-[#5a3a1a] shadow-[inset_0_2px_8px_rgba(0,0,0,0.4)] mx-auto` (dark circular opening centered in the box face).

### 4) Branch Perch

A horizontal or diagonal tree branch used as a divider, underline, or decorative accent.

```html
<svg viewBox="0 0 400 40" class="w-full h-10 opacity-70">
  <g fill="none" stroke-linecap="round">
    <path d="M0,20 Q50,15 100,20 Q150,25 200,18 Q250,12 300,22 Q350,28 400,20" stroke="#6a4a2a" stroke-width="6"/>
    <path d="M0,20 Q50,15 100,20 Q150,25 200,18 Q250,12 300,22 Q350,28 400,20" stroke="#8a6a3a" stroke-width="3" opacity="0.5"/>
    <!-- bark texture knots -->
    <circle cx="80" cy="19" r="3" fill="#5a3a1a" opacity="0.3"/>
    <circle cx="220" cy="19" r="2.5" fill="#5a3a1a" opacity="0.25"/>
    <circle cx="340" cy="23" r="2" fill="#5a3a1a" opacity="0.3"/>
    <!-- small leaf -->
    <ellipse cx="160" cy="14" rx="8" ry="4" fill="#40c040" opacity="0.3" transform="rotate(-20 160 14)"/>
    <ellipse cx="280" cy="10" rx="7" ry="3.5" fill="#40c040" opacity="0.25" transform="rotate(15 280 10)"/>
  </g>
</svg>
```

- Container: `w-full overflow-hidden` (branch spans as a horizontal divider).
- The branch wobble path creates natural irregularity — not a straight ruler line.

### 5) Tropical Bird Silhouette

A colorful parrot, toucan, or macaw silhouette used as a decorative accent or logo element.

```html
<svg viewBox="0 0 80 70" class="w-20 h-17">
  <!-- Parrot body -->
  <ellipse cx="35" cy="40" rx="18" ry="22" fill="#40c040"/>
  <!-- Head -->
  <circle cx="38" cy="18" r="10" fill="#40c040"/>
  <!-- Beak -->
  <path d="M47,16 L58,12 L50,10 Z" fill="#e08020"/>
  <!-- Eye -->
  <circle cx="41" cy="16" r="2.5" fill="#1a1a1a"/>
  <circle cx="42" cy="15.5" r="0.8" fill="white"/>
  <!-- Wing -->
  <path d="M22,30 Q10,45 15,60 Q25,55 30,40" fill="#2e8a2e"/>
  <!-- Tail feathers -->
  <path d="M28,58 Q20,72 15,70 Q25,65 30,58" fill="#4080e0"/>
  <path d="M33,60 Q28,74 22,72 Q30,67 35,58" fill="#2070b0"/>
  <!-- Chest accent -->
  <ellipse cx="36" cy="42" rx="10" ry="14" fill="#60e060" opacity="0.4"/>
</svg>
```

Optional: gentle sway animation — `animate-[sway_4s_ease-in-out_infinite]` with `@keyframes sway { 0%,100% { transform: rotate(-2deg); } 50% { transform: rotate(2deg); } }`.

### 6) Water Fountain Splash

A decorative water element — splashing fountain with droplets for ambient life.

```html
<svg viewBox="0 0 60 50" class="w-15 h-12 opacity-50">
  <!-- Fountain base -->
  <ellipse cx="30" cy="45" rx="20" ry="5" fill="#a0c8e0" opacity="0.4"/>
  <!-- Water jet -->
  <path d="M30,45 Q28,25 30,10" stroke="#40a0d0" stroke-width="2" fill="none" opacity="0.6"/>
  <path d="M30,45 Q32,28 28,12" stroke="#87ceeb" stroke-width="1.5" fill="none" opacity="0.4"/>
  <!-- Droplets -->
  <circle cx="25" cy="14" r="1.5" fill="#87ceeb" opacity="0.7"/>
  <circle cx="35" cy="11" r="1" fill="#87ceeb" opacity="0.6"/>
  <circle cx="20" cy="18" r="1.2" fill="#40a0d0" opacity="0.5"/>
  <circle cx="38" cy="16" r="0.8" fill="#40a0d0" opacity="0.4"/>
  <circle cx="30" cy="8" r="1" fill="#87ceeb" opacity="0.8"/>
</svg>
```

Splash animation: droplets on a slow rise-and-fall cycle. `@keyframes splash { 0%,100% { transform: translateY(0); opacity: 0.7; } 50% { transform: translateY(-4px); opacity: 0.4; } }` with staggered `animation-delay` on each circle.

### 7) Feather Accent

A flowing, iridescent feather shape that drifts across panels or corners.

```html
<svg viewBox="0 0 30 80" class="w-8 h-20 opacity-30">
  <!-- Feather shaft -->
  <path d="M15,0 L15,80" stroke="#c0c0c0" stroke-width="0.8"/>
  <!-- Left barbs -->
  <path d="M15,10 Q5,15 3,20 Q8,18 15,15" fill="#40c040" opacity="0.4"/>
  <path d="M15,20 Q3,28 1,35 Q8,30 15,25" fill="#4080e0" opacity="0.35"/>
  <path d="M15,30 Q2,40 0,48 Q9,42 15,35" fill="#e08020" opacity="0.3"/>
  <path d="M15,40 Q4,50 2,58 Q10,52 15,45" fill="#40c040" opacity="0.25"/>
  <!-- Right barbs -->
  <path d="M15,10 Q25,15 27,20 Q22,18 15,15" fill="#40c040" opacity="0.4"/>
  <path d="M15,20 Q27,28 29,35 Q22,30 15,25" fill="#4080e0" opacity="0.35"/>
  <path d="M15,30 Q28,40 30,48 Q21,42 15,35" fill="#e08020" opacity="0.3"/>
  <path d="M15,40 Q26,50 28,58 Q20,52 15,45" fill="#40c040" opacity="0.25"/>
  <!-- Iridescent tip -->
  <path d="M15,55 Q8,65 10,75 Q15,70 20,75 Q22,65 15,55" fill="url(#feather-gradient)" opacity="0.5"/>
</svg>
<defs>
  <linearGradient id="feather-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#40c040"/>
    <stop offset="33%" stop-color="#4080e0"/>
    <stop offset="66%" stop-color="#e08020"/>
    <stop offset="100%" stop-color="#40c040"/>
  </linearGradient>
</defs>
```

Drift animation: `@keyframes feather-drift { 0% { transform: translate(0,0) rotate(0deg); } 25% { transform: translate(8px,12px) rotate(5deg); } 50% { transform: translate(-4px,24px) rotate(-3deg); } 75% { transform: translate(6px,36px) rotate(4deg); } 100% { transform: translate(0,48px) rotate(0deg); } }` with `animation: feather-drift 8s ease-in-out infinite`.

### 8) Flight Path Arc

A dotted curved arc representing a bird's flight trajectory — used as a decorative connector or section divider.

```html
<svg viewBox="0 0 400 80" class="w-full h-20">
  <path d="M20,60 Q100,10 200,30 Q300,50 380,15" stroke="#c0c0c0" stroke-width="1.5" stroke-dasharray="4,8" fill="none" opacity="0.4"/>
  <!-- Tiny bird silhouette at end of path -->
  <path d="M378,13 L385,10 L378,14 L385,16 L378,13" fill="#40c040" opacity="0.6"/>
</svg>
```

Container: `w-full overflow-hidden`. The bird silhouette sits at the arc's endpoint, giving the eye a destination. Dash array creates the dotted trail effect. Optional: animate the bird silhouette traveling along the path with SVG `<animateMotion>`.

### 9) Aviary Button

Warm, lively button with bird-enclosure energy.

- `bg-gradient-to-b from-[#40c040] to-[#2e8a2e] text-white font-medium rounded-full px-8 py-3 border border-[#1a6a1a] shadow-[0_3px_10px_rgba(64,192,64,0.25)] hover:shadow-[0_0_18px_rgba(64,192,64,0.35)] hover:scale-[1.02] transition-all duration-300`.

### 10) Bird Species Label

A small tag showing bird species name in a naturalist style.

- `bg-white/80 backdrop-blur-sm border border-[#c0c0c0]/40 rounded-full px-3 py-1 text-xs font-medium text-[#3a3a3a] tracking-wide` (clean tag for species identification).

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Sky Blue | `#87ceeb` | Primary background — open air |
| Pale Sky | `#d4ecf8` | Horizon fade — sky gradient bottom |
| Mesh Silver | `#c0c0c0` | Structural — wire grid, mesh panels |
| Parrot Green | `#40c040` | Primary accent — parrot plumage |
| Toucan Orange | `#e08020` | Secondary accent — toucan beak, warmth |
| Macaw Blue | `#4080e0` | Tertiary accent — macaw wing |
| Nest Wood | `#8a6a3a` | Card surfaces — nesting boxes |
| Branch Brown | `#6a4a2a` | Structural — perches, supports |
| Branch Dark | `#5a3a1a` | Deep wood — knots, shadows |
| Leaf Green | `#2e8a2e` | Button secondary — vegetation |
| Water Light | `#40a0d0` | Fountain — water accents |
| Feather Iridescent | gradient | Decorative — shifting rainbow |

Rules: Sky blue is the omnipresent backdrop — the aviary is always open-air. Mesh silver defines structure. Tropical bird colors (green, orange, blue) are the accent system — use them liberally on interactive elements, labels, and decorative SVGs. Wood browns ground the enclosure in natural material. The palette should feel vivid, warm, and alive — like standing inside a tropical bird house at the zoo.

Secondary tints for gradients and depth:

| Tint | Hex | Use |
|---|---|---|
| Sky Deep | `#a8d8f0` | Mid-sky gradient |
| Mesh Light | `rgba(192,192,192,0.08)` | Subtle mesh grid lines |
| Green Dark | `#1a6a1a` | Button shadow, deep accent |
| Wood Deep | `#3a2a1a` | Nesting box interior, hole |
| Orange Deep | `#c06810` | Toucan beak shadow |
| Blue Deep | `#2060b0` | Macaw wing shadow |

## Typography Recommendations

- **Display:** DM Serif Display, Fraunces (warm organic serif with naturalist character — like field guide headings).
- **Body:** DM Sans, Nunito (friendly, rounded, warm sans-serif for readability).
- **Labels:** `font-medium text-xs tracking-wide uppercase` for species tags and enclosure labels.
- **Accents:** `font-serif italic text-sm` for scientific bird names (like *Ara ararauna* for blue-and-gold macaw).
- Typography should feel warm, natural, and lively — like a well-illustrated bird field guide. Avoid cold geometric typefaces. The tone is educational joy, not clinical taxonomy.

## Component Architecture Pattern

Aviary interfaces follow a layered enclosure architecture — the sky is always visible, the mesh defines the structure, and bird elements move freely within.

**Depth layers (back to front):**

1. **Sky layer** — the open-air background gradient. Never interactive. Pure atmosphere with optional clouds.
2. **Enclosure layer** — wire mesh panels, structural containers. Cards, grids, sidebars. The cage walls.
3. **Nature layer** — branches, nesting boxes, water fountains. Organic wooden elements that provide perch and shelter.
4. **Bird layer** — tropical bird silhouettes, feather accents, flight path arcs. The living inhabitants.
5. **Interactive layer** — buttons, inputs, links. Aviary-green with tropical bird accents.

**Component composition:**

```
AviaryContainer (sky bg)
  ├─ MeshPanel (enclosure structure)
  │   ├─ NestingBox (info card)
  │   ├─ WaterFountain (ambient element)
  │   └─ BranchPerch (divider / separator)
  ├─ BirdSilhouette (decorative accent)
  ├─ FlightPathArc (section connector)
  └─ FeatherAccent (floating decoration)
```

**State patterns:**

- Default: bright sky, mesh texture visible, tropical bird colors on accents.
- Hover: bird color intensifies — `shadow-[0_0_18px_rgba(64,192,64,0.35)]` with gentle `scale-[1.02]`. The bird notices your presence.
- Active: `active:scale-[0.98]` (quick press feedback — like a bird hopping on a branch).
- Disabled: `opacity-40 saturate-50` (faded bird, not dead — still visible but inactive).
- Loading: feather drift animation plays — a floating feather signals waiting.

## Interaction Rules

1. **Hover is a bird noticing you.** When a user hovers an interactive element, the tropical bird color glows brighter and the element lifts slightly (`scale-[1.02]`). Use `box-shadow` with the accent color at `0.25` to `0.35` opacity. The interaction should feel like catching a bird's attention — gentle, organic, lively. Never use harsh white glows or aggressive scale changes.

2. **Transitions are bird-speed — quick but natural.** Use `duration-300` as the baseline. Birds are fast but not mechanical. `transition-all duration-300 ease-out` for hover states. `duration-200` for click feedback. Nothing should feel sluggish (the aviary is active) or snappy (the aviary is natural, not digital).

3. **Scrolling reveals flight paths.** As users scroll down, decorative flight path arcs and feather accents should enter from the edges. Parallax depth is encouraged — sky stays still, mesh moves slowly, bird elements move at full speed. This creates the layered enclosure depth.

4. **Buttons are perches.** Primary buttons should feel like something a bird could land on — rounded, warm-colored, with a subtle shadow that suggests it sits above the surface. `shadow-[0_3px_10px_rgba(64,192,64,0.25)]` provides this lifted perch feel.

5. **Focus rings are parrot green.** Keyboard focus must use `focus:ring-2 focus:ring-[#40c040]/60 focus:ring-offset-2 focus:ring-offset-white` — green ring on white offset, like a bird's bright plumage marking the active element.

6. **Click feedback is a hop.** On click, elements briefly compress (`active:scale-[0.98]`) and spring back, like a bird hopping. Quick `duration-150` on the transform for snappy feedback.

7. **Tooltips perch on top.** Tooltips appear above their trigger (like a bird perching on a branch above) with a small downward-pointing arrow. The tooltip itself is a mesh-textured panel with the sky gradient peeking through. `data-[side=bottom]:slide-in-from-bottom-2` with `data-[side=top]:slide-in-from-top-2`.

## Reusable Tailwind Tokens

- Sky background: `bg-gradient-to-b from-[#87ceeb] via-[#a8d8f0] to-[#d4ecf8]`.
- Mesh panel: `bg-white/20 backdrop-blur-md border border-gray-300/40 rounded-lg shadow-[0_0_20px_rgba(192,192,192,0.1)]`.
- Mesh grid overlay: `bg-[linear-gradient(rgba(100,100,100,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(100,100,100,0.08)_1px,transparent_1px)] bg-[size:24px_24px]`.
- Nesting box: `bg-gradient-to-b from-[#a07840] to-[#8a6a3a] rounded-lg border border-[#6a4a2a] shadow-[0_4px_16px_rgba(80,50,20,0.2)]`.
- Wood grain: `bg-[repeating-linear-gradient(85deg,transparent,transparent_12px,rgba(106,74,42,0.08)_12px,rgba(106,74,42,0.08)_14px)]`.
- Aviary button: `bg-gradient-to-b from-[#40c040] to-[#2e8a2e] rounded-full border border-[#1a6a1a] shadow-[0_3px_10px_rgba(64,192,64,0.25)]`.
- Species label: `bg-white/80 backdrop-blur-sm border border-[#c0c0c0]/40 rounded-full text-xs font-medium text-[#3a3a3a]`.
- Scientific name: `font-serif italic text-sm text-[#2e8a2e]`.
- Branch divider: wavy SVG path in `#6a4a2a` with leaf ellipses in `#40c040/30`.
- Feather SVG: iridescent gradient from green to blue to orange.
- Flight path: `stroke-dasharray="4,8"` in `#c0c0c0` with bird silhouette endpoint.
- Parrot green glow: `shadow-[0_0_12px_rgba(64,192,64,0.3)]`.
- Water splash: SVG droplets in `#87ceeb` and `#40a0d0` with rise-fall animation.

## Quality Checklist

- At least one mesh-textured panel with wire grid overlay visible.
- Sky blue gradient is the dominant background (open-air atmosphere).
- Tropical bird colors (green, orange, blue) appear as accent system — at least two of three.
- At least one natural wood element (nesting box, branch perch, or wooden card).
- At least one decorative bird SVG (parrot silhouette, toucan, or macaw).
- Flight path arc or feather drift animation provides movement.
- Water fountain splash element present (even as a small decorative detail).
- Branch perch divider or underline on at least one section.
- Typography is warm and organic (DM Serif Display or Fraunces for headings).
- The aesthetic reads as an aviary / bird sanctuary / tropical bird house.
- Every interactive element has parrot-green focus ring.
- The overall mood is warm, bright, lively, and joyful.
- Mesh grid pattern is fine enough to read as wire (24px spacing), not a coarse checkerboard.
- At least one scientific bird name in italic serif (field guide authenticity).

## Anti-Patterns

- Dark or moody palettes (aviaries are bright, open-air, sunlit spaces).
- Missing mesh/enclosure texture (the wire grid is the defining architectural feature).
- Cold monochrome with no tropical bird color (the birds bring the color).
- Opaque solid panels without any sky visible (the aviary is open to the sky).
- Missing natural wood elements (perches and nesting boxes are essential).
- Harsh geometric sans-serif display type (aviary typography is warm and organic).
- Static lifeless pages with no movement (birds move — feathers drift — water splashes).
- Missing bird silhouettes or feather decorations (these are the inhabitants).
- Dark forest or jungle background instead of sky (aviaries look UP at the sky, not down at the ground).
- Neon or electric accent colors (tropical bird colors are vivid but natural, not synthetic).
- Cluttered dense layouts (aviaries have open space for flight — breathing room is essential).
- Missing the dotted flight path (these arcs trace the joyful movement through the enclosure).
- Metallic or industrial aesthetics (the aviary is natural wood and mesh, not steel and glass).
- Aggressive hover animations with large scale changes (birds hop, they don't lunge).

## Accessibility Considerations

- **Contrast ratios.** Mesh panel text: `text-[#3a3a3a]` on `bg-white/20` over sky blue provides adequate contrast (~7:1 on the combined surface). Dark wood text: `text-white` on `#8a6a3a` yields approximately 5.8:1 — pass AA. Tropical bird green `#40c040` on white yields approximately 3.2:1 — use only for large text (24px+) or decorative elements. For interactive text on green buttons, `text-white` on `#2e8a2e` yields approximately 5.5:1 — pass AA.

- **Focus visibility.** Parrot green focus rings (`#40c040`) on white offset backgrounds provide strong visual contrast for keyboard users. `ring-offset-white` ensures the ring separates clearly from both the element and the sky background.

- **Reduced motion.** All feather drift, bird sway, flight path, and water splash animations must respect `prefers-reduced-motion: reduce`. Replace animations with their static end-state or a subtle opacity pulse. `@keyframes feather-drift` and `@keyframes sway` become `animate-none` with elements at their resting position. Water splash droplets become static.

- **Color independence.** Never use tropical bird colors alone to indicate state. Pair color changes with structural changes — border weight, text weight, icon change, or size shift. A user who cannot distinguish green from orange will still understand the interactive state.

- **Touch targets.** All interactive elements must meet the 44x44px minimum touch target. Mesh panels, nesting box cards, and branch-perch buttons must all accommodate this. Generous padding (`px-8 py-3` minimum on buttons) ensures usability on touch devices.

- **Semantic HTML.** Mesh panels should use `<section>` or `<article>`. Navigation should use `<nav>`. Nesting box cards should use appropriate ARIA roles if they are interactive. Branch perch SVGs and feather accents are decorative — `aria-hidden="true"`. Bird silhouette SVGs are decorative unless they carry informational content (species illustration), in which case they need `aria-label`.

- **Text alternatives.** Decorative elements (feathers, flight paths, water fountains, branch perches) must have `aria-hidden="true"` or `role="presentation"`. Tropical bird silhouettes that are purely decorative get `aria-hidden="true"`. Any bird SVG that illustrates a species must have `aria-label="Parrot illustration"` or equivalent.

- **Mesh grid contrast.** The wire mesh overlay must remain subtle enough that it never interferes with text readability. At `rgba(100,100,100,0.08)` the grid is visible as texture but never competes with content. Test at all text sizes to confirm readability.

- **Animation seizure safety.** Feather drift and bird sway animations must stay below 3 flashes per second. The recommended 4-8 second cycles are well within safe limits. Water splash droplet animations must not create strobing effects — keep stagger delays generous (200ms+ between droplets).
