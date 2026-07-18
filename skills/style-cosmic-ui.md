---
name: cosmic-ui
description: Build cosmic / astronomical UI components (deep space nebulas, starfield backgrounds, planetary orbits, galaxy spirals, constellation lines, celestial mechanics) with vast dark voids, glowing stellar objects, and the sublime scale of the universe. Trigger this skill when the user asks for cosmic design, space UI, galaxy aesthetic, astronomical interface, nebula design, celestial interfaces, or deep space visualizations.
---

# Cosmic / Astronomical UI

Use this skill to design and implementation vast, awe-inspiring interfaces set in deep space: starfield backgrounds, glowing nebulas, orbital data displays, planetary visualizations, constellation-line connectors, and the sublime scale and beauty of the cosmos.

## Non-Negotiable Foundations

- Cosmic UI is set in DEEP SPACE: the background is always an extremely dark blue-black void with stars.
- Three layers of depth: background (distant stars), midground (nebula glow), foreground (planets, orbital paths, content).
- Light comes from STARS and NEBULAS: elements are illuminated by cosmic light sources, not standard UI lighting.
- Scale is sublime and vast: the interface should make the user feel small in the face of cosmic enormity.
- Colors are spectral: deep blues, purples, and magentas of nebulas; gold/white of stars; cyan of energy fields.
- Data is displayed as celestial mechanics: orbits, trajectories, astronomical units, light-years.

## Core Material Recipes

### 1) Starfield Background

The foundational cosmic surface: layers of distant stars.

```css
.starfield {
  background-color: #050510;
  background-image:
    radial-gradient(1px 1px at 10% 20%, white, transparent),
    radial-gradient(1px 1px at 30% 40%, white, transparent),
    radial-gradient(1.5px 1.5px at 50% 15%, rgba(255,255,255,0.8), transparent),
    radial-gradient(1px 1px at 70% 60%, white, transparent),
    radial-gradient(1px 1px at 90% 30%, rgba(255,255,255,0.6), transparent),
    radial-gradient(2px 2px at 15% 80%, rgba(180,200,255,0.9), transparent),
    radial-gradient(1px 1px at 85% 85%, white, transparent),
    radial-gradient(1px 1px at 45% 55%, rgba(255,240,200,0.7), transparent),
    radial-gradient(1.5px 1.5px at 25% 10%, rgba(200,200,255,0.8), transparent);
  background-size: 300px 300px;
}
```

Tailwind: `bg-[#050510]` with SVG star field overlay.

### 2) Nebula Glow

Diffuse colored cloud of interstellar gas.

- `bg-[radial-gradient(ellipse_at_30%_40%,rgba(138,43,226,0.15)_0%,transparent_50%)]` (purple nebula).
- `bg-[radial-gradient(ellipse_at_70%_60%,rgba(220,20,60,0.1)_0%,transparent_40%)]` (crimson nebula).
- Layer multiple nebula colors: purple + magenta + deep blue.

### 3) Orbital Display

Data shown as orbiting elements around a central star/planet.

- Center: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#f5d76e] to-[#e0552a] shadow-[0_0_40px_rgba(245,215,110,0.4)]` (star).
- Orbit rings: `border border-dashed border-white/10 rounded-full` at increasing sizes.
- Orbiting elements: positioned with CSS transforms at different angles/distance.

### 4) Cosmic Glass Panel

Translucent panel floating in space.

- `bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_30px_rgba(138,92,246,0.1)] p-6`.

### 5) Cosmic Button

Glowing button like a stellar energy source.

- `bg-gradient-to-r from-[#6a2a8a] to-[#2a1a5a] text-[#c0a0ff] font-medium rounded-full px-8 py-3 border border-[#8a5abf]/30 shadow-[0_0_20px_rgba(138,43,226,0.3)] hover:shadow-[0_0_30px_rgba(138,43,226,0.5)] transition-all`.

### 6) Constellation Connector

Lines connecting related data points (like constellation lines).

```html
<svg class="absolute inset-0 w-full h-full pointer-events-none">
  <line x1="20%" y1="30%" x2="50%" y2="60%" stroke="rgba(255,255,255,0.15)" stroke-width="0.5"/>
  <line x1="50%" y1="60%" x2="80%" y2="40%" stroke="rgba(255,255,255,0.15)" stroke-width="0.5"/>
  <circle cx="20%" cy="30%" r="2" fill="rgba(255,255,255,0.6)"/>
  <circle cx="50%" cy="60%" r="2" fill="rgba(255,255,255,0.6)"/>
  <circle cx="80%" cy="40%" r="2" fill="rgba(255,255,255,0.6)"/>
</svg>
```

### 7) Planet / Celestial Body

Decorative planetary sphere with surface detail.

