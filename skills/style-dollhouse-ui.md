---
name: dollhouse-ui
description: Build dollhouse UI components (miniature house cross-section, tiny furniture arrangements, wallpaper patterns, miniature staircase, roof shingles, front door with knocker, tiny window curtains, scale furniture) with miniature scale framing, tiny detail accents, and the charming world-within-a-world of a dollhouse. Trigger this skill when the user asks for dollhouse design, miniature house UI, cross-section layout, tiny furniture, dollhouse rooms, miniature staircase, roof shingle texture, curtained windows, dollhouse front door, or scale model interfaces.
---

# Dollhouse UI

Use this skill to design and implement interfaces inspired by a dollhouse: a cross-section view revealing tiny rooms with miniature furniture, wallpaper pattern tiles, a tiny front door with a heart-shaped knocker, curtained windows, a miniature staircase, roof shingle texture, and the charming world-within-a-world of a house shrunk to hand-held scale. Every surface should feel like painted wood, wallpaper patterns, and tiny handmade details.

## Non-Negotiable Foundations

- The dollhouse is a miniature world viewed in cross-section: rooms are visible behind a removed wall, tiny furniture sits inside each room, and every surface is scaled down with meticulous detail. The frame itself is a house silhouette with a peaked roof.
- Materials are painted and papery: painted wood (cream walls, pink trim), patterned wallpaper (small repeating prints), hardwood floor (warm honey tones), fabric curtains (lace white), roof shingles (terracotta red), and tiny brass hardware (door knocker, window latches).
- Colors are dollhouse pink, terracotta roof red, cream walls, warm wood floor, dusty door blue, lace curtain white, and dark furniture brown. The mood is a Victorian playroom at golden hour -- soft, warm, and full of tiny wonder.
- Motion is minimal and delicate: a curtain might sway gently, a door might open on click to reveal a room, but the dollhouse is mostly still -- its charm is in the static detail, not in animation.
- Typography blends playful hand-lettered style (for room labels) with traditional serif (for furniture labels and architectural details).
- The aesthetic is miniature, precise, and handcrafted -- everything should look like it was scaled down by a dollhouse maker with an obsessive eye for tiny detail.

## Core Material Recipes

### 1) Dollhouse Cross-Section Frame (the foundational structure)

The signature dollhouse element: a house silhouette with peaked roof, showing rooms inside.

- Frame outline: `bg-[#f5f0e0] border-4 border-[#3a2a1a] relative overflow-hidden` shaped with a CSS clip-path for the peaked roof.
- Roof triangle: `clip-path: polygon(50% 0%, 0% 30%, 100% 30%)` on the top portion, filled with terracotta shingle pattern.
- Room dividers: thin horizontal and vertical lines `bg-[#b89860]` to separate floors and rooms.
- Base: `bg-[#b89860]` for the hardwood floor in each room.

```html
<div class="w-80 h-96 bg-[#f5f0e0] border-4 border-[#3a2a1a] relative overflow-hidden rounded-b-lg">
  <!-- Roof -->
  <div class="absolute top-0 left-0 right-0 h-28 bg-[#8a3a2a]" style="clip-path: polygon(50% 0%, 0% 100%, 100% 100%);">
    <!-- Shingle pattern overlay -->
    <div class="absolute inset-0 opacity-30" style="background-image: repeating-linear-gradient(0deg, transparent, transparent 6px, rgba(0,0,0,0.1) 6px, rgba(0,0,0,0.1) 7px), repeating-linear-gradient(90deg, transparent, transparent 12px, rgba(0,0,0,0.05) 12px, rgba(0,0,0,0.05) 13px);"></div>
  </div>
  <!-- Top floor -->
  <div class="absolute top-28 left-0 right-0 h-28 border-b-2 border-[#b89860] flex">
    <div class="w-1/2 border-r border-[#b89860] p-3 bg-[#f5f0e0]"><!-- Bedroom --></div>
    <div class="w-1/2 p-3 bg-[#f5f0e0]"><!-- Bathroom --></div>
  </div>
  <!-- Bottom floor -->
  <div class="absolute top-56 left-0 right-0 bottom-0 flex">
    <div class="w-1/2 border-r border-[#b89860] p-3 bg-[#f5f0e0]"><!-- Kitchen --></div>
    <div class="w-1/2 p-3 bg-[#f5f0e0]"><!-- Living Room --></div>
  </div>
</div>
```

