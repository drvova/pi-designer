---
name: jukebox-ui
description: Build jukebox UI components (1950s diner music machine, glowing tube amp, chrome curves, bubble tube lighting, flip-page album display, selection button grids, spinning vinyl behind glass, neon edge lighting) with animated bubble tubes, illuminated selection buttons, and the nostalgic communal music experience of the diner jukebox. Trigger this skill when the user asks for jukebox design, 1950s diner music, bubble tube lighting, chrome cabinet UI, flip album selector, coin-operated music machine, or retro diner jukebox interfaces.
---

# Jukebox UI

Use this skill to design and implement interfaces inspired by the 1950s diner jukebox: curved chrome panel surfaces, bubble tube lighting columns, flip-page album selectors, illuminated selection button grids, spinning vinyl records visible behind glass, and neon edge lighting that turns every surface into a glowing communal music experience.

## Non-Negotiable Foundations

- Jukebox UI simulates the 1950s diner jukebox: a chrome-and-glass cabinet that is equal parts music machine, light show, and social centerpiece.
- Curved chrome surfaces are the SIGNATURE structural element — everything curves, nothing has sharp angles. Panels use gradient silver with highlight reflections.
- Bubble tube lighting columns are the signature animation — colored liquid tubes with bubbles rising continuously, framing the central display.
- The flip-page album selector (flipping cards showing album art and song titles) is the primary content display mechanism.
- Illuminated selection button grids (lettered and numbered buttons like A1, B2, C3) are the primary interaction mechanism.
- A vinyl record should be visible spinning behind curved glass, reinforcing the music-machine identity.
- Neon edge lighting outlines every major surface in glowing color (pink, red, blue, green).
- Colors are chrome silver, neon pink/red/blue/green, black, and cream — the classic 1950s diner palette.
- The aesthetic is nostalgic, communal, and exuberant — a machine designed to bring people together around music.

## Core Material Recipes

### 1) Chrome Cabinet Panel

The signature curved chrome housing surface.

- Body: `bg-gradient-to-br from-[#e8e8e8] via-[#c0c0c0] to-[#9a9a9a] rounded-[2rem] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.15)]`.
- Chrome highlight strip: `bg-gradient-to-b from-white/60 via-transparent to-transparent rounded-t-[2rem]`.
- Dome top: `rounded-t-[3rem] border-t-4 border-[#d0d0d0]`.

### 2) Bubble Tube Lighting Column

Animated colored tubes with rising bubbles flanking the display.

- Tube: `w-6 rounded-full bg-gradient-to-b from-[#ff3366]/30 via-[#ff3366]/50 to-[#ff3366]/30 border-2 border-white/40 overflow-hidden relative`.
- Bubbles (CSS): `before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_30%_80%,rgba(255,255,255,0.6)_2px,transparent_2px),radial-gradient(circle_at_60%_60%,rgba(255,255,255,0.5)_1.5px,transparent_1.5px),radial-gradient(circle_at_45%_40%,rgba(255,255,255,0.4)_1px,transparent_1px)] before:animate-[bubble-rise_3s_linear_infinite]`.
- Glow: `shadow-[0_0_12px_rgba(255,51,102,0.4)]`.
- Blue tube variant: `from-[#3366ff]/30 via-[#3366ff]/50` with `shadow-[0_0_12px_rgba(51,102,255,0.4)]`.
- Green tube variant: `from-[#33ff66]/30 via-[#33ff66]/50` with `shadow-[0_0_12px_rgba(51,255,102,0.4)]`.

Bubble rise keyframes:
```css
@keyframes bubble-rise {
  0% { transform: translateY(100%); opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { transform: translateY(-100%); opacity: 0; }
}
```

### 3) Flip-Page Album Selector

Card-based album/song display with flip animation.

