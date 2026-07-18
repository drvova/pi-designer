---
name: arcade-ui
description: Build arcade UI components (80s coin-op cabinets, neon marquees, pixel-art bezels, high-score leaderboards, coin-slot mechanics, joystick energy, CRT scanlines) with glowing cabinet frames, insert-coin prompts, and the sensory excitement of the 1980s video arcade. Trigger this skill when the user asks for arcade design, coin-op UI, retro arcade cabinet, high-score screen, 80s gaming, or neon cabinet interfaces.
---

# Arcade UI

Use this skill to design and implement vibrant, high-energy interfaces inspired by 1980s video arcades: neon cabinet marquees, pixel-art frame bezels, high-score leaderboard displays, coin-slot insert prompts, CRT scanline overlays, and the intense sensory rush of rows of glowing arcade cabinets.

## Core Material Recipes

### 1) Cabinet Marquee Panel

The signature neon-lit header panel (like the top of an arcade cabinet).

- `bg-gradient-to-r from-[#1a0033] via-[#3a0066] to-[#1a0033] border-y-4 border-[#5a0099] p-4 text-center shadow-[0_0_20px_rgba(138,43,226,0.3),inset_0_0_15px_rgba(138,43,226,0.1)]`.
- Marquee text: `font-[Press_Start_2P] text-[#00ffff] [text-shadow:0_0_5px_#00ffff,0_0_10px_#00ffff] text-lg uppercase`.

### 2) CRT Screen Panel

Dark screen surface with scanlines and curvature.

- `bg-[#000510] rounded-lg p-6 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] relative overflow-hidden`.
- Scanlines: `before:absolute before:inset-0 before:bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_2px,rgba(0,255,255,0.02)_2px,rgba(0,255,255,0.02)_3px)] before:pointer-events-none`.
- Screen glow: `shadow-[inset_0_0_40px_rgba(0,0,0,0.8),0_0_20px_rgba(0,255,255,0.1)]`.

### 3) High Score Display

Monospace leaderboard with rank/initials/score format.

- `bg-[#000510] border-2 border-[#00ffff]/30 p-4 font-[Press_Start_2P] text-xs text-[#00ffff] [text-shadow:0_0_3px_rgba(0,255,255,0.5)]`.
- Format: `1ST  AAA  999900` / `2ND  BBB  850000` / `3RD  CCC  720000`.

### 4) Insert Coin Button

Flashing coin-slot prompt.

- `bg-[#ffcc00] text-[#1a1a1a] font-[Press_Start_2P] text-sm uppercase px-8 py-4 border-4 border-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a] hover:animate-pulse hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all`.

### 5) Neon Cabinet Button

Glowing neon-edged button.

- `bg-[#1a0033] text-[#ff00ff] font-[Press_Start_2P] text-sm uppercase px-8 py-3 border-2 border-[#ff00ff] shadow-[0_0_10px_rgba(255,0,255,0.4),inset_0_0_8px_rgba(255,0,255,0.1)] hover:shadow-[0_0_20px_rgba(255,0,255,0.6)] transition-all`.

### 6) Player Stats Display

HUD-style 1UP/2UP stat readout.

- `flex justify-between font-[Press_Start_2P] text-xs text-[#ff0066] [text-shadow:0_0_3px_rgba(255,0,102,0.5)]` showing `1UP  003200  HI  999900`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Neon Cyan | `#00ffff` | Primary glow (marquee, screen) |
| Neon Magenta | `#ff00ff` | Secondary glow (buttons, borders) |
| Neon Green | `#00ff41` | Score display, terminal |
| Hot Pink | `#ff0066` | 1UP indicator, urgency |
| Arcade Gold | `#ffcc00` | Coin slot, insert coin |
| Cabinet Purple | `#3a0066` | Cabinet body |
| Deep Black | `#000510` | Screen background |
| Pure Black | `#1a1a1a` | Borders, outlines |

Rules: Neon-on-black is the arcade palette. Cyan and magenta are the primary neon pair. Gold for coins/score. Everything GLOWS with layered text-shadows.

## Typography Recommendations

- **Primary:** Press Start 2P (the definitive arcade pixel font).
- **Alternative:** VT323, Silkscreen (readable pixel fonts for body text).
- **Labels:** `font-[Press_Start_2P] text-xs uppercase` (high-score format).
- ALL typography uses pixel/bitmap fonts — no anti-aliased fonts.
- Text uses neon glow: `[text-shadow:0_0_5px_currentColor]`.

## Reusable Tailwind Tokens

- Marquee: `bg-gradient-to-r from-[#1a0033] via-[#3a0066] to-[#1a0033] border-y-4 border-[#5a0099] shadow-[0_0_20px_rgba(138,43,226,0.3)]`.
- CRT screen: `bg-[#000510] shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]` with scanline overlay.
- Insert coin: `bg-[#ffcc00] border-4 border-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a]`.
- Neon button: `bg-[#1a0033] text-[#ff00ff] border-2 border-[#ff00ff] shadow-[0_0_10px_rgba(255,0,255,0.4)]`.
- High score: `font-[Press_Start_2P] text-xs text-[#00ffff] [text-shadow:0_0_3px_rgba(0,255,255,0.5)]`.

## Quality Checklist

- At least one neon-lit cabinet marquee header.
- CRT screen panel with scanline overlay present.
- Press Start 2P (or equivalent pixel font) used throughout.
- At least one high-score leaderboard display (rank/initials/score format).
- "INSERT COIN" flashing button element.
- Neon glow effects (layered text-shadows on text, box-shadows on borders).
- Player stat readout (1UP/2UP/HI-SCORE).
- Color palette is neon-on-black (cyan, magenta, gold, green).
- The aesthetic reads as 1980s video arcade / coin-op cabinet.
- Everything feels intense, energetic, and loaded with adrenaline.

## Anti-Patterns

- Anti-aliased fonts (arcade is pixel/bitmapped ONLY).
- Muted or desaturated colors (arcade is NEON on BLACK).
- Missing CRT scanlines (scanlines are the signature CRT effect).
- Missing the high-score display (leaderboards are iconic arcade elements).
- Missing "INSERT COIN" prompt (this is THE arcade call-to-action).
- Modern flat design (arcade is neon-glowing, scanlined, pixel-perfect).
- Sans-serif modern fonts (Press Start 2P or equivalent is mandatory).
- Light backgrounds (arcade screens are DEEP BLACK).
- Missing neon glow (text and borders must GLOW with layered shadows).
- Smooth gradients (arcade is flat neon color with glow, not gradients).

## Accessibility Considerations

- Deep black backgrounds with neon text provide excellent contrast (WCAG AAA).
- Press Start 2P can be hard to read at small sizes — use VT323 for body text.
- Focus states: `focus:ring-4 focus:ring-[#00ffff]/50` (neon cyan ring).
- Flashing "INSERT COIN" must not exceed 3Hz (seizure risk).
- Scanline overlays must not reduce text contrast.
- The high-contrast neon-on-black is naturally very accessible.
- Touch targets must be adequate despite pixel-font rendering.
