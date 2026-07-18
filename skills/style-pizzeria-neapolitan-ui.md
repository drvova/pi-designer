---
name: pizzeria-neapolitan-ui
description: Build pizzeria UI components (wood-fired oven glow, stretched dough, fresh basil, mozzarella wheels, red sauce splash, chalk menu) with rustic Italian warmth, wood-fired oven glow, and the simple perfection of Neapolitan pizza. Trigger this skill when the user asks for pizzeria design, Neapolitan pizza UI, wood-fired oven glow, Italian restaurant interface, chalk menu board, checkered tablecloth pattern, basil leaf accents, tomato sauce splash, mozzarella wheel decoration, rustic Italian warmth, or pizza shop interfaces.
---

# Pizzeria Neapolitan UI

Use this skill to design and implement warm, rustic interfaces inspired by Neapolitan pizzerias: the orange-red glow of a wood-fired brick oven, pale stretched dough circles, vibrant fresh basil leaves, splashes of tomato red sauce, white mozzarella wheels, red-and-white checkered tablecloth patterns, chalk menu boards with Italian handwritten text, and the simple honest warmth of a neighborhood pizza shop where the oven has been burning since morning.

## Non-Negotiable Foundations

- Pizzeria Neapolitan UI evokes the experience of sitting in a small Italian pizzeria: the radiant heat of the wood-fired oven, the sight of dough being stretched and tossed, the vibrant red of San Marzano tomato sauce, the fresh green of basil torn from the stem, the soft white of fresh mozzarella, and the humble red-and-white checkered tablecloth under your plate.
- Colors are rustic Italian: tomato red, basil green, mozzarella white, oven fire orange, pale dough, olive oil gold, chalkboard black, and oven brown — the palette of a wood-fired pizza being pulled from the oven.
- Textures reference pizzeria materials: rough brick oven walls, flour-dusted wooden peel surfaces, crinkled checkered tablecloth fabric, chalk-dusted blackboard, charred crust edges, and the glossy sheen of olive oil drizzled on top.
- Typography blends Italian serif warmth (for the shop name and headings) with handwritten chalk (for the daily specials board) and rustic display fonts (for the trattoria personality).
- The mood is warm, rustic, and honest — everything feels like a family recipe made with simple ingredients and generations of tradition. No pretension, just fire, flour, and flavor.
- The wood-fired oven is the SIGNATURE element — its arched opening glows with orange and red fire light, radiating warmth into every part of the interface.
- The checkered tablecloth is the signature pattern — small red-and-white squares that instantly say "pizzeria" and provide the grounding surface for cards, sections, and backgrounds.

## Core Material Recipes

### 1) Wood-Fired Oven Glow

The signature brick oven with arched opening and internal fire glow — the heart of any pizzeria interface.

- Oven body: `bg-gradient-to-b from-[#5a3a1a] via-[#4a2a10] to-[#3a1a08] rounded-t-[3rem] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative`.
- Brick texture: `before:absolute before:inset-0 before:bg-[repeating-linear-gradient(0deg,transparent,transparent_11px,rgba(0,0,0,0.08)_11px,rgba(0,0,0,0.08)_12px),repeating-linear-gradient(90deg,transparent,transparent_23px,rgba(0,0,0,0.06)_23px,rgba(0,0,0,0.06)_24px)] before:rounded-t-[3rem]`.
- Oven arch opening: `mx-auto w-48 h-32 bg-gradient-to-b from-[#e06020] via-[#c44020] to-[#1a1a1a] rounded-t-[50%] shadow-[inset_0_8px_24px_rgba(224,96,32,0.6),inset_0_-4px_12px_rgba(0,0,0,0.8)] relative`.
- Fire glow radiating from arch: `after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_center_top,rgba(224,96,32,0.4)_0%,rgba(196,64,32,0.2)_40%,transparent_70%)] after:rounded-t-[50%]`.
- Fire flicker animation:
```css
@keyframes fire-flicker {
  0%, 100% { opacity: 0.8; filter: brightness(1); }
  25% { opacity: 0.9; filter: brightness(1.1); }
  50% { opacity: 0.7; filter: brightness(0.95); }
  75% { opacity: 0.85; filter: brightness(1.05); }
}
```
- Fire flame SVG inside the arch:
```html
<svg viewBox="0 0 120 80" class="w-full h-full">
  <defs>
    <radialGradient id="fire-glow" cx="50%" cy="80%" r="60%">
      <stop offset="0%" stop-color="#f08020" stop-opacity="0.8"/>
      <stop offset="50%" stop-color="#e06020" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#c44020" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="70" rx="50" ry="10" fill="url(#fire-glow)"/>
  <g class="animate-[fire-flicker_2s_ease-in-out_infinite]">
    <path d="M40,70 Q35,50 45,35 Q50,45 55,30 Q58,40 60,25 Q62,40 65,30 Q70,45 75,35 Q85,50 80,70Z" fill="#e06020" opacity="0.7"/>
    <path d="M45,70 Q42,55 50,42 Q54,50 58,38 Q60,46 62,38 Q66,50 70,42 Q78,55 75,70Z" fill="#f08020" opacity="0.6"/>
  </g>
</svg>
```

