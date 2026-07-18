---
name: embroidery-ui
description: Build embroidery / cross-stitch UI components (needlework on linen, counted thread patterns, sampler alphabets, floral borders, stitched dashed-line borders, Aida cloth texture, thread color palette) with cross-stitch X patterns, running-stitch dividers, and the patient domestic craft of hand embroidery. Trigger this skill when the user asks for embroidery design, cross-stitch UI, needlework patterns, sampler alphabet, Aida cloth texture, stitched borders, DMC floss colors, or hand-stitched interfaces.
---

# Embroidery UI

Use this skill to design and implement interfaces inspired by hand embroidery and cross-stitch needlework: linen and Aida cloth textured backgrounds, counted-thread X-stitch patterns, running-stitch dashed borders, sampler-alphabet typography, floral embroidered border motifs, and the patient domestic craft of hand-stitched thread on fabric.

## Non-Negotiable Foundations

- Embroidery is thread stitched through fabric in deliberate, counted patterns. Every surface should feel like woven linen or Aida cloth with visible thread texture.
- Materials are fabric and thread: linen, cotton, Aida cloth (evenweave), embroidery floss (DMC-style stranded cotton). Surfaces are soft, matte, and fibrous — never glossy or digital.
- Colors come from embroidery floss traditions: warm linen cream backgrounds with rich, saturated thread colors (deep red, navy, forest green, gold, lavender). No neons, no pastels-only palettes.
- Stitch patterns are the defining visual element: X-shaped cross-stitches, dashed running stitches, satin-stitch fills, and chain-stitch outlines. Borders and dividers must use stitch-like patterns.
- Typography evokes alphabet samplers: cross-stitched letterforms, monogram initials, and traditional sampler verse layouts.
- The aesthetic is patient, domestic, and crafted — the opposite of fast, slick, or digital. Everything should feel like it took time to make by hand.

## Core Material Recipes

### 1) Linen / Aida Cloth Surface (the foundational surface)

The signature embroidery surface: woven fabric with visible thread texture.

- Background: `bg-[#f5ead0]` (warm linen cream).
- Fabric weave texture: CSS grid pattern simulating evenweave Aida cloth threads: `bg-[linear-gradient(to_right,#e8dcc0_1px,transparent_1px),linear-gradient(to_bottom,#e8dcc0_1px,transparent_1px)] bg-[size:8px_8px]` over `#f5ead0`.
- Subtle fiber noise: SVG noise overlay at `opacity-[0.03]` for organic fiber variation.
- Border: `border-2 border-dashed border-[#c4a882]` (running-stitch seam effect).
- Shadow: `shadow-[0_2px_6px_rgba(122,88,50,0.1)]` (warm, soft fabric shadow).
- Full: `bg-[#f5ead0] bg-[linear-gradient(to_right,#e8dcc0_1px,transparent_1px),linear-gradient(to_bottom,#e8dcc0_1px,transparent_1px)] bg-[size:8px_8px] border-2 border-dashed border-[#c4a882] shadow-[0_2px_6px_rgba(122,88,50,0.1)] p-6 rounded-lg`.

### 2) Cross-Stitch X Pattern Overlay

The defining decorative element: a grid of X-shaped cross-stitches.

Using CSS repeating gradients to create an X-stitch grid:

```css
.cross-stitch-grid {
  background-image:
    linear-gradient(45deg, transparent 46%, #c41e1e 46%, #c41e1e 54%, transparent 54%),
    linear-gradient(-45deg, transparent 46%, #c41e1e 46%, #c41e1e 54%, transparent 54%);
  background-size: 16px 16px;
  background-position: 0 0;
}
```

For a more detailed X-stitch using SVG tile:

