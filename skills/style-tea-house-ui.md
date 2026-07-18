---
name: tea-house-ui
description: Build tea house UI components (ceramic teapots, bamboo steamers, rice paper lanterns, wooden tray service, gongfu ceremony tools, zen garden view) with warm ceramic surfaces, natural wood accents, and the meditative ritual of tea preparation and service. Trigger this skill when the user asks for tea house design, tea ceremony UI, zen tea aesthetic, gongfu cha interface, ceramic teapot components, bamboo steamer layout, rice paper lantern glow, zen garden pattern, or East Asian tea ritual interfaces.
---

# Tea House UI

Use this skill to design and implement meditative, ritual-focused interfaces inspired by traditional tea houses: ceramic glaze gradients, bamboo ring textures, rice paper lantern translucency, wooden tray service surfaces, gongfu ceremony arrangements, and the quiet, contemplative atmosphere of tea preparation and service.

## Non-Negotiable Foundations

- Tea house UI evokes the meditative ritual of tea: the warmth of glazed ceramic, the grain of aged wood, the soft glow through rice paper, the precise geometry of gongfu arrangement.
- Colors are warm and earthy with a green tea accent: ceramic warm, bamboo amber, lantern cream, wood brown, tea leaf green, sand beige, celadon glaze, and ink black.
- Textures reference tea materials: glazed ceramic, bamboo fibers, rice paper translucency, wood grain, raked sand, and unfurled tea leaves.
- Typography blends refined serif (for the menu scroll feel) with clean minimal sans-serif (for the zen clarity of the ceremony).
- The mood is meditative, quiet, and ritualistic — every element should feel intentional and unhurried.
- Raked sand patterns and concentric ring motifs provide the signature geometric organic decorations.
- Gongfu tea set arrangement provides the compositional framework: small cups, shared fairness pitcher, precise pour paths.

## Core Material Recipes

### 1) Ceramic Teapot Surface

Warm glazed ceramic background with depth.

- `bg-gradient-to-br from-[#c4a888] via-[#b89878] to-[#a08868]` (celadon-to-warm ceramic gradient).
- Glaze shine: linear gradient overlay `bg-gradient-to-tr from-transparent via-white/10 to-transparent` at `opacity-[0.08]`.

### 2) Bamboo Steamer Circle

Concentric ring pattern mimicking a bamboo steamer viewed from above.

```html
<svg viewBox="0 0 120 120" class="w-full h-full">
  <g fill="none" stroke="#b89860" stroke-width="1.5" opacity="0.4">
    <circle cx="60" cy="60" r="10"/>
    <circle cx="60" cy="60" r="20"/>
    <circle cx="60" cy="60" r="30"/>
    <circle cx="60" cy="60" r="40"/>
    <circle cx="60" cy="60" r="50"/>
  </g>
  <g fill="none" stroke="#b89860" stroke-width="0.5" opacity="0.2">
    <line x1="10" y1="60" x2="110" y2="60"/>
    <line x1="60" y1="10" x2="60" y2="110"/>
    <line x1="25" y1="25" x2="95" y2="95"/>
    <line x1="95" y1="25" x2="25" y2="95"/>
  </g>
</svg>
```

### 3) Rice Paper Lantern Glow

Translucent warm lantern surface with soft inner glow.

- `bg-[#fff5e0]/80 rounded-full shadow-[0_0_40px_rgba(255,230,180,0.4),0_0_80px_rgba(255,220,160,0.15)]`.
- Internal gradient: `bg-gradient-to-b from-[#fff8e8]/90 via-[#fff0d0]/70 to-[#ffe8b8]/60`.

### 4) Wooden Tray Service Surface

Flat wood surface with visible grain pattern.

- `bg-gradient-to-r from-[#a08050] via-[#967848] to-[#a08050] rounded-sm`.
- Wood grain: SVG pattern overlay or CSS repeating-linear-gradient: `bg-[repeating-linear-gradient(180deg,transparent_0px,transparent_8px,rgba(0,0,0,0.04)_8px,rgba(0,0,0,0.04)_9px)]`.

### 5) Gongfu Tea Set Layout

Small-bowl arrangement grid for gongfu ceremony tools.

- `grid grid-cols-3 gap-2 p-3 bg-[#d4c8a0]/30 rounded-lg border border-[#b89860]/20`.
- Individual cup: `w-12 h-12 rounded-full bg-gradient-to-br from-[#c4a888] to-[#b89878] border border-[#a08868]/40 shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)]`.

### 6) Zen Garden Raked Sand Pattern

Horizontal raked lines suggesting a zen garden sand surface.

- `bg-[#d4c8a0] bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_6px,rgba(180,168,130,0.3)_6px,rgba(180,168,130,0.3)_7px)]`.
- Smooth stone accent: `w-8 h-6 rounded-[40%] bg-gradient-to-br from-[#8a7a6a] to-[#6a5a4a] shadow-md`.

