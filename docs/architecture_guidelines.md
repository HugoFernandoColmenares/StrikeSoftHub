# Architecture Guidelines

This document defines the software architecture for **StrikeSoft Hub**—the Angular home of Armagedon Softcombat—while it is refactored from the single-file **Armagedon forge** prototype (`public/design_ref/`, gitignored) into this codebase.

The prototype is a vanilla HTML / CSS / JS SPA: hash-less view switching, an in-memory `state` object, DOM renderers, a cart drawer, and an admin modal. The Angular app keeps **standalone components, signals, lazy routes, and the hybrid Supabase / LocalStorage backend**. What we take from the prototype is information architecture, data shapes, and the forge UI recipes documented in [design_guidelines.md](design_guidelines.md).

Do not recreate `docs/DESIGN.md`, `docs/PRODUCT.md`, or `docs/setup.md`. Product purpose lives in the README; visual rules live here and in the design guidelines.

---

## 1. Core development principles

* **SOLID:** Components present forge UI (cards, drawers, forms). Services own cart math, auth, filters, and persistence. Models describe products, events, team, and session.
* **DRY:** Product cards, event cards, metal/wood/surface chrome, and form fields are built once under `shared/` (or as global CSS classes) and reused on Home, Shop, and Events.
* **KISS:** The path is Discover → Filter → Add to cart → Drawer → Checkout. The armory is a **fixed CSS card grid** by default, with an optional ledger view behind a `gridView` signal. Never render both views at once.
* **Keep it lightweight (~200 line rule):** Split the prototype’s giant `init()` / `renderShop()` / `renderAdminState()` into small components (filter panel, product card, cart drawer, admin login, product form, event form).

---

## 2. Project structure

Keep the feature-driven tree. Map prototype views onto existing folders rather than inventing a second app.

```text
src/app/
├── core/               # Singleton services, models, guards, repositories, group config
├── features/           # Domain screens (home, shop, events, about, auth, checkout, profile)
├── shared/             # Product card, event card, icon, loading, surface primitives
├── layout/             # Topbar, cart drawer host, footer, main shell
└── app.routes.ts
```

### Layer breakdown

#### `core/`

* **config:** Confirmed group facts live only in `group.ts` (venue, Sunday muster, Instagram). Templates never duplicate them.
* **models:** Product (weapon), battle event, cart line, team member, user session, order.
* **services:** `CartService`, `AuthService`, `BackendStatusService`, `NotificationService`, `MusterService`.
* **repositories:** `CatalogRepository`, `CommunityRepository`, `OrderRepository`. Components never inject `HttpClient`.
* **interceptors / guards:** Auth on checkout, profile, and admin publish.

#### `features/`

Prototype `data-view` → Angular route:

| Prototype view | Angular feature | Route |
| :--- | :--- | :--- |
| `home` | `features/home` | `''` |
| `shop` | `features/catalog` (Armory / Shop the Forge) | `'armory'` |
| `events` | `features/community` | `'arena'` (or rename path to `'events'` when routes are updated) |
| `about` | `features/lore` | `'lore'` (or `'about'`) |
| Admin / Publish modal | `features/auth` + admin dashboard (modal or route) | guarded |
| Cart drawer | layout overlay, not a page | opened from topbar |
| Checkout (toast in prototype) | `features/checkout` | `'checkout'` + `authGuard` |

Home owns: hero + accent particles, featured piece, Instagram chronicles, Sunday countdown, next fixtures.

Shop owns: role/class filters, a `gridView` toggle, and either a fixed card grid or a ledger.

Events owns: campaign cards and RSVP.

About owns: craft pillars, team roster, safety protocol.

#### `shared/`

* `<app-product-card>` (prototype `.product-card` + CSS gear-art by `art` / category).
* Arrival tile if distinct from the full card.
* Event card / event banner.
* Spec list, meta pills, section title (kicker + heading + lede).
* Buttons remain **global classes** (`.btn`, `.btn-primary`, `.btn-ghost`, `.btn-danger`, `.btn-small`) in `src/styles.css`.

