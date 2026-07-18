---
name: slot-machine-ui
description: Build slot machine UI components (spinning reels, fruit symbols, lucky 7s, BAR symbols, lever pull, coin tray, bell rings, jackpot lights, casino floor excitement) with spinning reel animations, flashing win indicators, and the addictive mechanical feedback of the one-armed bandit. Trigger this skill when the user asks for slot machine, one-armed bandit, fruit machine, pokies, reel spin, or jackpot interfaces.
---

# Slot Machine UI

Use this skill to design and implementation mechanical interfaces inspired by slot machines: spinning reel columns with fruit/lucky-7/BAR symbols, lever-pull interactions, coin tray displays, flashing jackpot lights, bell-ring win celebrations, and the carefully engineered excitement of the one-armed bandit.

## Core Material Recipes

### 1) Cabinet Panel

The slot machine cabinet housing.

- `bg-gradient-to-b from-[#c41e1e] via-[#8a1010] to-[#5a0a0a] border-4 border-[#f5cc3a] rounded-2xl p-6 shadow-[0_8px_24px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.1)]`.

### 2) Reel Window

Framed spinning reel display area.

- `bg-[#1a1a1a] border-4 border-[#f5cc3a] rounded-lg overflow-hidden p-4`.
- Reel strip: `flex flex-col items-center gap-2` with symbols scrolling vertically.

### 3) Reel Symbols

Classic slot machine symbols.

- Lucky 7: `text-[#ff4444] font-black text-4xl text-center` showing "7".
- BAR: `bg-[#1a1a1a] text-[#f5cc3a] font-black text-xl text-center px-2 py-1 border border-[#f5cc3a]` showing "BAR".
- Cherry: emoji `🍒` or SVG.
- Bell: emoji `🔔` or SVG.
- Diamond: emoji `💎` or SVG.

### 4) Lever Pull Button

The one-armed bandit lever.

- `absolute -right-8 top-1/2 w-4 h-32 bg-gradient-to-b from-[#c0c0c0] via-[#808080] to-[#606060] rounded-full shadow-[2px_0_4px_rgba(0,0,0,0.3)]`.
- Knob: `w-8 h-8 rounded-full bg-gradient-to-br from-[#c41e1e] to-[#8a1010] border-2 border-[#f5cc3a]`.

### 5) Jackpot Light Border

Flashing alternating lights around the cabinet.

- `border-4 border-[#f5cc3a]` with animated box-shadow: `shadow-[0_0_10px_#f5cc3a,0_0_20px_#ff4444] animate-pulse`.

### 6) Coin Tray

Bottom coin payout display.

- `bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border-2 border-[#3a3a3a] rounded-b-lg p-3 h-12 flex items-center justify-center gap-1`.
- Coins: `w-3 h-3 rounded-full bg-gradient-to-br from-[#f5cc3a] to-[#c48a1a]`.

### 7) Slot Button

Gold-on-red casino button.

- `bg-gradient-to-b from-[#f5cc3a] to-[#c48a1a] text-[#5a0a0a] font-black uppercase text-lg tracking-wider px-8 py-4 rounded-full border-4 border-[#5a0a0a] shadow-[0_4px_0_#5a0a0a,inset_0_2px_0_rgba(255,255,255,0.3)] hover:translate-y-1 hover:shadow-[0_2px_0_#5a0a0a,inset_0_2px_0_rgba(255,255,255,0.3)] active:shadow-none transition-all`.

### 8) Credit Display

Digital credit counter.

- `bg-[#1a1a1a] font-mono text-2xl font-bold text-[#ff4444] text-center px-4 py-2 border-2 border-[#3a3a3a] rounded` showing "CREDITS: 500".

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Casino Red | `#c41e1e` | Cabinet body |
| Gold | `#f5cc3a` | Trim, symbols, border |
| Deep Red | `#5a0a0a` | Shadows, depth |
| Reel Black | `#1a1a1a` | Reel background |
| Neon Red | `#ff4444` | Lucky 7, credit display |
| Silver | `#c0c0c0` | Lever, metal parts |
| BAR Yellow | `#f5cc3a` | BAR symbol |

Rules: Red cabinet body + gold trim = the classic slot machine. Reels are dark with bright symbols. Gold and red dominate everything. The aesthetic is loud, flashy, and engineered for excitement.

## Typography Recommendations

- **Display:** Bungee, Anton, or Bangers (bold blocky casino-signage font).
- **Digital:** JetBrains Mono (for credit displays).
- **Symbols:** oversized bold for 7, BAR, and fruit symbols.
- **Labels:** `font-black uppercase tracking-widest text-sm`.

## Reusable Tailwind Tokens

- Cabinet: `bg-gradient-to-b from-[#c41e1e] to-[#5a0a0a] border-4 border-[#f5cc3a] rounded-2xl`.
- Reel window: `bg-[#1a1a1a] border-4 border-[#f5cc3a] rounded-lg overflow-hidden`.
- Lever: `bg-gradient-to-b from-[#c0c0c0] to-[#606060] rounded-full`.
- Slot button: `bg-gradient-to-b from-[#f5cc3a] to-[#c48a1a] border-4 border-[#5a0a0a] shadow-[0_4px_0_#5a0a0a]`.
- Credit display: `bg-[#1a1a1a] font-mono text-[#ff4444]`.

## Quality Checklist

- At least one reel window with dark background and gold border.
- Classic slot symbols present (7, BAR, cherry/bell/diamond).
- Lever pull element (the one-armed bandit's iconic lever).
- Gold-on-red cabinet color scheme.
- Flashing jackpot light border (animate-pulse).
- Coin tray at the bottom with gold coins.
- Credit display with monospace digital font.
- Bold blocky casino typography.
- The aesthetic reads as slot machine / one-armed bandit / fruit machine.
- Everything feels mechanical, flashy, and engineered for excitement.

## Anti-Patterns

- Subtle muted palettes (slot machines are LOUD red and gold).
- Missing the reel window (the spinning reels ARE the slot machine).
- Missing classic symbols (7/BAR/cherry are non-negotiable iconography).
- Missing the lever (the one-armed bandit lever is iconic).
- Missing flashing lights (jackpot excitement requires pulsing lights).
- Missing the coin tray (the payout is the reward).
- Missing the credit display (gambling UI always shows credits).
- Thin delicate borders (slot machine borders are THICK gold — `border-4`).
- Sans-serif thin typography (casino signage is BLACK bold blocky).
- Calm restrained animation (slot machines are FLASHY and PULSING).

## Accessibility Considerations

- Dark reel backgrounds with bright symbols provide good contrast.
- Flashing jackpot lights must not exceed 3Hz (seizure risk).
- Focus states: `focus:ring-4 focus:ring-[#f5cc3a]/50` (gold ring).
- Flashing must respect `prefers-reduced-motion` (disable pulse).
- Credit display needs `aria-live="polite"` for screen reader announcements.
- Reel symbols need `aria-label` describing each symbol.
- Touch targets (lever, spin button) must be adequate.
- The gambling aesthetic requires responsible design — do not encourage addiction.
