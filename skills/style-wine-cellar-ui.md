---
name: wine-cellar-ui
description: Build wine cellar UI components (stone arch vaults, oak barrel rows, candlelight, wine bottle racks, tasting table, cobwebs, cool damp) with underground stone chambers, warm candlelight on oak, and the patient aging of fine vintages. Trigger this skill when the user asks for wine cellar design, underground cellar UI, stone vault interfaces, vineyard storage aesthetics, candlelit underground, barrel room components, or vintage aging environments.
---

# Wine Cellar UI

Use this skill to design and implement atmospheric, subterranean interfaces with stone arch vault ceilings, rows of oak barrels, warm candlelight, wine bottle rack grids, tasting table surfaces, and the patient, reverent stillness of a centuries-old underground cellar. This is not a modern wine bar — it is the cellar itself: stone, oak, wax, glass, and the slow passage of time.

## Non-Negotiable Foundations

- Stone arch vault is MANDATORY: every major panel or section must evoke a repeating stone arch via clip-path, border-radius composition, or layered SVG — this is the architectural identity of the cellar.
- Candlelight is the sole light source: all surfaces are illuminated by warm, flickering, directional glow from above or the side. There are no fluorescent lights in a cellar.
- Oak barrel silhouettes are structural motifs: rows of cylindrical barrel shapes appear as decorative borders, section dividers, or background elements.
- Wine bottle rack grid is the primary data-display pattern: horizontal bottles stored in diamond/crossed patterns, each bottle visible but recessed into shadow.
- The aesthetic communicates PATIENCE, TRADITION, and the QUIET REVERENCE of aging. This is a place where time is the most valuable ingredient.
- Colors are underground and organic: stone grays, warm oak, candle gold, deep wine reds, dark bottle greens, and the near-black of unlit caverns.
- Typography is old-world serif: the kind of lettering you would see on a Bordeaux chateau label — timeless, measured, authoritative.

## Core Material Recipes

### 1) Stone Arch Vault Ceiling

Repeating arch shape creating the barrel-vault ceiling of a cellar.

- Clip-path arch: `clip-path:polygon(0% 100%,0% 30%,5% 15%,15% 5%,30% 0%,50% 0%,70% 0%,85% 5%,95% 15%,100% 30%,100% 100%)`.
- Stone texture base: `bg-[#6a6a5a]` with `bg-[url("data:image/svg+xml,...")]` for rough-hewn stone grain.
- CSS stone approximation: `bg-[linear-gradient(180deg,#6a6a5a_0%,#5a5a4a_40%,#6a6a5a_60%,#5a5a4a_100%)]`.
- Joint mortar lines: `bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_60px,rgba(0,0,0,0.15)_60px,rgba(0,0,0,0.15)_61px)]` and horizontal mortar: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_40px,rgba(0,0,0,0.1)_40px,rgba(0,0,0,0.1)_41px)]`.
- Candlelight wash: `bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,204,102,0.12)_0%,transparent_70%)]` layered on top.
- Shadow: `shadow-[inset_0_-40px_60px_rgba(0,0,0,0.4)]` for the deep shadow at the base of the vault.

### 2) Oak Barrel Row

Horizontal row of cylinder silhouettes — the structural rhythm of the cellar.

```html
<div class="flex gap-1 items-end py-4">
  <div class="w-12 h-16 rounded-full border-2 border-[#8a6a3a] bg-gradient-to-b from-[#9a7a4a] via-[#8a6a3a] to-[#6a4a2a] shadow-[0_4px_8px_rgba(0,0,0,0.4),inset_0_-2px_4px_rgba(0,0,0,0.3)]"></div>
  <div class="w-12 h-16 rounded-full border-2 border-[#8a6a3a] bg-gradient-to-b from-[#9a7a4a] via-[#8a6a3a] to-[#6a4a2a] shadow-[0_4px_8px_rgba(0,0,0,0.4),inset_0_-2px_4px_rgba(0,0,0,0.3)]"></div>
  <div class="w-12 h-16 rounded-full border-2 border-[#8a6a3a] bg-gradient-to-b from-[#9a7a4a] via-[#8a6a3a] to-[#6a4a2a] shadow-[0_4px_8px_rgba(0,0,0,0.4),inset_0_-2px_4px_rgba(0,0,0,0.3)]"></div>
