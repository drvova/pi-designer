---
name: streetwear-graphic-ui
description: Build streetwear graphic UI components (oversized logo, screen print texture, hoodie fabric, snapback cap, graphic tee print, sneaker sole, drip paint) with bold graphic elements, screen print textures, and the urban energy of streetwear fashion. Trigger this skill when the user asks for streetwear, graphic tee, hoodie, snapback, sneaker, screen print, drip paint, urban fashion, street style, oversized logo, streetwear brand, skate culture, or bold graphic interfaces.
---

# Streetwear Graphic UI

Use this skill to design and implement interfaces inspired by streetwear fashion: oversized graphic logos, cracked screen print textures, heavy hoodie cotton surfaces, snapback cap silhouettes, graphic tee print areas, sneaker sole traction patterns, and drip paint accents. Every design decision references the raw energy of street culture — each graphic is bold, each texture is worn, each element earns its place through impact.

## Non-Negotiable Foundations

1. **Oversized logo is the primary visual signal.** Every major surface features a large, bold graphic shape — scaled up beyond comfort, cropped at edges, demanding attention. The logo IS the design language.
2. **Screen print texture is the material feel.** Surfaces suggest slightly cracked ink on cotton — worn, lived-in, imperfect. Never glossy, never pristine, never corporate-polished.
3. **Hoodie fabric is the surface quality.** Heavy cotton fleece with a slight nap, soft but substantial. Surfaces feel weighted, warm, and street-ready — never thin, never silky, never synthetic.
4. **Sneaker sole is the structural motif.** Tread patterns, herringbone grip, and rubber compound textures provide geometric grounding. They appear as section backgrounds, card patterns, and border accents.
5. **Snapback cap is the accessory silhouette.** The flat-brimmed, structured crown of a snapback provides a recognizable shape for badges, profile frames, and ornamental elements.
6. **Drip paint is the accent language.** Paint drips, splatters, and runs appear at edges, corners, and transitions. They signal authenticity — this is hand-done, not factory-stamped.
7. **Graphic tee print area is the content frame.** The rectangular print zone on a tee shirt — slightly distorted by fabric fold — provides a natural card and content container shape.
8. **Typography is bold, compressed, and confrontational.** Heavy condensed sans-serif, stencil cuts, or hand-drawn lettering. Thin, elegant, or serif fonts are forbidden. This is shout-not-whisper typography.
9. **Color restraint follows screen print logic.** Limited palette (2-4 colors per surface) reflects the economics of screen printing — each color is a screen, each screen costs money. Restraint is the aesthetic.
10. **Worn authenticity pervades the entire system.** Every element should feel used, not new. Cracks, fades, ink inconsistencies, fabric pilling — these are features, not defects.

## Core Material Recipes

### 1) Screen Print Texture Overlay

Cracked ink texture — the signature worn screen print look.

- Cracked ink noise overlay:

```
bg-[url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.12'/%3E%3C/svg%3E")]
```

- Cracked ink line pattern (horizontal stress cracks):

```
before:content-[''] before:absolute before:inset-0 before:bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_18px,rgba(0,0,0,0.06)_18px,rgba(0,0,0,0.06)_19px,transparent_19px,transparent_37px)] before:pointer-events-none
```

- The texture reads as ink that has aged and cracked through wear and washing.
- Opacity between 0.08 and 0.15 — visible but not dominating.

### 2) Hoodie Cotton Fleece Surface

Heavy cotton with slight nap — the streetwear material base.

```
bg-[#4a4a4a] bg-[url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E')] shadow-[inset_0_1px_3px_rgba(0,0,0,0.2),inset_0_-1px_2px_rgba(255,255,255,0.05)]
```

- Alternative heavy cotton with pilling texture:

```
bg-[url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='turbulence' baseFrequency='2.0' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E')] bg-[#4a4a4a]
```

- The surface feels substantial — 300+ GSM cotton fleece.
- Inner shadow creates the soft depression of fabric drape.

### 3) Sneaker Sole Traction Pattern

Herringbone or waffle tread — geometric grip texture.

- Herringbone tread pattern:

```
bg-[linear-gradient(135deg,#f5f5f5_25%,transparent_25%,transparent_75%,#f5f5f5_75%,#f5f5f5),linear-gradient(225deg,#f5f5f5_25%,transparent_25%,transparent_75%,#f5f5f5_75%,#f5f5f5)] bg-[size:16px_16px] bg-[#1a1a1a]
```

