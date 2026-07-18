---
name: coral-reef-shallow-ui
description: Build shallow coral reef UI components (sunlit turquoise, brain coral, clownfish, sea fan sway, sandy bottom, surface ripple, tropical abundance) with bright sunlit water, colorful marine life, and the vibrant ecosystem of shallow tropical reefs. Trigger this skill when the user asks for shallow reef design, sunlit tropical UI, reef shallows aesthetic, sunlit water interface, bright coral garden, or shallow marine ecosystem design.
---

# Coral Reef Shallow UI

Use this skill to design and implement bright, sun-drenched interfaces inspired by shallow tropical reef ecosystems: sunlit turquoise water filtering from the surface, bumpy brain coral textures, orange clownfish accents, branching sea fan silhouettes, warm sandy bottoms, dappled caustic light ripple patterns, and the vibrant abundance of tropical marine life in the photic zone. This is the sunlit shallows -- warm, bright, teeming, and alive with surface light and color.

## Non-Negotiable Foundations

These properties are mandatory for every component built with this skill. They define the fundamental character of the shallow reef aesthetic and cannot be overridden or omitted.

- **Sunlit shallow water is bright, not dark.** Every background, surface, and container must read as shallow sunlit water. Deep ocean blues are forbidden. The water is turquoise, aquamarine, or seafoam -- never navy, indigo, or midnight.
- **Surface light dominates the palette.** The topmost layer of any component receives the brightest values. Light filters downward, so surfaces near the top are washed in white-gold caustic shimmer, and the base gradients always lighten upward.
- **Warm coral and orange accents against cool turquoise water.** The tension between warm reef life (brain coral pinks, clownfish oranges, sandy yellows) and cool shallow water (turquoise, aquamarine) is the core visual identity. Every component must contain at least one warm accent against the cool base.
- **Organic textures and rounded forms.** Brain coral is bumpy and rounded. Sea fans branch naturally. Sandy bottoms are soft and granular. No sharp geometric shapes, hard rectangular corners, or rigid grids. Everything is soft, organic, and flowing.
- **Surface ripple caustic light is always present.** A dappled caustic light pattern must appear on every major surface, card, or panel. This is the defining visual signature of shallow sunlit water and is never optional.

## Core Material Recipes

### 1) Sunlit Turquoise Water Background

Bright shallow water with surface light filtering down from above.

- `bg-gradient-to-b from-[#e0f8ff] via-[#40c0d0] to-[#1a6a7a]` (surface to depth gradient).
- Surface caustic overlay: `bg-[radial-gradient(ellipse_at_30%_5%,rgba(255,255,255,0.35)_0%,transparent_50%),radial-gradient(ellipse_at_75%_15%,rgba(255,255,255,0.25)_0%,transparent_40%),radial-gradient(ellipse_at_50%_25%,rgba(200,240,255,0.15)_0%,transparent_35%)]`.
- Apply as a layered background on a container with `relative overflow-hidden`, placing the caustic overlay as an absolutely positioned pseudo-element with `animate-[ripple_8s_ease-in-out_infinite]` for gentle water motion.

### 2) Brain Coral Surface

Bumpy, textured panel evoking brain coral ridges.

- `bg-gradient-to-br from-[#e08080] to-[#c06060] rounded-[2rem] p-6 shadow-[0_4px_16px_rgba(26,58,74,0.25)] border border-[#a05050]`.
- Brain coral texture: `bg-[radial-gradient(circle_2px_at_3px_3px,rgba(255,180,180,0.2)_1.5px,transparent_0)] bg-[size:8px_8px] bg-[radial-gradient(circle_2px_at_5px_5px,rgba(200,100,100,0.15)_1px,transparent_0)] bg-[size:12px_12px]`.
- The double radial-gradient creates the characteristic maze-like bumpy surface of brain coral. The first layer gives small bumps, the second adds irregularity.

### 3) Clownfish SVG Accent

