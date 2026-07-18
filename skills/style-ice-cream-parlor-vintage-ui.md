---
name: ice-cream-parlor-vintage-ui
description: Build vintage ice cream parlor UI components (spinning flavor tubs, waffle cone stack, soda fountain stools, pastel tile, cherry on top, sundae glass) with pastel surfaces, chrome soda fountain fixtures, and the nostalgic sweetness of a 1950s ice cream parlor. Trigger this skill when the user asks for ice cream parlor design, vintage parlor UI, spinning flavor tub, waffle cone texture, soda fountain stool, pastel tile checkerboard, cherry-on-top accent, sundae glass layers, chrome napkin dispenser, retro ice cream aesthetic, or 1950s ice cream shop interfaces.
---

# Ice Cream Parlor Vintage UI

Use this skill to design and implement interfaces inspired by the classic 1950s ice cream parlor: spinning multi-flavor tubs behind a curved glass counter, waffle cone crosshatch textures on triangular shapes, chrome soda fountain stools with pastel vinyl seats, checkerboard pastel tile floors in pink-blue-yellow, cherry-on-top accent details, layered sundae glasses as content containers, chrome napkin dispensers as decorative elements, and the warm nostalgic sweetness of a parlor where every visit ends with a smile and a brain freeze.

## Non-Negotiable Foundations

- Ice Cream Parlor Vintage UI simulates the 1950s soda fountain ice cream shop: spinning flavor tubs behind the counter, waffle cone textures on surfaces, chrome stools with vinyl seats at the fountain, pastel checkerboard tile floors, and a sundae glass silhouette for every special.
- Spinning flavor tubs are the SIGNATURE decorative element — rotating cylinders displaying multiple pastel color scoops (pink, blue, yellow, mint) in a row behind the counter glass. They must appear in at least one prominent location as a rotating feature display.
- Waffle cone crosshatch texture is the signature surface pattern — a diagonal grid of toasted golden lines on a warm beige background, applied to triangular or conical shapes. It appears on header banners, button accents, and decorative dividers.
- Chrome soda fountain stools are the signature seating element — chrome circular base, chrome stem, and a round pastel vinyl seat cushion (usually pink or mint). They serve as list markers, avatar containers, and decorative counters.
- Pastel tile checkerboard is the signature floor and background pattern — alternating squares in pastel pink and pastel blue, or pastel yellow and pastel white. It must appear as a footer strip, border element, or section background.
- Cherry-on-top accent is the signature delight element — a bright cherry red circle with a green stem that sits atop headings, cards, and feature callouts. Every major section should have one cherry accent at its peak.
- Sundae glass layered container is the signature content wrapper — a tall tapered glass shape (wider at top, narrow stem, circular base) with horizontal layers representing scoop flavors. Content cards and feature panels use this shape.
- Chrome napkin dispenser is the signature desktop decoration — a rectangular chrome box with a triangular slot on top and a napkin peeking out. It serves as a call-to-action button shape and decorative sidebar element.
- Colors are pastel pink, pastel blue, pastel yellow, cherry red, waffle cone gold, chrome silver, vanilla cream, and chocolate brown — the palette of sweet nostalgia.
- The aesthetic is cheerful, sweet, nostalgic, and indulgent — a place where every scoop is generous and every visit is a small celebration.

## Core Material Recipes

### 1) Spinning Flavor Tub Display

Rotating cylindrical tub showing multiple flavor colors behind the counter glass.