### 2) Wallpaper Pattern Tile

Small repeating pattern for room walls -- the defining dollhouse interior detail.

- Base: `bg-[#f5f0e0]` (cream wall) with a subtle repeating floral or damask SVG pattern.
- Pattern: tiny 16x16 or 20x20 repeating unit using `background-image: url("data:image/svg+xml,...")`.

```html
<div class="absolute inset-0 bg-[#f5f0e0] overflow-hidden">
  <div class="absolute inset-0 opacity-20" style="background-image: url(&quot;data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='3' fill='%23f0b8c0'/%3E%3Ccircle cx='0' cy='0' r='2' fill='%23f0b8c0'/%3E%3Ccircle cx='20' cy='0' r='2' fill='%23f0b8c0'/%3E%3Ccircle cx='0' cy='20' r='2' fill='%23f0b8c0'/%3E%3Ccircle cx='20' cy='20' r='2' fill='%23f0b8c0'/%3E%3C/svg%3E&quot;); background-size: 20px 20px;"></div>
</div>
```

Variants:
- **Polka dot:** small circles in dollhouse pink on cream.
- **Floral:** tiny 5-petal flowers in pink and green.
- **Damask:** scrollwork pattern in muted rose.
- **Stripe:** thin vertical stripes in alternating cream and soft pink.

### 3) Miniature Staircase Accent

A tiny zigzag staircase connecting floors -- the architectural jewel of the dollhouse.

```html
<div class="w-16 h-20 relative">
  <svg viewBox="0 0 64 80" class="w-full h-full">
    <!-- Stair treads -->
    <rect x="8" y="64" width="48" height="4" rx="1" fill="#b89860" stroke="#8a6a3a" stroke-width="0.5"/>
    <rect x="8" y="52" width="48" height="4" rx="1" fill="#b89860" stroke="#8a6a3a" stroke-width="0.5"/>
    <rect x="8" y="40" width="48" height="4" rx="1" fill="#b89860" stroke="#8a6a3a" stroke-width="0.5"/>
    <rect x="8" y="28" width="48" height="4" rx="1" fill="#b89860" stroke="#8a6a3a" stroke-width="0.5"/>
    <rect x="8" y="16" width="48" height="4" rx="1" fill="#b89860" stroke="#8a6a3a" stroke-width="0.5"/>
    <rect x="8" y="4" width="48" height="4" rx="1" fill="#b89860" stroke="#8a6a3a" stroke-width="0.5"/>
    <!-- Banister -->
    <line x1="12" y1="4" x2="12" y2="68" stroke="#3a2a1a" stroke-width="1.5"/>
    <circle cx="12" cy="3" r="2" fill="#c4a043"/>
  </svg>
</div>
```

### 4) Miniature Table and Chair Set

Tiny furniture silhouettes for room furnishing -- the charm is in the miniature scale.

