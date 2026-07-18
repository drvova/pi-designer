---
name: photo-darkroom-ui
description: Build photo darkroom UI components (red safe light, developing tray, hanging prints, enlarger, film strip, chemical bottles, timer dial) with dim red lighting, chemical process surfaces, and the quiet magic of analog photograph development. Trigger this skill when the user asks for photo darkroom design, red safe light UI, developing tray, hanging prints layout, enlarger silhouette, film strip border, chemical bottles, analog photo processing, print developing, darkroom timer, or photographic darkroom interfaces.
---

# Photo Darkroom UI

Use this skill to design and implement atmospheric interfaces inspired by analog photograph darkrooms: dim red safe light illumination pooling across chemical trays, wet prints hanging from clips on a clothesline, the tall silhouette of an enlarger, film strip borders with perforated sprocket holes, amber chemical bottles lined up along the shelf, and the slow ritual of a print emerging in the developer tray. This is a focused variation of the darkroom aesthetic, centered on the physical darkroom room itself and the objects within it.

## Non-Negotiable Foundations

The photo darkroom aesthetic is defined by near-total darkness punctuated by a single dim red safe light. Every surface in the room absorbs light rather than reflecting it. The red glow is ambient and atmospheric — it fills the space the way a candle fills a dark cathedral, not the way a screen fills a face. The palette is severely limited: deep blacks and near-blacks, a muted safe-light red, warm cream from print paper, amber from chemical bottles, and the occasional cool silver of a drying clip. Nothing should feel bright, clean, or digital. The beauty is in the darkness and the slow emergence of an image.

Core material identity:
- The red safe light is the ONLY light source — it must appear to emanate from a single point and decay naturally into darkness.
- Surfaces in the darkroom are matte, wet, or slightly reflective from chemical residue — never glossy or polished.
- Developing tray liquid has a subtle sheen that catches the red light — flat trays without liquid feel wrong.
- Hanging prints are damp paper that sags slightly — stiff upright rectangles are not wet prints.
- Film strips are translucent black with orange-brown edge tint — solid black strips are rubber, not film.
- Chemical bottles are amber glass with handwritten or printed labels — they glow faintly where red light passes through them.
- Timer dials are mechanical, round, with physical tick marks — not digital countdowns.
- The enlarger is a tall vertical silhouette — the most imposing shape in the room.

## Core Material Recipes

### 1) Safe Light Background

The defining environmental surface: near-pitch darkness with a single red light source casting a soft, decaying radial glow.

- `bg-[#0a0303]` as the base darkness — this is NOT `#000000` because even total darkrooms have a faint red wash.
- Red safe light glow: `bg-[radial-gradient(ellipse_at_50%_20%,rgba(138,32,32,0.18)_0%,rgba(138,32,32,0.06)_30%,rgba(6,2,2,0)_70%)]` layered over the base.
- The glow must be positioned near the top-center (where a safe light bulb would be mounted) and fade downward.
- For a second light source variant (e.g., enlarger head): `bg-[radial-gradient(circle_at_30%_40%,rgba(138,32,32,0.12)_0%,transparent_50%)]` — slightly dimmer and offset.
- The key rule: red is AMBIENT and DECAYING. Never fill a surface with bright red. The darkness is the dominant visual, the red is the accent that proves you can barely see.

### 2) Developing Tray Panel

A shallow rectangular tray holding chemical solution where prints are submerged during development.

- `bg-gradient-to-br from-[#1e0c0c] to-[#0e0505] border border-[#3a1818] rounded-lg p-6 shadow-[0_0_20px_rgba(138,32,32,0.08),inset_0_2px_12px_rgba(0,0,0,0.6)]`.
- Liquid surface inside the tray: `absolute inset-2 bg-gradient-to-b from-[#2a1010] to-[#1a0808] rounded-md shadow-[inset_0_1px_3px_rgba(138,32,32,0.15)]` with a subtle `overflow-hidden`.
- Liquid surface highlight: a thin `h-[1px] bg-[#8a2020]/20 rounded-full` line across the top third of the liquid — the red light catching the meniscus.
- Tray lip: `border-t-2 border-t-[#2a1414]` on the outer container to show the raised rim of the physical tray.
- The tray should feel like it has WEIGHT and LIQUID inside — heavy enough that you set a print into it and it doesn't move.

