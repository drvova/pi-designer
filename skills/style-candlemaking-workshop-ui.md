---
name: candlemaking-workshop-ui
description: Build candlemaking workshop UI components (dipping rack, beeswax sheets, wick spool, fragrance oils, poured votives, color dye chips, cooling rack) with warm wax textures, candlelight glow, and the aromatic craft of candle making. Trigger this skill when the user asks for candle design, beeswax texture, candle dipping UI, wax workshop, votive layout, wick spool accent, fragrance oil display, candlelight glow, dye chip palette, or candlemaking craft interfaces.
---

# Candlemaking Workshop UI

Use this skill to design and implement interfaces inspired by the candlemaking workshop: dripping beeswax surfaces with warm candlelight glow, hanging candle silhouettes on dipping racks, hexagonal beeswax sheet textures, thin wick spool thread accents, amber fragrance oil bottle shapes, poured votive cylinders with melted wax pools, colorful dye chip accents, and grid-pattern cooling racks. Every surface should feel warm to the touch, fragrant with beeswax, and lit by the soft amber glow of taper candles in various stages of dipping.

## Non-Negotiable Foundations

- The candlemaking workshop is a craft of accumulation: layers of warm wax built up through repeated dipping, each coat adding depth, color, and translucency. Every surface should feel like it has been dipped, dripped, or poured — layered with the patience of a maker adding coat after coat.
- Materials are warm and aromatic: beeswax (golden, textured, fragrant), paraffin (smooth, translucent, cream), wick cotton (thin, dark, taut), fragrance oil (amber liquid in glass), melted wax pool (reflective, liquid, warm), and dye pigment (concentrated color chips dissolving into wax).
- Colors are warm and golden: beeswax yellow, candle cream, wick black, fragrance amber, dye red, dye blue, wax drip warm, and workshop wood brown. The mood is a candlelit workshop — golden, fragrant, intimate, and warmly lit by dozens of taper candles in wooden dipping racks.
- Motion is essential: wax must drip. A slow, gravity-driven drip of warm wax is the heartbeat of the candlemaking interface. Dipping motions cycle racks up and down, wax drips cascade down candle surfaces, dye chips dissolve and swirl into molten pools, and fragrance oils diffuse in slow amber clouds.
- Typography blends warm condensed forms with clean workshop labels — the feel of handwritten batch tags and wax-sealed stationery.
- The aesthetic is warm, fragrant, and craft-intensive — everything should feel like it was dipped, poured, or spooled by hand in a room filled with the smell of warm beeswax.

## Core Material Recipes

### 1) Beeswax Sheet Texture (the foundational background)

The signature candlemaking surface: warm golden beeswax with its characteristic hexagonal comb pattern.

- Background gradient: `bg-gradient-to-b from-[#e0c060] via-[#d4a848] to-[#c89838]`.
- Hexagonal pattern overlay: repeating SVG hexagons at `opacity-[0.08]` in `#b88828` to simulate the wax foundation sheet.
- Wax sheen: radial gradient highlight at `opacity-[0.15]` in `#f5e8c0` to suggest the slightly glossy surface of room-temperature beeswax.
- Full: `bg-gradient-to-b from-[#e0c060] via-[#d4a848] to-[#c89838] relative overflow-hidden p-6 rounded-lg`.

### 2) Candle Dipping Rack Animation

The defining motion element: a wooden rack with taper candles cycling up and down in a dipping motion.

```css
@keyframes candle-dip {
  0%, 100% { transform: translateY(0); }
  40% { transform: translateY(30px); }
  60% { transform: translateY(30px); }
}
.candle-dip {
  animation: candle-dip 4s ease-in-out infinite;
}
.candle-dip-delay-1 {
  animation: candle-dip 4s ease-in-out 0.5s infinite;
}
.candle-dip-delay-2 {
  animation: candle-dip 4s ease-in-out 1s infinite;
}
.candle-dip-delay-3 {
  animation: candle-dip 4s ease-in-out 1.5s infinite;
}
```

