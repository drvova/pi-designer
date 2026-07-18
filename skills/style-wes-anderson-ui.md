---
name: wes-anderson-ui
description: Build Wes Anderson-inspired UI components (perfect symmetry, curated pastel palettes, centered compositions, vintage typography, whimsical deadpan details, diorama-like framing) with retro 1960s-70s color palettes, symmetrical layouts, typewriter fonts, and the meticulous storybook aesthetic of Wes Anderson films. Trigger this skill when the user asks for Wes Anderson style, symmetrical pastel design, Grand Budapest Hotel aesthetic, Moonrise Kingdom palette, diorama UI, or curated vintage storybook interfaces.
---

# Wes Anderson UI

Use this skill to design and implement meticulously symmetrical, curated interfaces inspired by Wes Anderson's filmmaking: centered compositions, pastel vintage palettes, typewriter-style typography, diorama-like framing, and the whimsical-yet-precise storybook aesthetic.

## Non-Negotiable Foundations

- SYMMETRY IS ABSOLUTE. Everything is centered. Left and right sides mirror each other. The rule of thirds is turned on its head — the visual focal point is dead center.
- Color palettes are curated, warm, and vintage: dusty pinks, mustard yellows, sage greens, powder blues, warm creams, and muted browns.
- Typography is typewriter-inspired: monospace or slab serif fonts that feel like they came from a vintage label maker or a manual typewriter.
- Every element feels PLACED — like props in a diorama. Nothing is accidental.
- The mood is whimsical but deadpan: charming, slightly nostalgic, meticulously curated.
- Framing and borders are important — elements feel like they are inside a dollhouse or storybook illustration.

## Core Material Recipes

### 1) Symmetrical Hero / Masthead

Perfectly centered hero composition.

```html
<div class="text-center flex flex-col items-center">
  <div class="text-xs uppercase tracking-[0.3em] text-[#8a7a5a] mb-4">ESTABLISHED 1965</div>
  <h1 class="font-serif text-6xl md:text-8xl font-bold text-[#2a1a0a] mb-4 tracking-tight">THE GRAND HOTEL</h1>
  <div class="w-32 h-px bg-[#c9a84c] mb-4"></div>
  <p class="font-mono text-sm text-[#5a4a3a] max-w-md">A MENDL'S PATISSERIE PRODUCTION</p>
</div>
```

### 2) Vintage Pastel Card

Card with warm vintage pastel surface and centered content.

- `bg-[#f5ead0] border-2 border-[#c9a84c] p-8 text-center shadow-[0_2px_8px_rgba(90,60,30,0.1)]`.

### 3) Wes Anderson Button

Centered, vintage button with symmetrical framing.

- Primary: `bg-[#c4471a] text-[#f5ead0] font-mono font-bold text-sm uppercase tracking-widest px-8 py-3 border-2 border-[#8a2a0a] hover:bg-[#a8390f] transition-colors`.
- Cream: `bg-[#f5ead0] text-[#5a3a1a] font-mono text-sm uppercase tracking-widest border-2 border-[#c9a84c] px-8 py-3`.

### 4) Pink Palette Surface

The Grand Budapest Hotel signature: dusty pink.

- `bg-[#e8c4c8] border-2 border-[#c4a0a4] p-8 text-center shadow-[0_2px_8px_rgba(150,100,110,0.1)]`.

### 5) Decorative Divider (symmetrical)

Perfectly symmetrical ornamental divider.

```html
<div class="flex items-center justify-center gap-4 my-8">
  <div class="w-16 h-px bg-[#c9a84c]"></div>
  <span class="text-[#c9a84c]">✦</span>
  <div class="w-16 h-px bg-[#c9a84c]"></div>
</div>
```

### 6) Label Maker Tag

Vintage label-maker style tag.

- `bg-[#c4471a] text-[#f5ead0] font-mono font-bold text-xs uppercase tracking-widest px-4 py-1 inline-block`.

### 7) Diorama Frame

Bordered frame that makes content feel like a museum diorama.

- `border-4 border-[#3a2a1a] p-1 bg-[#f5ead0]`.
- Inner: `border border-[#c9a84c] p-6`.
- Double border creates the "framed display case" look.

### 8) Vintage Stamp / Seal

Circular wax seal or vintage postage stamp accent.

- `w-20 h-20 rounded-full border-2 border-[#8a2a0a] bg-[#c4471a] text-[#f5ead0] flex items-center justify-center font-serif font-bold text-xs uppercase tracking-wider rotate-[-5deg]`.

## Color Palette System

### The Grand Budapest (Pink)

| Color | Hex | Role |
|---|---|---|
| Dusty Pink | `#e8c4c8` | Primary surface |
| Mauve | `#c4a0a4` | Borders, secondary |
| Deep Red | `#c4471a` | Accents, labels, buttons |
| Eggplant | `#5a2a3a` | Deep contrast |

### Moonrise Kingdom (Khaki/Green)

| Color | Hex | Role |
|---|---|---|
| Khaki | `#c4b896` | Primary surface |
| Sage | `#7a8a6a` | Secondary accent |
| Mustard | `#d4a838` | Highlight |
| Brown | `#5a4a3a` | Text |

### The Royal Tenenbaums (Warm Red/Cream)

