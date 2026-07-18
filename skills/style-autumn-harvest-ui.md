---
name: autumn-harvest-ui
description: Build autumn harvest UI components (pumpkin patch, apple basket, corn husk, cider jug, bales of hay, orange leaf drift, scarecrow) with warm harvest colors, rustic farm textures, and the abundant gratitude of fall harvest season. Trigger this skill when the user asks for autumn harvest, pumpkin patch, fall harvest, cider house, apple picking, corn husk, hay bale, autumn farm, scarecrow, orange leaf drift, or Thanksgiving harvest interfaces.
---

# Autumn Harvest UI

Use this skill to design and implement warm, abundant interfaces inspired by the autumn harvest aesthetic: round pumpkins stacked in patch rows, apple baskets woven from orchard wood, corn husks peeled back to reveal golden kernels, brown glass cider jugs catching amber light, hay bales stacked in golden rectangles, orange leaves drifting across the viewport, and scarecrow silhouettes standing guard over the harvest bounty. Every surface carries the warmth of late October sun and the gratitude of a field cleared for winter.

## Non-Negotiable Foundations

The autumn harvest aesthetic lives or dies on these invariants. Every component must satisfy all of them.

1. **Warmth is the default.** Every surface radiates late-autumn warmth: amber gradients, orange-tinged shadows, golden highlights, and the ruddy glow of cider and firelight. Nothing reads as cool, blue, or sterile.

2. **Abundance is the layout language.** Content fills space generously. Cards are plump. Margins are comfortable. The harvest is plentiful -- never sparse, never minimal, never starving for content. Negative space exists but always feels like room left for more bounty.

3. **Rustic texture is non-negotiable.** Every surface carries a suggestion of farm material: woven basket weave, burlap grain, hay fiber, wooden barrel staves, rough-hewn paper. No surface is flat, smooth, or digitally clean.

4. **Earth is the canvas.** Backgrounds are warm dark browns and deep ambers, never cool grays or blues. The ground is rich farm soil, not concrete. The sky is harvest gold, not cloudless blue.

5. **Round shapes dominate.** Pumpkins are round. Apples are round. Cider jugs are round-bellied. Hay bales are soft rectangles with rounded edges. The harvest is generous and curved, never sharp or angular.

6. **Organic asymmetry rules.** A pumpkin patch is not a grid. Leaves drift at random angles. Hay bales are stacked unevenly. The scarecrow leans slightly. Natural imperfection signals authenticity.

## Core Material Recipes

### 1) Warm Farm Earth Background

Rich dark soil with amber warmth and harvest atmosphere.

- `bg-gradient-to-b from-[#3a2010] via-[#2a1808] to-[#1e1206]` (deep earth base, warm undertones).
- Amber atmosphere: `bg-[radial-gradient(ellipse_at_50%_20%,rgba(224,112,32,0.06)_0%,transparent_60%)]` (harvest sun warmth from above).
- Soil texture: `bg-[radial-gradient(rgba(120,80,40,0.08)_1px,transparent_1px)] bg-[size:8px_8px]` (fine soil particles).
- Warm cast: `bg-[linear-gradient(180deg,rgba(212,168,72,0.04)_0%,transparent_40%,transparent_100%)]` (golden light falling downward).

### 2) Pumpkin Shape SVG

A ribbed pumpkin with stem, ready for patch display.