### 3) Hanging Print Strip

Photographs clipped to a line, dripping slightly, developing under the red light.

```html
<div class="relative py-8">
  <!-- Clothesline -->
  <div class="absolute top-0 left-4 right-4 h-[1px] bg-[#4a2a2a]/40"></div>
  <!-- Print 1 -->
  <div class="absolute top-0 left-[15%] -translate-x-1/2">
    <!-- Clip -->
    <div class="w-3 h-4 bg-gradient-to-b from-[#8a8a8a] to-[#6a6a6a] rounded-sm mx-auto shadow-[0_1px_2px_rgba(0,0,0,0.3)]"></div>
    <!-- Damp paper -->
    <div class="w-28 h-36 mt-1 bg-gradient-to-b from-[#d8d0c4] to-[#c8bcac] rounded-sm shadow-[0_2px_8px_rgba(0,0,0,0.3)] overflow-hidden" style="transform: rotate(-2deg) skewX(0.5deg);">
      <!-- Print image area (sepia/monochrome) -->
      <div class="m-1.5 h-[calc(100%-12px)] bg-gradient-to-b from-[#8a7a6a] to-[#6a5a4a] rounded-sm"></div>
    </div>
  </div>
  <!-- Print 2 (slightly different angle and size) -->
  <div class="absolute top-0 left-[55%] -translate-x-1/2">
    <div class="w-3 h-4 bg-gradient-to-b from-[#8a8a8a] to-[#6a6a6a] rounded-sm mx-auto shadow-[0_1px_2px_rgba(0,0,0,0.3)]"></div>
    <div class="w-32 h-40 mt-1 bg-gradient-to-b from-[#e0d8cc] to-[#d0c4b4] rounded-sm shadow-[0_2px_8px_rgba(0,0,0,0.3)] overflow-hidden" style="transform: rotate(1.5deg);">
      <div class="m-1.5 h-[calc(100%-12px)] bg-gradient-to-b from-[#7a6a5a] to-[#5a4a3a] rounded-sm"></div>
    </div>
  </div>
</div>
```

- Print paper is warm cream/off-white: `from-[#d8d0c4] to-[#c8bcac]` — not bright white, this is photographic paper.
- The slight rotation and skew conveys dampness — wet paper hangs unevenly.
- Clips are small metallic rectangles: `from-[#8a8a8a] to-[#6a6a6a]`.
- Print content areas are sepia/monochrome gradients — no color photos in a darkroom.
- Drip marks: optional `w-[1px] h-6 bg-[#d8d0c4]/20 rounded-full` trailing below a print.

### 4) Enlarger Silhouette

The tall, imposing optical instrument that projects film negatives onto light-sensitive paper.

```html
<div class="relative w-32 h-64">
  <!-- Enlarger head (the box at top with lamp and lens) -->
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-24 bg-gradient-to-b from-[#1a1010] to-[#0e0808] border border-[#2a1414] rounded-t-lg shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
    <!-- Lens cone -->
    <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-4 bg-gradient-to-b from-[#1a1010] to-[#0a0606] rounded-b-full border-x border-b border-[#2a1414]"></div>
    <!-- Faint red light beam from lens -->
    <div class="absolute -bottom-16 left-1/2 -translate-x-1/2 w-16 h-16 bg-[radial-gradient(ellipse_at_50%_0%,rgba(138,32,32,0.1)_0%,transparent_80%)]"></div>
  </div>
  <!-- Vertical column (the upright) -->
  <div class="absolute top-24 left-1/2 -translate-x-1/2 w-3 h-36 bg-gradient-to-b from-[#1a1010] to-[#120a0a] border-x border-[#2a1414]"></div>
  <!-- Base board -->
  <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-4 bg-gradient-to-b from-[#1e1212] to-[#0e0808] border border-[#2a1414] rounded-sm shadow-[0_2px_4px_rgba(0,0,0,0.4)]"></div>
</div>
```

