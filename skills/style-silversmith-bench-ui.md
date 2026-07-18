---
name: silversmith-bench-ui
description: Build silversmith bench UI components (silver sheet, planishing hammer, chasing tools, soldering block, pickle pot, buffing wheel, bezel setting) with polished metal surfaces, reflective highlights, and the precise metalwork of silver smithing. Trigger this skill when the user asks for silversmith design, silver smithing UI, metalsmith bench, jewelry making, metalwork interface, hammer and anvil, soldering station, bezel setting, chasing tools, planishing, or polished silver aesthetics.
---

# Silversmith Bench UI

Use this skill to design and implement precise, luminous interfaces inspired by silversmithing: bright silver sheet surfaces with mirror reflections, planishing hammer faces with smooth rounded metal, fine chasing tool tips, charcoal soldering blocks, pickle pots with verdigris liquid, spinning buffing wheels, and the disciplined craft of forming silver into finished work.

## Non-Negotiable Foundations

The silversmith bench aesthetic is defined by polished metal surfaces with controlled reflections. Every component must feel like it could be picked up off a real silversmith's bench — cold to the touch, heavy in the hand, catching light across its surfaces. The palette is dominated by silver tones from bright mirror-polish to dark tarnish, grounded by the charcoal blacks of soldering blocks and accented by the warm copper of solder wire and the rich green of pickle solution. Nothing should feel plastic, soft, or digital. The beauty is in the metal.

Core material identity:
- Silver surfaces must carry visible directional highlights or reflections — flat gray is unacceptable.
- Charcoal and ceramic surfaces are matte, dark, and slightly rough-textured.
- Pickle liquid has a translucent green-blue quality, never opaque.
- Buffing wheel motion is conveyed through blur or radial streak effects.
- Bezel settings are thin, precise metal frames — geometric and tight.
- Every surface should suggest weight, temperature, and material reality.

## Core Material Recipes

### 1) Silver Sheet Surface

Bright polished silver with directional reflections and mirror-like sheen.

- `bg-gradient-to-br from-[#e0e4e4] via-[#c0c8c8] to-[#a0a8a8] border border-[#d0d4d4] shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),inset_0_-1px_2px_rgba(0,0,0,0.1),0_2px_8px_rgba(0,0,0,0.15)]` for a standard silver sheet.
- For a high-polish mirror surface: `bg-gradient-to-br from-[#f0f4f4] via-[#e0e4e4] to-[#c0c8c8] shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_4px_12px_rgba(0,0,0,0.2),0_1px_0_rgba(0,0,0,0.05)]`.
- Overlay a subtle diagonal highlight stripe with a pseudo-element: `before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:via-white/10 before:to-transparent before:rotate-12 before:pointer-events-none`.
- For sheet metal edge detail, add a left border: `border-l-2 border-l-[#909898]`.

### 2) Planishing Hammer

Smooth rounded hammer face — the tool that shapes sheet metal into curved forms.

```html
<div class="relative">
  <!-- Hammer head -->
  <div class="w-24 h-14 bg-gradient-to-b from-[#d0d4d4] via-[#c0c8c8] to-[#a0a8a8] rounded-[40%] border border-[#b0b4b4] shadow-[0_4px_8px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.5)]"></div>
  <!-- Hammer face (the polished striking surface) -->
  <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-16 h-4 bg-gradient-to-b from-[#e8ecec] to-[#c0c8c8] rounded-b-full shadow-[0_2px_4px_rgba(0,0,0,0.2)]"></div>
</div>
```

- The hammer face is the most polished surface — use the brightest gradient: `from-[#e8ecec] via-[#d0d8d8] to-[#c0c8c8]`.
- Handle: `bg-gradient-to-b from-[#8a6a1a] to-[#5a4a0a]` with subtle wood grain texture.
- The rounded dome of the hammer face is critical — it must not appear flat.

### 3) Chasing Tool Tips

Fine pointed tools for engraving detail work into silver surfaces.

