---
name: fireworks-ui
description: Build fireworks / festival UI components (exploding starbursts on night sky, gold/red glow trails, sparkler trails, celebration confetti, festival lantern light, countdown energy) with radial burst animations, glowing particle trails, and the explosive joy of fireworks night. Trigger this skill when the user asks for fireworks, festival night, celebration burst, sparkler, countdown, New Year, or explosive joy interfaces.
---

# Fireworks / Festival UI

Use this skill to design and implementation celebratory interfaces inspired by fireworks nights: radial starburst animations on dark sky, glowing gold and red particle trails, sparkler accents, festival lantern warmth, countdown energy, and the explosive collective joy of a fireworks display.

## Core Material Recipes

### 1) Night Sky Background

Deep dark sky backdrop.

- `bg-gradient-to-b from-[#0a0a2a] to-[#050514]` (deep night sky).

### 2) Firework Burst Animation

Exploding radial firework with particle trails.

```css
@keyframes firework {
  0% { transform: scale(0); opacity: 0; }
  10% { transform: scale(0.5); opacity: 1; }
  50% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(1.5); opacity: 0; }
}
```

SVG burst:
```html
<svg viewBox="0 0 200 200" class="w-40 h-40 animate-[firework_3s_ease-out_infinite]">
  <g stroke-width="1" fill="none">
    <line x1="100" y1="100" x2="100" y2="20" stroke="#ffcc00"/>
    <line x1="100" y1="100" x2="170" y2="50" stroke="#ff6b6b"/>
    <line x1="100" y1="100" x2="180" y2="100" stroke="#ffcc00"/>
    <line x1="100" y1="100" x2="170" y2="150" stroke="#ff6b6b"/>
    <line x1="100" y1="100" x2="100" y2="180" stroke="#ffcc00"/>
    <line x1="100" y1="100" x2="30" y2="150" stroke="#ff6b6b"/>
    <line x1="100" y1="100" x2="20" y2="100" stroke="#ffcc00"/>
    <line x1="100" y1="100" x2="30" y2="50" stroke="#ff6b6b"/>
  </g>
  <g fill="#ffcc00">
    <circle cx="100" cy="20" r="2"/>
    <circle cx="170" cy="50" r="2"/>
    <circle cx="180" cy="100" r="2"/>
    <circle cx="170" cy="150" r="2"/>
    <circle cx="100" cy="180" r="2"/>
    <circle cx="30" cy="150" r="2"/>
    <circle cx="20" cy="100" r="2"/>
    <circle cx="30" cy="50" r="2"/>
  </g>
</svg>
```

### 3) Sparkler Trail Accent

Animated sparkler trail decoration.

- Thin glowing line: `w-0.5 h-12 bg-gradient-to-t from-transparent via-[#ffcc00] to-[#ffffff] shadow-[0_0_4px_#ffcc00]` with `animate-[sparkle_0.3s_steps(3)_infinite]`.

### 4) Festival Lantern Panel

Warm glowing paper lantern surface.

- `bg-gradient-to-b from-[#ff8c1a] to-[#c4501a] rounded-2xl p-6 shadow-[0_0_20px_rgba(255,140,26,0.3),inset_0_0_10px_rgba(255,200,100,0.2)]`.

### 5) Fireworks Button

Glowing celebratory button.

- `bg-gradient-to-b from-[#ffcc00] to-[#ff6b00] text-[#1a0a00] font-bold uppercase tracking-wider px-8 py-3 rounded-full border-2 border-[#ffcc00] shadow-[0_0_15px_rgba(255,204,0,0.4),0_3px_0_#cc5500] hover:shadow-[0_0_25px_rgba(255,204,0,0.6),0_3px_0_#cc5500] transition-all`.

### 6) Countdown Number

Large glowing countdown display.

- `text-7xl font-bold text-[#ffcc00] [text-shadow:0_0_10px_rgba(255,204,0,0.6),0_0_20px_rgba(255,107,0,0.4)] text-center`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Night Sky | `#0a0a2a` | Background |
| Deep Night | `#050514` | Deepest background |
| Gold Spark | `#ffcc00` | Primary firework color |
| Orange Flame | `#ff6b00` | Secondary burst |
| Red Star | `#ff6b6b` | Red firework trails |
| Lantern Orange | `#ff8c1a` | Festival lanterns |
| White Core | `#ffffff` | Sparkler tip |
| Warm Glow | `rgba(255,200,0,0.3)` | Ambient glow |

Rules: Gold and orange-red dominate (firework colors against dark sky). The night-sky background is ESSENTIAL — fireworks only exist against darkness. Everything glows with warm celebration light.

## Typography Recommendations

- **Display:** Bungee, Anton (bold, explosive, celebratory).
- **Body:** Nunito, DM Sans (rounded, friendly).
- **Countdown:** `font-bold text-7xl` with gold glow text-shadow.

## Reusable Tailwind Tokens

- Night sky: `bg-gradient-to-b from-[#0a0a2a] to-[#050514]`.
- Firework SVG: radial lines with colored endpoints + animation.
- Lantern: `bg-gradient-to-b from-[#ff8c1a] to-[#c4501a] shadow-[0_0_20px_rgba(255,140,26,0.3)]`.
- Fireworks button: `bg-gradient-to-b from-[#ffcc00] to-[#ff6b00] rounded-full shadow-[0_0_15px_rgba(255,204,0,0.4)]`.
- Countdown: `text-7xl text-[#ffcc00] [text-shadow:0_0_10px_rgba(255,204,0,0.6),0_0_20px_rgba(255,107,0,0.4)]`.

## Quality Checklist

- Background is deep night sky (dark blue-black).
- At least one firework burst animation (radial expanding starburst).
- Gold/orange/red glow palette throughout.
- Sparkler trail decoration present.
- Festival lantern warm-glow panel.
- Countdown number display with glow.
- Glowing buttons with layered shadows.
- The aesthetic reads as fireworks night / celebration / festival.
- Everything feels explosive, joyful, and celebratory.
- Glow effects use layered colored shadows (gold + orange + white).

## Anti-Patterns

- Light or daytime backgrounds (fireworks need DARK NIGHT SKY).
- Muted or cold palettes (fireworks are GOLD and ORANGE-RED glow).
- Missing firework burst animations (the explosion IS the aesthetic).
- Static non-animated elements (fireworks are inherently MOTION).
- Missing the night-sky contrast (fireworks only exist against darkness).
- Sharp flat shapes (fireworks are radiating BURSTS of light).
- Slow gentle animations (firework explosions are FAST then FADE).
- Missing sparkler/lantern accents (these add festival variety).
- Missing the glow effects (everything must emit warm light).
- Sans-serif thin typography (celebration needs BOLD explosive display).

## Accessibility Considerations

- Dark night-sky backgrounds with gold text provide excellent contrast (WCAG AAA).
- Firework animations must respect `prefers-reduced-motion` (disable explosions).
- Flashing/strobing effects must not exceed 3Hz (seizure risk — fireworks should EXPAND not FLASH).
- Focus states: `focus:ring-2 focus:ring-[#ffcc00]/50` (gold ring on night sky).
- Decorative firework SVGs must be `aria-hidden="true"`.
- Countdown numbers need semantic markup for screen readers (`aria-live`).
- The dark background is low eye-strain for extended viewing.
