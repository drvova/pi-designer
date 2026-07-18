---
name: apothecary-ui
description: Build apothecary UI components (old pharmacy aesthetic, amber glass bottles, hand-written labels, dried herbs, mortar and pestle, kraft paper, Victorian medicine) with aged botanical illustrations, script labels, and the warm, earthy atmosphere of a historic apothecary shop. Trigger this skill when the user asks for apothecary design, old pharmacy UI, herbal medicine aesthetic, botanical apothecary, Victorian pharmacy, or alchemist's shop interfaces.
---

# Apothecary UI

Use this skill to design and implement warm, earthy interfaces inspired by historic apothecary shops: amber glass bottles, hand-labeled remedies, dried botanicals, mortar and pestle, aged kraft paper, Victorian medicine cabinets, and the alchemical atmosphere of old-world healing.

## Non-Negotiable Foundations

- Apothecary UI evokes a pre-modern pharmacy or alchemist's shop: wood shelves, amber bottles, dried herbs, and hand-written remedy labels.
- Colors are earthy and botanical: amber, deep brown, forest green, dried-leaf ochre, and aged cream paper.
- Typography mimics hand-lettered labels and old medical text: serif headings, script accents, and typewriter-style descriptions.
- Botanical illustrations (pressed herbs, roots, leaves) are essential decorative elements.
- Textures are tactile and aged: kraft paper, worn wood, and patinated metal.
- The mood is warm, trustworthy, and slightly mysterious — like discovering a 19th-century remedy book.

## Core Material Recipes

### 1) Aged Kraft Paper Surface

The foundational apothecary surface: aged paper with stains.

- `bg-[#e8dcc0] p-6 shadow-[0_2px_8px_rgba(90,60,30,0.1)]`.
- Aging: `bg-[radial-gradient(ellipse_at_30%_20%,rgba(180,140,80,0.06)_0%,transparent_40%),radial-gradient(ellipse_at_70%_80%,rgba(140,100,50,0.04)_0%,transparent_30%)]`.
- Paper texture: SVG `feTurbulence` noise at `opacity-[0.04]`.

### 2) Amber Bottle Accent

Decorative apothecary bottle SVG.

```html
<svg viewBox="0 0 40 80" class="w-10 h-20">
  <!-- Bottle body -->
  <rect x="10" y="30" width="20" height="45" rx="4" fill="#c47a20" opacity="0.7"/>
  <!-- Bottle neck -->
  <rect x="15" y="15" width="10" height="18" fill="#c47a20" opacity="0.6"/>
  <!-- Cork -->
  <rect x="14" y="10" width="12" height="8" rx="2" fill="#5a3a1a"/>
  <!-- Label -->
  <rect x="12" y="45" width="16" height="14" fill="#e8dcc0" stroke="#5a3a1a" stroke-width="0.5"/>
  <text x="20" y="54" font-size="4" fill="#5a3a1a" text-anchor="middle" font-family="serif">N°.1</text>
</svg>
```

### 3) Apothecary Label Card

Card styled as an old remedy label.

- `bg-[#e8dcc0] border border-[#8a6a4a] p-6 rounded-none` (sharp corners — labels are cut, not rounded).
- Border: `border-2 border-dashed border-[#8a6a4a]` (perforated label edge).
- Heading: `font-serif text-xl text-[#3a2a0a]` (dark sepia heading).
- Description: `font-serif text-sm italic text-[#5a4a2a]` (italic old-medical-text feel).

### 4) Botanical Illustration Accent

Pressed herb or leaf SVG decoration.

```html
<svg viewBox="0 0 60 80" class="w-12 h-16 opacity-40">
  <g stroke="#3a4a1a" stroke-width="0.5" fill="none">
    <path d="M30,5 Q28,40 30,75"/>
    <ellipse cx="22" cy="25" rx="6" ry="3" fill="#5a6a2a" opacity="0.3" transform="rotate(-30 22 25)"/>
    <ellipse cx="38" cy="35" rx="6" ry="3" fill="#5a6a2a" opacity="0.3" transform="rotate(30 38 35)"/>
    <ellipse cx="20" cy="50" rx="5" ry="2.5" fill="#5a6a2a" opacity="0.3" transform="rotate(-25 20 50)"/>
    <ellipse cx="40" cy="60" rx="5" ry="2.5" fill="#5a6a2a" opacity="0.3" transform="rotate(25 40 60)"/>
  </g>
</svg>
```

### 5) Apothecary Button

Earth-tone button with botanical styling.

- `bg-gradient-to-b from-[#5a3a1a] to-[#3a2a0a] text-[#e8dcc0] font-serif font-medium px-8 py-3 border border-[#8a6a4a] shadow-[0_3px_6px_rgba(0,0,0,0.2)] hover:from-[#6a4a2a] hover:to-[#4a3a1a] transition-all`.

### 6) Wax Seal Accent

Red wax seal for authentication or emphasis.

- `w-14 h-14 rounded-full bg-[#8a1a1a] border-2 border-[#5a0a0a] flex items-center justify-center rotate-[-5deg] shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.1)]`.
- Text: `text-[#e8dcc0] font-serif font-bold text-xs uppercase text-center`.