Dipping rack element:
```html
<div class="relative w-64 h-48 mx-auto">
  <!-- Rack frame -->
  <div class="absolute top-0 left-4 right-4 h-3 bg-gradient-to-b from-[#8a6a3a] to-[#7a5a2a] rounded-t shadow-[0_2px_4px_rgba(0,0,0,0.2)]"></div>
  <!-- Cross bar -->
  <div class="absolute top-3 left-6 right-6 h-2 bg-[#8a6a3a]"></div>
  <!-- Taper candles on rack -->
  <div class="absolute top-3 left-8 candle-dip">
    <div class="w-1.5 h-24 bg-gradient-to-b from-[#f5e8c0] via-[#e8d8a0] to-[#d4c480] rounded-b-sm relative">
      <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-[#1a1a1a] rounded-t-full"></div>
    </div>
  </div>
  <div class="absolute top-3 left-16 candle-dip-delay-1">
    <div class="w-1.5 h-28 bg-gradient-to-b from-[#f0e0b0] via-[#e0d090] to-[#d0c070] rounded-b-sm relative">
      <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-[#1a1a1a] rounded-t-full"></div>
    </div>
  </div>
  <div class="absolute top-3 left-24 candle-dip-delay-2">
    <div class="w-1.5 h-22 bg-gradient-to-b from-[#f5e8c0] via-[#e8d8a0] to-[#d4c480] rounded-b-sm relative">
      <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-[#1a1a1a] rounded-t-full"></div>
    </div>
  </div>
  <div class="absolute top-3 right-24 candle-dip-delay-3">
    <div class="w-1.5 h-26 bg-gradient-to-b from-[#f0e0b0] via-[#e0d090] to-[#d0c070] rounded-b-sm relative">
      <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-[#1a1a1a] rounded-t-full"></div>
    </div>
  </div>
  <div class="absolute top-3 right-16 candle-dip-delay-1">
    <div class="w-1.5 h-24 bg-gradient-to-b from-[#f5e8c0] via-[#e8d8a0] to-[#d4c480] rounded-b-sm relative">
      <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-[#1a1a1a] rounded-t-full"></div>
    </div>
  </div>
  <div class="absolute top-3 right-8 candle-dip-delay-2">
    <div class="w-1.5 h-20 bg-gradient-to-b from-[#f0e0b0] via-[#e0d090] to-[#d0c070] rounded-b-sm relative">
      <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-[#1a1a1a] rounded-t-full"></div>
    </div>
  </div>
  <!-- Wax vat below -->
  <div class="absolute bottom-0 left-8 right-8 h-10 bg-gradient-to-b from-[#c89838] to-[#b88028] rounded-b-lg shadow-[inset_0_-4px_8px_rgba(0,0,0,0.15)]"></div>
</div>
```

### 3) Candlelight Glow Gradient

The warm, flickering amber light of a burning taper candle — the soul of the workshop.

- Base: warm ambient background `bg-gradient-to-b from-[#2a1a0a] via-[#1a1008] to-[#0a0804]`.
- Glow center: radial gradient `bg-[radial-gradient(circle_at_center,rgba(224,192,96,0.25)_0%,rgba(224,192,96,0.08)_40%,transparent_70%)]`.
- Flicker overlay: subtle oscillating opacity animation on a second radial gradient to simulate candle flame movement.
- Warm ambient light: `box-shadow-[0_0_60px_rgba(212,168,72,0.15),0_0_120px_rgba(212,168,72,0.08)]` on containers.

```html
<div class="relative w-full h-48 bg-gradient-to-b from-[#2a1a0a] via-[#1a1008] to-[#0a0804] rounded-lg overflow-hidden">
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(224,192,96,0.25)_0%,rgba(224,192,96,0.08)_40%,transparent_70%)]"></div>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_48%_68%,rgba(245,232,192,0.15)_0%,transparent_30%)]" style="animation: candle-flicker 3s ease-in-out infinite alternate"></div>
  <!-- Warm ambient glow on edges -->
  <div class="absolute inset-0 shadow-[inset_0_0_60px_rgba(212,168,72,0.1)]"></div>
</div>
```

