---
name: pagoda-temple-ui
description: Build pagoda temple UI components (tiered eaves, upturned roof corners, vermillion lacquer, bronze bell, stone lantern path, incense curl) with layered roof silhouettes, sacred vermillion accents, and the serene vertical ascent of East Asian temple architecture. Trigger this skill when the user asks for pagoda design, East Asian temple, tiered eaves, vermillion lacquer, bronze bell, stone lantern, toro path, incense animation, Chinese temple, Japanese temple, Korean temple, sacred architecture, or layered roof silhouette interfaces.
---

# Pagoda Temple UI

Use this skill to design and implement serene, vertically-ascent interfaces inspired by East Asian pagoda temple architecture: tiered eaves with upturned corners, vermillion lacquer surfaces, bronze bell silhouettes, stone lantern (toro) path accents, incense curl animations, and the layered sacred geometry of pagoda roofing. The aesthetic is one of quiet vertical ascension, reverence, and lacquered warmth against dark timber and stone.

## Non-Negotiable Foundations

Every pagoda temple UI must satisfy these baseline requirements before any styling is applied:

- **Tiered eaves silhouette must be present.** The pagoda roof is the defining architectural element. Every layout must include at least one stacked roof layer with upturned corners via clip-path or SVG. A design without tiered eaves is not pagoda UI.
- **Vermillion lacquer as primary surface.** The warm red-orange of lacquered wood is the ground color. Gold and dark timber sit on top of it, not the reverse.
- **Dark timber as structural counterpoint.** Roof tiles, beam shadows, and timber framing use near-black dark tones. Vermillion floats against darkness, never against white.
- **Vertical rhythm is sacred.** The layout must suggest upward movement. Stacked elements, rising incense, ascending lantern paths, and tiered geometry all reinforce this.
- **Material authenticity over abstraction.** Lacquer is warm and slightly luminous, not flat red. Stone is weathered, not uniform gray. Bronze has patina, not shine. Every surface must reference its material origin.
- **Serene stillness as emotional target.** The UI should feel like standing in a temple courtyard at dawn. Contemplative, unhurried, still. No visual noise, no chromatic chaos.

## Core Material Recipes

### 1) Vermillion Lacquer Panel

The signature pagoda temple surface -- warm, slightly luminous red lacquer over dark timber.

- `bg-gradient-to-br from-[#c44020] to-[#9a3018] border-[2px] border-[#3a2a1a] p-8 shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]`.
- Subtle lacquer grain: `bg-[url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4"><rect width="4" height="4" fill="transparent"/><rect x="0" y="0" width="1" height="1" fill="rgba(0,0,0,0.03)"/></svg>')] bg-[length:4px_4px]`.

### 2) Tiered Eaves Silhouette (3-Layer Pagoda Roof)

The defining architectural feature -- stacked roof tiers with upturned corners via clip-path.

```html
<div class="relative w-full h-48">
  <!-- Tier 3 (top, smallest) -->
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-10 bg-[#2a2a2a]"
    style="clip-path: polygon(5% 100%, 15% 0%, 85% 0%, 95% 100%, 88% 100%, 82% 20%, 18% 20%, 12% 100%);">
  </div>
  <!-- Tier 2 (middle) -->
  <div class="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-12 bg-[#2a2a2a]"
    style="clip-path: polygon(2% 100%, 12% 0%, 88% 0%, 98% 100%, 92% 100%, 85% 25%, 15% 25%, 8% 100%);">
  </div>
  <!-- Tier 1 (bottom, widest) -->
  <div class="absolute top-22 left-1/2 -translate-x-1/2 w-64 h-14 bg-[#2a2a2a]"
    style="clip-path: polygon(0% 100%, 10% 0%, 90% 0%, 100% 100%, 94% 100%, 88% 30%, 12% 30%, 6% 100%);">
  </div>
  <!-- Upturned corner accents -->
  <svg class="absolute top-20 left-[calc(50%-340px)] w-8 h-4 opacity-60" viewBox="0 0 32 16">
    <path d="M32,16 Q20,12 10,0 Q8,4 0,8" fill="none" stroke="#c44020" stroke-width="2"/>
  </svg>
  <svg class="absolute top-20 right-[calc(50%-340px)] w-8 h-4 opacity-60" viewBox="0 0 32 16" style="transform:scaleX(-1)">
    <path d="M32,16 Q20,12 10,0 Q8,4 0,8" fill="none" stroke="#c44020" stroke-width="2"/>
  </svg>
</div>
```

