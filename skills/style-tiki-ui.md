---
name: tiki-ui
description: Build tiki / Polynesian UI components (carved wooden tiki statues, bamboo textures, tropical thatch, hibiscus flowers, lava rock, tiki bar ambiance, outrigger canoes, Pacific Island patterns) with warm carved-wood surfaces, bamboo dividers, and the escapist paradise aesthetic of Polynesian tiki culture. Trigger this skill when the user asks for tiki design, Polynesian UI, tiki bar, tropical island, carved tiki, bamboo, or Pacific paradise interfaces.
---

# Tiki / Polynesian UI

Use this skill to design and implementation warm, escapist interfaces inspired by Polynesian tiki culture: carved wooden tiki statues, bamboo pole textures, tropical thatch surfaces, hibiscus and plumeria flowers, lava rock accents, and the South Pacific paradise aesthetic of tiki bars and island retreats.

## Core Material Recipes

### 1) Bamboo Pole Surface

Bamboo column background.

- `bg-gradient-to-r from-[#8a7a3a] via-[#c4a85a] to-[#8a7a3a]` (horizontal bamboo pole).
- Segments: `bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_40px,rgba(60,40,10,0.15)_40px,rgba(60,40,10,0.15)_42px)]` (bamboo node joints).
- Sheen: `shadow-[inset_0_-2px_4px_rgba(60,40,10,0.1),inset_0_2px_4px_rgba(255,230,160,0.2)]`.

### 2) Carved Tiki Accent

Stylized carved tiki face SVG.

```html
<svg viewBox="0 0 60 80" class="w-15 h-20 opacity-50">
  <g fill="#5a3a1a" stroke="#3a1a08" stroke-width="1">
    <rect x="10" y="5" width="40" height="70" rx="4"/>
    <!-- Eyes -->
    <rect x="18" y="20" width="8" height="6" rx="1" fill="#3a1a08"/>
    <rect x="34" y="20" width="8" height="6" rx="1" fill="#3a1a08"/>
    <!-- Nose -->
    <path d="M26,26 L34,26 L30,38 Z" fill="#3a1a08"/>
    <!-- Mouth -->
    <rect x="18" y="42" width="24" height="4" fill="#3a1a08"/>
    <rect x="20" y="46" width="4" height="3" fill="#3a1a08"/>
    <rect x="28" y="46" width="4" height="3" fill="#3a1a08"/>
    <rect x="36" y="46" width="4" height="3" fill="#3a1a08"/>
  </g>
</svg>
```

### 3) Lava Rock Panel

Dark volcanic basalt surface.

- `bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] border-2 border-[#3a3a3a] rounded-lg p-6 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]`.
- Texture: `bg-[radial-gradient(rgba(60,60,60,0.3)_1px,transparent_1px)] bg-[size:6px_6px]` (porous volcanic rock).

### 4) Hibiscus Flower Accent

Tropical hibiscus SVG decoration.

```html
<svg viewBox="0 0 60 60" class="w-12 h-12 opacity-60">
  <g fill="#e02060" stroke="#8a1040" stroke-width="0.5">
    <ellipse cx="30" cy="12" rx="8" ry="14" opacity="0.9"/>
    <ellipse cx="48" cy="25" rx="8" ry="14" opacity="0.8" transform="rotate(72 48 25)"/>
    <ellipse cx="40" cy="46" rx="8" ry="14" opacity="0.9" transform="rotate(144 40 46)"/>
    <ellipse cx="20" cy="46" rx="8" ry="14" opacity="0.8" transform="rotate(216 20 46)"/>
    <ellipse cx="12" cy="25" rx="8" ry="14" opacity="0.9" transform="rotate(288 12 25)"/>
  </g>
  <circle cx="30" cy="30" r="5" fill="#ffcc00"/>
  <line x1="30" y1="30" x2="25" y2="22" stroke="#8a1040" stroke-width="0.5"/>
  <line x1="30" y1="30" x2="35" y2="22" stroke="#8a1040" stroke-width="0.5"/>
</svg>
```

### 5) Thatch Surface

