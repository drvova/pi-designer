---
name: pharmacy-apothecary-ui
description: Build pharmacy apothecary UI components (mortar and pestle, medicine bottles, prescription label, pill counter, tincture dropper, scale balance, herb drawer) with pharmaceutical precision, glass bottle displays, and the healing tradition of the apothecary. Trigger this skill when the user asks for pharmacy apothecary design, medicine bottle UI, prescription label aesthetic, pill counter interface, tincture dropper component, pharmaceutical dispensary, apothecary scale balance, herb drawer cabinet, or compounding pharmacy interfaces.
---

# Pharmacy Apothecary UI

Use this skill to design and implement precise, pharmaceutical interfaces inspired by the compounding apothecary: mortar and pestle for grinding remedies, labeled glass medicine bottles, formal prescription labels, pill counter trays, tincture droppers, balance scales for measuring, and herb drawers with handwritten labels. The aesthetic is clean but aged — pharmacy precision meets old-world craft.

## Non-Negotiable Foundations

- Pharmacy Apothecary UI evokes the working apothecary counter: ceramic mortar, stone pestle, rows of labeled amber and clear glass bottles, prescription labels, pill counting trays, tincture droppers, balance scales, and wooden herb drawers.
- Colors are pharmaceutical and botanical: bottle amber, label white, ceramic cream, herb green, tincture red-brown, and drawer wood.
- Typography mimics formal prescription documents: structured serif for headings, clean body text for dosage instructions, and script accents for remedy names.
- Glass bottle renders with translucent amber fill and labeled tags are essential decorative elements.
- Textures blend ceramic smoothness, stone grit, aged paper, and varnished wood grain.
- The mood is precise, trustworthy, and warmly clinical — like a working 19th-century dispensary where every remedy is measured by hand.

## Core Material Recipes

### 1) Medicine Bottle Row

A row of labeled glass bottles — the signature apothecary shelf display.

```html
<div class="flex items-end gap-3 p-4 bg-[#f5f0e8]">
  <!-- Bottle 1: Amber, tall -->
  <svg viewBox="0 0 32 64" class="w-8 h-16">
    <rect x="8" y="24" width="16" height="32" rx="3" fill="#c48020" opacity="0.7"/>
    <rect x="11" y="10" width="10" height="16" fill="#c48020" opacity="0.55"/>
    <rect x="10" y="6" width="12" height="6" rx="1.5" fill="#5a3a1a"/>
    <rect x="9" y="38" width="14" height="12" fill="#f5f0e8" stroke="#5a3a1a" stroke-width="0.5"/>
    <text x="16" y="46" font-size="3.5" fill="#3a2a1a" text-anchor="middle" font-family="serif">Tinct.</text>
  </svg>
  <!-- Bottle 2: Clear, short -->
  <svg viewBox="0 0 32 52" class="w-8 h-13">
    <rect x="8" y="20" width="16" height="26" rx="3" fill="#d4c8b0" opacity="0.4" stroke="#a0907a" stroke-width="0.5"/>
    <rect x="11" y="10" width="10" height="12" fill="#d4c8b0" opacity="0.3" stroke="#a0907a" stroke-width="0.5"/>
    <rect x="10" y="6" width="12" height="6" rx="1.5" fill="#5a3a1a"/>
    <rect x="9" y="30" width="14" height="10" fill="#f5f0e8" stroke="#5a3a1a" stroke-width="0.5"/>
    <text x="16" y="37" font-size="3.5" fill="#3a2a1a" text-anchor="middle" font-family="serif">N°.2</text>
  </svg>
  <!-- Bottle 3: Amber, wide -->
  <svg viewBox="0 0 36 56" class="w-9 h-14">
    <rect x="6" y="22" width="24" height="28" rx="4" fill="#c48020" opacity="0.65"/>
    <rect x="11" y="10" width="14" height="14" fill="#c48020" opacity="0.5"/>
    <rect x="10" y="5" width="16" height="7" rx="2" fill="#5a3a1a"/>
    <rect x="8" y="34" width="20" height="12" fill="#f5f0e8" stroke="#5a3a1a" stroke-width="0.5"/>
    <text x="18" y="42" font-size="3.5" fill="#3a2a1a" text-anchor="middle" font-family="serif">Laudanum</text>
  </svg>
</div>
```

