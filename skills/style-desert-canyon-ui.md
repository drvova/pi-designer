---
name: desert-canyon-ui
description: Build desert canyon UI components (red rock walls, layered strata, narrow slot, sand floor, distant mesa, heat shimmer, hawk overhead) with layered geological colors, heat distortion effects, and the vast silence of desert canyons. Trigger this skill when the user asks for desert canyon design, slot canyon aesthetic, layered rock strata, red sandstone interface, heat shimmer animation, mesa silhouette, desert sky gradient, arid landscape UI, geological layer colors, or canyon-depth visual effects.
---

# Desert Canyon UI

Use this skill to design and implement interfaces inspired by the American desert canyon: layered sandstone walls rising in bands of ochre and rust, the narrow perspective of a slot canyon with converging rock faces, warm sand underfoot, distant mesa silhouettes against a hot blue sky, the visible shimmer of heat rising from sun-baked rock, a hawk circling overhead against the vast sky, and the profound silence and scale of deep desert geology.

## Non-Negotiable Foundations

- Desert Canyon UI simulates the vast American desert canyon: layered sandstone walls with visible geological strata in horizontal color bands, the converging perspective of a narrow slot canyon, warm sand floor textures, distant mesa silhouettes, visible heat shimmer distortion, a hawk circling overhead, and the deep hot blue sky overhead.
- Layered rock strata is the SIGNATURE background treatment — horizontal bands of geological colors (sandstone red, sandstone orange, canyon shadow, sand warm) stacked in natural sedimentary layers, each band with slightly different texture and width. Every primary surface should reference this stratification.
- The narrow slot canyon perspective is the signature layout metaphor — converging walls that narrow toward the center of the viewport, creating a sense of being deep within a rock passage. Content panels sit between these converging walls.
- The sand floor texture is the signature content surface — warm grain pattern evoking sun-baked desert sand, used for card backgrounds, input fields, and content areas.
- The distant mesa silhouette is the signature horizon accent — a flat-topped butte shape against the sky, used as section dividers, header decorations, and landscape framing elements.
- Heat shimmer animation is the signature environmental effect — a subtle wavy vertical distortion that simulates heat rising from sun-baked surfaces, used on backgrounds and ambient layers.
- The hawk silhouette is the signature life element — a small bird soaring shape used sparingly for loading indicators, scroll-to-top markers, and moments of movement in the otherwise still landscape.
- The desert sky gradient is the signature overhead treatment — a deep hot blue fading to pale warm at the horizon, used for header sections and the upper portion of layouts.
- Colors are sandstone red, sandstone orange, canyon shadow, sand warm, mesa dark, hot blue sky, heat shimmer white-translucent, and rock dark — the palette of a sun-baked desert canyon at midday.
- The aesthetic is vast, still, hot, ancient, and overwhelmingly horizontal — layers of geology stretching to the horizon with the occasional hawk breaking the silence.

## Core Material Recipes

### 1) Layered Rock Strata Background

The signature geological horizontal banding for primary surfaces and hero sections.

- Canyon base: `bg-gradient-to-b from-[#d49060] via-[#c47040] to-[#4a2a1a] relative overflow-hidden`.
- Primary strata (thick geological bands): `before:absolute before:inset-0 before:bg-[repeating-linear-gradient(180deg,transparent_0px,transparent_24px,rgba(196,112,64,0.4)_24px,rgba(196,112,64,0.4)_28px,transparent_28px,transparent_50px,rgba(212,144,96,0.3)_50px,rgba(212,144,96,0.3)_55px,transparent_55px,transparent_80px,rgba(74,42,26,0.25)_80px,rgba(74,42,26,0.25)_84px,transparent_84px,transparent_110px)]`.
- Secondary strata (thinner fine-grain layers): `after:absolute after:inset-0 after:bg-[repeating-linear-gradient(180deg,transparent_0px,transparent_8px,rgba(196,112,64,0.08)_8px,rgba(196,112,64,0.08)_9px,transparent_9px,transparent_15px,rgba(212,184,120,0.06)_15px,rgba(212,184,120,0.06)_16px,transparent_16px,transparent_22px)]`.
- Strata erosion texture: child element `absolute inset-0 bg-[repeating-linear-gradient(175deg,transparent_0px,transparent_3px,rgba(0,0,0,0.04)_3px,rgba(0,0,0,0.04)_4px)]` (subtle angled erosion lines across the strata).
- Shadow crevice: `bg-gradient-to-r from-[rgba(74,42,26,0.4)] via-transparent to-[rgba(74,42,26,0.4)]` (dark crevice shadows on canyon wall edges).
- Strata color variation: individual band children with slightly shifted colors `bg-[#c87848]`, `bg-[#b86838]`, `bg-[#d49468]` for natural geological variation between layers.
- Sun-bleached top layer: `bg-gradient-to-b from-[rgba(212,184,120,0.3)] to-transparent h-16` (the uppermost layer is lighter from sun exposure).