### 2) Checkered Tablecloth Pattern

Red-and-white checkered tablecloth — the signature grounding surface for pizzeria cards and sections.

- Tablecloth: `bg-[repeating-conic-gradient(#c44020_0%_25%,#f5f0f0_0%_50%)] bg-[length:16px_16px]`.
- Subtle fabric texture overlay: `relative before:absolute before:inset-0 before:bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(0,0,0,0.02)_1px,rgba(0,0,0,0.02)_2px),repeating-linear-gradient(90deg,transparent,transparent_1px,rgba(0,0,0,0.02)_1px,rgba(0,0,0,0.02)_2px)]`.
- Border strip variant (tablecloth edge): `h-4 bg-[repeating-conic-gradient(#c44020_0%_25%,#f5f0f0_0%_50%)] bg-[length:8px_8px]`.
- Muted variant (subdued for larger areas): `bg-[repeating-conic-gradient rgba(196,64,32,0.15)_0%_25%,rgba(245,240,240,0.9)_0%_50%)] bg-[length:16px_16px]`.

### 3) Stretched Dough Circle

Pale round dough shape — decorative element or content container for pizza-themed sections.

- Dough circle: `w-48 h-48 rounded-full bg-gradient-to-br from-[#e8d8b8] via-[#dcc8a0] to-[#d0bc90] shadow-[0_4px_16px_rgba(0,0,0,0.15),inset_0_2px_8px_rgba(255,255,255,0.3),inset_0_-4px_12px_rgba(0,0,0,0.08)]`.
- Flour dust texture: `before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.4)_0%,transparent_30%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.3)_0%,transparent_25%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.2)_0%,transparent_20%)] before:rounded-full`.
- Irregular edge: `clip-path: polygon(5% 2%, 15% 0%, 30% 1%, 45% 0%, 60% 2%, 75% 0%, 90% 1%, 98% 5%, 100% 15%, 99% 30%, 100% 50%, 99% 70%, 100% 85%, 98% 95%, 90% 100%, 75% 99%, 60% 100%, 45% 99%, 30% 100%, 15% 99%, 5% 98%, 0% 90%, 1% 75%, 0% 60%, 1% 45%, 0% 30%, 1% 15%)`.
- Small dough (for decorative use): `w-16 h-16 rounded-full bg-gradient-to-br from-[#e8d8b8] to-[#d0bc90] shadow-[0_2px_6px_rgba(0,0,0,0.1)]`.

### 4) Fresh Basil Leaf

Vibrant green basil leaf SVG — the signature garnish accent of Neapolitan pizza.

Basil leaf SVG:
```html
<svg viewBox="0 0 40 60" class="w-10 h-14">
  <defs>
    <linearGradient id="basil-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3a8a3a"/>
      <stop offset="50%" stop-color="#2a6a2a"/>
      <stop offset="100%" stop-color="#1a4a1a"/>
    </linearGradient>
  </defs>
  <path d="M20,55 Q8,40 5,25 Q3,15 10,8 Q15,3 20,2 Q25,3 30,8 Q37,15 35,25 Q32,40 20,55Z" fill="url(#basil-gradient)" opacity="0.9"/>
  <path d="M20,55 L20,8" stroke="#1a3a1a" stroke-width="0.8" opacity="0.5"/>
  <path d="M20,18 L12,12" stroke="#1a3a1a" stroke-width="0.5" opacity="0.3"/>
  <path d="M20,25 L10,20" stroke="#1a3a1a" stroke-width="0.5" opacity="0.3"/>
  <path d="M20,32 L12,30" stroke="#1a3a1a" stroke-width="0.5" opacity="0.3"/>
  <path d="M20,18 L28,12" stroke="#1a3a1a" stroke-width="0.5" opacity="0.3"/>
  <path d="M20,25 L30,20" stroke="#1a3a1a" stroke-width="0.5" opacity="0.3"/>
  <path d="M20,32 L28,30" stroke="#1a3a1a" stroke-width="0.5" opacity="0.3"/>
</svg>
```

