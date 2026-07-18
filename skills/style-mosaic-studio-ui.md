---
name: mosaic-studio-ui
description: Build mosaic studio UI components (tesserae tray, tile nippers, grout spread, design cartoon, glass smalti, stone tesserae, setting wax) with colorful tile pieces, grout textures, and the ancient art of mosaic assembly. Trigger this skill when the user asks for mosaic design, tesserae UI, mosaic studio, tile art interface, grout texture, smalti glass, Roman mosaic, Byzantine mosaic, tessellated pattern, tile cutting, mosaic workshop, or ancient tile craft aesthetics.
---

# Mosaic Studio UI

Use this skill to design and implement vibrant, textured interfaces inspired by mosaic art: tesserae trays filled with colorful tile pieces, tile nippers for cutting shapes, grout spread textures filling gaps between tiles, design cartoon sketches as planning patterns, iridescent glass smalti pieces, natural stone tesserae, and the patient ancient craft of assembling thousands of tiny pieces into unified images.

## Non-Negotiable Foundations

The mosaic studio aesthetic is defined by the tension between individual small pieces and the unified whole they create. Each tessera is a discrete, colorful unit, but the grout lines between them are what make mosaic recognizable. The palette is inherently multi-colored because mosaics are colorful by nature, but the grout gray provides neutral structure that holds everything together. Every component should feel like you could pick up a tessera, cut it with nippers, and place it into a wet grout bed.

Core material identity:
- Tesserae are small, discrete, colorful squares or irregular shapes — never large panels.
- Grout is the connective tissue — a warm gray that appears between every tile.
- Glass smalti have an iridescent, almost oily shimmer — they catch light differently at each angle.
- Stone tesserae are matte, earthy, and slightly irregular — no two are identical.
- Design cartoons are paper patterns with pencil or ink outlines — hand-drawn character.
- Setting wax is a smooth, warm-toned surface for temporarily holding pieces during work.
- The overall feel should be tactile, ancient, and painstakingly assembled — not digital or clean.

## Core Material Recipes

### 1) Tesserae Tray

Grid container holding small colorful tile pieces sorted by color.

```html
<div class="grid grid-cols-8 gap-1 p-3 bg-[#3a3a3a] rounded-lg border-2 border-[#2a2a2a] shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)]">
  <!-- Individual tesserae -->
  <div class="w-6 h-6 rounded-[2px] bg-[#2a4a8a] shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_1px_2px_rgba(0,0,0,0.3)]"></div>
  <div class="w-6 h-6 rounded-[2px] bg-[#c4a043] shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_1px_2px_rgba(0,0,0,0.3)]"></div>
  <div class="w-6 h-6 rounded-[2px] bg-[#c44040] shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_1px_2px_rgba(0,0,0,0.3)]"></div>
  <div class="w-6 h-6 rounded-[2px] bg-[#1a6a3a] shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_1px_2px_rgba(0,0,0,0.3)]"></div>
  <!-- ... more tesserae in the grid ... -->
</div>
```

- Each tessera is tiny: `w-5 h-5` or `w-6 h-6` — they must feel like small tile pieces.
- The tray is a dark container with `bg-[#3a3a3a]` or `bg-[#2a2a2a]` — like a sorting tray on the bench.
- Tesserae have slight color variation within the same hue — `bg-[#2a4a8a]` next to `bg-[#3a5a9a]`.
- Each tessera has a subtle inner highlight and outer shadow for 3D depth.
- Organize trays by color family: a blue tray, a gold tray, a red tray, a green tray.

### 2) Tile Nippers

Hand tool for cutting tesserae to shape — the defining tool of mosaic work.

```html
<div class="relative w-20 h-28">
  <!-- Upper jaw -->
  <div class="absolute top-0 left-2 w-8 h-14 bg-gradient-to-b from-[#707878] to-[#505858] rounded-tl-lg shadow-[0_-2px_4px_rgba(0,0,0,0.2)]" style="transform: rotate(-5deg); transform-origin: bottom center;"></div>
  <!-- Lower jaw -->
  <div class="absolute bottom-0 left-2 w-8 h-14 bg-gradient-to-b from-[#505858] to-[#404848] rounded-bl-lg shadow-[0_2px_4px_rgba(0,0,0,0.3)]" style="transform: rotate(5deg); transform-origin: top center;"></div>
  <!-- Pivot bolt -->
  <div class="absolute top-1/2 left-3 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-[#a0a8a8] to-[#707878] border border-[#606868]"></div>
  <!-- Handle grips (rubber-coated) -->
  <div class="absolute -top-2 right-0 w-5 h-16 bg-gradient-to-b from-[#c44040] to-[#a03030] rounded-r-lg"></div>
  <div class="absolute -bottom-2 right-0 w-5 h-16 bg-gradient-to-b from-[#c44040] to-[#a03030] rounded-r-lg"></div>
</div>
```

