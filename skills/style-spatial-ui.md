---
name: spatial-ui
description: Build spatial UI components (depth layers, z-axis positioning, parallax, volumetric cards, 3D transforms) with perspective containers, layered depth, and physics-based motion for visionOS, webXR, and immersive interfaces. Trigger this skill when the user asks for spatial UI, spatial design, visionOS UI, 3D cards, volumetric interfaces, depth-layered design, or immersive web experiences.
---

# Spatial UI

Use this skill to design and implement depth-layered interfaces with z-axis positioning, 3D transforms, parallax effects, and volumetric card systems for immersive web and spatial computing experiences.

## Non-Negotiable Foundations

- Spatial UI adds a Z-axis. Elements exist at different depths, not just X/Y positions.
- Depth is communicated through: layering (z-index + translate-z), shadow intensity (deeper = larger/softer shadow), scale (closer = larger), and parallax (different scroll speeds at different depths).
- Perspective must be set on a parent container, not individual elements.
- Motion is physics-based: elements respond to cursor movement, device tilt, or scroll with spring/ease physics.
- The interface should feel three-dimensional even on a 2D screen through layered depth and subtle 3D transforms.

## Perspective and 3D Space Setup

### Perspective Container

Every spatial layout needs a parent with perspective set:

- Standard perspective: `[perspective:1000px]` on the container.
- Shallow (stronger 3D): `[perspective:600px]`.
- Deep (subtler 3D): `[perspective:2000px]`.
- Preserve 3D on children: `[transform-style:preserve-3d]` on the container.

### Z-Axis Depth Layers

Assign elements to depth layers using translateZ:

| Layer | translateZ | Purpose |
|---|---|---|
| Background | `-200px` to `-100px` | Far back, slow parallax |
| Mid-back | `-50px` to `0px` | Supporting content |
| Base | `0px` | Default content layer |
| Mid-front | `20px` to `50px` | Foreground cards |
| Front | `80px` to `120px` | Hero, focal elements |
| Overlay | `150px`+ | Modals, tooltips, floating UI |

## Core Material Recipes

### 1) Volumetric Card (the spatial default)

A card with 3D depth, layered shadow, and cursor-tracking rotation.

- Base: `bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl`.
- Container: `[transform-style:preserve-3d] transition-transform duration-300 ease-out`.
- Shadow: `shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]` (deep shadow for spatial elevation).
- Hover 3D tilt: cursor-tracking rotation via JS (see Interaction Rules).

### 2) Glass Spatial Panel (visionOS-style)

Translucent panels that float in 3D space, Apple visionOS aesthetic.

- Base: `bg-white/10 backdrop-blur-2xl backdrop-saturate-150 border border-white/20 rounded-[2rem]`.
- Shadow: `shadow-[0_20px_60px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)]`.
- Float animation: subtle vertical bob `animate-[float_4s_ease-in-out_infinite]`.

### 3) Depth-Layered Hero Section

Multiple layers at different Z positions creating parallax depth.

- Background layer (`-z-10`): gradient or image, `translate-z-[-100px]` scaled up to compensate.
- Mid layer (`z-0`): secondary content, `translate-z-[-20px]`.
- Foreground (`z-10`): primary content and CTAs, `translate-z-[40px]`.
- Each layer moves at a different rate on scroll (parallax).

### 4) Spatial Toolbar / Dock

A floating toolbar or dock that lifts off the surface.

- Base: `bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full px-2 py-2`.
- Shadow: `shadow-[0_10px_30px_rgba(0,0,0,0.2)]`.
- Container: `[transform-style:preserve-3d]`.
- Icons inside use `hover:translate-z-[20px]` for a "rise toward viewer" effect.

## Parallax Implementation

### Scroll-Based Parallax

Different layers move at different rates during scroll:

- Background: `style="transform: translateZ(-100px) scale(1.2)"` (scale compensates for depth).
- Mid: `style="transform: translateZ(-20px) scale(1.05)"`.
- Foreground: no transform (natural position).

Implementation: use scroll position to adjust `translateY` of each layer at different multipliers:
- Background speed: `0.3x` (moves 30% of scroll distance).
- Mid speed: `0.6x`.
- Foreground speed: `1.0x` (normal scroll).

### Cursor-Based Parallax (Micro-Parallax)

Elements subtly shift based on mouse position:

```javascript
// Apply to perspective container
const handleMouseMove = (e) => {
  const { clientX, clientY } = e;
  const { width, height } = container.getBoundingClientRect();
  const x = (clientX / width - 0.5) * 2; // -1 to 1
  const y = (clientY / height - 0.5) * 2; // -1 to 1

  // Card rotates based on cursor position
  card.style.transform = `rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
};
```

- Keep rotation subtle: 3-8 degrees maximum.
- Add transition for smooth return to center on mouse leave.
- Use `requestAnimationFrame` for performance.

## Component Architecture Pattern

1. Perspective container (`[perspective:1000px] [transform-style:preserve-3d]`).
2. Background layers (far Z, scaled up, slow parallax).
3. Mid-depth content panels (slight Z offset, glass material).
4. Foreground focal elements (positive Z, deeper shadows).
5. Overlay/floating UI (highest Z, modals, tooltips).
6. Ambient lighting effects (glows, gradients that reinforce depth).

## Interaction Rules

### Cursor Tracking (3D Tilt)

Cards subtly rotate based on cursor position within the card bounds:

- Maximum rotation: `rotateX(8deg) rotateY(8deg)`.
- Transition on enter/leave: `transition-transform duration-300 ease-out`.
- Transition during tracking: `transition-transform duration-100` (tighter for responsiveness).
- Reset to center on mouse leave.

### Hover Lift

- Elements lift toward the viewer: `hover:translate-z-[30px]` (requires preserve-3d).
- Shadow deepens: `hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)]`.
- Scale slightly: `hover:scale-[1.02]`.

### Click / Active

- `active:scale-[0.98]` (press into the surface).
- Transition: `transition-transform duration-100`.

### Float Animation

For elements that should feel weightless (floating panels, dock):

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}
```

