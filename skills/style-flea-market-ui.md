---
name: flea-market-ui
description: Build flea market UI components (curated vintage found objects, mismatched table surfaces, handwritten price tags, yellowed labels, dust-faded merchandise, eclectic arrangement, wabi-sabi abundance) with layered vintage surfaces, hand-marked pricing, and the joyful chaos of discovering treasures among the discarded. Trigger this skill when the user asks for flea market design, vintage thrift UI, antique booth aesthetic, found-objects interface, junk shop layout, rustic bazaar design, or weathered collectibles display.
---

# Flea Market UI

Use this skill to design and interfaces inspired by outdoor flea markets and vintage thrift stores: mismatched folding tables with different wood tones per surface, handwritten price tags dangling from string, yellowed aged labels curling at edges, dust-faded merchandise in eclectic asymmetric arrangements, and the joyful chaos of discovering treasures among the discarded. Embrace wabi-sabi imperfection and curated abundance over sterile uniformity.

## Core Material Recipes

### 1) Mismatched Vintage Card Surface

Each card uses a different wood/paper tone to simulate separate found objects on different table surfaces.

- Surface A (oak): `bg-[#b8a07a] border border-[#8a7a5a]/60 shadow-[2px_3px_8px_rgba(0,0,0,0.15)]`.
- Surface B (walnut): `bg-[#a08868] border border-[#7a6a4a]/60 shadow-[2px_3px_8px_rgba(0,0,0,0.15)]`.
- Surface C (pine): `bg-[#c4b090] border border-[#9a8a6a]/60 shadow-[2px_3px_8px_rgba(0,0,0,0.15)]`.
- Surface D (aged paper): `bg-[#e8dcc0] border border-[#c4b898]/60 shadow-[2px_3px_8px_rgba(0,0,0,0.15)]`.

### 2) Handwritten Price Tag Label

Rotated paper price tag with a string hole, evoking handwritten flea market pricing.

```html
<div class="relative inline-block">
  <div class="bg-[#e8dcc0] border border-[#c4b898] px-3 py-1 text-[#2a1a0a] font-mono text-sm shadow-[1px_2px_4px_rgba(0,0,0,0.2)] -rotate-3">
    <span class="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#c4b898] border border-[#8a7a5a]"></span>
    $4.50
  </div>
</div>
```

### 3) Yellowed Vintage Label Accent

Aged, yellowed adhesive label with slightly curling, peeling edges.

- `bg-[#f0e4c0] border border-[#d4c89a] px-2 py-1 text-xs text-[#5a4a2a] italic shadow-[0_1px_2px_rgba(0,0,0,0.1)] rotate-1`.
- Curl effect: `after:absolute after:bottom-0 after:right-0 after:w-3 after:h-3 after:bg-[linear-gradient(135deg,transparent_50%,#d4c89a_50%)] after:shadow-[-1px_-1px_2px_rgba(0,0,0,0.1)] after:content-['']`.

### 4) Folding Table Texture Surface

The base surface behind cards, evoking a weathered vendor folding table.

- `bg-[#8a7a5a]` with wood grain: `bg-[repeating-linear-gradient(90deg,#8a7a5a,#8a7a5a_20px,#7a6a4a_20px,#7a6a4a_21px,#8a7a5a_21px,#8a7a5a_40px)]`.
- Metal leg edge: `border-b-4 border-[#6a6a6a]`.

### 5) Faded Desaturated Imagery

Images treated to look sun-bleached and dust-faded, as if displayed outdoors for years.

- `filter sepia-[0.3] saturate-[0.6] brightness-[0.95] contrast-[0.9]`.
- Or stronger fade: `filter sepia-[0.4] saturate-[0.4] brightness-[1.05] contrast-[0.85]`.

### 6) Eclectic Asymmetric Arrangement

Cards staggered at slight rotations and offsets, not in a sterile grid.

```html
<div class="flex flex-wrap gap-4 justify-center">
  <div class="rotate-1"><!-- card A --></div>
  <div class="-rotate-2 mt-4"><!-- card B --></div>
  <div class="rotate-2 -mt-2"><!-- card C --></div>
  <div class="-rotate-1 mt-6"><!-- card D --></div>
</div>
```

