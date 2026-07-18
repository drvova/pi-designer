---
name: liminal-space-ui
description: Build liminal space UI components (eerie empty corridors, backrooms aesthetic, fluorescent-lit emptiness, uncanny nostalgia, dreamlike disorientation) with yellowed wallpaper, damp carpet tones, flickering fluorescent light, and the unsettling beauty of transitional spaces. Trigger this skill when the user asks for liminal space, backrooms aesthetic, eerie empty UI, dreamcore, uncanny valley design, or nostalgic disorientation interfaces.
---

# Liminal Space UI

Use this skill to design and implement eerie, uncanny interfaces inspired by liminal spaces: empty mall corridors, hotel hallways that go on too long, backrooms with yellowed wallpaper and damp carpet, and the unsettling nostalgia of places that feel familiar but wrong.

## Non-Negotiable Foundations

- Liminal space UI evokes the feeling of being in a transitional space — a hallway, an empty mall, a school after hours. It is familiar but unsettling.
- Colors are muted, yellowed, and slightly sickly: aged wallpaper yellow, damp carpet mustard, fluorescent white-green, and faded institutional tones.
- Typography is institutional and slightly dated: default system fonts, monospace, or sans-serif that feels like signage from the 1990s.
- Imagery (if used) is eerily empty: corridors, doorways, stairwells, pools, with no people.
- Motion is slow, slightly off-rhythm, and dreamlike — fluorescent flicker, slow drift, unnatural pauses.
- The interface should feel like you stumbled into it, not like it was designed for you.

## Core Material Recipes

### 1) Yellowed Wallpaper Background

The signature backrooms surface: aged yellow wallpaper.

- Background: `bg-[#d7d679]` (aged mustard yellow).
- Texture: subtle SVG noise at `opacity-[0.06]` (stained, damp wall).
- Pattern: faint vertical stripes `bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_60px,rgba(0,0,0,0.03)_60px,rgba(0,0,0,0.03)_62px)]`.
- Full: `bg-[#d7d679] bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_60px,rgba(0,0,0,0.03)_60px,rgba(0,0,0,0.03)_62px)]`

### 2) Fluorescent Light Card

Institutional surface lit by harsh fluorescent light.

- `bg-[#e8e8d0] border border-[#c4c4a0] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.15)]`.
- The surface is slightly too bright, slightly too flat — institutional lighting.

### 3) EXIT Sign Element

Green/red institutional EXIT sign as a decorative or navigational element.

- `bg-[#1a3a1a] text-[#00ff00] font-mono font-bold text-xs uppercase tracking-widest px-3 py-1 text-center`.
- With glow: `[text-shadow:0_0_4px_rgba(0,255,0,0.6)]`.

### 4) Flickering Text

Text with subtle fluorescent flicker animation.

```css
@keyframes flicker {
  0%, 100% { opacity: 1; }
  92% { opacity: 1; }
  93% { opacity: 0.4; }
  94% { opacity: 1; }
  96% { opacity: 0.6; }
  97% { opacity: 1; }
}
.flicker { animation: flicker 4s infinite; }
```

### 5) Doorway / Corridor Divider

Divider suggesting depth and passage.

- `bg-gradient-to-b from-[#c4c4a0] via-[#d7d679] to-[#c4c4a0] h-12 border-y border-[#a0a080]`.
- Optional vanishing point: `bg-[radial-gradient(ellipse_at_center,transparent_30%,#c4c4a0_70%)]`.

### 6) Liminal Button

Institutional, slightly unsettling button.

- `bg-[#c4c4a0] text-[#3a3a2a] font-mono text-sm border border-[#a0a080] px-6 py-3 hover:bg-[#d4d4b0] transition-colors`.
- Alternative: `bg-transparent text-[#5a5a3a] font-mono underline underline-offset-4 hover:text-[#3a3a2a]`.

### 7) Damp Carpet Strip

Decorative strip reminiscent of commercial carpet.

- `h-4 bg-[#8f905a] bg-[repeating-linear-gradient(45deg,#8f905a,#8f905a_4px,#7a7b4a_4px,#7a7b4a_8px)]`.

## Color Palette System

### The Backrooms Palette

| Color | Hex | Role |
|---|---|---|
| Wallpaper Yellow | `#d7d679` | Primary background |
| Damp Mustard | `#b3a66b` | Secondary surfaces |
| Carpet Olive | `#8f905a` | Decorative strips |
| Fluorescent White | `#e8e8d0` | Card surfaces |
| Institutional Gray | `#c4c4a0` | Borders, dividers |
| EXIT Green | `#00ff00` | Navigation, glow accents |
| Dim Text | `#3a3a2a` | Body text (dark olive) |
| Faded Ink | `#5a5a3a` | Secondary text |
| Deep Shadow | `#494d2e` | Shadow tones, depth |
| Void Black | `#1b1f1a` | Deep contrast, exits |

