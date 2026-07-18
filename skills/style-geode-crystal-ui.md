---
name: geode-crystal-ui
description: Build geode / crystal cave UI components (cracked geode exterior revealing crystal interior, amethyst cathedral formations, quartz clusters, crystal faceted surfaces, geode slice cross-sections, sparkling mineral textures) with rough-to-crystal contrast reveals, faceted gradient surfaces, and the stunning beauty of cracked-open mineral formations. Trigger this skill when the user asks for geode design, crystal cave UI, amethyst interface, mineral texture aesthetic, faceted crystal surfaces, or geode slice cross-section interfaces.
---

# Geode Crystal UI

Use this skill to design and implement geode-inspired interfaces: rough stone exteriors cracking open to reveal glittering crystal interiors, amethyst cathedral formations, quartz faceted surfaces, geode slice cross-sections, and the dramatic contrast between raw crust and luminous mineral.

## Non-Negotiable Foundations

- Geode Crystal UI is defined by DUALITY: a rough, muted exterior shell cracks open to reveal a luminous crystal interior. The contrast IS the design.
- Exterior surfaces are rough-textured browns and grays with irregular edges — like actual rock crust.
- Interior surfaces are faceted crystal gradients — amethyst purple, quartz clear, rose quartz pink — with light refraction and sparkle.
- The crack/reveal is the hero moment: an irregular split, jagged edge, or geode slice circle showing the crystal inside.
- Crystal surfaces use faceted gradients (angular, not smooth) and scattered sparkle dots to simulate light catching mineral faces.
- The aesthetic evokes DISCOVERY: the wonder of cracking open an ordinary-looking rock to find a hidden crystalline world.

## Core Material Recipes

### 1) Geode Exterior Card

The foundational element: rough stone exterior with a crack revealing crystal inside.

- Crust: `bg-[#6a5a4a]` with noise texture via CSS.
- Crack reveal: `clip-path` irregular polygon cutting through to crystal interior.
- Crystal interior: `bg-gradient-to-br from-[#8a4aaa] via-[#c890e0] to-[#3a2a4a]`.
- Full: `relative overflow-hidden bg-[#6a5a4a] border-2 border-[#4a3a2a] p-6` with inner crystal via clip-path child.

### 2) Crystal Cluster Accent

Triangular facet shapes simulating crystal growth, with light refraction gradients.

```html
<div class="relative w-24 h-32">
  <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-28 bg-gradient-to-t from-[#8a4aaa] to-[#c890e0] clip-path-[polygon(30%_0%,70%_0%,100%_100%,0%_100%)]"></div>
  <div class="absolute bottom-0 left-[30%] w-6 h-20 bg-gradient-to-t from-[#6a3a8a] to-[#e8e8ff] clip-path-[polygon(20%_0%,80%_0%,100%_100%,0%_100%)] opacity-80"></div>
  <div class="absolute bottom-0 right-[25%] w-5 h-24 bg-gradient-to-t from-[#5a2a7a] to-[#f0c0d0] clip-path-[polygon(25%_0%,75%_0%,100%_100%,0%_100%)] opacity-70"></div>
</div>
```

Each crystal spike is a tall trapezoid with a faceted gradient from dark base to bright tip.

### 3) Amethyst Cathedral Interior

Deep amethyst purple gradient simulating the inside of a geode cave, with crystal formations hanging from the top.

- Background: `bg-gradient-to-b from-[#3a2a4a] via-[#6a3a8a] to-[#8a4aaa]`.
- Crystal stalactites: downward-pointing triangular clips with lighter purple gradients.
- Inner glow: `shadow-[inset_0_0_60px_rgba(138,74,170,0.4)]`.
- Full: `bg-gradient-to-b from-[#3a2a4a] via-[#6a3a8a] to-[#8a4aaa] shadow-[inset_0_0_60px_rgba(138,74,170,0.4)] p-8`.

### 4) Geode Slice Circle