- `w-24 h-24 rounded-full bg-gradient-to-br from-[#4a6a9a] via-[#2a4a7a] to-[#1a3a6a] shadow-[inset_-4px_-4px_12px_rgba(0,0,0,0.4),0_0_20px_rgba(74,106,154,0.3)]`.

## Color Palette System

### Core Cosmic Palette

| Color | Hex | Role |
|---|---|---|
| Void Black | `#050510` | Primary background |
| Deep Space | `#0a0a2a` | Card surfaces |
| Nebula Purple | `#8a2af5` / `rgba(138,43,226,0.15)` | Nebula glow |
| Star Gold | `#f5d76e` | Stars, highlights |
| Stellar White | `#ffffff` | Star points, primary text |
| Energy Cyan | `#00aeef` | Interactive glow |
| Nebula Magenta | `#dc143c` / `rgba(220,20,60,0.1)` | Nebula glow |
| Stellar Blue | `#4a6a9a` | Planetary surfaces |
| Soft Purple | `#c0a0ff` | Text on dark |

Rules: Deep void backgrounds with layered nebula glows. Stars are pinpricks of white/gold. Interactive elements glow with spectral energy (purple, cyan, magenta). No warm earth tones.

## Typography Recommendations

- **Display:** Space Grotesk, Orbitron, or Syncopate (geometric, space-age).
- **Body:** Inter, DM Sans (clean, modern, readable on dark).
- **Data:** JetBrains Mono (astronomical units, coordinates, distances).
- **Labels:** `font-mono text-xs uppercase tracking-widest text-white/40` (like mission control readouts).

## Interaction Rules

- Default: vast, glowing, sublime.
- Hover: elements glow brighter, like stars intensifying.
  - `hover:shadow-[0_0_30px_rgba(138,43,226,0.5)] hover:scale-[1.02] transition-all duration-400`.
- Active: `active:scale-95`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#00aeef]/50`.
- Transitions: `transition-all duration-400 ease-out` (slow, weightless, zero-gravity feel).
- Optional: slow parallax on starfield as user scrolls (stars drift).

## Reusable Tailwind Tokens

- Void bg: `bg-[#050510]` with SVG starfield overlay.
- Nebula glow: `bg-[radial-gradient(ellipse_at_30%_40%,rgba(138,43,226,0.15)_0%,transparent_50%)]`.
- Cosmic glass: `bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_30px_rgba(138,92,246,0.1)]`.
- Cosmic button: `bg-gradient-to-r from-[#6a2a8a] to-[#2a1a5a] text-[#c0a0ff] border border-[#8a5abf]/30 shadow-[0_0_20px_rgba(138,43,226,0.3)]`.
- Star: `rounded-full bg-gradient-to-br from-[#f5d76e] to-[#e0552a] shadow-[0_0_40px_rgba(245,215,110,0.4)]`.
- Constellation: SVG lines at `rgba(255,255,255,0.15)` connecting circular points.

## Quality Checklist

- Background is deep void black-blue with visible stars.
- At least one nebula glow (radial gradient in purple/magenta/blue).
- Starfield has multiple layers of depth (distant + near stars).
- At least one orbital or celestial mechanic element (orbit ring, planet, star).
- Cosmic glass panels float with backdrop-blur and subtle glow.
- Constellation-line connectors link related data points.
- Color palette is spectral (deep blues, purples, star gold/white).
- Typography includes monospace data readouts (coordinates, distances).
- The aesthetic evokes cosmic scale and astronomical wonder.
- Elements glow with stellar energy (spectral shadow colors).

## Anti-Patterns

- Light or bright backgrounds (cosmic UI is deep void dark).
- Earth-tone palettes (cosmic colors are spectral blues/purples/magentas).
- Missing stars (the starfield is the mandatory background texture).
- Missing nebula glow (nebulae add the cosmic color depth).
- Flat opaque panels (use translucent glass panels in space).
- Missing glow effects (stars and energy sources must emit light).
- Conventional UI shadows (use spectral glow shadows, not gray drop shadows).
- Small-scale, contained layouts (cosmic UI should feel vast and sublime).
- Missing data as celestial mechanics (orbits, trajectories, astronomical units).
- Terrestrial metaphors (everything should feel weightless and stellar).

## Accessibility Considerations

- Deep void backgrounds with white/gold text provide excellent contrast (WCAG AAA).
- Nebula glows must not reduce text contrast (keep radial gradients subtle).
- Focus states: `focus:ring-2 focus:ring-[#00aeef]/50` (cyan energy ring on void).
- Starfield and nebula SVGs must be `aria-hidden="true"`.
- Astronomical data readouts need proper `aria-label` (distances, coordinates).
- The dark background is low eye-strain (good for extended viewing).
- Orbital data displays need text alternatives for screen readers.
- Touch targets must be adequate despite cosmic glass panel padding.
