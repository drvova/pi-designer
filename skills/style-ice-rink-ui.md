---
name: ice-rink-ui
description: Build ice rink UI components (frozen surface texture, skate blade marks, frost patterns, cold breath vapor, ice sculpture decorations, Zamboni tracks, winter festival atmosphere, frozen pond edges) with crystalline ice textures, frost overlays, and the crisp elegance of ice skating. Trigger this skill when the user asks for ice rink design, frost UI, winter skating interface, frozen surface effect, ice sculpture display, winter festival UI, or cold crystalline interfaces.
---

# Ice Rink UI

Use this skill to design and implement crisp, crystalline interfaces inspired by ice skating rinks: frozen surface textures with crack lines, animated frost patterns at borders, cold breath vapor rising from surfaces, skate blade marks across ice, ice sculpture accents, and the clean, sharp elegance of a winter skating experience.

## Core Material Recipes

### 1) Ice Surface Panel

The signature frozen ice surface with subtle cracks and scratch marks.

- `bg-[linear-gradient(135deg,#e0f0ff_0%,#f0f8ff_30%,#d8ecf8_60%,#e8f4fc_100%)] p-6 relative overflow-hidden rounded-xl shadow-[inset_0_0_40px_rgba(176,212,240,0.3)]`.
- Crack lines: `before:absolute before:inset-0 before:bg-[linear-gradient(47deg,transparent_48%,rgba(160,200,232,0.3)_49%,rgba(160,200,232,0.3)_51%,transparent_52%),linear-gradient(133deg,transparent_45%,rgba(160,200,232,0.2)_46%,rgba(160,200,232,0.2)_54%,transparent_55%)] before:pointer-events-none`.
- Scratch marks: `after:absolute after:inset-0 after:bg-[repeating-linear-gradient(72deg,transparent_0px,transparent_40px,rgba(160,200,232,0.15)_40px,rgba(160,200,232,0.15)_41px)] after:pointer-events-none`.

### 2) Frost Border Pattern

Animated frost crystal growth at container edges.

- Container: `relative p-8 border-2 border-[#b0d4f0] rounded-lg overflow-hidden`.
- Frost top: `absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#f8fcff]/80 via-[#e0f0ff]/40 to-transparent pointer-events-none`.
- Frost crystals: `absolute -top-1 left-0 right-0 h-8 bg-[radial-gradient(ellipse_at_20%_100%,rgba(248,252,255,0.9)_0%,transparent_50%),radial-gradient(ellipse_at_50%_100%,rgba(248,252,255,0.7)_0%,transparent_40%),radial-gradient(ellipse_at_80%_100%,rgba(248,252,255,0.8)_0%,transparent_45%)] pointer-events-none`.
- Growth animation: `animate-[frostGrow_3s_ease-out_forwards]` with keyframe scaling frost opacity from 0 to full.

### 3) Cold Breath Vapor

Rising translucent puffs simulating visible breath in cold air.

- Vapor container: `relative h-24 w-full overflow-hidden pointer-events-none`.
- Single puff: `absolute bottom-0 rounded-full bg-white/20 blur-md animate-[rise_3s_ease-out_infinite]`.
- Keyframe: `@keyframes rise { 0% { opacity: 0.3; transform: translateY(0) scale(0.5); } 50% { opacity: 0.15; transform: translateY(-30px) scale(1); } 100% { opacity: 0; transform: translateY(-60px) scale(1.5); } }`.
- Multiple puffs: 3-4 puffs with staggered `animation-delay` (0s, 0.8s, 1.6s) and varied `left` positions.

### 4) Skate Blade Marks

Thin curved lines etched across the ice surface.

- Mark container: `absolute inset-0 pointer-events-none`.
- Single mark: `absolute h-px bg-gradient-to-r from-transparent via-[#a0c8e8]/40 to-transparent rotate-[15deg]`.
- Multiple marks: 5-7 marks at varied rotations (5deg to 45deg), lengths (100px to 300px), and vertical positions for organic scattering.
- Curve variant: `clip-path` with slight arc, or `border-b border-[#a0c8e8]/30 rounded-full` for subtle curvature.

