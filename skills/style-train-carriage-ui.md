---
name: train-carriage-ui
description: Build train carriage UI components (velvet seat surface, luggage rack shelf, window blur motion, dining table setting, berth curtain partition, compartment door panel, platform view perspective) with vintage railway interior aesthetics, comfortable seating textures, warm wood paneling, brass fittings, and the rhythmic journey of train travel. Trigger this skill when the user asks for train carriage design, railway interior UI, velvet seat components, luggage rack layout, window motion blur effect, dining table interface, berth curtain partition, compartment door design, vintage railway carriage aesthetic, train compartment layout, or rail journey interior.
---

# Train Carriage Interior UI

Use this skill to design and implement warm, atmospheric interfaces inspired by vintage railway carriage interiors: deep velvet upholstery with button tufting, polished wood luggage racks with leather bags, windows with passing-landscape motion blur, white-cloth dining tables with meal settings, fabric berth curtains with tie-backs, wood-panel compartment doors with frosted windows, and platform views seen through carriage glass. The aesthetic is intimate transit -- deep jewel-toned upholstery against warm wood paneling, brass fittings catching warm light, cream curtains filtering soft daylight, and the hypnotic blur of countryside streaming past the window.

## Non-Negotiable Foundations

- The velvet upholstery texture (deep color with visible button tufting pattern) must appear in at least one element per view -- it is the signature material identity of the carriage interior.
- Wood grain paneling (warm-toned with visible grain lines) must frame at least one structural element per page -- the carriage is built from wood and brass, not steel and glass.
- The window blur motif (landscape motion streak behind brass-framed glass) must appear in at least one element per view -- it is the visual signature of movement and journey.
- The palette must remain upholstery-dark dominant: deep velvet reds and blues with warm wood browns, brass warmth, cream fabric accents, and dining whites. No cold industrial grays, no neon, no digital-feeling saturation.
- Brass fittings (door handles, window latches, rack brackets, lamp fixtures) must appear as accent elements on at least two components per page.
- The atmosphere must feel warm, intimate, and gently in motion -- a private compartment on a long journey. Comfort and enclosure are features, not bugs.
- All motion-blur and sway animations must respect `prefers-reduced-motion` and degrade to static compositions.

## Core Material Recipes

### 1) Velvet Seat Surface

Deep colored upholstery with button tufting pattern, the signature comfort element of the carriage.

```html
<div class="relative w-full h-44 bg-gradient-to-b from-[#6a1a2a] via-[#5a1525] to-[#4a1020] rounded-xl overflow-hidden shadow-[0_4px_16px_rgba(106,26,42,0.3)]">
  <!-- Button tufting grid -->
  <div class="absolute inset-x-8 top-6 grid grid-cols-4 gap-x-10 gap-y-5">
    <div class="w-3 h-3 rounded-full bg-[#3a0a12] shadow-[inset_0_1px_2px_rgba(0,0,0,0.6),0_1px_1px_rgba(255,255,255,0.05)] border border-[#2a0810]"></div>
    <div class="w-3 h-3 rounded-full bg-[#3a0a12] shadow-[inset_0_1px_2px_rgba(0,0,0,0.6),0_1px_1px_rgba(255,255,255,0.05)] border border-[#2a0810]"></div>
    <div class="w-3 h-3 rounded-full bg-[#3a0a12] shadow-[inset_0_1px_2px_rgba(0,0,0,0.6),0_1px_1px_rgba(255,255,255,0.05)] border border-[#2a0810]"></div>
    <div class="w-3 h-3 rounded-full bg-[#3a0a12] shadow-[inset_0_1px_2px_rgba(0,0,0,0.6),0_1px_1px_rgba(255,255,255,0.05)] border border-[#2a0810]"></div>
    <div class="w-3 h-3 rounded-full bg-[#3a0a12] shadow-[inset_0_1px_2px_rgba(0,0,0,0.6),0_1px_1px_rgba(255,255,255,0.05)] border border-[#2a0810]"></div>
    <div class="w-3 h-3 rounded-full bg-[#3a0a12] shadow-[inset_0_1px_2px_rgba(0,0,0,0.6),0_1px_1px_rgba(255,255,255,0.05)] border border-[#2a0810]"></div>
    <div class="w-3 h-3 rounded-full bg-[#3a0a12] shadow-[inset_0_1px_2px_rgba(0,0,0,0.6),0_1px_1px_rgba(255,255,255,0.05)] border border-[#2a0810]"></div>
    <div class="w-3 h-3 rounded-full bg-[#3a0a12] shadow-[inset_0_1px_2px_rgba(0,0,0,0.6),0_1px_1px_rgba(255,255,255,0.05)] border border-[#2a0810]"></div>
  </div>
  <!-- Diamond tufting lines connecting buttons -->
  <svg class="absolute inset-0 w-full h-full opacity-[0.12]" style="pointer-events: none;">
    <line x1="15%" y1="18%" x2="35%" y2="28%" stroke="#2a0810" stroke-width="0.5"/>
    <line x1="35%" y1="18%" x2="55%" y2="28%" stroke="#2a0810" stroke-width="0.5"/>
    <line x1="55%" y1="18%" x2="75%" y2="28%" stroke="#2a0810" stroke-width="0.5"/>
    <line x1="15%" y1="45%" x2="35%" y2="55%" stroke="#2a0810" stroke-width="0.5"/>
    <line x1="35%" y1="45%" x2="55%" y2="55%" stroke="#2a0810" stroke-width="0.5"/>
    <line x1="55%" y1="45%" x2="75%" y2="55%" stroke="#2a0810" stroke-width="0.5"/>
  </svg>
  <!-- Seat cushion edge highlight -->
  <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7a2035] via-[#8a2840] to-[#7a2035]"></div>
  <!-- Seat back fold line -->
  <div class="absolute top-1/2 left-4 right-4 h-px bg-[#4a1020] opacity-40"></div>
</div>
```