- Basil leaf accent (CSS fallback): `w-8 h-12 bg-gradient-to-br from-[#3a8a3a] via-[#2a6a2a] to-[#1a4a1a] rounded-[50%_50%_50%_50%/60%_60%_40%_40%] rotate-[-15deg] shadow-[0_2px_4px_rgba(0,0,0,0.2)]`.

### 5) Tomato Sauce Splash

Vibrant red splash shape — decorative accent for tomato-related elements or sauce-themed sections.

- Sauce splash: `relative w-24 h-24`.
- Splash SVG:
```html
<svg viewBox="0 0 100 100" class="w-24 h-24">
  <path d="M50,10 Q70,15 80,30 Q90,45 85,60 Q80,75 65,85 Q50,95 35,85 Q20,75 15,60 Q10,45 20,30 Q30,15 50,10Z" fill="#c44020" opacity="0.85"/>
  <path d="M45,15 Q65,20 75,35 Q82,48 78,58 Q73,68 60,76 Q48,82 38,76 Q25,68 20,55 Q15,42 25,32 Q32,22 45,15Z" fill="#d45030" opacity="0.6"/>
  <circle cx="40" cy="40" r="3" fill="white" opacity="0.15"/>
  <circle cx="55" cy="50" r="2" fill="white" opacity="0.1"/>
</svg>
```
- Sauce drip: `w-3 h-8 bg-[#c44020] rounded-b-full opacity-70` hanging from the splash bottom.

### 6) Mozzarella Wheel Accent

White mozzarella cheese wheel — decorative circular accent.

- Mozzarella wheel: `w-16 h-16 rounded-full bg-gradient-to-br from-[#f5f0f0] to-[#e8e0d8] shadow-[0_2px_8px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.05)]`.
- Mozzarella sheen: `before:absolute before:top-1 before:left-2 before:w-6 before:h-3 before:bg-white/50 before:rounded-full before:rotate-[-20deg]`.
- Small mozzarella chunks (for topping scatter): `w-4 h-4 rounded-full bg-[#f5f0f0] shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.8)]`.

### 7) Chalkboard Menu Board

Dark surface with Italian chalk-style text — the daily specials and pizza menu.

- Board surface: `bg-[#1a1a1a] rounded-lg p-6 border-4 border-[#5a3a1a] shadow-[0_4px_16px_rgba(0,0,0,0.4),inset_0_2px_8px_rgba(0,0,0,0.3)]`.
- Chalk dust overlay: `before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_25%_35%,rgba(255,255,255,0.04)_0%,transparent_45%),radial-gradient(circle_at_75%_55%,rgba(255,255,255,0.03)_0%,transparent_35%)] before:rounded-lg`.
- Chalk title: `font-['Caveat',cursive] text-2xl text-[#f5f0f0]/90 mb-4 tracking-wide`.
- Chalk pizza name: `font-['Caveat',cursive] text-xl text-[#f5f0f0]/80`.
- Chalk description: `font-['Caveat',cursive] text-base text-[#f5f0f0]/60 leading-relaxed`.
- Chalk price: `font-mono text-sm text-[#c4a040]/70` (olive oil gold for prices).
- Chalk divider: `w-full h-px bg-white/10 my-2`.
- Chalk pizza doodle: SVG circle with triangular slices in white/15.

### 8) Olive Oil Drizzle Accent

Golden olive oil drizzle lines — warm decorative accent for headers and dividers.

- Oil drizzle SVG:
```html
<svg viewBox="0 0 200 20" class="w-full h-5">
  <path d="M0,10 Q20,6 40,10 Q60,14 80,10 Q100,6 120,10 Q140,14 160,10 Q180,6 200,10" fill="none" stroke="#c4a040" stroke-width="2" opacity="0.5" stroke-linecap="round"/>
</svg>
```
- Oil drop accent: `w-2 h-3 bg-[#c4a040] rounded-b-full opacity-60 rotate-[10deg]`.

### 9) Wood Peel Surface

Flour-dusted wooden pizza peel — content card background with rustic texture.

