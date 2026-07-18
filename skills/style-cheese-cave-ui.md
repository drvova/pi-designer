---
name: cheese-cave-ui
description: Build cheese cave UI components (stone aging rooms, wooden shelves, cheese wheels with rind, moisture droplets, cave mold, tasting board) with cool stone surfaces, wooden shelf textures, and the artisanal patience of aged cheese. Trigger this skill when the user asks for cheese cave design, stone aging room UI, cave cellar interfaces, artisanal cheese aesthetics, wooden shelf components, dairy aging environments, cheese wheel displays, or underground fromagerie interfaces.
---

# Cheese Cave UI

Use this skill to design and implement cool, subterranean interfaces with rough-hewn stone cave walls, horizontal wooden shelf rows holding cheese wheels, scattered moisture droplets, subtle cave mold accents, and the quiet, patient artistry of aged cheese. This is not a bright creamery or a modern cheese shop — it is the cave itself: stone, wood, rind, mold, and the slow biological transformation of milk into flavor. The aesthetic communicates HUMIDITY, PATIENCE, and the CRAFT of long aging.

## Non-Negotiable Foundations

- Stone cave wall is MANDATORY: every major panel or section must evoke rough, cool-gray cave stone via layered gradients, textured surfaces, or repeating block patterns — this is the geological identity of the cheese cave.
- Wooden shelf rows are structural motifs: horizontal plank surfaces holding cheese wheels appear as primary layout elements, section dividers, or background rhythms. Shelves are aged, stained by humidity, and slightly uneven.
- Cheese wheel silhouettes are the primary accent shapes: round, organic forms with rind texture and visible aging color — they are not perfectly circular but carry the slight irregularity of hand-formed curd.
- Moisture droplets are atmospheric: small, scattered, translucent blue-white dots appear across stone surfaces to communicate the high humidity of the aging environment.
- Cave mold accents are authenticity markers: subtle green-gray patches on stone and occasionally on cheese rind — not decay, but the beneficial microbial life of a living cave.
- The aesthetic communicates the ARTISANAL PATIENCE of months or years of careful aging. This is a place where humidity, temperature, and time are the most important tools.
- Colors are underground and organic: cave stone grays, warm cheese yellows, rind orange-browns, mold green-grays, wood browns, and the deep dark of unlit passages.
- Typography is rustic serif or slab serif: the kind of lettering you would see on a wooden tasting board or a handwritten aging log — craftful, warm, unhurried.

## Core Material Recipes

### 1) Stone Cave Wall Surface

Rough-hewn underground stone — the foundational texture of the cave.

