---
name: retro-futurism-ui
description: Build retro-futuristic UI components (1980s-90s sci-fi aesthetics, neon grids, chrome typography, VHS scanlines, synthwave palettes) with CRT effects, pixel art accents, and nostalgic visions of the future. Trigger this skill when the user asks for retro-futurism, synthwave UI, vaporwave UI, outrun aesthetic, 80s sci-fi design, or retro-tech interfaces.
---

# Retro-Futurism UI

Use this skill to design and implement nostalgic futuristic interfaces inspired by 1980s-90s science fiction, combining neon grids, chrome typography, VHS aesthetics, and the romanticized technological optimism of past eras.

## Non-Negotiable Foundations

- Retro-futurism is how the PAST imagined the FUTURE. It is nostalgic, not modern-futuristic.
- Three dominant sub-genres: Synthwave/Outrun (80s), Vaporwave (90s-00s), and Cybercore (industrial Y2K).
- The aesthetic relies on neon-on-dark, chrome/metallic surfaces, grid perspectives, and analog distortion (VHS, scanlines, CRT).
- Typography is technological and retro: pixel fonts, techno-display fonts, or chrome-treated text.
- The interface should feel like a science fiction movie computer, an arcade cabinet, or a retro video game menu.

## Core Material Recipes

### 1) Synthwave Grid Background

The iconic perspective grid stretching to the horizon.

```css
.synthwave-grid {
  background:
    linear-gradient(rgba(255,0,255,0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,0,255,0.1) 1px, transparent 1px);
  background-size: 40px 40px;
  transform: perspective(300px) rotateX(60deg);
  transform-origin: center bottom;
}
```

Tailwind: `bg-[linear-gradient(rgba(255,0,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(300px)_rotateX(60deg)]`

### 2) Chrome / Metallic Text (Outrun style)

Reflective chrome text with 80s sci-fi gradient.

```css
.chrome-outrun {
  background: linear-gradient(180deg,
    #f59e0b 0%, #fbbf24 20%,
    #fef3c7 40%, #f59e0b 50%,
    #92400e 60%, #451a03 70%,
    #f59e0b 90%, #fbbf24 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 20px rgba(245,158,11,0.3);
}
```

### 3) Neon Glow Text (Synthwave)

- Pink glow: `text-[#ff00ff] [text-shadow:0_0_5px_#ff00ff,0_0_10px_#ff00ff,0_0_20px_#ff00ff,0_0_40px_#ff006e]`
- Cyan glow: `text-[#00ffff] [text-shadow:0_0_5px_#00ffff,0_0_10px_#00ffff,0_0_20px_#00ffff,0_0_40px_#00bfff]`

### 4) VHS / CRT Overlay

Analog distortion effects for retro authenticity.

- Scanlines: `bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.15)_0px,rgba(0,0,0,0.15)_1px,transparent_1px,transparent_3px)] opacity-50`
- VHS color noise: RGB split using `text-shadow` with red/cyan offset.
- CRT curvature: `border-radius: 50%/20%` on container with `overflow-hidden` (simulates tube screen edges).

### 5) Synthwave Sun / Gradient Horizon

The iconic outrun sun: half-circle with horizontal stripes.

- `bg-gradient-to-b from-[#ff6b6b] via-[#ff006e] to-[#9d00ff] rounded-full`
- Add horizontal stripe cutouts using `background-image: repeating-linear-gradient(0deg, transparent 0px, transparent 8px, rgba(0,0,0,0.8) 8px, rgba(0,0,0,0.8) 10px)` on the bottom half.

### 6) Retro-Futuristic Card

Dark card with neon border and perspective.

- `bg-[#0a0a1a]/80 backdrop-blur-sm border border-[#ff00ff]/30 rounded-lg shadow-[0_0_20px_rgba(255,0,255,0.2)]`
- Optional corner clip: `[clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%)]`

## Color Palette System

### Synthwave / Outrun (80s)

- `#ff00ff` (magenta), `#00ffff` (cyan), `#ff006e` (hot pink), `#9d00ff` (purple), `#f59e0b` (amber/chrome), `#0a0a1a` (deep navy base)

### Vaporwave (90s)

- `#ff71ce` (neon pink), `#01cdfe` (cyan), `#05ffa1` (mint), `#b967ff` (lavender), `#fffb96` (acid yellow), `#1a0033` (deep purple base)

### Cybercore / Industrial Y2K

- `#00ff00` (terminal green), `#00ffff` (cyan), `#c0c0c0` (chrome), `#1a1a2e` (dark base)

Rules: Each sub-genre has a distinct palette. Do not mix Synthwave and Vaporwave colors — they are different aesthetics.

## Typography Recommendations

Retro-futurism typography is engineered and nostalgic:

