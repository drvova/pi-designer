---
name: blacksmith-forge-ui
description: Build blacksmith forge UI components (anvil surface, hammer spark, glowing iron, coal bed, quench bucket, leather apron, tongs grip) with forged metal textures, spark animations, and the elemental power of metalworking. Trigger this skill when the user asks for blacksmith, forge, anvil, hammer, ironworks, metalworking, smithy, armory, wrought iron, quench, spark, or elemental craft interfaces.
---

# Blacksmith Forge UI

Use this skill to design and implement metalworking forge interfaces with hammered anvil surfaces, flying hammer sparks, glowing-hot iron forms, coal bed embers, quench bucket steam, leather apron textures, tongs grip details, and the raw elemental power of shaping metal by fire and force.

## Non-Negotiable Foundations

- Blacksmithing is elemental: fire, iron, force, and water. Every surface bears the marks of its making -- hammer strikes, heat discoloration, wear patterns, forge scale.
- Materials are physical and industrial: forged iron, raw steel, glowing hot metal, leather, coal, water, and stone. Surfaces show use, not perfection.
- Colors are dark and forge-lit: iron blacks, anvil grays, glowing orange-yellow for heat, coal ember red, leather brown, steam white. Light comes from the fire, not ambient.
- Motion is percussive and powerful: hammer strikes send sparks flying, quenching releases steam in bursts, tongs grip and release with force. Animation is impact-driven.
- Typography blends heavy industrial (slab serif, block capitals) with hand-forged character (condensed, uppercase, slight irregularity).
- The aesthetic is raw, heavy, and elemental -- everything looks like it was beaten into shape by force and fire.

## Core Material Recipes

### 1) Anvil Surface (the foundational element)

The signature blacksmith surface: worn forged steel with face marks and edge bevels.

- Background gradient: `bg-gradient-to-br from-[#4a4a4a] via-[#3a3a3a] to-[#2a2a2a]`.
- Wear marks: subtle lighter streaks via `before` pseudo-element with `bg-gradient-to-r from-transparent via-[#5a5a5a]/30 to-transparent skew-x-12`.
- Face highlight: top surface `bg-gradient-to-b from-[#5a5a5a] to-[#3a3a3a]` (lighter top catching forge light).
- Horn gradient: tapered right end with `clip-path: polygon(80% 20%, 100% 50%, 80% 80%, 80% 20%)`.
- Edge bevel: `border-t border-[#5a5a5a] border-b border-[#1a1a1a]`.
- Shadow: `shadow-[0_8px_24px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)]`.
- Hardiness: surface should feel immovable, dense, and permanent.

### 2) Glowing Iron Surface

Hot metal being worked -- radiates light and heat against the dark forge.

- Background gradient: `bg-gradient-to-br from-[#ff6600] via-[#ff8c00] to-[#cc4400]`.
- Heat glow: `shadow-[0_0_24px_rgba(255,102,0,0.6),0_0_60px_rgba(255,102,0,0.3)]`.
- Scale texture: subtle dark patches `before` pseudo-element with scattered `bg-[#2a2a2a]/20` spots.
- Edge cooling: gradient to darker at edges `bg-gradient-to-t from-[#8a3300] to-transparent`.
- Internal glow: `shadow-[inset_0_0_20px_rgba(255,204,0,0.3),inset_0_0_40px_rgba(255,102,0,0.15)]`.
- Heat distortion: optional shimmer overlay on hottest regions.

### 3) Hammer Spark Animation

Small bright particles flying outward from impact point -- the signature forge animation.

```css
@keyframes sparkFly {
  0% { transform: translate(0, 0) scale(1); opacity: 1; }
  40% { opacity: 0.9; }
  100% { transform: translate(var(--spark-x, 40px), var(--spark-y, -30px)) scale(0); opacity: 0; }
}
.spark {
  animation: sparkFly 0.6s ease-out forwards;
}
```

Spark particle element:
```html
<div class="spark absolute w-1 h-1 rounded-full bg-[#ffcc00]
  shadow-[0_0_4px_#ffcc00,0_0_8px_rgba(255,204,0,0.6)]"
  style="--spark-x: 40px; --spark-y: -30px;">
</div>
```

