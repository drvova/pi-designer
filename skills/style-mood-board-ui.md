---
name: mood-board-ui
description: Build mood board UI components (curated inspiration collage, torn paper edges, pushpin attachments, overlapping images, handwritten annotations, washi tape borders, color palette strip, mixed media arrangement) with layered collage layout, mixed media elements, and the creative energy of visual brainstorming. Trigger this skill when the user asks for mood board design, inspiration board UI, collage layout, scrapbook aesthetic, washi tape borders, pushpin accents, torn paper edges, creative brainstorming board, or mixed media arrangement.
---

# Mood Board / Creative Collage UI

Use this skill to design and implement vibrant, layered interfaces inspired by creative mood boards and scrapbook collages: torn paper edges, pushpin attachments, overlapping image cards, washi tape borders, handwritten annotations, color palette strips, and the energetic chaos of visual brainstorming pinned to a cork board.

## Non-Negotiable Foundations

Every mood board UI must adhere to these invariants:

1. **Physical board surface is visible.** Cork, linen, or textured wall background is always present. No flat digital-white canvases.
2. **Asymmetric overlap is mandatory.** Cards must overlap with intentional rotation — a perfectly aligned grid kills the collage energy.
3. **Tape and pins are functional decorations.** Washi tape strips and pushpins appear on every card, not as optional flair. They are how things are attached to a board.
4. **Handwritten annotations exist.** At least one Caveat-font scrawled note per view. The board is a working space, not a finished presentation.
5. **Semi-transparency in tape elements.** Washi tape must be translucent (`opacity-50-60`). Opaque tape strips look like solid dividers, not washi.
6. **Mixed sizes and orientations.** Cards vary in dimensions and rotation angles. Uniform sizing is the enemy of collage.

## Core Material Recipes

### 1) Torn Paper Edge Card

Card with irregular torn-paper silhouette via clip-path.

- Card body: `bg-[#f5f5f0] p-6 shadow-[2px_3px_10px_rgba(0,0,0,0.12)]` (off-white torn paper).
- Torn top edge: `clip-path: polygon(0% 4%, 3% 0%, 7% 3%, 12% 1%, 18% 4%, 25% 0%, 32% 3%, 40% 1%, 48% 4%, 55% 0%, 62% 3%, 70% 1%, 78% 3%, 85% 0%, 92% 4%, 97% 1%, 100% 3%, 100% 100%, 0% 100%)`.
- Torn bottom edge variant: `clip-path: polygon(0% 0%, 100% 0%, 100% 96%, 97% 100%, 93% 97%, 88% 100%, 82% 96%, 75% 100%, 68% 97%, 60% 100%, 52% 96%, 45% 100%, 38% 97%, 30% 100%, 22% 96%, 15% 100%, 8% 97%, 3% 100%, 0% 96%)`.
- All-edges torn variant: `clip-path: polygon(2% 4%, 8% 0%, 15% 3%, 25% 1%, 35% 4%, 45% 0%, 55% 3%, 65% 1%, 75% 3%, 85% 0%, 93% 3%, 98% 1%, 100% 5%, 97% 12%, 100% 25%, 98% 40%, 100% 55%, 97% 70%, 100% 82%, 98% 92%, 96% 97%, 90% 100%, 80% 97%, 70% 100%, 60% 96%, 50% 100%, 40% 97%, 30% 100%, 20% 96%, 10% 100%, 4% 97%, 0% 95%, 3% 85%, 0% 72%, 2% 60%, 0% 48%, 3% 35%, 0% 22%, 2% 10%)`.

### 2) Pushpin Accent

Small circle with drop shadow simulating a thumbtack.

- Pin head: `w-4 h-4 rounded-full bg-gradient-to-b from-[#e74c3c] to-[#c0392b] border border-[#a93226] shadow-[0_2px_4px_rgba(0,0,0,0.3)]` (red pushpin).
- Pin shaft shadow: `shadow-[0_4px_6px_-1px_rgba(0,0,0,0.15),0_2px_4px_-1px_rgba(0,0,0,0.1)]` on the parent card.
- Placement: `absolute -top-1.5 left-1/2 -translate-x-1/2 z-10`.
- Color variants: `from-[#3498db] to-[#2980b9]` (blue), `from-[#f1c40f] to-[#d4ac0d]` (yellow), `from-[#2ecc71] to-[#27ae60]` (green).

### 3) Overlapping Card Placement

Cards arranged with intentional rotation overlap.

- Card base: `relative` with z-index layering.
- Rotate variants: `rotate-[-2deg]`, `rotate-[1.5deg]`, `rotate-[-1deg]`, `rotate-[2.5deg]`.
- Overlap offset: `absolute` positioning with `top-4 left-8` / `top-8 left-16` / `top-2 right-4` etc.
- Z-index stacking: `z-10` (back), `z-20` (middle), `z-30` (front).
- Hover to front: `hover:z-40 hover:shadow-[4px_6px_20px_rgba(0,0,0,0.2)] transition-all duration-300`.

