---
name: game-boy-ui
description: Build Game Boy UI components (Nintendo handheld console, pea-green LCD screen, D-pad and A/B buttons, cartridge slot, link cable, 4-shades-of-green Dot Matrix display, chunky gray plastic shell) with retro handheld gaming aesthetics, DMG-01 color palette, and the monochromatic charm of 1989 portable gaming. Trigger this skill when the user asks for Game Boy design, DMG-01 aesthetics, pea-green LCD, D-pad buttons, cartridge slot, link cable port, Dot Matrix display, 4-shade green palette, chunky gray plastic shell, monochrome pixel gaming interfaces, or 1989 Nintendo handheld retro aesthetics.
---

# Game Boy UI

Use this skill to design and implement interfaces inspired by the Nintendo Game Boy DMG-01: a chunky gray plastic shell housing a pea-green Dot Matrix LCD screen, a directional D-pad cross, circular A/B action buttons, pill-shaped START/SELECT buttons, a top-loading cartridge slot, and a side link cable port — the entire experience rendered in four shades of green on a monochrome pixel grid that defined portable gaming in 1989.

## Non-Negotiable Foundations

- Game Boy UI simulates the Nintendo DMG-01: a chunky gray plastic handheld with a green monochrome LCD, physical controls, and a cartridge-based game system.
- The chunky gray plastic shell is the SIGNATURE structural element — a rounded rectangular body with a gradient from light gray to darker gray, thick bezels, and visible seam lines. The shell is the container for everything.
- The pea-green LCD screen is the SIGNATURE display surface — a recessed green screen with a 4-shade monochrome palette (lightest green, light green, dark green, darkest green) on a characteristic yellowish-green background.
- The Dot Matrix grid texture is the signature screen overlay — a faint pixel grid pattern visible on the LCD surface that reinforces the low-resolution monochrome display identity.
- The D-pad (directional cross) is the signature navigation control — a plus-shaped cross pad on the lower left of the shell with dark plastic and rounded arm ends.
- The A/B action buttons are the signature interaction control — two circular burgundy/maroon buttons on the lower right, angled diagonally, with bold sans-serif labels.
- The START/SELECT pill buttons are the signature secondary controls — small angled pill-shaped buttons centered below the screen, dark gray with labels.
- The cartridge slot is the signature top-edge element — a recessed slot on the top of the shell where game cartridges are inserted, visible as a dark groove.
- The link cable port is the signature side-edge element — a small connector recess on the side for multiplayer linking.
- Colors are strictly the DMG-01 palette: shell grays, four LCD greens (lightest `#9bbc0f`, light `#8bac0f`, dark `#306230`, darkest `#0f380f`), and the burgundy A/B buttons.
- The aesthetic is retro, monochromatic, pixelated, and charmingly limited — four shades of green tell the entire story.

## Core Material Recipes

### 1) Chunky Gray Plastic Shell

The signature DMG-01 body container — thick, rounded, with visible plastic gradient.

- Body: `bg-gradient-to-b from-[#c4c8c4] via-[#b8bcb8] to-[#8a8e8a] rounded-[2rem] rounded-tr-none p-8 shadow-[0_8px_24px_rgba(0,0,0,0.35),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-3px_6px_rgba(0,0,0,0.15)]`.
- Right-cut corner: `rounded-tr-none` (the DMG-01 has a distinctive cut top-right corner).
- Plastic seam line: `before:absolute before:inset-x-4 before:top-1/2 before:h-px before:bg-[#8a8e8a]/50`.
- Speaker grille: `absolute bottom-4 right-6 grid grid-cols-3 gap-1` with `w-1.5 h-1.5 rounded-full bg-[#6a6e6a]/60 shadow-[inset_0_1px_1px_rgba(0,0,0,0.4)]` per hole.
- Bottom corner screws: `w-2 h-2 rounded-full bg-[#6a6e6a] shadow-[inset_0_1px_1px_rgba(0,0,0,0.3)]`.

### 2) Pea-Green LCD Screen

The signature monochrome display surface with 4-shade green palette.