| Color | Hex | Role |
|---|---|---|
| Cream | `#f5ead0` | Primary background |
| Tennis Felt | `#c44a1a` | Primary accent |
| Mustard | `#d4a838` | Secondary |
| Warm Gray | `#8a7a6a` | Tertiary |

### Universal Accents

| Color | Hex | Role |
|---|---|---|
| Gold | `#c9a84c` | Dividers, thin borders, ornaments |
| Warm Brown | `#3a2a1a` | Text, frame borders |
| Powder Blue | `#a8c4d4` | Cool accent (sparingly) |

Rules: Each "film" has its own palette. Choose ONE palette per design. Colors are muted, warm, and vintage. No bright neons or cool modern tones.

## Typography Recommendations

Wes Anderson typography is vintage, precise, and typewriter-inspired:

- **Display headings:** Archer, Playfair Display, or EB Garamond (classical serif with personality).
- **Alternative display:** Futura (Anderson actually uses Futura in his films — it is the canonical choice).
- **Typewriter body:** Courier Prime, Special Elite, or Courier New (manual typewriter feel).
- **Labels:** `font-mono font-bold uppercase tracking-widest text-xs` (label-maker style).
- The MIX of elegant serif headings with monospace body text creates the Anderson tension.

## Component Architecture Pattern

1. Perfectly centered symmetrical layout.
2. Vintage pastel background (pink, khaki, or cream).
3. Ornamental dividers (symmetrical: line-star-line).
4. Diorama-framed content cards (double borders).
5. Vintage label-maker tags for categories.
6. Typewriter-style body text.
7. Centered hero masthead with established date and tagline.
8. Wax seal or vintage stamp accents.

## Interaction Rules

- Default state: symmetrical, curated, vintage.
- Hover: subtle warm shift, border darken.
  - `hover:border-[#8a2a0a] hover:shadow-[0_4px_12px_rgba(90,60,30,0.12)] transition-all duration-300`.
- Active: `active:scale-[0.98]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#c9a84c] focus:ring-offset-2`.
- Transitions: `transition-all duration-300` (smooth, deliberate, unhurried).
- No bouncy, spring, or modern animations. Motion is vintage and dignified.

## Reusable Tailwind Tokens

- Grand Budapest pink: `bg-[#e8c4c8] border-2 border-[#c4a0a4]`
- Vintage card: `bg-[#f5ead0] border-2 border-[#c9a84c] p-8 text-center shadow-[0_2px_8px_rgba(90,60,30,0.1)]`
- Label tag: `bg-[#c4471a] text-[#f5ead0] font-mono font-bold text-xs uppercase tracking-widest px-4 py-1`
- Wes button: `bg-[#c4471a] text-[#f5ead0] font-mono font-bold uppercase tracking-widest border-2 border-[#8a2a0a] px-8 py-3`
- Decorative divider: `flex items-center justify-center gap-4` with line-star-line pattern.
- Diorama frame: `border-4 border-[#3a2a1a] p-1 bg-[#f5ead0]` with inner border.
- Gold ornament: `text-[#c9a84c]`
- Wax seal: `rounded-full border-2 border-[#8a2a0a] bg-[#c4471a] text-[#f5ead0] font-serif rotate-[-5deg]`

## Quality Checklist (must pass)

- Layout is perfectly symmetrical (centered, mirrored sides).
- Color palette is vintage pastel (dusty pink, khaki, cream, mustard).
- Typography mixes Futura/serif headings with monospace body.
- At least one ornamental symmetrical divider (line-star-line).
- At least one label-maker style tag (`font-mono uppercase tracking-widest`).
- Content feels curated and placed (diorama-like).
- At least one vintage stamp/wax seal accent.
- Backgrounds are warm vintage tones (never pure white).
- Everything feels like it belongs in a 1960s storybook or dollhouse.
- Motion is smooth and dignified (never bouncy or modern).

## Anti-Patterns

- Asymmetrical layouts (Anderson is obsessively symmetrical).
- Modern, cold, or minimalist design (Anderson is warm, vintage, curated).
- Sans-serif body text (Anderson uses typewriter monospace for body).
- Bright, saturated, or neon colors (Anderson is muted vintage pastel).
- Pure white backgrounds (Anderson uses warm cream `#f5ead0`).
- Missing ornamental dividers and decorative borders.
- Modern button styles (Anderson buttons are vintage, bordered, labeled).
- Random or organic placement (Anderson is meticulously composed).
- Fast, snappy animations (Anderson motion is smooth and deliberate).
- Missing the storybook/diorama quality (the framing is essential).

## Accessibility Considerations

- Vintage pastel backgrounds with warm brown text provide good contrast.
- Gold borders and dividers may be low-contrast on cream — verify WCAG AA.
- Symmetrical centered layouts are predictable for screen reader navigation.
- Focus states: `focus:ring-2 focus:ring-[#c9a84c]` (gold ring on cream).
- Label-maker tags must have semantic meaning, not just visual styling.
- Decorative ornaments (stars, dividers, seals) must be `aria-hidden="true"`.
- Touch targets must be adequate: `px-8 py-3` buttons are sufficient.
- The centered layout naturally provides good cognitive accessibility (clear hierarchy).
