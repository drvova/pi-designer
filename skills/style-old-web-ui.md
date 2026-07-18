---
name: old-web-ui
description: Build Old Web / Webcore UI components (GeoCities-era 90s web design, animated GIFs, marquees, visitor counters, guestbooks, under construction banners, webrings, glitter graphics) with authentic HTML table layouts, system fonts, and the chaotic creative energy of Web 1.0. Trigger this skill when the user asks for old web, Webcore, GeoCities aesthetic, Web 1.0 design, 90s website, retro internet, or early-web nostalgia interfaces.
---

# Old Web / Webcore UI

Use this skill to design and implement authentic 1990s-early 2000s web aesthetics: animated GIFs, scrolling marquees, visitor counters, guestbooks, "under construction" banners, webrings, glitter graphics, HTML table layouts, system fonts, and the chaotic creative energy of the early internet.

## Non-Negotiable Foundations

- Old Web celebrates the unpolished, amateur-created web of 1995-2005: GeoCities, Angelfire, Tripod personal homepages.
- Layouts are rigid and table-based: visible or invisible HTML tables create modular, boxy layouts.
- Typography uses system fonts: Times New Roman, Arial, Courier New, Comic Sans MS. Underlined blue links are universal.
- Colors are clashing and saturated: hot pink, lime green, electric blue, bright yellow on tiled backgrounds.
- Interactivity features now-obsolete elements: visitor counters, guestbooks, webrings, "under construction" GIFs.
- The aesthetic is intentionally amateur: no design systems, no consistency, just raw creative expression.

## Core Material Recipes

### 1) Tiled Background

The signature 90s web background: a repeating tiled image or pattern.

- Star tile: `bg-[url('data:image/svg+xml,...')] bg-repeat` (small repeating pattern).
- CSS tile: `bg-[linear-gradient(135deg,#000080_25%,transparent_25%),linear-gradient(225deg,#000080_25%,transparent_25%),linear-gradient(45deg,#000080_25%,transparent_25%),linear-gradient(315deg,#000080_25%,transparent_25%)] bg-[size:20px_20px] bg-[#000033]`.
- Simple solid: `bg-[#000033]` (navy), `bg-[#000000]` (black), or `bg-[#ffffcc]` (cream).

### 2) Animated Rainbow Heading

The classic cycling-color title.

```css
@keyframes rainbow {
  0% { color: #ff0000; }
  16% { color: #ff8800; }
  33% { color: #ffff00; }
  50% { color: #00ff00; }
  66% { color: #0088ff; }
  83% { color: #8800ff; }
  100% { color: #ff0000; }
}
.rainbow-text {
  animation: rainbow 3s linear infinite;
  font-family: 'Comic Sans MS', cursive;
  font-weight: bold;
}
```

### 3) Marquee Banner

Scrolling text banner (CSS recreation of the `<marquee>` tag).

```css
@keyframes marquee {
  from { transform: translateX(100%); }
  to { transform: translateX(-100%); }
}
.marquee {
  overflow: hidden;
  white-space: nowrap;
}
.marquee-content {
  display: inline-block;
  animation: marquee 15s linear infinite;
}
```

### 4) Visitor Counter

Retro LCD-style hit counter.

```html
<div class="font-mono text-2xl flex gap-0">
  <span class="bg-black text-[#00ff00] px-1 border border-[#333]">0</span>
  <span class="bg-black text-[#00ff00] px-1 border border-[#333]">0</span>
  <span class="bg-black text-[#00ff00] px-1 border border-[#333]">1</span>
  <span class="bg-black text-[#00ff00] px-1 border border-[#333]">3</span>
  <span class="bg-black text-[#00ff00] px-1 border border-[#333]">3</span>
  <span class="bg-black text-[#00ff00] px-1 border border-[#333]">7</span>
</div>
```

### 5) Under Construction Banner

The iconic yellow/black caution tape with construction GIF vibe.

- `bg-[repeating-linear-gradient(45deg,#ffcc00,#ffcc00_10px,#000000_10px,#000000_20px)] py-2 px-4 text-center font-bold text-[#000033]`.
- Add spinning construction icon emoji: `🚧`.

### 6) Web Ring Navigation

Retro webring widget for linking between sites.

```html
<div class="text-center font-mono text-xs">
  <a href="#" class="text-[#0000ee] underline">◀ Previous</a>
  <span class="text-[#000033]"> | </span>
  <a href="#" class="text-[#0000ee] underline">Web Ring</a>
  <span class="text-[#000033]"> | </span>
  <a href="#" class="text-[#0000ee] underline">Next ▶</a>
</div>
```

### 7) Glitter Graphic / Word Art

Beveled, colorful text with drop shadow (classic WordArt/Photoshop Effects).

- `font-[Comic_Sans_MS] text-4xl font-bold text-[#ff00ff] [text-shadow:2px_2px_0_#0000ff,-2px_-2px_0_#00ff00] bg-gradient-to-r from-[#ff00ff] to-[#00ffff] bg-clip-text text-transparent`.
- Alternative: `text-4xl font-bold [text-shadow:3px_3px_0_#666,4px_4px_0_#333] text-[#ff0000]`.

### 8) Beveled Button (Windows 95-style)

Classic 3D beveled button.

- `bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080] px-4 py-2 font-ms-sans text-sm text-black active:border-t-[#808080] active:border-l-[#808080] active:border-b-white active:border-r-white`.

### 9) HTML Table Layout

The foundational 90s layout structure.

```html
<table class="w-full" cellpadding="4" cellspacing="0">
  <tr>
    <td class="w-1/4 bg-[#000033] align-top text-white p-4"><!-- Sidebar --></td>
    <td class="bg-[#ffffcc] align-top p-4"><!-- Main content --></td>
    <td class="w-1/4 bg-[#000033] align-top text-white p-4"><!-- Right bar --></td>
  </tr>
</table>
```

