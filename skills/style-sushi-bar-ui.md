---
name: sushi-bar-ui
description: Build sushi bar UI components (Japanese restaurant minimalism, clean white surfaces, bamboo accents, ceramic plate textures, lacquered wood, wasabi green accents, minimalist Japanese hospitality) with pristine clean surfaces, sparse composition, and the refined omakase aesthetic. Trigger this skill when the user asks for sushi bar, Japanese restaurant, omakase, izakaya, clean culinary minimalism, or washoku interfaces.
---

# Sushi Bar UI

Use this skill to design and implementation pristine, minimal interfaces inspired by Japanese sushi restaurants: clean white surfaces, lacquered wood accents, ceramic plate textures, wasabi green and salmon pink accents, sparse composition, and the refined omakase philosophy of disciplined simplicity.

## Core Material Recipes

### 1) Clean White Surface

The foundational surface: pristine white (like a ceramic plate).

- `bg-white rounded-lg p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)] border border-gray-100`.

### 2) Lacquered Wood Accent

Dark Japanese lacquer (urushi) wood surface.

- `bg-gradient-to-br from-[#1a1008] to-[#0a0604] border border-[#3a2a10] rounded-lg p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_2px_8px_rgba(0,0,0,0.2)]`.

### 3) Bamboo Strip Divider

Thin bamboo accent strip.

- `h-1 bg-gradient-to-r from-[#a89060] to-[#8a7040] rounded-full`.

### 4) Menu Item Card

Minimal sushi menu item.

- `flex items-center justify-between bg-white border-b border-gray-100 py-3 px-2`.
- Name: `font-serif text-base text-gray-900`.
- Japanese name: `font-serif text-sm text-gray-400` (kanji/kana).
- Price: `font-mono text-sm text-gray-600`.

### 5) Sushi Bar Button

Clean minimal button with subtle warmth.

- `bg-[#1a3a1a] text-white font-medium text-sm px-6 py-2 rounded-sm hover:bg-[#2a4a2a] transition-colors`.
- Wasabi accent: `bg-[#7a9a3a] text-white font-medium text-sm px-6 py-2 rounded-sm`.

### 6) Ceramic Plate Accent

Circular ceramic decoration (like a serving plate).

- `w-24 h-24 rounded-full bg-gradient-to-br from-[#f5f0e8] to-[#e0d8c8] shadow-[inset_0_-1px_4px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.08)]`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Ceramic White | `#ffffff` | Primary surface |
| Warm White | `#f5f0e8` | Light accent |
| Lacquer Black | `#1a1008` | Dark surface |
| Wasabi Green | `#7a9a3a` | Primary accent |
| Salmon Pink | `#e88a6a` | Secondary accent |
| Bamboo Tan | `#a89060` | Divider accent |
| Charcoal | `#1a3a1a` | Button dark |
| Soy Sauce | `#3a1a08` | Deep accent |

Rules: White and lacquer-black dominate. Wasabi green and salmon pink are the ONLY colored accents. Everything else is monochromatic. The palette should feel like a pristine sushi counter.

## Typography Recommendations

- **Display:** Noto Serif JP, Playfair Display (elegant minimalist serif).
- **Body:** Inter, DM Sans (clean readable sans).
- **Japanese:** Noto Sans JP for kanji/kana accents.
- **Labels:** `font-medium text-sm text-gray-500 tracking-wide`.
- Typography should be DISCIPLINED and MINIMAL — no decorative excess.

## Reusable Tailwind Tokens

- Ceramic card: `bg-white rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.06)] border border-gray-100`.
- Lacquer panel: `bg-gradient-to-br from-[#1a1008] to-[#0a0604] border border-[#3a2a10]`.
- Wasabi button: `bg-[#7a9a3a] text-white rounded-sm`.
- Bamboo divider: `h-1 bg-gradient-to-r from-[#a89060] to-[#8a7040] rounded-full`.
- Ceramic plate: `rounded-full bg-gradient-to-br from-[#f5f0e8] to-[#e0d8c8] shadow-[inset_0_-1px_4px_rgba(0,0,0,0.06)]`.

## Quality Checklist

- White/clean surfaces dominate (pristine like a sushi counter).
- Lacquer-black dark accent panels present.
- Wasabi green and salmon pink as the ONLY color accents.
- Bamboo divider strips present.
- Ceramic plate-shaped decorative elements.
- Minimal sparse composition (omakase philosophy).
- Typography is disciplined and minimal.
- The aesthetic reads as Japanese sushi bar / omakase / washoku.
- Everything feels clean, precise, and refined.
- No decorative excess — disciplined simplicity.

## Anti-Patterns

- Cluttered dense layouts (sushi bar is MINIMAL and sparse).
- Bright multi-color palettes (palette is white + lacquer + 2 accents only).
- Decorative excess (sushi aesthetic is disciplined restraint).
- Warm cozy rustic textures (sushi is PRISTINE and clean).
- Heavy ornamental borders (use thin barely-visible borders).
- Dark backgrounds (sushi bar is bright, clean, well-lit).
- Missing the lacquer-black accent panels (urushi lacquer is essential Japanese material).
- Missing wasabi/salmon color accents (these are the ONLY allowed colors).
- Bold heavy typography (sushi needs thin elegant restraint).
- Rounded organic shapes (sushi design is precise and geometric).

## Accessibility Considerations

- White backgrounds with dark text provide excellent contrast (WCAG AAA).
- Focus states: `focus:ring-2 focus:ring-[#7a9a3a]/20` (wasabi green ring, subtle).
- The minimal layout naturally aids cognitive accessibility.
- Touch targets must be adequate despite minimal styling.
- The high-contrast clean aesthetic is naturally very accessible.
- Japanese text needs proper `lang="ja"` attribute for screen readers.
