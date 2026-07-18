---
name: maple-sugar-shack-ui
description: Build maple sugar shack UI components (wooden evaporator, sap buckets, snow taffy, cedar smoke, maple leaf, sugar bush, sugar on snow) with warm wood surfaces, amber maple syrup colors, and the sweet tradition of a maple sugar shack. Trigger this skill when the user asks for maple sugar shack UI, syrup shack, sugar bush, wood-fired maple, sap collection, snow taffy, cedar smoke atmosphere, or rustic winter cabin interfaces.
---

# Maple Sugar Shack UI

Use this skill to design and implement warm, handcrafted interfaces rooted in the imagery of a traditional maple sugar shack: wooden evaporators, hanging sap buckets, golden syrup on fresh snow, cedar smoke curling upward, and the sugar bush of tapped maple trees stretching into winter woods.

## Non-Negotiable Foundations

- Maple Sugar Shack UI is texture-driven. Wood grain, metal patina, and snow dust are the material language; foreground content must feel carved, hung, or poured onto these surfaces.
- The palette is warm amber and dark cedar against snow white. Every surface should carry wood warmth or cold snow contrast — never a neutral gray void.
- Wood textures are created with repeating linear-gradient layers simulating grain, not background-image file loads. The grain is the design; content sits on top with carved-legibility contrast.
- Snow surfaces use off-white with subtle cool blue shadows. Pure white reads as clinical; snow-white carries a faint blue cast.
- Cedar smoke is a translucent vertical gradient that wisps upward and dissolves. It is ambient atmosphere, never opaque.
- All interactive elements must feel like objects found in a sugar shack: hand-lettered labels, wooden buttons with burn edges, metal-rimmed display cases.

## Core Material Recipes

### 1) Wooden Evaporator Surface (the foundation)

A warm, grain-textured surface simulating the long flat cooking pan of a wood-fired evaporator. Multiple linear-gradient layers simulate plank grain and heat shimmer.

```css
background:
  repeating-linear-gradient(
    90deg,
    transparent,
    transparent 120px,
    rgba(138,90,26,0.15) 120px,
    rgba(138,90,26,0.15) 122px
  ),
  repeating-linear-gradient(
    0deg,
    transparent,
    transparent 3px,
    rgba(196,128,32,0.06) 3px,
    rgba(196,128,32,0.06) 4px
  ),
  linear-gradient(180deg, #a06820 0%, #8a5a1a 40%, #6a4a2a 100%);
```

Tailwind arbitrary value equivalent:
- `bg-[repeating-linear-gradient(90deg,transparent,transparent_120px,rgba(138,90,26,0.15)_120px,rgba(138,90,26,0.15)_122px),repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(196,128,32,0.06)_3px,rgba(196,128,32,0.06)_4px),linear-gradient(180deg,#a06820,#8a5a1a_40%,#6a4a2a)]`

### 2) Sap Bucket (hanging metal vessel)

A tapered cylindrical bucket with a metal wire handle, rendered as stacked rounded rectangles with a curved top arc for the wire.

```css
bucket-body {
  background: linear-gradient(180deg, #b8b8a8 0%, #9a9a88 60%, #7a7a68 100%);
  border-radius: 4px 4px 12px 12px;
  clip-path: polygon(8% 0%, 92% 0%, 88% 100%, 12% 100%);
  box-shadow: inset 0 -8px 16px rgba(0,0,0,0.25), 0 4px 12px rgba(0,0,0,0.3);
}
bucket-handle {
  border: 3px solid #6a6a58;
  border-bottom: none;
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
}
.bucket-drip {
  background: radial-gradient(ellipse, #c48020 0%, rgba(196,128,32,0.4) 50%, transparent 70%);
}
```

Tailwind approach:
- Bucket body: `w-16 h-20 bg-gradient-to-b from-[#b8b8a8] via-[#9a9a88] to-[#7a7a68] rounded-b-xl shadow-inner`
- Handle: `w-10 h-6 border-2 border-[#6a6a58] border-b-0 rounded-t-full -mt-1`
- Drip: `absolute bottom-0 w-2 h-4 bg-gradient-to-b from-[#c48020] to-transparent rounded-full`

