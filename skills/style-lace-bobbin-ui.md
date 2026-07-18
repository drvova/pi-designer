---
name: lace-bobbin-ui
description: Build lace bobbin UI components (lace mesh pattern, bobbin thread, pillow pin, pricking card, fine thread network, drop stitch, lace fan) with delicate thread textures, intricate mesh patterns, and the patient precision of bobbin lace making. Trigger this skill when the user asks for lace, bobbin lace, lace mesh, pillow pin, pricking card, thread network, drop stitch, lace fan, fine lace texture, lace craft, lacemaking, or delicate textile interfaces.
---

# Lace Bobbin UI

Use this skill to design and implement interfaces inspired by bobbin lace: delicate criss-cross thread meshes, paired bobbin silhouettes, lace pillow surfaces with pin grids, pricking card hole patterns, fine thread network backgrounds, dropped stitch accents, and lace fan display shapes. Every design decision references the meditative patience of lacemaking — each thread is placed with intention, each crossing is structural, each pin holds a pattern in formation.

## Non-Negotiable Foundations

1. **Lace mesh pattern is the primary visual signal.** Every major surface must suggest a fine criss-cross thread network. The mesh grid IS the design language — delicate, geometric, never heavy.
2. **Thread fine-ness is the material feel.** Lines are hairline-thin, strokes are delicate, shadows are gossamer. Surfaces suggest fine cotton or silk thread — never rope, never thick yarn, never chunky knit.
3. **Pin grid precision is the structural motif.** The pricking card — a regular grid of pin holes — provides the underlying geometry. Pins are both functional (holding thread) and decorative (the pattern grid).
4. **Bobbin pair is the decorative accent.** Two weighted bobbins hang from threads as the signature lacemaking silhouette. They appear on badges, logos, and ornamental elements — never as primary content.
5. **Lace pillow is the surface texture.** The firm, fabric-covered bolster pillow where pins are placed provides a soft, slightly compressed surface quality. Surfaces feel padded, warm, and purposeful.
6. **Color restraint mirrors craft discipline.** Bobbin lace is traditionally white thread on white pillow — restraint is the aesthetic. The palette is intentionally limited: cream, ecru, pillow blue, and metallic accents.
7. **Lace fan is the display motif.** The radiating thread pattern of a lace fan — threads spreading from a narrow base — serves as the hero display shape for cards and showcase sections.
8. **Typography is fine and precise.** Thin-weight serif or light sans-serif faces with generous letter-spacing. The typography should feel like thread forming letters — light, elegant, never bold or heavy.
9. **Dropped stitch is the imperfection accent.** One intentionally missing thread crossing creates visual tension — a controlled flaw that draws the eye. Use sparingly as accent, never on primary content.
10. **Patient rhythm pervades the entire system.** Every transition is gentle, every animation is slow and deliberate, every surface is calm. This is not speed — this is the unhurried precision of craft.

## Core Material Recipes

### 1) Lace Mesh Pattern Background

Fine criss-cross thread network — the signature bobbin lace ground.

- Diagonal thread lines (45-degree mesh):

```
bg-[linear-gradient(45deg,rgba(192,192,192,0.15)_1px,transparent_1px),linear-gradient(-45deg,rgba(192,192,192,0.15)_1px,transparent_1px)] bg-[size:12px_12px]
```

- Vertical and horizontal thread grid overlay (dense mesh variant):

```
before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(90deg,rgba(192,192,192,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(192,192,192,0.08)_1px,transparent_1px)] before:bg-[size:8px_8px] before:mix-blend-multiply
```

- Each thread line is 1px — hairline thin. Grid spacing between 8px and 14px depending on density.
- At larger scales, the mesh pattern reads as a lace ground; at small scales, it provides subtle texture.

### 2) Pricking Card Pin Grid

Regular grid of pin holes on a card — the lacemaking pattern template.

- Pin hole dots on a solid background:

```
bg-[radial-gradient(circle_1.5px_at_center,rgba(192,192,192,0.4)_1px,transparent_1.5px)] bg-[size:16px_16px] bg-[#f5f0f0]
```

- Larger pin holes for emphasis variant:

