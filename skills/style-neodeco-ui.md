---
name: neodeco-ui
description: Build NeoDeco / Art Deco UI components (geometric fans, sunburst patterns, stepped forms, bilateral symmetry, moody metallics, gold accents) with 2026 contemporary sophistication, refined geometry, and luxury visual language. Trigger this skill when the user asks for NeoDeco, Art Deco UI, geometric luxury design, sunburst patterns, stepped architecture, or Gatsby-era glamour interfaces.
---

# NeoDeco UI

Use this skill to design and implement contemporary Art Deco-inspired interfaces: geometric fans, sunburst radiations, stepped forms, bilateral symmetry, refined metallic accents, and moody, sophisticated color palettes.

## Non-Negotiable Foundations

- NeoDeco is the 2026 evolution of Art Deco: it preserves the geometric vocabulary (fans, sunbursts, stepped forms, radiating lines) but reimagines them through a contemporary lens with cleaner line weights, deeper saturation, and matte metallics.
- Bilateral symmetry is central. NeoDeco compositions are balanced and architecturally precise.
- Geometry is mathematical: exact angles, radiating lines, concentric arcs. No organic or freeform shapes.
- Metallics are refined and subdued (matte gold, bronze, brass) — not gleaming or flashy.
- Color palettes are moody and sophisticated: deep emerald, midnight blue, rich burgundy, charcoal, with metallic gold or copper accents.
- Typography is elegant: high-contrast serifs or geometric display fonts with letterforms that echo Deco architecture.

## Core Material Recipes

### 1) Sunburst / Fan Pattern Background

The signature Art Deco motif: radiating lines or concentric arcs.

CSS conic gradient sunburst:
```css
background: conic-gradient(
  from 0deg at 50% 100%,
  #d4af37 0deg, transparent 5deg,
  #d4af37 10deg, transparent 15deg,
  /* ... repeat for 180 degrees */
);
```

Tailwind approximate:
- `bg-[conic-gradient(from_180deg_at_50%_100%,#d4af37_0deg,transparent_3deg,#d4af37_6deg,transparent_9deg)] opacity-20`

SVG sunburst (more control):
```html
<svg viewBox="0 0 400 200" class="absolute inset-0 w-full h-full opacity-20">
  <g stroke="#d4af37" stroke-width="1" fill="none">
    <line x1="200" y1="200" x2="0" y2="0"/>
    <line x1="200" y1="200" x2="100" y2="0"/>
    <line x1="200" y1="200" x2="200" y2="0"/>
    <line x1="200" y1="200" x2="300" y2="0"/>
    <line x1="200" y1="200" x2="400" y2="0"/>
    <!-- Add more lines at regular intervals -->
  </g>
</svg>
```

### 2) Stepped Deco Card

Card with stepped/ziggurat corners that echo Art Deco architecture.

- Clip-path stepped corner: `[clip-path:polygon(8px_0,calc(100%-8px)_0,100%_8px,100%_calc(100%-8px),calc(100%-8px)_100%,8px_100%,0_calc(100%-8px),0_8px)]`.
- Background: `bg-gradient-to-br from-[#1a1a2e] to-[#16213e]`.
- Border: thin gold border via pseudo-element or `border border-[#d4af37]/30`.
- Shadow: `shadow-[0_8px_32px_rgba(0,0,0,0.4)]`.

### 3) Gold Deco Border Frame

Thin gold geometric border frame with stepped corners.

- Container: `border border-[#d4af37]/40 p-8`.
- Inner frame: `outline outline-1 outline-[#d4af37]/20 outline-offset-4`.
- Corner accents: small gold triangles or stepped shapes at each corner.

### 4) Deco Button

Elegant button with gold accent and geometric shape.

- Primary: `bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#1a1a2e] font-semibold tracking-wider uppercase px-8 py-3 [clip-path:polygon(8px_0,calc(100%-8px)_0,100%_50%,calc(100%-8px)_100%,8px_100%,0_50%)] hover:brightness-110 transition-all`
- Outline: `bg-transparent text-[#d4af37] font-semibold tracking-wider uppercase px-8 py-3 border border-[#d4af37]/50 hover:bg-[#d4af37]/10 transition-all`

### 5) Geometric Deco Divider

Art Deco-style ornamental divider.

- Diamond chain: `flex items-center justify-center gap-2` with rotated squares `w-2 h-2 bg-[#d4af37] rotate-45`.
- Fan divider: SVG fan shape centered as a section separator.
- Triple line: `flex flex-col gap-1` with three lines of decreasing length `h-px bg-[#d4af37]`, centered.

## Color Palette System

### Moody Emerald (primary recommendation)

| Color | Hex | Role |
|---|---|---|
| Deep Emerald | `#0e3a2a` | Primary background |
| Emerald | `#16523c` | Card surfaces |
| Gold | `#d4af37` | Primary accent, borders, text highlights |
| Champagne | `#f5e6c8` | Light text, secondary accents |
| Charcoal | `#1a1a1a` | Deep contrast, footer |

### Midnight Blue

| Color | Hex | Role |
|---|---|---|
| Midnight | `#0d1b2a` | Primary background |
| Navy | `#1b2838` | Card surfaces |
| Gold | `#d4af37` | Primary accent |
| Silver | `#c0c0c0` | Light accent |
| Ivory | `#fffff0` | Primary text |

### Burgundy & Brass