### 3) Snow Taffy (syrup on snow)

A glossy golden pool poured onto a matte snow surface, representing the Quebec tradition of pouring hot syrup on packed snow to make taffy.

```css
snow-base {
  background:
    radial-gradient(ellipse at 60% 40%, rgba(200,220,240,0.4) 0%, transparent 60%),
    linear-gradient(180deg, #f8fcff 0%, #e8eef5 100%);
}
.syrup-pool {
  background: radial-gradient(ellipse at 50% 30%, #e8a820 0%, #c48020 40%, #a06018 100%);
  border-radius: 60% 55% 50% 58% / 50% 60% 50% 55%;
  box-shadow:
    inset 0 -4px 8px rgba(160,96,24,0.6),
    inset 0 2px 6px rgba(255,220,120,0.4),
    0 2px 8px rgba(0,0,0,0.15);
}
```

Tailwind approach:
- Snow: `bg-[radial-gradient(ellipse_at_60%_40%,rgba(200,220,240,0.4),transparent_60%),linear-gradient(180deg,#f8fcff,#e8eef5)]`
- Syrup pool: `w-24 h-16 bg-gradient-to-br from-[#e8a820] via-[#c48020] to-[#a06018] rounded-[60%_55%_50%_58%/50%_60%_50%_55%] shadow-[inset_0_-4px_8px_rgba(160,96,24,0.6),inset_0_2px_6px_rgba(255,220,120,0.4),0_2px_8px_rgba(0,0,0,0.15)]`

### 4) Cedar Smoke (wispy atmospheric)

A translucent vertical column that fades from gray at the base to fully transparent at the top, drifting slightly sideways via animation.

```css
.smoke-column {
  background: linear-gradient(
    180deg,
    rgba(180,170,160,0.3) 0%,
    rgba(160,150,140,0.15) 30%,
    rgba(140,130,120,0.05) 60%,
    transparent 100%
  );
  filter: blur(6px);
  animation: smoke-drift 8s ease-in-out infinite;
}
@keyframes smoke-drift {
  0%, 100% { transform: translateX(0) scaleY(1); opacity: 0.7; }
  33% { transform: translateX(8px) scaleY(1.05); opacity: 0.9; }
  66% { transform: translateX(-5px) scaleY(0.97); opacity: 0.6; }
}
```

Tailwind approach:
- Smoke: `w-12 h-48 bg-gradient-to-t from-[rgba(180,170,160,0.3)] via-[rgba(160,150,140,0.15)] to-transparent blur-md animate-[smoke-drift_8s_ease-in-out_infinite]`

### 5) Maple Leaf SVG (iconic six-pointed leaf)

A single `<svg>` path that renders the recognizable maple leaf silhouette. Use as an inline SVG for color control.

```html
<svg viewBox="0 0 100 120" class="w-10 h-12 fill-current text-[#a03020]">
  <path d="M50 0 L58 25 L80 20 L68 40 L95 50 L70 55 L80 80 L55 68 L50 95 L45 68 L20 80 L30 55 L5 50 L32 40 L20 20 L42 25 Z
           M50 95 L50 120" />
</svg>
```

Tailwind tokens:
- Leaf red: `fill-[#a03020]`, Leaf orange: `fill-[#d06820]`, Leaf gold (autumn): `fill-[#c48020]`
- Size classes: `w-8 h-10` (small), `w-12 h-14` (medium), `w-16 h-20` (large)

### 6) Sugar Bush Backdrop (tapped maple trees)

A repeating pattern of stylized tree silhouettes with small bucket shapes at tap points, layered over a winter sky gradient.

