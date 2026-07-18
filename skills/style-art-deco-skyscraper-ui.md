---
name: art-deco-skyscraper-ui
description: Build art deco skyscraper UI components (1920s setback tower, geometric crown, chrome spire, marble lobby, elevator doors, observation deck, city skyline) with vertical setback proportions, geometric ornamentation, and the soaring ambition of Manhattan's golden age of towers. Trigger this skill when the user asks for art deco design, 1920s tower aesthetic, Chrysler Building UI, Empire State style, setback tower interface, Manhattan skyline, jazz age, Roaring Twenties, geometric deco, or vintage skyscraper interfaces.
---

# Art Deco Skyscraper UI

Use this skill to design and implement glamorous, soaring interfaces inspired by Manhattan's art deco skyscrapers of the 1920s-1930s: stepped setback tower silhouettes, geometric crown ornaments from SVG zigzag and chevron patterns, chrome spire accents, marble lobby surfaces with gray veining, elevator door split animations, observation deck panoramic viewpoints, sunburst crown decorations, and relentless vertical line emphasis. This is the golden age of towers — polished marble, gleaming chrome, and geometric ambition reaching for the sky.

## Non-Negotiable Foundations

- Art Deco Skyscraper UI draws from the 1920s-1930s Manhattan tower aesthetic: the Chrysler Building, the Empire State Building, 30 Rockefeller Plaza, and the Municipal Building.
- Materials are luxurious and polished: white Carrara marble with gray veining, brushed and polished chrome, gold leaf ornamentation, terrazzo floors, and dark lacquered wood.
- Colors are high-contrast and glamorous: marble white, chrome silver, gold ornament, deep navy, and terra cotta — like a tower lobby lit by chandeliers.
- Verticality is absolute: elements step back and narrow upward like a setback tower, with strong vertical lines, fluting, and pinstripes.
- The mood is ambitious, glamorous, and monumental — the interface should feel like stepping into the lobby of the Chrysler Building at the height of the Jazz Age.
- Geometric ornamentation is everywhere: chevrons, zigzags, sunbursts, fan shapes, and stepped geometric borders.
- The setback silhouette is the signature shape: a stepped outline that narrows toward the top, like a tower rising against the skyline.

## Core Material Recipes

### 1) Setback Tower Silhouette

The signature art deco shape: a stepped tower outline created with clip-path, narrowing upward in setbacks.

```css
.setback-tower {
  clip-path: polygon(
    0% 100%,
    0% 70%,
    10% 70%,
    10% 50%,
    20% 50%,
    20% 35%,
    30% 35%,
    30% 22%,
    40% 22%,
    40% 12%,
    48% 12%,
    48% 3%,
    50% 0%,
    52% 3%,
    52% 12%,
    60% 12%,
    60% 22%,
    70% 22%,
    70% 35%,
    80% 35%,
    80% 50%,
    90% 50%,
    90% 70%,
    100% 70%,
    100% 100%
  );
}
```

- Tailwind utility: `[clip-path:polygon(0%_100%,0%_70%,10%_70%,10%_50%,20%_50%,20%_35%,30%_35%,30%_22%,40%_22%,40%_12%,48%_12%,48%_3%,50%_0%,52%_3%,52%_12%,60%_12%,60%_22%,70%_22%,70%_35%,80%_35%,80%_50%,90%_50%,90%_70%,100%_70%,100%_100%)]`.
- Simplified 3-step variant: `[clip-path:polygon(0%_100%,0%_60%,25%_60%,25%_30%,40%_30%,40%_5%,50%_0%,60%_5%,60%_30%,75%_30%,75%_60%,100%_60%,100%_100%)]`.
- Use as background silhouette behind hero content or as a decorative panel shape.

### 2) Marble Lobby Surface

White Carrara marble with subtle gray veining — the lobby floor of a grand tower.

- `bg-[#f0e8e0] border border-[#d8d0c8] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.8)]`.
- Veining: SVG pattern of thin, slightly curved gray lines at `opacity-[0.08]` using `#b0a898` strokes.
- Polished sheen: `::after` pseudo-element with a linear gradient from `rgba(255,255,255,0.1)` to transparent at 45 degrees.
- Alt variant (dark marble): `bg-[#1a1a2a]` with `#2a2a3a` veining for nighttime lobby feel.