### 2) Mortar and Pestle

Ceramic mortar with stone pestle — the apothecary's primary tool.

```html
<svg viewBox="0 0 100 80" class="w-24 h-20">
  <!-- Mortar bowl -->
  <ellipse cx="45" cy="55" rx="30" ry="10" fill="#e8e0d0" stroke="#b0a898" stroke-width="1"/>
  <path d="M15,45 Q15,65 45,65 Q75,65 75,45" fill="#e8e0d0" stroke="#b0a898" stroke-width="1"/>
  <path d="M15,45 Q15,40 20,38 L70,38 Q75,40 75,45" fill="#f0e8d8" stroke="#b0a898" stroke-width="1"/>
  <!-- Bowl rim -->
  <ellipse cx="45" cy="45" rx="30" ry="8" fill="#f0e8d8" stroke="#b0a898" stroke-width="1"/>
  <!-- Interior shadow -->
  <ellipse cx="45" cy="48" rx="22" ry="5" fill="#d4c8b0" opacity="0.4"/>
  <!-- Pestle -->
  <line x1="68" y1="15" x2="52" y2="42" stroke="#8a8a7a" stroke-width="6" stroke-linecap="round"/>
  <ellipse cx="68" cy="14" rx="4" ry="3" fill="#9a9a8a" stroke="#7a7a6a" stroke-width="0.5"/>
  <ellipse cx="52" cy="43" rx="3" ry="2" fill="#8a8a7a"/>
</svg>
```

### 3) Prescription Label Card

Formal prescription label on aged paper — structured and authoritative.

- `bg-[#f5f0e8] border border-[#8a6a3a] p-5` (cream paper with wood-brown border).
- Header rule: `border-b-2 border-double border-[#3a2a1a] pb-2 mb-3` (double-rule prescription header).
- Rx symbol: `text-2xl font-serif text-[#3a2a1a] font-bold` (prominent prescription mark).
- Patient line: `border-b border-[#8a6a3a] pb-1 mb-2 font-serif text-sm text-[#3a2a1a]` (underlined name field).
- Dosage text: `font-serif text-xs text-[#5a4a2a] leading-relaxed` (formal instruction text).
- Label corners: `rounded-none` (labels are cut, not rounded).
- Decorative border: `border-2 border-[#3a2a1a]` with inner `border border-[#8a6a3a] p-1` (double-border prescription frame).

### 4) Pill Counter Tray

Counting surface for dispensing — flat tray with pill slots.

- `bg-[#e8e0d0] border-2 border-[#8a6a3a] p-4 rounded-sm` (ceramic tray).
- Counting grid: `grid grid-cols-10 gap-1` with pill slots as `w-3 h-3 rounded-full bg-[#d4c8b0] border border-[#b0a898]`.
- Filled slot: `bg-[#c48020] border-[#a06818]` (amber pill in slot).
- Tray label: `text-[10px] font-serif text-[#5a4a2a] uppercase tracking-widest mt-3 text-center`.
- Tally counter: `font-mono text-lg text-[#3a2a1a] font-bold` (running count display).

### 5) Tincture Dropper

Glass pipette with rubber bulb — for precise liquid dosing.

```html
<svg viewBox="0 0 24 100" class="w-6 h-24">
  <!-- Rubber bulb -->
  <ellipse cx="12" cy="12" rx="8" ry="10" fill="#5a3a1a" opacity="0.8"/>
  <ellipse cx="12" cy="12" rx="6" ry="7" fill="#6a4a2a" opacity="0.6"/>
  <!-- Glass barrel -->
  <rect x="9" y="22" width="6" height="50" rx="1" fill="#d4c8b0" opacity="0.3" stroke="#a0907a" stroke-width="0.5"/>
  <!-- Liquid inside -->
  <rect x="9.5" y="50" width="5" height="20" rx="0.5" fill="#8a2a1a" opacity="0.5"/>
  <!-- Tip -->
  <path d="M9,72 L12,82 L15,72" fill="#d4c8b0" opacity="0.3" stroke="#a0907a" stroke-width="0.5"/>
  <!-- Drop -->
  <ellipse cx="12" cy="88" rx="2" ry="2.5" fill="#8a2a1a" opacity="0.6"/>
</svg>
```

