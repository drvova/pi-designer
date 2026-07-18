---
name: neon-spectrum-ui
description: Build neon spectrum UI components (rainbow gradient, spectrum bar, color cycling, prismatic glow, UV light, spectrum grid, fluorescent surface) with full rainbow spectrum colors, cycling animations, and the vibrant energy of light spectrum displays. Trigger this skill when the user asks for rainbow UI, spectrum interface, prismatic design, color cycling, UV glow, fluorescent surface, rainbow gradient, light spectrum, or rainbow neon components.
---

# Neon Spectrum UI

Use this skill to design and implement interfaces inspired by the full visible light spectrum: rainbow gradients that span all wavelengths, cycling hue animations, prismatic diffraction glows, UV light effects, spectrum color bars, and fluorescent surfaces that blaze with spectral energy on dark backgrounds.

## Non-Negotiable Foundations

- Neon spectrum UI is specifically about the FULL VISIBLE LIGHT SPECTRUM: all rainbow wavelengths displayed together with prismatic energy.
- The background is always DARK: near-black surfaces that let every spectrum color blaze with full intensity.
- Glow is SPECTRAL: every element radiates prismatic light — not a single neon hue, but the full rainbow diffraction spread across surfaces and text.
- Colors span the complete spectrum: red through orange, yellow, green, cyan, blue, violet — all present and cycling.
- Animation is ESSENTIAL: hue-rotating cycles, spectrum sweep effects, and color-cycling gradients are core to the aesthetic.
- The aesthetic is futuristic laboratory light physics: spectrum analyzers, prism demonstrations, UV fluorescence, and scientific color displays.

## Core Material Recipes

### 1) Rainbow Gradient Background

Full-spectrum horizontal gradient spanning every visible wavelength.

- Full horizontal: `bg-[linear-gradient(90deg,#ff2020,#ff8020,#ffe040,#40ff40,#40e0e0,#4040ff,#a040ff)]`.
- Diagonal sweep: `bg-[linear-gradient(135deg,#ff2020,#ff8020,#ffe040,#40ff40,#40e0e0,#4040ff,#a040ff)]`.
- Subtle dark fade: `bg-[linear-gradient(180deg,#0a0a0a_0%,#0a0a0a_80%,#0a0a0a_100%)]`.

### 2) Spectrum Bar

Horizontal bar divided into distinct color segments like a prism readout.

- Bar container: `flex h-2 rounded-full overflow-hidden shadow-[0_0_12px_rgba(255,32,32,0.3),0_0_24px_rgba(64,255,64,0.3)]`.
- Red segment: `flex-1 bg-[#ff2020]`.
- Orange segment: `flex-1 bg-[#ff8020]`.
- Yellow segment: `flex-1 bg-[#ffe040]`.
- Green segment: `flex-1 bg-[#40ff40]`.
- Cyan segment: `flex-1 bg-[#40e0e0]`.
- Blue segment: `flex-1 bg-[#4040ff]`.
- Violet segment: `flex-1 bg-[#a040ff]`.

### 3) Color Cycling Animation

Hue-rotating gradient that continuously shifts through the spectrum.

```css
@keyframes spectrum-cycle {
  0%   { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}
.spectrum-cycle { animation: spectrum-cycle 6s linear infinite; }
```

- Cycling gradient: `bg-[linear-gradient(90deg,#ff2020,#ff8020,#ffe040,#40ff40,#40e0e0,#4040ff,#a040ff)] animate-[spectrum-cycle_6s_linear_infinite]`.

### 4) Prismatic Glow

Multi-color diffraction glow radiating outward from a central element like light through a prism.

- Container: `relative`.
- Glow layer: `absolute inset-0 bg-[conic-gradient(from_0deg,#ff2020,#ff8020,#ffe040,#40ff40,#40e0e0,#4040ff,#a040ff,#ff2020)] rounded-full blur-xl opacity-40`.
- Core element: `relative z-10`.

### 5) UV Light Effect

Purple-violet glow simulating ultraviolet fluorescence.

- UV surface: `bg-[#1a0a2a] shadow-[inset_0_0_60px_rgba(160,64,255,0.2)]`.
- UV glow text: `text-[#c060ff] [text-shadow:0_0_4px_#c060ff,0_0_8px_#a040ff,0_0_16px_rgba(160,64,255,0.5),0_0_32px_rgba(160,64,255,0.3)]`.
- UV border: `border border-[#a040ff] shadow-[0_0_8px_#a040ff,0_0_16px_rgba(160,64,255,0.4)]`.

### 6) Spectrum Grid

Organized rows of spectrum colors arranged in a systematic grid layout.

- Grid container: `grid grid-cols-7 gap-2`.
- Grid cell: `aspect-square rounded-lg` with individual spectrum color background.
- Row cycling: apply `animate-[spectrum-cycle_4s_linear_infinite]` with staggered `animation-delay` on each row.

### 7) Fluorescent Surface

Bright luminous surface that glows intensely on a dark base.

- Dark base: `bg-[#0a0a0a]`.
- Fluorescent panel: `bg-[#0a0a0a] border border-[#40ff40] shadow-[0_0_20px_rgba(64,255,64,0.3),0_0_40px_rgba(64,255,64,0.15),inset_0_0_20px_rgba(64,255,64,0.05)]`.
- Hot spot: `bg-[radial-gradient(circle,rgba(64,255,64,0.15)_0%,transparent_70%)]`.

## Color Palette System

