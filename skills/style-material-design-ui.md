---
name: material-design-ui
description: Build Google Material Design components (elevation system, FAB, app bars, navigation drawers, ripple effects, expressive motion) with consistent shadows, bold typography, and physical motion metaphors. Trigger this skill when the user asks for Material Design, Material 3, Material You, Google design, elevation system, or Android-style UI.
---

# Material Design UI

Use this skill to design and implement Google's Material Design system with its elevation shadow system, bold typography scale, ripple interactions, and physical motion metaphors.

## Non-Negotiable Foundations

- Material Design treats UI as physical "material" — sheets of digital paper with consistent physical properties (elevation, shadows, motion).
- The elevation system defines depth through specific shadow levels (0-5 dp), each with a prescribed shadow formula.
- Bold, large-scale typography is central: Material uses a type scale with large display sizes.
- Motion follows physics: acceleration and deceleration curves, not linear timing.
- Color comes from a tonal palette system with primary, secondary, and tertiary colors derived from a seed color (Material You).
- Corner shapes are consistent: rounded rectangles with specific radius per component type.

## Elevation Shadow System (Material's Core)

Material elevation is measured in dp (density-independent pixels). Each level has a specific shadow:

| Level | dp | Shadow CSS | Use Case |
|---|---|---|---|
| 0 | 0dp | `shadow-none` | Flat background, flat buttons |
| 1 | 1dp | `shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.08)]` | Cards, raised buttons, text fields |
| 2 | 2dp | `shadow-[0_3px_6px_rgba(0,0,0,0.12),0_2px_4px_rgba(0,0,0,0.08)]` | Floating buttons (small), menus at rest |
| 3 | 3dp | `shadow-[0_10px_20px_rgba(0,0,0,0.12),0_3px_6px_rgba(0,0,0,0.08)]` | Snackbars, FAB at rest |
| 4 | 4dp | `shadow-[0_14px_28px_rgba(0,0,0,0.14),0_5px_10px_rgba(0,0,0,0.10)]` | Dialogs, pickers |
| 5 | 5dp | `shadow-[0_19px_38px_rgba(0,0,0,0.16),0_6px_12px_rgba(0,0,0,0.12)]` | Scrolling app bars, modals |

## Core Material Recipes

### 1) Material Card

- `bg-white dark:bg-[#1e1e1e] rounded-xl p-4 shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.08)]`
- Outlined card (alternative): `bg-white rounded-xl border border-[#e0e0e0] p-4` (no shadow, border instead).

### 2) Material Button

Three button types, each with different emphasis:

- **Filled (primary):** `bg-[#6750A4] text-white font-medium rounded-full px-6 py-3 hover:shadow-md hover:bg-[#7965B0] transition-all`
- **Outlined:** `bg-transparent text-[#6750A4] font-medium rounded-full px-6 py-3 border border-[#6750A4] hover:bg-[#6750A4]/8 transition-all`
- **Text:** `bg-transparent text-[#6750A4] font-medium rounded-full px-4 py-2 hover:bg-[#6750A4]/8 transition-all`
- **Floating (FAB):** `bg-[#6750A4] text-white rounded-[16px] p-4 shadow-[0_3px_6px_rgba(0,0,0,0.12),0_2px_4px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)]`

### 3) App Bar (Top)

- `bg-[#6750A4] text-white h-16 flex items-center px-4 shadow-[0_2px_4px_rgba(0,0,0,0.1)] z-10`
- With scroll elevation: background stays but shadow appears on scroll.

### 4) Navigation Drawer (sidebar)

- `bg-white w-64 border-r border-[#e0e0e0] py-4`
- Item: `flex items-center gap-4 px-6 py-3 text-sm font-medium hover:bg-[#6750A4]/8 rounded-r-full mr-4 transition-colors`
- Active: `bg-[#6750A4]/12 text-[#6750A4] font-semibold`.

### 5) Navigation Bar (bottom, mobile)

- `bg-white border-t border-[#e0e0e0] flex justify-around py-2`
- Item: `flex flex-col items-center gap-1 py-2 px-4 text-xs text-gray-600`
- Active: `text-[#6750A4] font-semibold`.

### 6) Text Field

- **Outlined:** `border border-gray-400 rounded-[4px] px-4 pt-4 pb-2 text-base outline-none focus:border-[#6750A4] focus:border-2`
- **Filled:** `bg-[#f0f0f0] rounded-t-[8px] px-4 pt-6 pb-2 text-base outline-none border-b-2 border-transparent focus:border-[#6750A4]`

### 7) Ripple Effect

Material's signature interaction: a circular ripple emanates from the touch/click point.

```css
.ripple {
  position: relative;
  overflow: hidden;
}
.ripple::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  background: currentColor;
  opacity: 0.3;
  transform: scale(0);
  animation: ripple 0.6s ease-out;
  pointer-events: none;
}
@keyframes ripple {
  to { transform: scale(4); opacity: 0; }
}
```

## Color System (Material 3 / Material You)

Material 3 uses a tonal palette derived from a seed color. Key roles:

### Light Theme

