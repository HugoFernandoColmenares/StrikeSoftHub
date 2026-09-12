# Setup

This guide covers local development and the optional Supabase connection.

## Prerequisites

- Node.js 22 or later
- npm 11 or later
- A modern browser

## Environment files

1. Copy `.env-template` to `.env`.
2. Fill the variables only when a Supabase project is ready:

```env
NG_APP_SUPABASE_URL=https://your-project.supabase.co
NG_APP_SUPABASE_ANON_KEY=your-publishable-or-anon-key
```

`.env` is gitignored. Root-level draft copies of `design_guidelines.md` and `architecture_guidelines.md` are also gitignored so local notes stay private. The reviewed copies live in `docs/`.

## Hybrid data path

On boot the app probes Supabase Auth health. If the probe succeeds, repositories read live tables and cache the result. If the probe fails, seed data and user actions stay in LocalStorage. Returning online does not require a reload; the next probe switches the write path back to Supabase for authenticated sessions.

## Applying the schema

Run the SQL in `supabase/migrations/20260912120000_init_strikesoft.sql` from the Supabase SQL editor or the CLI. Confirm that the Data API exposes the `public` schema to `anon` and `authenticated`.

## Capturing screenshots

`scripts/shoot.ps1` drives headless Chrome over the running dev server and writes one PNG per route:

```powershell
npm start
powershell -ExecutionPolicy Bypass -File scripts/shoot.ps1 -Base http://127.0.0.1:4200 -Width 1440 -Height 1000 -Prefix desktop
```

The files land in `.impeccable/review/`. The ones published in the README are copied into
`public/screenshots/` and resized to 1280 pixels wide.

## Image assets

Every shipping raster records where it came from, either embedded in the file or in a `.json`
sidecar beside it. Weapon imagery is derived from one owner-supplied photograph,
`public/assets/weapons/sword_muckup.jpeg`; the WebP crops are generated from it with ImageMagick.
No weapon imagery is AI-generated, and pieces without real photography are shown without a
substitute image.
