---
name: neoclassical-hall-ui
description: Build neoclassical hall UI components (marble column, pediment triangle, symmetry grid, laurel wreath, fluted shaft, plaster ceiling rose, geometric floor pattern) with clean classical proportions, white marble surfaces, and the orderly grandeur of neoclassical architecture. Trigger this skill when the user asks for neoclassical hall design, marble column UI, classical symmetry interface, laurel wreath ornament, pediment triangle header, fluted column design, ceiling rose medallion, Greek key pattern, checkerboard floor, plaster white aesthetic, or orderly classical architectural interiors.
---

# Neoclassical Hall UI

Use this skill to design and implement dignified, proportionate interfaces inspired by the late-18th-century European neoclassical hall: fluted marble columns with Ionic or Corinthian capitals, pediment triangles with relief sculpture, strict bilateral symmetry, laurel wreath ornaments, plaster ceiling rose medallions, geometric floor patterns in checkerboard or Greek key, and clean white plaster surfaces that communicate rational order and classical grandeur.

## Non-Negotiable Foundations

- Neoclassical Hall design is defined by RATIONAL ORDER and CLASSICAL PROPORTION: every element follows mathematical ratios, bilateral symmetry, and the restrained dignity of Greco-Roman architecture.
- White marble and plaster dominate all surfaces: clean veined stone, smooth plaster ceilings, and bright architectural whites that communicate rational clarity rather than baroque drama.
- Columns are structural and decorative: fluted vertical shafts with Ionic volutes or Corinthian acanthus capitals that frame content sections and establish vertical rhythm.
- Pediments crown the composition: classical triangular gables with relief sculpture that serve as header containers or section terminators.
- Strict bilateral symmetry governs layout: left mirrors right, content is centered, and asymmetry is avoided except within relief sculpture.
- Laurel wreaths are the recurring decorative motif: circular or semicircular wreaths of stylized leaves that frame logos, medallions, and achievement markers.
- Ceiling roses are ornamental focal points: concentric plaster rings with acanthus and egg-and-dart molding that anchor overhead lighting or section headers.
- Geometric floor patterns ground the composition: black-and-white checkerboard, Greek key meander, or guilloche borders that establish order at the base.
- Typography is rational and inscribed: Roman square capitals, clean Didone serifs, and geometric proportion — no flourishes, no cursive, no ornament beyond the letterform itself.

## Core Material Recipes

### 1) Marble Column

Fluted vertical shaft with Ionic volute capital and simple base.

- Column shaft: `bg-gradient-to-b from-[#f0ece4] via-[#ece8e0] to-[#e8e4dc] w-8 h-full rounded-sm` (warm marble white shaft).
- Fluting: repeating `bg-[repeating-linear-gradient(90deg,rgba(0,0,0,0.04)_0px,rgba(0,0,0,0.04)_2px,transparent_2px,transparent_6px)]` for vertical flute channels.
- Shaft highlight: `bg-[linear-gradient(90deg,rgba(255,255,255,0.15)_0%,transparent_20%,rgba(255,255,255,0.08)_50%,transparent_80%,rgba(255,255,255,0.12)_100%)]` for cylindrical light catch.
- Shaft veining: SVG with `stroke-[#d8d0c8] stroke-[0.3px] fill-none opacity-50` as irregular diagonal paths.
- Ionic capital: SVG with `fill-[#f0ece4]` scroll volutes and `stroke-[#d8d0c8] stroke-[0.5px]` outlines.
- Abacus block: `bg-[#ece8e0] h-2 w-10 mx-auto rounded-[1px]` flat rectangular block atop volutes.
- Column base: `bg-[#ece8e0] h-3 w-10 mx-auto rounded-b-sm shadow-[0_2px_4px_rgba(0,0,0,0.08)]` for plinth.
- Full: `relative flex flex-col items-center w-8`

### 2) Pediment Triangle

Classical triangular gable with tympanum relief and cornice molding.

