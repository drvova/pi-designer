---
name: streamline-moderne-ui
description: Build Streamline Moderne UI components (1930s aerodynamic design, horizontal speed lines, curved corners, nautical influences, chrome and bakelite, teardrop shapes) with horizontal emphasis, smooth curves, muted pastels, and the sleek machine-age optimism of pre-war industrial design. Trigger this skill when the user asks for Streamline Moderne, Art Deco Moderne, 1930s machine age, aerodynamic design, nautical deco, or bakelite retro interfaces.
---

# Streamline Moderne UI

Use this skill to design and implement sleek, aerodynamic interfaces inspired by 1930s Streamline Moderne design: horizontal speed lines, teardrop curves, chrome and bakelite surfaces, nautical porthole motifs, and the optimistic machine-age aesthetic of pre-war industrial design.

## Non-Negotiable Foundations

- Streamline Moderne is the 1930s evolution of Art Deco: it replaces geometric angularity with aerodynamic CURVES and horizontal SPEED.
- Horizontal emphasis dominates: speed lines, racing stripes, and low wide proportions communicate motion and efficiency.
- Shapes are aerodynamic: teardrops, rounded corners, porthole circles, and long horizontal curves.
- Materials reference machine-age manufacturing: chrome, stainless steel, bakelite (early plastic), and polished aluminum.
- Colors are muted and industrial: silver, cream, pale green, soft blue, dusty rose, and polished metal.
- Typography is sleek and low-profile: elongated, horizontal sans-serifs with Art Deco geometry.

## Core Material Recipes

### 1) Speedline Surface

Panel with horizontal speed lines (the Streamline Moderne signature).