### 2) Luggage Rack Shelf

Overhead shelf with leather bags and brass brackets, the practical storage element above the seats.

```html
<div class="relative w-full h-28 bg-[#5a3a1a] overflow-hidden rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
  <!-- Wood plank texture (horizontal grain) -->
  <div class="absolute inset-0 opacity-[0.15]" style="background-image: repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.15) 3px, rgba(0,0,0,0.15) 3.5px);"></div>
  <!-- Shelf plank surface -->
  <div class="absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-[#7a5a2a] to-[#6a4a2a]"></div>
  <div class="absolute inset-x-0 top-3 h-px bg-[#5a3a1a]"></div>
  <!-- Left brass bracket -->
  <div class="absolute top-3 left-4 w-3 h-10 bg-gradient-to-b from-[#b87333] to-[#a06028] rounded-b-sm shadow-[1px_2px_4px_rgba(0,0,0,0.3)]"></div>
  <div class="absolute top-3 left-3 w-5 h-2 bg-[#b87333] rounded-t-sm"></div>
  <!-- Right brass bracket -->
  <div class="absolute top-3 right-4 w-3 h-10 bg-gradient-to-b from-[#b87333] to-[#a06028] rounded-b-sm shadow-[1px_2px_4px_rgba(0,0,0,0.3)]"></div>
  <div class="absolute top-3 right-3 w-5 h-2 bg-[#b87333] rounded-t-sm"></div>
  <!-- Center brass bracket -->
  <div class="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-10 bg-gradient-to-b from-[#b87333] to-[#a06028] rounded-b-sm shadow-[1px_2px_4px_rgba(0,0,0,0.3)]"></div>
  <!-- Leather bag (left) -->
  <div class="absolute top-4 left-8 w-14 h-10 bg-gradient-to-b from-[#5a3a20] to-[#4a2a15] rounded-sm shadow-[2px_2px_6px_rgba(0,0,0,0.4)]">
    <div class="absolute top-3 left-2 w-4 h-0.5 bg-[#b87333] rounded-full"></div>
  </div>
  <!-- Hat box (center) -->
  <div class="absolute top-4 left-1/2 -translate-x-1/2 w-10 h-8 bg-gradient-to-b from-[#e8dcc0] to-[#d4c8a8] rounded-sm shadow-[2px_2px_6px_rgba(0,0,0,0.3)]">
    <div class="absolute inset-x-1 top-1/2 -translate-y-1/2 h-px bg-[#c4b898]"></div>
  </div>
  <!-- Small suitcase (right) -->
  <div class="absolute top-5 right-8 w-12 h-9 bg-gradient-to-b from-[#6a1a2a] to-[#5a1525] rounded-sm shadow-[2px_2px_6px_rgba(0,0,0,0.4)]">
    <div class="absolute top-1.5 left-1/2 -translate-x-1/2 w-3 h-1 bg-[#b87333] rounded-sm"></div>
  </div>
</div>
```