```html
<svg class="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none" viewBox="0 0 400 400">
  <path d="M50,0 Q80,100 60,200 Q40,300 90,400" fill="none" stroke="#b0a898" stroke-width="0.5"/>
  <path d="M200,0 Q230,80 210,180 Q190,280 240,400" fill="none" stroke="#b0a898" stroke-width="0.5"/>
  <path d="M350,0 Q320,120 340,240 Q360,360 310,400" fill="none" stroke="#b0a898" stroke-width="0.5"/>
</svg>
```

### 3) Geometric Crown Ornament

SVG zigzag and chevron pattern forming the decorative crown of a tower — the geometric glory at the top.

```html
<svg viewBox="0 0 400 60" class="w-full h-12">
  <defs>
    <linearGradient id="crownGold" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#c4a043"/>
      <stop offset="100%" stop-color="#a88a33"/>
    </linearGradient>
  </defs>
  <!-- Stepped zigzag crown -->
  <path fill="url(#crownGold)" d="
    M0,60 L0,40 L20,40 L20,25 L40,25 L40,15 L60,15 L60,8 L80,8 L80,3 L100,3
    L100,0 L120,3 L120,8 L140,8 L140,15 L160,15 L160,25 L180,25 L180,40 L200,40
    L200,30 L220,30 L220,20 L240,20 L240,10 L260,10 L260,3 L280,3
    L280,0 L300,3 L300,10 L320,10 L320,20 L340,20 L340,30 L360,30 L360,40
    L380,40 L380,50 L400,50 L400,60 Z
  " opacity="0.8"/>
  <!-- Chevron overlay -->
  <g stroke="#c4a043" stroke-width="1.5" fill="none" opacity="0.5">
    <path d="M0,60 L10,50 L20,60 M20,60 L30,50 L40,60 M40,60 L50,50 L60,60"/>
    <path d="M340,60 L350,50 L360,60 M360,60 L370,50 L380,60 M380,60 L390,50 L400,60"/>
  </g>
</svg>
```

### 4) Chrome Spire Accent

Polished chrome spire element — the gleaming needle at the tower's peak.

```html
<div class="relative flex justify-center">
  <svg viewBox="0 0 40 80" class="w-10 h-20">
    <defs>
      <linearGradient id="chromeSpire" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#909898"/>
        <stop offset="30%" stop-color="#e0e8e8"/>
        <stop offset="50%" stop-color="#f8f8f8"/>
        <stop offset="70%" stop-color="#e0e8e8"/>
        <stop offset="100%" stop-color="#909898"/>
      </linearGradient>
    </defs>
    <!-- Spire body -->
    <path d="M20,0 L26,25 L24,60 L16,60 L14,25 Z" fill="url(#chromeSpire)"/>
    <!-- Base collar -->
    <rect x="10" y="60" width="20" height="4" rx="1" fill="#c0c8c8"/>
    <!-- Highlight line -->
    <line x1="20" y1="2" x2="20" y2="58" stroke="white" stroke-width="0.5" opacity="0.4"/>
  </svg>
</div>
```

### 5) Sunburst Crown Decoration

Radiating sunburst pattern — the iconic art deco motif suggesting a rising sun behind the tower crown.

```html
<svg viewBox="0 0 300 150" class="w-full h-auto opacity-20">
  <defs>
    <linearGradient id="sunburstGrad" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#c4a043" stop-opacity="0"/>
      <stop offset="100%" stop-color="#c4a043" stop-opacity="1"/>
    </linearGradient>
  </defs>
  <g transform="translate(150,150)">
    <!-- Radiating beams -->
    <g stroke="url(#sunburstGrad)" stroke-width="1.5">
      <line x1="0" y1="0" x2="0" y2="-140" transform="rotate(-70)"/>
      <line x1="0" y1="0" x2="0" y2="-130" transform="rotate(-55)"/>
      <line x1="0" y1="0" x2="0" y2="-140" transform="rotate(-40)"/>
      <line x1="0" y1="0" x2="0" y2="-130" transform="rotate(-25)"/>
      <line x1="0" y1="0" x2="0" y2="-140" transform="rotate(-10)"/>
      <line x1="0" y1="0" x2="0" y2="-140" transform="rotate(10)"/>
      <line x1="0" y1="0" x2="0" y2="-130" transform="rotate(25)"/>
      <line x1="0" y1="0" x2="0" y2="-140" transform="rotate(40)"/>
      <line x1="0" y1="0" x2="0" y2="-130" transform="rotate(55)"/>
      <line x1="0" y1="0" x2="0" y2="-140" transform="rotate(70)"/>
    </g>
  </g>
</svg>
```

### 6) Elevator Door Panel

Split-open elevator door animation — the brass-framed doors of a grand tower elevator.