Palm-thatch roof texture panel.

- `bg-[#8a6a3a] bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_3px,rgba(60,40,10,0.1)_3px,rgba(60,40,10,0.1)_5px,transparent_5px,transparent_8px)]` (woven thatch pattern).

### 6) Tiki Button

Warm tropical carved-wood button.

- `bg-gradient-to-b from-[#c47a30] to-[#8a4a10] text-[#fff5d0] font-serif font-medium px-8 py-3 border-2 border-[#5a2a04] shadow-[0_3px_0_#5a2a04,inset_0_1px_0_rgba(255,200,100,0.3)] hover:translate-y-1 hover:shadow-[0_1px_0_#5a2a04] active:shadow-none transition-all`.

## Color Palette System

| Color | Hex | Material |
|---|---|---|
| Bamboo Tan | `#c4a85a` | Primary surface |
| Dark Bamboo | `#8a7a3a` | Shadows |
| Palm Wood | `#8a6a3a` | Carved surfaces |
| Dark Wood | `#5a3a1a` | Tiki carvings |
| Hibiscus Red | `#e02060` | Tropical flowers |
| Lava Black | `#1a1a1a` | Volcanic rock |
| Sunset Orange | `#c47a30` | Warm accents |
| Tropical Green | `#2a8a4a` | Palm leaves |
| Sandy Cream | `#fff5d0` | Text on dark |

Rules: Warm bamboo/wood browns dominate. Hibiscus red and tropical green provide the only bright accents. Lava black surfaces add volcanic depth. Everything should feel warm, carved, and organically tropical.

## Typography Recommendations

- **Display:** Pacifico, Lobster (tropical, escapist, hand-carved feel).
- **Body:** Nunito, DM Sans (rounded, warm, friendly).
- **Labels:** `font-serif font-medium text-sm tracking-wide`.

## Reusable Tailwind Tokens

- Bamboo: `bg-gradient-to-r from-[#8a7a3a] via-[#c4a85a] to-[#8a7a3a]` with segment overlay.
- Lava rock: `bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] border-2 border-[#3a3a3a]`.
- Tiki button: `bg-gradient-to-b from-[#c47a30] to-[#8a4a10] border-2 border-[#5a2a04] shadow-[0_3px_0_#5a2a04]`.
- Thatch: `bg-[#8a6a3a]` with woven repeating gradient.
- Hibiscus: SVG 5-petal flower in `#e02060`.

## Quality Checklist

- At least one bamboo-textured surface.
- At least one carved tiki face SVG decoration.
- Hibiscus flower accent present.
- Lava rock dark panel surfaces.
- Warm tropical color palette (bamboo/wood + hibiscus red).
- Thatch texture surface present.
- Typography is warm and escapist.
- The aesthetic reads as Polynesian tiki / tropical island paradise.
- Everything feels warm, carved, and escapist.
- Pacific Island cultural references present (tiki, hibiscus, bamboo).

## Anti-Patterns

- Cold blue/dominant palettes (tiki is warm bamboo and tropical sun).
- Missing carved tiki decorations (tiki statues are the signature element).
- Missing bamboo textures (bamboo is the primary structural material).
- Missing hibiscus/tropical flower accents (these add the paradise color).
- Modern clean minimalist design (tiki is textured and carved).
- Dark moody atmosphere (tiki is warm, escapist, and festive).
- Missing the lava rock surfaces (volcanic stone is essential island material).
- Sans-serif cold typography (tiki needs warm escapist fonts).
- Sharp angular modern shapes (tiki is organic and carved).
- Missing the thatch/woven textures (island building materials are key).

## Accessibility Considerations

- Warm bamboo surfaces with dark text provide good contrast (verify WCAG AA).
- Focus states: `focus:ring-2 focus:ring-[#e02060]/40` (hibiscus ring on bamboo).
- Tiki face and hibiscus SVGs must be `aria-hidden="true"` when decorative.
- Respect cultural significance of Polynesian tiki traditions — use thoughtfully.
- Touch targets must be adequate despite carved border styling.
