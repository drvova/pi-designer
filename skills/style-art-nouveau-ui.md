---
name: art-nouveau-ui
description: Build Art Nouveau UI components (flowing organic curves, botanical vines, Mucha-inspired ornamentation, sinuous line-work, peacock feather motifs, parchment surfaces) with elegant ornamental borders, flowing typography, and the naturalistic elegance of the Belle Epoque. Trigger this skill when the user asks for Art Nouveau, Mucha-style, Belle Epoque, organic ornamental design, flowing vine interfaces, or naturalistic curvilinear aesthetics.
---

# Art Nouveau UI

Use this skill to design and implement elegant, nature-inspired interfaces with flowing organic curves, botanical vine ornaments, Mucha-inspired decorative borders, sinuous line-work, and the romantic naturalism of the 1890s-1910s Art Nouveau movement.

## Non-Negotiable Foundations

- Art Nouveau is defined by organic, flowing curves inspired by plants, vines, flowers, and natural forms. The "whiplash curve" is the signature shape.
- Decoration is integral, not applied. Borders, frames, and dividers are ornamental vines and floral patterns, not simple lines.
- Color palettes are muted and sophisticated: sage green, dusty rose, old gold, deep burgundy, cream, and peacock blue.
- Typography echoes the aesthetic: elegant display serif with organic character, or classic Art Nouveau-style lettering with floral flourishes.
- The mood is romantic, elegant, and naturalistic — never industrial, never modern.
- Every element should feel handcrafted and organic, like an illustrated manuscript or a Mucha poster.

## Core Material Recipes

### 1) Ornamental Vine Border

Decorative border using SVG vine/floral patterns.

```html
<div class="relative p-8">
  <!-- Vine border SVG -->
  <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path d="M0,0 Q10,5 20,2 T40,3 T60,1 T80,4 T100,2" fill="none" stroke="#5a7a4a" stroke-width="0.5"/>
    <circle cx="20" cy="2" r="1" fill="#c9a89c"/>
    <circle cx="60" cy="1" r="1.5" fill="#d4a868"/>
  </svg>
  <!-- Content -->
</div>
```

### 2) Parchment Surface with Ornamental Frame

Warm cream card with flowing decorative border.

- Background: `bg-[#faf6ee]` (warm parchment).
- Frame: decorative SVG border with vine/flower motifs at corners.
- Shadow: `shadow-[0_4px_12px_rgba(90,60,30,0.1)]`.
- Corner flourishes: SVG Mucha-style corner ornaments (scrollwork and flowers).

### 3) Whiplash Curve Divider

The signature Art Nouveau shape: a flowing S-curve.

```html
<svg viewBox="0 0 200 20" class="w-full">
  <path d="M0,10 C30,0 50,20 80,10 S130,0 160,10 S190,15 200,10" 
        fill="none" stroke="#5a7a4a" stroke-width="1.5"/>
  <!-- Decorative leaves along the curve -->
  <ellipse cx="40" cy="5" rx="4" ry="2" fill="#7a9a5a" transform="rotate(-20 40 5)"/>
  <ellipse cx="100" cy="15" rx="4" ry="2" fill="#7a9a5a" transform="rotate(15 100 15)"/>
</svg>
```

### 4) Mucha-Style Circle Frame

Circular ornamental frame with radiating flower petals.

- Outer ring: `w-32 h-32 rounded-full border-2 border-[#c9a89c]`.
- Inner ring: `border border-[#d4a868] m-1 rounded-full`.
- Radiating petals: SVG flower petals around the circle perimeter.
- Used for avatar/profile containers or decorative section dividers.

### 5) Art Nouveau Button

Elegant button with organic shape and warm color.

- Primary: `bg-gradient-to-r from-[#5a7a4a] to-[#4a6a3a] text-[#faf6ee] font-serif font-medium rounded-full px-8 py-3 border border-[#c9a89c]/30 shadow-[0_2px_8px_rgba(90,122,74,0.2)] hover:shadow-[0_4px_12px_rgba(90,122,74,0.3)] transition-all`.
- Gold: `bg-gradient-to-r from-[#d4a868] to-[#c49858] text-[#3a2a0a] font-serif rounded-full px-8 py-3`.

### 6) Peacock Feather Motif

Decorative peacock feather-eye accent.

```html
<svg viewBox="0 0 40 60" class="w-8 h-12">
  <ellipse cx="20" cy="35" rx="12" ry="18" fill="#2a6a6a" opacity="0.8"/>
  <ellipse cx="20" cy="30" rx="8" ry="12" fill="#3a8a8a"/>
  <ellipse cx="20" cy="25" rx="5" ry="8" fill="#d4a868"/>
  <circle cx="20" cy="22" r="3" fill="#3a2a1a"/>
</svg>
```

## Color Palette System

### Core Art Nouveau Palette

