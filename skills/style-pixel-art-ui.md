---
name: pixel-art-ui
description: Build pixel art / 8-bit UI components (chunky pixel borders, hard stepped shadows, bitmap fonts, retro gaming aesthetic, NES-style interfaces) with Press Start 2P typography, image-rendering pixelated, and classic console RPG menu layouts. Trigger this skill when the user asks for pixel art UI, 8-bit design, NES-style, retro gaming UI, pixel font interfaces, or console RPG aesthetics.
---

# Pixel Art / 8-bit UI

Use this skill to design and implement retro gaming-inspired interfaces with chunky pixel borders, hard stepped shadows, bitmap typography, and the visual language of 8-bit and 16-bit console games.

## Non-Negotiable Foundations

- Pixel art UI replicates the aesthetics of classic video game consoles (NES, SNES, Game Boy) — chunky, blocky, and deliberately low-resolution.
- Borders are thick and blocky (`border-4` minimum), with hard stepped shadows (no blur).
- Typography uses bitmap/pixel fonts: Press Start 2P, VT323, or Silkscreen. These fonts render as visible pixel grids.
- Images must use `image-rendering: pixelated` to prevent anti-aliasing/smoothing.
- Colors are limited palettes inspired by real hardware: NES, Game Boy, or CGA.
- The aesthetic is playful, nostalgic, and game-like — think RPG dialogue boxes, inventory screens, and HUD overlays.

## Core Material Recipes

### 1) Pixel Border Box (dialog/window frame)

The signature element: a box with chunky pixel-art borders.

CSS approach using stepped box-shadow for pixel-perfect corners:
```css
.pixel-box {
  background: #202020;
  position: relative;
  border: 4px solid #f8f8f8;
  box-shadow:
    inset -4px -4px 0 0 #909090,
    inset 4px 4px 0 0 #ffffff;
  image-rendering: pixelated;
}
```

Tailwind approach:
- `bg-[#202020] border-4 border-white shadow-[inset_-4px_-4px_0_0_#909090,inset_4px_4px_0_0_#ffffff]`.

### 2) NES-Style Dialog Window

Classic RPG dialog box with title bar and content.

- Outer: `bg-[#e0e0e0] border-4 border-black p-4`.
- Title bar: `bg-[#000] text-[#e0e0e0] px-2 py-1 font-mono text-xs`.
- Content: `font-mono text-sm text-[#202020] leading-relaxed`.
- Cursor: blinking arrow `▶` at the end of text.

### 3) Hard Stepped Shadow Button

The pixel-art button: flat color, hard offset shadow, no blur.

- Primary: `bg-[#e76e55] text-white border-4 border-black px-6 py-3 shadow-[4px_4px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all`.
- Secondary: `bg-[#5cd6ff] text-black border-4 border-black px-6 py-3 shadow-[4px_4px_0_0_#000]`.
- Ghost: `bg-transparent text-[#e76e55] border-4 border-[#e76e55] px-6 py-3`.

### 4) Pixel Art Health / Progress Bar

Classic game-style segmented progress bar.

- Container: `w-full h-4 border-2 border-black bg-[#404040]`.
- Fill: `h-full bg-[#58d858]` (green for health) or `bg-[#e76e55]` (red for low).
- Segmented: use `background-image: repeating-linear-gradient(90deg, transparent, transparent 6px, rgba(0,0,0,0.3) 6px, rgba(0,0,0,0.3) 8px)` to create block divisions.

### 5) Pixel Icon Container

Square container for pixel art icons/sprites.

- `w-8 h-8 bg-[#404040] border-2 border-black flex items-center justify-center [image-rendering:pixelated]`.
- Icon inside is an SVG or image with `image-rendering: pixelated` and no smoothing.

### 6) CRT Scanline Overlay (optional)

For authentic retro CRT look.

- `absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.15)_0px,rgba(0,0,0,0.15)_1px,transparent_1px,transparent_3px)] opacity-30`.

## Color Palette System

### NES-Inspired Palette

| Color | Hex | Role |
|---|---|---|
| NES Red | `#e76e55` | Primary action, health, danger |
| NES Blue | `#5cd6ff` | Secondary, info, MP/mana |
| NES Green | `#58d858` | Success, health bar, growth |
| NES Yellow | `#fce88c` | Gold, currency, highlight |
| NES Purple | `#b94acc` | Rare items, magic |
| Black | `#000000` | Borders, text, shadows |
| Dark Gray | `#404040` | Inactive slots, backgrounds |
| Light Gray | `#e0e0e0` | Window surfaces, dialog bg |
| White | `#ffffff` | Highlights, borders |

### Game Boy Palette (4-tone)

| Color | Hex | Role |
|---|---|---|
| Darkest | `#0f380f` | Deep shadows, text |
| Dark | `#306230` | Mid-shadows |
| Light | `#8bac0f` | Primary surfaces |
| Lightest | `#9bbc0f` | Highlights, background |

### CGA Palette (retro PC)

| Color | Hex | Role |
|---|---|---|
| CGA Cyan | `#55ffff` | Primary accent |
| CGA Magenta | `#ff55ff` | Secondary accent |
| CGA White | `#ffffff` | Text |
| CGA Black | `#000000` | Background, borders |