- `bg-gradient-to-br from-[#e8e4dc] to-[#d4d0c8] rounded-[2rem] p-8`.
- Speed lines: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_8px,rgba(0,0,0,0.03)_8px,rgba(0,0,0,0.03)_9px)]` (subtle horizontal banding).

### 2) Teardrop / Aerodynamic Shape

Signature aerodynamic container using clip-path.

- `[clip-path:polygon(0_0,calc(100%-40px)_0,100%_50%,calc(100%-40px)_100%,0_100%)]` (teardrop/airfoil right edge).

### 3) Porthole Element

Circular nautical porthole window/frame.

- `w-32 h-32 rounded-full bg-gradient-to-br from-[#d4d0c8] to-[#b4b0a8] border-4 border-[#8a8a82] flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_4px_12px_rgba(0,0,0,0.15)]`.
- Rivets: small circles around the rim at regular intervals.

### 4) Chrome Surface

Polished metal surface with reflective gradient.

- `bg-gradient-to-b from-[#e8e8e8] via-[#c0c0c0] via-[#a8a8a8] to-[#d4d4d4]`.
- Highlight: `shadow-[inset_0_2px_0_rgba(255,255,255,0.6),inset_0_-2px_0_rgba(0,0,0,0.1)]`.

### 5) Bakelite Button

Early plastic button with warm tone and rounded shape.

- `bg-gradient-to-b from-[#5a7a6a] to-[#3a5a4a] text-[#e8e4dc] font-medium rounded-full px-8 py-3 shadow-[0_3px_6px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)] hover:from-[#6a8a7a] hover:to-[#4a6a5a] transition-all`.

### 6) Horizontal Racing Stripe Divider

Decorative speed-stripe divider.

- `h-2 bg-gradient-to-r from-transparent via-[#c4471a] to-transparent` (orange speed line).
- Multiple: stack 2-3 thin lines of different accent colors.

### 7) Fluted Column Accent

Vertical fluted lines (like Art Deco column detailing).

- `bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_4px,rgba(0,0,0,0.05)_4px,rgba(0,0,0,0.05)_5px)] w-4 h-full`.

## Color Palette System

### Core Streamline Moderne Palette

| Color | Hex | Material |
|---|---|---|
| Cream | `#e8e4dc` | Primary surface |
| Soft Silver | `#d4d0c8` | Secondary surface |
| Polished Chrome | `#c0c0c0` | Metal accents |
| Pale Green | `#5a7a6a` | Bakelite accent |
| Dusty Rose | `#c4a0a8` | Soft accent |
| Soft Blue | `#5a8a9a` | Nautical accent |
| Burnt Orange | `#c4471a` | Speed line accent |
| Dark Edge | `#8a8a82` | Borders, shadows |
| Charcoal | `#3a3a3a` | Text |

Rules: Muted, industrial, machine-age palette. Creams and silvers dominate. Accents are soft (pale green, dusty rose, soft blue) except for the signature burnt orange speed lines. No bright primaries.

## Typography Recommendations

Streamline Moderne typography is sleek, horizontal, and geometric:

- **Display:** Poiret One, Limelight, or Broadway (Art Deco display with horizontal emphasis).
- **Alternative:** Poppins Light, Quicksand (geometric, low-profile sans).
- **Body:** Quicksand, Josefin Sans (thin, elegant, horizontal).
- **Labels:** `font-light uppercase tracking-[0.25em] text-sm` (sleek, wide, machine-age).
- Avoid heavy weights. Streamline Moderne is LIGHT and SLEEK.

## Component Architecture Pattern

1. Cream or silver background with subtle horizontal speed lines.
2. Aerodynamic curved panels (teardrop clip-paths, rounded corners).
3. Chrome surface accents (polished metal gradients).
4. Bakelite buttons in muted greens and roses.
5. Porthole circular elements for images/avatars.
6. Horizontal racing stripe dividers.
7. Sleek low-profile typography.
8. Fluted column accents at edges.

## Interaction Rules

- Default state: sleek, aerodynamic, polished.
- Hover: chrome brightens, surfaces gleam.
  - `hover:shadow-[inset_0_2px_0_rgba(255,255,255,0.8)] transition-all duration-300`.
- Active: `active:translate-y-px`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#5a8a9a]`.
- Transitions: `transition-all duration-300 ease-out` (smooth, aerodynamic).

## Reusable Tailwind Tokens

- Speedline panel: `bg-gradient-to-br from-[#e8e4dc] to-[#d4d0c8] rounded-[2rem]`
- Teardrop clip: `[clip-path:polygon(0_0,calc(100%-40px)_0,100%_50%,calc(100%-40px)_100%,0_100%)]`
- Chrome: `bg-gradient-to-b from-[#e8e8e8] via-[#c0c0c0] to-[#d4d4d4] shadow-[inset_0_2px_0_rgba(255,255,255,0.6)]`
- Bakelite btn: `bg-gradient-to-b from-[#5a7a6a] to-[#3a5a4a] text-[#e8e4dc] rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]`
- Porthole: `rounded-full bg-gradient-to-br from-[#d4d0c8] to-[#b4b0a8] border-4 border-[#8a8a82]`
- Speed stripe: `h-1 bg-gradient-to-r from-transparent via-[#c4471a] to-transparent`

## Quality Checklist (must pass)

- Horizontal speed lines are present on at least one major surface.
- At least one aerodynamic curved shape (teardrop clip-path or porthole circle).
- Chrome/bakelite material references in surfaces and buttons.
- Color palette is muted and industrial (cream, silver, pale green, dusty rose).
- Typography is sleek, light-weight, and horizontally emphasized.
- At least one porthole circular element.
- Racing stripe dividers present.
- The aesthetic reads as 1930s machine-age aerodynamic design.
- Layout emphasizes horizontal proportions (wide, low elements).
- Fluted column accents or vertical line detailing present.

## Anti-Patterns

- Angular Art Deco geometry (Streamline Moderne is CURVED, not angular).
- Bright, saturated colors (palette is muted and industrial).
- Heavy, bold typography (Streamline Moderne is light and sleek).
- Vertical emphasis (everything should be horizontal and aerodynamic).
- Dark backgrounds (Streamline Moderne is light: creams and silvers).
- Sharp corners (use generous curves and rounded shapes).
- Missing speed lines or horizontal banding (this is the signature element).
- Missing chrome or metal references (machine-age materials are essential).
- Dense, cluttered layouts (Streamline Moderne is open and aerodynamic).
- Warm rustic textures (this is polished industrial, not handmade).

## Accessibility Considerations

- Cream backgrounds with charcoal text provide excellent contrast (WCAG AAA).
- Focus states: `focus:ring-2 focus:ring-[#5a8a9a]` (soft blue, visible on cream).
- Speed line textures must be subtle enough not to reduce text contrast.
- Porthole and aerodynamic clip-paths must not cut off interactive areas.
- Sleek light-weight typography must maintain readability (verify at 16px+).
- Decorative SVGs (portholes, fluting) must be `aria-hidden="true"`.
- Touch targets must be adequate despite curved shapes.
