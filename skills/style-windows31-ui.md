---
name: windows31-ui
description: Build Windows 3.1 UI components (16-color VGA palette, program manager, tiled window management, gray beveled chrome, WinG graphics, Program Manager groups) with classic 16-bit OS aesthetics, dual-tone bevels, and the productive computing environment of early 1990s Microsoft Windows. Trigger this skill when the user asks for Windows 3.1, Win31, Program Manager, 16-bit Windows, early Microsoft, or VGA-era interfaces.
---

# Windows 3.1 UI

Use this skill to design and implement retro interfaces inspired by Microsoft Windows 3.1: 16-color VGA palette, Program Manager with icon groups, dual-tone beveled chrome, tiled window management, checkered menu bars, and the productive computing aesthetic of early 1990s desktop OS.

## Core Material Recipes

### 1) Windows 3.1 Window Frame

Classic dual-bevel window chrome.

- `bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080]`.
- Title bar: `bg-[#c0c0c0] border-b border-[#808080] px-1 py-0.5 flex items-center justify-between`.
- Title bar (inactive): `bg-[#c0c0c0]` (gray, not colored — Win 3.1 didn't use blue title bars).
- Control box: `w-4 h-4 border border-[#808080] border-t-white border-l-white text-center text-[8px] leading-[14px] font-bold` (the "-" minimize/maximize box).
- Menu bar: `bg-[#c0c0c0] border-b border-[#808080] px-1 py-0.5 flex gap-3 text-xs`.
- Menu items: `text-black text-xs underline` (File, Edit, View, Help).

### 2) Beveled Push Button

Classic Windows 3.1 button.

- `bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080] px-4 py-1 text-black text-xs font-ms-sans active:border-t-[#808080] active:border-l-[#808080] active:border-b-white active:border-r-white active:px-[5px] active:py-[5px]`.

### 3) Inset Text Field

Sunken input field.

- `bg-white border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white px-1 py-0.5 text-xs text-black`.

### 4) Checkered Menu Bar

The signature Win 3.1 textured menu separator.

- `h-4 bg-[conic-gradient(#c0c0c0_0deg_90deg,#808080_90deg_180deg)] bg-[size:2px_2px]`.

### 5) Program Manager Group

Icon group container (like Program Manager).

- `bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080] p-2`.
- Title bar: `bg-[#c0c0c0] border-b border-[#808080] text-xs text-black px-1 py-0.5` with group name like "Main" or "Accessories".

### 6) Win31 Button

Dark-text button on gray surface.

- `bg-[#c0c0c0] text-black font-sans text-xs border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080] px-4 py-1 hover:border-[#000080] hover:border-2 hover:border-dashed transition-none`.

## Color Palette System (16-Color VGA)

| Color | Hex | Role |
|---|---|---|
| Silver | `#c0c0c0` | Window surfaces, buttons |
| Gray | `#808080` | Shadows, borders |
| White | `#ffffff` | Highlights, input fields |
| Black | `#000000` | Text, outlines |
| Navy | `#000080` | Selection highlight |
| Dark Red | `#800000` | Rare accent |
| Dark Green | `#008000` | Rare accent |
| Dark Blue | `#000080` | Selection |
| Teal | `#008080` | Rare desktop accent |
| Red | `#ff0000` | Rare bright accent |

Rules: The palette is severely limited — this is a 16-color OS. Silver/gray/white/black cover 90% of the interface. Navy blue is the only selection color. No gradients.

## Typography Recommendations

- **Primary:** MS Sans Serif (the Windows 3.1 system font) or Tahoma/Segoe UI as modern fallback.
- **Alternative:** MS Serif (for document windows).
- **Sizes:** 8pt to 11pt body text (Win 3.1 used very small fonts).
- **Labels:** `text-xs font-normal` with underlined accelerator keys.
- Modern fallback: use Tahoma at `text-xs` to `text-sm` for the closest feel.

## Interaction Rules

- Default state: flat gray beveled surfaces.
- Hover: dashed navy border outline (`hover:border-2 hover:border-dashed hover:border-[#000080]`).
- Active: bevel inverts (top/left become gray, bottom/right become white — button appears pressed IN).
- Focus: `focus:outline-dotted focus:outline-1 focus:outline-[#000000]` (dotted focus rectangle).
- Transitions: `transition-none` (Windows 3.1 had NO transitions — states changed instantly).
- Double-click: opens items (standard Windows behavior).

## Reusable Tailwind Tokens

- Win31 window: `bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080]`.
- Beveled button: `bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080] px-4 py-1 text-xs`.
- Inset field: `bg-white border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white`.
- Checkered separator: `bg-[conic-gradient(#c0c0c0_0deg_90deg,#808080_90deg_180deg)] bg-[size:2px_2px]`.
- Title bar: `bg-[#c0c0c0] border-b border-[#808080] text-xs`.

## Quality Checklist

- Dual-tone bevel system on ALL elements (white top/left + gray bottom/right).
- 16-color VGA palette (silver/gray/white/black/navy — nothing else).
- Checkered menu bar separator present.
- At least one window with title bar and menu bar.
- Inset/sunken text fields.
- Gray title bars (NOT colored — Win 3.1 used gray, not blue).
- Program Manager group containers.
- Typography is MS Sans Serif at very small sizes (8-11pt).
- No CSS transitions (`transition-none` — states change instantly).
- Dotted focus rectangles on interactive elements.

## Anti-Patterns

- Colored title bars (Win 3.1 title bars were GRAY, not blue — that came in Win 95).
- Smooth CSS transitions (Win 3.1 was instant state changes only).
- Modern rounded corners (Win 3.1 used sharp right angles).
- 32-bit color palettes (this is 16-color VGA — strictly limited).
- Hover effects (Win 3.1 had NO hover states — only click).
- Modern flat design (Win 3.1 was heavily beveled and 3D).
- Large fonts (Win 3.1 used 8-11pt system fonts).
- Gradients (Win 3.1 was flat dithered colors only).
- Drop shadows on windows (Win 3.1 had no shadows — flat bevels only).
- Windows 95+ start button or taskbar (those are different OS versions).

## Accessibility Considerations

- Silver/gray surfaces with black text provide excellent contrast (WCAG AAA).
- Heavy beveled borders provide clear visual distinction of interactive elements.
- Focus states: `outline-dotted outline-1 outline-[#000000]` (dotted focus rectangle — very visible).
- The instant state changes (no transitions) are GOOD for motion-sensitive users.
- Small font sizes (8pt) may be too small for some users — allow text scaling.
- The dotted focus rectangle is highly accessible and visible.
- Touch targets may be very small (Win 3.1 buttons were ~20px) — scale up for touch.