```html
<svg viewBox="0 0 100 100" class="w-full h-full opacity-25" preserveAspectRatio="xMidYMid repeat">
  <defs>
    <pattern id="xstitch" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <line x1="3" y1="3" x2="17" y2="17" stroke="#c41e1e" stroke-width="2" stroke-linecap="round"/>
      <line x1="17" y1="3" x2="3" y2="17" stroke="#c41e1e" stroke-width="2" stroke-linecap="round"/>
    </pattern>
  </defs>
  <rect width="100" height="100" fill="url(#xstitch)"/>
</svg>
```

### 3) Running-Stitch Dashed Border

The signature embroidered border: hand-sewn running stitch.

- Border: `border-2 border-dashed border-[#1a3a5a]` (navy thread running stitch).
- Rounded stitch corners: `rounded-lg`.
- For thicker decorative stitch: `border-[3px] border-dashed border-[#c41e1e]` (deep red thread).
- Double-stitch border: two nested dashed borders in complementary thread colors:
  - Outer: `border-2 border-dashed border-[#1a3a5a] p-1`.
  - Inner: `border-2 border-dashed border-[#c41e1e] p-4`.

### 4) Floral Embroidered Border Pattern

Decorative floral vine border stitched along panel edges.

```html
<svg viewBox="0 0 400 40" class="w-full h-10 opacity-50">
  <defs>
    <pattern id="floral-vine" x="0" y="0" width="80" height="40" patternUnits="userSpaceOnUse">
      <path d="M0,20 Q20,5 40,20 Q60,35 80,20" fill="none" stroke="#2a5a2a" stroke-width="1.5" stroke-dasharray="4,2"/>
      <circle cx="20" cy="12" r="4" fill="#c41e1e" stroke="#8a1a1a" stroke-width="0.5"/>
      <circle cx="20" cy="12" r="1.5" fill="#d4a017"/>
      <circle cx="60" cy="28" r="4" fill="#c41e1e" stroke="#8a1a1a" stroke-width="0.5"/>
      <circle cx="60" cy="28" r="1.5" fill="#d4a017"/>
      <path d="M15,18 L12,15 M18,16 L16,12 M25,18 L28,15 M22,16 L24,12" stroke="#2a5a2a" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="400" height="40" fill="url(#floral-vine)"/>
</svg>
```

### 5) Sampler Alphabet Heading

Cross-stitched alphabet lettering for headings (like a traditional sampler).

- Use a pixelated/blocky font or CSS to simulate stitched letterforms.
- Heading: `font-mono font-bold text-3xl text-[#c41e1e] tracking-widest` (mono creates a blocky, stitched feel).
- Alternatively: `font-serif font-bold text-[#1a3a5a] tracking-[0.2em] uppercase` for a painted-sampler look.
- Stitched text effect: `text-shadow: 1px 0 0 #8a1a1a, -1px 0 0 #8a1a1a` to give letters a threaded double-line appearance.

### 6) Embroidered Button

Fabric button with stitched border and thread-color fill.

- Red thread: `bg-[#c41e1e] text-[#f5ead0] font-mono font-medium px-6 py-3 border-2 border-dashed border-[#f5ead0] rounded-lg hover:bg-[#a01a1a] transition-colors`.
- Navy thread: `bg-[#1a3a5a] text-[#f5ead0] font-mono font-medium px-6 py-3 border-2 border-dashed border-[#f5ead0] rounded-lg hover:bg-[#0e2540] transition-colors`.
- Linen button: `bg-[#f5ead0] text-[#1a3a5a] font-mono font-medium px-6 py-3 border-2 border-dashed border-[#1a3a5a] rounded-lg hover:bg-[#e8dcc0] transition-colors`.
- Gold thread: `bg-[#d4a017] text-[#3a2a0a] font-mono font-medium px-6 py-3 border-2 border-dashed border-[#3a2a0a] rounded-lg hover:bg-[#b08810] transition-colors`.

### 7) Satin-Stitch Fill Panel

A panel filled with dense parallel stitches (satin stitch effect).

