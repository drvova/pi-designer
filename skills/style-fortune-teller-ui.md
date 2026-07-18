---
name: fortune-teller-ui
description: Build fortune teller UI components (crystal ball divination, tarot card spreads, starry fabric draping, palm reading hands, tea leaf patterns, Ouija board elements, beaded curtain entrance, mystical incense smoke) with crystal ball glow effects, fabric-draped frames, and the mysterious allure of a carnival fortune teller's booth. Trigger this skill when the user asks for fortune teller design, mystic UI, tarot card interface, crystal ball effect, carnival booth, Ouija board, or mystical fortune-telling interfaces.
---

# Fortune Teller UI

Use this skill to design and implement mystical, atmospheric interfaces inspired by a carnival fortune teller's booth: crystal ball divination glows, tarot card spreads, starry velvet draping, beaded curtain dividers, incense smoke wisps, and the hushed神秘 allure of peering into the unknown.

## Core Material Recipes

### 1) Crystal Ball Panel

The signature glowing crystal ball with inner swirling mist.

- `w-48 h-48 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(140,120,200,0.5)_0%,rgba(74,42,106,0.6)_40%,rgba(26,10,42,0.9)_75%,rgba(10,5,20,1)_{100}%)] shadow-[0_0_40px_rgba(74,42,106,0.5),0_0_80px_rgba(74,42,106,0.2),inset_0_0_30px_rgba(140,120,200,0.3)] border-2 border-[#c4a043]/40 relative overflow-hidden`.
- Inner mist swirl: `absolute inset-8 rounded-full bg-[radial-gradient(ellipse_at_50%_50%,rgba(140,120,200,0.3)_0%,transparent_70%)] animate-[pulse_4s_ease-in-out_infinite] blur-sm`.
- Crystal ball base: `w-28 h-6 mx-auto -mt-1 bg-gradient-to-b from-[#c4a043] to-[#8a6e2a] rounded-b-full shadow-[0_2px_8px_rgba(196,160,67,0.3)]`.

### 2) Starry Velvet Fabric Drape

Dark purple fabric background with scattered star points simulating velvet texture.

- `bg-[#1a0a2a] relative overflow-hidden p-8 rounded-lg shadow-[inset_0_0_60px_rgba(26,10,42,0.8)]`.
- Star dots: `before:absolute before:inset-0 before:bg-[radial-gradient(1px_1px_at_20%_15%,rgba(196,160,67,0.6)_0%,transparent_100%),radial-gradient(1px_1px_at_75%_25%,rgba(196,160,67,0.4)_0%,transparent_100%),radial-gradient(1px_1px_at_45%_60%,rgba(196,160,67,0.5)_0%,transparent_100%),radial-gradient(1px_1px_at_10%_80%,rgba(196,160,67,0.3)_0%,transparent_100%),radial-gradient(1px_1px_at_85%_70%,rgba(196,160,67,0.5)_0%,transparent_100%),radial-gradient(1px_1px_at_55%_40%,rgba(196,160,67,0.4)_0%,transparent_100%)] before:pointer-events-none`.
- Drape fold: `after:absolute after:bottom-0 after:left-0 after:right-0 after:h-16 after:bg-gradient-to-t after:from-[#1a0a2a] after:to-transparent after:pointer-events-none`.

### 3) Tarot Card Spread

Individual tarot cards with ornate backs arranged in a spread layout.

- Card back: `w-24 h-40 bg-gradient-to-b from-[#4a2a6a] to-[#2a1a3a] border-2 border-[#c4a043] rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.5)] relative overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(74,42,106,0.4)] transition-all duration-300`.
- Ornate back pattern: `absolute inset-2 border border-[#c4a043]/50 rounded bg-[radial-gradient(circle_at_50%_50%,rgba(196,160,67,0.1)_0%,transparent_60%)]`.
- Center emblem: `absolute inset-0 flex items-center justify-center text-[#c4a043] text-2xl opacity-60`.
- Spread layout: `flex gap-4 items-start [&>div:nth-child(2)]:-mt-8 [&>div:nth-child(3)]:-mt-4 [&>div:nth-child(4)]:mt-0 [&>div:nth-child(5)]:mt-4`.

