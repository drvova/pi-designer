---
name: mecha-ui
description: Build mecha / Gundam UI components (giant robot cockpit HUDs, tactical readouts, armor plate textures, warning klaxons, targeting reticles, reactor gauges, military mech interfaces) with angular paneling, mechanical warning indicators, and the high-stakes piloting aesthetic of giant robot combat. Trigger this skill when the user asks for mecha, Gundam, mech cockpit, giant robot, tactical HUD, Eva unit, or military robot interfaces.
---

# Mecha / Gundam UI

Use this skill to design and implement tactical interfaces inspired by giant robot cockpit HUDs: angular armor-plated panels, military targeting reticles, reactor output gauges, damage status displays, warning klaxon indicators, and the high-adrenaline piloting experience of mecha combat.

## Core Material Recipes

### 1) Armor Plate Panel

Angular military mech panel (like EVA/Gundam exterior plating).

- `bg-gradient-to-br from-[#3a3a4a] to-[#1a1a2a] [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,12px_100%,0_calc(100%-12px))] border-l-2 border-t-2 border-[#5a5a6a] p-6 shadow-[inset_-2px_-2px_0_rgba(0,0,0,0.3)]`.

### 2) Targeting Reticle

Crosshair targeting display element.

```html
<svg viewBox="0 0 100 100" class="w-24 h-24 opacity-40">
  <g fill="none" stroke="#00ff41" stroke-width="1">
    <circle cx="50" cy="50" r="40"/>
    <circle cx="50" cy="50" r="25"/>
    <line x1="50" y1="5" x2="50" y2="20"/>
    <line x1="50" y1="80" x2="50" y2="95"/>
    <line x1="5" y1="50" x2="20" y2="50"/>
    <line x1="80" y1="50" x2="95" y2="50"/>
    <path d="M35,35 L45,45 M65,35 L55,45 M35,65 L45,55 M65,65 L55,55" stroke-width="0.5"/>
  </g>
  <circle cx="50" cy="50" r="2" fill="#00ff41"/>
</svg>
```

### 3) Reactor Gauge

Circular output/energy meter.

- `w-24 h-24 rounded-full bg-[#0a0a14] border-2 border-[#5a5a6a] flex items-center justify-center`.
- Arc fill: SVG arc path `stroke="#00ff41"` for energy level.
- Value: `font-mono text-lg font-bold text-[#00ff41]` showing "87%".

### 4) Damage Status Display

Body-part damage readout (head/torso/arms/legs status).

```html
<div class="font-mono text-xs space-y-1">
  <div class="flex justify-between"><span class="text-[#00ff41]">HEAD</span><span class="text-[#00ff41]">●●●○○</span><span class="text-gray-500">60%</span></div>
  <div class="flex justify-between"><span class="text-[#ffcc00]">TORSO</span><span class="text-[#ffcc00]">●●●●○</span><span class="text-gray-500">80%</span></div>
  <div class="flex justify-between"><span class="text-[#ff4444]">L.ARM</span><span class="text-[#ff4444]">●○○○○</span><span class="text-gray-500">20%</span></div>
  <div class="flex justify-between"><span class="text-[#00ff41]">R.ARM</span><span class="text-[#00ff41]">●●●●●</span><span class="text-gray-500">100%</span></div>
  <div class="flex justify-between"><span class="text-[#ffcc00]">LEGS</span><span class="text-[#ffcc00]">●●●○○</span><span class="text-gray-500">70%</span></div>
</div>
```

### 5) Warning Klaxon

Flashing critical alert indicator.

- `bg-[#ff4444]/20 border border-[#ff4444] px-4 py-2 flex items-center gap-2 animate-pulse`.
- `text-[#ff4444] font-bold uppercase text-sm tracking-widest` showing "⚠ CRITICAL DAMAGE".

### 6) Mecha Button

Angular military tactical button.

