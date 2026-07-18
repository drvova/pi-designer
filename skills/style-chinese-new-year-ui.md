---
name: chinese-new-year-ui
description: Build Chinese New Year / Lunar New Year UI components (red lanterns, gold dragons, paper cuttings, spring couplets, firecrackers, zodiac animals, gold coin envelopes, festive abundance) with red-and-gold celebration palette, papercraft decorations, and the joyous cultural richness of Spring Festival. Trigger this skill when the user asks for Chinese New Year, Lunar New Year, Spring Festival, red envelope, lantern festival, or Chinese celebration interfaces.
---

# Chinese New Year / Lunar New Year UI

Use this skill to design and implementation festive, abundant interfaces inspired by Chinese New Year celebrations: red lanterns glowing against gold, papercut decorations (jianzhi), spring couplets on doorways, firecracker strings, zodiac animal motifs, and the overwhelming joy of Spring Festival renewal.

## Core Material Recipes

### 1) Festive Red-and-Gold Panel

The signature surface: vermillion red with gold ornament.

- `bg-[#c41e1e] border-[3px] border-[#f5cc3a] p-8 shadow-[0_4px_16px_rgba(196,30,30,0.2),0_0_20px_rgba(245,204,58,0.1)]`.

### 2) Red Lantern Decoration

Glowing paper lantern SVG.

```html
<svg viewBox="0 0 60 80" class="w-15 h-20">
  <ellipse cx="30" cy="35" rx="22" ry="25" fill="#c41e1e" stroke="#8a1010" stroke-width="1"/>
  <rect x="22" y="8" width="16" height="5" rx="1" fill="#f5cc3a"/>
  <rect x="22" y="60" width="16" height="5" rx="1" fill="#f5cc3a"/>
  <!-- Gold character -->
  <text x="30" y="40" font-size="14" fill="#f5cc3a" text-anchor="middle" font-weight="bold">福</text>
  <!-- Tassel -->
  <line x1="30" y1="65" x2="28" y2="78" stroke="#f5cc3a" stroke-width="1"/>
  <line x1="30" y1="65" x2="30" y2="80" stroke="#f5cc3a" stroke-width="1"/>
  <line x1="30" y1="65" x2="32" y2="78" stroke="#f5cc3a" stroke-width="1"/>
</svg>
```

### 3) Papercut (Jianzhi) Decoration

Intricate symmetric paper-cut pattern border.

```html
<svg viewBox="0 0 200 40" class="w-full opacity-30">
  <g fill="#c41e1e">
    <path d="M0,20 Q10,5 20,20 Q30,35 40,20 Q50,5 60,20 Q70,35 80,20 Q90,5 100,20 Q110,35 120,20 Q130,5 140,20 Q150,35 160,20 Q170,5 180,20 Q190,35 200,20 L200,40 L0,40 Z"/>
    <!-- Symmetric cut details -->
    <circle cx="20" cy="20" r="3" fill="#f5cc3a"/>
    <circle cx="60" cy="20" r="3" fill="#f5cc3a"/>
    <circle cx="100" cy="20" r="3" fill="#f5cc3a"/>
    <circle cx="140" cy="20" r="3" fill="#f5cc3a"/>
    <circle cx="180" cy="20" r="3" fill="#f5cc3a"/>
  </g>
</svg>
```

### 4) Spring Couplets (Chunlian)

Red paper strips with gold calligraphy.

- `bg-[#c41e1e] w-12 py-8 px-2 text-center shadow-[2px_2px_8px_rgba(0,0,0,0.15)] rotate-[2deg]`.
- Calligraphy: `font-serif font-bold text-[#f5cc3a] text-lg leading-tight` showing characters vertically (迎春接福).

### 5) Red Envelope (Hongbao)

Lucky red envelope card shape.

- `bg-[#c41e1e] rounded-lg p-6 w-48 shadow-[0_4px_12px_rgba(0,0,0,0.15)] border-2 border-[#f5cc3a]`.
- Gold ornament: `text-[#f5cc3a] text-4xl text-center font-bold` showing 福 or 喜.

### 6) Firecracker String Accent

Red firecracker decoration column.

```html
<div class="flex flex-col items-center gap-1">
  <div class="w-3 h-6 bg-[#c41e1e] rounded-sm border border-[#8a1010]"></div>
  <div class="w-3 h-6 bg-[#c41e1e] rounded-sm border border-[#8a1010]"></div>
  <div class="w-3 h-6 bg-[#c41e1e] rounded-sm border border-[#8a1010]"></div>
  <div class="w-3 h-6 bg-[#c41e1e] rounded-sm border border-[#8a1010]"></div>
  <div class="w-3 h-6 bg-[#c41e1e] rounded-sm border border-[#8a1010]"></div>
</div>
```

### 7) Dragon Dance Motif