### 4) Beeswax Sheet Hexagonal Pattern

The hexagonal foundation sheet texture — the geometric backbone of the bee's work, embedded in warm wax.

```html
<div class="relative w-full h-24 bg-[#d4a848] rounded-lg overflow-hidden">
  <!-- Hexagonal pattern -->
  <svg class="absolute inset-0 w-full h-full opacity-[0.1]" viewBox="0 0 200 80">
    <!-- Row 1 -->
    <polygon points="15,5 25,0 35,5 35,15 25,20 15,15" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="35,5 45,0 55,5 55,15 45,20 35,15" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="55,5 65,0 75,5 75,15 65,20 55,15" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="75,5 85,0 95,5 95,15 85,20 75,15" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="95,5 105,0 115,5 115,15 105,20 95,15" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="115,5 125,0 135,5 135,15 125,20 115,15" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="135,5 145,0 155,5 155,15 145,20 135,15" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="155,5 165,0 175,5 175,15 165,20 155,15" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="175,5 185,0 195,5 195,15 185,20 175,15" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <!-- Row 2 (offset) -->
    <polygon points="5,18 15,13 25,18 25,28 15,33 5,28" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="25,18 35,13 45,18 45,28 35,33 25,28" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="45,18 55,13 65,18 65,28 55,33 45,28" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="65,18 75,13 85,18 85,28 75,33 65,28" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="85,18 95,13 105,18 105,28 95,33 85,28" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="105,18 115,13 125,18 125,28 115,33 105,28" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="125,18 135,13 145,18 145,28 135,33 125,28" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="145,18 155,13 165,18 165,28 155,33 145,28" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="165,18 175,13 185,18 185,28 175,33 165,28" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <!-- Row 3 -->
    <polygon points="15,31 25,26 35,31 35,41 25,46 15,41" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="35,31 45,26 55,31 55,41 45,46 35,41" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="55,31 65,26 75,31 75,41 65,46 55,41" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="75,31 85,26 95,31 95,41 85,46 75,41" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="95,31 105,26 115,31 115,41 105,46 95,41" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="115,31 125,26 135,31 135,41 125,46 115,41" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="135,31 145,26 155,31 155,41 145,46 135,41" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="155,31 165,26 175,31 175,41 165,46 155,41" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="175,31 185,26 195,31 195,41 185,46 175,41" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <!-- Row 4 (offset) -->
    <polygon points="5,44 15,39 25,44 25,54 15,59 5,54" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="25,44 35,39 45,44 45,54 35,59 25,54" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="45,44 55,39 65,44 65,54 55,59 45,54" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="65,44 75,39 85,44 85,54 75,59 65,54" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="85,44 95,39 105,44 105,54 95,59 85,54" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="105,44 115,39 125,44 125,54 115,59 105,54" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="125,44 135,39 145,44 145,54 135,59 125,54" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="145,44 155,39 165,44 165,54 155,59 145,54" fill="none" stroke="#b88828" stroke-width="0.8"/>
    <polygon points="165,44 175,39 185,44 185,54 175,59 165,54" fill="none" stroke="#b88828" stroke-width="0.8"/>
  </svg>
  <!-- Wax sheen -->
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(245,232,192,0.2)_0%,transparent_60%)]"></div>
</div>
```

### 5) Wick Spool Accent

The thin cotton wick wound on a spool — the thread that runs through every candle.