### 3) Window Blur (Passing Landscape)

Brass-framed window with motion-blurred countryside streaking past, the visual signature of journey.

```html
<style>
@keyframes landscape-scroll { 0% { background-position: 0 0; } 100% { background-position: -200px 0; } }
@keyframes gentle-sway { 0%, 100% { transform: translateX(0) rotate(0deg); } 25% { transform: translateX(1px) rotate(0.1deg); } 75% { transform: translateX(-1px) rotate(-0.1deg); } }
</style>
<div class="relative w-full h-56 rounded-lg overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.3)]" style="animation: gentle-sway 4s ease-in-out infinite;">
  <!-- Outside landscape (blurred motion) -->
  <div class="absolute inset-0" style="animation: landscape-scroll 8s linear infinite;">
    <div class="absolute inset-0 bg-gradient-to-b from-[#87a5c0] via-[#a0b8c8] to-[#607050] opacity-60"></div>
    <div class="absolute inset-0 opacity-[0.4]" style="background-image: repeating-linear-gradient(0deg, transparent 0px, transparent 8px, #5a7a4a 8px, #5a7a4a 10px, transparent 10px, transparent 18px, #4a6a3a 18px, #4a6a3a 19px, transparent 19px, transparent 25px, #6a8a5a 25px, #6a8a5a 27px); filter: blur(2px);"></div>
    <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#4a6a3a] via-[#5a7a4a] to-[#6a8a5a] opacity-50"></div>
    <div class="absolute bottom-[35%] left-0 right-0 h-8 bg-[#3a5a2a] opacity-30" style="filter: blur(4px);"></div>
    <div class="absolute top-0 left-0 right-0 h-2/5 bg-gradient-to-b from-[#87a5c0]/30 to-transparent"></div>
  </div>
  <!-- Window glass tint overlay -->
  <div class="absolute inset-0 bg-[#e8dcc0]/[0.06]"></div>
  <!-- Brass window frame -->
  <div class="absolute inset-0 border-[5px] border-[#5a3a1a] rounded-lg shadow-[inset_0_0_10px_rgba(0,0,0,0.3)]"></div>
  <div class="absolute inset-[5px] border border-[#b87333]/30 rounded-md"></div>
  <!-- Top frame wood detail -->
  <div class="absolute top-0 left-0 right-0 h-[5px] bg-gradient-to-b from-[#7a5a2a] to-[#5a3a1a] rounded-t-lg"></div>
  <!-- Brass latch (center top) -->
  <div class="absolute top-[2px] left-1/2 -translate-x-1/2 w-8 h-3 bg-gradient-to-b from-[#b87333] to-[#a06028] rounded-b-sm shadow-[0_2px_4px_rgba(0,0,0,0.3)]"></div>
  <!-- Bottom sill -->
  <div class="absolute bottom-0 left-0 right-0 h-[5px] bg-gradient-to-t from-[#4a2a10] to-[#5a3a1a] rounded-b-lg"></div>
  <!-- Curtain pulls (edges) -->
  <div class="absolute top-0 bottom-0 left-[5px] w-3 bg-gradient-to-r from-[#e8dcc0] to-[#d4c8a8] opacity-30"></div>
  <div class="absolute top-0 bottom-0 right-[5px] w-3 bg-gradient-to-l from-[#e8dcc0] to-[#d4c8a8] opacity-30"></div>
</div>
```

### 4) Dining Table Setting

White cloth with meal setting, the civilized heart of the dining car.

