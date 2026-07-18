---
name: bowling-alley-ui
description: Build bowling alley UI components (retro bowling lanes, glossy wood lanes, scoring displays, pin formations, bowling ball spheres, retro shoes, strike/spare indicators, fluorescent alley lighting) with lane-gradient backgrounds, animated pin knockdowns, and the nostalgic social energy of Friday night league bowling. Trigger this skill when the user asks for bowling alley design, glossy hardwood lane gradient, pin formation grid, bowling ball sphere, retro scoring display, strike spare indicators, fluorescent alley lighting, ball-return track, league bowling aesthetics, Friday night bowling interfaces, or retro bowling alley visuals.
---

# Bowling Alley UI

Use this skill to design and implement interfaces inspired by the retro American bowling alley: glossy hardwood lanes receding under fluorescent light, formations of white-and-red pins waiting at the far end, monospace scoring displays glowing with X and / marks, heavy bowling ball spheres rolling down the oiled wood, the ball-return track humming between frames, and the Friday night league energy of friends gathered for strikes, spares, and the satisfying clatter of pins.

## Non-Negotiable Foundations

- Bowling Alley UI simulates the retro American bowling alley: glossy hardwood lanes stretching under fluorescent overhead lights, white-and-red pins in formation, monospace scoring displays, heavy ball spheres, and the social energy of league night.
- The glossy hardwood lane gradient is the SIGNATURE background — a vertical golden wood-grain gradient that recedes into perspective, oiled and reflective. Every primary surface should reference the lane.
- The pin formation grid is the signature content layout — ten white pins with red neck stripes arranged in the classic triangle (1-2-3-4 rows), used for feature grids, card layouts, and status indicators.
- The bowling ball sphere is the signature accent element — a heavy glossy sphere with a 3-finger drill hole pattern, used for icons, loaders, and focal points.
- The retro scoring display is the signature data presentation — a monospace grid with frames, roll boxes, X for strikes, / for spares, and running totals, glowing like an overhead score panel.
- Overhead fluorescent alley lighting glow is the signature lighting treatment — a cool wash from above with a subtle flicker, casting even light across all surfaces.
- The ball-return track is the signature divider accent — a dark metal track running between lanes, used as section separators and content dividers.
- Strike and spare indicators are the signature success/feedback elements — a bold X for strikes, / for spares, with celebratory glow.
- Colors are lane wood gold, pin white, pin red, alley dark blue-black, fluorescent glow, and bowling ball colors (dark blue, burgundy, black) — the palette of the 1950s-1980s American bowling alley.
- The aesthetic is social, nostalgic, competitive, and warmly lit — a place where the league rolls every Friday night and the pins always reset.

## Core Material Recipes

### 1) Glossy Hardwood Lane Gradient

The signature oiled wood lane background for primary surfaces and hero sections.

- Lane surface: `bg-gradient-to-b from-[#d4a850] via-[#c4a060] to-[#a08040] relative overflow-hidden`.
- Wood grain overlay: `before:absolute before:inset-0 before:bg-[repeating-linear-gradient(90deg,transparent,transparent_3px,rgba(80,50,10,0.08)_3px,rgba(80,50,10,0.08)_4px,transparent_4px,transparent_12px,rgba(80,50,10,0.05)_12px,rgba(80,50,10,0.05)_14px)]`.
- Oil shine streak: `after:absolute after:inset-0 after:bg-[linear-gradient(110deg,transparent_30%,rgba(255,240,200,0.12)_45%,rgba(255,240,200,0.18)_50%,rgba(255,240,200,0.12)_55%,transparent_70%)]`.
- Lane board dividers (vertical planks): `before:absolute before:inset-0 before:bg-[repeating-linear-gradient(90deg,transparent,transparent_39px,rgba(60,35,5,0.15)_39px,rgba(60,35,5,0.15)_40px)]`.
- Perspective lane (receding): `bg-gradient-to-b from-[#a08040] via-[#c4a060] to-[#d4a850] [clip-path:polygon(35%_0,65%_0,100%_100%,0%_100%)]`.

### 2) Pin Formation Grid

Ten white-and-red pins in triangle formation for feature grids, card layouts, and status displays.

