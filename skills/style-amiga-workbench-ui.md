---
name: amiga-workbench-ui
description: Build Amiga Workbench UI components (Commodore Amiga OS 1.x-3.x, gray windowed interface, magic wand pointer, disk/device icons, screen dragging, Kickstart boot, AmigaDOS CLI, copper co-processor color effects) with authentic Amiga OS chrome, dual-playfield rendering hints, and the multimedia-pioneering computing experience of 1985-1994. Trigger this skill when the user asks for Amiga Workbench, Amiga OS, Kickstart, AmigaDOS, Workbench 1.x-3.x, retro Commodore UI, copper effects, or classic Amiga interface.
---

# Amiga Workbench UI

Use this skill to design and implement retro Commodore Amiga Workbench interfaces inspired by Amiga OS 1.x through 3.x: gray windowed chrome with black outlines, title bar gadgets (close/zoom/depth), disk and device icons on a blue workspace, AmigaDOS CLI windows with black backgrounds, screen drag indicators, and the multimedia-pioneering computing aesthetic of 1985-1994.

## Non-Negotiable Foundations

- Amiga Workbench UI replicates the Commodore Amiga desktop: gray windows with black 1px outlines, blue default screen background, gadget buttons in title bars, and disk/device icons on the workspace.
- The Workbench palette: Amiga gray `#a8a8a8` surfaces, Amiga blue `#4838b0` default screen color, black `#000000` outlines, white `#ffffff` CLI text, highlight blue `#0000ff` selection, AmigaDOS green `#00ff00` CLI accent.
- Borders are flat with 1px black outlines: no heavy 3D bevels — the Amiga used crisp pixel-level definition, not soft gradients.
- Typography uses classic Amiga system fonts: Topaz (the iconic Amiga bitmap font), Courier for CLI, and system proportional fonts.
- Window chrome is essential: title bars with close (left), zoom (left-center), and depth (right) gadgets, active window has a black title bar with white text, inactive windows have gray title bars with black text.
- The aesthetic is efficient, multimedia-pioneering, and functional — every pixel is deliberate, the copper co-processor enabled color gradients and effects no other machine could do in 1985.
- Screens are independent display contexts: Workbench screen, CLI screen, custom application screens — each can be dragged vertically by dragging the title bar of the screen itself.

## Core Material Recipes

### 1) Workbench Window

Classic Amiga window with title bar and gadgets.

- Window: `bg-[#a8a8a8] border border-black`.
- Active title bar: `bg-black px-1 py-0.5 flex items-center gap-1` with white text `text-white font-topaz text-xs`.
- Inactive title bar: `bg-[#a8a8a8] px-1 py-0.5 flex items-center gap-1` with black text `text-black font-topaz text-xs`.
- Close gadget: `w-4 h-3 border border-black bg-[#a8a8a8]` on the left side (small square with no fill detail on classic OS, a small checkmark-like shape on 2.x+).
- Zoom gadget: `w-4 h-3 border border-black bg-[#a8a8a8]` next to close (small square).
- Depth gadget: `w-4 h-3 border border-black bg-[#a8a8a8]` on the right side (front/back toggle).
- Sizing gadget: `w-4 h-3 border border-black bg-[#a8a8a8]` bottom-right corner (resize handle).

### 2) Workbench Button

Classic Amiga push button (used in requesters and dialogs).

- `bg-[#a8a8a8] border border-black px-3 py-1 font-topaz text-sm text-black active:bg-black active:text-[#a8a8a8] transition-none`.

### 3) Disk/Device Icon

Icon on the Workbench workspace representing disks and devices.

- Container: `flex flex-col items-center gap-1 w-16`.
- Icon image: `w-8 h-8 border border-black` (disk image: a rounded rectangle with a label area, device image: a drive rectangle).
- Label: `font-topaz text-xs text-black text-center px-1` with highlight on selection `bg-[#0000ff] text-white`.

### 4) AmigaDOS CLI Window

Command line interface window with black background.

- Window: `bg-black border border-black`.
- Title bar: `bg-black text-white font-topaz text-xs px-1 py-0.5`.
- Content: `bg-black text-white font-mono text-sm p-2 leading-tight`.
- Prompt text: `text-[#00ff00]` (AmigaDOS directory listing uses green for executable highlighting).
- Cursor: inline block `inline-block w-2 h-4 bg-white`.

### 5) Workbench Screen Background

The default Workbench screen backdrop.

- `bg-[#4838b0]` (Amiga blue — the default screen color).
- Title bar of the screen itself: `bg-black px-1 py-0.5 flex justify-between text-white font-topaz text-xs` (this is the draggable screen bar showing Workbench title and depth gadget on the right).

### 6) Requester (Dialog)

Amiga OS file requester or message requester.

- `bg-[#a8a8a8] border border-black p-2`.
- Title: `bg-black text-white font-topaz text-xs px-1 py-0.5`.
- Body: `px-2 py-3 text-black font-topaz text-sm`.
- Buttons row: `flex gap-2 justify-end pt-2` with Workbench buttons.

### 7) Scrollbar