### 6) Scale Balance

Measuring device with two pans — precision and equilibrium.

```html
<svg viewBox="0 0 120 90" class="w-28 h-20">
  <!-- Center pillar -->
  <rect x="57" y="20" width="6" height="60" fill="#b87333" rx="1"/>
  <!-- Crossbar -->
  <line x1="15" y1="25" x2="105" y2="25" stroke="#b87333" stroke-width="3" stroke-linecap="round"/>
  <!-- Fulcrum triangle -->
  <polygon points="54,20 66,20 60,12" fill="#b87333"/>
  <!-- Left chain -->
  <line x1="20" y1="25" x2="20" y2="45" stroke="#8a6a3a" stroke-width="1"/>
  <line x1="20" y1="25" x2="15" y2="45" stroke="#8a6a3a" stroke-width="1"/>
  <line x1="20" y1="25" x2="25" y2="45" stroke="#8a6a3a" stroke-width="1"/>
  <!-- Left pan -->
  <ellipse cx="20" cy="48" rx="15" ry="4" fill="#b87333" opacity="0.7" stroke="#8a6a3a" stroke-width="0.5"/>
  <!-- Right chain -->
  <line x1="100" y1="25" x2="100" y2="45" stroke="#8a6a3a" stroke-width="1"/>
  <line x1="100" y1="25" x2="95" y2="45" stroke="#8a6a3a" stroke-width="1"/>
  <line x1="100" y1="25" x2="105" y2="45" stroke="#8a6a3a" stroke-width="1"/>
  <!-- Right pan -->
  <ellipse cx="100" cy="48" rx="15" ry="4" fill="#b87333" opacity="0.7" stroke="#8a6a3a" stroke-width="0.5"/>
  <!-- Base -->
  <rect x="48" y="78" width="24" height="6" rx="2" fill="#5a3a1a"/>
  <rect x="42" y="82" width="36" height="4" rx="1" fill="#3a2a1a"/>
</svg>
```

### 7) Herb Drawer

Wooden drawer with handwritten label — organized botanical storage.

- `bg-[#8a6a3a] p-3 border border-[#6a4a2a] rounded-sm` (wood drawer face).
- Wood grain: SVG `feTurbulence` with `baseFrequency="0.02 0.15"` for horizontal grain lines.
- Drawer pull: `w-8 h-2 bg-[#b87333] rounded-full border border-[#8a5a2a] mx-auto mb-2` (brass handle).
- Label slot: `bg-[#f5f0e8] border border-[#8a6a3a] px-3 py-1 text-center` (paper label inset).
- Label text: `font-serif text-xs text-[#3a2a1a] tracking-wide` (handwritten herb name).
- Drawer state: closed shows only face and label; open reveals herb contents sliding out with `transition-transform duration-500`.

### 8) Apothecary Button

Pharmaceutical-grade action button.

- `bg-gradient-to-b from-[#5a3a1a] to-[#3a2a0a] text-[#f5f0e8] font-serif font-medium px-8 py-3 border border-[#8a6a3a] shadow-[0_3px_6px_rgba(0,0,0,0.25)] hover:from-[#6a4a2a] hover:to-[#4a3a1a] transition-all duration-300`.

### 9) Wax Seal Accent

Authentication seal for prescriptions and verified remedies.

- `w-14 h-14 rounded-full bg-[#8a2a1a] border-2 border-[#5a1a0a] flex items-center justify-center rotate-[-3deg] shadow-[0_2px_6px_rgba(0,0,0,0.3),inset_0_1px_3px_rgba(255,255,255,0.15)]`.
- Text: `text-[#f5f0e8] font-serif font-bold text-xs uppercase text-center`.

### 10) Mortar and Pestle Divider

Horizontal rule with mortar-and-pestle motif for section breaks.

- `flex items-center justify-center gap-3` container.
- `h-px bg-[#8a6a3a] flex-1` on each side.
- Center: miniature mortar SVG or mortar-emoji span `text-[#5a3a1a] text-lg`.