### 4) Beaded Curtain Divider

Vertical beaded lines creating a semi-transparent curtain divider.

- `relative h-full w-px bg-gradient-to-b from-[#c4a043]/20 to-transparent`.
- Beads: `absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#c4a043] shadow-[0_0_4px_rgba(196,160,67,0.3)]` repeated vertically with varied spacing.
- Full curtain: `flex gap-3 justify-center py-8` containing multiple bead strings, each string `flex flex-col gap-2 items-center` with staggered bead positions using inline `translate-y` offsets.

### 5) Incense Smoke Wisps

Thin curling white lines that drift upward, simulating burning incense.

- Smoke container: `relative h-32 w-full overflow-hidden pointer-events-none`.
- Single wisp: `absolute bottom-0 left-1/2 w-px h-full bg-gradient-to-t from-[#e8d0b8]/40 via-[#e8d0b8]/15 to-transparent blur-[1px] animate-[swirl_6s_ease-in-out_infinite]`.
- Keyframe: `@keyframes swirl { 0%,100% { transform: translateX(0) scaleY(1); } 25% { transform: translateX(8px) scaleY(1.05); } 50% { transform: translateX(-6px) scaleY(0.98); } 75% { transform: translateX(4px) scaleY(1.02); } }`.
- Multiple wisps at different horizontal offsets and animation delays for organic feel.

### 6) Ouija Board Panel

Mystic planchette board with letter grid and yes/no/maybe responses.

- Board surface: `bg-[#1a0a2a] border-4 border-[#c4a043] rounded-xl p-6 shadow-[0_0_20px_rgba(196,160,67,0.15),inset_0_0_30px_rgba(74,42,106,0.3)]`.
- Letter grid: `grid grid-cols-7 gap-2 text-center font-[Cinzel] text-[#c4a043] text-lg [text-shadow:0_0_4px_rgba(196,160,67,0.4)]`.
- Yes/No/Maybe arc: `flex justify-around mt-6 text-[#c4a043] font-[Cinzel] text-sm uppercase tracking-widest`.
- Planchette: `w-12 h-12 bg-[#c4a043]/80 rounded-full border-2 border-[#c4a043] shadow-[0_0_12px_rgba(196,160,67,0.3)]` with pointer window.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Crystal Purple | `#4a2a6a` | Primary crystal ball, card backgrounds |
| Starry Velvet | `#1a0a2a` | Deep background, fabric drape |
| Gold Trim | `#c4a043` | Borders, ornate accents, text highlights |
| Mystic Teal | `#1a4a5a` | Secondary accent, water/tea elements |
| Incense Gray | `#b8a898` | Smoke wisps, muted text |
| Palm Cream | `#e8d0b8` | Skin tones, warm highlights |
| Deep Amethyst | `#2a1a3a` | Card backs, layered depth |
| Muted Lavender | `#8c78c8` | Crystal ball inner glow |

Rules: Purple is the base tone. Gold is the accent that signifies mysticism and value. Teal appears sparingly as an otherworldly contrast. Cream provides warmth against the cool purple palette. Everything should feel dimly lit with focused glows.

## Typography Recommendations

- **Primary:** Cinzel (ornate serif for headings and mystic labels).
- **Alternative:** Cinzel Decorative (extra ornament for pull quotes and card titles).
- **Body:** EB Garamond (elegant serif for readable body text).
- **Labels:** `font-[Cinzel] text-xs uppercase tracking-[0.2em] text-[#c4a043]`.
- ALL typography uses serif fonts -- serif conveys tradition, mystery, and old-world elegance.
- Headings use gold glow: `[text-shadow:0_0_6px_rgba(196,160,67,0.4)]`.

## Component Architecture Pattern

Follow ELM architecture for all fortune teller TUI components.

- **Model:** Crystal ball state (mist opacity, swirl phase), tarot deck (drawn cards, spread position), smoke animation state.
- **Messages:** `CrystalBallPeered`, `CardDrawn`, `CardFlipped`, `SmokeAnimate`, `PlanchetteMoved`.
- **View:** Layered rendering -- fabric drape background, then content panels, then smoke wisps as overlay.
- **Update:** Pure state transitions for animation frames and card interactions.

