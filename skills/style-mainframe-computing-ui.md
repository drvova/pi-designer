---
name: mainframe-computing-ui
description: Build mainframe computing UI components (tape reel, punch card, blinking panel lights, cold room, operator console, batch printout, IBM style) with 1960s mainframe aesthetics, blinking indicator lights, and the institutional computing of enterprise mainframes. Trigger this skill when the user asks for mainframe, IBM mainframe, 1960s computing, cold room, tape reel, punch card, batch processing, operator console, blinking lights panel, big iron, or enterprise retro computing interfaces.
---

# Mainframe Computing UI

Use this skill to design and implement retro interfaces inspired by 1960s-1970s IBM mainframe computing: reel-to-reel magnetic tape drives, punch card rectangles with punched holes, blinking panel indicator lights, cold room environments with raised floors, operator consoles with toggle switches, continuous-feed batch printouts, and the institutional blue-and-gray aesthetic of enterprise computing before the personal computer era.

## Non-Negotiable Foundations

- The IBM horizontal stripe is the primary brand motif: bold horizontal bands of IBM blue (`#1a4a8a`) on white or gray.
- Tape reels are large circles with visible hub, flanges, and tape path -- the most iconic mainframe visual element.
- Punch cards are strict rectangles with a precise grid of rectangular holes -- never circular holes, never random.
- Panel lights are small, densely packed, arranged in horizontal rows with labels beneath each indicator.
- The cold room is a raised-floor environment with overhead fluorescent lighting, visible ductwork, and cable trenches.
- Operator consoles have toggle switches, dials, and indicator lights -- never touchscreens, never modern displays.
- Batch printout uses continuous-feed ( tractor-feed ) paper with sprocket holes on both edges and perforated tear-lines.
- The palette is institutional: IBM blue, machine gray, tape brown, punch card cream, indicator red/green. No personal-expression colors.
- Everything is hard, angular, mechanical, and fluorescent-lit. This is the computing that ran banks, airlines, and governments.

## Core Material Recipes

### 1) Reel-to-Reel Tape Drive

The magnetic tape reel as a primary visual component.

- Reel flange (outer ring): `w-[120px] h-[120px] rounded-full bg-[radial-gradient(circle,#d0d0d0_0%,#b0b0b0_70%,#8a8a8a_100%)] border-4 border-[#888] shadow-[0_4px_12px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.3)]`.
- Reel hub (center): `absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[32px] h-[32px] rounded-full bg-[radial-gradient(circle,#e0e0e0_0%,#c0c0c0_50%,#a0a0a0_100%)] border-2 border-[#999] shadow-[inset_0_1px_3px_rgba(0,0,0,0.2)]`.
- Hub spindle hole: `absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[8px] h-[8px] rounded-full bg-[#333] border border-[#666]`.
- Tape wound on reel (between hub and flange): `absolute inset-[20px] rounded-full bg-[#5a3a1a]` (tape brown).
- Tape layering: `bg-[repeating-radial-gradient(circle,transparent_0px,#5a3a1a_2px,#6a4a2a_3px,transparent_4px)]` over the tape area (concentric rings suggesting wound tape).
- Tape path (threaded from reel downward): `absolute top-[50%] left-[50%] translate-x-[50%] w-[2px] h-[40px] bg-[#5a3a1a]`.
- Tape guide posts: two `absolute w-[6px] h-[6px] rounded-full bg-[#c0c0c0] border border-[#888]` positioned along the tape path.
- Reel rotation (spinning): `animate-[spin_3s_linear_infinite]` during active read/write.
- Reel stationary: `motion-reduce:animate-none` for accessibility.
- Reel frame housing: `bg-[#d4c8a0] p-[8px] border border-[#888] rounded-[2px] shadow-[0_2px_6px_rgba(0,0,0,0.3)]` (beige machine housing).
- Tape counter (below reel): `bg-[#1a1a1a] border border-[#444] px-[4px] py-[2px] text-[9px] text-[#40a040] font-mono tracking-wider` (green-on-black counter display).
- Status indicator: `absolute top-[4px] right-[4px] w-[4px] h-[4px] rounded-full bg-[#40a040] shadow-[0_0_3px_#40a040]` (green = active).

