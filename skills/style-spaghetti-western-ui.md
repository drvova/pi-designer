---
name: spaghetti-western-ui
description: Build spaghetti western UI components (dusty desert town, tumbleweed decorations, saloon doors, wanted poster frames, cactus silhouettes, Mexican standoff tension, Ennio Morricone atmosphere) with sepia-toned dusty surfaces, weathered wood, and the cinematic tension of the Old West frontier. Trigger this skill when the user asks for western design, spaghetti western UI, saloon doors, wanted poster frames, desert town interface, cactus SVG, tumbleweed decoration, Old West frontier, or Morricone-inspired atmosphere.
---

# Spaghetti Western UI

Use this skill to design and implement interfaces inspired by the spaghetti western genre: sun-bleached desert dust, weathered saloon wood, wanted poster frames with ornate borders, saguaro cactus silhouettes against a hot sky, tumbleweed accents, and the slow-burning tension of a Morricone-scored Mexican standoff. Every surface should feel baked in high-desert sun, every texture weathered by sand and wind.

## Non-Negotiable Foundations

- The spaghetti western is a dusty frontier town baked in relentless sun: weathered wood plank surfaces, sun-bleached parchment, rusted iron, and the ever-present desert dust coating everything. Every surface should feel sun-cracked and wind-worn.
- Materials are raw and weathered: dry wood planks (sanded smooth by wind), aged parchment (sun-bleached paper), rusted iron (hinges, nails, horseshoes), desert dust (fine ochre coating), and hot-sky blue pressing down from above.
- Colors are desaturated warm earth tones: desert dust ochre, sepia brown, weathered grey-wood, dried-blood red, cactus sage green, and a hard blue sky. The mood is high noon in a one-horse town — tense, dry, cinematic.
- Motion is sparse and deliberate: a slow tumbleweed drift, saloon doors swinging shut, a heat shimmer. In a spaghetti western, stillness IS the tension. Movement only happens when something is about to happen.
- Typography blends bold woodblock western slabs with aged typewriter text for wanted posters.
- The aesthetic is cinematic, dusty, and tense — everything should look like a freeze-frame from a Sergio Leone film.

## Core Material Recipes

### 1) Dusty Sepia Surface (the foundational background)

The signature desert town surface: sun-baked earth and dust with a sepia haze.

- Background gradient: `bg-gradient-to-b from-[#c4a878] via-[#b89a68] to-[#a88a58]`.
- Dust haze overlay: SVG noise texture at `opacity-[0.06]` in `#8a6a3a` to simulate fine desert sand.
- Heat shimmer: faint CSS gradient animation cycling vertical position subtly.
- Dry crack lines: thin SVG stroke lines in `#9a7a4a` at `opacity-[0.12]`.
- Full: `bg-gradient-to-b from-[#c4a878] via-[#b89a68] to-[#a88a58] relative overflow-hidden p-6 rounded-md`.

```css
@keyframes heat-shimmer {
  0%, 100% { background-position: 0 0; }
  50% { background-position: 0 -3px; }
}
.heat-shimmer {
  animation: heat-shimmer 4s ease-in-out infinite;
}
```

### 2) Wanted Poster Frame

The iconic wanted poster: aged parchment with ornate western border, bold "WANTED" header, and aged paper texture.

- Poster body: `bg-gradient-to-br from-[#e8d8b8] via-[#dcc8a0] to-[#d0b888] border-4 border-[#7a6040] p-8 rounded-sm shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_0_20px_rgba(120,80,30,0.15)]`.
- Aged paper stains: radial gradient blobs in `#c4a060` at `opacity-[0.1]` scattered across surface.
- "WANTED" header: `font-serif font-black text-4xl tracking-[0.15em] text-[#3a2a1a] uppercase`.
- Ornate border: double-rule border with corner flourishes using SVG scrollwork in `#5a3a1a`.