Orange-and-white striped clownfish icon for navigation, badges, or call-to-action highlights.

```html
<svg viewBox="0 0 64 36" class="w-16 h-9">
  <defs>
    <linearGradient id="clown-body" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#e06020"/>
      <stop offset="35%" stop-color="#e06020"/>
      <stop offset="35%" stop-color="#ffffff"/>
      <stop offset="42%" stop-color="#ffffff"/>
      <stop offset="42%" stop-color="#e06020"/>
      <stop offset="60%" stop-color="#e06020"/>
      <stop offset="60%" stop-color="#ffffff"/>
      <stop offset="67%" stop-color="#ffffff"/>
      <stop offset="67%" stop-color="#e06020"/>
      <stop offset="100%" stop-color="#e06020"/>
    </linearGradient>
  </defs>
  <ellipse cx="28" cy="18" rx="24" ry="14" fill="url(#clown-body)" stroke="#1a3a4a" stroke-width="1"/>
  <circle cx="10" cy="15" r="3" fill="#1a3a4a"/>
  <circle cx="10" cy="15" r="1.2" fill="white"/>
  <path d="M50,10 Q58,8 60,14 Q58,18 50,18" fill="#e06020" stroke="#1a3a4a" stroke-width="0.8"/>
  <path d="M50,22 Q58,24 60,18" fill="#e06020" stroke="#1a3a4a" stroke-width="0.8"/>
  <path d="M14,8 Q18,4 22,8" fill="none" stroke="#1a3a4a" stroke-width="1" stroke-linecap="round"/>
  <path d="M14,28 Q18,32 22,28" fill="none" stroke="#1a3a4a" stroke-width="1" stroke-linecap="round"/>
</svg>
```

### 4) Sea Fan SVG Decoration

Branching sea fan coral silhouette for background decoration or section dividers.

```html
<svg viewBox="0 0 120 100" class="w-24 h-20 opacity-40">
  <g stroke="#8a40a0" fill="none" stroke-width="1.2" stroke-linecap="round">
    <path d="M60,95 L60,50"/>
    <path d="M60,50 Q45,30 30,15"/>
    <path d="M60,50 Q50,25 35,10"/>
    <path d="M60,50 Q55,20 45,5"/>
    <path d="M60,50 Q65,25 75,10"/>
    <path d="M60,50 Q70,30 85,15"/>
    <path d="M60,50 Q75,25 90,8"/>
    <path d="M30,15 Q25,10 20,5"/>
    <path d="M30,15 Q35,8 38,3"/>
    <path d="M35,10 Q30,6 28,2"/>
    <path d="M85,15 Q90,10 95,5"/>
    <path d="M85,15 Q80,8 78,3"/>
    <path d="M90,8 Q95,4 98,2"/>
    <path d="M45,5 Q42,2 40,0"/>
    <path d="M75,10 Q78,5 80,2"/>
  </g>
</svg>
```

### 5) Sandy Bottom Gradient

Warm sandy substrate for footer regions, bottom-aligned panels, or ground planes.

- `bg-gradient-to-t from-[#d4c8a0] via-[#ddd0b0] to-[#e8e0c0] rounded-b-2xl`.
- Sand texture overlay: `bg-[radial-gradient(circle_1px_at_4px_4px,rgba(180,160,100,0.15)_0.5px,transparent_0)] bg-[size:6px_6px]`.
- Transition into water: below the sandy panel, use `bg-gradient-to-b from-[#d4c8a0] to-[#40c0d0]` as a 2rem-tall transition strip.

### 6) Surface Ripple Light Pattern

Caustic light network that animates across shallow water surfaces.