## Component Architecture Pattern

Pharmacy Apothecary components follow a cabinet-of-curiosities architecture — each element is a discrete specimen displayed on the counter:

- **Layout:** Components sit on a shared shelf surface (`bg-[#e8e0d0]` or `bg-[#f0e8d8]`). Items are spaced like objects on a counter: `flex items-end gap-4` for bottle rows, `grid grid-cols-2 gap-6` for paired displays (mortar + label, scale + tray).
- **Composing a dispensing station:** Stack vertically — bottle row on top, mortar and scale in the middle, prescription label and pill tray at the bottom. Each section separated by the mortar-and-pestle divider.
- **Card boundaries:** Use sharp corners (`rounded-none`) with double-border prescription frames, not modern rounded cards.
- **State:** Drawer open/closed uses `translate-y` transitions. Bottle highlights use `ring-2 ring-[#c48020]`. Scale balance tips with `rotate` on the crossbar.
- **Nesting:** Prescription labels contain dosage text; herb drawers contain bottle sub-rows; pill trays contain counting grids. Each container is its own aged surface.

## Interaction Rules

- Default: precise, warm, trustworthy — the confidence of a working apothecary.
- Hover: elements warm slightly, shadows deepen.
  - `hover:shadow-[0_4px_12px_rgba(90,60,30,0.18)] hover:-translate-y-0.5 transition-all duration-300`.
- Active: `active:translate-y-0.5 active:shadow-none` (pressed into the counter).
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#5a3a1a]/30 focus:ring-offset-2 focus:ring-offset-[#f5f0e8]`.
- Drawer toggle: `transition-transform duration-500 ease-in-out` (smooth wooden slide).
- Dropper dispense: `animate-[drip_1.5s_ease-in-out]` — droplet falls, pauses, merges.
- Scale balance: `transition-transform duration-700 ease-in-out` — slow, deliberate tipping.
- Transitions: `transition-all duration-300 ease-in-out` for most elements (slow, measured — like compounding a remedy).

## Color Palette System

### Core Pharmacy Apothecary Palette

| Color | Hex | Role |
|---|---|---|
| Bottle Amber | `#c48020` | Amber glass bottles, warm pharmaceutical accent |
| Bottle Clear | `#d4c8b0` | Clear glass, translucent fills |
| Label White | `#f5f0e8` | Prescription labels, paper surfaces |
| Mortar Ceramic | `#e8e0d0` | Mortar bowls, ceramic surfaces, tray backgrounds |
| Pestle Stone | `#8a8a7a` | Stone pestle, grinding tools |
| Herb Green | `#4a7a3a` | Herb drawer contents, botanical accents |
| Tincture Red | `#8a2a1a` | Tincture liquid, wax seals, emphasis |
| Drawer Wood | `#8a6a3a` | Herb drawers, wooden cabinet faces |
| Deep Brown | `#3a2a1a` | Dark text, deep shadows, drawer bases |
| Warm Brown | `#5a3a1a` | Buttons, borders, secondary text |
| Brass | `#b87333` | Scale hardware, drawer pulls, metal accents |
| Aged Cream | `#f0e8d8` | Light surfaces, counter tops |

Rules: Pharmaceutical amber and ceramic cream dominate. The palette should feel like a working apothecary counter — amber bottles catching light, ceramic bowls, wooden drawers, brass hardware. No bright primaries, no cool blues, no modern grays. Tincture red-brown is used sparingly for emphasis and liquid fills.

## Typography Recommendations

- **Display:** Playfair Display or Cormorant (elegant Victorian pharmaceutical headings).
- **Prescription Labels:** `font-serif text-sm` for formal dosage text; `font-serif text-xs uppercase tracking-wider` for label categories.
- **Body:** EB Garamond or Lora (warm, readable serif for instruction text).
- **Accents:** Allura or Copperplate for remedy names and botanical accents.
- **Numbers:** Monospace for pill counts and dosage measurements: `font-mono text-sm`.
- Prescription labels benefit from structured hierarchy: remedy name (bold serif), dosage (regular serif), instructions (italic serif).

## Reusable Tailwind Tokens

