---
name: vintage-signage-ui
description: Build vintage signage UI components (hand-painted ghost signs, weathered enamel, art deco store fronts, gilded gold-leaf lettering, aged brass, chipped paint textures, old shop awning) with faded advertisements, sign-painter typography, and the nostalgic charm of century-old commercial art. Trigger this skill when the user asks for vintage signage, ghost signs, hand-painted signs, old shop, weathered enamel, gold-leaf lettering, or retro storefront interfaces.
---

# Vintage Signage UI

Use this skill to design and implementation nostalgic, weathered interfaces inspired by old hand-painted signs: faded ghost sign advertisements, weathered enamel plaques, gilded gold-leaf lettering, chipped paint textures, art deco storefront styling, and the craft of the sign painter.

## Core Material Recipes

### 1) Ghost Sign Brick Wall

Faded painted advertisement on old brick.

- `bg-[#8a6a5a]` (weathered brick base).
- Brick pattern: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_30px,rgba(0,0,0,0.08)_30px,rgba(0,0,0,0.08)_32px),repeating-linear-gradient(90deg,transparent_0px,transparent_60px,rgba(0,0,0,0.08)_60px,rgba(0,0,0,0.08)_62px)]`.
- Faded painted text: `text-[#e8dcc0]/30 font-serif text-6xl font-bold tracking-tight` (barely visible old advertisement).

### 2) Weathered Enamel Plaque

Old chipped enamel sign surface.

- `bg-gradient-to-br from-[#1a3a5a] to-[#0a2a4a] border-4 border-[#3a3a3a] rounded-sm p-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)]`.
- Chip marks: small irregular SVG shapes where enamel has chipped to reveal metal beneath: scattered `bg-[#5a5a5a]` shapes at edges.
- Rust: `bg-[radial-gradient(circle_at_80%_20%,rgba(180,90,40,0.2)_0%,transparent_10%)]`.

### 3) Gold Leaf Lettering

Gilded sign-painter text.

- `text-transparent bg-clip-text bg-gradient-to-b from-[#f5d76e] via-[#c9a84c] to-[#8a6a1a] font-serif font-bold text-4xl tracking-wide`.

### 4) Chipped Paint Card

Card with paint-chip texture revealing layers.

- `bg-[#c41e1e] p-6 relative` with overlay patches of `bg-[#e8dcc0]` (primer showing through) and `bg-[#5a3a1a]` (bare wood showing through).
- Crackle: SVG thin lines `stroke="#3a1a08" opacity="0.2"` (aged paint crackle).

### 5) Sign Painter Button

Bold sign-painter style button.

- `bg-[#1a3a5a] text-[#f5d76e] font-serif font-bold uppercase tracking-[0.15em] px-8 py-3 border-[3px] border-[#f5d76e] hover:bg-[#0a2a4a] transition-colors rounded-sm shadow-[3px_3px_0_rgba(0,0,0,0.2)]`.

### 6) Awning Stripe Border

Storefront awning stripe pattern.

- `bg-[repeating-linear-gradient(90deg,#c41e1e_0px,#c41e1e_15px,#e8dcc0_15px,#e8dcc0_30px)] h-3` (red-and-cream awning stripes).

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Enamel Navy | `#1a3a5a` | Primary sign surface |
| Enamel Red | `#c41e1e` | Accent sign surface |
| Gold Leaf | `#c9a84c` | Gilded lettering |
| Light Gold | `#f5d76e` | Gold highlight |
| Cream Paint | `#e8dcc0` | Text on dark, primer |
| Weathered Brick | `#8a6a5a` | Ghost sign background |
| Rust | `#b45a28` | Weathering accent |
| Dark Metal | `#3a3a3a` | Enamel frame |

Rules: Enamel navy/red and gold-leaf are the sign-painter's palette. Brick and cream provide ghost-sign backgrounds. Everything looks aged, weathered, and hand-crafted.

## Typography Recommendations

- **Display:** Playfair Display, Bodoni (sign-painter serif with flourishes).
- **Alternative:** Bungee, Anton (bold block lettering for commercial signs).
- **Body:** Lora, Source Serif Pro (warm readable serif).
- **Labels:** `font-bold uppercase tracking-[0.15em]` (commercial sign lettering).
- Typography should feel HAND-PAINTED — generous spacing, bold weight, slight imperfection.

## Reusable Tailwind Tokens

- Ghost sign brick: `bg-[#8a6a5a]` with brick pattern + faded text overlay.
- Enamel plaque: `bg-gradient-to-br from-[#1a3a5a] to-[#0a2a4a] border-4 border-[#3a3a3a] rounded-sm`.
- Gold leaf text: `text-transparent bg-clip-text bg-gradient-to-b from-[#f5d76e] via-[#c9a84c] to-[#8a6a1a]`.
- Sign button: `bg-[#1a3a5a] text-[#f5d76e] font-bold uppercase border-[3px] border-[#f5d76e] rounded-sm shadow-[3px_3px_0_rgba(0,0,0,0.2)]`.
- Awning stripe: `bg-[repeating-linear-gradient(90deg,#c41e1e_0px,#c41e1e_15px,#e8dcc0_15px,#e8dcc0_30px)]`.

## Quality Checklist

- At least one weathered enamel sign surface.
- Gold-leaf gradient text treatment present.
- Ghost sign (faded painted advertisement) element present.
- Chipped paint texture on at least one surface.
- Awning stripe pattern border.
- Brick or aged wall background visible.
- Typography looks hand-painted (bold, wide-tracked, serif).
- The aesthetic reads as vintage signage / old shop fronts / hand-painted signs.
- Everything feels aged, weathered, and nostalgic.
- Colors are enamel-navy, enamel-red, gold-leaf, and cream.

## Anti-Patterns

- Clean modern digital surfaces (vintage signage is WEATHERED and aged).
- Bright neon colors (the palette is aged enamel + gold leaf).
- Missing paint chip/crackle textures (weathering is essential).
- Sans-serif modern typography (signage uses bold serif or block display).
- Missing gold-leaf lettering (gilded text is the signage hallmark).
- Missing the ghost sign faded advertisement (this is a signature element).
- Pristine unchipped surfaces (everything should show age).
- Light bright backgrounds (vintage signage is on dark enamel or weathered brick).
- Missing awning stripes (these are classic storefront elements).
- Smooth gradients (vintage signage uses flat enamel colors + gold gilding).

## Accessibility Considerations

- Dark enamel backgrounds with gold/cream text provide good contrast (verify WCAG AA).
- Focus states: `focus:ring-3 focus:ring-[#f5d76e]/50` (gold ring on enamel).
- Paint chip and crackle textures must not reduce text contrast.
- Ghost sign faded text is decorative — `aria-hidden="true"` if not conveying information.
- The aged aesthetic should not compromise readability of functional text.
- Touch targets must be adequate despite thick enamel border styling.