- Base: `bg-white/5` overlay on any turquoise panel.
- Caustic network: `bg-[conic-gradient(from_0deg_at_20%_30%,transparent_0deg,rgba(255,255,255,0.08)_30deg,transparent_60deg,rgba(255,255,255,0.06)_90deg,transparent_120deg,rgba(255,255,255,0.1)_150deg,transparent_180deg,rgba(255,255,255,0.05)_210deg,transparent_240deg,rgba(255,255,255,0.08)_270deg,transparent_300deg,rgba(255,255,255,0.06)_330deg,transparent_360deg)]`.
- Animation: `animate-[shimmer_6s_ease-in-out_infinite_alternate]` with a subtle translate-x and opacity cycle to simulate light refracting through surface ripples.

### 7) Tropical Fish Scatter

Small colorful fish shapes scattered as background decoration in header or hero areas.

```html
<div class="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
  <svg viewBox="0 0 20 12" class="absolute top-[15%] left-[10%] w-5 h-3 text-[#40c0d0]">
    <ellipse cx="10" cy="6" rx="8" ry="5" fill="currentColor"/>
    <path d="M18,6 L22,3 L22,9 Z" fill="currentColor"/>
    <circle cx="5" cy="5" r="1" fill="#1a3a4a"/>
  </svg>
  <svg viewBox="0 0 20 12" class="absolute top-[35%] right-[15%] w-4 h-3 text-[#e08040]">
    <ellipse cx="10" cy="6" rx="8" ry="5" fill="currentColor"/>
    <path d="M18,6 L22,3 L22,9 Z" fill="currentColor"/>
    <circle cx="5" cy="5" r="1" fill="#1a3a4a"/>
  </svg>
  <svg viewBox="0 0 20 12" class="absolute top-[55%] left-[40%] w-6 h-4 text-[#8a40a0]">
    <ellipse cx="10" cy="6" rx="8" ry="5" fill="currentColor"/>
    <path d="M18,6 L22,3 L22,9 Z" fill="currentColor"/>
    <circle cx="5" cy="5" r="1" fill="#1a3a4a"/>
  </svg>
</div>
```

### 8) Coral Ridge Divider

Horizontal separator styled as a ridge of coral growth between sections.

- `h-3 bg-gradient-to-r from-transparent via-[#e08080] to-transparent rounded-full opacity-60`.
- Texture dot overlay: `bg-[radial-gradient(circle_1px_at_3px_2px,#c06060_0.5px,transparent_0)] bg-[size:6px_4px]`.

### 9) Reef Shadow Card

Card elevated above the reef with a deep underwater shadow.

- `bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-[0_8px_32px_rgba(26,58,74,0.2),0_2px_8px_rgba(26,58,74,0.1)] border border-[#40c0d0]/20`.
- Caustic top-edge highlight: add an inner top border with `border-t-2 border-t-[#ffffff40]` to suggest light catching the top of the card like sunlight hitting a flat reef rock.

### 10) Anemone Waving Accent

Organic waving tentacle decoration below hero text or above footer.

```html
<svg viewBox="0 0 200 50" class="w-full h-12 opacity-30">
  <g stroke="#e08080" stroke-width="1.5" fill="none" stroke-linecap="round">
    <path d="M5,45 Q8,25 5,8">
      <animate attributeName="d" dur="4s" repeatCount="indefinite"
        values="M5,45 Q8,25 5,8;M5,45 Q2,25 8,8;M5,45 Q8,25 5,8"/>
    </path>
    <path d="M20,45 Q23,20 18,5">
      <animate attributeName="d" dur="3.5s" repeatCount="indefinite"
        values="M20,45 Q23,20 18,5;M20,45 Q17,22 22,5;M20,45 Q23,20 18,5"/>
    </path>
    <path d="M35,45 Q38,28 33,10">
      <animate attributeName="d" dur="4.2s" repeatCount="indefinite"
        values="M35,45 Q38,28 33,10;M35,45 Q32,26 37,10;M35,45 Q38,28 33,10"/>
    </path>
    <path d="M50,45 Q53,22 48,6">
      <animate attributeName="d" dur="3.8s" repeatCount="indefinite"
        values="M50,45 Q53,22 48,6;M50,45 Q47,24 52,6;M50,45 Q53,22 48,6"/>
    </path>
    <path d="M65,45 Q68,26 63,9">
      <animate attributeName="d" dur="4.1s" repeatCount="indefinite"
        values="M65,45 Q68,26 63,9;M65,45 Q62,24 67,9;M65,45 Q68,26 63,9"/>
    </path>
    <path d="M80,45 Q83,20 78,5">
      <animate attributeName="d" dur="3.6s" repeatCount="indefinite"
        values="M80,45 Q83,20 78,5;M80,45 Q77,22 82,5;M80,45 Q83,20 78,5"/>
    </path>
    <path d="M95,45 Q98,24 93,7">
      <animate attributeName="d" dur="4.3s" repeatCount="indefinite"
        values="M95,45 Q98,24 93,7;M95,45 Q92,22 97,7;M95,45 Q98,24 93,7"/>
    </path>
  </g>
</svg>
```

