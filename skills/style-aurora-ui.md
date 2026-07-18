---
name: aurora-ui
description: Build aurora UI components (mesh gradients, ambient color fields, atmospheric backgrounds, flowing organic color) with heavily blurred color blobs, multi-point gradient meshes, and dreamy environmental backdrops. Trigger this skill when the user asks for aurora UI, mesh gradient backgrounds, ambient color, northern lights effect, or atmospheric interfaces.
---

# Aurora UI

Use this skill to design and implement atmospheric interfaces with flowing mesh gradients, heavily blurred color fields, and ambient environmental color that creates depth without structure.

## Non-Negotiable Foundations

- Aurora UI is a background-driven style. The gradient mesh IS the design; foreground content floats on top with clean contrast.
- Mesh gradients are created by stacking multiple `radial-gradient` layers with different anchor points, each transitioning from a semi-transparent color to fully transparent.
- Heavy blur (80-150px) transforms sharp shapes into soft, organic color clouds.
- Foreground content must be clean and high-contrast. The atmosphere is the backdrop, not the star.
- Aurora UI pairs naturally with glassmorphism — glass surfaces float beautifully over mesh backgrounds.

## Core Material Recipes

### 1) Mesh Gradient Background (the foundation)

Multi-point radial gradient stack on a dark base.

```css
background:
  radial-gradient(at 40% 20%, #6366f1 0px, transparent 50%),
  radial-gradient(at 80% 0%, #8b5cf6 0px, transparent 50%),
  radial-gradient(at 0% 50%, #ec4899 0px, transparent 50%),
  radial-gradient(at 80% 50%, #06b6d4 0px, transparent 50%),
  radial-gradient(at 0% 100%, #3b82f6 0px, transparent 50%),
  radial-gradient(at 80% 100%, #a855f7 0px, transparent 50%),
  #0a0a0f;
```

Tailwind arbitrary value equivalent:
- `bg-[radial-gradient(circle_at_40%_20%,#6366f1_0%,transparent_50%),radial-gradient(circle_at_80%_0%,#8b5cf6_0%,transparent_50%),radial-gradient(circle_at_0%_50%,#ec4899_0%,transparent_50%)] bg-[#0a0a0f]`

### 2) Blurred Color Blobs (organic aurora)

Absolutely positioned, heavily blurred circles that create flowing color fields.

- Blob 1: `absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#7928ca] blur-[100px] opacity-60`
- Blob 2: `absolute bottom-[-10%] left-[10%] w-[500px] h-[500px] rounded-full bg-[#ff0080] blur-[120px] opacity-50`
- Blob 3: `absolute top-[40%] left-[50%] w-[450px] h-[450px] rounded-full bg-[#0070f3] blur-[120px] opacity-50`

### 3) Animated Aurora (northern lights effect)

Pseudo-elements with animated elliptical gradients for flowing movement.

```css
.aurora-bg::before,
.aurora-bg::after {
  content: '';
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  animation: aurora 15s ease-in-out infinite;
}
.aurora-bg::before {
  background:
    radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99,102,241,0.5) 0%, transparent 70%),
    radial-gradient(ellipse 60% 40% at 30% 20%, rgba(139,92,246,0.4) 0%, transparent 60%);
}
.aurora-bg::after {
  background:
    radial-gradient(ellipse 70% 50% at 70% 10%, rgba(6,182,212,0.4) 0%, transparent 60%),
    radial-gradient(ellipse 50% 30% at 50% 30%, rgba(217,70,239,0.3) 0%, transparent 50%);
  animation-delay: -7.5s;
}
@keyframes aurora {
  0%, 100% { transform: translate(0,0) rotate(0deg) scale(1); }
  25% { transform: translate(5%,-5%) rotate(5deg) scale(1.05); }
  50% { transform: translate(-5%,5%) rotate(-5deg) scale(1.1); }
  75% { transform: translate(3%,-3%) rotate(3deg) scale(1.05); }
}
```

### 4) Aurora Content Card (foreground on aurora)

Clean, high-contrast content that floats over the mesh background.

- Light card on dark aurora: `bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white`
- Solid card for contrast: `bg-white dark:bg-[#141414] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]`

## Blend Mode Strategy

