---
name: crayon-ui
description: Build crayon UI components (waxy crayon strokes, coloring-book outlines, wonky hand-drawn lines, scribble textures, crayon wax buildup, innocent joyful messiness) with waxy textured borders, crayon-stroke SVG decorations, and the unfiltered creative energy of a child's first art box. Trigger this skill when the user asks for crayon design, children's art UI, coloring book interface, scribble aesthetic, waxy crayon borders, playful kid-friendly design, or kindergarten-style components.
---

# Crayon UI

Use this skill to design and implement joyful, childlike interfaces styled as crayon art: thick waxy borders with variable width and wobble, coloring-book outline cards with thick black outlines on white fill, scribble texture decorations, fingerprint smudge accents, and the innocent creative energy of a child's first art box.

## Non-Negotiable Foundations

- Cards and containers look like coloring-book pages: thick black outlines (`#212121`) on a white or construction-paper fill, with slightly wonky, non-geometric edges.
- Borders are never straight CSS borders. They are SVG paths with variable stroke width, slight wobble, and rounded caps that emulate waxy crayon strokes.
- The palette is primary and bold — crayon red, blue, yellow, green, orange, purple — never muted, never pastel, never desaturated.
- Every surface carries subtle texture: crayon wax buildup at stroke ends, paper grain, or scribble fills that communicate a hand-colored feel.
- Shapes are intentionally imperfect: asymmetric corners, slightly rotated containers, wobbly dividers — geometric precision is the enemy of the aesthetic.
- Typography mimics a child's handwriting or rounded chunky lettering — never thin, never serif, never corporate.
- The mood is innocent, playful, and celebratory — like a refrigerator door covered in a child's masterpieces.

## Core Material Recipes

### 1) Crayon-Stroke Border

The foundational waxy, wobbly border for any container.

- Use an inline SVG with a hand-drawn path replacing the CSS border entirely.
- Variable stroke width via two overlaid paths (a thicker semi-transparent base, a thinner opaque top) to simulate wax buildup.
- Stroke color defaults to crayon black `#212121` for coloring-book outlines, or any crayon palette color.

```html
<div class="relative bg-[#fffef7] p-6">
  <svg class="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
    <path d="M3,2 Q2,1 4,1 L96,3 Q99,2 99,5 L97,96 Q99,99 95,99 L4,97 Q1,98 1,95 Z"
          fill="none" stroke="#212121" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>
    <path d="M3,2 Q2,1 4,1 L96,3 Q99,2 99,5 L97,96 Q99,99 95,99 L4,97 Q1,98 1,95 Z"
          fill="none" stroke="#212121" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" opacity="0.6"/>
  </svg>
  <div class="relative z-10">Content inside coloring-book card</div>
</div>
```

### 2) Coloring-Book Outline Card

A card with a thick black outline on a white fill — the most common container.

- `relative bg-[#fffef7] p-6` with the SVG crayon border from Recipe 1.
- Corner radius is wobbly, not uniform: use the SVG path to create slightly different curve amounts per corner.
- Wax buildup dots at stroke endpoints: small filled circles at path start/end for the waxy crayon look.

```html
<div class="relative bg-[#fffef7] p-8 rounded-[12px]">
  <svg class="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
    <path d="M4,2 Q1,1 2,4 L1,50 Q2,97 5,98 L93,99 Q99,98 98,95 L99,4 Q98,1 95,2 Z"
          fill="none" stroke="#212121" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- wax buildup at corners -->
    <circle cx="2" cy="4" r="2" fill="#212121"/>
    <circle cx="98" cy="95" r="2" fill="#212121"/>
  </svg>
  <div class="relative z-10">
    <h3 class="font-handwritten text-2xl text-[#212121]">Coloring-Book Card</h3>
    <p class="font-handwritten text-lg text-[#424242] mt-2">Thick outline, white fill, wobbly corners.</p>
  </div>
</div>
```

### 3) Scribble Fill Decoration

A textured scribble fill used inside shapes or as section backgrounds.

```html
<svg class="absolute inset-0 w-full h-full pointer-events-none opacity-20" preserveAspectRatio="none" viewBox="0 0 100 100">
  <path d="M5,5 L15,25 L8,45 L20,55 L10,75 L18,95 M25,5 L35,25 L28,45 L40,55 L30,75 L38,95 M45,5 L55,25 L48,45 L60,55 L50,75 L58,95 M65,5 L75,25 L68,45 L80,55 L70,75 L78,95"
        fill="none" stroke="#e53935" stroke-width="2" stroke-linecap="round"/>
</svg>
```

### 4) Wonky Divider

A hand-drawn wavy or zig-zag line between sections.

