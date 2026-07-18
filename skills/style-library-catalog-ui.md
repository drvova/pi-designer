---
name: library-catalog-ui
description: Build library card catalog UI components (oak card drawers, typewritten index cards, Dewey Decimal labels, stamped due dates, aged manila catalog cards, brass drawer pulls) with typewriter fonts, stamped date accents, and the nostalgic scholarly atmosphere of old library catalog systems. Trigger this skill when the user asks for library card catalog, Dewey Decimal, index card UI, archive drawer, old library system, or scholarly catalog interfaces.
---

# Library Card Catalog UI

Use this skill to design and implementation nostalgic, scholarly interfaces inspired by old library card catalog systems: oak drawer fronts, typewritten index cards, Dewey Decimal classification labels, date-due stamps, brass drawer pulls, and the warm, organized atmosphere of a pre-digital library.

## Core Material Recipes

### 1) Oak Drawer Front

Library catalog drawer surface.

- `bg-gradient-to-b from-[#6a4a2a] to-[#4a3a1a] border-2 border-[#3a2a10] rounded-sm p-4 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]`.
- Drawer pull: `w-8 h-2 rounded-full bg-gradient-to-b from-[#c4a043] to-[#8a6a1a] mx-auto mb-2` (brass drawer pull).
- Label holder: `bg-[#f0e8d0] border border-[#8a7a5a] px-2 py-0.5 text-center font-mono text-xs text-[#3a2a10]` showing "A - ARM".

### 2) Index Card Surface

Classic typewritten catalog card.

- `bg-[#f5ead0] border border-[#d4c8a8] p-4 rounded-sm shadow-[0_1px_4px_rgba(0,0,0,0.1)] relative`.
- Typewriter heading: `font-[Courier_Prime] text-xs text-[#1a1a1a] tracking-tight leading-relaxed`.
- Dewey number: `font-mono font-bold text-sm text-[#1a1a1a]` showing "823.912".
- Date stamps: row of small stamps `font-mono text-[10px] text-[#8a6a4a]` showing dates like "JUN 14 1987".

### 3) Due Date Stamp

Circular date stamp accent.

```html
<div class="inline-block transform rotate-[-8deg]">
  <div class="border-2 border-[#8a1a1a] rounded-full px-3 py-1 text-center">
    <div class="font-mono text-[8px] text-[#8a1a1a] uppercase tracking-wider">DUE DATE</div>
    <div class="font-mono text-sm font-bold text-[#8a1a1a]">MAR 15 1992</div>
  </div>
</div>
```

### 4) Catalog Card Content Layout

Typical index card information layout.

```html
<div class="bg-[#f5ead0] p-4 border border-[#d4c8a8] font-mono text-xs leading-relaxed">
  <div class="font-bold">823.912</div>
  <div class="border-b border-[#8a7a5a] my-1"></div>
  <div class="italic">Hemingway, Ernest, 1899-1961.</div>
  <div class="mt-1">The old man and the sea / Ernest Hemingway.</div>
  <div class="mt-1 text-[#5a4a2a]">New York : Scribner, 1952.</div>
  <div class="mt-1 text-[#5a4a2a]">127 p. ; 22 cm.</div>
  <div class="mt-2 border-t border-[#8a7a5a] pt-1 text-[10px] text-[#8a6a4a]">
    ISBN: 0-684-80122-1 | MARC
  </div>
</div>
```

### 5) Catalog Button

Button styled like a library catalog interaction.

- `bg-[#4a3a1a] text-[#f5ead0] font-[Courier_Prime] font-bold text-sm px-6 py-2 border-2 border-[#6a5a3a] hover:bg-[#5a4a2a] transition-colors rounded-sm`.

### 6) Card Catalog Cabinet Frame

Wooden cabinet frame around the card drawers.

- `bg-[#3a2a10] border-4 border-[#2a1a08] p-2` (dark oak frame).
- Rows of drawers inside: `grid grid-rows-3 gap-1`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Oak Wood | `#6a4a2a` | Drawer fronts |
| Dark Oak | `#3a2a10` | Cabinet frame |
| Card Cream | `#f5ead0` | Index card surface |
| Typewriter Ink | `#1a1a1a` | Card text |
| Brass | `#c4a043` | Drawer pulls |
| Stamp Red | `#8a1a1a` | Due-date stamps |
| Sepia | `#8a6a4a` | Date stamp ink, aged text |
| Label Beige | `#f0e8d0` | Drawer label holders |

Rules: Oak wood browns and cream card surfaces dominate. Brass and stamp-red provide the only warm accents. Everything should feel aged, scholarly, and organized.

## Typography Recommendations

- **Primary:** Courier Prime, IBM Plex Mono (typewriter font — mandatory).
- **Labels:** `font-mono font-bold text-xs uppercase tracking-wide` (catalog label style).
- **Body:** `font-mono text-xs leading-relaxed` (typewritten catalog card).
- **Dewey numbers:** `font-mono font-bold` (classification numbers).
- The ENTIRE interface should feel typewritten — monospace is non-negotiable.

## Reusable Tailwind Tokens

- Oak drawer: `bg-gradient-to-b from-[#6a4a2a] to-[#4a3a1a] border-2 border-[#3a2a10]`.
- Index card: `bg-[#f5ead0] border border-[#d4c8a8] font-mono text-xs`.
- Brass pull: `rounded-full bg-gradient-to-b from-[#c4a043] to-[#8a6a1a]`.
- Due-date stamp: `border-2 border-[#8a1a1a] rounded-full font-mono text-sm rotate-[-8deg]`.
- Catalog button: `bg-[#4a3a1a] text-[#f5ead0] font-mono border-2 border-[#6a5a3a] rounded-sm`.

## Quality Checklist

- At least one oak drawer front element.
- At least one typewritten index card surface.
- Dewey Decimal classification numbers present.
- Due-date stamps (rotated circular stamps) present.
- Brass drawer-pull decorations.
- Monospace typography throughout (typewriter font).
- Card catalog cabinet frame (dark oak) visible.
- The aesthetic reads as a pre-digital library card catalog.
- Everything feels aged, scholarly, and nostalgic.
- Colors are oak-brown, cream, brass, and stamp-red.

## Anti-Patterns

- Modern sans-serif typography (the entire aesthetic is typewriter monospace).
- Bright modern color palettes (the palette is oak, cream, brass, and stamp-red).
- Smooth digital surfaces (everything is aged paper and wood).
- Missing the typewriter font (Courier Prime or equivalent is mandatory).
- Missing Dewey Decimal numbers (these are the catalog classification signature).
- Missing the due-date stamps (these are nostalgic library icons).
- Glossy or digital effects (the aesthetic is aged, analog, paper-based).
- Missing oak wood textures (the cabinet and drawers are oak).
- Missing brass hardware accents (drawer pulls and label holders).
- Clean modern minimalism (the aesthetic is dense, organized, information-rich).

## Accessibility Considerations

- Cream index cards with dark typewriter text provide excellent contrast (WCAG AAA).
- Monospace fonts at small sizes (10-12px) should be verified for readability.
- Focus states: `focus:ring-2 focus:ring-[#c4a043]/50` (brass ring on oak).
- Due-date stamps are decorative — `aria-hidden="true"` when not conveying information.
- Dewey numbers need proper `aria-label` if they convey classification.
- The dense monospace text can be hard for some users — provide zoom support.
- Touch targets (drawer pulls) must be adequate despite small hardware styling.
- Typewriter fonts at `text-xs` may fail WCAG AA — verify at all sizes.