### 2) Punch Card

The 80-column Hollerith punch card as a data display element.

- Card body: `bg-[#f0e8d0] w-[240px] h-[80px] border border-[#c8b898] rounded-[2px] shadow-[1px_2px_4px_rgba(0,0,0,0.2)] relative overflow-hidden`.
- Card edge bevel: `shadow-[inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(0,0,0,0.1)]` (stiff card stock feel).
- Corner crop marks: `before:content-[''] before:absolute before:top-0 before:right-[8px] before:w-[8px] before:h-[8px] before:bg-[#f0e8d0] before:border-b before:border-l before:border-[#c8b898] before:rotate-45` (diagonal corner cut on top-right).
- Column grid: 80 columns across the width, each `w-[3px]` wide with `gap-[0px]`, arranged as `flex flex-wrap`.
- Row positions: 12 rows vertically (positions 12, 11, 0-9), each row represents a punch zone.
- Rectangular punch holes: `w-[3px] h-[5px] bg-[#1a1a1a]` (dark holes punched through cream card stock).
- Unpunched position: `w-[3px] h-[5px] bg-transparent border border-[#d8d0b8]` (faint column/row guides).
- Row numbers: `text-[5px] text-[#aaa] font-mono` along the left edge (12, 11, 0, 1, 2, ... 9).
- Column numbers: `text-[4px] text-[#bbb] font-mono` along the top edge (10, 20, 30, ... 80).
- Zone punch: larger holes at rows 12, 11, 0 (the top three positions used for alphabetic encoding).
- Card feed notch: `absolute bottom-[-2px] left-[50%] translate-x-[-50%] w-[6px] h-[3px] bg-[#c8b898]` (alignment notch on bottom edge).
- Stacked cards: `shadow-[2px_0_0_#e0d8c0,4px_0_0_#e8e0c8,6px_1px_0_#d0c8b0]` (offset shadow suggesting a card stack).
- Laced alpha characters: render actual letters/numbers above the punch positions using `text-[6px] text-[#333] font-mono` with punch holes aligned beneath.

### 3) Blinking Panel Lights

Row of small colored indicator lights on a control panel.

- Panel housing: `bg-[#8a8a8a] p-[8px] border-2 border-t-[#999] border-l-[#999] border-b-[#555] border-r-[#555] rounded-[2px]`.
- Light row: `flex gap-[6px] items-end`.
- Individual light (on, red): `w-[6px] h-[6px] rounded-full bg-[#c41e1e] shadow-[0_0_6px_#c41e1e,0_0_12px_rgba(196,30,30,0.3)]`.
- Individual light (off, red): `w-[6px] h-[6px] rounded-full bg-[#4a1a1a] shadow-none`.
- Individual light (on, green): `w-[6px] h-[6px] rounded-full bg-[#40a040] shadow-[0_0_6px_#40a040,0_0_12px_rgba(64,160,64,0.3)]`.
- Individual light (off, green): `w-[6px] h-[6px] rounded-full bg-[#1a3a1a] shadow-none`.
- Individual light (on, amber): `w-[6px] h-[6px] rounded-full bg-[#d4a020] shadow-[0_0_6px_#d4a020,0_0_12px_rgba(212,160,32,0.3)]`.
- Individual light (off, amber): `w-[6px] h-[6px] rounded-full bg-[#3a2a10] shadow-none`.
- Light bezel ring: `border border-[#666]` around each light (the metal ring that holds the bulb).
- Light label: `text-[5px] text-[#ccc] font-mono text-center mt-[2px] uppercase` beneath each light (like "RDY", "ACT", "ERR", "PWR").
- Blinking animation: `animate-[blink_1s_step-end_infinite]` for status indicators.
- Blink keyframes: `@keyframes blink { 0%, 100% { opacity: 1 } 50% { opacity: 0.3 } }`.
- Panel row label: `text-[6px] text-[#ddd] uppercase tracking-widest font-sans mb-[4px]` (like "POWER", "I/O STATUS", "MEMORY").
- Light bank grouping: divide into logical groups with `border-l border-[#666] pl-[6px]` separators.

