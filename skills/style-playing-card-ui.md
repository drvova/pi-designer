---
name: playing-card-ui
description: Build playing card UI components (court card faces with K/Q/J, pip layouts with suit symbols, ornate card-back filigree patterns, card shuffle and flip animations, corner indices, Bicycle/Rider-Waite aesthetic) with crisp card frames, symmetric ornamental borders, and the refined geometry of a standard 52-card deck. Trigger this skill when the user asks for playing card design, card face UI, card back pattern, court card layout, pip layout, Bicycle aesthetic, Rider-Waite cards, card flip animation, or standard deck interfaces.
---

# Playing Card UI

Use this skill to design and implement crisp, geometrically precise interfaces inspired by a standard 52-card deck: corner indices with rank and suit, symmetric pip layouts, ornate court card faces, filigree card backs, and the satisfying 3D flip that reveals a hidden face.

## Non-Negotiable Foundations

- Playing card UI is about PRECISION and SYMMETRY: every element aligns to the standard deck grid — corner indices mirror top-left to bottom-right (rotated 180 degrees).
- The card frame is always white `#f8f5f0` with a thin black hairline border and rounded corners; the surface has a subtle paper-grain texture.
- Suits follow strict color rules: hearts and diamonds are red `#c41e1e`; spades and clubs are black `#1a1a1a`. Never mix.
- Court cards (K, Q, J) feature a central SVG silhouette framed by ornamental borders; pip cards (A, 2-10) display suit symbols in standard grid positions.
- Card backs are symmetric filigree patterns in a single dominant hue (blue `#1a2a5a` or red `#8a1010`) with gold `#c4a043` accents.
- The card flip is a 3D `rotateY` transform on the X axis with `transform-style: preserve-3d` and a `perspective` parent.
- Corners are gently rounded but never pill-shaped — a playing card has a specific `rounded-[6px]` geometry.
- Typography uses a clean slab or serif for ranks; the feel is Bicycle / Rider-Waite printed precision.

## Core Material Recipes

### 1) Card Frame

The base card surface every face builds on.

- Container: `w-48 h-72 rounded-[6px] bg-[#f8f5f0] border border-[#1a1a1a]/80 shadow-[0_4px_12px_rgba(0,0,0,0.25)] overflow-hidden relative`.
- Paper grain texture: `bg-[radial-gradient(rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:3px_3px]`.
- Inner border frame: add a child `div` with `absolute inset-[6px] border border-[#1a1a1a]/15 rounded-[3px]`.

### 2) Corner Index

Rank and suit in the top-left and mirrored bottom-right.

```html
<!-- Top-left index -->
<div class="absolute top-1.5 left-2 flex flex-col items-center leading-none">
  <span class="text-[#c41e1e] text-lg font-serif font-bold">A</span>
  <span class="text-[#c41e1e] text-sm leading-none">&#9829;</span>
</div>
<!-- Bottom-right index (rotated 180) -->
<div class="absolute bottom-1.5 right-2 flex flex-col items-center leading-none rotate-180">
  <span class="text-[#c41e1e] text-lg font-serif font-bold">A</span>
  <span class="text-[#c41e1e] text-sm leading-none">&#9829;</span>
</div>
```

- Red suits: `text-[#c41e1e]`. Black suits: `text-[#1a1a1a]`.
- Rank font: `font-serif font-bold` (Playfair Display or slab serif).
- Suit HTML entities: hearts `&#9829;`, diamonds `&#9830;`, spades `&#9824;`, clubs `&#9827;`.

### 3) Central Court Figure (K / Q / J)

Ornamental central SVG silhouette for face cards.

- Wrapper: `absolute inset-0 flex items-center justify-center`.
- Ornamental border ring inside card: `w-[70%] h-[75%] border-2 border-[#c4a043] rounded-[4px] flex items-center justify-center bg-[#f8f5f0]`.
- Court SVG (stencil silhouette):

```html
<svg viewBox="0 0 100 140" class="w-full h-full" fill="#1a1a1a">
  <!-- Crown -->
  <path d="M30,30 L35,15 L42,28 L50,12 L58,28 L65,15 L70,30 Z"/>
  <!-- Face -->
  <ellipse cx="50" cy="42" rx="14" ry="16"/>
  <!-- Body / robe -->
  <path d="M28,70 Q50,55 72,70 L80,120 L20,120 Z"/>
  <!-- Scepter -->
  <rect x="67" y="50" width="3" height="70" fill="#c4a043"/>
  <circle cx="68.5" cy="50" r="5" fill="#c4a043"/>
</svg>
```

