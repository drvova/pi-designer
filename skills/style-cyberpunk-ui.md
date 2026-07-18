---
name: cyberpunk-ui
description: Build cyberpunk UI components (neon glows, dark backgrounds, glitch effects, holographic elements, dystopian futurism) with electric color accents, scanline overlays, terminal aesthetics, and high-tech dystopian visual language. Trigger this skill when the user asks for cyberpunk UI, neon UI, glitch effects, dystopian design, hacker aesthetic, or futuristic dark interfaces.
---

# Cyberpunk UI

Use this skill to design and implement dark, dystopian futuristic interfaces with neon accents, glitch effects, holographic elements, and terminal-inspired aesthetics.

## Non-Negotiable Foundations

- Backgrounds are always dark: deep blacks, dark navies, or near-black with subtle color tint.
- Neon accent colors provide the only light source: electric cyan, hot magenta, toxic green, warning yellow.
- Glow effects are essential: text, borders, and shadows emit colored light (via `text-shadow`, `box-shadow`, `drop-shadow`).
- Typography is monospace or techno-inspired: the interface should feel like a terminal or HUD.
- Glitch effects and scanlines add digital texture and dystopian atmosphere.
- The aesthetic is high-tech but decayed: technology that is powerful but unstable.

## Core Material Recipes

### 1) Neon Glow Text

The signature cyberpunk text effect: glowing colored text with layered shadows.

- Cyan glow: `text-cyan-400 [text-shadow:0_0_5px_rgba(34,211,238,0.8),0_0_10px_rgba(34,211,238,0.6),0_0_20px_rgba(34,211,238,0.4)]`
- Magenta glow: `text-[#ff00ff] [text-shadow:0_0_5px_rgba(255,0,255,0.8),0_0_10px_rgba(255,0,255,0.6),0_0_20px_rgba(255,0,255,0.4)]`
- Green terminal: `text-[#00ff00] [text-shadow:0_0_5px_rgba(0,255,0,0.8),0_0_10px_rgba(0,255,0,0.6)]`

Layered shadow formula: close glow (5px, high opacity) + mid glow (10px, medium opacity) + far glow (20px, low opacity).

### 2) Neon Border Card

Dark card with glowing neon border.

- Base: `bg-[#0a0a0f]/80 backdrop-blur-sm border border-cyan-500/50 rounded-lg`.
- Glow border: `shadow-[0_0_10px_rgba(34,211,238,0.3),inset_0_0_10px_rgba(34,211,238,0.1)]`.
- Full: `bg-[#0a0a0f]/80 backdrop-blur-sm border border-cyan-500/50 rounded-lg shadow-[0_0_10px_rgba(34,211,238,0.3),inset_0_0_10px_rgba(34,211,238,0.1)]`

### 3) Holographic HUD Element

Angled, technical display element with clip-path corners and neon outline.

- Clip path: `[clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,12px_100%,0_calc(100%-12px))]`.
- Background: `bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-400/30`.
- Content: monospace text with subtle glow.

### 4) Glitch Text Effect

RGB-split glitch animation on text for dystopian digital feel.

```css
.glitch {
  position: relative;
  color: #fff;
}
.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.glitch::before {
  color: #ff00ff;
  animation: glitch-1 2s infinite;
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
}
.glitch::after {
  color: #00ffff;
  animation: glitch-2 2s infinite;
  clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
}
@keyframes glitch-1 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 1px); }
  40% { transform: translate(-1px, -1px); }
  60% { transform: translate(1px, 1px); }
  80% { transform: translate(2px, -1px); }
}
@keyframes glitch-2 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(2px, -1px); }
  40% { transform: translate(1px, 1px); }
  60% { transform: translate(-1px, -1px);  }
  80% { transform: translate(-2px, 1px); }
}
```

### 5) Terminal / Console Panel

Dark panel with monospace text, blinking cursor, and green/cyan glow.

- Panel: `bg-black/80 border border-[#00ff00]/30 rounded-none font-mono`.
- Text: `text-[#00ff00] [text-shadow:0_0_5px_rgba(0,255,0,0.5)]`.
- Blinking cursor: `inline-block w-2 h-4 bg-[#00ff00] animate-pulse`.

### 6) CRT Scanline Overlay

Authentic CRT screen texture.

- `absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_2px,rgba(0,255,0,0.03)_3px,rgba(0,255,0,0.03)_3px)]`

## Color Palette System

### Core Cyberpunk Palette