```html
<svg viewBox="0 0 80 70" class="w-20 h-17">
  <!-- Main pumpkin body -->
  <ellipse cx="40" cy="42" rx="32" ry="24" fill="#e07020"/>
  <!-- Left rib section -->
  <path d="M40 42 Q20 30 12 42 Q18 58 40 60 Q22 55 12 42" fill="#d06018" opacity="0.6"/>
  <!-- Right rib section -->
  <path d="M40 42 Q60 30 68 42 Q62 58 40 60 Q58 55 68 42" fill="#d06018" opacity="0.6"/>
  <!-- Center rib highlight -->
  <ellipse cx="40" cy="40" rx="8" ry="20" fill="#e88030" opacity="0.4"/>
  <!-- Rib lines -->
  <path d="M40 20 Q38 42 40 62" fill="none" stroke="#c05010" stroke-width="1" opacity="0.4"/>
  <path d="M28 26 Q28 42 30 58" fill="none" stroke="#c05010" stroke-width="0.8" opacity="0.3"/>
  <path d="M52 26 Q52 42 50 58" fill="none" stroke="#c05010" stroke-width="0.8" opacity="0.3"/>
  <path d="M18 34 Q22 42 24 52" fill="none" stroke="#c05010" stroke-width="0.6" opacity="0.2"/>
  <path d="M62 34 Q58 42 56 52" fill="none" stroke="#c05010" stroke-width="0.6" opacity="0.2"/>
  <!-- Stem -->
  <path d="M38 20 Q37 14 40 10 Q43 14 42 20" fill="#5a4a2a" stroke="#4a3a1a" stroke-width="0.5"/>
  <!-- Stem curve detail -->
  <path d="M40 10 Q44 8 46 12" fill="none" stroke="#6a5a3a" stroke-width="1" stroke-linecap="round"/>
  <!-- Highlight -->
  <ellipse cx="35" cy="36" rx="6" ry="10" fill="white" opacity="0.06"/>
</svg>
```

### 3) Woven Basket Texture Card

Card surface with woven wicker or burlap texture.