```html
<div class="flex items-end gap-1">
  <div class="w-2 h-16 bg-gradient-to-b from-[#a0a8a8] to-[#707878] rounded-t-sm shadow-[0_2px_4px_rgba(0,0,0,0.2)]"></div>
  <div class="w-1.5 h-20 bg-gradient-to-b from-[#a0a8a8] to-[#707878] rounded-t-full shadow-[0_2px_4px_rgba(0,0,0,0.2)]"></div>
  <div class="w-2 h-12 bg-gradient-to-b from-[#a0a8a8] to-[#707878] rounded-t-[2px] shadow-[0_2px_4px_rgba(0,0,0,0.2)]"></div>
</div>
```

- Each tip has a unique profile: rounded, pointed, flat, or cross-peen.
- Tool shafts: `bg-gradient-to-b from-[#a0a8a8] to-[#707878]` with a slight taper.
- Tips catch light: add a `bg-white/30` highlight dot at the very top of pointed tips.
- Group chasing tools as a set of 3-5 with varying heights and tip shapes.

### 4) Soldering Block

Charcoal or ceramic fireproof surface where soldering operations happen.

- `bg-[#2a2a2a] border-2 border-[#1a1a1a] shadow-[inset_0_2px_8px_rgba(0,0,0,0.5),0_4px_12px_rgba(0,0,0,0.3)]` for the base block.
- Add surface texture with a subtle noise overlay: `bg-[url('data:image/svg+xml,...')]` or CSS pattern for the porous charcoal grain.
- Charcoal block variant: `bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a]` with a `border-[#3a3a3a]` edge highlight.
- Ceramic block variant: `bg-gradient-to-br from-[#d4c8a0] to-[#b4a880] border border-[#c4b890]` with a lighter, more uniform surface.
- Heat discoloration: subtle `bg-[#4a3a2a]/30` radial gradient centered where a torch would be focused.

### 5) Pickle Pot

Ceramic pot containing warm sodium bisulfate pickle solution for cleaning flux and oxidation.

```html
<div class="relative w-32 h-20">
  <!-- Ceramic pot body -->
  <div class="absolute inset-0 bg-gradient-to-b from-[#d4c8a0] to-[#b4a880] rounded-b-3xl border-2 border-[#a49870] shadow-[inset_0_-4px_8px_rgba(0,0,0,0.15),0_4px_12px_rgba(0,0,0,0.2)]"></div>
  <!-- Pickle liquid surface -->
  <div class="absolute top-2 left-2 right-2 h-10 bg-gradient-to-b from-[#4a8a4a]/70 to-[#3a7a3a]/90 rounded-2xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.15)]"></div>
  <!-- Liquid surface highlight -->
  <div class="absolute top-2 left-4 right-4 h-2 bg-white/20 rounded-full blur-sm"></div>
</div>
```

- The pickle liquid is translucent green: `from-[#4a8a4a]/60 to-[#3a6a3a]/80`.
- Ceramic pot has a warm off-white to beige gradient.
- A subtle steam wisp can be added with `animate-[steam_3s_ease-in-out_infinite]` on a thin `bg-white/10` element.
- The liquid surface must show a highlight line where it meets the pot rim.

### 6) Buffing Wheel

Spinning cotton or felt polishing wheel — conveys the final polish stage.

```css
@keyframes buffspin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.buff-wheel {
  animation: buffspin 0.8s linear infinite;
}
```

- Wheel body: `w-24 h-24 rounded-full bg-gradient-to-br from-[#e8e8e8] to-[#c0c0c0] border-2 border-[#a0a0a0] shadow-[0_2px_8px_rgba(0,0,0,0.2)]`.
- Add radial motion blur streaks with SVG: `<filter><feGaussianBlur stdDeviation="1.5" /></filter>` applied to radial lines.
- Center spindle: `w-6 h-6 rounded-full bg-gradient-to-br from-[#a0a8a8] to-[#707878] border border-[#606868]` at the wheel center.
- Motion blur streaks: `absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.08)_30deg,transparent_60deg)]` rotating.
- Polish compound residue: `bg-[#3a2a1a]/20` smudge marks on the wheel edge.

### 7) Bezel Setting