- Waffle grip pattern (for sole card backgrounds):

```
bg-[linear-gradient(90deg,rgba(245,245,245,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(245,245,245,0.08)_1px,transparent_1px)] bg-[size:10px_10px] bg-[#1a1a1a]
```

- Circular pivot point pattern (forefoot detail):

```
bg-[radial-gradient(circle_3px_at_center,rgba(245,245,245,0.1)_3px,transparent_3px)] bg-[size:14px_14px] bg-[#1a1a1a]
```

- Sole patterns are always on dark backgrounds — they represent the bottom of a shoe, ground-level.
- Tread geometry is regular and mechanical, not organic.

### 4) Oversized Logo Display

Large bold graphic cropped at container edges — maximum visual impact.

```html
<div class="relative overflow-hidden h-64 bg-[#1a1a1a]">
  <!-- Logo scaled to overflow container -->
  <span class="absolute -top-8 -right-12 text-[180px] font-black text-[#f5f5f5] opacity-10 leading-none select-none pointer-events-none">S</span>
  <span class="absolute -bottom-16 -left-8 text-[200px] font-black text-[#c41e1e] opacity-8 leading-none select-none pointer-events-none">W</span>
  <!-- Content overlay -->
  <div class="relative z-10 p-8 flex items-end h-full">
    <h2 class="text-[#f5f5f5] text-3xl font-black uppercase tracking-tight">Streetwear</h2>
  </div>
</div>
```

- Logo characters are 150-300px, cropped at container edges.
- Opacity between 0.06 and 0.15 — watermark presence, not readable text.
- Content sits in the negative space around the oversized letterforms.

### 5) Snapback Cap Silhouette

Structured flat-brimmed cap — the streetwear headwear icon.

```html
<svg viewBox="0 0 120 80" class="w-30 h-20">
  <!-- Cap crown -->
  <path d="M20,55 C20,25 45,10 60,10 C75,10 100,25 100,55 Z" fill="#1a1a1a" stroke="#2a2a2a" stroke-width="1" />
  <!-- Front panel seam -->
  <line x1="60" y1="10" x2="60" y2="55" stroke="#2a2a2a" stroke-width="0.5" />
  <!-- Brim (flat, extending forward) -->
  <path d="M15,55 L5,58 C2,59 2,63 5,63 L55,63 L60,55 Z" fill="#1a1a1a" stroke="#2a2a2a" stroke-width="1" />
  <!-- Brim stitching -->
  <path d="M10,59 L50,59" stroke="#4a4a4a" stroke-width="0.5" stroke-dasharray="3,2" />
  <!-- Snapback closure (rear strap) -->
  <rect x="85" y="48" width="15" height="6" rx="1" fill="#4a4a4a" stroke="#3a3a3a" stroke-width="0.5" />
  <!-- Eyelet -->
  <circle cx="40" cy="35" r="2" fill="none" stroke="#4a4a4a" stroke-width="0.5" />
  <circle cx="80" cy="35" r="2" fill="none" stroke="#4a4a4a" stroke-width="0.5" />
</svg>
```

- Crown is structured, not floppy — angular geometry, flat brim.
- Snapback strap visible at the rear.
- Eyelets (ventilation holes) as small circles on the crown.

### 6) Drip Paint Accent

Paint drips running down from edges — raw, hand-done energy.

```html
<svg viewBox="0 0 200 60" class="w-full h-15" preserveAspectRatio="none">
  <!-- Drip 1 (short) -->
  <path d="M30,0 L30,25 C30,30 28,32 30,32 C32,32 30,30 30,25" fill="#c41e1e" />
  <!-- Drip 2 (medium) -->
  <path d="M80,0 L80,40 C80,46 77,48 80,48 C83,48 80,46 80,40" fill="#c41e1e" />
  <!-- Drip 3 (long, with bulb) -->
  <path d="M130,0 L130,50 C130,58 126,60 130,60 C134,60 130,58 130,50" fill="#c41e1e" />
  <!-- Drip 4 (short, offset) -->
  <path d="M160,0 L160,18 C160,22 158,24 160,24 C162,24 160,22 160,18" fill="#c41e1e" />
  <!-- Paint splash at origin -->
  <circle cx="30" cy="2" r="3" fill="#c41e1e" />
  <circle cx="80" cy="2" r="4" fill="#c41e1e" />
  <circle cx="130" cy="2" r="5" fill="#c41e1e" />
  <circle cx="160" cy="2" r="2.5" fill="#c41e1e" />
</svg>
```