- The enlarger is a DARK SILHOUETTE — it should be barely visible against the dark background, with just enough edge highlight to read its shape.
- The light beam from the lens is the only bright part: a faint red radial glow pointing downward.
- The column is the tallest vertical element in the room — it anchors the composition.
- Base board is wider than the head, giving the structure a stable, bottom-heavy stance.

### 5) Film Strip Border

Perforated film strip used as a decorative border or content frame — the DNA of photography.

- Strip body: `bg-[#0d0d0d] h-10 flex items-center gap-[2px] p-1 border border-[#1a1a1a]` — near-black with a subtle edge.
- Frame cells: `w-14 h-7 bg-[#1a1a1a] border border-[#121212]` for each negative frame, with the content inside tinted `bg-[#2a1e16]` (film base has a warm orange-brown cast).
- Sprocket holes: `w-2 h-2 rounded-sm bg-[#080808] border border-[#1a1a1a]` repeated along the top and bottom edges.
- Film edge markings: `font-mono text-[6px] text-[#3a2a1a] tracking-widest` — frame numbers like "16A", "17" in tiny type along the film edge.
- The film strip has a characteristic orange-brown edge tint: add a `bg-gradient-to-r from-[#3a2a1a]/20 via-transparent to-[#3a2a1a]/20` overlay on the strip body.

### 6) Chemical Bottle Shelf

A row of amber glass bottles with labels — the reagents of the darkroom process.

```html
<div class="flex items-end gap-3 p-4 bg-[#0e0606] rounded-lg border border-[#2a1414]">
  <!-- Developer bottle (tallest) -->
  <div class="relative flex flex-col items-center">
    <div class="w-2 h-3 bg-[#3a2210] rounded-t-sm"></div>
    <div class="w-8 h-16 bg-gradient-to-b from-[#8a5a1a]/80 via-[#6a4a12]/90 to-[#4a320a]/95 rounded-b-lg border border-[#5a3a0a] shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
      <div class="absolute top-4 left-1/2 -translate-x-1/2 w-5 h-5 bg-[#d8d0c4]/80 rounded-sm flex items-center justify-center">
        <span class="font-mono text-[4px] text-[#2a1a08] leading-none">DEV</span>
      </div>
    </div>
  </div>
  <!-- Stop bath (medium) -->
  <div class="relative flex flex-col items-center">
    <div class="w-2 h-3 bg-[#3a2210] rounded-t-sm"></div>
    <div class="w-7 h-12 bg-gradient-to-b from-[#8a5a1a]/70 via-[#6a4a12]/80 to-[#4a320a]/90 rounded-b-lg border border-[#5a3a0a] shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
      <div class="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#d8d0c4]/80 rounded-sm flex items-center justify-center">
        <span class="font-mono text-[4px] text-[#2a1a08] leading-none">STP</span>
      </div>
    </div>
  </div>
  <!-- Fixer (short and wide) -->
  <div class="relative flex flex-col items-center">
    <div class="w-3 h-2 bg-[#3a2210] rounded-t-sm"></div>
    <div class="w-10 h-10 bg-gradient-to-b from-[#8a5a1a]/70 via-[#6a4a12]/80 to-[#4a320a]/90 rounded-b-lg border border-[#5a3a0a] shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
      <div class="absolute top-2.5 left-1/2 -translate-x-1/2 w-5 h-4 bg-[#d8d0c4]/80 rounded-sm flex items-center justify-center">
        <span class="font-mono text-[4px] text-[#2a1a08] leading-none">FIX</span>
      </div>
    </div>
  </div>
</div>
```

