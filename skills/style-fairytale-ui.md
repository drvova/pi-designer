---
name: fairytale-ui
description: Build fairytale/storybook UI components (enchanted forest atmosphere, glowing magical elements, whimsical illustrations, storybook page textures, fairy-tale castles, pixie dust, talking-animal friends) with soft glowing borders, hand-illustrated decorations, and the wonder of children's fantasy literature. Trigger this skill when the user asks for fairytale design, storybook UI, enchanted forest, fantasy children's, magic forest, or whimsical fairy interfaces.
---

# Fairytale / Storybook UI

Use this skill to design and implementation magical, whimsical interfaces inspired by children's fairy tales and storybooks: enchanted forest atmospheres, glowing magical accents, hand-drawn illustrations, aged storybook paper textures, fairy-tale castle silhouettes, and the sense of wonder and possibility.

## Core Material Recipes

### 1) Storybook Page Surface

Aged storybook paper with gilded edges.

- `bg-[#faf2e0]` (warm storybook paper).
- Aging: `bg-[radial-gradient(ellipse_at_30%_20%,rgba(200,170,100,0.05)_0%,transparent_40%)]`.
- Gold gilded edge: `shadow-[inset_0_0_0_2px_rgba(201,168,76,0.15)]` (thin gold page edge).

### 2) Enchanted Forest Panel

Dark magical forest backdrop.

- `bg-gradient-to-b from-[#1a3a2a] to-[#0a1a10]` (deep magical forest).
- Firefly glow: `bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,180,0.1)_0%,transparent_8%),radial-gradient(circle_at_70%_50%,rgba(180,255,200,0.08)_0%,transparent_6%)]` (magical floating lights).

### 3) Magic Glow Border

Iridescent fairy-light border.

- `border-2 border-[#ffd700]/30 rounded-2xl shadow-[0_0_15px_rgba(255,215,0,0.15),inset_0_0_10px_rgba(255,215,0,0.05)]`.

### 4) Pixie Dust Particles

Floating magical sparkle animation.

```css
@keyframes sparkle-float {
  0% { transform: translateY(0) scale(0); opacity: 0; }
  20% { transform: translateY(-20px) scale(1); opacity: 1; }
  80% { transform: translateY(-60px) scale(0.8); opacity: 0.6; }
  100% { transform: translateY(-80px) scale(0); opacity: 0; }
}
.pixie-dust {
  width: 4px; height: 4px;
  background: #ffd700;
  border-radius: 50%;
  box-shadow: 0 0 4px rgba(255,215,0,0.6);
  animation: sparkle-float 3s ease-in-out infinite;
}
```

### 5) Castle Silhouette Accent

Fairy-tale castle SVG decoration.

```html
<svg viewBox="0 0 200 80" class="w-full opacity-20">
  <g fill="#4a3a6a">
    <rect x="40" y="40" width="20" height="40"/>
    <polygon points="40,40 50,25 60,40"/>
    <rect x="80" y="25" width="30" height="55"/>
    <polygon points="80,25 95,10 110,25"/>
    <rect x="90" y="5" width="10" height="10"/>
    <rect x="130" y="35" width="20" height="45"/>
    <polygon points="130,35 140,20 150,35"/>
    <rect x="0" y="75" width="200" height="5"/>
  </g>
</svg>
```

### 6) Fairy-Tale Button

Magical glowing button.

- `bg-gradient-to-b from-[#9a6abf] to-[#6a3a9a] text-white font-serif font-medium rounded-full px-8 py-3 border-2 border-[#ffd700]/40 shadow-[0_0_15px_rgba(154,106,191,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,215,0,0.3)] transition-all`.

### 7) Illustrated Decorative Border

Hand-drawn vine/flower border (storybook illustration style).

