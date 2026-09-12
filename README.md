# StrikeSoft Hub

StrikeSoft Hub is an Angular 22 storefront and community arena for softcombat athletes. The interface follows the Modern Forge and Epic Arena design system: forge charcoal surfaces, armor steel frames, and vitality crimson actions.

The application prefers [Supabase](https://supabase.com/) when the project is configured and reachable. If the backend is offline, missing, or unconfigured, the same catalog, cart, and session flows continue on LocalStorage without interrupting the visitor.

## Screenshots

![Home](public/screenshots/home.png)

![Armory](public/screenshots/armory.png)

![Weapon detail](public/screenshots/weapon-detail.png)

![Arena](public/screenshots/arena.png)

## Features

- Armory catalog with combat-role and weapon-class filters
- Weapon detail pages with lore, specs, and a four-axis stats radar
- Arena event feed and clan recruitment boards
- Optimistic cart with a live count announced to assistive technology
- Auth-guarded checkout and profile
- SweetAlert2 notifications themed to the forge palette
- Progressive Web App manifest and production service worker

## Stack

- Angular 22 standalone components, signals, and lazy-loaded routes
- Supabase Auth and Postgres as the primary backend
- LocalStorage as an automatic fallback and cache
- SweetAlert2 through `NotificationService`

## Getting started

1. Install Node.js 22 or later.
2. Copy `.env-template` to `.env`.
3. Optional: add `NG_APP_SUPABASE_URL` and `NG_APP_SUPABASE_ANON_KEY` from a dedicated Supabase project. Leave them empty to run entirely on the local fallback.
4. Install and start:

```bash
npm install
npm start
```

Open `http://localhost:4200/`.

`npm start` and `npm run build` run `scripts/apply-env.mjs`, which writes `src/environments/environment.secrets.ts` from `.env`.

## Supabase setup

Apply `supabase/migrations/20260912120000_init_strikesoft.sql` to a dedicated project. The migration creates catalog, community, cart, and order tables with row-level security:

- Public read access for weapons, events, and clan posts
- Owner-only access for cart and orders

Use a publishable or legacy anon key in the browser. Never place a `service_role` key in this repository.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm start` | Sync env files and serve the app |
| `npm run build` | Production build |
| `npm test` | Unit tests (Vitest) |
| `npm run env:sync` | Refresh generated secrets from `.env` |

## Architecture

The source tree follows a feature-driven layout:

```text
src/app/
  core/       models, guards, repositories, singleton services
  features/   home, armory, arena, lore, auth, checkout, profile
  shared/     buttons, cards, radar, loading state
  layout/     navbar, footer, shell
```

See [docs/architecture_guidelines.md](docs/architecture_guidelines.md) and [docs/design_guidelines.md](docs/design_guidelines.md).

## Author

Created by [Hugo Colmenares](https://github.com/HugoFernandoColmenares).