### 7) Mortar and Pestle Divider

Simple decorative line element suggesting alchemical tools.

- A horizontal line with a small circle (mortar) and line (pestle) at center: `flex items-center justify-center gap-2`.
- `h-px bg-[#8a6a4a] flex-1` + `text-[#8a6a4a] text-lg` ( mortar emoji or SVG) + `h-px bg-[#8a6a4a] flex-1`.

## Color Palette System

### Core Apothecary Palette

| Color | Hex | Role |
|---|---|---|
| Amber | `#c47a20` | Glass bottles, warm accent |
| Deep Brown | `#3a2a0a` | Text, dark surfaces |
| Warm Brown | `#5a3a1a` | Buttons, borders |
| Kraft Paper | `#e8dcc0` | Primary surface |
| Aged Cream | `#f0e8d4` | Light surface |
| Forest Green | `#3a4a1a` | Botanical accents |
| Sage | `#5a6a2a` | Leaves, herbs |
| Sepia | `#8a6a4a` | Borders, muted elements |
| Wax Red | `#8a1a1a` | Wax seals, emphasis |
| Ink Black | `#1a0a0a` | Deepest text |

Rules: Earthy amber/brown/green tones dominate. The palette should feel like walking into a 19th-century apothecary — wood shelves, amber bottles, dried herbs, and aged labels. No bright primaries or cool blues.

## Typography Recommendations

- **Display:** Playfair Display, Cormorant, or IM Fell English (Victorian-era serif).
- **Labels:** `font-serif italic text-sm` (hand-written label feel).
- **Body:** EB Garamond, Lora (readable warm serif).
- **Accents:** Allura, Copperplate (old-engraving or script for botanical names).
- Latin botanical names in italic add authenticity: *Arnica montana*, *Salvia officinalis*.

## Interaction Rules

- Default: warm, earthy, trustworthy.
- Hover: labels warm slightly, shadows deepen.
  - `hover:shadow-[0_4px_12px_rgba(90,60,30,0.15)] hover:-translate-y-0.5 transition-all duration-300`.
- Active: `active:translate-y-0.5 active:shadow-none`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#5a3a1a]/30 focus:ring-offset-2 focus:ring-offset-[#e8dcc0]`.
- Transitions: `transition-all duration-300 ease-in-out` (slow, warm, deliberate — like preparing a remedy).

## Reusable Tailwind Tokens

- Kraft paper: `bg-[#e8dcc0]` with aging SVG overlay.
- Label card: `bg-[#e8dcc0] border-2 border-dashed border-[#8a6a4a] rounded-none`.
- Apothecary button: `bg-gradient-to-b from-[#5a3a1a] to-[#3a2a0a] text-[#e8dcc0] font-serif border border-[#8a6a4a]`.
- Amber accent: `text-[#c47a20]` or `bg-[#c47a20]/30`.
- Botanical SVG: pressed herb/leaf paths in `#3a4a1a` at `opacity-40`.
- Wax seal: `rounded-full bg-[#8a1a1a] border-2 border-[#5a0a0a] rotate-[-5deg] shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]`.

## Quality Checklist

- Background is aged kraft paper or cream (warm, textured, never pure white).
- At least one amber bottle or apothecary glass SVG.
- At least one botanical illustration (pressed herb/leaf).
- Color palette is earthy (amber, brown, green — no bright primaries).
- Cards styled as old remedy labels (dashed border, sharp corners).
- At least one wax seal decorative accent.
- Typography uses Victorian serif with italic label accents.
- The aesthetic reads as a 19th-century apothecary or alchemist's shop.
- Motion is warm and deliberate (like preparing a remedy).
- Latin botanical names or old-medical-text styling adds authenticity.

## Anti-Patterns

- Bright modern colors (apothecary is earthy amber/brown/green).
- Pure white backgrounds (use aged kraft paper `#e8dcc0`).
- Sans-serif typography alone (apothecary needs Victorian serif).
- Missing botanical illustrations (herbs and leaves are essential).
- Rounded modern cards (use sharp-cornered label styling).
- Missing amber bottle decorations (these are the signature apothecary element).
- Cold or clinical aesthetic (apothecary is warm and mysterious).
- Missing wax seals (these add authentication and old-world charm).
- Fast aggressive animations (motion should be slow and deliberate).
- Missing the dashed label border (this is the signature card treatment).

## Accessibility Considerations

- Kraft paper backgrounds with dark sepia text provide good contrast (verify WCAG AA — `#3a2a0a` on `#e8dcc0` passes).
- Focus states: `focus:ring-2 focus:ring-[#5a3a1a]/30` (brown ring on kraft paper).
- Botanical and bottle SVGs must be `aria-hidden="true"`.
- Italic label text must maintain readability at 14px+.
- Latin botanical names should have common-name alternatives for accessibility.
- Wax seals must not be the sole indicator of important status (include text).
- Touch targets must be adequate despite label card styling.
- Paper aging textures must not reduce text contrast.
