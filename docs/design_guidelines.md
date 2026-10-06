# Design Guidelines

This document is the visual source of truth for **StrikeSoft Hub**. The live language is the **Armagedón forge**: dark canvas, metal frames, highlight trim, warm type, and a club-shield accent. Tokens live only in `src/styles.css` and use **role names**, not pigment names, so the hex values can change later without renaming the system. Feature CSS and templates consume those tokens; they never hard-code hex.

## Documentation rule

Canonical product, design, and setup writing lives in three files only:

- `docs/design_guidelines.md` — look, tokens, interaction
- `docs/architecture_guidelines.md` — structure, routes, data path
- `README.md` — purpose, stack, local setup, honesty of content

Do not add or restore `docs/DESIGN.md`, `docs/PRODUCT.md`, or `docs/setup.md`. Those files are redundant. New rules belong in the three files above.

## Product facts that shape the look

StrikeSoft Hub is the web home of Armagedón Softcombat in Bucaramanga. Visitors read the site outdoors, on phones, in daylight, often with a poor connection. The interface stays dark with high-contrast type. Confirmed group facts (venue, Sunday 10:00 muster, Instagram) live in `src/app/core/config/group.ts`. Prices and stock are indicative until the workshop locks them.

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

Names describe **role**. Hex lives only in `:root`. Current values are the club-shield green and metal neutrals; a future palette swap changes the hex, not the variable names.

| Token | Current hex | Role |
| :--- | :--- | :--- |
| `--color-main` / `--color-main-hot` / `--color-main-deep` | `#1b7a3a` / `#47a866` / `#0c3d1f` | Accent, CTA, hover fill, deep plates |
| `--color-canvas` / `--color-surface` / `--color-surface-raised` | `#0e0f11` / `#1a1b1e` / `#24262a` | Page ground and elevated blocks |
| `--color-panel` / `--color-panel-dark` / `--color-panel-light` | `#292c30` / `#121316` / `#535962` | Controls, chrome, borders |
| `--color-trim` / `--color-trim-strong` / `--color-trim-soft` | `#8d939a` / `#c6ccd1` / `#6d737a` | Secondary metal, focus, muted strokes |
| `--color-text` / `--color-text-soft` | `#ead7ae` / `#bba982` | Primary and softened reading |
| `--shadow-main` / `--glow-main` | derived from `--color-main` | Accent glow |

Aliases: `--bg` → canvas, `--fg` → text, `--accent` and `--section-accent` → `--color-main`, `--highlight` → `--color-trim-strong`. `AccentZoneDirective` writes `--section-accent` from `var(--color-main)` (or `--color-trim` / `--highlight` on calmer sections), never from hex in templates.

### Semantic mapping (60 / 30 / 10)

| Role | Token | Use |
| :--- | :--- | :--- |
| **60% canvas** | `--color-canvas` | Page ground; a main-color wash sits at ~20% 10% |
| **30% structure** | `--color-surface`, `--color-panel` | Cards, drawers, topbar |
| **10% accent** | `--color-main` / `--color-main-hot` | Primary CTA, kickers, cart badge |
| **Trim** | `--highlight` | Focus, hover type, secondary chrome |
| **Ink** | `--color-text` | Headings and body |

## Page atmosphere

Body color is `--fg`. Background is a stacked gradient on canvas, not a flat hex. The home hero uses the club shield (`group.logoUrl`) plus accent particles. Those particles belong on the home hero only. Honor `prefers-reduced-motion` by hiding them.

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

`html`, `body`, and `app-root` are `height: 100%` with `overflow: hidden`. The main layout shell is a **fixed-height grid** (`auto 1fr`). `<main>` owns vertical scroll with `overflow-y: scroll`. The window itself does not scroll. The full footer lives at the end of `<main>`. A compact footer bar is `position: fixed` at the bottom until an `IntersectionObserver` on the full footer sets `expanded`.

Page content sits in `.shell` (`max-width: var(--page-width)`). Cards in the armory use a **fixed CSS grid**: `repeat(auto-fill, minmax(26rem, 1fr))`. Weapon cards share a fixed media row (`20rem`) so they do not stretch to fill leftover space.

The armory shows **either** the card grid **or** the ledger list, never both. A `gridView` signal toggles the two buttons.

## Surfaces

Buttons: global `.btn`, `.btn-primary`, `.btn-ghost`, `.btn-danger`. Primary uses `--color-main` and a `--color-main-hot` hover fill. Ghost uses `--color-panel` with a lighter panel hover.

Forms: min-height `var(--touch)`, panel inset field, `--color-text` copy. Focus: `--color-main` border plus a 0.2rem `--glow-main` ring. Range sliders use `accent-color: var(--color-main)`.

Focus-visible rings use `--color-trim-strong` or `--color-main-hot` (2px). Never leave the browser default on dark canvas.

## Topbar and footer

Sticky header, club shield, Cinzel name, public nav only: Inicio, Forja, Eventos, El deporte. Cart badge on the right. **Auth, admin, and profile are not in the header.** Those routes stay reachable only by URL (`/auth`, `/profile`).

**Compact footer:** one row, `var(--footer-mini-height)`. Brand (crest + name) on the start, venue/time in the center (hidden under 48rem), icon-only contact links on the end. Hover changes icon color and border only.

**Full footer:** shown when `<main>` is within 48px of its end. Three start-aligned columns on wide screens — El grupo, Encuentro, Contacto — then a credit rule. Links are stacked rows (icon + label + handle), not oversized chips. Type stays at `--text-small` or larger; touch targets stay `--touch`.

## Motion that remains

| Token / keyframe | Use |
| :--- | :--- |
| `--transition-fast` (180ms) | Color, background, border |
| `--transition-medium` (300ms) | Drawer and mobile nav (not hover) |
| Hero particle rise | Home only; hide under `prefers-reduced-motion` |

Toasts: bottom-right metal chips. SweetAlert2 chrome uses `.swal-strike-*` with panel and `--color-main`, not orange or crimson frames.

## What not to do

- Name tokens after a pigment (`ember`, `viridian`, `gold`) instead of a role (`main`, `canvas`, `trim`)
- Ship orange or gold tokens
- Put login, admin, or profile links in the public header
- Show the armory card grid and ledger at the same time
- Let a weapon card stretch to consume a whole column of leftover height
- Scroll the `body`; scroll `<main>` instead
- Add hover lifts, slides, or scales
- Reintroduce crimson `#FF2A2A`, champion yellow `#E5FF00`, or a live section-by-section hue circus
- Create `docs/DESIGN.md`, `docs/PRODUCT.md`, or `docs/setup.md`
