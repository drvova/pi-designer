---
name: flat-design-2-ui
description: Build Flat Design 2.0 components (clean surfaces, subtle depth, long shadows, consistent iconography, semi-flat aesthetics) with minimal shadows for hierarchy, bright accent colors, and functional clarity. Trigger this skill when the user asks for flat design, flat 2.0, semi-flat design, material-lite, clean modern UI, or Google-inspired design.
---

# Flat Design 2.0 UI

Use this skill to design and implement clean, mostly-flat interfaces with subtle depth cues (soft shadows, gentle layering) that solve the affordance problems of pure flat design while retaining its clarity.

## Non-Negotiable Foundations

- Flat Design 2.0 is "almost flat": mostly flat surfaces with subtle shadows, highlights, and layering for depth.
- Every interactive element must have a clear affordance (it looks clickable). This is the core fix over pure flat design.
- Shadows are subtle and consistent: `shadow-sm` to `shadow-md` range. Never heavy or dramatic.
- Color is bright, saturated, and used purposefully. Backgrounds are clean whites or light grays.
- Iconography is consistent: outline icons (Feather, Heroicons) or filled icons — pick one and commit.
- Typography is clean sans-serif with clear hierarchy through weight and size.

## Core Material Recipes

### 1) Standard Card

Clean card with subtle shadow for gentle elevation.

- `bg-white rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)] p-6`

### 2) Flat Button with Affordance

The key Flat 2.0 element: flat color but clear clickable affordance.

- Primary: `bg-[#3b82f6] text-white font-medium rounded-lg px-5 py-2.5 shadow-sm hover:bg-[#2563eb] hover:shadow-md active:bg-[#1d4ed8] transition-all`
- Secondary: `bg-white text-gray-700 font-medium rounded-lg px-5 py-2.5 border border-gray-300 shadow-sm hover:bg-gray-50 hover:border-gray-400 transition-all`
- Ghost: `bg-transparent text-[#3b82f6] font-medium rounded-lg px-5 py-2.5 hover:bg-[#3b82f6]/10 transition-colors`
- FAB (Floating Action Button): `bg-[#3b82f6] text-white rounded-full p-4 shadow-[0_4px_12px_rgba(59,130,246,0.4)] hover:shadow-[0_6px_16px_rgba(59,130,246,0.5)]`

### 3) Navigation Bar

- Top bar: `bg-white border-b border-gray-200 shadow-sm`.
- Bottom bar (mobile): `bg-white border-t border-gray-200`.
- Active item: `text-[#3b82f6] font-medium border-b-2 border-[#3b82f6]`.

### 4) Input Fields

- Standard: `bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-base shadow-sm outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20 transition-all`
- Filled: `bg-gray-50 border border-transparent rounded-lg px-4 py-2.5 focus:bg-white focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20`

### 5) Long Shadow (Flat 2.0 signature accent)

The long diagonal shadow popularized in early Flat 2.0 (used on icons and FABs).

```css
.long-shadow {
  box-shadow:
    1px 1px 0 rgba(0,0,0,0.1),
    2px 2px 0 rgba(0,0,0,0.09),
    3px 3px 0 rgba(0,0,0,0.08),
    4px 4px 0 rgba(0,0,0,0.07),
    5px 5px 0 rgba(0,0,0,0.06),
    6px 6px 0 rgba(0,0,0,0.05);
}
```

## Color System

### Primary Palette

- Background: `#ffffff` (cards), `#f9fafb` (page bg), `#f3f4f6` (muted surfaces).
- Text: `#111827` (primary), `#4b5563` (secondary), `#9ca3af` (tertiary).
- Border: `#e5e7eb` (standard), `#d1d5db` (strong).
- Accent: `#3b82f6` (blue), `#8b5cf6` (purple), `#10b981` (green), `#f59e0b` (amber), `#ef4444` (red).

### Semantic Colors

- Success: `#10b981` (green), `#d1fae5` (bg).
- Warning: `#f59e0b` (amber), `#fef3c7` (bg).
- Error: `#ef4444` (red), `#fee2e2` (bg).
- Info: `#3b82f6` (blue), `#dbeafe` (bg).

Rules: One primary accent color per interface. Semantic colors are reserved for status indicators. Do not use semantic colors as decorative accents.

## Shadow System (Consistency is Key)

Flat 2.0 shadows must be subtle and consistent. Define elevation levels:

