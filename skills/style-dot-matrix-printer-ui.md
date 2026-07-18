---
name: dot-matrix-printer-ui
description: Build dot matrix printer UI components (impact dot pattern, ribbon ink, tractor feed holes, continuous paper, print head line, noise vibration, green-bar paper) with impact printing textures, perforated paper, and the mechanical rhythm of dot matrix printing. Trigger this skill when the user asks for dot matrix UI, impact printer aesthetic, tractor feed paper, continuous paper design, printer ribbon texture, dot pattern text, green-bar paper, mechanical printing UI, receipt printer style, perforated paper layout, or vintage office equipment interface.
---

# Dot Matrix Printer UI

Use this skill to design and implement impact dot-matrix printer interfaces with dot-pattern text rendering, ribbon ink textures, tractor feed hole strips, continuous fan-fold paper with green bars, print head line animations, vibration shake effects, and paper tear edges that recreate the mechanical rhythm and tactile character of dot matrix printing.

## Non-Negotiable Foundations

- Dot matrix printer UI replicates the physical characteristics of impact dot-matrix printing (Epson MX-80, Okidata Microline, IBM 5152) applied to modern web interfaces. The aesthetic is defined by mechanical texture, paper materiality, and the rhythmic impact of metal pins striking an ink ribbon.
- Dot pattern text is the primary typography treatment. Every character is formed from a grid of small dots rather than smooth vector curves. This creates the characteristic jagged, low-resolution letterforms of impact printing.
- Paper is a first-class visual material. The interface must feel like it is printed on continuous fan-fold paper: off-white or cream-toned backgrounds with optional alternating green and white horizontal bars, perforated edges with tractor feed holes, and visible paper texture.
- Tractor feed holes are the signature edge detail: a vertical strip of evenly spaced circular perforations running along one or both sides of the paper, simulating the mechanism that pulls paper through the printer.
- Ribbon ink texture appears on surfaces that represent the ink ribbon: a dark, slightly textured fabric surface that carries the ink supply. This is used for ribbon-related UI elements and decorative texture.
- Print head line is a horizontal line that sweeps across the paper surface left-to-right during print animations, simulating the physical print head traveling across the page and leaving ink behind.
- Vibration shake is a brief, subtle mechanical shake animation that simulates the vibration of the impact pins striking the paper. It applies to elements during active printing states.
- Paper tear edge appears at the bottom of paper sections: a jagged, irregular edge simulating where continuous paper has been torn along the perforation.
- The aesthetic communicates utilitarian function, mechanical precision, and office nostalgia. It is used for receipts, invoices, reports, retro office applications, and data-heavy displays that benefit from the structured, grid-based layout of printed output.

## Core Material Recipes

### 1) Continuous Paper Container

The foundational wrapper: fan-fold continuous paper with texture, bars, and tractor feed holes.

- Paper surface: `bg-[#f5f0e0] rounded shadow-[2px_2px_8px_rgba(0,0,0,0.15)] font-mono text-[#1a1a1a]`.
- Green bar pattern: `bg-[repeating-linear-gradient(0deg,#f5f0e0_0px,#f5f0e0_24px,#c0d8a0_24px,#c0d8a0_48px)]` — alternating 24px paper white and 24px green bars.
- Paper texture overlay: `before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,...')] before:opacity-[0.03] before:pointer-events-none` simulating paper fiber grain.
- Left tractor feed strip: `absolute left-0 top-0 bottom-0 w-8 bg-[#d4c8a0] border-r border-[#b8a880]`.
- Right tractor feed strip (optional): `absolute right-0 top-0 bottom-0 w-8 bg-[#d4c8a0] border-l border-[#b8a880]`.
- Content area: `relative z-[1] mx-12 my-4 px-4`.

### 2) Dot Pattern Text

Characters formed from a grid of individual dots — the signature typographic treatment.

