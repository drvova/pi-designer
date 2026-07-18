---
name: rainforest-canopy-ui
description: Build rainforest canopy UI components (emerald canopy, vine tangle, bird of paradise, mist layer, tree frog, filtered light, liana bridge) with dense layered greens, tropical humidity, and the overwhelming biodiversity of the rainforest. Trigger this skill when the user asks for rainforest design, canopy UI, jungle aesthetic, tropical forest interface, emerald leaf components, mist layer design, bird of paradise accent, tree frog elements, or biodiversity visualization interfaces.
---

# Rainforest Canopy UI

Use this skill to design and implement lush, layered interfaces inspired by tropical rainforest canopies: overlapping emerald leaf shapes, curving vine tangle accents, vivid bird of paradise flower highlights, translucent mist layers, bright tree frog accents, diagonal filtered light beams, and the hanging liana bridge patterns that connect the canopy. The rainforest is dense, humid, alive, and overwhelmingly green with bursts of tropical color.

## Non-Negotiable Foundations

- Rainforest Canopy UI is about LAYERS within DENSITY: multiple overlapping green shapes create the canopy, mist drifts between layers, light filters through gaps, and vivid creatures punctuate the green.
- The signature visual is the emerald canopy layer: multiple overlapping leaf-like shapes in varying greens that create depth and density.
- Mist layers provide atmospheric depth: horizontal translucent white bands that drift between canopy layers, suggesting humidity and distance.
- Filtered light beams cut diagonally through the canopy: pale yellow-white shafts that create dappled illumination patterns.
- Colors are dominated by greens (emerald, leaf dark, leaf light, vine green) with tropical accent bursts: bird of paradise orange and blue, tree frog bright green.
- Vine tangle elements add organic curving lines: the liana bridges, hanging vines, and curving plant tendrils that connect everything.
- The aesthetic communicates overwhelming biodiversity, humid density, the layered complexity of a living ecosystem, and the beauty of filtered light in deep forest.

## Core Material Recipes

### 1) Emerald Canopy Layer

Overlapping leaf shapes creating the dense canopy surface.

- Multi-layer background: `bg-[linear-gradient(160deg,#1a6a2a_0%,#0a3a0a_40%,#1a5a2a_70%,#0a3a0a_100%)]`.
- Leaf texture overlay: `bg-[radial-gradient(ellipse_at_30%_20%,#4a9a3a_0%,transparent_50%),radial-gradient(ellipse_at_70%_60%,#3a8a2a_0%,transparent_40%),radial-gradient(ellipse_at_50%_90%,#2a7a1a_0%,transparent_45%)]`.
- Full canopy surface: `bg-[#0a3a0a] bg-[radial-gradient(ellipse_at_30%_20%,rgba(74,154,58,0.3)_0%,transparent_50%),radial-gradient(ellipse_at_70%_60%,rgba(58,138,42,0.25)_0%,transparent_40%),radial-gradient(ellipse_at_50%_90%,rgba(42,122,26,0.2)_0%,transparent_45%)]`.
- Animated canopy sway: `animate-[canopy-sway_8s_ease-in-out_infinite_alternate]`.

```css
@keyframes canopy-sway {
  0% { background-position: 0% 0%, 100% 100%, 50% 50%; }
  50% { background-position: 2% 1%, 98% 99%, 49% 51%; }
  100% { background-position: 0% 0%, 100% 100%, 50% 50%; }
}
```

### 2) Vine Tangle Accent

Curving green lines representing vines, lianas, and plant tendrils.

- SVG vine path: `<svg viewBox="0 0 200 600"><path d="M20,0 Q80,100 30,200 Q-10,300 60,400 Q90,500 40,600" stroke="#3a7a2a" stroke-width="3" fill="none" opacity="0.6"/></svg>`.
- Tailwind vine border: `border-l-2 border-[#3a7a2a]/60 rounded-full`.
- Vine container accent: `before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-[#3a7a2a] before:via-[#4a9a3a] before:to-[#3a7a2a] before:rounded-full`.
- Tangle texture: `bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M10,0 Q30,15 10,30 Q-10,45 10,60' stroke='%233a7a2a' stroke-width='1.5' fill='none' opacity='0.15'/%3E%3Cpath d='M35,0 Q55,20 35,40 Q15,60 35,80' stroke='%234a9a3a' stroke-width='1' fill='none' opacity='0.1'/%3E%3C/svg%3E")]`.

