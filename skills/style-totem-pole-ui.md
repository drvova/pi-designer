---
name: totem-pole-ui
description: Build totem pole UI components (Pacific Northwest indigenous art, stacked animal carvings, bold black/red/teal palette, formline design, ovoid eyes, clan crest motifs, cedar wood texture) with vertically stacked panels, bold formline graphics, and the monumental storytelling tradition of Northwest Coast indigenous peoples. Trigger this skill when the user asks for totem pole, Pacific Northwest, Haida, Tlingit, formline design, clan crest, or cedar carving interfaces.
---

# Totem Pole UI

Use this skill to design and implementation vertically stacked interfaces inspired by Pacific Northwest indigenous totem pole art: bold formline graphics, ovoid eye shapes, stacked animal crest figures, cedar wood textures, and the monumental, narrative tradition of Haida, Tlingit, and Northwest Coast carving.

## Core Material Recipes

### 1) Cedar Pole Surface

Red cedar wood background.

- `bg-gradient-to-b from-[#8a5a3a] to-[#6a3a1a]` (western red cedar).
- Grain: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_20px,rgba(60,30,10,0.05)_20px,rgba(60,30,10,0.05_22px)]`.

### 2) Stacked Crest Figure Panel

Vertically stacked card sections (each representing a totem figure).

- Each section: `bg-[#8a5a3a] border-y-4 border-[#3a1a08] p-6` (separated by bold dark borders like carved creases between figures).

### 3) Formline Ovoid Eye

The signature Northwest Coast ovoid shape.

```html
<svg viewBox="0 0 40 30" class="w-10 h-8">
  <path d="M5,5 Q5,0 15,0 L25,0 Q35,0 35,10 Q35,20 30,25 Q25,28 20,25 Q15,20 15,15 Q15,10 10,10 Q5,10 5,5 Z" fill="#1a1a1a"/>
  <circle cx="22" cy="12" r="3" fill="#e8dcc0"/>
</svg>
```

### 4) Raven/Thunderbird Motif

Bold stylized bird crest SVG.

```html
<svg viewBox="0 0 100 80" class="w-24 h-20">
  <g stroke="#1a1a1a" stroke-width="2" fill="#c41e1e">
    <!-- Body -->
    <path d="M50,20 Q30,15 25,30 Q20,45 30,55 L50,60 L70,55 Q80,45 75,30 Q70,15 50,20"/>
    <!-- Wings (formline) -->
    <path d="M25,30 L5,35 L15,45 M75,30 L95,35 L85,45" fill="#1a3a5a" stroke-width="1.5"/>
    <!-- Ovoid eyes -->
    <ellipse cx="40" cy="30" rx="5" ry="4" fill="#1a1a1a"/>
    <ellipse cx="60" cy="30" rx="5" ry="4" fill="#1a1a1a"/>
    <!-- Beak -->
    <path d="M45,40 L50,55 L55,40" fill="#f5cc3a"/>
  </g>
</svg>
```

### 5) Totem Button

Bold carved-paint button.

- `bg-[#1a3a5a] text-[#e8dcc0] font-bold uppercase tracking-widest px-8 py-3 border-[3px] border-[#1a1a1a] rounded-none shadow-[3px_3px_0_#1a1a1a] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all`.

### 6) Formline Border Divider

Bold curvilinear formline divider.

```html
<svg viewBox="0 0 200 20" class="w-full">
  <g fill="#1a1a1a">
    <path d="M0,10 Q15,2 30,10 Q45,18 60,10 Q75,2 90,10 Q105,18 120,10 Q135,2 150,10 Q165,18 180,10 Q195,2 200,10 L200,15 Q185,7 170,15 Q155,23 140,15 Q125,7 110,15 Q95,23 80,15 Q65,7 50,15 Q35,23 20,15 Q5,7 0,15 Z"/>
  </g>
</svg>
```

## Color Palette System

| Color | Hex | Material |
|---|---|---|
| Cedar Red | `#8a5a3a` | Primary wood surface |
| Dark Cedar | `#6a3a1a` | Deep wood |
| Carbon Black | `#1a1a1a` | Primary formline color |
| Vermilion | `#c41e1e` | Red paint accent |
| NW Blue | `#1a3a5a` | Blue paint accent |
| Moss Green | `#3a6a3a` | Green paint accent |
| Ochre Yellow | `#f5cc3a` | Rare accent |
| Bone Cream | `#e8dcc0` | Text, eye highlights |

Rules: Black formline is the structural foundation. Red and blue are the primary painted colors. Cedar wood tones provide the surface. The palette is bold, high-contrast, and monumentally graphic.

## Typography Recommendations

- **Display:** Cinzel, Trajan Pro (monumental inscription caps).
- **Body:** Lora, EB Garamond (warm readable serif).
- **Labels:** `font-bold uppercase tracking-widest text-sm` (bold and direct).
- Typography should feel monumental and direct — like inscriptions on a carved pole.

## Reusable Tailwind Tokens

- Cedar surface: `bg-gradient-to-b from-[#8a5a3a] to-[#6a3a1a]`.
- Stacked section: `bg-[#8a5a3a] border-y-4 border-[#3a1a08]`.
- Totem button: `bg-[#1a3a5a] text-[#e8dcc0] border-[3px] border-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a]`.
- Formline ovoid: SVG ovoid path `fill="#1a1a1a"` with cream eye center.
- Raven motif: bold SVG with black outlines + red body + blue wings.

## Quality Checklist

- Layout uses VERTICAL STACKING (totem poles are vertical narratives).
- At least one formline graphic (ovoid eye, U-form, S-form).
- Cedar wood textured surfaces present.
- Bold black/red/blue painted color palette.
- At least one animal crest SVG (raven, thunderbird, bear, wolf).
- Formline curvilinear border divider.
- Sections separated by bold dark borders (carved creases).
- The aesthetic reads as Pacific Northwest totem pole / Haida / Tlingit art.
- Everything feels monumental, graphic, and narratively rich.
- Colors are bold and high-contrast (black formline + red/blue paint).

## Anti-Patterns

- Horizontal layout emphasis (totem poles are VERTICAL).
- Missing formline graphics (ovoid/U-form/S-form are the defining design elements).
- Pastel or muted colors (NW Coast art is BOLD black/red/blue).
- Missing the cedar wood surface texture (carved poles are cedar).
- Missing animal crest figures (ravens, bears, thunderbirds are the narrative).
- Symmetrical balanced composition (totem figures are stacked asymmetric).
- Thin delicate lines (formlines are BOLD and thick).
- Modern abstract design (totem art uses specific traditional forms).
- Sans-serif typography (use monumental serif).
- Light backgrounds (the palette is cedar brown + bold paint colors).
- Missing the stacked-section structure (each figure is a SEPARATE stacked section).

## Accessibility Considerations

- Cedar surfaces with cream text provide good contrast (verify WCAG AA).
- Bold black borders on high-contrast colors aid visual identification.
- Focus states: `focus:ring-4 focus:ring-[#f5cc3a]/50` (ochre ring on cedar).
- Formline and crest SVGs must be `aria-hidden="true"` when decorative.
- The vertical stacked layout should maintain logical reading order for screen readers.
- Respect cultural significance: totem pole art carries deep spiritual meaning — use thoughtfully.
- Touch targets must be adequate despite bold border styling.