### 4) Cold Room Environment

The raised-floor computing room as a background/container.

- Raised floor tiles: `grid grid-cols-[80px_80px] gap-[2px] bg-[#c0c0c0]` (floor panels with visible seams).
- Floor panel: `bg-[#d0d0d0] border border-[#bbb] h-[80px]` (individual tile with slight color variation).
- Floor vent tile: `bg-[repeating-linear-gradient(0deg,#aaa_0px,#aaa_2px,#ccc_2px,#ccc_4px)]` (perforated ventilation tile).
- Cable trench (between rows): `h-[2px] bg-[#555]` (dark line between floor panels).
- Overhead fluorescent light: `w-[200px] h-[8px] bg-[#f0f0f0] border border-[#ddd] shadow-[0_0_20px_rgba(255,255,255,0.5),0_0_60px_rgba(255,255,255,0.1)]` (long fluorescent tube).
- Ceiling grid: `bg-[#e8e8e8] h-[20px] border-b border-[#ccc]` with recessed light fixtures.
- Machine rows: alternating `bg-[#d4c8a0]` (beige machines) and `bg-[#8a8a8a]` (gray machines) in a grid layout.
- Cold room ambient: `bg-[#e8ecf0]` (blue-white institutional lighting tone).
- Cable trays overhead: `h-[4px] bg-[#555] w-full shadow-[0_2px_4px_rgba(0,0,0,0.2)]` (overhead cable management).
- Room temperature display: `bg-[#1a1a1a] px-[6px] py-[2px] text-[10px] text-[#40a040] font-mono` showing "68F" or "20C".
- Raised floor gap (visible under panel): `h-[6px] bg-[#333]` (dark gap between panels showing the cable space beneath).
- Room label: `text-[8px] text-[#888] uppercase tracking-widest font-sans` reading "COMPUTER ROOM -- AUTHORIZED PERSONNEL ONLY".

### 5) Operator Console

The main control desk with switches, displays, and indicators.

- Console body: `bg-[#d4c8a0] w-full border-2 border-t-[#e0d8b8] border-l-[#e0d8b8] border-b-[#a09870] border-r-[#a09870] rounded-[2px] shadow-[0_4px_12px_rgba(0,0,0,0.3)]`.
- Console top surface: `bg-[#c8bc98] p-[12px] border-b border-[#a09870]`.
- Toggle switch (up/on): `w-[12px] h-[20px] bg-[#c0c0c0] border border-[#888] rounded-[1px] relative` with `before:content-[''] before:absolute before:top-[-4px] before:left-[1px] before:right-[1px] before:h-[8px] before:bg-[#d0d0d0] before:border before:border-[#999] before:rounded-t-[2px]` (lever in UP position).
- Toggle switch (down/off): `before:top-[auto] before:bottom-[-4px]` (lever flipped down).
- Toggle switch base: `w-[16px] h-[4px] bg-[#888] border border-[#666] mx-auto` (the pivot housing).
- Toggle switch label: `text-[6px] text-[#555] font-sans text-center mt-[4px] uppercase`.
- Rotary dial: `w-[28px] h-[28px] rounded-full bg-[radial-gradient(circle,#e0e0e0_0%,#c0c0c0_60%,#a0a0a0_100%)] border-2 border-[#888] relative` with `after:content-[''] after:absolute after:top-[2px] after:left-[50%] after:translate-x-[-50%] after:w-[2px] after:h-[8px] after:bg-[#444] after:rounded-[1px]` (indicator line).
- Dial position markings: tiny `text-[4px] text-[#666]` numbers arranged around the dial.
- Data display (Nixie tube style): `bg-[#1a1a1a] border border-[#333] px-[4px] py-[2px] text-[12px] text-[#ff6633] font-mono tracking-wider` (orange-glow digits).
- Nixie tube individual digit: `bg-[#111] border border-[#333] px-[3px] py-[1px] text-[14px] text-[#ff6633] font-mono shadow-[inset_0_0_4px_rgba(255,102,51,0.3)]`.
- Function key row: `flex gap-[4px]` of `bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080] px-[8px] py-[2px] text-[7px] text-[#333] font-sans uppercase` buttons.
- Console label plate: `bg-[#f0e8d0] border border-[#c8b898] px-[4px] py-[1px] text-[7px] text-[#333] font-serif italic` (engraved metal plate aesthetic).
- Emergency stop: `w-[32px] h-[32px] rounded-full bg-[#c41e1e] border-2 border-[#8a1010] shadow-[0_0_8px_rgba(196,30,30,0.4)] text-[8px] text-white font-bold` with "STOP" text.