- Pin container: `flex flex-col items-center gap-2 py-4`.
- Pin body: `w-8 h-10 bg-gradient-to-b from-[#ffffff] to-[#f0f0e8] rounded-t-full rounded-b-lg shadow-[0_2px_6px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(0,0,0,0.1)] relative`.
- Red neck stripe: `before:absolute before:top-2 before:inset-x-0 before:h-1.5 before:bg-[#c41e1e] before:shadow-[inset_0_1px_1px_rgba(0,0,0,0.2)]`.
- Pin highlight: `after:absolute after:top-0 after:left-1.5 after:w-1.5 after:h-6 after:bg-white/60 after:rounded-full`.
- Row layout (1-2-3-4 triangle):
  - Row 1: `flex justify-center` (1 pin)
  - Row 2: `flex justify-center gap-3` (2 pins)
  - Row 3: `flex justify-center gap-3` (3 pins)
  - Row 4: `flex justify-center gap-3` (4 pins)
- Knocked-down pin variant: `opacity-30 rotate-45 translate-y-1 transition-all duration-500`.
- Standing pin glow: `shadow-[0_0_8px_rgba(255,255,255,0.3),0_2px_6px_rgba(0,0,0,0.3)]`.

Pin knockdown keyframes:
```css
@keyframes pin-knockdown {
  0% { transform: rotate(0deg) translateY(0); opacity: 1; }
  40% { transform: rotate(15deg) translateY(2px); }
  100% { transform: rotate(75deg) translateY(6px); opacity: 0.3; }
}
```

### 3) Bowling Ball Sphere

Heavy glossy sphere accent for icons, loaders, and focal points.

- Ball body: `w-16 h-16 rounded-full bg-gradient-to-br from-[#1a2a6c] via-[#2a3a7c] to-[#0a1a4c] shadow-[0_4px_12px_rgba(0,0,0,0.5),inset_-4px_-4px_8px_rgba(0,0,0,0.4),inset_4px_4px_8px_rgba(255,255,255,0.15)] relative`.
- Finger holes: `before:absolute before:top-3 before:left-5 before:w-2 before:h-2 before:rounded-full before:bg-black/60 before:shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]`.
- Second finger hole: `after:absolute after:top-3 after:left-8 after:w-2 after:h-2 after:rounded-full after:bg-black/60 after:shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]`.
- Third finger hole (thumb): use a child element `absolute top-6 left-7 w-2 h-2 rounded-full bg-black/60 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]`.
- Surface shine: `absolute top-2 left-3 w-4 h-4 rounded-full bg-white/20 blur-[2px]`.
- Burgundy variant: `bg-gradient-to-br from-[#7a1a2a] via-[#8a2a3a] to-[#5a0a1a]`.
- Black variant: `bg-gradient-to-br from-[#2a2a2a] via-[#1a1a1a] to-[#0a0a0a]`.

Ball roll keyframes:
```css
@keyframes ball-roll {
  0% { transform: rotate(0deg) translateX(-100px); }
  100% { transform: rotate(720deg) translateX(100px); }
}
```

### 4) Retro Scoring Display

Monospace frame grid with strike/spare indicators glowing like an overhead score panel.

- Score panel: `bg-[#0a0a1a] rounded-lg p-4 border-2 border-[#3a3a5a] shadow-[0_4px_16px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.05)]`.
- Frame box: `border border-[#3a3a5a] font-mono text-[#5acaf0] text-center text-sm [text-shadow:0_0_6px_rgba(90,202,240,0.6)]`.
- Roll cell: `w-8 h-8 flex items-center justify-center border-r border-[#2a2a4a] text-lg font-bold`.
- Strike (X): `text-[#ff6b3a] font-black text-xl [text-shadow:0_0_8px_rgba(255,107,58,0.8),0_0_16px_rgba(255,107,58,0.4)]`.
- Spare (/): `text-[#ffd93a] font-black text-xl [text-shadow:0_0_8px_rgba(255,217,58,0.8),0_0_16px_rgba(255,217,58,0.4)]`.
- Frame total: `text-[#5acaf0] font-bold text-sm [text-shadow:0_0_4px_rgba(90,202,240,0.5)]`.
- Current frame highlight: `bg-[#1a1a3a] border-[#5acaf0] shadow-[inset_0_0_8px_rgba(90,202,240,0.2)]`.

