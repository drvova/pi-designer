---
name: haunted-house-ui
description: Build haunted house UI components (spooky Victorian mansion, creaking door animations, cobweb corners, flickering candlelight, ghostly apparitions, graveyard gate, bats, jack-o-lanterns, creaking floorboards) with cobweb SVG decorations, flickering light effects, and the atmospheric horror of a haunted Victorian home. Trigger this skill when the user asks for haunted house design, spooky UI, horror aesthetic, Halloween interface, Victorian gothic dark, ghostly animations, or atmospheric horror components.
---

# Haunted House UI

Use this skill to design and implement haunted house interfaces: Victorian mansion silhouettes, cobweb corner overlays, flickering candlelight animations, ghostly apparition fades, creaking door transforms, jack-o-lantern accents, and the oppressive atmospheric dread of a haunted Victorian home at night.

## Non-Negotiable Foundations

- Haunted House UI is defined by ATMOSPHERE: flickering light, creeping shadows, translucent ghosts, and the sense that something is always just out of sight.
- The palette is nearly black with accents of warm candle orange, sickly green, and spectral white — never bright, never cheerful.
- Flickering animation is the heartbeat of the aesthetic: candlelight, ghostly appearances, creaking movement. Nothing is static.
- Decorative horror elements (cobwebs, bats, jack-o-lanterns) are SVG overlays and accents, never the structural framework.
- The Victorian mansion reference provides architectural structure: ornate frames, iron gates, pointed windows, dark wood.
- The aesthetic evokes DREAD: the feeling of walking through a dark hallway toward a flickering light with something behind you.

## Core Material Recipes

### 1) Haunted Mansion Card

The foundational element: dark card with cobweb corners, flickering candlelight border glow, and eerie content.

- Background: `bg-[#0a0a0a]`.
- Border: `border border-[#2a2a2a]` (subtle, like dark wood frame).
- Inner glow: `shadow-[inset_0_0_30px_rgba(255,140,48,0.05)]` (candle warmth barely reaching inside).
- Full: `bg-[#0a0a0a] border border-[#2a2a2a] shadow-[inset_0_0_30px_rgba(255,140,48,0.05)] p-6 relative overflow-hidden`.

### 2) Cobweb Corner SVG Overlay

Cobweb radiating from a corner, drawn as an SVG overlay.

```html
<svg class="absolute top-0 left-0 w-24 h-24 opacity-30" viewBox="0 0 100 100" fill="none" stroke="#6a6a6a" stroke-width="0.5">
  <line x1="0" y1="0" x2="80" y2="20"/>
  <line x1="0" y1="0" x2="60" y2="40"/>
  <line x1="0" y1="0" x2="40" y2="60"/>
  <line x1="0" y1="0" x2="20" y2="80"/>
  <path d="M 15,5 Q 25,15 5,15" opacity="0.6"/>
  <path d="M 30,10 Q 50,20 10,35" opacity="0.5"/>
  <path d="M 45,18 Q 60,35 18,50" opacity="0.4"/>
  <path d="M 55,28 Q 55,55 28,55" opacity="0.3"/>
</svg>
```

Four radial lines from the origin corner with concentric arc paths connecting them, each arc progressively more transparent. Repeat with `scaleX(-1)` for right corners.

### 3) Flickering Candle Light

Animated glow that mimics an unsteady candle flame.

```css
@keyframes candle-flicker {
  0%, 100% { opacity: 0.7; }
  10% { opacity: 0.65; }
  20% { opacity: 0.8; }
  30% { opacity: 0.6; }
  50% { opacity: 0.85; }
  60% { opacity: 0.7; }
  80% { opacity: 0.75; }
  90% { opacity: 0.6; }
}
```

Apply via: `animate-[candle-flicker_3s_ease-in-out_infinite]` on a div with `bg-[#ff8c30] blur-md opacity-70 rounded-full`.

### 4) Creaking Door Animation

Slow, unsettling rotation simulating a heavy door opening on its own.

```css
@keyframes creak-open {
  0% { transform: perspective(800px) rotateY(0deg); }
  60% { transform: perspective(800px) rotateY(35deg); }
  100% { transform: perspective(800px) rotateY(30deg); }
}
```

Apply via: `animate-[creak-open_4s_ease-out_infinite]` with `transform-origin: left center` to hinge on the left edge. The slight return at 100% creates a creaking oscillation.

### 5) Ghostly Apparition Fade

Translucent white shape that appears, drifts, and disappears.