#### `layout/`

* **Topbar:** sticky iron header. Club shield + Armagedón wordmark + tagline. Public nav only: Inicio, Forja, Eventos, El deporte. Right: cart badge and hamburger. Auth, admin, and profile are **not** linked from the header; they stay on `/auth` and `/profile` for direct URL access.
* **Cart drawer:** right sheet + backdrop (not a dedicated checkout-only page for browse).
* **Footer:** lives at the end of `<main>`. An `IntersectionObserver` (root `#main`) sets `expanded` when the full footer enters the pane. Until then a compact fixed bar stays visible.
* **Main layout:** fixed-height `app-shell` grid (`auto 1fr`). `html` / `body` / `app-root` do not scroll. `<main>` has `overflow-y: scroll` and owns the full footer.

---

## 3. Angular 22+ standards

Zoneless, standalone, signal-first. Notifications stay in `NotificationService`; restyle SweetAlert2 (or toasts) to panel / `--color-main` per the design guidelines.

Route chunks use `loadComponent`. After the first paint, `withPreloading(PreloadAllModules)` warms the remaining feature chunks so section changes do not wait on a network hop. Repositories expose a `ready` signal after the boot initializer; catalog and arena screens skip a second `load()` when data is already hydrated. The home particle field stays small (about ten sparks) and `contain: strict` so it does not tax other routes.

* **Standalone:** every component `standalone: true`.
* **`inject()`** instead of constructor injection.
* **Control flow:** `@if`, `@for`, `@else`.
* **Signals:** cart, session, shop filters (`category`, `material`, `maxPrice`), active view data. The prototype’s mutable `state` object becomes signals + computed filtered lists.

```typescript
private cartService = inject(CartService);
private authService = inject(AuthService);
```

```angular-html
@if (product.stock > 0) {
  <button type="button" class="btn btn-primary" (click)="addToCart(product.id)">
    Add to arsenal
  </button>
} @else {
  <p>This piece is in the workshop queue.</p>
}
```

---

## 4. Routing

* Lazy-load every feature with `loadComponent`.
* Guard `/checkout`, `/profile`, and admin publish.
* Prototype `setRoute()` becomes the Angular router. Do not keep show/hide `.section.is-active` as the primary navigation after the refactor (it is acceptable only as an animation hook on the activated route).

```typescript
export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/main-layout/main-layout.component').then((m) => m.MainLayoutComponent),
    children: [
      { path: '', loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent) },
      { path: 'armory', loadComponent: () => import('./features/catalog/catalog.component').then((m) => m.CatalogComponent) },
      { path: 'arena', loadComponent: () => import('./features/community/community.component').then((m) => m.CommunityComponent) },
      { path: 'lore', loadComponent: () => import('./features/lore/lore.component').then((m) => m.LoreComponent) },
    ],
  },
  { path: '**', loadComponent: () => import('./core/not-found/not-found.component').then((m) => m.NotFoundComponent) },
];
```

---

## 5. API and persistence

* **Repository pattern** for catalog, events, team, cart, and orders.
* **Hybrid backend:** `BackendStatusService` probes Supabase on boot and on an interval. Live tables win when reachable; LocalStorage preserves the same UX when they are not. The topbar status dot maps to this probe (prototype: Guest / online).
* **Optimistic cart:** update signals immediately, persist locally, sync when authenticated and online.
* **Admin publish:** the prototype mutates `state.products` / `state.events` in memory. In Angular, publish goes through repositories (insert/update) with the same form fields.

---

## 6. View architecture (from the prototype)

### Home

* Full-bleed hero: artisan kicker, Cinzel headline, two CTAs (Explore the Armory, Join Next Battle), meta pills, forge anvil + accent particles.
* Featured products (`featured: true`) in `.product-grid`.
* New arrivals (`arrival: true`) in `.horizontal-grid`.
* Upcoming battle as `.event-banner.metal-frame`.

### Shop (Armory)