```
bg-[radial-gradient(circle_2px_at_center,rgba(74,106,138,0.3)_2px,transparent_2px)] bg-[size:20px_20px] bg-[#f5f0f0]
```

- Pins are always evenly spaced — the grid represents the pricking card pattern.
- Pillow blue `#4a6a8a` pins on white suggest traditional bobbin lace pillow pins.

### 3) Fine Thread Line Network

Hairline threads crossing at precise angles — the structural lace element.

```html
<svg viewBox="0 0 400 200" class="w-full h-full" fill="none" stroke-width="0.5" opacity="0.3">
  <!-- Diagonal threads (left to right) -->
  <line x1="0" y1="0" x2="400" y2="200" stroke="#c0c0c0" />
  <line x1="0" y1="20" x2="380" y2="200" stroke="#c0c0c0" />
  <line x1="20" y1="0" x2="400" y2="180" stroke="#c0c0c0" />
  <line x1="0" y1="40" x2="360" y2="200" stroke="#c0c0c0" />
  <line x1="40" y1="0" x2="400" y2="160" stroke="#c0c0c0" />
  <!-- Diagonal threads (right to left) -->
  <line x1="0" y1="200" x2="400" y2="0" stroke="#e8dcc0" />
  <line x1="0" y1="180" x2="380" y2="0" stroke="#e8dcc0" />
  <line x1="20" y1="200" x2="400" y2="20" stroke="#e8dcc0" />
  <line x1="0" y1="160" x2="360" y2="0" stroke="#e8dcc0" />
  <line x1="40" y1="200" x2="400" y2="40" stroke="#e8dcc0" />
  <!-- Crossing points emphasized -->
  <circle cx="200" cy="100" r="1" fill="#c4a043" />
  <circle cx="180" cy="100" r="1" fill="#c4a043" />
  <circle cx="220" cy="100" r="1" fill="#c4a043" />
</svg>
```

- Thread width is 0.5px stroke — barely visible individually, forming a collective mesh.
- Silver `#c0c0c0` and ecru `#e8dcc0` threads create tonal depth in the network.
- Gold `#c4a043` crossing points mark where threads interlock.

### 4) Bobbin Pair Silhouette

Two weighted bobbins hanging from thread — the lacemaking tool icon.

```html
<svg viewBox="0 0 60 80" class="w-15 h-20">
  <!-- Left thread -->
  <path d="M28,0 C28,20 25,30 25,40" fill="none" stroke="#c0c0c0" stroke-width="0.8" />
  <!-- Right thread -->
  <path d="M32,0 C32,20 35,30 35,40" fill="none" stroke="#c0c0c0" stroke-width="0.8" />
  <!-- Left bobbin body -->
  <path d="M20,40 C20,38 30,38 30,40 L30,70 C30,72 20,72 20,70 Z" fill="#8a6a3a" stroke="#6a5030" stroke-width="1" />
  <!-- Left bobbin neck -->
  <rect x="23" y="36" width="4" height="6" rx="1" fill="#8a6a3a" stroke="#6a5030" stroke-width="0.5" />
  <!-- Left bobbin whorl (ring detail) -->
  <ellipse cx="25" cy="50" rx="4" ry="1" fill="none" stroke="#6a5030" stroke-width="0.5" />
  <!-- Right bobbin body -->
  <path d="M30,40 C30,38 40,38 40,40 L40,70 C40,72 30,72 30,70 Z" fill="#8a6a3a" stroke="#6a5030" stroke-width="1" />
  <!-- Right bobbin neck -->
  <rect x="33" y="36" width="4" height="6" rx="1" fill="#8a6a3a" stroke="#6a5030" stroke-width="0.5" />
  <!-- Right bobbin whorl -->
  <ellipse cx="35" cy="50" rx="4" ry="1" fill="none" stroke="#6a5030" stroke-width="0.5" />
</svg>
```

- Wood brown `#8a6a3a` with darker stroke `#6a5030` for the turned wooden bobbin.
- Neck tapers to where thread is wound. Body widens at the weighted end.
- Threads converge at a single crossing point above — the active lacemaking point.

### 5) Lace Pillow Surface

Firm padded bolster pillow with slight compression — the working surface.

