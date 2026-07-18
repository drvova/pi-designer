---
name: botanical-specimen-ui
description: Build botanical specimen UI components (herbarium pressed plant cards, scientific classification labels, dried flower aesthetics, Latin binomial nomenclature, measurement scale bars, brass specimen pins, aged paper mounting, hand-drawn botanical illustration outlines) with museum-quality specimen frames, classification typography, and the meticulous cataloguing of plant kingdom diversity. Trigger this skill when the user asks for herbarium design, botanical specimen UI, pressed plant card, dried flower aesthetic, scientific classification label, plant taxonomy display, botanical illustration, or museum specimen interface.
---

# Botanical Specimen / Herbarium UI

Use this skill to design and implement meticulous, museum-quality interfaces inspired by herbarium specimen collections: aged paper mounting, pressed plant specimens, brass pin accents, measurement scale bars, classification label strips, hand-drawn botanical illustration outlines, and the quiet reverence of a natural history collection.

## Non-Negotiable Foundations

Every botanical specimen UI must adhere to these invariants:

1. **Aged paper is the primary surface.** All card and panel backgrounds use herbarium paper tones (`#e8dcc0` family). No white-blue, no cool grays, no digital-white surfaces.
2. **Muted palette only.** Every color must look like it was aged by decades in a collection drawer. No bright saturation, no neon, no pure primary colors.
3. **Scientific precision in typography.** Latin binomial names appear in proper italic serif. Classification ranks use monospace uppercase. The typography must look like a naturalist's cataloguing system.
4. **Specimen is always centered.** Whether a pressed plant image or a hand-drawn SVG, the specimen occupies the visual heart of every card.
5. **Brass pin is present.** Every specimen card includes the small metallic pin accent at top. It is not optional — it is how specimens are mounted.

## Core Material Recipes

### 1) Herbarium Specimen Card

Aged paper card with pressed plant center and scientific label at bottom.

- Card body: `bg-[#e8dcc0] border border-[#b8a878] rounded-sm p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)] relative` (aged herbarium paper).
- Paper texture overlay: `bg-[linear-gradient(135deg,rgba(184,168,120,0.08)_0%,transparent_50%,rgba(184,168,120,0.05)_100%)] absolute inset-0 pointer-events-none` (subtle foxing and age spots).
- Aged edge effect: `border-[2px] border-[#b8a878] shadow-[inset_0_0_30px_rgba(184,168,120,0.12)]` (darker paper edges from centuries of handling).
- Center specimen area: `flex items-center justify-center min-h-[300px]` (space for pressed plant or botanical SVG).

### 2) Brass Specimen Pin

Small metallic brass circle securing the specimen to the card.

- `w-3 h-3 rounded-full bg-gradient-to-br from-[#d4b85a] to-[#a08530] border border-[#8a7020] shadow-[0_1px_3px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.4)]` (tiny brass pin with metallic highlight).
- Place at top-center of specimen card: `absolute top-4 left-1/2 -translate-x-1/2`.

### 3) Measurement Scale Bar

Centimeter ruler for specimen size reference.

- Ruler container: `flex items-end gap-0 bg-white border border-[#b8a878] rounded-sm px-2 py-1`.
- Centimeter marks: alternating `h-3` and `h-5` lines `w-px bg-[#1a1a1a]` with 1mm tick at half-cm (`h-2`).
- Label: `text-[8px] font-mono text-[#1a1a1a] uppercase tracking-widest` (e.g., "cm").
- Full bar: `h-4 w-48 relative` with tick marks at regular intervals.

### 4) Classification Label Strip

Kingdom through Species taxonomy labels.

- Strip container: `bg-[#f0ead0] border border-[#b8a878] rounded-sm px-4 py-3 space-y-1` (cream classification card).
- Rank label: `text-[9px] font-mono uppercase tracking-[0.2em] text-[#8a7060]` (e.g., "FAMILY").
- Value: `text-sm font-serif text-[#1a1a1a]` (e.g., "Rosaceae").
- Hierarchy indentation: each rank indented `pl-2` more than the previous (Kingdom flush, Species deepest).
- Divider lines: `border-b border-dashed border-[#b8a878]` between each rank row.

### 5) Hand-Drawn Botanical Outline SVG

Delicate line-art illustration of a plant specimen.

