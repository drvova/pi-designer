---
name: liquid-glass-ui
description: Build liquid glass UI components (dynamic refraction, fluid morphology, edge-aware lighting, gel-like depth) with specular highlights, ambient color bleed, dynamic blur, and morphing shapes. Trigger this skill when the user asks for liquid glass, liquid UI, gel glass, fluid glass, Apple liquid glass, refraction surfaces, or morphing translucent interfaces.
---

# Liquid Glass UI

Use this skill to design and implement advanced translucent glass components with fluid edge lighting, specular highlights, dynamic refraction effects, and gel-like morphing interactions.

## Non-Negotiable Foundations

- Liquid glass is an evolution of glassmorphism: it adds specular edge highlights, fluid shape morphing, and refractive color bleed that responds to background content.
- Every surface must have a top specular highlight (the "wet edge") that distinguishes it from flat glassmorphism.
- Shape fluidity is core: elements use high border radius, morphing shapes, and organic curves rather than rigid rectangles.
- Color comes from the background behind the glass, bleeding through via saturation and hue shift.
- Edges must look like a physical glass edge: thick, refractive, with light catching the rim.

## Core Material Recipes

### 1) Standard Liquid Glass Surface

The foundational gel-glass surface with specular edge and ambient color bleed.

- Background: `bg-white/5` (very subtle tint).
- Backdrop blur: `backdrop-blur-xl` with `backdrop-saturate-150` (saturates colors bleeding through).
- Border (specular edge): `border border-white/20`.
- Specular edge highlight: `shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_32px_rgba(0,0,0,0.12)]`.
- Full one-liner:
  - `bg-white/5 backdrop-blur-xl backdrop-saturate-150 border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_32px_rgba(0,0,0,0.12)] rounded-[2rem]`

### 2) Elevated Liquid Glass (hero cards, floating controls)

A higher-fidelity liquid glass with stronger specular and deeper ambient shadow.

- Background: `bg-white/8`.
- Backdrop blur: `backdrop-blur-2xl backdrop-saturate-150`.
- Border: `border border-white/25`.
- Shadow: `shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),inset_0_-1px_2px_rgba(0,0,0,0.1),0_12px_40px_rgba(0,0,0,0.15)]`.

### 3) Pill / Capsule Liquid Glass (navigation, toggles, chips)

The signature liquid glass shape: a pill or capsule with full radius.

- Shape: `rounded-full` (mandatory for the liquid feel).
- Background: `bg-white/8 backdrop-blur-xl backdrop-saturate-150`.
- Border: `border border-white/25`.
- Shadow: `shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_4px_16px_rgba(0,0,0,0.1)]`.

### 4) Liquid Glass Input

A glass field with a refractive edge that responds to focus.

- Default: `bg-white/5 backdrop-blur-md backdrop-saturate-150 border border-white/15 rounded-full px-5 py-3 outline-none`.
- Focused: `focus:bg-white/10 focus:border-white/30 focus:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_4px_16px_rgba(0,0,0,0.12)]`.

## Specular Edge Detail (The Key Differentiator)

What separates liquid glass from standard glassmorphism is the **specular edge**: a bright, thin highlight running along the top and sides of the glass edge, simulating light catching a curved glass rim.

### Approach A: Inner Shadow Stack (recommended, performant)

- `shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]` — thin white inner highlight at the top.
- Combine with: `inset_0_-1px_2px_rgba(0,0,0,0.1)` — subtle bottom edge shadow.

### Approach B: Gradient Border Pseudo-Element

- Wrapper: `bg-gradient-to-b from-white/40 via-white/10 to-transparent rounded-[inherit] p-px`.
- Inner element gets the actual glass surface.

### Approach C: SVG Displacement Filter (advanced, expensive)

- `<feDisplacementMap>` for true optical refraction combined with `<feGaussianBlur>` for depth.
- Apply to a duplicate of the background content behind the glass element.

## Color Bleed and Refraction

