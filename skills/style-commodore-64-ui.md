---
name: commodore-64-ui
description: Build Commodore 64 UI components (8-bit home computer, blue BASIC startup screen, READY. prompt, datasette tape loading, SID chip sound, sprite graphics, 16-color VIC-II palette, blocky character-set graphics) with C64 boot screen aesthetics, tape loading color bars, and the pioneering home computing experience of 1982. Trigger this skill when the user asks for Commodore 64, C64, VIC-II palette, 8-bit computer, READY prompt, datasette loading, SID chip, sprite graphics, PETSCII graphics, 6502 era, or retro home computer interfaces.
---

# Commodore 64 UI

Use this skill to design and implement authentic Commodore 64 home computer aesthetics: the iconic blue BASIC startup screen, READY. prompt with blinking cursor, datasette tape loading border color bars, 16-color VIC-II palette, blocky 8x8 character cell graphics, sprite multiplexer displays, and the pioneering 8-bit home computing experience of 1982.

## Non-Negotiable Foundations

- The C64 screen is ALWAYS light blue text (#7869c4) on dark blue background (#483aaa) with a lighter blue border (#7d7fff). This is the boot screen identity.
- Typography uses a monospace pixel font replicating the C64 character ROM. Every glyph occupies an exact 8x8 pixel cell. Use C64 Pro, Press Start 2P, or VT323 as web-safe approximations.
- All text is UPPERCASE by default. The C64 character set only displayed uppercase in graphics mode. Lowercase was available but uppercase is the authentic look.
- The screen is a grid of 40 columns by 25 rows of 8x8 pixel character cells. Layouts must respect this blocky, grid-aligned structure.
- Colors are limited to the 16-color VIC-II palette. No gradients, no anti-aliasing, no alpha transparency. Every pixel is fully opaque.
- Borders are meaningful: the screen border area cycled colors during tape loading. A cycling rainbow border is the quintessential C64 loading animation.
- Interactions feel instantaneous and character-cell-based. No smooth scrolling — movement happens in discrete 8-pixel or character-cell steps.
- Sound cues (SID chip) accompany key actions: boot chime, key click, loading screech, error buzz. Always offer these as optional audio with user-toggle.

## Core Material Recipes

### 1) C64 Boot Screen

The signature startup screen: light blue on dark blue with READY. prompt and blinking cursor.

```html
<div class="bg-[#483aaa] text-[#7869c4] font-mono text-base p-4 border-8 border-[#7d7fff] min-h-[400px]"
     style="font-family: 'C64 Pro', 'Press Start 2P', 'VT323', monospace; letter-spacing: 0; line-height: 1;">
  <div class="whitespace-pre-wrap uppercase">
    <div>&nbsp;&nbsp;&nbsp;&nbsp;**** COMMODORE 64 BASIC V2 ****</div>
    <div class="mt-2">&nbsp;64K RAM SYSTEM&nbsp; 38911 BASIC BYTES FREE</div>
    <div class="mt-4">READY.</div>
    <div class="inline-block w-[0.6em] h-[1em] bg-[#7869c4] animate-pulse"></div>
  </div>
</div>
```

Key classes: `bg-[#483aaa]` (dark blue screen), `text-[#7869c4]` (light blue text), `border-8 border-[#7d7fff]` (light blue border frame), blinking cursor block.

### 2) Tape Loading Border Bars

The iconic datasette loading sequence where the screen border cycles through rainbow colors.

```css
@keyframes c64-tape-border {
  0%   { border-color: #000000; }
  6.6% { border-color: #ffffff; }
  13%  { border-color: #880000; }
  20%  { border-color: #aaffaa; }
  26%  { border-color: #000088; }
  33%  { border-color: #ff8830; }
  40%  { border-color: #444400; }
  46%  { border-color: #008888; }
  53%  { border-color: #884400; }
  60%  { border-color: #ff7777; }
  66%  { border-color: #333333; }
  73%  { border-color: #7777ff; }
  80%  { border-color: #aaffaa; }
  86%  { border-color: #ff8830; }
  93%  { border-color: #cccccc; }
  100% { border-color: #000000; }
}
.c64-loading-border {
  animation: c64-tape-border 0.8s steps(1) infinite;
}
```

The `steps(1)` is critical — each color must snap instantly, never blend, to replicate the hardware color register behavior. Display loading text inside: `text-[#7869c4] uppercase font-mono` with text like "SEARCHING", "LOADING", "FOUND", "PRESS PLAY ON TAPE".

### 3) PETSCII Character Grid

Blocky character art built from the C64 character set — smiley faces, hearts, lines, blocks.

```html
<div class="bg-[#483aaa] font-mono text-[#7869c4] p-2 grid grid-cols-[repeat(40,minmax(0,1fr))] gap-0 text-xs leading-none">
  <!-- Each cell is one PETSCII character position -->
  <span class="text-center text-[#aaffaa]">@</span>
  <span class="text-center text-[#ff8830]">Q</span>
  <span class="text-center text-[#7869c4]">_</span>
  <!-- 40 columns per row, 25 rows -->
</div>
```

Use `grid-cols-[repeat(40,minmax(0,1fr))]` for the authentic 40-column display. Character colors come from the VIC-II color RAM — each cell can be any of the 16 palette colors independently.

### 4) Sprite Multiplexer Display

A data panel showing hardware sprite registers — positions, colors, enable flags.

```html
<div class="bg-[#000000] border-2 border-[#7869c4] font-mono text-xs p-3">
  <div class="text-[#aaffaa] uppercase mb-2">SPRITE REGISTERS</div>
  <div class="text-[#7869c4] space-y-1">
    <div>SP0 X:192 Y:130 COL:01 <span class="text-[#ffffff]">[ON]</span></div>
    <div>SP1 X:064 Y:100 COL:07 <span class="text-[#ffffff]">[ON]</span></div>
    <div>SP2 X:000 Y:000 COL:00 <span class="text-[#880000]">[OFF]</span></div>
    <div>MSB X:0000   EXP-X:0 EXP-Y:0</div>
    <div>SPR-SPR:00 SPR-DATA:00</div>
  </div>
</div>
```

### 5) RUN/STOP RESTORE Key Panel

A physical key reference panel styled like the C64 keyboard.

```html
<div class="bg-[#888888] border-4 border-[#444444] rounded-sm p-2 inline-flex gap-1">
  <kbd class="bg-[#666666] border-2 border-t-[#aaaaaa] border-l-[#aaaaaa] border-b-[#333333] border-r-[#333333] text-white font-mono text-xs px-3 py-1 uppercase">RUN</kbd>
  <span class="text-[#333333] font-mono text-xs self-center">/</span>
  <kbd class="bg-[#666666] border-2 border-t-[#aaaaaa] border-l-[#aaaaaa] border-b-[#333333] border-r-[#333333] text-white font-mono text-xs px-3 py-1 uppercase">STOP</kbd>
  <kbd class="bg-[#aa0000] border-2 border-t-[#cc4444] border-l-[#cc4444] border-b-[#660000] border-r-[#660000]] text-white font-mono text-xs px-3 py-1 uppercase">RESTORE</kbd>
</div>
```

### 6) VIC-II Color Palette Swatches

A reference grid of all 16 VIC-II colors with their hardware register values.

```html
<div class="grid grid-cols-8 gap-0 border-2 border-[#444444]">
  <div class="aspect-square bg-[#000000] flex items-end justify-start p-1">
    <span class="text-[#7869c4] font-mono text-[8px]">0</span></div>
  <div class="aspect-square bg-[#ffffff] flex items-end justify-start p-1">
    <span class="text-[#000000] font-mono text-[8px]">1</span></div>
  <div class="aspect-square bg-[#880000] flex items-end justify-start p-1">
    <span class="text-[#ffffff] font-mono text-[8px]">2</span></div>
  <div class="aspect-square bg-[#aaffaa] flex items-end justify-start p-1">
    <span class="text-[#000000] font-mono text-[8px]">3</span></div>
  <div class="aspect-square bg-[#000088] flex items-end justify-start p-1">
    <span class="text-[#aaffaa] font-mono text-[8px]">4</span></div>
  <div class="aspect-square bg-[#ff8830] flex items-end justify-start p-1">
    <span class="text-[#000000] font-mono text-[8px]">5</span></div>
  <div class="aspect-square bg-[#444400] flex items-end justify-start p-1">
    <span class="text-[#ffffff] font-mono text-[8px]">6</span></div>
  <div class="aspect-square bg-[#008888] flex items-end justify-start p-1">
    <span class="text-[#ffffff] font-mono text-[8px]">7</span></div>
  <div class="aspect-square bg-[#884400] flex items-end justify-start p-1">
    <span class="text-[#ffffff] font-mono text-[8px]">8</span></div>
  <div class="aspect-square bg-[#ff7777] flex items-end justify-start p-1">
    <span class="text-[#000000] font-mono text-[8px]">9</span></div>
  <div class="aspect-square bg-[#333333] flex items-end justify-start p-1">
    <span class="text-[#ffffff] font-mono text-[8px]">A</span></div>
  <div class="aspect-square bg-[#7777ff] flex items-end justify-start p-1">
    <span class="text-[#000000] font-mono text-[8px]">B</span></div>
  <div class="aspect-square bg-[#aaffaa] flex items-end justify-start p-1">
    <span class="text-[#000000] font-mono text-[8px]">C</span></div>
  <div class="aspect-square bg-[#ff8830] flex items-end justify-start p-1">
    <span class="text-[#000000] font-mono text-[8px]">D</span></div>
  <div class="aspect-square bg-[#cccccc] flex items-end justify-start p-1">
    <span class="text-[#000000] font-mono text-[8px]">E</span></div>
  <div class="aspect-square bg-[#7869c4] flex items-end justify-start p-1">
    <span class="text-[#ffffff] font-mono text-[8px]">F</span></div>
</div>
```

### 7) Disk Drive Status Panel

A 1541 floppy drive status readout showing error codes and file listings.

```html
<div class="bg-[#483aaa] text-[#7869c4] font-mono text-xs p-3 border-4 border-[#7d7fff]">
  <div class="text-[#aaffaa] uppercase mb-1">DEVICE 8 - 1541 DISK DRIVE</div>
  <div class="text-[#ff8830]">00, OK,00,00</div>
  <div class="mt-2 uppercase">
    <div>0 "GAMES              " 01 2A</div>
    <div class="text-[#aaffaa]">15   "ARCHON"           PRG</div>
    <div class="text-[#aaffaa]">42   "M.U.L.E."          PRG</div>
    <div class="text-[#aaffaa]">97   "IMAGES"            SEQ</div>
    <div>640 BLOCKS FREE.</div>
  </div>
</div>
```

### 8) Blinking Cursor Block

The solid rectangle cursor that blinks at the READY. prompt.

```css
@keyframes c64-cursor-blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}
.c64-cursor {
  display: inline-block;
  width: 0.6em;
  height: 1em;
  background: #7869c4;
  animation: c64-cursor-blink 0.5s steps(1) infinite;
  vertical-align: text-bottom;
}
```

The `steps(1)` ensures hard on/off blinking, never a fade. The cursor is a solid block, never a line.

### 9) BASIC Program Listing

Authentic BASIC code display with line numbers and syntax coloring.

```html
<pre class="bg-[#483aaa] text-[#7869c4] font-mono text-sm p-4 border-8 border-[#7d7fff] uppercase leading-tight"
     style="font-family: 'C64 Pro', 'VT323', monospace;">
10 PRINT "HELLO WORLD"
20 GOTO 10
30 REM *** END OF PROGRAM ***
RUN
</pre>
```

## Color Palette System

### VIC-II 16-Color Hardware Palette

| Register | Color Name | Hex | Role |
|---|---|---|---|
| 0 | Black | `#000000` | Background, text on light colors |
| 1 | White | `#ffffff` | Text on dark, sprite, highlights |
| 2 | Red | `#880000` | Error, alert, sprite data |
| 3 | Cyan | `#aaffaa` | Confirmation, status OK, accent text |
| 4 | Purple | `#000088` | Secondary background, deep accent |
| 5 | Green | `#00ff00` | Success, active sprite, data flow |
| 6 | Blue | `#0000ff` | Link-like accent, cursor alt |
| 7 | Yellow | `#ffff00` | Warning, highlighted value, score |
| 8 | Orange | `#ff8830` | Warning level 2, secondary accent |
| 9 | Brown | `#884400` | Tertiary text, border alt |
| 10 | Light Red | `#ff7777` | Soft alert, notification |
| 11 | Dark Grey | `#333333` | Panel background, disabled text |
| 12 | Grey | `#666666` | Mid-tone panel, key cap |
| 13 | Light Green | `#aaffaa` | Same as cyan on many displays |
| 14 | Light Blue | `#7869c4` | Default screen text color |
| 15 | Light Grey | `#cccccc` | Light panel, secondary text |

### Boot Screen Specific Colors

| Color | Hex | Role |
|---|---|---|
| Screen Background | `#483aaa` | Default C64 screen background |
| Default Text | `#7869c4` | Light blue text on boot screen |
| Border | `#7d7fff` | Screen border frame color |
| Black | `#000000` | Tape loading, register panels |
| White | `#ffffff` | High-contrast text, sprite |
| Light Green | `#aaffaa` | Status OK, directory entries |
| Orange | `#ff8830` | Warning, drive status |

Rules: The C64 color palette is limited to these 16 colors. No gradients, no anti-aliasing, no alpha transparency. Color cycling during tape loading is instantaneous (use `steps(1)` in animations). The default screen is always #4869c4 text on #483aaa background — this is the C64 identity.

## Typography Recommendations

| Font | Use Case |
|---|---|
| **C64 Pro** | Authentic C64 character set — preferred if available |
| **Press Start 2P** | Web-safe pixel font approximation (use sparingly, oversized) |
| **VT323** | Terminal-style monospace, good for body text at larger sizes |
| **C64 Pixelized** | Alternative authentic C64 font |

Rules:
- All text is UPPERCASE in the authentic C64 mode. Lowercase is acceptable for readability in adapted contexts.
- Font size should feel blocky and pixelated: `text-sm` (14px) or `text-base` (16px) for body, `text-xs` for status lines.
- Line height is tight: `leading-none` or `leading-tight` to maintain the character-grid alignment.
- Letter spacing is zero: `tracking-normal` — C64 characters have built-in spacing from the character cell.
- Every character aligns to an 8x8 pixel grid conceptually. Use `font-mono` and `leading-none` to approximate this.
- Use `image-rendering: pixelated` on any sprite or bitmap graphics to prevent browser smoothing.

## Component Architecture Pattern

1. Outer border frame (`border-8 border-[#7d7fff]`) representing the physical screen bezel.
2. Dark blue screen background (`bg-[#483aaa]`) filling the display area.
3. Light blue text content (`text-[#7869c4]`) in uppercase monospace pixel font.
4. System header: "**** COMMODORE 64 BASIC V2 ****" banner.
5. Memory/status line: "64K RAM SYSTEM 38911 BASIC BYTES FREE".
6. READY. prompt with blinking block cursor.
7. Optional: BASIC program listing with line numbers and syntax coloring.
8. Optional: Sprite register panel or disk directory listing.
9. Optional: Cycling tape-loading border animation on the outer frame.
10. Footer: RUN/STOP RESTORE key reference panel.

## Interaction Rules

- Default state: static blue screen with READY. prompt and blinking cursor.
- Typing: characters appear at the cursor position in light blue (#7869c4), uppercase only.
- Enter: cursor moves to next line, command executes (PRINT, LIST, RUN, LOAD).
- Loading: border cycles through VIC-II colors (tape loading animation), screen shows "PRESS PLAY ON TAPE", then "FOUND", then "LOADING".
- Error: display "?SYNTAX ERROR" or "?ILLEGAL QUANTITY ERROR" in light blue text.
- RUN/STOP: halts program execution. RESTORE: resets screen to boot state.
- Cursor: solid block, blinks at 0.5s intervals with `steps(1)` (hard on/off).
- Transitions: NONE. The C64 has no smooth transitions. Everything is instantaneous.
- Animations: tape loading border (color cycling), cursor blink, raster split effects.
- Sound (optional): SID-style square wave click on keypress, loading screech, error buzz, boot chime.
- All animations must respect `prefers-reduced-motion` — disable border cycling and cursor blink.

## Reusable Tailwind Tokens

- Screen bg: `bg-[#483aaa]`
- Screen text: `text-[#7869c4]`
- Screen border: `border-8 border-[#7d7fff]`
- Cursor blink: `animate-pulse` or custom `c64-cursor-blink 0.5s steps(1) infinite`
- Tape border: `c64-tape-border 0.8s steps(1) infinite` on border element
- Status green: `text-[#aaffaa]`
- Warning orange: `text-[#ff8830]`
- Error red: `text-[#880000]`
- Register panel bg: `bg-[#000000] border-2 border-[#7869c4]`
- Keyboard key: `bg-[#666666] border-2 border-t-[#aaaaaa] border-l-[#aaaaaa] border-b-[#333333] border-r-[#333333]`
- Pixel font: `font-mono uppercase leading-none tracking-normal` with C64 Pro/VT323 font-family
- PETSCII grid: `grid-cols-[repeat(40,minmax(0,1fr))] gap-0 leading-none`
- Sprite data: `bg-[#000000] text-[#aaffaa] font-mono text-xs`
- Disk listing: `text-[#aaffaa]` entries on `bg-[#483aaa]` screen

## Quality Checklist (must pass)

- Screen background is #483aaa (dark blue) with #7d7fff (light blue) border frame.
- Text color is #7869c4 (light blue) in uppercase monospace pixel font.
- READY. prompt with blinking block cursor is present somewhere on the screen.
- At least one reference to C64-specific elements: BASIC, LOAD/SAVE, sprite, VIC-II, SID, datasette.
- No gradients, no anti-aliasing, no smooth transitions anywhere.
- Animations use `steps(1)` for hard color changes (border cycling, cursor blink).
- Color values are exclusively from the 16-color VIC-II palette.
- Layout respects a 40-column character grid feel (monospace, tight line height).
- `image-rendering: pixelated` applied to any bitmap/sprite graphics.
- Tape loading border animation cycles through VIC-II colors (if loading state is shown).
- No modern UI elements (dropdowns, modals with blur, rounded corners, shadows).
- All text is uppercase unless explicitly adapting for readability.

## Anti-Patterns

- Modern web fonts (Inter, Roboto, system-ui — these destroy the pixel aesthetic).
- Gradients or smooth color transitions (the VIC-II chip produced hard, flat colors only).
- Anti-aliased text or images (use `image-rendering: pixelated`).
- Rounded corners (use `rounded-none` — the C64 is all sharp edges and right angles).
- Drop shadows or blur effects (VIC-II had no transparency or blending).
- Smooth scrolling (C64 movement is in character-cell or pixel steps, never smooth).
- Lowercase text as default (uppercase is authentic for C64 graphics mode).
- Modern UI components (modals, dropdowns, cards with rounded corners, toggles).
- Responsive layout that breaks the 40-column grid feel (maintain the blocky grid).
- Using colors outside the 16-color VIC-II palette.
- Smooth border color transitions during loading (use `steps(1)` for instant color swaps).
- Subpixel font rendering (the C64 used a blocky 8x8 character ROM).
- Alpha/opacity on colors (VIC-II colors are fully opaque, no transparency).

## Accessibility Considerations

- The light blue (#7869c4) on dark blue (#483aaa) contrast ratio is approximately 3.2:1 — acceptable for large text but below WCAG AA for normal text. For body text, consider using white (#ffffff) on dark blue for better contrast.
- Blinking cursor must respect `prefers-reduced-motion` — disable the blink animation entirely.
- Tape loading border animation is fast and high-contrast color cycling — this could be problematic for photosensitive users. Respect `prefers-reduced-motion` and provide a static loading indicator.
- Uppercase-only text can reduce readability for some users — provide a lowercase option for adapted accessibility contexts.
- The 8x8 pixel grid and tight line height can be difficult to read at small sizes — ensure minimum font size of 14px for body text.
- PETSCII graphics made of characters need `aria-label` descriptions for screen readers.
- Sprite/register data panels are information-dense — provide semantic HTML structure (`<dl>`, `<dt>`, `<dd>`) for screen reader navigation.
- Ensure keyboard navigation works despite the retro aesthetic (focus indicators may use the C64 border highlight color).
- Color should never be the only indicator — the C64 palette's limited contrast between similar colors (light green vs cyan) can be hard to distinguish.
- Provide text alternatives for any SID chip audio cues.