### 3) Bird of Paradise Flower

The vivid orange-blue tropical flower as a decorative accent.

- Flower SVG:
```html
<svg viewBox="0 0 60 60" class="w-12 h-12">
  <path d="M30,55 Q25,35 15,15 Q20,10 30,5 Q40,10 45,15 Q35,35 30,55Z" fill="#e07020" opacity="0.9"/>
  <path d="M30,55 Q35,40 50,25 Q48,18 40,12 Q35,20 30,55Z" fill="#2a4a8a" opacity="0.8"/>
  <path d="M30,55 Q20,38 8,28 Q12,20 20,15 Q25,25 30,55Z" fill="#e07020" opacity="0.7"/>
  <path d="M30,55 Q32,42 42,30 Q38,22 32,18 Q30,30 30,55Z" fill="#2a4a8a" opacity="0.6"/>
  <circle cx="30" cy="55" r="3" fill="#1a4a1a"/>
</svg>
```
- Orange accent: `text-[#e07020]` or `bg-[#e07020]`.
- Blue accent: `text-[#2a4a8a]` or `bg-[#2a4a8a]`.
- Flower decoration: place SVG at section corners or between cards.
- Combined gradient for flower-shaped badge: `bg-[linear-gradient(135deg,#e07020,#2a4a8a)] rounded-full p-2`.

### 4) Mist Layer

Horizontal translucent white bands drifting between canopy layers.

- Mist band: `bg-gradient-to-r from-white/0 via-white/8 to-white/0 h-16 backdrop-blur-[2px]`.
- Layered mist: stack multiple mist bands with varying opacity and height.
- Full mist overlay: `absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none`.
- Dense mist: `bg-white/10 backdrop-blur-sm`.
- Drifting mist animation: `animate-[mist-drift_20s_ease-in-out_infinite_alternate]`.

```css
@keyframes mist-drift {
  0% { transform: translateX(-5%) scaleX(1.05); opacity: 0.4; }
  50% { transform: translateX(3%) scaleX(0.98); opacity: 0.7; }
  100% { transform: translateX(-5%) scaleX(1.05); opacity: 0.4; }
}
.mist-layer {
  position: absolute;
  width: 110%;
  left: -5%;
  height: 40px;
  background: linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent);
  backdrop-filter: blur(2px);
  animation: mist-drift 20s ease-in-out infinite alternate;
  pointer-events: none;
}
```

### 5) Tree Frog Accent

Small bright green frog as a playful accent element.

- Frog SVG:
```html
<svg viewBox="0 0 40 30" class="w-10 h-7.5">
  <ellipse cx="20" cy="18" rx="14" ry="10" fill="#40e040"/>
  <circle cx="12" cy="10" r="5" fill="#40e040"/>
  <circle cx="28" cy="10" r="5" fill="#40e040"/>
  <circle cx="12" cy="9" r="3" fill="#0a3a0a"/>
  <circle cx="28" cy="9" r="3" fill="#0a3a0a"/>
  <ellipse cx="20" cy="20" rx="6" ry="2" fill="#30c030"/>
  <path d="M6,22 Q2,28 8,26" stroke="#40e040" stroke-width="2" fill="none"/>
  <path d="M34,22 Q38,28 32,26" stroke="#40e040" stroke-width="2" fill="none"/>
</svg>
```
- Frog green: `text-[#40e040]` or `bg-[#40e040]`.
- Frog glow: `shadow-[0_0_15px_rgba(64,224,64,0.3)]`.
- Placement: corner of cards, beside notification badges, as a floating accent.
- Subtle variant: `opacity-70` with `hover:opacity-100 hover:shadow-[0_0_20px_rgba(64,224,64,0.4)] transition-all`.

### 6) Filtered Light Beams

Diagonal pale shafts of light cutting through the canopy.

- Light beam: `bg-[linear-gradient(135deg,rgba(255,255,220,0.12)_0%,transparent_60%)]`.
- Multiple beams: `bg-[linear-gradient(135deg,rgba(255,255,220,0.1)_0%,transparent_40%),linear-gradient(150deg,rgba(255,255,200,0.08)_0%,transparent_50%)]`.
- Beam container: `absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,220,0.12)_0%,transparent_60%)] pointer-events-none`.
- Animated shimmer: `animate-[light-shimmer_6s_ease-in-out_infinite]`.

```css
@keyframes light-shimmer {
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
}
```

