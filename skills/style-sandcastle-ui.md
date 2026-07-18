---
name: sandcastle-ui
description: Build sandcastle UI components (beach sand texture, crenellated tower shapes, seashell decorations, moat channels, bucket-molded forms, driftwood flag poles, tidal wave proximity, sunny beach atmosphere) with sandy grain textures, molded tower silhouettes, and the impermanent joy of a beach-day creation. Trigger this skill when the user asks for sandcastle design, beach castle UI, sand tower, crenellated walls, seashell decorations, moat divider, driftwood flag, bucket-molded shapes, or beach-day interfaces.
---

# Sandcastle UI

Use this skill to design and implement warm, tactile interfaces inspired by a day at the beach: sandy grain textures, crenellated tower silhouettes molded from buckets, seashell and driftwood accents, curved moat dividers, and the sunny, impermanent joy of a sandcastle at low tide.

## Non-Negotiable Foundations

- Sandcastle UI is about WARMTH and IMPERMANENCE: every surface feels hand-molded from wet sand, soft-edged, slightly irregular, basking in sunlight.
- The sand texture is the universal surface — warm `#d4b878` with a fine grain dot pattern overlay; wet sand is deeper `#c4a060`.
- Tower shapes use `clip-path` with battlements (crenellations) on top — the signature silhouette of a sandcastle.
- Seashell SVG accents (scallop, spiral, conch) decorate corners, dividers, and card edges.
- Moat channels are curved dividers — a blue water line that loops around sections.
- Driftwood flag poles are the vertical accent: weathered gray-brown `#8a7a6a` sticks topped with a small red `#c41e1e` flag.
- The background is always a beach sky gradient: pale blue to soft horizon.
- Forms are bucket-molded: generous rounded corners, slightly organic, never razor-sharp.
- Color is warm and sunlit — sand tones dominate, with shell pinks, sky blues, and a single flag-red pop.

## Core Material Recipes

### 1) Sand Texture Surface

The base surface for every panel, card, and tower.

- Container: `bg-[#d4b878] rounded-[12px]` with sand grain overlay.
- Fine grain pattern (CSS):

```css
.sand-texture {
  background-color: #d4b878;
  background-image: radial-gradient(rgba(120,90,40,0.15) 1px, transparent 1px);
  background-size: 4px 4px;
}
```

- Tailwind equivalent: `bg-[#d4b878] bg-[radial-gradient(rgba(120,90,40,0.15)_1px,transparent_1px)] bg-[size:4px_4px]`.
- Wet sand variant: swap base to `#c4a060`.
- Depth shadow: `shadow-[0_6px_16px_rgba(120,90,40,0.3)]`.

### 2) Crenellated Tower Shape

Molded tower silhouette with battlement top.

```css
.battlement-top {
  clip-path: polygon(
    0% 12%, 8% 12%, 8% 0%, 16% 0%, 16% 12%, 24% 12%,
    24% 0%, 32% 0%, 32% 12%, 40% 12%, 40% 0%, 48% 0%,
    48% 12%, 56% 12%, 56% 0%, 64% 0%, 64% 12%, 72% 12%,
    72% 0%, 80% 0%, 80% 12%, 88% 12%, 88% 0%, 96% 0%,
    96% 12%, 100% 12%, 100% 100%, 0% 100%
  );
}
```

- Tailwind: use `class="battlement-top"` (custom utility) or inline `style` clip-path.
- Tower body: `w-32 h-48 bg-[#c4a060] bg-[radial-gradient(rgba(120,90,40,0.15)_1px,transparent_1px)] bg-[size:4px_4px]`.
- Window detail: small `w-6 h-10 rounded-t-full bg-[#8a6a3a]` arch windows placed on the tower face.

### 3) Seashell SVG Accents

Decorative shell motifs for corners and dividers.

Scallop shell:

```html
<svg viewBox="0 0 60 50" class="w-8 h-7" fill="#f0d0c0">
  <path d="M30,48 Q5,35 8,10 Q15,2 30,2 Q45,2 52,10 Q55,35 30,48 Z"/>
  <path d="M30,48 L30,5" stroke="#d4a090" stroke-width="0.8" fill="none"/>
  <path d="M30,48 L18,8" stroke="#d4a090" stroke-width="0.8" fill="none"/>
  <path d="M30,48 L42,8" stroke="#d4a090" stroke-width="0.8" fill="none"/>
  <path d="M30,48 L10,15" stroke="#d4a090" stroke-width="0.8" fill="none"/>
  <path d="M30,48 L50,15" stroke="#d4ae 90" stroke-width="0.8" fill="none"/>
</svg>
```

Spiral shell:

```html
<svg viewBox="0 0 50 50" class="w-7 h-7" fill="#fff5e0">
  <path d="M25,25 m-18,0 a18,18 0 1,0 36,0 a18,18 0 1,0 -36,0" fill="none" stroke="#e0d0b0" stroke-width="3"/>
  <path d="M25,25 m-12,0 a12,12 0 1,0 24,0 a12,12 0 1,0 -24,0" fill="none" stroke="#e0d0b0" stroke-width="2"/>
  <path d="M25,25 m-6,0 a6,6 0 1,0 12,0 a6,6 0 1,0 -12,0" fill="none" stroke="#e0d0b0" stroke-width="1.5"/>
</svg>
```

Conch shell:

```html
<svg viewBox="0 0 50 50" class="w-8 h-8" fill="#f0d0c0" stroke="#d4a090" stroke-width="1">
  <path d="M10,35 Q5,20 20,10 Q35,5 42,18 Q45,30 35,38 Q20,42 10,35 Z"/>
  <path d="M15,33 Q20,22 30,20" fill="none" stroke="#d4a090" stroke-width="0.8"/>
  <path d="M18,35 Q25,26 33,24" fill="none" stroke="#d4a090" stroke-width="0.8"/>
</svg>
```

- Scallop: `fill="#f0d0c0"` (shell pink). Spiral: `fill="#fff5e0"` (shell cream). Conch: `fill="#f0d0c0"`.
- Shell accent variants: `fill="#e8c8b8"` (darker pink), `fill="#f0e0c8"` (sand-tinted cream).

### 4) Moat Divider

Curved water channel that separates sections.

```css
.moat-divider {
  height: 12px;
  background: linear-gradient(180deg, transparent 0%, #5ab5e8 40%, #87ceeb 50%, #5ab5e8 60%, transparent 100%);
  border-radius: 6px;
}
```

- Tailwind equivalent: `h-3 bg-gradient-to-b from-transparent via-[#87ceeb] to-transparent rounded-full`.
- Ripple effect: `bg-[repeating-linear-gradient(90deg,#87ceeb,#5ab5e8_4px,transparent_4px,transparent_8px)]`.
- Curve the divider with `rounded-full` or an SVG wave path for organic moat shape.

### 5) Driftwood Flag Pole

Weathered vertical accent with a small flag.

```html
<div class="relative inline-flex flex-col items-center">
  <!-- Flag -->
  <div class="absolute -top-0 left-1 w-5 h-3 bg-[#c41e1e] origin-left"
       style="clip-path: polygon(0% 0%, 100% 50%, 0% 100%)"></div>
  <!-- Pole -->
  <div class="w-1 h-16 bg-gradient-to-b from-[#9a8a7a] to-[#7a6a5a] rounded-full"></div>
</div>
```

- Pole: `bg-gradient-to-b from-[#9a8a7a] to-[#7a6a5a]` (weathered driftwood gradient).
- Flag: `bg-[#c41e1e]` triangular via `clip-path: polygon(0% 0%, 100% 50%, 0% 100%)`.
- Plant the pole at the top center of a tower: `absolute top-0 left-1/2 -translate-x-1/2`.

### 6) Bucket-Mold Rounded Form

Soft organic panels and cards.

- `bg-[#d4b878] bg-[radial-gradient(rgba(120,90,40,0.15)_1px,transparent_1px)] bg-[size:4px_4px] rounded-[18px] border border-[#b8985a] p-6 shadow-[0_6px_16px_rgba(120,90,40,0.3)]`.
- Top lip (bucket rim): add `border-t-4 border-t-[#c4a060] rounded-t-[18px]`.