### 3) Bronze Bell SVG Silhouette

Temple bell (bonsho / bon) with patinated bronze surface.

```html
<svg viewBox="0 0 60 80" class="w-15 h-20 opacity-40">
  <defs>
    <linearGradient id="bronze-patina" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8a6a3a"/>
      <stop offset="50%" stop-color="#6a5028"/>
      <stop offset="100%" stop-color="#4a3a1a"/>
    </linearGradient>
  </defs>
  <g fill="url(#bronze-patina)">
    <!-- Suspension loop -->
    <path d="M25,5 Q25,0 30,0 Q35,0 35,5 L35,10 L25,10 Z"/>
    <!-- Bell body - flared shape -->
    <path d="M20,10 L18,12 Q8,40 5,60 Q3,70 10,75 L50,75 Q57,70 55,60 Q52,40 42,12 L40,10 Z"/>
    <!-- Horizontal ridges -->
    <line x1="16" y1="25" x2="44" y2="25" stroke="#3a2a1a" stroke-width="1.5" opacity="0.5"/>
    <line x1="13" y1="40" x2="47" y2="40" stroke="#3a2a1a" stroke-width="1.5" opacity="0.5"/>
    <line x1="10" y1="55" x2="50" y2="55" stroke="#3a2a1a" stroke-width="1.5" opacity="0.5"/>
    <!-- Striker point (shu) -->
    <ellipse cx="30" cy="68" rx="6" ry="4" fill="#6a5028" opacity="0.7"/>
  </g>
</svg>
```

### 4) Stone Lantern (Toro) Path Accent

Stepped stone lantern silhouette for courtyard path lighting.

```html
<svg viewBox="0 0 40 70" class="w-10 h-[70px] opacity-35">
  <g fill="#8a8a7a">
    <!-- Light chamber -->
    <rect x="10" y="10" width="20" height="18" rx="1"/>
    <!-- Light glow -->
    <ellipse cx="20" cy="19" rx="6" ry="5" fill="#c4a043" opacity="0.2"/>
    <!-- Roof cap -->
    <path d="M6,10 L20,2 L34,10 Z"/>
    <!-- Pillar -->
    <rect x="16" y="28" width="8" height="22"/>
    <!-- Base steps -->
    <rect x="8" y="50" width="24" height="4"/>
    <rect x="4" y="54" width="32" height="5"/>
    <rect x="0" y="59" width="40" height="6"/>
  </g>
</svg>
```

Multiple lanterns in a receding path, diminishing in size to suggest depth:

- Container: `flex items-end gap-16 justify-center`.
- Lantern 1: `w-12 h-[84px] opacity-40`.
- Lantern 2: `w-10 h-[70px] opacity-30 translate-y-2`.
- Lantern 3: `w-8 h-[56px] opacity-20 translate-y-4`.

### 5) Incense Curl Animation

Thin wispy smoke rising from a censer -- CSS-only animation.