Score flicker keyframes:
```css
@keyframes score-flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.97; }
  52% { opacity: 0.93; }
  53% { opacity: 1; }
}
```

### 5) Fluorescent Alley Lighting Glow

Overhead fluorescent wash treatment for hero sections and ambient lighting.

- Light wash container: `relative before:absolute before:inset-x-0 before:top-0 before:h-1/2 before:bg-gradient-to-b before:from-[rgba(180,200,240,0.15)] before:to-transparent before:pointer-events-none`.
- Fluorescent tube strip: `h-2 bg-gradient-to-r from-transparent via-[rgba(200,220,255,0.6)] to-transparent shadow-[0_0_20px_rgba(200,220,255,0.4),0_0_40px_rgba(200,220,255,0.2)]`.
- Light fixture housing: `h-1 bg-gradient-to-r from-[#3a3a4a] via-[#5a5a6a] to-[#3a3a4a]`.
- Ambient glow: `after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_top,rgba(200,220,255,0.08),transparent_70%)] after:pointer-events-none`.

Fluorescent flicker keyframes:
```css
@keyframes fluoro-flicker {
  0%, 100% { opacity: 0.95; }
  3% { opacity: 0.7; }
  4% { opacity: 0.95; }
  47% { opacity: 0.95; }
  48% { opacity: 0.85; }
  49% { opacity: 0.95; }
}
```

### 6) Ball-Return Track Divider

Dark metal track accent for section separators and content dividers.

- Track body: `h-3 bg-gradient-to-b from-[#2a2a3a] via-[#1a1a2a] to-[#2a2a3a] rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.5),0_2px_4px_rgba(0,0,0,0.3)]`.
- Track rail highlight: `before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-[#4a4a5a] before:rounded-full`.
- Ball resting on track: `w-6 h-6 rounded-full bg-gradient-to-br from-[#1a2a6c] to-[#0a1a4c] shadow-[0_2px_4px_rgba(0,0,0,0.5),inset_-2px_-2px_4px_rgba(0,0,0,0.3)] mx-auto -mt-2`.
- Track end cap: `w-4 h-4 rounded-full bg-gradient-to-b from-[#5a5a6a] to-[#3a3a4a] border border-[#2a2a3a]`.

### 7) Strike/Spare Celebration Burst

Animated feedback burst for success states, achievements, and scoring milestones.

- Burst container: `absolute inset-0 flex items-center justify-center pointer-events-none`.
- Burst X (strike): `text-[#ff6b3a] font-black text-6xl [text-shadow:0_0_12px_rgba(255,107,58,0.9),0_0_24px_rgba(255,107,58,0.5),0_0_48px_rgba(255,107,58,0.3)] animate-[strike-burst_0.8s_ease-out]`.
- Spark lines: child elements radiating outward `absolute w-8 h-0.5 bg-[#ffd93a] origin-left [text-shadow:0_0_6px_rgba(255,217,58,0.8)]`.
- Spare slash: `text-[#ffd93a] font-black text-5xl [text-shadow:0_0_10px_rgba(255,217,58,0.8),0_0_20px_rgba(255,217,58,0.4)]`.

Strike burst keyframes:
```css
@keyframes strike-burst {
  0% { transform: scale(0.3); opacity: 0; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}
```

### 8) Retro Bowling Shoe Accent

Stitched leather shoe silhouette for decorative markers and retro branding accents.

