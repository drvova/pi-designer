---
name: alpine-meadow-ui
description: Build alpine meadow UI components (mountain backdrop, edelweiss, cowbell, wooden chalet, wildflower carpet, glacier stream, clear air) with crisp mountain air, wildflower abundance, and the pristine clarity of high-altitude landscapes. Trigger this skill when the user asks for alpine meadow design, mountain landscape UI, Swiss Alps aesthetic, highland meadow interface, chalet theme, edelweiss design, or mountain meadow ecosystem design.
---

# Alpine Meadow UI

Use this skill to design and implement crisp, clean interfaces inspired by alpine meadow ecosystems: layered mountain backdrop silhouettes, white edelweiss flower accents, wooden chalet textures, dense wildflower carpet patterns, glacier-fed turquoise streams, cowbell decorative elements, and the crystalline clarity of high-altitude mountain air. This is the alpine meadow -- pristine, crisp, wildflower-rich, and alive with mountain light.

## Non-Negotiable Foundations

These properties are mandatory for every component built with this skill. They define the fundamental character of the alpine meadow aesthetic and cannot be overridden or omitted.

- **Crisp clarity dominates the palette.** Every surface, gradient, and background must read as high-altitude mountain air: clean, bright, and clear. The alpine sky is always visible. Hazy, humid, or foggy aesthetics are forbidden. The air is thin, sharp, and luminous.
- **Layered mountain silhouettes define the horizon.** Every major section or hero must include a layered mountain backdrop with at least three depth layers: near peaks (darkest), mid-range (medium), distant peaks (lightest). This layering is the visual signature of alpine depth.
- **Wildflower abundance in warm accents.** The cool blue-gray-green base palette is punctuated by dense, small, colorful wildflower accents -- magenta, yellow, violet, white, and red dots and shapes scattered across meadow surfaces. Every meadow surface must have wildflower color.
- **Natural materials for interactive surfaces.** Chalet wood, stone, and leather textures ground the interactive elements. Buttons, cards, and controls reference wooden chalet construction, alpine stone, and mountain craftsmanship. No synthetic or neon materials.
- **The edelweiss is the crown accent.** The white star-shaped edelweiss flower is the signature decorative element, used for premium accents, badges, headers, and focal decoration. It appears sparingly but prominently -- like the flower itself, which grows in high, exposed places.

## Core Material Recipes

### 1) Alpine Sky Gradient Background

Crisp mountain sky with atmospheric perspective fading to snow-white horizon.

- `bg-gradient-to-b from-[#4a8acc] via-[#8ab4e0] to-[#f8fcff]` (deep sky to snow horizon).
- Distant haze: `bg-[linear-gradient(to_bottom,transparent_0%,rgba(248,252,255,0.3)_70%,rgba(248,252,255,0.8)_100%)]`.
- Apply as a layered background on a container, with the haze gradient as a secondary overlay to simulate atmospheric perspective between mountain layers.

### 2) Layered Mountain Backdrop

Three-layer mountain silhouette for hero sections and section headers.

```html
<div class="relative w-full h-64 overflow-hidden bg-gradient-to-b from-[#4a8acc] to-[#8ab4e0]">
  <!-- Distant peaks (lightest) -->
  <svg class="absolute bottom-0 w-full h-48 opacity-40" viewBox="0 0 1200 200" preserveAspectRatio="none">
    <path d="M0,200 L0,120 Q100,40 200,100 Q300,20 400,90 Q500,10 600,80 Q700,30 800,70 Q900,15 1000,85 Q1100,50 1200,100 L1200,200 Z" fill="#6a7a8a"/>
  </svg>
  <!-- Mid-range peaks (medium) -->
  <svg class="absolute bottom-0 w-full h-40 opacity-60" viewBox="0 0 1200 160" preserveAspectRatio="none">
    <path d="M0,160 L0,100 Q150,30 300,80 Q450,10 600,70 Q750,20 900,60 Q1050,5 1200,90 L1200,160 Z" fill="#4a5a6a"/>
  </svg>
  <!-- Near peaks (darkest) -->
  <svg class="absolute bottom-0 w-full h-32" viewBox="0 0 1200 128" preserveAspectRatio="none">
    <path d="M0,128 L0,80 Q200,20 400,60 Q600,5 800,50 Q1000,15 1200,70 L1200,128 Z" fill="#3a4a5a"/>
  </svg>
</div>
```