### 5) Ice Sculpture Accent

Crystal-clear geometric shapes simulating carved ice decorations.

- Sculpture base: `bg-[linear-gradient(180deg,rgba(248,252,255,0.6)_0%,rgba(224,240,255,0.4)_50%,rgba(176,212,240,0.3)_100%)] border border-[#b0d4f0]/50 shadow-[0_4px_20px_rgba(176,212,240,0.2),inset_0_0_20px_rgba(248,252,255,0.3)]`.
- Inner light refraction: `before:absolute before:inset-1 before:bg-[linear-gradient(135deg,rgba(255,255,255,0.4)_0%,transparent_50%)] before:rounded-inherit`.
- Geometric shapes: use `clip-path` for faceted diamond, hexagon, or prism silhouettes.

### 6) Frozen Edge Border

Irregular ice formation border simulating a frozen pond edge.

- `relative border-0 shadow-[inset_0_0_20px_rgba(176,212,240,0.3)]`.
- Irregular edge: `clip-path:polygon(0% 2%,3% 0%,8% 3%,15% 1%,22% 4%,30% 0%,38% 2%,45% 0%,52% 3%,60% 1%,68% 4%,75% 0%,82% 2%,90% 0%,95% 3%,100% 1%,100% 98%,97% 100%,92% 97%,85% 100%,78% 96%,70% 100%,62% 98%,55% 100%,48% 97%,40% 100%,32% 96%,25% 100%,18% 98%,10% 100%,5% 97%,0% 100%)`.
- Frost fringe: `before:absolute before:-top-1 before:left-0 before:right-0 before:h-3 before:bg-[#f8fcff] before:clip-path:polygon(0% 100%,5% 0%,12% 80%,20% 0%,28% 70%,35% 0%,42% 60%,50% 0%,58% 70%,65% 0%,72% 80%,80% 0%,88% 60%,95% 0%,100% 100%)] before:pointer-events-none`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Ice Surface | `#e0f0ff` | Primary background, rink surface |
| Ice Crack | `#a0c8e8` | Crack lines, scratch marks, borders |
| Frost White | `#f8fcff` | Frost edges, breath vapor, highlights |
| Cold Blue | `#b0d4f0` | Secondary borders, cold accents |
| Breath Vapor | `rgba(255,255,255,0.15-0.3)` | Translucent breath puffs |
| Zamboni Red | `#c41e1e` | Accent, warnings, Zamboni track marks |
| Skate Silver | `#c0c8d0` | Blade marks, metallic accents |

Rules: The palette is intentionally restrained and cool-toned. Whites and light blues dominate. Red appears only as a sharp accent (Zamboni, emergency, emphasis). Everything should feel cold, clean, and crystalline. Avoid warm tones except Zamboni red.

## Typography Recommendations

- **Primary:** Inter (clean, crisp sans-serif for readability against light backgrounds).
- **Alternative:** IBM Plex Sans (geometric clarity for scoreboard/data displays).
- **Display/Scoreboard:** Orbitron (futuristic geometric for high-score and timer displays).
- **Labels:** `font-[Inter] text-xs uppercase tracking-widest text-[#a0c8e8]`.
- Typography should feel clean, precise, and slightly futuristic -- like etched glass.
- Headings use subtle cold glow: `[text-shadow:0_0_8px_rgba(176,212,240,0.4)]`.

## Component Architecture Pattern

Follow ELM architecture for all ice rink TUI components.

- **Model:** Ice surface state (crack pattern, frost coverage), vapor particles (position, opacity, scale), animation frame counter.
- **Messages:** `VaporTick`, `FrostGrow`, `SkateMarkAdd`, `SculptureRotate`, `SurfaceCrack`.
- **View:** Layered rendering -- ice surface base, then crack/scratch overlays, then content, then frost edges and vapor as top overlays.
- **Update:** Pure state transitions for particle animation and frost growth timing.

