---
name: codex-tome-ui
description: Build codex / ancient tome UI components (leather-bound covers, metal clasp hardware, gilt page edges, ribbon bookmarks, marbled endpapers, aged parchment signatures, scriptorium craftsmanship) with heavy leather textures, brass clasp decorations, and the monumental physical weight of a medieval bound book. Trigger this skill when the user asks for codex, ancient tome, leather book, grimoire, medieval manuscript book, or scriptorium binding interfaces.
---

# Codex / Ancient Tome UI

Use this skill to design and implementation weighty, atmospheric interfaces inspired by ancient leather-bound books: dark leather cover textures, brass clasp hardware, gilt gold page edges, silk ribbon bookmarks, marbled endpapers, aged parchment signatures, and the monumental physical presence of a medieval codex or grimoire.

## Core Material Recipes

### 1) Leather Cover Surface

Aged leather book binding.

- `bg-gradient-to-br from-[#4a2818] via-[#3a1c0a] to-[#2a1004] border-2 border-[#1a0a02] rounded-sm p-8 shadow-[0_8px_24px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(120,80,40,0.1),inset_0_-2px_4px_rgba(0,0,0,0.3)]`.
- Leather texture: `bg-[radial-gradient(rgba(80,50,20,0.08)_1px,transparent_2px)] bg-[size:4px_4px]` (pored leather grain).

### 2) Brass Clasp Accent

Metal book clasp decoration.

```html
<svg viewBox="0 0 40 60" class="w-10 h-15 opacity-60">
  <g fill="#c4a043" stroke="#8a6a1a" stroke-width="0.5">
    <rect x="15" y="0" width="10" height="50" rx="2"/>
    <rect x="10" y="45" width="20" height="12" rx="2"/>
    <circle cx="20" cy="8" r="3" fill="#8a6a1a"/>
    <circle cx="20" cy="51" r="3" fill="#8a6a1a"/>
  </g>
</svg>
```

### 3) Gilt Page Edge

Gold-leaf book page edge accent.

- `border-r-4 border-[#c4a043] shadow-[inset_-2px_0_0_rgba(245,215,110,0.3)]` (right edge of an open book).

### 4) Ribbon Bookmark

Silk ribbon hanging from the top.

- `absolute top-0 right-1/4 w-3 h-32 bg-[#8a1a1a] shadow-[1px_0_2px_rgba(0,0,0,0.2)]` with V-cut bottom: `[clip-path:polygon(0_0,100%_0,100%_100%,50%_80%,0_100%)]`.

### 5) Aged Parchment Signature

Folded-paper gathering (book interior pages).

- `bg-[#e8dcc0] shadow-[1px_0_0_#d4c8a8,2px_0_0_#c4b898,3px_0_0_#b4a888] p-6` (the stacked page edges on the right).

### 6) Marbled Endpaper

Decorative marbled paper pattern (book front-cover interior).

- `bg-[conic-gradient(from_0deg_at_30%_40%,#5a8a9a,#8a5a9a,#5a8a4a,#9a8a5a,#5a8a9a)] bg-[size:100px_100px] opacity-20` over a `bg-[#f0e8d4]` surface.

### 7) Tome Button

Heavy leather-and-brass button.

- `bg-gradient-to-b from-[#5a3a1a] to-[#3a200a] text-[#e8dcc0] font-serif font-medium px-8 py-3 border-2 border-[#c4a043] shadow-[0_3px_0_#1a0a02,inset_0_1px_0_rgba(180,130,60,0.2)] hover:translate-y-1 hover:shadow-[0_1px_0_#1a0a02] active:shadow-none transition-all`.

## Color Palette System

| Color | Hex | Material |
|---|---|---|
| Dark Leather | `#3a1c0a` | Primary cover |
| Deep Leather | `#2a1004` | Shadow leather |
| Light Leather | `#4a2818` | Highlight leather |
| Brass | `#c4a043` | Clasps, gilt, ornaments |
| Aged Parchment | `#e8dcc0` | Interior pages |
| Ribbon Red | `#8a1a1a` | Silk bookmark |
| Ink Sepia | `#3a2a0a` | Text |

Rules: Dark brown leather and brass dominate. Aged parchment provides interior contrast. The palette should feel like holding a 500-year-old grimoire in a dim scriptorium.

## Typography Recommendations

- **Display:** Cinzel, UnifrakturMaguntia (monumental caps or blackletter).
- **Body:** EB Garamond, Lora (warm readable serif).
- **Labels:** `font-serif font-medium text-sm tracking-wide text-[#e8dcc0]`.

## Reusable Tailwind Tokens

- Leather cover: `bg-gradient-to-br from-[#4a2818] to-[#2a1004] border-2 border-[#1a0a02] shadow-[0_8px_24px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(120,80,40,0.1)]`.
- Brass clasp: SVG brass rect with decorative pins.
- Gilt edge: `border-r-4 border-[#c4a043]`.
- Ribbon: `[clip-path:polygon(0_0,100%_0,100%_100%,50%_80%,0_100%)] bg-[#8a1a1a]`.
- Tome button: `bg-gradient-to-b from-[#5a3a1a] to-[#3a200a] border-2 border-[#c4a043] shadow-[0_3px_0_#1a0a02]`.

## Quality Checklist

- At least one dark leather cover surface with grain texture.
- At least one brass clasp or hardware decoration.
- Gilt gold page edge accent present.
- Silk ribbon bookmark element.
- Aged parchment page-stack shadow.
- Marbled endpaper decoration somewhere.
- Color palette is dark leather + brass + parchment.
- Typography is monumental/medieval serif.
- The aesthetic reads as ancient tome / codex / grimoire / leather-bound book.
- Everything feels heavy, ancient, and physically monumental.

## Anti-Patterns

- Bright modern colors (the palette is dark leather and brass).
- Missing leather texture (the grain is what makes it LEATHER not flat brown).
- Missing brass hardware (clasps and corners are essential book-binding elements).
- Missing the gilt page edge (gold page edges are a hallmark of fine binding).
- Missing the ribbon bookmark (medieval codices used silk bookmarks).
- Light bright backgrounds (ancient tomes are DARK and HEAVY).
- Sans-serif typography (codices use monumental or blackletter serif).
- Modern flat surfaces (everything should feel tactile, aged, and physical).
- Missing the page-stack shadow (the right-edge page layers are iconic).
- Thin weightless panels (a tome is HEAVY — use heavy shadows and borders).

## Accessibility Considerations

- Dark leather backgrounds with cream text provide good contrast (verify WCAG AA — `#e8dcc0` on `#2a1004` passes).
- Focus states: `focus:ring-2 focus:ring-[#c4a043]/50` (brass ring on leather).
- Brass clasp and marbled SVGs must be `aria-hidden="true"` when decorative.
- The dark heavy aesthetic may cause eye strain — ensure adequate text contrast.
- Touch targets must be adequate despite heavy border styling.
- The monumental serif typography should be readable at 16px+ body text.
