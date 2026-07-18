---
name: solarpunk-ui
description: Build solarpunk UI components (optimistic green futures, organic-solar technology, living architecture, golden-hour warmth, community gardens) with leaf-shaped curves, warm sunlight gradients, botanical motifs, and hope-driven sustainable aesthetics. Trigger this skill when the user asks for solarpunk, optimistic eco-future, green tech design, sustainable UI, or nature-integrated technology interfaces.
---

# Solarpunk UI

Use this skill to design and implement optimistic, sustainable-future interfaces where technology serves nature: organic leaf-shaped curves, golden-hour sunlight gradients, botanical motifs, warm green palettes, and the visual language of a world where solar panels are covered in moss and server farms are greenhouses.

## Non-Negotiable Foundations

- Solarpunk imagines a FUTURE where technology and nature coexist harmoniously. It is the optimistic opposite of cyberpunk.
- Shapes are organic and botanical: leaf-shaped curves (`border-radius: 70% 30% 60% 40%`), vine-like dividers, petal-shaped containers.
- The color palette reads like a garden at golden hour: warm greens, golden sunlight, cream backgrounds, earthy browns.
- Materials feel grown, not manufactured: living surfaces, mossy textures, wood grain, plant-integrated interfaces.
- Shadows carry a green or warm tint (not pure black) — light filters through leaves.
- The aesthetic draws from Art Nouveau's organic curves, Studio Ghibli's lush worlds, and community garden aesthetics.

## Core Material Recipes

### 1) Leaf-Shaped Container

The signature solarpunk shape: a leaf or petal with organic asymmetry.

- `rounded-[70%_30%_60%_40%/50%_60%_30%_60%]` (leaf shape).
- Background: `bg-gradient-to-br from-[#7ec850] to-[#5a9e3a]`.
- Shadow: `shadow-[0_4px_20px_rgba(126,200,80,0.3)]` (green-tinted shadow).
- Full: `bg-gradient-to-br from-[#7ec850] to-[#5a9e3a] rounded-[70%_30%_60%_40%/50%_60%_30%_60%] shadow-[0_4px_20px_rgba(126,200,80,0.3)] p-8`

### 2) Golden Hour Gradient Background

The warm sunlight backdrop that defines the solarpunk mood.

- `bg-gradient-to-b from-[#fef3c7] via-[#fde68a] to-[#7ec850]` (sky to garden).
- Radial sun: `bg-[radial-gradient(circle_at_50%_20%,rgba(252,211,77,0.4)_0%,transparent_50%)]`.
- Canopy filter: `bg-gradient-to-b from-transparent via-[#7ec850]/5 to-[#5a9e3a]/10` (light filtering through leaves).

### 3) Solar Panel Surface

A surface that looks like it integrates solar technology with organic forms.

- Base: `bg-gradient-to-br from-[#1a3a5a] via-[#2a5a7a] to-[#1a3a5a]` (deep solar blue).
- Grid lines: `bg-[linear-gradient(rgba(252,211,77,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(252,211,77,0.2)_1px,transparent_1px)] bg-[size:20px_20px]` (solar cell grid).
- Glow: `shadow-[inset_0_0_20px_rgba(252,211,77,0.2),0_0_15px_rgba(252,211,77,0.15)]`.
- Used for energy/battery displays, power readouts, charging indicators.

### 4) Moss / Living Surface

Textured green surface that feels alive.

- Base: `bg-[#5a8a3a]`.
- Texture: layered SVG noise at `opacity-[0.1]` in slightly different green tones.
- Highlight: `shadow-[inset_0_1px_0_rgba(180,220,100,0.3),0_2px_8px_rgba(0,0,0,0.15)]`.
- Border: organic edge using `border-radius` variations or SVG clip-path.

### 5) Vine / Branch Divider

Organic, growing dividers instead of straight lines.

```html
<svg viewBox="0 0 200 20" class="w-full">
  <path d="M0,10 Q30,5 60,12 T120,8 T200,10" fill="none" stroke="#5a8a3a" stroke-width="2"/>
  <!-- Leaves along the vine -->
  <ellipse cx="60" cy="6" rx="5" ry="3" fill="#7ec850" transform="rotate(-30 60 6)"/>
  <ellipse cx="120" cy="14" rx="5" ry="3" fill="#7ec850" transform="rotate(25 120 14)"/>
</svg>
```

### 6) Solarpunk Button

Warm, organic button with golden energy glow.

- Primary: `bg-gradient-to-b from-[#fcd34d] to-[#d97706] text-[#4a2c16] font-semibold rounded-full px-8 py-3 shadow-[0_4px_12px_rgba(252,211,77,0.4)] hover:shadow-[0_6px_20px_rgba(252,211,77,0.5)] transition-all`.
- Green: `bg-gradient-to-b from-[#7ec850] to-[#5a8a3a] text-white font-semibold rounded-full px-8 py-3 shadow-[0_4px_12px_rgba(126,200,80,0.3)]`.
- Wood: `bg-gradient-to-b from-[#a0703a] to-[#6b4a2a] text-[#f5e6c8] font-medium rounded-full px-6 py-3`.

### 7) Energy / Growth Gauge

Data display that shows growth or energy like a plant growing or sun intensity.

- Vertical growth bar: `w-3 rounded-full bg-gradient-to-t from-[#5a8a3a] to-[#7ec850]` inside a transparent track.
- Sun arc: semicircular SVG arc with a sun icon that rises along the arc based on value.
- Leaf fill: a leaf-shaped SVG that fills with green from bottom to top based on progress.

## Color Palette System

### Core Solarpunk Palette

