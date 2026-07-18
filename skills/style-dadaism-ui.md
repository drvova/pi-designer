---
name: dadaism-ui
description: Build dadaism UI components (absurdist anti-art, nonsensical collage, photomontage, ready-made objects, deliberate irrationality, anti-establishment chaos) with random juxtapositions, cut-up text, irrational compositions, and the revolutionary rejection of meaning itself. Trigger this skill when the user asks for dadaism, Dada, absurdist design, anti-art UI, Tristan Tzara, photomontage, or deliberate nonsense interfaces.
---

# Dadaism UI

Use this skill to design and implement absurdist, anti-art interfaces inspired by the Dada movement: nonsensical photomontage, cut-up text, irrational juxtapositions, ready-made objects placed in impossible contexts, and the deliberate rejection of sense, beauty, and meaning.

## Non-Negotiable Foundations

- Dadaism REJECTS meaning. The aesthetic is anti-art: if it makes sense, it's not Dada.
- Juxtapositions are IRRATIONAL: a telephone receiver made of fish, a urinal titled "Fountain," a clock face with random symbols instead of numbers.
- Text is CUT UP and rearranged: random words from newspapers, scattered letterforms, poems assembled by pulling words from a hat.
- Photomontage: photographic elements are cut, pasted, overlapped, and placed in impossible combinations.
- Typography is deliberately chaotic: multiple fonts, sizes, directions, and languages mixed without logic.
- The mood is confrontational, playful, and absurd — it challenges the viewer to find meaning where there is none.

## Core Material Recipes

### 1) Cut-Up Text Display

Words arranged in random positions and rotations.

```html
<div class="relative h-64">
  <span class="absolute top-[10%] left-[15%] text-5xl font-serif font-bold rotate-[-7deg]">the</span>
  <span class="absolute top-[30%] left-[50%] text-7xl font-mono font-thin rotate-[12deg]">URINAL</span>
  <span class="absolute top-[55%] left-[20%] text-3xl font-serif italic rotate-[-3deg]">is</span>
  <span class="absolute top-[70%] left-[60%] text-6xl font-bold uppercase rotate-[5deg] text-[#dc2626]">ART</span>
  <span class="absolute top-[15%] left-[75%] text-2xl font-mono rotate-[90deg]">non?</span>
</div>
```

### 2) Photomontage Card

Overlapping cutout images at irrational angles.

- `relative` container with multiple `absolute` positioned images.
- Each image: `rotate-[Ndeg]` at random angles, overlapping, with hard cutout edges (no rounded corners).
- Some images inverted: `scale-y-[-1]` or `hue-rotate-[180deg]`.

### 3) Newspaper Clipping Text

Text styled like words cut from a newspaper.

- `bg-[#f0ede8] font-serif text-sm uppercase tracking-wide border-y border-[#3a3a3a] py-1 px-2 inline-block rotate-[1deg]`.
- Different clippings use different `font-family`, `text-decoration`, and `bg-color`.

### 4) Dada Stamp

Official-looking stamp on a ready-made object.

- `border-4 border-[#1a1a1a] text-[#1a1a1a] font-bold uppercase text-lg tracking-widest px-3 py-1 rotate-[-15deg] inline-block border-double` reading "DADA" or "NOT ART" or "MERDE".

### 5) Irrational Button

Button with nonsense text and irrational styling.

- `bg-[#dc2626] text-[#ffcc00] font-mono text-xl rotate-[-2deg] px-8 py-3 border-4 border-dashed border-[#1a1a1a] hover:rotate-[2deg] hover:bg-[#1a3a8a] transition-all` with text like "PRESS = NOTHING".

### 6) Ready-Made Object