```html
<!-- Table -->
<svg viewBox="0 0 40 30" class="w-10 h-8">
  <rect x="4" y="8" width="32" height="3" rx="1" fill="#3a2a1a"/>
  <rect x="6" y="11" width="2" height="16" rx="0.5" fill="#3a2a1a"/>
  <rect x="32" y="11" width="2" height="16" rx="0.5" fill="#3a2a1a"/>
</svg>

<!-- Chair -->
<svg viewBox="0 0 24 32" class="w-6 h-8">
  <rect x="4" y="16" width="16" height="2" rx="0.5" fill="#3a2a1a"/>
  <rect x="5" y="18" width="2" height="12" rx="0.5" fill="#3a2a1a"/>
  <rect x="17" y="18" width="2" height="12" rx="0.5" fill="#3a2a1a"/>
  <rect x="4" y="4" width="16" height="13" rx="1" fill="#f0b8c0" stroke="#3a2a1a" stroke-width="0.5"/>
</svg>

<!-- Lamp -->
<svg viewBox="0 0 16 28" class="w-4 h-7">
  <polygon points="4,8 12,8 10,2 6,2" fill="#f0e8e0" stroke="#c4a043" stroke-width="0.5"/>
  <rect x="7" y="8" width="2" height="14" rx="0.5" fill="#c4a043"/>
  <ellipse cx="8" cy="24" rx="4" ry="2" fill="#3a2a1a"/>
</svg>
```

### 5) Roof Shingle Texture

Terracotta roof shingles in overlapping rows -- the dollhouse's crown.

- Base: `bg-[#8a3a2a]` with repeating overlapping rectangle pattern.
- Shingle pattern: `background-image` with alternating offset rows of small rectangles.

```html
<div class="w-full h-12 bg-[#8a3a2a] relative overflow-hidden">
  <div class="absolute inset-0 opacity-40" style="background-image: repeating-linear-gradient(0deg, transparent, transparent 8px, rgba(0,0,0,0.15) 8px, rgba(0,0,0,0.15) 9px), repeating-linear-gradient(90deg, transparent, transparent 16px, rgba(0,0,0,0.1) 16px, rgba(0,0,0,0.1) 17px); background-size: 16px 9px;"></div>
</div>
```

### 6) Tiny Curtained Window Frame

A miniature window with lace curtains and a tiny view -- essential dollhouse detail.

```html
<div class="w-14 h-16 relative">
  <!-- Window frame -->
  <div class="absolute inset-0 border-2 border-[#3a2a1a] bg-[#a0c8e8] rounded-t-sm overflow-hidden">
    <!-- Sky view -->
    <div class="absolute inset-0 bg-gradient-to-b from-[#a0c8e8] to-[#c8e0f0]"></div>
    <!-- Cross bars -->
    <div class="absolute top-0 left-1/2 w-[2px] h-full bg-[#3a2a1a] -translate-x-1/2"></div>
    <div class="absolute top-1/2 left-0 w-full h-[2px] bg-[#3a2a1a] -translate-y-1/2"></div>
  </div>
  <!-- Left curtain -->
  <div class="absolute top-0 left-0 w-4 h-full bg-gradient-to-r from-[#f0e8e0] to-[#f0e8e0]/0 rounded-br-full opacity-80"></div>
  <!-- Right curtain -->
  <div class="absolute top-0 right-0 w-4 h-full bg-gradient-to-l from-[#f0e8e0] to-[#f0e8e0]/0 rounded-bl-full opacity-80"></div>
  <!-- Curtain rod -->
  <div class="absolute -top-1 left-0 right-0 h-1 bg-[#c4a043] rounded-full"></div>
  <div class="absolute -top-2 left-1 w-2 h-2 rounded-full bg-[#c4a043]"></div>
  <div class="absolute -top-2 right-1 w-2 h-2 rounded-full bg-[#c4a043]"></div>
</div>
```

### 7) Front Door with Heart Knocker

The dollhouse's welcoming face: a tiny front door with a heart-shaped brass knocker.