### 3) Edelweiss Flower SVG Accent

White star-shaped edelweiss for premium badges, headers, and decoration.

```html
<svg viewBox="0 0 48 48" class="w-12 h-12">
  <defs>
    <radialGradient id="edelweiss-center" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f5f0d0"/>
      <stop offset="100%" stop-color="#e0d8a0"/>
    </radialGradient>
  </defs>
  <!-- Petals (woolly star-shaped bracts) -->
  <g fill="#f5f0f0" stroke="#d0c8b0" stroke-width="0.5">
    <ellipse cx="24" cy="10" rx="5" ry="8" transform="rotate(0,24,24)"/>
    <ellipse cx="24" cy="10" rx="5" ry="8" transform="rotate(72,24,24)"/>
    <ellipse cx="24" cy="10" rx="5" ry="8" transform="rotate(144,24,24)"/>
    <ellipse cx="24" cy="10" rx="5" ry="8" transform="rotate(216,24,24)"/>
    <ellipse cx="24" cy="10" rx="5" ry="8" transform="rotate(288,24,24)"/>
  </g>
  <!-- Center cluster -->
  <circle cx="24" cy="24" r="5" fill="url(#edelweiss-center)" stroke="#c0b880" stroke-width="0.5"/>
  <circle cx="22" cy="22" r="1" fill="#d0c890"/>
  <circle cx="26" cy="22" r="1" fill="#d0c890"/>
  <circle cx="24" cy="26" r="1" fill="#d0c890"/>
  <circle cx="22" cy="26" r="0.8" fill="#d0c890"/>
  <circle cx="26" cy="26" r="0.8" fill="#d0c890"/>
</svg>
```

### 4) Wooden Chalet Panel

Warm timber-textured panel evoking alpine chalet construction.

