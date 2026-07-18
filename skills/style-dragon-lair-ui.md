---
name: dragon-lair-ui
description: Build dragon lair UI components (cave mouth, gold hoard, dragon scale, fire breath, bone pile, gem treasure, claw mark) with cavernous dark spaces, fire glow, and the fearsome majesty of a dragon mountain lair. Trigger this skill when the user asks for dragon lair design, cavern UI, draconic aesthetic, treasure hoard interface, fire-breathing components, medieval fantasy dungeon UI, dragon mountain atmosphere, or beast lair interfaces.
---

# Dragon Lair UI

Use this skill to design and implement dark, cavernous interfaces inspired by a dragon's mountain lair: gaping cave mouths, mountains of gold hoard, overlapping scale textures, billowing fire breath, bone piles, faceted gem treasures, and savage claw mark scratches. The palette is subterranean and primal: cave blacks, dragon green, fire orange, hoard gold, bone white, and gemstone accents.

## Non-Negotiable Foundations

- Dragon Lair UI draws from mythic dragon dens: mountain caverns, treasure hoards, dragon scales, fire breath, bone piles, gemstones, and claw-scarred stone.
- Materials are raw and primal: rough cavern stone, hammered gold, dragon scales, scorched rock, bone, polished gemstones, and cracked earth.
- Colors are dark and volcanic: cave blacks, deep greens, fire oranges, hoard golds, bone whites, and jewel-toned gem accents.
- Texture is everything: overlapping scale patterns, cracked stone, scattered coins, scratch marks, and fire-warmed surfaces.
- The mood is dangerous, ancient, and hoarded — the interface should feel like standing at the mouth of a dragon's treasure cave.
- Fire and gold lighting dominate: everything is lit from below or within by fire glow and reflected gold.

## Core Material Recipes

### 1) Cave Mouth Frame

A dark arched opening framing content, the primary hero shape.

```html
<div class="relative overflow-hidden bg-[#1a0a0a]">
  <!-- Cave mouth arch -->
  <div class="relative bg-gradient-to-b from-[#0a0a0a] via-[#1a0a0a] to-[#2a1a0a]"
       style="clip-path: polygon(0% 100%, 0% 40%, 10% 15%, 30% 5%, 50% 0%, 70% 5%, 90% 15%, 100% 40%, 100% 100%);">
    <!-- Interior fire glow -->
    <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#e06020]/10 to-transparent"></div>
    <!-- Stalactite silhouettes -->
    <div class="absolute top-0 left-[15%] w-2 h-12 bg-[#0a0a0a] rounded-b-full"></div>
    <div class="absolute top-0 left-[35%] w-3 h-16 bg-[#0a0a0a] rounded-b-full"></div>
    <div class="absolute top-0 right-[20%] w-2 h-10 bg-[#0a0a0a] rounded-b-full"></div>
    <div class="absolute top-0 right-[40%] w-1 h-8 bg-[#0a0a0a] rounded-b-full"></div>
    <!-- Content slot -->
    <div class="relative p-8 pt-16">
      <!-- Insert content here -->
    </div>
  </div>
</div>
```

### 2) Dragon Scale Texture Panel

Overlapping scale pattern covering a surface, the signature dragon texture.

```html
<div class="relative bg-[#2a3a1a] p-6 overflow-hidden">
  <!-- Scale pattern overlay -->
  <svg class="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 200" preserveAspectRatio="none">
    <defs>
      <pattern id="scales" x="0" y="0" width="40" height="36" patternUnits="userSpaceOnUse">
        <path d="M20,0 Q40,18 20,36 Q0,18 20,0Z" fill="none" stroke="#2a5a2a" stroke-width="1"/>
        <path d="M0,0 Q20,18 0,36" fill="none" stroke="#2a5a2a" stroke-width="0.5" opacity="0.5"/>
        <path d="M40,0 Q60,18 40,36" fill="none" stroke="#2a5a2a" stroke-width="0.5" opacity="0.5"/>
      </pattern>
    </defs>
    <rect width="200" height="200" fill="url(#scales)"/>
  </svg>
  <!-- Content goes here -->
</div>
```

Utility class version:

- `bg-[#2a3a1a] relative overflow-hidden` with a `<pattern>` SVG overlay at `opacity-20`.
- Simpler fallback: `bg-[repeating-conic-gradient(from_30deg_#2a5a2a20_0deg_120deg,transparent_120deg_360deg)] bg-[length:20px_20px] opacity-30`.

