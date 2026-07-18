---
name: pre-raphaelite-study-ui
description: Build pre-Raphaelite study UI components (medieval manuscript, jewel colors, flowing hair lines, flower symbolism, knight armor, maiden portrait, forest backdrop) with rich jewel-toned colors, intricate detail, and the romantic medievalism of the Pre-Raphaelite Brotherhood. Trigger this skill when the user asks for pre-Raphaelite design, medieval romantic UI, jewel-toned interface, illuminated manuscript layout, flowing hair aesthetic, knight armor silhouette, maiden portrait frame, dense forest backdrop, flower symbolism accents, romantic medievalism design, or Pre-Raphaelite Brotherhood art style interface.
---

# Pre-Raphaelite Study UI

Use this skill to design and implement richly detailed interfaces inspired by the 19th-century Pre-Raphaelite Brotherhood: medieval manuscripts with illuminated initials, deep jewel-toned color palettes of ruby, emerald, and sapphire, long flowing organic lines like Rossetti's hair studies, symbolic flowers (lily, rose, iris), knight armor silhouettes, maiden portrait frames with ornate borders, and dense dark forest backdrops. Every surface should feel saturated with color and meaning, every detail intentional, every element carrying symbolic weight.

## Non-Negotiable Foundations

- Pre-Raphaelite Study design is defined by JEWEL SATURATION and SYMBOLIC DETAIL: every surface is rich with meaning, every color is deep and luminous, every element carries the weight of medieval romance and naturalistic observation.
- Jewel tones are mandatory: deep ruby, emerald green, sapphire blue, and illuminated gold dominate. These are not pastels, not muted, not subtle — they are the saturated gem-like colors of medieval stained glass and illuminated manuscripts.
- Dense naturalistic detail: intricate borders, interwoven floral patterns, Celtic knotwork suggestions, vine scrollwork. Surfaces are never plain, never empty, never minimal. Horror vacui is a feature, not a flaw.
- Flowing organic lines: long wavy curves suggesting flowing hair, trailing vines, sinuous letterforms. Nothing is angular, nothing is geometric, nothing is mechanical. Every line has organic life.
- Medieval manuscript structure: text set within ornate borders, illuminated initials dropping into the first line, decorative marginalia, gold leaf accents that catch the light.
- Typography is medieval and romantic: blackletter for display, ornate serif for body, uncial or insular for decorative accents. The text should feel copied by hand in a scriptorium.

## Core Material Recipes

### 1) Medieval Manuscript Page

A text page with illuminated initial, decorative border, and parchment ground — the foundational Pre-Raphaelite surface.

- Parchment ground: `bg-[#f0e8d0]` with subtle texture via `background-image: url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`.
- Illuminated initial: `text-[#c4a043] text-6xl font-serif font-bold float-left mr-3 mt-1 leading-none drop-shadow-[1px_1px_0_rgba(138,26,42,0.3)]` with gold gradient `bg-gradient-to-b from-[#c4a043] via-[#d4b053] to-[#b49033] bg-clip-text text-transparent`.
- Decorative border: `border-4 border-[#c4a043]` with inset `shadow-[inset_0_0_0_2px_rgba(138,26,42,0.3),inset_0_0_0_6px_rgba(240,232,208,0.5),inset_0_0_0_8px_rgba(196,160,67,0.4)]` for the characteristic triple-rule manuscript border.
- Marginal vine scrollwork: SVG border pattern with `stroke-[#1a5a3a] stroke-[1px] fill-none` forming a continuous vine along all four edges.
- Text columns: `columns-2 gap-8 text-[#2a2a2a] font-serif text-sm leading-loose` for the manuscript text block.
- Full: `bg-[#f0e8d0] border-4 border-[#c4a043] p-8 relative overflow-hidden`

### 2) Jewel Color Swatch Card

Deep saturated jewel tone presented as a rich, luminous color field.

- Card surface: solid jewel color background with inner glow: `bg-[#8a1a2a] shadow-[inset_0_0_20px_rgba(0,0,0,0.3),0_0_0_1px_rgba(196,160,67,0.3)]` (ruby example).
- Luminous sheen: pseudo-element `bg-[radial-gradient(ellipse_at_30%_25%,rgba(255,255,255,0.15)_0%,transparent_60%)]` for the gem-like light reflection.
- Gold foil border: `border border-[#c4a043]` with subtle `shadow-[0_0_4px_rgba(196,160,67,0.3)]`.
- Color label: `text-[#f0e8d0] font-serif text-xs tracking-widest uppercase mt-4 opacity-80` on the dark jewel field.
- Depth: `shadow-[0_4px_16px_rgba(0,0,0,0.4)]` for a sense of the card lifting from the surface.
- Full: `relative p-6 rounded-sm overflow-hidden`