- Card frame: `bg-[#1a1a1a] rounded-xl p-4 border-2 border-[#f5cc3a] shadow-[0_4px_16px_rgba(0,0,0,0.5)]`.
- Album art: `w-full h-32 rounded-lg bg-gradient-to-br from-[#ff3366] to-[#3366ff] mb-3 flex items-center justify-center text-white font-bold text-lg`.
- Song label: `text-[#f5cc3a] font-mono text-sm text-center`.
- Selection code: `text-[#ff3366] font-mono font-bold text-xs text-center mt-1` showing "A1", "B7", etc.
- Flip animation: `transition-transform duration-500 [transform-style:preserve-3d]` with rotateY on state change.

### 4) Selection Button Grid

Illuminated letter-number button grid (the core interaction).

- Grid container: `grid grid-cols-5 gap-2 p-4 bg-[#1a1a1a] rounded-lg border-2 border-[#3a3a3a]`.
- Button: `bg-gradient-to-b from-[#ff3366] to-[#cc1144] text-[#fff5e1] font-mono font-bold text-sm w-12 h-12 rounded-lg border-2 border-[#ff6688] shadow-[0_0_8px_rgba(255,51,102,0.5),inset_0_1px_2px_rgba(255,255,255,0.3)] hover:shadow-[0_0_16px_rgba(255,51,102,0.8)] hover:from-[#ff5577] transition-all`.
- Active/selected: `active:translate-y-0.5 active:shadow-[0_0_4px_rgba(255,51,102,0.3)]`.
- Blue button variant: `from-[#3366ff] to-[#1144cc] border-[#6688ff] shadow-[0_0_8px_rgba(51,102,255,0.5)]`.
- Green button variant: `from-[#33cc44] to-[#118822] border-[#66dd77] shadow-[0_0_8px_rgba(51,204,68,0.5)]`.

### 5) Spinning Vinyl Display

Vinyl record visible behind curved glass.

- Record: `w-40 h-40 rounded-full bg-[#1a1a1a] relative shadow-[0_4px_16px_rgba(0,0,0,0.6)] animate-[spin_3s_linear_infinite]`.
- Grooves: `bg-[repeating-radial-gradient(circle_at_center,transparent_0px,transparent_3px,rgba(255,255,255,0.03)_3px,rgba(255,255,255,0.03)_4px)]`.
- Label: `w-12 h-12 rounded-full bg-gradient-to-br from-[#ff3366] to-[#cc1144] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`.
- Center hole: `w-2 h-2 rounded-full bg-[#c0c0c0] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`.
- Glass overlay: `inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-full pointer-events-none`.

### 6) Neon Edge Lighting

Neon glow outline around panels and frames.

- Pink neon border: `border-2 border-[#ff3366] shadow-[0_0_8px_rgba(255,51,102,0.4),0_0_16px_rgba(255,51,102,0.2),inset_0_0_8px_rgba(255,51,102,0.1)]`.
- Blue neon border: `border-2 border-[#3366ff] shadow-[0_0_8px_rgba(51,102,255,0.4),0_0_16px_rgba(51,102,255,0.2)]`.
- Green neon border: `border-2 border-[#33ff66] shadow-[0_0_8px_rgba(51,255,102,0.4),0_0_16px_rgba(51,255,102,0.2)]`.
- Animated pulse: `animate-[neon-pulse_2s_ease-in-out_infinite]`.

Neon pulse keyframes:
```css
@keyframes neon-pulse {
  0%, 100% { box-shadow: 0 0 8px rgba(255,51,102,0.4), 0 0 16px rgba(255,51,102,0.2); }
  50% { box-shadow: 0 0 12px rgba(255,51,102,0.6), 0 0 24px rgba(255,51,102,0.3); }
}
```

### 7) Now Playing Marquee

Scrolling now-playing text like a jukebox header.

- `bg-gradient-to-r from-[#1a1a1a] via-[#3a1a1a] to-[#1a1a1a] text-[#ff3366] font-mono font-bold text-sm uppercase tracking-wider px-4 py-2 rounded-lg border border-[#ff3366]/30 overflow-hidden whitespace-nowrap`.
- Text glow: `[text-shadow:0_0_6px_rgba(255,51,102,0.6)]`.
- Scroll: `animate-[marquee_10s_linear_infinite]`.