### 3) Gold Hoard Pile

A scattered pile of coins and treasure items at the base of a section.

```html
<div class="relative h-16 overflow-hidden">
  <!-- Gold coins -->
  <div class="absolute bottom-0 left-[5%] w-8 h-4 rounded-full bg-gradient-to-b from-[#e0c060] to-[#c4a043] border border-[#a08030] shadow-[0_2px_4px_rgba(0,0,0,0.3)]"></div>
  <div class="absolute bottom-1 left-[12%] w-7 h-3.5 rounded-full bg-gradient-to-b from-[#d0b050] to-[#b49040] border border-[#907020] shadow-[0_2px_4px_rgba(0,0,0,0.3)]"></div>
  <div class="absolute bottom-2 left-[20%] w-9 h-4 rounded-full bg-gradient-to-b from-[#e8c860] to-[#c4a043] border border-[#a08030] shadow-[0_2px_4px_rgba(0,0,0,0.3)]"></div>
  <div class="absolute bottom-0 left-[30%] w-6 h-3 rounded-full bg-gradient-to-b from-[#d0b050] to-[#b49040] border border-[#907020] shadow-[0_2px_4px_rgba(0,0,0,0.3)]"></div>
  <div class="absolute bottom-1 left-[38%] w-10 h-5 rounded-full bg-gradient-to-b from-[#e0c060] to-[#c4a043] border border-[#a08030] shadow-[0_2px_4px_rgba(0,0,0,0.3)]"></div>
  <div class="absolute bottom-0 left-[50%] w-8 h-4 rounded-full bg-gradient-to-b from-[#d0b050] to-[#b49040] border border-[#907020] shadow-[0_2px_4px_rgba(0,0,0,0.3)]"></div>
  <div class="absolute bottom-2 left-[60%] w-7 h-3.5 rounded-full bg-gradient-to-b from-[#e8c860] to-[#c4a043] border border-[#a08030]"></div>
  <div class="absolute bottom-0 left-[70%] w-9 h-4 rounded-full bg-gradient-to-b from-[#e0c060] to-[#c4a043] border border-[#a08030]"></div>
  <div class="absolute bottom-1 left-[82%] w-6 h-3 rounded-full bg-gradient-to-b from-[#d0b050] to-[#b49040] border border-[#907020]"></div>
  <!-- Gold dust shimmer -->
  <div class="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#c4a043]/10 to-transparent"></div>
</div>
```

### 4) Fire Breath Glow

A rising orange-yellow flame gradient used as ambient lighting and accent.

```html
<div class="relative">
  <!-- Fire glow emanation -->
  <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-[#e06020]/20 blur-2xl"></div>
  <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-[#e06020]/30 blur-xl animate-pulse"></div>
  <!-- Content lit by fire -->
  <div class="relative bg-gradient-to-b from-[#2a1a0a] to-[#1a0a0a] p-6 border border-[#e06020]/20 shadow-[0_0_30px_rgba(224,96,32,0.1)]">
    <!-- Content here -->
  </div>
</div>
```

### 5) Bone Pile Accent

Scattered bone fragments as a decorative border or divider.

```html
<div class="relative h-8 my-4">
  <!-- Scattered bones -->
  <div class="absolute left-[10%] top-1 w-12 h-1.5 bg-[#e8e0d0] rounded-full rotate-[15deg] opacity-50"></div>
  <div class="absolute left-[10%] top-1 w-1.5 h-1.5 bg-[#e8e0d0] rounded-full translate-x-4 -translate-y-1 opacity-40"></div>
  <div class="absolute left-[30%] top-2 w-10 h-1 bg-[#d8d0c0] rounded-full rotate-[-25deg] opacity-40"></div>
  <div class="absolute left-[50%] top-0 w-14 h-1.5 bg-[#e8e0d0] rounded-full rotate-[8deg] opacity-50"></div>
  <div class="absolute left-[50%] top-0 w-1.5 h-1.5 bg-[#e8e0d0] rounded-full translate-x-5 -translate-y-0.5 opacity-40"></div>
  <div class="absolute left-[70%] top-3 w-8 h-1 bg-[#d8d0c0] rounded-full rotate-[-12deg] opacity-35"></div>
  <div class="absolute left-[85%] top-1 w-10 h-1.5 bg-[#e8e0d0] rounded-full rotate-[20deg] opacity-45"></div>
  <!-- Skull accent -->
  <div class="absolute left-[42%] top-0 w-3 h-3 bg-[#e8e0d0] rounded-full opacity-30"></div>
</div>
```

