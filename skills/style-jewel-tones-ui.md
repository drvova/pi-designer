---
name: jewel-tones-ui
description: Build jewel tones UI components (ruby surface, emerald glow, sapphire depth, amethyst sparkle, gold filigree, diamond facet, onyx base) with rich saturated gem colors, metallic accents, and the luxurious depth of precious stones. Trigger this skill when the user asks for jewel tones, gem-inspired design, luxury palette, precious stone UI, gemstone aesthetics, royal rich colors, or opulent gem-colored interfaces.
---

# Jewel Tones UI

Use this skill to design and implement rich, luxurious, gem-inspired interfaces with ruby surfaces, emerald glows, sapphire depths, amethyst sparkles, gold filigree accents, and the deep saturated beauty of precious stones.

## Non-Negotiable Foundations

- Jewel tones evoke luxury, rarity, and concentrated beauty: deep rubies, vivid emeralds, royal sapphires, luminous amethysts, radiant gold, and pristine diamonds.
- Colors are highly saturated and deep, never muted or pastel. Jewel tones are gemstones — concentrated, rich, and luminous from within.
- Surfaces have depth and inner light: gems glow from within, not flatly lit from outside. Every surface should feel like light passes through it.
- Typography is refined and high-contrast: elegant serifs with gold or diamond-white accents.
- Borders and dividers use gold filigree or fine metallic lines — thin, precise, ornamental.
- The mood is opulent, precious, and refined — the opposite of casual, muted, or utilitarian.
- Metallic accents (gold, platinum, rose gold) are structural, not decorative — they define edges, frame content, and create hierarchy.

## Core Material Recipes

### 1) Ruby Red Surface

Deep saturated red gradient with inner luminosity.

- Background: `bg-[#8a1a2a]` (deep ruby base).
- Inner glow: radial gradient at center at `opacity-[0.15]` with `#d42a4a` for gem luminosity.
- Border: `border border-[#c42040]` (ruby facet edge).
- Shadow: `shadow-[0_4px_20px_rgba(140,20,40,0.25)]` (ruby glow).
- Full: `bg-[radial-gradient(ellipse_at_center,#a02030_0%,#8a1a2a_70%)] border border-[#c42040] shadow-[0_4px_20px_rgba(140,20,40,0.25)] p-6 rounded-xl`

### 2) Emerald Glow Panel

Vivid green with inner light, like a polished emerald cabochon.

- Background: `bg-[#1a6a3a]` (deep emerald).
- Inner glow: radial gradient at `opacity-[0.12]` with `#2aaa5a` for gem luminosity.
- Border: `border border-[#2a8a4a]` (emerald facet).
- Shadow: `shadow-[0_4px_20px_rgba(30,120,60,0.2)]` (green gem glow).
- Full: `bg-[radial-gradient(ellipse_at_center,#2a8a4a_0%,#1a6a3a_70%)] border border-[#2a8a4a] shadow-[0_4px_20px_rgba(30,120,60,0.2)] p-6 rounded-xl text-white`

### 3) Sapphire Depth Surface

Deep blue with perceived depth, like looking into a sapphire.

- Background: `bg-[#1a3a7a]` (deep sapphire).
- Depth gradient: multi-stop with darker edges and lighter center.
- `bg-[radial-gradient(ellipse_at_center,#2a5aaa_0%,#1a3a7a_60%,#0a2a5a_100%)]`.
- Border: `border border-[#2a5aaa]` (sapphire facet).
- Shadow: `shadow-[0_4px_20px_rgba(20,50,140,0.25)]` (blue gem glow).
- Full: `bg-[radial-gradient(ellipse_at_center,#2a5aaa_0%,#1a3a7a_60%,#0a2a5a_100%)] border border-[#2a5aaa] shadow-[0_4px_20px_rgba(20,50,140,0.25)] p-6 rounded-xl text-white`

### 4) Amethyst Sparkle Surface

Rich purple with light-point highlights, like an amethyst cluster.

- Background: `bg-[#6a2a8a]` (deep amethyst).
- Sparkle points: small radial gradients at scattered positions at `opacity-[0.3]` using `#aa6acc`.
- Border: `border border-[#8a4aaa]` (amethyst facet).
- Shadow: `shadow-[0_4px_20px_rgba(120,40,160,0.2)]` (purple gem glow).
- Full: `bg-[radial-gradient(ellipse_at_center,#7a3aaa_0%,#6a2a8a_70%)] border border-[#8a4aaa] shadow-[0_4px_20px_rgba(120,40,160,0.2)] p-6 rounded-xl text-white`