- Apply: `animate-[float_4s_ease-in-out_infinite]`.
- Keep amplitude subtle (4-12px).
- Vary duration per element (3s, 4s, 5s) so they don't sync.

## Accent and Color Rules

- Spatial UI typically uses glass/translucent materials (see liquid-glass-ui skill) for surfaces.
- Backgrounds should be vibrant or gradient to support glass elements and reinforce depth through color.
- Accent glows reinforce spatial position: elements closer to viewer have stronger glows.
- Text: `text-white/90` primary, `text-white/60` secondary (on glass/vibrant backgrounds).
- Shadows use colored ambient tint: `rgba(accent_color, 0.2)` instead of pure black.

## Reusable Tailwind Tokens

- Perspective container: `[perspective:1000px] [transform-style:preserve-3d]`
- Volumetric card: `bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] [transform-style:preserve-3d] transition-transform duration-300`
- Glass spatial panel: `bg-white/10 backdrop-blur-2xl backdrop-saturate-150 border border-white/20 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)]`
- Spatial dock: `bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full px-2 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.2)]`
- Hover lift: `hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-all duration-300`
- Float animation: requires custom `@keyframes float` in CSS.
- Radius: `rounded-3xl` to `rounded-[2rem]` (generous, organic shapes).

## Quality Checklist (must pass)

- A parent container has `perspective` set (3D space is defined).
- Elements exist at different Z-depths (not all on the same plane).
- Shadows scale with depth (deeper elements have larger, softer shadows).
- Cursor-tracking rotation is subtle (max 8 degrees) and smooth.
- Parallax layers move at different rates on scroll.
- Transitions use physics-based easing (`ease-out`, spring-like).
- Glass/translucent materials are used for surfaces.
- Background is vibrant enough to support glass depth perception.
- Interactive elements have 3D-aware hover states (lift + shadow deepening).
- The interface feels three-dimensional through layering and motion.
- Performance is maintained: use `requestAnimationFrame`, limit 3D elements, avoid layout thrashing.

## Anti-Patterns

- Setting perspective on individual elements instead of a parent container (breaks 3D space).
- Excessive rotation (more than 10 degrees looks distorted, not spatial).
- All elements at the same Z-depth (no spatial depth, just a flat layout).
- Shadows that don't scale with depth (kills the volumetric illusion).
- Heavy animations that cause jank (spatial UI requires smooth 60fps).
- Using `translate-z` without `preserve-3d` on the parent (transform flattens).
- Too many parallax layers (overwhelming, performance-heavy).
- Flat solid backgrounds (no depth perception without visual reference points).
- Mechanical linear transitions (spatial motion should feel organic and physics-based).
- Applying 3D transforms to text-heavy content (causes readability issues).
- Ignoring `prefers-reduced-motion` (3D transforms can cause motion sickness).

## Typography and Density

- Spatial UI favors modern, premium sans-serif fonts (Inter, SF Pro, Geist).
- Primary labels: `text-lg` to `text-3xl`, `font-medium` to `font-semibold`.
- Large display text: `text-4xl` to `text-6xl`, `font-bold`, `tracking-tight`.
- Keep text on glass surfaces to white or light colors.
- Avoid applying 3D transforms directly to text elements; apply to containers.

## Performance Considerations

Spatial UI is GPU-intensive. Follow these rules:

- Limit the number of elements with active 3D transforms to ~20-30 per view.
- Use `will-change: transform` on elements that animate in 3D.
- Prefer `transform` and `opacity` animations over layout properties.
- Use `requestAnimationFrame` for cursor-tracking JS.
- Throttle or debounce scroll-based parallax.
- Disable 3D transforms on mobile if performance drops (feature-detect and fallback to flat).
- Provide `prefers-reduced-motion` fallback: flatten all 3D, remove parallax, keep only depth via shadow.

## Accessibility Considerations

- 3D transforms and parallax can cause motion sickness for some users. Always provide a `prefers-reduced-motion` fallback.
- Reduced-motion fallback: flatten all 3D transforms, remove parallax, keep hierarchy through shadow and color.
- Ensure focus order follows visual depth order (foreground elements are focused before background).
- Focus indicators must be visible on translucent glass surfaces: `focus:ring-2 focus:ring-white/40`.
- Do not rely on depth alone to convey importance; include text labels and semantic structure.
- Interactive elements must work with keyboard navigation, not just cursor tracking.
- Text must remain readable on 3D-rotated surfaces (avoid rotating text-heavy cards beyond 3-4 degrees).
- Consider providing a "flatten" toggle for users who find spatial layouts disorienting.
