---
name: pop-art-ui
description: Build pop art / comic book UI components (halftone dot patterns, thick ink borders, CMYK offset shadows, bold primary colors, comic-panel grids, speech bubbles, action words) with Roy Lichtenstein and Andy Warhol-inspired visual energy. Trigger this skill when the user asks for pop art UI, comic book design, halftone effects, Lichtenstein style, graphic novel interface, or bold printed-look web design.
---

# Pop Art / Comic Book UI

Use this skill to design and implement bold, printed-look interfaces inspired by 1960s pop art and comic books: halftone dot patterns, thick ink borders, misaligned CMYK offset shadows, bold primary colors, comic-panel grids, and speech bubble elements.

## Non-Negotiable Foundations

- Pop Art UI makes the interface look like it was PRINTED: thick ink borders, halftone dots, offset CMYK shadows, and flat bold color fields.
- Borders are thick and black, drawn with marker-like weight (`border-4 border-black`). Every panel looks inked.
- Shadows are misaligned CMYK offset: cyan, magenta, and yellow shadows shifted at different angles (simulating printing misregistration).
- Colors are bold primaries: red, yellow, blue, plus black and white. High contrast, zero subtlety.
- Halftone dot patterns are the signature texture: Ben-Day dots as backgrounds and fills.
- Typography is bold, heavy, and comic-book inspired: heavy black weights, uppercase, sometimes with comic-style italics.

## Core Material Recipes

### 1) Halftone Dot Background

The signature pop art texture: Ben-Day dot pattern.

- Light dots: `bg-[radial-gradient(#00000020_2px,transparent_2px)] bg-[size:16px_16px]`.
- Bold dots: `bg-[radial-gradient(#00000050_3px,transparent_3px)] bg-[size:12px_12px]`.
- Colored halftone: `bg-[radial-gradient(#dc262640_3px,transparent_3px)] bg-[size:14px_14px]` (red dots on white).

### 2) Comic Panel Card

Card with thick ink border and halftone interior.

- Border: `border-4 border-black`.
- Background: white or light color with halftone overlay.
- Shadow: CMYK offset (see below).
- Full: `bg-white border-4 border-black p-6 shadow-[4px_4px_0_0_#00aeef,6px_6px_0_0_#ec008c,8px_8px_0_0_#fff200]`.

### 3) CMYK Offset Shadow

The signature pop art shadow: misaligned cyan/magenta/yellow offset shadows.

- Triple CMYK: `shadow-[3px_3px_0_0_#00aeef,5px_5px_0_0_#ec008c,7px_7px_0_0_#fff200]`.
- Double (simpler): `shadow-[3px_3px_0_0_#ec008c,5px_5px_0_0_#00aeef]`.
- The offset creates the "misregistered print" effect that defines pop art.

### 4) Pop Art Button

Bold, thick-bordered button with CMYK shadow.

- Primary: `bg-[#ffdd00] text-black font-black text-lg uppercase border-4 border-black px-8 py-3 shadow-[3px_3px_0_0_#00aeef,5px_5px_0_0_#ec008c] hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0_0_#00aeef,2px_2px_0_0_#ec008c] transition-all`.
- Red: `bg-[#dc2626] text-white font-black uppercase border-4 border-black px-8 py-3 shadow-[3px_3px_0_0_#fff200,5px_5px_0_0_#00aeef]`.

### 5) Speech Bubble

Comic-style speech bubble element.

- `bg-white border-4 border-black rounded-3xl p-4 relative shadow-[3px_3px_0_0_#ec008c]`.
- Tail: `after:absolute after:-bottom-4 after:left-8 after:w-0 after:h-0 after:border-l-[16px] after:border-l-transparent after:border-t-[16px] after:border-t-black`.
- Inner tail (white): similar triangle slightly offset inside the black one.

### 6) Action Word (POW/BANG/ZAP)

Oversized onomatopoeia in starburst shape.

```html
<div class="relative inline-block">
  <div class="bg-[#ffdd00] text-[#dc2626] font-black text-4xl uppercase italic px-6 py-2 [clip-path:polygon(0_15%,15%_0,35%_15%,50%_0,65%_15%,85%_0,100%_15%,85%_30%,100%_50%,85%_70%,100%_85%,85%_100%,65%_85%,50%_100%,35%_85%,15%_100%,0_85%,15%_70%,0_50%,15%_30%)] border-2 border-black">
    POW!
  </div>
</div>
```

### 7) Comic Panel Grid

Multi-panel layout like a comic book page.

- `grid grid-cols-2 grid-rows-3 gap-2 border-4 border-black p-2`.
- Each cell: `border-2 border-black p-3` with content inside.
- Panels can span multiple rows/cols for visual variety.

## Color Palette System

### Core Pop Art Palette

| Color | Hex | Role |
|---|---|---|
| Red | `#dc2626` | Primary energy, action |
| Yellow | `#ffdd00` | Highlight, backgrounds, POW words |
| Blue | `#00aeef` | CMYK shadow, accent |
| Magenta | `#ec008c` | CMYK shadow, accent |
| Cyan | `#00aeef` | CMYK shadow offset |
| Black | `#000000` | Borders, text, ink |
| White | `#ffffff` | Background, contrast |

