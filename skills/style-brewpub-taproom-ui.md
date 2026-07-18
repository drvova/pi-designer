---
name: brewpub-taproom-ui
description: Build brewpub taproom UI components (copper brewing tanks, chalkboard tap list, reclaimed wood bar, Edison bulb strings, growler fills, pretzel baskets) with industrial brewing equipment, rustic wood surfaces, and the craft beer community atmosphere. Trigger this skill when the user asks for brewpub design, taproom UI, craft beer aesthetic, brewery interface, chalkboard tap list, copper tank components, Edison bulb lighting, growler fill stations, pretzel basket layout, or industrial brewpub interfaces.
---

# Brewpub Taproom UI

Use this skill to design and implement rustic-industrial interfaces inspired by craft brewpubs and taprooms: copper tank gradients, chalkboard surfaces, reclaimed wood textures, Edison bulb glow, growler glass accents, and the warm, communal atmosphere of a neighborhood brewery.

## Non-Negotiable Foundations

- Brewpub taproom UI evokes the craft beer experience: the gleam of copper brewing equipment, the chalk-scrawled daily tap list, the weathered grain of a reclaimed wood bar, the warm filament glow of Edison bulbs.
- Colors are warm metallics and dark earthy tones: copper, chalkboard dark, reclaimed wood brown, Edison amber, hop green, beer gold, chalk white, and steel gray.
- Textures reference brewery materials: brushed copper, chalk dust on slate, weathered wood grain, glass growlers, hop vine greens, and riveted steel.
- Typography blends chalk-text display (for the tap list board) with industrial condensed (for brewery labels) and sturdy sans-serif (for body text).
- The mood is communal, craft-focused, and unpretentious — everything feels built to last and meant to be shared over a pint.
- Hop vine SVGs and Edison bulb strings provide the signature decorative motifs.
- The chalkboard tap list is the centerpiece component — it must feel authentically hand-chalked.

## Core Material Recipes

### 1) Copper Brewing Tank Surface

Metallic cylindrical gradient mimicking polished copper.

- `bg-gradient-to-r from-[#a06828] via-[#b87333] to-[#a06828]` (copper cylinder highlight).
- Rivet accents: small circles `w-2 h-2 rounded-full bg-[#8a5a20] border border-[#6a4a18] shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)]` placed along edges.
- Brushed metal: linear gradient with subtle banding `bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_3px,rgba(255,255,255,0.03)_3px,rgba(255,255,255,0.03)_4px)]`.

### 2) Chalkboard Tap List Surface

Dark slate surface with chalk-text typography.

- `bg-gradient-to-br from-[#1a2a1a] via-[#1e2e1e] to-[#142014] rounded-xl`.
- Chalk dust texture: subtle noise at `opacity-[0.06]` or CSS grain: `bg-[repeating-conic-gradient(rgba(255,255,255,0.02)_0%_25%,transparent_0%_50%)] bg-[length:4px_4px]`.
- Chalk smudge: soft gaussian-blurred shapes `w-24 h-8 bg-white/[0.03] rounded-full blur-md rotate-[-5deg]`.

### 3) Reclaimed Wood Bar Surface

Weathered multi-tone wood with visible grain and character.

- `bg-gradient-to-r from-[#6a5030] via-[#7a6040] to-[#6a5030]`.
- Wood grain layers: `bg-[repeating-linear-gradient(180deg,transparent_0px,transparent_12px,rgba(0,0,0,0.06)_12px,rgba(0,0,0,0.06)_13px)]`.
- Knot accent: radial gradient `bg-[radial-gradient(circle_at_70%_50%,rgba(80,50,20,0.3),transparent_40%)]`.
- Weathering: overlay linear gradient `bg-gradient-to-b from-white/[0.04] to-black/[0.08]`.

### 4) Edison Bulb String Lights

Warm filament glow from hanging pendant bulbs.

