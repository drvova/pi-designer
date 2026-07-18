---
name: fluent-design-ui
description: Build Microsoft Fluent Design System components (acrylic material, mica material, reveal highlight, depth layers, motion principles) with backdrop blur, noise texture, cursor-tracking light reveal, and material-based depth. Trigger this skill when the user asks for Fluent Design, Microsoft design, acrylic material, mica material, reveal effect, Windows 11 UI, or Fluent 2.
---

# Fluent Design UI

Use this skill to design and implement Microsoft's Fluent Design System with acrylic and mica materials, reveal highlighting, depth layers, and Fluent motion principles.

## Non-Negotiable Foundations

- Fluent Design uses materials (acrylic, mica) that blend with the desktop background through transparency and blur.
- Depth is subtle and layered: shadows are soft, surfaces float gently, and z-axis elevation is implied through shadow intensity.
- Reveal highlighting brings interactive elements to life: borders and edges light up based on cursor proximity.
- Motion follows physical principles: connected animations, ease-in-out curves, and natural transitions.
- The aesthetic is professional, restrained, and productive. It is NOT maximalist, neon, or playful.

## Core Material Recipes

### 1) Acrylic Material (translucent blurred surface)

The signature Fluent material: a frosted, blurred, semi-transparent surface used for flyouts, context menus, and navigation panes.

Acrylic consists of four layers:
1. Parent background blur: `backdrop-filter: blur(30px) saturate(125%)`.
2. Color tint overlay: semi-transparent white or dark fill.
3. Noise texture: subtle SVG `feTurbulence` grain at very low opacity.
4. Exclusion blend: `background-blend-mode: exclusion` (optional, adds luminosity).

Light acrylic (light mode):
```css
background-color: rgba(255, 255, 255, 0.67);
backdrop-filter: blur(30px) saturate(125%);
-webkit-backdrop-filter: blur(30px) saturate(125%);
```

Dark acrylic (dark mode):
```css
background-color: rgba(40, 40, 46, 0.75);
backdrop-filter: blur(30px) saturate(125%);
-webkit-backdrop-filter: blur(30px) saturate(125%);
```

Tailwind:
- Light: `bg-white/70 backdrop-blur-[30px] backdrop-saturate-125`
- Dark: `bg-[#28282e]/80 backdrop-blur-[30px] backdrop-saturate-125`

### 2) Mica Material (desktop-tinted opaque surface)

Mica is an opaque material that subtly adopts the desktop wallpaper color tone. Used for app title bars and base backgrounds.

Light mica:
```css
background-color: rgba(255, 255, 255, 0.9);
backdrop-filter: blur(40px);
/* Plus a subtle color tint pseudo-element */
```

Dark mica:
```css
background-color: rgba(32, 32, 32, 0.95);
backdrop-filter: blur(40px);
```

Mica is more opaque than acrylic (90% vs 67%) and uses heavier blur (40px vs 30px).

### 3) Reveal Highlight Effect (cursor-tracking light)

Borders and edges light up based on cursor position. This is a key Fluent interaction.

CSS approximation using radial gradient that follows the mouse:
```css
.reveal {
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.08);
}
.reveal:hover {
  border-color: transparent;
}
.reveal::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background: radial-gradient(
    120px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(255, 255, 255, 0.2),
    transparent 60%
  );
  opacity: 0;
  transition: opacity 0.2s;
  pointer-events: none;
}
.reveal:hover::before {
  opacity: 1;
}
```

JS to track mouse position:
```javascript
element.addEventListener('mousemove', (e) => {
  const rect = element.getBoundingClientRect();
  element.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
  element.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
});
```

### 4) Fluent Button

Standard Fluent button with reveal highlight and depth.