### 3) Flowing Hair Lines

Long wavy organic lines inspired by Rossetti's hair studies, used as decorative dividers and borders.

- Line base: SVG with `stroke-[#7a3a1a] stroke-[2px] fill-none` using a sine-wave path: `d="M 0 20 Q 25 5 50 20 Q 75 35 100 20 Q 125 5 150 20"` repeated horizontally.
- Hair color variation: `stroke-[#7a3a1a]` (auburn base), `stroke-[#8a4a2a]` (lighter highlight strands), `stroke-[#5a2a0a]` (shadow strands) layered at 1px offset.
- Flow direction: horizontal for dividers, vertical for borders, cascading curves for decorative corners.
- Thickness variation: `stroke-[1.5px]` to `stroke-[2.5px]` within the same path for natural hair-thickness variation.
- Soft glow: `filter: drop-shadow(0 0 2px rgba(122,58,26,0.3))` for warm hair sheen.
- Full: `relative h-8 overflow-hidden` containing the SVG element.

### 4) Flower Symbolism Accents

Individual flowers rendered as detailed symbolic elements — lily, rose, iris — placed as marginalia or decorative accents.

- Lily (purity): SVG with `fill-[#f0e8d0]` petals and `stroke-[#1a5a3a] stroke-[0.5px]`, three-petal form, approximately 24x40px.
- Rose (love): `bg-[radial-gradient(circle,#8a1a2a_0%,#6a0a1a_60%,#4a0010_100%)] rounded-full w-6 h-6` with `shadow-[0_0_6px_rgba(138,26,42,0.4)]` for deep crimson glow.
- Iris (wisdom): SVG with `fill-[#1a3a7a]` upright petals and `stroke-[#1a3a7a] stroke-[0.5px]`, approximately 20x36px.
- Stem and leaf: `border-l-[1px] border-[#1a5a3a]` vertical line with small `bg-[#1a5a3a] rounded-full w-2 h-3 rotate-30` leaf shapes.
- Gold accent dots: `bg-[#c4a043] rounded-full w-1 h-1` scattered around flowers for pollen or stamen suggestion.
- Full: `relative w-8 h-12 flex flex-col items-center`

### 5) Knight Armor Silhouette

Medieval knight in profile, rendered as a dark metallic silhouette with highlight details.

- Armor body: SVG with `fill-[#2a2a30]` forming a helmeted figure in profile — visor closed, shoulder pauldrons, upright posture.
- Metal sheen: `fill-[url(#armorGradient)]` where the gradient is `linear-gradient(135deg, rgba(160,168,176,0.3) 0%, rgba(42,42,48,1) 50%, rgba(100,108,116,0.2) 100%)`.
- Rivet details: `bg-[#a0a8b0] rounded-full w-1 h-1` dots at pauldron edges and helmet seam lines.
- Sword hilt: `bg-[#c4a043] w-1 h-8` vertical line beside the figure with `bg-[#c4a043] w-4 h-1` crossguard.
- Shadow: `shadow-[2px_4px_12px_rgba(0,0,0,0.5)]` for the figure's projected shadow.
- Full: `relative w-20 h-32`

### 6) Maiden Portrait Frame

Ornate frame surrounding a portrait area, in the style of Rossetti and Waterhouse.

- Frame outer: `border-4 border-[#c4a043] rounded-sm` with `shadow-[0_0_0_2px_rgba(138,26,42,0.3),0_0_0_6px_rgba(42,42,48,0.2)]` for the characteristic multi-rule frame.
- Frame corner ornaments: `bg-[#c4a043] w-4 h-4 rounded-full` at each corner with inner `bg-[#8a1a2a] rounded-full w-2 h-2` for the jeweled corner detail.
- Portrait area: `bg-[#f0e8d0]` parchment background within the frame, suggesting the portrait ground.
- Frame inner shadow: `shadow-[inset_0_0_12px_rgba(0,0,0,0.2)]` for depth within the frame.
- Name plate: `bg-[#c4a043] text-[#1a1a1a] text-xs font-serif tracking-widest uppercase px-4 py-1 mx-auto` below the portrait area.
- Full: `relative p-3 bg-[#2a2a30]`