| Color | Hex | Purpose |
|---|---|---|
| Electric Cyan | `#00ffff` / `#22d3ee` | Primary neon, data display |
| Hot Magenta | `#ff00ff` / `#ec4899` | Secondary neon, warnings, glitch |
| Toxic Green | `#00ff00` / `#22c55e` | Terminal text, success, matrix |
| Warning Yellow | `#ffff00` / `#facc15` | Alerts, caution |
| Danger Red | `#ff003c` / `#ef4444` | Errors, critical alerts |
| Deep Black | `#0a0a0f` / `#050508` | Background base |
| Dark Navy | `#0d1b2a` | Alternative background |
| Steel Gray | `#1a1a2e` | Card surfaces |

Rules: Use ONE primary neon color per interface section. Additional neons are accents only. Too many neon colors create visual chaos.

## Typography Recommendations

Cyberpunk typography is technical, digital, and engineered:

- Display/HUD: Orbitron, Rajdhani, Chakra Petch, Share Tech Mono.
- Monospace body: JetBrains Mono, Share Tech Mono, IBM Plex Mono, Fira Code.
- Labels/meta: `font-mono uppercase tracking-widest text-xs`.
- Avoid serif fonts entirely. Cyberpunk is digital and technical.
- All text should feel like it belongs on a computer screen, HUD, or terminal.

## Component Architecture Pattern

1. Dark background (near-black, deep navy, or dark with color tint).
2. CRT scanline overlay (subtle, full-screen).
3. Neon-bordered panels and cards (glowing borders).
4. Monospace typography with neon glow.
5. Glitch effects on titles or critical elements (optional, sparingly).
6. HUD-style decorative elements (corner brackets, data readouts, grid lines).

## Interaction Rules

- Default state: dark with neon accents glowing.
- Hover state: intensify glow (`[text-shadow:0_0_10px_rgba(0,255,255,1),0_0_20px_rgba(0,255,255,0.8)]`), or border brightens.
- Active state: glitch flicker or flash to white.
- Focus state: bright neon ring `focus:ring-2 focus:ring-cyan-400 focus:ring-offset-0`.
- Transitions: `transition-all duration-150` (fast, digital feel).
- Scanline animation: slow vertical drift (`animate-[scan_8s_linear_infinite]`).

## Grid and HUD Decorations

Cyberpunk UI often includes technical decorative elements:

- Corner brackets: L-shaped borders at card corners using pseudo-elements.
- Grid background: `bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]`
- Data readouts: small monospace text blocks with fake coordinates or system stats.
- Clip-path angled corners on cards and panels for a HUD feel.

## Reusable Tailwind Tokens

- Neon text (cyan): `text-cyan-400 [text-shadow:0_0_5px_rgba(34,211,238,0.8),0_0_10px_rgba(34,211,238,0.6),0_0_20px_rgba(34,211,238,0.4)]`
- Neon card: `bg-[#0a0a0f]/80 backdrop-blur-sm border border-cyan-500/50 rounded-lg shadow-[0_0_10px_rgba(34,211,238,0.3),inset_0_0_10px_rgba(34,211,238,0.1)]`
- Grid bg: `bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]`
- Scanlines: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_2px,rgba(0,255,0,0.03)_3px,rgba(0,255,0,0.03)_3px)]`
- HUD clip-path: `[clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,12px_100%,0_calc(100%-12px))]`

## Quality Checklist (must pass)

- Background is dark (near-black or deep navy).
- Neon accents use layered glow shadows (close + mid + far).
- Typography is monospace or techno-inspired.
- Borders glow with neon color.
- One primary neon color dominates; others are accents.
- Optional CRT scanlines add digital texture.
- Glitch effects are used sparingly (titles, critical alerts only).
- The aesthetic feels dystopian, high-tech, and slightly unstable.
- HUD decorations (corner brackets, grid lines) reinforce the technical feel.

## Anti-Patterns

- Light or bright backgrounds (cyberpunk is dark).
- Pastel or muted colors (neon saturation is required).
- Serif or decorative fonts (cyberpunk is monospace/techno).
- Missing glow effects (neon without glow is just a color).
- Too many neon colors competing (stick to one primary).
- Flat borders without glow (borders must emit light).
- Over-using glitch effects (glitch is a spice, not the main course).
- Missing scanlines or grid texture (these add the digital atmosphere).
- Modern minimalist layouts (cyberpunk is dense and technical).

## Accessibility Considerations

- Neon text on dark backgrounds can have good contrast but may cause eye strain in long reading sessions.
- Glitch effects must respect `prefers-reduced-motion` (disable all animations).
- Glow effects should not make text blurry; verify text remains sharp and readable.
- CRT scanlines are decorative: `pointer-events-none` and low opacity.
- Do not rely on color alone for status; include text labels for errors/warnings.
- Ensure focus states are clearly visible against dark backgrounds.
- Provide higher contrast fallbacks for users who find neon glow difficult to read.
