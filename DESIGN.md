# Coordinator design

Coordinator is a Kodexa project. This file binds every Coordinator surface: website, docs, READMEs, live page.
Tokens: `src/styles/tokens.css`. Assets: `public/brand/`.

## The idea

An orchestra seen from above. Three rows of players curve around the podium, and together they form the C.
The innermost row is violet: the conductor's place, closest to every row, playing none of them. Calm, precise,
nocturnal: ink does almost all the work, and violet is the downbeat, used rarely and on purpose.

## Logo

| File | Use |
|---|---|
| `logo.svg` | Mark and wordmark. Headers, READMEs, anywhere with room. Min height 20 px. |
| `mark.svg` | Mark alone. Avatars, tight spaces. Min 16 px. |
| `favicon.svg` | The mark cropped tight for browser tabs. |
| `banner.svg` | Animated README banner (logo and promise), on its own card for GitHub light and dark. |
| `kodexa.svg` | Kodexa's logo, only for the "by Kodexa" credit. |

- Colours follow light and dark by themselves. Inlined, they take `--co-ink` and `--co-accent` from the page.
- Clear space on every side: a quarter of the mark's height. Nothing else enters it.
- Don't recolour the rows, add or remove a row, rotate, outline, add shadows, glow or gradients, set the wordmark
  in another face, or put the logo on a busy image. The violet row is the only colour in the mark.
- The paths carry `co-row1`-`co-row3` classes for one authored draw-in, outer row first, like the banner's.

## Palette

Hex pairs are light / dark. Every text pair passes WCAG AA: 4.5:1 or more on its own background.

| Role | Tokens | Light | Dark |
|---|---|---|---|
| Canvas, raised, sunken | `--co-bg` `--co-surface` `--co-sunken` | `#fafafd` `#ffffff` `#f2f2f6` | `#0d0c13` `#15151d` `#08080d` |
| Separators | `--co-line`, `--co-line-strong` | `#dfdfe6` `#c3c3cc` | `#2a2a34` `#41414d` |
| Text: primary, secondary, quiet | `--co-ink` `--co-ink-2` `--co-muted` | `#151520` `#464652` `#62626d` | `#eeeef2` `#c3c3cc` `#9a9aa5` |
| Downbeat: action, focus, selection | `--co-accent` `--co-accent-strong` `--co-accent-soft` `--co-on-accent` | `#6a44da` `#5732bb` `#edecff` `#fbfbff` | `#aa99ff` `#c3b8ff` `#262041` `#0f0d1c` |
| Status: ok, warn, bad, info | `--co-ok` `--co-warn` `--co-bad` `--co-info` | `#0b7643` `#935a11` `#b02a2d` `#0065b4` | `#72d699` `#f5bc69` `#f58b84` `#79b6f4` |
| Status backgrounds | `--co-*-soft` | `#dff8e6` `#ffefd1` `#ffe9e6` `#e4f2ff` | `#102a1a` `#34220b` `#3b1c1a` `#0f253b` |

- Violet marks the one thing to do or the place you are: primary action, focus ring, selection, current item.
  Never decoration, never a gradient, never text emphasis by colour alone.
- Status always has a word or icon next to its colour. Status text sits on its own `-soft` background.
- Control borders that must be seen (inputs) use `--co-muted`; `--co-line` is for quiet separators only.
- Theme browser surfaces too: `::selection` in `--co-accent-soft`, caret and focus in `--co-accent`. Pair
  `--co-focus-ring` with `outline: 2px solid transparent` so focus survives forced-colors mode.

## Type

- **Plus Jakarta Sans** for everything that is read; **JetBrains Mono** only for commands, code and paths.
  Both self-hosted from `public/brand/fonts/` (`fonts.css`, OFL licences beside them). No CDN.
- Display at `--co-weight-display` (680), `--co-tracking-display`, tight leading. Body 1rem, 400, 1.6, at most
  `--co-measure` (68ch). Hierarchy by size and weight; no uppercase kickers above headings.
- Headings `text-wrap: balance`, body `text-wrap: pretty`. Tabular numbers (`tnum`) in tables and counters.

## Motion

Smooth and classy means few moves, each slow to arrive and quick to leave.

| Token | Value | For |
|---|---|---|
| `--co-dur-instant` / `--co-dur-quick` | 120 / 200 ms | Press, hover, toggles |
| `--co-dur-base` | 320 ms | Menus, drawers, layout changes |
| `--co-dur-page` | 440 ms | Page and view transitions |
| `--co-dur-reveal` / `--co-dur-sequence` | 760 / 1200 ms | The one authored entrance on a page |
| `--co-ease-arrive` | expo out | Everything that enters or settles |
| `--co-ease-move` / `--co-ease-leave` | in-out / in | Moves between states / exits |

- The signature move: the rows draw in, outer first (`--co-stagger`), then the violet centre, then the text
  sharpens from `--co-reveal-blur` while rising `--co-rise`. Use it once per page, not on every section.
- Content is visible by default; motion only enhances it. No bounce, no elastic, no endless loops in view.
- Always respect `prefers-reduced-motion`. The tokens already shrink to short fades with no travel or blur;
  component CSS must also drop any keyframed movement under it.

## Voice

Neat, very brief, never over-explain. One idea per sentence, plain words, the user's own terms. Controls name
their action. If a line can go, it goes.
