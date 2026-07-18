---
name: clock-shop-ui
description: Build clock shop UI components (village clockmaker's workshop, grandfather clocks, cuckoo clocks on walls, ticking pendulums, brass gears visible through glass, wall of clocks showing different times, clock repair workbench) with multiple clock face displays, ticking animations, and the whimsical density of a clockmaker's treasure-filled shop. Trigger this skill when the user asks for clock shop design, clockmaker workshop, grandfather clock UI, wall of clocks, ticking pendulum animation, brass gears UI, clock repair workbench, or horologist workshop interfaces.
---

# Clock Shop UI

Use this skill to design and implement interfaces inspired by a village clockmaker's workshop: tall mahogany grandfather clock cases with pendulum windows, walls covered in ticking clocks of different styles, brass gear trains visible through glass panels, a clock repair workbench cluttered with tiny tools, and the whimsical density of a shop overflowing with timepieces. Every surface should feel like aged mahogany, polished brass, and cream clock faces.

## Non-Negotiable Foundations

- The clock shop is a craftsman's treasure trove: a tall grandfather clock dominating one corner, walls dense with clocks of every size and style, and a workbench where gears and springs spill across the surface. Every surface should feel like polished mahogany or warm workshop wood.
- Materials are warm and mechanical: mahogany cases (dark reddish-brown), polished brass (gears, hands, pendulums), cream clock faces (painted dials), and glass display panels (translucent blue-white). The shop has warm ambient light from a single overhead lamp.
- Colors are deep mahogany, brass gold, cream faces, warm workshop brown, and a ticking red accent. The mood is a village clockmaker's workshop at closing time -- warm, dense with ticking, and full of mechanical wonder.
- Motion is essential: pendulums must swing, gears should tick or rotate slowly, and every clock face shows a different time. The shop is alive with asynchronous ticking.
- Typography blends traditional clock-face serif numerals (Roman or Arabic) with hand-painted workshop labels on dark wood.
- The aesthetic is mechanical, warm, and densely packed -- everything should look like a clockmaker's lifelong collection filling every inch of wall and shelf.

## Core Material Recipes

### 1) Grandfather Clock Case (the foundational silhouette)

The signature clock shop element: a tall mahogany case with a visible pendulum window and a clock face at the top.

- Case body: `bg-gradient-to-b from-[#5a2818] via-[#4a2418] to-[#3a1810] border-2 border-t-[#6a3828] border-l-[#6a3828] border-b-[#2a0e06] border-r-[#2a0e06] shadow-[inset_0_2px_8px_rgba(0,0,0,0.4),0_8px_24px_rgba(0,0,0,0.5)]`.
- Pendulum window: `w-20 h-28 bg-gradient-to-b from-[#f0f8ff]/10 to-[#e8f0f8]/5 border-2 border-[#6a3828] rounded-t-lg rounded-b-md mx-auto overflow-hidden relative` with a glass-like sheen: `before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:rounded-lg`.
- Clock face at top: cream dial with brass bezel, centered in the case crown.
- Case crown molding: `h-4 bg-gradient-to-b from-[#6a3828] to-[#5a2818] border-b border-[#3a1810] rounded-t-lg`.

```html
<div class="w-40 h-80 bg-gradient-to-b from-[#5a2818] via-[#4a2418] to-[#3a1810] border-2 border-t-[#6a3828] border-l-[#6a3828] border-b-[#2a0e06] border-r-[#2a0e06] shadow-[inset_0_2px_8px_rgba(0,0,0,0.4),0_8px_24px_rgba(0,0,0,0.5)] rounded-t-lg rounded-b-md relative">
  <div class="h-4 bg-gradient-to-b from-[#6a3828] to-[#5a2818] border-b border-[#3a1810] rounded-t-lg"></div>
  <div class="w-24 h-24 mx-auto mt-2 rounded-full bg-gradient-to-br from-[#f0ead0] to-[#e0d8b0] border-4 border-[#c4a043] flex items-center justify-center shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)]">
    <span class="font-serif text-[#3a2a0a] text-lg font-bold">XII</span>
  </div>
  <div class="w-20 h-28 bg-[#f0f8ff]/10 border-2 border-[#6a3828] rounded-t-lg rounded-b-md mx-auto mt-3 overflow-hidden relative">
    <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
    <div class="clock-shop-pendulum absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-[#c4a043] to-[#8a6a1a]"></div>
    <div class="clock-shop-pendulum absolute top-16 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-gradient-to-br from-[#e8c66a] via-[#c4a043] to-[#8a6a1a] border-2 border-[#6a4a0a] shadow-[0_2px_6px_rgba(0,0,0,0.3)]"></div>
  </div>
</div>
```

### 2) Ticking Pendulum Swing Animation

A slow, deliberate pendulum swing -- the heartbeat of the clock shop.

```css
@keyframes clock-shop-pendulum {
  0%, 100% { transform: rotate(-8deg); }
  50% { transform: rotate(8deg); }
}
.clock-shop-pendulum {
  transform-origin: top center;
  animation: clock-shop-pendulum 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

Pendulum element (inside pendulum window):
```html
<div class="clock-shop-pendulum absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
  <div class="w-0.5 h-24 bg-gradient-to-b from-[#c4a043] to-[#8a6a1a]"></div>
  <div class="w-8 h-8 rounded-full bg-gradient-to-br from-[#e8c66a] via-[#c4a043] to-[#8a6a1a] border-2 border-[#6a4a0a] shadow-[0_2px_8px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,215,0,0.4)]"></div>
</div>
```

### 3) Wall of Clocks Grid

Multiple small clock faces in a dense grid, each showing a different time and style -- the shop's signature display.

- Grid container: `grid grid-cols-3 gap-3 p-4 bg-[#3a2a1a] border-2 border-[#4a3a2a] rounded-lg shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]`.
- Individual clock cell: `w-20 h-20 rounded-full bg-gradient-to-br from-[#f0ead0] to-[#e0d8b0] border-3 border-[#c4a043] shadow-[0_2px_6px_rgba(0,0,0,0.3),inset_0_1px_4px_rgba(0,0,0,0.1)] relative`.
- Each cell shows a different style: some with Roman numerals, some with Arabic, some with dots for hours, some ornate, some plain.

```html
<div class="grid grid-cols-3 gap-3 p-4 bg-[#3a2a1a] border-2 border-[#4a3a2a] rounded-lg shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]">
  <div class="w-20 h-20 rounded-full bg-gradient-to-br from-[#f0ead0] to-[#e0d8b0] border-[3px] border-[#c4a043] shadow-[0_2px_6px_rgba(0,0,0,0.3),inset_0_1px_4px_rgba(0,0,0,0.1)] relative">
    <span class="absolute top-1 left-1/2 -translate-x-1/2 text-[8px] font-serif text-[#3a2a0a]">XII</span>
    <div class="absolute top-1/2 left-1/2 w-0.5 h-6 bg-[#1a1a1a] origin-bottom -translate-x-1/2 -translate-y-full rotate-[30deg]"></div>
    <div class="absolute top-1/2 left-1/2 w-[3px] h-4 bg-[#1a1a1a] origin-bottom -translate-x-1/2 -translate-y-full rotate-[150deg]"></div>
    <div class="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-[#1a1a1a] -translate-x-1/2 -translate-y-1/2"></div>
  </div>
  <!-- Repeat with different rotation angles for hands to show different times -->
</div>
```

### 4) Brass Gear Train (visible through glass)

The mechanical soul of the shop: interlocking brass gears visible through a translucent glass panel.

```html
<div class="w-32 h-32 bg-gradient-to-br from-[#f0f8ff]/15 to-[#e0eaf4]/10 border-2 border-[#6a3828] rounded-lg overflow-hidden relative">
  <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
  <div class="clock-shop-gear absolute top-4 left-4 w-12 h-12 rounded-full border-4 border-[#c4a043] bg-[#c4a043]/20">
    <div class="absolute inset-1 rounded-full border-2 border-[#e8c66a]/40"></div>
    <div class="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-[#8a6a1a] -translate-x-1/2 -translate-y-1/2"></div>
  </div>
  <div class="clock-shop-gear-reverse absolute bottom-4 right-4 w-8 h-8 rounded-full border-3 border-[#c4a043] bg-[#c4a043]/20">
    <div class="absolute inset-1 rounded-full border-2 border-[#e8c66a]/40"></div>
    <div class="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-[#8a6a1a] -translate-x-1/2 -translate-y-1/2"></div>
  </div>
</div>
```

```css
@keyframes clock-shop-gear {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes clock-shop-gear-reverse {
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
}
.clock-shop-gear {
  animation: clock-shop-gear 8s linear infinite;
}
.clock-shop-gear-reverse {
  animation: clock-shop-gear-reverse 6s linear infinite;
}
```

### 5) Clock Face Hands (hour/minute with center pivot)

Proper clock hands rotating from center, with a brass pivot cap.

- Hour hand: `absolute bottom-1/2 left-1/2 w-[3px] h-[30%] bg-[#1a1a1a] origin-bottom rounded-full -translate-x-1/2`.
- Minute hand: `absolute bottom-1/2 left-1/2 w-[2px] h-[40%] bg-[#1a1a1a] origin-bottom rounded-full -translate-x-1/2`.
- Center pivot: `absolute top-1/2 left-1/2 w-2.5 h-2.5 rounded-full bg-[#c4a043] border border-[#8a6a1a] -translate-x-1/2 -translate-y-1/2 z-10`.

Hands rotate using `rotate-[Xdeg]` where X is calculated from the desired time:
- Hour angle: `(hours % 12) * 30 + minutes * 0.5`
- Minute angle: `minutes * 6`

### 6) Clock Repair Workbench

A warm wooden workbench surface cluttered with tiny brass tools and clock parts.

- Bench surface: `bg-gradient-to-b from-[#6a5a3a] to-[#5a4a2a] border-2 border-t-[#7a6a4a] border-b-[#3a2a1a] rounded-t-lg`.
- Tool tray: `bg-[#3a2a1a] border border-[#4a3a2a] rounded p-2`.
- Tiny tools: small SVG wrench, screwdriver, tweezers in brass tones.
- Scattered gears: small brass circles at various sizes scattered on the surface.

```html
<div class="w-full h-24 bg-gradient-to-b from-[#6a5a3a] to-[#5a4a2a] border-2 border-t-[#7a6a4a] border-b-[#3a2a1a] rounded-t-lg relative overflow-hidden">
  <div class="absolute bottom-2 left-4 w-10 h-6 bg-[#3a2a1a] border border-[#4a3a2a] rounded flex items-center gap-1 px-1">
    <div class="w-3 h-1 bg-[#c4a043] rounded-full"></div>
    <div class="w-5 h-0.5 bg-[#8a7a5a] rounded-full"></div>
  </div>
  <div class="absolute bottom-3 right-8 w-5 h-5 rounded-full border-2 border-[#c4a043] bg-[#c4a043]/10"></div>
  <div class="absolute bottom-4 right-16 w-3 h-3 rounded-full border border-[#c4a043] bg-[#c4a043]/10"></div>
</div>
```

### 7) Brass Gear Tooth Detail

Individual gear with visible teeth for close-up mechanical detail.

```html
<svg viewBox="0 0 40 40" class="w-10 h-10 clock-shop-gear">
  <circle cx="20" cy="20" r="14" fill="#c4a043" fill-opacity="0.2" stroke="#c4a043" stroke-width="2"/>
  <circle cx="20" cy="20" r="10" fill="none" stroke="#e8c66a" stroke-width="1" stroke-opacity="0.4"/>
  <circle cx="20" cy="20" r="3" fill="#8a6a1a"/>
  <!-- Gear teeth -->
  <rect x="18" y="2" width="4" height="6" rx="1" fill="#c4a043"/>
  <rect x="18" y="32" width="4" height="6" rx="1" fill="#c4a043"/>
  <rect x="2" y="18" width="6" height="4" rx="1" fill="#c4a043"/>
  <rect x="32" y="18" width="6" height="4" rx="1" fill="#c4a043"/>
  <rect x="6" y="6" width="4" height="6" rx="1" fill="#c4a043" transform="rotate(45,8,9)"/>
  <rect x="30" y="28" width="4" height="6" rx="1" fill="#c4a043" transform="rotate(45,32,31)"/>
  <rect x="28" y="6" width="4" height="6" rx="1" fill="#c4a043" transform="rotate(-45,30,9)"/>
  <rect x="6" y="28" width="4" height="6" rx="1" fill="#c4a043" transform="rotate(-45,8,31)"/>
</svg>
```

### 8) Clock Shop Button

Mahogany workshop button with brass trim.

- `bg-gradient-to-b from-[#5a2818] to-[#3a1810] text-[#f0ead0] font-serif font-medium px-6 py-3 border-2 border-t-[#6a3828] border-b-[#2a0e06] rounded-lg shadow-[0_3px_0_#2a0e06,inset_0_1px_0_rgba(196,160,67,0.2)] hover:translate-y-0.5 hover:shadow-[0_1px_0_#2a0e06,inset_0_1px_0_rgba(196,160,67,0.2)] active:shadow-none transition-all`.

### 9) Glass Display Panel

Translucent glass showing gears behind it -- for clock internals.

- `bg-gradient-to-br from-[#f0f8ff]/15 to-[#e0eaf4]/10 border-2 border-[#6a3828] rounded-lg relative overflow-hidden` with a `before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent`.

## Color Palette System

### Core Clock Shop Palette

| Color | Hex | Material | Role |
|---|---|---|---|
| Mahogany Dark | `#3a1810` | Dark mahogany | Deep background, shadows |
| Mahogany | `#4a2418` | Mahogany case | Primary surface |
| Mahogany Light | `#5a2818` | Polished mahogany | Panel surfaces |
| Case Highlight | `#6a3828` | Mahogany edge | Top/left bevels |
| Workshop Brown | `#6a5a3a` | Workbench wood | Workbench, shelf surfaces |
| Workshop Dark | `#5a4a2a` | Aged workbench | Workbench shadows |
| Brass Gold | `#c4a043` | Polished brass | Gears, hands, bezels |
| Brass Light | `#e8c66a` | Bright brass | Gear highlights |
| Brass Dark | `#8a6a1a` | Aged brass | Gear shadows, pivot caps |
| Clock Face Cream | `#f0ead0` | Painted dial | Clock face background |
| Face Shadow | `#e0d8b0` | Aged cream | Clock face edge |
| Ink Black | `#1a1a1a` | Clock hands | Hands, numerals |
| Glass Blue | `#f0f8ff` | Translucent glass | Display panels |
| Ticking Red | `#c41e1e` | Second hand accent | Alarm indicators, urgency |
| Dark Wood Text | `#3a2a0a` | Painted ink | Text on cream faces |
| Cream Text | `#f0ead0` | Painted lettering | Text on dark wood |

Rules: Deep mahogany browns and brass gold dominate. The palette should feel like a village clockmaker's workshop -- warm wood, polished brass, cream faces, and the mechanical density of ticking timepieces. Ticking red accents mark alarm indicators and second hands against the warm palette.

## Typography Recommendations

Clock shop typography blends traditional clock-face numerals with hand-painted workshop labels:

- **Display headings:** Cinzel, Playfair Display, or Cormorant Garamond (clock-face elegance).
- **Clock face numerals:** Roman numerals in Cinzel or Arabic numerals in tabular-lining figures.
- **Body:** EB Garamond, Lora, or Crimson Text (warm classical serif for readability).
- **Workshop labels:** `font-serif font-medium text-sm tracking-wide text-[#f0ead0]` for painted labels on mahogany surfaces.
- **Numerical data:** Tabular figures for clock times and measurements (`font-variant-numeric: tabular-nums`).
- Avoid sans-serif for primary text. The clockmaker aesthetic demands traditional serifs and precise numerals.

## Component Architecture Pattern

1. Dark mahogany background (the workshop walls).
2. Mahogany case panels with beveled edges and gradient depth (grandfather clocks, display cabinets).
3. Cream clock face dials with brass bezels (time display throughout).
4. Swinging pendulums centered in glass windows (living motion).
5. Brass gear trains visible through glass panels (mechanical wonder).
6. Wall of clocks grid dense with different faces (the shop's signature display).
7. Warm workbench surface with scattered tools (craftsman's area).
8. Brass gear tooth decorations framing sections (mechanical motif).
9. Glass display panels showing internal mechanisms (translucent depth).

## Interaction Rules

- Default state: mahogany warm, pendulums swinging, gears turning slowly, every clock face ticking.
- Hover: wood surfaces warm slightly (`hover:brightness-110`), gear rotation speeds up briefly, clock hands tick faster.
  - `hover:brightness-110 hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.4),0_8px_20px_rgba(0,0,0,0.5)] transition-all duration-500`.
- Active: mechanical wooden press (`active:translate-y-0.5 active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.5)]`).
- Focus: brass glow ring `focus:ring-2 focus:ring-[#c4a043]/60 focus:ring-offset-2 focus:ring-offset-[#3a1810]`.
- Transitions: `transition-all duration-500 ease-in-out` (deliberate, mechanical, unhurried).
- Pendulum: continuous swing at 2.5s intervals using `cubic-bezier(0.4, 0, 0.6, 1)`.
- Gears: continuous rotation at 6-8s intervals, meshing gears rotate in opposite directions.

## Reusable Tailwind Tokens

- Mahogany case panel: `bg-gradient-to-b from-[#5a2818] via-[#4a2418] to-[#3a1810] border-2 border-t-[#6a3828] border-l-[#6a3828] border-b-[#2a0e06] border-r-[#2a0e06] shadow-[inset_0_2px_8px_rgba(0,0,0,0.4),0_8px_24px_rgba(0,0,0,0.5)]`
- Clock face dial: `rounded-full bg-gradient-to-br from-[#f0ead0] to-[#e0d8b0] border-4 border-[#c4a043] shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)]`
- Pendulum bob: `rounded-full bg-gradient-to-br from-[#e8c66a] via-[#c4a043] to-[#8a6a1a] border-2 border-[#6a4a0a] shadow-[0_2px_8px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,215,0,0.4)]`
- Glass panel: `bg-gradient-to-br from-[#f0f8ff]/15 to-[#e0eaf4]/10 border-2 border-[#6a3828] rounded-lg`
- Gear: `rounded-full border-2 border-[#c4a043] bg-[#c4a043]/20` with inner ring `border-[#e8c66a]/40`
- Workbench surface: `bg-gradient-to-b from-[#6a5a3a] to-[#5a4a2a] border-2 border-t-[#7a6a4a] border-b-[#3a2a1a]`
- Clock shop button: `bg-gradient-to-b from-[#5a2818] to-[#3a1810] text-[#f0ead0] font-serif border-2 border-t-[#6a3828] border-b-[#2a0e06] rounded-lg shadow-[0_3px_0_#2a0e06]`
- Gear rotation: `clock-shop-gear` keyframe with `linear infinite`
- Reverse gear: `clock-shop-gear-reverse` keyframe for meshing pairs
- Pendulum swing: `clock-shop-pendulum` keyframe with `cubic-bezier(0.4, 0, 0.6, 1)`
- Warm shadow: `shadow-[0_8px_24px_rgba(0,0,0,0.5)]`
- Workshop label: `font-serif font-medium text-sm tracking-wide text-[#f0ead0]`

## Quality Checklist (must pass)

- At least one mahogany case surface with gradient depth and beveled edges.
- At least one animated swinging pendulum (continuous motion).
- At least one animated rotating gear (or gear pair with opposite rotation).
- A wall of clocks grid showing multiple different clock faces.
- Clock face hands with center brass pivot cap present.
- A workbench or shelf surface with tool/scattered gear details.
- Glass display panel with translucent depth.
- Color palette is mahogany brown + brass gold + cream + workshop brown.
- Typography uses traditional serif with clock-face numerals.
- Wood surfaces have gradient depth and bevels (not flat).
- Shadows are warm, deep, and physical (mahogany has weight).
- The aesthetic reads as a village clockmaker's workshop -- dense, warm, mechanical.
- Ticking red accent present for second hands or alarm indicators.
- Motion is deliberate and clockwork-like (pendulum swing, gear rotation).
- Multiple clock faces show different times and styles.

## Anti-Patterns

- Flat or untextured wood surfaces (mahogany needs gradient depth, grain, and bevels).
- Missing pendulum animation (the swinging pendulum is the workshop's heartbeat).
- Missing gear rotation animation (gears are the mechanical soul).
- All clocks showing the same time (each face must show a different time for wall-of-clocks density).
- Bright, cool, or neon colors (the clock shop is warm mahogany, brass, and cream).
- Smooth digital animations (motion should feel mechanical and clockwork-like).
- Modern sans-serif typography alone (needs traditional serif + clock numerals).
- Missing glass panels (translucent display panels showing gears are essential).
- Clean pristine surfaces (the workshop has scattered tools, parts, and dust).
- Digital time displays (use analog dials with hands and numerals).
- Missing workbench (the craftsman's area grounds the shop as a working space).
- Pure black backgrounds (use dark mahogany `#3a1810` with warm undertones).
- Sparse wall display (the charm is density -- fill every inch with clocks).

## Accessibility Considerations

- Clock face cream (`#f0ead0`) with dark text (`#3a2a0a`) provides excellent contrast (WCAG AAA).
- Mahogany backgrounds require light text (`#f0ead0`) -- verify WCAG AA minimum.
- Pendulum and gear animations must respect `prefers-reduced-motion` (stop swinging and rotating).
- Clock face SVGs need `aria-label` describing the time or function.
- Roman numeral labels should have Arabic numeral alternatives for screen readers (`aria-label="3 o'clock"` for "III").
- Workbench tool interactions must be keyboard-accessible (`tabindex`, `role="button"`, Enter/Space to activate).
- Decorative gears and tools must be `aria-hidden="true"`.
- Focus states must be visible against mahogany (`focus:ring-2 focus:ring-[#c4a043]/60`).
- Touch targets must be adequate despite carved styling (minimum 44x44px).
- Glass panel effects should not blur or reduce text readability on adjacent surfaces.