### 7) Rustic Stall Button

Button styled as a stamped or stenciled vendor sign on weathered material.

- `bg-[#8a7a5a] text-[#e8dcc0] font-bold uppercase tracking-wide px-5 py-2 border-2 border-[#5a4a2a] shadow-[2px_3px_0_#5a4a2a] hover:translate-y-0.5 hover:shadow-[1px_2px_0_#5a4a2a] active:shadow-none active:translate-y-1 transition-all`.

### 8) String-Bound Tag Divider

A string line with dangling price tags, dividing sections of the market.

```html
<div class="relative flex items-center my-6">
  <div class="flex-1 h-px bg-[#5a4a2a]/40"></div>
  <div class="mx-3 bg-[#e8dcc0] border border-[#c4b898] px-3 py-1 text-[#2a1a0a] text-xs font-mono -rotate-2 shadow-[1px_1px_3px_rgba(0,0,0,0.15)]">SALE</div>
  <div class="flex-1 h-px bg-[#5a4a2a]/40"></div>
</div>
```

### 9) Worn Paper Texture Surface

Faded, aged paper card surface with subtle staining.

- `bg-[#e8dcc0] shadow-[inset_0_0_40px_rgba(180,160,120,0.3),2px_3px_8px_rgba(0,0,0,0.15)]`.
- Optional stain: `before:absolute before:top-2 before:right-3 before:w-8 before:h-8 before:rounded-full before:bg-[#c4a868]/20 before:content-['']`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Burlap Tan | `#8a7a5a` | Primary surface, folding tables, buttons |
| Oak Wood | `#b8a07a` | Card surface A (warm wood) |
| Walnut Wood | `#a08868` | Card surface B (mid-tone wood) |
| Pine Wood | `#c4b090` | Card surface C (light wood) |
| Faded Brown | `#5a4a2a` | Text, borders, stamp ink, shadows |
| Handwritten Ink | `#2a1a0a` | Price tag text, deep ink |
| Price Tag Cream | `#e8dcc0` | Tags, labels, aged paper surfaces |
| Yellowed Paper | `#f0e4c0` | Vintage labels, aged adhesive |
| Aged Brass | `#b0986a` | Faded metal accents, hardware |
| Faded Red | `#9a5a4a` | Faded SALE accent (sun-bleached red) |
| Faded Teal | `#5a8a7a` | Faded accent (sun-bleached teal) |
| Faded Gold | `#c4a868` | Faded accent, vintage stains |

Rules: Burlap tan is the dominant base — it is the ground surface. Each card should use a slightly different wood/paper tone from the palette to create mismatched table variety. Accent colors (red, teal, gold) are always faded/desaturated, as if sun-bleached from years of outdoor display. Price tag cream and handwritten ink are the document elements — every item should feel individually marked. No bright primary colors. Everything is earth-toned and faded.

## Typography Recommendations

- **Display:** Special Elite, Courier Prime, or Cutive Mono (typewriter face, evoking vintage price stamps and hand-typed labels).
- **Body:** Crimson Text, EB Garamond, or Lora (warm serif companion, readable on aged surfaces).
- **Handwritten labels:** Caveat, Kalam, or Homemade Apple (handwriting face for price tags and personal notes).
- **Labels:** `font-mono text-sm text-[#2a1a0a]` (typewriter font for price tags and vintage stamps).
- Typography should feel like handwritten price tags and vintage typewritten labels — personal, imperfect, and aged.

## Interaction Rules

- Default: eclectic, warm, imperfection. Slight rotations and offsets are intentional.
- Hover: cards straighten slightly and lift, like picking up an item to examine it.
  - `hover:rotate-0 hover:-translate-y-1 hover:shadow-[4px_6px_16px_rgba(0,0,0,0.2)] transition-all duration-200`.
- Active: `active:scale-[0.98]` (a gentle press, like setting an item back down).
- Focus: `focus:outline-none focus:ring-4 focus:ring-[#5a4a2a]/30` (earthy brown ring).
- Transitions: `transition-all duration-200` (quick, tactile, like handling found objects).
- Eclectic rotation: cards at `-rotate-2` to `rotate-2`, price tags at `-rotate-3` to `rotate-1`.
- Desaturation lift on hover: hovered images restore slight color `hover:filter-none` (like dusting off a find).