Burst pattern: 8-12 sparks with randomized `--spark-x` and `--spark-y` values via inline styles or CSS custom properties, triggered on click/interaction.

### 4) Coal Bed Surface

The forge fire bed -- dark textured surface with red-orange ember glow underneath.

- Base: `bg-[#1a1a1a]` (coal black).
- Ember glow: `bg-[radial-gradient(circle_at_50%_60%,rgba(196,48,16,0.4)_0%,rgba(196,48,16,0.1)_40%,transparent_70%)]`.
- Texture: scattered dark lumps via repeating radial gradients at varied positions.
- Edge fade: darker at perimeter, brighter at center where fire is hottest.
- Optional flicker: subtle opacity animation on ember glow (0.8-1.0 cycle, 2s).
- Heat rise: gradient from bottom (bright ember) to top (dark coal) `bg-gradient-to-t from-[#c43010]/30 via-[#1a1a1a] to-[#1a1a1a]`.

### 5) Quench Bucket

The water vessel for cooling hot metal -- metal cylinder with steam effect.

- Bucket body: `bg-gradient-to-b from-[#4a4a4a] via-[#3a3a3a] to-[#2a2a2a] rounded-b-lg`.
- Metal band: `h-2 bg-gradient-to-b from-[#5a5a5a] to-[#3a3a3a]` at top and middle.
- Water surface: `bg-[#1a3a4a]/80` inside the bucket opening.
- Steam effect: rising white translucent wisps above the bucket.

```css
@keyframes steamRise {
  0% { transform: translateY(0) scaleX(1); opacity: 0.6; }
  50% { transform: translateY(-15px) scaleX(1.3); opacity: 0.3; }
  100% { transform: translateY(-30px) scaleX(0.8); opacity: 0; }
}
.steam-wisp {
  animation: steamRise 2s ease-out infinite;
}
```

Steam wisps: 3-4 elements with staggered delays, each a small `bg-white/30 rounded-full blur-sm` shape.

### 6) Leather Apron Texture

The worn leather apron -- brown surface with creases and tool marks.

- Base: `bg-[#6a4a2a]` (aged leather brown).
- Creases: lighter lines via `before` pseudo-element with `bg-gradient-to-r from-[#7a5a3a]/40 to-transparent`.
- Darker edges: `bg-gradient-to-b from-[#5a3a1a] via-[#6a4a2a] to-[#4a3a1a]`.
- Wear spots: lighter patches `bg-[#7a5a3a]/20` at random positions.
- Border: `border-2 border-[#4a3a1a]`.
- Texture overlay: subtle noise pattern at `opacity-[0.08]`.
- Stitching: dashed border on one edge `border-dashed border-[#8a6a4a]`.

### 7) Tongs Grip SVG

The forging tool -- a long-handled gripping instrument for holding hot metal.

- Handle: dark metal rod `h-1.5 bg-gradient-to-b from-[#5a5a5a] to-[#3a3a3a] rounded-full`.
- Length: `w-full` or proportional.
- Jaw: forked end SVG with two curved prongs gripping inward.
- Grip wraps: dark leather bands `w-3 h-4 bg-[#4a3a1a] rounded-sm` at intervals on the handle.
- Pivot point: small rivet `w-3 h-3 rounded-full bg-[#6a6a6a] border border-[#4a4a4a]`.

### 8) Hammer Head Element

The forging hammer -- dense metal head on a handle.

- Head: `bg-gradient-to-b from-[#5a5a5a] via-[#4a4a4a] to-[#3a3a3a] rounded-sm`.
- Face (striking surface): lighter `bg-[#6a6a6a]` on the bottom edge.
- Handle: `bg-[#6a4a2a]` (wood/leather wrapped) extending downward.
- Impact animation: on click, hammer translates down and spark burst triggers.

```css
@keyframes hammerStrike {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  40% { transform: translateY(8px) rotate(-2deg); }
  50% { transform: translateY(0) rotate(0deg); }
}
.hammer-strike {
  animation: hammerStrike 0.3s ease-in;
}
```

## Color Palette System

### Core Blacksmith Palette

