---
name: campfire-ui
description: Build campfire UI components (crackling fire glow, starry night sky, log seating, pine forest backdrop, toasted marshmallow warmth, storytelling circle, outdoor adventure coziness) with warm orange firelight glow, dark wilderness backdrop, and the primal comfort of gathering around fire. Trigger this skill when the user asks for campfire, outdoor adventure, wilderness UI, firelight glow, starry camp, or bushcraft interfaces.
---

# Campfire UI

Use this skill to design and implementation warm, primal interfaces inspired by gathering around a campfire: crackling orange firelight glow against a dark wilderness backdrop, starry night sky, log-seating textures, pine forest silhouettes, and the ancient human comfort of fire, warmth, and shared stories.

## Core Material Recipes

### 1) Dark Wilderness Background

Night forest with firelight glow.

- `bg-gradient-to-b from-[#0a0a14] via-[#0a0f08] to-[#0a0a14]` (dark night sky to dark forest).
- Stars: `bg-[radial-gradient(1px_1px_at_20%_10%,rgba(255,255,255,0.5),transparent),radial-gradient(1px_1px_at_60%_15%,rgba(255,255,255,0.3),transparent),radial-gradient(1px_1px_at_80%_8%,rgba(255,255,255,0.4),transparent)] bg-[size:200px_200px]`.
- Firelight glow: `bg-[radial-gradient(ellipse_at_50%_80%,rgba(255,140,30,0.08)_0%,transparent_50%)]`.

### 2) Firelit Panel

Card surface illuminated by firelight from below.

- `bg-gradient-to-br from-[#1a1208] to-[#0a0804] border border-[#3a2a10] p-8 shadow-[inset_0_-10px_30px_rgba(255,140,30,0.06),0_0_15px_rgba(255,100,20,0.04)]`.

### 3) Campfire Button

Warm fire-glow button.

- `bg-gradient-to-b from-[#ff8c30] to-[#c4501a] text-[#fff5e0] font-medium px-8 py-3 border-2 border-[#8a2a04] shadow-[0_3px_0_#8a2a04,0_0_10px_rgba(255,140,48,0.2)] hover:shadow-[0_3px_0_#8a2a04,0_0_20px_rgba(255,140,48,0.4)] transition-all`.

### 4) Log Seating Accent

Horizontal log texture divider.

- `h-4 bg-gradient-to-b from-[#6a4a2a] to-[#4a3018] rounded-full bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_2px,rgba(0,0,0,0.06)_2px,rgba(0,0,0,0.06)_3px)]`.

### 5) Flame Animation

Subtle flickering fire glow.

```css
@keyframes flame-flicker {
  0%, 100% { opacity: 0.8; }
  20% { opacity: 0.9; }
  40% { opacity: 0.7; }
  60% { opacity: 0.85; }
  80% { opacity: 0.75; }
}
```

### 6) Pine Silhouette Accent

Dark pine tree forest line.

```html
<svg viewBox="0 0 200 60" class="w-full opacity-40">
  <g fill="#0a0f08">
    <path d="M10,60 L5,30 L10,35 L8,20 L12,25 L10,10 L14,25 L12,20 L16,30 L14,60 Z"/>
    <path d="M50,60 L45,25 L50,30 L48,15 L52,20 L50,5 L54,20 L52,15 L56,25 L54,60 Z"/>
    <path d="M120,60 L115,28 L120,33 L118,18 L122,23 L120,8 L124,23 L122,18 L126,28 L124,60 Z"/>
    <path d="M180,60 L175,32 L180,37 L178,22 L182,27 L180,12 L184,27 L182,22 L186,32 L184,60 Z"/>
  </g>
</svg>
```

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Night Sky | `#0a0a14` | Background |
| Dark Forest | `#0a0f08` | Pine background |
| Firelit Dark | `#1a1208` | Panel surfaces |
| Fire Orange | `#ff8c30` | Primary glow |
| Deep Ember | `#c4501a` | Secondary fire |
| Charred Wood | `#3a2a10` | Borders, logs |
| Pine Wood | `#6a4a2a` | Log surfaces |
| Star White | `#ffffff` | Stars, text |
| Warm Cream | `#fff5e0` | Text on fire-orange |

Rules: Dark wilderness backgrounds with warm firelight glow from below. Orange and deep red are the only warm colors. Everything should feel like sitting around a fire in the dark woods — warm center, cold periphery.

## Typography Recommendations

- **Display:** Oswald, Bebas Neue (tall condensed — like carved trail signs).
- **Body:** Inter, DM Sans (clean readable sans).
- **Labels:** `font-bold uppercase tracking-widest text-sm text-[#ff8c30]`.

## Reusable Tailwind Tokens

- Wilderness bg: `bg-gradient-to-b from-[#0a0a14] via-[#0a0f08] to-[#0a0a14]` with star + firelight overlays.
- Firelit panel: `bg-gradient-to-br from-[#1a1208] to-[#0a0804] border border-[#3a2a10] shadow-[inset_0_-10px_30px_rgba(255,140,30,0.06)]`.
- Campfire button: `bg-gradient-to-b from-[#ff8c30] to-[#c4501a] border-2 border-[#8a2a04] shadow-[0_0_10px_rgba(255,140,48,0.2)]`.
- Log divider: `bg-gradient-to-b from-[#6a4a2a] to-[#4a3018] rounded-full`.
- Pine silhouette: SVG dark tree line.

## Quality Checklist

- Background is dark wilderness (night sky + dark forest).
- Firelight glow emanates from below (radial gradient at bottom center).
- At least one firelit panel with warm inset glow shadow.
- Campfire orange button present.
- Log-textured dividers or surfaces.
- Pine tree silhouette decoration.
- Star field visible in the background.
- Flame flicker animation (subtle, variable opacity).
- The aesthetic reads as campfire / outdoor adventure / wilderness gathering.
- The cold-dark-periphery vs warm-fire-center duality is expressed.

## Anti-Patterns

- Bright daytime backgrounds (campfire is NIGHT).
- Missing firelight glow from below (the upward fire glow is essential).
- Cold blue-dominant palette (campfire is warm orange in cold darkness).
- Missing the pine tree/wilderness references (the setting is the forest).
- Missing the log texture dividers (logs are the campfire furniture).
- Modern indoor aesthetic (campfire is OUTDOOR and primitive).
- Missing the starry night sky (campfire stories happen under stars).
- Flat unanimated fire (firelight should flicker subtly).
- Sans-serif without warmth (campfire labels should glow warm orange).
- Dense urban design (campfire is remote wilderness).

## Accessibility Considerations

- Dark backgrounds with warm orange/white text provide excellent contrast (WCAG AAA).
- Focus states: `focus:ring-2 focus:ring-[#ff8c30]/50` (fire orange ring on dark).
- Flame flicker animation must respect `prefers-reduced-motion`.
- Pine and star SVGs must be `aria-hidden="true"` when decorative.
- The dark aesthetic is low eye-strain for extended viewing.
- Touch targets must be adequate despite wilderness border styling.
