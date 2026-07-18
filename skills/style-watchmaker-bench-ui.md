---
name: watchmaker-bench-ui
description: Build watchmaker bench UI components (movement parts, tiny screws, loupe magnification, balance wheel, watch face, mainspring, jeweled bearing) with microscopic precision, tiny mechanical parts, and the patient artistry of watchmaking. Trigger this skill when the user asks for watchmaker bench design, watch movement UI, horology workbench, loupe view, balance wheel, mainspring coil, jeweled bearing, tiny screw array, watch face, micro-mechanical, or precision watchmaking interfaces.
---

# Watchmaker Bench UI

Use this skill to design and implement precise, microscopic-scale interfaces inspired by a watchmaker's workbench: exposed watch movements with brass gears and ruby bearings, arrays of impossibly tiny screws sorted by size, a circular loupe magnification view revealing hidden detail, the oscillating dance of a balance wheel, clean watch faces with Roman numerals, coiled mainsprings under tension, jeweled bearings gleaming in gold settings, and the patient, microscopic artistry of assembling a mechanical timepiece from hundreds of parts. This is not the clockwork aesthetic (grand clocks, pendulums, wall clocks) — this is the WATCHMAKER'S BENCH: tiny parts, magnified views, surgical precision, and a wooden work surface worn smooth by decades of careful work.

## Non-Negotiable Foundations

The watchmaker bench aesthetic is defined by the tension between the vast wooden work surface and the impossibly small mechanical parts scattered across it. The palette is dominated by warm brass and aged wood, punctuated by the cool blue-white of the loupe lens, the sharp red of ruby bearings, and the dull gray of steel screws. Every component must feel like it exists at a scale where a single speck of dust is a catastrophe. The beauty is in the precision — parts so small they require magnification, assembled with patience that borders on meditation.

Core material identity:
- Movement brass is warm gold with directional polish marks — it catches light in fine parallel lines, not broad reflective sheets.
- Steel screws are matte gray with tiny flat-head or hex slots — they must look functional, not decorative.
- The loupe lens is a circular portal that magnifies — it must distort and brighten what's seen through it.
- The balance wheel is the beating heart — it oscillates back and forth, not continuously spinning.
- Watch face surfaces are clean, matte white with crisp printed numerals — precision printing on enamel.
- Mainsprings are coiled flat steel under tension — they store energy, not display it.
- Jeweled bearings are tiny colored gems in gold collars — the most precious elements at the smallest scale.
- The wooden bench surface is worn, scarred, and warm — decades of tool marks and tiny scratches.
- Everything on the bench is SMALL — components should feel miniaturized relative to the workspace.

## Core Material Recipes

### 1) Wooden Bench Surface

The watchmaker's work surface: aged hardwood worn smooth by decades of precision work.

- `bg-gradient-to-b from-[#7a5a32] via-[#6a4a2a] to-[#5a3a1a] p-8` — warm wood with depth.
- Wood grain texture: `bg-[repeating-linear-gradient(2deg,transparent_0px,transparent_3px,rgba(0,0,0,0.03)_3px,rgba(0,0,0,0.03)_4px)]` overlaid on the gradient.
- Tool scratches: subtle `before:content-[''] before:absolute before:inset-0 before:bg-[repeating-linear-gradient(87deg,transparent_0px,transparent_40px,rgba(0,0,0,0.02)_40px,rgba(0,0,0,0.02)_41px)]` for fine parallel scratches from years of tool work.
- Bench edge: `border-t-4 border-t-[#4a3218] shadow-[0_4px_8px_rgba(0,0,0,0.3)]` — a thick, solid edge that implies weight.
- The bench is the STAGE — it should be the largest surface, warm and grounding, providing contrast for the tiny metallic parts placed on it.
- Green felt work pad (optional): `bg-[#2a4a2a] border border-[#1a3a1a] rounded-sm p-4` — a felt mat placed on the wood where delicate assembly happens.

### 2) Watch Movement Plate

The base plate of a mechanical watch movement — the chassis that holds all components.