- Amber glass: `from-[#8a5a1a]/80 to-[#4a320a]/95` — the bottles GLOW where the red light passes through them.
- Labels are cream paper: `bg-[#d8d0c4]/80` with tiny mono text.
- Bottle caps/corks: `bg-[#3a2210]` — dark rubber or cork stoppers.
- Each bottle is a different height and width — uniform bottles look like a product shot, not a working darkroom.
- The red safe light creates a faint highlight on one side of each bottle: add `shadow-[2px_0_4px_rgba(138,32,32,0.08)]` for directional red light.

### 7) Timer Dial

A mechanical darkroom timer with a circular dial face and rotating pointer.

```html
<div class="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#2a1818] to-[#1a0e0e] border-2 border-[#3a2020] shadow-[0_2px_8px_rgba(0,0,0,0.4),inset_0_1px_3px_rgba(138,32,32,0.1)]">
  <!-- Tick marks -->
  <div class="absolute inset-2 rounded-full">
    <!-- 12 tick marks around the dial -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-[#8a2020]/60"></div>
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-[#8a2020]/60"></div>
    <div class="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-[1px] bg-[#8a2020]/60"></div>
    <div class="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-[1px] bg-[#8a2020]/60"></div>
  </div>
  <!-- Pointer -->
  <div class="absolute top-1/2 left-1/2 w-[1px] h-8 bg-[#c43030] origin-bottom -translate-x-1/2 -translate-y-full rotate-[45deg]"></div>
  <!-- Center pin -->
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#c43030] shadow-[0_0_4px_rgba(196,48,48,0.4)]"></div>
</div>
```

- Timer face is dark with red accent tick marks and pointer — it reads under red light.
- The center pin is the brightest red element on the timer — it catches the eye.
- For animated timers, rotate the pointer with `transform-origin: bottom center` and `rotate()`.
- Timer labels: `font-mono text-[8px] text-[#8a2020]/50` — "1:00", "2:00" etc. barely visible at the tick positions.
- The timer must look mechanical — thick bezel, physical tick marks, metal pointer. No digital display.

### 8) Drying Line with Clips

A wider view of multiple prints hanging on a taut line, the classic darkroom晾干 scene.

- Line: `h-[1px] bg-[#4a2a2a]/30` stretched horizontally.
- Clips: `w-2 h-3 bg-gradient-to-b from-[#7a7a7a] to-[#5a5a5a] rounded-sm` with a `shadow-[0_1px_2px_rgba(0,0,0,0.3)]` — simple spring clips.
- Prints alternate between `w-24 h-30` and `w-28 h-36` with slight random rotations between -3deg and +4deg.
- Some prints are face-up (showing the image area), some face-down (showing plain paper back `bg-[#d8d0c4]`).
- Drips: `w-[1px] h-4 to-h-8 bg-[#d8d0c4]/15 rounded-full` trailing from print corners.

### 9) Red Safe Light Fixture

The actual light source — a small bulb behind a red filter, mounted on the wall.

```html
<div class="relative w-12 h-12">
  <!-- Wall mount bracket -->
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-4 bg-[#2a1a1a] rounded-b-sm border border-[#3a2020]"></div>
  <!-- Red filter housing -->
  <div class="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-8 bg-gradient-to-b from-[#5a1a1a] to-[#3a0e0e] rounded-full border border-[#6a2a2a] shadow-[0_0_20px_rgba(138,32,32,0.3),0_0_40px_rgba(138,32,32,0.15)]"></div>
  <!-- Bulb glow (the brightest red point) -->
  <div class="absolute top-5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#c43030]/30 shadow-[0_0_12px_rgba(196,48,48,0.5),0_0_24px_rgba(138,32,32,0.3)]"></div>
</div>
```