```html
<div class="flex items-start justify-around py-4">
  <div class="flex flex-col items-center">
    <div class="w-px h-8 bg-[#4a4a40]"></div>
    <div class="w-6 h-8 rounded-b-full bg-[#ffcc66]/80 shadow-[0_4px_16px_rgba(255,204,102,0.4),0_0_30px_rgba(255,180,60,0.15)] relative">
      <div class="absolute inset-x-0 top-0 h-1 bg-[#ffcc66] rounded-t-full opacity-60"></div>
    </div>
  </div>
  <!-- More bulbs with slight height variation -->
</div>
```

### 5) Chalk-Text Tap Line Item

Individual tap handle entry on the chalkboard.

- `border-b border-white/[0.06] py-3 flex items-baseline gap-3`.
- Tap number: `text-[#ffcc66] font-mono text-lg font-bold opacity-80`.
- Beer name: `text-[#e8e8e0] font-serif text-lg tracking-wide`.
- Style tag: `text-[#5a8a3a] text-xs font-mono uppercase tracking-widest`.
- ABV: `text-[#e8e8e0]/60 text-sm font-mono ml-auto`.
- Price: `text-[#d4a040] text-sm font-mono`.

### 6) Growler Glass Accent

Translucent amber glass growler shape.

- `w-16 h-24 rounded-b-2xl bg-gradient-to-b from-[#d4a040]/30 via-[#b87333]/20 to-[#d4a040]/10 border border-[#b87333]/30 shadow-[inset_0_0_12px_rgba(212,160,64,0.15)]`.
- Glass highlight: `absolute top-2 left-2 w-3 h-8 bg-white/[0.15] rounded-full rotate-[-8deg] blur-[1px]`.
- Cap: `absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-3 rounded-sm bg-[#6a5030] border border-[#5a4020]`.

### 7) Hop Vine SVG Accent

Decorative hop vine with cones along a curved path.

```html
<svg viewBox="0 0 200 40" class="w-full h-10 text-[#5a8a3a]" opacity="0.25">
  <path d="M0,20 Q50,5 100,20 Q150,35 200,20" fill="none" stroke="currentColor" stroke-width="1"/>
  <g fill="currentColor" opacity="0.6">
    <ellipse cx="40" cy="14" rx="5" ry="7" transform="rotate(-15,40,14)"/>
    <ellipse cx="50" cy="12" rx="5" ry="7" transform="rotate(-25,50,12)"/>
    <ellipse cx="45" cy="10" rx="4" ry="6" transform="rotate(-20,45,10)"/>
  </g>
  <g fill="currentColor" opacity="0.6">
    <ellipse cx="140" cy="26" rx="5" ry="7" transform="rotate(15,140,26)"/>
    <ellipse cx="150" cy="28" rx="5" ry="7" transform="rotate(25,150,28)"/>
    <ellipse cx="145" cy="30" rx="4" ry="6" transform="rotate(20,145,30)"/>
  </g>
</svg>
```

### 8) Beer Foam Accent

Carbonation foam head on a poured beer surface.

```html
<div class="relative h-3 overflow-hidden">
  <svg viewBox="0 0 200 12" class="w-full h-full text-[#f5f0e0]" preserveAspectRatio="none">
    <path d="M0,12 Q10,0 20,8 Q30,0 40,6 Q50,0 60,8 Q70,2 80,6 Q90,0 100,8 Q110,0 120,6 Q130,2 140,8 Q150,0 160,6 Q170,2 180,8 Q190,0 200,12Z" fill="currentColor"/>
  </svg>
</div>
```

### 9) Steel Pipe Border

Industrial pipe-style border element.

- `border-2 border-[#6a7a7a] rounded-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3)]`.
- Joint accent: `absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-2 bg-[#6a7a7a] rounded-sm border border-[#5a6a6a]`.

### 10) Pretzel Basket Decoration

Pretzel basket icon for food menu accents.

```html
<svg viewBox="0 0 40 30" class="w-10 h-8 text-[#d4a040]" opacity="0.6">
  <path d="M8,25 Q8,5 20,5 Q32,5 32,25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path d="M12,25 Q12,10 20,10 Q28,10 28,25" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="16" y1="25" x2="24" y2="25" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <circle cx="15" cy="18" r="1" fill="currentColor" opacity="0.4"/>
  <circle cx="20" cy="14" r="1" fill="currentColor" opacity="0.4"/>
  <circle cx="25" cy="18" r="1" fill="currentColor" opacity="0.4"/>
</svg>
```

