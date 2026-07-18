---
name: manga-anime-ui
description: Build manga/anime UI components (Japanese comic panels, speed lines, screentone halftone, sweat drops, action bursts, dramatic angles, big eyes, cel-shaded color blocks, onomatopoeia sound effects) with dynamic panel layouts, halftone backgrounds, and the energetic visual language of Japanese comics. Trigger this skill when the user asks for manga, anime, Japanese comic, shonen UI, cel-shaded, or comic panel interfaces.
---

# Manga / Anime UI

Use this skill to design and implementation dynamic interfaces inspired by Japanese manga and anime: panel-grid layouts with varying sizes, speed line backgrounds, screentone halftone textures, dramatic angular compositions, cel-shaded flat color blocks, onomatopoeia sound effects, and the high-energy visual storytelling of Japanese comics.

## Core Material Recipes

### 1) Speed Line Background

Radial or linear speed lines (the manga motion indicator).

- Radial: `bg-[repeating-conic-gradient(from_0deg_at_50%_50%,transparent_0deg_2deg,rgba(0,0,0,0.1)_2deg_2.5deg)]` (radiating from center).
- Linear: `bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_3px,rgba(0,0,0,0.12)_3px,rgba(0,0,0,0.12)_4px)]` (horizontal motion lines).

### 2) Screentone Halftone

Manga screentone dot pattern.

- Fine: `bg-[radial-gradient(rgba(0,0,0,0.15)_0.5px,transparent_0.5px)] bg-[size:3px_3px]`.
- Medium: `bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)] bg-[size:4px_4px]`.
- Gradient tone: `bg-[radial-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:4px_4px]` with mask fading from dense to sparse.

### 3) Manga Panel Grid

Comic panel layout with varied panel sizes and angular gutters.

- `grid grid-cols-12 grid-rows-6 gap-1 bg-white p-1` with cells spanning varied col/row counts.
- Panel: `bg-white border-[2px] border-black p-3`.
- Angular panel: `[clip-path:polygon(0_0,100%_0,95%_100%,0_100%)]` (slightly skewed).

### 4) Cel-Shaded Color Block

Flat anime color with hard shadow (no gradient — cel shading).

- Base: `bg-[#5acaf0]` (flat anime blue).
- Shadow: `bg-[#2a8aca]` as an angular overlay with hard edge (no blur).
- Highlight: `bg-white/40` angular overlay.

### 5) Onomatopoeia Sound Effect

Manga sound-effect text (ガーン, ドキドキ, パン).

- `text-6xl font-black text-[#1a1a1a] rotate-[-5deg] [stroke:#ffffff] [stroke-width:2px] [paint-order:stroke_fill] tracking-tighter` showing "ドキドキ" or "BAM!".
- Alternative: outlined `text-transparent [-webkit-text-stroke:3px_#1a1a1a]`.

### 6) Action Burst Background

Starburst explosion shape behind dramatic moments.

- `bg-[#ffcc00] [clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)]` (10-point star burst).

### 7) Manga Button

Bold black-outlined button.

- `bg-white text-black font-bold text-base border-[3px] border-black px-8 py-3 shadow-[3px_3px_0_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all`.
- Color variant: `bg-[#ff6b6b] text-white border-[3px] border-black shadow-[3px_3px_0_#000]`.

## Color Palette System

### Shonen (action manga) Palette

| Color | Hex | Role |
|---|---|---|
| Ink Black | `#1a1a1a` | Outlines, text, speed lines |
| Panel White | `#ffffff` | Panel backgrounds |
| Sky Blue | `#5acaf0` | Cel-shaded primary |
| Shadow Blue | `#2a8aca` | Cel shadow tone |
| Action Red | `#ff4444` | Energy, danger, impact |
| Sunshine Yellow | `#ffcc00` | Burst effects, highlights |
| Grass Green | `#4caf50` | Nature, growth |
| Blush Pink | `#ffb3d9` | Character blush, softness |

Rules: Black ink outlines and white panels are the foundation. Color blocks are FLAT (cel-shaded — no gradients). Screentone provides tonal variation. The palette should feel like a weekly Shonen Jump spread.

## Typography Recommendations

- **Display:** Bangers, Komika Axis, or Manga Temple (comic-book display with personality).
- **Japanese:** Noto Sans JP bold for Japanese sound effects (ドキドキ).
- **Body:** Inter, DM Sans (clean readable sans for UI text).
- **Labels:** `font-bold uppercase tracking-wide text-sm` (bold and direct).
- Sound effects should be oversized, rotated, and outlined.

## Reusable Tailwind Tokens

- Speed lines: `bg-[repeating-conic-gradient(...)]` or `bg-[repeating-linear-gradient(...)]`.
- Screentone: `bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)] bg-[size:4px_4px]`.
- Manga panel: `bg-white border-[2px] border-black p-3`.
- Action burst: `[clip-path:polygon(10-point-star)] bg-[#ffcc00]`.
- Manga button: `border-[3px] border-black shadow-[3px_3px_0_#000]`.
- Sound effect: `font-black text-6xl rotate-[-5deg] [stroke:#fff] [stroke-width:2px]`.

## Quality Checklist

- At least one speed line or screentone halftone background.
- Panel grid layout with varied panel sizes (not uniform grid).
- At least one cel-shaded color block (flat fill + hard shadow).
- At least one onomatopoeia sound effect text element.
- Bold thick black outlines on all major elements (`border-[3px]`).
- Hard offset shadows (no blur — `shadow-[3px_3px_0_#000]`).
- Action burst star shape behind at least one element.
- Typography includes oversized rotated sound effects.
- The aesthetic reads as manga / anime / Japanese comic.
- Everything feels energetic, dynamic, and high-impact.

## Anti-Patterns

- Soft blurred shadows (manga uses HARD offset shadows only).
- Gradients on color fills (anime is CEL-SHADED — flat fills with hard shadow edges).
- Missing screentone or halftone (this is the signature manga texture).
- Missing speed lines (motion lines are essential manga vocabulary).
- Thin borders (manga outlines are THICK — `border-[3px]` minimum).
- Uniform grid layout (manga panels are VARIED and DYNAMIC).
- Missing sound effects (onomatopoeia is essential manga storytelling).
- Pastel or muted colors (manga palette is BOLD and HIGH-CONTRAST).
- Missing the action burst (star explosions are classic manga impact).
- Static boring composition (manga is DYNAMIC with angled panels and motion).

## Accessibility Considerations

- White panels with black text provide excellent contrast (WCAG AAA).
- Screentone backgrounds must not reduce text contrast (keep opacity low).
- Focus states: `focus:ring-4 focus:ring-[#ffcc00]/50` (action yellow ring).
- Speed line and screentone SVGs must be `aria-hidden="true"` when decorative.
- Japanese sound effects need `lang="ja"` and `aria-hidden="true"` if decorative.
- The dynamic angled layouts should maintain logical reading order for screen readers.
- Touch targets must be adequate despite thick border styling.