- `bg-gradient-to-b from-[#a07840] to-[#8a6a3a] rounded-xl p-6 shadow-[0_4px_16px_rgba(58,74,90,0.3)] border border-[#6a5030]`.
- Wood grain texture: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_3px,rgba(100,70,30,0.08)_3px,rgba(100,70,30,0.08)_4px)]`.
- The repeating linear gradient at 0deg creates horizontal wood grain lines. Layer this over the gradient base for an authentic timber surface.

### 5) Wildflower Carpet

Dense scattered wildflower dots across meadow surfaces.

- Base meadow: `bg-gradient-to-b from-[#5a9a3a] to-[#4a8a2a] rounded-2xl`.
- Flower scatter pattern: `bg-[radial-gradient(circle_2px_at_8px_12px,#e05080_1.5px,transparent_0),radial-gradient(circle_1.5px_at_20px_8px,#f0d040_1px,transparent_0),radial-gradient(circle_2px_at_35px_15px,#9050c0_1.5px,transparent_0),radial-gradient(circle_1px_at_50px_10px,#ffffff_0.8px,transparent_0),radial-gradient(circle_1.5px_at_65px_18px,#e04040_1.2px,transparent_0)] bg-[size:80px_25px]`.
- This creates a repeating pattern of magenta, yellow, purple, white, and red wildflower dots at irregular positions within each tile, simulating a natural meadow carpet.

### 6) Glacier Stream Line

Turquoise flowing line representing glacier-fed alpine streams.

- `h-1 bg-gradient-to-r from-transparent via-[#40b8c0] to-transparent rounded-full`.
- Flow animation: `animate-[stream_3s_ease-in-out_infinite]` with a translate-x cycle of `0% -> 5px -> -5px -> 0%` to simulate gentle water flow.
- Stream banks: add `shadow-[0_1px_3px_rgba(64,184,192,0.4)]` for a subtle turquoise glow beneath the stream line.

### 7) Cowbell SVG Accent

Alpine cowbell for navigation, badges, or playful decorative elements.

```html
<svg viewBox="0 0 32 40" class="w-8 h-10">
  <path d="M14,5 L18,5 L18,2 Q18,0 16,0 Q14,0 14,2 Z" fill="#8a6a3a"/>
  <path d="M10,8 L22,8 L24,32 Q24,36 16,38 Q8,36 8,32 Z" fill="#d4b870" stroke="#8a6a3a" stroke-width="1"/>
  <ellipse cx="16" cy="32" rx="8" ry="2" fill="#8a6a3a" opacity="0.3"/>
  <circle cx="16" cy="35" r="3" fill="#6a5030" stroke="#4a3820" stroke-width="0.8"/>
  <line x1="16" y1="32" x2="16" y2="35" stroke="#6a5030" stroke-width="1.5"/>
  <path d="M12,12 L20,12 L21,14 Q21,15 20,15 L12,15 Q11,15 11,14 Z" fill="none" stroke="#8a6a3a" stroke-width="0.8" opacity="0.5"/>
</svg>
```

### 8) Stone Surface

Alpine rock texture for grounded, solid elements.

- `bg-gradient-to-br from-[#8a9098] to-[#6a7078] rounded-xl p-5 border border-[#5a6068]`.
- Stone texture: `bg-[radial-gradient(circle_3px_at_10px_10px,rgba(255,255,255,0.06)_2px,transparent_0),radial-gradient(circle_2px_at_25px_18px,rgba(0,0,0,0.05)_1.5px,transparent_0)] bg-[size:35px_25px]`.
- Use for: solid foundations, footer areas, data containers that need to feel grounded and permanent.

### 9) Snow Patch Accent

White snow accumulation on mountain surfaces.

- `bg-white rounded-[3rem] px-4 py-2 shadow-[0_2px_8px_rgba(106,122,138,0.2)]`.
- Snow texture: `bg-[radial-gradient(circle_1px_at_6px_6px,rgba(200,210,220,0.3)_0.5px,transparent_0)] bg-[size:10px_10px]`.
- Use for: highlight badges, status indicators, and elements that should feel fresh, clean, and high-altitude.

### 10) Mountain Meadow Card

Primary content card combining meadow, mountain, and chalet elements.

- `bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-[0_4px_20px_rgba(58,74,90,0.15)] border border-[#8a9098]/20`.
- Meadow bottom accent: `border-b-4 border-b-[#5a9a3a]`.
- Stone top edge: add `border-t border-t-[#8a9098]/40` for a subtle stone foundation feel.
- Wildflower dot accent in corner: a small absolute-positioned SVG cluster of 5-6 colored dots at 60% opacity.

## Color Palette System

| Color Name | Hex | Role | Usage |
|---|---|---|---|
| Mountain Blue-Gray | `#6a7a8a` | Distant peaks | Mountain silhouettes, distant backgrounds |
| Edelweiss White | `#f5f0f0` | Premium accent | Edelweiss petals, premium badges, snow highlights |
| Chalet Wood | `#8a6a3a` | Warm surface | Interactive panels, buttons, wooden textures |
| Glacier Turquoise | `#40b8c0` | Cool accent | Stream lines, links, cool highlights |
| Meadow Green | `#5a9a3a` | Base surface | Meadow backgrounds, ground planes, nature accents |
| Alpine Sky | `#4a8acc` | Sky background | Top gradients, header backgrounds, sky regions |
| Snow White | `#f8fcff` | Light surface | Snow patches, clean backgrounds, horizon fade |
| Near Peak | `#3a4a5a` | Deep tone | Text on light, near mountains, shadows |

Additional wildflower accent colors (use sparingly, never as backgrounds):

| Wildflower | Hex | Role |
|---|---|---|
| Magenta Bloom | `#e05080` | Primary wildflower accent |
| Buttercup Yellow | `#f0d040` | Secondary wildflower accent |
| Alpine Violet | `#9050c0` | Tertiary wildflower accent |
| Edelweiss Dot | `#ffffff` | White wildflower accent |
| Alpine Rose | `#e04040` | Red wildflower accent |

Rules: Crisp and clear -- the alpine palette is defined by clean color separation and atmospheric perspective. Blues and grays recede into the distance. Greens anchor the meadow. Wood and stone provide warm, earthy grounding. Wildflower accents are small, dense, and colorful -- they punctuate the green meadow like real alpine flowers do. Snow white and edelweiss white are reserved for high-elevation accents and premium elements.

## Typography Recommendations

- **Display:** Merriweather (700 weight) -- sturdy serif with alpine character, evokes printed trail signage and mountain chalet lettering. Use at `text-3xl` or larger for headers.
- **Body:** Inter (400/500 weight) -- clean, crisp, high-legibility sans-serif that mirrors the clarity of mountain air. Use at `text-base` to `text-lg`.
- **Accent:** Playfair Display (600 weight) -- for labels, badges, and small accent text that needs mountain elegance. Use at `text-sm` to `text-base`.
- Line height for body text: `leading-relaxed` (1.625) to give content room to breathe in the open meadow aesthetic.
- Letter spacing for display: `tracking-tight` for large headers, `tracking-widest` for uppercase alpine labels and trail markers.
- All typography must maintain a minimum contrast ratio of 4.5:1 against its background. Use `text-[#3a4a5a]` on white/snow backgrounds and `text-[#f8fcff]` on dark mountain surfaces.

## Component Architecture Pattern

Every component follows a layered structure that mimics an alpine meadow cross-section: sky gradient at the top, mountain silhouette backdrop, meadow surface in the middle, and stone or wood foundation at the base. This layering creates the illusion of looking across an alpine landscape.

**Required layers (bottom to top):**

1. **Sky layer** -- full container background with the alpine sky gradient fading to snow white.
2. **Mountain backdrop** -- SVG silhouettes positioned at the bottom of the container, layered from light (distant) to dark (near).
3. **Content layer** -- the actual interactive or informational content, positioned relatively over the meadow area.
4. **Wildflower scatter** -- small colored dots (magenta, yellow, violet, white, red) scattered at low opacity as environmental decoration, pointer-events-none.
5. **Edelweiss accent** -- a single edelweiss SVG placed at a focal point (header corner, badge center, section divider).

**Container pattern:**

```html
<div class="relative overflow-hidden bg-gradient-to-b from-[#4a8acc] via-[#8ab4e0] to-[#f8fcff] rounded-2xl">
  <!-- Mountain backdrop -->
  <svg class="absolute bottom-0 w-full h-32 opacity-60" viewBox="0 0 1200 128" preserveAspectRatio="none">
    <path d="M0,128 L0,80 Q200,20 400,60 Q600,5 800,50 Q1000,15 1200,70 L1200,128 Z" fill="#3a4a5a"/>
  </svg>
  <!-- Meadow strip -->
  <div class="absolute bottom-0 w-full h-16 bg-gradient-to-t from-[#5a9a3a] to-transparent"></div>
  <!-- Wildflower scatter -->
  <div class="absolute bottom-4 inset-x-0 h-12 pointer-events-none opacity-60">
    <!-- small colored dots -->
  </div>
  <!-- Content -->
  <div class="relative z-10 p-6">
    <!-- actual content here -->
  </div>
  <!-- Edelweiss accent -->
  <svg class="absolute top-4 right-4 w-10 h-10 opacity-70 pointer-events-none" viewBox="0 0 48 48">
    <!-- edelweiss SVG -->
  </svg>
</div>
```

**Card pattern:**

```html
<div class="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-[0_4px_20px_rgba(58,74,90,0.15)] border border-[#8a9098]/20 border-b-4 border-b-[#5a9a3a] relative overflow-hidden">
  <div class="absolute top-0 right-0 w-20 h-20 pointer-events-none opacity-40">
    <svg viewBox="0 0 48 48"><!-- edelweiss --></svg>
  </div>
  <div class="relative z-10">
    <!-- card content -->
  </div>
</div>
```

## Interaction Rules

- **Hover states** add a warm wood-toned glow: `hover:shadow-[0_6px_24px_rgba(138,106,58,0.2)]` and `hover:border-[#8a6a3a]/40` to suggest chalet warmth and invitation.
- **Active/pressed states** ground the element: `active:translate-y-0.5 active:shadow-[0_2px_8px_rgba(58,74,90,0.15)]` to simulate pressing into alpine stone.
- **Focus states** use a glacier turquoise ring: `focus-visible:ring-2 focus-visible:ring-[#40b8c0] focus-visible:ring-offset-2 focus-visible:ring-offset-white`.
- **Transitions** are crisp and clear like mountain air: `transition-all duration-200 ease-in-out`. Alpine interactions are responsive and precise, not sluggish or springy.
- **Loading states** use a small cowbell SVG that swings gently with `animate-[swing_2s_ease-in-out_infinite]` (rotate -8deg to 8deg), or a stream line that pulses with a traveling highlight gradient.
- **Scroll reveals** fade in from behind a mountain silhouette: `opacity-0 translate-y-8 animate-[reveal_0.5s_ease-out_forwards]` to simulate elements cresting a mountain ridge.
- **Disabled states** fade to distant-mountain gray: `opacity-40 saturate-50` to suggest the element has receded behind the mountain haze.

## Reusable Tailwind Tokens

- Alpine sky bg: `bg-gradient-to-b from-[#4a8acc] via-[#8ab4e0] to-[#f8fcff]`
- Chalet wood panel: `bg-gradient-to-b from-[#a07840] to-[#8a6a3a] rounded-xl border border-[#6a5030]`
- Meadow surface: `bg-gradient-to-b from-[#5a9a3a] to-[#4a8a2a] rounded-2xl`
- Stone surface: `bg-gradient-to-br from-[#8a9098] to-[#6a7078] rounded-xl border border-[#5a6068]`
- Snow patch: `bg-white rounded-[3rem] shadow-[0_2px_8px_rgba(106,122,138,0.2)]`
- Mountain meadow card: `bg-white/95 backdrop-blur-sm rounded-2xl shadow-[0_4px_20px_rgba(58,74,90,0.15)] border border-[#8a9098]/20 border-b-4 border-b-[#5a9a3a]`
- Glacier stream: `h-1 bg-gradient-to-r from-transparent via-[#40b8c0] to-transparent rounded-full`
- Glacier CTA: `bg-gradient-to-r from-[#40b8c0] to-[#30a0a8] text-white font-bold rounded-lg border border-[#30a0a8]`
- Alpine sky text: `text-[#4a8acc]`
- Mountain text: `text-[#3a4a5a]`
- Chalet text: `text-white drop-shadow-[0_1px_2px_rgba(58,74,90,0.3)]`
- Meadow text: `text-[#f8fcff]`
- Wildflower scatter dots: `bg-[radial-gradient(circle_2px_at_8px_12px,#e05080_1.5px,transparent_0),radial-gradient(circle_1.5px_at_20px_8px,#f0d040_1px,transparent_0),radial-gradient(circle_2px_at_35px_15px,#9050c0_1.5px,transparent_0)] bg-[size:80px_25px]`
- Warm chalet hover: `hover:shadow-[0_6px_24px_rgba(138,106,58,0.2)]`
- Glacier focus: `focus-visible:ring-2 focus-visible:ring-[#40b8c0] focus-visible:ring-offset-2 focus-visible:ring-offset-white`
- Mountain near peak: `fill-[#3a4a5a]`
- Mountain mid peak: `fill-[#4a5a6a]`
- Mountain far peak: `fill-[#6a7a8a]`

## Quality Checklist

- Alpine sky gradient is present as the base atmosphere (blue to white, crisp and clear).
- At least one layered mountain silhouette with three depth layers (near, mid, distant).
- Edelweiss flower SVG appears as a focal accent in at least one location.
- Wildflower carpet dots (magenta, yellow, violet, white, red) scatter across meadow surfaces.
- Chalet wood or alpine stone texture grounds at least one interactive surface.
- Glacier stream turquoise line appears as a divider or accent element.
- Cowbell SVG accent is present for at least one decorative or functional element.
- The palette reads as crisp, high-altitude mountain air -- not tropical, not urban, not foggy.
- Warm wood and stone contrast against cool sky and glacier colors.
- The aesthetic evokes the clear, pristine quality of alpine meadows above the treeline.

## Anti-Patterns

- Dark, moody, or foggy aesthetics (alpine meadows are above the clouds, in clear bright air).
- Tropical or humid feeling (no palm trees, no warm water, no lush jungle).
- Urban, industrial, or synthetic materials (alpine is natural: wood, stone, grass, snow).
- Missing mountain silhouettes (the mountain backdrop is the defining visual element).
- Flat meadows without wildflower color (a meadow without flowers is just a lawn).
- Neon, electric, or artificial accent colors (all colors are natural: sky blue, stone gray, wood brown, flower colors).
- Sharp geometric decorative shapes (mountains are angular but nature is organic -- use SVG silhouettes, not rectangles).
- Humid or hazy atmosphere gradients (alpine air is thin, crisp, and clear with sharp visibility).
- Overuse of chalet wood texture (it grounds elements but should not dominate -- stone and sky balance it).
- Snow-white backgrounds without mountain context (snow without mountains is just a white page).
- Warm-tinted sky gradients (alpine skies are cool blue, not golden or sunset-toned).
- Missing the atmospheric perspective layering (near peaks dark, mid peaks medium, distant peaks light -- this depth cue is non-negotiable).

## Accessibility Considerations

- **Contrast ratios:** All text must meet WCAG AA minimum (4.5:1 for normal text, 3:1 for large text). Use `text-[#3a4a5a]` on white/snow/sky backgrounds and `text-[#f8fcff]` on mountain/wood/stone surfaces. Test every text-on-background combination, especially text over gradient backgrounds where contrast varies by position.
- **Mountain silhouette layering and reduced motion:** The mountain layers are static SVGs and do not animate, so no `prefers-reduced-motion` concern there. However, any parallax or scroll-driven mountain movement must be disabled under `@media (prefers-reduced-motion: reduce)`.
- **Focus indicators:** Every interactive element must have a visible focus ring. Use the glacier turquoise focus ring (`focus-visible:ring-2 focus-visible:ring-[#40b8c0]`) which provides strong contrast against white, wood, and stone backgrounds.
- **Color independence:** Do not convey meaning through color alone. Wildflower color coding (magenta for high priority, yellow for medium, violet for low) must also include text labels, icons, or patterns. The glacier turquoise stream must not be the sole indicator of a data flow path.
- **SVG accessibility:** All decorative SVGs (mountains, edelweiss, cowbell, wildflower dots) must have `aria-hidden="true"` and `role="presentation"`. Functional SVGs (edelweiss icon in a button) must have `role="img"` and an `aria-label`.
- **Text legibility over gradients:** When text is placed over the sky-to-snow gradient, the contrast ratio changes across the gradient span. Place text in the region with sufficient contrast, or add a semi-transparent backing: `bg-white/70 backdrop-blur-sm rounded-lg px-3 py-1`.
- **Wood texture and text readability:** Chalet wood panels have a warm, relatively low-contrast background. Ensure all text on wood surfaces meets contrast requirements. Use `text-white` with `drop-shadow` for text on dark wood, or `text-[#3a4a5a]` on light wood surfaces.
- **Touch targets:** All interactive elements must be at least 44x44px (WCAG 2.2 target size). Alpine-themed buttons, cowbell icons, and edelweiss badges must meet this minimum.
- **Semantic HTML:** Use semantic elements (`<nav>`, `<main>`, `<article>`, `<section>`) regardless of the alpine visual layer. The mountain landscape aesthetic must not compromise document structure or heading hierarchy.
- **Keyboard navigation:** Mountain silhouette backgrounds and meadow decorations must not trap keyboard focus. All decorative elements must have `pointer-events-none`. Tab order must follow logical content flow, not visual mountain layering.
- **Color palette in dark mode:** If supporting dark mode, the alpine palette should shift to a twilight mountain aesthetic: deep navy sky (`#1a2a3a`), snow-capped peaks as light accents (`#c0c8d0`), and meadow green darkened to forest green (`#2a5a1a`). The edelweiss white and glacier turquoise remain largely unchanged as they have sufficient contrast in both modes.