- Container for dot text: `font-mono text-sm tracking-wide`.
- Dot rendering via CSS: each character rendered with `letter-spacing: 0.05em` and a subtle `text-shadow` grid effect.
- Standard dot text: `text-[#1a1a1a] [text-shadow:0.5px_0.5px_0_rgba(26,26,26,0.3)] [image-rendering:pixelated]`.
- Bold dot text (denser pins): `text-[#1a1a1a] font-bold [text-shadow:1px_0.5px_0_rgba(26,26,26,0.4),0.5px_1px_0_rgba(26,26,26,0.2)]`.
- Faded dot text (low ribbon ink): `text-[#3a3a3a] opacity-80 [text-shadow:0.5px_0.5px_0_rgba(58,58,58,0.2)]`.
- For true dot-matrix rendering at display size, use pixel/ bitmap fonts or canvas rendering that draws each character as an explicit dot grid.
- Dot pitch: characters are formed on approximately 9x14 or 9x16 dot matrices for standard 24-pin printers, 7x9 for 9-pin printers.

### 3) Tractor Feed Holes

Perforated edge strip with evenly spaced circular holes.

- Strip container: `w-8 bg-[#d4c8a0] border-r border-[#b8a880] flex flex-col items-center py-2 gap-4`.
- Individual hole: `w-3 h-3 rounded-full bg-[#f5f0e0] border border-[#b8a880] shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]`.
- Hole spacing: `gap-4` (16px vertical gap) between holes, consistent along the entire strip.
- Hole detail: the inner shadow makes the hole appear punched through the paper rather than printed on it.
- Alternative for continuous rendering: use a repeating background pattern for the holes at exact intervals.

### 4) Ribbon Ink Surface

Dark, textured surface representing the ink-soaked fabric ribbon.

- Ribbon container: `bg-[#1a1a1a] rounded-sm border border-[#2a2a2a] overflow-hidden`.
- Ribbon texture: `bg-[repeating-linear-gradient(0deg,#1a1a1a_0px,#1a1a1a_3px,#222_3px,#222_4px)]` simulating woven fabric.
- Ink smear overlay: `before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_30%_50%,rgba(58,58,58,0.4)_0%,transparent_70%)] before:pointer-events-none`.
- Worn ribbon effect: `bg-[#2a2a2a]` with `opacity-80` for used ribbon sections.
- Ribbon label: `text-[#6a6a6a] text-xs font-mono uppercase` on the ribbon surface.

### 5) Print Head Line

Horizontal line that sweeps across the paper simulating the print head travel.

- Print head bar: `h-0.5 bg-[#2a2a2a] absolute left-0 right-0 z-10`.
- Print head sweep animation: `@keyframes print-head { 0% { left: 0; } 50% { left: 100%; } 50.01% { left: 0; opacity: 0.5; } 100% { left: 0; opacity: 1; } }`.
- Apply: `animate-[print-head_3s_linear_infinite]` with `position: absolute` within the paper container.
- Print head shadow: `shadow-[0_-2px_4px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.1)]` for a physical bar effect.
- Optional ink trail: `after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[#1a1a1a]/20 after:transition-[width] after:duration-3000` trailing the print head.

### 6) Paper Tear Edge

Jagged irregular edge at the bottom of a paper section simulating manual tearing.

- Tear edge via SVG clip-path: `clip-path:polygon(0_0,100%_0,100%_calc(100% - 4px),98%_calc(100% - 2px),95%_calc(100% - 6px),92%_calc(100% - 1px),88%_calc(100% - 5px),85%_calc(100% - 3px),80%_calc(100% - 7px),75%_calc(100% - 2px),70%_calc(100% - 4px),65%_calc(100% - 1px),60%_calc(100% - 6px),55%_calc(100% - 3px),50%_calc(100% - 5px),45%_calc(100% - 2px),40%_calc(100% - 7px),35%_calc(100% - 1px),30%_calc(100% - 4px),25%_calc(100% - 3px),20%_calc(100% - 6px),15%_calc(100% - 2px),10%_calc(100% - 5px),5%_calc(100% - 1px),0_calc(100% - 4px))`.
- Bottom shadow for depth: `shadow-[0_4px_8px_rgba(0,0,0,0.1)]` below the torn edge.
- Perforation dots alternative: `before:absolute before:bottom-0 before:left-0 before:right-0 before:h-1 before:bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_4px,#b8a880_4px,#b8a880_5px,transparent_5px,transparent_9px)]` — a dotted line suggesting the perforation you would fold and tear along.