| Elevation | Shadow | Use Case |
|---|---|---|
| 0 | `shadow-none` | Flat elements, page background |
| 1 | `shadow-sm` or `shadow-[0_1px_2px_rgba(0,0,0,0.05)]` | Cards at rest |
| 2 | `shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)]` | Cards, raised elements |
| 3 | `shadow-[0_4px_6px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.06)]` | Hover state |
| 4 | `shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.05)]` | FAB, modals |
| 5 | `shadow-[0_20px_25px_rgba(0,0,0,0.1),0_10px_10px_rgba(0,0,0,0.04)]` | Dialogs, popovers |

## Component Architecture Pattern

1. Clean white/light gray background.
2. Subtle elevation cards and panels (shadow level 1-2).
3. Flat accent-colored buttons with clear affordances.
4. Consistent iconography (outline or filled, not mixed).
5. Clear typography hierarchy.
6. Semantic color accents for status (success, warning, error).

## Interaction Rules

- Default: flat or shadow level 1-2.
- Hover: elevation increases (shadow level 3), or background darkens slightly.
- Active: `active:scale-[0.98]` and shadow reduces (pressed).
- Focus: `focus:ring-2 focus:ring-[accent]/20`.
- Transitions: `transition-all duration-200 ease-out`.
- Ripple effect (optional): the Material-style touch ripple can be added to buttons.

## Typography Recommendations

- Sans-serif primary: Inter, Roboto, SF Pro Text, system-ui.
- Sans-serif heading: same family at heavier weight, or a display variant.
- Mono: Roboto Mono, SF Mono.
- Sizes: `text-sm` (14px) body, `text-base` (16px) primary content, `text-lg` to `text-4xl` headings.
- Weights: `font-normal` (400) body, `font-medium` (500) labels, `font-semibold` (600) headings, `font-bold` (700) display.

## Reusable Tailwind Tokens

- Card: `bg-white rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)] p-6`
- Primary button: `bg-[#3b82f6] text-white font-medium rounded-lg px-5 py-2.5 shadow-sm hover:bg-[#2563eb] hover:shadow-md transition-all`
- Secondary button: `bg-white text-gray-700 font-medium rounded-lg px-5 py-2.5 border border-gray-300 shadow-sm hover:bg-gray-50 transition-all`
- Input: `bg-white border border-gray-300 rounded-lg px-4 py-2.5 shadow-sm focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20`
- FAB: `bg-[#3b82f6] text-white rounded-full p-4 shadow-[0_4px_12px_rgba(59,130,246,0.4)]`

## Quality Checklist (must pass)

- Surfaces are mostly flat with subtle shadows for elevation.
- Every interactive element has a clear affordance (border, shadow, or color that signals clickability).
- Shadows are consistent across the interface (same elevation levels used throughout).
- Color palette is bright, clean, and limited (one primary accent).
- Iconography is consistent (all outline or all filled).
- Typography hierarchy is clear through weight and size.
- No heavy dramatic shadows, gradients, or textures.
- Hover states are visible (shadow change or background change).
- Corner radius is consistent: `rounded-lg` for inputs/buttons, `rounded-xl` for cards.

## Anti-Patterns

- Pure flat design with no shadows (loses affordances — this is Flat 1.0's problem).
- Heavy dramatic shadows (that is skeuomorphism, not flat 2.0).
- Gradients on surfaces (flat 2.0 uses solid colors, with optional subtle gradient accents).
- Mixed icon styles (outline and filled icons mixed together).
- Inconsistent shadow depths (some cards have `shadow-sm`, others `shadow-xl`).
- Too many accent colors (one primary, with semantic colors for status only).
- Missing hover/focus states (affordances must be maintained in all states).
- Decorative textures or patterns (flat 2.0 is clean and solid).
- Overuse of the long shadow effect (it is an accent, not a default).

## Accessibility Considerations

- Flat 2.0 is generally accessible: high contrast, clear affordances, consistent focus states.
- Ensure text contrast meets WCAG AA on colored buttons.
- Do not rely on color alone for interactive states; include hover background changes.
- Focus rings (`focus:ring-2`) are mandatory for keyboard navigation.
- Icon-only buttons must have `aria-label` for screen readers.
- Touch targets must be minimum 44x44px (`px-5 py-2.5` typically achieves this).
- Semantic colors must be accompanied by text labels (not color alone).