```html
<div class="w-14 h-20 relative">
  <!-- Door frame -->
  <div class="absolute inset-0 bg-[#3a2a1a] rounded-t-sm"></div>
  <!-- Door -->
  <div class="absolute inset-[3px] bg-gradient-to-b from-[#4a6a8a] to-[#3a5a7a] rounded-t-sm border border-[#3a4a5a]">
    <!-- Door panels -->
    <div class="absolute top-2 left-2 right-2 h-6 border border-[#3a4a5a] rounded-sm"></div>
    <div class="absolute top-10 left-2 right-2 h-6 border border-[#3a4a5a] rounded-sm"></div>
    <!-- Knocker -->
    <div class="absolute top-1/2 right-2 -translate-y-1/2">
      <svg viewBox="0 0 14 16" class="w-3.5 h-4">
        <path d="M7,14 L2.5,9.5 C0,7 0,3.5 2.5,2 C5,0.5 7,3 7,5 C7,3 9,0.5 11.5,2 C14,3.5 14,7 11.5,9.5 Z" fill="#c4a043" stroke="#8a6a1a" stroke-width="0.5"/>
      </svg>
    </div>
    <!-- Doorknob -->
    <div class="absolute top-1/2 left-2 w-2 h-2 rounded-full bg-[#c4a043] border border-[#8a6a1a]"></div>
    <!-- Doorstep -->
    <div class="absolute -bottom-1 -left-1 -right-1 h-2 bg-[#8a6a3a] rounded-b-sm"></div>
  </div>
</div>
```

### 8) Miniature Bed

Tiny bed with pillow and blanket for the dollhouse bedroom.

```html
<svg viewBox="0 0 48 32" class="w-12 h-8">
  <!-- Bed frame -->
  <rect x="2" y="14" width="44" height="4" rx="1" fill="#3a2a1a"/>
  <!-- Headboard -->
  <rect x="2" y="4" width="4" height="14" rx="1" fill="#3a2a1a"/>
  <!-- Footboard -->
  <rect x="42" y="8" width="4" height="10" rx="1" fill="#3a2a1a"/>
  <!-- Legs -->
  <rect x="4" y="18" width="2" height="10" rx="0.5" fill="#3a2a1a"/>
  <rect x="42" y="18" width="2" height="10" rx="0.5" fill="#3a2a1a"/>
  <!-- Mattress -->
  <rect x="6" y="10" width="36" height="5" rx="1" fill="#f0e8e0"/>
  <!-- Pillow -->
  <rect x="6" y="8" width="8" height="5" rx="2" fill="#f5f0e0" stroke="#e0d8c0" stroke-width="0.5"/>
  <!-- Blanket -->
  <rect x="14" y="10" width="28" height="4" rx="1" fill="#f0b8c0"/>
</svg>
```

### 9) Dollhouse Button

Painted wood button with miniature charm.

- `bg-gradient-to-b from-[#f0b8c0] to-[#e0a0b0] text-[#3a2a1a] font-serif font-medium px-5 py-2.5 border-2 border-t-[#f0c8d0] border-b-[#c09098] rounded-lg shadow-[0_2px_0_#c09098,inset_0_1px_0_rgba(255,255,255,0.3)] hover:translate-y-0.5 hover:shadow-[0_0px_0_#c09098] active:shadow-none transition-all`.

## Color Palette System

### Core Dollhouse Palette

| Color | Hex | Material | Role |
|---|---|---|---|
| Dollhouse Pink | `#f0b8c0` | Painted trim | Primary accent, furniture upholstery |
| Dollhouse Dark Pink | `#e0a0b0` | Aged paint | Button hover, shadow tone |
| Roof Red | `#8a3a2a` | Terracotta shingles | Roof, exterior accents |
| Wall Cream | `#f5f0e0` | Painted plaster | Room walls, backgrounds |
| Wood Floor | `#b89860` | Honey hardwood | Floor surfaces, stair treads |
| Floor Dark | `#8a6a3a` | Aged wood | Floor edges, grain shadows |
| Door Blue | `#4a6a8a` | Painted wood | Front door, shutters |
| Door Dark | `#3a5a7a` | Aged paint | Door shadows |
| Curtain Lace | `#f0e8e0` | Lace fabric | Curtains, tablecloths |
| Furniture Dark | `#3a2a1a` | Dark stained wood | Tables, chairs, frames |
| Brass Knocker | `#c4a043` | Polished brass | Door knocker, hardware |
| Brass Dark | `#8a6a1a` | Aged brass | Hardware shadows |
| Frame Wood | `#3a2a1a` | Dark wood frame | House outline, room dividers |
| Sky Blue | `#a0c8e8` | Window view | Window sky behind glass |