- Screen bezel: `bg-[#5a5e5a] rounded-lg p-3 shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)] border border-[#4a4e4a]`.
- Screen surface: `bg-[#9bbc0f] rounded-sm p-4 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),0_0_0_1px_rgba(0,0,0,0.1)] relative overflow-hidden`.
- Dot Matrix grid overlay: `before:absolute before:inset-0 before:bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(15,56,15,0.06)_3px,rgba(15,56,15,0.06)_4px),repeating-linear-gradient(90deg,transparent,transparent_3px,rgba(15,56,15,0.06)_3px,rgba(15,56,15,0.06)_4px)] before:pointer-events-none`.
- Screen glare: `after:absolute after:inset-0 after:bg-gradient-to-br after:from-white/15 after:via-transparent after:to-transparent after:rounded-sm after:pointer-events-none`.
- Power LED: `w-2 h-2 rounded-full bg-[#ff0000] shadow-[0_0_4px_rgba(255,0,0,0.6)] absolute -left-1 top-1/2`.
- "DOT MATRIX WITH STEREO SOUND" label: `text-[#4a4e4a] font-mono text-[6px] uppercase tracking-wider text-center mt-1`.

### 3) Four-Shade Green Palette Elements

The signature DMG-01 monochrome rendering system — all content uses only these four greens.

- Lightest (background/empty): `bg-[#9bbc0f] text-[#0f380f]` — LCD base green, lightest shade.
- Light (highlights): `bg-[#8bac0f] text-[#0f380f]` — lighter mid-tone for secondary elements.
- Dark (mid-objects): `bg-[#306230] text-[#9bbc0f]` — darker mid-tone for primary content blocks.
- Darkest (text/borders): `bg-[#0f380f] text-[#9bbc0f]` — darkest green for text, borders, sprites.
- Border (darkest): `border-[#0f380f]`.
- Shadow (dark): `shadow-[0_2px_0_#306230]` (pixel-art drop shadow using the dark shade).
- Dithering pattern: `bg-[repeating-conic-gradient(#9bbc0f_0%_25%,#306230_0%_50%)] bg-[length:4px_4px]` (checkerboard dithering between two shades).

### 4) D-Pad Cross Control

The signature directional pad — plus-shaped cross on the lower-left of the shell.

- Cross container: `relative w-16 h-16`.
- Vertical arm: `absolute top-0 left-1/2 -translate-x-1/2 w-5 h-16 bg-[#1a1a1a] rounded-md shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),inset_0_-1px_2px_rgba(0,0,0,0.4),0_2px_4px_rgba(0,0,0,0.3)]`.
- Horizontal arm: `absolute top-1/2 left-0 -translate-y-1/2 w-16 h-5 bg-[#1a1a1a] rounded-md shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),inset_0_-1px_2px_rgba(0,0,0,0.4),0_2px_4px_rgba(0,0,0,0.3)]`.
- Center hub: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#0a0a0a] rounded-sm shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)]`.
- Center dot: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#3a3a3a]`.
- Active direction: `active:translate-y-px active:shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)]`.

### 5) A/B Action Buttons

The signature circular action buttons — burgundy/maroon, angled diagonally on the lower-right.

- Button pair container: `flex gap-3 -rotate-[25deg] origin-center`.
- Button A: `w-10 h-10 rounded-full bg-gradient-to-br from-[#8b1a3a] to-[#5a0e25] shadow-[inset_0_2px_3px_rgba(255,255,255,0.2),inset_0_-2px_3px_rgba(0,0,0,0.3),0_3px_6px_rgba(0,0,0,0.3)] flex items-center justify-center`.
- Button B: `w-10 h-10 rounded-full bg-gradient-to-br from-[#8b1a3a] to-[#5a0e25] shadow-[inset_0_2px_3px_rgba(255,255,255,0.2),inset_0_-2px_3px_rgba(0,0,0,0.3),0_3px_6px_rgba(0,0,0,0.3)] flex items-center justify-center`.
- Button label: `text-[#c4a8b4] font-bold text-xs` showing "A" or "B".
- Button base ring: `ring-2 ring-[#6a6e6a] ring-offset-2 ring-offset-[#b8bcb8]`.
- Active: `active:translate-y-0.5 active:shadow-[inset_0_1px_3px_rgba(0,0,0,0.4)]`.

### 6) START/SELECT Pill Buttons

The signature small angled pill buttons centered below the screen.

- Container: `flex gap-4 -rotate-[25deg]`.
- Button: `w-12 h-4 rounded-full bg-gradient-to-b from-[#3a3e3a] to-[#1a1e1a] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_2px_3px_rgba(0,0,0,0.3)]`.
- Label: `text-[#3a3e3a] font-mono text-[8px] uppercase tracking-wider mt-1 text-center` showing "START" or "SELECT".
- Active: `active:translate-y-px active:shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)]`.

### 7) Cartridge Slot

The signature top-loading game cartridge slot — a recessed dark groove on the top edge.

