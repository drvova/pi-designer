---
name: carnival-ui
description: Build carnival / fairground UI components (circus stripes, bright primary colors, ticket stubs, festoon lighting, carousel curves, popcorn aesthetics, funhouse mirrors) with bold red-white stripes, gold accents, festive motion, and the sensory excitement of a traveling carnival. Trigger this skill when the user asks for carnival design, circus UI, fairground aesthetic, festival interface, funhouse design, or amusement park interfaces.
---

# Carnival / Fairground UI

Use this skill to design and implement vibrant, festive interfaces inspired by traveling carnivals and circuses: bold red-white stripes, bright primary colors, ticket stub borders, festoon lighting, carousel curves, and the joyful, slightly overwhelming sensory excitement of the fairground.

## Core Material Recipes

### 1) Circus Stripe Background

Red and white candy-stripe pattern.

- `bg-[repeating-linear-gradient(45deg,#ffffff,#ffffff_20px,#dc2626_20px,#dc2626_40px)]`.
- Or vertical: `bg-[repeating-linear-gradient(90deg,#dc2626,#dc2626_15px,#ffffff_15px,#ffffff_30px)]`.

### 2) Festoon Lighting Border

String of colorful carnival lights along a border.

- `flex justify-around` with glowing dots: `w-4 h-4 rounded-full bg-[#ffcc00] shadow-[0_0_8px_rgba(255,204,0,0.6)]` alternating colors (yellow, red, blue, green).

### 3) Ticket Stub Card

Card shaped like a carnival admission ticket.

- `bg-[#fff8e0] border-2 border-dashed border-[#5a4a1a] p-6 relative`.
- Notch: `before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:rounded-full before:bg-[#1a1a1a] before:-ml-2` (semicircle notch on left edge).
- Same on right edge.

### 4) Carousel Button

Round, festive button with primary colors.

- `bg-gradient-to-b from-[#dc2626] to-[#a01010] text-white font-bold uppercase tracking-wider rounded-full px-8 py-3 border-4 border-[#ffcc00] shadow-[0_4px_0_#5a0a0a] hover:translate-y-1 hover:shadow-[0_2px_0_#5a0a0a] active:shadow-none transition-all`.

### 5) Festoon Bulb Decoration

Single glowing carnival bulb.

- `w-6 h-6 rounded-full bg-[#ffcc00] shadow-[0_0_12px_rgba(255,204,0,0.5),inset_0_-2px_4px_rgba(200,150,0,0.3)]`.

### 6) Bunting / Pennant Flag Divider

Triangular flag decoration.

```html
<div class="flex justify-center gap-1 my-4">
  <div class="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[16px] border-t-[#dc2626]"></div>
  <div class="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[16px] border-t-[#ffcc00]"></div>
  <div class="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[16px] border-t-[#1a3a8a]"></div>
  <div class="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[16px] border-t-[#1a5a1a]"></div>
</div>
```

### 7) Popcorn / Candy Stripe Accent

Red-white diagonal stripe on a small section.

- `bg-[repeating-linear-gradient(45deg,#dc2626,#dc2626_4px,#ffffff_4px,#ffffff_8px)] h-2`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Carnival Red | `#dc2626` | Primary, stripes, energy |
| Pure White | `#ffffff` | Stripe contrast, surfaces |
| Carnival Gold | `#ffcc00` | Accents, borders, festoon |
| Sky Blue | `#1a3a8a` | Cool accent |
| Festive Green | `#1a5a1a` | Nature accent |
| Cream | `#fff8e0` | Ticket stub surface |
| Deep Red | `#5a0a0a` | Button shadow |
| Ink Black | `#1a1a1a` | Text, outlines |

Rules: Bright primary colors (red, yellow, blue, green) in bold blocks. Red and white stripes are the signature pattern. Gold ties everything together. Everything should feel EXCITING and FESTIVE.

## Typography Recommendations

- **Display:** Bungee, Fredoka One, or Lilita One (bold, playful, carnival signage).
- **Body:** Nunito, Quicksand (rounded, friendly sans).
- **Labels:** `font-bold uppercase tracking-widest text-sm` (carnival sign lettering).
- Typography should feel like carnival signage — bold, playful, and slightly overwhelming.

## Interaction Rules

- Default: festive, energetic, colorful.
- Hover: elements bounce or glow (like carnival lights brightening).
  - `hover:scale-105 hover:shadow-[0_0_20px_rgba(255,204,0,0.4)] transition-all duration-200`.
- Active: `active:scale-95` (satisfying press like a carnival game button).
- Focus: `focus:outline-none focus:ring-4 focus:ring-[#ffcc00]/50`.
- Transitions: `transition-all duration-200` (fast, bouncy, exciting).
- Festoon lights: subtle pulse animation alternating between bulbs.

## Reusable Tailwind Tokens

- Circus stripe bg: `bg-[repeating-linear-gradient(45deg,#ffffff,#ffffff_20px,#dc2626_20px,#dc2626_40px)]`.
- Ticket stub: `bg-[#fff8e0] border-2 border-dashed border-[#5a4a1a]`.
- Carousel button: `bg-gradient-to-b from-[#dc2626] to-[#a01010] text-white rounded-full border-4 border-[#ffcc00] shadow-[0_4px_0_#5a0a0a]`.
- Festoon bulb: `rounded-full bg-[#ffcc00] shadow-[0_0_12px_rgba(255,204,0,0.5)]`.
- Pennant: CSS triangle borders in alternating colors.

## Quality Checklist

- At least one circus stripe (red-white) pattern element.
- Festoon lighting decoration present.
- Ticket stub card with dashed border and semicircle notches.
- Color palette is bright primaries (red, yellow, blue, green).
- Carousel-style round buttons with gold borders.
- Pennant/bunting flag divider.
- Typography is bold playful display (Bungee, Fredoka).
- The aesthetic reads as a traveling carnival or circus.
- Everything feels festive, energetic, and joyful.
- Motion is bouncy and exciting.

## Anti-Patterns

- Muted or sophisticated palettes (carnival is LOUD and BRIGHT).
- Minimalist restraint (carnival is maximalist and sensory).
- Missing circus stripes (this is the signature pattern).
- Sans-serif cold typography (carnival needs bold playful display fonts).
- Dark moody atmosphere (carnival is bright and festive).
- Missing festoon lighting (string lights are essential carnival imagery).
- Sharp elegant shapes (carnival is round, bold, and playful).
- Slow dignified animations (motion should be bouncy and exciting).
- Missing ticket stub elements (these are the signature carnival document).
- Corporate sterile design (carnival is the opposite of corporate).

## Accessibility Considerations

- Stripe patterns must not reduce text contrast (use solid surfaces for text).
- Focus states: `focus:ring-4 focus:ring-[#ffcc00]/50` (gold ring, highly visible).
- Festoon light pulse must respect `prefers-reduced-motion`.
- Bold display fonts must maintain readability at smaller sizes (use Nunito for body).
- The bright palette may cause visual overload — ensure clear hierarchy despite the energy.
- Touch targets must be adequate despite festive styling.
- Pennant and festoon SVGs must be `aria-hidden="true"`.
- Ensure color is not the sole differentiator (include text labels alongside color blocks).