### 2) Narrow Slot Canyon Perspective

Converging rock walls creating the slot canyon passage layout for content framing.

- Left wall: `absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-[#4a2a1a] via-[#6a3a22] to-transparent [clip-path:polygon(0_0,100%_5%,100%_95%,0_100%)]`.
- Right wall: `absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-[#4a2a1a] via-[#6a3a22] to-transparent [clip-path:polygon(0_5%,100%_0,100%_100%,0_95%)]`.
- Wall texture (eroded rock): `bg-[repeating-linear-gradient(170deg,transparent,transparent_2px,rgba(0,0,0,0.08)_2px,rgba(0,0,0,0.08)_3px)]` on each wall.
- Narrow passage (content area): centered column between walls, `max-w-2xl mx-auto relative z-10`.
- Light shaft from above: `absolute top-0 left-1/2 -translate-x-1/2 w-32 h-full bg-gradient-to-b from-[rgba(212,184,120,0.1)] to-transparent [clip-path:polygon(35%_0,65%_0,80%_100%,20%_100%)]` (narrow light falling into the slot).
- Canyon depth effect: walls get darker toward the bottom (`opacity-70` at top, `opacity-100` at bottom) to show depth.
- Slot opening at top: `bg-[#6aa0cc]` visible through a narrow gap between wall tops (sky visible through the slot).

### 3) Sand Floor Texture

Warm grain surface for content areas, cards, and input fields.

- Sand surface: `bg-[#d4b878] relative`.
- Grain texture: `before:absolute before:inset-0 before:bg-[radial-gradient(rgba(180,140,80,0.15)_1px,transparent_1px)] before:bg-[size:4px_4px]` (fine sand grain dots).
- Coarse grain overlay: `after:absolute after:inset-0 after:bg-[radial-gradient(rgba(160,120,60,0.1)_1px,transparent_1px)] after:bg-[size:7px_7px] after:bg-[position:2px_2px]` (larger grain offset).
- Wind ripple pattern: `bg-[repeating-linear-gradient(95deg,transparent,transparent_20px,rgba(180,140,80,0.08)_20px,rgba(180,140,80,0.08)_22px)]` (subtle wind-formed ripple lines).
- Sand dune gradient: `bg-gradient-to-b from-[#d4b878] via-[#c4a868] to-[#b49858]` (darker sand in shadow areas).
- Footprint indent: `bg-[radial-gradient(ellipse,rgba(160,120,60,0.15)_0%,transparent_60%)] w-8 h-12` (optional decorative element).
- Hot sand glow: `shadow-[inset_0_0_20px_rgba(212,144,96,0.1)]` (warmth radiating from the surface).

### 4) Distant Mesa Silhouette

Flat-topped butte shape for section dividers, header decorations, and landscape framing.

- Mesa shape SVG:
```html
<svg viewBox="0 0 800 60" class="w-full h-12 opacity-20" preserveAspectRatio="none">
  <path d="M0 60 L200 60 L240 20 L280 18 L520 18 L560 22 L600 60 L800 60 Z" fill="#6a4a2a"/>
</svg>
```
- Mesa divider: horizontal divider using the mesa SVG silhouette at the bottom of sections.
- Multiple meses (farther): smaller, more faded versions `opacity-10 scale-x-75` behind the primary mesa.
- Mesa with hawk: small hawk SVG positioned above the mesa peak.
- Mesa footer: full-width mesa silhouette closing the bottom of the page.
- Mesa in header: mesa silhouette as a framing element below the sky gradient.

### 5) Heat Shimmer Animation