```html
<!-- Wick spool -->
<svg viewBox="0 0 40 60" class="w-10 h-15">
  <!-- Spool top -->
  <rect x="8" y="5" width="24" height="4" rx="2" fill="#8a6a3a" stroke="#6a4a1a" stroke-width="0.8"/>
  <!-- Spool body with wrapped wick -->
  <rect x="10" y="9" width="20" height="30" rx="3" fill="#c89838" stroke="#b88028" stroke-width="0.8"/>
  <!-- Wick wrap lines -->
  <path d="M12,12 Q20,14 28,12" fill="none" stroke="#1a1a1a" stroke-width="0.6" opacity="0.5"/>
  <path d="M12,16 Q20,18 28,16" fill="none" stroke="#1a1a1a" stroke-width="0.6" opacity="0.5"/>
  <path d="M12,20 Q20,22 28,20" fill="none" stroke="#1a1a1a" stroke-width="0.6" opacity="0.5"/>
  <path d="M12,24 Q20,26 28,24" fill="none" stroke="#1a1a1a" stroke-width="0.6" opacity="0.5"/>
  <path d="M12,28 Q20,30 28,28" fill="none" stroke="#1a1a1a" stroke-width="0.6" opacity="0.5"/>
  <path d="M12,32 Q20,34 28,32" fill="none" stroke="#1a1a1a" stroke-width="0.6" opacity="0.5"/>
  <path d="M12,36 Q20,38 28,36" fill="none" stroke="#1a1a1a" stroke-width="0.6" opacity="0.4"/>
  <!-- Spool bottom -->
  <rect x="8" y="39" width="24" height="4" rx="2" fill="#8a6a3a" stroke="#6a4a1a" stroke-width="0.8"/>
  <!-- Wick thread trailing off -->
  <path d="M20,43 Q22,48 18,53 Q16,57 20,59" fill="none" stroke="#1a1a1a" stroke-width="1" stroke-linecap="round"/>
</svg>
```

### 6) Fragrance Oil Dropper Bottle

Small amber glass dropper bottles — each a concentrated vessel of scent.

```html
<!-- Fragrance oil bottle -->
<svg viewBox="0 0 30 50" class="w-8 h-12">
  <!-- Bottle body -->
  <rect x="6" y="18" width="18" height="26" rx="3" fill="#c48020" opacity="0.85"/>
  <rect x="6" y="18" width="18" height="26" rx="3" fill="none" stroke="#a06818" stroke-width="0.8"/>
  <!-- Glass sheen -->
  <rect x="8" y="20" width="4" height="18" rx="2" fill="#d8a040" opacity="0.4"/>
  <!-- Neck -->
  <rect x="11" y="12" width="8" height="6" fill="#c48020" stroke="#a06818" stroke-width="0.6"/>
  <!-- Dropper cap -->
  <rect x="9" y="6" width="12" height="6" rx="2" fill="#3a3a3a" stroke="#2a2a2a" stroke-width="0.8"/>
  <!-- Rubber bulb -->
  <ellipse cx="15" cy="4" rx="5" ry="3" fill="#4a2a0a" stroke="#3a1a00" stroke-width="0.6"/>
  <!-- Oil level inside -->
  <rect x="8" y="28" width="14" height="14" rx="2" fill="#d89030" opacity="0.5"/>
</svg>
```

### 7) Poured Votive with Melted Wax Pool

A cylindrical votive candle with a pool of melted wax visible from above — the satisfying result of a good pour.

```html
<!-- Votive candle from slight above angle -->
<div class="relative w-20 h-24 mx-auto">
  <!-- Votive container -->
  <div class="absolute bottom-0 w-20 h-16 bg-gradient-to-b from-[#f5e8c0] via-[#e8d8a0] to-[#d8c880] rounded-md shadow-[0_2px_8px_rgba(0,0,0,0.15)] border border-[#c8b870]"></div>
  <!-- Melted wax pool on top -->
  <div class="absolute top-4 left-1 right-1 h-4 bg-gradient-to-b from-[#e0c860] to-[#d4b848] rounded-sm opacity-80"></div>
  <!-- Wax pool sheen -->
  <div class="absolute top-4 left-3 right-5 h-3 bg-[radial-gradient(ellipse_at_40%_50%,rgba(245,232,192,0.4)_0%,transparent_70%)] rounded-sm"></div>
  <!-- Wick -->
  <div class="absolute top-2 left-1/2 -translate-x-1/2 w-px h-3 bg-[#1a1a1a]"></div>
  <!-- Flame -->
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-3 bg-gradient-to-t from-[#e06020] via-[#d4a848] to-[#f5e8c0] rounded-full opacity-80" style="animation: flame-flicker 2s ease-in-out infinite alternate"></div>
</div>
```