### 5) Gold Filigree Ornament

Decorative metallic gold element for borders, dividers, and accents.

- Line: `h-px bg-gradient-to-r from-transparent via-[#c4a043] to-transparent`.
- Corner flourish: SVG curl using `#c4a043` stroke at `opacity-[0.6]`.
- Border accent: `border border-[#c4a043]` with `shadow-[0_0_8px_rgba(196,160,67,0.2)]`.
- Full divider: `h-px bg-gradient-to-r from-transparent via-[#c4a043] to-transparent my-6`.
- Full ornament frame: `border border-[#c4a043] shadow-[0_0_8px_rgba(196,160,67,0.2)] p-6 rounded-lg bg-[#0a0a0a]`

### 6) Diamond Facet Highlight

Geometric angular highlight block for premium badges or feature callouts.

- Background: linear gradient angled at 135deg with white-to-transparent.
- `bg-[linear-gradient(135deg,rgba(240,240,255,0.15)_0%,transparent_50%,rgba(240,240,255,0.08)_100%)]`.
- Border: `border border-[rgba(240,240,255,0.2)]`.
- Inner sparkle: small `#f0f0ff` radial dot at `opacity-[0.4]`.
- Full: `bg-[linear-gradient(135deg,rgba(240,240,255,0.15)_0%,transparent_50%,rgba(240,240,255,0.08)_100%)] border border-[rgba(240,240,255,0.2)] p-5 rounded-lg backdrop-blur-sm`

### 7) Onyx Base Surface

Deep glossy black for primary backgrounds and grounding.

- Background: `bg-[#0a0a0a]` (near-black onyx).
- Subtle gloss: linear gradient top-to-bottom `from-[#1a1a1a] to-[#0a0a0a]` for polished stone sheen.
- Border: `border border-[#2a2a2a]` (faint edge).
- Full: `bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-[#2a2a2a] p-6 rounded-xl`

### 8) Pearl Surface

Luminous off-white with iridescent shimmer for light cards on dark backgrounds.

- Background: `bg-[#f0ece4]` (warm pearl).
- Shimmer: subtle radial gradient from `#f8f4f0` center to `#e8e0d8` edge.
- Border: `border border-[#d8d0c8]`.
- Full: `bg-[radial-gradient(ellipse_at_center,#f8f4f0_0%,#f0ece4_60%,#e8e0d8_100%)] border border-[#d8d0c8] p-6 rounded-xl`

## Color Palette System

### Core Jewel Palette

| Color | Hex | Role |
|---|---|---|
| Ruby | `#8a1a2a` | Primary red accent, urgency, passion |
| Emerald | `#1a6a3a` | Success, nature, vitality |
| Sapphire | `#1a3a7a` | Depth, trust, intelligence |
| Amethyst | `#6a2a8a` | Creativity, mystery, premium |
| Gold | `#c4a043` | Luxury accent, metallic frame |
| Diamond | `#f0f0ff` | Light highlights, sparkle |
| Onyx | `#0a0a0a` | Base background, grounding |
| Pearl | `#f0ece4` | Light card surface, contrast |

### Extended Gem Tones

| Color | Hex | Role |
|---|---|---|
| Ruby Glow | `#d42a4a` | Ruby highlights, hover states |
| Emerald Glow | `#2aaa5a` | Emerald highlights, active states |
| Sapphire Glow | `#2a5aaa` | Sapphire highlights, links |
| Amethyst Glow | `#aa6acc` | Amethyst sparkle points |
| Rose Gold | `#b47a6a` | Warm metallic alternative |
| Platinum | `#c0c0cc` | Cool metallic, secondary frames |
| Dark Ruby | `#5a0a1a` | Deep ruby for dark mode text |
| Dark Emerald | `#0a4a2a` | Deep emerald for dark mode text |

Rules: All colors should be deeply saturated and luminous. No muted, pastel, or desaturated hues — jewel tones are concentrated. The palette should feel like opening a jeweler's display case under focused light. Metallics (gold, platinum, rose gold) are always warm and luminous, never flat or gray.

