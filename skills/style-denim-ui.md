---
name: denim-ui
description: Build denim UI components (indigo weave texture, stitching lines, pocket rivets, faded wash gradients, jeans-button hardware, selvedge accents) with twill weave patterns, contrast stitching, copper rivets, and the rugged all-American aesthetic of denim fabric. Trigger this skill when the user asks for denim design, jeans texture UI, indigo weave, workwear aesthetic, selvedge, or blue cotton interfaces.
---

# Denim UI

Use this skill to design and implementation rugged, textured interfaces inspired by denim fabric: indigo twill weave patterns, contrast stitching lines, copper pocket rivets, faded wash gradients, jeans-button hardware, and the timeless workwear aesthetic of blue cotton.

## Core Material Recipes

### 1) Denim Twill Surface

The foundational surface: indigo twill weave texture.

- `bg-[#2a4a7a]` (raw indigo base).
- Twill weave: `bg-[repeating-linear-gradient(45deg,transparent_0px,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_3px),repeating-linear-gradient(-45deg,transparent_0px,transparent_2px,rgba(0,0,0,0.04)_2px,rgba(0,0,0,0.04)_3px)]`.
- Creates the characteristic diagonal twill weave of denim fabric.

### 2) Faded Wash Surface

Lighter denim with fade patterns.

- `bg-[#5a7aaa]` (mid-wash blue).
- Whisker fade: `bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.08)_0%,transparent_30%)]`.
- Knee fade: `bg-[linear-gradient(transparent_40%,rgba(255,255,255,0.05)_45%,transparent_55%)]`.

### 3) Contrast Stitch Line

Visible yellow/orange stitching line.

- `h-[2px] bg-[#e8a820] shadow-[0_1px_0_rgba(0,0,0,0.3)]` (contrast thread on top, shadow underneath).
- Dashed variant: `h-[2px] bg-[repeating-linear-gradient(90deg,#e8a820_0px,#e8a820_4px,transparent_4px,transparent_6px)]`.

### 4) Copper Rivet

Pocket rivet decoration.

- `w-3 h-3 rounded-full bg-gradient-to-br from-[#c47a30] to-[#8a4a10] border border-[#5a2a08] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,200,100,0.3)]`.

### 5) Jeans Button Hardware

Metal jeans-style button.

- `w-8 h-8 rounded-full bg-gradient-to-br from-[#9a9a9a] via-[#c4c4c4] to-[#7a7a7a] border-2 border-[#5a5a5a] shadow-[inset_0_-2px_2px_rgba(0,0,0,0.2),inset_0_2px_2px_rgba(255,255,255,0.3)]`.

### 6) Denim Button

Button that looks like it belongs on a jacket.

- `bg-[#2a4a7a] text-[#e8a820] font-bold uppercase tracking-wider px-8 py-3 border-2 border-[#1a3a5a] shadow-[0_3px_0_#1a3a5a] hover:translate-y-1 hover:shadow-[0_1px_0_#1a3a5a] active:shadow-none transition-all`.

### 7) Pocket Panel

Jeans pocket-shaped card with stitching border.

- `bg-[#3a5a8a] rounded-lg p-6 border-2 border-[#e8a820]/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]`.
- Stitch outline: `outline outline-2 outline-dashed outline-[#e8a820]/20 outline-offset-2`.

### 8) Selvedge Accent

Red-line selvedge edge (premium denim signature).

- `border-r-2 border-[#c41e1e]` with `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_4px,#c41e1e_4px,#c41e1e_5px)]` (red selvedge line).

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Raw Indigo | `#2a4a7a` | Primary dark denim |
| Mid Wash | `#5a7aaa` | Medium denim |
| Light Wash | `#8ab4ca` | Faded denim |
| Contrast Thread | `#e8a820` | Stitching (yellow/orange) |
| Copper Rivet | `#c47a30` | Hardware accents |
| Silver Button | `#c4c4c4` | Metal hardware |
| Selvedge Red | `#c41e1e` | Premium accent line |
| Dark Indigo | `#1a3a5a` | Shadows, depth |

Rules: Indigo blues dominate (the denim base). Contrast yellow-orange thread is the primary accent (stitching). Copper/silver hardware provides metallic dots. Everything should feel rugged, durable, and all-American.

## Typography Recommendations

- **Display:** Work Sans, Oswald (rugged, industrial sans-serif).
- **Body:** DM Sans, Inter (clean readable sans).
- **Labels:** `font-bold uppercase tracking-widest text-sm text-[#e8a820]` (stitching-yellow labels).
- Typography should feel rugged and workwear-appropriate.

## Reusable Tailwind Tokens

- Denim twill: `bg-[#2a4a7a]` with diagonal twill weave overlays.
- Contrast stitch: `h-[2px] bg-[#e8a820] shadow-[0_1px_0_rgba(0,0,0,0.3)]`.
- Copper rivet: `rounded-full bg-gradient-to-br from-[#c47a30] to-[#8a4a10] border border-[#5a2a08]`.
- Jeans button: `rounded-full bg-gradient-to-br from-[#9a9a9a] to-[#7a7a7a] border-2 border-[#5a5a5a]`.
- Denim button: `bg-[#2a4a7a] text-[#e8a820] border-2 border-[#1a3a5a] shadow-[0_3px_0_#1a3a5a]`.
- Selvedge: `border-r-2 border-[#c41e1e]`.

## Quality Checklist

- Background has visible twill weave texture (diagonal cross-hatch pattern).
- At least one contrast stitch line (yellow/orange thread).
- At least one copper rivet or metal button decoration.
- Color palette is indigo blues with contrast yellow thread.
- Pocket-shaped cards with stitching borders.
- Optional selvedge red-line accent.
- Typography is rugged industrial sans-serif.
- The aesthetic reads as denim fabric / workwear / all-American.
- Everything feels durable, textured, and ruggedly constructed.
- Faded wash variations add depth (raw indigo to light wash range).

## Anti-Patterns

- Missing twill weave texture (this is the defining feature of denim).
- Missing contrast stitching (yellow/orange thread is the signature accent).
- Smooth flat surfaces without fabric texture (denim is WOVEN fabric).
- Bright saturated non-denim colors (palette is indigo + thread yellow + metal).
- Missing hardware decorations (rivets and buttons are essential denim details).
- Light airy aesthetic (denim is rugged and durable).
- Serif elegant typography (denim is workwear — use industrial sans).
- Missing the faded wash variations (denim fades characteristically).
- Missing the pocket panel shape (jeans pockets are iconic).
- Glossy or translucent surfaces (denim is opaque cotton fabric).

## Accessibility Considerations

- Indigo backgrounds with light text provide good contrast (verify WCAG AA — `#e8a820` on `#2a4a7a` passes for large text).
- Focus states: `focus:ring-2 focus:ring-[#e8a820]/50` (stitch-yellow ring on indigo).
- Twill weave texture must not reduce text contrast.
- Rivet and button SVGs must be `aria-hidden="true"` when decorative.
- The contrast yellow-on-indigo is a naturally accessible color pairing.
- Touch targets must be adequate despite hardware decoration.
