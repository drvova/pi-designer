---
name: holographic-ui
description: Build holographic UI components (prismatic iridescent foil surfaces, rainbow light refraction, credit-card hologram shimmer, mermaid-scale patterns, dichroic glass, spectrum-shifting gradients) with animated rainbow conic gradients, light-catching edges, and the futuristic material aesthetic of holographic foil. Trigger this skill when the user asks for holographic, iridescent foil, prismatic, dichroic, mermaid scale, or spectrum-shift interfaces.
---

# Holographic UI

Use this skill to design and implementation prismatic, light-catching interfaces inspired by holographic foil and dichroic materials: animated rainbow conic gradients, mermaid-scale textures, spectrum-shifting surfaces, credit-card hologram shimmer, and the futuristic material aesthetic that refracts light into all visible colors.

## Core Material Recipes

### 1) Holographic Foil Surface

The signature surface: animated rainbow refraction.

- Base: `bg-[#0a0a1a]`.
- Holo overlay: `bg-[conic-gradient(from_0deg,rgba(255,0,128,0.15),rgba(128,0,255,0.15),rgba(0,128,255,0.15),rgba(0,255,128,0.15),rgba(255,255,0,0.15),rgba(255,128,0,0.15),rgba(255,0,128,0.15))] bg-[length:200%_200%] animate-[holo-shift_8s_linear_infinite]`.

```css
@keyframes holo-shift {
  0% { background-position: 0% 0%; }
  100% { background-position: 200% 200%; }
}
```

### 2) Mermaid Scale Texture

Overlapping circular scale pattern with iridescence.

- `bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,128,0.1)_2px,transparent_3px),radial-gradient(circle_at_0%_0%,rgba(0,255,200,0.1)_2px,transparent_3px)] bg-[size:16px_16px]` layered over a dark surface.

### 3) Dichroic Glass Panel

Translucent panel with color-shifting edges.

- `bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_20px_rgba(128,0,255,0.15),0_0_40px_rgba(0,200,255,0.1)] p-6`.
- Edge iridescence: `[border-image:conic-gradient(from_0deg,#ff0080,#8000ff,#0080ff,#00ff80,#ff8000,#ff0080)_1]`.

### 4) Holographic Button

Spectrum-shifting button.

- `bg-[conic-gradient(from_0deg,#ff0080,#8000ff,#0080ff,#00ff80,#ff8000,#ff0080)] text-white font-bold uppercase tracking-wider px-8 py-3 rounded-full shadow-[0_0_20px_rgba(128,0,255,0.3)] bg-[length:200%_200%] animate-[holo-shift_4s_linear_infinite] hover:shadow-[0_0_30px_rgba(128,0,255,0.5)] transition-shadow`.

### 5) Hologram Stripe Accent

Credit-card style holographic security stripe.

- `h-8 bg-[conic-gradient(from_45deg,rgba(255,0,128,0.3),rgba(0,200,255,0.3),rgba(255,255,0,0.3),rgba(0,255,150,0.3),rgba(255,0,128,0.3))] bg-[length:200%_100%] animate-[holo-shift_3s_linear_infinite] rounded-sm`.

### 6) Spectrum Text

Text with holographic gradient fill.

- `text-transparent bg-clip-text bg-[linear-gradient(90deg,#ff0080,#8000ff,#0080ff,#00ff80,#ff8000,#ff0080)] bg-[length:200%_auto] animate-[holo-shift_4s_linear_infinite] font-bold`.

## Color Palette System

The holographic palette is not fixed colors — it is the FULL SPECTRUM shifting:

| Hue | Hex | Position |
|---|---|---|
| Magenta | `#ff0080` / `rgba(255,0,128,0.15)` | Start/end |
| Purple | `#8000ff` / `rgba(128,0,255,0.15)` | Quarter |
| Cyan | `#0080ff` / `rgba(0,128,255,0.15)` | Mid |
| Green | `#00ff80` / `rgba(0,255,128,0.15)` | Three-quarter |
| Yellow | `#ffff00` / `rgba(255,255,0,0.15)` | Warm point |
| Orange | `#ff8000` / `rgba(255,128,0,0.15)` | Return |

Rules: The palette IS the rainbow. Colors shift and blend continuously via conic gradients. Backgrounds are dark (to make the spectrum pop). All holographic elements should ANIMATE (shift positions slowly).

## Typography Recommendations

- **Display:** Space Grotesk, Orbitron, or Syncopate (futuristic geometric sans).
- **Body:** Inter, DM Sans (clean readable sans).
- **Holo text:** Spectrum gradient clip-text with animation.
- **Labels:** `font-bold uppercase tracking-widest text-sm`.

## Reusable Tailwind Tokens

- Holo surface: `bg-[conic-gradient(from_0deg,rgba(255,0,128,0.15),rgba(128,0,255,0.15),rgba(0,128,255,0.15),rgba(0,255,128,0.15),rgba(255,255,0,0.15),rgba(255,128,0,0.15),rgba(255,0,128,0.15))] animate-[holo-shift_8s_linear_infinite]`.
- Dichroic panel: `bg-white/5 backdrop-blur-xl shadow-[0_0_20px_rgba(128,0,255,0.15),0_0_40px_rgba(0,200,255,0.1)]`.
- Holo button: full-spectrum conic gradient with glow.
- Spectrum text: `text-transparent bg-clip-text bg-[linear-gradient(90deg,spectrum)] animate-[holo-shift]`.
- Hologram stripe: thin conic gradient bar.

## Quality Checklist

- At least one animated rainbow conic-gradient surface.
- At least one dichroic translucent panel.
- Holographic spectrum button present.
- Spectrum gradient text treatment used on at least one heading.
- Backgrounds are DARK (to make the spectrum pop).
- All holographic elements ANIMATE (slow shifting, not static).
- Hologram stripe accent present.
- Mermaid scale texture or overlapping-circle pattern somewhere.
- The aesthetic reads as holographic foil / prismatic / dichroic.
- Everything refracts light into all visible colors.

## Anti-Patterns

- Static non-animated gradients (holographic surfaces must SHIFT).
- Light/bright backgrounds (the spectrum needs DARKNESS to glow).
- Single-color surfaces (holographic is FULL SPECTRUM).
- Missing the animation (holo-shift is mandatory — static rainbow ≠ holographic).
- Opaque solid panels (use translucent dichroic panels).
- Flat 2D gradients (holographic uses CONIC gradients for circular refraction).
- Missing the glow effect (every holo element emits colored light).
- Pastel or muted spectrum (holographic colors are SATURATED).
- Missing the spectrum text treatment (holo text is a signature element).
- Slow boring composition (holographic is DYNAMIC and LIGHT-CATCHING).

## Accessibility Considerations

- Dark backgrounds with holographic text must verify WCAG AA (the spectrum gradient may reduce contrast — use white text outline or shadow).
- Holographic animations must respect `prefers-reduced-motion` (stop shifting).
- Conic gradient overlays must not reduce text contrast below WCAG AA.
- Focus states: `focus:ring-2 focus:ring-white/40` (white ring on dark/holo).
- The shifting colors may be disorienting — provide static fallback.
- Touch targets must be adequate despite translucent border styling.