```html
<svg viewBox="0 0 400 12" class="w-full h-3">
  <path d="M2,6 Q20,2 40,7 T80,5 T120,8 T160,4 T200,7 T240,3 T280,8 T320,5 T360,6 T398,5"
        fill="none" stroke="#212121" stroke-width="2.5" stroke-linecap="round"/>
</svg>
```

### 5) Crayon Button

A button with a thick crayon-stroke outline and a bold crayon color fill.

- `font-handwritten text-xl text-white bg-[#e53935] px-8 py-4 rounded-[10px] relative` with SVG border overlay.
- Hover: fill color intensifies, slight rotation wobble.

```html
<button class="relative font-handwritten text-xl text-white bg-[#1e88e5] px-8 py-4 rounded-[10px] hover:rotate-[-1deg] hover:scale-105 transition-all duration-200">
  <svg class="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 40">
    <path d="M3,2 Q1,1 2,3 L1,37 Q2,39 4,38 L97,39 Q99,37 98,35 L99,3 Q98,1 96,2 Z"
          fill="none" stroke="#212121" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  <span class="relative z-10">Color Me!</span>
</button>
```

### 6) Fingerprint Smudge Accent

A soft smudge decoration that looks like a child's messy fingerprint.

- `absolute w-16 h-20 bg-[#fb8c00]/20 rounded-[50%_60%_45%_55%] blur-[1px] rotate-12` (an organic blob, not a circle).
- Layer two or three overlapping at different rotations for a multi-finger mess.

```html
<div class="absolute -top-3 -right-3 w-16 h-20 bg-[#fb8c00]/25 rounded-[50%_60%_45%_55%] blur-[1px] rotate-12 pointer-events-none"></div>
<div class="absolute top-2 -right-6 w-12 h-14 bg-[#fdd835]/20 rounded-[55%_45%_60%_50%] blur-[1px] rotate-[-20deg] pointer-events-none"></div>
```

### 7) Crayon Box Swatch

A palette display element shaped like crayons in a box.

```html
<div class="flex items-end gap-1">
  <div class="w-6 h-20 bg-[#e53935] rounded-t-full border-2 border-[#212121] border-b-0 relative">
    <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-4 bg-[#e53935] rounded-t-sm border-2 border-[#212121] border-b-0"></div>
  </div>
  <div class="w-6 h-16 bg-[#1e88e5] rounded-t-full border-2 border-[#212121] border-b-0 relative">
    <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-4 bg-[#1e88e5] rounded-t-sm border-2 border-[#212121] border-b-0"></div>
  </div>
  <!-- Repeat with yellow, green, orange, purple at varying heights -->
</div>
```

### 8) Paper Texture Overlay

A subtle paper grain over the white surface to ground the crayon aesthetic.

- `absolute inset-0 bg-[#fffef7] opacity-100 pointer-events-none` with an SVG `feTurbulence` noise at `opacity-[0.04]` for construction-paper grain.

## Color Palette System

### Core Crayon Box Palette

| Color | Hex | Role |
|---|---|---|
| Crayon Red | `#e53935` | Primary accent, warnings, energetic highlights |
| Crayon Blue | `#1e88e5` | Info, links, cool accent |
| Crayon Yellow | `#fdd835` | Highlight, attention, sunny energy |
| Crayon Green | `#43a047` | Success, go-ahead, nature accent |
| Crayon Orange | `#fb8c00` | Call-to-action, playful warning |
| Crayon Purple | `#8e24aa` | Creative, special, premium feel |
| Crayon Black | `#212121` | Outlines, text, all borders |
| Construction Paper White | `#fffef7` | Card fills, surface base (warm off-white) |

Rules: Outlines and text are always crayon black `#212121`. Card fills are always warm construction-paper white `#fffef7`. Accent fills use the bold primary crayon colors at full saturation. Never mute or desaturate — the palette is unapologetically bold and primary. The aesthetic should feel like opening a fresh box of crayons.

## Typography Recommendations

Crayon typography mimics a child's handwriting and rounded chunky lettering:

- **Display headings:** Fredoka One, Baloo 2, or Bungee (rounded chunky display).
- **Body:** Patrick Hand, Architects Daughter (readable childlike handwriting).
- **Alternative:** Comic Neue, Quicksand (rounded friendly sans for longer body text).
- **Labels:** `font-handwritten text-sm uppercase tracking-wide` (like a child's crayon label).
- The KEY is that all text should look HANDWRITTEN or ROUNDED, never thin, never serif, never corporate.

## Component Architecture Pattern

1. Construction-paper white background (`#fffef7`) with subtle paper grain texture overlay.
2. Coloring-book outline cards with thick crayon-black SVG borders and wobbly corners.
3. Handwritten or rounded chunky typography in crayon-black `#212121`.
4. Scribble fill decorations as textured backgrounds inside sections or accents.
5. Wonky hand-drawn SVG dividers between content sections.
6. Crayon-stroke buttons with bold color fills and wobble-on-hover interactions.
7. Fingerprint smudge accents at card corners for messy childlike energy.
8. Crayon box swatches for palette or category displays.

## Interaction Rules

- Default state: playful, bold, slightly wonky.
- Hover: crayon buttons wobble (slight rotation) and scale up (like being grabbed by a child).
  - `hover:rotate-[-1deg] hover:scale-105 transition-all duration-200`.
- Active: `active:scale-95 active:rotate-1` (pressed crayon feel).
- Focus: `focus:outline-none focus:ring-4 focus:ring-[#212121]/30 focus:ring-offset-2 focus:ring-offset-[#fffef7]`.
- Transitions: `transition-all duration-200` (quick, playful bounce).
- Links: bold crayon color with a wobbly hand-drawn underline SVG beneath.

## Reusable Tailwind Tokens

- Paper surface: `bg-[#fffef7]` with SVG noise texture overlay at `opacity-[0.04]`.
- Crayon outline: SVG path `stroke="#212121"` `stroke-width="3"` `stroke-linecap="round"`.
- Crayon text: `font-handwritten text-[#212121]`.
- Crayon button: `bg-[#e53935] text-white font-handwritten rounded-[10px] hover:rotate-[-1deg] hover:scale-105 transition-all`.
- Wonky divider: SVG path `stroke="#212121"` `stroke-width="2.5"` wobbly Q-curve.
- Scribble fill: SVG crosshatch path `opacity-20` in crayon palette color.
- Fingerprint: `bg-[#fb8c00]/20 rounded-[50%_60%_45%_55%] blur-[1px] rotate-12`.
- Color accents: `text-[#e53935]` / `text-[#1e88e5]` / `text-[#fdd835]` / `text-[#43a047]` / `text-[#fb8c00]` / `text-[#8e24aa]`.

## Quality Checklist (must pass)

- Background is warm construction-paper white (`#fffef7`) with subtle paper grain texture.
- Borders are SVG crayon strokes with wobble and variable width, never straight CSS borders.
- Outlines are thick crayon black (`#212121`), never thin or gray.
- Coloring-book cards have white fills with thick black wobbly outlines.
- At least one scribble texture decoration present as a fill or accent.
- Wonky hand-drawn SVG dividers between sections.
- Crayon buttons use bold primary color fills and wobble on hover.
- Fingerprint smudge accents present at container corners.
- Typography uses handwritten or rounded chunky fonts, never thin or serif.
- The aesthetic reads as children's crayon art or a coloring book page.

## Anti-Patterns

- Straight CSS borders with uniform radius (crayon borders are wobbly SVG strokes).
- Muted, pastel, or desaturated colors (the palette is bold and primary).
- Thin or serif typography (use chunky rounded or handwritten fonts).
- Clean geometric precision (embrace wonky, asymmetric, slightly rotated elements).
- Glossy or glassy surfaces (the aesthetic is paper and wax, not glass).
- Gray or neutral outlines (outlines are always crayon black `#212121`).
- Missing paper texture (the construction-paper grain grounds the crayon feel).
- Missing fingerprint smudges (the messy childlike energy is essential).
- Professional corporate styling (crayon-ui is innocent, playful, and celebratory).
- Missing scribble textures (these communicate the hand-colored feel).
- Perfectly aligned grid layouts (allow slight rotations and asymmetry for childlike energy).

## Accessibility Considerations

- Crayon black `#212121` text on construction-paper white `#fffef7` provides excellent contrast (WCAG AAA).
- Bold primary color fills (red, blue, green) with white text must be checked for contrast — use white text only on red, blue, green, purple, orange; use black text on yellow.
- Crayon Yellow `#fdd835` fails contrast with white text — always use crayon black `#212121` text on yellow backgrounds.
- Handwritten fonts can reduce readability at small sizes — use 16px+ for body text and 20px+ for headings.
- Focus states: `focus:ring-4 focus:ring-[#212121]/30` (visible dark ring on light paper).
- Wonky borders and wobble must not reduce tap target sizes (maintain 44x44px minimum).
- Decorative SVG scribbles and smudges must be `aria-hidden="true"`.
- Crayon color must not be the sole categorization method (include text labels and icons).
- Hover wobble rotations should be subtle (1-2 degrees) to avoid vestibular discomfort for motion-sensitive users.
- Respect `prefers-reduced-motion`: disable rotation wobble and scale animations when set.
- Verify that handwritten fonts are readable for users with dyslexia (Comic Neue and Quicksand are safer choices for accessibility).