- `w-40 h-40 rounded-full bg-gradient-to-br from-[#c4a043] via-[#b4903a] to-[#9a7a2e] border border-[#8a6a20] shadow-[0_2px_8px_rgba(0,0,0,0.25),inset_0_1px_2px_rgba(255,215,0,0.15)]`.
- Perlage (circular Geneva stripes) texture: `bg-[repeating-conic-gradient(from_0deg_at_50%_50%,rgba(255,215,0,0.05)_0deg,transparent_3deg,rgba(0,0,0,0.02)_6deg)]` overlaid on the brass surface.
- Screw holes: `w-2 h-2 rounded-full bg-[#1a1a1a] border border-[#3a3a3a] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]` — tiny dark circles at mounting points.
- The movement plate is a CIRCLE (or near-circle with a flat edge) — mechanical watch movements are round.
- Jewel holes: small `w-2.5 h-2.5 rounded-full bg-[radial-gradient(circle,#c41e1e_40%,#8a1414_70%,#c4a043_71%)]` — red ruby in gold collar.

### 3) Tiny Screw Array

A collection of microscopic screws sorted by size — the fastener vocabulary of watchmaking.

```html
<div class="flex items-end gap-3 p-3 bg-[#2a4a2a] rounded border border-[#1a3a1a]">
  <!-- Screw size 1 (smallest) -->
  <div class="flex flex-col items-center gap-1">
    <div class="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-[#9a9a9a] to-[#6a6a6a] shadow-[0_0_1px_rgba(0,0,0,0.3)]"></div>
    <span class="font-mono text-[5px] text-[#4a6a4a]">0.8</span>
  </div>
  <!-- Screw size 2 -->
  <div class="flex flex-col items-center gap-1">
    <div class="w-2 h-2 rounded-full bg-gradient-to-b from-[#a0a0a0] to-[#707070] shadow-[0_0_1px_rgba(0,0,0,0.3)]">
      <div class="w-full h-[1px] bg-[#4a4a4a] mt-[3px]"></div>
    </div>
    <span class="font-mono text-[5px] text-[#4a6a4a]">1.0</span>
  </div>
  <!-- Screw size 3 -->
  <div class="flex flex-col items-center gap-1">
    <div class="w-2.5 h-2.5 rounded-full bg-gradient-to-b from-[#a8a8a8] to-[#787878] shadow-[0_0_2px_rgba(0,0,0,0.3)]">
      <div class="w-full h-[1px] bg-[#4a4a4a] mt-[4px]"></div>
    </div>
    <span class="font-mono text-[5px] text-[#4a6a4a]">1.2</span>
  </div>
  <!-- Screw size 4 (largest) -->
  <div class="flex flex-col items-center gap-1">
    <div class="w-3 h-3 rounded-full bg-gradient-to-b from-[#b0b0b0] to-[#808080] shadow-[0_0_2px_rgba(0,0,0,0.3)]">
      <div class="w-full h-[1px] bg-[#4a4a4a] mt-[5px]"></div>
    </div>
    <span class="font-mono text-[5px] text-[#4a6a4a]">1.6</span>
  </div>
</div>
```

- Screw heads are tiny circles with a flat-head slot: a single `h-[1px]` line across the center.
- Screw size labels are in millimeter, font-mono at 5-6px — they are barely visible, just like real screw sizing labels.
- The green felt background under the screws is the sorting tray — screws are organized, not scattered.
- Each screw has a subtle gradient from lighter top to darker bottom — the polished metal catches overhead light.
- For blue-tempered screws (heat-treated steel): `bg-gradient-to-b from-[#4a6a8a] to-[#3a5a7a]` — these are the premium decorative screws.

### 4) Loupe Magnification View

A circular magnifying loupe that reveals microscopic detail — the watchmaker's eye.

```html
<div class="relative w-48 h-48">
  <!-- Loupe rim (the metal ring holding the lens) -->
  <div class="absolute inset-0 rounded-full bg-gradient-to-br from-[#a8a8a8] via-[#888888] to-[#686868] border-2 border-[#585858] shadow-[0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.3)]"></div>
  <!-- Lens surface -->
  <div class="absolute inset-2 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(160,200,224,0.25)_0%,rgba(160,200,224,0.08)_40%,rgba(20,40,60,0.12)_100%)] border border-[#b0b0b0]/30 overflow-hidden">
    <!-- Magnified content area -->
    <div class="absolute inset-4 rounded-full bg-[#e8e0d0] overflow-hidden" style="transform: scale(1.4); transform-origin: center;">
      <!-- Content being magnified (e.g., a gear tooth, a screw head) -->
      <div class="w-full h-full bg-gradient-to-br from-[#c4a043] to-[#9a7a2e] rounded-full flex items-center justify-center">
        <div class="w-6 h-6 rounded-full border-2 border-[#8a6a20] bg-[#b4903a]"></div>
      </div>
    </div>
    <!-- Lens glare (the reflective arc on glass) -->
    <div class="absolute top-3 left-6 w-12 h-8 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-sm"></div>
  </div>
</div>
```