```css
@keyframes ghost-drift {
  0% { opacity: 0; transform: translateY(10px) scale(0.95); }
  20% { opacity: 0.3; }
  50% { opacity: 0.5; transform: translateY(-5px) scale(1); }
  80% { opacity: 0.2; }
  100% { opacity: 0; transform: translateY(-20px) scale(1.05); }
}
```

Apply via: `animate-[ghost-drift_8s_ease-in-out_infinite]` on an element with `bg-white/20 blur-sm rounded-full`.

### 6) Jack-o-Lantern SVG Accent

Carved pumpkin with glowing eyes and mouth.

```html
<svg viewBox="0 0 80 80" class="w-16 h-16">
  <ellipse cx="40" cy="48" rx="30" ry="28" fill="#e07020"/>
  <polygon points="28,40 34,32 40,40" fill="#ff8c30" opacity="0.9"/>
  <polygon points="44,40 50,32 56,40" fill="#ff8c30" opacity="0.9"/>
  <polygon points="32,55 40,65 48,55" fill="#ff8c30" opacity="0.8"/>
  <rect x="36" y="18" width="8" height="12" rx="2" fill="#2a3a1a"/>
</svg>
```

### 7) Iron Graveyard Gate Border

Vertical iron bar pattern simulating a cemetery gate.

```html
<div class="flex gap-1 h-full">
  <div class="w-1.5 bg-[#3a3a3a] rounded-t-full"></div>
  <div class="w-1.5 bg-[#3a3a3a] rounded-t-full"></div>
  <!-- repeat for width -->
</div>
```

Or as a border pattern: `border-image: repeating-linear-gradient(90deg, #3a3a3a 0px, #3a3a3a 6px, transparent 6px, transparent 12px) 10` on `border-top: 3px solid`.

### 8) Bat Swarm SVG Silhouette

Small bat silhouettes scattered across a region.

```html
<svg class="absolute top-0 right-0 w-32 h-20 opacity-40" viewBox="0 0 120 80">
  <path d="M 20,30 Q 25,20 30,25 Q 28,30 20,30 Z" fill="#0a0a0a"/>
  <path d="M 50,15 Q 55,5 60,10 Q 58,15 50,15 Z" fill="#0a0a0a"/>
  <path d="M 80,25 Q 85,15 90,20 Q 88,25 80,25 Z" fill="#0a0a0a"/>
  <path d="M 35,50 Q 40,40 45,45 Q 43,50 35,50 Z" fill="#0a0a0a"/>
  <path d="M 65,40 Q 70,30 75,35 Q 73,40 65,40 Z" fill="#0a0a0a"/>
</svg>
```

Small V-shaped or curved wing silhouettes, varying sizes and positions, dark against a slightly lighter background.

## Color Palette System

### Haunted Palette

| Color | Hex | Role |
|---|---|---|
| Haunted Dark | `#0a0a0a` | Primary background, void black |
| Mansion Dark Purple | `#1a0a2a` | Secondary background, deep shadow |
| Ghost White-Translucent | `rgba(255,255,255,0.1-0.4)` | Ghost apparitions, spectral elements |
| Candle Warm | `#ff8c30` | Flickering light, warm accents, eyes |
| Cobweb Gray | `#6a6a6a` | Cobwebs, faded text, dead elements |
| Pumpkin Orange | `#e07020` | Jack-o-lanterns, Halloween accents |
| Graveyard Green | `#2a3a1a` | Sickly moss, eerie undertones |
| Blood Red | `#8a1010` | Danger, drip accents, horror hits |

Rules: The palette is almost entirely dark — black and near-black dominate. Accent colors are warm (candle orange, pumpkin) or sickly (graveyard green, blood red). Ghost elements are translucent white, never solid. Bright colors appear only in small, flickering accents.

## Typography Recommendations

Haunted House typography is Victorian, ornate, and slightly unsettling:

- **Display headings:** Nosifer, Creepster, or UnifrakturMaguntia (horror display).
- **Victorian accent:** Playfair Display or Cormorant Garamond (ornate serif, period-appropriate).
- **Body:** Lora or EB Garamond (readable serif for longer text).
- **Drip text:** `font-family: 'Nosifer'` with `text-[#8a1010]` for blood-drip headings.
- **Labels:** `font-serif uppercase tracking-widest text-[#6a6a6a] text-xs`.
- Avoid clean sans-serif. Haunted is ornate, aged, and imperfect.

## Component Architecture Pattern

1. Near-black background (`#0a0a0a` or `#1a0a2a`).
2. Cobweb corner SVG overlays on cards and containers.
3. Flickering candle glow as ambient light source (positioned top-center or side).
4. Content framed in dark wood or iron gate borders.
5. Ghostly apparition elements drifting through the scene.
6. Jack-o-lantern and bat silhouettes as decorative accents.
7. Victorian serif typography with occasional horror display fonts.
8. Blood red or candle orange accent on interactive elements.

