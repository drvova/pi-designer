---
name: botanical-garden-ui
description: Build botanical garden UI components (greenhouse dome, labeled specimen, winding path, fountain center, seasonal display, garden bench, plant catalog) with lush curated nature, educational labels, and the peaceful order of a botanical garden. Trigger this skill when the user asks for botanical garden design, garden layout UI, specimen labels, greenhouse dome, winding path, fountain centerpiece, seasonal flower display, garden bench, plant catalog, or conservatory tour interfaces.
---

# Botanical Garden UI

Use this skill to design and implement refined, curated interfaces inspired by world-class botanical gardens: greenhouse domes with glass-and-iron architecture, labeled specimen tags with scientific precision, winding stone paths guiding visitors, fountain centerpieces as focal anchors, seasonal flower displays, silhouette garden benches, and elegant plant catalog pages. The mood is peaceful order, educational richness, and lush but carefully maintained greenery.

## Non-Negotiable Foundations

- **Glass-and-iron dome architecture** must appear in at least one major layout element. The greenhouse dome is the defining structural motif. Use curved translucent panels with visible iron ribs.
- **Specimen labels** are mandatory on any plant or nature content. Labels use white card with thin border, serif italic text for Latin names, and sans-serif text for common names and descriptions.
- **Garden paths** guide navigation. Winding, organic path shapes using curved SVG or border-radius patterns. Stone texture and muted earth tones.
- **Green dominance with curated restraint** unlike the wild overflow of a greenhouse UI, the botanical garden is managed and orderly. Greens are lush but arranged, not chaotic.
- **Educational tone** throughout. Every element should feel like it teaches something. Labels, captions, and descriptions carry botanical information.

## Core Material Recipes

### 1) Greenhouse Dome Structure

Curved glass-and-iron dome, the crown jewel of the botanical garden.

- Dome shell: `bg-gradient-to-b from-[#a0d0e0]/30 to-[#a0d0e0]/10 backdrop-blur-sm rounded-t-[50%] border border-[#8a8a7a]/30 shadow-[inset_0_0_40px_rgba(160,208,224,0.15)]`.
- Iron ribs: `bg-[linear-gradient(rgba(60,60,50,0.15)_1px,transparent_1px)] bg-[size:60px_60px]` overlaid on dome to create the segmented glass-pane framework.
- Dome base: `bg-[#8a8a7a] rounded-b-lg h-4 shadow-[0_2px_8px_rgba(0,0,0,0.15)]` (stone foundation ledge).
- Full dome SVG for hero sections:

```html
<svg viewBox="0 0 400 200" class="w-full">
  <defs>
    <clipPath id="dome-clip">
      <path d="M50,200 Q50,40 200,20 Q350,40 350,200 Z"/>
    </clipPath>
  </defs>
  <g clip-path="url(#dome-clip)">
    <rect width="400" height="200" fill="rgba(160,208,224,0.2)"/>
    <line x1="200" y1="20" x2="200" y2="200" stroke="rgba(60,60,50,0.2)" stroke-width="1.5"/>
    <line x1="125" y1="60" x2="125" y2="200" stroke="rgba(60,60,50,0.15)" stroke-width="1"/>
    <line x1="275" y1="60" x2="275" y2="200" stroke="rgba(60,60,50,0.15)" stroke-width="1"/>
    <path d="M50,200 Q50,120 200,100" fill="none" stroke="rgba(60,60,50,0.12)" stroke-width="1"/>
    <path d="M350,200 Q350,120 200,100" fill="none" stroke="rgba(60,60,50,0.12)" stroke-width="1"/>
    <path d="M70,200 Q70,80 200,55 Q330,80 330,200" fill="none" stroke="rgba(60,60,50,0.1)" stroke-width="1"/>
    <ellipse cx="200" cy="15" rx="8" ry="5" fill="rgba(60,60,50,0.2)"/>
  </g>
  <path d="M50,200 Q50,40 200,20 Q350,40 350,200" fill="none" stroke="rgba(60,60,50,0.3)" stroke-width="2"/>
  <rect x="40" y="195" width="320" height="10" rx="2" fill="#8a8a7a"/>
</svg>
```