### 6) Batch Printout (Continuous Feed Paper)

Tractor-feed paper with sprocket holes as a content display area.

- Paper strip: `bg-[#f8f4e8] w-[300px] border-l border-r border-[#d8d4c8] relative` (slightly yellowed continuous paper).
- Sprocket holes (left): `absolute left-[-12px] top-0 bottom-0 w-[10px]` with `flex flex-col gap-[16px]` of `w-[6px] h-[4px] bg-[#f8f4e8] border border-[#c8c4b8] rounded-[1px]`.
- Sprocket holes (right): mirror of left side at `absolute right-[-12px]`.
- Printed text lines: `font-mono text-[9px] text-[#333] leading-[14px] px-[20px] py-[8px]`.
- Dot-matrix character effect: `font-mono text-[9px] tracking-[0.02em]` (slightly spaced, suggesting individual pin strikes).
- Alternating line shading: `even:bg-[rgba(0,0,0,0.02)]` (very subtle banding from the impact printing).
- Perforated tear line: `border-t border-dashed border-[#c8c4b8]` with `text-[5px] text-[#aaa] text-center` showing "TEAR HERE" at regular intervals.
- Carbon copy layer: second paper strip offset by 2px with `opacity-[0.7]` and `bg-[#f0ece0]` (the yellow or pink carbon copy).
- Header text: `text-[10px] text-[#222] font-mono font-bold uppercase` (system name, date, batch number).
- Form fields: `border-b border-[#999] text-[8px] text-[#555] font-mono inline-block min-w-[80px]` (underlined fill-in areas).
- Printout fold: `bg-[linear-gradient(180deg,rgba(0,0,0,0.03)_0%,transparent_2px,transparent_100%)]` (subtle shadow line suggesting accordion fold).
- Green bar paper variant: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_22px,#e8f0e8_22px,#e8f0e8_44px)]` (alternating white and light green bands).

### 7) IBM Horizontal Stripe Header

The iconic IBM branding element.

- Stripe container: `w-full flex flex-col`.
- Blue stripe 1: `h-[4px] bg-[#1a4a8a]`.
- White gap: `h-[2px] bg-white`.
- Blue stripe 2: `h-[4px] bg-[#1a4a8a]`.
- White gap: `h-[2px] bg-white`.
- Blue stripe 3: `h-[4px] bg-[#1a4a8a]`.
- IBM text (over stripes): `absolute top-[50%] left-[16px] translate-y-[-50%] text-[20px] font-serif font-bold text-[#1a4a8a] tracking-[0.3em]` (the eight-bar IBM logo as text).
- IBM logo (alternative): SVG with the eight-bar horizontal striped letterforms.
- Full-width header stripe: `w-full h-[16px] bg-[repeating-linear-gradient(0deg,#1a4a8a_0px,#1a4a8a_4px,white_4px,white_6px)]`.
- Thin stripe variant: `h-[8px] bg-[repeating-linear-gradient(0deg,#1a4a8a_0px,#1a4a8a_2px,white_2px,white_3px)]`.
- Dark background variant: on dark backgrounds, stripes use `#4a8ad0` (lighter blue) with `bg-[#1a1a1a]` gaps.
- Company text alongside stripes: `text-[10px] text-[#1a4a8a] font-serif tracking-[0.2em] uppercase` (like "INTERNATIONAL BUSINESS MACHINES").

