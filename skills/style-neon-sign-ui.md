---
name: neon-sign-ui
description: Build neon sign UI components (glowing gas-tube lettering, hand-bent glass shapes, dark-wall backdrops, electric hum, buzzing flicker, motel/bar signage craft) with layered neon glow text, dark brick or concrete walls, and the authentic craft of the neon sign maker. Trigger this skill when the user asks for neon sign, neon lettering, motel sign, bar sign, glowing tube, or electric signage interfaces.
---

# Neon Sign UI

Use this skill to design and implement interfaces inspired by the craft of neon tube signage: hand-bent glowing glass lettering on dark brick or concrete walls, electric layered glow effects, subtle flicker animations, and the nostalgic Americana of motel, bar, and diner neon signs.

## Non-Negotiable Foundations

- Neon sign UI is specifically about the CRAFT of neon tubing: glowing gas-filled glass tubes bent into letters and shapes, mounted on a dark wall.
- The background is always DARK: brick wall, concrete, or night sky — the neon needs darkness to glow.
- Glow is LAYERED: close bright core + mid diffuse glow + far ambient halo (3+ text-shadow layers minimum).
- Colors are the classic neon gas hues: neon red/orange (neon gas), neon blue (argon gas), neon pink, neon green, neon gold/yellow.
- Flicker is subtle and occasional — a real neon sign hums steadily with rare dropouts, not constant strobing.
- The aesthetic is nostalgic Americana: Route 66 motels, dive bars, 24-hour diners.

## Core Material Recipes

### 1) Dark Wall Background

The mounting surface for neon signs.

- Brick: `bg-[#2a1a1a] bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_30px,rgba(0,0,0,0.15)_30px,rgba(0,0,0,0.15)_32px),repeating-linear-gradient(90deg,transparent_0px,transparent_60px,rgba(0,0,0,0.15)_60px,rgba(0,0,0,0.15)_62px)]`.
- Concrete: `bg-[#1a1a1a] bg-[radial-gradient(rgba(60,60,60,0.2)_1px,transparent_1px)] bg-[size:4px_4px]`.

### 2) Neon Tube Text

The signature glowing lettering with layered glow.

- Red neon: `text-[#ff2a2a] [text-shadow:0_0_2px_#ff2a2a,0_0_5px_#ff2a2a,0_0_10px_#ff0040,0_0_20px_#ff0040,0_0_40px_rgba(255,0,64,0.5)] font-bold text-5xl`.
- Blue neon: `text-[#00aaff] [text-shadow:0_0_2px_#00aaff,0_0_5px_#00aaff,0_0_10px_#0066ff,0_0_20px_#0066ff,0_0_40px_rgba(0,102,255,0.5)]`.
- Pink neon: `text-[#ff00aa] [text-shadow:0_0_2px_#ff00aa,0_0_5px_#ff00aa,0_0_10px_#cc0088,0_0_20px_#cc0088,0_0_40px_rgba(204,0,136,0.5)]`.

### 3) Neon Tube Border

Glowing tube-bent border around a panel.

- `border-2 border-[#00ff00] shadow-[0_0_5px_#00ff00,0_0_10px_#00ff00,0_0_20px_rgba(0,255,0,0.4),inset_0_0_10px_rgba(0,255,0,0.1)]`.

### 4) Flicker Animation

Subtle neon flicker (occasional, not constant).

```css
@keyframes neon-flicker {
  0%, 100% { opacity: 1; }
  92% { opacity: 1; }
  93% { opacity: 0.3; }
  94% { opacity: 1; }
  96% { opacity: 0.8; }
  97% { opacity: 1; }
}
.neon-flicker { animation: neon-flicker 5s infinite; }
```

### 5) Neon Sign Button

Glowing tube-style button.

- `bg-transparent text-[#ff2a2a] font-bold uppercase tracking-widest px-8 py-3 border-2 border-[#ff2a2a] shadow-[0_0_5px_#ff2a2a,0_0_10px_#ff2a2a,0_0_20px_rgba(255,42,42,0.4)] hover:shadow-[0_0_10px_#ff2a2a,0_0_20px_#ff2a2a,0_0_40px_rgba(255,42,42,0.6)] transition-all`.