- The fixture itself is small and utilitarian — this is equipment, not decoration.
- The glow radiates outward in a radial gradient that fades into the surrounding darkness.
- The brightest point is the bulb center — `bg-[#c43030]/30` with strong shadow glow.
- This fixture IS the source of all the ambient red light in the room — place it at the top of the composition.

### 10) Darkroom Button

A functional button that feels like a piece of darkroom equipment — mechanical, dim, purposeful.

- `bg-gradient-to-b from-[#3a1818] to-[#1e0c0c] text-[#c4a890] font-mono text-xs uppercase tracking-[0.2em] px-8 py-3 border border-[#5a2a2a] shadow-[0_2px_0_#0e0606,inset_0_1px_0_rgba(138,32,32,0.2)] hover:shadow-[0_0_12px_rgba(138,32,32,0.2),0_2px_0_#0e0606,inset_0_1px_0_rgba(138,32,32,0.2)] active:translate-y-0.5 active:shadow-none transition-all duration-200`.
- The button is dark with warm text — it should feel like pressing a mechanical switch on a darkroom timer.
- No bright colors, no glowing borders — the hover glow is subtle, barely perceptible.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Darkroom Black | `#0a0303` | Primary background — near-total darkness |
| Deep Dark | `#0e0606` | Panel backgrounds, secondary surfaces |
| Safe Light Red | `#8a2020` | Primary accent — the red light itself |
| Warm Red | `#c43030` | Brightest red — light source, active elements |
| Muted Red | `#5a1a1a` | Red fixtures, housing, structural red |
| Tray Dark | `#1e0c0c` | Developing tray surfaces |
| Print Cream | `#d8d0c4` | Print paper, clip highlight |
| Print Warm | `#c8bcac` | Print paper shadow side |
| Paper Back | `#e0d8cc` | Print paper back (face-down prints) |
| Amber | `#8a5a1a` | Chemical bottles, warm accents |
| Amber Dark | `#4a320a` | Bottle shadows, deep amber |
| Film Black | `#0d0d0d` | Film strip body |
| Film Base | `#2a1e16` | Film emulsion, negative frames |
| Film Edge | `#3a2a1a` | Film edge markings, warm tint |
| Clip Silver | `#8a8a8a` | Metal drying clips |
| Text Warm | `#c4a890` | Body text on dark backgrounds |
| Text Dim | `#8a6a5a` | Secondary text, labels |
| Border Subtle | `#2a1414` | Panel borders, structural edges |

Rules: The palette is DARK with RED as the only chromatic color. Warm cream and amber tones reference photographic paper and chemistry. The darkness must dominate — 85%+ of the visual area should be near-black. Red appears only as ambient glow and accent, never as a solid fill. Think: pitch-black room with one dim red bulb.

## Typography Recommendations

- **Display:** Courier Prime, IBM Plex Mono (typewriter/log feel — like handwritten darkroom process notes).
- **Body:** Lora, Source Serif Pro (warm readable serif — like text printed on photographic paper).
- **Labels:** `font-mono text-[10px] uppercase tracking-[0.25em] text-[#8a6a5a]/70` (chemical labels: "D-76", "FIXER", "STOP BATH", "WASH").
- **Timer numbers:** `font-mono text-xs text-[#8a2020]/60` — barely visible, functional.
- **Print captions:** `font-serif text-sm italic text-[#c4a890]/50` — like pencil written on the back of a print.
- Numbers and measurements should feel like handwritten notes in a darkroom logbook — precise but human.
- Avoid any cold, geometric sans-serif — the darkroom is a warm, analog, human space.

## Component Architecture Pattern

Photo darkroom UI follows a **Room Layout** pattern:

```
┌─────────────────────────────────────┐
│  Safe Light (top center glow)       │
├──────────┬──────────────────────────┤
│ Chemical │  Enlarger    │ Drying    │
│ Shelf    │  Station     │ Line      │
│ (bottles │  (enlarger   │ (prints   │
│  + timer)│   silhouette)│  on line) │
├──────────┴──────────────────────────┤
│  Developing Tray Area               │
│  (trays with liquid, prints         │
│   submerged or emerging)            │
├─────────────────────────────────────┤
│  Film Strip Border (decorative)     │
└─────────────────────────────────────┘
```