- The loupe rim is polished steel: `from-[#a8a8a8] via-[#888888] to-[#686868]`.
- The lens has a faint blue tint: `rgba(160,200,224,0.25)` — watchmaker loupes use coated glass.
- Content visible through the lens appears MAGNIFIED — use `transform: scale(1.4)` on the content area inside the circular clip.
- The lens glare arc is essential — it sells the curved glass surface.
- The loupe sits ON the bench surface — it is a physical object being looked through, not a UI overlay.
- For an "active loupe view" (what the watchmaker sees): expand the lens to fill the viewport with a circular clip-path and show highly detailed magnified content.

### 5) Balance Wheel Assembly

The oscillating regulation organ — the heartbeat of the watch, swinging back and forth under the hairspring's tension.

```html
<div class="relative w-32 h-32">
  <!-- Balance wheel rim (the weighted wheel) -->
  <div class="absolute inset-0 rounded-full border-4 border-[#c4a043] shadow-[0_1px_4px_rgba(0,0,0,0.2)]" style="animation: balance_oscillate 0.8s ease-in-out infinite alternate;">
    <!-- Balance screws (tiny weights on the rim) -->
    <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#a8a8a8]"></div>
    <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#a8a8a8]"></div>
    <div class="absolute top-1/2 -left-1 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#a8a8a8]"></div>
    <div class="absolute top-1/2 -right-1 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#a8a8a8]"></div>
    <!-- Spokes (arms from center to rim) -->
    <div class="absolute top-1/2 left-1/4 right-1/4 h-[1px] bg-[#c4a043] -translate-y-1/2"></div>
    <div class="absolute left-1/2 top-1/4 bottom-1/4 w-[1px] bg-[#c4a043] -translate-x-1/2"></div>
    <!-- Center hub -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[#d4b053] to-[#a48028] border border-[#8a6a20]"></div>
  </div>
  <!-- Hairspring (the spiral spring — shown as concentric arcs) -->
  <div class="absolute inset-4 rounded-full border border-[#4a6a8a]/40"></div>
  <div class="absolute inset-7 rounded-full border border-[#4a6a8a]/30"></div>
  <div class="absolute inset-10 rounded-full border border-[#4a6a8a]/20"></div>
</div>
```

```css
@keyframes balance_oscillate {
  0% { transform: rotate(-8deg); }
  100% { transform: rotate(8deg); }
}
```

- The balance wheel oscillates (back and forth) — it does NOT continuously rotate. This is critical.
- The hairspring is a flat spiral — shown as concentric circles with decreasing opacity toward the center.
- Balance screws on the rim are the smallest visible elements — `w-1.5 h-1.5` — they represent the micro-adjustment weights.
- The center hub has the most polished brass gradient — it is the axis point.
- The oscillation is FAST (0.4-1 second period) and SMALL (8-15 degrees each way).

### 6) Watch Face Dial

Clean enamel dial with Roman numerals — the public face of all the hidden mechanism.

- `w-48 h-48 rounded-full bg-gradient-to-br from-[#f5f0f0] to-[#e8e0e0] border-2 border-[#c4a043] shadow-[inset_0_2px_8px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.2)]`.
- Roman numerals: SVG text at each hour position using `font-serif font-bold text-[#1a1a1a]` — "XII", "III", "VI", "IX" at the cardinal points, with smaller "I", "II", "IV", "V", "VII", "VIII", "X", "XI" between.
- Minute markers: tiny `w-[1px] h-1 bg-[#1a1a1a]` ticks around the inner edge, 60 total.
- Hour hand: `absolute top-1/2 left-1/2 w-1.5 h-14 bg-[#1a1a1a] origin-bottom -translate-x-1/2 -translate-y-full rotate-[30deg] rounded-full`.
- Minute hand: `absolute top-1/2 left-1/2 w-1 h-16 bg-[#1a1a1a] origin-bottom -translate-x-1/2 -translate-y-full rotate-[180deg] rounded-full`.
- Center cap: `w-3 h-3 rounded-full bg-[#c4a043] border border-[#8a6a20]` — the gold pin holding the hands.
- The dial is matte, not glossy — it is printed enamel, not glass. No reflections, no glare.
- Sub-dial (small seconds): `w-12 h-12 rounded-full border border-[#c4a043]/40` at the 6 o'clock position.