## Interaction Rules

- Frost growth: edges animate from transparent to opaque over 1.5s on mount or scroll-into-view.
- Breath vapor: continuous loop with staggered start, 3s cycle, fade-in-and-rise pattern.
- Skate marks: appear on click/tap at cursor position with a 0.3s fade-in.
- Ice surface hover: subtle shimmer via `background-position` shift over 2s.
- Sculpture rotation: slow 20s continuous `rotate` for ambient movement.
- Frozen edge: static but re-renders on window resize for irregular border fidelity.
- All transitions use `ease-out` for natural deceleration.

## Reusable Tailwind Tokens

- Ice surface: `bg-[linear-gradient(135deg,#e0f0ff_0%,#f0f8ff_30%,#d8ecf8_60%,#e8f4fc_100%)] shadow-[inset_0_0_40px_rgba(176,212,240,0.3)]`.
- Frost border: `border-2 border-[#b0d4f0] shadow-[inset_0_0_20px_rgba(176,212,240,0.2)]`.
- Cold accent text: `text-[#a0c8e8] [text-shadow:0_0_8px_rgba(176,212,240,0.4)]`.
- Ice button: `bg-[#e0f0ff] text-[#a0c8e8] border border-[#b0d4f0] shadow-[0_2px_8px_rgba(176,212,240,0.2)] hover:shadow-[0_4px_16px_rgba(176,212,240,0.3)] transition-all`.
- Zamboni accent: `bg-[#c41e1e] text-white border-none shadow-[0_0_8px_rgba(196,30,30,0.3)]`.
- Breath puff: `rounded-full bg-white/20 blur-md animate-[rise_3s_ease-out_infinite]`.
- Skate mark: `h-px bg-gradient-to-r from-transparent via-[#a0c8e8]/40 to-transparent`.

## Quality Checklist

- Ice surface texture with crack lines and scratch marks present.
- Frost pattern growth at container edges (at least top or all edges).
- Cold breath vapor animation with at least 3 staggered puffs.
- Skate blade marks scattered across at least one surface.
- Ice sculpture or crystal-clear geometric accent element present.
- Frozen irregular edge border on at least one container.
- Cool-toned palette dominated by whites and light blues.
- Zamboni red used sparingly as sharp accent only.
- Clean sans-serif typography (Inter or equivalent) throughout.
- The aesthetic reads as a frozen ice rink or winter skating experience.
- Everything feels cold, crisp, crystalline, and elegantly frozen.

## Anti-Patterns

- Warm color dominance (the palette is cold -- whites and blues dominate).
- Missing frost effects (frost borders are the signature cold indicator).
- Static breath vapor (vapor must animate to convey cold air).
- Dark backgrounds (ice rinks are bright, reflective, and well-lit).
- Heavy or cluttered design (ice is clean, minimal, and uncluttered).
- Rounded soft shapes everywhere (ice has sharp, crystalline edges mixed with curves).
- Missing texture (flat solid colors without ice cracks or scratches feel lifeless).
- Oversaturated neon colors (ice is subtle, pastel, and desaturated).
- Missing scratch/crack marks (these sell the used-ice-surface realism).
- Warm typography tones (no gold, amber, or warm serif fonts).

## Accessibility Considerations

- Light backgrounds with cool-toned text provide good contrast (WCAG AA minimum).
- Inter at all sizes is highly legible -- no readability concerns.
- Focus states: `focus:ring-2 focus:ring-[#a0c8e8]/60 focus:shadow-[0_0_12px_rgba(176,212,240,0.3)]` (cold blue ring).
- Breath vapor and frost animations must respect `prefers-reduced-motion` -- freeze static or remove.
- Skate marks are decorative only and must not convey information.
- Zamboni red accents naturally draw attention -- use intentionally for interactive elements.
- Touch targets must be minimum 44x44px against the light ice background.
- Low-contrast crack and scratch marks are ambient texture and carry no meaning.
