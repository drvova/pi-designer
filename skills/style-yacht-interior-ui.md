---
name: yacht-interior-ui
description: Build yacht interior UI components (polished teak decking, chrome fittings, nautical portholes, white leather seating, brass compass, horizon view) with luxury maritime surfaces, nautical chrome accents, and the serene opulence of a private vessel at sea. Trigger this skill when the user asks for yacht interior design, nautical luxury UI, maritime surfaces, boat interior components, teak and chrome styling, ocean-view interfaces, or premium seafaring aesthetics.
---

# Yacht Interior UI

Use this skill to design and implement serene, ultra-luxurious maritime interfaces with polished teak deck surfaces, chrome fitting accents, nautical porthole windows, white leather seating, brass compass decorations, and the calm opulence of a private yacht cabin overlooking open water. This is not a fishing boat — every surface is polished, every fitting is chrome, every view is horizon.

## Non-Negotiable Foundations

- Teak deck surface is MANDATORY: every major background or surface must show warm wood grain with subtle parallel plank lines — this is the soul of the aesthetic.
- Chrome fittings appear as thin metallic highlights, border treatments, icon accents, and polished reflections — never as large flat grey fills.
- White leather is smooth, supple, and luminous: subtle gradient shading with faint stitching lines conveys the tactile quality of real upholstery.
- Porthole windows are circular brass-framed apertures showing sea and sky — the signature nautical motif that anchors the entire visual identity.
- The aesthetic communicates SERENITY, REFINED LUXURY, and the QUIET CONFIDENCE of ownership. This is understated wealth — not flashy, not loud, just impeccable.
- Colors are restrained and maritime: warm teak, polished chrome, brass, white leather, sea blues, and deep navy. No loud primaries.
- Typography is clean and precise: high-legibility sans-serif with generous tracking evokes navigation instruments and deck plans.

## Core Material Recipes

### 1) Polished Teak Deck Surface

Warm wood grain with parallel plank lines — the foundation of every yacht interior.

- Base: `bg-[#a08050]` (warm teak base).
- Plank lines: repeating linear gradient simulating parallel wood planks: `bg-[repeating-linear-gradient(90deg,#a08050_0px,#a08050_80px,#8a7040_80px,#8a7040_82px)]`.
- Grain texture: subtle noise via CSS: `bg-[url("data:image/svg+xml,...")]` with fine horizontal striations or a layered radial gradient.
- Combined teak: `bg-[repeating-linear-gradient(90deg,#a08050_0px,#a08050_80px,#8a7040_80px,#8a7040_82px)]` with `shadow-[inset_0_2px_8px_rgba(0,0,0,0.15),0_1px_0_rgba(255,255,255,0.1)]`.
- Warm varnish sheen: add `after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b after:from-white/5 after:to-transparent` for polished wood reflection.

### 2) Chrome Fitting Accent

Shiny metallic highlights for borders, icons, and decorative elements.

- Chrome border: `border border-[#c8c8c8]` with `shadow-[0_1px_2px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.6)]`.
- Chrome gradient: wrapper `bg-gradient-to-b from-[#e0e0e0] via-[#c8c8c8] to-[#a0a0a0] p-[1px] rounded-full` with inner content.
- Polished chrome text: `text-[#c8c8c8]` with `drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]`.
- Chrome icon treatment: `text-[#c8c8c8] drop-shadow-[0_1px_0_rgba(0,0,0,0.2)]` for crisp metallic readability.

### 3) Porthole Window

Circular brass-framed window showing sea and sky — the signature nautical element.

```html
<div class="relative w-40 h-40 rounded-full border-4 border-[#b8a040] shadow-[0_0_0_2px #8a7020,0_4px_12px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(0,0,0,0.2)] overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-b from-[#c8e0f0] via-[#c8e0f0] 50%,#2a6a9a 50%,#2a6a9a)]">
    <!-- horizon line -->
    <div class="absolute left-0 right-0 top-1/2 h-px bg-[#b8a040]/40"></div>
  </div>
  <!-- brass inner ring -->
  <div class="absolute inset-2 rounded-full border-2 border-[#b8a040]/60"></div>
  <!-- glass reflection -->
  <div class="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
  <!-- screw dots -->
  <div class="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#b8a040]"></div>
  <div class="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#b8a040]"></div>
  <div class="absolute left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#b8a040]"></div>
  <div class="absolute right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#b8a040]"></div>
</div>
```

### 4) White Leather Seating Surface

Smooth gradient with subtle stitching — supple, luminous, tactile.