- Suit color tint: swap `fill="#1a1a1a"` to `#c41e1e` for hearts/diamonds court cards.
- Gold ornamental frame always `#c4a043`.

### 4) Pip Layout Grid

Standard pip positions for number cards (2-10).

- Center container: `absolute inset-0 flex flex-col items-center justify-center`.
- Each pip: `text-2xl leading-none` with suit color.
- Standard pip grid (top half shown; bottom mirrors rotated 180):

| Card | Pip Positions (top-half columns/rows) |
|---|---|
| 2 | center-top, center-bottom |
| 3 | center-top, center-center, center-bottom |
| 4 | four corners |
| 5 | four corners + center |
| 6 | two columns of three |
| 7 | two columns of three + center-top |
| 8 | two columns of three + center-top + center-bottom |
| 9 | three columns of three |
| 10 | three columns of three + center gaps |

- Layout method: a 3-column flex column; each column `flex flex-col items-center justify-between`.
- Bottom-half pips are wrapped in `rotate-180`.

### 5) Ornate Card Back

Symmetric filigree pattern in a single dominant hue.

- Container: `rounded-[6px] bg-[#1a2a5a] overflow-hidden relative`.
- Border frame: `absolute inset-2 border-2 border-[#c4a043]/60 rounded-[4px]`.
- Filigree pattern (CSS radial dots + diamond grid):

```css
.card-back-pattern {
  background-color: #1a2a5a;
  background-image:
    radial-gradient(circle, #c4a04355 1px, transparent 2px),
    repeating-linear-gradient(45deg, transparent, transparent 8px, #c4a04322 8px, #c4a04322 9px),
    repeating-linear-gradient(-45deg, transparent, transparent 8px, #c4a04322 8px, #c4a04322 9px);
  background-size: 10px 10px, auto, auto;
}
```

- Tailwind equivalent: `bg-[#1a2a5a] bg-[radial-gradient(circle,#c4a04355_1px,transparent_2px)] bg-[size:10px_10px]`.
- Center medallion: a gold-bordered circle `w-16 h-16 rounded-full border-2 border-[#c4a043]` with an inner suit symbol or monogram.
- Red back variant: swap `#1a2a5a` for `#8a1010`.

### 6) Card Flip Animation

3D flip to reveal front from back.

- Parent wrapper sets perspective: `[perspective:1000px]`.
- Flipper: `relative w-48 h-72 transition-transform duration-500 [transform-style:preserve-3d]`.
- Flipped state: `rotateY-180` on the flipper.
- Front face: `absolute inset-0 [backface-visibility:hidden]`.
- Back face: `absolute inset-0 [backface-visibility:hidden] rotateY-180`.
- Trigger with Tailwind: toggle `rotateY-180` via group or JS state.

```html
<div class="[perspective:1000px]">
  <div class="relative w-48 h-72 transition-transform duration-500 [transform-style:preserve-3d] group-hover:rotateY-180">
    <!-- Front -->
    <div class="absolute inset-0 [backface-visibility:hidden]">
      <!-- card front content -->
    </div>
    <!-- Back -->
    <div class="absolute inset-0 [backface-visibility:hidden] rotateY-180">
      <!-- card back pattern -->
    </div>
  </div>
</div>
```

### 7) Card Spread / Fan

Multiple cards fanned in an arc.

- Container: `relative h-72` with each card `absolute` positioned.
- Each card rotated by incremental angle: `style="transform: rotate(-15deg)"` increasing per card.
- Transform origin: `origin-bottom` (cards fan from a point below).
- Overlap: each card offset `left` by 20-30px.

### 8) Rank Typography Accent

Large decorative rank for ace or featured cards.

- Center ace pip: `text-7xl text-[#c41e1e] flex items-center justify-center h-full` (or black for spades/clubs).
- Rank display font: `font-serif font-bold` (Playfair Display, Bodoni).

## Color Palette System

### Core Playing Card Palette

| Color | Hex | Role |
|---|---|---|
| Card White | `#f8f5f0` | Card face surface |
| Card Black | `#1a1a1a` | Spades/clubs, borders, court figures |
| Card Red | `#c41e1e` | Hearts/diamonds, court figures |
| Card-Back Blue | `#1a2a5a` | Blue card-back dominant hue |
| Card-Back Red | `#8a1010` | Red card-back dominant hue |
| Gold Accent | `#c4a043` | Ornamental trim, court frames |
| Cream Accent | `#fff8e8` | Highlight, inner frame fill |
| Soft Shadow | `#000000` (with opacity) | Card depth shadow |

Rules: White card + black/red suits is the law. Gold is reserved for court card ornamentation and card-back filigree only. Card backs commit to one dominant hue (blue or red) and never mix. The palette should feel like opening a fresh Bicycle deck — crisp, printed, precise.

