# StrikeSoft Hub

StrikeSoft Hub is the web home of **Armagedón Softcombat**, a softcombat group that meets every
Sunday at 10:00 in Parque La Flora, Bucaramanga, Santander, Colombia. The visitor-facing interface
is in Spanish. Copy lives as TypeScript modules under `src/app/core/copy/`, not in templates.

The first question the site answers is where and when to show up. From there it carries the
calendar, a workshop catalog, and public chronicles transcribed from
[@armagedonsoftcombat](https://www.instagram.com/armagedonsoftcombat/).

The visual system is the **Armagedón forge** language: stone canvas, iron frames, bronze trim,
parchment type, an ember accent, and rising embers on the home hero. Tokens and recipes are in
[docs/design_guidelines.md](docs/design_guidelines.md). Feature mapping is in
[docs/architecture_guidelines.md](docs/architecture_guidelines.md).

A local HTML/CSS/JS mockup may exist under `public/design_ref/` as a visual source. That folder is
gitignored and is not part of the shipped Angular app.

The application prefers [Supabase](https://supabase.com/) when the project is configured and
reachable. If the backend is offline, missing, or unconfigured, the same catalog, cart, and session
flows continue on LocalStorage without interrupting the visitor.

## Screenshots

![Inicio, con el héroe de forja, ascuas y la cuenta atrás al domingo](public/screenshots/home.png)

![La forja, filtros de rol y clase y el libro de piezas](public/screenshots/armory.png)

![Detalle de arma con medidas y perfil de manejo](public/screenshots/weapon-detail.png)

![La arena, encuentro fijo y fechas tomadas de Instagram](public/screenshots/arena.png)

![El deporte, preguntas de quien llega por primera vez](public/screenshots/the-sport.png)

## Features

- Spanish UI with copy files in `src/app/core/copy/`
- Home hero with workshop photography, ember particles, and a live Sunday countdown in COT
- Instagram chronicles on the home page (Sakura Fest, Bucara Geek Fest, Sunday call)
- Armory with combat-role and weapon-class filters, measured specs, and prices in Colombian pesos
- Weapon detail with workshop photography when it exists
- Arena with the standing Sunday fixture plus announced dates from the public Instagram
- Cart as a right-hand drawer, then an auth-guarded reservation flow
- Notifications themed to iron and ember, centralized in `NotificationService`
- Progressive Web App manifest and production service worker

## Honesty of the content

The group, the venue, the weekly schedule, the Instagram account, the official bio, and the
workshop photography are real. Instagram items are transcribed captions and on-image text from the
public profile; they are not a live Instagram embed. Prices and stock counts are still indicative
and labeled as such. Pieces without a photograph show their class rather than a substitute image.
Confirmed facts live in `src/app/core/config/group.ts`.

## Stack

- Angular 22 standalone components, signals, and lazy-loaded routes
- `es-CO` locale for dates
- Design tokens from the Armagedón forge prototype (`html` root at 62.5% so `1rem` equals `10px`)
- Cinzel, MedievalSharp, and Inter
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

```text
src/app/
  core/
    config/     confirmed group facts
    copy/       Spanish UI strings, one file per surface
    data/       catalog, events, Instagram chronicles, first-Sunday steps
    models/     typed records
    repositories/  Supabase + LocalStorage
    services/   cart, auth, muster, notifications
  features/     home, armory, arena, lore, auth, checkout, profile
  shared/       ember field, weapon card, stats, loading
  layout/       iron topbar, cart drawer, footer, shell
```

See [docs/architecture_guidelines.md](docs/architecture_guidelines.md) and
[docs/design_guidelines.md](docs/design_guidelines.md).

## Author

Created by [Hugo Colmenares](https://github.com/HugoFernandoColmenares).
