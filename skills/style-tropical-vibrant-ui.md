---
name: tropical-vibrant-ui
description: Build tropical vibrant UI components (parrot plumage, hibiscus bloom, palm frond, mango flesh, ocean turquoise, tiki mask, surf board) with saturated tropical colors, bold floral accents, and the lively energy of tropical paradise. Trigger this skill when the user asks for tropical vibrant design, parrot plumage aesthetic, tiki UI, surf board layout, hibiscus bloom interface, island paradise UI, or high-saturation tropical interfaces.
---

# Tropical Vibrant UI

Use this skill to design and implement bold, high-energy interfaces inspired by tropical paradise: parrot plumage color bursts, hibiscus bloom decorations, palm frond silhouettes, tiki mask motifs, surf board shapes, mango flesh warmth, and ocean turquoise depth. This is tropical UI turned to maximum saturation — vivid, loud, and unapologetically alive.

## Non-Negotiable Foundations

- Tropical Vibrant UI celebrates maximum saturation: colors are pushed to their most vivid, unapologetic expression — parrot plumage, not pastel watercolor.
- The palette is anchored by eight defining hues: tropical red, hibiscus pink, palm green, mango, ocean turquoise, tiki brown, surf yellow, and paradise blue.
- Hibiscus flowers are the primary botanical motif: bold five-petal SVG blooms used as decorations, badges, and background accents.
- Palm frond silhouettes appear as large-scale background elements and corner decorations — always at reduced opacity to avoid visual competition.
- Tiki mask faces add personality to empty states, loading indicators, and brand moments — they are the mascot of this design language.
- Surf board shapes define the card geometry: elongated, tapered, with rounded ends that evoke the board outline.
- Textures reference ocean and sand: subtle wave patterns, water caustics, and fine sand grain noise at low opacity.
- The aesthetic is loud, celebratory, and tropical — it should feel like the peak of a summer festival, not a quiet beach morning.
- All color values must use the exact hex codes defined in the palette — no approximation, no substitution, no custom mixing.

## Core Material Recipes

### 1) Parrot Plumage Gradient

Multi-color feather gradient background — the signature of this design language.

- `bg-gradient-to-br from-[#e04040] via-[#f0a020] to-[#2a8a3a]` (red to mango to palm green diagonal).
- Alternate: `bg-gradient-to-r from-[#e04040] via-[#e060a0] to-[#40c0c0]` (red to hibiscus pink to turquoise horizontal sweep).
- Texture overlay: `bg-[repeating-linear-gradient(45deg,transparent_0px,transparent_4px,rgba(255,255,255,0.04)_4px,rgba(255,255,255,0.04)_5px)]` for feather barb texture.

### 2) Ocean Turquoise Surface

Cool tropical water surface for content areas and cards.

- `bg-gradient-to-b from-[#40c0c0] via-[#2080e0] to-[#40c0c0]` (turquoise to paradise blue back to turquoise).
- Water caustic overlay: `bg-[radial-gradient(ellipse_at_30%_40%,rgba(255,255,255,0.15)_0%,transparent_60%)]` for light play.
- Card variant: `bg-[#40c0c0]/90 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_32px_rgba(64,192,192,0.25)]`.

### 3) Surf Board Card

Elongated card with tapered ends evoking surf board shape.

- `bg-gradient-to-b from-[#f0d020] to-[#f0a020] rounded-[3rem] p-6 shadow-[0_6px_24px_rgba(240,160,32,0.3)]`.
- Center stripe: `absolute inset-x-4 top-2 bottom-2 bg-white/10 rounded-[2rem]` (stringer line down the board).
- Alt variant: `bg-[#e04040] rounded-[3rem] p-6 shadow-[0_6px_24px_rgba(224,64,64,0.3)]` for red surf board.

### 4) Hibiscus Bloom Button

Vibrant floral-inspired action button.

- `bg-gradient-to-r from-[#e060a0] to-[#e04040] text-white font-bold rounded-full px-8 py-3 shadow-[0_4px_16px_rgba(224,96,160,0.35)] hover:shadow-[0_6px_24px_rgba(224,96,160,0.5)] hover:scale-[1.03] transition-all`.
- Surf variant: `bg-gradient-to-r from-[#f0d020] to-[#f0a020] text-[#6a4a2a] font-bold rounded-full px-8 py-3 shadow-[0_4px_16px_rgba(240,208,32,0.35)]`.
- Ocean variant: `bg-gradient-to-r from-[#40c0c0] to-[#2080e0] text-white font-bold rounded-full px-8 py-3 shadow-[0_4px_16px_rgba(64,192,192,0.35)]`.

### 5) Tiki Mask Surface

Warm brown surface with tiki personality.

