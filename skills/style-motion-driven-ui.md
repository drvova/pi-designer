---
name: motion-driven-ui
description: Build motion-driven UI components (cinematic animations, scroll-triggered reveals, choreographed transitions, physics-based interactions, timeline-driven storytelling) with spring physics, staggered sequences, shared element transitions, and animation as a core design principle. Trigger this skill when the user asks for motion-driven design, cinematic UI, scroll animations, spring physics, choreographed transitions, or animation-first interfaces.
---

# Motion-Driven UI

Use this skill to design and implement interfaces where motion is a first-class design principle — not decoration, but the primary tool for hierarchy, feedback, storytelling, and spatial understanding.

## Non-Negotiable Foundations

- Motion is structural, not decorative. Every animation must serve a purpose: guide attention, provide feedback, establish spatial relationships, or tell a story.
- Animations must be smooth (60fps). Use GPU-accelerated properties (`transform`, `opacity`) only. Never animate `width`, `height`, `top`, `left`.
- Physics-based easing is the default. Linear timing functions are banned except for continuous loops (spinners, progress bars).
- Choreography matters: staggered sequences, synchronized groups, and timing relationships between elements create a cohesive feel.
- Respect `prefers-reduced-motion` at all times. Provide meaningful fallbacks, not just disabled animations.

## Core Motion Patterns

### 1) Scroll-Triggered Reveal

Elements animate into view as the user scrolls. The most common motion-driven pattern.

```css
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

Variations:
- Fade up: `translateY(30px) -> 0` + `opacity 0 -> 1`.
- Fade in place: `opacity 0 -> 1` (no transform).
- Scale in: `scale(0.95) -> 1` + `opacity 0 -> 1`.
- Slide from left/right: `translateX(-50px) -> 0` or `translateX(50px) -> 0`.
- Blur in: `filter: blur(10px) -> blur(0)` + `opacity 0 -> 1`.

Intersection Observer setup:
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
```

### 2) Staggered Sequence

Multiple elements animate in sequence with a delay between each.

```css
.stagger > * {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
.stagger.visible > *:nth-child(1) { transition-delay: 0ms; }
.stagger.visible > *:nth-child(2) { transition-delay: 80ms; }
.stagger.visible > *:nth-child(3) { transition-delay: 160ms; }
.stagger.visible > *:nth-child(4) { transition-delay: 240ms; }
.stagger.visible > *:nth-child(5) { transition-delay: 320ms; }
.stagger.visible > * {
  opacity: 1;
  transform: translateY(0);
}
```

Stagger delay: `60-100ms` between items. Too fast feels simultaneous; too slow feels laggy.

### 3) Spring Physics Hover

Elements respond to hover with spring-like overshoot.

```css
.spring-hover {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.spring-hover:hover {
  transform: scale(1.05) translateY(-4px);
}
```

The `cubic-bezier(0.34, 1.56, 0.64, 1)` creates an overshoot effect (goes past 1.05 then settles).

### 4) Shared Element Transition

Elements morph from one state to another during navigation (FLIP technique: First, Last, Invert, Play).

```javascript
// FLIP animation
function flipAnimate(element, fromRect) {
  const toRect = element.getBoundingClientRect();
  const dx = fromRect.left - toRect.left;
  const dy = fromRect.top - toRect.top;
  const dw = fromRect.width / toRect.width;
  const dh = fromRect.height / toRect.height;

  element.style.transform = `translate(${dx}px, ${dy}px) scale(${dw}, ${dh})`;
  element.style.transition = 'none';

  requestAnimationFrame(() => {
    element.style.transform = '';
    element.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
  });
}
```

### 5) Magnetic Cursor Effect

Elements subtly attracted to the cursor.

```javascript
element.addEventListener('mousemove', (e) => {
  const rect = element.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  element.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
});
element.addEventListener('mouseleave', () => {
  element.style.transform = '';
});
```

## Easing Function Library

Physics-based easing curves for natural motion:

| Curve | CSS `cubic-bezier()` | Use Case |
|---|---|---|
| Smooth settle | `(0.16, 1, 0.3, 1)` | Default: elements entering, scroll reveals |
| Spring overshoot | `(0.34, 1.56, 0.64, 1)` | Playful: hover effects, button presses |
| Gentle ease | `(0.4, 0, 0.2, 1)` | Standard: most UI transitions |
| Quick exit | `(0.4, 0, 1, 1)` | Elements leaving the screen |
| Bounce settle | `(0.68, -0.55, 0.265, 1.55)` | Emphasized: notifications, toasts |
| Linear | `linear` | ONLY for continuous loops (spinners) |

## Duration Guidelines