- Drips vary in length (15-60px) for organic feel.
- Each drip ends with a bulbous tip — paint pooling before dripping further.
- Splash circles at the origin point where paint pooled before running.
- Accent red `#c41e1e` is the primary drip color — bold, unapologetic.

### 7) Graphic Tee Print Frame

Rectangular print zone with slight fabric distortion.

```
class="relative bg-[#f5f5f5] rounded-sm overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.1)] before:content-[''] before:absolute before:inset-0 before:bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.2%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.04%22/%3E%3C/svg%3E')] before:pointer-events-none"
```

- The print area has slight fabric grain visible underneath.
- Content inside the print frame is the graphic design.
- Border is minimal — the print area is defined by the fabric change, not a line.

### 8) Hoodie Pocket Panel

 kangaroo pocket shape on hoodie surface — structural accent.

```
class="relative bg-[#4a4a4a] rounded-b-2xl mt-[-4px] shadow-[inset_0_4px_8px_rgba(0,0,0,0.2),inset_0_-2px_4px_rgba(255,255,255,0.03)]"
```

- The pocket opening is suggested by a top-edge shadow.
- Curved bottom matches the kangaroo pocket silhouette.
- Surface texture continues from the hoodie body above.

### 9) Streetwear Card Component

Card with screen print texture and graphic area.

```
class="bg-[#1a1a1a] rounded-sm overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.3)] border border-[#2a2a2a]"
```

- Screen print texture overlay on the card surface.
- Graphic area uses oversized logo or print frame.
- Bottom edge may feature drip paint accent.

### 10) Sneaker Sole Section Divider

Section divider with traction tread pattern.

```html
<div class="w-full h-8 bg-[#1a1a1a] bg-[linear-gradient(135deg,rgba(245,245,245,0.06)_25%,transparent_25%,transparent_75%,rgba(245,245,245,0.06)_75%,rgba(245,245,245,0.06)),linear-gradient(225deg,rgba(245,245,245,0.06)_25%,transparent_25%,transparent_75%,rgba(245,245,245,0.06)_75%,rgba(245,245,255,0.06))] bg-[size:16px_16px]"></div>
```

### 11) Streetwear Hero Section

Full-width hero with oversized logo and drip paint.

```
class="relative overflow-hidden bg-[#1a1a1a] min-h-[500px] flex items-center"
```

- Background: oversized logo at low opacity, cropped at edges.
- Accent: drip paint SVG at top edge.
- Foreground: content on dark card.
- Bottom edge: sneaker sole tread pattern divider.

### 12) Bold Graphic Button

Button with screen print texture and bold type.

```
class="bg-[#c41e1e] text-[#f5f5f5] font-black uppercase tracking-wider px-8 py-3 rounded-none hover:bg-[#a01a1a] transition-all duration-200 shadow-[3px_3px_0px_#1a1a1a] hover:shadow-[1px_1px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
```

- Color variants: `bg-[#1a1a1a] text-[#f5f5f5]` (black), `bg-[#40e040] text-[#1a1a1a]` (neon drip).
- Offset shadow creates depth — the button presses into the surface.
- 200ms transition — fast, responsive, street-speed.

### 13) Snapback Cap Navigation Bar

Navigation with flat-brim cap aesthetic.

```
class="bg-[#1a1a1a] text-[#f5f5f5] py-4 px-6 font-black uppercase tracking-wider text-sm border-b-4 border-[#c41e1e] shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
```

### 14) Screen Print Label

Label with cracked ink texture.

```
class="inline-block bg-[#f5f5f5] text-[#1a1a1a] font-black uppercase tracking-wider text-xs px-3 py-1 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.6%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3CfeColorMatrix type=%22saturate%22 values=%220%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.1%22/%3E%3C/svg%3E')]"
```

### 15) Drip Paint Divider

Horizontal divider with paint drips running down.

```html
<div class="relative w-full h-12">
  <div class="absolute top-0 left-0 right-0 h-1 bg-[#c41e1e]"></div>
  <svg viewBox="0 0 800 48" class="absolute top-0 left-0 w-full" preserveAspectRatio="none">
    <path d="M100,4 L100,30 C100,36 97,38 100,38 C103,38 100,36 100,30" fill="#c41e1e" />
    <path d="M300,4 L300,42 C300,48 296,48 300,48 C304,48 300,48 300,42" fill="#c41e1e" />
    <path d="M500,4 L500,24 C500,28 498,30 500,30 C502,30 500,28 500,24" fill="#c41e1e" />
    <path d="M700,4 L700,36 C700,42 697,44 700,44 C703,44 700,42 700,36" fill="#c41e1e" />
  </svg>
</div>
```