- Slot housing: `absolute -top-1 left-1/2 -translate-x-1/2 w-48 h-6 bg-[#1a1a1a] rounded-t-md shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)] flex items-center justify-center`.
- Inner slot: `w-40 h-2 bg-[#0a0a0a] rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]`.
- Cartridge (inserted): `w-36 h-20 bg-gradient-to-b from-[#c4c8c4] to-[#8a8e8a] rounded-sm border-2 border-[#4a4e4a] shadow-[0_4px_8px_rgba(0,0,0,0.3)] -translate-y-8`.
- Cartridge label: `bg-[#faf5ea] mx-1 my-2 rounded-sm p-2 border border-[#c0c0c0]`.
- Label text: `text-[#0f380f] font-mono text-[6px] uppercase tracking-wider text-center font-bold`.

### 8) Link Cable Port

The signature side connector for multiplayer linking — a small recessed port on the side.

- Port housing: `absolute right-0 top-1/3 w-3 h-8 bg-[#1a1a1a] rounded-r-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]`.
- Connector pins: `flex flex-col gap-px justify-center items-center h-full py-1` with 6 small `w-2 h-0.5 bg-[#5a5e5a]` pins.
- Port cover (closed): `w-3 h-8 bg-[#a8aca8] rounded-r-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]`.

### 9) Dot Matrix Pixel Text

The signature monospace pixel rendering for all screen content.

- Screen text: `font-mono text-[#0f380f] text-sm leading-tight tracking-tight` on `bg-[#9bbc0f]`.
- Pixel heading: `font-mono font-bold text-[#0f380f] text-lg uppercase` on `bg-[#9bbc0f]`.
- Inverted text: `font-mono text-[#9bbc0f] text-sm` on `bg-[#0f380f]` (dark textbox with light text).
- Pixel border box: `border-2 border-[#0f380f] bg-[#9bbc0f] p-2` (classic dialogue box frame).
- Selection cursor: `text-[#0f380f]` with `before:content-['▶'] before:mr-1` (pixel arrow cursor).

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Shell Gray Light | `#c4c8c4` | Shell top surface, highlights, cartridge body |
| Shell Gray Mid | `#b8bcb8` | Shell mid-tone, button base rings |
| Shell Gray Dark | `#8a8e8a` | Shell bottom gradient, shadows, port covers |
| Shell Gray Shadow | `#6a6e6a` | Seam lines, speaker holes, screw recesses |
| Bezel Gray | `#5a5e5a` | Screen bezel, button mounting areas |
| Bezel Dark | `#4a4e4a` | Bezel borders, deep plastic shadows |
| LCD Lightest | `#9bbc0f` | Screen background, empty areas, lightest shade |
| LCD Light | `#8bac0f` | Lighter mid-tone, secondary screen elements |
| LCD Dark | `#306230` | Darker mid-tone, primary screen blocks |
| LCD Darkest | `#0f380f` | Text, borders, sprites, darkest shade |
| Button Burgundy | `#8b1a3a` | A/B action buttons, primary button accents |
| Button Burgundy Dark | `#5a0e25` | Button shadow gradient, pressed states |
| D-Pad Black | `#1a1a1a` | D-pad arms, START/SELECT bodies, cartridge slot |
| Power LED Red | `#ff0000` | Power indicator LED |
| Label Cream | `#faf5ea` | Cartridge labels, off-screen documentation text |

Rules: The shell uses three gray tones in a vertical gradient (light top to dark bottom). The LCD screen uses STRICTLY four shades of green — `#9bbc0f`, `#8bac0f`, `#306230`, `#0f380f` — and nothing else appears on the screen. The A/B buttons are burgundy/maroon, the only non-gray non-green color on the device. The D-pad and START/SELECT are dark gray/black plastic. Text on the LCD is always darkest green on lightest green background (or inverted). Dithering (checkerboard between two shades) simulates intermediate tones.

## Typography Recommendations

Game Boy typography is strictly monospace pixel fonts simulating the DMG-01 BIOS rendering:

- **All screen text:** Press Start 2P, VT323, or Silkscreen (monospace pixel font matching the Game Boy BIOS).
- **Screen headings:** Press Start 2P at `font-bold text-sm uppercase tracking-wide` (pixel-art bold titles).
- **Dialogue boxes:** VT323 at `text-base leading-tight` inside a `border-2 border-[#0f380f]` box (classic JRPG dialogue).
- **Menu items:** Press Start 2P at `text-xs` with a pixel arrow cursor `▶` for selection.
- **Numbers (score/HP):** VT323 at `text-lg font-bold` (score counter style).
- **Cartridge label text:** `font-mono text-[6px] uppercase tracking-wider font-bold` (tiny printed label).
- **Off-shell UI (meta/documentation):** `font-mono text-[#4a4e4a] text-xs uppercase` (printed manual style).
- All text renders at small sizes to simulate the 160x144 pixel display density.
- Anti-aliasing should be disabled on screen text for authentic pixel rendering: `[-webkit-font-smoothing:none]`.

