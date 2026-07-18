---
name: gothic-ui
description: Build gothic UI components (dark cathedral architecture, pointed arches, stone textures, gargoyles, rose windows, wrought iron, ecclesiastical drama) with deep shadows, cold stone surfaces, and the atmospheric weight of medieval Gothic cathedrals. Trigger this skill when the user asks for gothic design, cathedral aesthetic, medieval stone UI, dark ecclesiastical, Notre-Dame-inspired, or Gothic Revival interfaces.
---

# Gothic UI

Use this skill to design and implementation dark, atmospheric interfaces inspired by Gothic cathedral architecture: pointed arches, ribbed vaulting, rose windows, cold stone surfaces, wrought iron details, and the vertical, spiritual drama of medieval ecclesiastical construction.

## Non-Negotiable Foundations

- Gothic UI draws from 12th-16th century cathedral architecture: verticality, pointed arches, ribbed vaults, flying buttresses, and rose windows.
- Materials are cold and heavy: dark stone, wrought iron, aged leaded glass, and tarnished metal.
- Colors are dark and solemn: charcoal, cold gray, deep burgundy, tarnished silver, and occasional jewel-toned stained glass.
- Verticality is key: elements stretch upward, using tall aspect ratios and pointed arch shapes.
- The mood is solemn, atmospheric, and weighty — the interface should feel like standing inside a cathedral.
- Ornamental tracery (delicate stone patterns) decorates borders and dividers.

## Core Material Recipes

### 1) Pointed Arch Frame

The signature gothic shape: a pointed arch container.

```css
.pointed-arch {
  border-radius: 50% 50% 0 0 / 30% 30% 0 0;
  /* For true pointed arch, use clip-path */
  clip-path: polygon(0% 100%, 0% 30%, 15% 0%, 50% 0%, 85% 0%, 100% 30%, 100% 100%);
}
```

### 2) Dark Stone Panel

Cold stone surface with weathered texture.

- `bg-gradient-to-br from-[#2a2a2e] via-[#1e1e22] to-[#16161a] border border-[#3a3a3e] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.03)]`.
- Stone texture: subtle SVG noise at `opacity-[0.04]`.
- Mortar lines: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_40px,rgba(0,0,0,0.1)_40px,rgba(0,0,0,0.1)_42px)]`.

### 3) Rose Window Decoration

Circular stained glass rose window as a decorative SVG.

```html
<svg viewBox="0 0 200 200" class="w-40 h-40 opacity-30">
  <g fill="none" stroke="#4a4a5a" stroke-width="1">
    <circle cx="100" cy="100" r="90"/>
    <circle cx="100" cy="100" r="70"/>
    <circle cx="100" cy="100" r="50"/>
    <!-- Petals -->
    <path d="M100,10 L110,50 L100,90 L90,50 Z" fill="#1a1a3a" opacity="0.5"/>
    <path d="M100,190 L110,150 L100,110 L90,150 Z" fill="#3a1a1a" opacity="0.5"/>
    <path d="M10,100 L50,110 L90,100 L50,90 Z" fill="#1a3a1a" opacity="0.5"/>
    <path d="M190,100 L150,110 L110,100 L150,90 Z" fill="#3a3a1a" opacity="0.5"/>
  </g>
</svg>
```

### 4) Wrought Iron Divider

Heavy iron divider with decorative scrollwork.

```html
<div class="flex items-center justify-center gap-2 my-6">
  <div class="h-px flex-1 bg-gradient-to-r from-transparent to-[#4a4a5a]"></div>
  <svg viewBox="0 0 40 20" class="w-10 h-5 text-[#5a5a6a]">
    <path fill="currentColor" d="M20,2 Q15,8 20,18 Q25,8 20,2 M10,10 Q15,6 20,10 M30,10 Q25,6 20,10"/>
  </svg>
  <div class="h-px flex-1 bg-gradient-to-l from-transparent to-[#4a4a5a]"></div>
