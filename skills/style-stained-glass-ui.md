---
name: stained-glass-ui
description: Build stained glass UI components (leaded glass panels, luminous color segments, black leading lines, geometric tracery, jewel-toned translucency, gothic cathedral light) with thick black borders between color fields, backlit color glow, and geometric segmentation. Trigger this skill when the user asks for stained glass design, leaded glass UI, cathedral window aesthetic, luminous segmented color, or Gothic light interfaces.
---

# Stained Glass UI

Use this skill to design and implement luminous, segmented interfaces inspired by stained glass windows: thick black leading between jewel-toned color panels, geometric tracery patterns, backlit color glow, and the transcendent light quality of Gothic cathedrals.

## Non-Negotiable Foundations

- Stained glass UI is defined by SEGMENTATION: thick black leading lines divide the interface into distinct color panels, just like real leaded glass.
- Colors are jewel-toned and luminous: deep ruby red, sapphire blue, emerald green, golden amber, royal purple. Each panel GLOWS as if backlit.
- The black leading (`border-4 border-black` or thicker) is structural — it IS the design framework, holding the color panels together.
- Geometric tracery patterns (circles, pointed arches, trefoils, quatrefoils) provide architectural structure.
- The aesthetic evokes LIGHT passing THROUGH colored glass — panels should feel translucent and glowing, not flat.
- Symmetry and geometric precision echo Gothic and Romanesque cathedral architecture.

## Core Material Recipes

### 1) Leaded Glass Panel

The foundational element: a color panel framed by thick black leading.

- Color field: `bg-[#1a3a8a]` (sapphire blue).
- Leading: `border-4 border-black` (the structural frame).
- Glow: `shadow-[0_0_20px_rgba(26,58,138,0.4)]` (backlit glow effect).
- Full: `bg-[#1a3a8a] border-4 border-black shadow-[0_0_20px_rgba(26,58,138,0.4)] p-6`.

### 2) Geometric Segmentation

Dividing a surface into stained glass segments using CSS Grid.

```html
<div class="grid grid-cols-3 grid-rows-3 gap-0 border-4 border-black">
  <div class="bg-[#1a3a8a] border-r-2 border-b-2 border-black aspect-square"></div>
  <div class="bg-[#8a1a1a] border-r-2 border-b-2 border-black aspect-square"></div>
  <div class="bg-[#f5d547] border-b-2 border-black aspect-square"></div>
  <!-- ... more cells ... -->
</div>
```

Each cell is a different jewel tone, separated by black leading.

### 3) Pointed Arch / Gothic Frame

Gothic architectural frame shape.

- `[clip-path:polygon(25%_0%,75%_0%,75%_15%,50%_0%,25%_15%)]` approximates a pointed arch top.
- Or use `border-radius: 50% 50% 0 0 / 30% 30% 0 0` for a rounded arch.

### 4) Rose Window / Radial Pattern

Circular stained glass pattern radiating from center.

```css
.rose-window {
  background: conic-gradient(
    from 0deg,
    #1a3a8a 0deg 45deg,
    #8a1a1a 45deg 90deg,
    #f5d547 90deg 135deg,
    #2a6a3a 135deg 180deg,
    #1a3a8a 180deg 225deg,
    #8a1a1a 225deg 270deg,
    #f5d547 270deg 315deg,
    #2a6a3a 315deg 360deg
  );
  border-radius: 50%;
  border: 4px solid #000;
}
```

### 5) Stained Glass Button

Button that looks like a small glass panel with leading.

- `bg-[#8a1a1a] text-[#f5d547] font-serif font-bold uppercase tracking-wider px-8 py-3 border-4 border-black shadow-[0_0_15px_rgba(138,26,26,0.3)] hover:shadow-[0_0_25px_rgba(138,26,26,0.5)] transition-all`.

### 6) Trefoil / Quatrefoil Accent

Gothic architectural ornament.

```html
<svg viewBox="0 0 100 100" class="w-16 h-16">
  <g fill="none" stroke="#000" stroke-width="3">
    <circle cx="50" cy="30" r="20" fill="#1a3a8a" opacity="0.7"/>
    <circle cx="30" cy="60" r="20" fill="#8a1a1a" opacity="0.7"/>
    <circle cx="70" cy="60" r="20" fill="#2a6a3a" opacity="0.7"/>
  </g>
</svg>
```

### 7) Light Ray / Backlight Effect

Simulating sunlight streaming through colored glass.

- `bg-gradient-to-b from-[#f5d547]/10 via-transparent to-transparent` (golden light beam).
- Or radial glow: `bg-[radial-gradient(circle_at_50%_0%,rgba(245,213,71,0.15)_0%,transparent_50%)]`.

## Color Palette System

### Jewel Tone Palette

