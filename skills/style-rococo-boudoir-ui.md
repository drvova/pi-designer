---
name: rococo-boudoir-ui
description: Build rococo boudoir UI components (pastel silk walls, shell gold mirror frame, painted ceiling panel, porcelain figurine accent, chaise longue silhouette, rose bouquet decoration, ribbon bow ornament) with delicate pastel surfaces, ornate scrollwork, and the playful intimacy of rococo design. Trigger this skill when the user asks for rococo boudoir design, pastel silk and shell gold aesthetic, chaise longue UI, rose bouquet interface, porcelain figurine style, painted ceiling panel, ribbon bow decoration, French boudoir room, Rococo ornament, intimate salon design, delicate scrollwork interface, or powdered pastel aristocratic interiors.
---

# Rococo Boudoir UI

Use this skill to design and implement delicate, intimate interfaces inspired by the mid-18th-century French rococo boudoir: pastel silk wall coverings with luminous sheen, shell gold mirror frames with asymmetric scrollwork, painted ceiling panels depicting pastoral scenes, porcelain figurine accents, chaise longue silhouettes with curved upholstery, rose bouquet decorations, and ribbon bow ornaments that communicate playful refinement and aristocratic femininity.

## Non-Negotiable Foundations

- Rococo Boudoir design is defined by DELICATE INTIMACY and PLAYFUL OPULENCE: every surface whispers elegance rather than shouting grandeur. The boudoir is a private retreat for refined pleasure.
- Pastel silk dominates all surfaces: soft pink, powder blue, and pale green gradients with luminous sheen that catches light like real silk fabric under candlelight.
- Shell gold ornament frames content asymmetrically: not the heavy gilding of baroque, but lighter, curvilinear scrollwork with C-scrolls, S-scrolls, and shell motifs in warm antiqued gold.
- Painted ceiling panels occupy hero or upper regions: pastoral landscapes, cherubic figures, and floral garlands on soft blue grounds framed by delicate gold moldings.
- Porcelain figurines serve as accent punctuation: small white-and-pink figures with soft shadows placed at section transitions or card corners.
- Chaise longue silhouettes define content containers: curved upholstered forms with cabriole legs that hold text or cards like furniture holds cushions.
- Rose bouquets and ribbon bows are the recurring decorative motifs: SVG rose clusters and tied ribbon bows appear at heading terminations, card corners, and divider points.
- Typography is refined and curvaceous: transitional serifs with moderate contrast, cursive flourishes, and delicate weight that matches the pastel palette.
- The palette communicates powdered softness: pastel pink #f4c0d0, pastel blue #b0d0e8, pastel green #b0d8b0, shell gold #d4b868, porcelain white #f8f0f0, rose pink #d47088, silk sheen #f0e8f0, shadow soft #d0c0c8.

## Core Material Recipes

### 1) Pastel Silk Wall

Luminous silk wall covering with soft pastel gradient and woven sheen.

- Base silk: `bg-gradient-to-b from-[#f4c0d0] via-[#f0e8f0] to-[#b0d0e8]` (pink-to-blue silk gradient).
- Horizontal silk sheen: pseudo-element with `bg-[linear-gradient(90deg,rgba(255,255,255,0.12)_0%,transparent_30%,rgba(255,255,255,0.08)_50%,transparent_70%,rgba(255,255,255,0.1)_100%)]` for light-catching horizontal threads.
- Vertical weave: subtle `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_3px,rgba(255,255,255,0.04)_3px,rgba(255,255,255,0.04)_4px)]` for silk thread texture.
- Silk drape shadow: bottom `shadow-[0_4px_16px_rgba(208,192,200,0.4)]` for fabric weight.
- Pink variant: `bg-gradient-to-b from-[#f4c0d0] via-[#f8d0d8] to-[#f0c0c8]` for all-pink silk.
- Blue variant: `bg-gradient-to-b from-[#b0d0e8] via-[#c0d8f0] to-[#a0c8e0]` for all-blue silk.
- Green variant: `bg-gradient-to-b from-[#b0d8b0] via-[#c0e0c0] to-[#a0d0a0]` for all-green silk.
- Full: `bg-gradient-to-b from-[#f4c0d0] via-[#f0e8f0] to-[#b0d0e8] relative overflow-hidden p-8`