## Typography Recommendations

Jewel tones typography is refined, high-contrast, and regal — like inscriptions on precious metal.

- **Display headings:** Cinzel, Cormorant, or Playfair Display (elegant serif with royal character).
- **Body:** Inter, Source Sans 3, or Lato (clean, high-readability sans-serif for body text against rich backgrounds).
- **Accent/gold:** Cinzel Decorative or Cormorant SC (all-caps ornamental for gold-framed titles).
- **Monospace:** JetBrains Mono or Fira Code (for data that needs precision and clarity).
- Display headings may use letter-spacing: `tracking-wider` or `tracking-widest` for that engraved feel.
- Gold or diamond-white text on dark gem backgrounds for headings; white or pearl on gem for body.
- Avoid rounded, casual, or handwritten typefaces. Jewel tones demand refinement and precision.
- Font weights 600+ for headings to convey substance and importance.

## Component Architecture Pattern

1. Onyx base background with subtle polished gloss gradient.
2. Gem-colored sections (ruby, emerald, sapphire, amethyst) as content blocks.
3. Gold filigree dividers and border accents for hierarchy.
4. Diamond facet highlights for premium or featured elements.
5. Pearl cards on onyx backgrounds for content contrast.
6. Refined serif headings with gold or diamond-white text.
7. Metallic shadow glows that match the gem color of each section.
8. Onyx for primary UI, gem colors for sections, gold for structure, diamond for light.

## Interaction Rules

- Default state: opulent, deep, luminous.
- Hover: gem glow intensifies with brighter inner gradient and expanded shadow.
  - `hover:shadow-[0_8px_32px_rgba(140,20,40,0.35)] hover:brightness-110 transition-all duration-300`.
- Active: `active:scale-[0.98] active:shadow-[0_2px_12px_rgba(140,20,40,0.2)]` (press into the gem).
- Focus: `focus:ring-2 focus:ring-[#c4a043] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]` (gold ring on onyx).
- Transitions: `transition-all duration-300 ease-out` (smooth, precise, luxurious).
- No bouncy, playful, or casual motion. Everything feels precise, measured, and valuable.
- Scroll-triggered reveals should feel like light catching a gem facet — not explosive, but luminous.
- Loading states should shimmer with gold or diamond light, not generic spinners.

## Reusable Tailwind Tokens

- Onyx base: `bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] p-6 rounded-xl`
- Ruby card: `bg-[radial-gradient(ellipse_at_center,#a02030_0%,#8a1a2a_70%)] border border-[#c42040] shadow-[0_4px_20px_rgba(140,20,40,0.25)] p-6 rounded-xl`
- Emerald card: `bg-[radial-gradient(ellipse_at_center,#2a8a4a_0%,#1a6a3a_70%)] border border-[#2a8a4a] shadow-[0_4px_20px_rgba(30,120,60,0.2)] p-6 rounded-xl text-white`
- Sapphire card: `bg-[radial-gradient(ellipse_at_center,#2a5aaa_0%,#1a3a7a_60%,#0a2a5a_100%)] border border-[#2a5aaa] shadow-[0_4px_20px_rgba(20,50,140,0.25)] p-6 rounded-xl text-white`
- Amethyst card: `bg-[radial-gradient(ellipse_at_center,#7a3aaa_0%,#6a2a8a_70%)] border border-[#8a4aaa] shadow-[0_4px_20px_rgba(120,40,160,0.2)] p-6 rounded-xl text-white`
- Pearl card: `bg-[radial-gradient(ellipse_at_center,#f8f4f0_0%,#f0ece4_60%,#e8e0d8_100%)] border border-[#d8d0c8] p-6 rounded-xl`
- Gold divider: `h-px bg-gradient-to-r from-transparent via-[#c4a043] to-transparent my-6`
- Gold frame: `border border-[#c4a043] shadow-[0_0_8px_rgba(196,160,67,0.2)] rounded-lg`
- Diamond facet: `bg-[linear-gradient(135deg,rgba(240,240,255,0.15)_0%,transparent_50%,rgba(240,240,255,0.08)_100%)] border border-[rgba(240,240,255,0.2)] rounded-lg backdrop-blur-sm`
- Ruby button: `bg-[#8a1a2a] text-white font-semibold rounded-lg px-6 py-3 border border-[#c42040] hover:bg-[#a02030] transition-colors`
- Emerald button: `bg-[#1a6a3a] text-white font-semibold rounded-lg px-6 py-3 border border-[#2a8a4a] hover:bg-[#2a8a4a] transition-colors`
- Sapphire button: `bg-[#1a3a7a] text-white font-semibold rounded-lg px-6 py-3 border border-[#2a5aaa] hover:bg-[#2a5aaa] transition-colors`
- Gold accent text: `text-[#c4a043]`
- Diamond text: `text-[#f0f0ff]`
- Onyx text bg: `text-[#f0ece4]`