### 6) "OPEN" Sign Element

Classic neon OPEN sign.

- `inline-block px-6 py-2 text-[#00ff00] font-bold text-2xl uppercase tracking-widest border-2 border-[#00ff00] [text-shadow:0_0_5px_#00ff00,0_0_10px_#00ff00,0_0_20px_rgba(0,255,0,0.4)] animate-[neon-flicker_5s_infinite]`.

## Color Palette System

| Gas Color | Hex | Tube Color |
|---|---|---|
| Neon Red | `#ff2a2a` | Neon gas (red-orange) |
| Argon Blue | `#00aaff` | Argon gas (blue) |
| Neon Pink | `#ff00aa` | Neon + phosphor coating |
| Neon Green | `#00ff00` | Argon + green phosphor |
| Neon Gold | `#ffcc00` | Helium + amber phosphor |
| Neon Purple | `#9a00ff` | Argon + purple phosphor |
| Dark Wall | `#1a1a1a` / `#2a1a1a` | Background (brick/concrete) |

Rules: Each neon color comes from a specific gas/phosphor combination. Choose 1-2 neon colors per composition. The dark wall background is MANDATORY — neon only exists against darkness.

## Typography Recommendations

- **Display:** Monoton, Bungee, or Pacifico (fonts that look like they could be bent from glass tubing).
- **Alternative:** Any rounded bold sans-serif at large sizes with heavy glow.
- **Body:** Inter, DM Sans (clean readable sans for non-neon content).
- Neon text should use `font-bold` or `font-black` with wide tracking.
- Thin script fonts can work for cursive neon signs (like a bar name).

## Reusable Tailwind Tokens

- Red neon text: `text-[#ff2a2a] [text-shadow:0_0_2px_#ff2a2a,0_0_5px_#ff2a2a,0_0_10px_#ff0040,0_0_20px_#ff0040,0_0_40px_rgba(255,0,64,0.5)]`.
- Neon border: `border-2 border-[#00ff00] shadow-[0_0_5px_#00ff00,0_0_10px_#00ff00,0_0_20px_rgba(0,255,0,0.4)]`.
- Neon button: `bg-transparent border-2 border-[#ff2a2a] shadow-[0_0_5px_#ff2a2a,0_0_10px_#ff2a2a,0_0_20px_rgba(255,42,42,0.4)]`.
- Brick wall: `bg-[#2a1a1a]` with brick pattern overlay.
- Flicker: `animate-[neon-flicker_5s_infinite]`.

## Quality Checklist

- Background is dark (brick, concrete, or night sky).
- Neon glow uses 3+ layered text-shadow/box-shadow (close + mid + far).
- At least one neon tube text element.
- At least one neon tube border element.
- Subtle flicker animation present (occasional, not constant).
- Color palette is 1-2 neon gas hues against dark wall.
- Typography is bold and rounded (like bent glass tubing).
- The aesthetic reads as neon sign / motel / bar / diner signage.
- Everything glows with electric layered light.
- The dark wall background provides essential contrast.

## Anti-Patterns

- Light or bright backgrounds (neon needs DARKNESS).
- Single-layer glow (neon requires 3+ layers: core + mid + halo).
- Constant strobing flicker (real neon hums steadily with rare dropouts).
- More than 3 neon colors competing (1-2 per composition).
- Missing the dark wall background (neon without dark wall is just colored text).
- Flat non-glowing colored text (the layered glow IS neon).
- Gradients (neon tubes are solid gas-color with glow, not gradients).
- Boring corporate typography (neon is hand-bent expressive lettering).
- Missing the brick/concrete wall texture (the mounting surface matters).
- Smooth digital effects (neon has organic imperfection — flicker and buzz).

## Accessibility Considerations

- Dark backgrounds with bright neon text provide excellent contrast (WCAG AAA).
- Neon glow should not blur the text core — the inner text must remain sharp.
- Flicker animation must respect `prefers-reduced-motion` (disable flicker).
- Flicker must not exceed 3Hz (seizure risk — keep it subtle and rare).
- Focus states: `focus:ring-2 focus:ring-[current-color]` (neon-colored ring).
- The dark background is low eye-strain for extended viewing.
- Neon glow at `0_0_40px` should not create visual noise around text.