The `background-blend-mode` property controls how stacked gradient layers combine:

- **Dark base (navy, black, deep purple):** use `screen` — overlapping colors brighten where they meet.
- **Light base (cream, pale gray, white):** use `multiply` — overlapping colors darken (watercolor effect).
- **Unsure:** use `soft-light` — gentle, safe blending.
- **Poster style:** use `normal` — each color stays distinct.

## Color Palette System

### Cosmic Aurora

- `#6366f1` (indigo), `#8b5cf6` (violet), `#ec4899` (pink), `#06b6d4` (cyan), `#0a0a0f` (base)

### Ocean Aurora

- `#0070f3` (blue), `#00b8d9` (cyan), `#7c3aed` (purple), `#06d6a0` (teal), `#0d1b2a` (base)

### Sunset Aurora

- `#ff6b6b` (coral), `#feca57` (gold), `#ee5a6f` (rose), `#c44569` (maroon), `#1a1a2e` (base)

### Forest Aurora

- `#06d6a0` (emerald), `#1b9aaa` (teal), `#06d6a0` (green), `#ef476f` (accent pink), `#0a1a14` (base)

Rules: choose 3-4 harmonious colors per mesh. Colors should blend smoothly, not clash.

## Component Architecture Pattern

1. Aurora/mesh gradient background (the stage — covers full viewport).
2. Optional animated aurora blobs (positioned absolutely, heavily blurred).
3. Noise texture overlay (optional — adds organic grain: SVG `feTurbulence` at `opacity-[0.03]`).
4. Clean foreground content (cards, text, buttons with high contrast).
5. Glass surfaces (optional — glassmorphism pairs perfectly with aurora).

## Interaction Rules

- The aurora background can slowly animate (15-60s loops) for subtle movement.
- Foreground elements use standard interactions (hover, focus, active).
- Hover on cards: subtle lift `hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)]`.
- Do not over-animate the background; it should be ambient, not distracting.
- Respect `prefers-reduced-motion`: disable all aurora animations.

## Reusable Tailwind Tokens

- Mesh bg: `bg-[radial-gradient(circle_at_40%_20%,#6366f1_0%,transparent_50%),radial-gradient(circle_at_80%_0%,#8b5cf6_0%,transparent_50%)] bg-[#0a0a0f]`
- Color blob: `absolute rounded-full blur-[100px] opacity-60`
- Aurora card: `bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl`
- Text primary: `text-white`, Text secondary: `text-white/60`
- Noise overlay: SVG `feTurbulence` in an absolutely positioned div at `opacity-[0.03] mix-blend-overlay`

## Quality Checklist (must pass)

- Background uses multiple radial-gradient layers or blurred color blobs.
- Base color is dark enough to make the mesh colors pop.
- Foreground content has high contrast against the atmospheric background.
- Colors blend smoothly (no harsh transitions or visible gradient seams).
- Heavy blur is applied (80-150px for blobs).
- Animation (if used) is subtle and slow (15s+ duration).
- `prefers-reduced-motion` disables animations.

## Anti-Patterns

- Single flat gradient (that is not a mesh — aurora requires multi-point blending).
- Clashing colors (aurora colors should harmonize, not fight).
- Foreground content with low contrast (unreadable on atmospheric backgrounds).
- Fast background animation (distracting, not ambient).
- Missing blur on color blobs (sharp circles look wrong, not organic).
- Over-saturating the mesh (muddy appearance).
- Using aurora for data-dense layouts (the background competes with content readability).

## Typography and Density

- Aurora UI favors modern sans-serif fonts (Inter, SF Pro, Geist).
- Primary labels: `text-2xl` to `text-5xl`, `font-bold`, `tracking-tight`.
- Body: `text-base` to `text-lg`, `font-normal`.
- Text color: white or near-white on dark aurora backgrounds.
- Keep content density moderate; the background needs room to breathe.

## Accessibility Considerations

- Verify text contrast against the full range of background color variations.
- Glass cards over aurora must meet WCAG AA contrast in all background states.
- Animated backgrounds must respect `prefers-reduced-motion`.
- Provide a static fallback gradient for reduced-motion users.
- Do not rely on background color alone to convey information.
- Large blurred areas can be visually disorienting for some users; keep foreground structure clear.