| Duration | Use Case |
|---|---|
| 100-200ms | Micro-interactions: button press, toggle, hover feedback |
| 200-300ms | Small UI transitions: tooltip, dropdown, small panel |
| 300-500ms | Standard transitions: modal, page section reveal, card expand |
| 500-800ms | Dramatic entrances: hero animation, large element reveal |
| 800ms+ | Cinematic: full-screen transitions, complex choreography |

Rule: shorter = snappier, longer = more cinematic. Match duration to element importance.

## Component Architecture Pattern

1. Background atmosphere (subtle gradient shifts, slow particle drift).
2. Hero section with choreographed entrance (title -> subtitle -> CTA staggered).
3. Scroll-triggered content reveals (each section animates in on scroll).
4. Interactive elements with spring physics (hover scale, magnetic cursor).
5. Page transitions (shared element morph, or fade+slide).
6. Loading states (skeleton screens with shimmer, not spinners).
7. Micro-interactions (button ripples, toggle springs, icon morphs).

Every layer has intentional motion. Static elements should feel like a choice, not an omission.

## Interaction Rules

- Default: calm, at rest.
- Hover: spring-scale or magnetic attraction (`transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)`).
- Click/active: quick press and release (`active:scale-95`, `duration-100`).
- Focus: smooth ring appearance (`transition: box-shadow 0.2s ease-out`).
- Scroll: reveal animations trigger at 15% visibility threshold.
- Page load: staggered hero entrance (title at 0ms, subtitle at 150ms, CTA at 300ms).
- Loading: skeleton shimmer, not spinner.
- Error: shake animation for wrong input (`animate-[shake_0.4s_ease-in-out]`).

## Scroll Animation Techniques

### Parallax (multi-speed layers)

```javascript
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.querySelectorAll('[data-parallax]').forEach((el) => {
    const speed = parseFloat(el.dataset.parallax);
    el.style.transform = `translateY(${scrollY * speed}px)`;
  });
});
```

Speed values: `0.1` (slow background), `0.3` (mid layer), `-0.2` (foreground moves opposite).

### Horizontal Scroll Sections

Sections that scroll horizontally as the user scrolls vertically (scroll-jacking).

### Progress Bar

A top progress bar that fills as the user scrolls.

```css
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 0.1s ease-out;
}
```

## Reusable Tailwind Tokens

- Smooth settle: `ease-[cubic-bezier(0.16,1,0.3,1)]`
- Spring overshoot: `ease-[cubic-bezier(0.34,1.56,0.64,1)]`
- Reveal base: `opacity-0 translate-y-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]`
- Reveal visible: `opacity-100 translate-y-0`
- Spring hover: `transition-transform duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105`
- Stagger delay pattern: `[animation-delay:200ms]` per child or inline `style="transition-delay: 80ms"`.

## Quality Checklist (must pass)

- All animations use GPU-accelerated properties (`transform`, `opacity`).
- Easing is physics-based (no `linear` except for loops).
- Scroll reveals trigger smoothly with Intersection Observer.
- Staggered sequences have consistent timing (60-100ms between items).
- Hover effects use spring overshoot for a lively feel.
- `prefers-reduced-motion` is respected with meaningful fallbacks.
- Animations are 60fps (no jank, no layout thrashing).
- Loading states use skeleton screens, not spinners.
- Motion guides attention: the most important elements animate first.
- Transitions between states are choreographed, not abrupt.

## Anti-Patterns

- Animating `width`, `height`, `top`, `left` (causes layout recalculation and jank).
- Using `linear` easing for UI transitions (feels robotic).
- Animating too many elements simultaneously (overwhelming).
- Ignoring `prefers-reduced-motion` (accessibility violation).
- Spinners for loading (use skeleton screens instead).
- Animations longer than 800ms for standard UI (too slow, feels broken).
- Missing hover/focus motion (static interactive elements feel dead).
- Random stagger delays (use consistent 60-100ms increments).
- Animating every element on the page (motion fatigue).
- Using JavaScript for animations that CSS can handle (performance).

## Accessibility Considerations

- `prefers-reduced-motion: reduce` must disable ALL non-essential motion.
- Reduced-motion fallback: elements appear instantly without transform/opacity transitions.
- Parallax and scroll-jacking can cause motion sickness; disable for reduced-motion users.
- Do not auto-play video or looping animations without user consent.
- Ensure motion does not interfere with keyboard navigation timing.
- Focus indicators must remain visible during and after animations.
- Screen readers must be able to access content even if entrance animations have not fired (content should be in the DOM, just visually hidden).
- Provide pause controls for any continuous animation.
- Magnetic cursor effects must not prevent standard pointer interaction.