## Interaction Rules

- Card flip: 3D transform `rotateY(180deg)` with `perspective(600px)` over 0.6s ease.
- Crystal ball hover: mist intensifies via `opacity-60` transition over 0.8s.
- Card draw: card slides from spread with `translate-y` and `rotate` over 0.4s.
- Planchette: follows cursor within board bounds with `transition-transform 0.3s ease-out`.
- Smoke: continuous loop animation, staggered start times for each wisp.
- Beaded curtain: gentle sway via `animation: sway 3s ease-in-out infinite`.
- All transitions use `ease-in-out` for organic, unhurried movement.

## Reusable Tailwind Tokens

- Crystal ball: `rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(140,120,200,0.5)_0%,rgba(74,42,106,0.6)_40%,rgba(26,10,42,0.9)_75%,rgba(10,5,20,1)_100%)] shadow-[0_0_40px_rgba(74,42,106,0.5)]`.
- Velvet panel: `bg-[#1a0a2a] shadow-[inset_0_0_60px_rgba(26,10,42,0.8)]` with star-dot pseudo-element.
- Tarot card: `bg-gradient-to-b from-[#4a2a6a] to-[#2a1a3a] border-2 border-[#c4a043] rounded-lg`.
- Gold accent text: `text-[#c4a043] [text-shadow:0_0_6px_rgba(196,160,67,0.4)]`.
- Mystic button: `bg-[#4a2a6a] text-[#c4a043] border border-[#c4a043] shadow-[0_0_8px_rgba(196,160,67,0.2)] hover:shadow-[0_0_16px_rgba(196,160,67,0.4)] transition-all`.
- Smoke wisp: `absolute w-px bg-gradient-to-t from-[#e8d0b8]/40 to-transparent blur-[1px] animate-[swirl_6s_ease-in-out_infinite]`.

## Quality Checklist

- Crystal ball with radial gradient inner glow and mist animation present.
- Starry velvet fabric drape background with scattered star dots.
- At least one tarot card element with ornate back design and hover interaction.
- Beaded curtain divider or accent element visible.
- Incense smoke wisps animating (at least 3 wisps with staggered timing).
- Gold trim (#c4a043) used consistently for borders and accent text.
- Purple-based palette dominates (crystal purple, starry velvet, deep amethyst).
- Serif typography (Cinzel or equivalent) used throughout.
- The aesthetic reads as a carnival fortune teller's booth or mystic divination parlor.
- Atmosphere feels dimly lit, hushed, and enveloped in mystery.

## Anti-Patterns

- Bright or saturated backgrounds (fortune teller booths are dimly lit and shadowy).
- Sans-serif fonts (serif typography is mandatory for old-world mystic tone).
- Missing glow effects (crystal ball and gold accents must glow).
- Flat untextured surfaces (velvet fabric texture and star dots are essential).
- Static smoke wisps (smoke must animate to feel alive).
- Modern minimalism (fortune teller aesthetic is ornate, layered, and rich).
- Missing gold accents (gold trim is the signature accent color).
- Harsh white backgrounds (all backgrounds are deep purple/dark).
- Missing card interaction (tarot cards should respond to hover/click).
- Overly fast animations (mystic interactions should be slow and deliberate).

## Accessibility Considerations

- Deep purple backgrounds with gold text provide strong contrast (WCAG AA+).
- Cinzel at small sizes can be difficult to read -- use EB Garamond for body text below 14px.
- Focus states: `focus:ring-2 focus:ring-[#c4a043]/60 focus:shadow-[0_0_12px_rgba(196,160,67,0.3)]` (gold ring).
- Smoke animations must respect `prefers-reduced-motion` -- disable or reduce opacity changes.
- Card flip animations must have non-animated fallback for motion-sensitive users.
- Color is never the sole indicator -- pair gold accents with iconography or text labels.
- Touch targets for tarot cards must be at least 44x44px despite visual card sizing.
- Low-contrast incense wisps are decorative only and carry no informational content.