### 2) Shell Gold Mirror Frame

Asymmetric rococo scrollwork frame with shell motifs and curvilinear gold.

- Outer frame: `bg-gradient-to-br from-[#e8cc78] via-[#d4b868] to-[#c0a050] p-5 rounded-[1rem]` (warm shell gold with lighter gradient than baroque).
- Inner shadow: `shadow-[inset_0_2px_8px_rgba(0,0,0,0.15),0_6px_20px_rgba(0,0,0,0.2)]` (softer than baroque depth).
- C-scroll corners: four asymmetric SVG ornaments with `fill-[#c0a050]` curvilinear paths — NOT identical at each corner. Top-left C-scroll curves outward, top-right S-scroll curves inward, bottom-left shell motif, bottom-right trailing vine.
- Shell motif center: SVG scallop shell at frame midpoint with `fill-[#d4b868] stroke-[#c0a050] stroke-[0.5px]`.
- Mirror surface: `bg-gradient-to-b from-[#f8f0f0] via-[#f4e8f0] to-[#f0e0e8] rounded shadow-[inset_0_1px_6px_rgba(0,0,0,0.08)]` (warm porcelain-pink reflective surface).
- Frame patina: `opacity-[0.04]` noise overlay for antique shell gold aging.
- Full outer: `bg-gradient-to-br from-[#e8cc78] via-[#d4b868] to-[#c0a050] p-5 rounded-[1rem] shadow-[0_6px_20px_rgba(0,0,0,0.2)] relative`
- Full inner mirror: `bg-gradient-to-b from-[#f8f0f0] via-[#f4e8f0] to-[#f0e0e8] rounded shadow-[inset_0_1px_6px_rgba(0,0,0,0.08)]`

### 3) Painted Ceiling Panel

Pastoral ceiling painting with cherubic figures and floral garlands on soft blue.

- Sky ground: `bg-gradient-to-b from-[#c0d8f0] via-[#d0e0f4] to-[#e0e8f8]` (softer, more pastel sky than baroque fresco).
- Pastoral landscape: SVG with `fill-[rgba(120,160,80,0.2)]` rolling hills and `fill-[rgba(80,130,60,0.15)]` distant treelines.
- Cherub silhouettes: `fill-[rgba(220,180,160,0.2)]` soft round putti figures among clouds.
- Floral garland: SVG swag with `fill-[rgba(212,112,136,0.25)]` rose shapes and `fill-[rgba(76,150,76,0.2)]` leaf stems draped across composition.
- Cloud forms: SVG with `fill-[rgba(255,255,255,0.6)]` softer and more cottony than baroque clouds.
- Gold molding frame: `border-4 border-[#d4b868] shadow-[inset_0_0_0_1px_#c0a050]` (lighter, more delicate frame than baroque).
- Cornice detail: `border-t-[8px] border-t-[#f8f0f0] border-x-[8px] border-x-transparent` (slender cornice silhouette).
- Full: `bg-gradient-to-b from-[#c0d8f0] via-[#d0e0f4] to-[#e0e8f8] relative overflow-hidden rounded-lg`

### 4) Porcelain Figurine Accent

Small decorative figurine with soft shadows, used as section punctuation.

- Figurine body: SVG with `fill-[#f8f0f0]` (porcelain white base) and `stroke-[#d0c0c8] stroke-[0.5px]` for delicate outlines.
- Rosy cheeks: `fill-[#f4c0d0] opacity-40` small circles on face area.
- Painted details: `stroke-[#d47088] stroke-[0.3px] fill-none` for floral patterns on the figurine's gown.
- Soft shadow: `filter: drop-shadow(2px 3px 4px rgba(208,192,200,0.5))` for porcelain-on-silk grounding.
- Base pedestal: `bg-[#f0e0d0] rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.1)]` tiny rectangular base.
- Placement: positioned at section dividers, card corners, or sidebar accents with `absolute -top-3 -right-3 w-10 h-14`.
- Full: `relative inline-block`