### 16) Graphic Tee Hero Card

Full card styled as an oversized graphic tee print.

```
class="relative bg-[#f5f5f5] rounded-sm overflow-hidden p-12 shadow-[0_8px_32px_rgba(0,0,0,0.2)] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.5%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.03%22/%3E%3C/svg%3E')]"
```

## Color Palette System (Street Culture Colors)

| Color | Hex | Cultural Role | Usage |
|---|---|---|---|
| Street Black | `#1a1a1a` | Worn black cotton, nighttime, the blank canvas | Primary background, dark panels, oversized logos |
| Hoodie Gray | `#4a4a4a` | Heathered fleece, urban concrete, mid-tone depth | Secondary surfaces, hoodie fabric, muted content |
| Screen Print White | `#f5f5f5` | Ink on cotton, graphic contrast, print highlights | Light surfaces, text on dark, graphic tee prints |
| Accent Red | `#c41e1e` | Bold screen print, brand identity, street energy | Primary action, drip paint, bold accents, CTAs |
| Sneaker Sole White | `#f0f0f0` | Rubber compound, clean sole, fresh-out-of-box | Sole patterns, light accent panels, contrast elements |
| Drip Neon | `#40e040` | Spray paint, night glow, the standout accent | Neon highlights, special editions, callout elements |
| Cap Color | `#2a4a6a` | Snapback fabric, structured headwear, cool accent | Cap elements, secondary accent, badge fills |
| Print Ink | `#1a1a1a` | Screen print ink, saturated, heavy coverage | Logo fills, text on light, primary graphic color |

**Palette Rules:**
- Street black is the dominant surface color — it IS the hoodie, the night, the blank canvas.
- Accent red is the primary action color — it appears on CTAs, drip paint, and brand accents.
- Screen print white provides maximum contrast on dark surfaces — it is the ink.
- Drip neon is used sparingly — it is the spray-paint accent that makes everything pop.
- Cap color provides cool-toned variety — use it for secondary accents and badges.
- Never use pastel colors — streetwear is bold, not soft.
- Never use pure white `#ffffff` — always use screen print white `#f5f5f5`.
- Never use pure black `#000000` — always use street black `#1a1a1a`.
- Limited palette per surface (2-3 colors max) — reflects screen print economics.

## Typography Recommendations

- **Display:** Oswald, Anton, Bebas Neue (condensed bold — maximum impact, minimum space).
- **Body:** Inter, Roboto (clean sans-serif, neutral, readable at small sizes).
- **Accent/Labels:** `font-black uppercase tracking-wider text-xs` (screen print label style).
- **Monospace:** JetBrains Mono (for technical data within streetwear context).

### Typography Rules
- All headings use bold or black-weight sans-serif fonts. Thin, light, or serif weights are forbidden.
- Display type is condensed and uppercase — it should feel compressed and impactful.
- Body text uses clean sans-serif at comfortable sizing (16px base minimum).
- Labels use uppercase with moderate tracking — screen print label aesthetic.
- Color for text: on dark street black, use screen print white. On light surfaces, use street black.
- Accent red is used for emphasis text, interactive text, and call-to-action labels.
- Typography should feel bold, confrontational, and unapologetic — shout, not whisper.

## Component Architecture Pattern

### Layout Hierarchy

```
Page Container (street black bg + hoodie cotton texture)
  Header (street black bg + snapback cap border)
    Drip paint accent at bottom edge
  Hero Section (oversized logo backdrop + screen print texture)
    Hero Card (graphic tee print frame)
  Content Sections (alternating street black / hoodie gray)
    Sneaker sole tread dividers between sections
  Footer (street black + drip neon accents + snapback silhouette)
```

### Component Layering

```
Layer 1: Hoodie cotton surface (street black / hoodie gray base)
Layer 2: Screen print texture overlay (cracked ink noise)
Layer 3: Sneaker sole pattern (tread geometry)
Layer 4: Oversized logo (low-opacity background graphics)
Layer 5: Content (text, buttons, cards)
Layer 6: Drip paint accents (edge decorations)
Layer 7: Snapback cap and graphic tee elements (accents, badges)
```