## Interaction Rules

- Default state: dark, atmospheric, flickering. Candle glow pulses subtly.
- Hover: flickering intensifies, ghost becomes slightly more visible.
  - `hover:shadow-[0_0_40px_rgba(255,140,48,0.15)] transition-all duration-500`.
- Active: `active:shadow-[0_0_10px_rgba(255,140,48,0.3)]` (candle gutters).
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#ff8c30] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]`.
- Transitions: `transition-all duration-500` (slow, eerie — nothing snaps, it creeps).
- Cobweb corners: static, no interaction (purely decorative atmosphere).
- Ghost apparitions: loop on their own timing, independent of user interaction.

## Reusable Tailwind Tokens

- Haunted surface: `bg-[#0a0a0a] border border-[#2a2a2a]`
- Mansion shadow: `bg-[#1a0a2a]`
- Cobweb corner: SVG with `stroke="#6a6a6a" opacity-30` radiating from corner
- Candle glow: `shadow-[0_0_20px_rgba(255,140,48,0.1)]` with flicker animation
- Ghost element: `bg-white/20 blur-sm rounded-full` with `animate-[ghost-drift_8s_ease-in-out_infinite]`
- Blood accent: `bg-[#8a1010] text-white` or `text-[#8a1010]`
- Iron gate border: `border-t-2 border-[#3a3a3a]` or repeating linear gradient border-image
- Pumpkin accent: `bg-[#e07020]` or `text-[#e07020]`
- Graveyard moss: `bg-[#2a3a1a]`
- Horror heading: `font-['Nosifer'] text-[#8a1010]` (blood drip)
- Victorian heading: `font-['Playfair_Display'] text-[#6a6a6a]`
- Flicker animation: `animate-[candle-flicker_3s_ease-in-out_infinite]`
- Creak animation: `animate-[creak-open_4s_ease-out_infinite]`
- Drip animation: `animate-[ghost-drift_8s_ease-in-out_infinite]`

## Quality Checklist (must pass)

- Background is near-black (`#0a0a0a` or `#1a0a2a`) — never white or light.
- At least one flickering animation (candle glow, ghostly fade, or creaking movement).
- Cobweb corners present on at least one card or container.
- Accent colors are limited to candle orange, pumpkin orange, blood red, and graveyard green.
- Ghost elements are translucent white, never solid.
- Typography uses serif or horror display fonts — no clean sans-serif.
- At least one SVG horror accent (cobweb, bat, jack-o-lantern, or gate).
- Dark wood or iron gate border styling on at least one element.
- The aesthetic reads as an atmospheric haunted house — not generic dark mode.
- No bright, cheerful, or saturated colors outside the accent palette.

## Anti-Patterns

- Light or white backgrounds (haunted is nearly pitch black).
- Solid bright colors as primary fills (bright appears only in small flickering accents).
- Static, non-animated elements everywhere (flickering and drifting are essential to the mood).
- Clean, modern sans-serif typography (haunted is ornate Victorian, not minimalist).
- Missing cobwebs, bats, or Halloween decor (the horror vocabulary must be present).
- Smooth, polished UI chrome (haunted is aged, rough, imperfect).
- Fast, snappy animations (horror moves slowly — creaking, fading, drifting).
- Symmetric, perfectly aligned layouts (horror feels slightly off-kilter and unsettling).
- Red as a primary background color (red is a rare accent — blood drips, not blood floods).
- Missing the atmospheric dread (dark mode without flickering lights is just dark mode, not haunted).

## Accessibility Considerations

- Near-black backgrounds with light text (`#6a6a6a` or lighter) provide adequate contrast.
- Ghost white text on dark backgrounds must be verified for WCAG AA — use `rgba(255,255,255,0.7)` minimum for readable text.
- Flickering animations must respect `prefers-reduced-motion` — replace with static subtle glow.
- Cobweb and bat SVGs must be `aria-hidden="true"` — decorative only.
- Ghost apparitions must be `aria-hidden="true"` — they carry no information.
- Focus states: `focus:ring-2 focus:ring-[#ff8c30] focus:ring-offset-[#0a0a0a]` (candle-orange ring visible on dark).
- Flickering candle effects must not affect readability of nearby text — test with animation running.
- Creaking door animation must respect `prefers-reduced-motion`.
- Touch targets must be adequate in dark UI (`px-8 py-3` on buttons provides sufficient size against dark backgrounds).
- Blood red (`#8a1010`) as text on black (`#0a0a0a`) may fail contrast — use for decorative elements, not critical text.