| Color | Hex | Symbolism |
|---|---|---|
| Sapphire Blue | `#1a3a8a` | Heaven, truth, loyalty |
| Ruby Red | `#8a1a1a` | Blood, martyrdom, sacrifice |
| Emerald Green | `#2a6a3a` | Nature, growth, hope |
| Golden Amber | `#f5d547` | Divinity, light, glory |
| Royal Purple | `#5a2a6a` | Royalty, wisdom, justice |
| Deep Teal | `#1a5a5a` | Water, depth, mystery |
| Black Leading | `#000000` | Structure, frame, separation |
| Cream Light | `#f5ead0` | Translucent white glass |

Rules: Colors are JEWEL-TONED — deep, saturated, and luminous. Each panel should glow as if backlit. Black leading is always thick (`border-4` minimum). The palette should feel like sunlight streaming through a cathedral.

## Typography Recommendations

Stained glass typography echoes Gothic and medieval traditions:

- **Display headings:** Cinzel, Trajan Pro, or Cormorant Garamond (classical Roman inscription caps).
- **Gothic accent:** UnifrakturMaguntia or MedievalSharp (for atmospheric decorative text).
- **Body:** EB Garamond, Lora, or Crimson Text (classical serif).
- **Labels:** `font-serif uppercase tracking-widest font-bold text-sm`.
- Avoid sans-serif for primary text. Stained glass is classical and serif.

## Component Architecture Pattern

1. Dark background (deep navy or black — the cathedral interior).
2. Optional backlight/golden light ray from top.
3. Segmented color panels with thick black leading.
4. Geometric tracery patterns (rose windows, trefoils, arches).
5. Jewel-toned buttons with glow effects.
6. Classical serif typography.
7. Gothic ornamental SVG accents.

## Interaction Rules

- Default state: luminous, geometric, jewel-toned.
- Hover: panel glow intensifies (backlight brightens).
  - `hover:shadow-[0_0_30px_rgba(26,58,138,0.6)] transition-all duration-300`.
- Active: `active:shadow-[0_0_10px_rgba(26,58,138,0.3)]` (glow dims — pressed).
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#f5d547] focus:ring-offset-2`.
- Transitions: `transition-all duration-300` (light changes are smooth and gradual).
- Light shimmer: optional slow animation of backlight intensity (like clouds passing).

## Reusable Tailwind Tokens

- Leaded panel (blue): `bg-[#1a3a8a] border-4 border-black shadow-[0_0_20px_rgba(26,58,138,0.4)]`
- Leaded panel (red): `bg-[#8a1a1a] border-4 border-black shadow-[0_0_20px_rgba(138,26,26,0.4)]`
- Leaded panel (gold): `bg-[#f5d547] border-4 border-black shadow-[0_0_20px_rgba(245,213,71,0.4)]`
- Rose window: conic-gradient of alternating jewel tones with `rounded-full border-4 border-black`.
- Gothic arch: `border-radius: 50% 50% 0 0 / 30% 30% 0 0`.
- Light ray: `bg-gradient-to-b from-[#f5d547]/10 to-transparent`.
- Stained glass button: `bg-[#8a1a1a] text-[#f5d547] font-serif font-bold uppercase border-4 border-black shadow-[0_0_15px_rgba(138,26,26,0.3)]`

## Quality Checklist (must pass)

- Color panels are separated by thick black leading (`border-4 border-black`).
- Colors are jewel-toned and luminous (deep, saturated, glowing).
- Each panel has a backlit glow effect (colored shadow).
- At least one geometric tracery pattern (rose window, trefoil, arch).
- Background is dark (cathedral interior — deep navy or black).
- Typography is classical serif (no sans-serif for primary text).
- Segmentation uses CSS Grid or clip-path to create distinct color fields.
- At least one Gothic architectural ornament.
- Light appears to pass through the panels (glow/shadow effect).
- The aesthetic reads as a stained glass cathedral window.

## Anti-Patterns

- Thin borders (stained glass requires THICK black leading — `border-4` minimum).
- Muted or pastel colors (stained glass is jewel-toned and luminous).
- Missing the glow effect (panels must look backlit, not flat).
- Sans-serif typography (stained glass is classical serif).
- Light backgrounds (stained glass is viewed against dark interiors).
- Missing geometric patterns (roses, arches, trefoils are essential).
- Flat, non-segmented color (the segmentation IS the design).
- Rounded corners on panels (use sharp/angular geometric divisions).
- Modern minimalist layouts (stained glass is geometric and ornate).
- Missing the architectural/Gothic reference (cathedrals are the inspiration).

## Accessibility Considerations

- Jewel tones on dark backgrounds with light text provide good contrast.
- Gold text (`#f5d547`) on red/blue panels must be verified for WCAG AA.
- Black leading (`border-4`) provides strong structural definition for low-vision users.
- Focus states: `focus:ring-2 focus:ring-[#f5d547]` (gold ring visible on dark).
- Glow effects should not blur text readability.
- Geometric SVG ornaments must be `aria-hidden="true"`.
- Rose windows and tracery are decorative — content must be accessible without them.
- Light shimmer animation must respect `prefers-reduced-motion`.
- Touch targets must be adequate despite thick borders (`px-8 py-3` provides sufficient size).
