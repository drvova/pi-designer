---
name: color-field-ui
description: Build color field UI components (Rothko-inspired large soft color blocks, atmospheric washes, meditative gradients, edge-to-edge color zones, emotional abstraction) with soft-blended color fields, minimal content, and the contemplative spiritual depth of Abstract Expressionism. Trigger this skill when the user asks for color field painting, Rothko aesthetic, Mark Rothko, abstract expressionism, meditative color blocks, or atmospheric contemplative interfaces.
---

# Color Field UI

Use this skill to design and implementation meditative, atmospheric interfaces inspired by Color Field painting (Mark Rothko, Helen Frankenthaler): large soft-edged blocks of color that fill the entire field, creating emotional and spiritual depth through pure color relationships.

## Core Material Recipes

### 1) Rothko Color Block

Large soft-edged rectangular color field.

```css
.rothko-field {
  background: linear-gradient(180deg,
    #8a1a1a 0%, #8a1a1a 30%,
    #5a0a0a 35%, #5a0a0a 50%,
    #c47a3a 55%, #c47a3a 80%,
    #8a4a1a 85%, #8a4a1a 100%
  );
  filter: blur(8px);
}
```

Simplified: `bg-gradient-to-b from-[#8a1a1a] via-[#5a0a0a] to-[#c47a3a]` with `blur-[4px]` overlay for soft edges between fields.

### 2) Layered Color Atmosphere

Multiple overlapping translucent color fields.

- Layer 1: `absolute inset-0 bg-[#c41e3a]/40 blur-[20px]`.
- Layer 2: `absolute inset-x-0 top-1/4 h-1/2 bg-[#f5d76e]/30 blur-[15px]`.
- Layer 3: `absolute inset-x-0 bottom-0 h-1/3 bg-[#1a3a5a]/40 blur-[20px]`.

### 3) Meditative Content Card

Minimal card floating in color field.

- `bg-white/5 backdrop-blur-xl border border-white/10 rounded-none p-12 shadow-none`.
- Content is MINIMAL: a single word, a short phrase, or a single number.
- Text: `text-white/90 font-serif text-3xl font-light tracking-wide text-center`.

### 4) Color Field Button

Subtle, minimal button that blends with the field.

- `bg-white/10 text-white/80 font-light text-sm tracking-[0.2em] uppercase px-8 py-3 border border-white/20 hover:bg-white/15 hover:text-white transition-all`.

### 5) Edge-to-Edge Section

A full-viewport section of a single color.

- `bg-[#3a1a4a] min-h-screen flex items-center justify-center`.
- Content: a single quote or word, centered.

## Color Palette System

Color Field does not have a fixed palette — the COLORS ARE THE CONTENT:

### Rothko Classic Combinations

| Combination | Colors | Emotion |
|---|---|---|
| Red/Gold | `#8a1a1a` → `#c47a3a` | Passion, warmth |
| Blue/Green | `#1a3a5a` → `#2a5a3a` | Calm, contemplation |
| Orange/Yellow | `#e07a30` → `#f5d76e` | Joy, energy |
| Black/Red | `#0a0a0a` → `#5a0a0a` | Tragedy, depth |
| Purple/Pink | `#3a1a4a` → `#c47a9a` | Spirit, mystery |

Rules: Colors are DEEP, SATURATED, and EMOTIONAL. Choose 2-3 related colors per composition. Colors should BLEND SOFTLY at edges (use `blur` or gradient transitions). The colors ARE the experience.

## Typography Recommendations

- **Everything:** Cormorant, Lora, or Playfair Display at `font-light` (thin, elegant, contemplative).
- **Display:** A single word at `text-7xl font-light tracking-[0.1em]`.
- **Body:** `font-serif text-lg font-light leading-loose`.
- Typography should be MINIMAL and MEDITATIVE — the color is the content, text is secondary.

## Reusable Tailwind Tokens

- Rothko field: large gradient with `blur-[4px]` overlay.
- Layered atmosphere: multiple `absolute` positioned translucent divs with `blur-[15px]`.
- Meditative card: `bg-white/5 backdrop-blur-xl border border-white/10 rounded-none`.
- Color field button: `bg-white/10 text-white/80 font-light uppercase tracking-[0.2em] border border-white/20`.
- Edge-to-edge: `min-h-screen bg-[color] flex items-center justify-center`.

## Quality Checklist

- Background is dominated by LARGE SOFT color fields (edge-to-edge).
- Color transitions are BLURRED (no hard edges between fields).
- Content is MINIMAL (a word, a phrase, a number — not dense text).
- At least one full-viewport single-color section.
- Colors are deep, saturated, and emotionally resonant.
- Typography is thin/serif and contemplative (font-light).
- Cards are barely-visible translucent overlays (not solid boxes).
- The aesthetic reads as Rothko / Color Field / Abstract Expressionism.
- The experience is MEDITATIVE and SPATIAL.
- Buttons are minimal and blend with the color field.

## Anti-Patterns

- Sharp hard edges between colors (Color Field uses soft blurred transitions).
- Dense content layouts (content should be minimal and contemplative).
- Solid opaque card surfaces (use translucent barely-visible overlays).
- Bright cheerful UI elements (Color Field is deep, emotional, contemplative).
- Heavy bold typography (use font-light thin elegant serif).
- Multiple accent colors (2-3 deep colors per composition).
- Functional dense UI (this is meditative art, not a dashboard).
- Small sharp shapes (Color Field is about LARGE color areas).
- Distraction or busyness (the aesthetic is about stillness and depth).
- Missing the blur between fields (hard gradient stops are wrong — soften them).

## Accessibility Considerations

- Deep saturated backgrounds with white text can have good contrast (verify WCAG AA).
- Translucent cards may have variable contrast depending on color field behind them.
- Focus states: `focus:ring-2 focus:ring-white/30` (subtle but visible).
- The minimal content is naturally accessible (very few elements to parse).
- The large color areas may cause issues for colorblind users — ensure content is not color-dependent.
- Text must remain readable over all color field variations.
- `prefers-reduced-motion`: disable any slow color transition animations.