### 7) Vibration Shake Animation

Mechanical vibration simulating impact pins striking paper.

- Shake keyframes: `@keyframes dot-shake { 0%, 100% { transform: translate(0, 0); } 10% { transform: translate(-0.5px, 0.5px); } 20% { transform: translate(0.5px, -0.3px); } 30% { transform: translate(-0.3px, 0px); } 40% { transform: translate(0.3px, 0.5px); } 50% { transform: translate(-0.5px, -0.3px); } 60% { transform: translate(0.2px, 0.3px); } 70% { transform: translate(-0.3px, 0.5px); } 80% { transform: translate(0.5px, -0.5px); } 90% { transform: translate(-0.2px, 0.2px); } }`.
- Apply to paper container during print: `animate-[dot-shake_0.15s_linear_infinite]`.
- Intensity levels: light shake uses `translate(-0.3px, 0.3px)` range, heavy shake uses `translate(-1px, 1px)`.
- Vibration should be extremely subtle — barely visible, more felt than seen.
- Pair with a faint mechanical hum sound effect if audio is available.

### 8) Dot Matrix Print Button

Action button styled as a physical printer control.

- Button: `bg-[#6a6a6a] hover:bg-[#5a5a5a] active:bg-[#4a4a4a] text-[#f5f0e0] font-mono text-sm px-4 py-2 rounded-sm border border-[#4a4a4a] shadow-[1px_1px_0_#3a3a3a,2px_2px_0_#2a2a2a] transition-colors duration-75`.
- Button pressed effect: `active:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.4)] active:translate-x-[1px] active:translate-y-[1px]` simulating physical depression.
- Button label: monospace uppercase text simulating embossed label: `font-mono text-xs uppercase tracking-widest`.
- Button variants: `bg-[#8a8a8a]` for secondary, `bg-[#4a6a4a]` for go/print (green tint), `bg-[#8a4a4a]` for stop/cancel (red tint).

### 9) Receipt / Invoice Layout

Structured data layout formatted as a printed receipt or invoice.

- Receipt container: `bg-[#f5f0e0] w-full max-w-sm mx-auto p-4 font-mono text-[#1a1a1a] shadow-[2px_2px_8px_rgba(0,0,0,0.15)]`.
- Header: `text-center border-b border-dashed border-[#1a1a1a]/30 pb-3 mb-3` with store name in dot-matrix bold.
- Line items: `flex justify-between text-sm py-1 border-b border-dotted border-[#1a1a1a]/15`.
- Item name: `text-[#1a1a1a]` left-aligned.
- Item price: `text-[#1a1a1a] tabular-nums` right-aligned with `font-feature-settings:"tnum"`.
- Separator line: `border-t border-dashed border-[#1a1a1a]/30 my-2`.
- Total line: `border-t-2 border-double border-[#1a1a1a] mt-2 pt-2 font-bold text-base`.
- Footer: `text-center text-xs text-[#3a3a3a] mt-3 border-t border-dashed border-[#1a1a1a]/30 pt-3`.
- Tear edge at bottom: paper tear CSS clip-path.

### 10) Green Bar Data Display

Structured data on alternating green and white horizontal bars.

- Container: `bg-[#f5f0e0] font-mono text-sm`.
- Bar pattern container: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_24px,#c0d8a0_24px,#c0d8a0_48px)]`.
- Data row: `px-4 py-1.5 relative` — each row aligns with the 24px bar height.
- Row height must match bar height exactly: `h-6` (24px) per row for perfect alignment.
- White bar rows: text appears on `#f5f0e0` background.
- Green bar rows: text appears on `#c0d8a0` background.
- Column alignment: use fixed-width columns with `tabular-nums` and consistent `ch`-based widths.
- Grid lines: `border-b border-[#1a1a1a]/10` for horizontal rules between rows.

## Color Palette System

### Primary Paper Palette