## Color Palette System

### Core Brewpub Palette

| Color | Hex | Role |
|---|---|---|
| Chalkboard | `#1a2a1a` | Deepest background, tap list surface |
| Chalkboard Mid | `#1e2e1e` | Secondary dark, board variant |
| Steel | `#6a7a7a` | Industrial metal, borders, pipes |
| Reclaimed Wood | `#7a6040` | Wood surfaces, bar top, warm accents |
| Hop Green | `#5a8a3a` | Hop vine accents, style tags, fresh notes |
| Beer Amber | `#d4a040` | Beer color accents, price tags, highlights |
| Copper | `#b87333` | Copper tank surfaces, metallic accents |
| Chalk White | `#e8e8e0` | Chalk text, light accents on dark |
| Edison Warm | `#ffcc66` | Bulb glow, tap numbers, warm highlights |

### Extended Palette

| Color | Hex | Role |
|---|---|---|
| Dark Copper | `#a06828` | Copper shadow, depth |
| Steel Dark | `#5a6a6a` | Pipe joints, deep metal |
| Wood Dark | `#6a5030` | Reclaimed wood shadow |
| Hop Dark | `#3a6a20` | Hop vine shadow, pressed state |
| Foam White | `#f5f0e0` | Beer foam, light highlights |
| Stout Black | `#0e0e0a` | IPA/stout label backgrounds |
| Pilsner Gold | `#e8c060` | Light beer accents |
| Rust | `#8a4a18` | Aged copper, rusted accents |

Rules: Warm metallics and dark earthy tones dominate. The palette should feel like walking into a well-worn neighborhood taproom — warm copper, chalk-dark boards, weathered wood, and the amber glow of a properly poured pint. No pastels, no neons, no cold corporate blues. The green is hop green, not mint or lime.

## Typography Recommendations

- **Chalkboard display:** Permanent Marker, Chalkduster, or HandDrawn (chalk-scrawled tap list feel).
- **Industrial condensed:** Oswald, Barlow Condensed, or Teko (brewery labels, ABV, pricing).
- **Body:** Inter, Source Sans Pro, or IBM Plex Sans (sturdy, readable, no-nonsense).
- **Labels:** `font-mono text-xs uppercase tracking-widest` (beer style tags, IBU counts).
- **Tap number:** `font-mono text-xl font-bold text-[#ffcc66] opacity-80` (Edison-lit tap handle).
- Typography should feel like a hand-chalked tap list on a dark board, with industrial clarity for the supporting details.

### Spacing Philosophy

- Tap list items: generous vertical padding `py-4` with subtle bottom borders `border-b border-white/[0.06]`.
- Card layouts: comfortable breathing room `p-6` to `p-8`.
- Section headers: `mb-6` to `mb-8` with chalk-text treatment.
- Tight monospaced grids for price/ABV columns.

## Component Architecture Pattern

### Chalkboard Tap List

```html
<div class="bg-gradient-to-br from-[#1a2a1a] via-[#1e2e1e] to-[#142014] rounded-xl p-6 md:p-8 border border-[#2a3a2a] shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden">
  <!-- Chalk dust texture overlay -->
  <div class="absolute inset-0 bg-[repeating-conic-gradient(rgba(255,255,255,0.02)_0%_25%,transparent_0%_50%)] bg-[length:4px_4px] pointer-events-none"></div>
  <!-- Header -->
  <div class="relative flex items-baseline justify-between mb-6">
    <h2 class="text-[#e8e8e0] font-['Permanent_Marker'] text-2xl tracking-wide">On Tap</h2>
    <span class="text-[#6a7a7a] text-xs font-mono uppercase tracking-widest">12 Lines</span>
  </div>
  <!-- Hop vine divider -->
  <div class="relative mb-4">
    <!-- Hop vine SVG -->
  </div>
  <!-- Tap entries -->
  <div class="relative space-y-1">
    <div class="flex items-baseline gap-3 py-3 border-b border-white/[0.06]">
      <span class="text-[#ffcc66] font-mono text-lg font-bold opacity-80 w-6">01</span>
      <div class="flex-1">
        <span class="text-[#e8e8e0] font-serif text-lg tracking-wide">Hop Forward IPA</span>
        <p class="text-[#5a8a3a] text-xs font-mono uppercase tracking-widest mt-0.5">American IPA</p>
      </div>
      <div class="text-right">
        <span class="text-[#e8e8e0]/60 text-sm font-mono">7.2%</span>
        <p class="text-[#d4a040] text-sm font-mono mt-0.5">$7</p>
      </div>
    </div>
    <!-- More tap entries -->
  </div>
  <!-- Beer foam footer accent -->
  <div class="relative mt-4 h-3 overflow-hidden">
    <!-- Foam SVG -->
  </div>
</div>
```