### 7) Mainspring Coil

The flat spiral spring that stores energy — the power source of the entire movement.

```html
<div class="relative w-20 h-20">
  <!-- Spiral coils (concentric arcs that suggest a flat spiral) -->
  <div class="absolute inset-0 rounded-full border-[1.5px] border-[#4a6a8a]/50"></div>
  <div class="absolute inset-2 rounded-full border-[1.5px] border-[#4a6a8a]/40"></div>
  <div class="absolute inset-4 rounded-full border-[1.5px] border-[#4a6a8a]/35"></div>
  <div class="absolute inset-6 rounded-full border-[1.5px] border-[#4a6a8a]/30"></div>
  <div class="absolute inset-8 rounded-full border-[1.5px] border-[#4a6a8a]/25"></div>
  <!-- Center arbor -->
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-[#b0b0b0] to-[#808080] border border-[#606060]"></div>
</div>
```

- Mainspring steel is blue-gray: `#4a6a8a` — this is tempered steel, not brass.
- The spiral has a visible gap between coils — they are not concentric circles but a true Archimedean spiral.
- The outermost coil is the thickest and most visible; inner coils fade.
- The center arbor (the shaft the spring is wound around) is polished steel.
- For a mainspring in a barrel (enclosed): add a brass barrel housing `rounded-full bg-gradient-to-br from-[#c4a043] to-[#9a7a2e]` around the spiral with the spiral visible inside.

### 8) Jeweled Bearing

A tiny ruby or sapphire bearing set in a gold collar — the lowest-friction pivot point in the movement.

```html
<div class="relative w-6 h-6">
  <!-- Gold collar (the setting) -->
  <div class="absolute inset-0 rounded-full bg-gradient-to-br from-[#d4b053] to-[#a48028] border border-[#8a6a20] shadow-[0_1px_3px_rgba(0,0,0,0.2)]"></div>
  <!-- Ruby jewel -->
  <div class="absolute inset-1 rounded-full bg-[radial-gradient(circle_at_40%_35%,#e84040_0%,#c41e1e_40%,#8a1414_80%,#c4a043_100%)] shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_0_4px_rgba(196,30,30,0.2)]"></div>
  <!-- Jewel highlight (light catch on the polished gem) -->
  <div class="absolute top-0.5 left-0.5 w-1.5 h-1 bg-white/40 rounded-full blur-[0.5px]"></div>
</div>
```

- Ruby bearings are RED: `#c41e1e` — the most saturated color on the bench.
- Sapphire bearings are BLUE: `#3a5aaa` — used in specific positions, less common.
- The gold collar must be visible around the jewel — it is a separate metal part, not a bezel.
- The jewel has a radial gradient with a bright center and dark edge — it is a polished dome.
- The highlight dot is critical — it shows the gem is polished and reflective.
- Jeweled bearings are TINY — `w-5 h-5` to `w-7 h-7` maximum. They are the smallest named components.

### 9) Gear Train Wheel

An individual gear wheel from the gear train — toothed, precise, and functional.