## Typography Recommendations

- **Display/Rank:** Playfair Display, Bodoni, or slab serif (bold, printed precision).
- **Body:** Inter, DM Sans (clean sans for surrounding UI text).
- **Labels:** `font-serif font-bold uppercase tracking-wider` with red or black treatment.
- Court card names (K, Q, J): single bold serif letter, never abbreviated further.
- Typography should feel like typeset playing card printing — geometric, balanced, never handwritten.

## Interaction Rules

- Default: crisp, still, precise — a card lying flat on the table.
- Hover: subtle lift and shadow growth.
  - `hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(0,0,0,0.35)] transition-all duration-200`.
- Hover (flip variant): `group-hover:rotateY-180 transition-transform duration-500`.
- Active: `active:scale-95` (satisfying press, like pressing a card flat).
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#c4a043]/50` (gold ring).
- Transitions: `transition-all duration-200` for lift; `duration-500` for 3D flip.
- Shuffle animation: cards translate and rotate staggered with `transition-delay`.

## Reusable Tailwind Tokens

- Card frame: `w-48 h-72 rounded-[6px] bg-[#f8f5f0] border border-[#1a1a1a]/80 shadow-[0_4px_12px_rgba(0,0,0,0.25)]`.
- Corner index (red): `text-[#c41e1e] font-serif font-bold`.
- Corner index (black): `text-[#1a1a1a] font-serif font-bold`.
- Card back: `bg-[#1a2a5a] bg-[radial-gradient(circle,#c4a04355_1px,transparent_2px)] bg-[size:10px_10px]`.
- Gold trim: `border-2 border-[#c4a043]`.
- Flip parent: `[perspective:1000px]`.
- Flipper: `transition-transform duration-500 [transform-style:preserve-3d]`.
- Flip front: `[backface-visibility:hidden]`.
- Flip back: `[backface-visibility:hidden] rotateY-180`.

## Quality Checklist

- Corner indices in both top-left and bottom-right (rotated 180), never missing one.
- Suits follow strict red/black color rules (hearts/diamonds red, spades/clubs black).
- Card surface uses `#f8f5f0` card white, not pure `#ffffff`.
- Rounded corners are `rounded-[6px]`, not pill or sharp square.
- At least one 3D flip interaction demonstrating front/back reveal.
- Card back features a symmetric filigree pattern in blue or red with gold accents.
- Court cards (K, Q, J) have an ornamental gold-bordered central frame with SVG silhouette.
- Pip cards use the standard grid positions for their rank number.
- Rank typography uses serif/slab (never handwritten or neon).
- Border hairline is `#1a1a1a` at reduced opacity, never thick.
- The aesthetic reads as a physical printed playing card from a Bicycle deck.

## Anti-Patterns

- Pure white `#ffffff` card surface (playing cards are warm off-white `#f8f5f0`).
- Missing one corner index (every real card has both).
- Wrong suit colors (hearts are red, spades are black — never arbitrary).
- Mixing card-back hues (a deck commits to one dominant back color).
- Pill-shaped or oversized rounded corners (cards are `rounded-[6px]`).
- Neon glow or gradient fills on card faces (faces are matte printed).
- Handwritten or casual fonts for ranks (ranks are serif/slab, printed).
- Oversized thick borders (playing card borders are hairlines).
- Missing paper-grain texture (flat pure white looks digital, not printed).
- Neon or cyberpunk aesthetics (playing cards are classical print).
- Asymmetric card backs (backs must be rotationally symmetric filigree).
- Court cards without ornamental gold frame (court cards need gold trim).
- Missing `transform-style: preserve-3d` on the flipper (causes flat 2D flip bug).

## Accessibility Considerations

- Card white `#f8f5f0` with black `#1a1a1a` text passes WCAG AA easily (contrast ratio 15:1+).
- Red `#c41e1e` on card white passes AA for large text and bold labels.
- Gold `#c4a043` on card white fails AA for small text — restrict gold to decorative frames and large bold text only.
- Focus state: `focus:ring-2 focus:ring-[#c4a043]/50` (gold ring).
- Card flip must have a non-animated alternative: expose both faces on `prefers-reduced-motion` or render face-up by default.
- Decorative suit symbols and court SVG figures must be `aria-hidden="true"` when non-functional.
- Provide text alternatives: `aria-label="Ace of Hearts"` on card containers.
- 3D flip must not rely on hover alone — provide keyboard activation (`tabindex` + Enter/Space).
- Touch targets: card elements used as buttons need at least 44x44px tap area.