```html
<svg viewBox="0 0 200 300" class="w-full h-full" fill="none" stroke="#1a1a1a" stroke-width="0.8" stroke-linecap="round">
  <!-- Stem -->
  <path d="M100,280 Q98,240 100,200 Q102,160 100,120 Q98,80 100,40" stroke-dasharray="2,1"/>
  <!-- Left leaf -->
  <path d="M100,200 Q70,180 50,160 Q30,140 40,120 Q50,100 70,110 Q85,120 100,160" stroke-dasharray="2,1"/>
  <path d="M70,155 Q65,145 60,135" stroke-dasharray="1.5,1.5" stroke-width="0.5"/>
  <!-- Right leaf -->
  <path d="M100,170 Q130,150 150,130 Q170,110 160,90 Q150,70 130,80 Q115,90 100,130" stroke-dasharray="2,1"/>
  <path d="M130,125 Q135,115 140,105" stroke-dasharray="1.5,1.5" stroke-width="0.5"/>
  <!-- Flower petals -->
  <ellipse cx="100" cy="40" rx="12" ry="8" transform="rotate(-15 100 40)" stroke-dasharray="2,1"/>
  <ellipse cx="100" cy="40" rx="12" ry="8" transform="rotate(15 100 40)" stroke-dasharray="2,1"/>
  <ellipse cx="100" cy="40" rx="12" ry="8" transform="rotate(45 100 40)" stroke-dasharray="2,1"/>
  <ellipse cx="100" cy="40" rx="12" ry="8" transform="rotate(-45 100 40)" stroke-dasharray="2,1"/>
  <ellipse cx="100" cy="40" rx="12" ry="8" transform="rotate(90 100 40)" stroke-dasharray="2,1"/>
  <!-- Center dot -->
  <circle cx="100" cy="40" r="3" fill="#1a1a1a" stroke="none"/>
  <!-- Small root tendrils -->
  <path d="M100,280 Q95,290 88,298" stroke-dasharray="1,1" stroke-width="0.5"/>
  <path d="M100,280 Q105,292 112,298" stroke-dasharray="1,1" stroke-width="0.5"/>
</svg>
```

### 6) Specimen Header Tag

Collection number and collector information.

- Tag: `bg-white border border-[#b8a878] rounded-sm px-3 py-1.5 inline-flex items-center gap-2`.
- Collection number: `font-mono text-xs text-[#1a1a1a] tracking-wider` (e.g., "No. 4721").
- Collector: `font-serif text-xs text-[#8a7060] italic` (e.g., "leg. J. Henslow, 1847").
- Separator: `w-px h-3 bg-[#b8a878]`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Herbarium Paper | `#e8dcc0` | Primary card background |
| Pressed Plant Green | `#5a7a3a` | Specimen / botanical accent |
| Aged Paper Edge | `#b8a878` | Borders, dividers, aged edges |
| Brass Pin | `#c4a043` | Metallic accent, small details |
| Ink Black | `#1a1a1a` | Text, outlines, fine details |
| Classification Cream | `#f0ead0` | Label strip background |
| Foxing Brown | `#c8b080` | Paper age spots, subtle stains |
| Specimen White | `#faf6eb` | Clean mounting paper |
| Museum Wall | `#f5f0e6` | Page / frame background |

Rules: Aged paper tones dominate — the interface should feel like it was found in a Victorian naturalist's cabinet. Pressed plant green appears only in the specimen itself. Brass and ink provide small, precise accents. No bright or saturated colors — everything is muted by time.

## Typography Recommendations

- **Display:** EB Garamond, Playfair Display (classical serif for headings).
- **Body:** Lora, Crimson Text (warm readable serif).
- **Classification Labels:** `font-mono text-[9px] uppercase tracking-[0.2em]` (rank names), `font-serif text-sm` (taxon names).
- **Scientific Names:** `font-serif italic text-sm text-[#1a1a1a]` (Latin binomials in proper italic).
- **Collection Numbers:** `font-mono text-xs tracking-wider` (archival reference numbers).
- Typography should feel like a handwritten or typeset museum label — scholarly, precise, aged.

## Component Architecture Pattern