| Role | Hex | Use Case |
|---|---|---|
| Primary | `#6750A4` | Buttons, active states, FAB |
| On Primary | `#FFFFFF` | Text on primary |
| Primary Container | `#EADDFF` | Filled tonal buttons |
| Surface | `#FEF7FF` | App background |
| Surface Variant | `#E7E0EC` | Cards, text fields |
| On Surface | `#1D1B20` | Primary text |
| On Surface Variant | `#49454F` | Secondary text |
| Outline | `#79747E` | Outlined buttons, dividers |

### Dark Theme

| Role | Hex | Use Case |
|---|---|---|
| Primary | `#D0BCFF` | Buttons, active states |
| On Primary | `#381E72` | Text on primary |
| Surface | `#141218` | App background |
| Surface Variant | `#49454F` | Cards |
| On Surface | `#E6E0E9` | Primary text |
| Outline | `#938F99` | Outlined elements |

## Typography Scale (Material 3)

| Style | Size / Weight | Use Case |
|---|---|---|
| Display Large | 57px / 400 | Hero numbers |
| Display Medium | 45px / 400 | Large hero text |
| Headline Large | 32px / 400 | Page titles |
| Headline Medium | 28px / 400 | Section titles |
| Title Large | 22px / 400 | Card titles |
| Title Medium | 16px / 500 | List item titles |
| Body Large | 16px / 400 | Primary body |
| Body Medium | 14px / 400 | Secondary body |
| Label Large | 14px / 500 | Button text |
| Label Medium | 12px / 500 | Badge/tag text |

Recommended fonts: Roboto, Google Sans, or Inter.

## Shape System (Corner Radius)

Material 3 uses specific corner radii per component:

| Shape | Radius | Use Case |
|---|---|---|
| Full | `rounded-full` | Buttons (pills), chips, FAB (partially) |
| Extra Large | `rounded-[28px]` | Dialogs, large cards |
| Large | `rounded-[16px]` | Cards, FAB |
| Medium | `rounded-[12px]` | Medium cards |
| Small | `rounded-[8px]` | Text fields, small cards |

## Component Architecture Pattern

1. Surface background (Material surface color).
2. App bar (top, with elevation on scroll).
3. Navigation (drawer for desktop, bar for mobile).
4. Content area with cards (elevation 1).
5. FAB (elevation 3) for primary action.
6. Dialogs/Snackbars (elevation 4-5) for transient UI.

## Motion Principles

Material motion follows physical curves:

- **Standard:** `cubic-bezier(0.2, 0, 0, 1)` — most transitions (300ms).
- **Decelerate:** `cubic-bezier(0, 0, 0, 1)` — elements entering (250ms).
- **Accelerate:** `cubic-bezier(0.4, 0, 1, 1)` — elements exiting (200ms).
- Duration: `150ms` (small), `250ms` (medium), `300ms` (large).
- Connected motion: shared element transitions during navigation.

## Reusable Tailwind Tokens

- Card: `bg-white dark:bg-[#1e1e1e] rounded-xl p-4 shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.08)]`
- Filled button: `bg-[#6750A4] text-white font-medium rounded-full px-6 py-3 hover:shadow-md transition-all`
- Outlined button: `bg-transparent text-[#6750A4] font-medium rounded-full px-6 py-3 border border-[#6750A4]`
- FAB: `bg-[#6750A4] text-white rounded-[16px] p-4 shadow-[0_3px_6px_rgba(0,0,0,0.12),0_2px_4px_rgba(0,0,0,0.08)]`
- App bar: `bg-[#6750A4] text-white h-16 flex items-center px-4 shadow-[0_2px_4px_rgba(0,0,0,0.1)]`
- Drawer item: `flex items-center gap-4 px-6 py-3 text-sm font-medium hover:bg-[#6750A4]/8 rounded-r-full mr-4`

## Quality Checklist (must pass)

- Elevation system is used consistently (same shadow levels for same component types).
- Buttons are pill-shaped (`rounded-full`) or have Material-appropriate radius.
- Typography follows the Material type scale (large, bold headings).
- Color uses the Material tonal palette (primary, surface, on-surface roles).
- Ripple effects are present on interactive elements.
- FAB is elevated (level 3) and contains a single primary action.
- App bar has scroll elevation behavior (shadow appears on scroll).
- Corner radius matches component type per the shape system.
- Motion uses Material easing curves, not linear.
- Dark mode is supported with proper tonal color roles.

## Anti-Patterns

- Mixing shadow depths randomly (Material requires consistent elevation).
- Sharp corners everywhere (Material uses rounded shapes per the shape system).
- Non-physical motion (linear transitions, spring-bounce animations).
- Missing ripple effects (the ripple IS Material's signature interaction).
- Using pure CSS buttons without hover elevation changes.
- Random accent colors (Material uses a derived tonal palette).
- Flat buttons without affordance (Material buttons must have hover states).
- Inconsistent typography scale (Material has a specific type scale — follow it).
- Missing FAB on content-heavy screens (FAB is the primary action anchor).

## Accessibility Considerations

- Material Design is built for accessibility: touch targets are 48x48dp minimum.
- Text fields have floating labels that maintain context when focused.
- Color contrast follows WCAG standards through the tonal palette system.
- Focus states are built into the component specs.
- Ripple effects are visual enhancements; keyboard focus must work without them.
- High Contrast Mode support is built into Material 3.
- Dynamic Type / font scaling is supported through the rem-based type scale.
