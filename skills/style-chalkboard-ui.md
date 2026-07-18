---
name: chalkboard-ui
description: Build chalkboard UI components (dark matte chalkboard surface, chalk-textured handwriting, dusty smudges, hand-drawn lines, academic classroom aesthetic) with erasable styling, chalk-dust texture, and the warm educational atmosphere of a classroom blackboard. Trigger this skill when the user asks for chalkboard design, blackboard UI, chalk handwriting, classroom aesthetic, lecture board, or dusty academic interfaces.
---

# Chalkboard UI

Use this skill to design and implementation warm, educational interfaces styled as a classroom chalkboard: dark matte green/black surface, chalk-textured handwriting, dusty smudges, hand-drawn underlines and boxes, and the nostalgic atmosphere of learning and teaching.

## Non-Negotiable Foundations

- The background is always a dark matte chalkboard: deep forest green (`#1a3a2a`) or charcoal black (`#1a1a1a`), with a slightly rough, non-reflective texture.
- All text and elements should look like they were drawn with CHALK: slightly rough-edged, white or pastel, with subtle texture imperfections.
- Hand-drawn elements are essential: wobbly underlines, roughly drawn boxes, dotted lines, and arrow accents that look hand-sketched.
- Chalk dust smudges add atmosphere: faint white blurry patches in corners and along edges where the board was partially erased.
- Typography mimics handwriting or hand-lettering — never clean digital sans-serif.
- The mood is warm, educational, and slightly nostalgic — like a favorite teacher's classroom.

## Core Material Recipes

### 1) Chalkboard Surface

The foundational dark matte surface.

- Green chalkboard: `bg-[#1a3a2a]` with subtle texture overlay.
- Black chalkboard: `bg-[#1a1a1a]`.
- Texture: SVG `feTurbulence` noise at `opacity-[0.03]` (slightly rough, non-glossy).
- Wooden frame (optional): `border-8 border-[#5a3a1a]` around the chalkboard surface.

### 2) Chalk Text

Text styled as white chalk handwriting.

- `text-white font-handwritten text-lg tracking-wide` with slight texture.
- Chalk texture effect: apply a subtle SVG turbulence displacement filter to text edges.
- Eraser smudge: `text-white/80` for partially erased text.

### 3) Hand-Drawn Underline

Wobbly chalk underline below text.

```html
<svg viewBox="0 0 200 8" class="w-full -mt-1">
  <path d="M2,4 Q40,2 80,5 T160,3 T198,4" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" opacity="0.8"/>
</svg>
```

### 4) Hand-Drawn Box

Roughly drawn rectangle around content (like circling important info on a board).

```html
<div class="relative">
  <svg class="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
    <path d="M2,3 Q1,1 3,1 L97,2 Q99,2 99,4 L98,97 Q99,99 97,99 L3,98 Q1,99 1,97 Z" 
          fill="none" stroke="white" stroke-width="0.5" opacity="0.6"/>
  </svg>
  <div class="p-6">Content inside chalk box</div>
</div>
```

### 5) Chalk Dust Smudge

Faint erased chalk mark as atmospheric decoration.

- `absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[20px] rounded-full` (erased corner smudge).
- `absolute bottom-0 left-1/4 w-48 h-8 bg-white/3 blur-[15px]` (erased line at bottom).

### 6) Chalkboard Button

Button styled as chalked text on the board.

- `text-white font-handwritten text-lg border-2 border-dashed border-white/60 px-6 py-3 rounded-lg hover:bg-white/10 hover:border-white transition-all`.

### 7) Colored Chalk Accent

Pastel-colored chalk accents (pink, yellow, blue chalk).

- Yellow chalk: `text-[#ffe066]`.
- Pink chalk: `text-[#ffaaaa]`.
- Blue chalk: `text-[#aaaaff]`.
- Green chalk: `text-[#aaffaa]`.

## Color Palette System

### Core Chalkboard Palette

| Color | Hex | Role |
|---|---|---|
| Forest Green Board | `#1a3a2a` | Primary background (green board) |
| Charcoal Board | `#1a1a1a` | Alternative background (black board) |
| Chalk White | `#f5f5f0` | Primary text (slightly warm white) |
| Chalk Yellow | `#ffe066` | Highlight chalk |
| Chalk Pink | `#ffaaaa` | Accent chalk |
| Chalk Blue | `#aaaaff` | Info chalk |
| Chalk Green | `#aaffaa` | Success chalk |
| Wood Frame | `#5a3a1a` | Optional wooden border |
| Eraser Smudge | `rgba(255,255,255,0.05)` | Faint erased marks |