### Card Component Standard

```html
<article class="bg-[#1a1a1a] rounded-sm overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.3)] border border-[#2a2a2a]">
  <!-- Graphic tee print area -->
  <div class="relative h-48 bg-[#f5f5f5] overflow-hidden">
    <!-- Oversized logo in print area -->
    <span class="absolute -top-4 -right-6 text-[120px] font-black text-[#1a1a1a] opacity-8 leading-none select-none">X</span>
    <!-- Screen print texture -->
    <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.6%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3CfeColorMatrix type=%22saturate%22 values=%220%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.1%22/%3E%3C/svg%3E')] pointer-events-none"></div>
  </div>
  <!-- Hoodie cotton content area -->
  <div class="p-6 bg-[#1a1a1a]">
    <h3 class="font-black text-[#f5f5f5] text-lg uppercase tracking-wider">Card Title</h3>
    <p class="text-[#f5f5f5]/70 mt-2 text-sm">Body text on hoodie surface.</p>
  </div>
  <!-- Drip paint bottom accent -->
  <svg viewBox="0 0 400 8" class="w-full h-2" preserveAspectRatio="none">
    <rect x="0" y="0" width="400" height="2" fill="#c41e1e" />
    <path d="M80,2 L80,8 C80,8 78,8 80,8" fill="#c41e1e" />
    <path d="M200,2 L200,6 C200,7 198,7 200,7" fill="#c41e1e" />
    <path d="M320,2 L320,8 C320,8 318,8 320,8" fill="#c41e1e" />
  </svg>
</article>
```

## Interaction Rules

### Transitions
- **Ink stamp:** 150ms ease-out with scale(0.95) to scale(1). Fast, punchy, screen print stamping.
- **Drip flow:** 400ms ease-in with translateY(0) to translateY(4px). Paint running down.
- **Sole press:** 100ms ease with shadow reduction. Foot pressing into sole grip.
- **Logo slam:** 200ms ease-out with scale(1.1) to scale(1) and opacity increase. Bold, confrontational entrance.

### Hover States
- Buttons gain accent red fill with screen print texture: `bg-[#c41e1e]` fast transition.
- Cards gain drip paint accent at bottom edge.
- Links gain bold underline with accent red: `border-b-2 border-[#c41e1e]`.
- Navigation items show snapback cap shadow intensification.
- Oversized background logos shift opacity from 0.06 to 0.12.

### Scroll Behaviors
- Oversized logos parallax at 0.4x scroll speed (bold, noticeable movement).
- Drip paint drips extend on scroll-enter (length animation 300ms).
- Sneaker sole patterns shift 1px per 50px scroll (subtle traction feel).
- Screen print texture opacity increases slightly as sections enter viewport.

### Focus States
- `focus:ring-4 focus:ring-[#c41e1e]/50` (accent red ring on dark backgrounds).
- `focus:ring-4 focus:ring-[#1a1a1a]/30` (street black ring on light backgrounds).
- `focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1a1a1a]` on street black surfaces.
- Focus rings are bold and visible — streetwear does not hide.

### Loading States
- Oversized logo scales in from 1.5x to 1x (200ms, punchy entrance).
- Drip paint extends downward in sequence (staggered 100ms per drip).
- Sneaker sole pattern tiles animate with a sliding motion (continuous 2s loop).
- Screen print texture cracks fade in from opacity 0 to 0.12 (400ms).

## Reusable Tailwind Tokens

### Background Patterns
```
--hoodie-cotton: bg-[#4a4a4a] bg-[url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E')]
--sneaker-sole: bg-[linear-gradient(135deg,rgba(245,245,245,0.06)_25%,transparent_25%,transparent_75%,rgba(245,245,245,0.06)_75%,rgba(245,245,245,0.06)),linear-gradient(225deg,rgba(245,245,245,0.06)_25%,transparent_25%,transparent_75%,rgba(245,245,245,0.06)_75%,rgba(245,245,245,0.06))] bg-[size:16px_16px] bg-[#1a1a1a]
--screen-print: bg-[url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.12'/%3E%3C/svg%3E")]
--street-dark: bg-[#1a1a1a]
```

### Border Tokens
```
--cap-brim: border-b-4 border-[#c41e1e]
--sole-grip: border border-[#2a2a2a]
--print-frame: border border-[#f5f5f5]/10
--drip-edge: border-t-2 border-[#c41e1e]
```