```html
<div class="relative w-full h-48 bg-gradient-to-b from-[#4a2a10] via-[#5a3a1a] to-[#4a2a10] rounded-lg overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
  <!-- Wood table surface -->
  <div class="absolute inset-x-8 top-4 bottom-4 bg-gradient-to-b from-[#6a4a2a] to-[#5a3a1a] rounded shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
    <div class="absolute inset-0 opacity-[0.12]" style="background-image: repeating-linear-gradient(2deg, transparent 0px, transparent 6px, rgba(0,0,0,0.2) 6px, rgba(0,0,0,0.2) 6.5px);"></div>
  </div>
  <!-- White tablecloth (center rectangle) -->
  <div class="absolute inset-x-14 top-8 bottom-8 bg-[#f5f5f5] rounded-sm shadow-[0_1px_4px_rgba(0,0,0,0.15)]">
    <div class="absolute inset-1 border border-[#e0e0e0] rounded-sm"></div>
    <!-- Plate -->
    <div class="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white shadow-[0_1px_4px_rgba(0,0,0,0.1),inset_0_0_0_2px_#f0f0f0,inset_0_0_0_4px_#e8e8e8]"></div>
    <div class="absolute top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border border-[#d8d8d8]/50"></div>
    <!-- Fork (left) -->
    <div class="absolute top-5 left-[calc(50%-42px)] w-0.5 h-12 bg-[#c0c0c0] rounded-full"></div>
    <div class="absolute top-4 left-[calc(50%-43px)] w-0.5 h-3 bg-[#c0c0c0] rounded-t-full"></div>
    <div class="absolute top-4 left-[calc(50%-41px)] w-0.5 h-3 bg-[#c0c0c0] rounded-t-full"></div>
    <!-- Knife (right) -->
    <div class="absolute top-5 left-[calc(50%+36px)] w-0.5 h-12 bg-[#c0c0c0] rounded-full"></div>
    <div class="absolute top-4 left-[calc(50%+34px)] w-2.5 h-3 bg-[#c8c8c8] rounded-t-sm"></div>
    <!-- Glass -->
    <div class="absolute bottom-4 right-5 w-5 h-7 bg-gradient-to-b from-[#c8d8e8]/30 to-[#b0c0d0]/20 rounded-b-lg border border-[#c0d0e0]/30"></div>
  </div>
  <!-- Brass lamp base (partial, top center) -->
  <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-4 bg-gradient-to-b from-[#b87333] to-[#a06028] rounded-b-sm shadow-[0_2px_6px_rgba(0,0,0,0.3)]"></div>
  <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-12 bg-[#b87333]/10 rounded-full blur-xl"></div>
</div>
```

### 5) Berth Curtain

Fabric partition with tie-back, the privacy element of sleeper carriages.

```html
<div class="relative w-full h-64 bg-[#2a2020] overflow-hidden rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
  <!-- Curtain rail (brass rod) -->
  <div class="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-[#b87333] to-[#a06028] rounded-b-sm shadow-[0_2px_4px_rgba(0,0,0,0.3)]"></div>
  <div class="absolute top-0 left-1 w-4 h-4 bg-[#b87333] rounded-full shadow-sm"></div>
  <div class="absolute top-0 right-1 w-4 h-4 bg-[#b87333] rounded-full shadow-sm"></div>
  <!-- Curtain fabric (draped left side) -->
  <div class="absolute top-2 left-0 w-[60%] bottom-0 bg-gradient-to-r from-[#e8dcc0] via-[#d4c8a8] to-[#e8dcc0] opacity-90">
    <div class="absolute inset-0 opacity-[0.08]" style="background-image: repeating-linear-gradient(90deg, transparent 0px, transparent 12px, rgba(0,0,0,0.2) 12px, rgba(0,0,0,0.2) 13px, transparent 13px, transparent 24px);"></div>
    <div class="absolute right-0 top-0 bottom-0 w-1 bg-[#c4b898] opacity-40"></div>
  </div>
  <!-- Curtain fabric (gathered right side) -->
  <div class="absolute top-2 right-0 w-[35%] bottom-0 bg-gradient-to-l from-[#e8dcc0] via-[#d4c8a8] to-[#e0d4b8] opacity-90 rounded-bl-lg">
    <div class="absolute inset-0 opacity-[0.08]" style="background-image: repeating-linear-gradient(90deg, transparent 0px, transparent 10px, rgba(0,0,0,0.2) 10px, rgba(0,0,0,0.2) 11px, transparent 11px, transparent 20px);"></div>
  </div>
  <!-- Brass tie-back hook -->
  <div class="absolute top-[40%] left-[52%] w-4 h-4 border-2 border-[#b87333] rounded-full"></div>
  <div class="absolute top-[40%] left-[52%] translate-x-3.5 w-2 h-1 bg-[#b87333] rounded-r-sm"></div>
  <!-- Curtain ring hooks on rail -->
  <div class="absolute top-0.5 left-[15%] w-2 h-3 border border-[#a06028] rounded-b-full"></div>
  <div class="absolute top-0.5 left-[30%] w-2 h-3 border border-[#a06028] rounded-b-full"></div>
  <div class="absolute top-0.5 left-[45%] w-2 h-3 border border-[#a06028] rounded-b-full"></div>
  <!-- Warm interior light through curtain -->
  <div class="absolute top-2 left-[20%] w-20 h-32 bg-[#f5e8d0]/10 rounded-full blur-2xl"></div>
</div>
```