- Peel surface: `bg-gradient-to-br from-[#d4b896] via-[#c8a880] to-[#b89868] rounded-lg p-6 shadow-[0_4px_12px_rgba(0,0,0,0.2)] relative`.
- Flour dust: `before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_40%_30%,rgba(255,255,255,0.25)_0%,transparent_35%),radial-gradient(circle_at_65%_70%,rgba(255,255,255,0.2)_0%,transparent_30%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.15)_0%,transparent_25%)] before:rounded-lg`.
- Wood grain: `after:absolute after:inset-0 after:bg-[repeating-linear-gradient(3deg,transparent,transparent_10px,rgba(0,0,0,0.04)_10px,rgba(0,0,0,0.04)_11px)] after:rounded-lg`.
- Peel handle: `absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-b from-[#8a6a3a] to-[#6a4a1a] rounded-b-full shadow-[0_2px_4px_rgba(0,0,0,0.3)]`.

## Color Palette System

### Core Neapolitan Palette

| Color | Hex | Role |
|---|---|---|
| Tomato Red | `#c44020` | Primary accent, sauce splash, tablecloth red squares |
| Tomato Red Light | `#d45030` | Sauce highlight, tomato splash inner glow |
| Basil Green | `#2a6a2a` | Primary green accent, basil leaf center |
| Basil Green Light | `#3a8a3a` | Basil leaf highlight, fresh garnish |
| Mozzarella White | `#f5f0f0` | Primary light surface, cheese accent, tablecloth white |
| Mozzarella Cream | `#e8e0d8` | Deeper cheese tone, subtle light surfaces |
| Oven Fire Orange | `#e06020` | Oven fire glow, heat accent, warm highlight |
| Oven Fire Deep | `#c44020` | Deep fire tone, inner oven shadow |
| Dough Pale | `#e8d8b8` | Dough surface, light warm background |
| Dough Shadow | `#d0bc90` | Dough edge shadow, deeper dough tone |
| Chalkboard Black | `#1a1a1a` | Menu board, deep dark surfaces |
| Olive Oil Gold | `#c4a040` | Oil drizzle, price text, warm golden accent |
| Wood Oven Brown | `#5a3a1a` | Oven body, brick texture, dark warm brown |
| Wood Peel | `#b89868` | Wooden peel surface, lighter warm brown |
| Chalk White | `rgba(245,240,240,0.8)` | Chalk text on dark board |
| Chalkboard Frame | `#5a3a1a` | Menu board border, wooden frame |

Rules: Tomato red and mozzarella white dominate as the primary color pair — the red-and-white checkered identity of Italian pizzeria. Oven fire orange provides the signature warmth glow from the brick oven. Basil green appears as sparing fresh garnish accents only — it is the basil on the pizza, not the pizza itself. Olive oil gold serves as the warm accent for prices and highlights. Dough pale provides soft light surfaces. The palette should feel like a wood-fired Neapolitan pizzeria — warm, rustic, honest, and slightly charred at the edges.

## Typography Recommendations

- **Shop name / display:** Playfair Display, Cormorant Garamond, or Lora (warm Italian serif with trattoria personality).
- **Pizza names / headings:** Abril Fatface, Fraunces, or DM Serif Display (bold warm serif for pizza variety names).
- **Menu board / chalk specials:** Caveat, Kalam, or Permanent Marker (handwritten chalk-on-board feel for daily specials, ingredient lists, and hand-written prices).
- **Body text / descriptions:** Inter, DM Sans, or Source Sans 3 (clean readable sans-serif for descriptions and UI text).
- **Price tags:** `font-mono text-sm text-[#c4a040]` (olive oil gold monospace for prices on the chalkboard).
- **Italian accents:** `font-serif italic text-[#c44020]` (italic serif in tomato red for Italian ingredient names like "mozzarella di bufala", "San Marzano", "forno a legna").
- **Labels:** `font-medium text-xs tracking-wider uppercase text-white/50` (on dark chalkboard surfaces).
- Typography should feel like an Italian family pizzeria — warm, proud, a little rustic. The shop name is elegant serif; the menu specials are scrawled in chalk; the body text stays clean and readable.

## Component Architecture Pattern

1. Wood-fired oven glow as the hero element or top banner — arched opening with internal fire glow radiating warmth across the layout.
2. Checkered tablecloth pattern as the grounding background or section backdrop — small red-and-white squares that establish the pizzeria identity.
3. Wooden peel surface cards for content panels — flour-dusted wood texture with grain detail for menu items and featured content.
4. Chalkboard menu board for lists, specials, and pricing — dark surface with chalk-style Italian text.
5. Stretched dough circle as a decorative frame or content container — pale round shape for pizza item displays.
6. Basil leaf accents scattered as fresh garnish decorations — green organic shapes at card corners and dividers.
7. Tomato sauce splash accents for emphasis and section markers — red splash shapes highlighting key elements.
8. Mozzarella wheel accents for badges, indicators, and light circular decorations.
9. Olive oil drizzle SVG lines as warm dividers between sections.
10. Wood-fired oven glow ambient light washing over adjacent elements — orange radial gradient extending beyond the oven arch.