| Role | Hex | Tailwind | Purpose |
|---|---|---|---|
| Paper White | `#f5f0e0` | `[#f5f0e0]` | Default paper background, off-white cream |
| Green Bar | `#c0d8a0` | `[#c0d8a0]` | Alternating horizontal bars on lined paper |
| Paper Edge | `#d4c8a0` | `[#d4c8a0]` | Tractor feed strips, torn edges, paper margins |
| Perforation | `#b8a880` | `[#b8a880]` | Hole borders, perforation lines, fold marks |
| Paper Shadow | `#e8e0c8` | `[#e8e0c8]` | Subtle paper depth, layered sheets |

### Ink and Print Palette

| Role | Hex | Tailwind | Purpose |
|---|---|---|---|
| Ribbon Black | `#1a1a1a` | `[#1a1a1a]` | Ink ribbon surface, primary text on paper |
| Dot Black | `#2a2a2a` | `[#2a2a2a]` | Printed dot characters, lighter text |
| Ink Smear | `#3a3a3a` | `[#3a3a3a]` | Ink smudges, worn ribbon marks, secondary text |
| Ink Wash | `#4a4a4a` | `[#4a4a4a]` | Faded text, low ink simulation |
| Fresh Ink | `#0f0f0f` | `[#0f0f0f]` | New ribbon, high-density printed areas |

### Mechanical Palette

| Role | Hex | Tailwind | Purpose |
|---|---|---|---|
| Mechanical Gray | `#6a6a6a` | `[#6a6a6a]` | Printer housing, buttons, mechanical parts |
| Metal Light | `#8a8a8a` | `[#8a8a8a]` | Raised surfaces, button faces |
| Metal Dark | `#4a4a4a` | `[#4a4a4a]` | Recessed areas, shadows, engraved labels |
| Plastic Beige | `#d0c8b0` | `[#d0c8b0]` | Printer body, office equipment housing |
| LED Green | `#33aa33` | `[#33aa33]` | Power indicator, ready status LED |
| LED Red | `#cc3333` | `[#cc3333]` | Error indicator, paper jam LED |

### Ribbon Surface Texture Colors

| Layer | Hex | Purpose |
|---|---|---|
| Base ribbon | `#1a1a1a` | Ribbon fabric base color |
| Weave highlight | `#222222` | Thread highlight in woven pattern |
| Ink saturation | `#0f0f0f` | Fresh ink saturation areas |
| Wear spots | `#2a2a2a` | Used/worn ribbon areas |
| Ribbon label | `#3a3a3a` | Text printed on ribbon cartridge |

## Typography System

Dot matrix printer UI uses monospace exclusively, with a preference for pixel or bitmap fonts that can simulate the dot-grid character formation of impact printing.

| Element | Size | Weight | Color | Treatment |
|---|---|---|---|---|
| Document title | `text-lg` to `text-xl` | `font-bold` | `#1a1a1a` | Double-strike (bold) dot matrix |
| Section header | `text-base` | `font-bold` | `#1a1a1a` | Dense dot grid, full ribbon |
| Body text | `text-sm` | `font-normal` | `#2a2a2a` | Standard dot matrix characters |
| Data value | `text-sm` | `font-normal` | `#1a1a1a` | Tabular numbers, fixed width |
| Data label | `text-xs` | `font-normal` | `#3a3a3a` | Lighter strike, dimmer ink |
| Fine print | `text-xs` | `font-normal` | `#4a4a4a` | Low ink, faded characters |
| Receipt total | `text-base` | `font-bold` | `#0f0f0f` | Overstrike, maximum density |
| Ribbon label | `text-xs` | `font-normal uppercase` | `#6a6a6a` | On ribbon surface |
| Mechanical label | `text-xs` | `font-bold uppercase tracking-widest` | `#f5f0e0` | On gray button/housing |

### Font Recommendations

| Font | Character | Best For |
|---|---|---|
| **VT323** | Authentic bitmap pixel font | Dot-matrix text simulation |
| **Press Start 2P** | Chunky 8-bit pixel font | Headings, decorative dot pattern |
| **DotGothic16** | Japanese dot matrix pixel font | Multilingual dot matrix display |
| **Silkscreen** | Clean pixel font at small sizes | Body text, data display |
| **IBM Plex Mono** | Clean monospace, excellent readability | Fallback when pixel fonts unavailable |
| **Courier New** | Universal monospace, classic printer | Maximum compatibility fallback |
| **Share Tech Mono** | Industrial monospace | Mechanical labels, printer UI |
| **Courier Prime** | Improved Courier with better metrics | Print simulation, documents |