## Component Architecture Pattern

1. Chunky gray plastic shell as the outermost container (rounded rectangle, gradient gray, cut top-right corner).
2. Screen bezel recessed into the upper-center of the shell (dark gray inset border).
3. Pea-green LCD screen inside the bezel (4-shade green, Dot Matrix grid overlay, glare reflection).
4. Power LED and "DOT MATRIX WITH STEREO SOUND" label flanking the screen.
5. D-pad cross control on the lower-left of the shell (plus-shaped dark plastic).
6. A/B action buttons on the lower-right of the shell (burgundy circular, angled diagonally).
7. START/SELECT pill buttons centered below the screen (small, angled, dark gray).
8. Cartridge slot on the top edge (recessed dark groove, optionally with cartridge inserted).
9. Link cable port on the right side edge (small recessed connector).
10. Speaker grille on the bottom-right of the shell back (grid of small holes).
11. All screen content rendered in 4-shade green monochrome with pixel font.

## Interaction Rules

- Default state: static, pixelated, monochromatic — screen shows content in 4 shades of green, buttons are unpressed.
- Hover (D-pad/buttons): subtle lightening of plastic gradient to show pressability.
  - `hover:brightness-110 transition-all duration-100`.
- Active (A/B buttons): depress into the shell with shadow inversion.
  - `active:translate-y-1 active:shadow-[inset_0_1px_3px_rgba(0,0,0,0.4)] transition-all duration-75`.
- Active (D-pad): depress the specific arm, not the whole cross.
  - `active:translate-y-px active:shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)]`.
- Active (START/SELECT): tiny depression, barely visible.
  - `active:translate-y-px active:shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#9bbc0f] focus:ring-offset-2 focus:ring-offset-[#5a5e5a]`.
- Screen content transitions: pixelated blink for selection changes.
  - `animate-[pixel-blink_0.5s_steps(2)_infinite]`.
- Dialogue text: typewriter reveal effect character by character.
- Transitions: instant or stepped (`duration-75`) — the Game Boy has no smooth animation, only frame-stepped changes.
- No smooth easing on screen content — transitions are `steps()` to simulate frame-by-frame pixel updates.

Pixel blink keyframes:
```css
@keyframes pixel-blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}
```

Typewriter keyframes:
```css
@keyframes typewriter {
  from { clip-path: inset(0 100% 0 0); }
  to { clip-path: inset(0 0 0 0); }
}
```

## Reusable Tailwind Tokens

- Shell body: `bg-gradient-to-b from-[#c4c8c4] via-[#b8bcb8] to-[#8a8e8a] rounded-[2rem] rounded-tr-none shadow-[0_8px_24px_rgba(0,0,0,0.35),inset_0_2px_4px_rgba(255,255,255,0.4)]`
- LCD screen: `bg-[#9bbc0f] rounded-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] relative overflow-hidden`
- Dot Matrix grid: `before:absolute before:inset-0 before:bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(15,56,15,0.06)_3px,rgba(15,56,15,0.06)_4px),repeating-linear-gradient(90deg,transparent,transparent_3px,rgba(15,56,15,0.06)_3px,rgba(15,56,15,0.06)_4px)]`
- Pixel border box: `border-2 border-[#0f380f] bg-[#9bbc0f] p-2`
- Dithering pattern: `bg-[repeating-conic-gradient(#9bbc0f_0%_25%,#306230_0%_50%)] bg-[length:4px_4px]`
- A/B button: `rounded-full bg-gradient-to-br from-[#8b1a3a] to-[#5a0e25] shadow-[inset_0_2px_3px_rgba(255,255,255,0.2),inset_0_-2px_3px_rgba(0,0,0,0.3),0_3px_6px_rgba(0,0,0,0.3)]`
- D-pad arm: `bg-[#1a1a1a] rounded-md shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),inset_0_-1px_2px_rgba(0,0,0,0.4),0_2px_4px_rgba(0,0,0,0.3)]`
- START/SELECT: `rounded-full bg-gradient-to-b from-[#3a3e3a] to-[#1a1e1a] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_2px_3px_rgba(0,0,0,0.3)]`
- Cartridge slot: `bg-[#1a1a1a] rounded-t-md shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)]`
- Screen text: `font-mono text-[#0f380f] [-webkit-font-smoothing:none]`