### 4) Washi Tape Border Strips

Semi-transparent colored tape holding cards in place.

- Tape base: `bg-[rgba(232,148,156,0.55)]` (pink washi) with subtle paper texture.
- Full strip: `h-6 w-32 -rotate-3 opacity-60` (slightly tilted, semi-transparent).
- Tape variants: `bg-[rgba(72,199,194,0.5)]` (teal), `bg-[rgba(212,175,55,0.5)]` (gold), `bg-[rgba(255,255,255,0.5)]` (white/translucent).
- Tape edges: `clip-path: polygon(2% 0%, 98% 2%, 100% 100%, 0% 98%)` (slightly uneven torn tape ends).
- Placement: `absolute -top-2 left-4 rotate-[-3deg]` across top edge of card, or `absolute top-1/2 -right-2 rotate-[90deg]` on side.
- Layered tape: stack two strips at different angles `rotate-[-3deg]` and `rotate-[2deg]` for realistic overlap.

### 5) Handwritten Annotation

Scrawled text notes pinned near cards.

- Font: `font-['Caveat',cursive] text-lg text-[#4a4a4a]` (pencil gray handwritten).
- Underline: `border-b border-dashed border-[#4a4a4a]/40` (quick pencil underline).
- Rotation: `rotate-[-5deg]` to `rotate-[3deg]` (annotations are never perfectly horizontal).
- Callout line: SVG or `border-l-2 border-dashed border-[#4a4a4a]/30 h-8 ml-2` connecting annotation to card.
- Annotation background: `bg-[#f5f5f0]/80 px-2 py-0.5` (slight paper backing for legibility).

### 6) Color Palette Dot Strip

Row of color swatches showing extracted palette.

- Container: `flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-[rgba(0,0,0,0.06)]`.
- Dot: `w-5 h-5 rounded-full border-2 border-white shadow-[0_1px_3px_rgba(0,0,0,0.15)]` with inline `bg-[#hex]`.
- Label: `text-[10px] font-mono text-[#4a4a4a]/70 uppercase tracking-wider` beneath each dot.
- Active/selected dot: `ring-2 ring-[#4a4a4a] ring-offset-2 ring-offset-white`.

### 7) Cork Board Background

Textured bulletin board surface.

- `bg-[#8a7a5a]` base color.
- Texture overlay: `bg-[radial-gradient(circle_at_20%_30%,rgba(120,105,70,0.4)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(100,88,58,0.3)_0%,transparent_40%),radial-gradient(circle_at_50%_50%,rgba(140,120,80,0.2)_0%,transparent_60%)]` (natural cork variation).
- Pin holes: tiny `w-1 h-1 rounded-full bg-[rgba(0,0,0,0.15)]` dots scattered randomly.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Cork Board | `#8a7a5a` | Background surface |
| Torn Paper White | `#f5f5f0` | Card / paper surfaces |
| Pencil Gray | `#4a4a4a` | Annotations, text, outlines |
| Washi Pink | `rgba(232,148,156,0.55)` | Tape accent (translucent) |
| Washi Teal | `rgba(72,199,194,0.5)` | Tape accent (translucent) |
| Washi Gold | `rgba(212,175,55,0.5)` | Tape accent (translucent) |
| Washi White | `rgba(255,255,255,0.5)` | Tape accent (translucent) |
| Pushpin Red | `#e74c3c` | Pin accent (primary) |
| Pushpin Blue | `#3498db` | Pin accent (secondary) |
| Warm Cream | `#f9f6f0` | Clean paper surface |

Rules: The cork board background grounds everything — the interface is a wall of pinned creative materials. Washi tape and pushpins are functional decorations that hold the collage together. Colors come from the pinned content, not from the UI itself. Translucency (washi tape, backdrop blur) creates the layered depth of real collage.

## Typography Recommendations

- **Display:** Caveat, Kalam (handwritten headings, annotation style).
- **Body:** Inter, DM Sans (clean readability under the collage).
- **Annotations:** `font-['Caveat',cursive] text-lg` (pencil-scrawled notes).
- **Labels:** `font-mono text-[10px] uppercase tracking-wider` (color palette labels, small tags).
- Typography should feel handwritten and spontaneous for annotations, but legible for content — like a designer's working board where messy notes surround curated images.

## Component Architecture Pattern

```
MoodBoard (cork board background)
  BoardHeader (title, annotation)
  CollageLayer
    OverlappingCard (z-10, rotated)
      Pushpin
      WashiTape (top edge)
      CardContent (image or color block)
    OverlappingCard (z-20, rotated opposite)
      Pushpin
      CardContent
    OverlappingCard (z-30, front)
      WashiTape (corner)
      CardContent
      HandwrittenAnnotation (floating nearby)
  PaletteStrip (color dots extracted from board)
  AnnotationCluster (scattered notes connecting ideas)
```

