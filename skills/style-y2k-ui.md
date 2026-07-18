---
name: y2k-ui
description: Build Y2K aesthetic UI components (chrome metallic text, holographic gradients, beveled buttons, bubblegum colors, retro-futuristic optimism) with glossy surfaces, scanline effects, and early-2000s digital nostalgia. Trigger this skill when the user asks for Y2K aesthetic, Y2K design, chrome text, holographic effects, retro-futuristic 2000s UI, Frutiger Aero, or cybercore design.
---

# Y2K Aesthetic UI

Use this skill to design and implement early-2000s-inspired interfaces with chrome metallic effects, holographic gradients, beveled glossy buttons, and the optimistic retro-futurism of the turn of the millennium.

## Non-Negotiable Foundations

- Y2K aesthetic celebrates the late-90s to early-2000s vision of the future: chrome, gloss, translucency, and aggressive digital optimism.
- Surfaces are glossy, reflective, and dimensional. Bevels and embosses are the primary depth tools.
- Color palette blends bubblegum pastels (hot pink, cyan) with industrial metallics (silver, chrome).
- Typography is engineered and technological: condensed, extended, or techno-inspired fonts with chrome/gloss treatments.
- The interface should feel like a futuristic product display, media player, or video game menu from 1999-2003.

## Core Material Recipes

### 1) Chrome / Metallic Text (the signature Y2K element)

The hallmark of Y2K design: reflective metallic text with a vertical light-dark-light gradient.

```css
.chrome-text {
  background: linear-gradient(180deg,
    #fefefe 0%,
    #a1a1a1 25%,
    #4a4a4a 48%,
    #2a2a2a 52%,
    #a1a1a1 75%,
    #fefefe 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
}
```

Tailwind equivalent:
- `bg-[linear-gradient(180deg,#fefefe_0%,#a1a1a1_25%,#4a4a4a_48%,#2a2a2a_52%,#a1a1a1_75%,#fefefe_100%)] bg-clip-text text-transparent`

Animated chrome shimmer (light sweeps across text):
```css
.animated-chrome {
  background: linear-gradient(110deg, #5f5f5f, #a1a1a1 15%, #fefefe 30%, #a1a1a1 45%, #5f5f5f 60%, #a1a1a1 75%, #fefefe 90%, #5f5f5f);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: shimmer 4s linear infinite;
}
@keyframes shimmer {
  from { background-position: 0% 0%; }
  to { background-position: 200% 0%; }
}
```

### 2) Holographic / Iridescent Gradient

Rainbow holographic surface that shifts colors like an oil slick or holographic foil.

- `bg-[linear-gradient(135deg,#ff006e,#8338ec,#3a86ff,#06d6a0,#ffbe0b,#ff006e)] bg-[length:200%_200%]`
- Animated: add `animate-[holo_8s_ease_infinite]` with keyframes shifting `background-position`.

### 3) Beveled Glossy Button (Y2K CTA)

The classic early-2000s beveled button with gradient gloss.

- Base gradient: `bg-gradient-to-b from-[#5ac8fa] to-[#007aff]`.
- Top gloss highlight: `before` pseudo-element with `bg-gradient-to-b from-white/60 to-transparent h-1/2 rounded-t-[inherit]`.
- Bevel: `border border-[#005ec4] border-b-2 border-b-[#003d7a]`.
- Shadow: `shadow-[0_2px_4px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.4)]`.
- Full: `bg-gradient-to-b from-[#5ac8fa] to-[#007aff] text-white font-bold rounded-lg border border-[#005ec4] shadow-[0_2px_4px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.4)] px-6 py-3`

### 4) Translucent Gel Panel (iMac G3 inspired)

Translucent, tinted gel surface inspired by early iMac and iBook designs.

- Background: `bg-[#ff69b4]/30 backdrop-blur-md`.
- Border: `border-2 border-white/40`.
- Inner glow: `shadow-[inset_0_1px_2px_rgba(255,255,255,0.5),inset_0_-1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.15)]`.
- Full: `bg-[#ff69b4]/30 backdrop-blur-md border-2 border-white/40 rounded-2xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.5),inset_0_-1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.15)]`

### 5) CRT Scanline Overlay

Authentic CRT monitor scanline effect.

- Overlay div: `absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.15)_0px,rgba(0,0,0,0.15)_1px,transparent_1px,transparent_3px)] opacity-40`.

## Color Palette System

### Core Y2K Palette

- `#FF69B4` (hot pink)
- `#00FFFF` (cyan)
- `#C0C0C0` (silver/chrome)
- `#9400D3` (dark violet)
- `#FFD700` (gold)
- `#FF1493` (deep pink)
- `#00BFFF` (deep sky blue)
- `#000000` (black)

