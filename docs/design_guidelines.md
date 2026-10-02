# Design Guidelines

This document is the visual source of truth for **StrikeSoft Hub** as it is refactored onto the **Armagedon forge** language: iron, bronze, wood, parchment, and ember. The reference is the single-file prototype in `public/design_ref/` (gitignored). Port tokens and component recipes first; do not invent a parallel palette or a second type stack.

The previous Biophilic Brutalism system (obsidian canvas, hairline 1px structure, crimson `--section-accent`, film grain, hard offset hovers) is retired. Surfaces now read as forged metal and timber, not as a flat brutalist ledger.

---

## Visual thesis

Armagedon is an artisan softcombat forge: a dark stone hall, brushed iron frames, bronze trim, wood-grain panels, and a living ember accent. Typography is heraldic (Cinzel) with a medieval kicker (MedievalSharp) over Inter for UI copy. Interaction is a lift and a glow, not a 2px drop-shadow punch.

Keep the real-world group facts (venue, Sunday muster, Instagram) in `src/app/core/config/group.ts`. The *look* is the fictional forge; the *content honesty* of the live site stays as documented in `PRODUCT.md`.

---

## Rem scale

The prototype sets `html { font-size: 62.5%; }` so **1rem = 10px**. All token values below assume that scale. Angular global styles must adopt the same root so recipes copy 1:1.

| Token intent | Typical rem | At 62.5% |
| :--- | :--- | :--- |
| Body copy | `1.5rem` | 15px |
| Display kicker | `1.5rem` | 15px |
| Nav link | `1.25rem` | 12.5px |
| Section title | `clamp(2.8rem, 5vw, 5rem)` | ~28–50px |
| Control height | `4.6rem` (buttons), `4.2rem` (inputs) | 46px / 42px |

Do not mix a 16px root with these rem numbers. Convert only if the root scale is deliberately changed, and convert every token together.

---

## Color tokens

Copy this `:root` block into `src/styles.css` (names preserved). Components consume tokens; they do not hard-code hex except inside the token file itself.

```css
:root {
  /* Core metals */
  --color-iron-dark: #121316;
  --color-iron: #292c30;
  --color-iron-light: #535962;
  --color-steel-light: #c6ccd1;

  /* Warm metals */
  --color-bronze: #ad7434;
  --color-bronze-light: #d3a15a;
  --color-gold: #ecc875;

  /* Timber */
  --color-wood-dark: #241710;
  --color-wood: #3a2417;
  --color-wood-light: #71482b;

  /* Ember accent */
  --color-ember: #ff5d20;
  --color-ember-hot: #ff9a45;
  --color-ember-deep: #8b2411;

  /* Stone canvas */
  --color-stone-bg: #0e0f11;
  --color-stone: #1a1b1e;
  --color-stone-light: #24262a;

  /* Ink */
  --color-parchment: #ead7ae;
  --color-parchment-dark: #bba982;

  /* Status */
  --color-success: #72c68b;
  --color-warning: #e3b85d;
  --color-danger: #db634f;
  --color-info: #76a6d8;

  /* Type */
  --font-display: "Cinzel", serif;
  --font-medieval: "MedievalSharp", cursive;
  --font-body: "Inter", sans-serif;

  /* Radius */
  --radius-sm: 0.6rem;
  --radius-md: 1rem;
  --radius-lg: 1.5rem;
  --radius-xl: 2rem;

  /* Borders */
  --border-iron: 0.2rem solid #575c63;
  --border-bronze: 0.2rem solid var(--color-bronze);
  --border-dark: 0.1rem solid rgba(255, 255, 255, 0.08);

  /* Shadows */
  --shadow-metal:
    inset 0 0.1rem 0 rgba(255, 255, 255, 0.12),
    inset 0 -0.2rem 0 rgba(0, 0, 0, 0.5),
    0 0.5rem 1.5rem rgba(0, 0, 0, 0.45);

  --shadow-heavy:
    0 1.4rem 3rem rgba(0, 0, 0, 0.55),
    inset 0 0.1rem 0 rgba(255, 255, 255, 0.05);

  --shadow-ember:
    0 0 1rem rgba(255, 93, 32, 0.35),
    0 0 3rem rgba(255, 93, 32, 0.12);

  /* Layout */
  --page-width: 176rem;
  --nav-height: 7rem;
  --section-padding: 7rem;
  --content-gap: 2rem;

  /* Motion */
  --transition-fast: 180ms ease;
  --transition-medium: 300ms ease;
  --transition-slow: 650ms ease;

  color-scheme: dark;
  accent-color: var(--color-ember);
}
```

### Semantic mapping (60 / 30 / 10)