| Color | Hex | Material | Role |
|---|---|---|---|
| Iron Dark | `#2a2a2a` | Raw iron, deep forge | Primary background |
| Anvil Face | `#4a4a4a` | Worn anvil steel | Elevated surfaces, panels |
| Anvil Highlight | `#6a6a6a` | Polished anvil edge | Highlights, borders |
| Glowing Hot | `#ff6600` | Hot iron at forging temp | Primary accent, active states |
| Glowing Core | `#ffcc00` | White-hot iron center | Hottest highlights, sparks |
| Coal Black | `#1a1a1a` | Coal bed, deep shadow | Deepest background |
| Coal Ember | `#c43010` | Red coal embers | Secondary heat, warnings |
| Leather Brown | `#6a4a2a` | Aged leather apron | Warm accent, containers |
| Leather Dark | `#4a3a1a` | Worn leather creases | Borders, leather details |
| Wood Handle | `#8a6a4a` | Hammer/tongs handle | Warm neutral, secondary |
| Steam White | `rgba(255,255,255,0.4)` | Quench steam, overlays | Frosted panels, overlays |
| Spark Yellow | `#ffcc00` | Flying sparks | Flash accents, notifications |
| Forge Red | `#8a2200` | Deep forge heat | Danger states, deep heat |
| Scale Dark | `#333` | Forge scale on iron | Subtle texture overlays |

Rules: The palette is dark and forge-lit. Iron and anvil grays dominate. Heat comes from glowing elements (orange-yellow), not ambient light. Leather brown is the warm organic accent. Steam white appears only as translucent overlay. The palette should feel like standing near a working forge in a dark shop.

## Typography Recommendations

Blacksmith forge typography is heavy, industrial, and hand-hewn:

- **Display headings:** Oswald, Anton, or Impact (heavy condensed, all-caps for stamping/branding feel).
- **Alternative display:** Bebas Neue, Teko, or Archivo Black (industrial weight).
- **Body:** Roboto Condensed, Barlow, or Inter (clean condensed sans for readability at weight).
- **Labels/measurements:** JetBrains Mono, Fira Code, or IBM Plex Mono (monospace for dimensions, temperatures, alloy specs).
- **Hand-forged accent:** Permanent Marker, Caveat Brush, or Satisfy (handwritten for artisan signatures, maker marks).
- The MIX of heavy condensed industrial with monospace precision creates the blacksmith tension -- raw power meeting measured craft.

## Component Architecture Pattern