- Dappled light spots: `bg-[radial-gradient(circle_80px_at_30%_40%,rgba(255,255,200,0.08)_0%,transparent_100%),radial-gradient(circle_60px_at_70%_60%,rgba(255,255,220,0.06)_0%,transparent_100%)]`.

### 7) Liana Bridge Accent

Hanging vine rope connecting elements across the canopy.

- Liana rope SVG: `<svg viewBox="0 0 8 100"><path d="M4,0 Q0,25 4,50 Q8,75 4,100" stroke="#3a7a2a" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>`.
- Horizontal liana: `h-px bg-[linear-gradient(to_right,transparent,#3a7a2a,#4a9a3a,#3a7a2a,transparent)]`.
- Hanging liana between cards: `absolute -top-8 left-1/2 w-px h-8 bg-gradient-to-b from-transparent to-[#3a7a2a]`.
- Liana connector for timeline/step layouts: `before:absolute before:-top-10 before:left-1/2 before:-translate-x-1/2 before:w-px before:h-10 before:bg-gradient-to-b before:from-[#3a7a2a] before:to-transparent`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Canopy Emerald | `#1a6a2a` | Primary canopy surface, dominant green |
| Leaf Dark Green | `#0a3a0a` | Deep shadow areas, darkest green |
| Leaf Light Green | `#4a9a3a` | Highlighted leaves, bright canopy edges |
| Vine Green | `#3a7a2a` | Vine tangles, liana bridges, connecting elements |
| Mist White-Translucent | `rgba(255,255,255,0.05-0.12)` | Atmospheric mist bands, humidity |
| Bird of Paradise Orange | `#e07020` | Tropical flower accent, warm highlights |
| Bird of Paradise Blue | `#2a4a8a` | Tropical flower accent, cool highlights |
| Tree Frog Bright | `#40e040` | Playful accent, notifications, active states |

Rules: Greens dominate 85% of surfaces — canopy emerald is primary, leaf dark provides shadows, leaf light provides highlights, vine green connects elements. Bird of paradise orange and blue are rare accent colors (like seeing a flower through dense canopy). Tree frog bright green marks interactive highlights and playful moments. Mist white-translucent creates atmospheric depth. The palette should feel overwhelmingly green with occasional vivid tropical color bursts.

## Typography Recommendations

- **Display:** Playfair Display, Libre Baskerville, Fraunces (organic serif with botanical elegance).
- **Body:** Inter, DM Sans, Source Sans 3 (clean readable sans for dense content).
- **Data:** JetBrains Mono (species counts, biodiversity metrics, measurements).
- **Labels:** `font-semibold uppercase tracking-wider text-xs text-[#4a9a3a]` for section headers.
- **Bird of paradise accents:** `text-[#e07020] font-bold` for warm highlights.
- **Frog accents:** `text-[#40e040]` for playful interactive labels.
- **Muted canopy text:** `text-white/60` for secondary content over dark green.
- Line height: 1.7 for body text (generous spacing for readability in dense layouts).
- Letter spacing: `tracking-wide` for headings (organic, breathing feel).

## Component Architecture Pattern

### Card: Canopy Card
```
<div class="bg-[#0a3a0a] bg-[radial-gradient(ellipse_at_30%_20%,rgba(74,154,58,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_70%_80%,rgba(58,138,42,0.1)_0%,transparent_40%)] border border-[#3a7a2a]/30 rounded-2xl p-6 relative overflow-hidden">
  <div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,220,0.06)_0%,transparent_50%)] pointer-events-none" />
  <!-- filtered light beam overlay -->
</div>
```

### Card: Mist Card
```
<div class="bg-[#0a3a0a]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative overflow-hidden">
  <div class="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
  <!-- content with mist atmosphere -->
</div>
```

### Card: Species Card (with bird of paradise accent)
```
<div class="bg-[#0a3a0a] border border-[#3a7a2a]/30 rounded-2xl p-6 relative overflow-hidden group hover:border-[#e07020]/40 transition-all duration-300">
  <svg class="absolute -top-2 -right-2 w-12 h-12 opacity-20 group-hover:opacity-40 transition-opacity"><!-- bird of paradise --></svg>
  <!-- content with flower accent that intensifies on hover -->
</div>
```