| Color | Hex | Role |
|---|---|---|
| Golden Sun | `#fcd34d` | Primary accent, energy, warmth |
| Amber | `#d97706` | Gradient pair, harvest |
| Forest Green | `#5a8a3a` | Primary surface, growth |
| Leaf Green | `#7ec850` | Light surface, active states |
| Fresh Green | `#4ade80` | Highlight, new growth |
| Cream | `#fef3c7` | Light background, paper |
| Warm Beige | `#f5e6c8` | Surface, wood tone |
| Earth Brown | `#6b4a2a` | Wood, structural |
| Solar Blue | `#2a5a7a` | Solar panel, tech accent |
| Sky Blue | `#87ceeb` | Sky, calm |

Rules: Warm greens and golds dominate. The palette should feel like a walk through a community garden at golden hour. Cream and warm beige provide light surfaces. Earth brown and solar blue provide contrast.

## Typography Recommendations

Solarpunk typography is warm, organic, and slightly rounded:

- **Display headings:** Fraunces, Bricolage Grotesque, or Frank Ruhl Libre (warm serif with organic character).
- **Alternative display:** Syne, Outfit, or Sora (rounded, organic sans-serif).
- **Body:** Source Serif Pro, Lora, or DM Sans (warm and readable).
- **Mono:** IBM Plex Mono for data/energy readouts (solar tech data).
- Weights: `font-medium` to `font-semibold`. Avoid `font-black` (too industrial for solarpunk).

## Component Architecture Pattern

1. Golden hour gradient background (warm, sunlit, hopeful).
2. Leaf-shaped organic containers (content surfaces).
3. Solar panel surfaces (for energy/tech data).
4. Vine/branch dividers (organic section breaks).
5. Growth/energy gauges (botanical data display).
6. Warm golden accent buttons with sun glow.
7. Botanical decoration (leaves, flowers, seeds as SVG accents).

## Interaction Rules

- Default state: warm, organic, growing.
- Hover: elements grow slightly and glow warmer.
  - `hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(252,211,77,0.3)] transition-all duration-400 ease-out`.
- Active: gentle press `active:scale-[0.98]`.
- Focus: golden ring `focus:ring-2 focus:ring-[#fcd34d] focus:ring-offset-2`.
- Transitions: `transition-all duration-400 ease-out` (organic, slow, growing).
- Animations: gentle breathing, swaying (like plants in a breeze), slow sun arcs.

## Reusable Tailwind Tokens

- Leaf container: `bg-gradient-to-br from-[#7ec850] to-[#5a9e3a] rounded-[70%_30%_60%_40%/50%_60%_30%_60%] shadow-[0_4px_20px_rgba(126,200,80,0.3)]`
- Golden bg: `bg-gradient-to-b from-[#fef3c7] via-[#fde68a] to-[#7ec850]`
- Solar panel: `bg-gradient-to-br from-[#1a3a5a] to-[#2a5a7a] bg-[linear-gradient(rgba(252,211,77,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(252,211,77,0.2)_1px,transparent_1px)] bg-[size:20px_20px]`
- Sun button: `bg-gradient-to-b from-[#fcd34d] to-[#d97706] text-[#4a2c16] font-semibold rounded-full shadow-[0_4px_12px_rgba(252,211,77,0.4)]`
- Growth bar: `w-3 rounded-full bg-gradient-to-t from-[#5a8a3a] to-[#7ec850]`
- Green shadow: `shadow-[0_4px_20px_rgba(126,200,80,0.3)]`
- Leaf border-radius: `rounded-[70%_30%_60%_40%/50%_60%_30%_60%]`

## Quality Checklist (must pass)

- Shapes are organic (leaf-like border-radius, not rectangles).
- Color palette is warm green and golden (garden at golden hour).
- At least one sun/solar reference (radial gradient, solar panel surface, or sun icon).
- Shadows are warm-tinted (green or golden, not pure black).
- Botanical decorations present (leaves, vines, organic SVG accents).
- Typography is warm and rounded (not cold or industrial).
- Data displays use growth/botanical metaphors (growing bars, sun arcs).
- The aesthetic reads as optimistic, sustainable, and nature-integrated.
- Light feels warm and golden (not cold fluorescent or harsh neon).

## Anti-Patterns

- Sharp rectangles and rigid grids (solarpunk is organic and flowing).
- Cold or industrial color palettes (blue-gray, pure white, neon).
- Dark dystopian mood (solarpunk is hopeful and optimistic).
- Pure black shadows (use warm green or gold-tinted shadows).
- Mechanical or digital-looking data displays (use organic gauges and growth bars).
- Fast, aggressive animations (solarpunk motion is gentle, organic, slow).
- Missing solar/sun references (the sun is the core energy metaphor).
- Heavy, dark surfaces dominating (solarpunk is light-filled and airy).
- Industrial typography (Inter alone feels too corporate; mix with warmer fonts).
- Missing botanical decorations (leaves and vines are essential).

## Accessibility Considerations

- Warm earth-tone palettes can have lower contrast; verify WCAG AA for all text.
- Cream/beige backgrounds with dark text provide good contrast.
- Organic shapes must not prevent touch interaction (hit areas must remain accessible).
- Leaf-shaped containers with asymmetric border-radius should still have adequate padding for text.
- Focus states must be visible against warm backgrounds: `focus:ring-2 focus:ring-[#fcd34d]`.
- Decorative botanical SVGs must be `aria-hidden="true"`.
- Growth gauges need text alternatives for screen readers (`aria-valuenow`, `aria-label`).
- Gentle animations must respect `prefers-reduced-motion` (disable swaying/breathing).