### 2) Labeled Specimen Tag

White card with botanical information, pinned or hung from a plant illustration.

- Label body: `bg-white rounded-sm px-4 py-3 border border-[#d0d0c0] shadow-[0_1px_4px_rgba(0,0,0,0.08)]`.
- Latin name: `font-serif italic text-sm text-[#3a7a3a] tracking-wide` (e.g., *Rosa gallica*).
- Common name: `font-sans text-xs font-semibold text-[#2a2a2a] uppercase tracking-widest mt-1`.
- Description: `font-sans text-xs text-[#6a6a5a] mt-1 leading-relaxed`.
- Pin accent: `w-2 h-2 rounded-full bg-[#8a8a7a] mx-auto -mb-1 relative z-10` (small metal pin dot above label).
- Hanging string: `w-px h-4 bg-[#8a8a7a]/60 mx-auto` (thin thread from tag to branch).

### 3) Winding Garden Path

Curved stone pathway for navigation flow, breadcrumbs, or progress indicators.

- Path base: `bg-[#8a8a7a] rounded-full` with varying widths to simulate a meandering trail.
- Stone texture overlay: `bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.08)_50%,rgba(255,255,255,0.08)_75%,transparent_75%)] bg-[size:8px_8px]` (diagonal stone grain).
- Path SVG for hero or decorative sections:

```html
<svg viewBox="0 0 400 100" class="w-full opacity-40">
  <path d="M0,60 Q50,30 100,50 Q150,70 200,45 Q250,20 300,55 Q350,80 400,50"
    fill="none" stroke="#8a8a7a" stroke-width="12" stroke-linecap="round" opacity="0.6"/>
  <path d="M0,60 Q50,30 100,50 Q150,70 200,45 Q250,20 300,55 Q350,80 400,50"
    fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="8" stroke-linecap="round"/>
</svg>
```

- Stepping stones along path: `w-6 h-4 bg-[#9a9a8a] rounded-full border border-[#7a7a6a] shadow-[0_1px_2px_rgba(0,0,0,0.1)]`.

### 4) Fountain Centerpiece

Water fountain as a central focal point, used for feature cards or hero decorations.

- Basin: `bg-gradient-to-b from-[#60a8d0]/20 to-[#60a8d0]/5 border border-[#60a8d0]/30 rounded-full px-12 py-8`.
- Water surface shimmer: `bg-[radial-gradient(ellipse_at_center,rgba(96,168,208,0.15)_0%,transparent_70%)]`.
- Fountain spray SVG:

```html
<svg viewBox="0 0 120 100" class="w-full">
  <ellipse cx="60" cy="85" rx="50" ry="10" fill="rgba(96,168,208,0.15)" stroke="rgba(96,168,208,0.25)" stroke-width="1"/>
  <line x1="60" y1="80" x2="60" y2="30" stroke="rgba(96,168,208,0.3)" stroke-width="2" stroke-linecap="round"/>
  <path d="M60,30 Q55,25 45,35" fill="none" stroke="rgba(96,168,208,0.2)" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M60,30 Q65,25 75,35" fill="none" stroke="rgba(96,168,208,0.2)" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M60,40 Q50,35 40,50" fill="none" stroke="rgba(96,168,208,0.15)" stroke-width="1" stroke-linecap="round"/>
  <path d="M60,40 Q70,35 80,50" fill="none" stroke="rgba(96,168,208,0.15)" stroke-width="1" stroke-linecap="round"/>
  <circle cx="45" cy="35" r="1.5" fill="rgba(96,168,208,0.25)"/>
  <circle cx="75" cy="35" r="1.5" fill="rgba(96,168,208,0.25)"/>
  <circle cx="40" cy="50" r="1" fill="rgba(96,168,208,0.2)"/>
  <circle cx="80" cy="50" r="1" fill="rgba(96,168,208,0.2)"/>
</svg>
```