- Pediment body: CSS triangle using `border-l-[120px] border-r-[120px] border-b-[80px] border-l-transparent border-r-transparent border-b-[#f0ece4]` for the gable form.
- Tympanum ground: `bg-[#ece8e0]` flat field within the triangle for relief sculpture.
- Relief figures: SVG with `fill-[rgba(200,192,180,0.4)]` classical figure outlines within the tympanum.
- Cornice molding: bottom `h-3 bg-gradient-to-b from-[#e8e4dc] to-[#f0ece4] shadow-[0_2px_4px_rgba(0,0,0,0.08)]` for the horizontal cornice beam.
- Acroterion: `bg-[#f0ece4] w-4 h-4 rounded-full` small ornament at apex and pediment corners.
- Raking cornice: diagonal `border-l-[120px] border-r-[120px] border-b-[3px] border-l-transparent border-r-transparent border-b-[#d8d0c8]` for molded edge.
- Full: `relative flex flex-col items-center`

### 3) Symmetry Grid

Strict bilateral layout with mirrored columns and centered content.

- Container: `grid grid-cols-[1fr_minmax(0,2fr)_1fr] gap-0 items-stretch` for column-content-column symmetry.
- Left column: `bg-[#f0ece4] border-r border-[#d8d0c8]` with fluting texture.
- Right column: `bg-[#f0ece4] border-l border-[#d8d0c8]` with fluting texture (mirror of left).
- Center content: `bg-white px-12 py-8` clean bright content area.
- Divider lines: `border-x border-[#d8d0c8]` between columns for architectural separations.
- Entablature top: `h-6 bg-gradient-to-b from-[#f0ece4] to-[#ece8e0] border-b border-[#d8d0c8]` horizontal beam across all columns.
- Plinth base: `h-4 bg-[#ece8e0] border-t border-[#d8d0c8]` horizontal base across all columns.
- Three-column variant: `grid grid-cols-[100px_1fr_100px]` for narrow column framing.
- Five-column variant: `grid grid-cols-[60px_1fr_80px_1fr_60px]` for double-column framing.
- Full: `grid grid-cols-[1fr_minmax(0,2fr)_1fr] gap-0 items-stretch min-h-[400px]`

### 4) Laurel Wreath SVG

Circular or semicircular wreath of stylized laurel leaves framing a central element.

- Wreath leaves: SVG with `fill-[#4a7a3a]` paired lanceolate leaves arranged in circular arc.
- Leaf veins: `stroke-[#3a6a2a] stroke-[0.3px] fill-none` central vein on each leaf.
- Berry accents: `fill-[#5a8a4a]` small oval berries between leaf pairs.
- Wreath ribbon: `fill-[#c4a043]` ribbon trailing from wreath bottom with slight curl.
- Shadow: `filter: drop-shadow(1px 2px 3px rgba(74,122,58,0.2))` for depth on white surface.
- Inner space: transparent center for logo, monogram, or text placement.
- Semicircle variant: half-wreath for headers with `overflow-hidden` on bottom half.
- Full: `relative inline-flex items-center justify-center`

### 5) Fluted Shaft Vertical Divider

Tall fluted column segment used as vertical section divider between content areas.

- Shaft body: `bg-gradient-to-r from-[#e8e4dc] via-[#f0ece4] to-[#e8e4dc] w-1 h-full` for narrow column divider.
- Fluting lines: `bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.03)_0px,rgba(0,0,0,0.03)_1px,transparent_1px,transparent_4px)]` for micro-fluting.
- Capital top: `h-4 bg-[#f0ece4] rounded-t-sm shadow-[0_-1px_2px_rgba(0,0,0,0.05)]` for simplified capital.
- Base bottom: `h-4 bg-[#ece8e0] rounded-b-sm shadow-[0_1px_2px_rgba(0,0,0,0.05)]` for simplified base.
- Veining: SVG `stroke-[#d8d0c8] stroke-[0.2px] fill-none opacity-40` diagonal marble veins.
- Full: `relative flex flex-col items-center w-1 h-full`

### 6) Plaster Ceiling Rose

Concentric plaster molding rings with acanthus and egg-and-dart decoration.

- Outer ring: `bg-[#f0ece4] w-48 h-48 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.06)]` for base medallion.
- Acanthus ring: SVG with `fill-[#e8e0d0]` acanthus leaf forms arranged radially.
- Egg-and-dart: SVG with `fill-[#ece8e0]` alternating egg shapes and dart points in concentric band.
- Inner ring: `bg-[#f5f0e0] w-24 h-24 rounded-full shadow-[inset_0_1px_4px_rgba(0,0,0,0.05)]` for inner medallion.
- Central rosette: SVG with `fill-[#e8e0d0]` petal forms radiating from center point.
- Light fixture point: `bg-[#c4a043] w-3 h-3 rounded-full shadow-[0_0_8px_rgba(196,160,67,0.3)]` gold drop at center.
- Concentric ring texture: `bg-[radial-gradient(circle,transparent_30%,rgba(0,0,0,0.02)_31%,rgba(0,0,0,0.02)_33%,transparent_34%)]` repeated for plaster ring shadows.
- Full: `relative flex items-center justify-center`