Amiga window scrollbar.

- Track: `h-4 bg-[#a8a8a8] border border-black`.
- Thumb: `w-6 h-full bg-[#a8a8a8] border border-black`.
- Arrows: `w-4 h-4 border border-black bg-[#a8a8a8] flex items-center justify-center text-black text-xs`.

### 8) Copper Gradient Effect

Copper co-processor color bands reference (the signature Amiga raster effect).

- `bg-[linear-gradient(to_bottom,#4838b0_0%,#6858d0_30%,#0000ff_60%,#4838b0_100%)]` (banded color gradient, not smooth — copper produced discrete bands).
- For copper bars: `bg-[repeating-linear-gradient(0deg,#4838b0_0px,#4838b0_4px,#6858d0_4px,#6858d0_8px,#0000ff_8px,#0000ff_12px)]`.

### 9) Kickstart Boot Screen

The iconic Amiga boot screen reference (hand holding a floppy disk).

- `bg-black flex items-center justify-center min-h-screen`.
- Hand+disk illustration: positioned center, dark background, hand in gray tones holding a blue-tinted floppy disk (use SVG or image reference).
- Kickstart version text: `text-white font-mono text-xs text-center pt-4`.

### 10) Screen Drag Indicator

The visual cue when dragging a screen down to reveal the screen behind it.

- Dragging screen: `translate-y-[200px]` (screen moves down revealing the screen behind).
- Edge line: `border-b-2 border-black` at the bottom of the dragged screen's visible area.

## Color Palette System

### Core Amiga Workbench Palette

| Color | Hex | Role |
|---|---|---|
| Amiga Gray | `#a8a8a8` | Window surfaces, buttons, gadgets, scrollbars |
| Amiga Blue | `#4838b0` | Default screen background (Workbench screen) |
| Black | `#000000` | Window outlines, title bars (active), CLI background, text |
| White | `#ffffff` | CLI text, active title bar text |
| Highlight Blue | `#0000ff` | Selection highlight, copper accent |
| AmigaDOS Green | `#00ff00` | CLI executable highlight, success accents |
| Copper Purple | `#6858d0` | Copper gradient mid-tone |
| Bevel Light | `#c8c8c8` | Gadget highlight edges (optional subtle) |
| Bevel Dark | `#888888` | Gadget shadow edges (optional subtle) |

Rules: Amiga gray `#a8a8a8` dominates all window chrome. Black 1px outlines define every window and gadget boundary. The screen background is Amiga blue `#4838b0`. The CLI window is black with white text. Selection highlight is pure blue `#0000ff`. The Amiga's 4096-color palette allowed gradients, but Workbench chrome itself stays in the gray/black/blue system.

## Typography Recommendations

Amiga Workbench typography uses period-accurate Commodore Amiga system fonts:

- **Display headings:** Topaz (the iconic Amiga bitmap font — clean, blocky, instantly recognizable, available in 8pt and 9pt variants).
- **UI labels:** Topaz (used throughout the Workbench for window titles, menu items, button labels, icon labels).
- **Body:** Topaz (the universal Amiga system font — readable at small sizes on CRT monitors).
- **Monospace:** Courier (used in AmigaDOS CLI for command output and directory listings).
- Modern alternatives: If exact fonts are unavailable, use IBM Plex Mono (for Topaz feel — similar blocky monospace character), Source Code Pro (for CLI), VT323 (for retro bitmap terminal feel). For proportional text use Inter at small sizes.
- Font sizes: `11px` to `13px` for body (Amiga native resolution was ~72 DPI), `14px` to `18px` for headings. The Amiga's Topaz font was designed for readability at small sizes on interlaced CRT displays.
- Letter spacing: slight tracking for labels `tracking-wide` to match the bitmap font rendering.

## Component Architecture Pattern

1. Workbench screen background (Amiga blue `#4838b0`) with screen title bar.
2. Screen title bar at the top (black bar with Workbench title and depth gadget — draggable to reveal screens behind).
3. Workbench windows with gray surfaces, black 1px outlines, and title bar gadgets.
4. Disk/device icons on the workspace with labels and blue selection highlight.
5. AmigaDOS CLI windows with black background and white/green text for command-line work.
6. Requesters for file operations, messages, and user input.
7. Scrollbars on scrollable windows with proportional thumbs.
8. Copper gradient effects for title screens, demos, and multimedia applications.
9. Menu bar (Amiga OS 2.x+ — activated by right mouse button, appearing at top of screen).

## Interaction Rules

- Default state: gray surface with black outline, flat and crisp.
- Hover: NO hover effect (classic Amiga OS had no hover states — the mouse pointer was the only feedback, and it used the iconic magic wand/arrow pointer).
- Active/Pressed: button inverts — background becomes black, text becomes gray `active:bg-black active:text-[#a8a8a8]`.
- Selected (icon): label background becomes blue `bg-[#0000ff]` with white text.
- Focus: active window has a black title bar with white text; inactive windows have gray title bars with black text.
- Transitions: `transition-none` (classic Amiga OS had instant state changes — no smooth animation).
- Double-click to open disk/device icons (classic Amiga convention — single click selects, double-click opens).
- Right mouse button activates the menu bar (Amiga OS 2.x+ — unique to Amiga, the right button was the menu button).
- Screen dragging: dragging the screen title bar pulls the current screen down, revealing the screen behind it (a unique Amiga feature).
- Left mouse button: select and drag operations. Middle mouse button (on 3-button mice): alternate drag/depth operations.