Concentric rings mimicking a geode cross-section: rough crust ring, white band, crystal center.

```css
.geode-slice {
  background: radial-gradient(
    circle,
    #8a4aaa 0%,
    #c890e0 15%,
    #e8e8ff 25%,
    #8a8a7a 35%,
    #6a5a4a 50%,
    #4a3a2a 60%,
    #6a5a4a 70%,
    #8a8a7a 80%,
    #6a5a4a 100%
  );
  border-radius: 50%;
}
```

### 5) Crystal Faceted Surface

Angular gradient panels that simulate light hitting crystal faces at different angles.

- `bg-[linear-gradient(135deg,#8a4aaa_0%,#c890e0_25%,#e8e8ff_50%,#c890e0_75%,#3a2a4a_100%)]`.
- Or use multiple overlapping polygonal divs with different gradient angles to simulate facet refraction.

### 6) Geode Crystal Button

Button with rough exterior border and crystal interior glow.

- `bg-gradient-to-r from-[#8a4aaa] to-[#c890e0] text-white font-bold px-8 py-3 border-2 border-[#6a5a4a] shadow-[0_0_20px_rgba(138,74,170,0.4)] hover:shadow-[0_0_30px_rgba(200,144,224,0.6)] transition-all`.

### 7) Sparkle / Light Dot Accent

Tiny scattered white dots simulating light catching crystal facets.

```html
<div class="absolute top-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse opacity-80"></div>
<div class="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-60" style="animation-delay: 0.3s"></div>
<div class="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-[#e8e8ff] rounded-full animate-pulse opacity-70" style="animation-delay: 0.7s"></div>
```

Multiple dots at different sizes, positions, and animation delays create a natural sparkle field.

## Color Palette System

### Mineral Palette

| Color | Hex | Role |
|---|---|---|
| Geode Crust Brown | `#6a5a4a` | Exterior shell, rough surface |
| Geode Crust Gray | `#8a8a7a` | Secondary crust, banding rings |
| Amethyst Purple | `#8a4aaa` | Primary crystal interior |
| Amethyst Light | `#c890e0` | Crystal highlights, faceted tips |
| Quartz Clear | `#e8e8ff` | Bright crystal surfaces, light catch |
| Quartz Rose | `#f0c0d0` | Rose quartz accents, warm crystal |
| Spark White | `#ffffff` | Light sparkle dots, facet reflections |
| Crystal Base | `#3a2a4a` | Deep interior, crystal shadows |

Rules: Exterior colors are muted earth tones — brown, gray, warm dark. Interior colors are luminous purples, clear whites, and soft pinks. The contrast between muted crust and vivid crystal is the defining visual. Sparkle dots are always white or near-white, small, and scattered.

## Typography Recommendations

Geode Crystal typography bridges natural ruggedness and crystalline precision:

- **Display headings:** Cinzel or Playfair Display (elegant serif with faceted letterforms).
- **Crystal accent:** Rajdhani or Orbitron (geometric, faceted-feeling sans-serif).
- **Body:** Lora or Crimson Text (warm serif, readable against dark backgrounds).
- **Labels:** `font-serif uppercase tracking-wider text-xs text-[#c890e0]`.
- Mix geometric sans-serif for data/labels with serif for narrative text. Avoid rounded fonts.

## Component Architecture Pattern

1. Dark crystal base background (`#3a2a4a` or darker).
2. Rough geode crust element (brown/gray with noise or jagged edges).
3. Irregular crack or geode slice revealing crystal interior.
4. Crystal cluster accents (triangular facets with refraction gradients).
5. Scattered sparkle dots (animated pulse on white micro-dots).
6. Faceted gradient surfaces (angular, not smooth).
7. Crystal-toned buttons and interactive elements with glow.

## Interaction Rules

- Default state: rough exterior visible, crystal glow hints at what lies inside.
- Hover: crystal glow intensifies through the crack (crack appears to widen with light).
  - `hover:shadow-[0_0_30px_rgba(138,74,170,0.6)] transition-all duration-300`.