A common object displayed as art (Duchamp's readymade concept).

- Image of a bottle rack, bicycle wheel, or urinal, displayed alone on a pedestal with a brass plaque.
- Plaque: `bg-[#c4a043] text-[#1a0a0a] font-serif text-xs px-4 py-1 italic` reading a provocative title.

### 7) Random Letter Scatter

Individual letters scattered across a surface.

```html
<div class="relative h-32">
  <span class="absolute top-0 left-0 text-4xl">K</span>
  <span class="absolute top-1/2 left-1/4 text-6xl rotate-45">p</span>
  <span class="absolute bottom-0 left-1/2 text-3xl rotate-[-30deg]">Z</span>
  <span class="absolute top-1/4 right-0 text-5xl rotate-90">m</span>
</div>
```

## Color Palette System

Dadaism has no fixed palette. It uses whatever it finds:

### Common Dada Palette

| Color | Hex | Role |
|---|---|---|
| Newsprint | `#f0ede8` | Clipping background |
| Ink Black | `#1a1a1a` | Text, stamps, outlines |
| Stamp Red | `#dc2626` | Accent, provocation |
| Collage Brown | `#8a6a3a` | Aged paper, photographs |
| Manilla | `#e8dcc0` | Envelopes, found objects |

Rules: Dada appropriates from everywhere. Use found-object aesthetics: newsprint, stamps, photographs, and whatever the collage process delivers. No harmonious palette — deliberate disharmony.

## Typography Recommendations

Dada typography is DELIBERATELY chaotic:

- **Everything:** Mix 3-5 different fonts with no logic: serif, sans-serif, monospace, script, blackletter.
- **Sizes:** Irrational scale jumps (200px next to 8px).
- **Directions:** Rotated text at various angles (0, -7, 12, 45, 90, -30 degrees).
- **Languages:** Mix alphabets and languages if possible.
- **Case:** Random upper/lower case within the same word.
- The point is to make typography IRRATIONAL — the opposite of Swiss Design.

## Component Architecture Pattern

1. Newsprint or blank background.
2. Cut-up text scattered at random positions and angles.
3. Photomontage elements (overlapping cutout images at irrational angles).
4. Dada stamps and ready-made object displays.
5. Irrational buttons with nonsense text.
6. Random letter scatter decorations.
7. Multiple conflicting fonts, sizes, and directions.

There is NO coherent layout. The chaos IS the design.

## Interaction Rules

- Default: chaotic, irrational, provocative.
- Hover: elements shift randomly (rotate, move, color-change in unpredictable ways).
  - `hover:rotate-[3deg] hover:scale-105 transition-all duration-150`.
- Active: `active:rotate-[-5deg]` (pressing causes irrational movement).
- Focus: `focus:outline-none focus:ring-4 focus:ring-[#dc2626]` (thick absurd ring).
- Transitions: `transition-all duration-150` (quick, jarring, irrational).

## Reusable Tailwind Tokens

- Cut-up text: `absolute` positioned spans with random `rotate-[Ndeg]`, mixed `font-*` and `text-*`.
- Newspaper clipping: `bg-[#f0ede8] font-serif uppercase border-y border-[#3a3a3a] py-1 px-2 inline-block rotate-[1deg]`.
- Dada stamp: `border-4 border-double border-[#1a1a1a] uppercase rotate-[-15deg]`.
- Irrational button: `bg-[#dc2626] text-[#ffcc00] rotate-[-2deg] border-4 border-dashed border-[#1a1a1a]`.

## Quality Checklist

- At least one cut-up text element (scattered words at random angles).
- Multiple conflicting typography styles (3+ different fonts).
- At least one photomontage or overlapping image element.
- Irrational button with nonsense or provocative text.
- Dada stamp or ready-made object display.
- Composition is deliberately chaotic (not aligned, not gridded).
- The aesthetic reads as absurdist anti-art / Dada photomontage.
- Scale is irrational (huge text next to tiny text).
- Nothing makes conventional sense — that's the point.
- The mood is confrontational and playful.

## Anti-Patterns

- Coherent logical layouts (Dada rejects logic).
- Harmonious typography (Dada mixes fonts chaotically).
- Aligned, gridded composition (Dada is scattered and irrational).
- Meaningful button text (use nonsense, provocation, or absurdity).
- Consistent color palette (Dada uses whatever it finds).
- Swiss minimalism (Dada is the opposite of Swiss design).
- Professional polished design (Dada is anti-professional by definition).
- Single font family (Dada needs 3+ conflicting typefaces).
- Rational scale hierarchy (sizes should be irrational).
- Making sense (the biggest anti-pattern of all for Dada).

## Accessibility Considerations

- Dada's chaotic nature creates SERIOUS accessibility challenges.
- Text contrast must still meet WCAG AA despite the chaos.
- Rotated text should not exceed 45 degrees for readability.
- Focus states must be visible: `focus:ring-4 focus:ring-[#dc2626]`.
- Screen readers will read scattered text in DOM order — consider using `aria-label` for intended reading order.
- Cut-up text should have semantic alternatives for screen readers.
- Do not use Dada for functional/critical UI (it is for artistic/expressionistic contexts).
- Ensure touch targets are large enough despite scattered positioning.
- The chaotic aesthetic may be disorienting for users with cognitive disabilities.