| Color | Hex | Role |
|---|---|---|
| Deep Burgundy | `#4a0e1f` | Primary background |
| Wine | `#6b1d2f` | Card surfaces |
| Brass | `#b8860b` | Primary accent |
| Rose Gold | `#e8b4b8` | Secondary accent |
| Cream | `#fdf5e6` | Primary text |

Rules: Each palette is moody and jewel-toned. Gold or brass is the unifying metallic accent across all palettes. Backgrounds are always dark and rich. Light text (ivory, champagne, cream) provides contrast.

## Typography Recommendations

NeoDeco typography echoes the architectural elegance of the era:

- **Display headings:** Playfair Display, Cormorant Garamond, or Cinzel (high-contrast serif with Deco character).
- **Alternative display:** Poiret One, Limelight, or Plaza (geometric Deco fonts).
- **Body:** Cormorant, Lora, or EB Garamond (elegant serif at `font-normal`).
- **Labels:** `font-medium uppercase tracking-[0.2em]` — wide tracking echoes Deco architectural lettering.
- **Avoid:** monospace, casual sans-serif, script fonts.
- Typography should feel like it belongs on a 1920s luxury hotel menu or cinema palace.

## Geometric Motif Library

### Fan / Sunburst

Radiating lines from a central point. Used as:
- Background pattern (subtle, `opacity-20`).
- Section divider (centered fan).
- Hero decoration (large sunburst behind hero title).

### Stepped Form

Ziggurat-like stepped rectangles. Used as:
- Card corner shapes (clip-path).
- Decorative frames.
- Progress indicators (stepped bars).

### Chevron

V-shaped pattern. Used as:
- Border decoration.
- Section separators.
- Background texture (repeating chevrons).

### Concentric Arcs

Nested arcs of decreasing radius. Used as:
- Decorative frames around important elements.
- Background texture.
- Logo/brandmark containers.

## Component Architecture Pattern

1. Moody dark background (emerald, midnight, burgundy).
2. Subtle sunburst or geometric pattern overlay (`opacity-10` to `opacity-20`).
3. Stepped/geometric content cards with gold borders.
4. Elegant serif typography with wide tracking.
5. Gold accent elements (borders, buttons, dividers).
6. Symmetrical composition with bilateral balance.
7. Geometric decorative motifs (fans, diamonds, chevrons).

## Interaction Rules

- Default state: moody, elegant, geometric.
- Hover state: subtle gold glow or brightness increase.
  - `hover:border-[#d4af37]/60 hover:shadow-[0_8px_32px_rgba(212,175,55,0.15)]`.
- Active state: `active:scale-[0.98]`.
- Focus state: gold ring `focus:ring-2 focus:ring-[#d4af37]/50 focus:ring-offset-2 focus:ring-offset-[#0e3a2a]`.
- Transitions: `transition-all duration-300 ease-out` (elegant, unhurried).

## Reusable Tailwind Tokens

- Stepped card: `bg-gradient-to-br from-[#0e3a2a] to-[#16523c] border border-[#d4af37]/30 [clip-path:polygon(8px_0,calc(100%-8px)_0,100%_8px,100%_calc(100%-8px),calc(100%-8px)_100%,8px_100%,0_calc(100%-8px),0_8px)] p-8`
- Gold button: `bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#0e3a2a] font-semibold uppercase tracking-wider px-8 py-3`
- Diamond divider: `w-2 h-2 bg-[#d4af37] rotate-45`
- Sunburst bg: `bg-[conic-gradient(from_180deg_at_50%_100%,#d4af37_0deg,transparent_3deg,#d4af37_6deg,transparent_9deg)] opacity-20`
- Gold text: `text-[#d4af37]`
- Label: `font-medium uppercase tracking-[0.2em] text-sm text-[#d4af37]`

## Quality Checklist (must pass)

- Geometric motifs (fans, sunbursts, stepped forms) are present.
- Color palette is moody and jewel-toned (emerald, midnight, burgundy).
- Gold or brass metallic accent is used consistently.
- Composition is symmetrical and architecturally precise.
- Typography is elegant (high-contrast serif or geometric Deco font).
- Wide letter tracking on labels echoes Deco architectural lettering.
- Cards use stepped or geometric clip-path corners.
- Backgrounds are dark and rich, never bright or pastel.
- The aesthetic reads as contemporary luxury with Art Deco geometry.

## Anti-Patterns

- Bright, cheerful color palettes (NeoDeco is moody and sophisticated).
- Organic or freeform shapes (only mathematical geometry allowed).
- Flashy or gleaming metallics (use subdued matte gold/brass).
- Asymmetric or chaotic layouts (NeoDeco demands bilateral symmetry).
- Casual sans-serif typography (use elegant serif or geometric Deco fonts).
- Missing geometric motifs (fans/sunbursts/stepped forms are essential).
- Pure black backgrounds (use rich jewel tones: emerald, navy, burgundy).
- Playful or energetic interactions (NeoDeco is elegant and unhurried).
- Flat solid borders without geometric detail (borders should have stepped or decorative character).

## Accessibility Considerations

- Moody dark backgrounds with light text provide good contrast, but verify WCAG AA.
- Gold text on dark backgrounds can be low contrast; use gold for accents and large text, not body text.
- Geometric clip-path corners must not cut off interactive areas.
- Sunburst pattern backgrounds must be subtle enough (`opacity-20` or lower) to not reduce contrast.
- Focus states must use a visible gold ring against dark backgrounds.
- Ensure decorative SVG patterns have `aria-hidden="true"`.
- Touch targets must be adequate despite geometric clip-path shapes.