- Ripple rings: concentric `border border-[#60a8d0]/20 rounded-full` circles with increasing size and decreasing opacity for ambient animation.

### 5) Seasonal Flower Display

Cards or grid cells showcasing seasonal blooms, each with a distinctive flower illustration and seasonal color.

- Card container: `bg-white rounded-lg p-5 border border-[#d8e8d0] shadow-[0_2px_8px_rgba(0,0,0,0.06)]`.
- Season badge: `text-[10px] font-sans font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full` with seasonal colors:
  - Spring: `bg-[#e8b0d0] text-[#6a2a4a]` (cherry blossom pink).
  - Summer: `bg-[#b0d870] text-[#3a5a1a]` (vivid leaf green).
  - Autumn: `bg-[#d8a040] text-[#5a3a0a]` (golden amber).
  - Winter: `bg-[#c0d8e8] text-[#2a4a5a]` (frost blue).
- Flower illustration area: centered SVG placeholder within the card, using seasonal accent colors.
- Bloom period indicator: `flex gap-0.5 mt-2` with 12 small squares representing months, filled squares `bg-[#3a7a3a]` for active bloom months, `bg-[#e0e0d0]` for inactive.

### 6) Garden Bench Silhouette

Dark wood bench silhouette for resting points, about sections, or decorative breaks.

- Bench SVG:

```html
<svg viewBox="0 0 200 80" class="w-full">
  <rect x="30" y="25" width="140" height="8" rx="2" fill="#6a4a2a"/>
  <rect x="35" y="15" width="4" height="15" rx="1" fill="#6a4a2a"/>
  <rect x="161" y="15" width="4" height="15" rx="1" fill="#6a4a2a"/>
  <rect x="33" y="33" width="6" height="30" rx="1" fill="#6a4a2a"/>
  <rect x="161" y="33" width="6" height="30" rx="1" fill="#6a4a2a"/>
  <rect x="28" y="60" width="14" height="4" rx="1" fill="#5a3a1a"/>
  <rect x="158" y="60" width="14" height="4" rx="1" fill="#5a3a1a"/>
  <rect x="30" y="8" width="140" height="8" rx="2" fill="#7a5a3a"/>
</svg>
```

- Bench accent card: `bg-[#f5efe0] border border-[#d0c8b0] rounded-lg p-4 shadow-[0_2px_6px_rgba(0,0,0,0.05)]` with bench SVG centered inside.

### 7) Plant Catalog Page

Elegant catalog layout for browsing plant species, styled like a printed botanical reference.

- Page container: `bg-[#f0e8d0] border border-[#d0c8a0] rounded-sm p-8 shadow-[2px_2px_12px_rgba(0,0,0,0.08)]` (cream parchment feel).
- Page header rule: `w-full h-px bg-[#3a7a3a]/30 mb-6`.
- Page number: `font-serif italic text-xs text-[#8a8a7a] text-center mt-6`.
- Catalog illustration frame: `border border-[#c0b890] p-2 bg-white` (framed botanical illustration).
- Classification row: `flex justify-between text-[10px] font-sans text-[#8a8a7a] uppercase tracking-widest border-t border-[#d0c8a0] pt-2 mt-4`.

### 8) Seasonal Garden Bed

Layered flower bed showing current season bloom state, used for dashboards or feature highlights.