- Background: `bg-[#1a3a5a]` (navy satin fill).
- Stitch texture: repeating vertical line gradient to simulate parallel satin stitches: `bg-[repeating-linear-gradient(90deg,#1a3a5a_0px,#1a3a5a_3px,#0e2540_3px,#0e2540_4px)]`.
- Border: `border-2 border-dashed border-[#d4a017]` (gold stitched edge).
- Text: `text-[#f5ead0]` (cream thread on dark satin).

### 8) Monogram Initial Accent

Large embroidered initial letter (like a monogram on a sampler).

- `font-serif font-bold text-7xl text-[#c41e1e] tracking-tighter` with a floral SVG border framing the letter.
- Surrounded by: small floral vine SVG on either side, stitched dashed border box.

### 9) Thread Spool / Color Palette Swatch

DMC-style thread color swatches for visual palette display.

```html
<div class="flex gap-2">
  <div class="w-8 h-12 rounded bg-[#c41e1e] border border-[#8a1a1a] shadow-sm" title="DMC 666"></div>
  <div class="w-8 h-12 rounded bg-[#1a3a5a] border border-[#0e2540] shadow-sm" title="DMC 823"></div>
  <div class="w-8 h-12 rounded bg-[#2a5a2a] border border-[#1a3a1a] shadow-sm" title="DMC 909"></div>
  <div class="w-8 h-12 rounded bg-[#d4a017] border border-[#a07810] shadow-sm" title="DMC 740"></div>
  <div class="w-8 h-12 rounded bg-[#8a6abf] border border-[#5a4a8a] shadow-sm" title="DMC 554"></div>
</div>
```

### 10) Stitched Divider

Running-stitch horizontal divider between sections.

- `border-t-2 border-dashed border-[#c4a882]` (neutral linen thread divider).
- For decorative: floral vine SVG (recipe 4) as a thin horizontal band.
- For cross-stitch divider: a row of small X SVG shapes:
```html
<svg viewBox="0 0 200 12" class="w-full h-3 opacity-40">
  <defs>
    <pattern id="x-divider" x="0" y="0" width="16" height="12" patternUnits="userSpaceOnUse">
      <line x1="3" y1="2" x2="13" y2="10" stroke="#c41e1e" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="13" y1="2" x2="3" y2="10" stroke="#c41e1e" stroke-width="1.5" stroke-linecap="round"/>
    </pattern>
  </defs>
  <rect width="200" height="12" fill="url(#x-divider)"/>
</svg>
```

## Color Palette System

### Core Embroidery Palette

| Color | Hex | DMC Code | Thread Name | Role |
|---|---|---|---|---|
| Linen Cream | `#f5ead0` | — | Linen fabric | Primary background |
| Linen Shadow | `#e8dcc0` | — | Weave shadow | Texture, secondary bg |
| Stitch Beige | `#c4a882` | 712 | Light neutral | Running-stitch borders |
| Deep Red | `#c41e1e` | 666 | Bright Red | Primary thread accent |
| Dark Red | `#8a1a1a` | 498 | Dark Red | Red shadows, outlines |
| Navy | `#1a3a5a` | 823 | Navy Blue | Secondary thread |
| Navy Dark | `#0e2540` | 824 | Dark Navy | Navy shadows |
| Forest Green | `#2a5a2a` | 909 | Forest Green | Leaf/vine thread |
| Forest Dark | `#1a3a1a` | 905 | Dark Green | Green shadows |
| Gold | `#d4a017` | 740 | Gold | Highlight thread |
| Gold Dark | `#a07810` | 739 | Dark Gold | Gold shadows |
| Lavender | `#8a6abf` | 554 | Violet | Floral accent thread |
| Lavender Dark | `#5a4a8a` | 553 | Dark Violet | Lavender shadows |
| Ink Brown | `#3a2a1a` | 3371 | Dark Brown | Text on cream |

Rules: Linen cream (`#f5ead0`) is the foundation — every surface starts as fabric. Thread colors (red, navy, green, gold, lavender) are saturated and rich, mimicking DMC stranded cotton on linen. The palette should feel like a needlework shop — organized thread spools on warm fabric. No pastels, no neons. Colors should have the depth and warmth of dyed cotton thread.