### 6) Compartment Door

Wood panel with frosted glass window, the entrance to the private world of the compartment.

```html
<div class="relative w-28 h-64 mx-auto overflow-hidden rounded-lg shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
  <!-- Door wood panel -->
  <div class="absolute inset-0 bg-gradient-to-b from-[#6a4a2a] via-[#5a3a1a] to-[#4a2a10]">
    <div class="absolute inset-0 opacity-[0.12]" style="background-image: repeating-linear-gradient(178deg, transparent 0px, transparent 8px, rgba(0,0,0,0.15) 8px, rgba(0,0,0,0.15) 8.5px);"></div>
  </div>
  <div class="absolute inset-0 border-2 border-[#4a2a10] rounded-lg"></div>
  <!-- Upper panel: frosted glass window -->
  <div class="absolute inset-x-3 top-3 h-[40%] bg-[#c8c0b0]/[0.35] rounded-sm shadow-[inset_0_1px_4px_rgba(0,0,0,0.2)] border border-[#b87333]/40">
    <div class="absolute inset-0 bg-gradient-to-br from-[#e8dcc0]/20 to-[#b8a890]/10"></div>
  </div>
  <!-- Middle decorative panel (recessed) -->
  <div class="absolute inset-x-4 top-[48%] h-[22%] border border-[#7a5a2a]/40 rounded-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]">
    <div class="absolute inset-1 border border-[#7a5a2a]/20 rounded-sm"></div>
  </div>
  <!-- Lower panel -->
  <div class="absolute inset-x-4 bottom-3 h-[20%] bg-[#5a3a1a]/40 border border-[#7a5a2a]/30 rounded-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.15)]"></div>
  <!-- Brass door handle -->
  <div class="absolute top-[55%] right-3 w-4 h-8 bg-gradient-to-b from-[#b87333] to-[#a06028] rounded-sm shadow-[2px_2px_4px_rgba(0,0,0,0.4)]"></div>
  <div class="absolute top-[53%] right-2 w-6 h-12 bg-gradient-to-b from-[#b87333]/60 to-[#a06028]/60 rounded-sm"></div>
  <!-- Keyhole -->
  <div class="absolute top-[72%] right-[14px] w-2 h-3 bg-[#2a1a0a] rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]"></div>
  <!-- Hinges -->
  <div class="absolute top-6 left-0 w-2 h-6 bg-[#b87333] rounded-r-sm"></div>
  <div class="absolute bottom-6 left-0 w-2 h-6 bg-[#b87333] rounded-r-sm"></div>
</div>
```

### 7) Platform View (Through Window)

Looking out from inside the carriage at a departing platform, framed by the window.

