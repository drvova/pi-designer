---
name: puppet-theater-ui
description: Build puppet theater UI components (marionette stage, red velvet stage curtains, wooden proscenium arch, string puppet silhouettes, gold tasseled valance, footlight glow, hand-painted backdrops) with proscenium-framed content areas, curtain reveal animations, and the theatrical magic of miniature stage performance. Trigger this skill when the user asks for puppet theater design, marionette UI, proscenium stage interface, theatrical curtain reveal, wooden stage frame, or mini-theater aesthetic.
---

# Puppet Theater UI

Use this skill to design and implement interfaces inspired by miniature puppet theaters and marionette stages: red velvet curtains that part to reveal content, ornate wooden proscenium arches framing the viewport, gold-tasseled valances, warm footlight glow rising from below, hand-painted backdrop scenery, and the intimate theatrical magic of a wooden stage where strings bring characters to life.

## Core Material Recipes

### 1) Proscenium Arch Frame

Ornate wooden border with gold accents that frames the entire content area like a theater stage.

- `relative border-[12px] border-[#6a4a2a] rounded-t-[2rem] bg-[#2a1a0a] shadow-[inset_0_0_30px_rgba(0,0,0,0.6),0_8px_24px_rgba(0,0,0,0.4)] p-6`.
- Gold inner trim: `before:absolute before:inset-[6px] before:border-[3px] before:border-[#c4a043] before:rounded-t-[1.5rem] before:pointer-events-none before:content-['']`.

### 2) Red Velvet Curtain Reveal

Two-panel red velvet curtains that slide apart to reveal stage content.

```html
<div class="relative overflow-hidden">
  <!-- Left curtain -->
  <div class="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#5a0606] via-[#8a0a0a] to-[#6a0808] z-20 curtain-left"
       style="box-shadow: inset -8px 0 16px rgba(0,0,0,0.5);">
    <div class="h-full w-full opacity-30 bg-[repeating-linear-gradient(90deg,transparent,transparent_12px,rgba(0,0,0,0.3)_12px,rgba(0,0,0,0.3)_14px)]"></div>
  </div>
  <!-- Right curtain -->
  <div class="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#5a0606] via-[#8a0a0a] to-[#6a0808] z-20 curtain-right"
       style="box-shadow: inset 8px 0 16px rgba(0,0,0,0.5);">
    <div class="h-full w-full opacity-30 bg-[repeating-linear-gradient(90deg,transparent,transparent_12px,rgba(0,0,0,0.3)_12px,rgba(0,0,0,0.3)_14px)]"></div>
  </div>
  <!-- Stage content -->
  <div class="relative z-10 p-8">
    <!-- Content here -->
  </div>
</div>
```

Curtain animation CSS:
```css
@keyframes curtainOpenLeft { from { transform: translateX(0); } to { transform: translateX(-100%); } }
@keyframes curtainOpenRight { from { transform: translateX(0); } to { transform: translateX(100%); } }
.curtain-left { animation: curtainOpenLeft 1.2s ease-out forwards; }
.curtain-right { animation: curtainOpenRight 1.2s ease-out forwards; }
```

### 3) Gold Tasseled Valance

Decorative gold fringe valance hanging at the top of the proscenium arch.

```html
<div class="flex justify-center gap-[2px] -mt-[1px] relative z-30">
  <div class="w-6 h-8 bg-gradient-to-b from-[#c4a043] to-[#8a6a20] rounded-b-full"></div>
  <div class="w-6 h-10 bg-gradient-to-b from-[#c4a043] to-[#8a6a20] rounded-b-full"></div>
  <div class="w-6 h-12 bg-gradient-to-b from-[#c4a043] to-[#8a6a20] rounded-b-full"></div>
  <div class="w-6 h-10 bg-gradient-to-b from-[#c4a043] to-[#8a6a20] rounded-b-full"></div>
  <div class="w-6 h-8 bg-gradient-to-b from-[#c4a043] to-[#8a6a20] rounded-b-full"></div>
</div>
```

### 4) Wooden Stage Floor with Footlight Glow

Warm amber footlight gradient rising from the bottom of the stage.

- `bg-gradient-to-t from-[#ff8c30]/30 via-[#ff8c30]/10 to-transparent` layered above a `bg-[#3a2a1a]` wooden floor.
- Floorboard texture: `bg-[repeating-linear-gradient(0deg,#3a2a1a,#3a2a1a_8px,#4a3a2a_8px,#4a3a2a_9px)]`.