```html
<svg viewBox="0 0 200 30" class="w-full opacity-40">
  <g stroke="#5a3a1a" stroke-width="1" fill="none">
    <path d="M0,15 Q30,8 60,15 T120,15 T200,15"/>
  </g>
  <g fill="#ff8fa3">
    <circle cx="30" cy="12" r="3"/>
    <circle cx="90" cy="15" r="3"/>
    <circle cx="150" cy="13" r="3"/>
  </g>
  <g fill="#3a8a3a">
    <ellipse cx="15" cy="13" rx="2" ry="1"/>
    <ellipse cx="60" cy="16" rx="2" ry="1"/>
    <ellipse cx="105" cy="14" rx="2" ry="1"/>
    <ellipse cx="175" cy="15" rx="2" ry="1"/>
  </g>
</svg>
```

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Magic Purple | `#9a6abf` | Primary (fairy magic) |
| Deep Purple | `#6a3a9a` | Shadows, depth |
| Gold Magic | `#ffd700` | Sparkles, borders, glow |
| Forest Green | `#1a3a2a` | Enchanted forest |
| Storybook Cream | `#faf2e0` | Page background |
| Rose Pink | `#ff8fa3` | Floral accents |
| Warm Brown | `#5a3a1a` | Illustration outlines |
| Star White | `#ffffff` | Sparkles, stars |

Rules: Purples and golds convey magic. Forest greens provide the enchanted backdrop. Storybook cream is the warm page surface. Everything should feel touched by fairy dust.

## Typography Recommendations

- **Display:** Cormorant, Playfair Display Italic (elegant fantasy serif).
- **Alternative:** Bricolage Grotesque, Fraunces (storybook heading serif).
- **Body:** Lora, Crimson Text (warm readable storybook serif).
- **Labels:** `font-serif italic text-sm tracking-wide` (whimsical storybook labels).
- Typography should feel like it was hand-lettered in a children's fantasy book.

## Reusable Tailwind Tokens

- Storybook page: `bg-[#faf2e0] shadow-[inset_0_0_0_2px_rgba(201,168,76,0.15)]`.
- Enchanted forest: `bg-gradient-to-b from-[#1a3a2a] to-[#0a1a10]` with firefly radial gradients.
- Magic border: `border-2 border-[#ffd700]/30 shadow-[0_0_15px_rgba(255,215,0,0.15)]`.
- Fairy button: `bg-gradient-to-b from-[#9a6abf] to-[#6a3a9a] rounded-full border-2 border-[#ffd700]/40 shadow-[0_0_15px_rgba(154,106,191,0.3)]`.
- Pixie dust: `rounded-full bg-[#ffd700] shadow-[0_0_4px_rgba(255,215,0,0.6)] animate-[sparkle-float_3s]`.

## Quality Checklist

- At least one magical glow effect (gold or purple fairy light).
- At least one storybook-page surface (warm cream with gold edge).
- Pixie dust / sparkle particle animation present.
- At least one enchanted forest dark surface.
- Castle silhouette or fairy-tale illustration accent.
- Hand-drawn illustrated border (vine and flower SVG).
- Color palette includes magic purple + gold + forest green.
- Typography is elegant fantasy serif (italic for whimsy).
- The aesthetic reads as children's fairy tale / enchanted storybook.
- Everything feels magical, wondrous, and full of possibility.

## Anti-Patterns

- Dark horror/gothic atmosphere (fairytale is WONDEROUS, not scary).
- Missing magic/glow effects (the fairy light is the signature element).
- Modern flat clean design (fairytale is illustrated and textured).
- Sans-serif typography (fairytale needs fantasy serif, ideally italic).
- Missing pixie dust/sparkle particles (these create the magical atmosphere).
- Missing the storybook-page texture (the warm aged paper is essential).
- Harsh bright colors (the palette is soft purple + gold + forest green).
- Missing the castle/illustration decorations (storybook imagery is key).
- Sharp angular modern shapes (fairytale is organic and flowing).
- Missing the hand-drawn border (illustrated borders are characteristic).

## Accessibility Considerations

- Storybook cream with dark brown text provides good contrast (verify WCAG AA).
- Dark enchanted forest with white/gold text must be verified.
- Focus states: `focus:ring-2 focus:ring-[#ffd700]/50` (gold magic ring).
- Pixie dust animations must respect `prefers-reduced-motion`.
- Castle and decorative SVGs must be `aria-hidden="true"`.
- Glow effects should not blur text readability.
- Touch targets must be adequate despite rounded magical styling.
