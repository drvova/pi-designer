---
name: vinyl-record-ui
description: Build vinyl record UI components (spinning black disc grooves, album cover art, center label typography, turntable mechanics, analog music warmth, crate-digger aesthetic) with concentric groove textures, spinning animations, and the tactile ritual of physical music. Trigger this skill when the user asks for vinyl record, turntable UI, album cover, record collection, analog music, or crate-digging interfaces.
---

# Vinyl Record UI

Use this skill to design and implementation interfaces inspired by vinyl records and turntables: spinning black disc groove textures, album-cover framing, center-label typography, tonearm mechanics, and the warm, tactile, ritualistic experience of physical music.

## Core Material Recipes

### 1) Vinyl Disc Surface

The signature spinning record with concentric grooves.

- `w-48 h-48 rounded-full bg-[#0a0a0a]` with groove texture: `bg-[radial-gradient(circle,transparent_38%,rgba(40,40,40,0.4)_38.1%,transparent_38.2%,transparent_40%,rgba(40,40,40,0.4)_40.1%,transparent_40.2%,transparent_42%,rgba(40,40,40,0.3)_42.1%,transparent_42.2%)]` (concentric groove rings).
- Center label: `w-20 h-20 rounded-full bg-[#c41e1e] flex items-center justify-center` (the record label).
- Spindle hole: `w-2 h-2 rounded-full bg-[#1a1a1a]` at exact center.
- Spinning animation: `animate-[spin_4s_linear_infinite]`.

### 2) Album Cover Card

Square album-cover frame for images/art.

- `aspect-square bg-[#1a1a1a] p-4 shadow-[0_8px_24px_rgba(0,0,0,0.3)]` (like an LP jacket).
- Inner image area fills the square.
- Corner wear: subtle `bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.05)_0%,transparent_10%)]` (worn corner highlight).

### 3) Turntable Panel

Dark turntable surface with platter.

- `bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] border-2 border-[#3a3a3a] rounded-lg p-8 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]`.
- Platter: `w-40 h-40 rounded-full bg-[#1a1a1a] border border-[#333] mx-auto`.

### 4) Tonearm Accent

Turntable tonearm SVG decoration.

```html
<svg viewBox="0 0 100 80" class="w-24 h-20 opacity-40">
  <circle cx="85" cy="15" r="8" fill="none" stroke="#c0c0c0" stroke-width="1.5"/>
  <rect x="80" y="20" width="3" height="8" fill="#c0c0c0"/>
  <line x1="82" y1="28" x2="25" y2="60" stroke="#c0c0c0" stroke-width="2.5"/>
  <rect x="22" y="57" width="6" height="4" fill="#8a8a8a"/>
  <line x1="25" y1="61" x2="25" y2="65" stroke="#888" stroke-width="0.5"/>
</svg>
```

### 5) Record Label Typography

Center-label circular text treatment.

- Text arranged in a circle using SVG `textPath` on a circular path.
- `font-serif text-xs uppercase tracking-widest text-[#f5d76e]` (like a 1960s Blue Note label).

### 6) Vinyl Button

Dark analog-styled button.

- `bg-[#0a0a0a] text-[#f5d76e] font-mono font-medium uppercase tracking-wider px-8 py-3 border border-[#3a3a3a] rounded-sm hover:bg-[#1a1a1a] hover:border-[#f5d76e]/30 transition-all`.

### 7) Track Listing

Album track list with timing.

- `font-mono text-sm text-[#a0a0a0]` showing "A1 — Track Name    3:42".
- Divider: `border-b border-[#333]` between tracks.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Vinyl Black | `#0a0a0a` | Primary (the record) |
| Charcoal | `#1a1a1a` | Surfaces |
| Dark Metal | `#2a2a2a` | Turntable chrome |
| Label Red | `#c41e1e` | Center labels (classic) |
| Label Gold | `#f5d76e` | Text/accents on dark |
| Silver | `#c0c0c0` | Tonearm, hardware |
| Track Gray | `#a0a0a0` | Track listing text |
| Warm Orange | `#ff8c1a` | Tube amp glow (rare) |

Rules: Vinyl black dominates (the record surface). Label colors (red, gold) provide the only warm accents. Silver/chrome references the turntable hardware. Everything should feel analog, warm, and physical.

## Typography Recommendations

- **Display:** Bebas Neue, Oswald (album-cover condensed sans).
- **Alternative:** Playfair Display (for classic jazz/classical labels).
- **Body:** Inter, DM Sans (clean readable sans for track lists).
- **Labels:** `font-mono text-sm uppercase tracking-wider` (catalog numbers, matrix runouts).
- Typography should feel like album liner notes — a mix of display and technical.

## Reusable Tailwind Tokens

- Vinyl disc: `rounded-full bg-[#0a0a0a]` with radial groove gradient + center label.
- Album cover: `aspect-square bg-[#1a1a1a] p-4 shadow-[0_8px_24px_rgba(0,0,0,0.3)]`.
- Turntable: `bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] border-2 border-[#3a3a3a]`.
- Vinyl button: `bg-[#0a0a0a] text-[#f5d76e] font-mono border border-[#3a3a3a] rounded-sm`.
- Spinning: `animate-[spin_4s_linear_infinite]`.

## Quality Checklist

- At least one spinning vinyl disc element with concentric grooves.
- Album-cover square frame for imagery.
- Turntable dark panel surface present.
- Tonearm SVG decoration.
- Center-label colored circle on the record.
- Track listing with monospace timing format.
- Color palette is vinyl black + label red/gold + chrome silver.
- Typography mixes display (album titles) with mono (catalog numbers).
- The aesthetic reads as vinyl record / turntable / analog music.
- Everything feels warm, physical, and ritualistic.

## Anti-Patterns

- Missing the spinning vinyl disc (this is the defining element).
- Missing concentric groove texture (grooves make it look like a RECORD, not a circle).
- Bright digital/streaming aesthetic (this is ANALOG physical music).
- Missing the center label (every record has a colored center label).
- Missing the turntable/tonearm references (the playback mechanism is essential).
- Missing album-cover framing (LP jackets are square and distinctive).
- Sans-serif-only typography (need display + mono for the album aesthetic).
- Light bright backgrounds (vinyl aesthetic is DARK).
- Missing track listing format (A1/B1 catalog numbering is characteristic).
- Fast modern animations (the record spins at 33⅓ RPM — slow and steady).

## Accessibility Considerations

- Dark vinyl backgrounds with gold text provide good contrast (verify WCAG AA).
- Focus states: `focus:ring-2 focus:ring-[#f5d76e]/50` (gold ring on black).
- Spinning animation must respect `prefers-reduced-motion` (stop the record).
- Tonearm and vinyl SVGs must be `aria-hidden="true"` when decorative.
- Track listings need proper semantic markup for screen readers.
- The dark aesthetic is low eye-strain (good for extended music browsing).
- Touch targets must be adequate despite album-cover square framing.