```html
<div class="relative w-16 h-32">
  <svg viewBox="0 0 60 120" class="w-full h-full">
    <defs>
      <filter id="incense-blur">
        <feGaussianBlur stdDeviation="1.5"/>
      </filter>
    </defs>
    <!-- Smoke curl 1 -->
    <path d="M30,110 Q28,90 32,70 Q36,50 30,30 Q26,15 30,0"
      fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2"
      filter="url(#incense-blur)"
      class="origin-bottom animate-[incense-rise_6s_ease-in-out_infinite]"/>
    <!-- Smoke curl 2 -->
    <path d="M30,110 Q34,85 28,65 Q22,45 30,25 Q35,10 28,0"
      fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"
      filter="url(#incense-blur)"
      class="origin-bottom animate-[incense-rise_8s_ease-in-out_1s_infinite]"/>
    <!-- Smoke curl 3 -->
    <path d="M30,110 Q25,88 33,68 Q37,48 28,28 Q22,12 30,0"
      fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"
      filter="url(#incense-blur)"
      class="origin-bottom animate-[incense-rise_10s_ease-in-out_2s_infinite]"/>
    <!-- Censer base -->
    <rect x="22" y="108" width="16" height="8" rx="2" fill="#8a6a3a"/>
    <ellipse cx="30" cy="108" rx="8" ry="2" fill="#6a5028"/>
  </svg>
</div>
```

Keyframe (add to Tailwind config or style block):

```css
@keyframes incense-rise {
  0% { transform: translateY(0) scaleX(1); opacity: 0; }
  10% { opacity: 1; }
  50% { transform: translateY(-20px) scaleX(1.3); }
  100% { transform: translateY(-50px) scaleX(0.6); opacity: 0; }
}
```

### 6) Prayer Rope / Knot Decoration

Buddhist prayer bead (juzu/nenju) strand as horizontal divider.

- Container: `flex items-center justify-center gap-2 py-4`.
- Bead: `w-2 h-2 rounded-full bg-[#c4a043] border border-[#3a2a1a] shadow-[0_1px_2px_rgba(0,0,0,0.3)]`.
- Knot: `w-3 h-3 rounded-sm bg-[#c44020] border border-[#3a2a1a] rotate-45`.
- Pattern: alternating bead-knot-bead with 108 bead count as `repeat(27, bead-knot)`.

### 7) Lotus Flower Accent

Simplified lotus silhouette as a decorative corner or section divider.

```html
<svg viewBox="0 0 80 40" class="w-20 h-10 opacity-30">
  <g fill="#c4a043" opacity="0.6">
    <!-- Center petal -->
    <path d="M40,5 Q45,15 40,35 Q35,15 40,5"/>
    <!-- Left petals -->
    <path d="M32,10 Q38,18 35,35 Q28,20 32,10" transform="rotate(-15,32,10)"/>
    <path d="M24,14 Q32,20 30,35 Q20,22 24,14" transform="rotate(-30,24,14)"/>
    <!-- Right petals -->
    <path d="M48,10 Q42,18 45,35 Q52,20 48,10" transform="rotate(15,48,10)"/>
    <path d="M56,14 Q48,20 50,35 Q60,22 56,14" transform="rotate(30,56,14)"/>
  </g>
</svg>
```

### 8) Pagoda Temple Card

Composite card combining lacquer surface, eaves roof, and bell accent.

- Card: `bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border border-[#3a2a1a] rounded-lg overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)]`.
- Roof header: Tiered eaves clip-path as background decoration.
- Content area: `bg-gradient-to-br from-[#c44020] to-[#9a3018] p-6`.
- Bell icon: Bronze bell SVG at top-right corner, `opacity-30`.

### 9) Pagoda Temple Button

Vermillion lacquer button with dark timber shadow.

- `bg-gradient-to-b from-[#c44020] to-[#9a3018] text-[#e8dcc0] font-serif font-medium uppercase tracking-widest px-8 py-3 border border-[#3a2a1a] shadow-[0_3px_0_#1a1a1a,0_6px_12px_rgba(0,0,0,0.3)] hover:translate-y-[2px] hover:shadow-[0_1px_0_#1a1a1a,0_3px_6px_rgba(0,0,0,0.3)] active:translate-y-[3px] active:shadow-none transition-all`.