Rules: Dollhouse pink and cream dominate, grounded by dark wood furniture and warm hardwood floors. The palette should feel like a Victorian dollhouse at golden hour -- soft pinks, warm creams, terracotta reds, and the cozy darkness of tiny wooden furniture. Brass hardware provides small metallic accents.

## Typography Recommendations

Dollhouse typography blends playful miniature labels with traditional architectural detail:

- **Room labels:** Fredoka One, Quicksand, or Patrick Hand (hand-lettered miniature feel).
- **Furniture labels:** Lora, Crimson Text, or EB Garamond (traditional serif for tiny plaques).
- **Display headings:** Playfair Display or Cormorant Garamond (Victorian dollhouse elegance).
- **Scale annotations:** `font-mono text-[8px] text-[#8a6a3a]` for tiny measurement markings.
- **Room nameplates:** `font-serif font-medium text-[10px] tracking-wider text-[#3a2a1a] uppercase` for brass nameplates on doors.
- Avoid heavy or aggressive typography. The dollhouse aesthetic demands delicate, handcrafted lettering.

## Component Architecture Pattern

1. House silhouette frame with peaked roof and room dividers (the cross-section).
2. Wallpaper pattern tiles covering each room wall (interior surface).
3. Hardwood floor gradient at the bottom of each room (grounding surface).
4. Miniature furniture arranged inside rooms (tiny tables, chairs, beds).
5. Curtained windows on exterior walls (view through to sky).
6. Front door with heart knocker at ground level (welcoming entry).
7. Miniature staircase connecting floors (architectural detail).
8. Roof shingle texture on the peaked top (crown detail).
9. Tiny brass hardware accents throughout (door knobs, curtain rods, knocker).

## Interaction Rules

- Default state: still and detailed, like a dollhouse sitting on a shelf. Minimal motion.
- Hover: room highlights gently (`hover:bg-[#f5f0e0]/80`), furniture pieces gain a subtle glow.
  - `hover:brightness-105 hover:shadow-[0_0_8px_rgba(240,184,192,0.3)] transition-all duration-300`.
- Click/tap on room: room zooms slightly or highlights to show detail (`scale-[1.02] transition-transform duration-300`).
- Door interaction: tiny door opens with a gentle swing (`hover:rotate-y-20 transition-transform duration-500`).
- Active: tiny press feel (`active:scale-[0.98]`).
- Focus: pink glow ring `focus:ring-2 focus:ring-[#f0b8c0]/60 focus:ring-offset-2 focus:ring-offset-[#f5f0e0]`.
- Transitions: `transition-all duration-300 ease-in-out` (gentle, delicate, unhurried).
- Curtain sway: optional subtle `@keyframes dollhouse-curtain` with 4s infinite ease-in-out oscillation of 2deg rotation.

```css
@keyframes dollhouse-curtain {
  0%, 100% { transform: skewX(0deg); }
  50% { transform: skewX(2deg); }
}
.dollhouse-curtain {
  animation: dollhouse-curtain 4s ease-in-out infinite;
  transform-origin: top center;
}
```

## Reusable Tailwind Tokens