### 5) Chaise Longue Content Container

Curved upholstered form holding content like furniture holds cushions.

- Upholstered body: `bg-gradient-to-b from-[#f0e8f0] via-[#ecd8e8] to-[#e0c8d8] rounded-t-[3rem] rounded-b-lg px-8 py-6` (silk-upholstered surface).
- Tufting: repeating `bg-[radial-gradient(circle_2px_at_center,rgba(180,160,170,0.2)_1px,transparent_2px)] bg-[length:24px_24px]` for button-tuft upholstery pattern.
- Rolled back: top `h-6 bg-gradient-to-b from-[#e8d0e0] to-[#f0e8f0] rounded-t-[3rem]` for curved bolster silhouette.
- Cabriole legs: two SVG legs at bottom with `fill-[#d4b868]` curving outward in the classic S-curve.
- Seat cushion shadow: `shadow-[0_4px_12px_rgba(180,140,160,0.3)]` for upholstered weight.
- Fabric piping: `border border-[#d0b8c8]` for piped edge detail along seat line.
- Alternative pink: `bg-gradient-to-b from-[#f8d8e0] via-[#f4c8d0] to-[#f0b8c8]` for rose-pink upholstery.
- Full: `bg-gradient-to-b from-[#f0e8f0] via-[#ecd8e8] to-[#e0c8d8] rounded-t-[3rem] rounded-b-lg px-8 py-6 shadow-[0_4px_12px_rgba(180,140,160,0.3)] relative`

### 6) Rose Bouquet Decoration

SVG rose cluster used as heading termination, card accent, or divider ornament.

- Rose bloom: SVG with layered petals using `fill-[#d47088]` outer petals, `fill-[#e890a0]` mid petals, `fill-[#f0a8b8]` inner petals.
- Rosebud: `fill-[#d47088] opacity-60` smaller closed bloom beside open rose.
- Leaves: `fill-[#6a9a5a]` and `fill-[#7ab060]` for two-tone foliage.
- Stem: `stroke-[#5a8a4a] stroke-[1.5px] fill-none` curving gently.
- Ribbon tie: `fill-[#f4c0d0]` ribbon wrapped around stem bundle with bow loops.
- Drop shadow: `filter: drop-shadow(1px 2px 3px rgba(180,120,140,0.3))` for depth.
- Placement: `absolute -bottom-4 right-4 w-12 h-16` at card corners or `mx-auto mt-4 w-16 h-8` as section divider.
- Full: `relative inline-block`

### 7) Ribbon Bow Ornament

Tied ribbon bow used as decorative element at headings, cards, and dividers.

- Bow loops: SVG with `fill-[#f4c0d0]` two symmetrical loops using cubic bezier curves.
- Bow tails: `fill-[#f0c0c8]` two ribbon tails hanging downward with slight curl.
- Center knot: `fill-[#d47088]` small oval at loop junction.
- Shadow: `filter: drop-shadow(1px 1px 2px rgba(208,160,176,0.4))` for ribbon depth.
- Satin sheen: pseudo-element overlay with `bg-[linear-gradient(180deg,rgba(255,255,255,0.2)_0%,transparent_40%,rgba(255,255,255,0.1)_60%,transparent_100%)]` for silk ribbon light catch.
- Size variants: `w-8 h-6` small, `w-12 h-9` medium, `w-16 h-12` large.
- Alternative gold ribbon: `fill-[#d4b868]` loops with `fill-[#c0a050]` tails for shell gold ribbon.
- Full: `relative inline-block`

### 8) Ornamental Scrollwork Border

Delicate rococo scrollwork line used as section divider or card border.