```html
<svg viewBox="0 0 80 80" class="w-16 h-16 text-[#c4a043]">
  <!-- Gear teeth (outer ring of teeth) -->
  <path fill="currentColor" d="M40,2 L43,8 A32,32 0 0,1 48,9 L52,3 L56,8 L53,14 A32,32 0 0,1 58,17 L64,13 L67,18 L61,22 A32,32 0 0,1 65,28 L72,27 L73,32 L66,33 A32,32 0 0,1 68,39 L75,42 L74,47 L67,45 A32,32 0 0,1 66,52 L72,57 L68,61 L62,56 A32,32 0 0,1 57,61 L60,68 L55,70 L52,63 A32,32 0 0,1 45,65 L46,72 L41,73 L40,66 A32,32 0 0,1 34,65 L33,72 L28,71 L30,64 A32,32 0 0,1 24,60 L17,64 L14,59 L20,55 A32,32 0 0,1 15,49 L8,50 L7,45 L14,45 A32,32 0 0,1 12,38 L5,35 L6,30 L13,33 A32,32 0 0,1 13,26 L7,21 L11,17 L17,22 A32,32 0 0,1 23,17 L20,10 L25,8 L28,15 A32,32 0 0,1 35,12 L34,5 Z M40,28 A12,12 0 1,0 40,52 A12,12 0 1,0 40,28 Z" opacity="0.5"/>
  <!-- Center hub -->
  <circle cx="40" cy="40" r="8" fill="currentColor" opacity="0.7"/>
  <circle cx="40" cy="40" r="3" fill="#1a1a1a"/>
</svg>
```

- Gear teeth must be visible and individually defined — generic starburst shapes are not gears.
- The center hole (where the axle passes through) is dark — it is a through-hole.
- Brass gear: `#c4a043` with darker tooth edges.
- Steel gear: `#909090` with `#606060` tooth edges.
- For meshing gears, place two at calculated distances so teeth interlock visually.
- Gear rotation: `animate-[spin_Ns_linear_infinite]` where N varies by gear ratio (faster gears have smaller N).

### 10) Watchmaker's Tool Set

Precision tools laid out on the bench — screwdrivers, tweezers, oilers.

```html
<div class="flex items-center gap-6 p-4">
  <!-- Screwdriver -->
  <div class="flex flex-col items-center">
    <div class="w-2 h-20 bg-gradient-to-b from-[#b0b0b0] to-[#808080] rounded-t-sm shadow-[0_1px_2px_rgba(0,0,0,0.2)]"></div>
    <div class="w-4 h-8 bg-gradient-to-b from-[#4a6a8a] to-[#3a5a7a] rounded-b-sm shadow-[0_2px_4px_rgba(0,0,0,0.2)]"></div>
    <span class="font-mono text-[5px] text-[#6a4a2a]/60 mt-1">0.60</span>
  </div>
  <!-- Tweezers -->
  <div class="flex flex-col items-center">
    <div class="flex gap-[1px]">
      <div class="w-1 h-24 bg-gradient-to-b from-[#b0b0b0] to-[#909090] rounded-t-sm" style="transform: rotate(-2deg);"></div>
      <div class="w-1 h-24 bg-gradient-to-b from-[#b0b0b0] to-[#909090] rounded-t-sm" style="transform: rotate(2deg);"></div>
    </div>
    <span class="font-mono text-[5px] text-[#6a4a2a]/60 mt-1">Dumont</span>
  </div>
  <!-- Oil pen -->
  <div class="flex flex-col items-center">
    <div class="w-1.5 h-16 bg-gradient-to-b from-[#c4a043] to-[#9a7a2e] rounded-t-full shadow-[0_1px_2px_rgba(0,0,0,0.2)]"></div>
    <div class="w-1 h-4 bg-[#909090] rounded-b-full"></div>
    <span class="font-mono text-[5px] text-[#6a4a2a]/60 mt-1">Oiler</span>
  </div>
</div>
```

- Screwdrivers have COLOR-CODED handles: the color indicates blade width (e.g., purple = 0.50mm, red = 0.70mm, blue = 1.00mm).
- Tweezers are the longest tools — two parallel tips that converge.
- Oilers are the thinnest — a fine needle tip for placing tiny drops of oil.
- Tool labels are in millimeter size — `font-mono text-[5px]` barely visible.

### 11) Watchmaker Bench Button

A button that feels like a precision instrument — small, exact, purposeful.