Key principles:
- The safe light is the environmental anchor — place the glow source at the top of the layout.
- Developing trays are the workspace center — they are where the work happens.
- The enlarger silhouette provides vertical structure against the horizontal trays.
- Chemical bottles line the shelf edges — they frame the workspace.
- Film strips and hanging prints are decorative borders and content frames.
- Every panel uses near-black backgrounds with the faintest red border to separate sections.
- Content areas within panels are slightly lighter (e.g., `bg-[#0e0606]` vs `bg-[#0a0303]`) to create depth without brightness.

## Interaction Rules

- **Hover on developing trays:** liquid surface shimmers — `hover:shadow-[inset_0_1px_6px_rgba(138,32,32,0.15)]` adding a faint red reflection.
- **Hover on chemical bottles:** bottle glows slightly brighter — `hover:shadow-[2px_0_6px_rgba(138,32,32,0.15)]` simulating light passing through amber glass.
- **Hover on hanging prints:** print sways gently — `hover:rotate-1 hover:transition-transform hover:duration-500` (wet paper moves slowly).
- **Timer dial:** pointer rotates smoothly — `transition-transform duration-1000 ease-linear`.
- **Hover on enlarger:** faint red light beam appears below — `group-hover:opacity-100 opacity-0 transition-opacity duration-700` on the light beam element.
- **Hover on film strip frames:** individual frames brighten — `hover:brightness-125` with `transition-all duration-300`.
- **Button press:** mechanical depression — `active:translate-y-0.5 active:shadow-none` like pressing a physical switch.
- **Transitions:** everything moves SLOW in the darkroom — minimum `duration-300`, preferably `duration-500` or `duration-700`. The darkroom is a place of patience.
- **Scroll:** custom scrollbar in darkroom tones — `scrollbar-thumb-[#3a1818] scrollbar-track-[#0a0303]`.

## Reusable Tailwind Tokens

- Safe light bg: `bg-[#0a0303] bg-[radial-gradient(ellipse_at_50%_20%,rgba(138,32,32,0.18)_0%,rgba(138,32,32,0.06)_30%,rgba(6,2,2,0)_70%)]`.
- Developing tray: `bg-gradient-to-br from-[#1e0c0c] to-[#0e0505] border border-[#3a1818] rounded-lg shadow-[0_0_20px_rgba(138,32,32,0.08)]`.
- Chemical bottle amber: `bg-gradient-to-b from-[#8a5a1a]/80 to-[#4a320a]/95 rounded-b-lg border border-[#5a3a0a]`.
- Print paper: `bg-gradient-to-b from-[#d8d0c4] to-[#c8bcac] rounded-sm shadow-[0_2px_8px_rgba(0,0,0,0.3)]`.
- Film strip: `bg-[#0d0d0d] border border-[#1a1a1a]` with sprocket holes and frame cells.
- Timer dial: `rounded-full bg-gradient-to-br from-[#2a1818] to-[#1a0e0e] border-2 border-[#3a2020]`.
- Darkroom button: `bg-gradient-to-b from-[#3a1818] to-[#1e0c0c] text-[#c4a890] font-mono text-xs uppercase tracking-[0.2em] border border-[#5a2a2a]`.
- Enlarger silhouette: dark vertical structure with faint red light beam below.
- Drying clip: `w-2 h-3 bg-gradient-to-b from-[#7a7a7a] to-[#5a5a5a] rounded-sm`.
- Safe light fixture: `bg-gradient-to-b from-[#5a1a1a] to-[#3a0e0e] rounded-full shadow-[0_0_20px_rgba(138,32,32,0.3)]`.
- Panel border: `border border-[#2a1414]` — the faintest visible red line separating dark panels.
- Chemical label: `font-mono text-[10px] uppercase tracking-[0.25em] text-[#8a6a5a]/70`.