```css
.sugar-bush {
  background:
    linear-gradient(180deg, #c8d0d8 0%, #e0e4e8 60%, #f0f2f5 100%);
}
.tree-silhouette {
  background: #4a3a2a;
  clip-path: polygon(
    50% 0%, 35% 25%, 10% 25%, 30% 45%,
    15% 55%, 40% 55%, 38% 80%, 62% 80%,
    60% 55%, 85% 55%, 70% 45%, 90% 25%,
    65% 25%
  );
}
```

Tailwind approach:
- Sky: `bg-gradient-to-b from-[#c8d0d8] via-[#e0e4e8] to-[#f0f2f5]`
- Tree: `w-20 h-28 bg-[#4a3a2a]` with inline `clip-path` for the silhouette shape

### 7) Sugar on Snow Display

A presentation card that frames the snow taffy experience with a rustic wood border and a visible snow bed inside.

```css
display-frame {
  background: linear-gradient(135deg, #6a4a2a 0%, #5a3a1a 100%);
  border: 3px solid #8a6a3a;
  box-shadow: inset 0 2px 4px rgba(255,255,255,0.1), 0 8px 24px rgba(0,0,0,0.4);
}
```

Tailwind approach:
- Frame: `bg-gradient-to-br from-[#6a4a2a] to-[#5a3a1a] border-2 border-[#8a6a3a] shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),0_8px_24px_rgba(0,0,0,0.4)] rounded-lg p-1`
- Inner snow bed: `bg-[linear-gradient(180deg,#f8fcff,#e8eef5)] rounded-md`

## Color Palette System

### Sugar Shack Heritage

| Token               | Hex       | Role                        | Tailwind Class             |
|----------------------|-----------|-----------------------------|----------------------------|
| maple-amber          | `#c48020` | Primary, syrup, warmth      | `bg-[#c48020]`             |
| maple-dark           | `#8a5a1a` | Wood surfaces, text on snow | `text-[#8a5a1a]`           |
| sap-pale             | `#e8d8a0` | Cream highlights, labels    | `bg-[#e8d8a0]`             |
| snow-white           | `#f8fcff` | Backgrounds, snow fields    | `bg-[#f8fcff]`             |
| cedar-brown          | `#6a4a2a` | Dark wood, deep surfaces    | `bg-[#6a4a2a]`             |
| leaf-red             | `#a03020` | Accent, maple leaf          | `text-[#a03020]`           |
| leaf-orange          | `#d06820` | Secondary accent, autumn    | `bg-[#d06820]`             |
| smoke-gray           | `#b0a8a0` | Smoke, muted elements       | `text-[#b0a8a0]`           |

### Firewood Warmth

| Token               | Hex       | Role                        | Tailwind Class             |
|----------------------|-----------|-----------------------------|----------------------------|
| fire-ember           | `#d04820` | Hot accent, fire glow       | `bg-[#d04820]`             |
| fire-gold            | `#e8a820` | Flame highlight             | `bg-[#e8a820]`             |
| ash-gray             | `#8a8880` | Burnt, desaturated          | `text-[#8a8880]`           |
| bark-dark            | `#3a2a1a` | Near-black wood             | `bg-[#3a2a1a]`             |
| bark-medium          | `#5a4020` | Mid-tone wood grain         | `bg-[#5a4020]`             |
| sap-raw              | `#d8c888` | Uncooked sap color          | `bg-[#d8c888]`             |
| snow-shadow          | `#d0d8e0` | Cool shadow on snow         | `bg-[#d0d8e0]`             |

### Winter Woods

| Token               | Hex       | Role                        | Tailwind Class             |
|----------------------|-----------|-----------------------------|----------------------------|
| winter-sky           | `#c8d0d8` | Overcast winter sky         | `bg-[#c8d0d8]`             |
| pine-dark            | `#2a3a2a` | Evergreen accent            | `bg-[#2a3a2a]`             |
| frost-blue           | `#e0e8f0` | Cold highlights             | `bg-[#e0e8f0]`             |
| wood-light           | `#a07840` | Light plank surface         | `bg-[#a07840]`             |
| syrup-dark           | `#704010` | Reduced, thick syrup        | `bg-[#704010]`             |
| moss                 | `#5a6a40` | Lichen, aged wood accent    | `bg-[#5a6a40]`             |

