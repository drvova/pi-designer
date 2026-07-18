---
name: orrery-ui
description: Build orrery / solar system UI components (mechanical planetary models, brass orbital arms, rotating spheres, clockwork celestial mechanics, vintage astronomical instruments) with concentric orbital tracks, brass-and-enamel construction, and the beautiful precision of 18th-century mechanical solar system models. Trigger this skill when the user asks for orrery, solar system model, mechanical planets, vintage astronomy instrument, celestial mechanics, or brass armillary interfaces.
---

# Orrery / Solar System UI

Use this skill to design and implementation interfaces inspired by mechanical orreries — hand-cranked brass models of the solar system: concentric orbital tracks, rotating planet spheres, brass support arms, engraved zodiac base rings, and the Enlightenment-era wonder of clockwork celestial mechanics.

## Non-Negotiable Foundations

- An orrery is a MECHANICAL model of the solar system: planets on brass arms rotating around a central sun on concentric tracks.
- Brass is the dominant material: polished golden brass for all arms, rings, and support structures.
- Planets are colored enamel or polished stone spheres at different sizes and distances.
- Concentric orbital rings are the signature visual: nested circles of increasing radius.
- The aesthetic blends scientific precision (engraved degree markings, zodiac symbols) with decorative beauty (brass polish, enamel colors).
- Movement is mechanical and gear-driven: smooth, regular, planetary rotation.

## Core Material Recipes

### 1) Orbital Track System

Concentric brass rings representing planetary orbits.

- Base ring: `w-full h-full rounded-full border-2 border-[#c4a043]/30`.
- Each subsequent ring: `absolute inset-[X%] rounded-full border border-[#c4a043]/20`.
- Center sun: `w-8 h-8 rounded-full bg-gradient-to-br from-[#ffd700] to-[#ff8c00] shadow-[0_0_20px_rgba(255,200,0,0.4)]`.

### 2) Brass Arm Element

Radial brass support arm connecting sun to planet.

```html
<div class="absolute top-1/2 left-1/2 w-1/2 h-0.5 bg-gradient-to-r from-[#c4a043] to-[#8a6a1a] origin-left rotate-[var(--angle)]">
  <div class="absolute right-0 -top-2 w-5 h-5 rounded-full bg-gradient-to-br from-[#5a9aca] to-[#1a4a7a] border border-[#c4a043]"></div>
</div>
```

### 3) Planet Sphere

Enamel/stone planet decoration.

- Mercury: `w-3 h-3 rounded-full bg-gradient-to-br from-[#8a7a6a] to-[#4a3a2a]`.
- Venus: `w-4 h-4 rounded-full bg-gradient-to-br from-[#e8c47a] to-[#a07a3a]`.
- Earth: `w-5 h-5 rounded-full bg-gradient-to-br from-[#4a8aca] to-[#1a4a7a]`.
- Mars: `w-4 h-4 rounded-full bg-gradient-to-br from-[#c45a3a] to-[#7a2a1a]`.
- Jupiter: `w-8 h-8 rounded-full bg-gradient-to-br from-[#d4a868] to-[#8a6a3a]`.

### 4) Engraved Zodiac Base

Circular base with zodiac symbols.

```html
<svg viewBox="0 0 200 200" class="w-full h-full opacity-20">
  <circle cx="100" cy="100" r="95" fill="none" stroke="#c4a043" stroke-width="0.5"/>
  <circle cx="100" cy="100" r="88" fill="none" stroke="#c4a043" stroke-width="0.5"/>
  <text x="100" y="12" font-size="6" fill="#c4a043" text-anchor="middle">♈</text>
  <text x="185" y="105" font-size="6" fill="#c4a043" text-anchor="middle">♋</text>
  <text x="100" y="195" font-size="6" fill="#c4a043" text-anchor="middle">♎</text>
  <text x="15" y="105" font-size="6" fill="#c4a043" text-anchor="middle">♑</text>
</svg>
```

### 5) Orrery Panel

Dark brass-mounted display surface.

- `bg-gradient-to-br from-[#1a1a0a] to-[#0a0a05] border-2 border-[#c4a043]/30 rounded-full p-8 shadow-[inset_0_0_30px_rgba(201,168,76,0.05),0_0_20px_rgba(201,168,76,0.08)]`.