```html
<div class="bg-gradient-to-br from-[#e8d8b8] via-[#dcc8a0] to-[#d0b888] border-4 border-[#7a6040] p-8 rounded-sm shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_0_20px_rgba(120,80,30,0.15)] max-w-sm relative">
  <div class="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_30%_20%,#c4a060,transparent_50%),radial-gradient(circle_at_70%_80%,#b89050,transparent_40%)]"></div>
  <svg class="absolute top-2 left-2 w-8 h-8 opacity-40" viewBox="0 0 30 30">
    <path d="M2,2 Q15,0 28,2 Q30,15 28,28 Q15,30 2,28 Q0,15 2,2" fill="none" stroke="#5a3a1a" stroke-width="1.5"/>
    <path d="M5,5 C10,2 20,2 25,5 C28,10 28,20 25,25 C20,28 10,28 5,25 C2,20 2,10 5,5" fill="none" stroke="#5a3a1a" stroke-width="0.8"/>
  </svg>
  <h2 class="font-serif font-black text-4xl tracking-[0.15em] text-[#3a2a1a] uppercase text-center mb-4 relative">WANTED</h2>
  <p class="font-serif text-sm text-[#5a3a1a] text-center tracking-wider uppercase">Dead or Alive</p>
</div>
```

### 3) Saloon Swinging Door Accent

Iconic batwing saloon doors that swing inward on interaction.

```html
<div class="relative w-32 h-40 mx-auto overflow-hidden">
  <!-- Door frame -->
  <div class="absolute inset-0 border-4 border-[#5a3a1a] rounded-t-sm bg-[#3a2410]"></div>
  <!-- Left door -->
  <div class="saloon-door absolute left-0 top-0 w-1/2 h-full bg-gradient-to-b from-[#7a6040] via-[#6a5030] to-[#5a4020] border-r-2 border-[#4a3010] origin-left" style="clip-path: polygon(0 0, 100% 0, 100% 85%, 70% 100%, 30% 100%, 0 85%);">
    <div class="absolute inset-2 border border-[#8a7050] rounded-sm opacity-40"></div>
  </div>
  <!-- Right door -->
  <div class="saloon-door absolute right-0 top-0 w-1/2 h-full bg-gradient-to-b from-[#7a6040] via-[#6a5030] to-[#5a4020] border-l-2 border-[#4a3010] origin-right" style="clip-path: polygon(0 0, 100% 0, 100% 85%, 70% 100%, 30% 100%, 0 85%);">
    <div class="absolute inset-2 border border-[#8a7050] rounded-sm opacity-40"></div>
  </div>
</div>
```

### 4) Cactus Silhouette SVGs

Saguaro cactus silhouettes for desert atmosphere decoration.

```html
<!-- Saguaro cactus -->
<svg viewBox="0 0 60 100" class="w-12 h-20 opacity-60">
  <path d="M28,95 L28,45 Q28,30 20,25 L20,15 Q20,10 25,10 L25,15 Q30,10 35,10 L35,15 Q35,10 40,15 L40,45 Q40,30 42,25 L42,35 Q42,40 38,42 L38,45 L32,45 L32,95 Z" fill="#4a6a3a"/>
</svg>

<!-- Prickly pear cactus -->
<svg viewBox="0 0 50 70" class="w-10 h-14 opacity-50">
  <ellipse cx="25" cy="55" rx="12" ry="10" fill="#4a6a3a"/>
  <ellipse cx="15" cy="40" rx="10" ry="8" fill="#4a6a3a" transform="rotate(-20,15,40)"/>
  <ellipse cx="35" cy="35" rx="9" ry="7" fill="#4a6a3a" transform="rotate(15,35,35)"/>
  <ellipse cx="22" cy="22" rx="8" ry="6" fill="#4a6a3a" transform="rotate(-10,22,22)"/>
</svg>
```

### 5) Weathered Wood Plank Surface

Sun-bleached wind-worn saloon/bar/wall planking.

- Planks: `bg-gradient-to-b from-[#7a6040] to-[#6a5030]` with horizontal seam lines every 24px using `border-b border-[#5a4020]`.
- Grain texture: thin horizontal SVG lines in `#8a7050` at `opacity-[0.08]`.
- Knot holes: dark circular SVG marks in `#4a3010` at `opacity-[0.15]`.
- Sun bleaching: lighter overlay on top third `bg-gradient-to-b from-white/10 to-transparent`.

