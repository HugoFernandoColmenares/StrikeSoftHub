# Design

The visual system of StrikeSoft Hub, recorded from the built interface. The direction is Biophilic
Brutalism, as defined in `docs/design_guidelines.md`: brutalist structure, organic field colours,
and cinematic grain, serving a real softcombat group that trains outdoors.

## Ground rules

The interface is dark because it is read outdoors in daylight on phones, where a black ground with
high-contrast type stays legible behind glare. Structure is expressed with hairline borders and
ruled rows, never with rounded cards or soft shadows. No element has a border radius.

## Tokens

Declared in `src/styles.css`.

| Token | Value | Role |
| :--- | :--- | :--- |
| `--bg` | `#080808` | Page ground, roughly 60 percent of any surface |
| `--bg-elevated` | `#111111` | Panels, cards, standing-fixture blocks |
| `--bg-raised` | `#181818` | Scrollbar thumb and the few surfaces above a panel |
| `--fg` | `#F5F5F5` | Headings and primary text |
| `--fg-dim` | `#888888` | Body copy on dark ground, field labels, fine print |
| `--fg-mute` | `#555555` | Non-text strokes only; never used for type |
| `--accent` | `#FF2A2A` | Commerce and combat regions |
| `--green` | `#10B981` | Calendar, community, and the field |
| `--yellow` | `#E5FF00` | Premium pieces, workshop region, focus rings |
| `--border` | `rgba(255,255,255,0.08)` | Hairline rules between rows |
| `--border-strong` | `rgba(255,255,255,0.18)` | Container edges and secondary buttons |
| `--section-accent` | registered `@property` | The live accent, retuned per region |

`--fg-mute` is deliberately excluded from text. At `#555555` on `#080808` it falls below the 4.5:1
body-text ratio, so every label routes to `--fg-dim`.

## The section accent

`--section-accent` is registered with `@property`, so it interpolates instead of snapping.
`AccentZoneDirective` (`src/app/shared/accent-zone.directive.ts`) observes a section and writes the
region's colour to the document root while that section owns the middle of the viewport. Buttons,
focus rings, link underlines, the scrollbar thumb, the navigation indicator, the meter bars, and
text selection all read from it, so the whole chrome cross-fades as the visitor scrolls from the
muster (crimson) into the calendar (green) and on to the workshop (yellow).

Region assignments: crimson for the muster and the armory, green for the calendar, the community,
and the sport explainer, yellow for the workshop.

## Typography

| Role | Face | Usage |
| :--- | :--- | :--- |
| Display | Bricolage Grotesque 700/800 | Headings, wordmark, weapon names |
| Body | Space Grotesk 400/500/700 | Paragraphs, controls, navigation |
| Measurement | JetBrains Mono 400/500/700 | Every number, specification, date, and price |

Display headings run at `font-variation-settings: 'wdth' 78–85` with `letter-spacing: -0.03em` and
`text-wrap: balance`. The page-owning `h1` is uppercase; section headings stay in sentence case.
Numerals set in JetBrains Mono carry `font-variant-numeric: tabular-nums`, so a ticking countdown
does not shift its own layout.

Two utility classes divide small text. `.label` is a short uppercase mono field label. `.fine` is
sentence-case fine print at `0.8125rem`. Sentence-length copy never uses `.label`; tracked uppercase
at that size is unreadable in a paragraph.

## Composition

Surfaces are ledgers, not card grids. The recurring pattern is a ruled row: a date or name on the
left, measured values in mono across the middle, an action on the right, separated by
`1px solid var(--border)`. Rows shift `translateX(0.6rem)` on hover and take an elevated background;
nothing animates a layout property.

`.shell` sets the page measure (`min(100% - 5rem, 82rem)` above 60rem) and owns the auto margins.
Narrow content sits in a nested block with its own `max-width`, which keeps it aligned to the
shell's left edge rather than re-centering.

## Material

`.cinematic-frame` holds every photograph: overflow clipped, a scanline layer and a vignette painted
over the image, and a 34-second pan that reverses. A film grain tile (`assets/texture/grain.png`)
covers the viewport at 3.5 percent opacity and drifts in six steps. Both stop under
`prefers-reduced-motion`.

Photography is the only illustration. Weapons with no photograph show a typographic plate carrying
the class name and an honest "Photography pending" line, rather than a drawn substitute.

## Controls

`.btn-primary` fills with the live section accent and takes black text. `.btn-ghost` is transparent
with a strong hairline border. Both shift `translate(-2px, -2px)` on hover and drop a hard
`4px 4px 0` shadow in the accent, which is the brutalist impact the brief calls for. Focus is a
`2px solid var(--yellow)` outline at `3px` offset, applied globally through `:focus-visible`.

Icons are authored SVG paths in `IconComponent`, all 24x24 on a 1.5 stroke with square caps. No
emoji and no icon font.

## Browser surfaces

Text selection takes the section accent with black text, the caret in form fields takes the accent,
and the scrollbar is themed: a `--bg` track with a hairline left border and a `--bg-raised` thumb
that turns accent on hover.

## Notifications

SweetAlert2 is themed in `src/styles.css` under the `.swal-strike-*` classes and configured once in
`NotificationService`. Popups are square `--bg-elevated` panels with a strong hairline border,
display-face titles, and the same button grammar as the page. Success icons recolour to `--green`,
errors to `--accent`, warnings to `--yellow`. Entry and exit animations are disabled so the dialog
lands like the rest of the interface.

## Honesty rules that carry visual weight

Unconfirmed data is labeled where it appears, not in a footnote: provisional fixtures carry a
bordered flag, sample clan threads carry a sample tag, and indicative prices carry a line of
`.fine` beneath them. The navigation shows whether the app is reading live data or the offline
cache, with a green dot only when the backend answered.
