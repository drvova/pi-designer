---
name: floppy-disk-retro-ui
description: Build floppy disk retro UI components (3.5" disk shape, slider shutter, hub ring, label area, disk jacket, eject button, disk drive slot) with vintage floppy disk aesthetics, chunky 1990s UI elements, and the physical media nostalgia of early computing. Trigger this skill when the user asks for floppy disk, 3.5 inch disk, diskette, physical media UI, retro storage, disk drive, floppy aesthetics, save icon style, or 1990s removable media interfaces.
---

# Floppy Disk Retro UI

Use this skill to design and implement retro interfaces inspired by the 3.5-inch floppy disk: square disk body with notched corners, sliding metal shutter, concentric hub ring, white adhesive label, chunky disk jacket surface, eject mechanism, and the tactile physical media nostalgia of early 1990s computing. Every component is rooted in the real physical object -- the floppy disk is not a metaphor here, it is the design language itself.

## Non-Negotiable Foundations

- The 3.5-inch floppy disk silhouette is sacred: a square with clipped/notched corners, roughly 90mm x 94mm proportional ratio.
- The metal slider shutter must always appear at the top, sliding left-to-right to reveal/hide the magnetic surface beneath.
- The hub ring is a concentric metallic circle dead center with a small hole, surrounded by a visible metal ring -- this is the mechanical heart of the disk.
- The label is a white or off-white rectangular adhesive area in the lower two-thirds of the disk face, always with ruled lines for handwriting.
- The disk jacket is the outer shell -- slightly textured, matte, with subtle surface grain suggesting injection-molded ABS plastic.
- Write-protect notch is a small physical toggle at the bottom-left corner: open = writable, covered = read-only.
- All colors come from the physical object: disk body black/blue, shutter silver, hub metallic, label cream. No neon, no pastels, no gradients that don't exist on the real thing.
- The design must feel holdable, weighty, and mechanical. This is physical media translated to pixels.

## Core Material Recipes

### 1) 3.5" Floppy Disk Body (Full Component)

The complete disk as a UI card/container.

- Outer body: `bg-[#2a2a2a] rounded-[4px] w-[200px] h-[210px] relative overflow-hidden shadow-[2px_2px_8px_rgba(0,0,0,0.5)]`.
- Notched corners: `before:content-[''] before:absolute before:top-0 before:right-0 before:w-[16px] before:h-[16px] before:bg-[#1a1a1a] before:clip-path[polygon(100%_0,0_0,100%_100%)]` (top-right notch); repeat for top-left with `clip-path[polygon(0_0,100%_0,0_100%)]`.
- Bottom notches: same pattern mirrored at `before:bottom-0` for bottom-left and `before:bottom-0 before:right-0` for bottom-right.
- Surface texture: `bg-[url('data:image/svg+xml,...')] opacity-[0.03]` (fine grain overlay simulating ABS plastic texture).
- Metal shutter area: `absolute top-[8px] left-[12px] right-[12px] h-[36px] bg-[#c0c0c0] border border-[#888] rounded-[1px]`.
- Shutter slider: `absolute top-[10px] left-[14px] w-[28px] h-[32px] bg-gradient-to-b from-[#d8d8d8] via-[#c0c0c0] to-[#a0a0a0] border border-[#999] cursor-pointer`.
- Shutter slider grooves: three horizontal lines at `h-[1px] bg-[#999] w-[20px] mx-auto` stacked with `gap-[3px]` inside the slider.
- Exposed magnetic surface (when shutter open): `absolute top-[10px] left-[50px] right-[14px] h-[32px] bg-[#1a1a1a] rounded-[1px]` (dark brown-black visible through the window).
- Hub ring: `absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[36px] h-[36px] rounded-full bg-[#a0a0a0] border-2 border-[#888] shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)]`.
- Hub center hole: `absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[10px] h-[10px] rounded-full bg-[#1a1a1a] border border-[#666]`.
- Hub metallic ring highlight: `absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.15)_90deg,transparent_180deg,rgba(255,255,255,0.1)_270deg)]`.
- Label area: `absolute bottom-[18px] left-[16px] right-[16px] h-[90px] bg-[#f5f0f0] border border-[#ddd] rounded-[1px]`.
- Label ruled lines: four horizontal lines at `h-[1px] bg-[#ccc] w-full` spaced `space-y-[16px]` starting `pt-[14px]`.
- Label text: `font-mono text-[9px] text-[#333] tracking-wide` (monospace like a typewritten label).
- Write-protect notch (bottom-left): `absolute bottom-[12px] left-[10px] w-[8px] h-[12px] bg-[#2a2a2a] border border-[#444]` (open/writable state).
- Write-protect notch covered: `bg-[#c0c0c0]` (slid cover = read-only).
- Disk body edge highlight: `ring-1 ring-[#444]` (subtle edge definition).

### 2) Metal Slider Shutter (Isolated)

The top sliding cover as a standalone interactive element.

- Shutter track: `bg-[#c0c0c0] w-[160px] h-[40px] border border-[#888] rounded-[1px] relative overflow-hidden`.
- Shutter track groove (top and bottom rails): `absolute top-[2px] left-0 right-0 h-[2px] bg-gradient-to-b from-[#aaa] to-[#ddd]` and mirrored at `bottom-[2px]`.
- Sliding cover: `absolute top-[3px] left-[var(--shutter-pos,4px)] w-[48px] h-[34px] bg-gradient-to-b from-[#d0d0d0] via-[#c0c0c0] to-[#a8a8a8] border border-[#999] cursor-grab active:cursor-grabbing rounded-[1px]`.
- Cover grip ridges: container `flex flex-col gap-[3px] justify-center items-center h-full px-[14px]`, lines `w-[18px] h-[1px] bg-[#888]`.
- Exposed magnetic window (when shutter slides right): `absolute top-[3px] left-[56px] right-[4px] h-[34px] bg-[#1a1a1a] border border-[#333] rounded-[1px]`.
- Spring return shadow: `shadow-[inset_-2px_0_4px_rgba(0,0,0,0.15)]` on the track when shutter is displaced.
- Mechanical click sound indicator: `transition-none` (no smooth animation -- shutter snaps to open/closed like the real mechanism).

### 3) Hub Ring Center (Isolated)

The mechanical hub as a decorative/interactive center.

- Outer metallic ring: `w-[48px] h-[48px] rounded-full bg-[radial-gradient(circle,#b0b0b0_0%,#909090_60%,#707070_100%)] border-2 border-[#888] shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.3)]`.
- Inner metal washer ring: `absolute top-[6px] left-[6px] right-[6px] bottom-[6px] rounded-full bg-[radial-gradient(circle,#c0c0c0_0%,#a0a0a0_70%,#888_100%)] border border-[#999]`.
- Center spindle hole: `absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[12px] h-[12px] rounded-full bg-[#1a1a1a] border border-[#666] shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)]`.
- Spindle engagement D-shape: `clip-path[polygon(25%_0,75%_0,100%_25%,100%_75%,75%_100%,25%_100%,0_75%,0_25%)]` on a `w-[8px] h-[8px] bg-[#111]` center.
- Metallic reflection sweep: `bg-[conic-gradient(from_45deg,transparent_0deg,rgba(255,255,255,0.2)_45deg,transparent_90deg,rgba(255,255,255,0.1)_225deg,transparent_270deg)]` as overlay.
- Drive spindle teeth: six tiny `w-[2px] h-[4px] bg-[#666]` rectangles radiating from center at 60-degree intervals using `rotate()` transforms.

### 4) Disk Label Area (Isolated)

The writable label as a standalone card/input area.

- Label surface: `bg-[#f5f0f0] border border-[#ddd] rounded-[1px] px-[12px] py-[8px] w-[168px] h-[90px]`.
- Adhesive edge (top): `absolute top-[-1px] left-[4px] right-[4px] h-[3px] bg-[#e8e3e3] border-b border-[#ccc]` (shows the peeling adhesive strip).
- Ruled lines for writing: `border-b border-[#c8c8c8]` on each line, four lines total, `space-y-[16px]`.
- Line 1 (disk name): `font-mono text-[10px] text-[#333] tracking-[0.05em]`.
- Line 2 (contents): `font-mono text-[9px] text-[#555]`.
- Line 3 (date): `font-mono text-[8px] text-[#777]`.
- Pre-printed text: `text-[7px] text-[#aaa] uppercase tracking-wider` (tiny "DISK NAME", "CONTENTS", "DATE" labels in top-left of each line).
- Faded label variant: `bg-[#ece7e0] opacity-[0.85]` (aged, yellowed label).
- Handwritten style: `font-['Caveat',cursive] text-[11px] text-[#222]` (Google Font for handwritten feel).

### 5) Disk Jacket Surface

The outer protective shell texture and material feel.

- Base jacket: `bg-[#2a2a2a] relative overflow-hidden`.
- Plastic grain texture: `before:content-[''] before:absolute before:inset-0 before:bg-[repeating-conic-gradient(rgba(255,255,255,0.02)_0%_25%,transparent_0%_50%)] before:bg-[size:2px_2px] before:pointer-events-none`.
- Molded edge lip: `border border-[#3a3a3a] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]`.
- Surface scuffs: `after:content-[''] after:absolute after:top-[30%] after:left-[10%] after:w-[40%] after:h-[1px] after:bg-[rgba(255,255,255,0.03)] after:rotate-[-5deg] after:pointer-events-none` (subtle wear marks).
- Metal rivet points (corners): four `w-[3px] h-[3px] rounded-full bg-[#555] border border-[#444] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]` positioned at each corner inset by 8px.
- Color variants: black `#2a2a2a` (most common), blue `#2a4a8a` (common colored disks), teal `#2a6a6a` (less common), brown `#4a3a2a` (older stock).

### 6) Eject Button

The mechanical push-button that releases the disk from a drive.

- Button housing: `bg-[#c0c0c0] w-[24px] h-[24px] border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080] rounded-[2px]`.
- Button face: `absolute inset-[2px] bg-[#d0d0d0] border border-t-[#e0e0e0] border-l-[#e0e0e0] border-b-[#999] border-r-[#999] rounded-[1px]`.
- Button label (upward arrow): `text-[10px] text-[#666] font-bold leading-none` or an SVG arrow icon `w-[10px] h-[10px] text-[#666]`.
- Pressed state: `active:border-t-[#808080] active:border-l-[#808080] active:border-b-white active:border-r-white active:translate-y-[1px]` (inverted bevel, slight depression).
- Mechanical detent feel: `transition-none` (snap, no smooth animation).
- Drive slot surround: `bg-[#c0c0c0] p-[3px] rounded-[2px] border border-[#888]`.

### 7) Disk Drive Slot Opening

The slot where a disk is inserted into a drive.

- Drive faceplate: `bg-[#d4c8a0] w-[120px] h-[40px] border border-[#888] rounded-[2px] shadow-[0_2px_6px_rgba(0,0,0,0.2)]` (beige PC case color).
- Slot opening: `absolute top-[8px] left-[12px] right-[36px] h-[6px] bg-[#1a1a1a] border border-[#333] rounded-[1px]` (dark horizontal slot).
- Slot inner shadow: `shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]` on the slot opening.
- Disk half-inserted: `absolute top-[-24px] left-[8px] right-[40px] h-[32px] bg-[#2a2a2a] border border-[#444] rounded-t-[3px]` (disk protruding from slot).
- Activity LED: `absolute top-[12px] right-[16px] w-[6px] h-[6px] rounded-full bg-[#c41e1e] shadow-[0_0_4px_#c41e1e]` when reading.
- Activity LED off: `bg-[#4a1a1a] shadow-none` (dark red, not glowing).
- Drive label: `absolute bottom-[4px] left-[12px] text-[7px] text-[#555] uppercase tracking-wider font-sans` (like "3.5FDD" or brand name).
- Eject button (next to slot): see Eject Button recipe above, positioned `absolute right-[8px] top-[50%] translate-y-[-50%]`.

### 8) Write-Protect Notch Indicator

Physical write-protect toggle as a UI control.

- Notch slot: `w-[8px] h-[12px] bg-[#1a1a1a] border border-[#444] rounded-[1px] relative`.
- Sliding cover (writable): `absolute inset-0 bg-[#c0c0c0] translate-x-[-100%]` (cover slid open, notch exposed = writable).
- Sliding cover (read-only): `absolute inset-0 bg-[#c0c0c0]` (cover in place, notch blocked = read-only).
- Toggle indicator: `w-[8px] h-[12px] cursor-pointer` with `active:translate-x-[var(--toggle)]`.
- State label: `text-[7px] text-[#888] uppercase tracking-wider` reading "R/W" or "LOCK".

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Disk Black | `#2a2a2a` | Primary disk body color, most common |
| Disk Blue | `#2a4a8a` | Colored disk variant body |
| Disk Teal | `#2a6a6a` | Less common disk body |
| Disk Brown | `#4a3a2a` | Aged or older disk body |
| Shutter Silver | `#c0c0c0` | Metal slider shutter, eject button |
| Shutter Highlight | `#d8d8d8` | Top edge of shutter catch light |
| Shutter Shadow | `#a0a0a0` | Bottom edge of shutter |
| Label White | `#f5f0f0` | Adhesive label surface |
| Label Aged | `#ece7e0` | Yellowed aged label |
| Hub Metallic | `#a0a0a0` | Center hub ring outer |
| Hub Bright | `#b0b0b0` | Center hub ring highlight |
| Hub Shadow | `#707070` | Center hub ring dark edge |
| Magnetic Surface | `#1a1a1a` | Exposed magnetic media under shutter |
| Write-Protect Silver | `#c0c0c0` | Sliding write-protect cover |
| Jacket Edge | `#3a3a3a` | Molded edge lip definition |
| Drive Beige | `#d4c8a0` | PC drive faceplate/case |
| Activity LED Red | `#c41e1e` | Drive read/write indicator |
| Activity LED Off | `#4a1a1a` | Drive LED dark state |

Rules: All colors derive from the physical floppy disk and its associated hardware. The palette is dominated by black/gray/silver -- the real materials of a floppy disk. Blue and teal appear only as disk body color variants. Red is reserved exclusively for the write-protect indicator and drive activity LED. No saturated accent colors exist on the real object. The palette is matte -- no glossy highlights except on the metallic hub ring and shutter surface where light naturally catches.

## Typography Recommendations

- **Primary:** Courier New or Courier (monospace -- matching the typewriter-style text on real adhesive labels).
- **Alternative:** VT323 (Google Font) for a more authentic dot-matrix terminal feel.
- **Label text:** 9-10px monospace, tracking-wide, simulating typewriter or label-maker tape.
- **Drive labels:** 7-8px sans-serif uppercase, tracking-wider (the tiny printed text on drive faceplates).
- **Disk title:** 11-12px monospace bold (the main disk name on the label).
- **Sizes:** 7px (drive labels) to 12px (disk titles) -- nothing large, this is compact media.
- Modern fallback: Use `font-mono text-[9px]` for label text, `font-sans text-[7px] uppercase tracking-wider` for hardware labels.

## Component Architecture Pattern

- The floppy disk is the primary container -- all other elements (shutter, hub, label) nest inside it.
- The disk body is always a near-square rectangle with clipped corners (never a circle, never a pure rectangle).
- Shutter, hub, and label are positioned absolutely within the disk body using percentage or fixed pixel offsets.
- Drive components (slot, LED, eject button) compose separately and connect to the disk via insertion animation or state.
- Write-protect is a small toggle that can exist on the disk itself or as a standalone UI control.
- Composition: `DiskBody > { Shutter, HubRing, LabelArea, WriteProtectNotch }`.
- Drive composition: `DriveFaceplate > { SlotOpening, EjectButton, ActivityLED, DriveLabel }`.

## Interaction Rules

- Default state: disk body is static, shutter closed (magnetic surface hidden).
- Shutter drag: `cursor-grab active:cursor-grabbing` -- the shutter slides along its track (horizontal only, clamped to track bounds).
- Shutter snap: `transition-none` -- snaps to open/closed like the real spring mechanism, no smooth easing.
- Hub rotation (decorative): on disk insertion or active read, hub rotates with `animate-spin` at `duration-[2000ms]` (slow mechanical spin).
- Disk insertion: `translate-y-[0]` to `translate-y-[100%]` over 300ms with `ease-in` (disk slides into slot).
- Disk eject: `translate-y-[100%]` to `translate-y-[0]` over 200ms with `ease-out` (spring-loaded pop).
- Eject button press: inverted bevel on `active:` state, `transition-none`.
- Activity LED blink: `animate-pulse` with `bg-[#c41e1e]` during read/write operations.
- Write-protect toggle: click toggles between open (writable) and covered (read-only) states.
- Hover on disk: `shadow-[2px_2px_12px_rgba(0,0,0,0.7)]` (deeper shadow suggesting the disk is being picked up).
- No smooth transitions on mechanical elements -- floppy drives were clicky, snappy, and immediate.

## Reusable Tailwind Tokens

- Floppy disk body: `bg-[#2a2a2a] rounded-[4px] relative overflow-hidden shadow-[2px_2px_8px_rgba(0,0,0,0.5)]`.
- Metal shutter: `bg-gradient-to-b from-[#d8d8d8] via-[#c0c0c0] to-[#a0a0a0] border border-[#999]`.
- Hub ring: `rounded-full bg-[radial-gradient(circle,#b0b0b0_0%,#909090_60%,#707070_100%)] border-2 border-[#888]`.
- Hub hole: `rounded-full bg-[#1a1a1a] border border-[#666] shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)]`.
- Label surface: `bg-[#f5f0f0] border border-[#ddd] rounded-[1px]`.
- Label ruled line: `border-b border-[#c8c8c8]`.
- Disk texture overlay: `bg-[repeating-conic-gradient(rgba(255,255,255,0.02)_0%_25%,transparent_0%_50%)] bg-[size:2px_2px]`.
- Eject button: `bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080]`.
- Drive slot: `bg-[#1a1a1a] border border-[#333] shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]`.
- Activity LED on: `w-[6px] h-[6px] rounded-full bg-[#c41e1e] shadow-[0_0_4px_#c41e1e] animate-pulse`.
- Activity LED off: `w-[6px] h-[6px] rounded-full bg-[#4a1a1a]`.
- Write-protect notch: `w-[8px] h-[12px] bg-[#1a1a1a] border border-[#444] rounded-[1px]`.
- Disk corner notch: `clip-path[polygon(100%_0,0_0,100%_100%)]` at 16px size.

## Quality Checklist

- Square disk body with all four corner notches visible and correctly positioned.
- Metal slider shutter at top with visible groove ridges and horizontal track rails.
- Hub ring centered with concentric metallic gradients and dark spindle hole.
- Label area in lower two-thirds with ruled lines and monospace text.
- Disk jacket surface has subtle plastic grain texture overlay.
- Write-protect notch present at bottom-left with correct toggle state.
- Activity LED blinks during read/write operations (red glow on, dark red off).
- Eject button has correct Win31-style bevel (white top-left, gray bottom-right).
- Drive slot has dark inset shadow suggesting physical depth.
- All colors are muted and matte -- no glossy neon, no saturated accents.
- Mechanical interactions snap instantly (`transition-none`) -- no smooth easing on hardware.
- Disk proportions are approximately 1:1.05 (width:height) matching the real 3.5" form factor.
- Hub metallic reflection uses conic gradient for realistic light sweep.
- Labels use monospace typography at 9-10px sizes.

## Anti-Patterns

- Circular floppy disk (the 3.5" disk is SQUARE -- circles are reel-to-reel tape or CDs).
- Smooth CSS transitions on shutter or eject mechanisms (these are spring-loaded mechanical parts that snap).
- Glossy or glossy plastic effects (floppy disks were matte ABS plastic).
- Gradient-heavy surfaces (the real object has flat matte color with subtle texture).
- Neon or saturated accent colors (the palette is black/silver/gray/white with muted blue/teal disk variants only).
- 5.25" floppy proportions (that was a larger, flexible disk -- the 3.5" is rigid and smaller).
- Rounded corners on the disk body (only the corner notches clip -- the rest is straight edges).
- Large typography (floppy labels were written in tiny text or on label-maker tape).
- Drop shadows that are too soft or large (floppy disks cast small, hard shadows from being flat and thin).
- Animated shutter slide with easing curves (the real shutter has a spring detent that snaps).
- Using the save icon silhouette as the only floppy reference (the physical object itself is the design language).
- Making the hub ring flat/solid (it must have metallic radial gradients to look like stamped metal).

## Accessibility Considerations

- Disk black body (`#2a2a2a`) with label white (`#f5f0f0`) provides strong contrast for text content (WCAG AAA).
- Metallic silver elements (`#c0c0c0`) with dark borders (`#888`) maintain clear distinction from surrounding elements.
- Activity LED uses color AND glow (`shadow-[0_0_4px_#c41e1e]`) -- not color alone -- to indicate state.
- Write-protect notch has a visible position change (open vs. covered) plus a text label ("R/W" or "LOCK").
- Eject button has beveled borders that visually communicate interactivity even without hover.
- Focus states: `focus:outline-2 focus:outline-offset-2 focus:outline-[#c0c0c0]` (silver outline matching the metallic theme).
- Shutter interaction provides `aria-label="Disk shutter, drag to open or close"` and `role="slider"` with `aria-valuenow`.
- Disk components use `role="img"` with `aria-label="3.5 inch floppy disk"` for non-interactive decorative instances.
- The instant snap animation (`transition-none`) is beneficial for motion-sensitive users -- no smooth motion.
- Touch targets for eject button and write-protect notch are small (8-24px) -- scale up to minimum 44px for touch interfaces.
- Hub rotation animation can be disabled with `prefers-reduced-motion` media query: `motion-reduce:animate-none`.