- Scroll line: SVG with `stroke-[#d4b868] stroke-[1px] fill-none` C-scroll and S-scroll curves.
- Shell terminals: small `fill-[#d4b868]` scallop shells at scroll endpoints.
- Central cartouche: `fill-[#f0e8f0] stroke-[#d4b868] stroke-[0.5px]` decorative frame at border midpoint.
- Floral accents: tiny `fill-[#d47088]` rosebuds at scroll junctions.
- Placement: `w-full h-8` horizontal divider, `h-full w-8 rotate-90` vertical divider.
- Full: `relative w-full flex items-center justify-center py-2`

## Color Palette System

### Core Rococo Boudoir Palette

| Color | Hex | Role |
|---|---|---|
| Pastel Pink | `#f4c0d0` | Primary silk wall, upholstery highlights, background ground |
| Pastel Blue | `#b0d0e8` | Secondary silk wall, sky panels, cool accent |
| Pastel Green | `#b0d8b0` | Tertiary accent, leaf elements, pastoral landscape |
| Shell Gold | `#d4b868` | Primary ornament, frame borders, scrollwork, cabriole legs |
| Porcelain White | `#f8f0f0` | Figurine body, mirror surface, bright neutral |
| Rose Pink | `#d47088` | Rose blooms, accent highlights, center knots, decorative pops |
| Silk Sheen | `#f0e8f0` | Upholstery base, light silk surface, card backgrounds |
| Shadow Soft | `#d0c0c8` | Soft shadows, muted outlines, depth without darkness |
| Shell Gold Light | `#e8cc78` | Gold gradient top, highlight gleam |
| Shell Gold Dark | `#c0a050` | Gold gradient bottom, aged patina |
| Upholstery Pink | `#e0c8d8` | Chaise longue shadow tones, cushion depth |
| Silk Pink Deep | `#f0b8c8` | Pink silk gradient bottom, fold shadows |
| Leaf Green | `#6a9a5a` | Rose leaves, pastoral foliage, organic elements |
| Leaf Green Light | `#7ab060` | Rose leaf highlights, bright foliage |
| Cornice Cream | `#f0e0d0` | Pedestal bases, warm architectural elements |
| Pastel Sky | `#c0d8f0` | Ceiling panel sky ground, painted upper regions |
| Ribbon Pink Light | `#f0a8b8` | Inner rose petals, satin ribbon highlights |

Rules: Pastel pink and pastel blue are the dominant surface colors — they appear on silk walls, upholstery, and backgrounds. Shell gold provides all ornamental accents — frames, scrollwork, cabriole legs — but in a lighter, more playful register than baroque gilding. Rose pink is the punctuation color for floral motifs and decorative emphasis. Porcelain white and silk sheen provide neutral breathing room. The palette reads as a private chamber where every surface is powdered, perfumed, and intimately beautiful.

## Typography Recommendations

Rococo Boudoir typography is refined, curvaceous, and delicate:

- **Display headings:** Cormorant SC, Playfair Display, or Libre Baskerville (transitional serifs with moderate contrast and elegant proportion).
- **Decorative headings:** Cinzel Decorative or IM Fell English (ornamental letterforms with historical character).
- **Body:** Cormorant Garamond, EB Garamond, or Crimson Pro (elegant high-contrast serif with rococo-era proportion).
- **Labels and captions:** `font-serif italic text-[#d4b868] tracking-[0.08em]` for shell gold italic label treatment.
- **Cursive flourishes:** `font-serif italic text-[#d47088]` for rose pink cursive emphasis on select words.
- **Engraved text effect:** `text-[#d4b868] font-serif` with `text-shadow: 1px 1px 0 #c0a050, 0 0 8px rgba(212,184,104,0.2)` for soft gold letterform glow.
- Prefer lighter font weights (300-400 for body, 600 for headings) — rococo is delicate, not heavy.
- Avoid slab serifs, geometric sans-serif, and monospaced fonts — none of these belong in the boudoir.
- Cursive and italic treatments are encouraged more than in baroque — rococo celebrates the flourish.

## Component Architecture Pattern