### 7) Tea Leaf Unfurling Accent

Animated SVG of a tea leaf unfurling during steep.

```html
<svg viewBox="0 0 40 60" class="w-8 h-12 text-[#6a8a3a]">
  <g class="origin-bottom">
    <path d="M20,55 Q20,30 12,15 Q10,10 15,8 Q20,6 20,15 Q20,6 25,8 Q30,10 28,15 Q20,30 20,55Z"
      fill="currentColor" opacity="0.6"/>
    <path d="M20,55 Q20,35 20,10" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.4"/>
    <path d="M20,30 Q16,25 14,20" stroke="currentColor" stroke-width="0.3" fill="none" opacity="0.3"/>
    <path d="M20,28 Q24,23 26,18" stroke="currentColor" stroke-width="0.3" fill="none" opacity="0.3"/>
  </g>
</svg>
```

### 8) Celadon Glaze Button

Tea house primary action button with ceramic glaze.

- `bg-gradient-to-b from-[#8ab8a0] to-[#6a9880] text-white font-serif font-medium rounded-full px-8 py-3 border border-[#5a8870] shadow-[0_2px_8px_rgba(106,152,128,0.25)] hover:from-[#9ac8b0] hover:to-[#7aa890] transition-all`.

### 9) Ink Wash Card

Dark card with ink-wash painting aesthetic.

- `bg-gradient-to-br from-[#1a1a1a] via-[#2a2a28] to-[#1a1a1a] rounded-xl p-6 border border-[#3a3a38] shadow-[0_4px_16px_rgba(0,0,0,0.3)]`.
- Ink wash texture: subtle radial gradient `bg-[radial-gradient(ellipse_at_30%_40%,rgba(60,58,50,0.3),transparent_70%)]`.

### 10) Bamboo Divider Strip

Horizontal bamboo-themed divider.

- `h-2 bg-gradient-to-r from-transparent via-[#b89860]/40 to-transparent rounded-full`.
- Bamboo nodes: two small circles `w-1.5 h-1.5 rounded-full bg-[#b89860]/50` at each end of the visible line.

## Color Palette System

### Core Tea House Palette

| Color | Hex | Role |
|---|---|---|
| Ink Black | `#1a1a1a` | Deepest text, ink wash surfaces |
| Ink Charcoal | `#2a2a28` | Secondary dark, ink wash mid-tone |
| Tea Green | `#6a8a3a` | Tea leaf accent, active states |
| Celadon | `#8ab8a0` | Primary accent, glaze surfaces |
| Wood Tray | `#a08050` | Wood surfaces, tray backgrounds |
| Bamboo | `#b89860` | Bamboo textures, rings, accents |
| Ceramic Warm | `#c4a888` | Primary surface, ceramic glaze |
| Sand Raked | `#d4c8a0` | Zen garden, light backgrounds |
| Lantern Warm | `#fff5e0` | Lightest surface, lantern glow |

### Extended Palette

| Color | Hex | Role |
|---|---|---|
| Dark Ceramic | `#a08868` | Ceramic shadow, depth |
| Aged Wood | `#967848` | Wood grain variation |
| Celadon Dark | `#6a9880` | Button press state, depth |
| Sand Light | `#e8dcc0` | Very light sand surface |
| Bamboo Dark | `#8a7040` | Bamboo shadow, contrast |
| Tea Wash | `#c8d8b0` | Very light tea tint |
| Stone | `#8a7a6a` | Zen garden stone accents |

Rules: Warm earthy tones dominate with celadon and tea green as the signature accent colors. The palette should feel like a quiet afternoon in a tea house — warm, grounded, and contemplative. No harsh neons, no cold blues, no aggressive reds. The green must be leaf green, not lime or emerald.

## Typography Recommendations

- **Display:** Noto Serif, Source Serif Pro, or Cormorant Garamond (refined, contemplative serif).
- **Body:** Noto Sans, Inter, or Source Sans Pro (clean clarity for ceremony instructions).
- **Ceremonial:** Ma Shan Zheng or ZCOOL XiaoWei (Chinese calligraphy feel for tea names).
- **Labels:** `font-serif font-medium text-sm tracking-wider uppercase` (tea menu style).
- **Zen minimal:** `font-sans text-sm tracking-wide` (ceremony step labels).
- Typography should feel like a well-set tea scroll — refined, unhurried, with deliberate spacing.

### Spacing Philosophy

- Extra generous letter-spacing on labels: `tracking-widest` or `tracking-[0.2em]`.
- Line-height at 1.8 or 2.0 for body text (breathing room like a tea ceremony pause).
- Section spacing uses `space-y-12` or `space-y-16` (unhurried vertical rhythm).

## Component Architecture Pattern

### Tea Ceremony Card