### 7) Dense Forest Backdrop

Dark woodland background with layered trees, dappled shadow, and mysterious depth.

- Forest depth gradient: `bg-gradient-to-b from-[#0a1a0a] via-[#1a3a1a] to-[#0a2a0a]` for deep woodland.
- Tree trunks: `bg-[#2a1a0a] w-2 absolute` vertical elements at varied x-positions and heights, slightly tapered via `clip-path: polygon(30% 0%, 70% 0%, 65% 100%, 35% 100%)`.
- Canopy layer: `bg-[radial-gradient(ellipse_80px_40px_at_var(--x)_var(--y),rgba(26,58,26,0.8)_0%,transparent_100%)]` repeated for overlapping leaf canopy.
- Light shafts: `bg-[linear-gradient(170deg,rgba(240,232,208,0.06)_0%,transparent_40%)]` angled rectangles piercing the canopy.
- Ground: `bg-gradient-to-b from-[#1a2a10] to-[#0a1a08]` forest floor with scattered `bg-[#3a2a0a] rounded-sm` leaf litter dots.
- Full: `relative h-64 bg-gradient-to-b from-[#0a1a0a] via-[#1a3a1a] to-[#0a2a0a] overflow-hidden`

## Color Palette System

### Core Pre-Raphaelite Palette

| Color | Hex | Role |
|---|---|---|
| Ruby | `#8a1a2a` | Primary jewel tone, roses, passion, manuscript initials, deep accents |
| Emerald | `#1a5a3a` | Nature, foliage, stems, vines, forest depths, vitality |
| Sapphire | `#1a3a7a` | Iris flowers, royal accents, depth, sky through canopy |
| Gold Illuminated | `#c4a043` | Gold leaf, frame borders, illuminated initials, metal accents |
| Parchment | `#f0e8d0` | Manuscript ground, light surfaces, text backgrounds |
| Armor Silver | `#a0a8b0` | Metal surfaces, armor sheen, silver highlights, neutral accent |
| Forest Dark | `#1a3a1a` | Deep background, forest depths, darkest green, shadows |
| Hair Auburn | `#7a3a1a` | Flowing hair lines, warm organic detail, natural brown |
| Ruby Deep | `#6a0a1a` | Darker ruby for depth, shadows within red elements |
| Emerald Dark | `#0a3a20` | Darkest green, deep foliage, night forest |
| Sapphire Light | `#3a5a9a` | Lighter blue for highlights, sky glimpses, iris petals |
| Gold Light | `#d4b053` | Gold highlights, illuminated letter tops, sheen |
| Parchment Dark | `#d4c8a0` | Aged parchment, secondary surface, border areas |
| Ruby Light | `#b03a4a` | Lighter ruby for petals, heart accents, warmth |
| Forest Floor | `#2a1a0a` | Tree bark, ground brown, earth tones |

Rules: Jewel tones (ruby, emerald, sapphire) and illuminated gold dominate. These are deep, saturated, luminous colors — not pastels, not muted. Parchment provides the essential light contrast surface. Forest dark and armor silver provide neutral grounding. Every color should feel like it belongs in a medieval cathedral or a Rossetti painting — rich, meaningful, saturated with intent. The palette never feels modern, digital, or cool-minimalist.

## Typography Recommendations

Pre-Raphaelite typography is medieval, ornate, and romantically handcrafted — like text in an illuminated manuscript or a William Morris Kelmscott Press book:

- **Display headings:** UnifrakturMaguntia, MedievalSharp, or Metamorphous (blackletter and medieval display faces).
- **Illuminated initial:** Cinzel Decorative or Uncial Antiqua (ornate first letters for manuscript-style drop caps).
- **Body text:** EB Garamond, Crimson Text, or IM Fell English (old-style serif with medieval character).
- **Decorative text:** Playfair Display SC or Cormorant SC (small caps for chapter titles and formal inscriptions).
- **Marginalia:** `font-serif italic text-[#7a3a1a] text-xs tracking-wide` for handwritten-style annotations in manuscript margins.
- **Labels:** `font-serif uppercase text-[#c4a043] text-[10px] tracking-[0.2em]` for gold-leaf label style.
- Blackletter for display headings is expected and appropriate — this is the one aesthetic where it belongs.
- Avoid clean sans-serif entirely — the text must feel hand-copied, not typeset by machine.
- Light serif weights for body text, heavy decorative weights only for display headings and initials.

## Component Architecture Pattern