### Text Tokens
```
--text-primary: text-[#f5f5f5] (on street black)
--text-on-light: text-[#1a1a1a] (on screen print white)
--text-accent: text-[#c41e1e] (accent red emphasis)
--text-neon: text-[#40e040] (drip neon highlights)
--text-muted: text-[#f5f5f5]/50 (muted on dark)
```

### Shadow Tokens
```
--hoodie-depth: shadow-[0_4px_16px_rgba(0,0,0,0.3)]
--print-stamp: shadow-[3px_3px_0px_#1a1a1a]
--print-pressed: shadow-[1px_1px_0px_#1a1a1a]
--sole-press: shadow-[0_2px_8px_rgba(0,0,0,0.4)]
--drip-glow: shadow-[0_0_12px_rgba(196,30,30,0.3)]
```

### Animation Tokens
```
--transition-stamp: transition-all duration-150 ease-out
--transition-drip: transition-all duration-400 ease-in
--transition-sole: transition-all duration-100 ease
--transition-logo: transition-all duration-200 ease-out
```

## Quality Checklist

### Pattern Presence
- At least one screen print texture (cracked ink noise) is visible.
- Oversized logo or graphic element appears at bold scale.
- Sneaker sole tread pattern appears on at least one surface.
- Drip paint accent appears at an edge or transition.

### Color Compliance
- Street black `#1a1a1a` is the dominant surface color.
- Accent red `#c41e1e` is used for primary actions and drip paint.
- Screen print white `#f5f5f5` is used for text on dark and graphic areas.
- Drip neon `#40e040` appears sparingly as a highlight accent.
- No pastel colors anywhere in the design.
- No pure white or pure black.
- Maximum 3 colors per surface (screen print palette constraint).

### Texture and Feel
- Surfaces feel like heavy cotton — substantial, warm, street-ready.
- Screen print textures are visible — cracked ink, not pristine.
- Shadows are heavy and dark, suggesting fabric weight.
- The overall impression is bold, worn, and authentic.

### Typography
- All headings use bold or black-weight condensed sans-serif.
- Body text uses clean sans-serif at comfortable sizing.
- Labels use uppercase with moderate tracking.
- No thin, light, serif, or elegant typography.

### Street Culture Authenticity
- The design reads as streetwear / urban fashion / skate culture.
- Oversized graphics are bold and unapologetic.
- Screen print textures show wear and age.
- Drip paint accents signal handmade, not factory.

### Accessibility
- Text contrast ratios meet WCAG AA on all surfaces.
- Focus states are visible with accent red rings.
- Screen print textures are not behind body text.
- Touch targets are at least 44px.
- Oversized logos do not interfere with content readability.

## Anti-Patterns

- **Missing screen print texture.** The cracked ink surface IS the material feel. Without it, this is just a dark theme.
- **Using thin, light, or elegant typography.** Streetwear is bold. Heavy condensed sans-serif, always.
- **Glossy, polished, or corporate surfaces.** Streetwear is worn, not pristine. Matte, textured, lived-in.
- **Missing oversized graphic element.** The bold, cropped logo is the primary visual signal. Without it, there is no street energy.
- **Missing drip paint accent.** The paint drip is the signature of street authenticity. Use it at edges and transitions.
- **Using too many colors per surface.** Screen printing economics: 2-3 colors max per surface. Restraint is the aesthetic.
- **Pastel or soft colors.** Streetwear is bold, not gentle. High contrast, limited palette, maximum impact.
- **Missing sneaker sole pattern.** The tread pattern provides geometric grounding. Use it as section dividers and backgrounds.
- **Treating texture as mere decoration.** Screen print cracks, fabric grain, and sole grip are material properties — they communicate what the surface IS.
- **Flat card components.** Cards must have hoodie texture, screen print overlay, and bold typography to feel authentic.
- **Sharp, modern borders.** Use drip paint edges, snapback cap borders, or sneaker sole patterns — not clean CSS lines.
- **Missing snapback cap reference.** The cap silhouette and brim border are signature streetwear elements.
- **Uniform clean surfaces.** Every surface should show some wear — pilling, cracking, fading. Clean means fake.
- **Slow, smooth animations.** Streetwear is fast and punchy. Transitions under 200ms, not 600ms.

## Accessibility Considerations

