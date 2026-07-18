---
name: deep-sea-ui
description: Build deep sea bioluminescence UI components (abyssal darkness, glowing organisms, pressure-depth gradients, jellyfish translucency, anglerfish lures, sonar grids) with bioluminescent accents, deep-ocean blues, and the alien beauty of the ocean depths. Trigger this skill when the user asks for deep sea design, bioluminescence UI, abyssal aesthetic, underwater glow, ocean depth interfaces, or marine biology-inspired design.
---

# Deep Sea Bioluminescence UI

Use this skill to design and implementation dark, aquatic interfaces inspired by the deep ocean abyss: total darkness punctuated by bioluminescent organisms, translucent jellyfish panels, pressure-depth color gradients, sonar grid overlays, and the alien beauty of creatures that create their own light.

## Non-Negotiable Foundations

- Deep sea UI simulates the ocean abyss: total darkness (not just dark — ABYSSAL black-blue) where the only light comes from bioluminescent organisms.
- Bioluminescence is the primary light source: elements glow with cyan, teal, green, or electric blue light they "produce" themselves.
- Pressure-depth gradient: backgrounds transition from deep blue-black at the top to absolute void at the bottom, suggesting increasing depth.
- Translucent jellyfish-like panels: surfaces are semi-transparent with organic, floating quality.
- Sonar/grid overlays reference submarine navigation and depth measurement.
- The aesthetic is alien, mysterious, and beautiful — the deep sea is more alien than space.

## Core Material Recipes

### 1) Abyssal Background

The foundational void: deep ocean darkness with depth gradient.

- `bg-gradient-to-b from-[#001a2a] via-[#000a14] to-[#000508]` (depth gradient — lighter at top, void at bottom).
- Optional bio-specks: `bg-[radial-gradient(1px_1px_at_20%_30%,rgba(0,255,200,0.3),transparent),radial-gradient(1px_1px_at_70%_60%,rgba(100,200,255,0.2),transparent)] bg-[size:200px_200px]`.

### 2) Bioluminescent Glow Element

Element that emits its own light (jellyfish, organism, lure).

- `bg-cyan-400/10 backdrop-blur-md border border-cyan-300/30 rounded-full shadow-[0_0_30px_rgba(0,255,200,0.2)]` (jellyfish bell).
- Pulsing glow: `animate-[pulse_4s_ease-in-out_infinite]`.

### 3) Translucent Abyssal Panel

Jellyfish-tissue translucent panel.

- `bg-[#001a2a]/40 backdrop-blur-xl border border-cyan-300/20 rounded-[2rem] shadow-[0_0_20px_rgba(0,200,200,0.1)] p-6`.

### 4) Bioluminescent Button

Button that glows from within.

- `bg-gradient-to-r from-[#003a4a] to-[#001a2a] text-[#00ffcc] font-medium rounded-full px-8 py-3 border border-[#00ffcc]/30 shadow-[0_0_15px_rgba(0,255,200,0.3),inset_0_0_10px_rgba(0,255,200,0.1)] hover:shadow-[0_0_25px_rgba(0,255,200,0.5)] transition-all`.

### 5) Sonar Grid Overlay

Submarine navigation grid.

- `bg-[linear-gradient(rgba(0,255,200,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,200,0.03)_1px,transparent_1px)] bg-[size:60px_60px]`.

### 6) Anglerfish Lure Accent

A single bright point of light in the darkness (focal lure).

- `w-3 h-3 rounded-full bg-[#00ffcc] shadow-[0_0_20px_rgba(0,255,200,0.8),0_0_40px_rgba(0,255,200,0.4)]`.
- Connected to panel by a thin line: `w-px h-8 bg-gradient-to-b from-[#00ffcc]/40 to-transparent`.

### 7) Bubble/Particle Rise

Slowly rising bioluminescent particles (like plankton or bubbles).

```css
@keyframes bio-rise {
  0% { transform: translateY(100vh); opacity: 0; }
  10% { opacity: 0.4; }
  90% { opacity: 0.2; }
  100% { transform: translateY(-10vh); opacity: 0; }
}
.bio-particle {
  width: 4px; height: 4px;
  background: rgba(0,255,200,0.4);
  border-radius: 50%;
  box-shadow: 0 0 4px rgba(0,255,200,0.6);
  animation: bio-rise 10s linear infinite;
}
```

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Abyssal Void | `#000508` | Deepest background |
| Deep Ocean | `#000a14` | Mid background |
| Ocean Blue | `#001a2a` | Upper background |
| Bioluminescent Cyan | `#00ffcc` | Primary glow |
| Bio Teal | `#00ccaa` | Secondary glow |
| Electric Blue | `#00aaff` | Accent glow |
| Deep Indigo | `#1a0a3a` | Rare accent |
| Pale Ghost White | `#e0f5ff` | Text on dark |