```html
<div class="relative w-full h-52 rounded-lg overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
  <!-- Platform scene (exterior) -->
  <div class="absolute inset-0 bg-gradient-to-b from-[#8a8a7a]/40 via-[#a0a090]/30 to-[#6a6a5a]/50"></div>
  <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-b from-[#8a8a7a] to-[#7a7a6a]"></div>
  <!-- Platform edge line (yellow safety) -->
  <div class="absolute bottom-[33%] left-0 right-0 h-1 bg-[#c8a840]"></div>
  <!-- Distant station structure -->
  <div class="absolute top-[10%] left-[10%] right-[10%] h-[25%] bg-[#7a7a6a]/30 rounded-t-sm">
    <div class="absolute bottom-0 left-[10%] w-1 h-8 bg-[#5a5a4a]/40"></div>
    <div class="absolute bottom-0 left-[40%] w-1 h-8 bg-[#5a5a4a]/40"></div>
    <div class="absolute bottom-0 right-[10%] w-1 h-8 bg-[#5a5a4a]/40"></div>
  </div>
  <!-- Platform clock (distant) -->
  <div class="absolute top-[15%] right-[20%] w-6 h-6 rounded-full bg-[#f5f0e0] shadow-sm">
    <div class="absolute inset-0.5 rounded-full border border-[#2a2a2a]/20"></div>
  </div>
  <!-- Lamp post -->
  <div class="absolute top-[20%] left-[25%] w-0.5 h-16 bg-[#5a5a4a]"></div>
  <div class="absolute top-[18%] left-[22%] w-6 h-3 bg-[#5a5a4a] rounded-b-sm"></div>
  <div class="absolute top-[17%] left-[23%] w-4 h-2 bg-[#c8b860]/30 rounded-full blur-sm"></div>
  <!-- Carriage interior framing (window surround) -->
  <div class="absolute inset-0 border-[6px] border-[#5a3a1a] rounded-lg shadow-[inset_0_0_20px_rgba(0,0,0,0.3)]"></div>
  <!-- Interior wood panel (bottom sill) -->
  <div class="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#4a2a10] to-[#5a3a1a]">
    <div class="absolute inset-0 opacity-[0.1]" style="background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 2.5px);"></div>
  </div>
  <!-- Interior reflection on glass -->
  <div class="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent"></div>
  <!-- Curtain edges -->
  <div class="absolute top-0 bottom-8 left-0 w-4 bg-gradient-to-r from-[#e8dcc0]/40 to-transparent"></div>
  <div class="absolute top-0 bottom-8 right-0 w-4 bg-gradient-to-l from-[#e8dcc0]/40 to-transparent"></div>
</div>
```

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Velvet Red | `#6a1a2a` | Primary upholstery color, seat surfaces, cushion backgrounds, dominant warm dark |
| Velvet Blue | `#1a2a4a` | Secondary upholstery, alternate seat color, deep cool accent, sleeping berth fabric |
| Luggage Rack Wood | `#6a4a2a` | Wood paneling, luggage rack shelves, compartment walls, structural warmth |
| Window Frame Brass | `#b87333` | Window frames, door handles, rack brackets, lamp fixtures, all metallic accents |
| Curtain Cream | `#e8dcc0` | Curtains, fabric partitions, berth drapes, soft textile warmth, secondary light |
| Platform Stone | `#8a8a7a` | Platform surfaces, exterior stone, neutral outside-world tone, platform structures |
| Dining White | `#f5f5f5` | Tablecloths, plate surfaces, clean textile elements, dining car highlights |
| Carriage Green | `#2a5a3a` | Passing landscape foliage, seat trim accents, carriage route-map color, nature blur |

Rules: Velvet red dominates upholstery and interior warmth. Luggage rack wood provides all structural and wall surfaces -- the carriage interior is built from wood, not steel. Window frame brass appears on every hardware element: latches, handles, brackets, hinges, lamp fittings. Curtain cream softens every partition and textile surface. Dining white is reserved exclusively for the dining car tablecloth and plate setting -- it is civilized white, not digital white. Platform stone represents the outside world visible through windows -- cooler, more neutral, more distant. Carriage green appears only in passing landscape and occasional trim -- it is the world outside the window, not the world inside. The palette should feel like sitting in a well-appointed compartment on a long journey: warm, enclosed, intimate, with the cool outside world visible only through brass-framed glass.

## Typography Recommendations

- **Display:** Playfair Display, Cormorant Garamond (serif elegance -- like engraved carriage nameplates and vintage railway company lettering).
- **Body:** Source Sans 3, Lato (warm, readable sans-serif for journey information, dining menus, and schedule text).
- **Compartment Label:** `font-serif text-[#e8dcc0] text-lg tracking-wide` (carriage names and class designations on door plates).
- **Seat Number:** `font-mono text-[#b87333] text-sm font-bold` (brass-engraved seat numbers on upholstery placards).
- **Dining Menu:** `font-serif text-[#5a3a1a] text-sm italic tracking-wide` (elegant menu items on the white cloth).
- **Window Placard:** `font-sans text-[#4a2a10] text-xs uppercase tracking-[0.2em] font-medium` (route information on window surround).
- **Berth Label:** `font-sans text-[#6a4a2a] text-xs uppercase tracking-[0.15em] font-semibold` (upper/lower berth designation on curtain tie-back tag).
- **Platform Info:** `font-mono text-[#8a8a7a] text-xs tracking-wider` (exterior platform data seen through the window, muted and distant).
- Typography should feel like vintage railway typography -- engraved serif for carriage names, warm sans-serif for journey information, monospace for seat numbers and brass placards, italic serif for dining car menus.

## Component Architecture Pattern

- **Velvet Seat Cards:** Deep upholstery-colored containers with button tufting texture, used as content cards, selection panels, and feature highlights.
- **Luggage Rack Headers:** Wood-toned horizontal bars with brass bracket accents, used as section headers, navigation bars, and content dividers.
- **Window Frame Panels:** Brass-bordered containers with blurred landscape backgrounds, used as hero sections, status displays, and atmospheric content wells.
- **Dining Table Containers:** White-cloth centered surfaces with wood table borders, used for focused content presentation, menus, and detailed information.
- **Berth Curtain Dividers:** Fabric-textured vertical partitions with brass hardware, used as modal overlays, content separators, and privacy panels.
- **Compartment Door Modals:** Wood-panel centered elements with frosted glass windows and brass handles, used as dialog boxes and entry-point components.
- **Platform View Footers:** Window-framed exterior scenes with wood interior trim, used as contextual footers and ambient background sections.