1. Pastel silk wall gradient as the ambient background layer.
2. Painted ceiling panel for hero or upper content regions.
3. Chaise longue containers for primary content blocks.
4. Shell gold mirror frames for highlighted content or images.
5. Ornamental scrollwork borders between sections.
6. Rose bouquet decorations at heading terminations and card corners.
7. Ribbon bow ornaments at interactive element labels.
8. Porcelain figurine accents at section transitions.
9. Soft pastel card surfaces with tufted upholstery texture.
10. Shell gold text accents on headings and interactive elements.

## Interaction Rules

- Default state: delicate, intimate, inviting — like entering a private boudoir chamber.
- Hover: surfaces brighten, gold ornament gleams softly, roses bloom slightly.
  - `hover:shadow-[0_4px_16px_rgba(212,184,104,0.25)] hover:brightness-105 transition-all duration-300 ease-out`.
- Active: `active:scale-[0.985] active:brightness-97` (gentle press with soft light shift).
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#d4b868] focus:ring-offset-2 focus:ring-offset-[#f0e8f0]` (shell gold ring with pastel offset).
- Transitions: `transition-all duration-300 ease-out` (smooth, gentle, unhurried — like silk sliding).
- Rose bloom: on hover, rose bouquet SVG petals animate with `animate-[bloom_0.6s_ease-out]` — petals scale from 0.9 to 1.0 with subtle rotation.
- Ribbon flutter: on hover, ribbon bow tails animate with `animate-[flutter_0.8s_ease-in-out]` — gentle tail sway of 2 degrees.
- Silk shimmer: on section enter, silk wall surfaces animate with `animate-[shimmer_2s_ease-in-out]` — a traveling highlight gradient from left to right.

## Reusable Tailwind Tokens

- Shell gold frame: `bg-gradient-to-br from-[#e8cc78] via-[#d4b868] to-[#c0a050] p-5 rounded-[1rem] shadow-[0_6px_20px_rgba(0,0,0,0.2)]`
- Silk wall pink: `bg-gradient-to-b from-[#f4c0d0] via-[#f0e8f0] to-[#b0d0e8]`
- Silk wall blue: `bg-gradient-to-b from-[#b0d0e8] via-[#c0d8f0] to-[#a0c8e0]`
- Chaise longue: `bg-gradient-to-b from-[#f0e8f0] via-[#ecd8e8] to-[#e0c8d8] rounded-t-[3rem] rounded-b-lg px-8 py-6`
- Porcelain surface: `bg-[#f8f0f0] shadow-[inset_0_1px_4px_rgba(0,0,0,0.06)]`
- Rose bloom: `text-[#d47088]` with SVG rose cluster
- Ribbon bow: `fill-[#f4c0d0]` SVG with `filter: drop-shadow(1px 1px 2px rgba(208,160,176,0.4))`
- Gold text: `text-transparent bg-clip-text bg-gradient-to-b from-[#e8cc78] via-[#d4b868] to-[#c0a050]`
- Soft shadow: `shadow-[0_4px_16px_rgba(208,192,200,0.4)]`
- Ceiling panel: `bg-gradient-to-b from-[#c0d8f0] via-[#d0e0f4] to-[#e0e8f8]`
- Tufted upholstery: `bg-[radial-gradient(circle_2px_at_center,rgba(180,160,170,0.2)_1px,transparent_2px)] bg-[length:24px_24px]`
- Scrollwork border: `stroke-[#d4b868] stroke-[1px] fill-none` SVG C-scroll pattern
- Rose pink accent: `text-[#d47088]`
- Pastel card: `bg-[#f0e8f0] rounded-xl shadow-[0_2px_8px_rgba(208,192,200,0.3)]`

## Quality Checklist (must pass)