- Bed container: `bg-[#e0d8b8] rounded-lg p-4 relative overflow-hidden` (garden soil base).
- Soil texture: `bg-[linear-gradient(0deg,rgba(100,80,40,0.1)_1px,transparent_1px)] bg-[size:4px_4px]` (horizontal soil grain).
- Flower stems: thin `w-px bg-[#3a7a3a]` vertical lines at varying heights.
- Flower heads: colored circles or SVG petals using palette seasonal colors positioned at stem tops.
- Bed label: `absolute bottom-2 left-3 text-[10px] font-sans font-semibold uppercase tracking-widest text-[#6a5a3a]`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Garden Green | `#3a7a3a` | Primary accent — plant life, labels, paths |
| Forest Deep | `#2a5a2a` | Dark green for text contrast and depth |
| Pale Leaf | `#e8f0e0` | Soft background wash |
| Sage Mist | `#c8d8c0` | Muted surface and borders |
| Greenhouse Glass | `#a0d0e0` | Dome panels, water elements, cool accents |
| Path Stone | `#8a8a7a` | Paths, pins, framework, muted neutrals |
| Dark Stone | `#5a5a50` | Path edges, framework detail |
| Fountain Water | `#60a8d0` | Water features, ripple accents, cool highlights |
| Cherry Blossom | `#e8b0d0` | Spring flowers, soft pink accents |
| Sunflower | `#e8c030` | Summer flowers, warm yellow accents |
| Autumn Amber | `#d8a040` | Autumn flowers, golden warmth |
| Frost Blue | `#c0d8e8` | Winter palette, icy cool tones |
| Bench Wood | `#6a4a2a` | Wood elements, warm dark brown |
| Warm Wood | `#8a6a3a` | Lighter wood, frame borders |
| Catalog Cream | `#f0e8d0` | Catalog pages, parchment backgrounds |
| Label White | `#ffffff` | Specimen labels, text cards |
| Label Border | `#d0d0c0` | Label and card borders |

Rules: Green dominates as the primary identity. The palette is carefully curated — not chaotic overflow, but arranged beauty. Cool glass-blue and fountain-water-blue provide contrast against the warm greens. Earth tones (stone, wood, cream) ground the palette. Seasonal accent colors rotate to add variety within the ordered framework.

## Typography Recommendations

- **Display:** Fraunces, Playfair Display (elegant serif with botanical refinement).
- **Body:** Lora, Source Serif 4 (readable, warm, scholarly).
- **Labels:** `font-serif italic` for Latin binomial names, `font-sans uppercase tracking-widest` for common names.
- **Catalog:** EB Garamond, Cormorant Garamond (printed botanical reference feel).
- **Navigation:** DM Sans or Inter at small sizes (clean wayfinding along garden paths).
- Typography communicates education and curation. Latin names in italic serif carry scientific authority. Common names in spaced uppercase carry the curated museum quality.

## Component Architecture Pattern

```
BotanicalGardenLayout
  GardenHeader (title, navigation path)
  DomeHero
    GreenhouseDome (SVG + glass panels)
    FountainCenterpiece
  GardenPath (winding navigation / progress)
  SpecimenGallery
    SpecimenCard (image + label + seasonal badge)
    SpecimenLabel (Latin name + common name + description)
  SeasonalDisplay
    SeasonalFlowerBed (current season)
    BloomCalendar (month grid)
  PlantCatalog
    CatalogPage (framed illustration + classification)
    CatalogIndex (alphabetical navigation)
  RestPoint (garden bench silhouette, about/contact)
  GardenFooter (path leads out)
```

- Each section flows like a walk through the garden. Navigation follows the path motif. Sections have clear educational labels.
- The dome hero establishes the architectural identity. Specimen cards carry the educational mission. The catalog provides depth. The bench provides rest.

## Interaction Rules

- **Path-based navigation:** Progress indicators follow the winding path motif. Current position marked with a stepping stone. Completed positions marked with a small bloom.
- **Label reveal:** Specimen labels appear on hover or tap with a gentle fade-in, like flipping up a hanging tag. `transition-opacity duration-300`.
- **Dome parallax:** Greenhouse dome in the hero has subtle parallax — iron ribs shift slightly slower than glass panels. `transform: translateY(calc(var(--scroll) * 0.05))` on glass layer.
- **Fountain ripple:** Subtle concentric ripple animation on fountain centerpiece. `animate-ping` on ring elements at staggered intervals.
- **Seasonal transition:** Seasonal displays change with a crossfade when season changes, like turning a calendar page.
- **Catalog page turn:** Plant catalog cards flip with a subtle rotation on hover, like turning a reference book page. `transform: perspective(800px) rotateY(2deg)`.
- **Bench hover:** Garden bench sections have a gentle sway on hover, like a breeze passing through.
- **Flower bloom:** Flower elements in seasonal displays have a scale-up entrance animation, `transition-transform duration-500 ease-out` from `scale-75` to `scale-100`.