### 7) Geometric Floor Pattern

Black-and-white checkerboard or Greek key meander at page base.

- Checkerboard: `bg-[repeating-conic-gradient(#1a1a1a_0%_25%,#f0ece4_0%_50%)] bg-[length:40px_40px]` for classic black-and-white floor tiles.
- Tile edge: `shadow-[inset_0_0_0_0.5px_rgba(138,138,138,0.3)]` for subtle grout lines between tiles.
- Greek key border: SVG meander pattern with `stroke-[#1a1a1a] stroke-[2px] fill-none` as continuous right-angle spiral.
- Guilloche border: SVG interlocking circles with `stroke-[#c4a043] stroke-[1px] fill-none` for ornamental floor border.
- Tile polish: `bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,transparent_50%)]` for polished stone reflectance.
- Shadow on floor: `bg-[radial-gradient(ellipse,rgba(0,0,0,0.06)_0%,transparent_70%)]` for column or furniture shadow.
- Alternative dark floor: `bg-[repeating-conic-gradient(#1a1a1a_0%_25%,#3a3a3a_0%_50%)] bg-[length:40px_40px]` for darker stone.
- Full: `relative overflow-hidden h-32`

### 8) Egg-and-Dart Molding Border

Classical architectural molding used as horizontal divider between sections.

- Molding base: `h-3 bg-gradient-to-b from-[#f0ece4] to-[#ece8e0]` plaster molding bar.
- Egg forms: SVG repeating `fill-[#e8e0d0]` ovals at regular intervals.
- Dart points: SVG repeating `fill-[#d8d0c8]` triangular points between eggs.
- Shadow line: `shadow-[0_1px_2px_rgba(0,0,0,0.06)]` below molding for depth.
- Alternative gold: eggs `fill-[#c4a043]` and darts `fill-[#a08030]` for gilded molding variant.
- Full: `relative w-full h-3`

## Color Palette System

### Core Neoclassical Hall Palette

| Color | Hex | Role |
|---|---|---|
| Marble White | `#f0ece4` | Primary surface, column shafts, pediments, ceiling |
| Marble Veined | `#d8d0c8` | Veining, secondary surfaces, shadow tones |
| Plaster Cream | `#f5f0e0` | Ceiling rose, plaster surfaces, warm whites |
| Gold Accent | `#c4a043` | Laurel wreath ribbons, ceiling rose fixture, molding gilding |
| Laurel Green | `#4a7a3a` | Laurel wreath leaves, botanical accents |
| Floor Black | `#1a1a1a` | Checkerboard tiles, Greek key meander, dark contrasts |
| Shadow Gray | `#8a8a8a` | Architectural shadows, grout lines, depth |
| Ceiling Rose | `#e8e0d0` | Medallion rings, relief sculpture, muted plaster |
| Column Highlight | `#faf8f4` | Brightest marble surfaces, shaft highlights |
| Gold Dark | `#a08030` | Aged gold, deep gilding, dart points |
| Laurel Dark | `#3a6a2a` | Leaf veins, deeper botanical tones |
| Relief Shadow | `#c8c0b0` | Tympanum relief, carved shadow, depth |
| Cornice | `#ece8e0` | Molding surfaces, entablature, plinth |
| Pediment Base | `#e0dcd4` | Pediment tympanum ground, subtle stone |

Rules: Marble white is the universal ground — it appears on columns, pediments, ceilings, and all architectural surfaces. Gold accent appears sparingly on laurel ribbons, ceiling fixtures, and molding highlights — it is restrained compared to baroque or rococo. Laurel green provides the only chromatic color besides gold — it appears exclusively in wreath ornaments and botanical accents. Floor black provides the grounding contrast in checkerboard or meander patterns. The palette reads as a public hall of rational order — bright, white, proportionate, and dignified.

## Typography Recommendations

Neoclassical Hall typography is inscribed, geometric, and rational:

- **Display headings:** Cinzel, Trajan Pro, or Playfair Display SC (Roman inscriptional capitals, clean monumental serifs).
- **Inscriptional:** Cinzel Decorative or IM Fell DW Pica (engraved letterforms fit for stone carving).
- **Body:** EB Garamond, Libre Baskerville, or Lora (clean high-contrast serif with classical proportion).
- **Labels and captions:** `font-serif uppercase tracking-[0.2em] text-[#8a8a8a]` for gray inscribed label treatment.
- **Monogram accent:** `font-serif text-[#c4a043] text-6xl font-bold` for gold monogram within laurel wreath.
- **Engraved text effect:** `text-[#3a3a3a] font-serif font-semibold` with `text-shadow: 1px 1px 0 rgba(255,255,255,0.8), -1px -1px 0 rgba(0,0,0,0.05)` for stone-carved letterform depth.
- Use regular to semibold weight — neoclassical is clear and readable, not delicate or heavy.
- Avoid script, cursive, and decorative fonts — neoclassical is rational, not ornamental in its letterforms.
- UPPERCASE treatment is strongly encouraged for headings — mimicking Roman inscriptional tradition.
- Tracking (letter-spacing) should be generous (0.1em-0.2em) for inscriptional clarity.

## Component Architecture Pattern

1. White marble or plaster background as the ambient ground.
2. Bilateral symmetry grid with fluted columns flanking centered content.
3. Pediment triangle as header or section terminator.
4. Egg-and-dart molding as section divider.
5. Laurel wreath medallions framing logos, badges, or monograms.
6. Plaster ceiling rose as atmospheric overhead element.
7. Greek key or checkerboard floor at page base.
8. Gold accent sparingly on laurel ribbons, molding highlights, and fixture points.
9. Clean white content surfaces with subtle veining texture.
10. Inscribed uppercase typography throughout.

## Interaction Rules

- Default state: dignified, ordered, proportionate — like entering a public hall of governance or scholarship.
- Hover: marble surfaces brighten subtly, gold accents catch light.
  - `hover:shadow-[0_2px_12px_rgba(138,138,138,0.15)] hover:brightness-103 transition-all duration-250`.
- Active: `active:scale-[0.99] active:brightness-97` (subtle press with stone-like resistance).
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#c4a043] focus:ring-offset-2 focus:ring-offset-[#f0ece4]` (gold ring with marble offset).
- Transitions: `transition-all duration-250 ease-in-out` (crisp, measured, proportional — like stone settling into place).
- Laurel growth: on section enter, wreath leaves animate with `animate-[grow_0.8s_ease-out]` — leaves scale from 0 to 1 in sequence.
- Column rise: on page load, fluted columns animate with `animate-[rise_1s_ease-out]` — columns translate upward from base by 20px.
- Pediment set: on header appear, pediment triangle fades in with `animate-[set_0.6s_ease-in]` — opacity from 0 to 1 with slight downward settle.

## Reusable Tailwind Tokens

- Marble surface: `bg-[#f0ece4] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]`
- Fluted column: `bg-gradient-to-b from-[#f0ece4] via-[#ece8e0] to-[#e8e4dc] w-8 rounded-sm` with fluting overlay
- Pediment triangle: CSS `border-l-[120px] border-r-[120px] border-b-[80px] border-l-transparent border-r-transparent border-b-[#f0ece4]`
- Laurel wreath: SVG `fill-[#4a7a3a]` with `filter: drop-shadow(1px 2px 3px rgba(74,122,58,0.2))`
- Ceiling rose: `bg-[#f0ece4] w-48 h-48 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.06)]` with concentric rings
- Checkerboard floor: `bg-[repeating-conic-gradient(#1a1a1a_0%_25%,#f0ece4_0%_50%)] bg-[length:40px_40px]`
- Greek key border: SVG meander with `stroke-[#1a1a1a] stroke-[2px] fill-none`
- Egg-and-dart: SVG repeating eggs `fill-[#e8e0d0]` and darts `fill-[#d8d0c8]`
- Gold text: `text-transparent bg-clip-text bg-gradient-to-b from-[#c4a043] to-[#a08030]`
- Inscribed text: `font-serif uppercase tracking-[0.2em] text-[#3a3a3a]`
- Stone shadow: `shadow-[0_2px_8px_rgba(138,138,138,0.12)]`
- Cornice molding: `h-6 bg-gradient-to-b from-[#f0ece4] to-[#ece8e0] border-b border-[#d8d0c8]`
- Plinth base: `h-4 bg-[#ece8e0] border-t border-[#d8d0c8]`
- Relief shadow: `fill-[rgba(200,192,180,0.4)]` for tympanum sculpture depth

