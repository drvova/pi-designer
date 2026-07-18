---
name: coffee-shop-ui
description: Build coffee shop / cafe UI components (warm roasted browns, coffee crema textures, latte art swirls, craft paper, steam wisps, artisanal coziness) with espresso gradients, kraft textures, and the aromatic warmth of a neighborhood coffee shop. Trigger this skill when the user asks for coffee shop design, cafe UI, barista aesthetic, artisanal coffee, espresso interface, or warm roasted interfaces.
---

# Coffee Shop / Cafe UI

Use this skill to design and implementation warm, aromatic interfaces inspired by craft coffee shops: espresso-brown gradients, crema textures, latte art patterns, kraft paper surfaces, steam wisps, and the artisanal, handcrafted coziness of a neighborhood cafe.

## Non-Negotiable Foundations

- Coffee shop UI evokes the sensory experience of a craft cafe: the warmth of roasted beans, the smell of espresso, the texture of craft paper cups.
- Colors are warm and roasted: espresso brown, crema caramel, latte tan, steamed-milk cream, and dark roast black.
- Textures reference coffee materials: kraft paper, ceramic mugs, burlap coffee bags, and the foamy surface of a cappuccino.
- Typography blends warm serif (for the artisanal menu feel) with hand-lettered accents (for the chalkboard special).
- The mood is cozy, warm, and craft-focused — everything feels hand-made with care.
- Latte art and crema swirls provide organic decorative motifs.

## Core Material Recipes

### 1) Espresso Gradient Surface

Dark roasted coffee background.

- `bg-gradient-to-br from-[#3a2418] via-[#2a1a10] to-[#1a0e08]` (espresso to dark roast).

### 2) Kraft Paper Card

Warm craft paper surface (like a coffee cup).

- `bg-[#d4b896] rounded-lg p-6 shadow-[0_2px_8px_rgba(58,36,24,0.1)] border border-[#b09870]`.
- Paper texture: SVG noise at `opacity-[0.03]`.

### 3) Crema Swirl Accent

Latte art-inspired organic SVG swirl.

```html
<svg viewBox="0 0 100 100" class="w-20 h-20 opacity-30">
  <g fill="none" stroke="#c4a878" stroke-width="1">
    <path d="M50,20 Q30,40 50,60 Q70,80 50,90"/>
    <path d="M50,20 Q70,40 50,60 Q30,80 50,90"/>
    <ellipse cx="50" cy="50" rx="20" ry="30" opacity="0.5"/>
    <path d="M40,35 Q50,45 60,35 M35,55 Q50,65 65,55"/>
  </g>
</svg>
```

### 4) Steamed Milk Button

Warm cream-colored button with soft styling.

- `bg-gradient-to-b from-[#e8d8c0] to-[#d4c0a0] text-[#3a2418] font-serif font-medium rounded-full px-8 py-3 border border-[#b09870] shadow-[0_2px_6px_rgba(58,36,24,0.15)] hover:from-[#f0e0c8] hover:to-[#dcc8a8] transition-all`.

### 5) Espresso Button

Dark roast button.

- `bg-gradient-to-b from-[#3a2418] to-[#1a0e08] text-[#e8d8c0] font-serif font-medium rounded-full px-8 py-3 border border-[#5a3a28] shadow-[0_3px_6px_rgba(0,0,0,0.2)] hover:from-[#4a3428] hover:to-[#2a1a10] transition-all`.

### 6) Steam Wisp Animation

Gentle rising steam from a hot cup.

```css
@keyframes steam {
  0% { transform: translateY(0) scaleX(1); opacity: 0; }
  20% { opacity: 0.15; }
  80% { opacity: 0.05; }
  100% { transform: translateY(-40px) scaleX(1.5); opacity: 0; }
}
```

### 7) Coffee Bean Decoration

Simple coffee bean SVG accent.

```html
<svg viewBox="0 0 30 20" class="w-6 h-4 text-[#3a2418] opacity-30">
  <ellipse cx="15" cy="10" rx="12" ry="7" fill="currentColor"/>
  <path d="M15,3 Q15,10 15,17" stroke="#d4b896" stroke-width="1" fill="none"/>
</svg>
```

### 8) Burlap Texture Strip

Coffee bag texture accent.

- `h-4 bg-[#8a6a3a] bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_2px,rgba(0,0,0,0.08)_2px,rgba(0,0,0,0.08)_3px)]`.

