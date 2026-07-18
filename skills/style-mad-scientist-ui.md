---
name: mad-scientist-ui
description: Build mad scientist lab UI components (beakers with glowing liquids, Tesla coils, lightning effects, bubbling retorts, chalkboard equations, vintage lab equipment, monstrous creation gauges) with bubbling animations, electric arcs, and the gothic-scientific atmosphere of Frankenstein's laboratory. Trigger this skill when the user asks for mad scientist lab, Frankenstein lab, Victorian science, alchemy lab, Tesla UI, or gothic-scientific interfaces.
---

# Mad Scientist Lab UI

Use this skill to design and implementation interfaces inspired by the mad scientist's laboratory: bubbling beakers with glowing liquids, crackling Tesla coils, lightning arcs, chalkboard equations, vintage electrical equipment, pressure gauges, and the gothic-scientific atmosphere of Frankenstein's creation chamber.

## Core Material Recipes

### 1) Laboratory Bench Surface

Dark wooden lab bench with metal hardware.

- `bg-gradient-to-br from-[#3a2a18] to-[#2a1a08] border-2 border-[#5a3a1a] p-8 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]`.

### 2) Glowing Beaker Element

SVG beaker with glowing liquid inside.

```html
<svg viewBox="0 0 60 80" class="w-16 h-20">
  <path d="M20,10 L20,20 L15,70 Q15,75 30,75 Q45,75 45,70 L40,20 L40,10 Z" fill="none" stroke="#a0a0a0" stroke-width="1.5"/>
  <path d="M17,40 Q17,70 30,72 Q43,70 43,40 Z" fill="#00ff88" opacity="0.3"/>
  <path d="M17,40 Q17,70 30,72 Q43,70 43,40 Z" fill="none" stroke="#00ff88" stroke-width="0.5" opacity="0.6"/>
  <ellipse cx="25" cy="50" rx="2" ry="3" fill="#00ff88" opacity="0.5"/>
  <ellipse cx="35" cy="60" rx="1.5" ry="2" fill="#00ff88" opacity="0.4"/>
</svg>
```

### 3) Tesla Coil Accent

Electrical coil with lightning arcs.

- Coil: `w-8 h-20 bg-gradient-to-b from-[#8a7a5a] via-[#c4a043] to-[#5a4a2a]` (brass coil).
- Electric arcs: SVG lightning paths with `[filter:drop-shadow(0_0_3px_rgba(0,200,255,0.8))]`.
- Glow: `shadow-[0_0_20px_rgba(0,200,255,0.3)]`.

### 4) Lightning Button

Electric-arc styled button.

- `bg-gradient-to-b from-[#5a2a8a] to-[#2a0a4a] text-[#00ddff] font-bold uppercase tracking-wider px-8 py-3 border-2 border-[#00ddff]/50 shadow-[0_0_15px_rgba(0,221,255,0.3)] hover:shadow-[0_0_25px_rgba(0,221,255,0.6)] transition-all`.

### 5) Chalkboard Equation Accent

Dark chalkboard surface with hand-written formula.

- `bg-[#1a3a2a] rounded-lg p-4 font-mono text-[#f5f5f0] text-sm` with formula like `E = mc²` or `V = IR`.

### 6) Pressure Gauge

Analog gauge needle that trembles.

- `w-24 h-24 rounded-full bg-[#1a1a1a] border-4 border-[#5a5a5a]`.
- Needle: `w-1 h-10 bg-[#ff4400] origin-bottom` with `animate-[tremble_0.3s_ease-in-out_infinite]`.

### 7) Bubbling Animation

Liquid bubbling effect inside containers.

```css
@keyframes bubble-rise {
  0% { transform: translateY(0); opacity: 0.6; }
  100% { transform: translateY(-30px); opacity: 0; }
}
```

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Lab Wood | `#3a2a18` | Bench surfaces |
| Brass | `#c4a043` | Equipment metal |
| Electric Blue | `#00ddff` | Lightning, energy |
| Toxic Green | `#00ff88` | Glowing liquids |
| Storm Purple | `#5a2a8a` | Electrical accent |
| Warning Red | `#ff4400` | Danger, gauges |
| Chalkboard Green | `#1a3a2a` | Equation surfaces |
| Dark Metal | `#3a3a3a` | Equipment frames |
| Amber Glow | `#ffaa00` | Vacuum tube glow |

Rules: Dark wood and metal surfaces with electric/toxic accents. The palette should feel like Frankenstein's lab — dark, gothic, and crackling with dangerous energy.

## Typography Recommendations

- **Display:** Bebas Neue, Oswald (industrial lab signage).
- **Body:** Courier Prime, IBM Plex Mono (scientific notation/lab notes).
- **Labels:** `font-mono font-bold uppercase tracking-widest text-xs text-[#00ddff]` (equipment labels).
- Chalkboard equations: handwritten-style font (Caveat, Kalam).

## Reusable Tailwind Tokens

- Lab bench: `bg-gradient-to-br from-[#3a2a18] to-[#2a1a08] border-2 border-[#5a3a1a] shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]`.
- Lightning button: `bg-gradient-to-b from-[#5a2a8a] to-[#2a0a4a] text-[#00ddff] border-2 border-[#00ddff]/50 shadow-[0_0_15px_rgba(0,221,255,0.3)]`.
- Glowing beaker: SVG with `fill="#00ff88" opacity="0.3"`.
- Chalkboard: `bg-[#1a3a2a] font-mono text-[#f5f5f0]`.
- Gauge: `rounded-full bg-[#1a1a1a] border-4 border-[#5a5a5a]`.

## Quality Checklist

- At least one glowing beaker or lab equipment element.
- Electric/lightning accent present (Tesla coil, arc, or blue glow).
- Dark wood lab bench surfaces.
- Chalkboard equation accent.
- Analog pressure gauge or meter.
- Color palette is dark lab + electric/toxic accents.
- Typography mixes industrial sans with scientific monospace.
- The aesthetic reads as Frankenstein's lab / mad scientist workshop.
- Bubbling or trembling animations on lab elements.
- Everything feels dangerous, experimental, and alive.

## Anti-Patterns

- Bright cheerful colors (the lab is dark and gothic-scientific).
- Missing lab equipment decorations (beakers, coils, gauges are essential).
- Modern clean lab aesthetic (this is VICTORIAN GOTHIC science, not a modern cleanroom).
- Missing electric/lightning effects (energy crackling is the signature).
- Sans-serif-only typography (need monospace for scientific notation).
- Flat unanimated surfaces (bubbling, trembling, crackling bring the lab to life).
- Light backgrounds (the lab is dark wood and metal).
- Missing chalkboard equation accent.
- Clean safe appearance (everything should feel slightly dangerous).
- Modern digital displays (use analog gauges and brass equipment).