Rules: choose 3-5 colors per layout. Warm amber and cedar brown should dominate. Snow-white provides breathing room. Leaf-red and leaf-orange are accents only — use sparingly. Smoke-gray stays translucent.

## Typography Recommendations

- Maple Sugar Shack UI favors warm, legible typefaces. Hand-lettered or rustic serif fonts for headings evoke the shack's character. Clean sans-serif for body keeps readability high.
- Recommended heading fonts: **Playfair Display** (warm serif), **Libre Baskerville** (refined rustic), **Merriweather** (readable warmth).
- Recommended body fonts: **Inter** (clean), **Source Sans 3** (neutral warmth), **Lora** (bookish serif for longer text).
- Heading sizes: `text-3xl` to `text-5xl`, `font-bold`, `tracking-tight`, `text-[#3a2a1a]` (bark-dark on snow) or `text-[#f8fcff]` (snow-white on wood).
- Body sizes: `text-base` to `text-lg`, `font-normal`, `text-[#5a4020]` or `text-[#6a4a2a]`.
- Label sizes: `text-xs` to `text-sm`, `font-semibold`, `uppercase`, `tracking-widest`, `text-[#c48020]` (maple-amber).
- On dark wood surfaces, all text inverts to snow-white or sap-pale for contrast.

## Component Architecture Pattern

1. Wooden evaporator surface or sugar bush backdrop (the stage — covers full viewport or card area).
2. Structural wood framing (borders, dividers, and cards use cedar-brown gradients with visible grain texture).
3. Functional content zone (snow-white or sap-pale background for readability of text and controls).
4. Decorative elements (maple leaf accents, smoke wisps, sap bucket icons — positioned absolutely, never obstructing content).
5. Interactive layer (buttons, inputs, and toggles styled as wooden or metal objects with burnished edges).

Layout hierarchy:
- Full-page layouts: sugar bush backdrop at top, wood-framed content area, snow-white footer.
- Card layouts: wood-grain border, inner snow surface, leaf accent in corner.
- Dashboard layouts: warm wood sidebar, snow-white main area, amber accent bars.

## Interaction Rules

- Button hover: warm glow intensification — `hover:shadow-[0_0_16px_rgba(196,128,32,0.4)]` and `hover:bg-[#d08828]`.
- Button active: pressed wood feel — `active:shadow-inner active:translate-y-[1px]`.
- Card hover: slight lift with wood shadow — `hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(106,74,42,0.3)]`.
- Smoke animation: slow, ambient drift at 8-12s loops, respects `prefers-reduced-motion`.
- Sap drip: optional animated drip from bucket — a small amber oval that scales down and fades over 2s.
- Snow sparkle: optional tiny white dots that fade in/out randomly on snow surfaces — use CSS animation with random delays.
- Do not over-animate. The sugar shack is calm, warm, and steady. Animations are slow and atmospheric.

## Reusable Tailwind Tokens

- Wood grain surface: `bg-[repeating-linear-gradient(90deg,transparent,transparent_120px,rgba(138,90,26,0.15)_120px,rgba(138,90,26,0.15)_122px),repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(196,128,32,0.06)_3px,rgba(196,128,32,0.06)_4px),linear-gradient(180deg,#a06820,#8a5a1a_40%,#6a4a2a)]`
- Snow surface: `bg-[linear-gradient(180deg,#f8fcff,#e8eef5)]`
- Wood frame border: `border-2 border-[#8a6a3a] shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]`
- Syrup button: `bg-gradient-to-r from-[#c48020] to-[#a06820] text-[#f8fcff] rounded-lg px-4 py-2 shadow-[0_2px_8px_rgba(196,128,32,0.3)] hover:shadow-[0_0_16px_rgba(196,128,32,0.4)]`
- Leaf accent: `fill-[#a03020]` or `text-[#a03020]`
- Smoke wisps: `bg-gradient-to-t from-[rgba(180,170,160,0.3)] to-transparent blur-md`
- Metal surface (bucket): `bg-gradient-to-b from-[#b8b8a8] to-[#7a7a68]`
- Warm glow: `shadow-[0_0_20px_rgba(196,128,32,0.25)]`
- Text on snow: `text-[#3a2a1a]` or `text-[#5a4020]`
- Text on wood: `text-[#f8fcff]` or `text-[#e8d8a0]`