1. Dense forest backdrop or parchment manuscript ground as the base layer.
2. Ornate multi-rule border (gold, ruby, emerald) framing the content area.
3. Illuminated initial or decorative drop cap opening the text.
4. Flowing hair-line SVG dividers between sections.
5. Jewel-tone color accents for emphasis (ruby for importance, emerald for nature, sapphire for wisdom).
6. Flower symbolism elements (lily, rose, iris) placed as marginalia or section markers.
7. Maiden portrait frames or knight armor silhouettes as focal illustrations.
8. Gold illuminated text for headings, labels, and highlights.
9. Medieval typography throughout — blackletter display, old-style serif body.
10. Dense detail fills every gap — borders, corners, margins are never empty.

## Interaction Rules

- Default state: rich, saturated, deeply detailed — like an illuminated manuscript page.
- Hover: gold border brightens, jewel tones gain inner luminosity, subtle warm glow.
  - `hover:shadow-[inset_0_0_20px_rgba(196,160,67,0.15)] hover:brightness-110 transition-all duration-400`.
- Active: `active:scale-[0.99] active:brightness-95` (gentle press, like pressing into thick parchment).
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#c4a043] focus:ring-offset-2 focus:ring-offset-[#2a2a30]` (gold ring on dark background).
- Transitions: `transition-all duration-400 ease-in-out` (measured, deliberate — like unrolling a manuscript).
- Illumination reveal: on hover, illuminated initial gains a subtle gold glow `shadow-[0_0_12px_rgba(196,160,67,0.4)]`.
- Flower bloom: on hover over flower accents, petals expand slightly `transform: scale(1.1)` with `transition-transform duration-600`.
- Scroll interactions: forest backdrop layers move at different parallax rates — foreground trees faster, distant canopy slower.
- Armor gleam: on hover over armor elements, a light-sweep animation `background: linear-gradient(110deg, transparent 30%, rgba(160,168,176,0.2) 50%, transparent 70%)` translating across the surface.

## Reusable Tailwind Tokens

- Manuscript page: `bg-[#f0e8d0] border-4 border-[#c4a043] p-8 shadow-[inset_0_0_0_2px_rgba(138,26,42,0.3),inset_0_0_0_6px_rgba(240,232,208,0.5),inset_0_0_0_8px_rgba(196,160,67,0.4)]`
- Jewel ruby surface: `bg-[#8a1a2a] shadow-[inset_0_0_20px_rgba(0,0,0,0.3),0_0_0_1px_rgba(196,160,67,0.3)]`
- Jewel emerald surface: `bg-[#1a5a3a] shadow-[inset_0_0_20px_rgba(0,0,0,0.3),0_0_0_1px_rgba(196,160,67,0.3)]`
- Jewel sapphire surface: `bg-[#1a3a7a] shadow-[inset_0_0_20px_rgba(0,0,0,0.3),0_0_0_1px_rgba(196,160,67,0.3)]`
- Gold illuminated text: `bg-gradient-to-b from-[#c4a043] via-[#d4b053] to-[#b49033] bg-clip-text text-transparent`
- Gold foil border: `border border-[#c4a043] shadow-[0_0_4px_rgba(196,160,67,0.3)]`
- Flowing hair divider: SVG `stroke-[#7a3a1a] stroke-[2px] fill-none` sine-wave path
- Forest backdrop: `bg-gradient-to-b from-[#0a1a0a] via-[#1a3a1a] to-[#0a2a0a]`
- Armor surface: `fill-[url(#armorGradient)]` with metallic linear gradient
- Maiden frame: `border-4 border-[#c4a043] shadow-[0_0_0_2px_rgba(138,26,42,0.3),0_0_0_6px_rgba(42,42,48,0.2)]`
- Rose accent: `bg-[radial-gradient(circle,#8a1a2a_0%,#6a0a1a_60%,#4a0010_100%)] rounded-full shadow-[0_0_6px_rgba(138,26,42,0.4)]`
- Lily accent: SVG `fill-[#f0e8d0] stroke-[#1a5a3a] stroke-[0.5px]`
- Iris accent: SVG `fill-[#1a3a7a] stroke-[#1a3a7a] stroke-[0.5px]`
- Manuscript text: `text-[#2a2a2a] font-serif text-sm leading-loose`
- Marginalia note: `text-[#7a3a1a] font-serif italic text-xs tracking-wide`
- Gold label: `text-[#c4a043] font-serif uppercase text-[10px] tracking-[0.2em]`
- Deep shadow: `shadow-[0_4px_16px_rgba(0,0,0,0.4)]`
- Light shaft: `bg-[linear-gradient(170deg,rgba(240,232,208,0.06)_0%,transparent_40%)]`