* Sticky `.filter-panel.surface`: category (Swords, Shields, Archery, Polearms, Armor), material (EVA Foam, Latex Foam, PU Foam, Hybrid), max price range.
* Toolbar: result count + open cart.
* Grid of full product cards (not a specification ledger).

### Product model vs old ledger

Extend `WeaponModel` toward the prototype product so filters and cards have real fields:

```typescript
export type ProductCategory =
  | 'Swords'
  | 'Shields'
  | 'Archery'
  | 'Polearms'
  | 'Armor';

export type ProductMaterial = 'EVA Foam' | 'Latex Foam' | 'PU Foam' | 'Hybrid';

export type GearArt = 'sword' | 'shield' | 'polearm' | 'bow' | 'armor';

export interface ProductModel {
  id: string;
  title: string;
  category: ProductCategory;
  material: ProductMaterial;
  description: string;
  weight: string;
  core: string;
  density: string;
  price: number;
  art: GearArt;
  featured: boolean;
  arrival: boolean;
  /** Optional workshop photograph; CSS gear-art is the fallback. */
  imageUrl?: string;
  stock?: number;
}
```

Keep measured SI fields (`weightGrams`, `totalLengthCm`) if the workshop catalog still needs them; map them into `.spec-item` cells rather than a radar/HUD.

### Events

```typescript
export interface BattleEventModel {
  id: string;
  title: string;
  date: string; // ISO
  location: string;
  ruleset: string;
  description: string;
  players: string;
  status: 'Open' | 'Soon' | string;
}
```

RSVP in the prototype is a local toast. In Angular, persist through `CommunityRepository` when online.

### About / team

```typescript
export interface TeamMemberModel {
  name: string;
  role: string;
  initials: string;
}
```

About copy in the prototype is fictional workshop lore. Prefer `group.ts` for real venue facts and label fictional roster/campaign copy as provisional, consistent with the honesty rules in the README.

### Cart

Prototype cart is `{ productId, qty }` in `state.cart`. `CartService` should expose count, lines, total, add, remove, and drawer open/close signals. Checkout remains a guarded route; the drawer is the browse-time surface.

### Admin

Login panel → dashboard with product form and event form (title, category, price, material, description, weight, core; event title, date, location, ruleset, description, players). Stats chips: product count, event count, cart count.

---

## 7. CSS architecture (implementation)

* Tokens and button/surface/utility classes live only in `src/styles.css`. Feature files compose those tokens; they do not declare hex colors or extra palettes.
* **Tokens are role-based.** `--color-main`, `--color-main-hot`, and `--color-main-deep` hold the accent (currently club-shield green). Surfaces use `--color-canvas`, `--color-surface`, `--color-panel`. Trim uses `--color-trim` / `--color-trim-strong`. Type uses `--color-text`. There is no orange, gold, or pigment-named token.
* **Highlight** is `--highlight` (`--color-trim-strong`): focus rings, prices, hover type.
* Semantic aliases: `--accent` and `--section-accent` resolve to `--color-main`. `--fg` is `--color-text`; `--fg-dim` is muted type.
* Shared utilities to reuse: `.shell`, `.surface`, `.btn-primary`, `.btn-ghost`, `.btn-danger`, `.label`, `.fine`, `.mono`, `.sr`, `.section-kicker`, `.section-title`.
* `html { font-size: 62.5%; }` so `1rem` equals `10px`.
* `AccentZoneDirective` writes `--section-accent` from CSS variables (`var(--color-main)`), never from hex in templates.

---

## 8. Scrollbar and chrome

Theme leftover browser chrome from tokens (green thumb on stone track). Example:

```css
.horizontal-grid {
  scrollbar-width: thin;
  scrollbar-color: var(--color-main) var(--color-canvas);
}
```

Form caret, `accent-color`, primary buttons, and hero particles use `--color-main`. Focus-visible rings use `--color-trim-strong`.

---

## 9. Documentation

Keep only `docs/design_guidelines.md`, `docs/architecture_guidelines.md`, and `README.md`. Do not recreate `DESIGN.md`, `PRODUCT.md`, or `setup.md`. Setup, product purpose, and visual rules belong in those three files.