## Interaction Rules

- Default state: warm, rustic, and fire-lit — the oven glows, the tablecloth is set, the chalk menu is ready.
- Hover (cards/surfaces): warmth intensifies like leaning closer to the oven.
  - `hover:shadow-[0_8px_24px_rgba(224,96,32,0.2)] hover:-translate-y-0.5 transition-all duration-300`.
- Hover (dough elements): dough puffs slightly — `hover:scale-105 hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] transition-all duration-300`.
- Active (buttons): press into the floured wooden surface.
  - `active:translate-y-0.5 active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.2)]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#c44020]/40` (tomato red ring, warm).
- Fire glow: continuous subtle flicker on oven elements — `animate-[fire-flicker_2s_ease-in-out_infinite]`.
- Basil leaf hover: gentle rotation — `hover:rotate-[-5deg] hover:scale-110 transition-transform duration-300`.
- Transitions: `transition-all duration-300 ease-in-out` (warm, natural — like dough rising).
- Chalk text fade-in: optional staggered appearance as if being written on the board.

Expanded fire flicker for ambient glow:
```css
@keyframes oven-glow-pulse {
  0%, 100% { box-shadow: 0 0 40px rgba(224,96,32,0.3), 0 0 80px rgba(196,64,32,0.15); }
  50% { box-shadow: 0 0 50px rgba(224,96,32,0.4), 0 0 100px rgba(196,64,32,0.2); }
}
```

## Reusable Tailwind Tokens

- Oven arch: `bg-gradient-to-b from-[#e06020] via-[#c44020] to-[#1a1a1a] rounded-t-[50%] shadow-[inset_0_8px_24px_rgba(224,96,32,0.6),inset_0_-4px_12px_rgba(0,0,0,0.8)]`.
- Oven body: `bg-gradient-to-b from-[#5a3a1a] via-[#4a2a10] to-[#3a1a08] rounded-t-[3rem] shadow-[0_8px_32px_rgba(0,0,0,0.5)]`.
- Checkered tablecloth: `bg-[repeating-conic-gradient(#c44020_0%_25%,#f5f0f0_0%_50%)] bg-[length:16px_16px]`.
- Dough circle: `rounded-full bg-gradient-to-br from-[#e8d8b8] via-[#dcc8a0] to-[#d0bc90] shadow-[0_4px_16px_rgba(0,0,0,0.15),inset_0_2px_8px_rgba(255,255,255,0.3)]`.
- Chalkboard: `bg-[#1a1a1a] rounded-lg border-4 border-[#5a3a1a] shadow-[0_4px_16px_rgba(0,0,0,0.4),inset_0_2px_8px_rgba(0,0,0,0.3)]`.
- Wood peel card: `bg-gradient-to-br from-[#d4b896] via-[#c8a880] to-[#b89868] rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.2)]`.
- Tomato button: `bg-gradient-to-b from-[#c44020] to-[#a83018] text-[#f5f0f0] font-medium rounded-full px-6 py-2.5 shadow-[0_3px_8px_rgba(196,64,32,0.3)] hover:from-[#d45030] hover:to-[#b83820] transition-all`.
- Olive button: `bg-gradient-to-b from-[#2a6a2a] to-[#1a4a1a] text-[#f5f0f0] font-medium rounded-full px-6 py-2.5 shadow-[0_3px_8px_rgba(42,106,42,0.3)] hover:from-[#3a8a3a] hover:to-[#2a6a2a] transition-all`.
- Basil accent: `bg-gradient-to-br from-[#3a8a3a] via-[#2a6a2a] to-[#1a4a1a] rounded-[50%_50%_50%_50%/60%_60%_40%_40%]`.
- Sauce splash: `bg-[#c44020] opacity-85` on SVG path with irregular round shape.
- Mozzarella wheel: `rounded-full bg-gradient-to-br from-[#f5f0f0] to-[#e8e0d8] shadow-[0_2px_8px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.8)]`.
- Olive oil drizzle: SVG path `stroke="#c4a040" stroke-width="2" opacity="0.5"` sinusoidal wave.
- Fire glow: `animate-[fire-flicker_2s_ease-in-out_infinite]` on flame elements.