### 8) Data Card / Keypunch Display

Punch card data shown as a structured data input form.

- Card background: `bg-[#f0e8d0] border border-[#c8b898] p-[8px]`.
- Column headers: `text-[6px] text-[#888] font-mono tracking-widest` (1-80 column numbers).
- Character field: `w-[3px] h-[8px] inline-block text-center text-[5px] font-mono text-[#333]` (one character per column position).
- Punch visualization: beneath each character, a `w-[3px] h-[4px] bg-[#1a1a1a]` rectangle where the character has a punched hole.
- Zone punch indicators: above the character row, `w-[3px] h-[3px] bg-[#1a1a1a]` for rows 12, 11, 0.
- Field labels (left margin): `text-[5px] text-[#666] font-mono` for row numbers (12, 11, 0, 1, ... 9).
- Card edge markings: `text-[4px] text-[#bbb]` column numbers at positions 1, 10, 20, 30, 40, 50, 60, 70, 80.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| IBM Blue | `#1a4a8a` | Primary brand, stripes, headers |
| IBM Blue Light | `#4a8ad0` | Blue variant on dark backgrounds |
| Panel Gray | `#8a8a8a` | Machine housing, panel surfaces |
| Panel Gray Light | `#b0b0b0` | Lighter machine surfaces |
| Panel Gray Dark | `#555555` | Panel borders, dark hardware |
| Tape Brown | `#5a3a1a` | Magnetic tape color |
| Tape Brown Light | `#6a4a2a` | Tape highlight/edge |
| Punch Card Cream | `#f0e8d0` | Card stock surface |
| Punch Card Shadow | `#c8b898` | Card edge, aged tone |
| Indicator Red | `#c41e1e` | Warning/error lights, E-stop |
| Indicator Red Off | `#4a1a1a` | Dark red (light off state) |
| Indicator Green | `#40a040` | Ready/active lights |
| Indicator Green Off | `#1a3a1a` | Dark green (light off state) |
| Indicator Amber | `#d4a020` | Caution/processing lights |
| Indicator Amber Off | `#3a2a10` | Dark amber (light off state) |
| Console Beige | `#d4c8a0` | Operator console, machine housing |
| Console Beige Dark | `#a09870` | Console shadow edges |
| Cold Room Blue-White | `#e8ecf0` | Ambient room lighting tone |
| Floor Gray | `#d0d0d0` | Raised floor tiles |
| Nixie Orange | `#ff6633` | Numeric display glow |
| Printout Cream | `#f8f4e8` | Continuous-feed paper |
| Printout Green Bar | `#e8f0e8` | Green-bar alternating band |

Rules: The palette is institutional and functional. IBM blue dominates headers and branding. Gray covers machines and panels. Brown exists only on magnetic tape. Cream is reserved for paper products (punch cards, printouts). Red/green/amber are exclusively for indicator lights and must always come in on/off pairs. Console beige is the color of 1960s-70s computer hardware plastic and metal. Cold room blue-white is the ambient fluorescent lighting cast. No personal-expression colors. No pastels. No saturation beyond indicator lights.

## Typography Recommendations

- **Primary:** IBM Plex Mono (the authentic IBM monospace typeface for data displays and printouts).
- **Alternative:** Courier New / Courier (for dot-matrix printout simulation).
- **Headers:** IBM Plex Serif (for IBM branding text and formal document headers).
- **Panel labels:** 5-7px sans-serif uppercase with extreme letter-spacing (tiny engraved labels on hardware).
- **Nixie display:** 14-18px monospace with orange text color and slight glow (simulating gas-discharge tubes).
- **Printout text:** 9px monospace, leading 14px (tight dot-matrix spacing).
- **Punch card text:** 5-6px monospace (tiny characters aligned to column positions).
- **Console labels:** 7-8px serif italic (engraved brass plate aesthetic).
- Sizes: 5px (card column numbers) to 20px (IBM logo header text). Main data displays use 9-12px.

## Component Architecture Pattern