```
bg-[#f5f0f0] shadow-[inset_0_2px_8px_rgba(74,106,138,0.1),inset_0_-2px_4px_rgba(255,255,255,0.8),0_4px_12px_rgba(0,0,0,0.08)]
```

- Pillow texture with subtle linen weave:

```
bg-[url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E')] bg-[#f5f0f0]
```

- The pillow is slightly convex — inner shadow on top, highlight on bottom edge.
- Color is lace white `#f5f0f0` with a cool blue-gray undertone from pillow blue influence.

### 6) Dropped Stitch Accent

One intentionally missing thread crossing — controlled imperfection.

```html
<svg viewBox="0 0 200 40" class="w-full h-10" fill="none" stroke-width="0.5">
  <!-- Normal mesh threads -->
  <line x1="0" y1="20" x2="200" y2="20" stroke="#c0c0c0" opacity="0.3" />
  <line x1="0" y1="0" x2="200" y2="40" stroke="#c0c0c0" opacity="0.3" />
  <line x1="0" y1="40" x2="200" y2="0" stroke="#c0c0c0" opacity="0.3" />
  <!-- Dropped stitch: gap in the horizontal thread -->
  <line x1="0" y1="10" x2="85" y2="10" stroke="#c0c0c0" opacity="0.3" />
  <line x1="115" y1="10" x2="200" y2="10" stroke="#c0c0c0" opacity="0.3" />
  <!-- Thread end curl (dropped stitch visual) -->
  <path d="M85,10 C90,14 90,18 88,18" stroke="#c4a043" stroke-width="0.8" fill="none" />
  <path d="M115,10 C110,6 110,2 112,2" stroke="#c4a043" stroke-width="0.8" fill="none" />
  <!-- Gold accent at the gap -->
  <circle cx="100" cy="10" r="1.5" fill="#c4a043" opacity="0.5" />
</svg>
```

- The dropped stitch shows thread ends curling away from the gap.
- Thread gold `#c4a043` highlights the intentional break — drawing attention to the imperfection.
- Use as a decorative accent on section borders or card edges — never across content text.

### 7) Lace Fan Display

Radiating threads from narrow base — hero display shape.

```html
<svg viewBox="0 0 300 200" class="w-full" fill="none" stroke-width="0.6">
  <!-- Fan ribs radiating from base point -->
  <line x1="150" y1="200" x2="30" y2="20" stroke="#c0c0c0" opacity="0.4" />
  <line x1="150" y1="200" x2="60" y2="15" stroke="#c0c0c0" opacity="0.4" />
  <line x1="150" y1="200" x2="90" y2="10" stroke="#e8dcc0" opacity="0.5" />
  <line x1="150" y1="200" x2="120" y2="8" stroke="#e8dcc0" opacity="0.5" />
  <line x1="150" y1="200" x2="150" y2="5" stroke="#e8dcc0" opacity="0.6" />
  <line x1="150" y1="200" x2="180" y2="8" stroke="#e8dcc0" opacity="0.5" />
  <line x1="150" y1="200" x2="210" y2="10" stroke="#e8dcc0" opacity="0.5" />
  <line x1="150" y1="200" x2="240" y2="15" stroke="#c0c0c0" opacity="0.4" />
  <line x1="150" y1="200" x2="270" y2="20" stroke="#c0c0c0" opacity="0.4" />
  <!-- Arc connecting fan tips -->
  <path d="M30,20 C80,0 220,0 270,20" stroke="#c4a043" stroke-width="0.8" fill="none" opacity="0.4" />
  <!-- Cross threads (lace mesh between ribs) -->
  <path d="M70,50 C100,45 200,45 230,50" stroke="#c0c0c0" stroke-width="0.4" fill="none" opacity="0.3" />
  <path d="M90,80 C120,72 180,72 210,80" stroke="#c0c0c0" stroke-width="0.4" fill="none" opacity="0.3" />
  <path d="M110,110 C130,100 170,100 190,110" stroke="#c0c0c0" stroke-width="0.4" fill="none" opacity="0.3" />
  <!-- Base knot -->
  <circle cx="150" cy="200" r="3" fill="#c4a043" opacity="0.6" />
</svg>
```