```html
<div class="bg-gradient-to-br from-[#fff5e0]/60 to-[#d4c8a0]/40 rounded-2xl p-8 border border-[#b89860]/20 backdrop-blur-sm">
  <!-- Lantern glow header -->
  <div class="flex items-center gap-4 mb-6">
    <div class="w-10 h-10 rounded-full bg-[#fff5e0]/80 shadow-[0_0_20px_rgba(255,230,180,0.3)]"></div>
    <h3 class="font-serif text-xl text-[#1a1a1a] tracking-wide">Gongfu Ceremony</h3>
  </div>
  <!-- Gongfu set grid -->
  <div class="grid grid-cols-3 gap-3 mb-6">
    <!-- Cup slots -->
  </div>
  <!-- Bamboo divider -->
  <div class="h-px bg-gradient-to-r from-transparent via-[#b89860]/30 to-transparent mb-6"></div>
  <!-- Steps -->
  <div class="space-y-4">
    <!-- Ceremony steps -->
  </div>
</div>
```

### Zen Garden Panel

```html
<div class="bg-[#d4c8a0] rounded-xl overflow-hidden border border-[#b89860]/30">
  <!-- Raked sand header -->
  <div class="h-32 bg-[#d4c8a0] bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_6px,rgba(180,168,130,0.3)_6px,rgba(180,168,130,0.3)_7px)] relative">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-8 rounded-[40%] bg-gradient-to-br from-[#8a7a6a] to-[#6a5a4a] shadow-md"></div>
  </div>
  <!-- Content below sand -->
  <div class="p-6 bg-[#e8dcc0]/50">
    <!-- Panel content -->
  </div>
</div>
```

### Tea Menu Item

```html
<div class="flex items-start gap-4 p-4 rounded-xl bg-white/40 border border-[#b89860]/10 hover:bg-[#fff5e0]/40 hover:border-[#b89860]/20 transition-all duration-500">
  <!-- Tea leaf icon -->
  <div class="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#6a8a3a]/10 to-[#8ab8a0]/10 flex items-center justify-center">
    <!-- Tea leaf SVG -->
  </div>
  <div class="flex-1">
    <h4 class="font-serif text-base text-[#1a1a1a] mb-1">Dragon Well Longjing</h4>
    <p class="text-sm text-[#5a5a50] leading-relaxed">Pan-fired flat leaves, chestnut sweetness, light body</p>
    <div class="flex items-center gap-2 mt-2">
      <span class="text-xs text-[#8ab8a0] font-medium tracking-wide">Green</span>
      <span class="w-1 h-1 rounded-full bg-[#b89860]/30"></span>
      <span class="text-xs text-[#8a7a6a] tracking-wide">185F / 2min</span>
    </div>
  </div>
</div>
```

### Lantern Navigation Bar

```html
<nav class="flex items-center justify-center gap-6 py-4 bg-[#1a1a1a]/95 backdrop-blur-sm">
  <a class="group flex flex-col items-center gap-1.5">
    <div class="w-8 h-10 rounded-t-full bg-[#fff5e0]/80 shadow-[0_0_12px_rgba(255,230,180,0.2)] group-hover:shadow-[0_0_20px_rgba(255,230,180,0.4)] transition-all duration-500"></div>
    <span class="text-xs text-[#d4c8a0] font-serif tracking-wider">Home</span>
  </a>
  <!-- More nav items -->
</nav>
```

## Interaction Rules

- Default: calm, meditative, unhurried.
- Hover: surfaces brighten gently, like lantern light growing warmer:
  - `hover:shadow-[0_4px_16px_rgba(196,168,136,0.15)] hover:bg-[#fff5e0]/20 transition-all duration-500`.
- Active: `active:translate-y-px active:shadow-none` (subtle grounding press).
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#8ab8a0]/30` (celadon focus ring).
- Transitions: `transition-all duration-500 ease-in-out` (slow, meditative — like watching tea steep).
- Tea leaf unfurl: CSS animation on hover or state change, 2s duration, ease-out.
- Lantern glow pulse: gentle opacity oscillation between 0.6 and 1.0 over 4s, `@keyframes lantern-pulse`.

### Animation: Lantern Glow Pulse

```css
@keyframes lantern-pulse {
  0%, 100% { opacity: 0.6; box-shadow: 0 0 30px rgba(255,230,180,0.3); }
  50% { opacity: 1; box-shadow: 0 0 50px rgba(255,230,180,0.5); }
}
```

### Animation: Rake Sand Sweep

```css
@keyframes rake-sweep {
  0% { background-position: 0 0; }
  100% { background-position: 0 14px; }
}
```

### Animation: Tea Leaf Unfurl

```css
@keyframes leaf-unfurl {
  0% { transform: scaleY(0.3) rotate(-5deg); opacity: 0.3; }
  60% { transform: scaleY(1.05) rotate(1deg); opacity: 0.7; }
  100% { transform: scaleY(1) rotate(0deg); opacity: 0.6; }
}
```

