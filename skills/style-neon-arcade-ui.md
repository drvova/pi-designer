---
name: neon-arcade-ui
description: Build neon arcade UI components (glowing arcade cabinets, CRT scan line screens, joystick and button controls, neon sign signage, token dispensers, high score leaderboards, coin-op mechanisms) with CRT phosphor glow, neon cabinet lighting, and the electric atmosphere of a 1980s neon-lit arcade. Trigger this skill when the user asks for neon arcade design, CRT screen UI, arcade cabinet interface, neon signage, coin-op controls, joystick UI, or retro neon gaming interfaces.
---

# Neon Arcade UI

Use this skill to design and implement electric, phosphorescent interfaces inspired by 1980s neon-lit arcades: CRT scan line screens with curvature, neon cabinet edge-lighting, joystick silhouettes, arcade button grids, neon sign text with triple glow, high score leaderboard tables with retro monospace, and token/coin-slot accents.

## Core Material Recipes

### 1) CRT Screen Panel

A dark screen surface with phosphor scan lines and subtle barrel curvature.

- `bg-[#000a00] rounded-lg p-6 relative overflow-hidden shadow-[inset_0_0_60px_rgba(0,0,0,0.9),0_0_30px_rgba(0,255,65,0.1)]`.
- Scan lines: `before:absolute before:inset-0 before:bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_2px,rgba(0,255,65,0.04)_2px,rgba(0,255,65,0.04)_3px)] before:pointer-events-none before:z-10`.
- Phosphor flicker: `after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_center,rgba(0,255,65,0.03)_0%,transparent_70%)] after:pointer-events-none`.

### 2) Neon Cabinet Body

The arcade cabinet shell with neon edge-lighting on a dark cabinet surface.

- Cabinet shell: `bg-[#0a0a0a] border border-[#a0a0a0]/20 rounded-lg p-6 shadow-[0_0_40px_rgba(255,0,170,0.1),inset_0_1px_0_rgba(160,160,160,0.1)]`.
- Neon edge glow (top): `border-t-2 border-t-[#ff00aa] shadow-[0_-2px_15px_rgba(255,0,170,0.4)]`.
- Neon edge glow (bottom): `border-b-2 border-b-[#00aaff] shadow-[0_2px_15px_rgba(0,170,255,0.4)]`.

### 3) Neon Sign Text

Triple-layered glow text that simulates real neon tube signage.

- Primary neon: `font-['Press_Start_2P'] text-[#ff00aa] text-3xl uppercase [text-shadow:0_0_4px_#ff00aa,0_0_8px_#ff00aa,0_0_16px_rgba(255,0,170,0.6)]`.
- Blue neon variant: `text-[#00aaff] [text-shadow:0_0_4px_#00aaff,0_0_8px_#00aaff,0_0_16px_rgba(0,170,255,0.6)]`.
- Flicker animation: `animate-[flicker_3s_ease-in-out_infinite]` with keyframes alternating opacity between 0.92 and 1.0.

### 4) Arcade Button Grid

Round colored buttons arranged in a grid, like a control panel.

- Button base: `w-12 h-12 rounded-full border-2 border-[#a0a0a0]/30 shadow-[inset_0_-3px_6px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.4)] cursor-pointer`.
- Red button: `bg-[#ff003c] shadow-[inset_0_-3px_6px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.4),0_0_10px_rgba(255,0,60,0.3)]`.
- Blue button: `bg-[#00aaff] shadow-[inset_0_-3px_6px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.4),0_0_10px_rgba(0,170,255,0.3)]`.
- Yellow button: `bg-[#ffee00] shadow-[inset_0_-3px_6px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.4),0_0_10px_rgba(255,238,0,0.3)]`.
- Grid layout: `grid grid-cols-4 gap-4 place-items-center`.

### 5) High Score Leaderboard

Retro monospace leaderboard with ranking numbers and neon glow.

