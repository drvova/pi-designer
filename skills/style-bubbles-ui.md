---
name: bubbles-ui
description: Build bubbles UI components (iridescent soap-bubble surfaces, transparent spheres, rainbow refraction, floating drift animation, frothy texture, playful lightness) with translucent iridescent panels, floating sphere decorations, and the joyful ephemeral beauty of soap bubbles. Trigger this skill when the user asks for bubbles design, soap bubble UI, iridescent transparent, floating spheres, or playful airy interfaces.
---

# Bubbles UI

Use this skill to design and implementation light, playful interfaces inspired by soap bubbles: translucent iridescent surfaces, floating sphere decorations, rainbow refraction effects, gentle drift animations, frothy cluster textures, and the joyful, weightless beauty of floating bubbles.

## Core Material Recipes

### 1) Iridescent Bubble Panel

Translucent panel with soap-bubble iridescence.

- `bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.2),0_0_15px_rgba(180,200,255,0.2)] relative overflow-hidden`.
- Iridescent sheen: `before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,rgba(255,100,200,0.08),rgba(100,255,200,0.08),rgba(100,200,255,0.08),rgba(255,200,100,0.08),rgba(255,100,200,0.08))] before:rounded-full`.

### 2) Floating Sphere Decoration

Individual soap-bubble sphere with highlight.

```html
<div class="relative w-20 h-20 rounded-full bg-gradient-to-br from-white/30 to-transparent shadow-[inset_-4px_-4px_12px_rgba(100,150,255,0.15),inset_4px_4px_8px_rgba(255,255,255,0.4),0_0_10px_rgba(180,200,255,0.2)]">
  <div class="absolute top-[15%] left-[20%] w-1/3 h-1/3 rounded-full bg-white/60 blur-sm"></div>
</div>
```

### 3) Bubble Cluster Accent

Overlapping frothy bubble group.

```html
<div class="relative flex gap-[-8px]">
  <div class="w-8 h-8 rounded-full bg-white/20 border border-white/30 shadow-[inset_2px_2px_4px_rgba(255,255,255,0.4)]"></div>
  <div class="w-6 h-6 rounded-full bg-white/15 border border-white/20 -ml-2 -mt-2 shadow-[inset_2px_2px_3px_rgba(255,255,255,0.3)]"></div>
  <div class="w-4 h-4 rounded-full bg-white/10 border border-white/20 -ml-1 mt-3 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.3)]"></div>
</div>
```

### 4) Floating Bubble Animation

Gentle upward drifting bubbles.

```css
@keyframes bubble-drift {
  0% { transform: translateY(100vh) translateX(0); opacity: 0; }
  10% { opacity: 0.5; }
  50% { transform: translateY(50vh) translateX(20px); }
  90% { opacity: 0.3; }
  100% { transform: translateY(-10vh) translateX(-10px); opacity: 0; }
}
```

### 5) Bubble Button

Translucent iridescent pill button.

- `bg-white/15 backdrop-blur-md text-[#5a7a9a] font-medium rounded-full px-8 py-3 border border-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_0_10px_rgba(180,200,255,0.2)] hover:bg-white/25 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_0_20px_rgba(180,200,255,0.4)] transition-all`.

### 6) Rainbow Refraction Accent

Iridescent border (the soap-film rainbow).

- `[border-image:conic-gradient(from_0deg,#ff6b9d,#f5cc3a,#4caf50,#00d4ff,#9a6abf,#ff6b9d)_1] border-2 rounded-full`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Bubble White | `rgba(255,255,255,0.1-0.3)` | Primary surface (translucent) |
| Sky Tint | `rgba(180,200,255,0.2)` | Blue-ish glow |
| Iridescent Pink | `rgba(255,100,200,0.08)` | Refraction tint |
| Iridescent Green | `rgba(100,255,200,0.08)` | Refraction tint |
| Iridescent Blue | `rgba(100,200,255,0.08)` | Refraction tint |
| Iridescent Gold | `rgba(255,200,100,0.08)` | Refraction tint |
| Steel Blue | `#5a7a9a` | Text (on translucent) |
| Background | Any colorful/gradient | Shows through bubbles |

Rules: Bubbles are TRANSLUCENT — the background shows through. Iridescence (rainbow conic gradient) is the signature surface treatment. White highlights simulate light reflection on the bubble surface. Everything should feel weightless and floating.

## Typography Recommendations

- **Display:** Quicksand, Nunito (rounded, soft, weightless).
- **Body:** DM Sans, Source Sans Pro (clean rounded sans).
- **Labels:** `font-medium text-sm tracking-wide` (soft, gentle).
- Typography should feel light, rounded, and playful.

## Reusable Tailwind Tokens

- Bubble panel: `bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.2)]`.
- Iridescent sheen: conic-gradient overlay at low opacity.
- Floating sphere: `rounded-full bg-gradient-to-br from-white/30 to-transparent` with inset highlight.
- Bubble button: `bg-white/15 backdrop-blur-md rounded-full border border-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]`.
- Rainbow border: `border-image: conic-gradient(...)`.

## Quality Checklist

- At least one translucent iridescent bubble panel.
- At least one floating sphere decoration with highlight.
- Floating/drifting animation present.
- Iridescent (rainbow) surface treatment somewhere.
- Color palette is translucent-white with iridescent tints.
- Round/circular shapes throughout (bubbles are ROUND).
- Gentle floating motion on elements.
- Typography is rounded and weightless.
- The aesthetic reads as soap bubbles / iridescent floating spheres.
- Everything feels light, playful, and ephemeral.

## Anti-Patterns

- Opaque solid panels (bubbles are TRANSLUCENT).
- Sharp angular shapes (bubbles are perfectly ROUND).
- Missing iridescence (the rainbow soap-film is the signature).
- Missing floating animation (bubbles FLOAT — static circles are not bubbles).
- Heavy solid colors (the palette is translucent white + iridescence).
- Dark heavy surfaces (bubbles are light and airy).
- Sharp corners or rectangles (use `rounded-full` everywhere).
- Missing the white highlight on spheres (the specular dot makes it a bubble).
- Dense cluttered layouts (bubble aesthetic is spacious and airy).
- Fast aggressive motion (bubble drift is SLOW and gentle).

## Accessibility Considerations

- Translucent panels over varied backgrounds create variable contrast — verify WCAG AA at all states.
- Add solid text-background chips if text contrast is insufficient.
- Focus states: `focus:ring-2 focus:ring-white/40` (white ring visible on most backgrounds).
- Floating bubble animations must respect `prefers-reduced-motion`.
- Decorative sphere SVGs must be `aria-hidden="true"`.
- The translucent aesthetic may be challenging for low-vision users — provide higher-contrast fallback.
- Touch targets must be adequate despite translucent border styling.