## Reusable Tailwind Tokens

- Greenhouse dome: `bg-gradient-to-b from-[#a0d0e0]/30 to-[#a0d0e0]/10 backdrop-blur-sm rounded-t-[50%] border border-[#8a8a7a]/30`.
- Iron rib grid: `bg-[linear-gradient(rgba(60,60,50,0.15)_1px,transparent_1px)] bg-[size:60px_60px]`.
- Specimen label body: `bg-white rounded-sm px-4 py-3 border border-[#d0d0c0] shadow-[0_1px_4px_rgba(0,0,0,0.08)]`.
- Latin name: `font-serif italic text-sm text-[#3a7a3a] tracking-wide`.
- Common name: `font-sans text-xs font-semibold text-[#2a2a2a] uppercase tracking-widest`.
- Garden path: `bg-[#8a8a7a] rounded-full` with stone texture overlay.
- Fountain basin: `bg-gradient-to-b from-[#60a8d0]/20 to-[#60a8d0]/5 border border-[#60a8d0]/30 rounded-full`.
- Seasonal card: `bg-white rounded-lg p-5 border border-[#d8e8d0] shadow-[0_2px_8px_rgba(0,0,0,0.06)]`.
- Catalog page: `bg-[#f0e8d0] border border-[#d0c8a0] rounded-sm p-8 shadow-[2px_2px_12px_rgba(0,0,0,0.08)]`.
- Catalog frame: `border border-[#c0b890] p-2 bg-white`.
- Bench wood: `fill="#6a4a2a"` in SVG, `bg-[#6a4a2a]` for CSS elements.
- Stone pin: `w-2 h-2 rounded-full bg-[#8a8a7a]`.
- Soil texture: `bg-[linear-gradient(0deg,rgba(100,80,40,0.1)_1px,transparent_1px)] bg-[size:4px_4px]`.

## Quality Checklist

- At least one greenhouse dome element with glass-and-iron architecture (SVG or CSS).
- Specimen labels present with Latin italic name, common name, and description.
- Winding path motif used for navigation or progress.
- Fountain centerpiece or water element as focal point.
- Seasonal flower display with season-appropriate accent colors.
- Garden bench silhouette appears at rest/contact/about points.
- Plant catalog page layout with framed illustration and classification rows.
- Green dominates the palette with curated restraint.
- Cool blue accents (glass, fountain) provide contrast.
- Earth tones (stone, wood, cream) ground the design.
- Typography includes serif italic for scientific names.
- Educational tone throughout — everything teaches something.
- The aesthetic reads as a world-class botanical garden, not a wild jungle.
- Animations are gentle — breeze, ripple, bloom — matching the peaceful garden mood.
- All SVG elements are inline and fully rendered, no placeholder image references.

## Anti-Patterns

- Chaotic wild-plant overflow without structure (botanical gardens are carefully maintained and ordered).
- Missing specimen labels on plant content (labels are the educational backbone).
- No greenhouse dome architecture present (the dome is the defining structural element).
- Dark moody palettes (botanical gardens are bright, airy, and sunlit).
- Missing water or fountain elements (water features are central garden focal points).
- Industrial or modern digital aesthetic (botanical garden is natural and scholarly).
- Missing seasonal awareness (botanical gardens rotate displays by season).
- Sans-serif-only typography without serif italic for Latin names (scientific authority matters).
- No catalog or reference layout (botanical gardens have printed guides and catalog pages).
- Harsh transitions or aggressive animations (the mood is peaceful and gentle).
- Missing earth-tone grounding (stone paths, wood benches, cream paper provide warmth).
- Monochrome green without contrast colors (glass-blue, fountain-water, seasonal accents add depth).
- Missing path or wayfinding motif (the winding path is how visitors move through the garden).
- Overly playful or cartoonish style (botanical gardens are refined and educational).
- Missing the bench resting points (gardens have places to sit and contemplate).