- Medicine bottle amber: `bg-[#c48020]/70` or `text-[#c48020]`.
- Clear glass: `bg-[#d4c8b0]/40 border border-[#a0907a]`.
- Prescription label: `bg-[#f5f0e8] border-2 border-[#3a2a1a] rounded-none`.
- Ceramic surface: `bg-[#e8e0d0]` or `bg-[#f0e8d8]`.
- Herb green accent: `text-[#4a7a3a]` or `bg-[#4a7a3a]/20`.
- Tincture red: `text-[#8a2a1a]` or `bg-[#8a2a1a]/40`.
- Wood drawer face: `bg-[#8a6a3a] border border-[#6a4a2a]`.
- Brass hardware: `bg-[#b87333] border-[#8a5a2a]`.
- Apothecary button: `bg-gradient-to-b from-[#5a3a1a] to-[#3a2a0a] text-[#f5f0e8] font-serif border border-[#8a6a3a]`.
- Wax seal: `rounded-full bg-[#8a2a1a] border-2 border-[#5a1a0a] rotate-[-3deg] shadow-[inset_0_1px_3px_rgba(255,255,255,0.15)]`.
- Pill slot empty: `w-3 h-3 rounded-full bg-[#d4c8b0] border border-[#b0a898]`.
- Pill slot filled: `w-3 h-3 rounded-full bg-[#c48020] border border-[#a06818]`.

## Quality Checklist

- Background is aged cream or ceramic (warm, never pure white).
- At least one medicine bottle row or individual bottle SVG.
- At least one mortar and pestle element (SVG or decorative).
- Color palette is pharmaceutical amber, ceramic, and wood (no bright primaries).
- Prescription labels use sharp corners, double borders, and formal serif text.
- Herb drawers have wood grain texture, brass pulls, and paper labels.
- Pill counter tray shows a counting grid with filled/empty slots.
- Scale balance element is present for measuring themes.
- Tincture dropper SVG or accent appears in liquid-dosing contexts.
- Wax seals authenticate verified remedies and prescriptions.
- Typography uses Victorian serif with structured prescription hierarchy.
- The aesthetic reads as a working 19th-century dispensary counter.
- Motion is slow and deliberate (like measuring and compounding).
- All glass bottles show translucent fills with labels.

## Anti-Patterns

- Bright modern colors (pharmacy apothecary is amber, ceramic, wood — earthy and warm).
- Pure white backgrounds (use aged cream `#f5f0e8` or ceramic `#e8e0d0`).
- Sans-serif typography alone (apothecary needs Victorian serif and prescription formality).
- Missing glass bottles (these are the signature pharmacy display element).
- Rounded modern cards (use sharp-cornered prescription label styling).
- Missing mortar and pestle (the primary tool of the apothecary trade).
- Cold or clinical aesthetic (apothecary is warm, handcrafted, and personal).
- Missing herb drawers (these represent the organized botanical cabinet).
- Missing brass hardware on scales and drawers (metal accents add precision).
- Fast aggressive animations (motion should be slow and measured).
- Missing the double-border prescription frame (this is the signature label treatment).
- Missing pill counting tray (essential dispensing tool for pharmacy precision).
- Using only amber for all bottles (clear glass bottles add variety and realism).

## Accessibility Considerations

- Ceramic backgrounds with dark brown text provide good contrast (verify WCAG AA — `#3a2a1a` on `#f5f0e8` passes).
- Focus states: `focus:ring-2 focus:ring-[#5a3a1a]/30` (brown ring on cream surface).
- Bottle SVGs and decorative elements must be `aria-hidden="true"`.
- Prescription label text must maintain readability at 14px+ for dosage instructions.
- Pill counter grids must have `aria-label` describing count and capacity.
- Wax seals must not be the sole indicator of prescription status (include text labels).
- Scale balance imagery must have descriptive `aria-label` or be purely decorative.
- Herb drawer labels must be readable — avoid overly decorative script at small sizes.
- Touch targets on pill counter slots must be adequate despite small visual size.
- Paper and ceramic textures must not reduce text contrast below WCAG AA.
- Color is never the sole carrier of meaning — pill states use shape or icon in addition to color.
