---
name: watercolor-ui
description: Build watercolor / painterly UI components (soft bleeding edges, organic color blends, paint texture, paper grain, translucent wash layers, visible brush strokes) with the delicate, flowing aesthetic of traditional watercolor painting applied to digital interfaces. Trigger this skill when the user asks for watercolor design, painterly UI, soft washes, bleeding color, organic paint texture, or artistic illustrative interfaces.
---

# Watercolor / Painterly UI

Use this skill to design and implement soft, painterly interfaces with bleeding color edges, translucent paint washes, paper grain texture, visible brush strokes, and the organic, flowing quality of traditional watercolor painting.

## Non-Negotiable Foundations

- Watercolor UI simulates the behavior of water-based paint on paper: colors BLEED, blend, and flow into each other with soft, organic edges.
- Edges are NEVER sharp. Every border, divider, and shape has a soft, diffuse, bleeding quality.
- Colors are translucent and layered: paint washes overlap to create depth, just as real watercolor layers create richness on paper.
- Paper grain texture is mandatory: the rough surface of watercolor paper (cold-press or hot-press) must be visible.
- The aesthetic is organic and handmade — nothing looks digitally precise or mechanically perfect.
- Palette is soft and naturalistic: muted primaries, earth tones, botanical greens, dusty roses, ocean blues, and warm ochres.

## Core Material Recipes

### 1) Watercolor Wash Surface

The foundational surface: a color that bleeds outward with soft, diffuse edges.

```css
.watercolor-wash {
  background: radial-gradient(ellipse at center,
    rgba(122, 154, 90, 0.4) 0%,
    rgba(122, 154, 90, 0.2) 40%,
    rgba(122, 154, 90, 0.05) 70%,
    transparent 100%
  );
  filter: blur(2px);
}
```

Tailwind approximate:
- `bg-[radial-gradient(ellipse_at_center,rgba(122,154,90,0.4)_0%,rgba(122,154,90,0.2)_40%,transparent_100%)] backdrop-blur-[1px]`.

### 2) Watercolor Paper Background

The base canvas: textured watercolor paper.

- Background: `bg-[#faf6ee]` (warm off-white paper).
- Grain texture: SVG `feTurbulence` noise at `opacity-[0.06]` with `mix-blend-mode: multiply`.
- Optional paper deckle edge: `filter: url(#deckle)` SVG displacement for irregular paper edges.

### 3) Bleeding Color Card

Card with soft, bleeding color edges (no hard border).

- `bg-[#7a9a5a]/20 backdrop-blur-[2px] rounded-[2rem] p-8 shadow-none border-0`.
- The color is translucent and the edges are soft — the card is a paint wash, not a box.
- Layer 2 wash: `bg-[#e8a3a3]/15 backdrop-blur-[1px]` as an overlapping offset wash.

### 4) Watercolor Button

Soft, rounded button with paint-wash styling.

- Primary: `bg-[#7a9a5a]/40 text-[#3a4a2a] font-medium rounded-full px-8 py-3 backdrop-blur-[1px] shadow-[0_2px_8px_rgba(122,154,90,0.2)] hover:bg-[#7a9a5a]/50 transition-all`.
- Rose: `bg-[#e8a3a3]/40 text-[#6a3a3a] font-medium rounded-full px-8 py-3`.

### 5) Brush Stroke Divider

SVG brush stroke as a section divider.

```html
<svg viewBox="0 0 200 8" class="w-full text-[#7a9a5a] opacity-60">
  <path d="M2,4 Q40,1 80,4 T160,3 T198,4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
```

The stroke is slightly wobbly and varies in width — like a real brush pulled across paper.

### 6) Paint Splatter Accent

Decorative paint splatter SVG.

```html
<svg viewBox="0 0 60 60" class="w-16 h-16 text-[#e8a3a3] opacity-40">
  <circle cx="30" cy="30" r="8" fill="currentColor"/>
  <circle cx="15" cy="20" r="3" fill="currentColor"/>
  <circle cx="45" cy="40" r="2" fill="currentColor"/>
  <circle cx="50" cy="15" r="1.5" fill="currentColor"/>
  <circle cx="10" cy="45" r="2.5" fill="currentColor"/>
</svg>
```

### 7) Overlapping Wash Layers

Multiple translucent color washes creating depth.

- Layer 1: `absolute inset-0 bg-[#7a9a5a]/15` (sage wash).
- Layer 2: `absolute inset-0 bg-[#a3b8d4]/10 translate-x-4 translate-y-4` (blue wash offset).
- Layer 3: `absolute inset-0 bg-[#e8c4a0]/8 translate-x-[-4px] translate-y-[-4px]` (peach wash offset).
- Content sits on top of the layered washes.

## Color Palette System

### Core Watercolor Palette