- `bg-gradient-to-b from-[#6a4a2a] to-[#4a3218] rounded-[1.5rem] p-6 text-[#f0d020] shadow-[0_4px_16px_rgba(106,74,42,0.3)]`.
- Tiki mask SVG positioned as watermark: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 text-[#f0d020] opacity-10`.

### 6) Mango Flesh Accent Strip

Warm orange accent for highlights and callout bars.

- `h-2 bg-gradient-to-r from-[#f0a020] via-[#f0d020] to-[#f0a020] rounded-full` (thin mango bar).
- Wide variant: `bg-gradient-to-b from-[#f0a020]/20 to-transparent p-4 rounded-2xl` (mango glow background).

### 7) Palm Frond Silhouette

Large-scale palm leaf decoration for backgrounds and corners.

```html
<svg viewBox="0 0 200 200" class="absolute -top-8 -right-8 w-64 h-64 opacity-[0.08] text-[#2a8a3a]" aria-hidden="true">
  <path d="M100 190 Q90 120 40 60 Q70 100 80 140 Q60 80 20 30 Q60 70 90 130 Q80 60 60 10 Q80 60 100 120 Q120 60 140 10 Q120 70 110 130 Q140 70 180 30 Q140 80 120 140 Q130 100 160 60 Q110 120 100 190Z" fill="currentColor"/>
</svg>
```

### 8) Hibiscus Five-Petal Flower SVG

Bold decorative hibiscus bloom for badges, corners, and watermarks.

```html
<svg viewBox="0 0 80 80" class="w-16 h-16" aria-hidden="true">
  <g fill="#e060a0" opacity="0.9">
    <ellipse cx="40" cy="14" rx="10" ry="16" transform="rotate(0 40 40)"/>
    <ellipse cx="40" cy="14" rx="10" ry="16" transform="rotate(72 40 40)"/>
    <ellipse cx="40" cy="14" rx="10" ry="16" transform="rotate(144 40 40)"/>
    <ellipse cx="40" cy="14" rx="10" ry="16" transform="rotate(216 40 40)"/>
    <ellipse cx="40" cy="14" rx="10" ry="16" transform="rotate(288 40 40)"/>
  </g>
  <circle cx="40" cy="40" r="6" fill="#f0d020"/>
  <circle cx="40" cy="40" r="3" fill="#e04040"/>
</svg>
```

### 9) Tiki Mask Face SVG

Stylized tiki mask for empty states, loading, and brand moments.

```html
<svg viewBox="0 0 80 100" class="w-16 h-20" aria-hidden="true">
  <path d="M40 5 Q65 5 70 30 Q75 55 65 75 Q55 95 40 98 Q25 95 15 75 Q5 55 10 30 Q15 5 40 5Z" fill="#6a4a2a"/>
  <ellipse cx="28" cy="35" rx="10" ry="8" fill="#f0d020"/>
  <ellipse cx="52" cy="35" rx="10" ry="8" fill="#f0d020"/>
  <ellipse cx="28" cy="35" rx="5" ry="6" fill="#1a0a00"/>
  <ellipse cx="52" cy="35" rx="5" ry="6" fill="#1a0a00"/>
  <path d="M30 60 Q40 70 50 60" stroke="#f0d020" stroke-width="3" fill="none" stroke-linecap="round"/>
  <line x1="20" y1="15" x2="35" y2="22" stroke="#f0d020" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="60" y1="15" x2="45" y2="22" stroke="#f0d020" stroke-width="2.5" stroke-linecap="round"/>
</svg>
```

### 10) Wave Pattern Divider

Ocean wave divider between content sections.

- `h-8 bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 20'%3E%3Cpath d='M0 10 Q15 0 30 10 Q45 20 60 10 Q75 0 90 10 Q105 20 120 10' fill='none' stroke='%2340c0c0' stroke-width='2'/%3E%3C/svg%3E")] bg-repeat-x bg-[length:120px_20px]` (repeating wave pattern).
- Solid variant: `h-1 bg-gradient-to-r from-transparent via-[#40c0c0] to-transparent rounded-full`.

## Color Palette System

### Core Tropical Vibrant Palette

| Color | Hex | Role |
|---|---|---|
| Tropical Red | `#e04040` | Primary bold accent, CTA buttons, alerts |
| Hibiscus Pink | `#e060a0` | Floral accent, decorative highlights |
| Palm Green | `#2a8a3a` | Nature accent, success states, foliage |
| Mango | `#f0a020` | Warm highlight, warnings, sunlit surfaces |
| Ocean Turquoise | `#40c0c0` | Cool accent, links, water surfaces |
| Tiki Brown | `#6a4a2a` | Grounding dark, text on light, tiki surfaces |
| Surf Yellow | `#f0d020` | Bright energy, badges, tiki gold accents |
| Paradise Blue | `#2080e0` | Sky accent, depth, cool gradients |

### Extended Palette

| Color | Hex | Role |
|---|---|---|
| Sand White | `#fff8f0` | Primary light background |
| Deep Tiki | `#3a2010` | Darkest text, tiki shadow |
| Coral Light | `#f08070` | Soft alert, warm secondary |
| Lagoon Teal | `#20a090` | Secondary cool accent |
| Frangipani | `#fff0d0` | Warm cream surface |
| Volcanic | `#2a1a0a` | Deep dark background |

### Color Usage Rules

- Primary backgrounds use Sand White (`#fff8f0`) or Ocean Turquoise (`#40c0c0`) — never pure white.
- Text on light backgrounds: Tiki Brown (`#6a4a2a`) or Deep Tiki (`#3a2010`) — never pure black.
- Maximum three accent colors per component — avoid rainbow overload.
- The parrot plumage gradient uses 3+ colors from the palette in diagonal or horizontal sweep.
- Tiki Brown paired with Surf Yellow creates the signature tiki mask combination.
- Ocean Turquoise and Paradise Blue are cool anchors — use them to balance the warm reds and oranges.
- Gradients always flow between adjacent palette colors — never across the full spectrum in one step.

## Typography Recommendations

- **Display:** Rubik One, Bungee, or Lilita One (bold, chunky, tropical-energy display faces).
- **Body:** Quicksand, Nunito, or Baloo 2 (rounded, friendly, high readability).
- **Accents:** Pacifico, Permanent Marker, or Luckiest Guy (playful surf-board and tiki-pole signage feel).
- **Tiki Labels:** Creepster or Butcherman for small tiki-themed labels and badge text (display only, never body).
- Typography should feel bold, energetic, and festive — never delicate or restrained.
- Line height for body text: `leading-relaxed` (1.625) for readability on bright backgrounds.
- Display text uses tight tracking: `tracking-tight` for impact headings.

## Component Architecture Pattern

### Card Structure

```
<div class="relative bg-gradient-to-b from-[#fff8f0] to-[#fff0d0] rounded-[2rem] p-6 overflow-hidden shadow-[0_6px_24px_rgba(106,74,42,0.12)]">
  <!-- Palm frond corner decoration -->
  <div class="absolute -top-6 -right-6 w-32 h-32 opacity-[0.06]"><!-- palm SVG --></div>
  <!-- Content -->
  <div class="relative z-10"><!-- content here --></div>
  <!-- Bottom accent bar -->
  <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e04040] via-[#f0a020] to-[#40c0c0]"></div>
</div>
```

### Button Hierarchy

1. Primary (Hibiscus): `bg-gradient-to-r from-[#e060a0] to-[#e04040]` — main CTA.
2. Secondary (Surf): `bg-gradient-to-r from-[#f0d020] to-[#f0a020]` — alternative actions.
3. Tertiary (Ocean): `bg-gradient-to-r from-[#40c0c0] to-[#2080e0]` — links and secondary.
4. Ghost: `bg-transparent text-[#e04040] border-2 border-[#e04040]` — minimal actions.

### Section Layout

- Content sections separated by wave dividers or mango accent strips.
- Full-width tropical sections alternate between light (Sand White) and cool (Ocean Turquoise tinted) backgrounds.
- Sidebar uses tiki brown surface when present.
- Footer uses deep tiki dark (`#2a1a0a`) with surf yellow text.

## Interaction Rules

- Default: vibrant, warm, alive.
- Hover: elements bloom outward with tropical glow.
  - `hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(224,64,64,0.35)] transition-all duration-300 ease-out`.
- Active: `active:scale-[0.97] active:shadow-[0_2px_8px_rgba(224,64,64,0.2)]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#f0d020]/50 focus:ring-offset-2 focus:ring-offset-[#fff8f0]`.
- Hover color shift on buttons: gradients shift hue slightly — hibiscus pink warms toward red, surf yellow deepens toward mango.
- Card hover: `hover:translate-y-[-2px] hover:shadow-[0_10px_40px_rgba(106,74,42,0.18)] transition-all duration-300`.
- Page transitions: `transition-all duration-500 ease-out` (organic tropical pacing).
- Scroll reveals: elements rise from below with fade-in, like palm fronds swaying into view.
- Loading state: tiki mask SVG rotates gently (`animate-spin` at 3s duration) with mango glow pulse.

## Reusable Tailwind Tokens

- Parrot gradient: `bg-gradient-to-br from-[#e04040] via-[#f0a020] to-[#2a8a3a]`.
- Ocean surface: `bg-gradient-to-b from-[#40c0c0] via-[#2080e0] to-[#40c0c0]`.
- Surf board card: `bg-gradient-to-b from-[#f0d020] to-[#f0a020] rounded-[3rem] shadow-[0_6px_24px_rgba(240,160,32,0.3)]`.
- Hibiscus button: `bg-gradient-to-r from-[#e060a0] to-[#e04040] text-white rounded-full shadow-[0_4px_16px_rgba(224,96,160,0.35)]`.
- Tiki surface: `bg-gradient-to-b from-[#6a4a2a] to-[#4a3218] text-[#f0d020]`.
- Mango accent: `bg-gradient-to-r from-[#f0a020] via-[#f0d020] to-[#f0a020]`.
- Wave divider: repeating SVG wave pattern in turquoise.
- Palm corner: absolute positioned palm frond SVG at 6-8% opacity.
- Sand background: `bg-[#fff8f0]`.
- Tiki brown text: `text-[#6a4a2a]`.
- Turquoise link: `text-[#40c0c0] hover:text-[#2080e0]`.
- Surf yellow badge: `bg-[#f0d020] text-[#6a4a2a] rounded-full px-3 py-1 text-sm font-bold`.

## Quality Checklist

- Color palette uses the exact eight hex values: tropical red, hibiscus pink, palm green, mango, ocean turquoise, tiki brown, surf yellow, paradise blue.
- At least one hibiscus five-petal flower SVG decoration present per major section.
- Parrot plumage multi-color gradient used as hero or background element.
- Tiki mask motif appears at least once (empty states, loading, or brand section).
- Palm frond silhouettes appear as corner or background decorations.
- Surf board card geometry (elongated, tapered, rounded ends) used for featured content.
- Ocean turquoise appears in at least one interactive element (link, button, or accent).
- Wave pattern divider or mango accent strip separates major sections.
- Typography is bold, rounded, and energetic (no thin or delicate typefaces).
- The aesthetic reads as maximum-saturation tropical — vivid, loud, and alive.
- No muted, desaturated, or pastel tones anywhere.
- No pure white (`#ffffff`) backgrounds — use Sand White or tinted surfaces.
- No pure black (`#000000`) text — use Tiki Brown or Deep Tiki.

## Anti-Patterns

- Muted or pastel colors (this design is MAXIMUM saturation — no restraint).
- Pure white or pure black anywhere (always use palette equivalents).
- Missing botanical or tiki motifs (hibiscus, palm, and tiki are non-negotiable).
- Sharp angular corners (tropical is organic — use `rounded-[2rem]` or `rounded-[3rem]`).
- Thin or delicate typography (tropical vibrant is bold and chunky).
- Missing gradient backgrounds (flat solid colors feel corporate, not tropical).
- Cold gray or steel tones (no blue-gray — use warm tiki browns or cool turquoises instead).
- Minimalist negative space (tropical is abundant and full — lean into visual density).
- Single-color buttons without gradients (every button gets a gradient).
- Small touch targets despite the bold aesthetic (minimum `py-3 px-8` on buttons).
- Missing wave or water motifs (ocean is central to tropical paradise).
- Corporate spacing and layout (tropical breathes with organic rhythm, not grid rigidity).
- Sans-serif display text without weight (display type must be bold or black weight).

## Accessibility Considerations

- Tiki Brown (`#6a4a2a`) on Sand White (`#fff8f0`) provides approximately 6.5:1 contrast ratio — exceeds WCAG AA for body text.
- Tropical Red (`#e04040`) on Sand White (`#fff8f0`) provides approximately 3.9:1 contrast — use only for large text (18px+ bold or 24px+ normal) per WCAG AA.
- Surf Yellow (`#f0d020`) on Tiki Brown (`#6a4a2a`) provides approximately 7.2:1 — excellent for tiki-themed text.
- White text on Ocean Turquoise (`#40c0c0`) buttons must be verified — if below 4.5:1, use Deep Tiki (`#3a2010`) text instead.
- White text on Hibiscus Pink (`#e060a0`) is borderline at approximately 3.2:1 — use only for large display text or switch to Surf Yellow text.
- Focus states: `focus:ring-2 focus:ring-[#f0d020]/50 focus:ring-offset-2 focus:ring-offset-[#fff8f0]` — surf yellow ring visible on all surfaces.
- All decorative SVGs (palm fronds, hibiscus flowers, tiki masks, wave patterns) must include `aria-hidden="true"`.
- Tiki mask SVGs used for empty states must have `role="img"` and an `aria-label` describing the empty state.
- Gradient backgrounds must not reduce text legibility — test all text overlays at their specific gradient position.
- Touch targets must be minimum 44x44px — the bold button styling supports this naturally.
- The high-saturation palette may cause visual fatigue — ensure adequate spacing between competing color blocks.
- Animated elements (loading tiki mask, scroll reveals) must respect `prefers-reduced-motion`: `motion-reduce:animate-none`.
- Parrot plumage gradient backgrounds should have a semi-transparent content overlay to ensure text remains readable over the multicolor sweep.