- The cutting jaws are metal: `bg-gradient-to-b from-[#707878] to-[#505858]`.
- Handle grips are rubber-coated for color: red `#c44040` or blue `#2a4a8a`.
- The jaws open slightly — two angled elements that meet at a pivot point.
- A small chip of tessera can be shown between the jaws: `w-2 h-2 bg-[#c4a043] rotate-45`.

### 3) Grout Spread Texture

The gray cement-like substance that fills gaps between mosaic tiles.

```css
.grout-texture {
  background-color: #8a8a7a;
  background-image:
    radial-gradient(circle at 20% 30%, rgba(0,0,0,0.08) 1px, transparent 1px),
    radial-gradient(circle at 60% 70%, rgba(0,0,0,0.06) 1px, transparent 1px),
    radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 8px 8px, 12px 12px, 6px 6px;
}
```

- Grout gray base: `bg-[#8a8a7a]` — warm gray with a slight olive undertone.
- Fresh wet grout: `bg-[#6a6a5a]` — darker, slightly glossy.
- Dry grout: `bg-[#9a9a8a]` — lighter, matte, chalky.
- Grout between tiles: thin `gap-1` or `gap-0.5` between tesserae reveals the grout color behind.
- Grout smear on tile surface: `bg-[#8a8a7a]/20` overlay on adjacent tesserae — realistic mess.
- The grout texture should have subtle noise/grain — not perfectly flat color.

### 4) Design Cartoon

Paper pattern or sketch that guides mosaic assembly — the master plan.

- `bg-[#f0ead0] border border-[#c4b890] shadow-[0_2px_8px_rgba(0,0,0,0.1)] p-6` — aged parchment surface.
- Pencil lines: `border-[#4a4a3a]/40` thin borders or SVG stroke paths in `#4a4a3a`.
- Grid overlay: `bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:12px_12px]` — squared paper for scaling.
- Filled sections: muted versions of tesserae colors applied to cartoon areas to indicate planned placement.
- Pencil annotation marks: `font-serif text-sm text-[#4a4a3a]/60 italic` — handwritten notes feel.
- The cartoon should look like a working document — slightly worn, not pristine.

### 5) Glass Smalti Pieces

Irregularly shaped, iridescent glass tiles — the jewel-like material of Byzantine mosaics.

```html
<div class="relative inline-block">
  <div class="w-12 h-10 bg-gradient-to-br from-[#2a4a8a] via-[#3a6aff] to-[#1a3a7a] rounded-[3px_8px_5px_10px] shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-1px_3px_rgba(0,0,0,0.2),0_2px_6px_rgba(0,0,0,0.3)]" style="transform: rotate(3deg);"></div>
  <!-- Iridescent sheen overlay -->
  <div class="absolute inset-0 rounded-[3px_8px_5px_10px] bg-gradient-to-tr from-transparent via-[rgba(255,255,255,0.15)] to-[rgba(200,180,255,0.1)] pointer-events-none" style="transform: rotate(3deg);"></div>
</div>
```

- Smalti shapes are deliberately irregular: `rounded-[3px_8px_5px_10px]` — never perfectly square.
- The iridescent sheen is critical: a transparent gradient overlay that shifts from clear to a color tint.
- Common smalti colors: gold `#c4a043` with `via-[#e4c063]`, blue `#2a4a8a` with `via-[#3a6aff]`, green `#1a6a3a` with `via-[#2a8a4a]`.
- Each smalti piece has a unique rotation: `rotate(2deg)`, `rotate(-4deg)`, `rotate(7deg)`.
- The thickness of smalti is visible at edges: `border-r-2 border-[rgba(0,0,0,0.15)]` on the right edge.
- Gold smalti have the strongest iridescent effect — add `via-[#f0d873]` to the gradient.

### 6) Stone Tesserae

Natural colored stone pieces — matte, earthy, slightly irregular.