### Copper Tank Feature Card

```html
<div class="relative rounded-2xl overflow-hidden bg-[#0e0e0a]">
  <!-- Copper gradient top -->
  <div class="h-48 bg-gradient-to-r from-[#a06828] via-[#b87333] to-[#a06828] relative">
    <!-- Brushed metal texture -->
    <div class="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_3px,rgba(255,255,255,0.03)_3px,rgba(255,255,255,0.03)_4px)]"></div>
    <!-- Rivet line -->
    <div class="absolute bottom-4 left-4 right-4 flex justify-between">
      <div class="w-2 h-2 rounded-full bg-[#8a5a20] border border-[#6a4a18]"></div>
      <div class="w-2 h-2 rounded-full bg-[#8a5a20] border border-[#6a4a18]"></div>
      <div class="w-2 h-2 rounded-full bg-[#8a5a20] border border-[#6a4a18]"></div>
    </div>
  </div>
  <!-- Content -->
  <div class="p-6">
    <h3 class="text-[#e8e8e0] font-serif text-xl mb-2">Brewing Since 2018</h3>
    <p class="text-[#6a7a7a] text-sm leading-relaxed">10-barrel system, 8 rotating handles, zero shortcuts.</p>
  </div>
</div>
```

### Reclaimed Wood Menu Card

```html
<div class="bg-gradient-to-r from-[#6a5030] via-[#7a6040] to-[#6a5030] rounded-xl p-6 relative overflow-hidden border border-[#5a4020]">
  <!-- Wood grain overlay -->
  <div class="absolute inset-0 bg-[repeating-linear-gradient(180deg,transparent_0px,transparent_12px,rgba(0,0,0,0.06)_12px,rgba(0,0,0,0.06)_13px)] pointer-events-none"></div>
  <!-- Knot accent -->
  <div class="absolute top-8 right-12 w-16 h-16 bg-[radial-gradient(circle,rgba(80,50,20,0.3),transparent_60%)] pointer-events-none"></div>
  <!-- Content -->
  <div class="relative">
    <h3 class="font-['Permanent_Marker'] text-[#e8e8e0] text-xl mb-4">Pub Grub</h3>
    <div class="space-y-3">
      <div class="flex justify-between items-baseline">
        <span class="text-[#e8e8e0] font-serif">Pretzel Basket</span>
        <span class="text-[#d4a040] font-mono text-sm">$8</span>
      </div>
      <!-- More items -->
    </div>
  </div>
</div>
```

### Edison Bulb String Header

```html
<div class="relative py-6 bg-[#0e0e0a] overflow-hidden">
  <!-- Wire -->
  <div class="absolute top-2 left-0 right-0 h-px bg-[#4a4a40]"></div>
  <!-- Bulbs -->
  <div class="flex justify-around relative">
    <div class="flex flex-col items-center" style="animation: bulb-flicker 3s ease-in-out infinite;">
      <div class="w-px h-6 bg-[#4a4a40]"></div>
      <div class="w-5 h-7 rounded-b-full bg-[#ffcc66]/80 shadow-[0_4px_16px_rgba(255,204,102,0.4),0_0_24px_rgba(255,180,60,0.15)]"></div>
    </div>
    <!-- 6-8 more bulbs with slight height/delay variation -->
  </div>
</div>
```