- Active: `active:shadow-[0_0_10px_rgba(138,74,170,0.3)]` (glow contracts — pressed inward).
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#c890e0] focus:ring-offset-2 focus:ring-offset-[#3a2a4a]`.
- Transitions: `transition-all duration-300` (crystal glow changes are smooth, like light shifting).
- Sparkle animation: `animate-pulse` with staggered delays for natural scattered sparkle.

## Reusable Tailwind Tokens

- Crust surface: `bg-[#6a5a4a] border-2 border-[#4a3a2a]`
- Crystal interior: `bg-gradient-to-br from-[#8a4aaa] via-[#c890e0] to-[#3a2a4a]`
- Geode slice: `radial-gradient(circle, #8a4aaa 0%, #c890e0 15%, #e8e8ff 25%, #8a8a7a 35%, #6a5a4a 50%, #4a3a2a 60%, #6a5a4a 70%, #8a8a7a 80%, #6a5a4a 100%) rounded-full`
- Faceted surface: `bg-[linear-gradient(135deg,#8a4aaa_0%,#c890e0_25%,#e8e8ff_50%,#c890e0_75%,#3a2a4a_100%)]`
- Amethyst glow: `shadow-[0_0_20px_rgba(138,74,170,0.4)]`
- Crystal button: `bg-gradient-to-r from-[#8a4aaa] to-[#c890e0] text-white font-bold border-2 border-[#6a5a4a] shadow-[0_0_20px_rgba(138,74,170,0.4)]`
- Sparkle dot: `w-1 h-1 bg-white rounded-full animate-pulse`
- Crust ring: `border-4 border-[#8a8a7a]` (geode slice outer ring)

## Quality Checklist (must pass)

- Clear contrast between rough crust exterior and crystal interior.
- Crust colors are muted browns/grays; crystal colors are luminous purples/whites.
- At least one crack, reveal, or geode slice showing crystal inside.
- Crystal surfaces use faceted/angular gradients, not smooth radial.
- Scattered sparkle dots present (animated, white, small).
- Background is dark crystal base (`#3a2a4a` or darker).
- At least one crystal cluster accent (triangular facet shapes).
- Crystal glow effects present (colored box-shadow or inset shadow).
- Typography is sharp and geometric or elegant serif (no rounded fonts).
- The aesthetic reads as a cracked-open geode or crystal cave.

## Anti-Patterns

- Smooth, rounded gradients (crystal facets are angular and sharp — use linear, not radial, for surfaces).
- Bright exterior colors (crust must be muted earth tones — brown, gray, dark).
- Missing the contrast duality (the design MUST show rough-to-crystal transition).
- Flat surfaces without sparkle (crystal catches light — small animated dots are essential).
- Rounded, bubbly typography (geode is sharp and faceted, not soft).
- Light backgrounds (crystal caves are dark with internal light).
- Symmetrical, perfect patterns (geode cracks are irregular and organic).
- Missing glow effects (crystal interiors emit or refract light).
- Monochrome purple without crust contrast (the brown/gray exterior is half the story).
- Smooth, even edges on cracks (cracks must be jagged and irregular).

## Accessibility Considerations

- Crystal purples on dark backgrounds provide good contrast with light text.
- Quartz clear text (`#e8e8ff`) on amethyst backgrounds must be verified for WCAG AA.
- Sparkle animations must respect `prefers-reduced-motion` — replace with static dots.
- Focus states: `focus:ring-2 focus:ring-[#c890e0] focus:ring-offset-[#3a2a4a]` (visible ring on dark).
- Glow effects must not blur or obscure text content.
- Geode slice circles and crystal cluster SVGs must be `aria-hidden="true"`.
- Decorative sparkle dots must be `aria-hidden="true"` — they carry no information.
- Crystal facet gradients must maintain sufficient contrast for text overlay.
- Touch targets must be adequate despite decorative borders (`px-8 py-3` on buttons provides sufficient size).