## Reusable Tailwind Tokens

- Folding table bg: `bg-[repeating-linear-gradient(90deg,#8a7a5a,#8a7a5a_20px,#7a6a4a_20px,#7a6a4a_21px)]`.
- Price tag: `bg-[#e8dcc0] border border-[#c4b898] text-[#2a1a0a] font-mono shadow-[1px_2px_4px_rgba(0,0,0,0.2)]`.
- Yellowed label: `bg-[#f0e4c0] border border-[#d4c89a] text-[#5a4a2a] italic shadow-[0_1px_2px_rgba(0,0,0,0.1)]`.
- Vintage card (oak): `bg-[#b8a07a] border border-[#8a7a5a]/60 shadow-[2px_3px_8px_rgba(0,0,0,0.15)]`.
- Vintage card (paper): `bg-[#e8dcc0] shadow-[inset_0_0_40px_rgba(180,160,120,0.3),2px_3px_8px_rgba(0,0,0,0.15)]`.
- Faded image filter: `filter sepia-[0.3] saturate-[0.6] brightness-[0.95] contrast-[0.9]`.
- Rustic button: `bg-[#8a7a5a] text-[#e8dcc0] border-2 border-[#5a4a2a] shadow-[2px_3px_0_#5a4a2a]`.
- String divider: `bg-[#5a4a2a]/40` with `bg-[#e8dcc0] border border-[#c4b898]` tag.
- Handwritten label font: `font-mono text-[#2a1a0a]`.

## Quality Checklist

- Cards use mismatched wood/paper tones (no two identical surfaces side-by-side).
- Handwritten price tags present on items (rotated, with string holes).
- Yellowed vintage label accents appear somewhere on cards.
- Imagery is desaturated and sepia-faded (sun-bleached look).
- Layout is asymmetric with slight rotations (not a sterile grid).
- Folding table texture is visible as the base surface.
- Color palette is earth-toned and faded (burlap, wood, cream, faded accents).
- Typography mixes typewriter/mono (tags) with warm serif (body).
- Each card feels like a separate found object on a different table.
- The aesthetic reads as an outdoor flea market or vintage thrift store.
- Everything feels curated, personal, and charmingly imperfect.
- Motion is tactile (lift-to-examine, straighten-on-hover, dust-off color restore).

## Anti-Patterns

- Uniform grid with identical card surfaces (flea markets are mismatched and eclectic).
- Bright saturated colors (everything is sun-faded and earth-toned).
- Modern minimalist restraint (this aesthetic embraces abundance and layering).
- Sans-serif tech typography (needs typewriter, handwritten, and warm serif faces).
- Perfect alignment and symmetry (imperfection and rotation are the point).
- Glossy digital surfaces (materials must feel found, worn, and physical).
- Missing price tags or handwritten elements (these are the signature flea market artifacts).
- Corporate sterile button styling (buttons should look like stamped vendor signs).
- Flat solid color backgrounds (use textured folding table or aged paper surfaces).
- Neon or high-contrast accents (accents are faded, muted, sun-bleached).
- Airy negative space (flea markets are dense with objects and abundance).

## Accessibility Considerations

- Faded imagery must not compromise text legibility — keep text on solid card surfaces, not over images.
- Price tag rotations must not exceed 3-5 degrees (excessive rotation impairs readability for users with vestibular sensitivity).
- Card rotations create visual complexity — ensure clear focus order through the layout despite asymmetric placement.
- Focus states: `focus:ring-4 focus:ring-[#5a4a2a]/30` (earthy ring, visible on textured surfaces).
- Handwritten and typewriter fonts must maintain readability at body sizes — use them for labels and tags, not long-form text.
- Desaturated imagery must retain enough contrast for users with low vision — avoid over-fading informational images.
- Decorative elements (string holes, paper curls, table textures) must be `aria-hidden="true"`.
- Ensure color is not the sole differentiator — price tags include text labels alongside faded accent colors.
- Hover straightening animations must respect `prefers-reduced-motion` (provide static alternative without transform).
- Touch targets must remain tappable despite rotations and vintage styling padding.