| Spectrum Band | Hex | Role |
|---|---|---|
| Spectrum Red | `#ff2020` | High-energy end, warning accents |
| Spectrum Orange | `#ff8020` | Warm transition, secondary accent |
| Spectrum Yellow | `#ffe040` | Peak brightness, highlight cues |
| Spectrum Green | `#40ff40` | Mid-spectrum, success/active states |
| Spectrum Cyan | `#40e0e0` | Cool transition, info accents |
| Spectrum Blue | `#4040ff` | Low-energy end, link/interactive |
| Spectrum Violet | `#a040ff` | Beyond-violet, mystical/prismatic |
| Dark Base | `#0a0a0a` | Background (near-black) |

Rules: Every composition uses at least 4 spectrum colors. The dark base background is MANDATORY — spectrum colors only read as spectral against near-black. Animations cycle through all 7 spectrum colors. No single spectrum color dominates — the rainbow IS the design.

## Typography Recommendations

- **Display:** Orbitron, Rajdhani, or Exo 2 (futuristic scientific letterforms that suit spectral analysis readouts).
- **Alternative:** Space Grotesk or JetBrains Mono at large sizes with spectrum gradient text fill.
- **Body:** Inter, IBM Plex Sans (clean technical sans for data-heavy content).
- Headings can use `bg-clip-text text-transparent bg-[linear-gradient(90deg,#ff2020,#ffe040,#40ff40,#4040ff,#a040ff)]` for spectrum text fill.
- Monospace fonts work well for spectrum data readouts and measurement displays.
- Letter-spacing should be moderate — spectrum UI is precise and scientific, not decorative.

## Interaction Rules

- Hover on spectrum elements intensifies glow: `hover:shadow-[0_0_24px_rgba(255,32,32,0.5),0_0_48px_rgba(64,64,255,0.5)]`.
- Spectrum bar segments expand on hover: `hover:flex-[1.5] transition-all duration-300`.
- Cycling animation pauses on hover for inspection: `hover:animation-play-state-paused` via `[animation-play-state:paused]`.
- UV elements pulse subtly: `animate-[uv-pulse_3s_ease-in-out_infinite]` with opacity shift.
- Spectrum grid cells light up sequentially on hover cascade.
- All transitions use `transition-all duration-300` for smooth spectral shifts.

## Reusable Tailwind Tokens

- Rainbow gradient: `bg-[linear-gradient(90deg,#ff2020,#ff8020,#ffe040,#40ff40,#40e0e0,#4040ff,#a040ff)]`.
- Spectrum cycle: `animate-[spectrum-cycle_6s_linear_infinite]`.
- UV glow text: `text-[#c060ff] [text-shadow:0_0_4px_#c060ff,0_0_8px_#a040ff,0_0_16px_rgba(160,64,255,0.5),0_0_32px_rgba(160,64,255,0.3)]`.
- Prismatic glow: `bg-[conic-gradient(from_0deg,#ff2020,#ff8020,#ffe040,#40ff40,#40e0e0,#4040ff,#a040ff,#ff2020)]`.
- Dark base: `bg-[#0a0a0a]`.
- Spectrum text fill: `bg-clip-text text-transparent bg-[linear-gradient(90deg,#ff2020,#ffe040,#40ff40,#4040ff,#a040ff)]`.
- Fluorescent panel: `border border-[#40ff40] shadow-[0_0_20px_rgba(64,255,64,0.3),0_0_40px_rgba(64,255,64,0.15)]`.
- Spectrum bar segment: `flex-1 bg-[#ff2020]` (cycle through all 7 colors).

## Quality Checklist

- Background is dark (near-black `#0a0a0a` or equivalent) throughout.
- At least 4 spectrum colors are present in the composition.
- Full-spectrum horizontal gradient appears as a primary or decorative element.
- Spectrum bar with distinct color segments is visible.
- Hue-rotation or color-cycling animation is active on at least one element.
- Prismatic glow or UV light effect adds spectral depth.
- Typography uses futuristic or scientific typefaces.
- Spectrum colors appear in correct wavelength order (red to violet, never shuffled).
- Glow effects are layered (2+ shadow layers per colored element).
- The aesthetic reads as light spectrum / prism / scientific color analysis.
- Dark background provides sufficient contrast for all spectrum colors.

## Anti-Patterns

- Light or white backgrounds (spectrum colors vanish against brightness).
- Random color order (spectrum MUST follow wavelength: red, orange, yellow, green, cyan, blue, violet).
- Single spectrum color without rainbow context (that is just neon sign, not spectrum).
- Muted or desaturated spectrum colors (spectrum is VIVID and FULL-INTENSITY).
- Static spectrum without any animation (the cycling IS the spectrum identity).
- Gradients between unrelated colors (only adjacent wavelengths blend naturally).
- More than one background pattern competing with the spectrum (the rainbow is the visual event).
- Rounded-organic shapes dominating (spectrum UI is scientific — prefer clean geometry).
- Missing the dark base (spectrum luminosity requires near-black contrast).
- Corporate sans-serif as display type (spectrum needs scientific/technical voice).

## Accessibility Considerations

- Dark background with vivid spectrum text provides strong contrast (WCAG AAA for most spectrum colors against `#0a0a0a`).
- Spectrum yellow `#ffe040` on dark background may need darker background for WCAG AA compliance — verify per composition.
- Hue-rotation animations must respect `prefers-reduced-motion` (disable cycling or reduce to single static gradient).
- Cycling animation speed must not exceed 3Hz to avoid seizure risk.
- Focus states use spectrum-colored ring: `focus:ring-2 focus:ring-[#40e0e0] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]`.
- Spectrum grid cells need sufficient size (minimum 44x44px touch target).
- Color-only information requires text labels — spectrum bars need accessible names.
- UV elements use purple-heavy palette that may be hard to distinguish for some users — pair with shape or text cues.
- Prismatic glow opacity must stay below 0.5 to avoid visual noise overwhelming content.
- Spectrum text gradients must preserve sufficient contrast at the lightest point (yellow band).