- Table container: `bg-[#000a00] border border-[#00ff41]/30 p-4 font-['Press_Start_2P'] text-xs text-[#00ff41] [text-shadow:0_0_3px_rgba(0,255,65,0.5)]`.
- Header row: `text-[#ffee00] [text-shadow:0_0_3px_rgba(255,238,0,0.5)]` for `RANK  PLAYER  SCORE`.
- Highlight row (1st place): `text-[#ff00aa] [text-shadow:0_0_5px_rgba(255,0,170,0.6)]`.
- Format: `1ST  AAA  999900` / `2ND  BBB  850000` / `3RD  CCC  720000`.

### 6) Joystick Silhouette SVG

A dark joystick silhouette with neon outline glow.

- Container: `relative w-16 h-20 flex items-end justify-center`.
- SVG: `<svg viewBox="0 0 64 80" fill="none" class="w-full h-full drop-shadow-[0_0_8px_rgba(0,170,255,0.6)]"><circle cx="32" cy="16" r="12" stroke="#00aaff" stroke-width="2" fill="#0a0a0a"/><rect x="28" y="28" width="8" height="30" rx="2" stroke="#00aaff" stroke-width="2" fill="#0a0a0a"/><rect x="16" y="58" width="32" height="8" rx="4" stroke="#a0a0a0" stroke-width="1.5" fill="#0a0a0a"/></svg>`.

### 7) Token / Coin Slot Accent

A metallic coin slot with gold glow and coin-insert animation.

- Slot body: `bg-[#1a1a1a] border border-[#a0a0a0]/40 rounded-sm px-6 py-2 shadow-[inset_0_1px_3px_rgba(0,0,0,0.6)]`.
- Slot opening: `w-12 h-1 bg-[#d4a040] shadow-[0_0_6px_#d4a040,0_0_12px_rgba(212,160,64,0.4)] rounded-sm`.
- Coin glow: `bg-[#d4a040] text-[#0a0a0a] font-['Press_Start_2P'] text-[10px] px-3 py-1 rounded-full shadow-[0_0_8px_#d4a040]`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Cabinet Dark | `#0a0a0a` | Cabinet body, backgrounds |
| CRT Green | `#00ff41` | Screen text, phosphor glow |
| Neon Pink | `#ff00aa` | Primary neon signage, accents |
| Neon Blue | `#00aaff` | Joystick glow, secondary neon |
| Neon Yellow | `#ffee00` | Score highlights, warnings |
| Scan Line Overlay | `rgba(0,255,65,0.04)` | CRT scan line effect |
| Cabinet Chrome | `#a0a0a0` | Metallic trim, borders |
| Coin Gold | `#d4a040` | Token slots, coin accents |

Rules: Neon-on-dark is the arcade palette. CRT green for screen content, neon pink and blue for cabinet signage. Gold only for coins and tokens. Scan line overlays are mandatory on every screen surface. Everything glows with layered shadows.

## Typography Recommendations

- **Primary:** Press Start 2P (the definitive arcade pixel font for signage and scores).
- **Alternative:** VT323, Share Tech Mono (readable monospace for body and CRT content).
- **Neon signage:** `font-['Press_Start_2P'] text-[#ff00aa] [text-shadow:0_0_4px_#ff00aa,0_0_8px_#ff00aa,0_0_16px_rgba(255,0,170,0.6)]`.
- **CRT body text:** `font-['VT323'] text-[#00ff41] [text-shadow:0_0_2px_rgba(0,255,65,0.4)]`.
- ALL typography uses neon glow text-shadows. No flat unstyled text.

## Component Architecture Pattern

- CRT screen panels as the primary content surface with scan line overlays via `before:` pseudo-element.
- Neon cabinet shells wrapping content with colored edge-glow borders (pink top, blue bottom).
- Neon sign headers using triple-layered text-shadow for tube-light simulation.
- High score tables in monospace with ranking-number formatting and colored glow.
- Arcade button grids as `grid grid-cols-4` with individual colored glow per button.
- Joystick SVG silhouettes as decorative or interactive control elements.
- Token/coin-slot accents as metallic details with gold glow.

