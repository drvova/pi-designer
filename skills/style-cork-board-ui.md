---
name: cork-board-ui
description: Build cork board / pinboard UI components (cork texture surfaces, pushpin markers, sticky notes, polaroid photos, index cards, paper scraps, draggable items) with physical pinboard aesthetics, warm cork textures, and the tactile feeling of a real-world notice board. Trigger this skill when the user asks for cork board, pinboard, sticky note board, notice board, physical pin board UI, or agile standup board interfaces.
---

# Cork Board / Pinboard UI

Use this skill to design and implement physical pinboard-inspired interfaces: warm cork textures, pushpin markers, sticky notes at various angles, polaroid photos, index cards, and the tactile, layered feeling of items pinned to a real-world notice board.

## Non-Negotiable Foundations

- The cork board IS the interface. The background is always cork texture, and all content items are "pinned" to it.
- Every item appears physically attached: pushpins, tape, or paper clips hold items to the board.
- Items are at slightly random rotations and positions — nothing is perfectly aligned. This creates the organic, human-curated feel.
- Layering creates depth: overlapping items cast shadows on each other and on the cork surface.
- Paper materials dominate: sticky notes, index cards, polaroid photos, receipts, and torn paper.
- The aesthetic is tactile, warm, and collaborative — like a team's physical agile board or a dorm room notice board.

## Core Material Recipes

### 1) Cork Texture Background

The foundational surface: a realistic cork board texture.

```css
.cork-bg {
  background-color: #c9a87c;
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(139,90,43,0.15) 0%, transparent 8%),
    radial-gradient(circle at 70% 60%, rgba(139,90,43,0.1) 0%, transparent 10%),
    radial-gradient(circle at 40% 80%, rgba(139,90,43,0.12) 0%, transparent 7%),
    radial-gradient(circle at 90% 20%, rgba(139,90,43,0.08) 0%, transparent 6%);
}
```

Tailwind approximation:
- `bg-[#c9a87c]` base color with SVG noise overlay for grain.

Or use a repeating dot pattern: `bg-[radial-gradient(rgba(139,90,43,0.1)_1px,transparent_1px)] bg-[size:4px_4px] bg-[#c9a87c]`.

### 2) Pushpin

3D realistic pushpin marker.

```html
<div class="absolute -top-2 left-1/2 -translate-x-1/2 z-20">
  <!-- Pushpin head -->
  <div class="w-5 h-5 rounded-full bg-gradient-to-br from-[#dc2626] to-[#991b1b] 
              shadow-[0_2px_4px_rgba(0,0,0,0.4),inset_0_-1px_2px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)]">
  </div>
  <!-- Pin shaft (visible below head) -->
  <div class="w-0.5 h-3 bg-[#666] mx-auto -mt-1"></div>
</div>
```

Pushpin color variants:
- Red: `from-[#dc2626] to-[#991b1b]`.
- Blue: `from-[#3b82f6] to-[#1d4ed8]`.
- Yellow: `from-[#facc15] to-[#ca8a04]`.
- Green: `from-[#22c55e] to-[#15803d]`.
- Silver: `from-[#e0e0e0] to-[#a0a0a0]`.

### 3) Sticky Note

Classic paper sticky note with slight rotation.

- `bg-[#fff9c4] p-4 shadow-[0_4px_8px_rgba(0,0,0,0.15)] rotate-[-2deg] relative w-48`.
- Text: `font-handwritten text-sm text-[#5a4a2a]`.
- Lines (optional): `bg-[repeating-linear-gradient(transparent,transparent_20px,rgba(0,0,0,0.05)_20px,rgba(0,0,0,0.05)_21px)]`.
- Color variants: Yellow `#fff9c4`, Pink `#ffcdd2`, Blue `#bbdefb`, Green `#c8e6c9`, Orange `#ffe0b2`.

### 4) Polaroid Photo

Framed photo with white border and caption space.

- `bg-white p-3 pb-12 shadow-[0_4px_8px_rgba(0,0,0,0.2)] rotate-[3deg]`.
- Image: `w-full aspect-square object-cover`.
- Caption: `font-handwritten text-sm text-[#5a4a2a] text-center mt-2`.

### 5) Index Card

Lined index card with punched hole.

- `bg-[#fffbe6] p-4 shadow-[0_2px_6px_rgba(0,0,0,0.12)] rotate-[-1deg] w-64`.
- Lines: `bg-[repeating-linear-gradient(transparent,transparent_24px,rgba(0,100,200,0.1)_24px,rgba(0,100,200,0.1)_25px)]`.
- Red margin line: `border-l-2 border-[#dc2626]/30 pl-4`.
- Optional punch hole: `before:absolute before:top-2 before:left-2 before:w-3 before:h-3 before:rounded-full before:bg-[#c9a87c] before:shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]`.

### 6) Paper Clip

Metal paper clip accent holding items together.

```html
<svg viewBox="0 0 20 40" class="absolute -top-2 left-4 w-5 h-10 z-20">
  <path d="M5,5 Q5,2 8,2 L12,2 Q15,2 15,5 L15,35 Q15,38 12,38 L10,38 Q8,38 8,35 L8,10 Q8,8 10,8 Q12,8 12,10 L12,30" 
        fill="none" stroke="#c0c0c0" stroke-width="1.5"/>
</svg>
```

### 7) Torn Paper Scrap

Irregular piece of torn paper with rough edge.