### Button: Canopy Button
```
<button class="bg-gradient-to-b from-[#1a6a2a] to-[#0a3a0a] text-white font-semibold px-6 py-3 rounded-xl border border-[#3a7a2a]/50 shadow-[0_4px_15px_rgba(26,106,42,0.3)] hover:shadow-[0_6px_25px_rgba(26,106,42,0.5),0_0_30px_rgba(74,154,58,0.2)] active:shadow-[0_2px_8px_rgba(26,106,42,0.3)] transition-all duration-300">
```

### Button: Frog Accent Button
```
<button class="bg-[#40e040]/10 text-[#40e040] border border-[#40e040]/30 rounded-full px-4 py-2 text-sm font-semibold hover:bg-[#40e040]/20 hover:shadow-[0_0_20px_rgba(64,224,64,0.2)] transition-all duration-300">
```

### Button: Bird of Paradise Button
```
<button class="bg-gradient-to-r from-[#e07020] to-[#2a4a8a] text-white font-bold px-6 py-3 rounded-xl shadow-[0_4px_15px_rgba(224,112,32,0.3)] hover:shadow-[0_6px_25px_rgba(224,112,32,0.4)] transition-all duration-300">
```

### Divider: Vine Divider
```
<div class="relative h-8 flex items-center">
  <div class="flex-1 h-px bg-gradient-to-r from-transparent via-[#3a7a2a]/40 to-transparent" />
  <svg class="mx-2 w-4 h-4 text-[#3a7a2a]" viewBox="0 0 16 16"><path d="M8,2 Q12,6 8,10 Q4,14 8,14" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
  <div class="flex-1 h-px bg-gradient-to-r from-transparent via-[#3a7a2a]/40 to-transparent" />
</div>
```

### Divider: Liana Bridge Divider
```
<div class="relative py-4">
  <div class="h-px bg-gradient-to-r from-transparent via-[#3a7a2a] to-transparent" />
  <div class="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-[#3a7a2a]/30 to-transparent" />
  <div class="absolute right-1/3 top-0 w-px h-full bg-gradient-to-b from-[#3a7a2a]/20 to-transparent" />
</div>
```

## Interaction Rules

- Default: deep canopy green, mist layers present, filtered light subtle.
- Hover: leaf highlights brighten, flower accents appear.
  - `hover:border-[#3a7a2a]/50 hover:shadow-[0_6px_25px_rgba(26,106,42,0.4)] transition-all duration-300`.
- Hover on flower-accented elements: bird of paradise orange becomes visible.
  - `group-hover:opacity-100` on flower SVG (starts at `opacity-20`).
- Active/Pressed: glow reduces (pressed into canopy).
  - `active:shadow-[0_2px_8px_rgba(26,106,42,0.3)]`.
- Focus: emerald ring.
  - `focus:outline-none focus:ring-2 focus:ring-[#4a9a3a]/50 focus:ring-offset-2 focus:ring-offset-[#0a3a0a]`.
- Transitions: `transition-all duration-300 ease-out` (organic, growing motion).
- Frog accent: bounces slightly on hover (`hover:translate-y-[-2px] transition-transform`).
- Mist layers: slow drift animation (20s cycles, ease-in-out).
- Canopy sway: gentle oscillation on background patterns (8s cycles).
- Light beams: subtle shimmer opacity pulse (6s cycles).

## Reusable Tailwind Tokens

- Canopy surface: `bg-[#0a3a0a] bg-[radial-gradient(ellipse_at_30%_20%,rgba(74,154,58,0.15)_0%,transparent_50%)]`.
- Leaf texture: `bg-[radial-gradient(ellipse_at_30%_20%,rgba(74,154,58,0.3)_0%,transparent_50%),radial-gradient(ellipse_at_70%_60%,rgba(58,138,42,0.25)_0%,transparent_40%)]`.
- Mist band: `bg-gradient-to-r from-white/0 via-white/8 to-white/0 backdrop-blur-[2px]`.
- Mist atmosphere: `bg-white/5 backdrop-blur-sm`.
- Filtered light: `bg-[linear-gradient(135deg,rgba(255,255,220,0.12)_0%,transparent_60%)]`.
- Vine green border: `border-[#3a7a2a]/30`.
- Vine gradient line: `bg-gradient-to-r from-[#3a7a2a] via-[#4a9a3a] to-[#3a7a2a]`.
- Bird of paradise orange: `text-[#e07020]` or `bg-[#e07020]`.
- Bird of paradise blue: `text-[#2a4a8a]` or `bg-[#2a4a8a]`.
- Tree frog glow: `shadow-[0_0_15px_rgba(64,224,64,0.3)]`.
- Leaf dark surface: `bg-[#0a3a0a]`.
- Canopy emerald surface: `bg-[#1a6a2a]`.
- Leaf light accent: `text-[#4a9a3a]`.