Subtle wavy distortion simulating heat rising from sun-baked rock and sand.

- Heat shimmer container: `relative overflow-hidden`.
- Shimmer wave 1: `absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.02)_20%,transparent_40%,rgba(255,255,255,0.03)_60%,transparent_80%,rgba(255,255,255,0.02)_100%)] animate-[heat-shimmer_4s_ease-in-out_infinite]`.
- Shimmer wave 2: offset timing `animate-[heat-shimmer_5s_ease-in-out_1s_infinite]` for layered distortion.
- CSS filter approach: `filter: url(#heat-distortion)` with an SVG turbulence filter for actual pixel displacement.
- SVG turbulence filter:
```html
<svg class="hidden"><defs>
  <filter id="heat-distortion">
    <feTurbulence type="turbulence" baseFrequency="0.01 0.06" numOctaves="2" seed="2" result="turbulence">
      <animate attributeName="baseFrequency" dur="8s" values="0.01 0.06;0.012 0.07;0.01 0.06" repeatCount="indefinite"/>
    </feTurbulence>
    <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="3" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
</defs></svg>
```
- Subtle heat haze: `backdrop-blur-[0.5px]` on the shimmer overlay for a soft blur effect.
- Hot zone intensifier: `bg-[rgba(255,255,255,0.04)] animate-[heat-shimmer_3s_ease-in-out_infinite]` (faster shimmer in hottest areas).

Heat shimmer keyframes:
```css
@keyframes heat-shimmer {
  0%, 100% { transform: translateY(0) scaleY(1); opacity: 0.5; }
  25% { transform: translateY(-1px) scaleY(1.002); opacity: 0.7; }
  50% { transform: translateY(0) scaleY(0.998); opacity: 0.4; }
  75% { transform: translateY(1px) scaleY(1.001); opacity: 0.6; }
}
```

### 6) Hawk Silhouette

A soaring hawk shape for loading indicators, scroll markers, and moments of movement.

- Hawk SVG:
```html
<svg viewBox="0 0 60 20" class="w-12 h-4 opacity-40">
  <path d="M30 8 Q25 2 15 5 Q10 6 5 8 Q10 7 15 8 Q20 9 25 10 L30 12 L35 10 Q40 9 45 8 Q50 7 55 8 Q50 6 45 5 Q35 2 30 8Z" fill="#3a2a1a"/>
</svg>
```
- Soaring circle: hawk orbits a point with slow circular animation.
- Soaring linear: hawk glides from one side to the other across the viewport.
- Hawk above mesa: positioned above the mesa silhouette on the horizon.
- Hawk as loader: circular soaring animation replaces traditional spinner.
- Hawk in sky: positioned in the desert sky gradient section, small against the vast blue.

Hawk soar keyframes:
```css
@keyframes hawk-soar {
  0% { transform: translateX(0) translateY(0) rotate(0deg); }
  25% { transform: translateX(10px) translateY(-3px) rotate(2deg); }
  50% { transform: translateX(20px) translateY(0) rotate(0deg); }
  75% { transform: translateX(10px) translateY(3px) rotate(-2deg); }
  100% { transform: translateX(0) translateY(0) rotate(0deg); }
}
```

### 7) Desert Sky Gradient

The hot blue sky overhead fading to warm at the horizon.

- Sky gradient: `bg-gradient-to-b from-[#4a88b8] via-[#6aa0cc] to-[#d49060]`.
- Horizon glow: `after:absolute after:bottom-0 after:inset-x-0 after:h-16 after:bg-[linear-gradient(to_bottom,transparent,rgba(212,144,96,0.3))]` (warm glow at horizon line).
- Sun position: `bg-[radial-gradient(circle_at_70%_30%,rgba(255,240,200,0.15)_0%,transparent_40%)]` (distant sun in the sky).
- Sky depth: lighter at the horizon (`#d49060`), deeper at the zenith (`#4a88b8`).
- Hot sky variant: `bg-gradient-to-b from-[#5a90c0] via-[#7aaccc] to-[#e0a870]` (warmer midday sky).
- Evening sky: `bg-gradient-to-b from-[#2a4a78] via-[#8a6a5a] to-[#c47040]` (canyon at sunset).
- Cloud wisps: `bg-[radial-gradient(ellipse_at_60%_20%,rgba(255,255,255,0.06)_0%,transparent_50%)]` (faint high-altitude clouds).