- Shoe body: `w-16 h-8 bg-gradient-to-b from-[#7a1a2a] to-[#5a0a1a] rounded-l-full rounded-r-lg shadow-[0_2px_6px_rgba(0,0,0,0.4)] relative`.
- Toe cap: `absolute left-0 top-0 w-6 h-8 bg-gradient-to-b from-[#5a0a1a] to-[#3a000a] rounded-l-full`.
- Lace stripe: `absolute left-6 top-1 w-1 h-6 bg-[#9a2a3a] rounded-full after:absolute after:inset-x-0 after:top-1 after:h-0.5 after:bg-[#3a000a]`.
- Sole: `absolute bottom-0 inset-x-0 h-1.5 bg-gradient-to-b from-[#d4d0c8] to-[#9a968e] rounded-b-lg`.
- Heel accent: `absolute right-0 bottom-1.5 w-3 h-1 bg-[#d4d0c8] rounded-r-sm`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Lane Wood Light | `#d4a850` | Lane gradient top, wood highlights, warm surface accents |
| Lane Wood Mid | `#c4a060` | Primary lane surface, panel backgrounds with wood treatment |
| Lane Wood Dark | `#a08040` | Lane gradient bottom, wood shadows, plank dividers |
| Lane Wood Deep | `#604020` | Wood grain lines, deep grain overlay, lane edges |
| Pin White | `#f5f5f0` | Pin bodies, light surface accents, text on dark backgrounds |
| Pin Red | `#c41e1e` | Pin neck stripes, primary accent, urgent indicators |
| Pin Red Glow | `#e83838` | Pin stripe highlights, red glow accents |
| Alley Dark | `#1a1a2a` | Backgrounds, score panels, ball-return tracks, deep shadows |
| Alley Darker | `#0a0a1a` | Score display interior, deep backgrounds, high-contrast panels |
| Alley Panel | `#2a2a3a` | Secondary panels, divider surfaces, track bodies |
| Fluorescent Blue | `#5acaf0` | Score display text, cool glow accents, current-frame highlight |
| Fluorescent Wash | `#c8dcff` | Overhead lighting glow, ambient light treatment |
| Strike Orange | `#ff6b3a` | Strike (X) indicator, celebration bursts, high-energy feedback |
| Spare Gold | `#ffd93a` | Spare (/) indicator, spark lines, achievement accents |
| Ball Blue | `#1a2a6c` | Bowling ball sphere, primary dark accent |
| Ball Burgundy | `#7a1a2a` | Bowling ball variant, shoe leather, secondary dark accent |
| Ball Black | `#1a1a1a` | Bowling ball variant, finger holes, deepest shadows |
| Score Panel Border | `#3a3a5a` | Score frame borders, secondary structural borders |

Rules: Lane wood is the dominant surface material — every primary background references the glossy hardwood gradient. Alley dark is the dominant background for score displays, tracks, and deep sections. Pin white and pin red are the primary content colors — pins are always white with red stripes. Fluorescent blue is the signature score-display glow color. Strike orange and spare gold are reserved for scoring feedback and celebrations only. Bowling ball colors (blue, burgundy, black) are used for ball spheres and dark accent elements. The palette balances warm wood tones with cool fluorescent glows.

## Typography Recommendations

Bowling Alley typography mixes retro scoreboard monospace with bold league-night signage:

- **Display headings:** Bungee, Anton, or Oswald (bold condensed signage above the lanes).
- **Score display:** VT323, DSEG7 Classic, or Share Tech Mono (overhead digital scoreboard monospace).
- **Lane signage:** Bungee Inline or Monoton (backlit lane number signage).
- **Score values (X, /, numbers):** `font-mono font-black text-xl` (bold monospace for scoring cells).
- **Body text:** Roboto Condensed or Barlow Condensed at `font-normal` (compact readability).
- **Scoreboard labels:** `font-mono font-bold text-xs uppercase tracking-wider` (frame labels, player names).
- **Specials / league announcements:** Bungee or Russo One (promotional league-night posters).
- **Numbers (scores, speeds):** VT323 or Share Tech Mono with glow: `[text-shadow:0_0_6px_currentColor]`.
- Text on score displays should glow: `[text-shadow:0_0_6px_rgba(90,202,240,0.6)]`.
- Text on lane wood should use dark wood-brown (`#604020`) for warm contrast.
- Text on alley dark should use fluorescent blue or pin white for cool contrast.

## Component Architecture Pattern

1. Glossy hardwood lane gradient as the primary background surface (golden wood grain with oil shine, establishing the alley immediately).
2. Fluorescent alley lighting glow washing from the top of the layout (cool ambient light treatment).
3. Retro scoring display panel as the primary data/dashboard area (monospace frame grid with X and / indicators, glowing).
4. Pin formation grid for feature cards, status indicators, or content layout (ten pins in triangle, knocked-down for inactive states).
5. Bowling ball sphere accents for icons, loaders, and focal points (heavy glossy spheres with finger holes).
6. Ball-return track dividers between major sections (dark metal track with resting ball accent).
7. Strike/spare celebration bursts for success feedback and achievement milestones (animated X or / with glow).
8. Retro bowling shoe accents as decorative branding markers (stitched leather silhouettes).
9. Lane signage headers with backlit bold condensed type (lane numbers, section titles).
10. Scoreboard footer with running totals and league-night energy closing the layout.