### 6) Orrery Button

Brass scientific-instrument button.

- `bg-gradient-to-b from-[#c4a043] to-[#8a6a1a] text-[#1a0a0a] font-serif font-medium uppercase tracking-widest px-8 py-3 border border-[#5a3a0a] shadow-[0_3px_0_#3a2a0a,inset_0_1px_0_rgba(255,215,0,0.3)] hover:translate-y-1 hover:shadow-[0_1px_0_#3a2a0a] active:shadow-none transition-all`.

## Color Palette System

| Color | Hex | Material |
|---|---|---|
| Brass Gold | `#c4a043` | Arms, rings, frame |
| Dark Brass | `#8a6a1a` | Shadows |
| Sun Gold | `#ffd700` | Central sun |
| Sun Orange | `#ff8c00` | Sun glow |
| Earth Blue | `#4a8aca` | Earth planet |
| Mars Red | `#c45a3a` | Mars planet |
| Jupiter Tan | `#d4a868` | Jupiter planet |
| Dark Velvet | `#0a0a05` | Night-sky background |
| Enamel Cream | `#f0e8d0` | Engraved text |

Rules: Brass gold and dark night-sky black dominate. Planet spheres provide the only color variety (blue, red, tan). The palette should feel like a museum display of an 18th-century scientific instrument.

## Typography Recommendations

- **Display:** Cinzel, Trajan Pro (Roman inscription caps — Enlightenment scientific).
- **Body:** Lora, EB Garamond (classical readable serif).
- **Labels:** `font-serif font-medium text-sm tracking-wide text-[#c4a043]` (engraved brass labels).
- Zodiac symbols (♈♉♊♋♌♍♎♏♐♑♒♓) used as decorative section markers.

## Reusable Tailwind Tokens

- Orbital ring: `rounded-full border-2 border-[#c4a043]/30`.
- Brass arm: `bg-gradient-to-r from-[#c4a043] to-[#8a6a1a] origin-left rotate-[var(--angle)]`.
- Sun: `rounded-full bg-gradient-to-br from-[#ffd700] to-[#ff8c00] shadow-[0_0_20px_rgba(255,200,0,0.4)]`.
- Orrery panel: `bg-gradient-to-br from-[#1a1a0a] to-[#0a0a05] border-2 border-[#c4a043]/30 rounded-full`.
- Orrery button: `bg-gradient-to-b from-[#c4a043] to-[#8a6a1a] text-[#1a0a0a] shadow-[0_3px_0_#3a2a0a]`.

## Quality Checklist

- At least one concentric orbital ring system.
- Central sun element with golden glow.
- At least one planet sphere on a brass arm.
- Brass gold color palette throughout.
- Engraved zodiac base ring decoration.
- Dark night-sky background panels.
- Typography is classical Enlightenment serif.
- The aesthetic reads as a mechanical orrery / vintage astronomical instrument.
- Everything feels精密 precise, scientific, and beautifully mechanical.
- Planet rotation animations (optional but enhance the orrery feel).

## Anti-Patterns

- Deep-space nebula photography (that is cosmic-ui — orrery is MECHANICAL).
- Missing orbital rings (concentric tracks are the defining structure).
- Missing the central sun (the sun is the center of every orrery).
- Missing brass material (orreries are brass instruments, not digital).
- Modern digital aesthetic (orreries are 18th-century analog instruments).
- Missing zodiac/degree engravings (these add scientific authenticity).
- Bright nebula colors (palette is brass + dark velvet + planet colors only).
- Flat non-mechanical composition (orreries show ORBITAL MOTION).
- Sans-serif typography (orreries need classical Enlightenment serif).
- Missing planet spheres (planets on arms are the whole point).

## Accessibility Considerations

- Dark backgrounds with gold text provide good contrast (verify WCAG AA).
- Focus states: `focus:ring-2 focus:ring-[#c4a043]/50` (brass ring on dark).
- Orbital and zodiac SVGs must be `aria-hidden="true"` when decorative.
- Planet rotation animations must respect `prefers-reduced-motion`.
- The concentric orbital structure should not confuse screen reader navigation.
- Touch targets must be adequate despite circular orbital styling.