### 7) Beach Sky Gradient Background

Sunny seaside backdrop for the whole interface.

- `bg-gradient-to-b from-[#87ceeb] via-[#b0e0f0] to-[#f5e6c8]`.
- The gradient runs sky blue at the top through pale blue to warm sand at the bottom horizon.
- Optional sun glow: `bg-[radial-gradient(circle_at_70%_20%,rgba(255,240,180,0.4),transparent_50%)]`.

### 8) Sandcastle Button

Molded sand button with subtle shadow.

- `bg-[#c4a060] bg-[radial-gradient(rgba(120,90,40,0.12)_1px,transparent_1px)] bg-[size:4px_4px] text-[#5a4a2a] font-bold px-6 py-2.5 rounded-[10px] border border-[#a89050] shadow-[0_4px_10px_rgba(120,90,40,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_14px_rgba(120,90,40,0.4)] transition-all`.
- Pressed state: `active:translate-y-0.5 active:shadow-inner`.

### 9) Sand Drip Detail

Organic dripped-sand edge effect.

```css
.sand-drip-edge {
  border-image-source: repeating-radial-gradient(
    circle at 50% 100%,
    #c4a060 0px, #c4a060 3px, transparent 3px, transparent 6px
  );
}
```

- Tailwind alternative: bottom border bumps via pseudo-element or small `rounded-b-full` divs spaced along the edge.

## Color Palette System

### Core Sandcastle Palette

| Color | Hex | Role |
|---|---|---|
| Dry Sand | `#d4b878` | Primary surface, panels |
| Wet Sand | `#c4a060` | Tower bodies, buttons |
| Deep Sand | `#b8985a` | Borders, shadows tint |
| Sky Blue | `#87ceeb` | Backgrounds, moat water |
| Pale Sky | `#b0e0f0` | Gradient midpoint |
| Horizon Sand | `#f5e6c8` | Bottom gradient, soft fill |
| Seashell Pink | `#f0d0c0` | Shell accents, highlights |
| Seashell Cream | `#fff5e0` | Spiral shells, soft accents |
| Driftwood Gray | `#8a7a6a` | Flag poles, text accents |
| Flag Red | `#c41e1e` | Flag triangles, alert pops |
| Sand Text | `#5a4a2a` | Body text on sand surfaces |

Rules: Sand tones are the dominant surface — warm, sunlit, grain-textured. Sky blue and shell pinks are secondary, used sparingly for contrast and decoration. Flag red is the single sharp accent — one pop per section, never decorative excess. Driftwood gray handles structural accents (poles, arches). The palette should feel like a sunny afternoon at low tide.

## Typography Recommendations

- **Display:** Fredoka, Baloo 2, or Quicksand (rounded, friendly, approachable — the bucket-and-spade feel).
- **Body:** Nunito, DM Sans (soft sans-serif for readable UI text).
- **Labels:** `font-bold rounded tracking-wide` with sand-text `#5a4a2a` color.
- Optional hand-drawn touch: Caveat or Patrick Hand for a single accent heading (like writing in wet sand).
- Typography should feel friendly, rounded, and warm — never sharp, corporate, or rigid.

## Interaction Rules

- Default: warm, tactile, sunlit — a sandcastle basking on the beach.
- Hover: gentle lift like a wave nudging the sand.
  - `hover:-translate-y-0.5 hover:shadow-[0_6px_14px_rgba(120,90,40,0.4)] transition-all duration-200`.
- Active: press into the sand — `active:translate-y-0.5 active:shadow-inner`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#87ceeb]` (water ring).
- Transitions: `transition-all duration-200` (gentle, unhurried, beach-calm).
- Optional: subtle sand-crumble exit animation on dismiss (elements sink and fade).
- Optional: gentle wave shimmer on moat dividers (animated gradient shift).

## Reusable Tailwind Tokens