## Interaction Rules

- Default state: the alley is lit and alive — fluorescent lights gently flicker, pins stand in formation, scoreboard glows softly.
- Hover (pins): pin tilts slightly, highlighting readiness.
  - `hover:rotate-3 hover:shadow-[0_0_12px_rgba(255,255,255,0.4),0_2px_6px_rgba(0,0,0,0.3)] transition-all duration-300`.
- Hover (bowling ball): ball gains a stronger shine and subtle scale.
  - `hover:scale-105 hover:shadow-[0_6px_16px_rgba(0,0,0,0.5),inset_4px_4px_8px_rgba(255,255,255,0.25)] transition-all duration-200`.
- Active (buttons): depress like pushing a bowling ball forward.
  - `active:translate-x-1 active:scale-95`.
- Knockdown (pin click/tap): pin rotates and falls with knockdown animation.
  - `animate-[pin-knockdown_0.5s_ease-in_forwards]`.
- Strike celebration: X burst with spark lines radiating, then settles.
- Spare feedback: / slash glows gold and pulses.
- Score cell update: cell flashes fluorescent blue, value counts up.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#5acaf0] focus:ring-offset-2 focus:ring-offset-[#1a1a2a]`.
- Transitions: `transition-all duration-300` (smooth, physical — like a ball rolling down the lane).
- Continuous animations: fluorescent light flicker, scoreboard subtle flicker, pins gently standing with idle sway.

Pin idle sway keyframes:
```css
@keyframes pin-sway {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(0.5deg); }
}
```

## Reusable Tailwind Tokens

- Lane gradient: `bg-gradient-to-b from-[#d4a850] via-[#c4a060] to-[#a08040]`
- Wood grain overlay: `bg-[repeating-linear-gradient(90deg,transparent,transparent_3px,rgba(80,50,10,0.08)_3px,rgba(80,50,10,0.08)_4px)]`
- Oil shine: `bg-[linear-gradient(110deg,transparent_30%,rgba(255,240,200,0.15)_50%,transparent_70%)]`
- Pin body: `bg-gradient-to-b from-[#ffffff] to-[#f0f0e8] rounded-t-full rounded-b-lg shadow-[0_2px_6px_rgba(0,0,0,0.3)]`
- Pin stripe: `bg-[#c41e1e]`
- Ball sphere: `bg-gradient-to-br from-[#1a2a6c] via-[#2a3a7c] to-[#0a1a4c] rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.5),inset_-4px_-4px_8px_rgba(0,0,0,0.4),inset_4px_4px_8px_rgba(255,255,255,0.15)]`
- Score panel: `bg-[#0a0a1a] rounded-lg border-2 border-[#3a3a5a] shadow-[0_4px_16px_rgba(0,0,0,0.5)]`
- Score text: `font-mono text-[#5acaf0] [text-shadow:0_0_6px_rgba(90,202,240,0.6)]`
- Strike indicator: `text-[#ff6b3a] font-black [text-shadow:0_0_8px_rgba(255,107,58,0.8),0_0_16px_rgba(255,107,58,0.4)]`
- Spare indicator: `text-[#ffd93a] font-black [text-shadow:0_0_8px_rgba(255,217,58,0.8),0_0_16px_rgba(255,217,58,0.4)]`
- Fluorescent glow: `shadow-[0_0_20px_rgba(200,220,255,0.4),0_0_40px_rgba(200,220,255,0.2)]`
- Ball-return track: `bg-gradient-to-b from-[#2a2a3a] via-[#1a1a2a] to-[#2a2a3a] rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]`
- Alley dark panel: `bg-[#1a1a2a] rounded-lg border border-[#3a3a5a] shadow-[0_4px_12px_rgba(0,0,0,0.4)]`

## Quality Checklist (must pass)