- Basket base: `bg-[#8a6a3a]` (warm woven wood tone).
- Weave pattern: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_5px,rgba(60,40,10,0.12)_5px,rgba(60,40,10,0.12)_6px)] bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_5px,rgba(60,40,10,0.08)_5px,rgba(60,40,10,0.08)_6px)]` (cross-weave grid).
- Burlap variant: `bg-[#a08050] bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_3px,rgba(80,60,20,0.1)_3px,rgba(80,60,20,0.1)_4px)]` (burlap fiber).
- Content area: `bg-[#f5e8d0] p-6 rounded-lg` (pale parchment interior).
- Border: `border-2 border-[#6a4a2a]` (thick woven edge).
- Corner reinforcement: `rounded-lg` with `shadow-[inset_0_0_10px_rgba(80,50,10,0.1)]`.

### 4) Corn Husk Accent

Peeled-back husk shape revealing golden kernels underneath.

```html
<svg viewBox="0 0 50 80" class="w-10 h-16">
  <!-- Husk left peel -->
  <path d="M15 10 Q8 25 10 45 Q12 55 18 65" fill="none" stroke="#c4b888" stroke-width="3" stroke-linecap="round"/>
  <!-- Husk right peel -->
  <path d="M35 10 Q42 25 40 45 Q38 55 32 65" fill="none" stroke="#c4b888" stroke-width="3" stroke-linecap="round"/>
  <!-- Inner husk left -->
  <path d="M18 15 Q14 28 16 48 Q18 56 22 62" fill="none" stroke="#b4a878" stroke-width="2" stroke-linecap="round"/>
  <!-- Inner husk right -->
  <path d="M32 15 Q36 28 34 48 Q32 56 28 62" fill="none" stroke="#b4a878" stroke-width="2" stroke-linecap="round"/>
  <!-- Corn cob visible between husks -->
  <ellipse cx="25" cy="38" rx="8" ry="20" fill="#d4a848" opacity="0.6"/>
  <!-- Kernel rows -->
  <circle cx="22" cy="28" r="2" fill="#e0b850" opacity="0.5"/>
  <circle cx="28" cy="28" r="2" fill="#e0b850" opacity="0.5"/>
  <circle cx="22" cy="34" r="2" fill="#e0b850" opacity="0.5"/>
  <circle cx="28" cy="34" r="2" fill="#e0b850" opacity="0.5"/>
  <circle cx="25" cy="31" r="2" fill="#e0b850" opacity="0.4"/>
  <circle cx="25" cy="37" r="2" fill="#e0b850" opacity="0.4"/>
  <circle cx="22" cy="40" r="2" fill="#e0b850" opacity="0.5"/>
  <circle cx="28" cy="40" r="2" fill="#e0b850" opacity="0.5"/>
</svg>
```

### 5) Hay Bale Rectangle

Golden textured rectangle with visible fiber lines.

- Base: `bg-gradient-to-b from-[#d4a848] to-[#b89030]` (golden hay gradient).
- Fiber texture: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_2px,rgba(160,120,40,0.15)_2px,rgba(160,120,40,0.15)_3px)]` (horizontal straw fibers).
- Cross fibers: `bg-[repeating-linear-gradient(87deg,transparent_0px,transparent_4px,rgba(140,100,30,0.08)_4px,rgba(140,100,30,0.08)_5px)]` (slightly angled straw crossing).
- Binding twine: `before:content-[''] before:absolute before:top-[30%] before:left-0 before:right-0 before:h-0.5 before:bg-[#6a4a2a]` and `after:content-[''] after:absolute after:top-[70%] after:left-0 after:right-0 after:h-0.5 after:bg-[#6a4a2a]` (twine wrapping).
- Rounded edges: `rounded-md` (soft rectangular bale).
- Shadow: `shadow-[2px_3px_8px_rgba(0,0,0,0.3)]`.

### 6) Falling Leaf Animation

Orange and red leaves drifting across the viewport with gentle rotation.

```html
<div class="fixed inset-0 pointer-events-none overflow-hidden z-10" aria-hidden="true">
  <svg class="absolute w-6 h-6 opacity-60 animate-[leaf-drift_12s_linear_infinite]" style="left:10%; animation-delay:0s; top:-5%">
    <path d="M12 2 Q8 8 4 14 Q2 18 6 20 Q10 22 14 18 Q18 14 16 8 Q14 4 12 2Z" fill="#d06820"/>
    <path d="M12 2 L10 12" fill="none" stroke="#a03020" stroke-width="0.5" opacity="0.6"/>
  </svg>
  <svg class="absolute w-5 h-5 opacity-50 animate-[leaf-drift_15s_linear_infinite]" style="left:35%; animation-delay:3s; top:-5%">
    <path d="M10 1 Q7 6 3 12 Q1 16 5 18 Q9 19 12 15 Q15 12 13 6 Q11 3 10 1Z" fill="#a03020"/>
    <path d="M10 1 L8 10" fill="none" stroke="#801818" stroke-width="0.5" opacity="0.5"/>
  </svg>
  <svg class="absolute w-7 h-7 opacity-55 animate-[leaf-drift_10s_linear_infinite]" style="left:60%; animation-delay:6s; top:-5%">
    <path d="M14 2 Q10 9 5 16 Q3 20 8 22 Q12 23 16 19 Q20 15 18 9 Q16 5 14 2Z" fill="#e07020"/>
    <path d="M14 2 L12 14" fill="none" stroke="#c05010" stroke-width="0.5" opacity="0.5"/>
  </svg>
  <svg class="absolute w-5 h-5 opacity-45 animate-[leaf-drift_14s_linear_infinite]" style="left:80%; animation-delay:9s; top:-5%">
    <path d="M10 1 Q7 6 3 12 Q1 16 5 18 Q9 19 12 15 Q15 12 13 6 Q11 3 10 1Z" fill="#c41e1e"/>
    <path d="M10 1 L8 10" fill="none" stroke="#a01818" stroke-width="0.5" opacity="0.5"/>
  </svg>
</div>
```

Required keyframes:

```css
@keyframes leaf-drift {
  0% { transform: translateY(-5vh) translateX(0) rotate(0deg); opacity: 0; }
  10% { opacity: var(--tw-opacity, 0.5); }
  50% { transform: translateY(45vh) translateX(30px) rotate(180deg); }
  90% { opacity: var(--tw-opacity, 0.4); }
  100% { transform: translateY(105vh) translateX(-10px) rotate(360deg); opacity: 0; }
}
```

### 7) Cider Jug Silhouette

Brown glass jug with round belly and narrow neck.

```html
<svg viewBox="0 0 40 60" class="w-10 h-15 opacity-80">
  <!-- Jug body -->
  <ellipse cx="20" cy="38" rx="16" ry="16" fill="#6a4a2a"/>
  <!-- Jug neck -->
  <rect x="16" y="10" width="8" height="14" rx="2" fill="#6a4a2a"/>
  <!-- Jug rim -->
  <ellipse cx="20" cy="10" rx="5" ry="2" fill="#5a3a1a"/>
  <!-- Handle -->
  <path d="M34 22 Q42 28 40 36 Q38 44 34 42" fill="none" stroke="#6a4a2a" stroke-width="3" stroke-linecap="round"/>
  <!-- Glass reflection -->
  <ellipse cx="16" cy="35" rx="4" ry="8" fill="white" opacity="0.06"/>
  <!-- Liquid level suggestion -->
  <ellipse cx="20" cy="40" rx="12" ry="10" fill="#8a5a20" opacity="0.3"/>
  <!-- Label area -->
  <rect x="12" y="30" width="16" height="10" rx="1" fill="#e8dcc0" opacity="0.2"/>
</svg>
```

### 8) Apple Basket Display

Woven basket overflowing with red and green apples.

```html
<svg viewBox="0 0 120 80" class="w-full h-auto">
  <!-- Basket body -->
  <path d="M15 35 L25 75 L95 75 L105 35" fill="#8a6a3a" stroke="#6a4a2a" stroke-width="1.5"/>
  <!-- Basket weave horizontal -->
  <line x1="18" y1="45" x2="102" y2="45" stroke="#6a4a2a" stroke-width="0.8" opacity="0.5"/>
  <line x1="20" y1="55" x2="100" y2="55" stroke="#6a4a2a" stroke-width="0.8" opacity="0.5"/>
  <line x1="22" y1="65" x2="98" y2="65" stroke="#6a4a2a" stroke-width="0.8" opacity="0.5"/>
  <!-- Basket weave vertical -->
  <line x1="35" y1="35" x2="38" y2="75" stroke="#6a4a2a" stroke-width="0.6" opacity="0.3"/>
  <line x1="55" y1="35" x2="56" y2="75" stroke="#6a4a2a" stroke-width="0.6" opacity="0.3"/>
  <line x1="75" y1="35" x2="74" y2="75" stroke="#6a4a2a" stroke-width="0.6" opacity="0.3"/>
  <!-- Basket rim -->
  <path d="M12 35 L108 35" fill="none" stroke="#5a3a1a" stroke-width="3" stroke-linecap="round"/>
  <!-- Apple 1 (red) -->
  <circle cx="40" cy="30" r="10" fill="#c41e1e"/>
  <circle cx="38" cy="28" r="3" fill="white" opacity="0.08"/>
  <path d="M40 20 Q42 16 44 18" fill="none" stroke="#3a5a1a" stroke-width="1"/>
  <!-- Apple 2 (red) -->
  <circle cx="60" cy="28" r="9" fill="#d42020"/>
  <circle cx="58" cy="26" r="2.5" fill="white" opacity="0.08"/>
  <path d="M60 19 Q62 15 63 17" fill="none" stroke="#3a5a1a" stroke-width="1"/>
  <!-- Apple 3 (green) -->
  <circle cx="78" cy="32" r="8" fill="#4a8a3a"/>
  <circle cx="76" cy="30" r="2" fill="white" opacity="0.08"/>
  <path d="M78 24 Q80 20 81 22" fill="none" stroke="#2a5a1a" stroke-width="1"/>
  <!-- Apple 4 (red, partially hidden) -->
  <circle cx="50" cy="34" r="8" fill="#b81818" opacity="0.8"/>
  <circle cx="49" cy="32" r="2" fill="white" opacity="0.06"/>
  <!-- Apple 5 (green, peeking) -->
  <circle cx="88" cy="34" r="7" fill="#5a9a4a" opacity="0.7"/>
  <!-- Leaf accent -->
  <path d="M52 22 Q56 18 60 22" fill="#4a8a3a" opacity="0.5"/>
</svg>
```

### 9) Harvest Sun Header

Warm gradient header with golden harvest light.

- Base: `bg-gradient-to-r from-[#a03020] via-[#e07020] to-[#d4a848]` (autumn sunset gradient).
- Inner texture: `bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_8px,rgba(255,255,255,0.02)_8px,rgba(255,255,255,0.02)_9px)]` (subtle fabric weave).
- Bottom edge: `border-b-4 border-[#6a4a2a]` (rustic wooden trim).
- Title text: `text-[#f5e8d0] font-serif font-bold text-2xl` (pale parchment on warm gradient).
- Scarecrow silhouette at right edge: inline SVG scarecrow shape, `fill="#3a2010" opacity="0.3"`, positioned `absolute right-4 bottom-0`.

### 10) Pumpkin Button

Round pumpkin-shaped button with rib texture.

- Base: `bg-gradient-to-b from-[#e07020] to-[#c05010] text-[#f5e8d0] font-serif font-medium px-6 py-3 rounded-full border-2 border-[#a04010]`.
- Rib texture: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_6px,rgba(160,64,16,0.1)_6px,rgba(160,64,16,0.1)_7px)]`.
- Pressed shadow: `shadow-[0_3px_0_#8a4010] hover:shadow-[0_2px_0_#8a4010] active:shadow-none active:translate-y-0.5`.
- Hover glow: `hover:shadow-[0_3px_0_#8a4010,0_0_15px_rgba(224,112,32,0.2)]`.
- Stem detail: `before:content-[''] before:absolute before:-top-1 before:left-1/2 before:-translate-x-1/2 before:w-2 before:h-2 before:bg-[#5a4a2a] before:rounded-t-full`.

### 11) Scarecrow Silhouette Panel

Decorative scarecrow silhouette used as corner accent or background element.

```html
<svg viewBox="0 0 80 120" class="w-16 h-24 opacity-20">
  <!-- Hat -->
  <path d="M20 30 L60 30 L55 15 Q40 8 25 15 Z" fill="#3a2010"/>
  <rect x="15" y="28" width="50" height="5" rx="1" fill="#3a2010"/>
  <!-- Head -->
  <circle cx="40" cy="42" r="10" fill="#3a2010"/>
  <!-- Cross eyes -->
  <line x1="36" y1="39" x2="40" y2="43" stroke="#f5e8d0" stroke-width="1.5"/>
  <line x1="40" y1="39" x2="36" y2="43" stroke="#f5e8d0" stroke-width="1.5"/>
  <line x1="40" y1="39" x2="44" y2="43" stroke="#f5e8d0" stroke-width="1.5"/>
  <line x1="44" y1="39" x2="40" y2="43" stroke="#f5e8d0" stroke-width="1.5"/>
  <!-- Smile (stitched) -->
  <path d="M35 47 L37 48 L39 47 L41 48 L43 47 L45 48" fill="none" stroke="#f5e8d0" stroke-width="1"/>
  <!-- Body crossbeam -->
  <line x1="10" y1="60" x2="70" y2="60" stroke="#3a2010" stroke-width="3"/>
  <!-- Shirt (draped fabric) -->
  <path d="M25 58 L15 85 L40 80 L65 85 L55 58" fill="#3a2010" opacity="0.8"/>
  <!-- Pole -->
  <rect x="38" y="55" width="4" height="60" fill="#5a4a2a"/>
  <!-- Straw tufts -->
  <line x1="10" y1="60" x2="5" y2="65" stroke="#d4a848" stroke-width="1.5" opacity="0.4"/>
  <line x1="10" y1="60" x2="8" y2="67" stroke="#d4a848" stroke-width="1.5" opacity="0.4"/>
  <line x1="70" y1="60" x2="75" y2="65" stroke="#d4a848" stroke-width="1.5" opacity="0.4"/>
  <line x1="70" y1="60" x2="72" y2="67" stroke="#d4a848" stroke-width="1.5" opacity="0.4"/>
</svg>
```

### 12) Harvest Table Card

A card styled as a rustic wooden harvest table with warm surface.

- Wood base: `bg-[#7a5a30]` (warm wooden plank).
- Wood grain: `bg-[repeating-linear-gradient(2deg,transparent_0px,transparent_12px,rgba(100,70,30,0.1)_12px,rgba(100,70,30,0.1)_13px)]` (horizontal grain lines).
- Knot detail: `bg-[radial-gradient(circle_at_75%_40%,rgba(80,50,20,0.15)_0%,transparent_8%)]` (wood knot).
- Content area: `bg-[#f5e8d0] m-3 p-5 rounded shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)]` (parchment paper on table).
- Table edge: `border-2 border-[#5a3a18]` (dark wood trim).
- Plank lines: `bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_98px,rgba(60,40,10,0.12)_98px,rgba(60,40,10,0.12)_100px)]` (plank seams).

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Farm Earth Dark | `#1e1206` | Deepest background |
| Farm Earth Mid | `#2a1808` | Surface backgrounds |
| Farm Earth Warm | `#3a2010` | Panel backgrounds |
| Pumpkin Orange | `#e07020` | Primary accent, buttons, highlights |
| Pumpkin Dark | `#c05010` | Pumpkin shadows, pressed states |
| Apple Red | `#c41e1e` | Secondary accent, alerts, apples |
| Apple Green | `#4a8a3a` | Tertiary accent, apples, vegetation |
| Hay Golden | `#d4a848` | Warm highlights, hay bales, accents |
| Corn Husk | `#c4b888` | Neutral warm, husks, parchment |
| Cider Brown | `#6a4a2a` | Wood, barrels, jugs, borders |
| Autumn Leaf Red | `#a03020` | Deep warm accent, headers |
| Autumn Leaf Orange | `#d06820` | Leaf accents, warm mid-tone |
| Parchment Pale | `#f5e8d0` | Primary text, light surfaces |
| Bark Dark | `#3a2010` | Scarecrow, dark decoration |

Rules: Warm tones dominate 90%+ of any surface. Orange and golden are the signature colors. Brown provides structure (borders, wood, baskets). Red appears as an accent for emphasis. Green is sparse, representing the last living vegetation before winter. The palette radiates warmth, abundance, and autumn sun.

## Typography Recommendations

- **Display:** Playfair Display, Libre Baskerville, or Lora (warm elegant serif with harvest gravitas).
- **Body:** Crimson Text, Source Serif Pro, or Merriweather (readable warm serif for abundant content).
- **Labels:** `font-serif font-semibold text-xs uppercase tracking-wider text-[#6a4a2a]` (rustic small caps).
- **Accent text:** `text-[#e07020] font-serif italic` (pumpkin-orange emphasis).
- **Numbers/statistics:** `font-serif font-bold text-[#d4a848]` (golden harvest numbers).
- Typography should feel like hand-lettered harvest signs, barn wood engravings, and autumn festival posters -- warm, generous, and slightly rustic.

## Component Architecture Pattern

### Layout Shell

```
<autumn-harvest-shell>
  <harvest-sun-header />     <!-- Top: warm gradient with scarecrow silhouette -->
  <leaf-drift-overlay />     <!-- Overlay: falling leaves animation -->
  <rustic-nav />             <!-- Navigation: wooden plank bar -->
  <main-content>             <!-- Center: farm earth background -->
    <pumpkin-patch-grid />    <!-- Grid: pumpkin cards -->
    <corn-husk-divider />     <!-- Section break: corn husk accent -->
    <apple-basket-showcase /> <!-- Feature: apple basket display -->
    <hay-bale-stats />        <!-- Statistics: hay bale rectangles -->
    <cider-jug-footer />      <!-- Footer: cider jug decoration -->
  </main-content>
</autumn-harvest-shell>
```

### Card Hierarchy

1. **Harvest Table Card** -- wooden surface with parchment content area.
2. **Woven Basket Card** -- cross-weave texture, overflow content.
3. **Hay Bale Card** -- golden fiber texture, compact display.
4. **Pumpkin Badge** -- small round accent with rib texture.

### Elevation Stack (bottom to top)

1. Farm earth void (`#1e1206`).
2. Farm earth surface (`#2a1808`).
3. Wooden table (`#7a5a30` with grain).
4. Parchment content (`#f5e8d0`).
5. Pumpkin orange accent (`#e07020`).
6. Hay golden highlight (`#d4a848`).

## Interaction Rules

### Hover

- Cards lift with warm shadow: `hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(224,112,32,0.15)] transition-all duration-300`.
- Pumpkins gently rock: `hover:rotate-3 hover:scale-105 transition-transform duration-300`.
- Apple basket sways: `hover:rotate-1 transition-transform duration-200`.
- Leaf animation speed increases near hovered sections (more autumn activity).

### Focus

- `focus:outline-none focus:ring-2 focus:ring-[#e07020]/40 focus:ring-offset-2 focus:ring-offset-[#2a1808]` (pumpkin-orange ring on dark earth offset).

### Active/Pressed

- Buttons sink into the table: `active:translate-y-0.5 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]`.
- Pumpkin button flattens: `active:scale-95`.
- Harvest table cards press flat: `active:translate-y-0 active:shadow-none`.

### Scroll

- Parallax header: harvest sun gradient shifts slowly as user scrolls, creating depth.
- Leaf drift continues at constant speed regardless of scroll.
- Hay bale cards fade in from below as they enter viewport: `opacity-0 translate-y-4` to `opacity-100 translate-y-0` on intersection.
- Pumpkin patch grid items stagger their entrance by 100ms each.

### Transitions

- All transitions use `duration-300 ease-out` for comfortable, unhurried feel.
- Pumpkin rocking uses `duration-200 ease-in-out` for natural motion.
- Leaf drift uses linear timing for continuous natural falling.
- Harvest glow effects use `duration-500` for warm, gradual appearance.

## Reusable Tailwind Tokens

- Farm earth: `bg-[#2a1808] border border-[#3a2010]`.
- Deep harvest void: `bg-[#1e1206]`.
- Wooden plank: `bg-[#7a5a30] bg-[repeating-linear-gradient(2deg,transparent_0px,transparent_12px,rgba(100,70,30,0.1)_12px,rgba(100,70,30,0.1)_13px)]`.
- Woven basket: `bg-[#8a6a3a] bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_5px,rgba(60,40,10,0.12)_5px,rgba(60,40,10,0.12)_6px)] bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_5px,rgba(60,40,10,0.08)_5px,rgba(60,40,10,0.08)_6px)]`.
- Parchment content: `bg-[#f5e8d0] text-[#3a2010]`.
- Pumpkin button: `bg-gradient-to-b from-[#e07020] to-[#c05010] text-[#f5e8d0] rounded-full border-2 border-[#a04010]`.
- Hay bale: `bg-gradient-to-b from-[#d4a848] to-[#b89030] rounded-md`.
- Corn husk accent: SVG `stroke="#c4b888"`.
- Cider jug: SVG `fill="#6a4a2a"`.
- Falling leaf: SVG `fill="#d06820"` or `fill="#a03020"`.
- Scarecrow silhouette: SVG `fill="#3a2010" opacity-0.2`.
- Warm shadow: `shadow-[0_4px_16px_rgba(224,112,32,0.1)]`.
- Golden highlight text: `text-[#d4a848] font-serif font-bold`.
- Rustic divider: `h-1 bg-gradient-to-r from-transparent via-[#6a4a2a] to-transparent`.

## Quality Checklist

- Background is warm dark earth (brown, not gray or black).
- Warm color temperature throughout (orange, gold, amber dominant).
- At least one pumpkin or harvest vegetable motif present.
- At least one woven or burlap texture visible.
- Rustic wood grain on at least one surface or border.
- Falling leaf animation present in at least one atmospheric region.
- At least one scarecrow, corn, or apple basket accent.
- Typography is serif-based and warm-toned.
- Content feels abundant and generously spaced.
- Buttons and interactive elements have organic round shapes.
- The aesthetic reads as autumn harvest / farm / Thanksgiving.
- Everything feels warm, abundant, rustic, and grateful.
- No cool blue, gray, or sterile colors anywhere.
- No sharp angular shapes without organic softening.
- Harvest colors are warm and earthy, not neon or electric.

## Anti-Patterns

- Cool blue or gray backgrounds (autumn harvest is warm earth, not digital).
- Neon or electric orange (harvest orange is `#e07020`, earthy and warm).
- Minimal sparse layouts (harvest is abundant and generous).
- Sharp angular geometric shapes (everything is round, soft, organic).
- Sans-serif typography (autumn harvest needs warm serif).
- Missing pumpkin, apple, or harvest motifs (these are essential).
- Missing rustic textures (wood grain, burlap, hay fiber).
- Clean smooth polished surfaces (harvest is rustic and rough-hewn).
- Cool mint or teal accents (autumn uses warm orange and golden).
- Perfect grid layouts without organic variation.
- Fast spring animations (harvest is comfortable and unhurried).
- Missing leaf or seasonal atmosphere.
- Dark gothic aesthetic (harvest is warm and welcoming, not spooky).
- Light airy pastel palette (harvest is rich, deep, and saturated).
- Wood textures without visible grain (harvest wood is rough, not lacquered).
- Missing warmth in shadows (shadows should be warm brown, not cool gray).

## Accessibility Considerations

- Dark earth backgrounds with parchment text (`#f5e8d0` on `#2a1808`) provide strong contrast. Verify WCAG AA minimum 4.5:1 for body text, 3:1 for large text.
- Pumpkin orange accent `#e07020` on dark earth `#2a1808` must be checked for sufficient contrast. Reserve for decorative accents; use parchment for essential text.
- Focus rings use pumpkin orange: `focus:ring-[#e07020]/40` -- warm and visible against dark earth backgrounds.
- All decorative SVGs (pumpkins, apples, corn, cider jugs, scarecrows, falling leaves) must have `aria-hidden="true"`.
- Falling leaf animations must respect `prefers-reduced-motion: reduce` -- disable drift animation, show static leaves or remove them.
- Woven basket and burlap textures must not interfere with text readability -- keep texture opacity low in content areas.
- Touch targets remain at minimum 44x44px despite organic rounded styling.
- The warm dark aesthetic reduces eye strain for extended viewing.
- Color is never the sole indicator of state -- pair warm color changes with text labels or icon changes for hover/active/focus states.
- Harvest glow effects pause on `prefers-reduced-motion: reduce`.
- High contrast mode: ensure all decorative gradients collapse to solid dark backgrounds with visible borders and sufficient text contrast.
- Parchment content areas (`#f5e8d0`) on dark earth provide comfortable reading zones for long-form content.