```html
<div class="relative w-48 h-64 overflow-hidden border-2 border-[#c4a043] bg-[#1a1a2a]">
  <!-- Door frame -->
  <div class="absolute inset-0 border-[3px] border-[#c4a043]/50 rounded-t-md"></div>
  <!-- Left door -->
  <div class="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#1a1a2a] to-[#2a2a3a] border-r border-[#c4a043]/30 [animation:doorLeft_4s_ease-in-out_infinite]">
    <div class="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_20px,rgba(196,160,67,0.1)_20px,rgba(196,160,67,0.1)_21px)]"></div>
    <div class="absolute top-1/2 right-2 w-2 h-8 -translate-y-1/2 bg-[#c4a043] rounded-full shadow-[0_0_8px_rgba(196,160,67,0.5)]"></div>
  </div>
  <!-- Right door -->
  <div class="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#1a1a2a] to-[#2a2a3a] border-l border-[#c4a043]/30 [animation:doorRight_4s_ease-in-out_infinite]">
    <div class="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_20px,rgba(196,160,67,0.1)_20px,rgba(196,160,67,0.1)_21px)]"></div>
    <div class="absolute top-1/2 left-2 w-2 h-8 -translate-y-1/2 bg-[#c4a043] rounded-full shadow-[0_0_8px_rgba(196,160,67,0.5)]"></div>
  </div>
</div>
```

```css
@keyframes doorLeft {
  0%, 70%, 100% { transform: translateX(0); }
  80%, 90% { transform: translateX(-95%); }
}
@keyframes doorRight {
  0%, 70%, 100% { transform: translateX(0); }
  80%, 90% { transform: translateX(95%); }
}
```

### 7) Observation Deck Panel

Content panel styled as an observation deck with a panoramic city skyline view.

- Container: `relative bg-gradient-to-b from-[#0a1a3a] via-[#1a2a4a] to-[#0a0a1a] p-8 border-b-4 border-[#c4a043]`.
- Railing: bottom border with vertical chrome bars: `bg-[repeating-linear-gradient(90deg,#c0c8c8_0px,#c0c8c8_2px,transparent_2px,transparent_16px)] h-3 opacity-40`.
- Skyline silhouette: SVG of building outlines along the bottom.
- City lights: tiny dots of warm yellow at `opacity-60` scattered across the dark cityscape.

### 8) Fluted Vertical Line Divider

Vertical column with fluting (parallel vertical grooves) — the art deco pinstripe.

```html
<div class="flex gap-px h-full">
  <div class="w-px bg-gradient-to-b from-transparent via-[#c4a043]/40 to-transparent"></div>
  <div class="w-px bg-gradient-to-b from-transparent via-[#c4a043]/20 to-transparent"></div>
  <div class="w-px bg-gradient-to-b from-transparent via-[#c4a043]/40 to-transparent"></div>
</div>
```

- Or as a horizontal divider: same pattern rotated — three parallel gold lines suggesting fluting or pinstripes.

### 9) Fan Motif Border

Art deco fan or shell motif as a repeating border element.

```html
<svg viewBox="0 0 60 30" class="w-12 h-6 opacity-30 text-[#c4a043]">
  <path fill="none" stroke="currentColor" stroke-width="1" d="
    M30,30 Q30,20 20,12 M30,30 Q30,18 15,8
    M30,30 Q30,20 40,12 M30,30 Q30,18 45,8
    M30,30 Q30,15 30,5
  "/>
</div>
```

- Repeat horizontally for a fan border: `<div class="flex gap-2">...</div>`.

### 10) Tower Lobby Layout

Full-page layout evoking a grand art deco tower lobby: marble floors, chrome columns, geometric ceiling.

- Floor: `bg-[#f0e8e0]` with marble veining SVG overlay.
- Walls: deep navy `bg-[#0a1a3a]` with gold geometric trim at top and bottom.
- Columns: repeating fluted chrome column dividers.
- Ceiling: geometric sunburst or chevron pattern as a decorative header.
- Ambient: subtle gold gradient from ceiling suggesting chandelier light: `bg-[radial-gradient(ellipse_at_top,rgba(196,160,67,0.1)_0%,transparent_50%)]`.

## Color Palette System

### Core Art Deco Palette