### 5) Marionette Crossbar Decoration

Horizontal control bar with dangling strings evoking the marionette puppeteer.

```html
<div class="flex flex-col items-center gap-0 opacity-60">
  <div class="w-32 h-1 bg-[#c4a043] rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.3)]"></div>
  <div class="flex justify-between w-24">
    <div class="w-px h-6 bg-[#aaaaaa]/50"></div>
    <div class="w-px h-6 bg-[#aaaaaa]/50"></div>
    <div class="w-px h-6 bg-[#aaaaaa]/50"></div>
    <div class="w-px h-6 bg-[#aaaaaa]/50"></div>
  </div>
</div>
```

### 6) Hand-Painted Backdrop Scenery

Soft sky-blue backdrop with subtle gradient evoking painted theatrical scenery.

- `bg-gradient-to-b from-[#7aa8c4] via-[#9ac4d4] to-[#c4d4a0] rounded-lg shadow-inner`.
- Optional painted hill silhouette: `before:absolute before:bottom-0 before:left-0 before:right-0 before:h-1/3 before:bg-[#5a8a4a]/60 before:rounded-t-[100%] before:content-['']`.

### 7) Stage Card (Content Area Within Proscenium)

A card that lives inside the stage frame, lit by footlights.

- `bg-[#2a1a0a] border-2 border-[#c4a043]/40 rounded-lg p-6 shadow-[0_4px_16px_rgba(0,0,0,0.4)]`.

### 8) Theater Ticket Button

Gold-trimmed button resembling a vintage theater admission ticket.

- `bg-gradient-to-b from-[#c4a043] to-[#8a6a20] text-[#2a1a0a] font-bold uppercase tracking-wider px-6 py-2 border-2 border-[#2a1a0a] shadow-[0_3px_0_#4a3a1a] hover:translate-y-0.5 hover:shadow-[0_2px_0_#4a3a1a] active:shadow-none active:translate-y-1 transition-all`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Velvet Red | `#8a0a0a` | Stage curtains, primary drama |
| Deep Velvet Red | `#5a0606` | Curtain shadow, depth folds |
| Stage Wood | `#6a4a2a` | Proscenium arch, frame |
| Dark Wood | `#3a2a1a` | Stage floor, frame shadow |
| Gold Trim | `#c4a043` | Tassels, valance, accents, buttons |
| Dark Gold | `#8a6a20` | Gold gradient depth, trim shadow |
| Footlight Amber | `#ff8c30` | Warm glow from below, footlight wash |
| Backdrop Sky Blue | `#7aa8c4` | Hand-painted scenery backdrop |
| Backdrop Green | `#5a8a4a` | Painted hill/landscape backdrop |
| Stage Black | `#2a1a0a` | Stage interior, deep shadows |
| Cream Parchment | `#e8dcc0` | Text on dark surfaces, tickets |
| Marionette String | `#aaaaaa` | Puppet control strings |

Rules: Velvet red and stage wood are the dominant materials — they define the theater frame. Gold trim is the connective accent on every surface (valance, buttons, arch trim). Footlight amber provides the sole light source from below, warming everything upward. Backdrop colors are muted/pastel, suggesting hand-painted distance scenery. Dark stage black fills the void behind everything.

## Typography Recommendations

- **Display:** Playfair Display, Cinzel, or Cormorant Garamond (elegant, theatrical serif evoking playbills and marquee signage).
- **Body:** Lora or Crimson Text (warm serif companion, readable on dark stage surfaces).
- **Labels:** `font-bold uppercase tracking-[0.2em] text-sm text-[#c4a043]` (gold lettering on dark, like engraved theater signage).
- Typography should feel like a vintage theater playbill — ornate, elegant, and full of dramatic gravitas.

## Interaction Rules

- Default: theatrical, dramatic, warm. Everything lives within the proscenium frame.
- Hover: elements warm and glow as if the footlights brighten on them.
  - `hover:shadow-[0_0_20px_rgba(255,140,48,0.3)] transition-all duration-300`.