Thin metal frame designed to hold a stone — the most precise element in silversmithing.

```html
<div class="relative">
  <!-- Bezel frame (the thin metal wall) -->
  <div class="w-16 h-16 rounded-full border-4 border-[#c0c8c8] shadow-[0_2px_4px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(255,255,255,0.4)]"></div>
  <!-- Stone -->
  <div class="absolute inset-1.5 rounded-full bg-gradient-to-br from-[#6a2a8a] to-[#3a1a5a] shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),0_1px_2px_rgba(0,0,0,0.3)]"></div>
  <!-- Bezel highlight (top light catch) -->
  <div class="absolute -top-px left-3 right-3 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"></div>
</div>
```

- The bezel frame is thin — `border-2` or `border-3`, never thick.
- Use square bezels too: `rounded-sm` with `border-3 border-[#c0c8c8]`.
- The stone inside is any gemstone color — amethyst `#6a2a8a`, turquoise `#3a8a8a`, garnet `#8a2a2a`, or onyx `#1a1a1a`.
- The bezel must have a light-catch highlight along its top edge — this sells the polished metal ring.
- Burnished bezel (pressed against stone): `border-[#b0b8b8]` with a slightly thicker border.

### 8) Copper Solder Wire

Thin copper solder wire used to join silver pieces.

- `h-1 bg-gradient-to-r from-[#b87333] to-[#d4944a] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.2)]` for a straight wire.
- Curved wire: apply `rounded-full` with rotation or use an SVG arc path.
- Solder melts: show a `w-3 h-1 bg-[#d4944a] rounded-full shadow-[0_0_4px_rgba(184,115,51,0.4)]` droplet at the joint point.
- Flux coating: `bg-[#c4b890]/40` overlay on the solder where flux is applied.

### 9) Torch Flame

Precision butane or acetylene torch tip for focused heating.

```html
<div class="relative">
  <!-- Torch tip -->
  <div class="w-4 h-12 bg-gradient-to-b from-[#a0a8a8] to-[#707878] rounded-b-sm shadow-[0_2px_4px_rgba(0,0,0,0.3)]"></div>
  <!-- Inner blue cone -->
  <div class="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2 h-6 bg-gradient-to-b from-[#4a6aff] to-[#2a4adf] rounded-b-full opacity-80"></div>
  <!-- Outer flame -->
  <div class="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3 h-10 bg-gradient-to-b from-[#ffcc44] via-[#ff8844] to-[#ff4422] rounded-b-full opacity-60 blur-[1px]"></div>
  <!-- Flame glow -->
  <div class="absolute -bottom-8 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#ffaa22]/20 rounded-full blur-md"></div>
</div>
```

- The flame cone has two zones: blue inner cone and orange-yellow outer cone.
- Flame glow is a soft radial blur around the flame tip.
- Apply subtle `animate-[flicker_0.1s_ease-in-out_infinite_alternate]` on the flame opacity.

### 10) Silver Bench Pin

The wooden clamping fixture bolted to the bench edge for holding work.

- Wooden surface: `bg-gradient-to-b from-[#b49860] to-[#8a7040] border border-[#6a5030] shadow-[0_2px_4px_rgba(0,0,0,0.2)]`.
- V-notch cutout: use `clip-path: polygon(0 0, 45% 0, 50% 40%, 55% 0, 100% 0, 100% 100%, 0 100%)` on the wood surface.
- Silver metal clamp: `bg-gradient-to-b from-[#c0c8c8] to-[#a0a8a8] border border-[#909898]` small rectangle over the wood.
- Drill holes: `bg-[#5a4020]` circles in the wood surface.

## Color Palette System