### 6) Gem Treasure

Faceted colorful gemstones scattered as accents.

```html
<div class="flex gap-3 items-end">
  <!-- Ruby -->
  <div class="w-6 h-6 bg-gradient-to-br from-[#e03030] via-[#c41e1e] to-[#8a1010] shadow-[0_0_6px_rgba(196,30,30,0.4),0_2px_4px_rgba(0,0,0,0.3)]" style="clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);"></div>
  <!-- Sapphire -->
  <div class="w-5 h-5 bg-gradient-to-br from-[#4a6aca] via-[#2a4a8a] to-[#1a2a5a] shadow-[0_0_6px_rgba(42,74,138,0.4),0_2px_4px_rgba(0,0,0,0.3)]" style="clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);"></div>
  <!-- Emerald -->
  <div class="w-4 h-4 bg-gradient-to-br from-[#30a050] via-[#208040] to-[#105020] shadow-[0_0_6px_rgba(48,160,80,0.4),0_2px_4px_rgba(0,0,0,0.3)]" style="clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);"></div>
  <!-- Topaz -->
  <div class="w-5 h-5 bg-gradient-to-br from-[#e0b040] via-[#c4a043] to-[#907020] shadow-[0_0_6px_rgba(196,160,67,0.4),0_2px_4px_rgba(0,0,0,0.3)]" style="clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);"></div>
</div>
```

### 7) Claw Mark Scratches

Savage claw scratches across a surface, used as dividers or accents.

```html
<div class="relative my-4 h-8">
  <svg class="absolute inset-0 w-full h-full" viewBox="0 0 400 32" preserveAspectRatio="none">
    <!-- Three parallel claw marks -->
    <line x1="100" y1="2" x2="300" y2="30" stroke="#e06020" stroke-width="1.5" opacity="0.4" stroke-linecap="round"/>
    <line x1="110" y1="2" x2="310" y2="30" stroke="#c41e1e" stroke-width="1" opacity="0.3" stroke-linecap="round"/>
    <line x1="120" y1="2" x2="320" y2="30" stroke="#e06020" stroke-width="1.5" opacity="0.35" stroke-linecap="round"/>
    <!-- Scratch glow -->
    <line x1="100" y1="2" x2="300" y2="30" stroke="#e06020" stroke-width="4" opacity="0.08" stroke-linecap="round"/>
  </svg>
</div>
```

### 8) Scorched Stone Panel

Cavern stone with fire-scorched edges, the primary card container.

- `bg-gradient-to-br from-[#2a1a0a] via-[#1a0a0a] to-[#0a0a0a] border border-[#3a2a1a] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_20px_rgba(224,96,32,0.05)]`.
- Scorched edge: `shadow-[inset_0_0_30px_rgba(224,96,32,0.08)]` for a fire-warmed border glow.
- Cracked texture: subtle SVG crack lines at `opacity-[0.06]`.

### 9) Treasure Chest Button

A treasure chest-inspired button with gold trim and dark wood body.

- `bg-gradient-to-b from-[#4a3020] to-[#2a1a0a] text-[#c4a043] font-serif font-bold px-8 py-3 border-2 border-[#c4a043]/50 shadow-[0_0_12px_rgba(196,160,67,0.2),0_4px_8px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(196,160,67,0.3)] hover:border-[#c4a043]/80 hover:shadow-[0_0_20px_rgba(196,160,67,0.3),0_4px_12px_rgba(0,0,0,0.5)] transition-all duration-400`.

## Color Palette System

### Core Dragon Lair Palette

| Color | Hex | Role |
|---|---|---|
| Cave Dark | `#1a0a0a` | Primary background, deep cave |
| Shadow | `#0a0a0a` | Deepest void, absolute black |
| Dragon Scale | `#2a5a2a` | Scale texture, draconic green |
| Fire Orange | `#e06020` | Fire glow, ambient warmth |
| Gold Coins | `#c4a043` | Hoard gold, treasure accents |
| Bone White | `#e8e0d0` | Bone pile, light accents |
| Gem Red | `#c41e1e` | Ruby gemstones, blood accent |
| Gem Blue | `#2a4a8a` | Sapphire gemstones, cold accent |
| Scorched Stone | `#2a1a0a` | Stone surfaces, card backgrounds |
| Ember Dark | `#3a1a0a` | Warm stone variant |