- The IBM stripe header is always the top-level branding element, spanning full width.
- The cold room environment is the page-level container wrapping all other components.
- Machine components (tape drives, consoles, printers) are positioned within the cold room grid.
- Panel light banks are child components of larger machine housings.
- Punch cards and batch printouts are content display components that can appear standalone or within machine frames.
- Operator console is a composite component containing toggles, dials, displays, and indicator lights.
- Composition: `ColdRoom > IBMStripeHeader > { TapeDrive, OperatorConsole, BatchPrinter, PanelLights }`.
- PunchCard is reusable as a data display or input visualization within any context.

## Interaction Rules

- Panel lights blink at different rates: `animate-[blink_0.5s_step-end_infinite]` (fast = activity), `animate-[blink_2s_step-end_infinite]` (slow = heartbeat/status).
- Tape reels spin when active: `animate-[spin_2s_linear_infinite]` with direction indicating read (clockwise) vs. write (counter-clockwise).
- Toggle switches: `active:translate-y-[2px]` (physical depression), `transition-none` (mechanical snap).
- Rotary dials: `cursor-grab active:cursor-grabbing` with drag-to-rotate (mapped to discrete positions, not continuous).
- Nixie digits: `transition-[text-shadow] duration-[100ms]` (brief warm-up glow when digit changes, simulating gas discharge).
- Emergency stop: `active:scale-[0.95]` with immediate stop of all animations (halt the line).
- Printout: `animate-[print_3s_linear_infinite]` scrolling upward with `background-position-y` animation.
- Punch card: click to toggle individual holes at a column/row intersection.
- Hover on machine: `shadow-[0_4px_16px_rgba(0,0,0,0.4)]` (machine becomes selected/highlighted).
- All transitions are either instant (`transition-none`) or brief mechanical (`duration-[100ms]`) -- mainframes were not smooth.

## Reusable Tailwind Tokens

- IBM stripes: `bg-[repeating-linear-gradient(0deg,#1a4a8a_0px,#1a4a8a_4px,white_4px,white_6px)]`.
- Panel light red on: `w-[6px] h-[6px] rounded-full bg-[#c41e1e] shadow-[0_0_6px_#c41e1e]`.
- Panel light red off: `w-[6px] h-[6px] rounded-full bg-[#4a1a1a]`.
- Panel light green on: `w-[6px] h-[6px] rounded-full bg-[#40a040] shadow-[0_0_6px_#40a040]`.
- Panel light green off: `w-[6px] h-[6px] rounded-full bg-[#1a3a1a]`.
- Tape reel: `rounded-full bg-[radial-gradient(circle,#d0d0d0_0%,#b0b0b0_70%,#8a8a8a_100%)] border-4 border-[#888]`.
- Tape wound: `bg-[#5a3a1a]` with `bg-[repeating-radial-gradient(circle,transparent_0px,#5a3a1a_2px,#6a4a2a_3px,transparent_4px)]`.
- Punch card body: `bg-[#f0e8d0] border border-[#c8b898] rounded-[2px]`.
- Punch hole: `w-[3px] h-[5px] bg-[#1a1a1a]`.
- Printout paper: `bg-[#f8f4e8] border-l border-r border-[#d8d4c8]`.
- Sprocket hole: `w-[6px] h-[4px] bg-[#f8f4e8] border border-[#c8c4b8] rounded-[1px]`.
- Console housing: `bg-[#d4c8a0] border-2 border-t-[#e0d8b8] border-l-[#e0d8b8] border-b-[#a09870] border-r-[#a09870]`.
- Nixie digit: `bg-[#1a1a1a] border border-[#333] text-[#ff6633] font-mono shadow-[inset_0_0_4px_rgba(255,102,51,0.3)]`.
- Toggle switch: `w-[12px] h-[20px] bg-[#c0c0c0] border border-[#888] rounded-[1px]`.
- Cold room ambient: `bg-[#e8ecf0]`.
- Raised floor tile: `bg-[#d0d0d0] border border-[#bbb]`.
- Blink animation: `@keyframes blink { 0%, 100% { opacity: 1 } 50% { opacity: 0.3 } }`.

