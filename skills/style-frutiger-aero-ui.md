---
name: frutiger-aero-ui
description: Build Frutiger Aero UI components (glossy translucent surfaces, nature-tech harmony, water motifs, lens flares, bokeh, optimistic skeuomorphism) with reflective glass bubbles, bright sky blues and greens, and Web 2.0-era humanist warmth. Trigger this skill when the user asks for Frutiger Aero, Windows Vista/7 aesthetic, glossy Web 2.0 UI, Aero glass, optimistic eco-tech design, or 2000s translucent interfaces.
---

# Frutiger Aero UI

Use this skill to design and implement the mid-2000s to early-2010s aesthetic of optimistic technology-nature harmony: glossy translucent surfaces, water and sky motifs, skeuomorphic depth, and the warm, humanist visual language of the Web 2.0 era.

## Non-Negotiable Foundations

- Frutiger Aero is built on the philosophy of "Authentic, Energetic, Reflective, Open" (Microsoft's Aero acronym). Technology should feel friendly, natural, and optimistic.
- Gloss and reflection are essential: surfaces look like glass, plastic, or water. Light interacts with every surface.
- Nature imagery is central: blue skies, green grass, water droplets, bubbles, auroras, leaves, tropical fish. Technology and nature coexist harmoniously.
- Skeuomorphic depth: buttons look pressable, sliders have physical depth, icons resemble physical objects.
- Color palette is bright and saturated: blues, greens, and whites dominate. The palette communicates optimism and clarity.
- Humanist sans-serif typography (Frutiger, Segoe UI) reinforces the approachable, human-centered feel.

## Core Material Recipes

### 1) Aero Glass Panel (the signature surface)

Translucent glass with glossy reflection, inspired by Windows Vista/7 Aero.

- Background: `bg-white/40 backdrop-blur-xl`.
- Top gloss highlight (pseudo-element): `before:absolute before:inset-x-0 before:top-0 before:h-1/2 before:rounded-t-[inherit] before:bg-gradient-to-b from-white/50 to-transparent`.
- Border: `border border-white/60`.
- Shadow: `shadow-[0_8px_32px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.8)]`.
- Full: `bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.8)] relative overflow-hidden`

### 2) Glossy Aero Button

The classic Web 2.0 glossy pill button with gradient and top highlight.

- Base gradient: `bg-gradient-to-b from-[#5ac8fa] to-[#007aff]`.
- Top gloss: `before:bg-gradient-to-b from-white/60 to-transparent before:h-1/2 before:rounded-t-full`.
- Shape: `rounded-full`.
- Border: `border-2 border-[#005ec4]`.
- Shadow: `shadow-[0_2px_4px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.5)]`.
- Full: `bg-gradient-to-b from-[#5ac8fa] to-[#007aff] text-white font-bold rounded-full px-8 py-3 border-2 border-[#005ec4] shadow-[0_2px_4px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.5)] relative overflow-hidden`

### 3) Water Droplet / Bubble Accent

Decorative water motif that evokes the Frutiger Aero nature connection.

- Droplet shape: `rounded-full bg-gradient-to-br from-white/60 to-[#5ac8fa]/30 backdrop-blur-sm shadow-[inset_0_-2px_4px_rgba(0,100,200,0.2),inset_0_2px_4px_rgba(255,255,255,0.6),0_4px_8px_rgba(0,0,0,0.1)]`.
- Highlight dot: small white circle at top-left `before:absolute before:top-[20%] before:left-[20%] before:w-1/4 before:h-1/4 before:rounded-full before:bg-white/80`.
- Use as decorative accent on backgrounds, near CTAs, or as section dividers.

### 4) Sky Gradient Background

The optimistic sky-to-grass gradient backdrop.

- Sky: `bg-gradient-to-b from-[#87ceeb] via-[#b0e0f0] to-[#e0f5ff]`.
- Sky to grass: `bg-gradient-to-b from-[#87ceeb] via-[#b0e0f0] to-[#7ec850]`.
- Deep sky: `bg-gradient-to-b from-[#4a90d9] to-[#87ceeb]`.

### 5) Bokeh / Lens Flare Overlay

Photographic depth-of-field effects for atmospheric backgrounds.

- Bokeh: multiple absolutely positioned `rounded-full blur-2xl opacity-40` divs in white, light blue, and light green.
- Lens flare: radial gradient streak: `bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4)_0%,transparent_30%)]`.

### 6) Reflective Icon Surface

Icon container with glossy "Aero" treatment (like early iOS app icons).

- Base: `rounded-[22%] bg-gradient-to-b from-[#f0f0f0] to-[#c0c0c0]`.
- Gloss: `before:absolute before:inset-x-0 before:top-0 before:h-[40%] before:rounded-t-[22%] before:bg-gradient-to-b from-white/70 to-transparent`.
- Shadow: `shadow-[0_4px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.8)]`.
- Full: `rounded-[22%] bg-gradient-to-b from-[#f0f0f0] to-[#c0c0c0] p-3 shadow-[0_4px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.8)] relative overflow-hidden`

## Color Palette System

### Core Frutiger Aero Palette

| Color | Hex | Role |
|---|---|---|
| Sky Blue | `#87ceeb` | Primary background, sky gradients |
| Aero Blue | `#007aff` | Primary accent, buttons |
| Light Blue | `#5ac8fa` | Gradient stops, highlights |
| Aqua Green | `#7ec850` | Nature, grass, success |
| Fresh Green | `#4ade80` | Leaves, eco accents |
| Pure White | `#ffffff` | Glass tint, gloss highlights |
| Soft Cream | `#f5f5dc` | Warm neutral background |
| Deep Blue | `#005ec4` | Borders, text on light |

Rules: Blue and green dominate. The palette should feel like a clear sky over a green field. Whites and light tones provide the "aero" translucency.

## Typography Recommendations

- Primary: Segoe UI (native Windows), Frutiger, or humanist sans-serif alternatives.
- Modern web alternatives: Inter, DM Sans, or Nunito (rounded, humanist feel).
- Weights: `font-normal` to `font-semibold`. Avoid `font-black` (too aggressive for Aero).
- Sizes: generous, readable. `text-base` minimum for body.
- Headings: `font-semibold` at `text-2xl` to `text-4xl`. Clean and confident.
- Avoid monospace (too technical). Aero is humanist and warm.
- Avoid serif (too formal). Aero is approachable and modern.

## Component Architecture Pattern

1. Sky or nature gradient background (the optimistic stage).
2. Bokeh/lens flare decorative overlays (atmospheric depth).
3. Aero glass panels (translucent, glossy surfaces for content).
4. Glossy gradient buttons (pill-shaped with top highlight).
5. Reflective icon containers (glossy app-icon style).
6. Nature accent imagery (water droplets, leaves, bubbles as decorative elements).

Every surface should feel like light is interacting with it. The interface is alive with reflection, gloss, and natural warmth.

## Interaction Rules

- Default state: glossy, reflective, dimensional.
- Hover state: brighten gloss, intensify glow.
  - `hover:brightness-110 hover:shadow-[0_4px_16px_rgba(0,122,255,0.3)]`.
- Active state: press inward (bevel inverts).
  - `active:inset-shadow-[0_2px_4px_rgba(0,0,0,0.2)] active:translate-y-px`.
- Focus state: blue glow ring `focus:ring-2 focus:ring-[#007aff] focus:ring-offset-2`.
- Transitions: `transition-all duration-200 ease-out` (smooth, gentle, confident).
- Gloss animation: subtle shimmer on hover (light sweeps across surface).

## Reusable Tailwind Tokens

- Aero glass: `bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.8)]`
- Glossy button: `bg-gradient-to-b from-[#5ac8fa] to-[#007aff] text-white font-bold rounded-full px-8 py-3 border-2 border-[#005ec4] shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_2px_4px_rgba(0,0,0,0.2)]`
- Sky bg: `bg-gradient-to-b from-[#87ceeb] via-[#b0e0f0] to-[#e0f5ff]`
- Water droplet: `rounded-full bg-gradient-to-br from-white/60 to-[#5ac8fa]/30 shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,100,200,0.2),0_4px_8px_rgba(0,0,0,0.1)]`
- Reflective icon: `rounded-[22%] bg-gradient-to-b from-[#f0f0f0] to-[#c0c0c0] shadow-[0_4px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.8)]`
- Bokeh: `absolute rounded-full blur-2xl opacity-40`

## Quality Checklist (must pass)

- Surfaces are glossy and reflective (gradient highlights, not flat).
- Glass panels use translucency with `backdrop-blur`.
- Color palette is bright blue and green (optimistic, natural).
- Buttons have the signature top-half gloss highlight.
- Backgrounds include sky gradients or nature imagery.
- Typography is humanist sans-serif (warm, approachable).
- Shadows include inner highlights (simulating light reflection on top edges).
- The aesthetic reads as 2005-2013 Web 2.0 optimism, not modern minimalism.
- Decorative elements include water/bubble/bokeh motifs.

## Anti-Patterns

- Flat matte surfaces (Frutiger Aero requires gloss and reflection).
- Dark or muted color palettes (Aero is bright and optimistic).
- Sharp corners (use generous radius, especially `rounded-full` for buttons).
- Missing gloss highlights on buttons and panels (the top gradient is essential).
- Monospace or serif typography (Aero is humanist sans-serif).
- Grunge, glitch, or distress textures (Aero is clean and pristine).
- Overly complex layouts (Aero favors spacious, airy, clear compositions).
- Missing nature motifs (the tech-nature harmony is central to the aesthetic).
- Pure black backgrounds (Aero backgrounds are bright or sky-like).

## Accessibility Considerations

- Glossy surfaces can reduce text contrast; verify WCAG AA compliance.
- Translucent panels over varied backgrounds require contrast testing in all states.
- Gloss highlights should not obscure text or interactive elements.
- Focus states must be visible despite glossy surfaces (`focus:ring-2 focus:ring-[#007aff]`).
- Bokeh and lens flare decorations must be `pointer-events-none` and not reduce contrast.
- Animated gloss shimmer must respect `prefers-reduced-motion`.
- Ensure touch targets are adequate (Frutiger Aero buttons are typically generous in size).
- High-brightness palettes may cause eye strain; offer dark mode alternative if needed.