### Extended Accent Palette

| Color | Hex | Role |
|---|---|---|
| Fire Yellow | `#f0d060` | Bright flame tips, highlights |
| Dragon Scale Dark | `#1a3a10` | Darker scale variant |
| Dragon Scale Light | `#4a7a3a` | Highlighted scale, fresh growth |
| Gem Green | `#208040` | Emerald gemstones |
| Gem Purple | `#6a2a6a` | Amethyst gemstones |
| Coal Black | `#1a1a1a` | Darker stone variant |
| Smoke Gray | `#4a4a4a` | Smoke, ash, dividers |
| Blood Crust | `#5a1010` | Dried blood, dark accent |
| Torch Light | `#e0a030` | Warm torchlight, focused glow |
| Obsidian | `#1a1a2a` | Volcanic glass, deep accent |

Rules: Cave dark and shadow dominate — the lair is underground. Fire orange provides all ambient light; nothing is lit by daylight. Gold coins appear on interactive elements and borders as hoard references. Dragon scale green appears only in texture patterns and draconic accents. Gem colors appear only on gem components. Bone white is used sparingly for text on dark backgrounds.

## Typography Recommendations

Dragon Lair typography is bold, primal, and hoarded:

- **Display headings:** Almendra SC, MedievalSharp, or Pirata One (bold, dragon-carved letterforms).
- **Body text:** Merriweather, Bitter, or Lora (sturdy serif readable on dark backgrounds).
- **Inscriptional labels:** `font-serif font-bold uppercase tracking-[0.12em] text-sm text-[#c4a043]` (gold-engraved style).
- **Warning/danger text:** `font-bold text-[#e06020]` (fire orange for threats and warnings).
- **Lore/histort text:** `font-serif italic text-[#e8e0d0]/70` (aged bone-white manuscript).
- Avoid thin or delicate typefaces. Dragon lair typography should feel carved, burned, or hammered into stone. Weight is authority.

## Component Architecture Pattern

1. Cave dark background (`#1a0a0a`) as the ambient base.
2. Scorched stone panels as primary containers.
3. Cave mouth arch shapes for hero sections and frames.
4. Dragon scale texture panels for feature areas.
5. Fire breath glow as ambient lighting for sections.
6. Gold hoard piles at section bases or as decorative bottom borders.
7. Bone pile dividers between sections.
8. Gem treasure clusters for status indicators and accents.
9. Claw mark scratches as dividers and section breaks.
10. Treasure chest buttons for primary actions.

## Interaction Rules

- Default state: dark, dangerous, fire-lit.
- Hover: fire glow intensifies, gold trim brightens, scale texture shifts.
  - `hover:shadow-[0_0_24px_rgba(224,96,32,0.3),0_0_40px_rgba(196,160,67,0.1)] transition-all duration-400`.
- Active: `active:scale-[0.97] active:shadow-[0_0_8px_rgba(224,96,32,0.5)]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#c4a043]/60 focus:shadow-[0_0_16px_rgba(196,160,67,0.2)]`.
- Transitions: `transition-all duration-400` (deliberate, weighty, like stone shifting).
- Danger hover: elements at risk of destruction get a fire-orange ring on hover.
  - `hover:ring-2 hover:ring-[#e06020]/60`.
- Gem glow: gems pulse softly when hovered.
  - `hover:shadow-[0_0_12px_rgba(196,30,30,0.5)]` for rubies, adjusted per gem color.
- Gold shimmer: gold elements get a slow metallic shimmer on hover.
  - `hover:brightness-110 hover:shadow-[0_0_8px_rgba(196,160,67,0.3)] transition-all duration-500`.

## Reusable Tailwind Tokens