- `w-6 h-6 bg-[#b49860] rounded-[1px_3px_2px_4px] shadow-[inset_0_1px_3px_rgba(0,0,0,0.15),0_1px_3px_rgba(0,0,0,0.2)]` — base stone tile.
- Stone colors: marble white `#e0dcd0`, travertine beige `#d4c4a0`, limestone gray `#a0a090`, porphyry red `#8a4a3a`, serpentine green `#4a6a3a`, basalt black `#3a3a3a`.
- Stone texture: subtle noise overlay with `opacity: 0.3` — stones are never perfectly smooth.
- Stone edges are slightly chipped: irregular `rounded-[1px_3px_2px_4px]` — never uniform.
- Stone tesserae have NO iridescent sheen — they are matte and earthy.
- Size variation: `w-5 h-5`, `w-6 h-5`, `w-5 h-7` — no two stones are exactly the same size.

### 7) Setting Wax Surface

Warm-toned wax surface where tesserae are temporarily arranged before permanent setting.

- `bg-gradient-to-b from-[#d4c8a0] to-[#c4b890] border border-[#b4a880] shadow-[inset_0_2px_6px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.15)]` — smooth wax base.
- Wax surface has a slight tackiness visual: subtle `bg-[#e4d8b0]/20` glossy patches.
- Tesserae placed on wax sit slightly raised: `shadow-[0_2px_4px_rgba(0,0,0,0.2)]` on each piece.
- Wax color range: beeswax yellow `#d4c8a0`, paraffin white `#e8e4d8`, carnauba cream `#f0e8d0`.
- Pressed impressions in wax: small `bg-[#c4b890]/40` indent marks where tesserae were removed.
- The wax surface should look warm and inviting — the staging area for creative work.

### 8) Mosaic Border Pattern

Repeated geometric border pattern — the framing element of mosaic compositions.

```html
<div class="flex h-8">
  <div class="w-8 h-full bg-[#c4a043]"></div>
  <div class="w-8 h-full bg-[#2a4a8a]"></div>
  <div class="w-8 h-full bg-[#c4a043]"></div>
  <div class="w-8 h-full bg-[#2a4a8a]"></div>
  <!-- Greek key or meander pattern can be built from small squares -->
</div>
```

- Classic border: alternating tesserae in a straight line with grout gaps.
- Greek key / meander: build from small `w-2 h-2` squares in a repeating L-pattern.
- Guilloche (intertwined ribbon): SVG path with tesserae-colored segments.
- Running wave: `bg-[#2a4a8a]` curved segments alternating with `bg-[#c4a043]`.
- Border width: typically 3-7 tesserae wide for classical mosaics.
- Every border element shows grout between tiles: `gap-[2px]` or `gap-[3px]`.

### 9) Grouted Panel

Finished mosaic surface — tesserae embedded in grout, wiped clean.

```html
<div class="relative p-4 bg-[#8a8a7a] rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
  <div class="grid grid-cols-6 gap-[3px]">
    <div class="aspect-square rounded-[1px] bg-[#c4a043] shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)]"></div>
    <div class="aspect-square rounded-[1px] bg-[#2a4a8a] shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)]"></div>
    <!-- ... more tesserae ... -->
  </div>
  <!-- Grout haze on tile surfaces -->
  <div class="absolute inset-0 bg-[#8a8a7a]/5 rounded-lg pointer-events-none"></div>
</div>
```

- The grout color wraps around all tesserae — it is the background of the grid container.
- Gap size: `gap-[2px]` to `gap-[4px]` — tight for fine work, wider for rustic pieces.
- Grout haze: a subtle overlay that dims the tesserae slightly, as real grout residue does.
- Surface sheen: `after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-br after:from-white/5 after:to-transparent after:pointer-events-none` for a wet-fresh look.

## Color Palette System