### 8) Wax Drip Cascade

Warm wax dripping down a vertical surface — the signature visual of the candlemaking process.

```html
<div class="relative w-full h-20 overflow-hidden">
  <!-- Top edge -->
  <div class="absolute top-0 left-0 right-0 h-2 bg-[#d4a848] rounded-t-lg"></div>
  <!-- Wax drips -->
  <svg class="absolute top-1 left-0 w-full h-19" viewBox="0 0 200 70">
    <path d="M25,0 Q26,12 24,22 Q22,30 25,34 Q27,36 25,38" fill="#d4a848" opacity="0.85"/>
    <path d="M60,0 Q62,18 59,32 Q57,38 60,42 Q62,44 60,46" fill="#e0c060" opacity="0.7"/>
    <path d="M95,0 Q96,8 94,14 Q92,18 95,20" fill="#d4a848" opacity="0.9"/>
    <path d="M130,0 Q132,22 129,38 Q127,44 130,48 Q132,50 130,52" fill="#c89838" opacity="0.6"/>
    <path d="M165,0 Q167,10 164,20 Q162,26 165,28" fill="#d4a848" opacity="0.8"/>
    <path d="M40,0 Q41,14 39,26 Q37,32 40,35" fill="#e0c060" opacity="0.75"/>
    <path d="M110,0 Q112,16 109,30 Q107,36 110,40" fill="#c89838" opacity="0.65"/>
    <path d="M180,0 Q181,6 179,12 Q177,16 180,18" fill="#d4a848" opacity="0.85"/>
  </svg>
</div>
```

### 9) Cooling Rack Grid

A wire grid cooling rack where freshly dipped candles set — thin parallel lines with cross supports.

```html
<div class="relative w-full h-12 bg-gradient-to-b from-[#8a8a8a] to-[#6a6a6a] rounded overflow-hidden">
  <!-- Horizontal wires -->
  <div class="absolute top-1 left-0 right-0 h-px bg-[#aaa]"></div>
  <div class="absolute top-3 left-0 right-0 h-px bg-[#aaa]"></div>
  <div class="absolute top-5 left-0 right-0 h-px bg-[#aaa]"></div>
  <div class="absolute top-7 left-0 right-0 h-px bg-[#aaa]"></div>
  <div class="absolute top-9 left-0 right-0 h-px bg-[#999]"></div>
  <div class="absolute top-11 left-0 right-0 h-px bg-[#999]"></div>
  <!-- Vertical cross supports -->
  <div class="absolute top-0 bottom-0 left-[10%] w-px bg-[#999] opacity-60"></div>
  <div class="absolute top-0 bottom-0 left-[30%] w-px bg-[#999] opacity-60"></div>
  <div class="absolute top-0 bottom-0 left-[50%] w-px bg-[#999] opacity-60"></div>
  <div class="absolute top-0 bottom-0 left-[70%] w-px bg-[#999] opacity-60"></div>
  <div class="absolute top-0 bottom-0 left-[90%] w-px bg-[#999] opacity-60"></div>
</div>
```

### 10) Color Dye Chip

Small concentrated wax dye chips — the pigment source for coloring candles.

```html
<div class="flex gap-3">
  <div class="w-8 h-8 rounded-sm bg-[#c44040] shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_1px_3px_rgba(0,0,0,0.2)] border border-[#a03030]"></div>
  <div class="w-8 h-8 rounded-sm bg-[#2a4a8a] shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_1px_3px_rgba(0,0,0,0.2)] border border-[#1a3a6a]"></div>
  <div class="w-8 h-8 rounded-sm bg-[#d4a848] shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_1px_3px_rgba(0,0,0,0.2)] border border-[#b88828]"></div>
  <div class="w-8 h-8 rounded-sm bg-[#2a7a3a] shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_1px_3px_rgba(0,0,0,0.2)] border border-[#1a5a2a]"></div>
  <div class="w-8 h-8 rounded-sm bg-[#7a3a7a] shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_1px_3px_rgba(0,0,0,0.2)] border border-[#5a2a5a]"></div>
</div>
```