## Color Palette System

### Core Coffee Palette

| Color | Hex | Role |
|---|---|---|
| Dark Roast | `#1a0e08` | Deepest background |
| Espresso | `#2a1a10` | Primary dark surface |
| Roast Brown | `#3a2418` | Text, borders |
| Caramel | `#5a3a28` | Secondary accent |
| Crema | `#c4a878` | Warm accent |
| Latte Tan | `#d4b896` | Kraft paper surface |
| Steamed Cream | `#e8d8c0` | Light surface |
| Foam White | `#f5ead8` | Lightest surface |
| Burlap | `#8a6a3a` | Texture accents |

Rules: Warm roasted browns and creams dominate. The palette should smell like fresh espresso — dark, rich, and warm. No cool blues or bright colors.

## Typography Recommendations

- **Display:** Playfair Display, Fraunces, or Lora (warm artisanal serif).
- **Hand-lettered:** Caveat, Kalam (chalkboard menu special).
- **Body:** Lora, Source Serif Pro (warm readable serif).
- **Labels:** `font-serif font-medium text-sm tracking-wide` (menu item style).
- Typography should feel like a hand-printed artisanal coffee menu.

## Interaction Rules

- Default: warm, cozy, handcrafted.
- Hover: surfaces warm slightly (brighten like milk being steamed).
  - `hover:shadow-[0_4px_12px_rgba(58,36,24,0.15)] hover:-translate-y-0.5 transition-all duration-300`.
- Active: `active:translate-y-0.5 active:shadow-none`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#5a3a28]/30`.
- Transitions: `transition-all duration-300 ease-in-out` (warm, slow, like brewing coffee).

## Reusable Tailwind Tokens

- Espresso bg: `bg-gradient-to-br from-[#3a2418] via-[#2a1a10] to-[#1a0e08]`.
- Kraft card: `bg-[#d4b896] rounded-lg border border-[#b09870] shadow-[0_2px_8px_rgba(58,36,24,0.1)]`.
- Milk button: `bg-gradient-to-b from-[#e8d8c0] to-[#d4c0a0] text-[#3a2418] font-serif rounded-full border border-[#b09870]`.
- Espresso button: `bg-gradient-to-b from-[#3a2418] to-[#1a0e08] text-[#e8d8c0] font-serif rounded-full border border-[#5a3a28]`.
- Crema swirl: organic SVG paths `stroke="#c4a878"`.
- Burlap strip: `bg-[#8a6a3a] bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_2px,rgba(0,0,0,0.08)_2px,rgba(0,0,0,0.08)_3px)]`.

## Quality Checklist

- Color palette is warm roasted browns and creams (no cool colors).
- At least one kraft paper surface card.
- Crema swirl or latte art SVG decoration present.
- Steam wisp animation on at least one element (optional but adds atmosphere).
- Coffee bean decorative accent present.
- Burlap texture strip divider.
- Typography blends warm serif with handwritten accents.
- Buttons use either steamed-milk (light) or espresso (dark) treatment.
- The aesthetic reads as a cozy artisanal coffee shop or cafe.
- Everything feels warm, handcrafted, and aromatic.

## Anti-Patterns

- Cool blue or gray color palettes (coffee is warm brown and cream).
- Missing kraft paper textures (this is the signature cafe surface).
- Bright saturated colors (coffee palette is muted and roasted).
- Cold modern sans-serif typography (coffee shop needs warm serif).
- Missing crema/latte art decorations (these are the signature organic motifs).
- Sharp angular shapes (coffee shop is warm and rounded).
- Fast aggressive animations (motion should be gentle like steam rising).
- Missing coffee bean or burlap decorations (these add material authenticity).
- Pure white backgrounds (use warm cream `#f5ead8` or kraft `#d4b896`).
- Corporate sterile design (coffee shop is artisanal and handcrafted).

## Accessibility Considerations

- Warm kraft backgrounds with dark espresso text provide good contrast (verify WCAG AA — `#3a2418` on `#d4b896` passes).
- Focus states: `focus:ring-2 focus:ring-[#5a3a28]/30` (caramel ring on kraft).
- Crema swirl and coffee bean SVGs must be `aria-hidden="true"`.
- Steam animations must respect `prefers-reduced-motion`.
- Warm serif typography at 16px+ maintains readability.
- The muted warm palette is naturally low-glare (good for extended viewing).
- Touch targets must be adequate despite rounded organic styling.