### 8) Coin Slot Element

Decorative coin-insert slot.

- `w-16 h-6 bg-[#1a1a1a] rounded-sm border border-[#3a3a3a] mx-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]`.
- Slot line: `w-10 h-1 bg-[#0a0a0a] mx-auto mt-2 rounded-full`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Chrome Silver | `#c0c0c0` | Cabinet body, panels |
| Chrome Light | `#e8e8e8` | Highlight reflections |
| Chrome Dark | `#9a9a9a` | Shadow gradients |
| Neon Pink/Red | `#ff3366` | Primary neon, bubble tubes, selection buttons |
| Neon Blue | `#3366ff` | Secondary neon, bubble tubes, buttons |
| Neon Green | `#33ff66` | Tertiary neon, bubble tubes, buttons |
| Jukebox Gold | `#f5cc3a` | Album frames, trim, accents |
| Cabinet Black | `#1a1a1a` | Display backgrounds, inner panels |
| Deep Black | `#0a0a0a` | Shadows, coin slots |
| Cream | `#fff5e1` | Button text, labels (diner cream) |

Rules: Chrome silver is the dominant structural surface. Neon pink, blue, and green are the accent trio used on bubble tubes, button grids, and edge lighting. Gold for album frames and trim. Black for inner display areas. Cream for text. Everything curves — no sharp angles anywhere.

## Typography Recommendations

Jukebox typography mixes 1950s diner signage with machine-readable labels:

- **Display headings:** Monoton, Bungee Inline, or Rock Salt (1950s neon-sign lettering).
- **Album/song titles:** Monoton or Limelight (retro marquee feel).
- **Labels:** `font-mono text-sm uppercase tracking-wider` (machine label / selection code format).
- **Selection codes:** `font-mono font-bold` showing letter-number pairs (A1, B2, C3).
- **Body:** Bebas Neue or Oswald at `font-normal` (condensed retro signage).
- **Numbers:** JetBrains Mono or VT323 (digital credit display).
- Text on neon elements should glow: `[text-shadow:0_0_6px_currentColor]`.

## Component Architecture Pattern

1. Chrome cabinet panel background (curved, gradient silver, dome-topped).
2. Bubble tube lighting columns flanking the central display (animated, colored).
3. Central flip-page album selector card area (gold-bordered, black background).
4. Selection button grid below or beside the display (illuminated, color-coded).
5. Spinning vinyl record visible behind curved glass.
6. Neon edge lighting outlining all major surfaces.
7. Now-playing scrolling marquee at the top.
8. Coin slot and credit display at the bottom.
9. Gold trim and chrome highlights throughout.

## Interaction Rules

- Default state: glowing, alive, musical — bubble tubes animating, vinyl spinning.
- Hover (buttons): illuminate brighter.
  - `hover:shadow-[0_0_16px_rgba(255,51,102,0.8)] hover:from-[#ff5577] transition-all duration-200`.
- Active (buttons): depress slightly like a physical selection button.
  - `active:translate-y-0.5 active:shadow-[0_0_4px_rgba(255,51,102,0.3)]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#f5cc3a] focus:ring-offset-2 focus:ring-offset-[#1a1a1a]`.
- Selection confirmation: album card flips with `transition-transform duration-500 [transform-style:preserve-3d]`.
- Transitions: `transition-all duration-200` (snappy, mechanical — like pressing a physical button).
- Continuous animations: bubble tubes always rising, vinyl always spinning, neon gently pulsing.

## Reusable Tailwind Tokens