```
SpecimenCard
  BrassPin
  SpecimenHeader (collection number, collector, date)
  SpecimenBody (centered botanical illustration or pressed plant image)
  ScaleBar (centimeter ruler, positioned bottom-left)
  ClassificationStrip
    RankRow (Kingdom)
    RankRow (Phylum)
    RankRow (Class)
    RankRow (Order)
    RankRow (Family)
    RankRow (Genus)
    RankRow (Species)
  CollectorNote (optional handwritten annotation)
```

## Interaction Rules

- Cards should have a subtle paper-like hover: `hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300` (as if someone picked it up to examine).
- Classification rows highlight on hover: `hover:bg-[#f0ead0]/60 transition-colors` (simulating a curator pointing at a rank).
- Scale bar remains fixed-position on scroll for size reference.
- Brass pin has a micro-shimmer on hover: `hover:shadow-[0_1px_3px_rgba(0,0,0,0.2),0_0_6px_rgba(196,160,67,0.3)]` (light catching the metal).
- Transitions should be slow and deliberate: `duration-500 ease-out` (curators move carefully).

## Reusable Tailwind Tokens

- Herbarium paper: `bg-[#e8dcc0] border border-[#b8a878] shadow-[0_2px_8px_rgba(0,0,0,0.08)]`.
- Aged paper edge: `shadow-[inset_0_0_30px_rgba(184,168,120,0.12)]`.
- Brass pin: `rounded-full bg-gradient-to-br from-[#d4b85a] to-[#a08530] border border-[#8a7020] shadow-[0_1px_3px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.4)]`.
- Classification strip: `bg-[#f0ead0] border border-[#b8a878] font-mono text-[9px] uppercase tracking-[0.2em]`.
- Scale bar: `h-4 bg-white border border-[#b8a878] font-mono text-[8px]`.
- Latin binomial: `font-serif italic text-[#1a1a1a]`.
- Museum wall: `bg-[#f5f0e6]`.
- Specimen header: `font-mono text-xs tracking-wider text-[#1a1a1a]`.

## Quality Checklist

- Aged paper surfaces dominate — no cool whites or digital grays.
- Muted color palette throughout — nothing that wasn't aged by time.
- Scientific italic serif for Latin names, monospace for classification ranks.
- Specimen centered in every card with visual prominence.
- Brass pin on every specimen card.
- Classification strip with full Kingdom-to-Species hierarchy.
- Measurement scale bar present for size reference.

- At least one herbarium specimen card with aged paper texture.
- Brass pin accent visible on specimen cards.
- Measurement scale bar present for size reference.
- Classification label strip with full Kingdom-to-Species hierarchy.
- Hand-drawn botanical outline SVG or pressed plant illustration.
- Scientific Latin binomial in proper italic serif.
- Muted, aged paper color palette (no bright saturated colors).
- Typography is scholarly serif with monospace for labels.
- The aesthetic reads as herbarium / natural history museum / Victorian specimen collection.
- Everything feels meticulous, catalogued, and preserved with scientific care.

## Anti-Patterns

- Bright saturated colors (herbarium specimens are muted by age and preservation).
- Missing paper texture or aged edge effects (the paper IS the defining material).
- Digital-perfect crisp edges (specimens show wear, foxing, and age).
- Sans-serif cold typography (herbarium uses scholarly serif and archival monospace).
- Missing brass pin accents (specimens are pinned — this is a defining detail).
- No measurement scale bar (scientific specimens always include scale).
- Missing classification taxonomy strip (cataloguing is the entire point).
- Overly glossy or modern surfaces (herbarium paper is matte and aged).
- Missing the handwritten collector notes or collection numbers (these add provenance).
- Colorful or playful aesthetics (herbarium is quiet, scholarly, and reverent).

## Accessibility Considerations

- Classification label text uses high-contrast ink black `#1a1a1a` on cream `#f0ead0` backgrounds (ratio exceeds 10:1).
- Scale bar uses black markings on white for maximum legibility.
- Rank labels in monospace uppercase with wide letter-spacing ensure each taxon rank is distinguishable even at small sizes.
- Brass pin accents are decorative only — no interactive functionality depends on them.
- Card boundaries use visible borders `border-[#b8a878]` in addition to background color difference for users who cannot perceive color contrast.
- Hover states enhance shadows rather than relying solely on color shifts.
- All text meets WCAG AAA contrast against its background.
