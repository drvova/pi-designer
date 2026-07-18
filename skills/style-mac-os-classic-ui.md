---
name: mac-os-classic-ui
description: Build Mac OS Classic UI components (System 7/Mac OS 8-9 aesthetic, platinum gray chrome, striped window titles, Chicago/Charcoal fonts, heavy beveled borders, plaid patterns) with classic Macintosh interface elements, Apple platinum, and the friendly desktop computing of the 1990s. Trigger this skill when the user asks for Mac OS Classic, System 7, Mac OS 9, classic Macintosh, platinum UI, or retro Mac interface.
---

# Mac OS Classic UI

Use this skill to design and implement retro Macintosh interfaces inspired by System 7 through Mac OS 9: platinum gray chrome, striped window title bars, heavy 3D beveled borders, Chicago/Charcoal typography, and the friendly, skeuomorphic desktop computing aesthetic of 1990s Apple.

## Non-Negotiable Foundations

- Mac OS Classic UI replicates the 1990s Macintosh desktop: platinum gray chrome, 3D beveled borders, striped title bars, and desk accessory styling.
- The platinum palette: light grays (`#ebebeb` to `#cccccc`), with 3D beveled edges creating depth through highlight/shadow border pairs.
- Borders are heavy and beveled: white top/left highlights + gray bottom/right shadows create the signature 3D button/panel look.
- Typography uses classic Mac system fonts: Chicago (bold display), Charcoal (UI), Geneva (sans), Monaco (mono).
- Window chrome is essential: title bars with horizontal stripes, close/zoom boxes, resize corners, and scroll bars with proportional thumbs.
- The aesthetic is friendly, approachable, and skeuomorphic — every element looks like a physical button or switch.

## Core Material Recipes

### 1) Platinum Window

Classic Mac OS window with title bar and beveled chrome.

- Window: `bg-[#ebebeb] border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080] rounded-tl-lg rounded-tr-lg`.
- Title bar: `bg-[#ebebeb] px-2 py-1 border-b border-[#808080]` with striped background.
- Striped title: `bg-[repeating-linear-gradient(0deg,#ebebeb_0px,#ebebeb_1px,#d4d4d4_1px,#d4d4d4_2px)]`.
- Close box: `w-3 h-3 rounded-full border border-[#000] bg-[#ebebeb]` on the left side of title bar.
- Zoom box: `w-3 h-3 border border-[#000]` on the right side.

### 2) Beveled Button (Classic Mac Push Button)

The signature 3D beveled button.

- `bg-[#ebebeb] border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080] px-4 py-1 font-geneva text-sm text-black rounded-sm active:border-t-[#808080] active:border-l-[#808080] active:border-b-white active:border-r-white transition-none`.

### 3) Beveled Panel (Inset)

Sunken/recessed panel (inset bevel).

- `bg-white border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white p-4`.

### 4) Platinum Checkbox

Classic Mac checkbox.

- `w-4 h-4 bg-white border border-t-[#808080] border-l-[#808080] border-b-white border-r-white`.
- Checked: SVG X mark inside `text-black`.

### 5) Classic Mac Scrollbar

Horizontal or vertical scrollbar with thumb.

- Track: `h-4 bg-[#ebebeb] border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080]`.
- Thumb: `w-12 h-full bg-[#ebebeb] border border-t-white border-l-white border-b-[#808080] border-r-[#808080]`.

### 6) Menu Bar

Classic Mac menu bar at top of screen.

- `bg-white border-b border-[#808080] px-2 py-1 flex gap-4 items-center`.
- Apple menu: small Apple logo SVG on the left.
- Menu items: `font-geneva text-sm text-black hover:underline`.

### 7) Desktop Pattern

Classic Mac desktop pattern (the iconic plaid or dotted pattern).

- `bg-[#5a8a6a]` (classic Mac desktop green).
- Or plaid: `bg-[repeating-conic-gradient(#5a8a6a_0deg_90deg,#6a9a7a_90deg_180deg)] bg-[size:4px_4px]`.

## Color Palette System

### Core Platinum Palette

| Color | Hex | Role |
|---|---|---|
| Platinum Light | `#ebebeb` | Primary chrome surface |
| Platinum | `#d4d4d4` | Secondary surface, stripes |
| Bevel Highlight | `#ffffff` | Top/left highlights |
| Bevel Shadow | `#808080` | Bottom/right shadows |
| Dark Shadow | `#404040` | Deep borders, text |
| Black | `#000000` | Text, outlines |
| Desktop Green | `#5a8a6a` | Desktop background |
| Desktop Blue | `#6a7a9a` | Alternative desktop |
| Accent Blue | `#3a6abf` | Selection highlight |