## Quality Checklist (must pass)

- Marble white (#f0ece4) is the dominant surface color — the hall reads as bright, white, and rational.
- Bilateral symmetry is maintained in all grid layouts — left column mirrors right column exactly.
- Fluted columns appear at section boundaries with visible flute channels and cylindrical highlight.
- Pediment triangles crown headers or section terminators with visible tympanum relief.
- Laurel wreaths frame logos, badges, or monograms with recognizable leaf-and-berry structure.
- Egg-and-dart molding divides sections with visible alternating egg and dart pattern.
- Checkerboard or Greek key floor pattern grounds the composition at the base.
- Gold accent (#c4a043) appears sparingly — only on laurel ribbons, ceiling fixtures, and molding highlights.
- Typography is inscribed uppercase serif with generous tracking — no script, no cursive, no decorative.
- The mood reads as a public hall of governance — dignified, proportionate, rational — not a private chamber.
- Plaster ceiling rose appears as overhead atmospheric element with concentric ring structure.
- Shadows are cool gray (#8a8a8a) — never warm, never colored — maintaining architectural neutrality.

## Anti-Patterns

- Dark, dramatic, or moody backgrounds (neoclassical hall is bright, white, and rational).
- Sans-serif typography (Roman inscriptional serif is non-negotiable).
- Asymmetric layouts or casual alignment (bilateral symmetry is the architectural law).
- Cursive, script, or decorative fonts (neoclassical typography is inscribed, not handwritten).
- Warm brown, pink, or pastel color palettes (neoclassical is marble white, plaster cream, floor black — not boudoir pastels).
- Heavy gold gilding on every surface (gold is restrained to accents — this is not baroque).
- Missing column elements (fluted shafts are the defining structural motif).
- Missing pediment or triangular gable element (pediments crown the neoclassical composition).
- Curved or organic ornamental patterns (neoclassical uses geometric, linear, and mathematical forms).
- Floral bouquets or botanical decoration beyond laurel (no roses, no ribbons, no pastoral scenes).
- Flat white surfaces without veining or plaster texture (marble has veins, plaster has subtle grain).
- Modern materials like glass, steel, or plastic (neoclassical is marble, plaster, gold, laurel — period materials only).
- Missing floor pattern or grounding element (the geometric floor is essential architectural foundation).
- Ornate scrollwork or C-scroll decoration (neoclassical rejects rococo excess — clean lines only).
- Casual or lowercase heading text (UPPERCASE inscriptional treatment is the neoclassical standard).

## Accessibility Considerations

- Marble white (#f0ece4) backgrounds with dark text (#1a1a1a) provide excellent contrast (16.8:1 ratio, WCAG AAA) — this is the primary readable combination.
- Gold accent text (#c4a043) on marble white is below 4.5:1 for body text — reserve for large display text (18pt+), decorative elements, or use on darker surfaces.
- Floor black (#1a1a1a) with marble white text provides excellent contrast (16.8:1, WCAG AAA).
- Gray text (#8a8a8a) on marble white is approximately 3.2:1 — avoid for body text; use only for decorative captions at 14pt+.
- Checkerboard floor patterns may cause visual discomfort for some users — provide a solid-color alternative or reduce contrast between tiles.
- Laurel green (#4a7a3a) on marble white provides adequate contrast (4.8:1, WCAG AA) for body text.
- Focus states: `focus:ring-2 focus:ring-[#c4a043] focus:ring-offset-2` with marble offset for clear visibility on light surfaces.
- Ornamental SVGs (columns, pediments, wreaths, ceiling roses, Greek key, egg-and-dart) must be `aria-hidden="true"`.
- Column rise and pediment set animations must respect `prefers-reduced-motion` — disable entrance animations when the user requests reduced motion.
- Symmetry grid must be responsive — collapse to single column on narrow screens while maintaining visual proportion.
- Touch targets on ornate elements must account for decorative padding that may extend beyond the interactive area — ensure minimum 44x44px touch target.
- Laurel wreath illustrations require descriptive alt text or aria-labels for screen reader context.
- Greek key and checkerboard patterns must not be used as the sole means of conveying information — supplement with text labels.
- The bright, high-key aesthetic may cause discomfort for photosensitive users in rapidly scrolling contexts — avoid large areas of pure white (#ffffff) adjacent to pure black (#000000) in motion.