### 6) Desert Town Horizon Silhouette

Building silhouettes along a horizon line — water tower, saloon, general store, church steeple.

```html
<svg viewBox="0 0 600 120" class="w-full h-auto opacity-30">
  <rect x="0" y="118" width="600" height="2" fill="#7a6040"/>
  <!-- Water tower -->
  <rect x="50" y="60" width="4" height="58" fill="#5a3a1a"/>
  <rect x="42" y="50" width="20" height="16" rx="2" fill="#5a3a1a"/>
  <path d="M44,50 Q52,44 60,50" fill="#5a3a1a"/>
  <!-- Saloon -->
  <rect x="120" y="70" width="60" height="48" fill="#5a3a1a"/>
  <polygon points="115,70 150,55 185,70" fill="#5a3a1a"/>
  <rect x="140" y="85" width="16" height="33" fill="#4a2a10"/>
  <!-- General store -->
  <rect x="220" y="75" width="50" height="43" fill="#5a3a1a"/>
  <rect x="220" y="70" width="50" height="8" fill="#4a2a10"/>
  <!-- Church steeple -->
  <rect x="340" y="60" width="40" height="58" fill="#5a3a1a"/>
  <polygon points="340,60 360,30 380,60" fill="#5a3a1a"/>
  <rect x="357" y="30" width="6" height="12" fill="#5a3a1a"/>
  <!-- Cacti -->
  <path d="M480,118 L480,90 Q480,82 475,78 L475,72 Q475,68 478,68 L478,72 Q483,68 488,72 L488,90 Z" fill="#4a6a3a"/>
  <path d="M520,118 L520,95 Q520,88 516,85 L516,80 Q516,76 519,76 L519,80 Q523,76 526,80 L526,95 Z" fill="#4a6a3a"/>
</svg>
```

### 7) Tumbleweed Decoration

Rolling tumbleweed SVG with drift animation.

```html
<svg viewBox="0 0 40 40" class="tumbleweed w-8 h-8">
  <circle cx="20" cy="20" r="16" fill="none" stroke="#8a7a5a" stroke-width="1" opacity="0.5"/>
  <path d="M20,4 Q28,12 20,20 Q12,28 20,36" fill="none" stroke="#8a7a5a" stroke-width="0.8" opacity="0.4"/>
  <path d="M4,20 Q12,12 20,20 Q28,28 36,20" fill="none" stroke="#8a7a5a" stroke-width="0.8" opacity="0.4"/>
  <path d="M8,8 Q20,16 32,8" fill="none" stroke="#8a7a5a" stroke-width="0.6" opacity="0.3"/>
  <path d="M8,32 Q20,24 32,32" fill="none" stroke="#8a7a5a" stroke-width="0.6" opacity="0.3"/>
</svg>
```

### 8) Spaghetti Western Button

Weathered wood button with iron nail accent.

- `bg-gradient-to-b from-[#7a6040] to-[#5a4020] text-[#e8d8b8] font-serif font-bold px-6 py-3 border-2 border-t-[#8a7050] border-b-[#3a2010] rounded-sm shadow-[0_3px_0_#3a2010,inset_0_1px_0_rgba(200,180,140,0.2)] hover:translate-y-0.5 hover:shadow-[0_1px_0_#3a2010] active:shadow-none transition-all duration-200 uppercase tracking-wider`.

### 9) Rusted Iron Accent Strip

Decorative rusted iron band for section borders.

- `h-3 bg-gradient-to-r from-[#8a5a2a] via-[#7a4a1a] to-[#6a3a0a] border-y border-[#5a3000] shadow-[inset_0_1px_0_rgba(200,150,80,0.15)]`.
- Optional rivet dots: small circles in `#9a6a3a` with `shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)]`.

## Color Palette System

### Core Spaghetti Western Palette