- Chrome panel: `bg-gradient-to-br from-[#e8e8e8] via-[#c0c0c0] to-[#9a9a9a] rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.6)]`
- Bubble tube (pink): `w-6 rounded-full bg-gradient-to-b from-[#ff3366]/30 via-[#ff3366]/50 to-[#ff3366]/30 border-2 border-white/40 overflow-hidden`
- Album card: `bg-[#1a1a1a] rounded-xl p-4 border-2 border-[#f5cc3a] shadow-[0_4px_16px_rgba(0,0,0,0.5)]`
- Selection button (pink): `bg-gradient-to-b from-[#ff3366] to-[#cc1144] text-[#fff5e1] font-mono font-bold rounded-lg border-2 border-[#ff6688] shadow-[0_0_8px_rgba(255,51,102,0.5)]`
- Vinyl record: `rounded-full bg-[#1a1a1a] bg-[repeating-radial-gradient(circle_at_center,transparent_0px,transparent_3px,rgba(255,255,255,0.03)_3px,rgba(255,255,255,0.03)_4px)] animate-[spin_3s_linear_infinite]`
- Neon border (pink): `border-2 border-[#ff3366] shadow-[0_0_8px_rgba(255,51,102,0.4),0_0_16px_rgba(255,51,102,0.2)]`
- Marquee: `bg-gradient-to-r from-[#1a1a1a] via-[#3a1a1a] to-[#1a1a1a] text-[#ff3366] font-mono font-bold [text-shadow:0_0_6px_rgba(255,51,102,0.6)]`

## Quality Checklist (must pass)

- At least one curved chrome panel surface (gradient silver, no sharp angles).
- Bubble tube lighting columns present with rising bubble animation.
- Flip-page album selector card display with gold border.
- Illuminated selection button grid with letter-number codes (A1, B2, C3).
- Spinning vinyl record element visible behind glass.
- Neon edge lighting on at least one major surface.
- Chrome curves everywhere — zero sharp/angular corners.
- Color palette is chrome silver + neon pink/blue/green + gold + black + cream.
- Album cards use gold trim and black background.
- Selection buttons glow with colored shadows on hover.
- Typography mixes retro neon-sign display with monospace machine labels.
- Now-playing scrolling marquee element present.
- The aesthetic reads as 1950s diner jukebox — nostalgic, communal, musical.
- Everything feels alive — tubes bubble, vinyl spins, neon pulses.

## Anti-Patterns

- Sharp corners or angular shapes (jukebox design is ALL curves — domes, arches, rounded edges).
- Flat matte surfaces without chrome gradient (jukebox surfaces are reflective chrome).
- Missing bubble tubes (the rising bubble columns are the signature visual element).
- Missing the selection button grid (lettered/numbered buttons are THE interaction mechanism).
- Missing the vinyl record (the spinning record reinforces the music-machine identity).
- Monochrome palettes (jukebox uses multiple neon colors simultaneously).
- Thin borders (jukebox trim is bold gold `border-2` or `border-4`).
- Static, lifeless surfaces (jukebox is kinetic — tubes bubble, vinyl spins, neon pulses).
- Modern flat-button design (selection buttons are physical, illuminated, with depth).
- Dark-only palettes without chrome (chrome silver is the dominant structural surface).
- Missing gold trim (gold album frames and accents are essential to the diner aesthetic).
- Sans-serif modern typography alone (needs neon-sign display fonts + monospace labels).
- No glow effects (neon edge lighting must illuminate surfaces with layered shadows).

## Accessibility Considerations

- Neon-colored buttons on black display areas provide good contrast for button labels.
- Chrome gradient backgrounds are decorative — place text content on solid dark or cream surfaces.
- Bubble tube animations must respect `prefers-reduced-motion` (stop rising animation, freeze vinyl spin).
- Neon glow shadows should not cause text to become blurry — verify text remains sharp.
- Selection button grids must have adequate touch target size (minimum 44x44px).
- Focus states: `focus:ring-2 focus:ring-[#f5cc3a]` (gold ring visible against dark backgrounds).
- Album card flip animations must respect `prefers-reduced-motion` (instant swap instead of flip).
- Neon text glow (`text-shadow`) must not reduce legibility — test with glow disabled.
- Scrolling marquee text needs an `aria-live="polite"` region for screen reader announcements.
- Decorative elements (bubble tubes, vinyl record, coin slot) must be `aria-hidden="true"`.
- Color should not be the sole indicator of button state — use labels and shape changes too.
- Verify WCAG AA contrast for cream text (`#fff5e1`) on colored button surfaces.