## Interaction Rules

- Velvet seat surfaces depress subtly on hover (`translate-y-0.5` with `shadow` reduction) as if weight is placed on cushioning, then spring back on release.
- Brass hardware (handles, latches, brackets) brightens to `#c88340` on hover with a warm glow shadow (`shadow-[0_0_8px_rgba(184,115,51,0.3)]`), suggesting light catching polished metal.
- Window blur landscape scrolls continuously at 8-second cycle for moving train context, pauses at platform stops, resumes on departure.
- Berth curtain parts with a smooth slide animation (400ms ease-out) when toggled, fabric gathering to one side revealing the content behind.
- Compartment door swings with a perspective transform (`rotateY`) from closed to open, mimicking a real hinged door with slight overshoot.
- Dining table items fade in with staggered 100ms delays (plate, then fork, then knife, then glass) suggesting a meal being laid.
- Luggage rack bags shift slightly on hover (1px translate) suggesting the gentle vibration of a moving carriage.
- Platform view elements have parallax depth -- platform scrolls faster than distant station structures when transitioning.
- All motion-blur and sway animations pause when `prefers-reduced-motion` is active and display static final states.
- Curtain fabric has a gentle breathing opacity cycle (0.85 to 0.95 over 6s) suggesting air movement in the compartment.

## Reusable Tailwind Tokens

- Velvet red: `bg-[#6a1a2a]` with gradient `from-[#6a1a2a] via-[#5a1525] to-[#4a1020]`.
- Velvet blue: `bg-[#1a2a4a]` with gradient `from-[#1a2a4a] via-[#152540] to-[#101e35]`.
- Wood panel: `bg-[#6a4a2a]` with grain `opacity-[0.12] repeating-linear-gradient(178deg, ...)` pattern.
- Wood dark: `bg-[#5a3a1a]` for deeper wood surfaces and structural frames.
- Wood frame: `border-[#5a3a1a]` with `shadow-[0_4px_12px_rgba(0,0,0,0.3)]`.
- Brass hardware: `bg-gradient-to-b from-[#b87333] to-[#a06028]` with `shadow-[2px_2px_4px_rgba(0,0,0,0.4)]`.
- Brass accent: `text-[#b87333]` or `border-[#b87333]`.
- Brass glow hover: `hover:shadow-[0_0_8px_rgba(184,115,51,0.3)] hover:text-[#c88340]`.
- Curtain cream: `bg-[#e8dcc0]` with fold pattern `opacity-[0.08] repeating-linear-gradient(90deg, ...)`.
- Curtain fabric: `bg-gradient-to-r from-[#e8dcc0] via-[#d4c8a8] to-[#e8dcc0]`.
- Table white: `bg-[#f5f5f5]` with `shadow-[0_1px_4px_rgba(0,0,0,0.15)]`.
- Platform stone: `bg-[#8a8a7a]`.
- Carriage green: `bg-[#2a5a3a]`.
- Button tuft: `w-3 h-3 rounded-full bg-[#3a0a12] shadow-[inset_0_1px_2px_rgba(0,0,0,0.6),0_1px_1px_rgba(255,255,255,0.05)] border border-[#2a0810]`.
- Seat cushion edge: `h-1 bg-gradient-to-r from-[#7a2035] via-[#8a2840] to-[#7a2035]`.
- Wood grain: `opacity-[0.12]` with `repeating-linear-gradient(178deg, transparent 0px, transparent 8px, rgba(0,0,0,0.15) 8px, rgba(0,0,0,0.15) 8.5px)`.
- Frosted glass: `bg-[#c8c0b0]/[0.35]` with `shadow-[inset_0_1px_4px_rgba(0,0,0,0.2)]`.
- Window brass frame: `border-[5px] border-[#5a3a1a]` with `shadow-[inset_0_0_10px_rgba(0,0,0,0.3)]`.
- Compartment warm glow: `bg-[#f5e8d0]/10 rounded-full blur-2xl`.

## Quality Checklist