| Color | Hex | Material |
|---|---|---|
| Silver Bright | `#c0c8c8` | Primary silver surfaces, frames, tool shafts |
| Silver Polished | `#e0e4e4` | High-polish mirror surfaces, highlights |
| Silver Tarnish | `#8a8a8a` | Worn, aged, or unpolished silver |
| Silver Dark | `#707878` | Deep metal shadows, tool undersides |
| Charcoal Block | `#2a2a2a` | Soldering block surface, heat-resistant pads |
| Charcoal Dark | `#1a1a1a` | Deep charcoal, soldering block edges |
| Pickle Green | `#4a8a4a` | Pickle pot solution, cleaning liquid |
| Pickle Dark | `#3a6a3a` | Deep pickle solution, submerged shadows |
| Bezel Gold | `#c4a043` | Bezel frames (gold variant), decorative metal |
| Copper Solder | `#b87333` | Solder wire, copper accents, heat marks |
| Copper Light | `#d4944a` | Bright copper, solder highlights |
| Stone Amethyst | `#6a2a8a` | Gemstone accent in bezel settings |
| Stone Turquoise | `#3a8a8a` | Alternative gemstone accent |
| Stone Onyx | `#1a1a1a` | Black gemstone accent |
| Flame Blue | `#4a6aff` | Torch inner cone |
| Flame Orange | `#ff8844` | Torch outer cone |
| Bench Wood | `#b49860` | Bench pin, wooden fixtures |
| Bench Wood Dark | `#8a7040` | Wood shadows, grain depth |

Rules: Silver dominates at 60-70% of the palette. Charcoal blacks ground the composition. Copper and gold are accent metals used sparingly. Green appears only in pickle solution. The overall impression is a cool-toned metalworker's environment — think polished steel and charcoal, not warm brass like clockwork.

## Typography Recommendations

- **Display:** Montserrat, Inter (clean industrial sans-serif — like engraved tool marks).
- **Body:** Source Serif Pro, IBM Plex Serif (readable, structured, workshop-grade).
- **Monospace:** JetBrains Mono, Fira Code (for measurements, specifications, tool sizes).
- **Labels:** `font-sans font-medium text-xs tracking-wider uppercase` — like stamped tool markings.
- **Measurement text:** `font-mono text-sm text-[#8a8a8a]` — precise, technical, workmanlike.
- Numbers and measurements should feel industrial — think calipers and micrometers, not calligraphy.

## Component Architecture Pattern

Silversmith bench UI follows a **Workstation Layout** pattern:

```
┌─────────────────────────────────────┐
│  Bench Header (tool name + status)  │
├──────────┬──────────────────────────┤
│ Tool     │  Work Surface            │
│ Sidebar  │  (silver sheet / active  │
│ (tools,  │   workpiece area)        │
│  blocks, │                          │
│  pots)   │                          │
├──────────┴──────────────────────────┤
│  Detail Panel (bezel, measurements) │
└─────────────────────────────────────┘
```

Key principles:
- The work surface is the visual center — bright, luminous silver.
- Tool panels use darker charcoal tones to frame the bright work area.
- Status indicators use copper/warm tones against the cool silver backdrop.
- Measurements and specs use monospace typography.
- Borders between panels use `border-[#a0a8a8]/30` — thin, subtle, metal-colored.

## Interaction Rules