- `bg-[#1a3a1a] text-[#00ff41] font-mono font-bold uppercase tracking-widest text-sm px-8 py-3 [clip-path:polygon(8px_0,calc(100%-8px)_0,100%_50%,calc(100%-8px)_100%,8px_100%,0_50%)] border border-[#00ff41]/30 shadow-[0_0_8px_rgba(0,255,65,0.2)] hover:shadow-[0_0_15px_rgba(0,255,65,0.4)] hover:bg-[#2a4a2a] transition-all`.

### 7) HUD Overlay Frame

Cockpit frame overlay (angular corner brackets).

- `before:absolute before:top-2 before:left-2 before:w-8 before:h-8 before:border-t-2 before:border-l-2 before:border-[#00ff41]/30` (and equivalent for other corners).

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| HUD Green | `#00ff41` | Primary (systems online) |
| Warning Yellow | `#ffcc00` | Caution/damage |
| Alert Red | `#ff4444` | Critical damage |
| Armor Gray | `#3a3a4a` | Panel surfaces |
| Dark Armor | `#1a1a2a` | Deep surfaces |
| Cockpit Black | `#0a0a14` | Screen backgrounds |
| Light Edge | `#5a5a6a` | Highlight edges |
| Monospace Gray | `#808090` | Secondary data |

Rules: Dark armor surfaces with green HUD readouts. Yellow and red for damage states. Everything is military-grade, angular, and tactical. The palette should feel like sitting inside a Gundam/EVA cockpit.

## Typography Recommendations

- **Primary:** JetBrains Mono, Share Tech Mono (military tactical monospace).
- **Display:** Orbitron, Rajdhani (techno military display).
- **Labels:** `font-mono font-bold uppercase tracking-widest text-xs text-[#00ff41]`.
- ALL typography should feel like military tactical readouts.

## Reusable Tailwind Tokens

- Armor panel: `[clip-path:angular] bg-gradient-to-br from-[#3a3a4a] to-[#1a1a2a]`.
- Mecha button: `[clip-path:hexagon] bg-[#1a3a1a] text-[#00ff41] shadow-[0_0_8px_rgba(0,255,65,0.2)]`.
- Reticle: SVG crosshair in `stroke="#00ff41"`.
- Warning: `animate-pulse bg-[#ff4444]/20 text-[#ff4444]`.
- HUD frame: corner bracket pseudo-elements in `border-[#00ff41]/30`.

## Quality Checklist

- At least one angular armor-plated panel (clip-path cut corners).
- At least one targeting reticle or HUD overlay element.
- Reactor/energy gauge present.
- Damage status display (body-part readout with colored indicators).
- Warning klaxon (flashing red alert) element.
- Angular hexagonal clip-path on buttons.
- Color palette is dark armor + HUD green + warning yellow/red.
- Typography is military monospace throughout.
- The aesthetic reads as mecha cockpit / Gundam / giant robot pilot.
- Everything feels tactical, high-stakes, and military-grade.

## Anti-Patterns

- Rounded soft shapes (mecha is ANGULAR and military).
- Missing angular clip-path panels (armor plating is the signature surface).
- Missing targeting reticle (the crosshair HUD is essential mecha imagery).
- Missing the damage status display (body-part readout is iconic).
- Missing the reactor/energy gauge (mech output is constantly monitored).
- Missing warning klaxon elements (the high-stakes combat feel requires alerts).
- Bright cheerful colors (palette is dark + green HUD + red/yellow warnings).
- Sans-serif non-mono typography (mecha UI is ALL monospace military).
- Smooth rounded buttons (use angular hexagonal clip-paths).
- Missing HUD overlay corner brackets (the cockpit frame is essential).

## Accessibility Considerations

- Dark armor backgrounds with green/yellow/red text provide excellent contrast (WCAG AAA for green/yellow on dark).
- Red warning text on dark must be verified (WCAG AA for `#ff4444` on `#0a0a14`).
- Warning klaxon flashing must not exceed 3Hz (seizure risk).
- Focus states: `focus:ring-2 focus:ring-[#00ff41]/50` (green HUD ring).
- Targeting reticle and gauge SVGs need `aria-label` or `aria-valuenow`.
- The angular clip-paths must not cut off interactive areas.
- Touch targets must be adequate despite military angular styling.