## Component Architecture Pattern

1. Paper container: off-white `#f5f0e0` surface with optional green bar pattern and paper texture overlay.
2. Tractor feed strips: vertical strips with evenly spaced punched holes along paper edges.
3. Dot matrix text layer: all text rendered with monospace/pixel fonts and dot-grid visual treatment.
4. Print head animation: horizontal sweep line moving left-to-right during active print states.
5. Ribbon surface: dark fabric texture for ribbon-related UI elements and decorative sections.
6. Paper tear edge: jagged clip-path at paper section boundaries simulating manual tears.
7. Mechanical housing: gray printer body elements for buttons, indicators, and physical UI controls.
8. Vibration animation: subtle shake applied to paper during active printing.
9. Data layout: structured rows aligned to green bar grid for tabular display.
10. Perforation lines: dotted or dashed lines marking fold-and-tear points.

## Interaction Rules

- Default state: printed paper appearance with dot matrix text on cream/green-bar paper.
- Hover on interactive paper sections: `hover:shadow-[3px_3px_12px_rgba(0,0,0,0.2)]` slightly increased paper shadow to suggest lifting.
- Active/pressed buttons: `active:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.4)] active:translate-x-[1px] active:translate-y-[1px]` physical button depression.
- Print action: trigger vibration shake on paper, animate print head sweep, progressively reveal text.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#6a6a6a] focus:ring-offset-2 focus:ring-offset-[#f5f0e0]` mechanical gray ring.
- Disabled: `opacity-50 grayscale cursor-not-allowed` — grayed out like an inactive printer.
- Transitions: `transition-all duration-75` for fast, mechanical response. No spring or bounce.
- Scroll: paper scrolls vertically with paper-like feel — no horizontal scroll, content fits within paper margins.
- Print animation sequence: paper feeds in (translate from bottom), print head sweeps, vibration activates, text appears progressively.

### Print Animation Sequence

When the user triggers a print action, the interface follows a mechanical sequence:

1. Paper feeds in: `transform: translateY(100%)` to `translateY(0)` over 500ms with ease-out.
2. Print head activates: horizontal line sweeps left to right.
3. Text appears progressively: each line fades in from left to right with 50ms delay between lines.
4. Vibration shake activates during text appearance.
5. Print head stops, vibration ceases.
6. Paper settles: brief stillness indicating print complete.
7. Optional: tear edge appears at bottom with a subtle paper-tear animation.

## Reusable Tailwind Tokens