Coiling Chinese dragon SVG accent.

```html
<svg viewBox="0 0 120 60" class="w-30 h-15 opacity-40">
  <g fill="#f5cc3a" stroke="#c47a1a" stroke-width="0.5">
    <path d="M0,30 Q20,10 40,30 Q60,50 80,30 Q100,10 120,30" fill="none" stroke="#f5cc3a" stroke-width="2"/>
    <circle cx="115" cy="30" r="6"/>
    <path d="M110,25 L108,18 M115,22 L115,14 M120,25 L122,18"/>
    <circle cx="113" cy="28" r="1.5" fill="#1a1a1a"/>
  </g>
</svg>
```

### 8) New Year Button

Gold-on-red festive button.

- `bg-gradient-to-b from-[#f5cc3a] to-[#c48a1a] text-[#8a0a0a] font-serif font-bold uppercase tracking-wider px-8 py-3 border-2 border-[#c41e1e] shadow-[0_4px_0_#8a0a0a] hover:translate-y-1 hover:shadow-[0_2px_0_#8a0a0a] active:shadow-none transition-all`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Festival Red | `#c41e1e` | Primary (happiness, fortune) |
| Deep Red | `#8a0a0a` | Shadow, depth |
| Gold | `#f5cc3a` | Primary accent (wealth, prosperity) |
| Deep Gold | `#c48a1a` | Shadow gold |
| Black | `#1a1a1a` | Calligraphy ink |
| Cream | `#fff5e0` | Light accent |

Rules: Red and gold are the ONLY colors (this is non-negotiable for CNY). Red = happiness, gold = wealth. Everything should feel abundantly festive and overwhelmingly lucky.

## Typography Recommendations

- **Display:** Noto Serif SC, Playfair Display (serif with Chinese character support).
- **Chinese calligraphy:** Noto Serif SC bold for 福 (fortune), 喜 (joy), 春 (spring).
- **Body:** Inter, DM Sans (clean readable sans).
- **Labels:** `font-serif font-bold uppercase tracking-widest text-sm text-[#f5cc3a]`.
- Chinese characters should appear as decorative accents on panels and envelopes.

## Reusable Tailwind Tokens

- Festival panel: `bg-[#c41e1e] border-[3px] border-[#f5cc3a] shadow-[0_0_20px_rgba(245,204,58,0.1)]`.
- Red envelope: `bg-[#c41e1e] rounded-lg border-2 border-[#f5cc3a]`.
- Lantern: SVG red ellipse with gold character and tassel.
- Papercut border: SVG symmetric wave-cut pattern in red/gold.
- Couplets: `bg-[#c41e1e] w-12 rotate-[2deg] font-serif text-[#f5cc3a]`.
- CNY button: `bg-gradient-to-b from-[#f5cc3a] to-[#c48a1a] text-[#8a0a0a] border-2 border-[#c41e1e] shadow-[0_4px_0_#8a0a0a]`.

## Quality Checklist

- Red-and-gold palette exclusively (no other colors).
- At least one red lantern SVG decoration.
- At least one papercut (jianzhi) border or decoration.
- Red envelope (hongbao) card shape present.
- Chinese calligraphy characters (福/喜/春) as accents.
- Spring couplets (chunlian) red paper strips present.
- Firecracker string or dragon dance decoration.
- Typography supports Chinese characters (Noto Serif SC).
- The aesthetic reads as Chinese New Year / Lunar New Year / Spring Festival.
- Everything feels festive, abundant, and joyously lucky.

## Anti-Patterns

- Any color other than red and gold (CNY is strictly red + gold).
- Missing lanterns (red lanterns are the most iconic CNY symbol).
- Missing papercut decorations (jianzhi is a hallmark CNY craft).
- Missing Chinese calligraphy characters (福/喜/春 are essential).
- Missing red envelopes (hongbao are central to the gift-giving tradition).
- Missing spring couplets (chunlian on doorways are ubiquitous).
- Modern minimalist restraint (CNY is ABUNDANT and festive).
- Sans-serif without Chinese character support.
- Dark somber atmosphere (CNY is the most joyous celebration).
- Cool color palettes (red and gold are mandatory — no blues or greens).

## Accessibility Considerations

- Red backgrounds with gold text must be verified (WCAG AA for large/bold — `#f5cc3a` on `#c41e1e` passes for large text).
- Use dark text on gold buttons for better contrast (`#8a0a0a` on `#f5cc3a`).
- Focus states: `focus:ring-4 focus:ring-[#f5cc3a]/50` (gold ring on red).
- Chinese characters need `lang="zh"` attribute for screen readers.
- Decorative SVGs (lanterns, dragons, papercuts) must be `aria-hidden="true"`.
- Touch targets must be adequate despite festive border styling.
- The high-saturation red palette may cause eye strain — ensure adequate contrast.