| Role | Token | Hex | Use |
| :--- | :--- | :--- | :--- |
| **60% canvas** | `--color-stone-bg` | `#0e0f11` | Page ground; radial ember/bronze washes sit on top |
| **30% structure** | `--color-stone`, `--color-iron` | `#1a1b1e`, `#292c30` | Cards, drawers, modals, sticky topbar |
| **10% accent** | `--color-ember` / `--color-ember-hot` | `#ff5d20` / `#ff9a45` | Primary CTA, kickers, map pins, cart badge, brand glow |
| **Trim** | `--color-bronze` / `--color-gold` | `#ad7434` / `#ecc875` | Frames, prices, range values, bronze buttons |
| **Ink** | `--color-parchment` | `#ead7ae` | Titles and primary reading |
| **Muted** | `#9d9fa4` / `#74787f` | — | Body secondary, footer links (keep as token aliases if repeated) |
| **Success / warning / danger** | `--color-success` / `--color-warning` / `--color-danger` | `#72c68b` / `#e3b85d` / `#db634f` | Status dot, toasts, destructive actions |

Do not reintroduce `--section-accent` as a scrolling hue shift. Ember is the accent; bronze is the trim. Status colors are for state, not decoration.

---

## Page atmosphere

Body color is parchment. Background is a stacked gradient, not a flat hex:

1. Radial ember wash at ~20% 10%
2. Radial bronze wash at ~85% 80%
3. Vertical stone: `#0b0c0e` → `--color-stone-bg` → `#08090a`

The hero adds scanline stripes (`::before`) and ember particles (`.embers`). Those effects belong on the home hero only, not as a global film-grain overlay.

---

## Typography

Load Google Fonts exactly as the prototype: **Cinzel** (500–800), **MedievalSharp**, **Inter** (400–800).

| Role | Family | Token | Rules |
| :--- | :--- | :--- | :--- |
| Display | Cinzel | `--font-display` | `h1–h4`, brand name, nav links, buttons, prices. `letter-spacing: 0.05em`, `line-height: 1.15`, weight 700–800 |
| Kicker | MedievalSharp | `--font-medieval` | `.section-kicker`, `.hero__eyebrow`. Ember-hot color, uppercase, `letter-spacing: 0.16em` |
| Body | Inter | `--font-body` | Descriptions, filters, forms, footer. `font-size: 1.5rem`, `line-height: 1.6` |

There is no monospace HUD face in this system. Specs sit in `.spec-item` cells (label muted, value parchment-steel), not in JetBrains Mono.

Section titles: kicker, then Cinzel `h2`, then a muted paragraph capped at `82rem`.

---

## Layout and spacing

1. **Units:** rem only (after the 62.5% root).
2. **Shell:** `.app-shell` is a column flex; `.container` is `max-width: var(--page-width)` with `padding-inline: 2rem`.
3. **Sections:** `padding-block: var(--section-padding)`. View enter animation: `pageEnter` (400ms, 0.8rem rise).
4. **Gaps:** `var(--content-gap)` (`2rem`) between cards.
5. **Breakpoints from the prototype:** `110rem` (collapse login chip), `90rem` (stack hero and event banner), `70rem` (drawer nav + stacked shop).

Mobile: hamburger + off-canvas `.nav-links` sliding from the right. Shop filters stack above the grid.

---

## Surface recipes

These three classes are the visual primitives. Shared Angular components wrap them; they do not reinvent gradients.

### `.surface`

Stone panel: 145deg white sheen over `--color-stone`, `--border-dark`, `--shadow-heavy`. Filter rail, about cards, generic modules.

### `.metal-frame`

2px iron border, multi-stop steel gradient (`#686d73` → `#151619` → `#1b1d20`), `--shadow-metal`, inner inset ring via `::before`. Use on the featured event banner and any “forged plate” moment.

### `.wood-panel`

Repeating 4deg timber stripes (`#22150f` / `#2c1a11`), `#5f3b24` border, deep inset shadow. Use sparingly (hero forge, product visual beds).

### `.divider`

Full-width 0.2rem bronze–ember–bronze gradient, ~55% opacity. Separates filter groups and section chrome.

---

## Buttons and controls

Buttons are **global classes**, not Angular components.

```css
.btn {
  min-height: 4.6rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 0.8rem 1.6rem;
  border: 0.1rem solid transparent;
  border-radius: var(--radius-sm);
  color: #f5e4bd;
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.btn:hover { transform: translateY(-0.2rem); }
.btn:active { transform: translateY(0); }

.btn-primary {
  background: linear-gradient(180deg, #d06a32, #8c2e18);
  border-color: #e48a4a;
  box-shadow:
    inset 0 0.1rem 0 rgba(255, 255, 255, 0.2),
    0 0.6rem 1.7rem rgba(0, 0, 0, 0.35),
    var(--shadow-ember);
}

.btn-secondary {
  background: linear-gradient(180deg, #51565d, #272a2e);
  border-color: #7a8088;
  box-shadow: var(--shadow-metal);
}

.btn-bronze {
  background: linear-gradient(180deg, #d4a357, #76501f);
  border-color: #e9c681;
  color: #19130e;
}

.btn-danger {
  background: linear-gradient(180deg, #bb503f, #6e2217);
  border-color: #db705e;
}

.btn-small {
  min-height: 3.7rem;
  padding: 0.6rem 1.1rem;
  font-size: 1.15rem;
}
```