- Active: `active:scale-95` (a satisfying press like pulling a puppet string).
- Focus: `focus:outline-none focus:ring-4 focus:ring-[#c4a043]/50` (gold ring, like a spotlight).
- Curtain reveal: curtains slide apart with a 1.2s ease-out on page load or content change.
- Transitions: `transition-all duration-300` (measured, theatrical pacing — never rushed).
- Footlight flicker: subtle opacity animation on the footlight glow layer (optional, respects reduced motion).

## Reusable Tailwind Tokens

- Proscenium frame: `border-[12px] border-[#6a4a2a] rounded-t-[2rem] bg-[#2a1a0a] shadow-[inset_0_0_30px_rgba(0,0,0,0.6)]`.
- Gold inner trim: `before:absolute before:inset-[6px] before:border-[3px] before:border-[#c4a043] before:rounded-t-[1.5rem]`.
- Velvet curtain: `bg-gradient-to-r from-[#5a0606] via-[#8a0a0a] to-[#6a0808]`.
- Curtain fold texture: `bg-[repeating-linear-gradient(90deg,transparent,transparent_12px,rgba(0,0,0,0.3)_12px,rgba(0,0,0,0.3)_14px)]`.
- Footlight glow: `bg-gradient-to-t from-[#ff8c30]/30 via-[#ff8c30]/10 to-transparent`.
- Stage floor: `bg-[repeating-linear-gradient(0deg,#3a2a1a,#3a2a1a_8px,#4a3a2a_8px,#4a3a2a_9px)]`.
- Backdrop: `bg-gradient-to-b from-[#7aa8c4] via-[#9ac4d4] to-[#c4d4a0]`.
- Theater button: `bg-gradient-to-b from-[#c4a043] to-[#8a6a20] text-[#2a1a0a] border-2 border-[#2a1a0a] shadow-[0_3px_0_#4a3a1a]`.
- Stage card: `bg-[#2a1a0a] border-2 border-[#c4a043]/40 rounded-lg`.
- Gold label: `font-bold uppercase tracking-[0.2em] text-[#c4a043]`.

## Quality Checklist

- Proscenium arch frame is present (wooden border with gold inner trim).
- Red velvet curtains with fold texture are visible or animated.
- Gold tasseled valance hangs from the top of the arch.
- Footlight amber glow rises from the bottom of the stage.
- Marionette crossbar or string decoration appears somewhere.
- Color palette is velvet red, stage wood, and gold trim dominant.
- Typography is elegant serif (Playfair, Cinzel) for theatrical gravitas.
- Content areas are framed within the stage (proscenium containment).
- Backdrop scenery gradient is visible behind main content.
- The aesthetic reads as a miniature puppet theater or marionette stage.
- Everything feels intimate, theatrical, and handcrafted.
- Motion is measured and dramatic (curtain reveals, spotlight hovers).

## Anti-Patterns

- Bright primary carnival colors (this is a theater, not a circus — muted elegance).
- Flat unframed content areas (everything must live within the proscenium).
- Missing curtains (velvet curtains are the signature puppet theater element).
- Sans-serif cold typography (theater needs ornate serif gravitas).
- Cold blue/white lighting (footlight amber is the sole warm light source).
- Modern glassmorphism (the puppet theater is wood, velvet, and gold — material and textural).
- Fast bouncy animations (theatrical motion is measured, dramatic, dignified).
- Missing gold accents (gold trim ties the entire proscenium together).
- Sharp flat shapes (the proscenium arch is rounded at top, valance is curved).
- Digital/tech aesthetic (this must feel handcrafted, hand-painted, physical).
- Even ambient lighting (all light comes from below via footlights, creating upward warmth).

## Accessibility Considerations

- Dark stage surfaces require cream/parchment text for sufficient contrast (`text-[#e8dcc0]` on `#2a1a0a`).
- Footlight glow overlays must not reduce text legibility — apply glow only to non-text layers.
- Curtain reveal animations must respect `prefers-reduced-motion` (provide instant show alternative).
- Focus states: `focus:ring-4 focus:ring-[#c4a043]/50` (gold ring, highly visible on dark).
- Decorative elements (valance tassels, marionette strings, backdrop scenery) must be `aria-hidden="true"`.
- Gold text labels on dark surfaces must meet WCAG AA contrast ratios.
- The proscenium frame must not trap keyboard focus — ensure logical tab order through stage content.
- Velvet curtain folds are decorative — ensure they do not create visual noise that obscures content.