- Velvet upholstery texture with visible button tufting pattern is prominent in at least one element per view.
- Wood grain paneling frames at least one structural element per page.
- Window blur motif (motion-streaked landscape in brass frame) appears in at least one element per view.
- Brass fittings appear on at least two components per page as hardware accents.
- Velvet red dominates all upholstery and interior warmth elements.
- Wood tones provide all structural and wall surfaces -- no cold industrial grays.
- Window frame brass appears consistently on latches, handles, brackets, and fixtures.
- Curtain cream softens all textile partitions and fabric surfaces.
- Dining white is reserved for tablecloth and plate settings -- clean but not clinical.
- Platform stone appears only as the outside-world tone visible through windows.
- Carriage green appears in passing landscape and occasional trim only.
- Button tufting has visible diamond connecting lines suggesting deep upholstery.
- Luggage rack shows brass brackets supporting the wood shelf with bags resting on top.
- Compartment door has wood grain, frosted window, brass handle, hinges, and keyhole.
- Berth curtain shows fabric pleats, brass tie-back, and ring hooks on the brass rail.
- Typography feels vintage railway -- engraved serif names, warm sans-serif info, monospace seat numbers.
- The overall aesthetic reads as a warm, intimate carriage interior in motion -- not a station, not a modern train.

## Anti-Patterns

- Cold gray or steel-blue structural elements (carriage interiors are warm wood and brass, not industrial steel).
- Bright white backgrounds (the carriage is upholstered and paneled in dark warm tones, not fluorescent-lit).
- Digital neon or saturated accent colors (the palette is warm jewel tones and natural materials).
- Missing velvet upholstery texture (the deep tufted fabric IS the carriage identity).
- Missing wood grain on structural elements (wood paneling defines the carriage architecture).
- Missing brass hardware details (every handle, latch, bracket, and fixture is brass).
- Flat single-color surfaces without texture (carriage materials have visible grain, weave, and tuft).
- Windows without brass frames (the window frame is the defining architectural detail).
- Curtains without pleat texture (fabric must show its gathered nature).
- Platform stone used as interior color (stone is outside, wood and velvet are inside).
- Pastel or desaturated colors (the palette is deep, warm, and rich -- not washed out).
- Modern sans-serif-only typography (carriage signage and nameplates demand serif and engraved styles).
- Missing window motion blur in journey context (the sense of movement is essential to the carriage experience).
- Compartment door without frosted glass, handle, and hinges (the door must feel like a real physical barrier).
- Smooth continuous animations where mechanical discrete motion fits (curtains slide, doors swing -- they do not interpolate like digital elements).

## Accessibility Considerations

- Curtain slide and door swing animations must respect `prefers-reduced-motion: reduce` -- replace with instant open/closed states, no transform transitions.
- Velvet red `#6a1a2a` text on curtain cream `#e8dcc0` exceeds 8:1 contrast ratio -- use this for all primary interior text.
- Wood dark `#5a3a1a` text on dining white `#f5f5f5` exceeds 10:1 contrast ratio -- safe for all dining car text.
- Brass `#b87333` text on velvet dark backgrounds exceeds 5:1 contrast ratio -- safe for interactive elements and seat numbers.
- Curtain cream `#e8dcc0` on velvet red `#6a1a2a` exceeds 8:1 -- safe for text on upholstery surfaces.
- Platform stone `#8a8a7a` on platform background `#6a6a5a` falls below 3:1 -- never use for text, decorative structural surfaces only.
- Brass `#b87333` on curtain cream `#e8dcc0` falls below 3:1 -- never use brass text on cream curtains or tablecloths.
- Wood grain texture overlays must stay below 0.15 opacity to avoid reducing text legibility on wood surfaces.
- Button tufting patterns must remain decorative only -- do not use tuft dots as interactive targets without additional visible affordance.
- Window blur motion must be subtle enough not to cause visual discomfort -- keep blur filter below 4px and animation speed above 6s per cycle.
- Frosted glass panels in compartment doors must have sufficient opacity (minimum 0.3) to convey the frosted barrier without creating false readability expectations.
- All interactive brass hardware elements must have visible focus indicators -- use `ring-2 ring-[#e8dcc0] ring-offset-2 ring-offset-[#5a3a1a]` on focus-visible.
- Curtain partitions used as modal overlays must trap focus within the revealed content and restore focus to the trigger element on close.
- Landscape motion blur elements must be clearly separated from informational content by the brass window frame border -- content inside the frame, motion outside.