| Color | Hex | Role |
|---|---|---|
| Marble White | `#f0e8e0` | Primary surface, lobby marble |
| Marble Vein | `#d8d0c8` | Marble veins, subtle borders |
| Chrome Silver | `#c0c8c8` | Metal trim, spires, hardware |
| Chrome Bright | `#e0e8e8` | Chrome highlights, reflections |
| Gold Ornament | `#c4a043` | Primary accent, crowns, borders |
| Gold Dark | `#a88a33` | Gold shadow, depth |
| Gold Bright | `#d4b863` | Gold highlights |
| Deep Navy | `#0a1a3a` | Primary dark, night sky, depth |
| Navy Mid | `#1a2a4a` | Secondary dark, surfaces |
| Terra Cotta | `#c47040` | Warm accent, terracotta trim |
| Night City | `#0a0a1a` | Deepest dark, shadows |
| Lobby Warm | `#e8d8c0` | Warm ambient light surface |
| Ivory Cream | `#f8f0e8` | Lightest surface, paper |

### Color Usage Rules

- Marble white dominates light surfaces — the lobby is bright and polished.
- Gold is the primary accent color — crowns, borders, trim, and ornamental details.
- Chrome silver handles all metallic elements — spires, hardware, column highlights.
- Deep navy provides dramatic contrast — used for hero backgrounds, card backs, and night scenes.
- Terra cotta appears sparingly as a warm secondary accent — like terracotta tile inlays.
- Night city is reserved for the deepest backgrounds — the city seen from the observation deck at night.
- Gold and chrome should never compete — gold is ornamental warmth, chrome is reflective cool.
- High contrast is mandatory — art deco is bold and dramatic, not muted or pastel.

## Typography Recommendations

Art Deco Skyscraper typography is geometric, vertical, and glamorous:

- **Display headings:** Poiret One (geometric art deco display), Josefin Sans (geometric sans with 1920s elegance), or Playfair Display (high-contrast serif with glamour).
- **Body:** Raleway (geometric sans with art deco roots), Lora (readable serif with warmth), or Source Serif Pro (clean, authoritative).
- **Labels/Small:** `font-sans font-light uppercase tracking-[0.35em] text-xs text-[#c4a043]` (elevator button signage style).
- **Numbers:** Use tabular figures for any numeric data — the art deco aesthetic values alignment and precision.
- Sans-serif is acceptable and even preferred for art deco (unlike gothic styles) — the geometric sans-serif is a hallmark of the era.
- Heavy weight contrast between headings and body creates the dramatic vertical emphasis.

## Component Architecture Pattern

1. Marble white or deep navy background.
2. Setback tower silhouette shapes for hero sections.
3. Geometric crown ornament SVGs as section headers.
4. Marble lobby panels with veining texture for content cards.
5. Chrome spire accents at peak points.
6. Sunburst decorations behind crowns and headings.
7. Elevator door animations for reveal transitions.
8. Fluted vertical line dividers between sections.
9. Fan motif borders along horizontal edges.
10. Observation deck panels for panoramic or summary content.

## Interaction Rules

- Default state: polished, vertical, geometric, glamorous.
- Hover: gold accent intensifies, chrome gleams brighter.
  - `hover:shadow-[0_0_20px_rgba(196,160,67,0.3)] hover:border-[#d4b863] transition-all duration-300`.
- Active: `active:translate-y-0.5 active:shadow-[0_0_10px_rgba(196,160,67,0.4)]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#c4a043] focus:ring-offset-2 focus:ring-offset-[#f0e8e0]` (gold ring on marble).
- Transitions: `transition-all duration-300` (crisp, precise, like elevator machinery).
- Door animation: `transition-all duration-700 ease-in-out` (elevator doors open smoothly).
- Scroll reveal: elements slide up from below with a slight stagger, like floors of a tower rising into view.
- Gold shimmer: subtle linear gradient animation on ornamental borders — `@keyframes goldShimmer { from { background-position: -200% 0; } to { background-position: 200% 0; } }`.

## Reusable Tailwind Tokens