- Base: `bg-[#f5f5f0]` (warm white leather).
- Depth gradient: `bg-gradient-to-b from-[#fafaf7] via-[#f5f5f0] to-[#e8e8e3]`.
- Stitching detail: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_12px,rgba(0,0,0,0.08)_12px,rgba(0,0,0,0.08)_13px)]`.
- Cushion shadow: `shadow-[0_4px_16px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.8)]`.
- Tufted variant: add circular dimples via `radial-gradient(circle_at_center,rgba(0,0,0,0.06)_2px,transparent_3px)` at grid positions.

### 5) Brass Compass Rose Decoration

Ornamental navigation motif for headings and decorative accents.

```html
<svg viewBox="0 0 60 60" class="w-12 h-12 text-[#b8a040]" aria-hidden="true">
  <circle cx="30" cy="30" r="28" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="30" cy="30" r="24" fill="none" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="30,4 33,26 30,30 27,26" fill="currentColor" opacity="0.9"/>
  <polygon points="30,56 33,34 30,30 27,34" fill="currentColor" opacity="0.5"/>
  <polygon points="4,30 26,27 30,30 26,33" fill="currentColor" opacity="0.7"/>
  <polygon points="56,30 34,27 30,30 34,33" fill="currentColor" opacity="0.7"/>
  <circle cx="30" cy="30" r="3" fill="currentColor"/>