Rules: Abyssal blue-blacks dominate 90%. Bioluminescent cyan/teal provides ALL light. No warm colors. Everything should feel cold, deep, and self-illuminating.

## Typography Recommendations

- **Display:** Outfit, Sora, or Space Grotesk (clean, fluid, modern).
- **Body:** Inter, DM Sans (clean readable sans on dark).
- **Data:** JetBrains Mono (depth readings, pressure data, sonar coordinates).
- **Labels:** `font-medium text-sm text-cyan-300/60 uppercase tracking-widest`.

## Interaction Rules

- Default: dark, glowing, mysterious.
- Hover: bioluminescence intensifies (organisms brighten when approached).
  - `hover:shadow-[0_0_25px_rgba(0,255,200,0.5)] hover:border-cyan-300/50 transition-all duration-400`.
- Active: `active:shadow-[0_0_10px_rgba(0,255,200,0.3)]` (glow dims — touched).
- Focus: `focus:outline-none focus:ring-2 focus:ring-cyan-300/40`.
- Transitions: `transition-all duration-400 ease-in-out` (slow, fluid, like water).
- Bioluminescent pulse: `animate-[pulse_4s_ease-in-out_infinite]` on key elements.

## Reusable Tailwind Tokens

- Abyssal bg: `bg-gradient-to-b from-[#001a2a] via-[#000a14] to-[#000508]`.
- Abyssal panel: `bg-[#001a2a]/40 backdrop-blur-xl border border-cyan-300/20 rounded-[2rem] shadow-[0_0_20px_rgba(0,200,200,0.1)]`.
- Bio button: `bg-gradient-to-r from-[#003a4a] to-[#001a2a] text-[#00ffcc] border border-[#00ffcc]/30 shadow-[0_0_15px_rgba(0,255,200,0.3)]`.
- Sonar grid: `bg-[linear-gradient(rgba(0,255,200,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,200,0.03)_1px,transparent_1px)] bg-[size:60px_60px]`.
- Bio glow: `shadow-[0_0_20px_rgba(0,255,200,0.2)]`.

## Quality Checklist

- Background is abyssal blue-black depth gradient.
- Bioluminescent glow is the primary light source (cyan/teal).
- At least one translucent jellyfish-like panel.
- Sonar/grid overlay present.
- Bio-particle rising animation (ambient).
- Color palette is exclusively deep blue + bio-cyan/teal.
- Anglerfish lure accent (single bright focal point).
- Everything feels cold, deep, and self-illuminating.
- The aesthetic reads as deep ocean / abyssal marine environment.
- No warm colors anywhere.

## Anti-Patterns

- Warm colors of any kind (deep sea is exclusively cold blue-cyan).
- Bright or light backgrounds (abyssal darkness is mandatory).
- Missing bioluminescent glow (organisms create their own light — this is the signature).
- Flat opaque panels (use translucent jellyfish-tissue panels).
- Missing the depth gradient (ocean gets darker with depth).
- Missing bio-particles (ambient rising glow is essential atmosphere).
- Conventional drop shadows (use bioluminescent glow shadows).
- Fast mechanical animations (motion is slow and fluid like water).
- Missing sonar/grid overlay (submarine navigation reference).
- Terrestrial or dry aesthetic (everything should feel submerged).

## Accessibility Considerations

- Abyssal backgrounds with cyan text provide excellent contrast (WCAG AAA for large text).
- Translucent panels must maintain text contrast at all background states.
- Focus states: `focus:ring-2 focus:ring-cyan-300/40` (bio-cyan ring on abyss).
- Bio-particle animation must respect `prefers-reduced-motion`.
- Sonar grid overlay must not reduce text contrast (keep very subtle).
- Anglerfish lure accents are decorative — `aria-hidden="true"`.
- The dark aesthetic is low eye-strain (good for extended viewing).
- Touch targets must be adequate despite translucent panel padding.
