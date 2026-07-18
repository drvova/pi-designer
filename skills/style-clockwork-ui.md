---
name: clockwork-ui
description: Build clockwork / horologist UI components (clock faces, roman numerals, exposed gear mechanisms, brass movements, pendulum rhythm, pocket watch elegance, time-keeping precision) with rotating cog animations, analog dials, and the精密 craftsmanship of mechanical timepieces. Trigger this skill when the user asks for clockwork design, clock face UI, horology, watchmaker, timepiece, mechanical gears, or pocket watch interfaces.
---

# Clockwork / Horologist UI

Use this skill to design and implementation precise, mechanical interfaces inspired by clockwork and horology: clock faces with Roman numerals, exposed brass gear movements, pendulum-swing animations, pocket watch elegance, and the精密 precision of mechanical timekeeping.

## Core Material Recipes

### 1) Clock Face Panel

Analog clock-dial panel surface.

- `w-48 h-48 rounded-full bg-gradient-to-br from-[#f0e8d0] to-[#d4c8a0] border-4 border-[#8a6a1a] shadow-[inset_0_2px_8px_rgba(0,0,0,0.15),0_4px_12px_rgba(0,0,0,0.2)] flex items-center justify-center`.
- Roman numerals: SVG positioned around the circle at each hour position.
- Hands: `bg-[#1a1a1a]` thin lines rotating from center.

### 2) Exposed Gear Movement

Visible brass gears SVG with rotation animation.

```html
<svg viewBox="0 0 100 100" class="w-20 h-20 text-[#c4a043] animate-[spin_10s_linear_infinite]">
  <path fill="currentColor" d="M50,5 L55,15 Q65,12 70,18 L80,12 L85,20 L78,28 Q82,35 80,42 L90,45 L88,55 L78,52 Q75,60 70,65 L78,75 L70,82 L62,75 Q55,78 48,80 L45,90 L35,88 L38,78 Q30,75 25,70 L15,78 L8,70 L15,62 Q12,55 10,48 L0,45 L2,35 L12,38 Q15,30 20,25 L12,15 L20,8 L28,15 Q35,12 42,10 Z M50,35 A15 15 0 1 0 50 65 A15 15 0 1 0 50 35 Z" opacity="0.4"/>
</svg>
```

Multiple gears at different sizes rotating at different speeds and directions create the living-mechanism feel.

### 3) Brass Movement Panel

Polished brass clockwork surface.

- `bg-gradient-to-br from-[#c4a043] via-[#8a6a1a] to-[#5a4a0a] border-2 border-[#3a2a0a] p-8 shadow-[inset_0_2px_4px_rgba(255,215,0,0.2),0_4px_8px_rgba(0,0,0,0.2)]`.

### 4) Pendulum Accent

Swinging pendulum decoration.

```css
@keyframes pendulum {
  0%, 100% { transform: rotate(-8deg); }
  50% { transform: rotate(8deg); }
}
.pendulum {
  transform-origin: top center;
  animation: pendulum 2s ease-in-out infinite;
}
```

### 5) Pocket Watch Card

Circular hinged-cover pocket watch shape.

- `rounded-full bg-[#f0e8d0] border-8 border-[#8a6a1a] p-6 shadow-[0_4px_16px_rgba(0,0,0,0.2)]`.
- Crown: `w-4 h-3 -mt-3 mx-auto rounded-t-full bg-[#8a6a1a]` (the winding knob at top).

### 6) Clockwork Button

Brass precision button.

- `bg-gradient-to-b from-[#c4a043] to-[#8a6a1a] text-[#1a0a0a] font-serif font-medium px-8 py-3 border-2 border-[#5a3a0a] shadow-[0_3px_0_#3a2a0a,inset_0_1px_0_rgba(255,215,0,0.3)] hover:translate-y-1 hover:shadow-[0_1px_0_#3a2a0a,inset_0_1px_0_rgba(255,215,0,0.3)] active:shadow-none transition-all`.

### 7) Roman Numeral Label

Time-keeping label using Roman numerals.

- `font-serif font-bold text-lg text-[#3a2a0a] tracking-wide` showing "XII", "III", "VII".

## Color Palette System

| Color | Hex | Material |
|---|---|---|
| Brass Gold | `#c4a043` | Gears, frames, movements |
| Dark Brass | `#8a6a1a` | Shadows, depth |
| Aged Brass | `#5a4a0a` | Deep metal |
| Dial Cream | `#f0e8d0` | Clock face |
| Ink Black | `#1a1a1a` | Hands, numerals |
| Silver | `#c0c0c0` | Steel components |
| Dark Brown | `#3a2a0a` | Leather cases, text |

Rules: Brass gold and cream dial dominate. The palette should feel like a Swiss watchmaker's bench — polished brass, cream enamel dials, and dark leather cases.

## Typography Recommendations

- **Display:** Cinzel, Trajan Pro (Roman inscription caps — like clock numerals).
- **Body:** EB Garamond, Lora (classical readable serif).
- **Numerals:** Roman numerals (I, II, III...) for labels and section numbers.
- **Labels:** `font-serif font-bold text-sm tracking-wide`.

## Reusable Tailwind Tokens

- Clock face: `rounded-full bg-gradient-to-br from-[#f0e8d0] to-[#d4c8a0] border-4 border-[#8a6a1a]`.
- Brass panel: `bg-gradient-to-br from-[#c4a043] via-[#8a6a1a] to-[#5a4a0a] border-2 border-[#3a2a0a]`.
- Clockwork button: `bg-gradient-to-b from-[#c4a043] to-[#8a6a1a] text-[#1a0a0a] border-2 border-[#5a3a0a] shadow-[0_3px_0_#3a2a0a]`.
- Gear SVG: complex cog path with `animate-[spin_Ns_linear_infinite]`.
- Pendulum: `animate-[pendulum_2s_ease-in-out_infinite]` with `transform-origin: top center`.

## Quality Checklist

- At least one clock face with Roman numerals.
- At least one animated rotating gear SVG.
- Brass gold color palette throughout.
- Pendulum or rhythmic motion element present.
- Pocket watch circular card shape.
- Roman numeral labels on sections or numbers.
- Typography uses classical serif (Cinzel/Trajan).
- The aesthetic reads as clockwork / watchmaker / mechanical timepiece.
- Everything feels精密 precise, mechanical, and beautifully engineered.
- Brass surfaces have metallic gradient sheen.

## Anti-Patterns

- Missing clock faces or gears (these are the defining elements).
- Digital/electronic aesthetic (clockwork is MECHANICAL).
- Missing Roman numerals (these are the time-keeping signature).
- Missing gear rotation animations (gears should MOVE).
- Modern sans-serif typography (clockwork needs classical Roman serif).
- Bright non-brass colors (palette is brass gold + cream + black).
- Flat unanimated surfaces (the beauty is in the mechanical MOTION).
- Missing pendulum or rhythmic element (pendulum swing is essential).
- Cheap-looking flat gold (brass needs gradient depth and sheen).
- Electronic/digital time displays (this is ANALOG mechanical).

## Accessibility Considerations

- Cream clock faces with dark text provide excellent contrast (WCAG AAA).
- Focus states: `focus:ring-2 focus:ring-[#8a6a1a]/50` (brass ring).
- Gear and pendulum animations must respect `prefers-reduced-motion`.
- Clock face SVGs need `aria-label` describing the time or function.
- Roman numeral labels should have Arabic numeral alternatives for screen readers.
- Touch targets must be adequate despite circular clock-face styling.
- The metallic gradients should not reduce text contrast on brass surfaces.