### 10) Dark Timber Surface

Structural wood surface for cards, panels, and backgrounds.

- `bg-[#2a2a2a] border border-[#1a1a1a] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]`.
- Wood grain overlay: `bg-[repeating-linear-gradient(90deg,transparent,transparent_3px,rgba(0,0,0,0.05)_3px,rgba(0,0,0,0.05)_4px)]`.

### 11) Gold Leaf Accent Trim

Thin gold leaf border strip for section dividers and frame accents.

- `h-[2px] bg-gradient-to-r from-transparent via-[#c4a043] to-transparent opacity-40`.
- Corner knot: 8x8 rotated square `bg-[#c4a043] border border-[#3a2a1a] rotate-45 shadow-[0_0_4px_rgba(196,160,67,0.3)]`.

## Color Palette System

| Color | Hex | Material |
|---|---|---|
| Vermillion Red | `#c44020` | Lacquered wood surface |
| Vermillion Dark | `#9a3018` | Shadow lacquer |
| Roof Tile Dark | `#2a2a2a` | Pagoda roof tiles, dark timber |
| Timber Black | `#1a1a1a` | Deep structural shadow |
| Gold Leaf | `#c4a043` | Gilded accents, bell highlights |
| Gold Dark | `#8a7a2a` | Aged gold shadow |
| Stone Lantern Gray | `#8a8a7a` | Weathered stone (toro) |
| Stone Light | `#a8a898` | Highlighted stone edge |
| Bronze Bell | `#8a6a3a` | Patinated bronze |
| Bronze Dark | `#6a5028` | Deep bronze shadow |
| Incense Smoke | `rgba(255,255,255,0.12)` | Wispy translucent smoke |
| Wood Dark | `#3a2a1a` | Temple timber beams |
| Lotus Pink | `#d4a0b0` | Lotus flower accent |
| Lotus Pale | `#e8c8d4` | Highlighted lotus petal |
| Parchment | `#e8dcc0` | Light text on dark surfaces |

Rules: Vermillion red is the primary warm surface. Dark timber is the structural frame. Gold leaf accents appear sparingly on vermillion. Stone gray is reserved for lanterns and courtyard elements. The palette should feel like a temple courtyard at dawn -- warm lacquer glowing against dark timber, with stone and bronze grounding the composition. The palette should never become bright or saturated; everything has the patina of age and use.

## Typography Recommendations

- **Display:** Cinzel, Noto Serif SC, Noto Serif JP (classical serif with vertical weight, supporting CJK characters).
- **Body:** Lora, Source Serif Pro, Noto Serif (warm readable serif with enough weight for dark backgrounds).
- **Labels:** `font-serif font-medium uppercase tracking-widest text-[#c4a043]` (gold on dark).
- **CJK Support:** Always include Noto Serif SC/JP/KR as fallback for Chinese, Japanese, Korean text content. Temple architecture names and inscriptions should render in proper CJK serif.
- **Vertical Text:** For decorative headings, consider `writing-mode: vertical-rl` to suggest traditional vertical inscription style.

## Component Architecture Pattern

Pagoda temple UI follows a layered vertical stack architecture mirroring the pagoda's own construction:

```
+------------------------------------------+
|  Tiered Eaves Roof (clip-path layers)    |  <- Top: architectural crown
+------------------------------------------+
|  Dark Timber Header Bar                  |  <- Structural frame
+------------------------------------------+
|                                          |
|  Vermillion Lacquer Content Surface      |  <- Primary content area
|                                          |
|  [Lotus Accent]  [Bell SVG]             |  <- Decorative elements
|                                          |
|  [Prayer Rope Divider]                  |  <- Section separator
|                                          |
|  [Stone Lantern Path]                   |  <- Navigation / footer accent
|                                          |
+------------------------------------------+
|  Dark Timber Footer / Base               |  <- Structural base
+------------------------------------------+
|  Incense Curl (rising from center)       |  <- Ambient animation
+------------------------------------------+
```