## Reusable Tailwind Tokens

- Ceramic surface: `bg-gradient-to-br from-[#c4a888] via-[#b89878] to-[#a08868]`.
- Lantern glow: `bg-[#fff5e0]/80 rounded-full shadow-[0_0_40px_rgba(255,230,180,0.4)]`.
- Zen sand: `bg-[#d4c8a0] bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_6px,rgba(180,168,130,0.3)_6px,rgba(180,168,130,0.3)_7px)]`.
- Wood tray: `bg-gradient-to-r from-[#a08050] via-[#967848] to-[#a08050]`.
- Celadon button: `bg-gradient-to-b from-[#8ab8a0] to-[#6a9880] text-white font-serif rounded-full`.
- Ink wash card: `bg-gradient-to-br from-[#1a1a1a] via-[#2a2a28] to-[#1a1a1a] rounded-xl border border-[#3a3a38]`.
- Bamboo divider: `h-px bg-gradient-to-r from-transparent via-[#b89860]/30 to-transparent`.
- Tea leaf accent: SVG `text-[#6a8a3a]` with unfurl animation.
- Smooth stone: `rounded-[40%] bg-gradient-to-br from-[#8a7a6a] to-[#6a5a4a] shadow-md`.
- Ceremony grid: `grid grid-cols-3 gap-2 bg-[#d4c8a0]/30 rounded-lg border border-[#b89860]/20`.
- Light sand surface: `bg-[#e8dcc0]/50`.
- Raked sand animation: `animate-[rake-sweep_8s_linear_infinite]`.
- Lantern pulse: `animate-[lantern-pulse_4s_ease-in-out_infinite]`.

## Quality Checklist

- Color palette is warm earthy tones with celadon and tea green accents (no cold colors).
- At least one ceramic teapot gradient surface present.
- Bamboo steamer concentric ring SVG or pattern visible.
- Rice paper lantern glow effect on at least one element.
- Wooden tray surface with grain texture used for content areas.
- Zen garden raked sand pattern used as decorative background.
- Gongfu tea set arrangement grid present where appropriate.
- Tea leaf SVG or unfurling animation accent present.
- Typography uses refined serif for headings, clean sans-serif for body.
- Generous spacing and letter-spacing throughout (unhurried rhythm).
- Transitions are slow and meditative (500ms, not 300ms).
- Celadon focus rings for accessibility.
- The overall aesthetic reads as a quiet, contemplative tea house.
- Ink wash dark surfaces provide contrast against light ceramic and sand.

## Anti-Patterns

- Cold blue or gray palettes (tea house is warm ceramic and sand with green accent).
- Missing rice paper lantern glow (this is the signature light source).
- Fast aggressive animations (motion should be slow like tea steeping — 500ms minimum).
- Bright saturated neon colors (tea palette is muted earth tones).
- Missing bamboo or wood grain textures (these add material authenticity).
- Sharp angular shapes (tea house is organic, rounded, natural).
- Crowded layouts (tea house is spacious with generous whitespace — meditation requires breathing room).
- Corporate button styling (buttons should feel ceramic-glazed or celadon).
- Missing zen garden raked patterns (signature geometric organic motif).
- Missing gongfu tea set arrangement (provides compositional framework).
- Pure white backgrounds (use warm sand `#e8dcc0` or lantern cream `#fff5e0`).
- Dark-mode-only design (tea house should default to warm light with optional ink wash dark).
- Overly playful or casual typography (tea house is refined and contemplative).
- Missing tea leaf accent elements (these connect to the actual product).

## Accessibility Considerations

- Warm sand backgrounds with ink black text provide strong contrast (verify WCAG AA — `#1a1a1a` on `#d4c8a0` passes).
- Celadon buttons on light backgrounds meet contrast requirements (`#6a9880` text on white passes WCAG AA).
- Focus states: `focus:ring-2 focus:ring-[#8ab8a0]/30` (celadon ring visible on all surfaces).
- Tea leaf and bamboo SVGs must be `aria-hidden="true"` when decorative.
- Lantern glow and sand rake animations must respect `prefers-reduced-motion: reduce`.
- Raked sand patterns must not be the sole indicator of interactive zones.
- Refused serif typography at 16px+ with 1.8 line-height maintains readability.
- Touch targets on gongfu grid cups should be minimum 44x44px.
- The meditative slow transitions (500ms) must have a way to be bypassed for keyboard users.
- Color is never the sole carrier of meaning — tea type indicators include text labels alongside color dots.
- High-contrast ink wash cards (`#1a1a1a` on `#fff5e0`) provide an alternative reading mode.
- Screen readers should encounter meaningful heading hierarchy: ceremony name, step, detail.
