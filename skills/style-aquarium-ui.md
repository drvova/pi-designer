---
name: aquarium-ui
description: Build aquarium UI components (glass tank panels, blue water gradients, swimming fish, bubble streams, sand substrate, aquatic plants, dappled water light) with transparent glass panels, floating fish animations, and the serene contained beauty of a fish tank. Trigger this skill when the user asks for aquarium design, fish tank UI, contained underwater, aquatic interface, reef tank, or swimming aquatic interfaces.
---

# Aquarium UI

Use this skill to design and implementation serene, contained interfaces inspired by aquariums: glass tank panels, blue water gradients, swimming fish animations, rising bubble streams, sand substrate textures, aquatic plants, and dappled water light caustics.

## Core Material Recipes

### 1) Aquarium Tank Panel

Glass tank translucent panel with blue water behind.

- `bg-[#0288d1]/15 backdrop-blur-md border-2 border-[#0288d1]/30 rounded-lg p-6 shadow-[0_0_20px_rgba(2,136,209,0.1),inset_0_1px_0_rgba(255,255,255,0.2)]`.

### 2) Water Gradient Background

Blue water depth gradient.

- `bg-gradient-to-b from-[#4fc3f7] via-[#0288d1] to-[#01579b]` (shallow to deep).

### 3) Rising Bubble Animation

Bubble stream rising from bottom.

```css
@keyframes bubble-rise {
  0% { transform: translateY(0) translateX(0); opacity: 0; }
  10% { opacity: 0.5; }
  90% { opacity: 0.3; }
  100% { transform: translateY(-200px) translateX(10px); opacity: 0; }
}
.bubble {
  width: 6px; height: 6px;
  background: rgba(255,255,255,0.4);
  border-radius: 50%;
  animation: bubble-rise 4s ease-in infinite;
}
```

Multiple bubbles with different `left` positions and `animation-delay`.

### 4) Swimming Fish Accent

Simple tropical fish SVG that drifts across the screen.

```html
<svg viewBox="0 0 60 30" class="w-15 h-8">
  <path d="M5,15 Q15,5 35,10 Q50,5 55,15 Q50,25 35,20 Q15,25 5,15" fill="#ff9800"/>
  <path d="M0,10 L8,15 L0,20" fill="#ff9800"/>
  <circle cx="42" cy="13" r="2" fill="#1a1a1a"/>
  <path d="M25,12 L35,15 L25,18" fill="#e65100" opacity="0.5"/>
</svg>
```

Optional: slow horizontal drift animation `animate-[swim_15s_linear_infinite]`.

### 5) Sand Substrate Strip

Aquarium bottom sand strip.

- `h-8 bg-gradient-to-b from-[#e0c878] to-[#c4a858] rounded-b-lg` with pebble specks: `bg-[radial-gradient(rgba(120,90,50,0.15)_1px,transparent_1px)] bg-[size:6px_6px]`.

### 6) Aquatic Plant Accent

Wavy aquatic plant SVG.

```html
<svg viewBox="0 0 40 80" class="w-10 h-20 opacity-40">
  <g fill="none" stroke="#2e7d32" stroke-width="2">
    <path d="M20,80 Q15,60 20,40 Q25,20 20,0"/>
    <path d="M15,80 Q10,55 12,30"/>
    <path d="M25,80 Q30,60 28,35"/>
  </g>
  <ellipse cx="18" cy="45" rx="3" ry="8" fill="#388e3c" opacity="0.5"/>
  <ellipse cx="22" cy="25" rx="3" ry="8" fill="#388e3c" opacity="0.5"/>
</svg>
```

### 7) Aquarium Button

Blue water button with bubble styling.

- `bg-gradient-to-b from-[#4fc3f7] to-[#0288d1] text-white font-medium rounded-full px-8 py-3 border border-[#01579b] shadow-[0_3px_8px_rgba(2,136,209,0.3)] hover:shadow-[0_0_15px_rgba(79,195,247,0.4)] transition-all`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Shallow Blue | `#4fc3f7` | Top water |
| Aquarium Blue | `#0288d1` | Mid water |
| Deep Blue | `#01579b` | Bottom depth |
| Sand Gold | `#e0c878` | Substrate |
| Plant Green | `#2e7d32` | Aquatic plants |
| Fish Orange | `#ff9800` | Tropical fish accent |
| Bubble White | `rgba(255,255,255,0.4)` | Rising bubbles |

Rules: Blue water tones dominate (the tank). Sand gold at the bottom. Green for plants. Orange/yellow for fish accents. Everything should feel submerged, serene, and gently moving.

## Typography Recommendations

- **Display:** Quicksand, Nunito (rounded, friendly, aquatic).
- **Body:** DM Sans, Source Sans Pro (clean readable sans).
- Typography should feel gentle and flowing, like water movement.

## Reusable Tailwind Tokens

- Aquarium panel: `bg-[#0288d1]/15 backdrop-blur-md border-2 border-[#0288d1]/30 rounded-lg`.
- Water gradient: `bg-gradient-to-b from-[#4fc3f7] via-[#0288d1] to-[#01579b]`.
- Aquarium button: `bg-gradient-to-b from-[#4fc3f7] to-[#0288d1] rounded-full border border-[#01579b]`.
- Sand strip: `h-8 bg-gradient-to-b from-[#e0c878] to-[#c4a858]`.
- Bubble: `rounded-full bg-white/40 animate-[bubble-rise_4s_ease-in_infinite]`.

## Quality Checklist

- At least one translucent glass-tank panel.
- Blue water depth gradient background.
- Rising bubble animation present.
- At least one swimming fish SVG accent.
- Sand substrate strip at the bottom.
- Aquatic plant SVG decorations.
- Dappled water caustic light effect.
- Typography is rounded and gentle.
- The aesthetic reads as a serene aquarium / fish tank.
- Everything feels submerged, contained, and gently alive.

## Anti-Patterns

- Opaque solid panels (aquariums are GLASS tanks — use translucency).
- Missing bubbles (rising bubbles are the signature animation).
- Missing fish decorations (aquatic creatures bring the tank to life).
- Dark abyssal aesthetic (aquariums are bright shallow water with light).
- Missing the sand substrate (the bottom of the tank is essential).
- Missing aquatic plants (these create the contained-ecosystem feel).
- Sharp angular shapes (everything should be rounded and flowing).
- Red or warm dominant palette (aquarium is BLUE water).
- Fast aggressive animations (water motion is slow and gentle).
- Dense cluttered layouts (aquariums are serene and spacious).

## Accessibility Considerations

- Blue backgrounds with white/light text provide excellent contrast (WCAG AAA).
- Translucent panels must maintain text contrast at all states.
- Focus states: `focus:ring-2 focus:ring-[#4fc3f7]/50` (light blue ring).
- Bubble and fish animations must respect `prefers-reduced-motion`.
- Decorative SVGs (fish, plants) must be `aria-hidden="true"`.
- Touch targets must be adequate despite aquatic panel padding.