- Stone block base: `bg-[#6a6a5a]` with layered gradients for depth.
- Stone block pattern: `bg-[linear-gradient(180deg,#6a6a5a_0%,#5e5e4e_30%,#6a6a5a_50%,#5e5e4e_80%,#6a6a5a_100%)]`.
- Mortar joint horizontal lines: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_38px,rgba(0,0,0,0.12)_38px,rgba(0,0,0,0.12)_40px)]`.
- Mortar joint vertical offset lines: `bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_58px,rgba(0,0,0,0.08)_58px,rgba(0,0,0,0.08)_59px)]` with `background-position:20px 0` for brick-bond offset.
- Rough grain noise: `bg-[url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")]`.
- Cool ambient wash: `bg-[radial-gradient(ellipse_at_50%_0%,rgba(180,200,210,0.06)_0%,transparent_60%)]` layered on top — cave light is cool and diffused, never warm.
- Deep shadow at cave floor: `shadow-[inset_0_-40px_60px_rgba(0,0,0,0.5)]`.
- Humid dampening: `bg-[linear-gradient(180deg,transparent_0%,rgba(90,100,90,0.08)_100%)]` — the lower half of any cave wall is darker and damper.

### 2) Wooden Shelf Row

Horizontal rows of aged wooden planks holding cheese — the functional architecture of the cave.

```html
<div class="w-full bg-[#8a6a3a] bg-[repeating-linear-gradient(0deg,#8a6a3a_0px,#7d5f34_1px,#8a6a3a_2px)] shadow-[0_4px_12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-1px_0_rgba(0,0,0,0.3)] rounded-sm">
  <div class="h-1 bg-gradient-to-b from-[#6a4a2a]/60 to-transparent"></div>
</div>
```

- Wood grain texture: `bg-[#8a6a3a]` with `bg-[repeating-linear-gradient(0deg,#8a6a3a_0px,#7d5f34_1px,#8a6a3a_2px)]` for fine horizontal grain.
- Humidity stain ring: `bg-[radial-gradient(ellipse_at_40%_50%,rgba(90,80,50,0.2)_0%,transparent_50%)]` — a damp ring where a cheese wheel has been sitting for months.
- Edge shadow (shelf lip): `shadow-[0_4px_12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-1px_0_rgba(0,0,0,0.3)]` — dark underneath, slightly lit on top edge.
- Front face grain detail: `bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_80px,rgba(0,0,0,0.04)_80px,rgba(0,0,0,0.04)_81px)` for vertical board separation marks.
- Mold speckle: occasional `bg-[radial-gradient(circle,rgba(122,138,106,0.3)_0%,transparent_3px)]` positioned at shelf joints.

### 3) Cheese Wheel Silhouette

Round cheese with visible rind — the primary accent element.

```html
<div class="w-24 h-24 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-gradient-to-b from-[#d4b848] via-[#c8a838] to-[#a08040] shadow-[0_6px_20px_rgba(0,0,0,0.4),inset_0_-4px_8px_rgba(0,0,0,0.2),inset_0_4px_8px_rgba(255,240,200,0.15)] border border-[#a08040]/60">
</div>
```

- Wheel body: `rounded-[50%_50%_50%_50%/60%_60%_40%_40%]` — slightly taller than wide, not a perfect circle, organic.
- Rind base color: `bg-gradient-to-b from-[#d4b848] via-[#c8a838] to-[#a08040]` — aged yellow to deeper rind brown.
- Rind texture overlay: `bg-[repeating-conic-gradient(rgba(160,128,64,0.1)_0deg_2deg,transparent_2deg_8deg)]` at low opacity for natural rind roughness.
- Rind mold patch: `bg-[radial-gradient(ellipse_at_60%_40%,rgba(122,138,106,0.4)_0%,transparent_30%)]` — a beneficial white/green mold patch on the rind.
- Aging label tag: small rectangular tag tied to wheel — `bg-[#f0e8d0] border border-[#a08040]/40 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 text-[#4a3a2a] rotate-[-3deg]`.
- Side profile variant: `h-10 w-24 rounded-[40%_40%_40%_40%/50%_50%_50%_50%]` — the horizontal cylinder shape of a wheel on its side.
- Wedge cut: `clip-path:polygon(50% 50%,0% 0%,100% 0%,100% 100%,0% 100%)` to show a triangular wedge removed from the wheel.

### 4) Moisture Droplet Overlay

Scattered translucent droplets communicating cave humidity.

- Single droplet: `w-1.5 h-1.5 rounded-full bg-[rgba(180,200,220,0.35)] shadow-[0_0_3px_rgba(180,200,220,0.2)]` — small, cool-toned, slightly reflective.
- Droplet cluster: use `absolute` positioned small circles at varied offsets:
```html
<div class="absolute inset-0 pointer-events-none" aria-hidden="true">
  <div class="absolute top-[15%] left-[20%] w-1.5 h-1.5 rounded-full bg-[rgba(180,200,220,0.3)]"></div>
  <div class="absolute top-[45%] left-[65%] w-1 h-1 rounded-full bg-[rgba(180,200,220,0.25)]"></div>
  <div class="absolute top-[70%] left-[35%] w-2 h-2 rounded-full bg-[rgba(180,200,220,0.2)]"></div>
  <div class="absolute top-[25%] left-[80%] w-1 h-1.5 rounded-full bg-[rgba(180,200,220,0.3)]"></div>
</div>
```
- Streaking droplet (running down stone): `w-[1px] h-6 bg-gradient-to-b from-[rgba(180,200,220,0.3)] to-transparent rounded-full`.
- Droplet highlight: tiny white dot in upper-left of each droplet — `w-[1px] h-[1px] bg-white/40 rounded-full absolute top-[2px] left-[2px]`.
- Condensation fog layer: `bg-[linear-gradient(180deg,rgba(180,200,210,0.04)_0%,rgba(180,200,210,0.08)_50%,rgba(180,200,210,0.04)_100%)]` covering a full panel.

### 5) Cave Mold Accent

Beneficial microbial growth — the living element of the cave.

- Mold patch: `bg-[radial-gradient(ellipse_at_50%_50%,rgba(122,138,106,0.35)_0%,rgba(122,138,106,0.15)_40%,transparent_70%)]` — diffuse, organic, never geometric.
- Mold edge diffusion: `filter:blur(2px)` on mold elements for natural, soft-edged growth.
- Mold on stone: position at wall joints or damp areas — `absolute` positioned patches near mortar lines.
- Mold on cheese rind: `bg-[radial-gradient(circle,rgba(220,230,210,0.5)_0%,rgba(180,200,170,0.3)_30%,transparent_60%)]` — the white-to-green bloom on aged cheese.
- Sparse distribution: never more than 2-3 patches per visible surface area. Mold is subtle, not dominant.
- Texture variation: mix of tight clusters (`w-4 h-3`) and diffuse areas (`w-10 h-8`) for organic irregularity.

### 6) Tasting Board (Wooden Paddle)

Rustic wooden board with cheese wedges — the human-facing display element.

```html
<div class="relative bg-[#8a6a3a] bg-[repeating-linear-gradient(3deg,#8a6a3a_0px,#7d5f34_2px,#8a6a3a_4px)] rounded-[12px_12px_40px_40px] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)]">
  <div class="absolute top-2 right-4 w-2 h-8 bg-[#6a4a2a] rounded-full opacity-40"></div>
</div>
```

- Board shape: `rounded-[12px_12px_40px_40px]` — the classic paddle/board shape with a rounded handle end.
- Handle hole: `w-3 h-3 rounded-full border-2 border-[#6a4a2a]/50 absolute top-3 left-1/2 -translate-x-1/2` for the hanging hole.
- Board wood grain: diagonal grain for differentiation from shelf planks — `bg-[repeating-linear-gradient(3deg,#8a6a3a,#7d5f34_2px,#8a6a3a_4px)]`.
- Cheese wedges on board: triangle shapes via `clip-path:polygon(50% 0%,100% 100%,0% 100%)` with cheese colors `bg-[#f0e8d0]` for soft interior and `bg-[#d4b848]` for rind edge.
- Knife mark: faint score line on board — `bg-[repeating-linear-gradient(150deg,transparent_0px,transparent_30px,rgba(0,0,0,0.04)_30px,rgba(0,0,0,0.04)_31px)]`.
- Board edge wear: `shadow-[inset_0_2px_6px_rgba(0,0,0,0.25),0_1px_0_rgba(255,255,255,0.04)]`.

### 7) Aging Label Tag

Identification tag tied to cheese wheels or shelves — the informational element.

- Tag body: `bg-[#f0e8d0] border border-[#a08040]/40 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.12em] text-[#4a3a2a]`.
- Tag string: `w-[1px] h-4 bg-[#6a4a2a]/60 absolute -top-4 left-1/2` — a thin line suggesting twine.
- Tag fold: `bg-[#e8dcc0] shadow-[inset_0_-1px_2px_rgba(0,0,0,0.1)]` for the slightly darker folded edge.
- Aged appearance: `opacity-90` and slight rotation `rotate-[-2deg]` or `rotate-[1deg]` for handmade quality.
- Content: aging duration, cheese type, or date — `font-mono` with values like `90 DAYS`, `Cave A`, `2024.03`.

## Color Palette System

### Core Cheese Cave Palette

| Color | Hex | Role |
|---|---|---|
| Cave Stone | `#6a6a5a` | Primary surface — cave walls, stone blocks |
| Stone Dark | `#5e5e4e` | Mortar joints, stone depth, shadows |
| Stone Damp | `#5a6a5a` | Humid stone with green-gray tint |
| Cheese Yellow | `#d4b848` | Primary accent — cheese rind, wheel body |
| Cheese White | `#f0e8d0` | Interior paste, tasting board tag, soft highlights |
| Rind Brown | `#a08040` | Deep rind color, aging indicator, wood accents |
| Mold Green-Gray | `#7a8a6a` | Cave mold patches, beneficial microbial growth |
| Wood Shelf | `#8a6a3a` | Shelf planks, tasting board, structural wood |
| Wood Dark | `#6a4a2a` | Shelf shadow, wood grain depth, twine/string |
| Moisture Blue | `rgba(180,200,220,0.3)` | Translucent droplets, condensation, humidity |
| Tag Parchment | `#f0e8d0` | Aging labels, tags, text backgrounds |
| Cave Dark | `#1a1a1a` | Deepest shadow, unlit passages, recesses |
| Stone Joint | `rgba(0,0,0,0.12)` | Mortar lines between stone blocks |
| Rind Orange | `#c8a838` | Mid-tone rind between yellow and brown |

Rules: Stone is the dominant architectural material — cool gray, never warm gray. Wood is the functional material — shelves and boards are the only warm brown elements. Cheese yellow is the primary accent — it appears on wheels, wedges, and highlights. Mold green-gray is sparse and subtle — it signals authenticity, not neglect. Moisture is atmospheric — droplets are translucent and scattered, never pooled. The palette is stone + cheese yellow + wood brown + mold green-gray — cool underground, organic, humid. Never warm stone, never bright lighting, never dry surfaces.

## Typography Recommendations

- **Display:** Libre Baskerville, Bitter, or Arvo (slab serif or sturdy serif with rustic character — the cheese label standard).
- **Body:** Source Serif Pro, Noto Serif, or Lora (readable serif with warm undertones for cave-lit rendering).
- **Label/Instrument:** `font-mono font-medium uppercase tracking-[0.12em] text-[10px]` for aging dates, cave assignments, and cheese identification codes.
- Cave-aged text treatment: `text-[#f0e8d0] drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]` for text on dark stone — aged parchment quality.
- Rind label treatment: `text-[#a08040] font-serif italic` for cheese names and aging notes.
- Wooden sign treatment: `text-[#f0e8d0] font-slab` for shelf labels — carved or burned into wood quality.
- Tracking is moderate — cave typography is hand-labeled and measured, never machine-perfect.

## Interaction Rules

- Default: still, quiet, patient — the cave does not hurry. Cheese ages in months.
- Hover: moisture glistens slightly, stone surface dewdrops brighten.
  - `hover:shadow-[0_0_12px_rgba(180,200,220,0.12)] hover:brightness-105 transition-all duration-600`.
- Active: `active:scale-[0.98] active:brightness-90` (the deliberate press of cutting a cheese wedge).
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#d4b848]/25 focus:ring-offset-2 focus:ring-offset-[#5e5e4e]` (cheese-yellow ring on stone).
- Transitions: `transition-all duration-600` (slower than wine cellar — cheese caves move even more slowly, aging is measured in seasons).
- Scroll behavior: `scroll-behavior: smooth` — the cave has no jarring movements.
- Moisture shimmer: optional subtle dew animation on hover — `animate-[moisture_4s_ease-in-out_infinite]` with custom keyframes shifting opacity and highlight position.

## Reusable Tailwind Tokens

- Cave stone wall: `bg-[#6a6a5a] bg-[linear-gradient(180deg,#6a6a5a,#5e5e4e,#6a6a5a)]` with mortar-line gradients and cool ambient wash.
- Wooden shelf: `bg-[#8a6a3a] bg-[repeating-linear-gradient(0deg,#8a6a3a,#7d5f34_1px,#8a6a3a_2px)] shadow-[0_4px_12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)]`.
- Cheese wheel: `rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-gradient-to-b from-[#d4b848] via-[#c8a838] to-[#a08040] shadow-[0_6px_20px_rgba(0,0,0,0.4),inset_0_-4px_8px_rgba(0,0,0,0.2)]`.
- Moisture droplet: `w-1.5 h-1.5 rounded-full bg-[rgba(180,200,220,0.35)] shadow-[0_0_3px_rgba(180,200,220,0.2)]`.
- Condensation streak: `w-[1px] h-6 bg-gradient-to-b from-[rgba(180,200,220,0.3)] to-transparent rounded-full`.
- Mold patch: `bg-[radial-gradient(ellipse_at_50%_50%,rgba(122,138,106,0.35)_0%,rgba(122,138,106,0.15)_40%,transparent_70%)] filter:blur(2px)`.
- Tasting board: `bg-[#8a6a3a] bg-[repeating-linear-gradient(3deg,#8a6a3a,#7d5f34_2px,#8a6a3a_4px)] rounded-[12px_12px_40px_40px] shadow-[0_8px_24px_rgba(0,0,0,0.4)]`.
- Aging label: `bg-[#f0e8d0] border border-[#a08040]/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#4a3a2a]`.
- Cave dark panel: `bg-[#1a1a1a] border border-[#5e5e4e]/40 shadow-[0_4px_20px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(180,200,220,0.03)]`.
- Damp stone surface: `bg-[#5a6a5a] bg-[linear-gradient(180deg,#5a6a5a,#4e5e4e,#5a6a5a)]` with humidity stain overlay.
- Cheese wedge: `clip-path:polygon(50% 0%,100% 100%,0% 100%) bg-[#f0e8d0] border-rind border-[#d4b848]`.
- Humidity fog layer: `bg-[linear-gradient(180deg,rgba(180,200,210,0.04)_0%,rgba(180,200,210,0.08)_50%,rgba(180,200,210,0.04)_100%)]`.

## Quality Checklist

- Stone cave wall or rough-hewn stone texture on at least one major panel.
- Wooden shelf row with horizontal plank grain visible.
- At least one cheese wheel silhouette with rind gradient coloring.
- Moisture droplets scattered on stone surfaces (minimum 3 droplets per visible wall section).
- Cave mold accent (green-gray patch) on stone or cheese rind — subtle but present.
- Tasting board or paddle component with cheese wedges displayed.
- Aging label tag with cheese identification or duration data.
- Cool color temperature throughout — no warm candlelight, no golden glow.
- Cheese yellow (#d4b848) appears as the primary accent color.
- Typography uses rustic serif or slab serif (Bitter, Arvo, Libre Baskerville).
- Shadows are deep and directional — underground spaces have strong shadow contrast.
- Transitions are slower than typical UI (600ms default) — aging is unhurried.
- Wood elements show grain texture, not flat brown.
- Overall aesthetic communicates humidity, patience, and artisanal craft.

## Anti-Patterns

- Warm golden lighting or candlelight effects (the cheese cave uses cool, diffused, ambient light — not candlelit like a wine cellar).
- Bright white or clean surfaces (cave walls are aged, damp, and textured — perfection is unauthentic).
- Modern sans-serif typography (cheese caves demand rustic, handcrafted serif character).
- Missing moisture or humidity indicators (a cheese cave without visible humidity is just a room).
- Perfectly circular cheese wheels (hand-formed curd has organic, slightly irregular shape).
- Dry-looking stone surfaces (cave stone is always slightly damp — gloss or dewdrop hints are essential).
- Missing mold accents (beneficial mold is part of the aging process — its absence feels sterile).
- Neon, electric, or RGB glow effects (forbidden — the cave has no artificial colored lighting).
- Fast or snappy transitions (cave interactions are deliberate and seasonal).
- Perfectly aligned elements (stone, wood, and cheese are organic — slight irregularity signals authenticity).
- Missing depth/shadow (underground caves have extreme shadow — flat lighting destroys the mood).
- Bright cheese white on white backgrounds (cheese white #f0e8d0 needs dark stone contrast to be visible).
- Overcrowded shelf displays (cheese wheels need space to breathe and age — cluttered shelves are unrealistic).
- Missing wooden structural elements (shelves, boards, or pallets must be present — cheese does not float in stone).

## Accessibility Considerations

- Cheese white (#f0e8d0) on cave dark (#1a1a1a) provides strong contrast (WCAG AAA).
- Cheese yellow (#d4b848) on dark backgrounds exceeds AA for large text; verify for small text.
- Cave stone (#6a6a5a) on dark backgrounds may fail contrast — use cheese white for body text on stone.
- Focus states: `focus:ring-2 focus:ring-[#d4b848]/25 focus:ring-offset-2 focus:ring-offset-[#5e5e4e]` (cheese-yellow ring on stone).
- Moisture droplets and mold patches must be `aria-hidden="true"` — they are atmospheric, not informational.
- The cool, low-light aesthetic may reduce readability at small sizes — ensure body text is 16px+.
- Moisture shimmer animations must respect `prefers-reduced-motion` — disable or minimize for users who request it.
- Cheese wheel grids and shelf displays must have proper ARIA roles (list/grid) with meaningful labels for screen readers.
- The intentionally dark and humid aesthetic requires careful attention to interactive element visibility — active/hover states must be perceptible even in the cool, dark palette.
- Aging labels and identification tags are functional data — they must remain readable regardless of the atmospheric styling.
- Mold green-gray (#7a8a6a) on stone (#6a6a5a) has very low contrast — use only as decorative accent, never for text.
- Moisture blue (rgba 180,200,220) at low opacity is decorative — do not rely on it for conveying information.