### Material Finishes

| Finish | Gradient | Use Case |
|---|---|---|
| Chrome | `linear-gradient(180deg, #fefefe, #a1a1a1 25%, #4a4a4a 48%, #2a2a2a 52%, #a1a1a1 75%, #fefefe)` | Text, buttons, icons |
| Silver | `linear-gradient(135deg, #e8e8e8, #c0c0c0, #a0a0a0, #c0c0c0, #e8e8e8)` | Panels, borders |
| Gold | `linear-gradient(180deg, #ffd700, #daa520, #b8860b, #daa520, #ffd700)` | Premium accents |
| Holographic | `linear-gradient(135deg, #ff006e, #8338ec, #3a86ff, #06d6a0, #ffbe0b)` | Iridescent surfaces |

## Typography Recommendations

Y2K typography is engineered, technological, and distinctive:

- Display headings: Orbitron, Audiowide, Russo One, or any techno/geometric sans-serif.
- Chrome text treatment: apply metallic gradient clip to any bold font.
- Body: clean sans-serif at `font-normal` to `font-medium`.
- Labels/meta: condensed or monospace at `font-bold uppercase tracking-wide`.
- Avoid serif fonts unless used ironically. Y2K is sans-serif territory.

## Component Architecture Pattern

1. Dark or gradient background (space black, deep blue, or holographic gradient).
2. Optional CRT scanline overlay (subtle, `opacity-40`).
3. Chrome/metallic display typography.
4. Beveled glossy panels and buttons.
5. Neon glow accents (electric blue, hot pink).
6. Optional wireframe/grid background pattern.

## Interaction Rules

- Default state: glossy, beveled, dimensional.
- Hover state: intensify gloss (`brightness-110`), add glow (`drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]`).
- Active state: bevel inverts (pressed look: `active:translate-y-px active:shadow-inset`).
- Transitions: `transition-all duration-200`.
- Chrome shimmer animation: `animation: shimmer 4s linear infinite`.
- Glow pulse: `animate-[pulse_2s_ease-in-out_infinite]` on accent elements.

## Reusable Tailwind Tokens

- Chrome text: `bg-[linear-gradient(180deg,#fefefe_0%,#a1a1a1_25%,#4a4a4a_48%,#2a2a2a_52%,#a1a1a1_75%,#fefefe_100%)] bg-clip-text text-transparent`
- Holographic: `bg-[linear-gradient(135deg,#ff006e,#8338ec,#3a86ff,#06d6a0,#ffbe0b)] bg-[length:200%_200%]`
- Glossy button: `bg-gradient-to-b from-[#5ac8fa] to-[#007aff] text-white font-bold rounded-lg border border-[#005ec4] shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.2)]`
- Gel panel: `bg-[#ff69b4]/30 backdrop-blur-md border-2 border-white/40 rounded-2xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.5),0_4px_12px_rgba(0,0,0,0.15)]`
- Scanlines: `bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.15)_0px,rgba(0,0,0,0.15)_1px,transparent_1px,transparent_3px)] opacity-40`
- Neon glow: `drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]`

## Quality Checklist (must pass)

- Chrome/metallic text uses the vertical light-dark-light gradient with `background-clip: text`.
- Surfaces are glossy with gradient highlights, not flat.
- Bevels use border + inner shadow for dimensional depth.
- Color palette includes metallics and bubblegum neons.
- Typography is technological (techno/geometric fonts or chrome treatment).
- Glow effects use neon colors (electric blue, hot pink, cyan).
- Optional CRT scanlines add authenticity.
- The aesthetic reads as 1999-2003 retro-futurism, not modern minimalism.

## Anti-Patterns

- Flat matte surfaces (Y2K is glossy and reflective).
- Modern minimalist typography (Y2K needs engineered/techno fonts).
- Muted or desaturated colors (Y2K is vibrant and saturated).
- Missing bevels on buttons (bevels are essential for the dimensional look).
- Pure CSS without gradients (Y2K relies heavily on multi-stop gradients).
- Using a flat silver color instead of a chrome gradient (chrome requires the vertical gradient).
- Overdoing scanlines (they should be subtle, `opacity-40` maximum).
- Forgetting the gloss highlight on buttons (the top-half white gradient is essential).

## Accessibility Considerations

- Chrome text can have low contrast against light backgrounds; use on dark backgrounds.
- Glossy surfaces can reduce text readability; verify contrast.
- Animated shimmer effects must respect `prefers-reduced-motion`.
- Glow effects should not make text blurry or hard to read.
- CRT scanlines are decorative and should be `pointer-events-none` and low opacity.
- Holographic gradients behind text need solid background chips for readability.