Rules: The board is always dark (green or black). Text is always light (white or pastel chalk). The palette should feel like a classroom: warm, educational, and slightly nostalgic.

## Typography Recommendations

Chalkboard typography mimics handwriting and hand-lettering:

- **Display headings:** Caveat, Kalam, or Patrick Hand (handwritten display).
- **Body:** Patrick Hand, Architects Daughter (readable handwriting).
- **Alternative:** Indie Flower, Shadows Into Light (casual hand-lettering).
- **Labels:** `font-handwritten text-sm uppercase tracking-wide` (like a teacher's label).
- The KEY is that all text should look HANDWRITTEN, not typeset.

## Component Architecture Pattern

1. Dark chalkboard background (green or black) with subtle rough texture.
2. Optional wooden frame border.
3. Chalk-white handwritten typography.
4. Hand-drawn SVG underlines, boxes, and arrows.
5. Chalk dust smudge decorations (faint erased marks).
6. Dashed-border chalk-style buttons.
7. Colored chalk accents for categorization (yellow, pink, blue chalk).
8. Hand-drawn dividers between sections.

## Interaction Rules

- Default state: educational, warm, hand-drawn.
- Hover: chalk text brightens or box darkens slightly (like touching the board).
  - `hover:bg-white/10 hover:border-white transition-all duration-200`.
- Active: `active:bg-white/15`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-[#1a3a2a]`.
- Transitions: `transition-all duration-200` (quick, like writing on a board).

## Reusable Tailwind Tokens

- Green board: `bg-[#1a3a2a]` with SVG noise texture overlay.
- Black board: `bg-[#1a1a1a]`.
- Chalk text: `text-white font-handwritten tracking-wide`.
- Wood frame: `border-8 border-[#5a3a1a]`.
- Chalk button: `text-white border-2 border-dashed border-white/60 rounded-lg hover:bg-white/10`.
- Smudge: `bg-white/5 blur-[20px] rounded-full`.
- Colored chalk: `text-[#ffe066]` / `text-[#ffaaaa]` / `text-[#aaaaff]`.

## Quality Checklist (must pass)

- Background is dark matte chalkboard (green `#1a3a2a` or black `#1a1a1a`).
- Typography uses handwritten/hand-lettered fonts (Caveat, Patrick Hand, etc.).
- At least one hand-drawn SVG element (underline, box, arrow).
- Chalk dust smudges present as atmospheric decoration.
- Optional wooden frame border.
- Dashed-border chalk-style buttons.
- Colored chalk accents used for categorization.
- The surface texture is slightly rough/matte (not glossy).
- Text has slightly imperfect edges (chalk texture, not crisp digital).
- The aesthetic reads as a classroom chalkboard or lecture board.

## Anti-Patterns

- Glossy or reflective backgrounds (chalkboards are matte and non-reflective).
- Clean digital sans-serif typography (all text should look handwritten).
- Missing hand-drawn elements (underlines, boxes, arrows are essential).
- Bright backgrounds (chalkboards are dark green or black).
- Missing chalk dust smudges (these add the classroom atmosphere).
- Sharp, crisp text edges (chalk text should be slightly rough/textured).
- Pure white (`#ffffff`) text (use warm chalk white `#f5f5f0`).
- Missing colored chalk accents (yellow/pink/blue chalk adds educational categorization).
- Professional corporate styling (chalkboard is warm, personal, educational).
- Clean untextured surfaces (the rough matte texture is mandatory).

## Accessibility Considerations

- Dark chalkboard with white chalk text provides excellent contrast (WCAG AAA).
- Handwritten fonts can reduce readability at small sizes — use 16px+ for body text.
- Dashed borders on buttons provide clear interactive affordances.
- Focus states: `focus:ring-2 focus:ring-white/40` (visible on dark green/black).
- Chalk dust smudges must not reduce text contrast (keep at low opacity `0.05`).
- Hand-drawn SVG elements must be `aria-hidden="true"` when decorative.
- Colored chalk must not be the sole categorization method (include text labels).
- The warm educational aesthetic naturally supports cognitive accessibility.
- Verify that handwritten fonts are readable for users with dyslexia (some handwriting fonts are harder to read).