Rules: Choose ONE palette system per interface. Do not mix NES and Game Boy palettes. Pixel art authenticity comes from CONSISTENT limited palettes.

## Typography System

Pixel art UI uses bitmap fonts exclusively. No anti-aliased fonts.

| Font | Character | Best For |
|---|---|---|
| **Press Start 2P** | The definitive 8-bit pixel font | Headings, buttons, dialog |
| **VT323** | Terminal/CRT pixel font | Body text, data, terminal |
| **Silkscreen** | Clean pixel font | Labels, UI elements |
| **Pixelify Sans** | Modern pixel font | Readable body text |
| **Jersey 10** | Compact pixel font | Dense data displays |

Rules:
- Press Start 2P is the default but it's LARGE and wide — use sparingly for headings/buttons.
- For body text, use VT323 or Pixelify Sans (more readable at small sizes).
- `font-size` must be multiples of the pixel grid (8px, 16px, 24px, 32px).
- `letter-spacing` should be at least `0.05em` to maintain pixel separation.
- NEVER use anti-aliased fonts (Inter, Roboto, etc.) in pixel art UI.

## Component Architecture Pattern

1. Dark or limited-palette background.
2. Pixel border dialog boxes and panels (thick borders, inset shadows).
3. Hard-stepped shadow buttons (offset, no blur).
4. Segmented progress bars and health bars.
5. Pixel art icons in square containers.
6. RPG-style inventory grids or HUD layouts.
7. Optional CRT scanline overlay.

## Interaction Rules

- Default state: chunky, blocky, game-like.
- Hover: translate toward shadow (like pressing a button on a console).
  - `hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_#000]`.
- Active: `active:translate-x-[4px] active:translate-y-[4px] active:shadow-none` (fully pressed).
- Focus: `focus:outline-none focus:ring-4 focus:ring-[#5cd6ff]`.
- Transitions: `transition-all duration-100` (instant, snappy — like a game).
- Blinking cursor: `animate-pulse` on `▶` or `_` elements.
- Damage flash: `active:bg-white` (brief white flash on hit/press).

## Reusable Tailwind Tokens

- Pixel box: `bg-[#202020] border-4 border-white shadow-[inset_-4px_-4px_0_0_#909090,inset_4px_4px_0_0_#ffffff]`
- NES dialog: `bg-[#e0e0e0] border-4 border-black p-4`
- Pixel button: `bg-[#e76e55] text-white border-4 border-black px-6 py-3 shadow-[4px_4px_0_0_#000]`
- Health bar: `w-full h-4 border-2 border-black bg-[#404040]`
- Pixel font: `font-['Press_Start_2P']` or `font-mono` fallback
- CRT overlay: `bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.15)_0px,rgba(0,0,0,0.15)_1px,transparent_1px,transparent_3px)] opacity-30`
- Image rendering: `[image-rendering:pixelated]` on all pixel art images/SVGs

## Quality Checklist (must pass)

- Borders are thick (`border-4` minimum) and blocky.
- Shadows are hard-stepped (offset, zero blur).
- Typography uses bitmap/pixel fonts throughout.
- Images use `image-rendering: pixelated` (no smoothing).
- Color palette is limited (NES, Game Boy, or CGA — pick one).
- Buttons have the signature translate-press interaction.
- Progress/health bars are segmented (block divisions visible).
- The aesthetic reads as a retro video game interface.
- No anti-aliased fonts or smooth gradients.
- Font sizes align to pixel grid multiples (8px, 16px, 24px).

## Anti-Patterns

- Smooth/blurred shadows (pixel art requires hard stepped shadows only).
- Anti-aliased fonts (Inter, Roboto — these break the pixel aesthetic).
- Smooth gradients (use flat colors or stepped color blocks).
- Rounded corners (use `rounded-none` or very minimal `rounded-sm`).
- Modern minimalist layouts (pixel art is dense and game-like).
- Image smoothing/anti-aliasing (must use `image-rendering: pixelated`).
- Too many colors (use a limited palette — 4-8 colors max).
- Missing the button press interaction (translate + shadow collapse is essential).
- Mixing palette systems (NES colors with Game Boy aesthetics).
- Large body text in Press Start 2P (it's too wide; use VT323 for body).

## Accessibility Considerations

- Pixel fonts can reduce readability at small sizes; use VT323 or Pixelify Sans for body text (more legible).
- High contrast (black borders, bright colors) aids visual identification.
- Focus states must be bold: `focus:ring-4 focus:ring-[#5cd6ff]`.
- CRT scanlines are decorative: `pointer-events-none` and limited opacity (`opacity-30`).
- Health/progress bars need text alternatives (`aria-valuenow`, `aria-label`).
- Pixel art icons need `alt` text or `aria-label`.
- Blinking cursors must respect `prefers-reduced-motion` (disable pulse).
- Touch targets: despite pixel aesthetic, maintain minimum 44x44px hit areas.
- The `image-rendering: pixelated` property is visual; ensure content is accessible to screen readers regardless.