## Color Palette System

### Classic GeoCities Palette

| Color | Hex | Role |
|---|---|---|
| Navy | `#000033` / `#000080` | Dark background, sidebar |
| Hot Pink | `#ff00ff` | Heading, accent |
| Cyan | `#00ffff` | Link hover, accent |
| Electric Blue | `#0000ee` | Standard hyperlink |
| Lime Green | `#00ff00` | Text on dark, counter |
| Yellow | `#ffcc00` / `#ffff00` | Construction, highlight |
| Cream | `#ffffcc` | Light background |
| Black | `#000000` | Text on light, borders |
| Gray | `#c0c0c0` | Windows 95 chrome |

Rules: Colors should CLASH. The early web had no design systems. Hot pink on navy, lime green on black, cyan on blue. The chaos is authentic.

## Typography System

Old Web uses system fonts exclusively. No web fonts.

| Font | Use Case |
|---|---|
| **Times New Roman** | Default body text, formal content |
| **Arial** | Headings, navigation |
| **Courier New** | Code, technical content, data |
| **Comic Sans MS** | Playful headings, personal content |
| **Verdana** | Readable body text alternative |
| **Impact** | Bold headlines |

Rules:
- Underlined blue links (`text-[#0000ee] underline`) are universal.
- Headings use `<h1>` through `<h6>` with default browser sizing (or close to it).
- `font-size` uses small values: `12px`, `14px`, `16px` body; `24px` to `36px` headings.
- Font tags were used inline in the 90s; today, use CSS classes that replicate the effect.

## Component Architecture Pattern

1. Tiled background pattern (stars, clouds, or solid dark color).
2. HTML table layout (header row, sidebar + main content + right bar).
3. Animated rainbow heading at the top.
4. Marquee banner with scrolling welcome message.
5. Main content area with Times New Roman body text and blue underlined links.
6. Sidebar with navigation, visitor counter, web ring, and badges.
7. Footer with "Best viewed in Netscape Navigator" badge and guestbook link.
8. "Under construction" section with caution tape.

## Interaction Rules

- Default state: static, simple, HTML-like.
- Links: blue underlined text, purple when visited (`text-[#551a8b]`).
- Hover: link turns red (`hover:text-[#ff0000]`) — classic web behavior.
- Buttons: Windows 95 bevel press (border inverts on `active:`).
- Focus: default browser outline (`outline: auto`).
- Transitions: NONE. The 90s web had no transitions.
- Animations: CSS keyframe equivalents of `<marquee>`, `<blink>`, and animated GIFs.
- Blink: `@keyframes blink { 50% { opacity: 0; } }` at `animation: blink 1s step-start infinite`.

## Reusable Tailwind Tokens

- Tiled bg: `bg-[#000033]` or pattern via `bg-[url(...)] bg-repeat`
- Rainbow heading: `animation: rainbow 3s linear infinite; font-family: 'Comic Sans MS'`
- Marquee: `overflow-hidden whitespace-nowrap` with CSS animation
- Visitor counter: `font-mono bg-black text-[#00ff00] border border-[#333]`
- Under construction: `bg-[repeating-linear-gradient(45deg,#ffcc00,#ffcc00_10px,#000_10px,#000_20px)]`
- Beveled button: `bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080]`
- Blue link: `text-[#0000ee] underline hover:text-[#ff0000]`
- Win95 window: `bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080]`

## Quality Checklist (must pass)

- Background is tiled, solid dark, or patterned (not modern gradient).
- Typography uses system fonts (Times New Roman, Arial, Comic Sans).
- Links are blue and underlined (`#0000ee underline`).
- At least one animated element (marquee, rainbow text, or blinking badge).
- Layout uses visible or invisible table structure (boxy, modular).
- At least one classic widget: visitor counter, web ring, guestbook, or under construction.
- Colors clash authentically (hot pink on navy, lime on black).
- At least one glitter graphic or Word Art-style heading effect.
- Buttons use Windows 95 beveled style (inset/outset borders).
- The aesthetic reads as a 1995-2005 personal homepage.

## Anti-Patterns

- Modern web fonts (Inter, Roboto — these didn't exist in the 90s).
- CSS Grid or Flexbox layouts (use table-like structure for authenticity).
- Smooth, modern animations and transitions (the 90s web was instant or animated-GIF).
- Modern color palettes (muted, harmonious — old web colors CLASH).
- Minimalist design (old web was maximalist and cluttered).
- Responsive design (old web was desktop-only; if adapting, maintain the boxy feel).
- Modern shadows (`shadow-lg` with blur — use hard bevel borders instead).
- Rounded corners (use `rounded-none` — the 90s web was sharp).
- Missing links being underlined blue (this is universal old web).
- Consistent spacing and alignment (old web was intentionally inconsistent).

## Accessibility Considerations

- Old Web's high contrast (bright colors on dark backgrounds) can be visually accessible.
- However, blinking text (`<blink>` equivalent) can trigger seizures — use sparingly and respect `prefers-reduced-motion`.
- Underlined blue links are actually excellent for link recognition.
- Table layouts can confuse screen readers — use semantic HTML landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`) inside the visual table structure.
- Animated rainbow text and marquees must respect `prefers-reduced-motion` (disable all animation).
- Tiled backgrounds must not reduce text contrast below WCAG AA.
- Visitor counters are decorative — ensure they have `aria-hidden="true"` or are functional.
- Comic Sans MS is actually MORE readable for some users with dyslexia — this is an accessibility advantage.
- Ensure touch targets are adequate despite the 90s aesthetic (tables can create small cells).