## Quality Checklist (must pass)

- Color palette is deeply saturated and luminous (ruby, emerald, sapphire, amethyst, gold — no muted or pastel tones).
- Backgrounds are onyx `#0a0a0a` or gem-colored (never pure white or light gray as primary background).
- Gold `#c4a043` appears as a structural accent (borders, dividers, frames) — not just decorative.
- Each gem surface has an inner glow or radial gradient (gems must feel luminous, not flat).
- Typography uses refined serifs for display and clean sans-serifs for body.
- Metallic shadows match the gem color (ruby glow for ruby, emerald glow for emerald).
- The aesthetic feels luxurious, precious, and refined.
- At least one diamond facet or sparkle element for premium emphasis.
- Pearl `#f0ece4` or diamond `#f0f0ff` is used for light-on-dark contrast.
- Motion is precise and measured, not bouncy or playful.
- The mood reads as opulent concentration of color and light.
- Gold filigree dividers separate major content sections.

## Anti-Patterns

- Muted, pastel, or desaturated color palettes (jewel tones are concentrated and saturated).
- White or light gray primary backgrounds (jewel tones live on dark/onyx backgrounds).
- Flat, unlit surfaces without inner glow or radial gradient (gems must feel luminous).
- Rounded, casual, or handwritten typefaces (jewel tones demand refined serif precision).
- Bouncy, playful, or whimsical animations (motion should be precise and measured).
- Utilitarian or minimalist aesthetic (jewel tones are opulent and layered).
- Missing metallic accents (gold, platinum, or rose gold must be present as structural elements).
- Cool grays as primary UI color (onyx `#0a0a0a` is the neutral, not gray).
- Thin or hairline typography (jewel tones need weight and presence).
- Flat borders without metallic sheen (borders should glow or shimmer).
- Pastel or light-colored gem imitations (amethyst is `#6a2a8a`, not lavender; ruby is `#8a1a2a`, not pink).
- Transparent or glassmorphism effects without gem-colored base (glass alone is not jewel tones).

## Accessibility Considerations

- Onyx `#0a0a0a` with pearl `#f0ece4` text provides excellent contrast (ratio approx 17.5:1 — exceeds WCAG AAA).
- Gold `#c4a043` on onyx `#0a0a0a` passes WCAG AA for normal text (ratio approx 7.1:1).
- Ruby `#8a1a2a` text on onyx fails for small text — use ruby as background only, with white text on top (ratio approx 12.8:1).
- Emerald `#1a6a3a` on onyx with white text passes WCAG AA (ratio approx 5.5:1 for large text).
- Sapphire `#1a3a7a` with white text passes WCAG AA (ratio approx 8.2:1).
- Amethyst `#6a2a8a` with white text passes WCAG AA for large text (ratio approx 5.1:1) — use 18px+ or bold 14px+.
- Diamond `#f0f0ff` on onyx provides maximum contrast — safe for any text size.
- Gold filigree dividers must be thick enough (1px minimum) to be perceivable or paired with `aria-label`.
- Decorative gem sparkles and facet effects must have `aria-hidden="true"`.
- Focus states use gold ring `focus:ring-[#c4a043]` — visible against all gem backgrounds.
- All animations must respect `prefers-reduced-motion` — disable glow pulses and shimmer effects.
- Touch targets must be at least 44x44px despite the refined, precise styling.
- Gem-colored sections need sufficient contrast between adjacent sections (e.g., ruby next to emerald may vibrate — use onyx spacers between them).
- High saturation colors can cause eye strain at large sizes — limit full-saturation gem backgrounds to moderate-sized sections, not full-page fills.
- Pearl `#f0ece4` cards on onyx background provide the safest content area for long-form reading.