## Quality Checklist (must pass)

- Jewel tones (ruby, emerald, sapphire) dominate the palette with deep saturation — never pastel, never muted.
- Illuminated gold (#c4a043) appears on borders, initials, labels, and accent elements consistently.
- Parchment (#f0e8d0) is the primary light surface — never pure white.
- Dense ornamental detail fills borders, corners, and margins — no empty spaces, no minimalism.
- Flowing organic lines (hair, vines, curves) appear as dividers and decorative elements.
- Flower symbolism (lily, rose, iris) present as marginalia or section markers.
- Medieval manuscript structure: text within ornate borders, illuminated drop capitals.
- Typography uses blackletter for display and old-style serif for body — medieval character throughout.
- Knight armor silhouettes use metallic gradients with rivet details.
- Maiden portrait frames use multi-rule gold borders with jeweled corners.
- Forest backdrops use layered depth with tree trunks, canopy, and light shafts.
- The mood reads as a romantic medieval manuscript illuminated by candlelight in a forest hermitage.
- No sans-serif typography anywhere — the medieval aesthetic is absolute.
- No neon, no digital, no modern aesthetic elements — period integrity is maintained.

## Anti-Patterns

- Minimalist or sparse layouts (Pre-Raphaelite design fills every space with detail — horror vacui is the aesthetic).
- Pastel or muted colors (jewel tones are deep, saturated, and luminous — never washed out).
- Sans-serif typography (blackletter for display, medieval serif for body — no modern typefaces).
- Pure white or pure black backgrounds (parchment for light, forest dark for dark — never achromatic).
- Clean geometric shapes (everything is organic, hand-drawn, medieval — no circles, no grids, no rulers).
- Flat single-color surfaces (every surface has texture, gradient, sheen, or ornamental detail).
- Empty borders or margins (decorative vine scrollwork, Celtic patterns, or floral marginalia must fill all edges).
- Digital or screen-native UI patterns (no toggle switches, no material shadows, no flat design).
- Neon or electric colors (the palette is gem-and-earth, not LED).
- Modern sans-serif labels or navigation (all text must feel hand-lettered or typeset by a medieval press).
- Lack of symbolic elements (lily, rose, iris, cross, crown — Pre-Raphaelite art is symbol-laden).
- Symmetric mechanical patterns (ornamental details should feel hand-drawn with slight organic variation).
- Chrome or brushed metal (armor is dark iron-steel, frames are gold-leaf — not modern metals).

## Accessibility Considerations

- Parchment (#f0e8d0) with dark text (#2a2a2a) provides strong WCAG AAA contrast (12.1:1 ratio) for body text.
- Gold illuminated text (#c4a043) on dark backgrounds (#2a2a30) achieves approximately 6.8:1 — WCAG AA for normal text.
- Ruby (#8a1a2a) on parchment must be verified — use darker `#6a0a1a` for text to ensure WCAG AA 4.5:1 compliance.
- Emerald (#1a5a3a) on parchment provides approximately 5.2:1 — sufficient for body text at WCAG AA.
- Sapphire (#1a3a7a) on parchment provides approximately 7.1:1 — exceeds WCAG AAA.
- Armor silver (#a0a8b0) on dark backgrounds may be too low contrast — use `#c8d0d8` for text on dark surfaces.
- Focus states: `focus:ring-2 focus:ring-[#c4a043]` (gold ring) provides visible contrast on both parchment and dark backgrounds.
- Ornamental SVGs (vine borders, hair lines, armor silhouettes, flower illustrations) must be `aria-hidden="true"`.
- Illuminated initials must have `aria-label` describing the letter they represent.
- Dense ornamental backgrounds must not reduce text contrast below 4.5:1 — verify luminance contrast.
- Flower symbolism elements are decorative — mark with `role="presentation"` to reduce screen reader noise.
- The rich, saturated aesthetic benefits from strong contrast — luminance separation is naturally high between parchment and jewel tones.
- Touch targets on ornate framed elements must account for the decorative border offset and maintain minimum 44x44px.
- Forest backdrop light shaft and canopy effects must use `pointer-events-none` to avoid click interception.
- The dense visual detail may cause fatigue for some users — ensure sufficient spacing between interactive elements.