| Color | Hex | Material |
|---|---|---|
| Grout Gray | `#8a8a7a` | Grout cement, structural background |
| Grout Wet | `#6a6a5a` | Fresh wet grout, darker grout joints |
| Grout Dry | `#9a9a8a` | Dried grout, chalky residue |
| Tesserae Gold | `#c4a043` | Gold leaf glass smalti, warm accent |
| Tesserae Blue | `#2a4a8a` | Lapis lazuli, deep blue glass |
| Tesserae Green | `#1a6a3a` | Malachite, green marble, nature |
| Tesserae Red | `#c44040` | Jasper, garnet, warm fire |
| Tesserae White | `#e0dcd0` | Carrara marble, bright highlights |
| Smalti Metallic | `#3a6aff` | Iridescent blue glass sheen |
| Smalti Gold | `#e4c063` | Gold leaf glass iridescence |
| Stone Natural | `#b49860` | Travertine, limestone, sandstone |
| Stone Dark | `#4a4a3a` | Basalt, dark volcanic stone |
| Design Paper | `#f0ead0` | Cartoon sketch paper, parchment |
| Setting Wax | `#d4c8a0` | Beeswax, temporary work surface |
| Wood Bench | `#8a7040` | Workbench surface |
| Nipper Handle | `#c44040` | Rubber-coated tool grip |

Rules: Mosaic is inherently colorful — use multiple tesserae colors freely. Grout gray is the structural neutral that appears everywhere. Gold is the prestige color (gold smalti are the most valued tesserae). The palette should feel like opening a drawer full of tiny colorful treasures against a gray work surface. Never let any single color dominate more than 40% — mosaics are about the mix.

## Typography Recommendations

- **Display:** Cormorant Garamond, Playfair Display (classical serif — like Roman inscriptions in mosaic).
- **Body:** Lora, Crimson Text (readable serif with historical character).
- **Monospace:** Space Mono, IBM Plex Mono (for tesserae counts, dimensions, grid coordinates).
- **Labels:** `font-sans font-medium text-xs tracking-wider uppercase text-[#8a8a7a]` — like grout-etched text.
- **Section headers:** `font-serif italic text-[#4a4a3a]` — evokes pencil annotations on design cartoons.
- Roman mosaic lettering: use all-caps with wide letter-spacing for section titles — `tracking-[0.2em]`.
- Measurement text: `font-mono text-sm text-[#6a6a5a]` — dimensions, tile counts, grid coordinates.

## Component Architecture Pattern

Mosaic Studio UI follows a **Studio Workshop Layout** pattern:

```
┌─────────────────────────────────────┐
│  Studio Header (project name, view) │
├──────────┬──────────────────────────┤
│ Tesserae │  Design Surface          │
│ Trays    │  (cartoon/grouted panel) │
│ (color   │                          │
│  sorted  │                          │
│  bins)   │                          │
├──────────┼──────────────────────────┤
│ Tools    │  Detail / Preview        │
│ (nippers,│  (close-up, pattern,     │
│  tweezers│   measurements)          │
│  wax)    │                          │
└──────────┴──────────────────────────┘
```

Key principles:
- The design surface is the visual center — colorful tesserae arranged on grout or cartoon.
- Tesserae trays line the left side — organized by color family.
- Tools panel at bottom left — nippers, tweezers, wax.
- Detail panel shows close-up views and measurements.
- Grout gray provides the neutral frame around all colorful elements.
- Borders between panels use `border-[#8a8a7a]/30` — grout-colored dividers.

## Interaction Rules

- **Hover on tesserae:** slight glow or lift — `hover:shadow-[0_0_8px_rgba(196,160,67,0.4)] hover:-translate-y-0.5`.
- **Select tesserae:** border highlight — `ring-2 ring-[#c4a043] ring-offset-1 ring-offset-[#8a8a7a]`.
- **Drag tesserae:** cursor becomes a small crosshair, tessera follows with slight rotation.
- **Cut with nippers:** click on tessera in tray → nibper jaw animation → tessera splits into two pieces.
- **Place on surface:** tessera drops into grid position with a small bounce — `animate-[bounce_0.3s_ease-out]`.
- **Grout spread:** dragging across filled mosaic adds grout overlay between tiles.
- **Undo placement:** right-click removes tessera with a pop animation.
- **Color tray selection:** clicking a color tray highlights all tesserae of that color on the design surface.
- **Zoom on detail:** scroll wheel zooms the design surface — grid squares get larger.
- **Transitions:** all tesserae transitions `duration-150` — quick, snappy, like picking up a tile.
- **Scroll on color trays:** horizontal scroll with styled scrollbar `scrollbar-thumb-[#8a8a7a]`.

## Reusable Tailwind Tokens