- Paper surface: `bg-[#f5f0e0] font-mono text-[#1a1a1a] shadow-[2px_2px_8px_rgba(0,0,0,0.15)]`
- Green bar paper: `bg-[repeating-linear-gradient(0deg,#f5f0e0_0px,#f5f0e0_24px,#c0d8a0_24px,#c0d8a0_48px)]`
- Tractor feed strip: `w-8 bg-[#d4c8a0] border-r border-[#b8a880] flex flex-col items-center py-2 gap-4`
- Tractor hole: `w-3 h-3 rounded-full bg-[#f5f0e0] border border-[#b8a880] shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]`
- Dot matrix text: `font-mono text-[#1a1a1a] [text-shadow:0.5px_0.5px_0_rgba(26,26,26,0.3)] [image-rendering:pixelated]`
- Dot matrix bold: `font-mono font-bold text-[#1a1a1a] [text-shadow:1px_0.5px_0_rgba(26,26,26,0.4),0.5px_1px_0_rgba(26,26,26,0.2)]`
- Faded dot text: `font-mono text-[#3a3a3a] opacity-80 [text-shadow:0.5px_0.5px_0_rgba(58,58,58,0.2)]`
- Ribbon surface: `bg-[#1a1a1a] rounded-sm border border-[#2a2a2a] bg-[repeating-linear-gradient(0deg,#1a1a1a_0px,#1a1a1a_3px,#222_3px,#222_4px)]`
- Print head line: `h-0.5 bg-[#2a2a2a] absolute left-0 right-0 z-10 animate-[print-head_3s_linear_infinite]`
- Paper tear: `clip-path:polygon(0_0,100%_0,100%_calc(100% - 4px),98%_calc(100% - 2px),95%_calc(100% - 6px),92%_calc(100% - 1px),88%_calc(100% - 5px),85%_calc(100% - 3px),80%_calc(100% - 7px),75%_calc(100% - 2px),70%_calc(100% - 4px),65%_calc(100% - 1px),60%_calc(100% - 6px),55%_calc(100% - 3px),50%_calc(100% - 5px),45%_calc(100% - 2px),40%_calc(100% - 7px),35%_calc(100% - 1px),30%_calc(100% - 4px),25%_calc(100% - 3px),20%_calc(100% - 6px),15%_calc(100% - 2px),10%_calc(100% - 5px),5%_calc(100% - 1px),0_calc(100% - 4px))`
- Perforation line: `border-t border-dashed border-[#1a1a1a]/30`
- Vibration shake: `animate-[dot-shake_0.15s_linear_infinite]`
- Printer button: `bg-[#6a6a6a] hover:bg-[#5a5a5a] active:bg-[#4a4a4a] text-[#f5f0e0] font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-sm border border-[#4a4a4a] shadow-[1px_1px_0_#3a3a3a,2px_2px_0_#2a2a2a]`
- Button pressed: `active:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.4)] active:translate-x-[1px] active:translate-y-[1px]`
- Data row: `px-4 py-1.5 h-6 border-b border-[#1a1a1a]/10 flex justify-between items-center text-sm`
- Receipt container: `bg-[#f5f0e0] w-full max-w-sm mx-auto p-4 font-mono text-[#1a1a1a] shadow-[2px_2px_8px_rgba(0,0,0,0.15)]`
- Separator: `border-t border-dashed border-[#1a1a1a]/30 my-2`
- Total line: `border-t-2 border-double border-[#1a1a1a] mt-2 pt-2 font-bold`
- Status LED green: `w-2 h-2 rounded-full bg-[#33aa33] shadow-[0_0_4px_rgba(51,170,51,0.6)]`
- Status LED red: `w-2 h-2 rounded-full bg-[#cc3333] shadow-[0_0_4px_rgba(204,51,51,0.6)]`
- Printer housing: `bg-[#6a6a6a] rounded border border-[#4a4a4a] p-3`
- Focus ring: `focus:outline-none focus:ring-2 focus:ring-[#6a6a6a] focus:ring-offset-2 focus:ring-offset-[#f5f0e0]`

## Quality Checklist (must pass)

- Paper background is cream/off-white `#f5f0e0` — never pure white `#fff` (real continuous paper is not bleached white).
- Green bars are `#c0d8a0` at correct 24px height, alternating with paper white — bars align perfectly with data rows.
- All text uses monospace or pixel fonts — no sans-serif or serif.
- Tractor feed holes are evenly spaced, consistently sized circles with inner shadow — they look punched through, not printed.
- Dot matrix text has subtle pixel-grid shadow or rendering treatment — characters are not smooth vector shapes.
- Ribbon surfaces use woven fabric texture gradient — dark, slightly textured, not flat black.
- Paper tear edges use irregular clip-path — jagged, not straight, not symmetric.
- Print head line animates left-to-right across the paper during print states.
- Vibration shake is extremely subtle — barely perceptible, more tactile than visual.
- Receipt/invoice layouts have correct line item alignment with dashed/dotted separators.
- Green bar rows have matching height with the bar pattern — no misalignment between content and bars.
- Printer buttons have 3D physical appearance with shadows and active-state depression.
- Status LEDs have glow effect — green for ready, red for error.
- All transitions are fast and mechanical (`duration-75`) — no bouncy or spring animations.
- Focus states are visible and use mechanical gray ring against the paper background.
- Paper shadows suggest physical depth — paper appears to sit on a surface.
- Perforation lines are dashed, not solid — they represent tearable points.
- Text content fits within paper margins — no text bleeds into tractor feed strips.
- Font sizes are readable at minimum 12px (`text-xs`) — dot matrix fonts need slightly larger sizes.