</div>
```

- Metal hoop bands: add a `border-y-2 border-[#4a4a3a]` pseudo-element at 30% and 70% height.
- Barrel end visible: rotate the last barrel to show its circular face — `rounded-full aspect-square` with a `bg-[radial-gradient(circle,#9a7a4a,#6a4a2a)]` center.

### 3) Candle Wall Sconce Glow

Warm flickering light source — the only illumination in the cellar.

- Flame: `w-1 h-3 bg-gradient-to-t from-[#ffcc66] via-[#ffaa33] to-[#ff8800] rounded-full blur-[0.5px]`.
- Glow aura: `shadow-[0_0_20px_rgba(255,204,102,0.4),0_0_60px_rgba(255,170,51,0.15)]` on the flame element.
- Ambient room wash: `bg-[radial-gradient(ellipse_at_50%_30%,rgba(255,204,102,0.08)_0%,transparent_60%)]` covering the full panel.
- Sconce bracket: small iron bracket silhouette — `bg-[#2a2a2a]` with `clip-path:polygon(30% 0%,70% 0%,80% 40%,100% 100%,0% 100%,20% 40%)`.
- Flicker animation: `animate-pulse` on the glow element, or custom keyframes oscillating `opacity` between 0.8 and 1.0 at random-feeling intervals.

### 4) Wine Bottle Rack Grid

Bottles stored horizontally in a diamond/crossed pattern — the primary data display.

```html
<div class="grid grid-cols-6 gap-0 bg-[#1a1a1a] p-4 rounded">
  <div class="col-start-1 row-start-1">
    <div class="w-full h-3 bg-[#2a3a2a] rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]"></div>
  </div>
  <!-- repeat pattern across grid -->
</div>
```

- Bottle silhouette: `bg-[#2a3a2a]` with `rounded-full` for the neck/body visible from the side, `shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]` for glass depth.
- Diamond rack pattern: use CSS `transform:rotate(45deg)` on rack dividers or `clip-path:polygon(50% 0%,100% 50%,50% 100%,0% 50%)` for diamond cells.
- Bottle label peek: small `bg-[#b8a070]` rectangle on each bottle silhouette (3px x 8px) suggesting a cork or label.
- Selected/vintage bottle: `ring-2 ring-[#5a1020]/60 shadow-[0_0_12px_rgba(90,16,32,0.3)]` — a deep wine glow.
- Empty slot: `bg-[#0a0a0a] border border-[#2a2a2a]` — a dark void in the rack.

### 5) Tasting Table Surface

Worn oak table where bottles are opened and examined.

- Wood base: `bg-[#8a6a3a]` with `bg-[repeating-linear-gradient(0deg,#8a6a3a_0px,#7a5a2a_2px,#8a6a3a_4px)]` for fine wood grain.
- Ring stain detail: `bg-[radial-gradient(circle_at_30%_50%,rgba(90,16,32,0.15)_0%,transparent_40%)]` — a wine ring left from a previous tasting.
- Edge wear: `shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),0_1px_0_rgba(255,255,255,0.05)]` for the worn front edge catching candlelight.
- Knife score marks: faint diagonal lines via `bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_20px,rgba(0,0,0,0.05)_20px,rgba(0,0,0,0.05)_21px)]`.

### 6) Cobweb Corner Accent

Spider web in the upper corner — old cellar authenticity.

```html
<svg viewBox="0 0 100 100" class="absolute top-0 left-0 w-20 h-20 text-[#9a9a8a]/30" aria-hidden="true">
  <line x1="0" y1="0" x2="80" y2="80" stroke="currentColor" stroke-width="0.5"/>
  <line x1="0" y1="20" x2="80" y2="80" stroke="currentColor" stroke-width="0.3"/>
  <line x1="0" y1="40" x2="80" y2="80" stroke="currentColor" stroke-width="0.3"/>
  <line x1="20" y1="0" x2="80" y2="80" stroke="currentColor" stroke-width="0.3"/>
  <line x1="40" y1="0" x2="80" y2="80" stroke="currentColor" stroke-width="0.3"/>
  <path d="M10,10 Q30,20 40,40" fill="none" stroke="currentColor" stroke-width="0.3"/>
  <path d="M5,25 Q25,35 40,55" fill="none" stroke="currentColor" stroke-width="0.2"/>
  <path d="M25,5 Q35,25 55,40" fill="none" stroke="currentColor" stroke-width="0.2"/>
</svg>
```

### 7) Temperature & Humidity Display

Instrument readout for cellar conditions — the functional element.

- Container: `bg-[#1a1a1a] border border-[#4a4a3a] p-3 rounded font-mono text-[10px] uppercase tracking-[0.2em]`.
- Temperature: `text-[#ffcc66]` with a small flame icon (indicating warmth).
- Humidity: `text-[#6a8a6a]` with a small droplet icon.
- Display values: `13°C` and `70%` are typical cellar readings — display with `text-lg font-bold`.
- Aging indicator: horizontal bar `h-1 bg-gradient-to-r from-[#5a1020] via-[#8a3a2a] to-[#b8a040]` showing vintage progression.

## Color Palette System

### Core Wine Cellar Palette

| Color | Hex | Role |
|---|---|---|
| Stone Gray | `#6a6a5a` | Primary surface — vaulted stone walls |
| Stone Dark | `#4a4a3a` | Mortar joints, stone depth, shadows |
| Oak Warm | `#8a6a3a` | Barrel surfaces, table wood, organic warmth |
| Oak Dark | `#6a4a2a` | Barrel shadow, wood grain depth |
| Candle Warm | `#ffcc66` | Primary light source, glow auras |
| Candle Bright | `#ffaa33` | Flame mid-tone |
| Candle Deep | `#ff8800` | Flame base, deepest glow |
| Wine Dark Red | `#5a1020` | Red wine, bottle labels, vintage accents |
| Wine Mid Red | `#8a3a2a` | Lighter wine, tasting spill, label accents |
| Wine Bottle Green | `#2a3a2a` | Bottle glass, dark green surfaces |
| Cork Tan | `#b8a070` | Corks, labels, paper, light organic tone |
| Cobweb Gray | `#9a9a8a` | Cobwebs, dust, aged surface patina |
| Underground Dark | `#1a1a1a` | Deepest shadow, unlit corners, bottle rack interiors |
| Damp Stone | `#5a6a5a` | Slightly green-tinted stone for humid areas |
| Iron Black | `#2a2a2a` | Metal fixtures, sconce brackets, rack hardware |

Rules: Stone is the dominant architectural material — it appears on every surface. Oak is the dominant furniture material. Candlelight is the only illumination — every color must look correct under warm, directional, flickering light. Deep wine red is reserved for accents and data highlights. Bottle green is the standard surface for wine bottles. The palette is stone + oak + candle glow + wine red — never bright, never cold, never sterile.

## Typography Recommendations

- **Display:** Cormorant Garamond, EB Garamond, or Playfair Display (old-world serif with classical proportions — the wine label standard).
- **Body:** Lora, Merriweather, or Crimson Text (readable serif with enough warmth to survive low-light candlelight rendering).
- **Instrument/Label:** `font-mono font-medium uppercase tracking-[0.15em] text-[10px]` for temperature readouts, vintage years, and cellar inventory codes.
- Candlelit text treatment: `text-[#ffcc66] drop-shadow-[0_0_4px_rgba(255,204,102,0.3)]` for headings that appear to be lit by candlelight.
- Wine label treatment: `text-[#b8a070] font-serif italic` for vintage names and wine titles.
- Tracking is moderate — cellar typography is measured and deliberate, never cramped or frantic.

## Interaction Rules

- Default: still, patient, reverent — the cellar does not hurry.
- Hover: candle glow intensifies subtly, surface warmens.
  - `hover:shadow-[0_0_20px_rgba(255,204,102,0.15)] hover:brightness-110 transition-all duration-500`.
- Active: `active:scale-[0.98] active:brightness-90` (the deliberate press of a wax seal).
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#ffcc66]/30 focus:ring-offset-2 focus:ring-offset-[#1a1a1a]` (candle-warm ring in darkness).
- Transitions: `transition-all duration-500` (slower than yacht — cellar time moves differently, everything is unhurried).
- Scroll behavior: `scroll-behavior: smooth` — the cellar has no jarring movements.
- Ambient flicker: optional subtle candle flicker animation on glow elements — `animate-[flicker_3s_ease-in-out_infinite]` with custom keyframes oscillating opacity and shadow spread.

## Reusable Tailwind Tokens

- Stone vault: `bg-[#6a6a5a] bg-[linear-gradient(180deg,#6a6a5a,#5a5a4a,#6a6a5a)]` with mortar-line gradients and candle-wash overlay.
- Oak barrel: `bg-gradient-to-b from-[#9a7a4a] via-[#8a6a3a] to-[#6a4a2a] rounded-full border-2 border-[#8a6a3a] shadow-[0_4px_8px_rgba(0,0,0,0.4)]`.
- Candle flame: `w-1 h-3 bg-gradient-to-t from-[#ffcc66] via-[#ffaa33] to-[#ff8800] rounded-full shadow-[0_0_20px_rgba(255,204,102,0.4)]`.
- Candle glow wash: `bg-[radial-gradient(ellipse_at_50%_30%,rgba(255,204,102,0.08)_0%,transparent_60%)]`.
- Wine bottle: `bg-[#2a3a2a] rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]`.
- Tasting table: `bg-[#8a6a3a] bg-[repeating-linear-gradient(0deg,#8a6a3a,#7a5a2a_2px,#8a6a3a_4px)] shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]`.
- Cobweb SVG: `text-[#9a9a8a]/30` with thin stroke lines radiating from corner origin.
- Temperature readout: `bg-[#1a1a1a] border border-[#4a4a3a] p-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[#ffcc66]`.
- Cork label: `bg-[#b8a070] text-[#1a1a1a] font-serif` for wine names and vintage labels.
- Underground panel: `bg-[#1a1a1a] border border-[#4a4a3a]/40 shadow-[0_4px_20px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,204,102,0.03)]`.

## Quality Checklist

- Stone arch vault or repeating arch motif on at least one major panel.
- Candlelight as the apparent light source — all surfaces show warm directional glow.
- Oak barrel silhouettes or barrel-inspired structural elements present.
- Wine bottle rack grid or horizontal bottle storage pattern visible.
- Deep wine red (#5a1020) appears as an accent color on at least one element.
- Stone texture (mortar joints, rough-hewn grain) is visible on surface elements.
- Typography uses old-world serif (Garamond, Cormorant, Playfair, Lora).
- Candle glow aura on interactive elements (hover states show warm light).
- Cork tan (#b8a070) appears on at least one label or text element.
- Temperature/humidity or aging-related display element present.
- Overall aesthetic communicates patience, tradition, and underground reverence.
- Shadows are deep and directional (candlelight creates strong shadow contrast).
- Transitions are slower than typical UI (500ms default) — the cellar moves deliberately.
- At least one cobweb or aged-patina detail element for authenticity.

## Anti-Patterns

- Flat gray surfaces without stone texture (plain gray is concrete, not cellar stone).
- Bright white or cold blue lighting (the cellar has no fluorescent or daylight sources).
- Modern sans-serif typography (wine cellar demands old-world serif authority).
- Missing candlelight or warm glow effects (the cellar is always candlelit).
- Clean, sterile surfaces (cellars are damp, dusty, and aged — imperfection is authenticity).
- Oversized wine bottle displays (bottles are small, stored horizontally, recessed into racks).
- Missing arch or vault motif (the cellar architecture is barrel-vaulted — flat ceilings are wrong).
- Neon, electric, or RGB glow effects (absolutely forbidden — candlelight only).
- Fast or snappy transitions (cellar interactions are deliberate and unhurried).
- Perfect symmetry on organic elements (stone, wood, and cobwebs are imperfectly placed).
- Missing depth/shadow (underground spaces have extreme shadow — flat lighting destroys the mood).
- Bright oak or light wood tones (cellar oak is aged and darkened by time and moisture).

## Accessibility Considerations

- Cork tan (#b8a070) on underground dark (#1a1a1a) provides strong contrast (WCAG AAA).
- Candle-warm (#ffcc66) on dark backgrounds exceeds AA for large text; verify for small text.
- Stone gray (#6a6a5a) text on dark backgrounds may fail contrast — use lighter stone or white for body text.
- Focus states: `focus:ring-2 focus:ring-[#ffcc66]/30 focus:ring-offset-2 focus:ring-offset-[#1a1a1a]` (candle-warm ring on dark).
- Cobweb SVGs and decorative elements must be `aria-hidden="true"`.
- The warm color temperature and low-light aesthetic may cause eye strain at small sizes — ensure body text is 16px+.
- Flicker animations must respect `prefers-reduced-motion` — disable or minimize candle flicker for users who request it.
- Wine bottle rack grids must have proper ARIA roles (grid/list) with meaningful labels for screen readers.
- The intentionally dark aesthetic requires careful attention to interactive element visibility — active/hover states must be perceptible even in the dark palette.
- Temperature and humidity displays are functional data — they must remain readable regardless of the atmospheric styling.
- Deep wine red (#5a1020) on dark backgrounds may fail contrast checks — use as accent/border only, not for essential text.