## Color Palette System

| Color Name | Hex | Role | Usage |
|---|---|---|---|
| Turquoise Shallow | `#40c0d0` | Primary base | Water backgrounds, primary surfaces, borders |
| Coral Pink | `#e08080` | Primary accent | Brain coral panels, highlights, active states |
| Coral Orange | `#e08040` | Secondary accent | Warming touches, hover states, secondary CTAs |
| Clownfish Orange | `#e06020` | CTA accent | Buttons, badges, alert highlights, focal points |
| Sandy Bottom | `#d4c8a0` | Ground surface | Footers, ground planes, neutral warm surfaces |
| Sea Fan Purple | `#8a40a0` | Rare accent | Decorative elements, rare highlights, dividers |
| Surface Light | `#ffffff40` | Light overlay | Caustic ripples, highlights, shimmer effects |
| Reef Shadow | `#1a3a4a` | Deep tone | Text on light, shadows, deep contrast elements |

Rules: Bright and sunlit -- the shallow reef is the most illuminated zone. Turquoise dominates. Warm corals and oranges punctuate the cool base. Purple is used sparingly for exotic accents. Surface light overlays are always present to maintain the sunlit shallows character. Reef shadow is used only for text and deep shadows, never for large surface fills.

## Typography Recommendations

- **Display:** Quicksand (700 weight) -- rounded, organic, friendly, mirrors the soft curves of coral and brain coral textures. Use at `text-4xl` or larger for headers.
- **Body:** DM Sans (400/500 weight) -- clean, readable sans-serif that lets the vibrant palette carry the visual weight. Use at `text-base` to `text-lg`.
- **Accent:** Nunito (600 weight) -- for labels, badges, and small accent text that needs personality without competing with the coral textures.
- Line height for body text: `leading-relaxed` (1.625) to give content breathing room among the organic decorative elements.
- Letter spacing for display: `tracking-tight` for large headers, `tracking-wide` for uppercase labels and badges.
- All typography must maintain a minimum contrast ratio of 4.5:1 against its background. Use `text-[#1a3a4a]` on light surfaces and `text-white` on saturated reef surfaces.

## Component Architecture Pattern

Every component follows a layered structure that mimics the depth of a shallow reef cross-section: water background at the base, caustic light overlay, content layer, and decorative coral elements. This layering creates the illusion of looking into shallow water.

**Required layers (bottom to top):**

1. **Water layer** -- full container background with the sunlit turquoise gradient.
2. **Caustic overlay** -- absolutely positioned, pointer-events-none, animating shimmer pattern at low opacity (5-15%).
3. **Content layer** -- the actual interactive or informational content, positioned relatively.
4. **Coral decoration** -- SVG elements (clownfish, sea fan, anemone tentacles) positioned absolutely as environmental decoration, pointer-events-none, 30-50% opacity.

**Container pattern:**

