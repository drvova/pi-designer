---
name: vaporwave-ui
description: Build vaporwave UI components (pastel neons, dreamy nostalgia, Greek statuary, glitch aesthetics, early internet melancholy) with pink/cyan/mint gradients, VHS distortion, and 90s mall culture surrealism. Trigger this skill when the user asks for vaporwave, vaporwave aesthetic, pastel synthwave, 90s dreamy UI, mall culture design, or surreal nostalgic interfaces.
---

# Vaporwave UI

Use this skill to design and implement the dreamy, surreal aesthetic of vaporwave: pastel neon palettes, glitch distortion, nostalgia for 90s mall culture and early Windows UI, and the melancholic beauty of decaying digital optimism.

## Non-Negotiable Foundations

- Vaporwave is the dreamy, melancholic cousin of synthwave. Where synthwave is energetic and aggressive (magenta/cyan neon, grids, chrome), vaporwave is surreal and dissociative (pastel pinks, lavenders, mints, dreamlike textures).
- The aesthetic draws from 90s consumer culture: Windows 95 dialogs, shopping mall signage, Greek statuary, tropical resort imagery, and early internet surrealism.
- Colors are pastel and washed-out: soft pinks, baby blues, mint greens, lavenders — often with a hazy, low-contrast, VHS-quality feel.
- Glitch and datamosh effects create intentional digital degradation.
- Typography mixes classical elegance (serif) with retro computing (monospace) and Japanese characters for exotic surrealism.
- The mood is nostalgic, slightly unsettling, and beautiful — like a fading memory of a future that never arrived.

## Core Material Recipes

### 1) Vaporwave Gradient Background

The signature washed-out pastel gradient.

- Sky dream: `bg-gradient-to-b from-[#ff71ce] via-[#b967ff] to-[#01cdfe]`.
- Ocean dream: `bg-gradient-to-b from-[#01cdfe] via-[#b967ff] to-[#05ffa1]`.
- Sunset pool: `bg-gradient-to-b from-[#fffb96] via-[#ff71ce] to-[#b967ff]`.
- Add haze: layer `bg-black/10 backdrop-blur-[2px]` over gradients to simulate VHS softness.

### 2) Windows 95 Dialog Card

Retro OS window with pastel vaporwave recoloring.

- Window frame: `bg-[#c0c0c0] border-2 border-white border-r-[#808080] border-b-[#808080] rounded-none`.
- Title bar: `bg-gradient-to-r from-[#ff71ce] to-[#b967ff] text-white px-2 py-1 font-mono text-xs`.
- Content area: `bg-[#fdf6e3] p-4 font-mono text-sm text-[#3a3a3a]`.
- Button: `bg-[#c0c0c0] border border-white border-r-[#808080] border-b-[#808080] px-4 py-1 text-xs font-mono`.

### 3) Vaporwave Glitch Text

Text with RGB chromatic aberration and scanline distortion.

```css
.vaporwave-glitch {
  color: #ff71ce;
  text-shadow:
    2px 0 #01cdfe,
    -2px 0 #ff71ce,
    0 0 8px rgba(255,113,206,0.4);
  letter-spacing: 0.1em;
}
```

### 4) Greek Statue / Classical Overlay

Juxtaposing classical art with digital distortion (the vaporwave signature).