- House frame: `bg-[#f5f0e0] border-4 border-[#3a2a1a] rounded-b-lg`
- Room wall: `bg-[#f5f0e0]` with wallpaper pattern overlay
- Hardwood floor: `bg-gradient-to-b from-[#b89860] to-[#8a6a3a]`
- Furniture dark: `fill-[#3a2a1a]` for tables, chairs, frames
- Upholstery pink: `fill-[#f0b8c0]` for cushions, chair backs, blankets
- Curtain lace: `bg-gradient-to-r from-[#f0e8e0] to-[#f0e8e0]/0 rounded-br-full`
- Door blue: `bg-gradient-to-b from-[#4a6a8a] to-[#3a5a7a]`
- Roof terracotta: `bg-[#8a3a2a]` with shingle pattern overlay
- Heart knocker: SVG path with `fill-[#c4a043] stroke-[#8a6a1a]`
- Window sky: `bg-gradient-to-b from-[#a0c8e8] to-[#c8e0f0]`
- Curtain rod: `bg-[#c4a043] rounded-full` with end caps
- Dollhouse button: `bg-gradient-to-b from-[#f0b8c0] to-[#e0a0b0] text-[#3a2a1a] font-serif border-2 border-t-[#f0c8d0] border-b-[#c09098] rounded-lg`
- Staircase tread: `bg-[#b89860] border-[#8a6a3a]`
- Wallpaper pattern: inline SVG data URI with `opacity-20` on cream background
- Curtain sway: `dollhouse-curtain` keyframe with `skewX(2deg)`
- Scale label: `font-mono text-[8px] text-[#8a6a3a]`

## Quality Checklist (must pass)

- At least one house silhouette frame with peaked roof (cross-section structure).
- At least two rooms visible with wallpaper pattern tiles.
- Hardwood floor gradient in each room.
- At least one piece of miniature furniture (table, chair, bed, or lamp).
- Front door with heart-shaped brass knocker.
- At least one curtained window with lace and brass rod.
- Roof shingle texture on the peaked roof.
- Miniature staircase connecting floors (if multi-story).
- Color palette is dollhouse pink + cream + terracotta red + wood + door blue.
- Typography uses hand-lettered or delicate serif (no aggressive fonts).
- Wallpaper patterns are small-scale and repeating (not oversized prints).
- Furniture silhouettes are recognizable at miniature scale.
- Brass hardware accents present (knocker, curtain rods, doorknob).
- The aesthetic reads as a dollhouse -- miniature, handcrafted, and charming.
- Scale proportions feel correct (furniture fits rooms, doors are proportional).

## Anti-Patterns

- Flat or untextured room walls (dollhouse walls need wallpaper patterns or painted detail).
- Missing roof shingle texture (the roof is a defining architectural element).
- Oversized furniture that breaks scale (everything must feel miniature).
- Bright, neon, or aggressive colors (the dollhouse palette is soft, warm, and pastel).
- Heavy or aggressive typography (the dollhouse aesthetic demands delicate lettering).
- Missing curtain detail on windows (lace curtains are essential dollhouse charm).
- Missing front door (the door with knocker is the dollhouse's welcoming face).
- Digital or modern UI elements (the dollhouse is handmade and Victorian).
- Missing room dividers (the cross-section must show distinct rooms).
- Pure white backgrounds (use cream `#f5f0e0` with warm undertones).
- Missing brass hardware accents (knocker, curtain rods, doorknobs ground the scale).
- Aggressive animations (the dollhouse is mostly still -- charm is in static detail).
- Missing hardwood floor (each room needs a grounding warm wood surface).
- Oversized wallpaper patterns (patterns must be small-scale to sell the miniature).

## Accessibility Considerations

- Wall cream (`#f5f0e0`) with dark furniture text (`#3a2a1a`) provides excellent contrast (WCAG AAA).
- Dollhouse pink (`#f0b8c0`) backgrounds require dark text (`#3a2a1a`) -- verify WCAG AA minimum.
- Curtain sway animations must respect `prefers-reduced-motion` (stop gentle oscillation).
- Room labels need `aria-label` describing the room name and contents.
- Furniture SVGs need `aria-hidden="true"` if decorative, or `aria-label` if interactive.
- Door interaction must be keyboard-accessible (`tabindex`, `role="button"`, Enter/Space to open).
- Window elements need `alt` text describing the view or room context.
- Focus states must be visible against cream/pink (`focus:ring-2 focus:ring-[#f0b8c0]/60`).
- Touch targets must be adequate despite miniature styling (minimum 44x44px, or ensure parent room area is tappable).
- Scale annotations should not interfere with screen reader flow when decorative.
- Cross-section rooms should use proper heading hierarchy for assistive navigation.