```html
<div class="relative overflow-hidden bg-gradient-to-b from-[#e0f8ff] via-[#40c0d0] to-[#1a6a7a] rounded-2xl">
  <!-- Caustic overlay -->
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,rgba(255,255,255,0.2)_0%,transparent_40%)] pointer-events-none animate-[shimmer_6s_ease-in-out_infinite_alternate]"></div>
  <!-- Content -->
  <div class="relative z-10 p-6">
    <!-- Actual content here -->
  </div>
  <!-- Coral decoration -->
  <svg class="absolute bottom-2 right-4 w-12 h-8 opacity-40 pointer-events-none" viewBox="0 0 64 36">
    <!-- clownfish SVG -->
  </svg>
</div>
```

**Card pattern:**

```html
<div class="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-[0_8px_32px_rgba(26,58,74,0.2)] border border-[#40c0d0]/20 border-t-2 border-t-[#ffffff40] relative overflow-hidden">
  <div class="absolute inset-0 bg-[radial-gradient(circle_2px_at_4px_4px,rgba(64,192,208,0.05)_1px,transparent_0)] bg-[size:8px_8px] pointer-events-none"></div>
  <div class="relative z-10">
    <!-- card content -->
  </div>
</div>
```

## Interaction Rules

- **Hover states** add a warm glow: `hover:shadow-[0_0_20px_rgba(224,128,128,0.3)]` or `hover:shadow-[0_0_20px_rgba(224,96,32,0.3)]` to suggest bioluminescence or reflected light.
- **Active/pressed states** deepen the water: `active:translate-y-0.5 active:shadow-[0_2px_8px_rgba(26,58,74,0.2)]` to simulate pressing into the sandy bottom.
- **Focus states** use a clownfish orange ring: `focus-visible:ring-2 focus-visible:ring-[#e06020] focus-visible:ring-offset-2 focus-visible:ring-offset-[#40c0d0]`.
- **Transitions** are fluid and slow like water movement: `transition-all duration-300 ease-out`. Never use `duration-100` or snappy spring animations -- water moves slowly.
- **Loading states** use a gentle caustic shimmer animation rather than spinners, or a small clownfish SVG that swims side-to-side with `animate-[swim_2s_ease-in-out_infinite_alternate]`.
- **Scroll reveals** fade in from below with `opacity-0 translate-y-4 animate-[reveal_0.6s_ease-out_forwards]` to simulate reef elements emerging from the sandy bottom.
- **Disabled states** desaturate to muted gray-blue: `opacity-50 saturate-50 grayscale-[30%]` to suggest the element has drifted into deeper, less sunlit water.

## Reusable Tailwind Tokens

- Sunlit water bg: `bg-gradient-to-b from-[#e0f8ff] via-[#40c0d0] to-[#1a6a7a]`
- Brain coral panel: `bg-gradient-to-br from-[#e08080] to-[#c06060] rounded-[2rem]`
- Clownfish CTA: `bg-gradient-to-r from-[#e06020] to-[#c04a10] text-white font-bold rounded-full border-2 border-white`
- Sandy surface: `bg-gradient-to-t from-[#d4c8a0] via-[#ddd0b0] to-[#e8e0c0]`
- Sea glass panel: `bg-[#40c0d0]/15 backdrop-blur-md border border-[#40c0d0]/30 rounded-2xl`
- Reef shadow card: `bg-white/90 backdrop-blur-sm rounded-2xl shadow-[0_8px_32px_rgba(26,58,74,0.2)]`
- Caustic overlay: `bg-[radial-gradient(ellipse_at_30%_10%,rgba(255,255,255,0.25)_0%,transparent_45%)]`
- Surface ripple: `bg-[conic-gradient(from_0deg_at_20%_30%,transparent_0deg,rgba(255,255,255,0.08)_30deg,transparent_60deg)]`
- Coral ridge: `h-3 bg-gradient-to-r from-transparent via-[#e08080] to-transparent rounded-full`
- Reef text: `text-[#1a3a4a]`
- Reef text on dark: `text-white drop-shadow-[0_1px_2px_rgba(26,58,74,0.5)]`
- Warm hover glow: `hover:shadow-[0_0_20px_rgba(224,128,128,0.3)]`
- Clownfish focus: `focus-visible:ring-2 focus-visible:ring-[#e06020] focus-visible:ring-offset-2 focus-visible:ring-offset-[#40c0d0]`