## Quality Checklist (must pass)

- Chunky gray plastic shell with vertical gradient and cut top-right corner is the primary container.
- Pea-green LCD screen with 4-shade green palette is the primary display surface.
- Dot Matrix grid texture overlay visible on the LCD surface.
- D-pad cross control present on the lower-left with correct plus shape.
- A/B action buttons present on the lower-right, burgundy colored, angled diagonally.
- START/SELECT pill buttons present below the screen, angled, with labels.
- Cartridge slot present on the top edge as a recessed dark groove.
- Link cable port present on the side edge as a small recessed connector.
- Screen content uses STRICTLY four shades of green — no other colors on the LCD.
- Power LED indicator present (red dot).
- Speaker grille present (grid of small holes on the shell).
- Pixel font used for all screen text (Press Start 2P or VT323).
- Anti-aliasing disabled on screen text for authentic pixel rendering.
- Dithering patterns used to simulate intermediate green tones.
- Button interactions use stepped animation, not smooth easing.
- The aesthetic reads as authentic DMG-01 Game Boy — monochromatic, pixelated, 1989 charm.

## Anti-Patterns

- Color on the LCD screen beyond the four green shades (the DMG-01 is strictly 4-shade monochrome).
- Smooth CSS transitions on screen content (Game Boy updates are frame-stepped, not smoothly animated).
- Anti-aliased fonts on the screen (LCD text must be pixel-rendered, disable font smoothing).
- Missing the Dot Matrix grid overlay (the pixel grid is the signature LCD texture).
- Missing the cut top-right corner on the shell (the DMG-01 has a distinctive asymmetric corner).
- Modern flat design without plastic depth (the shell has thick bezels, seams, and gradient plastic).
- Sharp square corners on the shell (the DMG-01 shell is thick and rounded).
- A/B buttons that are not burgundy/maroon (the DMG-01 buttons are distinctly dark red).
- Horizontal alignment of A/B buttons (they are angled diagonally at approximately 25 degrees).
- Missing the D-pad cross shape (the D-pad is a plus/cross, not four separate arrow buttons).
- Missing the cartridge slot or link cable port (these hardware details complete the device identity).
- High-resolution multi-color content on the screen (the display is 160x144 monochrome green).
- Gradient backgrounds on the screen (LCD content is flat color fills and dithering only).
- Smooth easing curves on button presses (buttons depress instantly in stepped frames).
- Missing the speaker grille or power LED (these small details reinforce hardware authenticity).
- Sans-serif or serif fonts on the screen (only monospace pixel fonts belong on the LCD).
- Glow effects or neon on the screen (the DMG-01 LCD does not glow or emit light beyond the backlight-less green).

## Accessibility Considerations

- The 4-shade green palette provides limited contrast — verify the darkest green (`#0f380f`) on lightest green (`#9bbc0f`) meets WCAG AA (it does: ratio ~10:1).
- LCD text should always use the darkest shade on the lightest background for maximum readability.
- Inverted text boxes (darkest green background with lightest green text) must also be verified for contrast.
- The Dot Matrix grid overlay is decorative — ensure it does not reduce text legibility at small sizes.
- Anti-aliasing is disabled for authenticity but pixel fonts must remain readable at the chosen sizes.
- D-pad and button interactions must have keyboard equivalents (arrow keys for D-pad, Z/X for A/B, Enter for START).
- Focus states: `focus:ring-2 focus:ring-[#9bbc0f]` (LCD green ring visible against gray shell).
- Touch targets for A/B and D-pad buttons should be minimum 44x44px even if the visual is smaller.
- Pixel font text at very small sizes (below 8px) may fail legibility — provide a zoom/scale option.
- Typewriter text reveal must have a skip option for users who need immediate full text.
- Blinking cursor animations must respect `prefers-reduced-motion` (static cursor instead of blinking).
- Decorative hardware elements (speaker grille, seam lines, link port) must be `aria-hidden="true"`.
- Color should not be the sole indicator of interactive elements — provide text labels and shapes.
- The monochrome palette is inherently colorblind-friendly (4 shades of one hue), which is an advantage.
- Screen content rendered as pixel art must remain logically structured in the DOM for screen readers.
- Provide high-contrast alternative if the authentic green-on-green is insufficient for specific use cases.