- Fan ribs radiate from a single base point at the bottom center.
- Arc at the top connects all rib tips — the fan edge.
- Cross threads between ribs create the lace mesh within the fan.
- Use as a hero background or card header accent — threads spread to fill the space.

### 8) Lace Mesh Card

Card component with lace mesh pattern and pillow texture.

```
class="bg-[#f5f0f0] rounded-sm overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-[#c0c0c0]/30 relative"
```

- Inner content area uses lace white background with thread noise texture.
- Header strip uses lace mesh pattern at reduced opacity.
- Bottom edge uses fine thread line border.

### 9) Lace Fan Hero Section

Full-width hero with radiating lace fan and pillow backdrop.

```
class="relative overflow-hidden bg-[#f5f0f0] min-h-[480px] flex items-center"
```

- Background: SVG lace fan radiating from bottom center.
- Overlay: pricking card pin grid at 20% opacity.
- Foreground: content on pillow-surface card.
- Bottom edge: fine thread line divider.

### 10) Bobbin Thread Button

Button styled with thread-line detail and bobbin weight.

```
class="bg-[#f5f0f0] text-[#1a1a1a] font-light uppercase tracking-[0.2em] text-xs px-8 py-3 border border-[#c0c0c0] hover:bg-[#e8dcc0] hover:border-[#c4a043] transition-all duration-500 rounded-none shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_2px_8px_rgba(196,160,67,0.2)]"
```

- Color variants: `bg-[#4a6a8a] text-[#f5f0f0]` (pillow blue), `bg-[#1a1a1a] text-[#f5f0f0]` (lace black).
- Hover shifts to ecru/gold — suggesting thread catching light.
- Slow 500ms transition mirrors the patience of lacemaking.

### 11) Pricking Card Navigation Bar

Navigation with pin grid overlay.

```
class="bg-[#f5f0f0] text-[#1a1a1a] py-4 px-6 bg-[radial-gradient(circle_1px_at_center,rgba(192,192,192,0.2)_1px,transparent_1px)] bg-[size:16px_16px] font-light uppercase tracking-[0.25em] text-xs border-b border-[#c0c0c0]/40"
```

### 12) Fine Thread Divider

Horizontal divider that looks like a single lace thread.

```html
<div class="w-full h-px bg-gradient-to-r from-transparent via-[#c0c0c0]/40 to-transparent"></div>
```

- Alternative with crossing thread pattern:

```html
<div class="w-full h-3 bg-[linear-gradient(45deg,transparent_49.5%,rgba(192,192,192,0.2)_49.5%,rgba(192,192,192,0.2)_50.5%,transparent_50.5%),linear-gradient(-45deg,transparent_49.5%,rgba(192,192,192,0.2)_49.5%,rgba(192,192,192,0.2)_50.5%,transparent_50.5%)] bg-[size:8px_100%]"></div>
```

### 13) Lace Mesh Overlay Card

Card with visible lace mesh pattern over pillow surface.

```
class="relative border border-[#c0c0c0]/20 rounded-sm p-6 bg-[#f5f0f0] bg-[linear-gradient(45deg,rgba(192,192,192,0.08)_1px,transparent_1px),linear-gradient(-45deg,rgba(192,192,192,0.08)_1px,transparent_1px)] bg-[size:12px_12px]"
```

- The mesh pattern is visible but subordinate to content.
- Pillow surface texture underneath provides warmth.

### 14) Dropped Stitch Badge

Badge component with intentional thread break accent.

```
class="relative w-16 h-16 bg-[#f5f0f0] rounded-full border border-[#c0c0c0]/40 flex items-center justify-center text-[#4a6a8a] font-light text-xs shadow-[0_1px_6px_rgba(0,0,0,0.05)] overflow-hidden"
```

- Inner mesh pattern with one visible dropped stitch on the border.
- Thread gold accent at the stitch break point.

### 15) Lace Pillow Bolster Background

Subtle padded surface for secondary sections.

```
class="bg-[#f0e8d8] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.0%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.03%22/%3E%3C/svg%3E')] shadow-[inset_0_2px_6px_rgba(74,106,138,0.08),inset_0_-1px_4px_rgba(255,255,255,0.6)]"
```