1. Coal-dark background (#1a1a1a) with forge glow at focal points.
2. Anvil-surface panels with wear marks and beveled edges.
3. Glowing iron accents for primary actions and heat emphasis.
4. Coal bed sections with ember underglow.
5. Leather apron containers for secondary content.
6. Spark animation bursts on interaction.
7. Hammer/tongs tool elements for decorative and functional roles.
8. Quench bucket steam for transition and reveal effects.

## Interaction Rules

- Default state: dark, heavy, industrial -- the forge at rest between strikes.
- Hover: iron surface brightens slightly (`hover:brightness-110 hover:shadow-[0_0_16px_rgba(255,102,0,0.3)]`), suggesting latent heat.
- Active: hammer strike -- translate down 2px with spark burst (`active:translate-y-px active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]`).
- Focus: ember glow ring (`focus:ring-2 focus:ring-[#c43010] focus:ring-offset-2 focus:ring-offset-[#1a1a1a]`).
- Transitions: `transition-all duration-150` (fast, percussive -- like a hammer blow, not a gentle glide).
- Spark burst: triggered on primary button clicks and forge interactions.
- Quench: content dismissal triggers steam-burst animation (elements dissolve upward with steam wisps).
- Impact: elements that appear do so with a slight downward slam (translate from -4px with bounce).

## Reusable Tailwind Tokens

- Anvil surface: `bg-gradient-to-br from-[#4a4a4a] via-[#3a3a3a] to-[#2a2a2a] border-t border-[#5a5a5a] border-b border-[#1a1a1a] shadow-[0_8px_24px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)]`
- Glowing iron: `bg-gradient-to-br from-[#ff6600] via-[#ff8c00] to-[#cc4400] shadow-[0_0_24px_rgba(255,102,0,0.6),0_0_60px_rgba(255,102,0,0.3)]`
- Coal bed: `bg-[#1a1a1a] bg-[radial-gradient(circle_at_50%_60%,rgba(196,48,16,0.4)_0%,rgba(196,48,16,0.1)_40%,transparent_70%)]`
- Forge button: `bg-gradient-to-b from-[#ff6600] to-[#cc4400] text-[#1a1a1a] font-bold uppercase tracking-wider shadow-[0_3px_0_#8a2200,inset_0_1px_0_rgba(255,204,0,0.3)]`
- Forge button hover: `hover:from-[#ff8c00] hover:to-[#ff6600] hover:shadow-[0_4px_16px_rgba(255,102,0,0.5)]`
- Leather panel: `bg-[#6a4a2a] border-2 border-[#4a3a1a] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.5)]`
- Steam overlay: `bg-white/[0.06] backdrop-blur-md border border-white/[0.10] shadow-[0_8px_32px_rgba(0,0,0,0.4)]`
- Spark particle: `w-1 h-1 rounded-full bg-[#ffcc00] shadow-[0_0_4px_#ffcc00,0_0_8px_rgba(255,204,0,0.6)]`
- Coal ember accent: `text-[#c43010] [text-shadow:0_0_6px_rgba(196,48,16,0.4)]`
- Forge divider: `h-px bg-gradient-to-r from-transparent via-[#4a4a4a] to-transparent`
- Hammer handle: `bg-gradient-to-b from-[#6a4a2a] to-[#4a3a1a] rounded-sm`
- Hot label: `bg-[#ff6600]/10 text-[#ff6600] border border-[#ff6600]/30 uppercase text-xs font-bold tracking-wider`

## Quality Checklist (must pass)

- Primary surfaces use anvil steel gradients with wear marks and beveled edges.
- Glowing iron elements provide the main accent color (orange-yellow).
- Background is coal-dark with ember glow at focal points, never pure black.
- Spark animation appears on primary interactions (click, submit, confirm).
- Leather texture elements appear for containers or secondary surfaces.
- Typography is heavy, condensed, and industrial -- uppercase for headings.
- Shadows are deep and forge-lit (dark with warm ember component).
- At least one tool element (hammer, tongs, anvil silhouette) appears as decoration.
- Interactions are percussive (fast transitions, impact animations).
- The aesthetic reads as a working blacksmith forge -- raw, powerful, and elemental.

## Anti-Patterns

- Light or bright backgrounds (blacksmith forge is dark -- the only light comes from fire and hot metal).
- Smooth, slow, graceful animations (forge motion is percussive and impact-driven).
- Thin, delicate typography (blacksmith type is heavy, condensed, and bold).
- Colorful or pastel palettes (the palette is iron-dark with molten accents).
- Pristine, clean surfaces (everything should show wear, scale, and forge marks).
- Soft, rounded corners everywhere (forge elements have hard edges and angular forms).
- Modern glassmorphism or transparency (forge surfaces are opaque and dense).
- Missing spark or heat effects (the forge is always active near the work).
- Cool blue/green as primary colors (heat is orange-yellow-red, not cool).
- Gentle hover transitions (forge interactions are immediate and forceful).
- Lightweight shadows (everything in the forge has massive weight and presence).
- Missing leather, coal, or tool textures (the material palette must be complete).

## Accessibility Considerations

- Glowing orange text on dark backgrounds provides strong contrast -- verify WCAG AA minimum (4.5:1).
- Spark and impact animations must respect `prefers-reduced-motion` (disable sparks, reduce to static indicators).
- Hammer strike and impact animations must not trigger vestibular issues (limit scale transforms, keep motion small).
- Focus states must be visible against both dark iron and glowing backgrounds (`focus:ring-2 focus:ring-[#c43010] focus:ring-offset-2`).
- Decorative spark effects, steam wisps, and tool silhouettes must be `aria-hidden="true"`.
- Coal ember and glowing iron color indicators must not be the sole way to convey state -- add text or icons.
- Touch targets must be minimum 44x44px despite heavy industrial styling.
- Spark burst animation must not obscure underlying text or interactive elements.
- Contrast between leather brown text and leather brown background must be verified -- use dark text on light leather or light text on dark leather, never similar values.
- High-contrast mode: forge elements should remain distinguishable when glow effects are removed.