- Statue image: `grayscale opacity-40 mix-blend-luminosity` over a pastel gradient.
- Overlay: `bg-gradient-to-b from-transparent via-[#ff71ce]/10 to-[#01cdfe]/20`.
- Add scanlines: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_2px,rgba(0,0,0,0.05)_3px,rgba(0,0,0,0.05)_3px)]`.

### 5) Vaporwave Grid Floor

The perspective grid (shared with synthwave but softer and pastel).

```css
.vaporwave-grid {
  background:
    linear-gradient(rgba(255,113,206,0.15) 1px, transparent 1px),
    linear-gradient(90deg, rgba(1,205,254,0.15) 1px, transparent 1px);
  background-size: 50px 50px;
  transform: perspective(400px) rotateX(60deg);
  transform-origin: center bottom;
}
```

### 6) Holographic / Iridescent Surface

Shimmering surface that shifts between pastel hues.

- `bg-[linear-gradient(135deg,#ff71ce,#b967ff,#01cdfe,#05ffa1,#fffb96)] bg-[length:200%_200%]`.
- Animate: `animate-[holo_8s_ease_infinite]`.

## Color Palette System

### Core Vaporwave Palette

| Color | Hex | Role |
|---|---|---|
| Neon Pink | `#ff71ce` | Primary accent |
| Cyan | `#01cdfe` | Secondary accent |
| Mint Green | `#05ffa1` | Tertiary, success |
| Lavender | `#b967ff` | Background gradient |
| Acid Yellow | `#fffb96` | Highlight, warning |
| Deep Purple | `#1a0033` | Dark base alternative |
| Off-White | `#fdf6e3` | Light surface, text background |
| Gray (OS chrome) | `#c0c0c0` | Window frames |

Rules: Colors should feel WASHED-OUT and dreamy, not vibrant. The palette should read like a faded photograph or a VHS recording. Apply subtle haze/blur to reduce sharpness.

## Typography Recommendations

Vaporwave typography deliberately mixes classical and digital:

- **Display headings:** Playfair Display, Cinzel, or Cormorant (classical serif — references Greek/Roman statuary aesthetic).
- **Retro computing:** MS Sans Serif, Chicago, or any bitmap/pixel font for UI labels.
- **Japanese accents:** Use Japanese characters (美学 = aesthetics, 商品 = product) as decorative elements.
- **Monospace:** JetBrains Mono or VT323 for terminal/data elements.
- **Body:** Clean serif at `font-light` for a dreamy reading quality.
- The MIX of serif elegance and digital monospace creates the vaporwave tension.

## Component Architecture Pattern

1. Pastel gradient background (washed-out, dreamy).
2. Perspective grid floor (optional, softer than synthwave).
3. Windows 95-style dialog cards (recolored with pastel themes).
4. Greek statuary or classical imagery overlays (grayscale, low opacity).
5. Glitch text and holographic accents.
6. VHS scanline and noise overlay (subtle).
7. Japanese text accents (decorative).

## Interaction Rules

- Default state: dreamy, slightly degraded, pastel.
- Hover state: subtle glitch flicker or holographic shift.
- Active state: brief datamosh/distortion flash.
- Focus state: pastel ring `focus:ring-2 focus:ring-[#ff71ce]`.
- Transitions: `transition-all duration-500 ease-in-out` (slow, dreamy).
- Animations: slow, hypnotic, looping (gradient drift, grid pulse).

## Reusable Tailwind Tokens

- Dream gradient: `bg-gradient-to-b from-[#ff71ce] via-[#b967ff] to-[#01cdfe]`
- Win95 card: `bg-[#c0c0c0] border-2 border-white border-r-[#808080] border-b-[#808080]`
- Glitch text: `text-[#ff71ce] [text-shadow:2px_0_#01cdfe,-2px_0_#ff71ce,0_0_8px_rgba(255,113,206,0.4)]`
- Holographic: `bg-[linear-gradient(135deg,#ff71ce,#b967ff,#01cdfe,#05ffa1,#fffb96)] bg-[length:200%_200%]`
- V haze: `backdrop-blur-[2px]`
- Scanlines: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_2px,rgba(0,0,0,0.05)_3px)]`

## Quality Checklist (must pass)

- Color palette is pastel and washed-out (not vibrant neon like cyberpunk).
- At least one classical/Roman/Greek reference (statue imagery, serif typography, column motifs).
- Windows 95/early-OS dialog aesthetic is present somewhere.
- Glitch or datamosh distortion effects on at least one element.
- Perspective grid is softer and more dreamy than synthwave (pastel colors, wider spacing).
- Typography mixes classical serif with digital monospace.
- VHS/scanline texture adds analog degradation.
- The mood reads as dreamy, surreal, and slightly melancholic.
- Optional Japanese text accents add exotic surrealism.

## Anti-Patterns

- Vibrant aggressive neons (that is cyberpunk/synthwave, not vaporwave).
- Dark dystopian mood (vaporwave is dreamy, not threatening).
- Modern minimalist typography (vaporwave needs classical serif + digital mono mix).
- Sharp, clean surfaces (vaporwave requires analog degradation: haze, blur, scanlines).
- Missing the classical/statuary element (Greek/Roman references are essential).
- Missing the OS/Windows 95 reference (retro computing dialog is a core motif).
- Fast, energetic animations (vaporwave is slow, hypnotic, dissociative).
- High-contrast palettes (vaporwave is low-contrast, faded, washed-out).

## Accessibility Considerations

- Vaporwave's low-contrast aesthetic can reduce text readability; verify WCAG AA on all text.
- Glitch effects must respect `prefers-reduced-motion` (disable all distortion animations).
- VHS/scanline overlays are decorative: `pointer-events-none` and low opacity.
- Pastel text on pastel backgrounds is a known risk — use darker text on light surfaces.
- Focus states must be visible despite dreamy overlays: `focus:ring-2 focus:ring-[#ff71ce]`.
- Provide alt text for statuary/classical imagery.
- The washed-out aesthetic may be difficult for low-vision users; offer a high-contrast toggle.
