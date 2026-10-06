# Design Guidelines

This document is the visual source of truth for **StrikeSoft Hub**. The live language is the **Armagedón forge**: stone canvas, iron frames, silver trim, parchment type, and a **viridian** accent taken from the club shield. Tokens live only in `src/styles.css`. Feature CSS and templates consume those tokens; they never hard-code hex.

## Documentation rule

Canonical product, design, and setup writing lives in three files only:

- `docs/design_guidelines.md` — look, tokens, interaction
- `docs/architecture_guidelines.md` — structure, routes, data path
- `README.md` — purpose, stack, local setup, honesty of content

Do not add or restore `docs/DESIGN.md`, `docs/PRODUCT.md`, or `docs/setup.md`. Those files are redundant. New rules belong in the three files above.

## Product facts that shape the look

StrikeSoft Hub is the web home of Armagedón Softcombat in Bucaramanga. Visitors read the site outdoors, on phones, in daylight, often with a poor connection. The interface stays dark with high-contrast parchment type. Confirmed group facts (venue, Sunday 10:00 muster, Instagram) live in `src/app/core/config/group.ts`. Prices and stock are indicative until the workshop locks them.

Principles:

1. The Sunday muster comes first. A visitor who cannot find the group has no use for the catalog.
2. Specifications sell the piece: weight, length, core, and combat role outrank adjectives.
3. Offline is a normal state. The UI tells the truth about its data source.
4. Claims stay honest. Illustrative pricing and scheduling are marked as such.

## Rem scale

`html { font-size: 62.5%; }` so **1rem = 10px**. All token values assume that scale. Do not mix a 16px root with these rem numbers.

| Token intent | Typical rem |
| :--- | :--- |
| Body copy | `1.6rem` |
| UI / labels | `1.4rem`–`1.5rem` |
| Section title | `clamp(2.4rem, 4vw, 3.6rem)` |
| Control height | `var(--touch)` = `4.4rem` |

## Color tokens

Accent tokens are named **viridian**, not ember. Silver is the hover and highlight trim. There is no orange or gold token.

| Token | Hex | Role |
| :--- | :--- | :--- |
| `--color-viridian` | `#1b7a3a` | Primary accent, CTAs, scrollbar, caret |
| `--color-viridian-hot` | `#47a866` | Hover fill, hot glow |
| `--color-viridian-deep` | `#0c3d1f` | Deep green plates |
| `--color-steel` / `--color-steel-light` (`--silver`) | `#8d939a` / `#c6ccd1` | Focus rings, prices, hover type |
| `--color-stone-bg` / `--color-stone` / `--color-iron` | `#0e0f11` / `#1a1b1e` / `#292c30` | Canvas and structure |
| `--color-parchment` | `#ead7ae` | Titles and primary reading |

Aliases: `--accent` and `--section-accent` resolve to `--color-viridian`. Shadows use `--shadow-viridian` and `--glow-viridian`. `AccentZoneDirective` writes `--section-accent` from `var(--color-viridian)`, never from hex in templates.

### Semantic mapping (60 / 30 / 10)

| Role | Token | Use |
| :--- | :--- | :--- |
| **60% canvas** | `--color-stone-bg` | Page ground; a viridian wash sits at ~20% 10% |
| **30% structure** | `--color-stone`, `--color-iron` | Cards, drawers, topbar |
| **10% accent** | `--color-viridian` / `--color-viridian-hot` | Primary CTA, kickers, cart badge |
| **Trim** | `--silver` | Focus, hover type, secondary chrome |
| **Ink** | `--color-parchment` | Headings and body |

## Page atmosphere

Body color is parchment. Background is a stacked gradient on stone, not a flat hex. Hero particles on Home reuse viridian. Those particles belong on the home hero only. Honor `prefers-reduced-motion` by hiding them.

## Typography

| Role | Face | Usage |
| :--- | :--- | :--- |
| Display | Cinzel | Wordmark, section titles, buttons |
| Kicker | MedievalSharp | Artisan eyebrows only |
| Body | Inter | Copy, forms, tables |

## Interaction (hover)

Hover effects change **color, background, or border only**. Do not use `transform`, `translate`, `scale`, or any layout shift on `:hover`. Buttons, cards, ledger rows, and nav links stay in place. A color or border change is enough.

Allowed motion that is not hover: skip-link reveal on focus, cart drawer slide, mobile nav sheet, hero particles, loading shimmer.

## Layout and scroll

`html`, `body`, and `app-root` are `height: 100%` with `overflow: hidden`. The main layout shell is a **fixed-height grid** (`auto 1fr auto`). `<main>` owns vertical scroll with `overflow-y: scroll`. The window itself does not scroll.

Page content sits in `.shell` (`max-width: var(--page-width)`). Cards in the armory use a **fixed CSS grid**: `repeat(auto-fill, minmax(26rem, 1fr))`. Weapon cards share a fixed media row (`20rem`) so they do not stretch to fill leftover space.

The armory shows **either** the card grid **or** the ledger list, never both. A `gridView` signal toggles the two buttons.

## Surfaces

Buttons: global `.btn`, `.btn-primary`, `.btn-ghost`, `.btn-danger`. Primary uses viridian fill and a viridian-hot hover fill. Ghost uses iron with a lighter iron hover.

Forms: min-height `var(--touch)`, iron inset field, parchment text. Focus: viridian border plus a 0.2rem viridian ring. Range sliders use `accent-color: var(--color-viridian)`.

Focus-visible rings use `--color-steel-light` or `--color-viridian-hot` (2px). Never leave the browser default on dark stone.

## Topbar and footer

Sticky iron header, club shield, Cinzel name, public nav only: Inicio, Forja, Eventos, El deporte. Cart badge on the right. **Auth, admin, and profile are not in the header.** Those routes stay reachable only by URL (`/auth`, `/profile`).

Footer: venue, Instagram, GitHub credit. Social chips hover to silver type and a viridian border.

## Motion that remains

| Token / keyframe | Use |
| :--- | :--- |
| `--transition-fast` (180ms) | Color, background, border |
| `--transition-medium` (300ms) | Drawer and mobile nav (not hover) |
| Hero particle rise | Home only; hide under `prefers-reduced-motion` |

Toasts: bottom-right metal chips. SweetAlert2 chrome uses `.swal-strike-*` with iron and viridian, not orange or crimson frames.

## What not to do

- Name the accent `ember` or ship orange/gold tokens
- Put login, admin, or profile links in the public header
- Show the armory card grid and ledger at the same time
- Let a weapon card stretch to consume a whole column of leftover height
- Scroll the `body`; scroll `<main>` instead
- Add hover lifts, slides, or scales
- Reintroduce crimson `#FF2A2A`, champion yellow `#E5FF00`, or a live section-by-section hue circus
- Create `docs/DESIGN.md`, `docs/PRODUCT.md`, or `docs/setup.md`