Rules: Platinum grays dominate. The bevel system (white highlights + gray shadows) creates 3D depth. The desktop background is the only saturated color. Everything else is gray-scale.

## Typography Recommendations

Mac OS Classic typography uses period-accurate Apple system fonts:

- **Display headings:** Chicago (the classic Mac font — bold, geometric, friendly).
- **UI labels:** Charcoal (Mac OS 8-9 system font — clean, compact sans).
- **Body:** Geneva (classic Mac sans-serif — clean and readable).
- **Monospace:** Monaco (classic Mac monospace — for code and data).
- Modern alternatives: If exact fonts are unavailable, use Geist Sans (for Chicago feel), Inter (for Geneva feel), JetBrains Mono (for Monaco).
- Font sizes: `12px` to `14px` for body (classic Mac resolution), `18px` to `24px` for headings.

## Component Architecture Pattern

1. Desktop background (classic green/blue or pattern).
2. Menu bar at top (white bar with Apple logo and menu items).
3. Platinum windows with striped title bars.
4. Beveled buttons and panels throughout.
5. Inset panels for content areas.
6. Classic scrollbars on scrollable regions.
7. Checkboxes, radio buttons, and other form elements with bevel styling.
8. Desk accessory / floating palette windows.

## Interaction Rules

- Default state: beveled, 3D, friendly.
- Hover: NO hover effect (classic Mac OS had no hover states — elements were either clicked or not).
- Active: bevel INVERTS (top/left become shadow, bottom/right become highlight — the button appears pressed).
  - `active:border-t-[#808080] active:border-l-[#808080] active:border-b-white active:border-r-white`.
- Focus: `focus:outline focus:outline-2 focus:outline-[#3a6abf]` (classic Mac focus ring).
- Transitions: `transition-none` (classic Mac OS had NO smooth transitions — everything was instant).
- Double-click to open windows/files (classic Mac convention).

## Reusable Tailwind Tokens

- Platinum window: `bg-[#ebebeb] border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080]`
- Striped title: `bg-[repeating-linear-gradient(0deg,#ebebeb_0px,#ebebeb_1px,#d4d4d4_1px,#d4d4d4_2px)]`
- Beveled button: `bg-[#ebebeb] border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080] px-4 py-1`
- Inset panel: `bg-white border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white`
- Desktop green: `bg-[#5a8a6a]`
- Close box: `w-3 h-3 rounded-full border border-[#000] bg-[#ebebeb]`

## Quality Checklist (must pass)

- Surfaces use the platinum gray bevel system (white top/left + gray bottom/right).
- At least one window with a striped title bar.
- Beveled buttons that invert on active state.
- Inset/recessed panels for content.
- Classic Mac system fonts (Chicago, Geneva, Monaco or close alternatives).
- Menu bar or window chrome present.
- Desktop background is a classic Mac color (green or blue).
- Close/zoom boxes on window title bars.
- The aesthetic reads as a 1990s Macintosh desktop.
- Transitions are instant (no smooth animation — `transition-none`).

## Anti-Patterns

- Smooth CSS transitions (classic Mac OS was instant — no animation between states).
- Modern flat design (Mac OS Classic is heavily beveled and 3D).
- Missing the bevel system (white highlight + gray shadow on every element).
- Modern web fonts (use Chicago, Geneva, Monaco or close alternatives).
- Missing window title bars with stripes (this is the signature chrome).
- Rounded corners (classic Mac used minimal radius — `rounded-sm` at most).
- Missing close/zoom boxes on windows.
- Dark mode (Mac OS Classic is light-mode only — platinum gray).
- Hover effects (classic Mac had no hover — only click states).
- Missing desktop background pattern (the desktop IS the canvas).

## Accessibility Considerations

- Platinum gray with black text provides excellent contrast (WCAG AAA).
- Heavy beveled borders provide strong visual definition of interactive elements.
- Focus rings: `focus:outline focus:outline-2 focus:outline-[#3a6abf]` (classic Mac blue outline).
- The 3D bevel system naturally communicates interactive vs. non-interactive elements.
- Small font sizes (12px) may be too small for some users — allow scaling.
- Close/zoom boxes must be keyboard accessible (not just mouse).
- Desktop patterns must not reduce text contrast when windows overlap.
- The instant transitions (no animation) are actually GOOD for users with motion sensitivity.
- Touch targets may be small (classic Mac used 16px+ elements) — verify on mobile.