## Interaction Rules

- Button press: translate down 2px, reduce shadow spread, add `inset` shadow for physical depth.
- Joystick tilt: `rotate-12` on hover with transition for a tactile movement feel.
- Neon sign flicker: subtle opacity animation (0.92 to 1.0) on a 3-second cycle.
- CRT screen power-on: `scale-[0.98]` to `scale-1` with brightness transition.
- High score entry: flash the rank number with `animate-pulse` when a new score is set.
- Coin insert: translate Y from -20px to 0 with opacity fade-in on the token element.
- All transitions use `transition-all duration-200`.

## Reusable Tailwind Tokens

- CRT screen: `bg-[#000a00] shadow-[inset_0_0_60px_rgba(0,0,0,0.9)]` with scan line `before:`.
- Cabinet shell: `bg-[#0a0a0a] border border-[#a0a0a0]/20 shadow-[0_0_40px_rgba(255,0,170,0.1)]`.
- Neon sign: `text-[#ff00aa] [text-shadow:0_0_4px_#ff00aa,0_0_8px_#ff00aa,0_0_16px_rgba(255,0,170,0.6)]`.
- Arcade button: `w-12 h-12 rounded-full border-2 border-[#a0a0a0]/30 shadow-[inset_0_-3px_6px_rgba(0,0,0,0.5)]`.
- High score: `font-['Press_Start_2P'] text-xs text-[#00ff41] [text-shadow:0_0_3px_rgba(0,255,65,0.5)]`.
- Coin slot: `w-12 h-1 bg-[#d4a040] shadow-[0_0_6px_#d4a040,0_0_12px_rgba(212,160,64,0.4)]`.
- Focus ring: `focus:ring-4 focus:ring-[#00aaff]/50`.

## Quality Checklist

- CRT screen panel with scan line overlay (`repeating-linear-gradient` on `before:`).
- Neon cabinet body with colored edge-glow borders (pink/blue).
- Neon sign text with triple-layered text-shadow glow.
- Arcade button grid (4-column grid of round colored buttons with glow).
- High score leaderboard in monospace with ranking-number format.
- Joystick silhouette SVG with neon outline glow.
- Token/coin-slot accent with gold glow.
- Color palette is neon-on-dark (CRT green, neon pink, neon blue, gold).
- The aesthetic reads as a 1980s neon-lit arcade cabinet environment.
- Everything feels electric, phosphorescent, and loaded with cabinet energy.

## Anti-Patterns

- Light or white backgrounds (arcade cabinets are deep dark with neon glow).
- Missing CRT scan lines (scan lines are the signature screen effect).
- Flat un-glowing neon text (triple-layered text-shadow is mandatory for neon sign effect).
- Missing coin/token elements (coin-op is a core arcade mechanic).
- Sans-serif modern fonts without glow (Press Start 2P or VT323 with text-shadow required).
- Smooth gradient fills (arcade is neon-colored surfaces with glow, not smooth gradients).
- Missing joystick or button control elements (physical controls sell the arcade metaphor).
- High score display without monospace formatting (leaderboards must read as retro data).
- Muted or desaturated colors (neon means maximum vibrancy on dark surfaces).
- Missing scan line overlay on screen panels (every CRT surface has scan lines).
- Modern flat card design without edge glow (cabinet shells need neon edge-lighting).

## Accessibility Considerations

- CRT green (#00ff41) on #0a0a0a provides strong contrast (WCAG AAA).
- Neon pink (#ff00aa) on dark provides excellent contrast for headings.
- Focus states use bright neon blue glow rings for keyboard navigation.
- Scan line overlays must not reduce text contrast below 4.5:1 ratio.
- Flickering neon sign animation must respect `prefers-reduced-motion`.
- Touch targets for arcade buttons must be minimum 44x44px.
- High score table numbers must remain readable despite glow effects.
- Joystick SVG elements must include `aria-hidden="true"` if decorative.
- Coin-slot animations must not exceed 3Hz flash rate.