## Quality Checklist (must pass)

- Background uses wood grain texture or sugar bush backdrop (no flat color fills).
- Palette is warm amber, cedar brown, and snow-white (no cold grays as primary surfaces).
- Foreground content has high contrast against wood or snow surfaces.
- Wood grain texture is created with CSS gradients (not image file loads).
- Snow surfaces carry a faint cool blue tint (not pure white).
- Cedar smoke (if used) is translucent and animates slowly.
- Maple leaf SVG is inline and color-controllable via `fill-current`.
- Buttons and interactive elements feel like physical sugar shack objects.
- `prefers-reduced-motion` disables all smoke, drip, and sparkle animations.
- Color combinations meet WCAG AA contrast ratios.
- Card borders and frames use cedar-brown wood gradients.

## Anti-Patterns

- Flat gray backgrounds (this is a sugar shack, not an office — every surface has warmth or texture).
- Pure white (#ffffff) as a background (snow-white carries a blue tint; pure white is clinical).
- Bright neon or cold blue accents (the palette is warm amber and cedar; cold colors belong only in snow shadows).
- Over-stuffed layouts with no snow-white breathing room (the sugar shack is cozy, not cluttered).
- Smoke that is opaque or fast-moving (smoke is ambient, not a curtain).
- Wood grain as a repeating background-image PNG (use CSS gradients for resolution independence).
- Maple leaf used as a large background watermark (it is an accent, not wallpaper).
- Buttons styled as flat material-design rectangles (buttons are wood-burned or metal-rimmed objects).
- Animations that loop faster than 6 seconds (the sugar shack rhythm is slow and patient).
- Missing `prefers-reduced-motion` support for all animated elements.

## Typography and Density

- Maple Sugar Shack UI favors generous spacing. The content should breathe like the open sugar bush landscape.
- Primary headings: `text-4xl` to `text-5xl`, `font-bold`, `tracking-tight`, warm serif font, `text-[#3a2a1a]`.
- Secondary headings: `text-xl` to `text-2xl`, `font-semibold`, `text-[#6a4a2a]`.
- Body text: `text-base` to `text-lg`, `font-normal`, `text-[#5a4020]` on snow or `text-[#e8d8a0]` on dark wood.
- Labels and metadata: `text-xs`, `font-semibold`, `uppercase`, `tracking-widest`, `text-[#c48020]`.
- Keep line-height generous (`leading-relaxed` to `leading-loose`) — the sugar shack pace is unhurried.
- Card padding: `p-6` to `p-8`. Section spacing: `gap-8` to `gap-12`.

## Accessibility Considerations

- Verify text contrast against both wood-grain and snow backgrounds — grain texture can reduce effective contrast.
- All decorative maple leaf SVGs must have `aria-hidden="true"` or an appropriate `aria-label`.
- Smoke animations must respect `prefers-reduced-motion` and collapse to a static translucent gradient.
- Sap drip animations must respect `prefers-reduced-motion`.
- Do not rely on color alone to distinguish syrup states (cooked vs raw); use labels or icons as well.
- Snow sparkle effects must be decorative only and not convey information.
- Interactive elements on wood surfaces must have visible focus indicators — use `ring-2 ring-[#c48020] ring-offset-2 ring-offset-[#6a4a2a]`.
- Ensure all text on wood-grain backgrounds meets WCAG AA minimum (4.5:1 for body, 3:1 for large text).
- Provide a non-textured fallback for environments where CSS gradients do not render.
- Metal bucket and sap elements must have appropriate `role` and `aria-label` attributes when interactive.