**Key architectural rules:**

- Content lives on vermillion surfaces. Never place text directly on dark timber backgrounds.
- Dark timber frames all vermillion panels. It is the structural wood, not a content area.
- Gold leaf accents appear only at transitions: borders, dividers, corner knots. Never as large fills.
- Incense animation is always in the footer or a dedicated ambient space, never overlapping content.
- Stone lantern elements are path/wayfinding accents, not primary content carriers.
- Tiered eaves appear at section tops and page headers. They are the architectural crown.

**Responsive behavior:**

- Tiered eaves reduce from 5 tiers (desktop) to 3 tiers (tablet) to 1 tier (mobile).
- Stone lantern path collapses to a single lantern icon on mobile.
- Incense curl animation disables on mobile (`hidden md:block`) for performance.
- Verimillion panels maintain padding but reduce border width on small screens.

## Interaction Rules

### Hover States

- Vermillion buttons: subtle downward shift (`translate-y-[2px]`) with shadow reduction, simulating the press of a lacquered wooden button.
- Gold leaf accents: gentle glow pulse (`shadow-[0_0_8px_rgba(196,160,67,0.3)]`) on hover, suggesting light catching gold leaf.
- Stone lantern icons: opacity increase from 0.35 to 0.55, simulating the lantern "lighting up."
- Bronze bell: subtle rotation (`rotate-2deg`) suggesting the bell swaying.

### Focus States

- `focus:ring-2 focus:ring-[#c4a043]/50 focus:ring-offset-2 focus:ring-offset-[#2a2a2a]` -- gold ring against dark timber background.
- Focus ring uses gold leaf color, consistent with all accent highlights.

### Transition Timing

- All hover transitions: `transition-all duration-200 ease-out`.
- Incense curl: `duration-[6000ms]` slow ease-in-out for natural smoke drift.
- Page section reveals: `transition-all duration-500 ease-in-out` for serene pacing.
- No spring physics or bouncy easing. Movement should feel deliberate and still.

### Scroll Behavior

- Tiered eaves at page top should use `position: sticky` with `z-10` so the architectural crown remains visible during scroll.
- Stone lantern path along the side uses `position: fixed` on desktop, collapses to inline on mobile.

### Click Feedback

- Buttons: `active:translate-y-[3px] active:shadow-none` -- the button sinks into the lacquered surface.
- Cards: no scale transform. Cards should feel heavy and fixed, like wooden architecture.

## Reusable Tailwind Tokens

- Lacquer panel: `bg-gradient-to-br from-[#c44020] to-[#9a3018] border-[2px] border-[#3a2a1a] shadow-[0_4px_16px_rgba(0,0,0,0.3)]`.
- Dark timber: `bg-[#2a2a2a] border border-[#1a1a1a] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]`.
- Gold trim: `h-[2px] bg-gradient-to-r from-transparent via-[#c4a043] to-transparent opacity-40`.
- Gold text: `text-[#c4a043] font-serif font-medium uppercase tracking-widest`.
- Bronze bell button: `bg-gradient-to-b from-[#8a6a3a] to-[#6a5028] text-[#e8dcc0] border border-[#3a2a1a]`.
- Pagoda button: `bg-gradient-to-b from-[#c44020] to-[#9a3018] text-[#e8dcc0] shadow-[0_3px_0_#1a1a1a]`.
- Stone surface: `bg-[#8a8a7a] text-[#1a1a1a] border border-[#6a6a5a]`.
- Incense container: `relative w-16 h-32 overflow-hidden` with SVG smoke curls.
- Eaves clip-path: `clip-path: polygon()` with upturned corner points.
- Prayer rope divider: alternating `rounded-full bg-[#c4a043]` beads and `rotate-45 bg-[#c44020]` knots.
- Lotus accent: SVG with `fill-[#c4a043] opacity-30`.