## Typography Recommendations

Embroidery typography evokes alphabet samplers and cross-stitched lettering:

- **Display headings:** A blocky/pixelated font or monospace to simulate cross-stitched letters. Use `"Courier New", monospace` at `font-bold tracking-widest uppercase` for a stitched-block look.
- **Sampler headings:** Crimson Pro, Cormorant, or Playfair Display at `font-serif font-bold tracking-[0.15em]` for an elegant painted-sampler feel.
- **Body:** Crimson Text, EB Garamond, or Lora (warm readable serif, like sampler verse text).
- **Monogram initials:** `font-serif font-bold text-7xl` with floral border framing.
- **Labels:** `font-mono font-medium text-sm uppercase tracking-widest` for a stitched-label look.
- **Stitched text effect:** Apply `text-shadow` with offset duplicates to simulate the double-line of thread: `[text-shadow:1px_0_0_currentColor,-1px_0_0_currentColor]`.
- Avoid thin sans-serif fonts alone. Embroidery pairs blocky mono (stitched letters) with warm serif (sampler verses).

## Component Architecture Pattern

1. Warm linen cream background with visible Aida cloth weave texture.
2. Fabric cards with running-stitch (dashed) borders in thread colors.
3. Cross-stitch X pattern overlays on decorative surfaces.
4. Floral embroidered vine borders along panel edges and dividers.
5. Sampler-alphabet typography for headings (mono or serif with wide tracking).
6. Thread-color buttons with stitched (dashed) borders.
7. Monogram initial accents for personal/branded touches.
8. Thread spool color swatches for palette display.
9. Satin-stitch fill panels for rich colored sections (navy, green, red).

## Interaction Rules

- Default state: warm linen fabric, calm, handcrafted.
- Hover: fabric warms slightly, stitch borders deepen, gentle lift.
  - `hover:bg-[#efe4cc] hover:shadow-[0_4px_10px_rgba(122,88,50,0.12)] hover:-translate-y-0.5 transition-all duration-300`.
- Active: gentle press into fabric (`active:translate-y-0.5 active:shadow-[0_1px_4px_rgba(122,88,50,0.08)]`).
- Focus: thread-colored ring `focus:ring-2 focus:ring-[#1a3a5a]/40 focus:ring-offset-2 focus:ring-offset-[#f5ead0]`.
- Transitions: `transition-all duration-300 ease-in-out` (patient, unhurried — like hand stitching).
- No fast, snappy, or aggressive motion. Everything feels like the patience of needlework.

## Reusable Tailwind Tokens

- Linen surface: `bg-[#f5ead0] bg-[linear-gradient(to_right,#e8dcc0_1px,transparent_1px),linear-gradient(to_bottom,#e8dcc0_1px,transparent_1px)] bg-[size:8px_8px] border-2 border-dashed border-[#c4a882] shadow-[0_2px_6px_rgba(122,88,50,0.1)]`
- Cross-stitch grid: `bg-[linear-gradient(45deg,transparent_46%,#c41e1e_46%,#c41e1e_54%,transparent_54%),linear-gradient(-45deg,transparent_46%,#c41e1e_46%,#c41e1e_54%,transparent_54%)] bg-[size:16px_16px]`
- Running-stitch border: `border-2 border-dashed border-[#1a3a5a]`
- Double-stitch border: outer `border-2 border-dashed border-[#1a3a5a]` + inner `border-2 border-dashed border-[#c41e1e]`
- Red button: `bg-[#c41e1e] text-[#f5ead0] font-mono border-2 border-dashed border-[#f5ead0] rounded-lg`
- Navy button: `bg-[#1a3a5a] text-[#f5ead0] font-mono border-2 border-dashed border-[#f5ead0] rounded-lg`
- Gold button: `bg-[#d4a017] text-[#3a2a0a] font-mono border-2 border-dashed border-[#3a2a0a] rounded-lg`
- Linen button: `bg-[#f5ead0] text-[#1a3a5a] font-mono border-2 border-dashed border-[#1a3a5a] rounded-lg`
- Satin fill: `bg-[repeating-linear-gradient(90deg,#1a3a5a_0px,#1a3a5a_3px,#0e2540_3px,#0e2540_4px)]`
- Sampler heading: `font-mono font-bold text-3xl tracking-widest uppercase text-[#c41e1e]`
- Stitched text shadow: `[text-shadow:1px_0_0_#8a1a1a,-1px_0_0_#8a1a1a]`
- Floral vine SVG: pattern of curved vine + red/green flowers with gold centers
- Thread spool: `w-8 h-12 rounded bg-[#c41e1e] border border-[#8a1a1a]`
- Warm shadow: `shadow-[0_2px_6px_rgba(122,88,50,0.1)]`