| Color | Hex | Material | Role |
|---|---|---|---|
| Desert Dust | `#c4a878` | Sun-baked sand | Primary background |
| Sepia | `#8a6a3a` | Aged sepia tone | Overlay, text accents |
| Weathered Wood | `#7a6040` | Wind-sanded planks | Surface panels, buttons |
| Wood Dark | `#5a4020` | Shadowed wood | Borders, depth |
| Saloon Red | `#8a1a1a` | Dried blood / saloon velvet | Accent, headers |
| Cactus Green | `#4a6a3a` | Desert sage cactus | Decorative accent |
| Hot Sky | `#87aacc` | Scorching blue sky | Top gradient, sky elements |
| Parchment | `#e8d8b8` | Sun-bleached paper | Wanted posters, text bg |
| Parchment Dark | `#d0b888` | Aged parchment | Paper shadows |
| Iron Rust | `#7a4a1a` | Rusted metal | Hinges, rivets, borders |
| Ink Black | `#3a2a1a` | Western typeface ink | Primary text |
| Dust White | `#f0e8d8` | Wind-blown dust | Highlights, light text |

Rules: Desaturated warm earth tones dominate — dust, sepia, weathered wood. The palette should feel like a Leone film: baked, sun-bleached, tense. Saloon red and cactus green are rare accents. Hot sky blue appears only at the top of the viewport or in sky elements. Never saturated or vibrant — everything is sandblasted by desert wind.

## Typography Recommendations

Spaghetti western typography is bold, slab-serif, and cinematic:

- **Display headings:** Alfa Slab One, Rye, or Playfair Display Black (woodblock poster feel).
- **Wanted poster text:** Rye or Special Elite (typewriter-meets-woodblock).
- **Body:** Lora, Crimson Text, or EB Garamond (readable serif that holds warmth).
- **Labels:** `font-serif font-bold text-sm tracking-[0.2em] text-[#5a3a1a] uppercase` for western sign lettering.
- **Wanted header:** Rye at `text-4xl tracking-[0.15em] uppercase` — the bold, dramatic woodblock style.
- Avoid modern sans-serif. The western aesthetic demands slab serifs and woodblock weight.

## Component Architecture Pattern

1. Dusty sepia background gradient (the desert sky and earth).
2. Desert town horizon silhouette at the bottom edge (establishes setting).
3. Weathered wood plank panels for content containers (saloon walls).
4. Wanted poster frames for cards or highlighted content (parchment on wood).
5. Rusted iron accent strips between sections (structural detail).
6. Cactus and tumbleweed SVGs as decorative elements (desert flora).
7. Saloon door interactive elements (swinging entrance animation).
8. Hot sky blue gradient at the very top (scorching overhead sun).
9. Tumbleweed drift animation crossing the viewport occasionally (movement).

## Interaction Rules

- Default state: dusty, still, tense. Surfaces are dry and sun-baked. The town is quiet.
- Hover: surfaces warm slightly with a dust-kick (`hover:brightness-105`), like a gust of wind passing through.
  - `hover:brightness-105 hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] transition-all duration-300`.
- Active: hard press like a boot heel (`active:translate-y-0.5 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]`).
- Focus: rusted iron ring `focus:ring-2 focus:ring-[#8a5a2a]/60 focus:ring-offset-2 focus:ring-offset-[#c4a878]`.
- Transitions: `transition-all duration-300 ease-in-out` (deliberate but not slow — the tension of a hand moving toward a holster).
- Tumbleweed: slow lateral drift across viewport at 12-16s intervals using `translate-x` animation.
- Saloon doors: swing open on hover/active with a pendular ease, swinging inward 45 degrees.
- No bouncy or playful animations. Spaghetti western motion is slow, tense, and cinematic.

## Reusable Tailwind Tokens