## Quality Checklist

- At least one tiered eaves silhouette with upturned corners present in the layout.
- Vermillion lacquer is the primary content surface color.
- Dark timber (#2a2a2a / #1a1a1a) frames all vermillion panels.
- Gold leaf appears only as accent (borders, text labels, trim), never as large fills.
- At least one bronze bell, stone lantern, or incense curl SVG element present.
- Typography uses classical serif fonts with gold-on-dark color scheme.
- The aesthetic reads as East Asian pagoda temple -- Chinese, Japanese, or Korean sacred architecture.
- Vertical rhythm is present: stacked elements suggest upward movement.
- Incense curl animation is smooth, slow, and translucent.
- The palette evokes age and patina, not bright modern saturation.
- Stone lantern elements suggest a courtyard or pathway context.
- Prayer rope or lotus flower accent is present as a decorative divider.
- All decorative SVGs are marked `aria-hidden="true"`.
- Hover and focus states are subtle and deliberate, not bouncy or playful.
- The overall atmosphere is serene, contemplative, and reverent.

## Anti-Patterns

- Missing tiered eaves or upturned roof corners (the defining architectural element of pagoda design).
- Flat untextured vermillion (lacquer is warm and slightly luminous, not flat CSS red).
- Gold used as large background fills (gold is an accent material, not a surface).
- Cold blue or green dominant palette (pagoda temples are warm vermillion, dark timber, and gold).
- Sans-serif typography (pagoda design pairs with classical serif and CJK serif fonts).
- Bright white backgrounds (pagoda UI uses dark timber backgrounds with vermillion panels).
- Bouncy or spring animations (pagoda movement is deliberate and still, never playful).
- Missing stone lantern or bronze bell references (these ground the design in temple courtyard context).
- Incense animation that is too fast or too opaque (smoke should be barely visible and slow).
- Modern flat design language (pagoda art uses specific traditional architectural forms -- eaves, lacquer, timber).
- Missing prayer rope, knot, or lotus decorative accents (these provide sacred ornamental rhythm).
- Bright saturated colors without patina (everything should feel aged and used, not brand new).
- Text placed directly on dark timber surfaces (text lives on vermillion panels).
- Responsive design that keeps 5-tier eaves on mobile (reduce tiers for small screens).
- Playful or casual tone (the aesthetic is contemplative and reverent, never casual).

## Accessibility Considerations

- Vermillion backgrounds with parchment text (#e8dcc0 on #c44020) must be verified (WCAG AA minimum, target AAA for body text).
- Gold text on dark timber (#c4a043 on #2a2a2a) provides good contrast -- verify AA for normal text, AAA for large text.
- Dark timber text on gold accent backgrounds must be tested: use #1a1a1a on #c4a043 for sufficient contrast.
- Focus states: `focus:ring-2 focus:ring-[#c4a043]/50 focus:ring-offset-2 focus:ring-offset-[#2a2a2a]` -- gold ring visible against both vermillion and dark timber.
- Decorative SVGs (tiered eaves, bronze bell, stone lantern, incense curl, lotus flower, prayer rope) must all be `aria-hidden="true"`.
- Incense curl animation must respect `prefers-reduced-motion: reduce` -- disable or simplify the animation.
- Tiered eaves clip-path decorations must not obscure interactive elements beneath them.
- Stone lantern path icons used for navigation must have visible text labels alongside them.
- Touch targets must be adequate despite ornate border styling (minimum 44x44px).
- The gold-on-dark color scheme may be difficult for users with color vision deficiency -- always pair color with shape/position indicators.
- Screen readers should announce pagoda card content in logical reading order: heading, description, bell/lantern accent label, action.
- Vertical text (for CJK inscriptions) must have appropriate `lang` attributes and fallback horizontal rendering.