### CMYK Print Colors (for offset shadows)

| Ink | Hex | Shadow Use |
|---|---|---|
| Cyan | `#00aeef` | First offset layer |
| Magenta | `#ec008c` | Second offset layer |
| Yellow | `#fff200` | Third offset layer |

Rules: Bold primaries only. Red, yellow, blue dominate surfaces. CMYK colors are used specifically for offset shadows. Black borders and ink define every element. White is the primary background.

## Typography Recommendations

Pop art typography is heavy, comic-inspired, and printed-looking:

- **Display headings:** Bangers, Anton, or Bowlby One (comic-book display fonts).
- **Body:** Bree Serif, Roboto Slab, or Archivo (readable but with character).
- **Action words:** Bangers italic, Comic Neue italic (comic sound effects).
- **Labels:** `font-black uppercase tracking-wide`.
- Alternative: Permanent Marker, Marksman (hand-drawn comic lettering).
- Avoid light/thin fonts. Pop art is bold, heavy, and inked.

## Component Architecture Pattern

1. White or halftone-dotted background.
2. Comic panel grid layout (thick black borders between panels).
3. Cards with thick ink borders and CMYK offset shadows.
4. Speech bubble elements for quotes/dialogue.
5. Action word starbursts (POW, BANG, ZAP) for emphasis.
6. Bold primary color buttons with comic-style interactions.
7. Halftone dot textures as section backgrounds.

## Interaction Rules

- Default state: bold, inked, printed.
- Hover: CMYK shadows compress (translate toward element).
  - `hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0_0_#00aeef,2px_2px_0_0_#ec008c] transition-all duration-150`.
- Active: `active:translate-x-[4px] active:translate-y-[4px] active:shadow-none`.
- Focus: `focus:outline-none focus:ring-4 focus:ring-[#ec008c]`.
- Transitions: `transition-all duration-150` (snappy, like comic panel transitions).
- Speech bubble tail: can point in different directions.

## Reusable Tailwind Tokens

- Halftone bg: `bg-[radial-gradient(#00000020_2px,transparent_2px)] bg-[size:16px_16px]`
- CMYK shadow: `shadow-[3px_3px_0_0_#00aeef,5px_5px_0_0_#ec008c,7px_7px_0_0_#fff200]`
- Comic card: `bg-white border-4 border-black p-6 shadow-[4px_4px_0_0_#00aeef,6px_6px_0_0_#ec008c]`
- Pop art button: `bg-[#ffdd00] text-black font-black uppercase border-4 border-black px-8 py-3 shadow-[3px_3px_0_0_#00aeef,5px_5px_0_0_#ec008c]`
- Speech bubble: `bg-white border-4 border-black rounded-3xl p-4 shadow-[3px_3px_0_0_#ec008c]`
- POW starburst: `[clip-path:polygon(0_15%,15%_0,35%_15%,50%_0,65%_15%,85%_0,100%_15%,85%_30%,100%_50%,85%_70%,100%_85%,85%_100%,65%_85%,50%_100%,35%_85%,15%_100%,0_85%,15%_70%,0_50%,15%_30%)]`
- Comic panel grid: `grid grid-cols-2 gap-2 border-4 border-black p-2`

## Quality Checklist (must pass)

- Halftone dot patterns are present as backgrounds or fills.
- Borders are thick black ink (`border-4 border-black`).
- CMYK offset shadows (misaligned cyan/magenta/yellow) on cards and buttons.
- Color palette is bold primaries: red, yellow, blue, black, white.
- At least one speech bubble element.
- At least one action word starburst (POW/BANG/ZAP style).
- Typography is heavy and comic-inspired (`font-black`, comic display fonts).
- Comic panel grid layout is used for content sections.
- The aesthetic reads as a printed comic book or pop art poster.
- Everything looks inked and printed, not digitally smooth.

## Anti-Patterns

- Smooth digital shadows with blur (pop art requires hard CMYK offset).
- Subtle, muted colors (pop art demands bold primaries).
- Thin borders (`border` without width is too subtle — use `border-4`).
- Missing halftone texture (Ben-Day dots are the signature pop art element).
- Modern minimalist layouts (pop art is dense and panel-based).
- Light/thin typography (pop art is heavy and inked).
- Missing the comic book references (speech bubbles, action words, panel grids).
- Single-color shadows in pure black (use CMYK offset for authentic pop art).
- Decorative gradients (pop art uses flat bold color fields).
- Consistent, symmetric layout (comic pages have dynamic, asymmetric panel sizes).

## Accessibility Considerations

- High contrast (bold colors, thick black borders) aids visual identification.
- CMYK offset shadows must not interfere with text readability.
- Halftone backgrounds must be subtle enough to not reduce text contrast.
- Focus states must be bold and visible: `focus:ring-4 focus:ring-[#ec008c]`.
- Speech bubbles should use semantic elements (`<blockquote>`) with proper attribution.
- Action word starbursts are decorative — ensure content is accessible via text.
- Comic panel grids must maintain logical reading order for screen readers.
- Bold typography at large sizes is generally accessible but verify body text meets WCAG AA.
- Respect `prefers-reduced-motion`: disable press translations.