## Quality Checklist (must pass)

- Background is warm linen cream with visible fabric weave texture (not flat or white).
- At least one cross-stitch X pattern element (CSS grid or SVG).
- Borders use dashed/running-stitch lines (never solid — stitching mimics hand-sewn seams).
- At least one floral embroidered border or vine decoration.
- Color palette uses DMC-style thread colors (deep red, navy, forest green, gold, lavender).
- Typography evokes sampler alphabets (mono for stitched letters, serif for verses).
- At least one satin-stitch fill panel or rich thread-colored surface.
- Monogram initial or sampler heading present.
- Thread spool / color swatch elements for palette display.
- Shadows are warm, soft, and fabric-like (brown undertones).
- The aesthetic reads as hand embroidery / cross-stitch needlework.
- Motion is patient and unhurried (like the act of stitching).
- Fabric texture is visible on every surface (Aida cloth weave or linen grain).

## Anti-Patterns

- Flat, textureless backgrounds (embroidery requires visible fabric weave).
- Solid borders (use dashed/running-stitch to mimic hand-sewn seams).
- Missing cross-stitch X patterns (these are the defining visual element of embroidery UI).
- Neon or pastel-only palettes (use DMC-style saturated thread colors).
- Smooth, glossy surfaces (embroidery is matte cotton thread on linen — never shiny).
- Modern sans-serif typography alone (needs sampler-style mono or serif with wide tracking).
- Fast, aggressive animations (embroidery is patient, slow, and deliberate).
- Digital or technological references (embroidery is pre-digital, domestic, handmade).
- Pure white backgrounds (use warm linen cream `#f5ead0`).
- Missing floral/nature motifs (flowers and vines are traditional embroidery staples).
- Unstitched dividers (every divider should be a running stitch or cross-stitch row).
- Clean digital edges (embroidery has slightly irregular, hand-stitched edges).
- Missing thread texture (floss should look fibrous and layered, not flat paint).

## Accessibility Considerations

- Linen cream (`#f5ead0`) with dark text (`#3a2a1a`) provides excellent contrast (WCAG AAA).
- Deep thread colors (navy, red, green) on cream verify WCAG AA.
- Satin-stitch dark panels (navy `#1a3a5a`) with cream text (`#f5ead0`) provide good contrast.
- Dashed/stitched borders must be thick enough (2px minimum) to define interactive elements.
- Floral and cross-stitch decorative SVGs must be `aria-hidden="true"`.
- Focus states: `focus:ring-2 focus:ring-[#1a3a5a]/40 focus:ring-offset-2 focus:ring-offset-[#f5ead0]` (visible against linen).
- Monospace stitched-style headings should maintain readability at 16px+ (the wide tracking can reduce legibility at small sizes).
- `text-shadow` stitched effects should not blur text — use hard offsets only, no blur radius.
- Touch targets must be adequate despite soft, rounded, fabric styling (minimum 44x44px).
- Color swatches (thread spools) must have text labels or `title` attributes for screen readers.
