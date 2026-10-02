# StrikeSoft Hub

StrikeSoft Hub is the web home of **Armagedon Softcombat**, a softcombat group that meets every
Sunday at 10:00 in Parque La Flora, Bucaramanga, Santander, Colombia. The site answers a newcomer's
first question, where and when to show up, and then carries the group's calendar, workshop catalog,
and community surfaces.

The interface is being refactored onto the **Armagedon forge** design language: stone canvas, iron
frames, bronze trim, timber panels, parchment type, and an ember accent. Tokens, type, surfaces, and
component recipes are defined in [docs/design_guidelines.md](docs/design_guidelines.md). How that
prototype maps onto Angular features, routes, and models is in
[docs/architecture_guidelines.md](docs/architecture_guidelines.md).

A local HTML/CSS/JS mockup may exist under `public/design_ref/` as a visual source. That folder is
gitignored and is not part of the shipped Angular app.

The application prefers [Supabase](https://supabase.com/) when the project is configured and
reachable. If the backend is offline, missing, or unconfigured, the same catalog, cart, and session
flows continue on LocalStorage without interrupting the visitor.

## Screenshots

![Home, leading with the countdown to the next Sunday muster](public/screenshots/home.png)

![The armory, a dense ledger of workshop pieces](public/screenshots/armory.png)

![Weapon detail with measured specifications and handling profile](public/screenshots/weapon-detail.png)

![The arena, with the standing fixture and announced events](public/screenshots/arena.png)

![The sport, answering a first-time visitor's questions](public/screenshots/the-sport.png)

Screenshots currently show the previous brutalist ledger UI. They will be recaptured after the forge
visual refactor lands in the running app.

## Features

- A home page built around the recurring Sunday muster, moving toward the forge hero (featured
  pieces, new arrivals, upcoming battle banner)
- An armory that will render as a **product card grid** with sticky filters for category, material,
  and maximum price
- Weapon and gear detail with workshop photography when it exists, and CSS gear-art as fallback
- Events and campaigns with location, ruleset, and RSVP
- About the group: craft pillars, roster, and a first-class safety protocol
- Cart as a right-hand drawer with a live badge, then an auth-guarded checkout
- Optimistic cart updates announced to assistive technology
- Admin/publish flow for catalog and events (guarded)
- Notifications themed to iron and ember, centralized in `NotificationService`
- Progressive Web App manifest and production service worker

## Honesty of the content

The group, the venue, the weekly schedule, the Instagram account, and the workshop photography are
real. Prices, stock counts, special-event dates, clan threads, and any fictional forge roster from
the design prototype are provisional placeholders and must stay labeled as such in the interface.
Pieces without a photograph show class or CSS gear-art rather than a substitute stock photo.
`PRODUCT.md` records which facts are confirmed and which are not. Confirmed facts live in
`src/app/core/config/group.ts` and are not duplicated across templates.

## Stack

- Angular 22 standalone components, signals, and lazy-loaded routes
- Design tokens from the Armagedon forge prototype (`html` root at 62.5% so `1rem` equals `10px`)
- Cinzel, MedievalSharp, and Inter
- Supabase Auth and Postgres as the primary backend
- LocalStorage as an automatic fallback and cache
- SweetAlert2 through `NotificationService` (styled to the forge chrome)

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

The source tree follows a feature-driven layout. Prototype views map onto these folders:

```text
src/app/
  core/       config, models, guards, repositories, singleton services
  features/   home, armory (shop), arena (events), lore (about), auth, checkout, profile
  shared/     product card, event card, loading state, surface primitives
  layout/     iron topbar, cart drawer, footer, shell
```

See [docs/architecture_guidelines.md](docs/architecture_guidelines.md) and
[docs/design_guidelines.md](docs/design_guidelines.md). [docs/DESIGN.md](docs/DESIGN.md) still
describes the currently shipped brutalist interface; update it when the forge tokens land in
`src/styles.css`.

## Author

Created by [Hugo Colmenares](https://github.com/HugoFernandoColmenares).