- `bg-gradient-to-b from-[#b4903a] to-[#8a6a20] text-[#1a0a0a] font-mono text-[10px] uppercase tracking-[0.15em] px-5 py-2 border border-[#6a5010] shadow-[0_1px_0_#4a3a0a,inset_0_1px_0_rgba(212,176,83,0.3)] hover:translate-y-px hover:shadow-[0_0_8px_rgba(196,160,67,0.2),0_1px_0_#4a3a0a] active:translate-y-0.5 active:shadow-none transition-all duration-150`.
- The button is SMALL and PRECISE — no large, chunky UI elements. This is watchmaking.
- The brass gradient with dark text mirrors the movement plate aesthetic.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Movement Brass | `#c4a043` | Gears, plates, movements — primary material |
| Brass Light | `#d4b053` | Polished brass highlights, gold collars |
| Brass Dark | `#8a6a20` | Brass shadows, aged patina |
| Bench Wood | `#6a4a2a` | Work surface, wooden fixtures |
| Bench Wood Dark | `#5a3a1a` | Wood shadows, edge detail |
| Bench Wood Light | `#7a5a32` | Wood highlights, worn areas |
| Screw Steel | `#909090` | Screw heads, tool shafts |
| Screw Steel Dark | `#606060` | Screw slots, shadow sides |
| Blue Screw | `#4a6a8a` | Heat-tempered decorative screws, mainspring |
| Loupe Lens | `#a0c8e0` | Loupe glass tint, lens coating |
| Loupe Rim | `#a8a8a8` | Loupe metal housing, steel tools |
| Watch Face White | `#f5f0f0` | Enamel dial surface |
| Watch Face Cream | `#e8e0e0` | Dial shadow side |
| Balance Wheel Gold | `#c4a043` | Balance wheel rim (same as brass, shares material) |
| Mainspring Blue | `#4a6a8a` | Mainspring steel, tempered components |
| Jewel Ruby | `#c41e1e` | Ruby bearings — the most saturated element |
| Jewel Ruby Dark | `#8a1414` | Ruby depth, internal reflections |
| Jewel Sapphire | `#3a5aaa` | Sapphire bearings (less common variant) |
| Felt Green | `#2a4a2a` | Work mat, screw sorting trays |
| Ink Black | `#1a1a1a` | Dial numerals, axle holes, deep shadows |
| Text Warm | `#c4a043` | Headings on dark backgrounds |
| Text Dark | `#1a0a0a` | Text on brass or light surfaces |
| Text Dim | `#6a4a2a` | Labels, measurements, secondary text |

Rules: Brass gold and warm wood dominate at 50-60% of the palette. Steel gray is the functional accent. Ruby red and sapphire blue appear ONLY in jeweled bearings — they are the rarest, most precious colors. Mainspring blue-gray is the only other cool tone. The overall impression is warm, precise, and microscopic — think Swiss watchmaking ateliers, not industrial factories.

## Typography Recommendations

- **Display:** Cormorant Garamond, Playfair Display (elegant serif — like engraved watch case text).
- **Body:** Source Serif Pro, EB Garamond (readable classical serif for specifications and notes).
- **Monospace:** JetBrains Mono, IBM Plex Mono (for measurements: "0.80mm", "28,800 vph", "21 jewels").
- **Labels:** `font-serif font-medium text-xs tracking-wide text-[#6a4a2a]` — like stamped or engraved markings.
- **Measurement text:** `font-mono text-[10px] text-[#909090]` — precise, technical, tiny.
- **Screw sizes and specifications:** `font-mono text-[8px] text-[#6a4a2a]/60 uppercase` — barely visible functional labels.
- Roman numerals on watch faces: use serif fonts with proper kerning — "XII" must not look like "X I I".
- The watchmaker aesthetic mixes classical elegance (serif) with technical precision (mono) — never cold geometric sans-serif.

## Component Architecture Pattern

Watchmaker bench UI follows a **Workbench Layout** pattern:

```
┌─────────────────────────────────────┐
│  Bench Header (project name, specs) │
├──────────┬──────────────────────────┤
│ Tool     │  Work Area               │
│ Tray     │  (movement plate,        │
│ (screws, │   loupe view,            │
│  oilers, │   balance wheel,         │
│  tweezers│   gear train)            │
│  on felt)│                          │
├──────────┼──────────────────────────┤
│ Parts    │  Assembly View           │
│ Catalog  │  (watch face,            │
│ (jewels, │   case back,             │
│  springs,│   complete movement)     │
│  barrels)│                          │
├──────────┴──────────────────────────┤
│  Specifications Panel               │
│  (caliber, jewels, frequency,       │
│   power reserve)                    │
└─────────────────────────────────────┘
```