## Quality Checklist

- Background is near-total darkness with dim red safe light glow emanating from a visible source.
- At least one developing tray with liquid surface and subtle reflection highlight.
- Chemical bottles in amber glass with labels (DEV, STP, FIX at minimum) lined up on a shelf.
- Film strip border with sprocket holes and frame cells present as decorative element.
- Hanging prints on a line with clips, showing slight rotation/skew for dampness.
- Enlarger silhouette providing vertical structure in the composition.
- Timer dial with mechanical tick marks and red pointer.
- Safe light fixture visible as the ambient light source.
- Color palette is 85%+ near-black, with red as the only chromatic accent.
- Amber tones appear only on chemical bottles — nowhere else dominates warm.
- Typography is monospace/serif — no cold geometric sans-serif.
- All transitions and animations are slow and contemplative (300ms minimum).
- The aesthetic reads unmistakably as a photographic darkroom — analog, chemical, ritual.
- Nothing feels bright, clean, digital, or modern.
- Print paper tones are warm cream — never bright white.
- Red is always AMBIENT glow, never a solid fill or bright surface.

## Anti-Patterns

- Bright red backgrounds or panels (the red is a DIM SAFE LIGHT glow, not a color theme).
- Bright white or light surfaces anywhere (darkroom is DARK — even paper is cream, not white).
- Missing developing tray with liquid (this is the central workspace of the darkroom).
- Missing chemical bottles or labels (these are essential props that define the space).
- Missing film strip or sprocket holes (photography's most recognizable visual element).
- Digital countdown timers (the timer is mechanical — a dial with a physical pointer).
- Clean, bright, or sterile environments (darkroom is messy, wet, chemical, and human).
- Modern sans-serif typography (use typewriter mono or warm serif only).
- Fast animations or snappy transitions (the darkroom is slow and patient).
- Bright multi-color palettes (the palette is black + red + amber + cream, nothing else).
- Missing the enlarger silhouette (it is the tallest, most imposing shape in the room).
- Color photography or vibrant image content (everything in the darkroom is monochrome/sepia).
- Glossy or reflective surfaces (darkroom surfaces are matte, wet, or chemical-stained).
- Missing hanging prints or drying line (prints emerging and drying is the entire purpose).
- cheerful or energetic mood (darkroom is quiet, focused, and contemplative).

## Accessibility Considerations

- Near-black backgrounds with warm cream text must pass WCAG AA — `#c4a890` on `#0a0303` provides approximately 8.5:1 contrast ratio (passes AAA).
- Focus states: `focus:ring-2 focus:ring-[#c43030]/40` (dim red ring on dark) — visible without being jarring.
- Safe light glow decorative overlays must be `aria-hidden="true"` — they are environmental, not functional.
- Chemical bottle labels must have accessible text alternatives — the tiny mono labels are decorative in the recipe but must be readable or have `aria-label` in implementation.
- Film strip sprocket holes and frame borders are decorative — `aria-hidden="true"` on decorative SVG/HTML elements.
- Timer dial needs a screen-reader-accessible time value — the visual dial is supplemented by a visually-hidden text value.
- Hanging print images need `alt` text describing the photograph content.
- The red-tinted environment may reduce readability for some users — provide a high-contrast mode toggle where possible.
- Animations (print sway, timer rotation, liquid shimmer) must respect `prefers-reduced-motion: reduce`.
- Touch targets on bottle selection and print interaction must be at least 44x44px despite the small-scale darkroom aesthetic.
- Color-only distinctions (red light on vs. off) must have text or icon alternatives.
- The dim ambient aesthetic is intentionally low-contrast for atmosphere — ensure all interactive elements rise above the ambient darkness with sufficient contrast for operation.