## Anti-Patterns

- Using pure white `#ffffff` for paper background (continuous paper is cream/off-white, not office copy paper).
- Smooth vector typography instead of pixel/dot-matrix rendered text (the entire aesthetic is defined by dot-grid characters).
- Flat black surfaces for ribbon (ribbon is woven fabric texture, not solid `#000`).
- Symmetric or geometric paper tear edges (real tears are irregular and asymmetric).
- Slow or bouncy animations (dot matrix printers are mechanical — motion is fast, linear, and abrupt).
- Green bars that are too wide or too narrow (standard 24px height per bar, not arbitrary).
- Tractor feed holes that are squares or irregular shapes (they are perfectly circular punched holes).
- Print head animation that moves right-to-left (real print heads sweep left to right, then return).
- Overly aggressive vibration shake (subtle is authentic; violent shaking breaks the illusion).
- Using serif fonts for document titles (even headers remain monospace).
- Light or pastel color accents (the palette is strictly paper, ink, and mechanical gray).
- Smooth rounded corners on printer buttons (buttons are sharp-edged, industrial, with beveled shadows).
- Missing paper texture or grain (flat color paper looks digital, not physical).
- Print animation that reveals all text at once (text should appear progressively, line by line).
- Horizontal scrolling within paper containers (paper has fixed width and content flows vertically).
- Purely decorative dot patterns that do not align to a grid (dot matrix characters follow strict row/column grids).
- Mixing receipt format with full-page document format on the same screen (choose one paper format per view).
- Excessive ink-smear effects (ink smudges are subtle imperfections, not obvious stains).
- Paper without any shadow or depth cue (paper must appear to float above a surface).

## Accessibility Considerations

- Paper text `#1a1a1a` on paper background `#f5f0e0` provides contrast ratio of approximately 13.5:1 — well above WCAG AAA.
- Faded text `#3a3a3a` on paper `#f5f0e0` provides approximately 7.2:1 contrast — still WCAG AA compliant but use sparingly.
- Ensure minimum font size of 14px (`text-sm`) for body text — dot matrix pixel fonts need slightly larger sizes for legibility.
- Dot pattern rendering must not cause characters to become illegible at small sizes — test at all intended display sizes.
- Green bar alternating pattern must have sufficient contrast between bar and white sections — the cream `#f5f0e0` and green `#c0d8a0` have approximately 1.4:1 difference, which is decorative only; text contrast is always against `#1a1a1a` ink.
- Tractor feed holes are decorative: `pointer-events-none` and must not confuse screen readers — provide `aria-hidden="true"` on decorative strips.
- Vibration shake animation must respect `prefers-reduced-motion: reduce` — disable shake for users with motion sensitivity.
- Print animation must respect `prefers-reduced-motion: reduce` — show final printed state without progressive reveal.
- Paper tear edges are purely decorative: `aria-hidden="true"` and `pointer-events-none`.
- All interactive elements (buttons, links) must be keyboard navigable with visible focus indicators in mechanical gray.
- Focus ring: `focus:ring-2 focus:ring-[#6a6a6a] focus:ring-offset-2 focus:ring-offset-[#f5f0e0]` — visible against both paper and mechanical backgrounds.
- Print head line animation must respect `prefers-reduced-motion: reduce` — static line instead of sweeping animation.
- Screen readers should access the data content without the decorative paper/tractor feed structure — use semantic HTML (`table`, `article`, `section`) inside the paper container.
- Ensure receipt-style layouts are readable when linearized (single-column) for assistive technology.
- Mechanical buttons must have clear text labels — avoid icon-only buttons without `aria-label`.
- Status LEDs must have text alternatives: visually hidden text like `<span class="sr-only">Ready</span>` next to the green LED.
- Tab order within paper containers follows the natural reading order of the printed document.
- Do not rely on the green bar pattern alone to convey row identity — ensure rows are distinguishable by content or explicit borders.
- Paper shadow and depth effects are decorative and should not affect the reading experience for users with vision impairments.
