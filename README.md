# StrikeSoft Hub

StrikeSoft Hub is the web home of **Armagedon Softcombat**, a softcombat group that meets every
Sunday at 10:00 in Parque La Flora, Bucaramanga, Santander, Colombia. The site answers a newcomer's
first question, where and when to show up, and then carries the group's calendar, clan boards, and
workshop-made weapon catalog.

The interface follows the Biophilic Brutalism design system defined in
[docs/design_guidelines.md](docs/design_guidelines.md) and recorded, as built, in
[DESIGN.md](DESIGN.md): an obsidian ground, hairline brutalist structure, a section accent that
retunes as you scroll, and cinematic film grain over real workshop photography.

The application prefers [Supabase](https://supabase.com/) when the project is configured and
reachable. If the backend is offline, missing, or unconfigured, the same catalog, cart, and session
flows continue on LocalStorage without interrupting the visitor.

## Screenshots

![Home, leading with the countdown to the next Sunday muster](public/screenshots/home.png)

![The armory, a dense ledger of workshop pieces](public/screenshots/armory.png)

![Weapon detail with measured specifications and handling profile](public/screenshots/weapon-detail.png)

![The arena, with the standing fixture and announced events](public/screenshots/arena.png)

![The sport, answering a first-time visitor's questions](public/screenshots/the-sport.png)

## Features

- A home page built around the recurring Sunday muster, with a live countdown in the group's own
  time zone and a "happening now" state while a session is running
- An armory ledger with combat-role and weapon-class filters, measured specifications, and prices
  in Colombian pesos
- Weapon detail pages with real workshop photography and a handling profile of four measured values
- An arena carrying the standing fixture, announced events, and the clan board
- A plain-language explainer of the sport for first-time visitors
- Optimistic cart with a live count announced to assistive technology
- Auth-guarded reservation flow and profile
- SweetAlert2 notifications themed to the interface and centralized in `NotificationService`
- Progressive Web App manifest and production service worker

## Honesty of the content

The group, the venue, the weekly schedule, the Instagram account, and the workshop photography are
real. Prices, stock counts, special-event dates, and clan threads are provisional placeholders and
are labeled as such in the interface. Weapons without a photograph show their class rather than a
substitute illustration. `PRODUCT.md` records which facts are confirmed and which are not.

## Stack

- Angular 22 standalone components, signals, and lazy-loaded routes
- Supabase Auth and Postgres as the primary backend
- LocalStorage as an automatic fallback and cache
- SweetAlert2 through `NotificationService`

## Getting started

1. Install Node.js 22 or later.
2. Copy `.env-template` to `.env`.
3. Optional: add `NG_APP_SUPABASE_URL` and `NG_APP_SUPABASE_ANON_KEY` from a dedicated Supabase
   project. Leave them empty to run entirely on the local fallback.
4. Install and start:

```bash
npm install
npm start
```

Open `http://localhost:4200/`.

`npm start` and `npm run build` run `scripts/apply-env.mjs`, which writes
`src/environments/environment.secrets.ts` from `.env`.

## Supabase setup

Apply `supabase/migrations/20260912120000_init_strikesoft.sql` to a dedicated project. The migration
creates catalog, community, cart, and order tables with row-level security:

- Public read access for weapons, events, and clan posts
- Owner-only access for cart and orders

Use a publishable or legacy anon key in the browser. Never place a `service_role` key in this
repository.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm start` | Sync env files and serve the app |
| `npm run build` | Production build |
| `npm test` | Unit tests (Vitest) |
| `npm run env:sync` | Refresh generated secrets from `.env` |
| `scripts/shoot.ps1` | Capture page screenshots with headless Chrome |

## Architecture

The source tree follows a feature-driven layout:

```text
src/app/
  core/       config, models, guards, repositories, singleton services
  features/   home, armory, arena, the sport, auth, checkout, profile
  shared/     icon, weapon card, stats profile, loading state, accent directive
  layout/     navbar, footer, shell
```

Confirmed group facts live in one place, `src/app/core/config/group.ts`, so the venue, schedule, and
contact handle are never duplicated across templates.

See [docs/architecture_guidelines.md](docs/architecture_guidelines.md),
[docs/design_guidelines.md](docs/design_guidelines.md), and [DESIGN.md](DESIGN.md).

## Author

Created by [Hugo Colmenares](https://github.com/HugoFernandoColmenares).