### 8) Canyon Rock Card

Content container styled as a cut section of canyon wall.

- Card surface: `bg-gradient-to-b from-[#c47040] via-[#b86838] to-[#a05828] rounded-sm p-6 relative overflow-hidden`.
- Strata lines on card: `before:absolute before:inset-0 before:bg-[repeating-linear-gradient(180deg,transparent,transparent_12px,rgba(0,0,0,0.08)_12px,rgba(0,0,0,0.08)_13px)]`.
- Erosion texture: `after:absolute after:inset-0 after:bg-[repeating-linear-gradient(175deg,transparent,transparent_4px,rgba(0,0,0,0.03)_4px,rgba(0,0,0,0.03)_5px)]`.
- Chipped edge: `[clip-path:polygon(0_3%,2%_0,5%_2%,98%_0,100%_4%,100%_97%,97%_100%,3%_98%,0_100%,0_97%)]` (rough-cut rock edges).
- Shadow face: `shadow-[4px_4px_0_rgba(74,42,26,0.4),0_6px_20px_rgba(0,0,0,0.3)]` (block shadow like a cut stone).
- Sand-card variant: `bg-[#d4b878]` with grain texture (sand floor card instead of rock wall).
- Dark card: `bg-gradient-to-b from-[#4a2a1a] to-[#3a2010]` (deep shadow zone card).

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Sandstone Red | `#c47040` | Primary strata color, canyon walls, main accent |
| Sandstone Orange | `#d49060` | Secondary strata, lighter rock layers, surface warmth |
| Canyon Shadow | `#4a2a1a` | Deep shadows, wall crevices, dark structural elements |
| Sand Warm | `#d4b878` | Sand floor surfaces, content backgrounds, light areas |
| Mesa Dark | `#6a4a2a` | Mesa silhouettes, distant elements, muted structural details |
| Sky Hot Blue | `#6aa0cc` | Desert sky, overhead gradient, cool contrast to warm rock |
| Heat Shimmer White-Translucent | `rgba(255,255,255,0.02-0.06)` | Heat distortion overlay, shimmer waves, hot air |
| Rock Dark | `#3a2a1a` | Deepest rock, hawk silhouette, darkest shadows |
| Sun Bleach | `#e8c890` | Sun-exposed top layers, light accents, sand highlights |
| Rock Layer Mid | `#b86838` | Mid-depth strata, card gradients, transitional layers |
| Deep Sand | `#a08040` | Shadow sand, lower dune areas, ground-level warmth |
| Horizon Glow | `#d49468` | Horizon line warmth, distant atmospheric color |

Rules: Sandstone red and orange dominate — every primary background references horizontal geological strata in warm red-orange-brown tones. Canyon shadow is the only dark color, used sparingly for depth and crevices. Sand warm is the content surface — lighter than the walls, providing contrast for readability. Sky hot blue is the ONLY cool color in the palette — it provides essential contrast against the overwhelming warmth of the rock. Heat shimmer white is barely visible — just enough to create the impression of hot air distortion. Mesa dark is reserved for distant silhouettes. The palette is fundamentally horizontal and warm, with cool blue only in the sky overhead.

## Typography Recommendations

Desert Canyon typography is carved, monumental, and weathered:

- **Display headings:** Bebas Neue, Oswald, or Barlow Condensed (tall, carved-in-stone condensed sans-serif).
- **Body text:** Source Serif 4, Lora, or Merriweather (warm serif that reads well on sand-colored surfaces).
- **Layer labels:** Barlow Condensed at `font-medium text-xs uppercase tracking-[0.2em]` (geological survey label style).
- **Depth markers:** DM Mono or JetBrains Mono `font-mono text-xs` (measurement/depth data labels).
- **Mesa headings:** Bebas Neue or Anton at `font-black text-4xl tracking-wide` (monumental scale for section titles).
- **Sand text:** `text-[#4a2a1a]` on sand surfaces (dark canyon shadow text on warm sand).
- **Sky text:** `text-[#d4b878]` on blue sky (warm sand text on cool sky).
- **Rock text:** `text-[#d4b878]` or `text-[#e8c890]` on dark rock (light sand text on dark canyon walls).
- Typography should feel monumental, horizontal, and ancient — wide letter-spacing on headings, solid weight, no scripts or ornamental faces.
- The desert does not rush — type should feel permanent, like inscriptions in rock.