### Contrast Requirements
- Screen print white `#f5f5f5` on street black `#1a1a1a`: verify WCAG AA (ratio ~16:1, passes AAA).
- Street black `#1a1a1a` on screen print white `#f5f5f5`: verify WCAG AA (same ratio, passes AAA).
- Accent red `#c41e1e` on street black `#1a1a1a`: verify WCAG AA for large text (ratio ~4.6:1, passes AA for large).
- Accent red `#c41e1e` on screen print white `#f5f5f5`: verify WCAG AA (ratio ~5.2:1, passes AA).
- Drip neon `#40e040` on street black `#1a1a1a`: verify WCAG AA (ratio ~8.2:1, passes AAA).
- Drip neon `#40e040` on screen print white `#f5f5f5`: verify WCAG AA (ratio ~1.3:1, fails — use only on dark backgrounds).

### Focus Management
- All interactive elements must have visible focus indicators.
- Use `focus:ring-4 focus:ring-[#c41e1e]/50` on dark surfaces.
- Use `focus:ring-4 focus:ring-[#1a1a1a]/30 focus:ring-offset-2 focus:ring-offset-[#f5f5f5]` on light surfaces.
- Focus rings must be bold and clearly visible — streetwear does not hide interaction states.

### Pattern Accessibility
- Screen print texture overlays must not appear behind body text. Use solid dark cards for readability.
- Oversized background logos must have `aria-hidden="true"` when decorative.
- Sneaker sole patterns must not interfere with content readability.
- Drip paint SVGs must have `aria-hidden="true"` when decorative.

### Touch Targets
- All buttons and interactive elements: minimum 44px by 44px.
- Navigation items: generous padding for touch interaction.
- Drip paint decorative elements: non-interactive, pointer-events-none.

### Screen Reader Context
- Snapback cap images: `alt="Snapback cap silhouette"` with meaningful descriptions.
- Sneaker sole patterns: `alt=""` with `role="presentation"` (decorative).
- Oversized logos: `alt=""` with `aria-hidden="true"` (decorative background).
- Navigation items: semantic `<nav>` with `aria-label="Main navigation"`.

### Color Blindness Considerations
- Accent red `#c41e1e` and drip neon `#40e040` differ significantly in hue and luminance, aiding color-blind users.
- Add shape differences (drip length, pattern density) alongside color differences.
- Never use color alone to convey meaning without a secondary signal (icon, text label, pattern variation).
- Sneaker sole patterns provide structural contrast through geometry, not color.

### Motion Sensitivity
- Oversized logo parallax must respect `prefers-reduced-motion`.
- Drip paint extension animations must be disabled when reduced motion is preferred.
- Screen print texture crack fade-in must be instant when reduced motion is preferred.
- Loading stamp animations must stop when reduced motion is preferred.

## Cultural Context and Usage Labels

Streetwear is a fashion movement rooted in skate culture, hip-hop, and urban youth identity. It emerged in the 1980s and 1990s from brands like Stüssy, Supreme, and A Bathing Ape — where graphic design, limited drops, and community identity drive value. Every element in streetwear carries cultural weight: the oversized logo signals brand allegiance, the hoodie represents comfort and rebellion, the snapback cap marks tribal membership.

Screen printing is the primary production method for streetwear graphics. Each color in a design requires a separate screen, which costs money to produce. This economic constraint has become an aesthetic: limited color palettes, bold graphic shapes, and high-contrast designs are the visual language of streetwear. The cracked ink texture that develops over time — through washing and wearing — is not a defect but a mark of authenticity.

The sneaker is the most important artifact in streetwear culture. Sole patterns, tread designs, and rubber compounds are obsessively cataloged and recognized. The herringbone, waffle, and pivot-point patterns are iconic — they provide geometric vocabulary that streetwear-native audiences immediately recognize.

Drip paint — the visual of paint running and pooling — references graffiti, spray art, and the DIY ethos of street culture. It signals that something was made by hand, not by machine. In UI design, drip accents appear at edges and transitions, grounding the interface in the rawness of street art.

The snapback cap — with its flat brim, structured crown, and adjustable snap closure — is the defining headwear of streetwear. Its silhouette is instantly recognizable and carries cultural authority. Use it as a badge shape, navigation accent, or ornamental element.

This skill respects the deep cultural roots of streetwear fashion. Design with the boldness, authenticity, and community energy that the culture demands — every graphic earned, every texture lived-in, every element placed with intention.