Rules: The palette should feel SLIGHTLY WRONG — too yellow, too muted, institutional and uncomfortable. Colors are faded and aged. The only bright accent is EXIT green, which should feel like a fluorescent tube in a dark hallway.

## Typography Recommendations

Liminal typography is institutional, slightly dated, and unsettlingly default:

- **Primary:** System UI sans-serif (`system-ui`, `sans-serif`) — the most generic, default font possible.
- **Monospace:** JetBrains Mono, Courier New (institutional signage feel).
- **Headings:** Default browser heading styles at `font-normal` to `font-medium` (avoid bold or decorative — liminal is generic).
- **Labels:** `font-mono text-xs uppercase tracking-widest` (exit sign style).
- Avoid fancy web fonts. Liminal typography should feel like it came with the building.

## Component Architecture Pattern

1. Yellowed wallpaper background (aged, slightly stained).
2. Fluorescent-lit content cards (institutional, slightly too bright).
3. EXIT sign navigation elements.
4. Doorway/corridor dividers suggesting depth and passage.
5. Flickering text or subtle light malfunction effects.
6. Damp carpet decorative strips.
7. Eerie emptiness — generous negative space, sparse content.

## Interaction Rules

- Default state: eerie, institutional, slightly uncomfortable.
- Hover: barely perceptible change (slight brightening, like fluorescent warming up).
  - `hover:bg-[#d4d4b0] transition-colors duration-300`.
- Active: `active:bg-[#b4b490]`.
- Focus: `focus:outline-none focus:ring-1 focus:ring-[#00ff00]/50` (thin, institutional).
- Transitions: `transition-all duration-500` (slow, dreamlike, slightly too long).
- Fluorescent flicker: occasional opacity drops (see flicker keyframes above).
- No satisfying, rewarding feedback. Interactions should feel slightly hollow.

## Reusable Tailwind Tokens

- Wallpaper bg: `bg-[#d7d679] bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_60px,rgba(0,0,0,0.03)_60px,rgba(0,0,0,0.03)_62px)]`
- Fluorescent card: `bg-[#e8e8d0] border border-[#c4c4a0] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.15)]`
- EXIT sign: `bg-[#1a3a1a] text-[#00ff00] font-mono font-bold text-xs uppercase tracking-widest [text-shadow:0_0_4px_rgba(0,255,0,0.6)]`
- Carpet strip: `h-4 bg-[#8f905a] bg-[repeating-linear-gradient(45deg,#8f905a,#8f905a_4px,#7a7b4a_4px,#7a7b4a_8px)]`
- Liminal button: `bg-[#c4c4a0] text-[#3a3a2a] font-mono text-sm border border-[#a0a080] px-6 py-3`
- Flicker: CSS keyframes with occasional opacity drops.

## Quality Checklist (must pass)

- Background is aged/muted yellow (not bright, not white — aged wallpaper).
- Typography is institutional and generic (system fonts, monospace).
- Color palette is muted, yellowed, and slightly uncomfortable.
- At least one EXIT sign or institutional signage element.
- Generous negative space (the interface feels eerily empty).
- Fluorescent flicker effect on at least one element.
- At least one doorway/corridor depth reference.
- Damp carpet decorative strip present.
- Motion is slow, dreamlike, and slightly off-rhythm.
- The aesthetic reads as unsettling familiarity — like a place you've been in a dream.

## Anti-Patterns

- Bright, vibrant, or cheerful color palettes (liminal is muted and eerie).
- Modern, polished web fonts (liminal uses generic system fonts).
- Satisfying, rewarding interactions (feedback should feel slightly hollow).
- Dense, busy layouts (liminal is sparse and empty).
- Warm, cozy, or welcoming mood (liminal is cold and unsettling).
- Sharp, precise animations (motion should be slow and dreamlike).
- Colorful accents or decorative illustrations (liminal is institutional and bare).
- Gradients or vibrant surfaces (liminal is flat and institutional).
- Rounded corners (use `rounded-none` — institutional architecture is angular).
- Missing the unsettling quality (the wrongness is the aesthetic).

## Accessibility Considerations

- Muted yellowed palette can reduce text contrast; verify WCAG AA carefully.
- Dark olive text on yellowed backgrounds must meet minimum contrast ratios.
- Flicker animations can trigger discomfort or seizures in sensitive users — MUST respect `prefers-reduced-motion` (disable all flicker).
- Focus states must be visible: `focus:ring-1 focus:ring-[#00ff00]/50`.
- The eerie aesthetic should not compromise usability — navigation must remain clear despite the unsettling mood.
- Generous negative space aids cognitive accessibility by reducing visual noise.
- Ensure content is logically structured for screen readers despite the sparse visual layout.
- EXIT signs and navigation must be functional, not just decorative.