- Tub housing: `bg-gradient-to-b from-[#c0c8c8] via-[#d8dcd8] to-[#a0a8a8] rounded-xl p-4 shadow-[0_4px_16px_rgba(0,0,0,0.25),inset_0_2px_4px_rgba(255,255,255,0.5)] border-2 border-[#c0c8c8]`.
- Glass window: `bg-gradient-to-b from-white/30 via-white/10 to-transparent rounded-t-lg p-3 backdrop-blur-[1px] border border-white/40`.
- Tub cylinder track: `relative h-16 overflow-hidden rounded-lg`.
- Flavor scoop row: `flex gap-2 animate-[tub-rotate_8s_linear_infinite]`.
- Individual scoop: `w-14 h-14 rounded-full shadow-[inset_0_-4px_8px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(255,255,255,0.6),0_2px_6px_rgba(0,0,0,0.2)]`.
- Pink scoop: `bg-gradient-to-br from-[#f4b0c4] via-[#f0a0b8] to-[#e890a8]`.
- Blue scoop: `bg-gradient-to-br from-[#a0c8e8] via-[#90b8d8] to-[#80a8c8]`.
- Yellow scoop: `bg-gradient-to-br from-[#f0e080] via-[#e8d870] to-[#e0d060]`.
- Scoop highlight: `before:absolute before:top-1 before:left-2 before:w-4 before:h-3 before:bg-white/50 before:rounded-full before:blur-[2px]`.