## Color Palette System (Lacemaking Craft Colors)

| Color | Hex | Cultural Role | Usage |
|---|---|---|---|
| Lace White | `#f5f0f0` | Fine cotton thread, purity, the blank pillow | Primary background, card surfaces, thread strokes |
| Thread Cream | `#f0e8d8` | Aged linen, warmth, the working pillow cover | Secondary backgrounds, warm surface areas |
| Pillow Blue | `#4a6a8a` | Linen pillow cover, the lacemaking bolster | Primary accent, interactive elements, links |
| Pin Silver | `#c0c0c0` | Steel pin heads, the grid markers | Mesh lines, borders, subtle decorative strokes |
| Lace Ecru | `#e8dcc0` | Natural unbleached thread, aged lace | Warm surfaces, secondary text on dark, thread accent |
| Bobbin Wood | `#8a6a3a` | Turned hardwood bobbin, tool weight | Badge fills, tool icons, warm accent areas |
| Thread Gold | `#c4a043` | Silk thread accent, highlighted crossings | Emphasis, crossing points, decorative highlights |
| Lace Black | `#1a1a1a` | Linen thread in contrast, formal lace display | Text on light surfaces, dark panels, navigation |

**Palette Rules:**
- Lace white is the dominant surface color — it IS the pillow, the thread, the blank canvas of lace.
- Pillow blue is the primary accent — it appears on interactive elements, links, and active states.
- Pin silver is the thread/mesh color — it draws the structural patterns without dominating.
- Thread gold appears sparingly at crossing points and emphasis — it is the silk highlight in the cotton mesh.
- Bobbin wood provides warmth in badges and icons — it is the only warm-brown element.
- Never use saturated or bright colors — the palette is deliberately muted, like thread under natural light.
- Never use pure white `#ffffff` — always use lace white with its slight warmth.
- Never use pure black `#000000` — always use lace black `#1a1a1a`.

## Typography Recommendations

- **Display:** Cormorant Garamond, EB Garamond (thin, elegant serif — thread forming letters).
- **Body:** Lora, Crimson Text (light-weight readable serif, warm and refined).
- **Accent/Labels:** `font-light uppercase tracking-[0.2em] text-xs` (fine precision lettering).
- **Monospace:** IBM Plex Mono (for technical data within the lace design context).

### Typography Rules
- All headings use thin or light-weight serif faces. Bold weights are forbidden — lace is never heavy.
- Body text maintains warm, readable sizing (16px base minimum) with generous line-height (1.7+).
- Labels and navigation use light uppercase tracking with wide letter-spacing.
- Color for text: on light lace white, use lace black. On dark lace black, use lace white.
- Pillow blue is used for interactive text (links, buttons). Thread gold for emphasis text only.
- Typography should feel like thread forming letters — fine, precise, unhurried.

## Component Architecture Pattern

### Layout Hierarchy

```
Page Container (lace white bg + thread mesh pattern)
  Header (lace black bg + pricking card pin grid)
    Fine thread divider
  Hero Section (lace fan radiating backdrop + pillow overlay)
    Hero Card (pillow surface + lace mesh)
  Content Sections (alternating lace white / thread cream accents)
    Fine thread dividers between sections
  Footer (lace black + thread gold accents + bobbin silhouette)
```

### Component Layering

```
Layer 1: Pillow surface (lace white / thread cream base)
Layer 2: Pricking card pin grid (subtle dot pattern)
Layer 3: Lace mesh pattern (diagonal thread lines)
Layer 4: Thread line network (structural crossing threads)
Layer 5: Content (text, buttons, cards)
Layer 6: Bobbin and fan decorations (accents, badges)
Layer 7: Dropped stitch accents (controlled imperfections)
```

### Card Component Standard