- Tessera: `w-6 h-6 rounded-[2px] bg-[COLOR] shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_1px_2px_rgba(0,0,0,0.3)]`.
- Smalti piece: `rounded-[3px_8px_5px_10px] bg-gradient-to-br from-[C1] via-[C2] to-[C3] shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_2px_6px_rgba(0,0,0,0.3)]`.
- Stone tessera: `rounded-[1px_3px_2px_4px] bg-[STONE] shadow-[inset_0_1px_3px_rgba(0,0,0,0.15)]`.
- Grout panel: `bg-[#8a8a7a] rounded-lg shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)]`.
- Tesserae tray: `bg-[#3a3a3a] rounded-lg border-2 border-[#2a2a2a] shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)]`.
- Design cartoon: `bg-[#f0ead0] border border-[#c4b890] shadow-[0_2px_8px_rgba(0,0,0,0.1)]`.
- Setting wax: `bg-gradient-to-b from-[#d4c8a0] to-[#c4b890] border border-[#b4a880]`.
- Nipper jaw: `bg-gradient-to-b from-[#707878] to-[#505858]` with pivot at center.
- Grout line: `gap-[2px]` or `gap-[3px]` between tesserae in a grouted grid.
- Grout haze: `bg-[#8a8a7a]/5` overlay on finished mosaic surface.
- Border pattern: alternating `w-8 h-8 bg-[C1]` and `w-8 h-8 bg-[C2]` with `gap-[2px]`.
- Tool label: `font-sans font-medium text-xs tracking-wider uppercase text-[#8a8a7a]`.

## Quality Checklist

- At least one tesserae tray with multiple colors of small tile pieces.
- Grout texture visible between tesserae — warm gray with slight grain.
- Design cartoon or paper pattern present.
- At least one glass smalti piece with iridescent sheen overlay.
- At least one stone tessera with matte, natural finish.
- Tile nippers tool visible.
- Setting wax surface present.
- At least one grouted panel showing assembled mosaic.
- Color palette uses multiple tesserae colors — not monochromatic.
- Tesserae are small (5-8px units) — not large tiles.
- Border pattern element present (Greek key, meander, or simple alternating).
- Typography uses classical serif or historical fonts.
- Grout gray appears as structural neutral throughout.
- The aesthetic reads as a mosaic workshop — colorful, patient, ancient craft.
- Each tessera has individual 3D depth (highlight + shadow).
- No tesserae are perfectly aligned to a grid — slight irregularity is intentional.

## Anti-Patterns

- Missing grout lines between tiles (grout is THE defining visual element of mosaic).
- Large tiles or panels where tesserae should be (mosaic is about many small pieces).
- Single-color palette (mosaic is inherently multicolor — use at least 4-5 tesserae colors).
- Missing texture variation between glass smalti and stone tesserae (shiny vs. matte is essential).
- Perfectly uniform tesserae (mosaic pieces have irregular shapes and slight size variation).
- No design cartoon or planning document (mosaic is planned before assembled).
- Clean, digital-looking surfaces (mosaic is tactile, ancient, hand-placed).
- Missing border or frame element (classical mosaics always have borders).
- Grout color that is too light or too dark (warm gray `#8a8a7a` is the standard).
- No depth or 3D quality on tesserae (each piece must cast a shadow and catch light).
- Modern sans-serif typography dominating (mosaic needs classical Roman serif character).
- Missing setting wax or work surface (the bench staging area grounds the workshop identity).
- Smooth, perfect grout surface (real grout has texture, haze, and slight imperfection).
- Tesserae too large relative to the overall composition (they should feel like many, many pieces).
- Uniform tesserae placement with no rotation or irregularity (mosaic has organic character).

## Accessibility Considerations

- Grout gray backgrounds with dark text provide adequate contrast (WCAG AA).
- Tesserae color labels must not rely on color alone — include shape, position, or text labels.
- Focus states: `focus:ring-2 focus:ring-[#c4a043]/60` (gold ring against grout gray).
- Tesserae grid keyboard navigation: arrow keys move between pieces, Enter selects.
- Color-blind users need pattern or texture differentiation — add subtle `bg-[url(...)]` patterns to distinguish red from green tesserae.
- Grout texture overlays are decorative — `aria-hidden="true"`.
- Smalti iridescent sheen animations must respect `prefers-reduced-motion: reduce`.
- Design cartoon annotations need `aria-label` for pencil marks and grid coordinates.
- Touch targets on individual tesserae must be at least 44x44px for mobile placement.
- Tesserae counts and grid positions must be programmatically associated, not conveyed by position alone.
- Nipper tool interactions need keyboard alternatives — keyboard shortcut to cut selected tessera.
- Color tray selections must announce the color name and count to screen readers.
