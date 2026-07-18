---
name: hot-air-balloon-ui
description: Build hot air balloon UI components (colorful vertical stripe envelope patterns, wicker basket textures, cumulus cloud backdrops, festival of flight, panoramic sky views, Lycra fabric panels) with vertical rainbow stripes, woven basket surfaces, and the buoyant joy of balloon flight. Trigger this skill when the user asks for hot air balloon, balloon festival, flight UI, sky adventure, vertical stripes, or buoyant interfaces.
---

# Hot Air Balloon UI

Use this skill to design and implementation buoyant, colorful interfaces inspired by hot air ballooning: vertical rainbow stripe envelope patterns, wicker basket textures, cumulus cloud backdrops, panoramic sky views, and the weightless joy of drifting above the world.

## Core Material Recipes

### 1) Balloon Envelope Panel

Vertical multicolor stripe panel (the balloon envelope).

- `bg-[repeating-linear-gradient(90deg,#c41e1e_0px,#c41e1e_30px,#ffcc00_30px,#ffcc00_60px,#1a3a8a_60px,#1a3a8a_90px,#2a8a3a_90px,#2a8a3a_120px,#ff6baa_120px,#ff6baa_150px)] rounded-t-full rounded-b-lg p-8 shadow-[0_4px_16px_rgba(0,0,0,0.15)]`.

### 2) Wicker Basket Surface

Woven wicker/rattan texture panel.

- `bg-[#a07030] bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_4px,rgba(60,40,10,0.15)_4px,rgba(60,40,10,0.15)_6px),repeating-linear-gradient(90deg,transparent_0px,transparent_4px,rgba(60,40,10,0.12)_4px,rgba(60,40,10,0.12)_6px)] rounded-lg p-6 border border-[#6a4a10]`.

### 3) Cumulus Cloud Backdrop

Soft blue sky with fluffy clouds.

- `bg-gradient-to-b from-[#87ceeb] via-[#b0e0f5] to-[#e0f0ff]` (sky gradient).
- Clouds: `bg-[radial-gradient(ellipse_100px_40px_at_20%_30%,rgba(255,255,255,0.6),transparent),radial-gradient(ellipse_120px_35px_at_70%_20%,rgba(255,255,255,0.5),transparent),radial-gradient(ellipse_80px_30px_at_50%_50%,rgba(255,255,255,0.4),transparent)]`.

### 4) Balloon Button

Rounded festive button.

- `bg-gradient-to-b from-[#ff6b6b] to-[#c43030] text-white font-bold uppercase tracking-wider px-8 py-3 rounded-full border-2 border-white shadow-[0_4px_0_#8a1010] hover:translate-y-1 hover:shadow-[0_2px_0_#8a1010] active:shadow-none transition-all`.

### 5) Balloon Silhouette Accent

Simple hot air balloon SVG.

```html
<svg viewBox="0 0 60 80" class="w-15 h-20 opacity-40">
  <g stroke="#1a1a1a" stroke-width="0.5">
    <path d="M30,5 Q10,5 10,30 Q10,50 30,55 Q50,50 50,30 Q50,5 30,5" fill="#c41e1e"/>
    <path d="M30,5 L30,55" stroke="#ffcc00" stroke-width="2"/>
    <path d="M20,5 L20,50" stroke="#1a3a8a" stroke-width="2"/>
    <path d="M40,5 L40,50" stroke="#2a8a3a" stroke-width="2"/>
    <!-- Basket -->
    <rect x="24" y="60" width="12" height="12" rx="1" fill="#a07030"/>
    <line x1="26" y1="55" x2="26" y2="60" stroke="#5a3a10" stroke-width="0.5"/>
    <line x1="34" y1="55" x2="34" y2="60" stroke="#5a3a10" stroke-width="0.5"/>
  </g>
</svg>
```

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Balloon Red | `#c41e1e` | Stripe color |
| Balloon Yellow | `#ffcc00` | Stripe color |
| Balloon Blue | `#1a3a8a` | Stripe color |
| Balloon Green | `#2a8a3a` | Stripe color |
| Balloon Pink | `#ff6baa` | Stripe color |
| Sky Blue | `#87ceeb` | Background |
| Wicker Tan | `#a07030` | Basket surfaces |
| Cloud White | `#ffffff` | Clouds, text |

Rules: Every surface should feel like it's part of a balloon festival. Vertical stripes in 4-6 colors. Sky blue backgrounds with white clouds. Wicker brown for basket/structural elements.

## Typography Recommendations

- **Display:** Pacifico, Fredoka One (festive, buoyant, sky-signage feel).
- **Body:** Nunito, Quicksand (rounded, friendly, airborne).
- **Labels:** `font-bold text-sm uppercase tracking-wider` (festival banner lettering).

## Reusable Tailwind Tokens

- Balloon stripes: `bg-[repeating-linear-gradient(90deg,color1_0px,...)] rounded-t-full`.
- Wicker: `bg-[#a07030]` with crosshatch weave overlay.
- Sky: `bg-gradient-to-b from-[#87ceeb] via-[#b0e0f5] to-[#e0f0ff]`.
- Balloon button: `rounded-full border-2 border-white shadow-[0_4px_0_#8a1010]`.

## Quality Checklist

- At least one vertical rainbow stripe panel (the balloon envelope).
- Sky blue gradient background with clouds.
- Wicker-textured basket surface present.
- Balloon silhouette SVG decoration.
- Color palette is festive multi-color + sky blue.
- Rounded shapes throughout (balloons are ROUND).
- The aesthetic reads as hot air balloon festival / sky adventure.
- Everything feels buoyant, colorful, and joyful.
- Vertical stripes are the primary decorative pattern.

## Anti-Patterns

- Dark or muted palettes (balloons are BRIGHT and FESTIVE).
- Missing vertical stripe patterns (the envelope stripes are the signature).
- Missing the sky/cloud background (balloons exist in the SKY).
- Missing wicker basket textures (the basket grounds the balloon aesthetic).
- Sharp angular shapes (everything should be rounded and buoyant).
- Heavy grounded design (balloon UI is weightless and airborne).
- Missing the balloon silhouette SVG (the shape is iconic).
- Sans-serif cold typography (use festive rounded fonts).
- Dense cluttered layouts (the sky is OPEN and SPACIOUS).
- Single-color design (balloons are MULTI-COLOR striped).

## Accessibility Considerations

- Sky blue backgrounds with dark text provide good contrast (verify WCAG AA).
- Multi-color stripes should not be behind body text (use solid cards for text).
- Focus states: `focus:ring-4 focus:ring-white/50` (white ring visible on sky).
- Cloud and balloon SVGs must be `aria-hidden="true"` when decorative.
- Touch targets must be adequate despite festive rounded styling.