```html
<article class="bg-[#f5f0f0] rounded-sm overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-[#c0c0c0]/20">
  <!-- Lace mesh header strip -->
  <div class="h-1.5 w-full bg-[linear-gradient(45deg,rgba(192,192,192,0.15)_1px,transparent_1px),linear-gradient(-45deg,rgba(192,192,192,0.15)_1px,transparent_1px)] bg-[size:8px_8px]"></div>
  <!-- Pillow surface content area -->
  <div class="p-6 bg-[#f5f0f0]">
    <h3 class="font-light text-[#1a1a1a] text-lg tracking-wide">Card Title</h3>
    <p class="font-serif font-light text-[#1a1a1a]/70 mt-2 leading-relaxed">Body text on lace white pillow surface.</p>
  </div>
  <!-- Fine thread bottom border -->
  <div class="w-full h-px bg-gradient-to-r from-transparent via-[#c0c0c0]/30 to-transparent"></div>
</article>
```

## Interaction Rules

### Transitions
- **Thread reveal:** 600ms ease-in-out. Lace patterns emerge slowly, thread by thread.
- **Pillow compression:** 300ms ease. Surfaces press and release like fingers on a pillow.
- **Pin placement:** 400ms ease-out with scale(1) to scale(0.95). Pins set into the pillow.
- **Fan spread:** 800ms ease-out with rotate and scale. Lace fan ribs spread from base.

### Hover States
- Buttons gain thread gold border: `border-[#c4a043]` with slow transition.
- Cards gain subtle pillow shadow increase: `shadow-[0_4px_20px_rgba(0,0,0,0.1)]`.
- Links gain fine underline with pin silver: `border-b border-[#c0c0c0]`.
- Navigation items show pricking card dot intensification.

### Scroll Behaviors
- Lace fan backdrop parallax at 0.2x scroll speed (very slow, like thread unwinding).
- Lace mesh pattern opacity shifts between 0.1 and 0.25 as sections enter viewport.
- Pricking card pin grid shifts 1px vertically per 100px scroll (subtle pillow movement).
- Fine thread dividers draw on scroll-enter using IntersectionObserver with 600ms duration.

### Focus States
- `focus:ring-4 focus:ring-[#4a6a8a]/30` (pillow blue ring on light backgrounds).
- `focus:ring-4 focus:ring-[#c0c0c0]/50` (pin silver ring on dark backgrounds).
- `focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#f5f0f0]` on lace white surfaces.

### Loading States
- Lace mesh pattern threads draw in sequentially (left-to-right, top-to-bottom).
- Pin silver dots appear one by one on the pricking card grid.
- Lace fan ribs spread outward from center base point.
- Bobbin pair silhouette rotates gently (2s cycle, 5deg rotation).

## Reusable Tailwind Tokens

### Background Patterns
```
--lace-mesh: bg-[linear-gradient(45deg,rgba(192,192,192,0.15)_1px,transparent_1px),linear-gradient(-45deg,rgba(192,192,192,0.15)_1px,transparent_1px)] bg-[size:12px_12px]
--pricking-card: bg-[radial-gradient(circle_1.5px_at_center,rgba(192,192,192,0.4)_1px,transparent_1.5px)] bg-[size:16px_16px]
--pillow-surface: bg-[#f5f0f0] shadow-[inset_0_2px_8px_rgba(74,106,138,0.1),inset_0_-2px_4px_rgba(255,255,255,0.8),0_4px_12px_rgba(0,0,0,0.08)]
--pillow-warm: bg-[#f0e8d8] shadow-[inset_0_2px_6px_rgba(74,106,138,0.08),inset_0_-1px_4px_rgba(255,255,255,0.6)]
```

### Border Tokens
```
--thread-border: border border-[#c0c0c0]/30
--thread-glow: shadow-[0_0_16px_rgba(192,192,192,0.2)]
--pillow-card-border: border border-[#c0c0c0]/20
--pin-grid: bg-[radial-gradient(circle_1px_at_center,rgba(192,192,192,0.2)_1px,transparent_1px)] bg-[size:16px_16px]
```

### Text Tokens
```
--text-primary: text-[#1a1a1a] (on lace white)
--text-on-dark: text-[#f5f0f0] (on lace black)
--text-accent: text-[#4a6a8a] (pillow blue interactive)
--text-emphasis: text-[#c4a043] (thread gold highlights)
--text-muted: text-[#c0c0c0] (pin silver secondary)
```