## Quality Checklist

- IBM horizontal stripe header present at top of layout (three blue bars with white gaps).
- Tape reel is circular with visible hub, flange, tape winding (concentric rings), and tape path.
- Punch cards are rectangular with a precise grid of rectangular holes and row/column numbering.
- Panel lights are small (6px), densely packed in rows, with on/off color pairs (red, green, amber).
- Blinking lights use `step-end` timing function (instant on/off, not smooth fade -- real indicator lights snap).
- Operator console has toggle switches, rotary dials, and Nixie-tube style numeric displays.
- Batch printout has sprocket holes on both edges, continuous paper appearance, dot-matrix text.
- Cold room environment shows raised floor tiles with visible seams and overhead lighting.
- Console beige (`#d4c8a0`) is used for all machine hardware housing.
- All text on panels, labels, and hardware is tiny (5-8px) with uppercase tracking.
- Tape reel rotates during active operations (with `prefers-reduced-motion` fallback).
- Nixie digits have orange glow (`text-[#ff6633]`) with subtle inset shadow.
- Emergency stop button is red, circular, prominent, and functional.
- Green-bar paper variant available for alternating stripe printouts.
- No rounded corners on machines, cards, or hardware (only on lights and dials).

## Anti-Patterns

- Touchscreens or modern displays on operator consoles (mainframes had toggle switches, dials, and indicator lights).
- Smooth CSS transitions on indicator lights (real bulbs snap on/off with `step-end` timing).
- Circular punch cards (punch cards are always rectangles -- the Hollerith standard).
- Round holes on punch cards (punch card holes are rectangular, matching the column/row grid).
- Personal-expression colors (this is institutional computing -- blue, gray, beige, cream only).
- LED-style modern displays (use Nixie tubes or backlit panel gauges for the era).
- Wireless or network indicators (mainframes used physical cable connections and tape/card I/O).
- Mouse cursors or pointer interactions on the console (operators used switches and buttons).
- Large readable typography (mainframe labels were tiny engraved text on hardware).
- Smooth tape reel rotation with easing (tape drives had constant-speed motors -- linear rotation).
- Gradient backgrounds on machines (mainframe hardware was flat matte paint or brushed metal).
- Modern status bar or taskbar patterns (mainframes had physical panel lights, not software status bars).
- Colorful UI chrome (the era was blue, gray, beige -- the institutional palette of IBM).
- Rounded rectangle cards (punch cards have sharp corners with a diagonal crop on one corner).
- Drop shadows that are too soft (mainframes sat on raised floors with hard overhead fluorescent lighting).
- Animated paper scroll with smooth easing (continuous-feed printers had mechanical stepping motion).

## Accessibility Considerations

- IBM blue (`#1a4a8a`) on white provides strong contrast (WCAG AA for normal text, AAA for large text).
- Panel light states use color AND glow/shadow -- not color alone -- to indicate on/off (`shadow-[0_0_6px_#c41e1e]` vs. `shadow-none`).
- Blinking lights respect `prefers-reduced-motion: reduce` by becoming static (always-on or always-off).
- Tape reel spinning respects `prefers-reduced-motion: reduce` by pausing animation.
- Toggle switches have visible position indicators (up vs. down) plus text labels -- not position alone.
- Nixie tube digits use high-contrast orange on black (`#ff6633` on `#1a1a1a`) -- excellent contrast ratio.
- Focus states: `focus:outline-2 focus:outline-offset-2 focus:outline-[#1a4a8a]` (IBM blue outline).
- Emergency stop button uses both color (red) and size (32px) and text ("STOP") -- redundant signaling.
- Punch card holes are small (3x5px) -- provide an alternative text-based data display for screen readers.
- Batch printout text uses monospace at 9px minimum -- may need scaling for readability.
- The `step-end` blink timing is actually beneficial for users with vestibular disorders compared to smooth fade.
- Interactive punch card holes need `role="checkbox"` with `aria-label="Column X, Row Y"` for screen reader support.
- Console components use `role="group"` with `aria-label` to organize related toggles, dials, and displays.
