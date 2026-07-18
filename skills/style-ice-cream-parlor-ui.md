---
name: ice-cream-parlor-ui
description: Build ice cream parlor UI components (pastel sweet-shop palette, candy stripes, sprinkle decorations, waffle cone textures, soft-serve swirls, bubblegum pink, mint green, sugar-dusted surfaces) with sweet rounded shapes, sprinkle decorations, and the sugary joyful aesthetic of a 1950s ice cream parlor. Trigger this skill when the user asks for ice cream parlor, sweet shop, candy design, pastel sugary, bubblegum, or frozen dessert interfaces.
---

# Ice Cream Parlor UI

Use this skill to design and implementation sweet, joyful interfaces inspired by 1950s ice cream parlors: pastel sweet-shop palettes, candy stripe patterns, sprinkle decorations, waffle cone textures, soft-serve swirl shapes, and the sugary innocence of a neighborhood dessert shop.

## Core Material Recipes

### 1) Sweet Shop Pastel Background

Soft multi-pastel gradient.

- `bg-gradient-to-br from-[#ffe0ec] via-[#e0f0ff] to-[#e8ffe0]` (pink to blue to mint).

### 2) Waffle Cone Surface

Golden waffle-pattern texture panel.

- `bg-[#d4a050] rounded-lg p-6` with waffle pattern: `bg-[repeating-linear-gradient(60deg,transparent_0px,transparent_8px,rgba(120,70,20,0.1)_8px,rgba(120,70,20,0.1)_9px),repeating-linear-gradient(-60deg,transparent_0px,transparent_8px,rgba(120,70,20,0.1)_8px,rgba(120,70,20,0.1)_9px)]`.

### 3) Soft Serve Swirl Card

Rounded card with a swirled top decoration.

- `bg-[#fff5f0] rounded-b-2xl rounded-t-full p-6 shadow-[0_4px_12px_rgba(255,182,193,0.15)] border-2 border-[#ffc0cb]`.

### 4) Sprinkle Decoration

Rainbow sprinkle scatter.

```html
<div class="relative h-4">
  <span class="absolute left-[10%] top-1 w-3 h-1 bg-[#ff6b6b] rounded-full rotate-[30deg]"></span>
  <span class="absolute left-[25%] top-0 w-3 h-1 bg-[#4ecdc4] rounded-full rotate-[-45deg]"></span>
  <span class="absolute left-[40%] top-2 w-3 h-1 bg-[#ffe66d] rounded-full rotate-[60deg]"></span>
  <span class="absolute left-[55%] top-0 w-3 h-1 bg-[#a8e6cf] rounded-full rotate-[-20deg]"></span>
  <span class="absolute left-[70%] top-1 w-3 h-1 bg-[#c9b1ff] rounded-full rotate-[45deg]"></span>
  <span class="absolute left-[85%] top-2 w-3 h-1 bg-[#ffb6c1] rounded-full rotate-[-60deg]"></span>
</div>
```

### 5) Candy Stripe Border

Pastel diagonal stripe divider.

- `h-3 bg-[repeating-linear-gradient(45deg,#ffc0cb,#ffc0cb_8px,#b0e0e6_8px,#b0e0e6_16px)] rounded-full`.

### 6) Ice Cream Button

Sweet rounded pastel button.

- `bg-gradient-to-b from-[#ffb6c1] to-[#ff91a4] text-white font-bold rounded-full px-8 py-3 border-2 border-[#ff6b8a] shadow-[0_3px_0_#ff6b8a,inset_0_1px_0_rgba(255,255,255,0.4)] hover:translate-y-1 hover:shadow-[0_1px_0_#ff6b8a] active:shadow-none transition-all`.

## Color Palette System

| Color | Hex | Flavor |
|---|---|---|
| Bubblegum Pink | `#ffb6c1` | Strawberry |
| Soft Blue | `#b0e0e6` | Blue moon |
| Mint Green | `#a8e6cf` | Pistachio |
| Lemon Yellow | `#ffe66d` | Lemon sorbet |
| Lavender | `#c9b1ff` | Lavender honey |
| Waffle Gold | `#d4a050` | Cone |
| Cream | `#fff5f0` | Vanilla base |
| Deep Pink | `#ff6b8a` | Button accent |

Rules: Soft sugary pastels — every surface should look like a different ice cream flavor. Sprinkles add the only bright multicolor accents. Everything is rounded, soft, and sweet.

## Typography Recommendations

- **Display:** Pacifico, Fredoka One (rounded, sweet, dessert-shop signage).
- **Body:** Nunito, Quicksand (rounded, friendly, sweet).
- **Labels:** `font-bold text-sm` (sweet and direct).

## Reusable Tailwind Tokens

- Pastel bg: `bg-gradient-to-br from-[#ffe0ec] via-[#e0f0ff] to-[#e8ffe0]`.
- Waffle cone: `bg-[#d4a050]` with crosshatch waffle pattern.
- Soft serve card: `bg-[#fff5f0] rounded-b-2xl rounded-t-full`.
- Sprinkles: small rotated colored bars scattered across a row.
- Candy stripe: `bg-[repeating-linear-gradient(45deg,#ffc0cb,#ffc0cb_8px,#b0e0e6_8px,#b0e0e6_16px)]`.
- Ice cream button: `bg-gradient-to-b from-[#ffb6c1] to-[#ff91a4] rounded-full border-2 border-[#ff6b8a] shadow-[0_3px_0_#ff6b8a]`.

## Quality Checklist

- Pastel multi-color palette (pink, blue, mint, yellow, lavender).
- At least one waffle cone textured surface.
- Rainbow sprinkle scatter decoration.
- Candy stripe pastel divider.
- Soft-serve swirled card shape.
- Rounded soft shapes throughout.
- Typography is sweet and rounded.
- The aesthetic reads as 1950s ice cream parlor / sweet shop.
- Everything feels sweet, joyful, and sugary.
- Sprinkles add the only bright multicolor accents.

## Anti-Patterns

- Dark or muted palettes (ice cream is bright pastel).
- Sharp angular shapes (everything is rounded and soft).
- Missing sprinkles (rainbow sprinkles are the signature decoration).
- Missing waffle cone texture (the cone is essential ice cream imagery).
- Missing candy stripes (pastel stripes are classic sweet-shop).
- Serious or corporate tone (ice cream is joyful and innocent).
- Sans-serif cold typography (use sweet rounded fonts).
- Missing the multi-flavor pastel palette (each surface = a different flavor).
- Dense heavy layouts (ice cream aesthetic is light and airy).
- Bitter/dark color accents (everything is sweet and pastel).

## Accessibility Considerations

- Pastel backgrounds with dark text may have LOW contrast — verify WCAG AA carefully.
- Use darker text (`#5a2a3a`) or add solid text-background chips if needed.
- Focus states: `focus:ring-4 focus:ring-[#ff6b8a]/50` (deep pink ring on pastel).
- Sprinkle decorations must be `aria-hidden="true"` (decorative).
- The pastel palette can reduce contrast — test all text sizes.
- Touch targets must be adequate despite soft rounded styling.