### Shadow Tokens
```
--pillow-soft: shadow-[0_2px_12px_rgba(0,0,0,0.06)]
--pillow-pressed: shadow-[inset_0_2px_8px_rgba(74,106,138,0.1),inset_0_-2px_4px_rgba(255,255,255,0.8)]
--thread-depth: shadow-[0_4px_20px_rgba(0,0,0,0.1)]
--pin-shadow: shadow-[0_1px_4px_rgba(0,0,0,0.05)]
```

### Animation Tokens
```
--transition-thread: transition-all duration-600 ease-in-out
--transition-pillow: transition-all duration-300 ease
--transition-fan: transition-all duration-800 ease-out
--transition-pin: transition-all duration-400 ease-out
```

## Quality Checklist

### Pattern Presence
- At least one lace mesh pattern (diagonal criss-cross thread lines) is visible.
- Pricking card pin grid (regular dot pattern) appears on at least one surface.
- Fine thread lines (hairline SVG strokes) appear as borders or dividers.
- Bobbin silhouette or lace fan shape appears as an accent element.

### Color Compliance
- Lace white `#f5f0f0` is the dominant surface color.
- Pillow blue `#4a6a8a` is used for interactive elements and accents.
- Pin silver `#c0c0c0` is used for mesh lines and borders.
- Thread gold `#c4a043` appears sparingly at crossing points and emphasis.
- No saturated or bright colors anywhere in the design.
- No pure white or pure black.

### Texture and Feel
- Surfaces feel like pillow fabric — padded, soft, slightly compressed.
- Thread lines are hairline-thin (0.5px to 1px), never thick.
- Shadows are cool and soft, suggesting thread depth, not heavy mass.
- The overall impression is lightness and delicacy, not weight.

### Typography
- All headings use thin or light-weight serif fonts.
- Body text uses light-weight readable serif with generous line-height.
- Labels use light uppercase tracking with wide letter-spacing.
- No bold weights anywhere in the design.

### Craft Authenticity
- The design reads as bobbin lace / lacemaking / fine thread craft.
- The mesh pattern is geometrically precise, not organic or random.
- Bobbin silhouettes appear as accent, not dominant.
- The dropped stitch accent is visible and intentional.

### Accessibility
- Text contrast ratios meet WCAG AA on all surfaces.
- Focus states are visible with pillow blue or pin silver rings.
- Lace mesh patterns are not behind body text.
- Touch targets are at least 44px.
- Lace fan and thread SVGs do not interfere with content readability.

## Anti-Patterns

- **Missing lace mesh pattern.** The criss-cross thread network IS the design language. Without it, this is just a plain light theme.
- **Using bold or heavy typography.** Lace is delicate. Thin, light-weight faces only. Bold is for weight, not for lace.
- **Thick thread lines.** Thread is hairline-thin. Never use stroke widths above 1px for mesh patterns.
- **Saturated or bright colors.** The palette is muted and restrained — thread under natural light, not neon.
- **Missing pricking card grid.** The pin hole grid provides the underlying geometry. It grounds the mesh in lacemaking process.
- **Missing bobbin or fan motif.** The bobbin pair and lace fan are signature elements. Use them as accents.
- **Rigid, fast animations.** Lacemaking is patient. Transitions are slow (500ms+), smooth, deliberate.
- **Overloading with patterns.** One mesh pattern + one texture + one accent pattern maximum per surface. Balance is key.
- **Treating lace as mere decoration.** This is structural craft — each thread has purpose. Every pattern placement should feel intentional.
- **Flat card components.** Cards must have pillow texture, thread mesh accents, and fine borders to feel authentic.
- **Sharp, modern borders.** Use fine thread lines or lace mesh edges, never heavy CSS borders.
- **Missing dropped stitch accent.** The controlled imperfection is a signature of handmade lace — use it as accent.
- **Uniform grid without variation.** Pricking cards have consistent spacing, but thread crossing density varies across the pattern.

## Accessibility Considerations