- Default: `bg-[#fafafa] dark:bg-[#2d2d30] text-[#171717] dark:text-white rounded-[6px] px-4 py-2 text-sm font-medium border border-transparent transition-all`.
- Hover: `hover:bg-[#f0f0f0] dark:hover:bg-[#3a3a3a]` (subtle background fill on hover).
- Pressed: `active:bg-[#e5e5e5] dark:active:bg-[#42424a]`.
- Focus: `focus:ring-2 focus:ring-[#0078d4] focus:ring-offset-1`.
- Accent button: `bg-[#0078d4] hover:bg-[#106ebe] text-white`.

### 5) Fluent Card / Surface

- Base: `bg-white dark:bg-[#1f1f1f] rounded-lg border border-[#e5e5e5] dark:border-white/5 shadow-sm`.
- Acrylic card: `bg-white/70 backdrop-blur-[30px] backdrop-saturate-125 border border-white/10 rounded-lg`.
- Shadow depth: `shadow-[0_2px_4px_rgba(0,0,0,0.05),0_0_1px_rgba(0,0,0,0.1)]`.

### 6) Fluent Navigation View (sidebar)

Vertical sidebar with acrylic background and compact pane items.

- Container: `bg-white/70 dark:bg-[#1f1f1f]/70 backdrop-blur-[30px] backdrop-saturate-125 border-r border-black/5 dark:border-white/5`.
- Items: `flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-black/5 dark:hover:bg-white/5 transition-colors`.
- Active item: `bg-[#0078d4]/10 text-[#0078d4] font-medium border-l-2 border-[#0078d4]`.

## Color System

### Fluent Light Theme

- Background: `#fafafa` (app), `#ffffff` (card/surface).
- Text: `#171717` (primary), `#616161` (secondary), `#8a8a8a` (tertiary).
- Border: `#e5e5e5` (standard), `#f0f0f0` (subtle).
- Accent: `#0078d4` (Fluent blue), `#106ebe` (hover), `#005a9e` (pressed).

### Fluent Dark Theme

- Background: `#1f1f1f` (app), `#2b2b2b` (card/surface).
- Text: `#ffffff` (primary), `#c7c7c7` (secondary), `#8a8a8a` (tertiary).
- Border: `#3a3a3a` (standard), `rgba(255,255,255,0.05)` (subtle).
- Accent: `#4cc2ff` (Fluent blue dark), `#60cdff` (hover), `#38b0f0` (pressed).

## Motion Principles (Fluent Animation)

Fluent motion follows physical principles. These are the key animation patterns:

### Connected Animations

Elements morph from one position/state to another during navigation transitions:
- Duration: `300ms`.
- Easing: `cubic-bezier(0.1, 0.9, 0.2, 1)` (Fluent ease).
- Elements grow or shrink smoothly from source to destination.

### Entrance Animations

Content slides and fades in:
- Slide up: `translateY(10px) -> 0` with `opacity 0 -> 1`.
- Duration: `150ms` (fast entrance) to `300ms` (dramatic entrance).
- Stagger: items in a list stagger by `30-50ms` each.

### Fluent Easing Functions

- Standard: `cubic-bezier(0.1, 0.9, 0.2, 1)` — default for most transitions.
- Accelerate: `cubic-bezier(0.7, 0, 1, 0.5)` — for elements exiting.
- Decelerate: `cubic-bezier(0.1, 0.9, 0.2, 1)` — for elements entering.
- Duration base: `150ms` (micro), `300ms` (standard), `500ms` (large/scene).

## Component Architecture Pattern

1. Mica base background (app-level, desktop-tinted).
2. Acrylic surfaces (navigation panes, flyouts, command bars).
3. Standard surfaces (cards, content panels with subtle borders).
4. Interactive elements with reveal highlight (buttons, list items).
5. Accent-colored active states (Fluent blue `#0078d4`).

## Interaction Rules

- Default state: clean, professional, restrained.
- Hover: subtle background fill + reveal highlight border light.
- Pressed: slightly darker background fill.
- Focus: `focus:ring-2 focus:ring-[#0078d4]`.
- Reveal effect: cursor proximity lights up borders.
- Transitions: `transition-all duration-150` (Fluent standard) with `ease-[cubic-bezier(0.1,0.9,0.2,1)]`.
- Animations are subtle and professional, never bouncy or playful.