## Quality Checklist

- Background is deep canopy green `#0a3a0a` with leaf texture gradients (not flat solid green).
- At least one mist layer present (translucent white band for atmospheric depth).
- Filtered light beams visible (diagonal pale shafts through canopy).
- Vine tangle or liana bridge elements connect content sections.
- Bird of paradise flower accent appears on at least one element (orange-blue flower).
- Tree frog accent present for playful interactive moments.
- Multiple overlapping green shapes create canopy density (not a single flat green).
- Color palette is dominated by greens (85%+) with tropical accent bursts.
- Hover states reveal flower accents and brighten leaf highlights.
- Mist animation is slow and organic (20s+ cycles).
- Typography uses organic serif for display, clean sans for body.
- Liana bridge or vine divider separates major content sections.
- The aesthetic reads as a living rainforest canopy: dense, layered, humid, alive.
- Green surfaces have varied depth (dark shadows, emerald midtones, light highlights).
- Tropical accents (bird of paradise, frog) appear sparingly for maximum impact.

## Anti-Patterns

- Light or white backgrounds (rainforest canopy is deep green shade).
- Missing mist layers (the atmospheric humidity is essential to the feel).
- Flat single green without layered leaf shapes (canopy needs depth and density).
- Overuse of bird of paradise colors (orange and blue are rare accents, not dominant).
- Missing vine or liana elements (organic connecting lines are signature).
- Geometric or hard-edged patterns (rainforest is organic, curving, natural).
- Missing filtered light beams (the dappled light defines the canopy atmosphere).
- Pure black backgrounds (use deep leaf dark green `#0a3a0a` instead).
- Sans-serif only display typography (rainforest deserves organic serif display).
- Bright neon colors anywhere except tree frog accent (palette is natural greens + specific tropical accents).
- Uniform flat green without texture or gradient variation.
- Missing tree frog element (adds the essential playful living-creature accent).
- Fast or snappy transitions (rainforest is slow, organic, growing — transitions 300ms+).
- Cool blue or purple tones as primary colors (rainforest is warm green, not cool).
- Clean minimalist aesthetic without biological density (rainforest is complex and layered).
- Missing humidity atmosphere (mist, haze, moisture in the air).

## Accessibility Considerations

- Deep green backgrounds with white or light text: `white` on `#0a3a0a` passes WCAG AAA for all text sizes.
- `#4a9a3a` on `#0a3a0a` passes WCAG AA for large text (18px+) — avoid for small body text without additional contrast.
- Bird of paradise orange `#e07020` on `#0a3a0a` passes WCAG AA for normal text and AAA for large text.
- Bird of paradise blue `#2a4a8a` on `#0a3a0a` does NOT pass WCAG AA — use `#5a7ab0` or add white text.
- Tree frog bright `#40e040` on `#0a3a0a` passes WCAG AA for large text — use `#80ff80` or add dark background for small text.
- Focus states: `focus:ring-2 focus:ring-[#4a9a3a]/50 focus:ring-offset-2 focus:ring-offset-[#0a3a0a]` (leaf green ring on deep green offset).
- Mist layer animations must respect `prefers-reduced-motion: reduce` — reduce to static translucent band.
- Filtered light beam animations must respect `prefers-reduced-motion` — disable shimmer pulse.
- Canopy sway animation must respect `prefers-reduced-motion` — disable background oscillation.
- Vine/liana decorative elements must be `aria-hidden="true"` if purely visual.
- Bird of paradise SVGs must have `role="img"` and `aria-label="Bird of paradise flower accent"`.
- Tree frog SVGs must have `role="img"` and `aria-label="Tree frog accent"` or be marked decorative.
- Mist layers must not reduce text contrast below 4.5:1 WCAG AA threshold.
- Dense layered greens must maintain sufficient text contrast — add dark scrim behind text: `bg-black/40` over canopy gradients.
- Touch targets: minimum 44x44px despite organic rounded styling.
- Filtered light overlay must not impair text readability at any viewport size.
- Canopy card backgrounds with leaf gradients must support readable text overlay — verify contrast at all gradient positions.