## Quality Checklist

- At least one wood-fired oven glow element with arched opening and internal fire animation.
- Checkered tablecloth pattern visible as a background, border strip, or section surface.
- Stretched dough circle element present as a decorative frame or content container.
- Fresh basil leaf SVG accent present as a garnish decoration on cards or dividers.
- Tomato sauce splash accent present for emphasis and section markers.
- Mozzarella wheel accent present as a badge, indicator, or decorative element.
- Chalkboard menu board present with chalk-style Italian handwritten text.
- Olive oil drizzle SVG line used as a section divider.
- Wooden peel surface texture used for content cards.
- Color palette is tomato red + basil green + mozzarella white + oven fire orange + dough pale + olive oil gold + chalkboard black + wood oven brown.
- Typography blends warm Italian serif (shop name), handwritten chalk (menu), and clean sans-serif (body).
- Fire glow animation respects `prefers-reduced-motion` (steady glow without flicker).
- The aesthetic reads as an authentic Neapolitan pizzeria — rustic, warm, fire-lit, and honest.
- Everything feels like a family recipe — simple ingredients, traditional methods, genuine warmth.
- Basil green is used sparingly as a fresh garnish accent, not a dominant color.
- The overall composition is warm and inviting, with the oven glow as the visual anchor.

## Anti-Patterns

- Cool blue or gray dominant palettes (pizzeria is warm fire orange and tomato red).
- Missing the wood-fired oven element (the glowing oven is the signature heart of the pizzeria).
- Missing the checkered tablecloth pattern (red-and-white checks are the instant pizzeria identity signal).
- Flat matte surfaces without wood or brick texture (pizzeria surfaces reference real materials).
- Bright neon colors (pizzeria palette is rustic, warm, and slightly charred).
- Cold modern sans-serif typography alone (needs warm Italian serif and handwritten chalk).
- Sharp angular layouts (pizzeria is warm, rounded, and organic — dough is round, oven is arched).
- Fast aggressive animations (motion should be gentle like fire flickering and dough rising).
- Pure white backgrounds (use mozzarella white `#f5f0f0`, dough pale `#e8d8b8`, or checkered pattern).
- Missing the chalkboard menu board (the chalkboard is the signature content display in a pizzeria).
- Corporate sterile design (pizzeria is rustic, family-owned, and lived-in).
- Overly polished or luxury feel (pizzeria is humble, honest, and slightly messy with flour).
- Missing basil, mozzarella, or sauce accents (these ingredient details add authenticity).
- Dark backgrounds everywhere (pizzeria balances warm dough surfaces with dark chalkboard accents).
- Cool-toned typography (all text should feel warm — red, gold, cream, or white on dark).
- Missing olive oil gold accent (the golden drizzle is a signature Neapolitan finishing touch).
- Modern gradient button styles (buttons should feel rustic — rounded, warm, slightly textured).
- Overuse of basil green as a primary color (green is garnish, not the plate).

## Accessibility Considerations

- Mozzarella white (`#f5f0f0`) backgrounds with dark text (`#1a1a1a`) provide excellent contrast (WCAG AAA).
- Dough pale (`#e8d8b8`) with dark text (`#1a1a1a`) provides good contrast (verify WCAG AA).
- Chalkboard chalk text (`rgba(245,240,240,0.8)`) on `#1a1a1a` provides adequate contrast (verify AA).
- Fire glow animation must respect `prefers-reduced-motion` — steady warm glow without flickering.
- Focus states: `focus:ring-2 focus:ring-[#c44020]/40` (tomato red ring, visible on all surfaces).
- Basil leaf SVGs must be `aria-hidden="true"` when purely decorative.
- Sauce splash and mozzarella wheel decorations must be `aria-hidden="true"`.
- Checkered tablecloth pattern is decorative — do not place body text directly on checkered surfaces.
- Wood-fired oven fire SVG must be `aria-hidden="true"`.
- Touch targets minimum 44x44px on all interactive elements despite rustic styling.
- Chalk-style handwritten fonts at small sizes may reduce readability — ensure body text uses clean sans-serif at 16px+.
- Italian accent text in italic serif should have `lang="it"` attribute for proper screen reader pronunciation.
- Color should not be the sole indicator of pizza category or spice level — use icons or text labels.
- Tomato red text on light surfaces may need darker alternative for small text — verify each combination.
- The warm, low-contrast palette (dough, wood, cream) should be checked carefully for AA compliance on text-heavy sections.