## Interaction Rules

- Cards on hover rise to front: `hover:z-40 hover:rotate-0 hover:shadow-[4px_6px_20px_rgba(0,0,0,0.2)] transition-all duration-300` (straightening out for closer look).
- Pushpins have a subtle press effect on click: `active:scale-95 active:shadow-[0_1px_2px_rgba(0,0,0,0.3)]`.
- Washi tape has a gentle flutter on card hover: `hover:rotate-[-1deg] transition-transform duration-500` (tape loosening slightly).
- Annotations appear on hover or tap: `opacity-0 group-hover:opacity-100 transition-opacity duration-300` (notes hidden until you look for them).
- New items added to the board should animate in with a drop-and-settle: keyframe from `translateY(-20px) rotate(5deg)` to `translateY(0) rotate(var(--rotation))`.
- Scroll behavior should be freeform or gently pannable, not rigidly grid-snapped.

## Reusable Tailwind Tokens

- Cork board: `bg-[#8a7a5a]` with radial-gradient texture overlay.
- Torn paper card: `bg-[#f5f5f0] shadow-[2px_3px_10px_rgba(0,0,0,0.12)]` with clip-path polygon.
- Pushpin: `rounded-full bg-gradient-to-b from-[#e74c3c] to-[#c0392b] border border-[#a93226] shadow-[0_2px_4px_rgba(0,0,0,0.3)]`.
- Washi tape: `bg-[rgba(232,148,156,0.55)] h-6 opacity-60 -rotate-3`.
- Handwritten text: `font-['Caveat',cursive] text-[#4a4a4a] rotate-[-5deg]`.
- Palette dot: `w-5 h-5 rounded-full border-2 border-white shadow-[0_1px_3px_rgba(0,0,0,0.15)]`.
- Overlap rotation: `rotate-[-2deg]` / `rotate-[1.5deg]` / `rotate-[-1deg]`.
- Card layering: `z-10` / `z-20` / `z-30` with `hover:z-40`.

## Quality Checklist

- Cork or textured board background visible.
- Asymmetric overlapping card layout with varied rotations.
- Washi tape semi-transparent on at least one card edge.
- Pushpin accents on cards (metallic gradient, shadow).
- Handwritten annotation in Caveat font near at least one card.
- Torn paper edges via clip-path on at least one card.
- Color palette dot strip visible.
- Mixed card sizes — no uniform grid.
- The aesthetic reads as mood board / scrapbook / inspiration wall.
- Everything feels handmade, layered, and creatively alive.

- At least one torn paper edge card with clip-path polygon.
- Pushpin accent on at least one card (realistic metallic gradient with shadow).
- At least one overlapping card arrangement with rotation.
- Washi tape strip(s) holding cards in place (semi-transparent, tilted).
- Handwritten annotation text near at least one card.
- Cork board or pinned-wall background texture.
- Color palette dot strip visible.
- Mixed media arrangement — varied card sizes and orientations.
- The aesthetic reads as mood board / scrapbook / creative inspiration wall.
- Everything feels handmade, layered, and creatively alive.

## Anti-Patterns

- Perfectly aligned grid layout (mood boards are intentionally uneven and overlapping).
- Flat opaque backgrounds on tape elements (washi tape is semi-transparent by nature).
- Missing pushpin accents (cards without pins look floating, not pinned).
- Rigid symmetrical arrangement (collage is asymmetric and spontaneous).
- No torn or irregular edges (rectangular cards look like a standard UI, not a collage).
- Sans-serif only with no handwritten elements (annotations are the soul of a mood board).
- Missing overlapping or z-index layering (flat cards lack collage depth).
- Uniform card sizes (mood boards use varied dimensions for visual energy).
- No background texture (plain backgrounds don't evoke a physical board).
- Color palette UI that feels digital and clinical (palette dots should feel like paint swatches).

## Accessibility Considerations

- Torn paper clip-paths are decorative only — card content remains fully accessible within standard rectangular bounds.
- Pushpins are visual embellishments with no interactive dependency.
- Washi tape transparency means underlying content is partially visible — ensure no critical text is covered by tape elements.
- Handwritten annotation text uses pencil gray `#4a4a4a` on cream `#f5f5f0` (ratio exceeds 7:1, meeting WCAG AAA).
- Overlapping cards use distinct z-index values and shadow depth so users can perceive layering even without color differentiation.
- Palette dot colors include `text-[10px] font-mono` hex labels beneath each dot for non-color identification.
- Hover-revealed annotations also remain accessible via keyboard focus: `focus-within:opacity-100`.
- Cork board background texture is subtle enough not to interfere with text legibility on cards.