</div>
```

### 5) Gothic Button

Heavy, solemn button with cold metal styling.

- Primary: `bg-gradient-to-b from-[#3a3a4e] to-[#1a1a2e] text-[#c0c0d0] font-serif font-medium px-8 py-3 border border-[#4a4a5e] shadow-[0_4px_8px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)] hover:from-[#4a4a5e] hover:to-[#2a2a3e] transition-all`.

### 6) Leaded Glass Panel

Panel suggesting stained glass with dark leading.

- `bg-[#1a1a2e]/80 backdrop-blur-sm border-2 border-[#0a0a0a] rounded-none`.
- Color segments: CSS grid of small colored cells separated by black borders (simpler version of stained-glass-ui).

### 7) Gargoyle / Grotesque Accent

Decorative SVG gargoyle or grotesque at panel corners.

- Small SVG silhouette of a gargoyle head at the top corners of a panel, `opacity-40 text-[#3a3a4a]`.

## Color Palette System

### Core Gothic Palette

| Color | Hex | Material |
|---|---|---|
| Cathedral Stone | `#2a2a2e` | Primary surface |
| Dark Stone | `#1e1e22` | Deep shadows |
| Light Stone | `#3a3a3e` | Highlights, borders |
| Tarnished Silver | `#8a8a9a` | Metal accents |
| Deep Burgundy | `#3a0a0a` | Velvet accent |
| Midnight Blue | `#0a0a2a` | Cold accent |
| Cold Gray | `#4a4a5a` | Dividers, details |
| Bone White | `#e0dcd0` | Primary text |
| Pure Black | `#0a0a0a` | Deepest shadows |

Rules: Cold grays and dark stones dominate. The palette should feel like the interior of a unheated cathedral — cold, solemn, and heavy. Jewel tones (burgundy, midnight blue) appear only in stained glass accents.

## Typography Recommendations

Gothic typography is classical, solemn, and ecclesiastical:

- **Display headings:** Cinzel, Trajan Pro, or Cormorant Unicase (Roman inscription caps, cathedral quality).
- **Body:** EB Garamond, Lora, or Crimson Text (readable classical serif).
- **Labels:** `font-serif font-medium uppercase tracking-[0.2em] text-sm` (Latin inscription style).
- Avoid sans-serif. Gothic is ecclesiastical serif territory.

## Component Architecture Pattern

1. Dark stone or deep charcoal background.
2. Pointed arch containers for hero/feature sections.
3. Dark stone panels with weathered texture.
4. Rose window SVG decorations.
5. Wrought iron dividers with scrollwork.
6. Heavy cold-metal buttons.
7. Gargoyle/grotesque corner accents.
8. Leaded glass panels for accent content.

## Interaction Rules

- Default state: solemn, heavy, atmospheric.
- Hover: stone brightens slightly, like candlelight catching a surface.
  - `hover:from-[#4a4a5e] hover:to-[#2a2a3e] transition-all duration-400`.
- Active: `active:translate-y-px`.
- Focus: `focus:outline-none focus:ring-1 focus:ring-[#8a8a9a]`.
- Transitions: `transition-all duration-400` (slow, solemn, weighty).

## Reusable Tailwind Tokens

- Stone panel: `bg-gradient-to-br from-[#2a2a2e] via-[#1e1e22] to-[#16161a] border border-[#3a3a3e] shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.03)]`
- Pointed arch: `[clip-path:polygon(0%_100%,0%_30%,15%_0%,50%_0%,85%_0%,100%_30%,100%_100%)]`
- Gothic button: `bg-gradient-to-b from-[#3a3a4e] to-[#1a1a2e] text-[#c0c0d0] font-serif border border-[#4a4a5e] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_4px_8px_rgba(0,0,0,0.4)]`
- Bone text: `text-[#e0dcd0]`
- Iron divider: `h-px bg-gradient-to-r from-transparent via-[#4a4a5a] to-transparent`

## Quality Checklist (must pass)

- At least one pointed arch shape (clip-path).
- Background is dark stone or charcoal.
- Cold gray palette dominates (no warm or bright colors).
- Rose window or tracery SVG decoration present.
- Wrought iron dividers with scrollwork.
- Typography is ecclesiastical serif (Cinzel or similar).
- Heavy, solemn shadows on all elements.
- The aesthetic reads as the interior of a Gothic cathedral.
- At least one gargoyle or grotesque decorative accent.
- Vertical emphasis in layout (tall elements, upward-reaching composition).

## Anti-Patterns

- Warm or bright color palettes (gothic is cold and solemn).
- Sans-serif typography (gothic requires classical serif).
- Rounded corners (use pointed arches and angular shapes).
- Light backgrounds (gothic is dark and shadowy).
- Missing ornamental tracery or rose windows (these are essential).
- Modern minimalist design (gothic is ornate and atmospheric).
- Cheerful or playful elements (gothic is solemn and weighty).
- Flat untextured surfaces (stone texture is mandatory).
- Missing the vertical emphasis (cathedrals reach toward heaven).
- Light, airy layouts (gothic is heavy, enclosed, and stone-like).

## Accessibility Considerations

- Dark stone backgrounds with bone white text provide excellent contrast (WCAG AAA).
- Focus states: `focus:ring-1 focus:ring-[#8a8a9a]` (tarnished silver, visible on stone).
- Ornamental SVGs (rose windows, gargoyles) must be `aria-hidden="true"`.
- Pointed arch clip-paths must not cut off interactive areas.
- The dark atmosphere may cause eye strain — ensure text is bright enough for extended reading.
- Touch targets must be adequate despite heavy border styling.
- Vertical layouts should still be responsive (collapse to single column on mobile).