## Component Architecture Pattern

1. Layered rock strata background as the primary surface (horizontal geological bands establishing the canyon walls).
2. Desert sky gradient overhead (hot blue fading to warm horizon, establishing the vast sky above).
3. Narrow slot canyon perspective framing the main content (converging rock walls creating depth).
4. Sand floor content areas between the walls (warm grain surface for cards, inputs, and readable content).
5. Canyon rock cards for feature containers (strata-textured panels with chipped edges).
6. Mesa silhouette dividers between sections (flat-topped butte shapes on the horizon).
7. Heat shimmer animation on hot surfaces (subtle wavy distortion on sun-baked areas).
8. Hawk silhouette for loading and movement (soaring bird against the vast sky).
9. Distant mesa background layers for depth (progressively faded butte silhouettes).
10. Deep canyon shadow at page bottom (dark rock closing the layout like a canyon floor).

## Interaction Rules

- Default state: the canyon is still and vast — heat shimmers rise, the hawk circles slowly, the rock bakes in silence.
- Hover (rock card): card gains a subtle heat glow as if the sun intensifies on that surface.
  - `hover:shadow-[4px_4px_0_rgba(74,42,26,0.4),0_6px_20px_rgba(0,0,0,0.3),0_0_20px_rgba(212,144,96,0.15)] transition-all duration-500`.
- Hover (mesa silhouette): mesa sharpens slightly as if distance clarity improves.
  - `hover:opacity-30 transition-opacity duration-700`.
- Active (sand button): button sinks into the sand.
  - `active:translate-y-0.5 active:shadow-[2px_2px_0_rgba(74,42,26,0.4),0_3px_10px_rgba(0,0,0,0.3)]`.
- Hawk interaction: hovering the hawk causes it to circle faster momentarily.
- Heat shimmer intensifies on hover of hot surfaces (faster animation, slightly more visible).
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#6aa0cc] focus:ring-offset-2 focus:ring-offset-[#c47040]` (sky blue ring on rock).
- Transitions: `transition-all duration-500` (measured, geological pace — rock does not rush).
- Reduced motion: heat shimmer paused (static warm glow instead), hawk hover circle stopped, all wave distortions replaced with static subtle glow.

## Reusable Tailwind Tokens

- Rock strata: `bg-[repeating-linear-gradient(180deg,transparent_0px,transparent_24px,rgba(196,112,64,0.4)_24px,rgba(196,112,64,0.4)_28px,transparent_28px)]`
- Canyon base gradient: `bg-gradient-to-b from-[#d49060] via-[#c47040] to-[#4a2a1a]`
- Sand floor: `bg-[#d4b878] bg-[radial-gradient(rgba(180,140,80,0.15)_1px,transparent_1px)] bg-[size:4px_4px]`
- Slot canyon wall left: `bg-gradient-to-r from-[#4a2a1a] via-[#6a3a22] to-transparent [clip-path:polygon(0_0,100%_5%,100%_95%,0_100%)]`
- Slot canyon wall right: `bg-gradient-to-l from-[#4a2a1a] via-[#6a3a22] to-transparent [clip-path:polygon(0_5%,100%_0,100%_100%,0_95%)]`
- Sky gradient: `bg-gradient-to-b from-[#4a88b8] via-[#6aa0cc] to-[#d49060]`
- Horizon glow: `bg-[linear-gradient(to_bottom,transparent,rgba(212,144,96,0.3))]`
- Heat shimmer: `animate-[heat-shimmer_4s_ease-in-out_infinite]` with `bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.02)_20%,transparent_40%,rgba(255,255,255,0.03)_60%,transparent_80%)]`
- Rock card: `bg-gradient-to-b from-[#c47040] via-[#b86838] to-[#a05828] rounded-sm shadow-[4px_4px_0_rgba(74,42,26,0.4)]`
- Mesa silhouette: SVG `path d="M0 60 L200 60 L240 20 L520 18 L560 22 L600 60 L800 60Z" fill="#6a4a2a"`
- Deep shadow: `bg-gradient-to-b from-[#4a2a1a] to-[#3a2010]`
- Sun bleach: `bg-gradient-to-b from-[rgba(232,200,144,0.3)] to-transparent`
- Wind ripple: `bg-[repeating-linear-gradient(95deg,transparent,transparent_20px,rgba(180,140,80,0.08)_20px,rgba(180,140,80,0.08)_22px)]`