</svg>
```

### 6) Horizon Line Accent

Thin dividing line evoking the sea-sky horizon — subtle but unmistakable.

- `h-px bg-gradient-to-r from-transparent via-[#2a6a9a]/60 to-transparent` for a floating horizon.
- With sea reflection: `h-px bg-gradient-to-r from-transparent via-[#2a6a9a]/60 to-transparent shadow-[0_0_8px_rgba(42,106,154,0.3)]`.
- As section divider: full-width `border-t border-[#2a6a9a]/30` above a `border-b border-[#c8e0f0]/30` with a single pixel gap.

### 7) Rope Coil Texture

Twisted rope accent for borders and decorative trim.

- `bg-[repeating-linear-gradient(45deg,#8a7a4a_0px,#a08a5a_3px,#8a7a4a_6px,#7a6a3a_9px)]` for a diagonal rope-braid pattern.
- As horizontal border: `h-2 bg-[repeating-linear-gradient(45deg,#8a7a4a_0px,#a08a5a_2px,#8a7a4a_4px,#7a6a3a_6px)] rounded-full`.

### 8) Nautical Panel (dark cabin wall)

Deep navy panel with chrome trim and warm teak accent.

- `bg-[#0a1a3a] border border-[#c8c8c8]/30 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(200,200,200,0.05)]`.
- Heading with chrome treatment: `text-[#c8c8c8] font-sans tracking-[0.15em] uppercase drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]`.

## Color Palette System

### Core Yacht Interior Palette

| Color | Hex | Role |
|---|---|---|
| Teak Warm | `#a08050` | Primary deck/surface — warm polished wood |
| Teak Dark | `#8a7040` | Plank groove lines, grain depth |
| Chrome Silver | `#c8c8c8` | Fitting accents, metallic highlights |
| Chrome Light | `#e0e0e0` | Chrome highlight, reflections |
| Brass | `#b8a040` | Porthole frames, compass, warm metallic |
| Brass Dark | `#8a7020` | Brass shadow, depth on frames |
| White Leather | `#f5f5f0` | Seating surfaces, cushion areas |
| Leather Shadow | `#e8e8e3` | Leather depth, lower cushion gradient |
| Sea Blue | `#2a6a9a` | Ocean water, horizon line, accent |
| Sky Pale | `#c8e0f0` | Porthole sky, light atmospheric accents |
| Navy Accent | `#0a1a3a` | Deep cabin walls, dark panel backgrounds |
| Rope Tan | `#8a7a4a` | Rope textures, cordage trim, warm utility |
| Teak Light | `#b89060` | Lighter wood grain, plank highlight |
| Off-White | `#fafaf7` | Lightest leather, bright accent surface |

Rules: Teak wood is the dominant surface material — it grounds every screen. Chrome and brass are accents only, never fills. White leather is reserved for seating/input surfaces. Navy is the dark alternative to teak for cabin walls and panels. Sea blue and sky pale appear in portholes and horizon accents. The palette is warm wood + cool metal + ocean blue — never garish.

## Typography Recommendations

- **Display:** Montserrat, Raleway, or Josefin Sans (geometric sans-serif with generous letter-spacing — evokes navigation instruments and yacht nameplates).
- **Body:** Inter, Source Sans 3, or Nunito Sans (clean, high-legibility sans-serif for readability at sea).
- **Instrument/Label:** `font-mono font-medium uppercase tracking-[0.2em] text-[10px]` (mimics nautical instrument readouts and compass graduations).
- Chrome heading treatment: `text-[#c8c8c8] drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]`.
- Brass accent text: `text-[#b8a040]` for labels, callouts, and navigational elements.
- Tracking is generous throughout — yacht design breathes with space. Use `tracking-[0.1em]` minimum for all headings.

## Interaction Rules

- Default: serene, polished, composed — nothing rattles on a yacht.
- Hover: chrome gleam intensifies, teak warmens subtly.
  - `hover:shadow-[0_0_16px_rgba(200,200,200,0.2)] hover:brightness-105 transition-all duration-300`.
- Active: `active:scale-[0.98] active:brightness-95` (tactile press like a polished switch).
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#c8c8c8]/40 focus:ring-offset-2 focus:ring-offset-[#0a1a3a]` (chrome ring on navy offset).
- Transitions: `transition-all duration-300` (smooth, unhurried, confident — like a vessel cutting through calm water).
- Scroll behavior: `scroll-behavior: smooth` globally — yacht UIs never jump.

## Reusable Tailwind Tokens

- Teak deck: `bg-[#a08050] bg-[repeating-linear-gradient(90deg,#a08050_0px,#a08050_80px,#8a7040_80px,#8a7040_82px)]`.
- Chrome fitting: `border border-[#c8c8c8] shadow-[0_1px_2px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.6)]`.
- Chrome gradient: `bg-gradient-to-b from-[#e0e0e0] via-[#c8c8c8] to-[#a0a0a0]`.
- Brass frame: `border-2 border-[#b8a040] shadow-[0_0_0_2px #8a7020,0_4px_12px_rgba(0,0,0,0.4)]`.
- White leather: `bg-gradient-to-b from-[#fafaf7] via-[#f5f5f0] to-[#e8e8e3] shadow-[0_4px_16px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.8)]`.
- Navy cabin panel: `bg-[#0a1a3a] border border-[#c8c8c8]/30 shadow-[0_4px_20px_rgba(0,0,0,0.4)]`.
- Horizon line: `h-px bg-gradient-to-r from-transparent via-[#2a6a9a]/60 to-transparent`.
- Rope trim: `h-2 bg-[repeating-linear-gradient(45deg,#8a7a4a_0px,#a08a5a_2px,#8a7a4a_4px)]`.
- Compass SVG: standard 60x60 viewBox with brass fill and cardinal points.
- Instrument label: `font-mono font-medium uppercase tracking-[0.2em] text-[10px] text-[#c8c8c8]`.

## Quality Checklist

- Teak deck surface with visible parallel plank lines on at least one major surface.
- Chrome fitting accents on borders, icons, or trim elements.
- At least one porthole element (circular brass-framed window with sea/sky).
- White leather surface with gradient shading and stitching detail.
- Brass compass rose or compass-inspired decorative element.
- Horizon line accent dividing sea/sky or used as section divider.
- Typography uses geometric sans-serif with generous tracking.
- Navy panel or deep blue element for contrast against warm teak.
- Color palette is teak + chrome + brass + white leather + sea blue.
- Polished reflections and inset highlights on metallic surfaces.
- The overall aesthetic communicates serene luxury and maritime composure.
- Shadows combine warm depth (teak/navy) with cool metallic highlight (chrome).
- Instrument-style labels or readout elements for data displays.

## Anti-Patterns

- Untextured flat brown surfaces (teak requires visible plank grain lines — plain brown is not wood).
- Bright primaries or neon colors (yacht interior is restrained maritime warmth).
- Sans-serif typography with tight tracking (nautical design demands generous letter-spacing).
- Missing chrome accents (every yacht has polished metal fittings).
- Missing porthole or circular window motif (the signature nautical element must appear somewhere).
- Oversized chrome or brass fills (metal is for accents and fittings, not background surfaces).
- Missing leather texture on seating (smooth white without gradient/stitching is plastic, not leather).
- Loud or aggressive animations (yacht UIs glide, they never lurch).
- Missing horizon line or sea-sky reference (the view is always present).
- Heavy drop shadows or neon glows (yacht interiors are naturally lit — no club lighting).
- Missing brass warmth (cold silver alone reads as hospital, not vessel).
- Rope or nautical textures used as dominant fills (they are trim, not wallpaper).

## Accessibility Considerations

- White leather (#f5f5f0) with navy text (#0a1a3a) provides excellent contrast (WCAG AAA).
- Chrome silver text on navy background requires verification — large/bold text only for AA.
- Teak warm (#a08050) text must use dark overlay or navy panel for readable contrast — teak-on-white fails.
- Focus states: `focus:ring-2 focus:ring-[#c8c8c8]/40 focus:ring-offset-2 focus:ring-offset-[#0a1a3a]` (chrome ring on navy).
- Teak plank line textures must not interfere with text legibility — overlay text on a semi-transparent navy backing if needed.
- Porthole SVGs and compass roses must be `aria-hidden="true"` when decorative.
- Rope texture borders must have sufficient height (min 4px) to be visible but not misleading as interactive elements.
- High-tracking uppercase typography may be difficult for some users at small sizes — ensure body text is 16px+ and use sentence case for longer passages.
- Sea-blue accent elements must maintain 4.5:1 contrast against their backgrounds.
- The serene, low-contrast nature of yacht interiors requires careful attention to ensure interactive elements remain distinguishable from decorative surfaces.
