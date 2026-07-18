---
name: motion-craft
description: "Animation engineering principles: interruptible transitions, enter/exit choreography, spring physics, and reduced-motion fallbacks."
---

# Motion Craft

Motion communicates causality, hierarchy, and spatial relationships. Bad motion communicates nothing or, worse, lies about the interface. Apply these rules to every animated element.

## When to Animate

Animate to explain, not to decorate:

- **State change**: A toggle flipping, a panel expanding, a filter applying.
- **Spatial relationship**: A sidebar sliding from the left, a modal growing from its trigger.
- **Causality**: A button press causing a result, a drag moving content.
- **Hierarchy**: The primary action animates first, supporting elements follow.

Never animate because the page "feels static." Static is correct when nothing is changing.

## Interruptible Animations

Users change intent mid-interaction. If an animation cannot be interrupted, the interface feels broken.

| Type | Interruptible? | Use for |
| --- | --- | --- |
| CSS Transition | Yes — retargets to latest state | Hover, toggle, open/close, drag |
| CSS Keyframes | No — runs fixed timeline | Enter animations, loading sequences |

```css
/* Good: interruptible transition for interactive state */
.drawer {
  transition: transform 200ms cubic-bezier(0.32, 0.72, 0, 1);
  transform: translateX(-100%);
}
.drawer.open { transform: translateX(0); }

/* Bad: keyframe animation on an interactive element — cannot retarget */
@keyframes slide-in { from { transform: translateX(-100%); } to { transform: translateX(0); } }
```

## Duration

| Interaction | Duration | Easing |
| --- | --- | --- |
| Micro (hover, press, toggle) | 100-200ms | ease-out |
| Small UI (panel, dropdown) | 200-300ms | cubic-bezier(0.32, 0.72, 0, 1) |
| Large UI (page, full modal) | 300-500ms | spring-like cubic-bezier |
| Large narrative transition | 350-800ms | custom |

Exits are shorter than entrances. If entrance is 300ms, exit is 200ms.

## Easing

- **ease-out** for entering elements: fast start, slow end. Feels responsive.
- **ease-in** for exiting elements: slow start, fast exit. Gets out of the way.
- **spring** for physical interactions: slight overshoot communicates weight and momentum.
- Never use `linear` for interface animation. Nothing in nature moves linearly.

```css
:root {
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

Avoid `transition: all`. Name the property explicitly: `transition: transform 200ms var(--ease-out)`.

## Enter/Exit Choreography

When multiple elements enter together, stagger them:

```css
.item {
  opacity: 0;
  transform: translateY(8px);
  animation: enter 300ms var(--ease-out) forwards;
}
.item:nth-child(1) { animation-delay: 0ms; }
.item:nth-child(2) { animation-delay: 60ms; }
.item:nth-child(3) { animation-delay: 120ms; }
```

Stagger gap: 40-80ms between items. Cap total stagger duration at 400ms — beyond that it feels slow.

## Spring Physics (Apple-style)

For drag and swipe interactions, spring physics beat fixed durations:

- The element follows the finger with slight lag (tracking).
- On release, it settles with a damped spring (slight overshoot, quick settle).
- Velocity from the gesture carries into the release animation.

This requires JS (CSS cannot read gesture velocity). Use a spring library or compute manually.

## Reduced Motion

Under `prefers-reduced-motion: reduce`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Show final content immediately. Preserve state feedback with opacity-only changes where useful. Never hide content behind a reduced-motion gate.

## Performance

- Animate `transform` and `opacity` only. These are GPU-composited.
- Never animate `width`, `height`, `top`, `left`, `margin`, or `padding` — they trigger layout reflow.
- Avoid permanent `will-change`. Set it before animation, remove after.
- Limit simultaneous animated elements to ~15 on mobile.