## Quality Checklist (must pass)

- At least one layered rock strata background (horizontal color bands of geological layers).
- Narrow slot canyon perspective present (converging rock walls framing content).
- Sand floor texture visible on content surfaces (warm grain pattern).
- Distant mesa silhouette present (flat-topped butte shape as divider or decoration).
- Heat shimmer animation active on at least one surface (subtle wavy distortion).
- Hawk silhouette present (small soaring bird shape for loading or decoration).
- Desert sky gradient overhead (hot blue fading to warm at horizon).
- Color palette is sandstone red + orange + canyon shadow + sand warm + mesa dark + sky blue + rock dark.
- Typography is condensed monumental sans-serif for headings — carved-in-stone feel.
- At least one chipped/eroded edge on a card or panel (rough-cut rock, not perfect rectangles).
- Horizontal strata lines visible on surfaces (the geological layering is essential).
- The aesthetic reads as American desert canyon — vast, still, hot, ancient.
- Everything feels like standing deep in a canyon — walls rising, sky narrow above, heat shimmering.

## Anti-Patterns

- Missing horizontal geological strata (the layered color bands ARE the canyon identity).
- Vertical dominant layout (canyon geology is overwhelmingly horizontal — strata run left to right).
- Cool blue-dominated palette (the canyon is warm red-orange-brown — blue is ONLY for the sky).
- Clean white or gray backgrounds (the canyon is sandstone red, orange, and warm sand — never sterile).
- Perfect geometric shapes (canyon rock is eroded, chipped, and irregular).
- Missing the heat shimmer effect (the shimmer is the signature environmental feel).
- Smooth gradient-only surfaces without strata texture (the geological layers must be visible, not blended away).
- Fast animations (canyon time is geological — everything moves slowly or not at all).
- Missing the mesa silhouette (the flat-topped butte is the signature horizon element).
- Missing the hawk (the lone hawk breaking the silence is essential for life in the landscape).
- Rounded corners on rock elements (canyon rock is angular, chipped, and blocky).
- Modern sans-serif body text (body text needs a warm serif to read well on sand surfaces).
- Missing sand floor texture (the warm grain pattern provides essential content surface identity).
- No depth perspective (the slot canyon converging walls create essential spatial depth).
- Bright saturated accent colors (the desert palette is muted by sun — nothing is vivid except the sky).
- Missing shadow crevices (dark shadow lines between rock layers add essential geological depth).

## Accessibility Considerations

- Sandstone red/orange backgrounds with canyon shadow text provide good contrast (verify WCAG AA for `#4a2a1a` on `#d4b878`).
- Sky blue text on sand surfaces: verify contrast for `#6aa0cc` on `#d4b878`.
- Focus states: `focus:ring-2 focus:ring-[#6aa0cc]` (sky blue ring visible against warm rock backgrounds).
- Heat shimmer animation must respect `prefers-reduced-motion` (static warm glow overlay instead of wavy distortion).
- Hawk soar animation must respect `prefers-reduced-motion` (static hawk position).
- SVG turbulence filter for heat distortion must be disabled under `prefers-reduced-motion`.
- All decorative SVGs (hawk, mesa, strata overlays) must be `aria-hidden="true"`.
- Slot canyon converging walls must not cut off interactive content — ensure adequate padding within the passage.
- Chipped edge clip-path shapes must not clip interactive elements — test all clickable areas within the polygon.
- Sand grain texture overlays are decorative — `pointer-events-none` and `aria-hidden="true"`.
- The warm-on-warm palette (red/orange/brown) requires careful contrast testing — many combinations are marginal.
- Canyon rock text (`#d4b878` on `#c47040`) may be borderline — use larger or bolder type for small text.
- Keyboard navigation must follow logical order: sky/header first, then slot canyon content, then mesa divider/footer.
- Touch targets must meet minimum 44x44px despite the rough chipped-edge styling on cards and buttons.