- Shell gold (#d4b868) appears on all ornamental elements (frames, scrollwork, cabriole legs, accents) but in a lighter register than baroque gilding.
- Pastel silk gradients dominate surface backgrounds — pink, blue, and green silk sheens are visible.
- Painted ceiling panels appear in hero or upper regions with pastoral scenes and cherubic figures.
- Chaise longue containers hold primary content with visible tufting texture and cabriole legs.
- Rose bouquet decorations appear at heading terminations and card corners.
- Ribbon bow ornaments appear at interactive element labels and section dividers.
- Porcelain figurine accents appear at section transitions.
- Shell gold mirror frames are asymmetric — different scrollwork at each corner (not mirror-repeated).
- Typography is refined transitional serif throughout (lighter weight than baroque, more cursive flourishes).
- The mood reads as a private boudoir — delicate, intimate, powdered, playful — not a public salon.
- Scrollwork borders separate sections with C-scrolls and S-scrolls, not plain lines.
- Every surface has silk sheen, tufted texture, or porcelain smoothness — nothing is flat or matte.

## Anti-Patterns

- Heavy baroque gilding or deep velvet textures (rococo is lighter, softer, more playful than baroque).
- Sans-serif typography (transitional serif with cursive flourish is non-negotiable).
- Dark or dramatic backgrounds (rococo boudoir is pastel, bright, and airy).
- Symmetric identical scrollwork at all four frame corners (rococo celebrates asymmetry and organic curve).
- Flat untextured pastel surfaces (silk has sheen, upholstery has tufting, porcelain has smoothness).
- Missing gold ornament (shell gold scrollwork is the defining decorative element).
- Deep crimson, navy, or black colors (rococo palette is pastel pink, blue, green — never dark).
- Rigid geometric patterns (rococo uses organic curves, C-scrolls, S-scrolls, and shell motifs).
- Missing floral or botanical elements (roses, garlands, and pastoral greenery are essential).
- Modern glass, steel, or industrial materials (rococo is silk, porcelain, shell gold, painted plaster).
- Heavy slab-serif or geometric sans-serif fonts (curvaceous transitional serifs only).
- Blank borders without ornamental scrollwork (every border is decorated).
- Missing upholstery texture on furniture-form containers (chaise longues must show tufting).
- Monospace or code-style fonts anywhere (the boudoir has no place for terminal aesthetics).
- Flat single-color backgrounds without gradient silk sheen (every surface catches light).

## Accessibility Considerations

- Pastel pink (#f4c0d0) and pastel blue (#b0d0e8) backgrounds with dark text provide adequate contrast — verify all combinations at WCAG AA minimum. Pastel green (#b0d8b0) with dark text also passes AA.
- Shell gold text (#d4b868) on pastel backgrounds is often below 4.5:1 for body text — reserve for large display text (18pt+), decorative elements, or use on darker surfaces like rose pink (#d47088) grounds.
- Gold gradient text treatments can reduce contrast unpredictably — test each gradient combination at rendered size.
- Porcelain white (#f8f0f0) surfaces with dark text (#2a1a1a) provide strong contrast (14.2:1 ratio, WCAG AAA).
- Silk sheen and tufting textures must not reduce text legibility — maintain sufficient padding between text and decorative overlays.
- Soft shadow effects (#d0c0c8) are subtle and low-contrast — do not use them as the only means to convey interactive state changes.
- Focus states: `focus:ring-2 focus:ring-[#d4b868] focus:ring-offset-2` with pastel offset for visibility on light surfaces.
- Ornamental SVGs (scrollwork, roses, ribbons, figurines, ceiling paintings) must be `aria-hidden="true"`.
- Rose bloom and ribbon flutter animations must respect `prefers-reduced-motion` — disable decorative animations when the user requests reduced motion.
- Touch targets on ornate elements must account for decorative padding that may extend beyond the interactive area — ensure minimum 44x44px touch target.
- Porcelain figurine illustrations require descriptive alt text or aria-labels for screen reader context.
- The light pastel aesthetic may cause glare for photosensitive users — avoid rapidly oscillating pastel color transitions.
- Pastel color distinctions (pink vs. blue vs. green) must not be the sole means of conveying information — supplement with text labels or icons.