- Marble panel: `bg-[#f0e8e0] border border-[#d8d0c8] shadow-[0_8px_32px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.8)]`
- Dark panel: `bg-[#0a1a3a] border border-[#1a2a4a] shadow-[0_8px_32px_rgba(0,0,0,0.3)]`
- Setback tower: `[clip-path:polygon(0%_100%,0%_60%,25%_60%,25%_30%,40%_30%,40%_5%,50%_0%,60%_5%,60%_30%,75%_30%,75%_60%,100%_60%,100%_100%)]`
- Art deco button: `bg-gradient-to-b from-[#c4a043] to-[#a88a33] text-[#0a1a3a] font-sans font-bold px-8 py-3 uppercase tracking-[0.15em] border border-[#d4b863] shadow-[0_4px_12px_rgba(196,160,67,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:from-[#d4b863] hover:to-[#c4a043] transition-all duration-300`
- Dark button: `bg-gradient-to-b from-[#1a2a4a] to-[#0a1a3a] text-[#c4a043] font-sans font-bold px-8 py-3 uppercase tracking-[0.15em] border border-[#c4a043]/30 shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:border-[#c4a043] transition-all duration-300`
- Gold text: `text-[#c4a043]`
- Marble text: `text-[#f0e8e0]`
- Dark text: `text-[#0a1a3a]`
- Chrome divider: `h-px bg-gradient-to-r from-transparent via-[#c0c8c8] to-transparent`
- Gold divider: `h-px bg-gradient-to-r from-transparent via-[#c4a043] to-transparent`
- Triple pinstripe: `bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_4px,rgba(196,160,67,0.3)_4px,rgba(196,160,67,0.3)_5px)] h-0.5`
- Sunburst glow: `bg-[radial-gradient(ellipse_at_top,rgba(196,160,67,0.1)_0%,transparent_50%)]`
- Marble surface: `bg-[#f0e8e0] bg-[url("data:image/svg+xml,...")]` (inline marble vein SVG)
- Chrome highlight: `shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_1px_3px_rgba(0,0,0,0.2)]`

## Quality Checklist (must pass)

- At least one setback tower silhouette or stepped shape (clip-path).
- Geometric crown ornament SVG present (chevrons, zigzags, or sunburst).
- Marble surface or chrome metallic element on primary surfaces.
- Gold accent color (`#c4a043`) present in borders, trim, or ornamentation.
- Deep navy (`#0a1a3a`) used for dark backgrounds or dramatic contrast.
- Vertical line emphasis throughout (fluting, pinstripes, tall aspect ratios).
- Geometric pattern borders (fan motifs, chevrons, or stepped lines).
- Typography is geometric (Poiret One, Josefin Sans, or Playfair Display).
- High contrast between light and dark elements (bold, dramatic, not muted).
- The aesthetic reads as a 1920s Manhattan art deco skyscraper.
- Chrome or metallic element provides cool counterpoint to warm gold.
- Transitions are crisp and precise (not slow or organic).

## Anti-Patterns

- Rounded, organic shapes (art deco is angular and geometric).
- Muted, pastel color palettes (art deco is bold and high-contrast).
- Casual or playful typography (art deco is geometric and authoritative).
- Missing geometric ornamentation (chevrons, zigzags, sunbursts are essential).
- Asymmetrical or organic layouts (art deco favors symmetry and geometric order).
- Flat, untextured surfaces (marble veining, chrome reflections, and gold sheen are mandatory).
- Low contrast between elements (art deco is dramatic and bold).
- Sans-serif-only if it lacks geometric quality (use geometric sans like Poiret One or Josefin).
- Warm, cozy, or cottage-like aesthetics (art deco is metropolitan, vertical, and ambitious).
- Missing the vertical upward momentum (towers reach for the sky — horizontal layouts break the metaphor).
- Modern minimalist design (art deco is ornamental and geometric, not minimal).
- Missing the setback silhouette or tower metaphor (this defines the art deco skyscraper aesthetic).

## Accessibility Considerations

- Marble white with deep navy text (`#0a1a3a` on `#f0e8e0`) provides excellent contrast (WCAG AAA).
- Gold on deep navy (`#c4a043` on `#0a1a3a`) provides strong contrast (WCAG AA).
- Dark navy with marble white text (`#f0e8e0` on `#0a1a3a`) provides excellent contrast (WCAG AAA).
- Focus states: `focus:ring-2 focus:ring-[#c4a043] focus:ring-offset-2` (gold ring visible on both marble and dark backgrounds).
- Decorative SVGs (sunbursts, crowns, fan motifs, skyline silhouettes) must be `aria-hidden="true"`.
- Elevator door animations must respect `prefers-reduced-motion`: show static split view instead of animation.
- Gold shimmer animations must pause on `prefers-reduced-motion`.
- Setback clip-paths must not crop interactive elements — content must sit well within the clipped area.
- Touch targets must remain adequate despite decorative borders and geometric overlays.
- Geometric patterns should not create visual vibration (avoid high-frequency repeating lines at 1px intervals for extended areas).
- Fluted pinstripe patterns must not cause screen reader artifacts — keep them purely visual with `pointer-events-none` and `aria-hidden`.
- Observation deck panoramic panels must remain scrollable and navigable on mobile viewports.