### 11) Workshop Wood Surface

Wax-splattered, heat-marked workshop wood — the surface where all the making happens.

- Wood base: `bg-gradient-to-b from-[#8a6a3a] to-[#7a5a2a]`.
- Wax splatters: small irregular circles in `#d4a848` and `#e0c060` at various `opacity-[0.08-0.2]`.
- Heat marks: faint circular scorch marks in `#6a4a1a` at `opacity-[0.06]`.
- Tool scratches: thin lines in `#5a3a0a` at `opacity-[0.08]`.

### 12) Candlemaking Workshop Button

Warm button with a wax-sealed pressed feel.

- `bg-gradient-to-b from-[#d4a848] to-[#c89030] text-[#2a1a0a] font-semibold px-6 py-3 rounded-lg border-2 border-t-[#e0c060] border-b-[#a87820] shadow-[0_3px_0_#a87820,inset_0_1px_0_rgba(245,232,192,0.3)] hover:translate-y-0.5 hover:shadow-[0_1px_0_#a87820] active:shadow-none transition-all duration-200`.

### 13) Wax Seal Divider

Decorative divider shaped like a pressed wax seal — the maker's mark.

- `h-3 w-3 mx-auto rounded-full bg-[#c44040] shadow-[0_1px_3px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.2)]` with optional embossed initial letter in lighter red.

## Color Palette System

### Core Candlemaking Workshop Palette

| Color | Hex | Material | Role |
|---|---|---|---|
| Beeswax Gold | `#d4a848` | Raw beeswax foundation | Primary surface, main craft color |
| Candle Cream | `#f5e8c0` | Poured paraffin wax | Light surfaces, candle bodies |
| Wick Black | `#1a1a1a` | Braided cotton wick | Text, thin accents, wicks |
| Fragrance Amber | `#c48020` | Concentrated oil in amber glass | Oil bottle accents, warm highlights |
| Dye Red | `#c44040` | Concentrated red wax dye chip | Color accent, warm pop |
| Dye Blue | `#2a4a8a` | Concentrated blue wax dye chip | Cool accent, contrast |
| Wax Drip Warm | `#e0c060` | Freshly melted warm wax | Drip accents, liquid wax |
| Workshop Wood | `#8a6a3a` | Worn workbench surface | Workspace panels, rack frames |
| Wax Dark | `#b88028` | Deep beeswax shadow | Borders, depth accents |
| Soot Black | `#2a1a0a` | Candle soot residue | Deep backgrounds, text on light |
| Wax Sheen | `#f0e0a0` | Wet wax reflection | Highlights, sheen overlays |

Rules: Warm golden tones dominate — beeswax gold and candle cream are the primary duo. Wick black and soot black provide grounding contrast. Dye red and dye blue appear only as concentrated pigment accents — small, intense pops against the golden field. Fragrance amber bridges the gap between gold and brown. The palette should feel like a room lit entirely by candlelight — warm, golden, intimate, with every surface reflecting that amber glow. Never cool-toned or stark — everything is warmed by wax and flame.

## Typography Recommendations

Candlemaking workshop typography blends warm condensed workshop labels with elegant stationery forms:

- **Display headings:** Playfair Display, Cormorant Garamond, or Libre Baskerville (elegant, warm serif — the feel of hand-lettered candle labels).
- **Workshop labels:** Josefin Sans or Raleway (clean, modern, like batch tags on dipping racks).
- **Body:** Lora, Source Serif Pro, or Merriweather (warm readable serif for descriptions and recipes).
- **Fragrance names:** Cormorant Garamond italic (the elegant, scented feel of a fragrance oil label).
- **Batch numbers:** monospace with warm color `font-mono text-xs text-[#8a6a3a] tracking-widest` (like stamped production tags).
- **Labels:** `font-serif font-medium text-sm tracking-wide text-[#2a1a0a]` for workshop shelf labels.
- Avoid heavy slab serifs, aggressive display fonts, or anything cold. Candlelight is warm and intimate — typography should feel like it was written by hand in amber light.