## Reusable Tailwind Tokens

- Workbench window: `bg-[#a8a8a8] border border-black`
- Active title bar: `bg-black text-white font-topaz text-xs px-1 py-0.5`
- Inactive title bar: `bg-[#a8a8a8] text-black font-topaz text-xs px-1 py-0.5`
- Workbench button: `bg-[#a8a8a8] border border-black px-3 py-1 active:bg-black active:text-[#a8a8a8]`
- Disk icon selected: `bg-[#0000ff] text-white`
- CLI window: `bg-black text-white font-mono text-sm`
- CLI green accent: `text-[#00ff00]`
- Screen background: `bg-[#4838b0]`
- Copper bars: `bg-[repeating-linear-gradient(0deg,#4838b0_0px,#4838b0_4px,#6858d0_4px,#6858d0_8px,#0000ff_8px,#0000ff_12px)]`
- Requester: `bg-[#a8a8a8] border border-black p-2`
- Scrollbar thumb: `w-6 h-full bg-[#a8a8a8] border border-black`
- Gadget square: `w-4 h-3 border border-black bg-[#a8a8a8]`

## Quality Checklist (must pass)

- Window surfaces use Amiga gray `#a8a8a8` with 1px black outlines.
- At least one window with an active (black) or inactive (gray) title bar.
- Title bar gadgets present: close, zoom, and depth at minimum.
- The default screen background is Amiga blue `#4838b0`.
- Disk/device icons on the workspace with labels.
- At least one AmigaDOS CLI window reference with black background and white/green text.
- Workbench buttons that invert on active state (gray to black).
- Icon selection uses highlight blue `#0000ff` with white text.
- Classic Amiga system fonts (Topaz or close alternatives like IBM Plex Mono).
- Flat 1px borders — no soft bevels, no gradients on chrome (copper gradients are for special effects only).
- The aesthetic reads as a 1985-1994 Commodore Amiga Workbench desktop.
- Transitions are instant (no smooth animation — `transition-none`).
- Screen title bar present (the draggable bar that defines the Amiga multi-screen architecture).

## Anti-Patterns

- Soft 3D bevels (Amiga used flat surfaces with 1px black outlines — not the Mac/Windows bevel system).
- Smooth CSS transitions (classic Amiga OS was instant — no animation between states).
- Modern flat design without outlines (Amiga defined edges with explicit 1px black borders — missing them looks wrong).
- Missing title bar gadgets (close/zoom/depth are the signature Amiga window controls).
- Missing the screen background (the Workbench screen MUST be Amiga blue `#4838b0` — a white or gray desktop is not Amiga).
- Using green as a desktop color (green is for AmigaDOS CLI accents only, not the Workbench screen).
- Rounded corners (Amiga windows and buttons are square — `rounded-none` always).
- Missing the CLI window (AmigaDOS is core to the Amiga experience — a Workbench without CLI reference is incomplete).
- Modern web fonts (use Topaz or close alternatives — modern sans-serifs break the period feel).
- Smooth copper gradients (the copper co-processor produced discrete color BANDS, not smooth gradients — use stepped bands).
- Hover effects (classic Amiga had no hover — only click and selection states).
- Missing the screen title bar (the draggable screen bar is a unique Amiga feature — omitting it loses the identity).
- Confusing screens with windows (screens are full-display contexts; windows live inside screens — do not blur this distinction).

## Accessibility Considerations

- Amiga gray `#a8a8a8` with black text provides strong contrast (WCAG AAA for text elements).
- Black title bars with white text provide maximum contrast for active window identification.
- 1px black outlines on all elements provide strong visual definition of boundaries.
- The blue selection highlight `#0000ff` with white text provides clear selection feedback.
- Focus is communicated by title bar color (black = active, gray = inactive) — provide an additional focus indicator for keyboard users: `focus:outline focus:outline-2 focus:outline-[#0000ff]`.
- Small font sizes (11px-13px Topaz) may be too small for some users — allow scaling while maintaining the pixel-art feel.
- Gadget squares (close/zoom/depth) are small (16x12px native) — ensure they meet minimum touch target sizes on mobile (enlarge to at least 44x44px touch area while keeping the visual 16x12px).
- The CLI window's black background with white text provides excellent contrast but may cause eye strain in prolonged use — offer a high-contrast alternative.
- The instant transitions (no animation) are GOOD for users with motion sensitivity.
- Copper gradient effects should not be used behind text without a solid background panel — the color bands can reduce readability.
- Icon labels must remain readable when highlighted (blue background + white text) and when unhighlighted (no background + black text on blue screen).
- Right-mouse-button menu activation should have a keyboard equivalent (Alt or menu key) for accessibility.