| Color | Hex | Role |
|---|---|---|
| Sage Green | `#7a9a5a` | Primary wash, nature |
| Dusty Rose | `#e8a3a3` | Warm accent, florals |
| Ocean Blue | `#7a9ab4` | Cool accent, water |
| Warm Ochre | `#d4a868` | Earth tone, warmth |
| Lavender | `#a09ab4` | Soft accent |
| Terracotta | `#c47858` | Warm earth |
| Warm Paper | `#faf6ee` | Background |
| Ink Brown | `#5a4a3a` | Text, outlines |

Rules: Colors are ALWAYS translucent (20-40% opacity) to simulate watercolor washes. Colors should feel soft, muted, and naturalistic. Never fully saturated or opaque.

## Typography Recommendations

Watercolor typography is soft, organic, and slightly informal:

- **Display headings:** Fraunces, Bricolage Grotesque, or Lora (warm serif with organic character).
- **Handwritten accents:** Caveat, Dancing Script, or Parisienne (personal, painted feel).
- **Body:** Lora, Crimson Text, or DM Serif Text (warm readable serif).
- **Labels:** `font-serif font-medium` without uppercase (watercolor is gentle, not formal).
- Avoid cold sans-serif or monospace. Watercolor is warm and organic.

## Component Architecture Pattern

1. Watercolor paper background (warm, textured, grain visible).
2. Translucent overlapping color washes as section backgrounds.
3. Soft bleeding-edge cards (no hard borders — paint wash surfaces).
4. Rounded, pill-shaped buttons with translucent wash styling.
5. Brush stroke dividers (SVG with wobbly, varied-width strokes).
6. Paint splatter decorative accents.
7. Warm serif typography.
8. Handwritten accent text for personal touches.

## Interaction Rules

- Default state: soft, organic, flowing.
- Hover: wash intensifies (opacity increases slightly).
  - `hover:bg-[#7a9a5a]/35 transition-all duration-500`.
- Active: `active:bg-[#7a9a5a]/45`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#7a9a5a]/30 focus:ring-offset-2 focus:ring-offset-[#faf6ee]`.
- Transitions: `transition-all duration-500 ease-in-out` (slow, organic, like paint flowing).
- Animations: slow color spread, gentle breathing, watercolor-in effects.

## Reusable Tailwind Tokens

- Paper bg: `bg-[#faf6ee]` with SVG grain overlay.
- Wash card: `bg-[#7a9a5a]/20 backdrop-blur-[2px] rounded-[2rem] p-8 border-0 shadow-none`.
- Watercolor button: `bg-[#7a9a5a]/40 text-[#3a4a2a] font-medium rounded-full backdrop-blur-[1px] shadow-[0_2px_8px_rgba(122,154,90,0.2)]`
- Brush divider: SVG `stroke-linecap="round"` with slightly wobbly path.
- Splatter: SVG circles of varying sizes in translucent color.
- Grain overlay: SVG `feTurbulence baseFrequency="0.65" numOctaves="3"` at `opacity-[0.06]`.

## Quality Checklist (must pass)

- Edges are SOFT and bleeding (no hard, sharp borders on cards).
- Colors are TRANSLUCENT (20-40% opacity washes, never opaque).
- Paper grain texture is visible on the background.
- At least one overlapping wash layer creating depth.
- At least one brush stroke SVG divider.
- At least one paint splatter decorative accent.
- Typography is warm serif with handwritten accents.
- Background is warm watercolor paper (`#faf6ee`), never pure white.
- Color palette is muted and naturalistic (no neons or fully saturated primaries).
- Motion is slow and organic (like paint flowing across paper).

## Anti-Patterns

- Sharp, hard borders (watercolor edges are soft and bleeding).
- Fully opaque, saturated colors (watercolor is translucent and muted).
- Pure white backgrounds (use warm paper `#faf6ee`).
- Missing paper grain texture (grain is mandatory).
- Cold sans-serif or monospace typography (watercolor is warm serif).
- Sharp rectangular shapes (everything should be soft and rounded).
- Fast, mechanical animations (motion should be organic and slow).
- Flat single-layer color (watercolor requires overlapping wash layers).
- Missing brush stroke or splatter decorations (these are the signature elements).
- Hard drop shadows with blur (watercolor doesn't have shadows — it has overlapping washes).

## Accessibility Considerations

- Translucent washes can reduce text contrast; verify WCAG AA carefully.
- Dark brown text (`#5a4a3a`) on warm paper provides good contrast.
- Soft bleeding edges may make interactive element boundaries unclear — ensure focus states are visible.
- Focus states: `focus:ring-2 focus:ring-[#7a9a5a]/30` (soft sage ring on paper).
- Paper grain texture must not reduce contrast below WCAG AA.
- Decorative splatter and brush SVGs must be `aria-hidden="true"`.
- The soft aesthetic should not compromise structural clarity — users must still identify interactive elements.
- Slow animations must respect `prefers-reduced-motion`.