- `[clip-path:polygon(0_5%,15%_0,40%_3%,60%_0,85%_5%,100_2%,98%_30%,100%_60%,97%_100%,70%_98%,40%_100%,15%_97%,0_95%)]`.
- `bg-white p-4 shadow-[0_2px_6px_rgba(0,0,0,0.1)]`.

## Color Palette System

### Cork Board Palette

| Color | Hex | Role |
|---|---|---|
| Cork | `#c9a87c` | Board background |
| Cork Dark | `#a08560` | Cork shadows, texture |
| Sticky Yellow | `#fff9c4` | Sticky notes (classic) |
| Sticky Pink | `#ffcdd2` | Sticky notes (variant) |
| Sticky Blue | `#bbdefb` | Sticky notes (variant) |
| Sticky Green | `#c8e6c9` | Sticky notes (variant) |
| Paper White | `#ffffff` | Index cards, polaroids |
| Ink Black | `#1a1a1a` | Handwritten text |
| Sepia | `#5a4a2a` | Text on paper |
| Red Pin | `#dc2626` | Pushpin heads |
| Wood Frame | `#8b6914` | Optional wood frame border |

## Typography Recommendations

Cork board typography mimics handwriting and typing:

- **Handwritten headers:** Caveat, Permanent Marker, or Kalam (for sticky notes and captions).
- **Typed body:** Courier Prime, Special Elite (for index cards — typewriter style).
- **Bold labels:** Archivo Black, Oswald (for stamped or printed labels).
- **Marker accents:** Permanent Marker (for emphasis or annotations).
- The key is MIXING handwritten and typed fonts, as if different items were created by different people using different tools.

## Component Architecture Pattern

1. Cork texture background (the board).
2. Optional wooden frame border around the board.
3. Scattered items at various rotations: sticky notes, polaroids, index cards.
4. Pushpins or tape holding items in place.
5. Paper clips connecting related items.
6. Layered shadows (items casting shadows on cork and on each other).
7. Optional string/yarn connecting items (red yarn lines between pinned cards).

## Interaction Rules

- Default state: pinned to the board at a slight angle.
- Hover: item lifts slightly off the board (like picking it up to read).
  - `hover:scale-105 hover:rotate-0 hover:shadow-[0_12px_24px_rgba(0,0,0,0.2)] hover:z-10 transition-all duration-300`.
- Active: `active:scale-100 active:shadow-[0_2px_4px_rgba(0,0,0,0.1)]` (pressed flat).
- Drag (optional): items can be rearranged with spring physics.
- Focus: `focus:ring-4 focus:ring-[#dc2626] focus:ring-offset-4`.
- Transitions: `transition-all duration-300 ease-out`.

## Reusable Tailwind Tokens

- Cork bg: `bg-[#c9a87c]` with SVG noise or dot texture overlay.
- Sticky note: `bg-[#fff9c4] p-4 shadow-[0_4px_8px_rgba(0,0,0,0.15)] rotate-[-2deg]`
- Polaroid: `bg-white p-3 pb-12 shadow-[0_4px_8px_rgba(0,0,0,0.2)] rotate-[3deg]`
- Pushpin: `w-5 h-5 rounded-full bg-gradient-to-br from-[#dc2626] to-[#991b1b] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_2px_4px_rgba(0,0,0,0.4)]`
- Index card: `bg-[#fffbe6] p-4 shadow-[0_2px_6px_rgba(0,0,0,0.12)] rotate-[-1deg]`
- Paper lift: `hover:scale-105 hover:rotate-0 hover:shadow-[0_12px_24px_rgba(0,0,0,0.2)] hover:z-10 transition-all`

## Quality Checklist (must pass)

- Background is cork texture (warm, textured, not flat).
- Items are at slight rotations (not perfectly aligned).
- Pushpins or tape hold items to the board.
- At least three item types: sticky notes, polaroids, index cards.
- Items cast layered shadows (on cork and on overlapping items).
- Typography mixes handwritten and typed fonts.
- Paper textures feel physical (warm tones, subtle grain).
- Items have organic, hand-placed positioning (not grid-aligned).
- The aesthetic reads as a physical notice board or agile board.
- Optional: red string/yarn connecting related items.

## Anti-Patterns

- Flat solid background (cork board requires textured cork surface).
- Perfectly aligned grid layout (items should be at random angles and positions).
- Digital shadows (shadows should be soft and physical, like paper on a surface).
- Missing pushpins or tape (items must appear physically attached).
- Single consistent font (cork board mixes handwritten, typed, and printed).
- Clean digital aesthetic (cork board is tactile and slightly messy).
- Missing paper textures (sticky notes, index cards, and polaroids need paper warmth).
- Consistent item sizes (items should vary in size like a real board).
- Perfect rotations at exactly 0 degrees (use random -5 to +5 degree rotations).
- Missing layered depth (overlapping items create physical depth on the board).

## Accessibility Considerations

- Cork background with light paper items provides good contrast for text.
- Rotated items must not prevent touch interaction (hit areas should be accessible).
- Pushpins are decorative: `aria-hidden="true"`.
- Polaroid photos need `alt` text and `<figcaption>` for captions.
- Focus states must be bold: `focus:ring-4 focus:ring-[#dc2626]`.
- The scattered layout can confuse screen reader order — use semantic HTML landmarks.
- Handwritten fonts should maintain readability at 14px+ (some script fonts are hard to read).
- Drag interactions (if implemented) must have keyboard alternatives.
- Touch targets: despite small paper items, maintain minimum 44x44px hit areas.
- Layered shadows should not create visual confusion about interactive targets.