### Growler Fill Station Card

```html
<div class="flex items-center gap-4 p-4 bg-[#1a2a1a]/60 rounded-xl border border-[#2a3a2a]">
  <!-- Growler icon -->
  <div class="relative flex-shrink-0">
    <div class="w-14 h-20 rounded-b-2xl bg-gradient-to-b from-[#d4a040]/30 via-[#b87333]/20 to-[#d4a040]/10 border border-[#b87333]/30">
      <div class="absolute top-3 left-2 w-2.5 h-6 bg-white/[0.12] rounded-full rotate-[-8deg] blur-[1px]"></div>
    </div>
    <div class="absolute -top-1.5 left-1/2 -translate-x-1/2 w-7 h-2.5 rounded-sm bg-[#6a5030] border border-[#5a4020]"></div>
  </div>
  <div class="flex-1">
    <h4 class="text-[#e8e8e0] font-serif text-base mb-0.5">Growler Fill</h4>
    <p class="text-[#6a7a7a] text-xs font-mono uppercase tracking-widest">64oz / any tap</p>
  </div>
  <span class="text-[#d4a040] font-mono text-sm">$12 refills</span>
</div>
```

## Interaction Rules

- Default: warm, communal, craft-focused.
- Hover: surfaces warm and brighten, like stepping closer to the tap:
  - `hover:shadow-[0_4px_16px_rgba(184,115,51,0.15)] hover:border-[#b87333]/30 transition-all duration-300`.
- Active: `active:translate-y-0.5 active:shadow-none` (solid press, like pulling a tap handle).
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#d4a040]/40` (amber ring, visible on dark surfaces).
- Transitions: `transition-all duration-300 ease-in-out` (brisk but not rushed — like a good pour).
- Edison bulb flicker: subtle opacity oscillation on hover, `animation: bulb-flicker 3s ease-in-out infinite`.
- Chalk text hover: subtle chalk-dust effect, slight brightness increase as if illuminating with a flashlight.

### Animation: Edison Bulb Flicker

```css
@keyframes bulb-flicker {
  0%, 100% { opacity: 0.8; }
  5% { opacity: 0.6; }
  10% { opacity: 0.85; }
  50% { opacity: 1; }
  55% { opacity: 0.7; }
  60% { opacity: 0.95; }
}
```

### Animation: Tap Handle Pull

```css
@keyframes tap-pull {
  0% { transform: rotate(0deg); transform-origin: bottom center; }
  40% { transform: rotate(-15deg); }
  100% { transform: rotate(0deg); }
}
```

### Animation: Carbonation Rise

```css
@keyframes carbonation {
  0% { transform: translateY(0) scale(1); opacity: 0.4; }
  50% { opacity: 0.6; }
  100% { transform: translateY(-60px) scale(0.5); opacity: 0; }
}
```

## Reusable Tailwind Tokens

- Chalkboard surface: `bg-gradient-to-br from-[#1a2a1a] via-[#1e2e1e] to-[#142014] rounded-xl border border-[#2a3a2a]`.
- Copper gradient: `bg-gradient-to-r from-[#a06828] via-[#b87333] to-[#a06828]`.
- Reclaimed wood: `bg-gradient-to-r from-[#6a5030] via-[#7a6040] to-[#6a5030] rounded-xl`.
- Edison glow: `shadow-[0_4px_16px_rgba(255,204,102,0.4),0_0_24px_rgba(255,180,60,0.15)]`.
- Chalk text: `text-[#e8e8e0] font-['Permanent_Marker']`.
- Steel pipe: `border-2 border-[#6a7a7a] rounded-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]`.
- Beer amber accent: `text-[#d4a040] font-mono`.
- Hop green tag: `text-[#5a8a3a] text-xs font-mono uppercase tracking-widest`.
- Tap number: `text-[#ffcc66] font-mono text-lg font-bold opacity-80`.
- Growler glass: `rounded-b-2xl bg-gradient-to-b from-[#d4a040]/30 via-[#b87333]/20 to-[#d4a040]/10 border border-[#b87333]/30`.
- Foam accent: SVG `text-[#f5f0e0]` with wavy path.
- Wood grain: `bg-[repeating-linear-gradient(180deg,transparent_0px,transparent_12px,rgba(0,0,0,0.06)_12px,rgba(0,0,0,0.06)_13px)]`.
- Chalk dust: `bg-[repeating-conic-gradient(rgba(255,255,255,0.02)_0%_25%,transparent_0%_50%)] bg-[length:4px_4px]`.
- Rivet: `w-2 h-2 rounded-full bg-[#8a5a20] border border-[#6a4a18] shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)]`.
- Pretzel basket: SVG `text-[#d4a040]` with twisted path.
- Dark content card: `bg-[#0e0e0a] rounded-2xl`.