Key principles:
- The work area is the visual center — movement plate, loupe view, and active assembly.
- Tool and parts trays use the green felt background to frame the brass/steel components.
- The loupe view is a portal — it can expand to overlay the work area for detailed inspection.
- Specifications panel uses monospace typography for technical data.
- Borders between panels use `border-[#8a6a20]/20` — thin brass-colored lines.
- The bench wood surface is the containing environment — it wraps all panels.

## Interaction Rules

- **Hover on movement plate:** subtle brightness increase — `hover:brightness-105` with `transition-all duration-200` (metal catches light as you lean in).
- **Hover on screws:** individual screw lifts — `hover:-translate-y-0.5 hover:shadow-md` — as if picked up with tweezers.
- **Hover on loupe:** lens glare shifts position — `group-hover:translate-x-1 group-hover:-translate-y-1` on the glare element, `transition-transform duration-500` (simulating angle change as you move the loupe).
- **Balance wheel:** continuous oscillation — `animate-[balance_oscillate_0.8s_ease-in-out_infinite_alternate]`. Stops on hover (you've stopped the mechanism to inspect).
- **Gear rotation:** continuous spin — `animate-[spin_Ns_linear_infinite]`. Multiple gears at different speeds and directions.
- **Click on jeweled bearing:** highlight pulse — `animate-[pulse_2s_ease-in-out_infinite]` on a `shadow-[0_0_6px_rgba(196,30,30,0.4)]` — the ruby glows.
- **Drag on work area:** cursor changes to `cursor-crosshair` for precise placement.
- **Hover on tool:** tool highlights — `hover:brightness-110 hover:shadow-[0_0_4px_rgba(196,160,67,0.2)]`.
- **Scroll on parts list:** smooth scroll with brass-toned scrollbar — `scrollbar-thumb-[#c4a043]/30 scrollbar-track-transparent`.
- **Transitions:** precision instruments respond QUICKLY — `duration-150` for hover effects, `duration-200` for state changes. Only the balance wheel oscillation is slow.
- **Selection state on parts:** selected part gets a subtle brass glow border — `ring-1 ring-[#c4a043]/40 ring-offset-1 ring-offset-[#6a4a2a]` (offset by the bench wood color).

## Reusable Tailwind Tokens

- Bench wood: `bg-gradient-to-b from-[#7a5a32] via-[#6a4a2a] to-[#5a3a1a]`.
- Movement plate: `rounded-full bg-gradient-to-br from-[#c4a043] via-[#b4903a] to-[#9a7a2e] border border-[#8a6a20]`.
- Gear brass: `text-[#c4a043]` on SVG with `opacity="0.5"`.
- Screw steel: `bg-gradient-to-b from-[#909090] to-[#606060] rounded-full`.
- Blue screw: `bg-gradient-to-b from-[#4a6a8a] to-[#3a5a7a] rounded-full`.
- Jeweled bearing: `rounded-full bg-[radial-gradient(circle,#c41e1e_40%,#8a1414_70%,#c4a043_100%)]`.
- Watch face: `rounded-full bg-gradient-to-br from-[#f5f0f0] to-[#e8e0e0] border-2 border-[#c4a043]`.
- Loupe rim: `rounded-full bg-gradient-to-br from-[#a8a8a8] via-[#888888] to-[#686868] border-2 border-[#585858]`.
- Loupe lens: `bg-[radial-gradient(circle_at_40%_35%,rgba(160,200,224,0.25)_0%,rgba(160,200,224,0.08)_40%,rgba(20,40,60,0.12)_100%)]`.
- Mainspring: `border-[1.5px] border-[#4a6a8a]/50 rounded-full`.
- Green felt: `bg-[#2a4a2a] border border-[#1a3a1a]`.
- Balance wheel: `border-4 border-[#c4a043] rounded-full` with oscillation animation.
- Bench button: `bg-gradient-to-b from-[#b4903a] to-[#8a6a20] text-[#1a0a0a] font-mono text-[10px] uppercase tracking-[0.15em] border border-[#6a5010]`.
- Panel border: `border border-[#8a6a20]/20` — thin brass line between sections.
- Part label: `font-mono text-[8px] text-[#6a4a2a]/60 uppercase`.
- Specification text: `font-mono text-xs text-[#909090]` — technical data display.
- Engraved heading: `font-serif font-medium text-xs tracking-wide text-[#6a4a2a]`.

## Quality Checklist

- Wooden bench surface present as the containing environment (warm brown wood gradient with grain texture).
- At least one watch movement plate (circular brass with perlage texture or screw holes).
- Balance wheel with oscillating animation (back-and-forth, not continuous rotation).
- Loupe magnification view with lens glare and magnified content visible through circular frame.
- Tiny screw array on green felt sorting tray with size labels.
- Jeweled bearing(s) with red ruby in gold collar.
- Watch face dial with Roman numerals and hands.
- Gear train wheel(s) with visible teeth and rotation animation.
- Mainspring coil with blue-gray spiral.
- Tool set with at least two of: screwdriver, tweezers, oiler.
- Color palette reads as brass gold + warm wood + steel gray with ruby/sapphire accents only in bearings.
- Typography mixes classical serif (elegant) with monospace (precise).
- All measurements and specifications use monospace font at small sizes.
- Components feel MINIATURE relative to the bench surface — the parts are tiny.
- The aesthetic reads as a watchmaker's workbench, not a clock shop or factory.
- Brass surfaces have gradient depth and directional light — not flat gold fills.
- Interactions are quick and precise (150-200ms transitions).
- Green felt appears under loose parts for sorting.
- The overall mood is patient, precise, and microscopic.

## Anti-Patterns

- Missing wooden bench surface (the bench IS the environment — without it, parts float in space).
- Large, chunky UI elements (everything at the watchmaker's bench is SMALL and PRECISE).
- Clock faces replacing watch faces (this is WATCHMAKING, not clock-making — the scale is different).
- Pendulums or large swinging mechanisms (the balance wheel oscillates, it does not swing like a pendulum).
- Missing jeweled bearings (rubies are the most visually precious and recognizable watchmaking element).
- Flat gold fills without gradient (brass must have directional polish — flat gold is clip art).
- Continuous rotation on the balance wheel (it oscillates — back and forth, never continuously spinning).
- Missing the loupe view (magnification is the defining visual of watchmaking — seeing the unseen).
- Industrial or factory aesthetic (watchmaking is ARTISANAL, hand-crafted, patient).
- Cold, blue, or silver dominant palette (this is BRASS and WOOD, not steel and concrete).
- Missing screw array or tool set (tiny parts and precision tools are the vocabulary of the bench).
- Fast, bouncy, or playful animations (watchmaking movements are smooth, precise, and measured).
- Missing the hairspring on the balance wheel (the spiral spring IS the regulation mechanism).
- Digital or electronic time displays (this is MECHANICAL — gears and springs, not circuits).
- Large Roman numerals filling the screen (Roman numerals appear ON THE WATCH FACE, proportionally tiny).
- Missing measurement or specification text (watchmaking is about precision — numbers matter).

## Accessibility Considerations

- Warm wood and brass surfaces with dark text provide strong contrast — `#1a0a0a` on `#c4a043` passes WCAG AA.
- Watch face dial: `#1a1a1a` on `#f5f0f0` provides excellent contrast (WCAG AAA).
- Focus states: `focus:ring-2 focus:ring-[#c4a043]/50` (brass ring) — visible against both wood and dark backgrounds.
- Loupe view content must maintain readability at magnified scale — test that text inside the lens circle is legible.
- Balance wheel and gear rotation animations must respect `prefers-reduced-motion: reduce` — stop oscillation and rotation, show static state.
- Screw size labels are intentionally tiny for aesthetic reasons but must have accessible alternatives — use `aria-label` or tooltip on hover.
- Jeweled bearing color (ruby red vs. sapphire blue) must not be the only way to distinguish bearing types — add text labels.
- The loupe magnification view must work for screen readers — provide the magnified content as accessible text alongside the visual magnification.
- Touch targets on tiny screw selection and parts catalog must be at least 44x44px — consider enlarging hit areas beyond the visible element size.
- Roman numeral labels should have Arabic numeral alternatives (`aria-label="12"` for "XII").
- Technical specifications (caliber number, jewel count, frequency) must be programmatically associated with their labels.
- The bench wood background is decorative — `aria-hidden="true"` on wood grain texture overlays.
- Color-coded screwdriver handles need text alternatives indicating blade size.
- The microscopic aesthetic means many elements are visually tiny — ensure all functional elements have adequate interactive sizing even if they appear small.