## Quality Checklist

- Background reads as bright, sunlit shallow water -- never dark ocean or deep blue.
- At least one brain coral textured panel with the bumpy radial-gradient pattern.
- Clownfish SVG accent present somewhere in the interface (button, badge, header, or decoration).
- Sea fan branching SVG used as a decorative element in at least one section.
- Sandy bottom gradient appears in footer or ground-level elements.
- Surface caustic ripple light pattern animates on at least the primary content area.
- Warm coral/orange accents contrast against cool turquoise base on every component.
- All organic shapes are rounded -- no sharp rectangular corners on decorative elements.
- The aesthetic reads as a thriving, colorful, sunlit shallow reef -- not deep ocean, not aquarium, not tropical beach.
- Transitions are fluid and slow (water-like), never snappy or spring-based.

## Anti-Patterns

- Deep ocean blues, navy, or midnight backgrounds (this is the shallow photic zone, not the abyss).
- Dark or moody aesthetics (shallow reefs are the brightest, most illuminated zone).
- Sharp rectangular corners on decorative elements (coral and marine life are organic and rounded).
- Missing caustic light pattern (every sunlit shallow surface has dappled light).
- Muted or desaturated palette (shallow reefs are the most colorful and vibrant zone in the ocean).
- Cold-only palette without warm coral/orange accents (the reef life provides warm contrast).
- Snappy or spring-based animations (water moves fluidly and slowly).
- Rigid grid layouts without organic offsets (reef growth is asymmetric and organic).
- Deep water transition gradients that go too dark at the bottom (the shallow reef floor is sandy, not abyssal).
- Overuse of the clownfish orange (it is a focal accent, not a background color).
- Geometric decorative shapes instead of organic SVG coral, fish, or anemone elements.
- Missing sandy bottom element (every shallow reef has a substrate).

## Accessibility Considerations

- **Contrast ratios:** All text must meet WCAG AA minimum (4.5:1 for normal text, 3:1 for large text). Use `text-[#1a3a4a]` on turquoise/sand backgrounds and `text-white` on saturated coral surfaces. Test every text-on-background combination.
- **Caustic animations:** Provide `prefers-reduced-motion` media query support. When the user prefers reduced motion, disable the shimmer/ripple animations: `@media (prefers-reduced-motion: reduce) { .animate-\\[shimmer_6s\\] { animation: none; } }`.
- **Focus indicators:** Every interactive element must have a visible focus ring. Use the clownfish orange focus ring (`focus-visible:ring-2 focus-visible:ring-[#e06020]`) which provides strong contrast against both turquoise and white backgrounds.
- **Color independence:** Do not convey meaning through color alone. Pair coral orange CTAs with text labels or icons. Pair status indicators (green for good, orange for warning) with text labels or patterns.
- **SVG accessibility:** All decorative SVGs must have `aria-hidden="true"` and `role="presentation"`. Functional SVGs (like the clownfish icon in a button) must have `role="img"` and an `aria-label`.
- **Text legibility on textured surfaces:** Brain coral textured panels must have sufficient contrast between the texture pattern and the text placed on top. If the texture interferes with readability, increase the panel's base opacity or reduce the texture opacity.
- **Motion sensitivity:** The anemone tentacle animation and caustic shimmer are decorative. They must never be the sole means of conveying information. All information conveyed by motion must also be available statically.
- **Touch targets:** All interactive elements must be at least 44x44px (WCAG 2.2 target size). Clownfish buttons and coral-themed controls must meet this minimum.
- **Semantic HTML:** Use semantic elements (`<nav>`, `<main>`, `<article>`, `<section>`) regardless of the coral reef visual layer. The visual aesthetic must not compromise document structure.
