---
name: microscopy-ui
description: Build microscopy UI components (cellular imagery, fluorescence staining, hexagonal grid overlays, molecular structures, scientific measurement scales, fluorescent green/magenta/cyan data) with dark field backgrounds, fluorescent accent colors, and the precise visual language of scientific imaging. Trigger this skill when the user asks for microscopy, cellular UI, molecular biology, fluorescence imaging, scientific visualization, or lab data interfaces.
---

# Microscopy UI

Use this skill to design and implementation scientific interfaces inspired by microscopy and molecular biology: dark field backgrounds, fluorescence-stained cellular imagery (green/magenta/cyan), hexagonal grid measurement overlays, molecular structure diagrams, scale bars, and the precise data-rich aesthetic of scientific imaging.

## Core Material Recipes

### 1) Dark Field Background

The foundational surface: dark microscope field of view.

- `bg-[#000810]` (near-black with slight blue).
- Subtle grain: SVG noise at `opacity-[0.02]` (sensor noise).
- Vignette: `shadow-[inset_0_0_60px_rgba(0,0,0,0.6)]` (microscope field-of-view edge darkening).

### 2) Fluorescent Panel

Dark panel with fluorescent-color data accents.

- `bg-[#001020]/80 backdrop-blur-sm border border-[#00ff88]/20 rounded-lg p-6 shadow-[0_0_15px_rgba(0,255,136,0.06)]`.

### 3) Hexagonal Grid Overlay

Scientific measurement grid (like microscopy coordinate system).

- `bg-[linear-gradient(60deg,rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(-60deg,rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(0deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:20px_35px]`.

### 4) Fluorescent Data Readout

Scientific data display with fluorescence colors.

- `font-mono text-sm text-[#00ff88]` for primary data.
- `font-mono text-xs text-[#ff00aa]` for secondary channel.
- `font-mono text-xs text-[#00aeef]` for tertiary channel.
- Format: `λ=488nm  ROI:03  COUNT:1,247  INT:8.3e4`.

### 5) Scale Bar

Microscopy scale measurement bar.

- `flex items-center gap-2`.
- Bar: `w-12 h-0.5 bg-[#00ff88]`.
- Label: `font-mono text-[10px] text-[#00ff88]` showing "10 μm".

### 6) Molecular Structure Accent

Simple hexagonal molecular ring SVG.

```html
<svg viewBox="0 0 60 60" class="w-15 h-15 opacity-30">
  <g fill="none" stroke="#00ff88" stroke-width="1">
    <polygon points="30,5 50,17 50,43 30,55 10,43 10,17"/>
    <circle cx="30" cy="5" r="3" fill="#00ff88"/>
    <circle cx="50" cy="17" r="3" fill="#ff00aa"/>
    <circle cx="50" cy="43" r="3" fill="#00aeef"/>
    <circle cx="30" cy="55" r="3" fill="#00ff88"/>
    <circle cx="10" cy="43" r="3" fill="#ff00aa"/>
    <circle cx="10" cy="17" r="3" fill="#00aeef"/>
  </g>
</svg>
```

### 7) Microscopy Button

Scientific dark-mode button.

- `bg-[#001020] text-[#00ff88] font-mono font-medium text-sm uppercase tracking-wider px-8 py-3 border border-[#00ff88]/30 hover:bg-[#001828] hover:border-[#00ff88]/50 hover:shadow-[0_0_10px_rgba(0,255,136,0.2)] transition-all`.

## Color Palette System

| Color | Hex | Fluorophore | Channel |
|---|---|---|
| FITC Green | `#00ff88` | FITC/GFP | Primary (488nm) |
| TRITC Magenta | `#ff00aa` | TRITC/mCherry | Secondary (561nm) |
| DAPI Cyan | `#00aeef` | DAPI/Cy5 | Tertiary (405nm) |
| Dark Field | `#000810` | Background | N/A |
| Panel Dark | `#001020` | Surface | N/A |
| Amber | `#ffaa00` | Rare warning | Alert |

Rules: Near-black dark field backgrounds. Fluorescent green, magenta, and cyan are the ONLY bright colors (they represent fluorescence channels). Everything else is dark with subtle blue-gray. The palette should feel like looking through a fluorescence microscope.

## Typography Recommendations

- **Primary:** JetBrains Mono, IBM Plex Mono (scientific monospace — mandatory).
- **Display:** Space Grotesk (clean scientific sans for headings).
- **Data:** `font-mono text-sm` for all measurements and values.
- **Labels:** `font-mono text-xs uppercase tracking-wider text-[#00ff88]/60`.

## Reusable Tailwind Tokens

- Dark field: `bg-[#000810] shadow-[inset_0_0_60px_rgba(0,0,0,0.6)]`.
- Fluorescent panel: `bg-[#001020]/80 border border-[#00ff88]/20 shadow-[0_0_15px_rgba(0,255,136,0.06)]`.
- Hex grid: 3-layer linear-gradient at 60/-60/0 degrees.
- Scale bar: `w-12 h-0.5 bg-[#00ff88] font-mono text-[10px] text-[#00ff88]`.
- Microscopy button: `bg-[#001020] text-[#00ff88] border border-[#00ff88]/30`.

## Quality Checklist

- Background is near-black dark field (#000810).
- At least one hexagonal grid measurement overlay.
- Fluorescent green/magenta/cyan data readouts present.
- Scale bar measurement element present.
- Molecular structure SVG accent present.
- Dark panels with fluorescence-colored data.
- Typography is scientific monospace throughout.
- The aesthetic reads as microscopy / molecular biology / fluorescence imaging.
- Everything feels precise, data-rich, and scientifically grounded.
- Field-of-view vignette present on at least one panel.

## Anti-Patterns

- Light or bright backgrounds (microscopy is DARK FIELD).
- Missing the hexagonal measurement grid (this is the signature overlay).
- Missing scale bars (μ measurements are essential scientific context).
- Using non-fluorescent accent colors (green/magenta/cyan ARE the data).
- Sans-serif typography (scientific data REQUIRES monospace).
- Missing molecular structure decorations (hexagonal ring diagrams are iconic).
- Missing the field-of-view vignette (microscopes have circular darkened edges).
- Bright cheerful colors (the palette is dark + fluorescence only).
- Warm color tones (microscopy is cold dark blue + fluorescent).
- Missing the data readout format (λ, ROI, COUNT, INT are standard notation).

## Accessibility Considerations

- Near-black backgrounds with fluorescent text provide excellent contrast (WCAG AAA for green/cyan on dark).
- Magenta (`#ff00aa`) on dark must be verified (passes WCAG AA for large text).
- Focus states: `focus:ring-2 focus:ring-[#00ff88]/50` (fluorescent green ring).
- Hex grid overlay must not reduce text contrast (keep very subtle).
- Molecular SVGs must be `aria-hidden="true"` when decorative.
- Scientific data values need proper `aria-label` for screen readers.
- The dark aesthetic is low eye-strain for extended lab work sessions.
- Touch targets must be adequate despite scientific minimal styling.