- Sand surface: `bg-[#d4b878] bg-[radial-gradient(rgba(120,90,40,0.15)_1px,transparent_1px)] bg-[size:4px_4px]`.
- Wet sand: `bg-[#c4a060] bg-[radial-gradient(rgba(120,90,40,0.15)_1px,transparent_1px)] bg-[size:4px_4px]`.
- Sky background: `bg-gradient-to-b from-[#87ceeb] via-[#b0e0f0] to-[#f5e6c8]`.
- Moat divider: `h-3 bg-gradient-to-b from-transparent via-[#87ceeb] to-transparent rounded-full`.
- Driftwood pole: `bg-gradient-to-b from-[#9a8a7a] to-[#7a6a5a]`.
- Sand button: `bg-[#c4a060] text-[#5a4a2a] rounded-[10px] border border-[#a89050] shadow-[0_4px_10px_rgba(120,90,40,0.3)]`.
- Flag triangle: `bg-[#c41e1e] [clip-path:polygon(0%_0%,100%_50%,0%_100%)]`.
- Sand text: `text-[#5a4a2a]`.
- Battlement clip-path: custom `.battlement-top` utility (see Core Material Recipes).
- Shell pink accent: `fill-[#f0d0c0]`.

## Quality Checklist

- Sand texture grain pattern present on all primary surfaces (not flat color).
- At least one crenellated tower shape (battlement clip-path silhouette).
- Seashell SVG accent (scallop, spiral, or conch) decorating at least one corner or divider.
- Moat divider used to separate major sections (blue water curve).
- Driftwood flag pole with red triangular flag atop at least one tower.
- Background uses the beach sky gradient (blue to sand horizon).
- Forms are bucket-molded (rounded, organic, `rounded-[18px]`), never razor-sharp.
- Warm sand palette dominates; sky blue and shell pink are secondary.
- Flag red appears as a single sharp pop, not scattered decoratively.
- Typography is rounded and friendly (Fredoka, Baloo, Quicksand).
- The aesthetic reads as a hand-built beach sandcastle on a sunny day.
- Wet sand `#c4a060` and dry sand `#d4b878` are both present (depth/contrast).
- Shadow tints are warm `rgba(120,90,40,...)` — never cold gray shadows.

## Anti-Patterns

- Flat solid color surfaces (sandcastle surfaces need grain texture).
- Sharp 90-degree corners on everything (forms should be bucket-molded, rounded).
- Cold blue-gray shadows (shadows must be warm sand-tinted).
- Neon or high-saturation colors (the palette is sunlit and muted-warm).
- Missing sand grain pattern (flat `#d4b878` reads digital, not tactile).
- Flag red used as a dominant fill (red is one pop, not a surface color).
- Razor-sharp clip-paths on towers (battlements have slight organic irregularity).
- Corporate or rigid typography (this is friendly, rounded, beach-casual).
- Dark mode or night themes (sandcastle is daytime, sunny, bright).
- Missing beach sky gradient (a flat background kills the atmosphere).
- Driftwood poles without flags (the flag is the point of the pole).
- Seashells placed without intention (shells should decorate edges, corners, and dividers).
- Moat as a straight line (moats are curved, organic water channels).
- Over-symmetrical perfection (a sandcastle has slight hand-molded irregularity).

## Accessibility Considerations

- Sand text `#5a4a2a` on dry sand `#d4b878` passes WCAG AA (contrast ratio ~5.5:1).
- Sand text `#5a4a2a` on wet sand `#c4a060` passes AA (contrast ratio ~6:1).
- Sky blue `#87ceeb` on white passes AA for large text only — use darker text `#3a6a8a` on sky backgrounds.
- Seashell pink `#f0d0c0` and cream `#fff5e0` fail AA for text — restrict to decorative SVG fills only.
- Focus state: `focus:ring-2 focus:ring-[#87ceeb]` (water blue ring).
- Decorative shells, flag poles, and battlement shapes must be `aria-hidden="true"` when non-functional.
- Sand grain texture overlay must not reduce text legibility — keep overlay opacity subtle.
- Respect `prefers-reduced-motion`: disable wave shimmer and sand-crumble animations.
- Touch targets: molded buttons and shell links need at least 44x44px tap area.
- Color is never the sole indicator of state — combine with text labels and shapes (a crumbling edge or flag change for "warning").