- At least one glossy hardwood lane gradient surface (golden wood grain with oil shine).
- Pin formation grid present with white pins and red neck stripes (ten-pin triangle layout).
- At least one bowling ball sphere accent (glossy dark sphere with finger holes).
- Retro scoring display panel present with monospace frame grid and glowing X// indicators.
- Fluorescent alley lighting glow treatment visible on at least one section (cool wash from above).
- Ball-return track divider present between major sections (dark metal track).
- Strike/spare celebration burst element available for success feedback states.
- Wood grain texture visible on lane surfaces (repeating vertical grain lines).
- Score display text glows with fluorescent blue text-shadow effect.
- Color palette is lane wood + pin white/red + alley dark + fluorescent blue + strike orange + spare gold.
- Typography mixes condensed bold signage with monospace scoreboard display.
- Pins use the correct 1-2-3-4 triangle formation, not a simple grid or row.
- The aesthetic reads as retro American bowling alley — social, competitive, warmly fluorescent-lit.
- Everything feels like Friday night league bowling — pins ready, scoreboard glowing, balls rolling.

## Anti-Patterns

- Missing the glossy hardwood lane gradient (the oiled wood lane is the instant alley identity signal).
- Pins without red neck stripes (the red stripe on white is the signature pin identity).
- Flat matte surfaces without oil shine (bowling lanes are glossy and reflective — never matte).
- Pins arranged in a simple row or grid instead of the triangle formation (the 1-2-3-4 triangle is iconic).
- Missing the bowling ball sphere accent (the heavy glossy ball is the signature interactive element).
- Score display without glow (the monospace scoreboard text must illuminate).
- Using generic green for "go" or "success" (bowling uses strike orange and spare gold for scoring feedback).
- Modern minimal palettes (bowling alley design is warm wood + cool fluorescent — not sterile).
- Thin borders on score panels (scoreboard frames use bold `border-2` metal borders).
- Static, lifeless pins (pins should have idle sway and knockdown animations — the alley is active).
- Flat bowling ball design (balls should have finger holes, inset shadows, and glossy highlights for weight).
- Missing fluorescent lighting treatment (the overhead fluorescent wash is the signature ambient light).
- Sans-serif body text without monospace score elements (needs both condensed signage and monospace scoring).
- No strike/spare indicators (X and / are the iconic scoring symbols — they must appear).
- Overuse of dark alley backgrounds without wood lane contrast (balance dark score panels with warm wood).
- Sterile, corporate feel (the bowling alley is social, nostalgic, and full of league-night energy).

## Accessibility Considerations

- Pin formation grids are decorative layouts — ensure content within pins has proper text contrast on white surfaces.
- Score display text uses fluorescent blue glow on near-black backgrounds — verify WCAG AA contrast for `#5acaf0` on `#0a0a1a`.
- Strike (orange) and spare (gold) indicators must not rely on color alone — include the X and / text symbols.
- Fluorescent flicker animation must respect `prefers-reduced-motion` (steady glow instead of flickering).
- Pin knockdown animation must respect `prefers-reduced-motion` (instant state change instead of animated fall).
- Strike burst celebration must respect `prefers-reduced-motion` (static display instead of animated burst).
- Ball roll animation must respect `prefers-reduced-motion` (no rolling, static positioning).
- Wood grain and oil shine overlays are decorative — `aria-hidden="true"` on purely decorative texture layers.
- Bowling ball, shoe accents, and ball-return track decorative elements must be `aria-hidden="true"`.
- Focus states: `focus:ring-2 focus:ring-[#5acaf0]` (fluorescent blue ring visible against wood and dark backgrounds).
- Touch targets minimum 44x44px on all interactive pins, balls, and score cells.
- Color should not be the sole indicator of pin standing/knocked-down state — include opacity and rotation cues.
- Verify WCAG AA contrast for dark wood-brown (`#604020`) text on lane wood light (`#d4a850`) surfaces.
- Verify WCAG AA contrast for pin white (`#f5f5f0`) text on alley dark (`#1a1a2a`) surfaces.
- Score glow shadows must be tested with and without glow to ensure readability in both states.
- Pin formation content must be navigable via keyboard, with logical tab order following the triangle layout.