Icon buttons (cart, close, hamburger) are square `4.2rem` metal plates. Cart badge is ember-deep with a hot border.

Forms (`.select`, `.input`, `.textarea`): min-height `4.2rem`, iron inset field, parchment text. Focus: `--color-bronze` border plus a 0.2rem bronze ring. Range sliders use `accent-color: var(--color-ember)`.

---

## Component recipes

### Topbar

Sticky, `min-height: var(--nav-height)`, iron gradient with blur, 0.2rem steel underline. Brand: bronze-bordered sigil + Cinzel name in ember (`#ff9b4c`) with ember text-shadow + uppercase tagline. Nav links: Cinzel, ember underline scale on hover/active. Right cluster: guest/online chip (`.status-dot` / `.is-online` with `--color-success`), cart, hamburger.

### Hero

Two-column: copy + forge anvil. Eyebrow in MedievalSharp. Headline Cinzel with the second line in ember. Meta pills for craft claims. Ember particle field behind the anvil (`forgePulse`).

### Product card

`.product-card` with `--radius-lg`, stone sheen, hover lift `-0.6rem` and bronze border, diagonal sheen sweep (`::after`). Visual bed is wood-toned with a bronze inner frame. Category `.product-card__tag` (bronze). Specs in a 2-column `.spec-list`. Price in `--color-gold` Cinzel. Footer: price + `.btn-primary`.

New arrivals: horizontal snap grid (`.horizontal-grid`), bronze thin scrollbar, overlay title on a wood gradient.

### Shop

Sticky `.filter-panel.surface` (`top: 9rem`, ~`27rem` wide) + `.product-grid` (`minmax(25rem, 1fr)`). Filters: category, material, max price. Toolbar shows result count.

### Events

Home: `.event-banner.metal-frame` with map nodes (ember dots). Listing: `.events-grid` of `.event-card` with rotated pin, bronze date chip, RSVP via primary button.

### About

`.about-grid` of `.surface` cards with icon, title, copy. Team roster as initial-in-sigil cards. Safety protocol box is first-class, not footer fine print.

### Cart drawer

Right sheet `min(100%, 44rem)`, iron leading border, blur backdrop. Line items as compact `.cart-item` rows. Total in gold Cinzel. Empty state: dashed iron box.

### Admin modal

Centered `.modal` on a blurred iron backdrop. Login lock sigil, then dashboard tabs (products / events), two-column `.form-grid`, publish actions as `.btn-bronze` / `.btn-primary`.

### Toasts

Bottom-right metal chips; border tinted with success, warning, or danger tokens. Prefer this chrome if SweetAlert2 remains: restyle `.swal-strike-*` to iron/ember, not crimson brutalist frames.

---

## Motion

| Token / keyframe | Use |
| :--- | :--- |
| `--transition-fast` (180ms) | Color, transform, filter on controls |
| `--transition-medium` (300ms) | Card lift, drawer slide, nav drawer |
| `--transition-slow` (650ms) | Card sheen sweep |
| `emberRise` | Hero particles |
| `forgePulse` | Anvil glow |
| `pageEnter` | View change |
| `toastIn` | Toasts |

Honor `prefers-reduced-motion`: disable ember particles, forge pulse, sheen sweeps, and page-enter translation; keep color and opacity changes.

---

## Scrollbars and focus

Horizontal armory rails: `scrollbar-width: thin; scrollbar-color: var(--color-bronze) #131517`.

Focus rings on fields are bronze, not yellow. Interactive elements need a visible `:focus-visible` treatment using `--color-bronze` or `--color-ember-hot` (2px), never a browser default on dark stone.

Parchment on stone meets contrast for body text. Ember-on-dark is for accents and large type only, not long reading.

---

## What not to port

- Crimson `#FF2A2A`, champion yellow `#E5FF00`, or a live `--section-accent` that retunes per section
- Bricolage Grotesque / Space Grotesk / JetBrains Mono
- Global animated grain overlay
- Catalog as a ruled ledger of rows; the forge catalog is a **card grid**
- Hard `translate(-2px, -2px)` brutalist button shadows
- Square zero-radius chrome as a default (this system uses `--radius-sm` through `--radius-lg`)