- **Hover on silver surfaces:** brightness increases — `hover:brightness-110` or `hover:shadow-[inset_0_2px_8px_rgba(255,255,255,0.3)]`.
- **Hover on tools:** subtle lift — `hover:-translate-y-0.5 hover:shadow-lg`.
- **Active/pressed on buttons:** slight depression — `active:translate-y-0.5 active:shadow-inner`.
- **Buffing wheel:** continuous rotation animation that stops on hover (inspect, don't buff).
- **Flame toggle:** fade the flame in/out — `transition-opacity duration-300`.
- **Drag on work surface:** cursor changes to crosshair for precision placement.
- **Selection of bezel settings:** highlight border pulses — `animate-[pulse_2s_ease-in-out_infinite]`.
- **Transitions:** all metallic surfaces transition `duration-200` — metal responds quickly.
- **Scroll on tool list:** smooth scroll with silver scrollbar (`scrollbar-thumb-[#c0c8c8]`).

## Reusable Tailwind Tokens

- Silver sheet: `bg-gradient-to-br from-[#e0e4e4] via-[#c0c8c8] to-[#a0a8a8] border border-[#d0d4d4]`.
- Silver mirror: `bg-gradient-to-br from-[#f0f4f4] via-[#e0e4e4] to-[#c0c8c8] shadow-[inset_0_2px_4px_rgba(255,255,255,0.8)]`.
- Silver tool shaft: `bg-gradient-to-b from-[#a0a8a8] to-[#707878]`.
- Charcoal panel: `bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] border-2 border-[#1a1a1a]`.
- Charcoal surface: `bg-[#2a2a2a] shadow-[inset_0_2px_8px_rgba(0,0,0,0.5)]`.
- Ceramic pot: `bg-gradient-to-b from-[#d4c8a0] to-[#b4a880] rounded-b-3xl border-2 border-[#a49870]`.
- Pickle liquid: `bg-gradient-to-b from-[#4a8a4a]/60 to-[#3a6a3a]/80 rounded-2xl`.
- Bezel frame: `rounded-full border-4 border-[#c0c8c8] shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)]`.
- Copper wire: `h-1 bg-gradient-to-r from-[#b87333] to-[#d4944a] rounded-full`.
- Bench wood: `bg-gradient-to-b from-[#b49860] to-[#8a7040] border border-[#6a5030]`.
- Flame glow: `bg-[#ffaa22]/20 rounded-full blur-md`.
- Tool label: `font-sans font-medium text-xs tracking-wider uppercase text-[#8a8a8a]`.

## Quality Checklist

- At least one polished silver surface with visible gradient reflections.
- Charcoal or ceramic soldering block present and identifiable.
- Pickle pot with translucent green liquid visible.
- Bezel setting with stone or empty frame shown.
- Buffing wheel with rotation animation or motion blur effect.
- Torch flame with blue-orange gradient if soldering workflow is shown.
- Chasing tool set with varied tip shapes.
- Planishing hammer with rounded polished face.
- Overall palette reads as cool silver + charcoal (not warm brass/gold).
- Metal surfaces have gradient depth — no flat gray panels.
- Typography is industrial sans-serif or structured serif (not decorative script).
- Measurement or specification text uses monospace font.
- Silver surfaces show highlight stripes or directional light reflections.
- The aesthetic reads as a real silversmith's workbench — tools, materials, and work in progress.

## Anti-Patterns

- Missing reflective highlights on silver surfaces (flat gray is not silver — it's just gray).
- Warm gold dominating the palette (this is SILVER, not brass — gold is an accent only).
- Plastic or digital-looking surfaces (everything must feel like real metal or real material).
- Missing soldering block or charcoal element (these ground the workbench identity).
- Flat pickle pot without translucent liquid effect (opaque green is paint, not liquid).
- Bezel settings too thick or bulky (bezels are thin, precise metal frames).
- Buffing wheel without motion indication (a static circle is just a disc).
- Rounded, soft, or organic shapes where metalwork demands geometric precision.
- Missing tool elements (tools are the vocabulary of this visual language).
- Warm color temperature throughout (silversmith palette is fundamentally cool-toned).
- Missing copper solder accent (copper is the warm accent that breaks the cool palette).
- Decorative or ornamental typography (this is a workshop, not a gallery).
- Missing bench surface or work area (the bench is the stage for all work).

## Accessibility Considerations

- Silver surfaces with dark charcoal text provide strong contrast (WCAG AA minimum).
- Focus states: `focus:ring-2 focus:ring-[#c0c8c8]/60` (silver ring) — high visibility against dark backgrounds.
- Metal gradient highlights must not obscure text — ensure text sits on the darker side of gradients.
- Buffing wheel and flame animations must respect `prefers-reduced-motion: reduce`.
- Tool icons need `aria-label` attributes describing function (e.g., "Planishing hammer", "Chasing tool").
- Color-only status indicators (green pickle = active, red = cold) must have text alternatives.
- Bezel settings with stones need screen-reader descriptions of stone type/color.
- Touch targets on tool selection must be at least 44x44px despite the small-tool aesthetic.
- The reflective highlight overlays are decorative — `aria-hidden="true"` on highlight pseudo-elements.
- Measurement values must be programmatically associated with their labels, not conveyed by position alone.