Tub rotation keyframes:
```css
@keyframes tub-rotate {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

### 2) Waffle Cone Crosshatch Texture

Diagonal grid pattern on triangular shapes for headers, buttons, and dividers.

- Waffle cone base: `bg-gradient-to-b from-[#e8c888] via-[#d4a868] to-[#c49848]`.
- Crosshatch grid: `bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,rgba(180,130,60,0.4)_5px,rgba(180,130,60,0.4)_6px),repeating-linear-gradient(-45deg,transparent,transparent_5px,rgba(180,130,60,0.4)_5px,rgba(180,130,60,0.4)_6px)]`.
- Triangular clip shape: `clip-path:polygon(50%_0%,0%_100%,100%_100%)`.
- Waffle cone card variant: `bg-gradient-to-b from-[#e8c888] to-[#d4a868] p-6 clip-path:polygon(50%_0%,0%_100%,100%_100%) shadow-[0_4px_12px_rgba(0,0,0,0.2)]`.
- Waffle divider strip: `h-3 bg-gradient-to-r from-[#e8c888] via-[#d4a868] to-[#e8c888] bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(180,130,60,0.3)_4px,rgba(180,130,60,0.3)_5px),repeating-linear-gradient(-45deg,transparent,transparent_4px,rgba(180,130,60,0.3)_4px,rgba(180,130,60,0.3)_5px)]`.
- Warm glow overlay: `after:absolute after:inset-0 after:bg-gradient-to-b after:from-white/20 after:to-transparent after:rounded-inherit`.
- Waffle cone button: `bg-gradient-to-b from-[#e8c888] to-[#d4a868] px-6 py-3 rounded-full bg-[repeating-linear-gradient(45deg,transparent,transparent_3px,rgba(180,130,60,0.25)_3px,rgba(180,130,60,0.25)_4px),repeating-linear-gradient(-45deg,transparent,transparent_3px,rgba(180,130,60,0.25)_3px,rgba(180,130,60,0.25)_4px)] shadow-[0_4px_8px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(255,255,255,0.4)] border border-[#c49848]`.

### 3) Chrome Soda Fountain Stool

Swivel stool with chrome base and pastel vinyl seat for counters and list markers.

- Chrome base: `w-10 h-3 bg-gradient-to-b from-[#e8ece8] to-[#909890] rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.3)]`.
- Chrome stem: `w-1.5 h-8 bg-gradient-to-r from-[#a0a8a0] via-[#d0d4d0] to-[#a0a8a0] mx-auto`.
- Foot rest ring: `w-7 h-1 bg-gradient-to-b from-[#c0c8c0] to-[#a0a8a0] rounded-full mx-auto shadow-[0_1px_2px_rgba(0,0,0,0.2)]`.
- Vinyl seat: `w-10 h-3 rounded-full mx-auto -mt-0.5 shadow-[inset_0_1px_3px_rgba(0,0,0,0.25),0_1px_2px_rgba(0,0,0,0.15)]`.
- Pink vinyl seat: `bg-gradient-to-b from-[#f8c0d0] to-[#e8a0b8]`.
- Mint vinyl seat: `bg-gradient-to-b from-[#b8e0c8] to-[#a0d0b0]`.
- Vinyl gloss: `after:absolute after:inset-x-1 after:top-0 after:h-1 after:bg-white/40 after:rounded-full after:blur-[1px]`.
- Stool container: `flex flex-col items-center`.
- Miniature stool marker: `w-5 h-1.5 bg-gradient-to-b from-[#f8c0d0] to-[#e8a0b8] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.2)] mb-0.5` paired with a `w-0.5 h-3 bg-gradient-to-r from-[#a0a8a0] via-[#d0d4d0] to-[#a0a8a0] mx-auto`.

### 4) Pastel Tile Checkerboard Floor

Alternating pastel squares for backgrounds, borders, and section strips.

- Pink-blue checkerboard: `bg-[repeating-conic-gradient(#f4b0c4_0%_25%,#a0c8e8_0%_50%)] bg-[length:32px_32px]`.
- Yellow-cream checkerboard: `bg-[repeating-conic-gradient(#f0e080_0%_25%,#fff5e0_0%_50%)] bg-[length:32px_32px]`.
- Soft muted variant: `bg-[repeating-conic-gradient:#f0c0d4_0%_25%,#b0d0e8_0%_50%)] bg-[length:24px_24px] opacity-60`.
- Floor tile border strip: `h-4 bg-[repeating-conic-gradient(#f4b0c4_0%_25%,#a0c8e8_0%_50%)] bg-[length:16px_16px] rounded-sm`.
- Tile grout lines: `relative before:absolute before:inset-0 before:bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(255,255,255,0.4)_1px,rgba(255,255,255,0.4)_2px),repeating-linear-gradient(90deg,transparent,transparent_1px,rgba(255,255,255,0.4)_1px,rgba(255,255,255,0.4)_2px)] before:bg-[length:32px_32px]`.
- Subtle tile background: `bg-[#fff5e0] bg-[radial-gradient(circle_at_25%_25%,#f4b0c4_1px,transparent_1px),radial-gradient(circle_at_75%_75%,#a0c8e8_1px,transparent_1px)] bg-[length:32px_32px]`.

### 5) Cherry-on-Top Accent

Bright cherry with green stem for heading peaks and card callouts.

- Cherry body: `w-4 h-4 rounded-full bg-gradient-to-br from-[#e84848] to-[#c41e1e] shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_-1px_2px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(255,255,255,0.3)]`.
- Cherry highlight: `before:absolute before:top-0.5 before:left-1 before:w-1.5 before:h-1 before:bg-white/50 before:rounded-full before:blur-[1px]`.
- Cherry stem: `w-0.5 h-3 bg-[#3a8a3a] rounded-full -mb-1 mx-auto rotate-[-15deg]`.
- Cherry leaf: `w-2 h-1 bg-[#4a9a4a] rounded-full rotate-[30deg] absolute -top-1 right-0`.
- Cherry accent cluster: `relative flex flex-col items-center`.
- Large cherry (for headings): `w-6 h-6 rounded-full bg-gradient-to-br from-[#e84848] to-[#c41e1e] shadow-[0_3px_6px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.3)]`.
- Large stem: `w-0.5 h-4 bg-[#3a8a3a] rounded-full -mb-2 mx-auto`.

### 6) Sundae Glass Layered Container

Tall tapered glass shape with horizontal flavor layers for content cards.

- Glass outline: `relative bg-gradient-to-b from-white/20 via-white/10 to-transparent rounded-t-2xl border-2 border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(255,255,255,0.3)]`.
- Glass body: `rounded-t-2xl p-6 bg-gradient-to-b from-white/10 to-white/5`.
- Glass base stem: `w-3 h-6 bg-gradient-to-r from-white/30 via-white/50 to-white/30 mx-auto`.
- Glass base disc: `w-16 h-2 bg-gradient-to-b from-white/40 to-white/20 rounded-full mx-auto border border-white/30`.
- Scoop layer (pink): `h-12 bg-gradient-to-b from-[#f4b0c4] to-[#f0a0b8] border-b border-white/30 rounded-t-2xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.4)]`.
- Scoop layer (blue): `h-12 bg-gradient-to-b from-[#a0c8e8] to-[#90b8d8] border-b border-white/30 shadow-[inset_0_2px_4px_rgba(255,255,255,0.4)]`.
- Scoop layer (yellow): `h-12 bg-gradient-to-b from-[#f0e080] to-[#e8d870] border-b border-white/30 shadow-[inset_0_2px_4px_rgba(255,255,255,0.4)]`.
- Scoop layer (chocolate): `h-12 bg-gradient-to-b from-[#7a4a2a] to-[#5a3a1a] border-b border-white/30 shadow-[inset_0_2px_4px_rgba(255,255,255,0.15)]`.
- Whipped cream top: `h-8 bg-gradient-to-b from-white via-[#fff8f0] to-white rounded-t-2xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),0_2px_4px_rgba(0,0,0,0.1)]`.
- Topping drip: `absolute -bottom-1 left-1/4 w-2 h-4 bg-[#c41e1e] rounded-b-full opacity-80`.

### 7) Chrome Napkin Dispenser

Rectangular chrome box with triangular slot for CTAs and decorative sidebars.

- Dispenser body: `bg-gradient-to-b from-[#e0e4e0] via-[#c0c8c0] to-[#a0a8a0] rounded-lg w-12 h-16 shadow-[0_4px_8px_rgba(0,0,0,0.25),inset_0_2px_4px_rgba(255,255,255,0.5)] border border-[#b0b8b0]`.
- Top slot: `w-8 h-0.5 bg-[#808880] mx-auto rounded-full`.
- Napkin peek: `w-6 h-4 bg-white rounded-t-sm mx-auto -mt-0.5 shadow-[0_-1px_2px_rgba(0,0,0,0.1)]`.
- Side shine: `before:absolute before:top-2 before:left-1 before:w-1 before:h-12 before:bg-white/40 before:rounded-full before:blur-[1px]`.
- Dispenser container: `relative flex flex-col items-center gap-0.5`.
- Wide dispenser (CTA button): `bg-gradient-to-b from-[#e0e4e0] via-[#c0c8c0] to-[#a0a8a0] rounded-lg px-6 py-3 shadow-[0_4px_8px_rgba(0,0,0,0.25),inset_0_1px_2px_rgba(255,255,255,0.5)] border border-[#b0b8b0]`.

### 8) Vanilla Cream Surface

The dominant background surface for cards, panels, and content areas.

- Vanilla surface: `bg-[#fff5e0] rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.1)]`.
- Vanilla with subtle warmth: `bg-gradient-to-b from-[#fff8e8] to-[#f5ebd0] rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.1)]`.
- Speckled vanilla: `bg-[#fff5e0] bg-[radial-gradient(circle_at_20%_30%,rgba(212,168,104,0.06)_1px,transparent_1px),radial-gradient(circle_at_60%_70%,rgba(212,168,104,0.04)_1px,transparent_1px)] bg-[length:16px_16px]`.
- Chrome piping edge: `ring-2 ring-[#e0e4e0] shadow-[0_0_0_3px_#c0c8c8,inset_0_1px_2px_rgba(255,255,255,0.6)]`.
- Top chrome strip: `before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-gradient-to-r before:from-[#c0c8c8] before:via-[#e8ece8] before:to-[#c0c8c8] before:rounded-t-xl`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Pastel Pink | `#f4b0c4` | Primary pastel, pink scoops, pink tile, seat vinyl, sweet accents |
| Pastel Pink Light | `#f8c0d0` | Vinyl seat highlight, pink glow surfaces |
| Pastel Blue | `#a0c8e8` | Secondary pastel, blue scoops, blue tile, cool accents |
| Pastel Blue Light | `#b0d0e8` | Blue tile muted variant, cool surface highlights |
| Pastel Yellow | `#f0e080` | Tertiary pastel, yellow scoops, yellow tile, warm accents |
| Pastel Yellow Light | `#f0e890` | Yellow tile muted variant, warm surface highlights |
| Cherry Red | `#c41e1e` | Cherry accents, topping drips, primary bold accent |
| Cherry Red Light | `#e84848` | Cherry body highlight, warm red accents |
| Waffle Cone Gold | `#d4a868` | Waffle texture, cone surfaces, warm golden tones |
| Waffle Cone Dark | `#c49848` | Waffle shadow, cone deep tones, border accents |
| Chrome Silver | `#c0c8c8` | Soda fountain fixtures, napkin dispenser, trim edges |
| Chrome Light | `#e8ece8` | Chrome highlights, stem reflections, glass reflections |
| Chrome Dark | `#909890` | Chrome shadows, base depth, trim shadow accents |
| Vanilla Cream | `#fff5e0` | Dominant background, card surfaces, light text on dark |
| Vanilla Warm | `#f5ebd0` | Warmer surface variant, subtle background depth |
| Chocolate Brown | `#5a3a1a` | Chocolate scoops, dark text on light surfaces, rich accents |
| Chocolate Light | `#7a4a2a` | Chocolate scoop highlights, warm brown accents |
| Stem Green | `#3a8a3a` | Cherry stems, leaf accents, natural green details |
| Stem Green Light | `#4a9a4a` | Leaf highlights, secondary green accent |

Rules: Pastel pink is the dominant signature color of the parlor — it appears on seats, scoops, tiles, and accents more than any other color. Pastel blue is the secondary pastel, always paired with pink in checkerboard patterns. Pastel yellow provides warm accent balance. Cherry red is used sparingly for accent pops — cherry-on-top details, topping drips, and call-to-action emphasis. Waffle cone gold is the warm material for surfaces and texture. Chrome silver is the fixture material — stools, napkin dispensers, trim, and tub housings. Vanilla cream is the dominant background for all content areas. Chocolate brown is for text on light surfaces and chocolate flavor accents. Stem green is reserved exclusively for cherry stems and leaf details.

## Typography Recommendations

Ice cream parlor typography mixes retro sweetness with soda fountain signage:

- **Display headings:** Bungee Black or Luckiest Guy (chunky retro sweet signage).
- **Menu section headings:** Pacifico or Lobster (handwritten soda fountain menu feel).
- **Flavor labels:** Poppins SemiBold or Nunito Bold (friendly rounded sans-serif for flavor names).
- **Body text:** Lora or Merriweather at `font-normal` (menu readability for descriptions and specials).
- **Price tags:** `font-mono font-bold text-sm` with `tracking-wider` (cash register / vintage price tag style).
- **Specials board:** Permanent Marker or Caveat (chalkboard specials handwriting for daily flavors).
- **Signage text:** Bungee or Russo One (chrome-letter parlor signage for OPEN HOURS and flavor names).
- **Numbers (order/counter):** VT323 or DSEG7 Classic (digital counter display for order numbers).
- Text on pastel surfaces should use chocolate brown (`#5a3a1a`) for strong contrast.
- Text on chrome surfaces should use dark text with optional subtle warm tint.
- Display headings should have a subtle text-shadow for depth: `[text-shadow:0_2px_4px_rgba(90,58,26,0.2)]`.

## Component Architecture Pattern

1. Pastel tile checkerboard strip at the top or bottom to establish the parlor floor identity immediately.
2. Chrome-framed glass counter panel as the primary structural container (chrome-trimmed, glass-windowed, warm vanilla interior).
3. Spinning flavor tub display in the hero area or as a rotating featured flavors carousel.
4. Waffle cone triangular dividers separating sections with the crosshatch texture.
5. Sundae glass layered cards for content sections (each card is a glass shape with flavor-layer colors).
6. Cherry-on-top accents perched on section headings and card peaks.
7. Chrome soda fountain stools as list markers, avatar frames, or decorative counters.
8. Chrome napkin dispenser shapes as CTA buttons and sidebar callout boxes.
9. Vanilla cream surface cards for primary content areas with chrome piping edges.
10. Pastel tile footer with cherry-red accent closing the layout.

## Interaction Rules

- Default state: sweet, bright, cheerful — flavor tubs spinning gently, cherry accents perched, stools inviting.
- Hover (buttons): waffle cone texture brightens, chrome reflects more light, cherry bounces slightly.
  - `hover:shadow-[0_6px_16px_rgba(212,168,104,0.4),inset_0_2px_4px_rgba(255,255,255,0.6)] hover:translate-y-[-1px] transition-all duration-200`.
- Active (buttons): press down like scooping into a tub.
  - `active:translate-y-0.5 active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.2)]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#f4b0c4] focus:ring-offset-2 focus:ring-offset-[#fff5e0]`.
- Flavor tub carousel: continuous slow rotation, pauses on hover to inspect flavors.
  - `hover:[animation-play-state:paused]`.
- Cherry accent: gentle bobbing animation on headings to simulate a cherry wobbling on top.
  - `animate-[cherry-bob_2s_ease-in-out_infinite]`.
- Sundae glass: scoop layers can stack with a stagger animation on load.
- Transitions: `transition-all duration-200` (smooth, sweet — like cream settling).
- Continuous animations: flavor tub rotation, cherry bobbing, optional cream drip.

Cherry bob keyframes:
```css
@keyframes cherry-bob {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-2px) rotate(3deg); }
  75% { transform: translateY(-1px) rotate(-2deg); }
}
```

Cream drip keyframes:
```css
@keyframes cream-drip {
  0% { transform: scaleY(0); opacity: 0; }
  50% { transform: scaleY(1); opacity: 0.8; }
  100% { transform: scaleY(1.1); opacity: 0; }
}
```

## Reusable Tailwind Tokens

- Chrome panel: `bg-gradient-to-b from-[#e0e4e0] via-[#c0c8c0] to-[#a0a8a0] rounded-xl border-2 border-[#c0c8c8] shadow-[0_4px_16px_rgba(0,0,0,0.25),inset_0_2px_4px_rgba(255,255,255,0.5)]`
- Vanilla surface: `bg-[#fff5e0] rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.1)]`
- Pastel tile checkerboard: `bg-[repeating-conic-gradient(#f4b0c4_0%_25%,#a0c8e8_0%_50%)] bg-[length:32px_32px]`
- Cherry accent: `w-4 h-4 rounded-full bg-gradient-to-br from-[#e84848] to-[#c41e1e] shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.3)]`
- Waffle cone surface: `bg-gradient-to-b from-[#e8c888] to-[#d4a868] bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,rgba(180,130,60,0.4)_5px,rgba(180,130,60,0.4)_6px),repeating-linear-gradient(-45deg,transparent,transparent_5px,rgba(180,130,60,0.4)_5px,rgba(180,130,60,0.4)_6px)]`
- Sundae glass: `bg-gradient-to-b from-white/20 to-white/5 rounded-t-2xl border-2 border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(255,255,255,0.3)]`
- Chrome stool: `w-10 h-3 bg-gradient-to-b from-[#e8ece8] to-[#909890] rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.3)]`
- Napkin dispenser: `bg-gradient-to-b from-[#e0e4e0] via-[#c0c8c0] to-[#a0a8a0] rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.25),inset_0_2px_4px_rgba(255,255,255,0.5)] border border-[#b0b8b0]`
- Pink scoop: `bg-gradient-to-br from-[#f4b0c4] via-[#f0a0b8] to-[#e890a8] rounded-full shadow-[inset_0_-4px_8px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(255,255,255,0.6)]`
- Blue scoop: `bg-gradient-to-br from-[#a0c8e8] via-[#90b8d8] to-[#80a8c8] rounded-full shadow-[inset_0_-4px_8px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(255,255,255,0.6)]`
- Flavor tub housing: `bg-gradient-to-b from-[#c0c8c8] via-[#d8dcd8] to-[#a0a8a8] rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.25),inset_0_2px_4px_rgba(255,255,255,0.5)] border-2 border-[#c0c8c8]`
- Chocolate scoop: `bg-gradient-to-br from-[#7a4a2a] to-[#5a3a1a] rounded-full shadow-[inset_0_-4px_8px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.15)]`

## Quality Checklist (must pass)

- At least one spinning flavor tub display with multiple colored scoops visible.
- Waffle cone crosshatch texture present on at least one surface (header, divider, or button).
- Chrome soda fountain stool elements present as list markers, counters, or decorative accents.
- Pastel tile checkerboard pattern visible as a border, footer, or background section.
- Cherry-on-top accent perched on at least one section heading or card peak.
- Sundae glass layered container shape used for at least one content card or feature panel.
- Chrome napkin dispenser shape present as a CTA button or decorative sidebar element.
- Vanilla cream background surfaces used for primary content areas.
- Chrome trim on every panel edge — no untrimmed raw borders.
- Color palette is pastel pink + pastel blue + pastel yellow + cherry red + waffle cone gold + chrome silver + vanilla cream + chocolate brown.
- Typography mixes retro sweet display fonts with handwritten menu fonts and monospace price labels.
- Cherry accent has gentle bob animation; flavor tub rotation pauses on hover.
- The aesthetic reads as a 1950s ice cream parlor — sweet, nostalgic, cheerful, indulgent.
- Everything feels welcoming — scoops are generous, the parlor is open, and there is always room for one more sundae.

## Anti-Patterns

- Sharp raw corners without chrome trim (parlor surfaces are chrome-edged — every fixture has metal borders).
- Missing the pastel checkerboard tile (the checkerboard is the instant parlor floor identity signal).
- Flat matte surfaces without chrome gradient (parlor fixtures are reflective chrome piping).
- Missing the spinning flavor tubs (the rotating multi-scoop display is the parlor's centerpiece).
- Missing cherry-on-top accents (the cherry is the signature delight detail that signals ice cream).
- Dark-only or heavy palettes (parlor design is pastel, bright, sweet — pink, blue, yellow, cream).
- Thin borders (parlor chrome trim is bold `border-2` — chrome is not delicate).
- Missing waffle cone crosshatch texture (the crosshatch on golden surfaces is the parlor material identity).
- Missing sundae glass shape (the layered glass container is the signature content wrapper).
- Modern minimal sans-serif typography alone (needs retro chunky display + handwritten menu + monospace labels).
- No chrome material presence (stools, napkin dispensers, tub housings must all be chrome).
- Neon aesthetic bleed (parlor is not neon-lit like a diner — it is warm pastel daylight with chrome sparkle).
- Sterile, corporate feel (the parlor is sweet, colorful, playful, and nostalgic).
- Flat button design (buttons should feel physical — waffle cone textured or chrome with depth).
- Missing color variety in scoops (all scoops the same color defeats the purpose of the spinning tub).

## Accessibility Considerations

- Pastel text on vanilla cream backgrounds provides moderate contrast — verify WCAG AA by using chocolate brown (`#5a3a1a`) for body text on pastel surfaces.
- Cherry red accents on vanilla cream backgrounds provide good contrast for CTAs and callouts.
- Chrome gradient backgrounds are decorative — place text content on solid vanilla cream surfaces.
- Pastel checkerboard patterns are decorative — do not place body text directly on checkerboard surfaces.
- Waffle cone crosshatch textures are decorative — `aria-hidden="true"` on purely decorative texture overlays.
- Spinning flavor tub rotation must respect `prefers-reduced-motion` (static display instead of rotating).
- Cherry bob animation must respect `prefers-reduced-motion` (steady position instead of bobbing).
- Cream drip animation must respect `prefers-reduced-motion` (hidden or static).
- Sundae glass scoop layer stagger animation must respect `prefers-reduced-motion` (all layers visible at once).
- Focus states: `focus:ring-2 focus:ring-[#f4b0c4]` (pastel pink ring visible against vanilla cream backgrounds).
- Touch targets minimum 44x44px on all interactive chrome buttons and stool markers.
- Color should not be the sole indicator of flavor type — include text labels alongside color-coded scoops.
- Verify WCAG AA contrast for chocolate brown (`#5a3a1a`) text on vanilla cream (`#fff5e0`) surfaces.
- Verify WCAG AA contrast for chocolate brown text on pastel pink (`#f4b0c4`) surfaces.
- Flavor tub carousel content must be accessible via keyboard navigation, not just auto-rotation.
- Cherry accent decorative elements should have `aria-hidden="true"` when not conveying meaning.
- Sundae glass layer content must be readable when flavors are purely decorative — use semantic HTML underneath.