- `backdrop-saturate-150` to `backdrop-saturate-200` — increases saturation of content seen through the glass.
- `backdrop-contrast-110` — slightly boosts contrast of blurred content.
- Glass background tint should be very subtle (`bg-white/5` to `bg-white/10`).

## Component Architecture Pattern

1. Vibrant or gradient background (mandatory).
2. Ambient color blobs (blurred colored shapes positioned behind glass).
3. Liquid glass panels (specular edge, saturated bleed, gel depth).
4. Pill/capsule controls (full radius, specular highlights).
5. Specular accents (icons with subtle glow).

## Interaction Rules

- Default state: gel-like, fully rounded, specular edges active.
- Hover state: `hover:bg-white/10 hover:border-white/30 hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.5),0_8px_24px_rgba(0,0,0,0.15)]`.
- Active/pressed state: `active:scale-[0.98]`.
- Focus state: `focus:ring-2 focus:ring-white/30`.
- Transitions: `transition-all duration-300 ease-out` (smooth, fluid, organic).
- Shape morphing on hover: `hover:rounded-[2.5rem]`.

## Reusable Tailwind Tokens

- Standard glass: `bg-white/5 backdrop-blur-xl backdrop-saturate-150 border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_32px_rgba(0,0,0,0.12)] rounded-[2rem]`
- Elevated glass: `bg-white/8 backdrop-blur-2xl backdrop-saturate-150 border border-white/25 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),inset_0_-1px_2px_rgba(0,0,0,0.1),0_12px_40px_rgba(0,0,0,0.15)] rounded-[2rem]`
- Pill/capsule: `bg-white/8 backdrop-blur-xl backdrop-saturate-150 border border-white/25 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_4px_16px_rgba(0,0,0,0.1)]`
- Radius: `rounded-[2rem]` (default), `rounded-full` (pills/capsules)
- Text primary: `text-white/90`, Text secondary: `text-white/60`

## Vibrant Background Recipes

- Sunset mesh: `bg-[radial-gradient(circle_at_30%_20%,#ff6b6b_0%,transparent_60%),radial-gradient(circle_at_70%_60%,#6c5ce7_0%,transparent_60%),radial-gradient(circle_at_50%_90%,#00b894_0%,transparent_50%)] bg-[#1a1a2e]`
- Ocean mesh: `bg-[radial-gradient(circle_at_20%_50%,#0984e3_0%,transparent_50%),radial-gradient(circle_at_80%_30%,#6c5ce7_0%,transparent_50%),radial-gradient(circle_at_50%_80%,#00b894_0%,transparent_50%)] bg-[#0d1b2a]`
- Aurora mesh: `bg-[radial-gradient(circle_at_25%_25%,#a29bfe_0%,transparent_50%),radial-gradient(circle_at_75%_75%,#fd79a8_0%,transparent_50%)] bg-[#2d3436]`

## Quality Checklist (must pass)

- Every glass surface has a specular edge highlight.
- Backdrop blur is always present (`backdrop-blur-xl` minimum).
- Backdrop saturation is boosted (`backdrop-saturate-150` minimum).
- Background behind glass is vibrant or gradient.
- Border radius is generous (`rounded-[2rem]` or `rounded-full`).
- Transitions feel fluid and organic.
- Shadow stacks include both inner specular highlights and outer ambient depth.

## Anti-Patterns

- Missing the specular edge highlight (reduces to plain glassmorphism).
- Flat backgrounds behind liquid glass (no color bleed).
- Sharp corners (liquid glass is organic and rounded).
- Heavy background tints (`bg-white/20`+ blocks color bleed).
- Mechanical transitions (`duration-150` is too fast).
- Over-blurring (`backdrop-blur-3xl` on everything).
- Dark text on glass (contrast unreliable).

## Accessibility Considerations

- Verify text contrast against worst-case background states.
- Provide solid fallback surfaces for `prefers-reduced-transparency`.
- Focus states: `focus:ring-2 focus:ring-white/30`.
- Disable transform-based transitions for `prefers-reduced-motion`.