## Quality Checklist

- Color palette is warm metallics and dark earthy tones (no pastels or neons).
- At least one chalkboard surface card with authentic chalk-text typography.
- Copper brewing tank gradient or metallic accent present.
- Reclaimed wood texture used for at least one surface (bar top, menu card).
- Edison bulb string lights used as decorative header or ambient element.
- Hop vine SVG accent present as divider or decoration.
- Beer foam accent SVG present (pouring, tap list footer).
- Growler glass icon used where appropriate.
- Tap list entries have number, name, style, ABV, and price.
- Steel pipe or industrial metal accents for borders and frames.
- Typography uses chalk-text for display, condensed industrial for labels, sturdy sans for body.
- Transitions are brisk (300ms) — craft-focused but not sluggish.
- The overall aesthetic reads as a welcoming neighborhood brewpub or taproom.
- Dark chalkboard backgrounds provide strong contrast for chalk-white text.

## Anti-Patterns

- Pastel or soft color palettes (brewpub is dark boards, warm copper, weathered wood).
- Missing chalkboard surfaces (this is the signature taproom element).
- Bright saturated primary colors (brewpub palette is muted metallics and earth tones).
- Missing copper metallic gradients (brewing equipment is the visual anchor).
- Clean modern glass-morphism (brewpub is rustic and industrial, not sleek and transparent).
- Missing Edison bulb lighting (signature warm glow source).
- Sharp angular shapes without industrial justification (brewpub is organic wood + geometric steel).
- Fast whimsical animations (motion should feel sturdy, mechanical, like a tap handle).
- Missing hop vine or pretzel decorations (these add craft beer authenticity).
- Pure black backgrounds without texture (use chalkboard `#1a2a1a` or stout black `#0e0e0a`).
- Corporate sterile design (brewpub is communal and unpretentious).
- Missing wood grain or burlap textures (these add material authenticity).
- Script or handwritten fonts for body text (chalk-text is for display only, body needs legibility).
- Oversaturated amber/gold everywhere (use Edison warm sparingly for highlights, not backgrounds).

## Accessibility Considerations

- Chalkboard dark backgrounds with chalk white text provide strong contrast (verify WCAG AA — `#e8e8e0` on `#1a2a1a` passes).
- Edison warm tap numbers on chalkboard meet contrast (`#ffcc66` on `#1a2a1a` passes WCAG AA).
- Focus states: `focus:ring-2 focus:ring-[#d4a040]/40` (amber ring visible on all dark surfaces).
- Hop vine and pretzel SVGs must be `aria-hidden="true"` when decorative.
- Edison flicker and carbonation animations must respect `prefers-reduced-motion: reduce`.
- Chalk-text fonts (Permanent Marker) are display-only — body text must use a legible sans-serif at 16px+.
- The dark chalkboard theme must have adequate contrast ratios verified at all text sizes.
- Color is never the sole carrier of beer style — style tags include text alongside hop-green color dots.
- Touch targets on tap list rows must be minimum 44x44px despite the thin visual border styling.
- High-contrast mode: chalk text on chalkboard should remain readable when forced-colors are active.
- Screen readers should encounter meaningful heading hierarchy: section name, tap number, beer name, style, price.
- Beer pricing and ABV must not rely solely on visual alignment — use semantic markup or aria-labels.