- Dusty surface: `bg-gradient-to-b from-[#c4a878] via-[#b89a68] to-[#a88a58]`
- Wanted poster: `bg-gradient-to-br from-[#e8d8b8] via-[#dcc8a0] to-[#d0b888] border-4 border-[#7a6040] shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_0_20px_rgba(120,80,30,0.15)]`
- Weathered wood panel: `bg-gradient-to-b from-[#7a6040] to-[#6a5030] border-2 border-t-[#8a7050] border-b-[#3a2010]`
- Rusted iron strip: `h-3 bg-gradient-to-r from-[#8a5a2a] via-[#7a4a1a] to-[#6a3a0a] border-y border-[#5a3000]`
- Western button: `bg-gradient-to-b from-[#7a6040] to-[#5a4020] text-[#e8d8b8] font-serif font-bold border-2 border-t-[#8a7050] border-b-[#3a2010] rounded-sm shadow-[0_3px_0_#3a2010]`
- Hot sky: `bg-gradient-to-b from-[#87aacc] to-[#c4a878]`
- Desert dust text: `text-[#5a3a1a]`
- Parchment text: `text-[#3a2a1a]`
- Western heading: `font-serif font-black tracking-[0.15em] uppercase`
- Iron rivet: `w-2 h-2 rounded-full bg-[#9a6a3a] shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)]`
- Tumbleweed drift: `@keyframes tumbleweed-drift { 0% { transform: translateX(-10vw) rotate(0deg); } 100% { transform: translateX(110vw) rotate(720deg); } }`
- Heat shimmer: `@keyframes heat-shimmer { 0%, 100% { background-position: 0 0; } 50% { background-position: 0 -3px; } }`

## Quality Checklist (must pass)

- At least one dusty sepia gradient surface (the desert earth).
- Weathered wood plank texture present on content panels.
- Wanted poster frame with aged parchment, ornate border, and "WANTED" header.
- At least one cactus silhouette SVG decoration.
- Hot sky blue gradient at the top or in sky elements.
- Rusted iron accent strip separating major sections.
- Tumbleweed SVG decoration present somewhere in the layout.
- Desert town building silhouette horizon line at bottom edge.
- Color palette is desaturated earth tones — no bright or neon colors.
- Typography uses slab-serif or woodblock style for headings.
- Interactions are deliberate and tense (no bouncy or playful motion).
- The aesthetic reads as a spaghetti western town — dusty, tense, cinematic.
- At least one iron/rust metallic accent (hinge, rivet, nail).
- Wood surfaces show grain, sun bleaching, or weathering (not flat).

## Anti-Patterns

- Bright, saturated, or neon colors (everything is sun-bleached and desaturated).
- Bouncy or springy animations (spaghetti western motion is slow and tense).
- Modern sans-serif typography alone (needs slab-serif or woodblock weight).
- Clean, pristine, or glossy surfaces (everything is dusty, weathered, worn).
- Flat untextured wood panels (planks need grain, bleaching, and seam lines).
- Missing desert elements (cactus, tumbleweed, dust are essential atmosphere).
- Cool-toned color schemes (the desert is warm — ochre, sepia, brown).
- Digital time displays or modern UI chrome (the western world is analog and rough).
- Cartoon or playful western elements (spaghetti western is cinematic and adult).
- Missing the "WANTED" poster element (it is the iconic western frame).
- Smooth plastic-feeling buttons (western surfaces are wood and iron).
- Pure black backgrounds (use dark sepia `#3a2a1a` with warm undertones).

## Accessibility Considerations

- Parchment (`#e8d8b8`) with ink black text (`#3a2a1a`) provides excellent contrast (WCAG AAA).
- Desert dust background (`#c4a878`) requires dark text (`#3a2a1a`) — verify WCAG AA minimum.
- Tumbleweed and heat shimmer animations must respect `prefers-reduced-motion` (freeze tumbleweed, stop shimmer).
- Saloon door interactions must be keyboard-accessible (`tabindex`, `role="button"`, Enter/Space to swing).
- Decorative elements (cactus, tumbleweed, town silhouette) must be `aria-hidden="true"`.
- Wanted poster content needs `aria-label` for screen reader context ("Wanted poster for [name]").
- Focus states must be visible against dusty surfaces (`focus:ring-2 focus:ring-[#8a5a2a]/60`).
- Touch targets must meet minimum 44x44px despite weathered styling.
- Text on aged parchment must maintain contrast despite stain overlay effects.
- Saloon door swing animation must not obscure content behind it for assistive technology users.