- Scorched stone panel: `bg-gradient-to-br from-[#2a1a0a] via-[#1a0a0a] to-[#0a0a0a] border border-[#3a2a1a] shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_20px_rgba(224,96,32,0.05)]`
- Fire glow ambient: `shadow-[0_0_30px_rgba(224,96,32,0.15),0_0_60px_rgba(224,96,32,0.05)]`
- Gold text: `text-[#c4a043]`
- Gold border: `border-[#c4a043]/40`
- Treasure chest button: `bg-gradient-to-b from-[#4a3020] to-[#2a1a0a] text-[#c4a043] border-2 border-[#c4a043]/50 shadow-[0_0_12px_rgba(196,160,67,0.2),0_4px_8px_rgba(0,0,0,0.4)]`
- Cave dark background: `bg-[#1a0a0a]`
- Bone white text: `text-[#e8e0d0]`
- Fire orange text: `text-[#e06020]`
- Dragon scale panel: `bg-[#2a3a1a] relative overflow-hidden`
- Claw mark divider: SVG `<line>` elements with `stroke="#e06020" opacity="0.35"`
- Scorched inset glow: `shadow-[inset_0_0_30px_rgba(224,96,32,0.08)]`
- Gem red glow: `shadow-[0_0_6px_rgba(196,30,30,0.4)]`
- Gem blue glow: `shadow-[0_0_6px_rgba(42,74,138,0.4)]`
- Ember hover: `hover:shadow-[0_0_24px_rgba(224,96,32,0.3)] hover:border-[#e06020]/40 transition-all duration-400`
- Danger warning: `text-[#e06020] font-bold border-l-2 border-[#e06020]`
- Smoked divider: `h-px bg-gradient-to-r from-transparent via-[#4a4a4a]/40 to-transparent`

## Quality Checklist (must pass)

- Background is cave dark (`#1a0a0a`) or shadow black.
- At least one scorched stone panel with fire-warmed edges.
- Fire glow ambient lighting present (orange emanation from below or within).
- Gold hoard or gold trim visible on at least one interactive element.
- Dragon scale texture pattern present on at least one panel or section.
- Claw mark or scratch element used as a divider or accent.
- Gem treasure elements appear for status indicators or decorative accents.
- Typography is bold and carved (Almendra SC, MedievalSharp, or similar for display).
- The overall atmosphere reads as a dark mountain cavern.
- Bone or skeletal elements present (bone pile divider or bone-white accents).
- Color balance: near-black surfaces with strategic fire orange and gold accents.
- All surfaces feel rough, scorched, or weathered — no polished or clean surfaces.
- At least one decorative element references treasure (coins, gems, chest, or gold dust).

## Anti-Patterns

- Light or bright backgrounds (dragon lair is underground and dark).
- Clean, polished, or glossy surfaces (everything should be rough, scorched, or weathered).
- Missing fire glow effects (all light in a lair comes from fire).
- Cool-toned dominant palettes without fire warmth (fire orange must provide warmth).
- Sans-serif typography for headings (dragon lair uses bold, carved serif letterforms).
- Delicate or thin design elements (dragon lair is brutal and heavy).
- Missing texture (scale patterns, cracked stone, scattered coins, scratch marks).
- Pastel or muted color palettes (dragon lair is high-contrast: black, orange, gold).
- Missing the cavernous, underground atmosphere (the interface must feel subterranean).
- Smooth rounded corners without intentional fire-scorched or broken edges.
- Missing the sense of danger or hoarded wealth (the lair should feel perilous and treasure-laden).
- Absence of any gold elements (the hoard is central to the dragon lair identity).
- Modern, corporate, or sterile aesthetic (dragon lair is primal and mythic).
- Uniform lighting (a lair has pools of fire light and deep shadows, not even illumination).

## Accessibility Considerations

- Cave dark backgrounds with bone white text provide strong contrast (WCAG AAA on `#e8e0d0` against `#1a0a0a`).
- Gold text on dark backgrounds meets WCAG AA for large text; verify body-size gold text.
- Focus states: `focus:ring-2 focus:ring-[#c4a043]/60` (gold, clearly visible against cave dark).
- Decorative SVGs (scales, claw marks, bone piles, gems) must be `aria-hidden="true"`.
- Fire glow animations must respect `prefers-reduced-motion` — disable `animate-pulse` and shimmer effects.
- Gem color variations must not be the sole way to convey meaning — pair with icons or text.
- Cave mouth clip-paths must not cut off interactive elements or create overlapping hit areas.
- The extreme dark environment requires high-contrast text — never use dark gray on black.
- Touch targets must remain adequate despite heavy border and shadow styling.
- Bone pile and claw mark dividers must be marked as decorative for screen readers.
- Gold hoard decorative elements must not interfere with content navigation.
- Fire-lit sections may create uneven visual weight — ensure layout remains navigable when scanned linearly.
- The dark, atmospheric design should include a high-contrast mode or light-mode escape for users with low vision.