- **Display/HUD:** Orbitron, Audiowide, Russo One, Megrim, Press Start 2P (pixel).
- **Chrome text:** Apply metallic gradient clip to any bold geometric font.
- **Monospace:** VT323, Share Tech Mono, IBM Plex Mono for terminal/HUD text.
- **Body:** Clean sans-serif at normal weight (the retro elements are in the headings and surfaces, not body text).
- Avoid serif fonts. Retro-futurism is digital and technological.

## Sub-Genre Guide

### Synthwave / Outrun

- Vibe: 1980s action movie, Miami Vice, arcade racing.
- Key elements: perspective grid, chrome text, neon sun, magenta/cyan.
- Motion: fast, energetic, neon streaks.

### Vaporwave

- Vibe: 1990s mall culture, glitch art, dreamlike nostalgia.
- Key elements: pastel neons, Greek statues, early Windows UI, glitch effects.
- Motion: slow, dreamy, slightly glitchy.

### Cybercore

- Vibe: industrial, Y2K, early-internet hacker.
- Key elements: terminal text, circuit patterns, monospace, wireframes.
- Motion: digital, precise, scanline drift.

## Component Architecture Pattern

1. Dark background (deep navy, black, or dark purple).
2. Perspective grid or starfield background.
3. CRT scanline / VHS overlay (subtle, `opacity-30` to `50`).
4. Neon-bordered panels with glow.
5. Chrome or neon typography for headings.
6. HUD decorative elements (corner brackets, data readouts).

## Interaction Rules

- Default state: neon glow on dark, chrome shimmer optional.
- Hover state: intensify glow, add slight scale or brightness.
  - `hover:shadow-[0_0_30px_rgba(255,0,255,0.5)] hover:scale-105`.
- Active state: brief flash to white or glitch flicker.
- Focus state: thick neon ring `focus:ring-2 focus:ring-[#00ffff]`.
- Transitions: `transition-all duration-200`.
- CRT scanline drift: slow animation `animate-[scan_8s_linear_infinite]`.

## Reusable Tailwind Tokens

- Synthwave grid: `bg-[linear-gradient(rgba(255,0,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]`
- Neon text (pink): `text-[#ff00ff] [text-shadow:0_0_5px_#ff00ff,0_0_10px_#ff00ff,0_0_20px_#ff00ff]`
- Neon text (cyan): `text-[#00ffff] [text-shadow:0_0_5px_#00ffff,0_0_10px_#00ffff,0_0_20px_#00ffff]`
- Neon card: `bg-[#0a0a1a]/80 backdrop-blur-sm border border-[#ff00ff]/30 rounded-lg shadow-[0_0_20px_rgba(255,0,255,0.2)]`
- Scanlines: `bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.15)_0px,rgba(0,0,0,0.15)_1px,transparent_1px,transparent_3px)]`
- Sun gradient: `bg-gradient-to-b from-[#ff6b6b] via-[#ff006e] to-[#9d00ff]`

## Quality Checklist (must pass)

- Background is dark (deep navy, black, or dark purple).
- Neon accents glow with layered shadows (multiple shadow layers for depth).
- Typography is retro-technological (Orbitron, pixel fonts, or chrome-treated).
- Grid, scanline, or starfield texture adds retro atmosphere.
- Color palette matches the chosen sub-genre (Synthwave, Vaporwave, or Cybercore).
- Chrome text uses the vertical metallic gradient with `background-clip: text`.
- Optional CRT effects (scanlines, curvature) add authenticity.
- The aesthetic reads as a nostalgic vision of the future, not modern sci-fi.

## Anti-Patterns

- Light or bright backgrounds (retro-futurism is dark).
- Modern minimalist typography (needs pixel, techno, or chrome fonts).
- Missing neon glow (neon without glow is just colored text).
- Mixing sub-genre palettes (Synthwave magenta/cyan does not mix with Vaporwave pastels).
- Missing atmospheric texture (grid, scanlines, or starfield are essential).
- Flat chrome text without gradient (chrome requires the metallic gradient).
- Over-saturating with too many neon colors (one primary neon + one secondary).
- Using modern sans-serif fonts (Inter, SF Pro break the retro aesthetic).
- Forgetting the perspective grid (it is the signature synthwave element).

## Accessibility Considerations

- Neon text on dark backgrounds can cause eye strain in prolonged use; keep body text in standard colors.
- Glitch and VHS effects must respect `prefers-reduced-motion`.
- CRT scanlines are decorative: `pointer-events-none` and limited opacity.
- Chrome text can disappear on light backgrounds; use only on dark.
- Verify text contrast meets WCAG AA despite the stylized aesthetic.
- Provide alt text for decorative grid and sun elements.
- Focus states must be clearly visible against dark neon backgrounds.