### Contrast Requirements
- Lace black `#1a1a1a` on lace white `#f5f0f0`: verify WCAG AA (ratio ~16:1, passes AAA).
- Lace white `#f5f0f0` on lace black `#1a1a1a`: verify WCAG AA (same ratio, passes AAA).
- Pillow blue `#4a6a8a` on lace white `#f5f0f0`: verify WCAG AA (ratio ~4.6:1, passes AA for large text; use bold or large size for small text).
- Thread gold `#c4a043` on lace black `#1a1a1a`: verify WCAG AA for large text (ratio ~4.8:1, passes AA for large).
- Thread gold `#c4a043` on lace white `#f5f0f0`: verify contrast (ratio ~2.1:1, fails — use only for decorative elements, not text on light).
- Pin silver `#c0c0c0` on lace white `#f5f0f0`: low contrast (ratio ~1.3:1, decorative only — never for text).

### Focus Management
- All interactive elements must have visible focus indicators.
- Use `focus:ring-4 focus:ring-[#4a6a8a]/30` on light surfaces.
- Use `focus:ring-4 focus:ring-[#c0c0c0]/50 focus:ring-offset-2 focus:ring-offset-[#1a1a1a]` on dark surfaces.
- Focus rings must be clearly distinguishable from lace mesh pattern elements.

### Pattern Accessibility
- Lace mesh backgrounds must not appear behind body text. Use solid lace white cards for readability.
- Pricking card dot grids must not appear behind text content.
- Thread line SVGs must have `aria-hidden="true"` when decorative.
- Lace fan SVGs must have `aria-hidden="true"` and `role="presentation"`.
- Bobbin silhouette SVGs must have `aria-hidden="true"` when decorative.

### Touch Targets
- All buttons and interactive elements: minimum 44px by 44px.
- Bobbin navigation elements: generous padding for touch interaction.
- Dropped stitch badge components: minimum 44px touch target.

### Screen Reader Context
- Bobbin images: `alt="Bobbin pair silhouette"` with meaningful descriptions.
- Lace fan images: `alt="Decorative lace fan pattern"` or `alt=""` with `role="presentation"`.
- Thread line borders: `aria-hidden="true"` (decorative separators).
- Navigation items: semantic `<nav>` with `aria-label="Main navigation"`.

### Color Blindness Considerations
- Pillow blue `#4a6a8a` and thread gold `#c4a043` differ in hue and luminance, aiding color-blind users.
- Add shape differences (mesh density, pin spacing) alongside color differences in patterns.
- Never use color alone to convey meaning without a secondary signal (icon, text label, pattern variation).
- Pin silver on lace white provides structural contrast through pattern, not color.

### Motion Sensitivity
- Lace fan spread animation must respect `prefers-reduced-motion`.
- Thread line draw animations must be disabled when reduced motion is preferred.
- Pricking card grid shift must be static when reduced motion is preferred.
- Bobbin rotation loading animation must stop when reduced motion is preferred.

## Cultural Context and Usage Notes

Bobbin lace is a textile craft dating to the early 16th century, where pairs of weighted bobbins are manipulated to twist and braid threads around pins placed in a pattern on a firm pillow. The pricking card — a card with holes punched in the pattern design — serves as the template, with pins placed at each hole to hold threads in formation as the lace is worked.

The lace mesh ground — the fine network of crossed threads — is the structural foundation of bobbin lace. It is both functional (holding the pattern together) and aesthetic (the delicate, translucent quality that makes lace distinctive). The mesh should feel geometrically precise, reflecting the mathematical regularity of the pricking card grid.

The dropped stitch — an intentionally missing thread crossing — is a feature of handmade lace that distinguishes it from machine-made perfection. It creates a visual breathing point in the mesh, drawing the eye with its controlled imperfection. Use it sparingly as an accent that signals authenticity.

The lace fan is a traditional display shape where threads radiate from a narrow base to a wide arc. It showcases the range and beauty of the thread network. In UI design, it serves as a hero display shape — threads spreading to fill space with delicate geometric grace.

The bobbin — a turned wooden weight with thread wound around its neck — is the lacemaker's primary tool. Its silhouette is recognizable and iconic: a tapered body with a narrow neck, always appearing in pairs since threads must cross and twist together.

The lace pillow is a firm, fabric-covered bolster where the lacemaking takes place. Its surface quality — slightly compressed, warm, purposeful — provides the tactile foundation for the entire design system.

This skill respects the centuries-old craft tradition of bobbin lace. Design with the patience and precision that the craft demands — every thread placed with intention, every crossing structural, every pin holding pattern in formation.