## Component Architecture Pattern

1. Warm beeswax gradient background (the workshop walls and air).
2. Dipping rack silhouette as a central or header element (the heart of the craft).
3. Candlelight glow radial gradients on key areas (living flame light).
4. Beeswax hexagonal pattern on surfaces (the foundation of the bee).
5. Wax drip cascade accents on edges and borders (gravity pulling warm wax down).
6. Wick spool thread as thin line accents (the thread connecting everything).
7. Fragrance oil bottle shapes as icons or badges (scent identity).
8. Cooling rack grid for display areas (where finished candles rest).
9. Dye chip color dots for category marking (concentrated pigment accents).
10. Workshop wood texture for workspace panels (the maker's bench).
11. Wax seal dividers between sections (the maker's stamp of quality).

## Interaction Rules

- Default state: warm, glowing, gently flickering. Candlelight is the constant.
- Hover: warm glow intensifies (`hover:brightness-110 hover:saturate-110`), like a candle flame growing brighter when the room stills.
  - `hover:brightness-110 hover:saturate-110 hover:shadow-[0_4px_16px_rgba(212,168,72,0.3)] transition-all duration-300`.
- Active: pressed-into-wax feel (`active:translate-y-0.5 active:scale-[0.99] active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)]`).
- Focus: warm amber ring `focus:ring-2 focus:ring-[#d4a848]/60 focus:ring-offset-2 focus:ring-offset-[#f5e8c0]`.
- Transitions: `transition-all duration-300 ease-in-out` (smooth, like warm wax flowing — organic and flowing).
- Drip animation: slow gravity pull downward, 4s cycle with ease-in (wax accelerates as it flows).
- Candle dip: up-and-down rack motion, 4s cycle with staggered delays across candles.
- Flame flicker: subtle opacity and scale oscillation, 2-3s cycle, organic easing.
- No sharp snaps or instant changes. Wax flows with patience — all transitions should feel like warm liquid moving under gravity.

## Reusable Tailwind Tokens

- Beeswax surface: `bg-gradient-to-b from-[#e0c060] via-[#d4a848] to-[#c89838]`
- Wax sheen: `bg-[radial-gradient(ellipse_at_30%_40%,rgba(245,232,192,0.2)_0%,transparent_60%)]`
- Candlelight glow: `bg-[radial-gradient(circle_at_center,rgba(224,192,96,0.25)_0%,rgba(224,192,96,0.08)_40%,transparent_70%)]`
- Soot background: `bg-gradient-to-b from-[#2a1a0a] via-[#1a1008] to-[#0a0804]`
- Workshop wood: `bg-gradient-to-b from-[#8a6a3a] to-[#7a5a2a]`
- Candlemaking button: `bg-gradient-to-b from-[#d4a848] to-[#c89030] text-[#2a1a0a] font-semibold rounded-lg border-2 border-t-[#e0c060] border-b-[#a87820] shadow-[0_3px_0_#a87820]`
- Wax drip: SVG tear-drop paths from top edge with varying opacity in `#d4a848` to `#e0c060`
- Wick line: `h-px bg-[#1a1a1a]` or SVG stroke `#1a1a1a` at width 0.5-1
- Fragrance amber: `bg-[#c48020]` with `shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]`
- Dye chip: `bg-[color] rounded-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_1px_3px_rgba(0,0,0,0.2)] border`
- Cooling rack: parallel `h-px bg-[#aaa]` lines with vertical `w-px bg-[#999] opacity-60` cross supports
- Hexagonal pattern: SVG `<polygon>` tessellation at `opacity-[0.08]-[0.12]`
- Wax seal: `rounded-full bg-[#c44040] shadow-[0_1px_3px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.2)]`
- Candle dip keyframes: `@keyframes candle-dip { 0%,100%{transform:translateY(0)} 40%,60%{transform:translateY(30px)} }`
- Flame flicker: `@keyframes flame-flicker { 0%{opacity:0.7;transform:scaleX(1)} 100%{opacity:0.9;transform:scaleX(1.1)} }`

## Quality Checklist (must pass)

- At least one dipping rack silhouette (horizontal bar with hanging taper candles).
- Beeswax hexagonal pattern present on at least one surface (the foundation sheet texture).
- Candlelight glow radial gradient present (the ambient warmth of the workshop).
- Wax drip cascade accent on at least one edge or border (gravity-driven warm wax).
- Wick spool or wick thread accent present (the thin dark thread connecting candle to maker).
- Fragrance oil bottle shape as icon or decorative element (the scent identity).
- At least one poured votive or candle body with melted wax pool visible.
- Color dye chip accents present (small concentrated pigment squares or dots).
- Cooling rack grid pattern on at least one display area (where candles set).
- Workshop wood texture on workspace panels (the maker's bench surface).
- Color palette is warm and golden — beeswax, cream, amber, with wick-black contrast.
- Typography uses warm serif or elegant condensed style.
- Interactions are fluid and warm (no sharp snaps, no cold transitions).
- The aesthetic reads as a candlemaking workshop — golden, fragrant, warm, craft-focused.
- At least one wax seal divider or maker's mark element.
- Flame or candle-light animation present (flickering, warm, alive).

## Anti-Patterns

- Cool or synthetic colors (everything is warm — wax, flame, amber, wood).
- Sharp, snappy, or bouncy animations (wax flows with gravity — smooth, warm, downward).
- Flat, untextured surfaces (wax needs sheen, hexagonal pattern, or drip texture).
- Missing flame or light animation (candlelight IS the candlemaking interface).
- Heavy slab-serif or cold sans-serif typography (candlemaking is warm and intimate).
- Plastic or chrome-feeling surfaces (the workshop is wood, wax, glass, and cotton).
- Perfectly geometric candle forms (hand-dipped candles have organic taper and drip marks).
- Missing wick elements (the wick is the structural spine of every candle).
- Digital or UI-chrome-feeling elements (the candlemaking world is analog and fragrant).
- Missing fire or heat references (the flame is the transformative element).
- Monochrome or single-tone palette (candlemaking uses dye pigments against wax gold).
- Pure white or pure black backgrounds (use candle cream `#f5e8c0` or soot black `#2a1a0a`).
- Missing fragrance or scent-related elements (the aromatic dimension is core to candlemaking).
- Cold blue lighting effects (all light in the workshop is warm amber from candle flames).

## Accessibility Considerations

- Candle cream (`#f5e8c0`) with soot black text (`#2a1a0a`) provides excellent contrast (WCAG AAA).
- Beeswax gold (`#d4a848`) requires dark text (`#2a1a0a`) — verify WCAG AA minimum.
- Soot black background (`#2a1a0a`) with candle cream text (`#f5e8c0`) — verify WCAG AAA.
- Dipping rack animations must respect `prefers-reduced-motion` (show candles at mid-dip position without cycling).
- Flame flicker animations must respect `prefers-reduced-motion` (static flame without oscillation).
- Wax drip animations must respect `prefers-reduced-motion` (show drips at final position without animation).
- Candlelight interactive elements need `aria-label` describing their function.
- Decorative dipping rack silhouettes and hexagonal patterns must be `aria-hidden="true"`.
- Focus states must be visible against warm wax surfaces (`focus:ring-2 focus:ring-[#d4a848]/60`).
- Touch targets must meet minimum 44x44px despite organic rounded styling.
- Hexagonal pattern overlays must not reduce text contrast below WCAG AA thresholds.
- Fragrance amber accents must not be the sole indicator of state — pair with text or shape changes.
- Dye chip color indicators must have text labels or `aria-label` for color-blind users.
- Wax glow effects must not obscure interactive elements underneath.