| Color | Hex | Role |
|---|---|---|
| Sage Green | `#5a7a4a` | Primary, nature, vines |
| Forest | `#3a5a2a` | Deep accents |
| Dusty Rose | `#c9a89c` | Floral, warm accent |
| Old Gold | `#d4a868` | Gilding, highlight |
| Deep Burgundy | `#7a3a3a` | Rich accent |
| Peacock Blue | `#2a6a6a` | Exotic accent |
| Cream | `#faf6ee` | Parchment background |
| Warm Brown | `#5a3a1a` | Text, structure |
| Soft Lilac | `#9a8aaa` | Secondary floral |

Rules: Muted, sophisticated, nature-inspired tones. Sage green and old gold dominate. No bright primaries or neon colors. The palette should feel like a vintage botanical illustration.

## Typography Recommendations

Art Nouveau typography is elegant, organic, and romantic:

- **Display headings:** Cormorant Garamond, Playfair Display, or EB Garamond (elegant serif with organic flourishes).
- **Art Nouveau specific:** Arnold Boecklin, Maison Neue, or search for "Art Nouveau font" for authentic period typefaces.
- **Body:** Lora, Source Serif Pro, or Crimson Text (readable serif).
- **Labels:** `font-serif font-medium uppercase tracking-wide` with floral dividers.
- Avoid sans-serif for primary text. Art Nouveau is serif territory.
- For headings, consider decorative serif fonts with floral/organic character.

## Component Architecture Pattern

1. Parchment or warm cream background.
2. Ornamental vine/floral borders on all major containers.
3. Whiplash curve dividers between sections.
4. Circular Mucha-style frames for images/avatars.
5. Elegant serif typography.
6. Peacock feather and botanical decorative motifs.
7. Warm muted color palette (sage, rose, gold).

## Interaction Rules

- Default state: elegant, calm, ornamental.
- Hover: subtle warm glow or slight bloom effect.
  - `hover:shadow-[0_4px_16px_rgba(212,168,104,0.2)] transition-all duration-500`.
- Active: gentle press `active:scale-[0.98]`.
- Focus: `focus:ring-2 focus:ring-[#d4a868]/40 focus:ring-offset-2 focus:ring-offset-[#faf6ee]`.
- Transitions: `transition-all duration-500 ease-in-out` (slow, elegant, unhurried).
- Animations: slow vine growth, petal opens, gentle unfurling motions.

## Reusable Tailwind Tokens

- Parchment: `bg-[#faf6ee]`
- Sage panel: `bg-gradient-to-r from-[#5a7a4a] to-[#4a6a3a] text-[#faf6ee]`
- Gold button: `bg-gradient-to-r from-[#d4a868] to-[#c49858] text-[#3a2a0a] font-serif rounded-full`
- Ornamental border: SVG vine/floral patterns at container edges.
- Whiplash divider: SVG S-curve with `stroke="#5a7a4a" stroke-width="1.5"`.
- Mucha circle: `rounded-full border-2 border-[#c9a89c]` with SVG petal radiations.
- Display heading: `font-serif text-4xl font-medium tracking-wide text-[#5a3a1a]`
- Soft shadow: `shadow-[0_4px_12px_rgba(90,60,30,0.1)]`

## Quality Checklist (must pass)

- At least one flowing/whiplash curve element present.
- Ornamental vine/floral borders on major containers.
- Color palette is muted and nature-inspired (sage, rose, gold, cream).
- Typography uses elegant serif fonts (no sans-serif for primary text).
- Peacock feather or botanical decorative motifs present.
- Circular Mucha-style frames for images or avatars.
- Parchment/warm cream backgrounds (not pure white).
- Whiplash curve dividers between content sections.
- The aesthetic reads as Belle Epoque romantic naturalism.
- Every surface feels handcrafted and ornamental.

## Anti-Patterns

- Sharp rectangles and rigid grids (Art Nouveau is flowing and organic).
- Bright, saturated primary colors (the palette is muted and sophisticated).
- Sans-serif typography for primary text (Art Nouveau demands elegant serif).
- Missing ornamental decoration (borders and dividers must be vine/floral).
- Pure white backgrounds (use warm parchment `#faf6ee`).
- Modern minimalist design (Art Nouveau is decorative and rich).
- Industrial or technical fonts (Art Nouveau is romantic and naturalistic).
- Fast, snappy animations (motion is slow, elegant, unhurried).
- Missing the whiplash curve (this is THE signature Art Nouveau shape).
- Clean, simple borders (borders should be ornamental and flowing).

## Accessibility Considerations

- Muted palettes can reduce contrast; verify WCAG AA for all text on parchment.
- Warm brown text (`#5a3a1a`) on cream (`#faf6ee`) provides good contrast.
- Ornamental SVG borders must be `aria-hidden="true"` and `pointer-events-none`.
- Focus states must use visible gold ring: `focus:ring-2 focus:ring-[#d4a868]/40`.
- Serif fonts at 16px+ maintain readability; below that, serif can be difficult.
- Decorative headings should have semantic heading tags for screen reader hierarchy.
- Slow animations must respect `prefers-reduced-motion` (simplify to instant transitions).
- Ornamental complexity should not overwhelm the content or create cognitive load.
- Touch targets must be adequate despite decorative border padding.