## Reusable Tailwind Tokens

- Acrylic (light): `bg-white/70 backdrop-blur-[30px] backdrop-saturate-125`
- Acrylic (dark): `bg-[#28282e]/80 backdrop-blur-[30px] backdrop-saturate-125`
- Mica (light): `bg-white/90 backdrop-blur-[40px]`
- Mica (dark): `bg-[#202020]/95 backdrop-blur-[40px]`
- Button: `bg-[#fafafa] dark:bg-[#2d2d30] rounded-[6px] px-4 py-2 text-sm font-medium hover:bg-[#f0f0f0] dark:hover:bg-[#3a3a3a]`
- Accent button: `bg-[#0078d4] hover:bg-[#106ebe] text-white rounded-[6px] px-4 py-2 text-sm font-medium`
- Card: `bg-white dark:bg-[#1f1f1f] rounded-lg border border-[#e5e5e5] dark:border-white/5 shadow-sm`
- Focus ring: `focus:ring-2 focus:ring-[#0078d4] focus:ring-offset-1`
- Fluent ease: `ease-[cubic-bezier(0.1,0.9,0.2,1)]`

## Quality Checklist (must pass)

- Acrylic surfaces use `backdrop-filter: blur(30px) saturate(125%)`.
- Mica surfaces use `backdrop-filter: blur(40px)` with higher opacity.
- Reveal highlight effect is implemented on interactive elements (cursor-tracking border light).
- Corner radius is `6px` for buttons, `8px` for cards (Fluent standard).
- Accent color is Fluent blue (`#0078d4` light, `#4cc2ff` dark).
- Shadows are subtle and layered, not dramatic.
- Motion uses Fluent easing `cubic-bezier(0.1, 0.9, 0.2, 1)`.
- Dark mode is a first-class citizen (Fluent supports both themes equally).
- Noise texture is applied to acrylic surfaces (SVG `feTurbulence` at low opacity).

## Anti-Patterns

- Over-blurred surfaces (`backdrop-blur-2xl` everywhere is not Fluent — it is glassmorphism).
- Heavy dramatic shadows (Fluent shadows are subtle).
- Bouncy or spring animations (Fluent motion is professional and physical, not playful).
- Bright saturated accent colors (Fluent blue is restrained, not neon).
- Missing reveal highlight on interactive elements (this is a core Fluent behavior).
- Large border radius (`rounded-2xl` or higher is too round for Fluent — max is `rounded-lg`).
- Pure flat surfaces without any material treatment (Fluent materials add depth through blur).
- Mixing too many materials (keep acrylic for overlays, mica for base, solid for content).

## Typography Recommendations

- Primary: Segoe UI (Windows), or Inter / SF Pro on non-Windows platforms.
- Mono: Cascadia Code, Consolas, or SF Mono.
- Sizes: `text-sm` (14px) for body, `text-base` (16px) for primary content, `text-xl` to `text-3xl` for headings.
- Weights: `font-normal` (400) for body, `font-semibold` (600) for emphasis, `font-bold` not commonly used.
- Fluent is restrained: no `font-black`, no decorative fonts.

## Accessibility Considerations

- Fluent Design is built for accessibility by default: high contrast, clear focus indicators.
- Acrylic must maintain WCAG AA text contrast — use solid fallback for non-supporting browsers.
- Reveal highlight is a visual enhancement, not a functional requirement; keyboard focus must work without it.
- Focus ring (`focus:ring-2 focus:ring-[#0078d4]`) is mandatory for keyboard navigation.
- Respect `prefers-reduced-motion`: disable connected animations and slide entrances.
- Respect `prefers-reduced-transparency`: replace acrylic/mica with solid backgrounds.
- High Contrast Mode support: test with Windows High Contrast themes.
