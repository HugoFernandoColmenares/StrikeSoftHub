
# Architecture Guidelines

This document defines the software architecture, coding standards, and structural guidelines for the **StrikeSoft** web platform—an epic e-commerce and community hub for softcombat athletes, powered by **Angular 22+**.

---

## 1. Core Development Principles

Every contributor must strictly adhere to these fundamental software engineering paradigms:

* **SOLID Principles:** Components handle only presentation (UI cards, buttons); Services handle business logic (Cart math, checkout flow); Models define structure.
* **DRY (Don't Repeat Yourself):** Shared UI components like `<strike-weapon-card>` or `<strike-stat-bar>` must be built once in the `shared/` directory and reused across the catalog and user profile.
* **KISS (Keep It Simple, Stupid):** Avoid over-engineering the checkout flow. Keep the path from "Discovering a Weapon" to "Purchasing" as frictionless as a swift sword strike.
* **Keep it Lightweight (~200 Line Rule):** Components should ideally stay under 200 lines of code. Complex product configurators must be broken down into smaller sub-components (e.g., `ColorSelector`, `PommelSelector`).

---

## 2. Project Structure & Directory Rules

The project enforces a modular, feature-driven architecture:

```text
src/app/
├── core/               # Singleton services (Auth, Cart, API), models, guards
├── features/           # Domain-specific modules (Catalog, Community, Checkout)
├── shared/             # Reusable UI elements (Buttons, Cards, Modals)
├── layout/             # Master structural components (Navbar, Footer)
└── app.routes.ts       # Root routing configuration

```

### Layer Breakdown

#### `core/`

The brain of the platform.

* **Includes:** `models/` (Weapon, User, Order), `services/` (`CartService`, `AuthService`, `ApiService`), `interceptors/` (JWT token injection).

#### `features/`

Replaces the generic "pages" approach. Each feature represents a core business domain.

* **Catalog:** Browse weapons, filter by class (Swords, Axes, Shields).
* **Community:** Forum posts, tournament event lists, clan recruitment.
* **Checkout:** The sacred path to claiming new gear.

#### `shared/`

Atomic, highly reusable components.

* **Includes:** `<app-weapon-card>`, `<app-epic-button>`, `<app-loot-spinner>` (loading state).

---

## 3. Angular 22+ Modern Standards

The shipped application is zoneless, standalone, and signal-first. Notifications are centralized in `NotificationService` using SweetAlert2 with forge-themed styles. Repositories read from Supabase when the backend probe succeeds and from LocalStorage otherwise.

We embrace the full power of modern Angular.

* **Standalone Architecture:** Every component must be `standalone: true`.
* **Functional Injection:** Use `inject()` instead of constructor injection.

```typescript
// Approved
private cartService = inject(CartService);
private authService = inject(AuthService);

```

* **Modern Control Flow:** Use native micro-syntax blocks.

```angular-html
@if (inStock()) {
  <app-epic-button (click)="addToArsenal()">Add to Arsenal</app-epic-button>
} @else {
  <div class="out-of-stock-banner">Forging more...</div>
}

```

* **Signals State Management:** The Shopping Cart, User Session, and applied Catalog Filters must be managed using Angular `Signals` for glitch-free, instant UI updates.

---

## 4. Routing Strategy

* **Lazy Loading:** Every feature domain **must** use `loadChildren` or `loadComponent`.
* **Guards:** The `/checkout` and `/profile` routes must be protected by an `authGuard`.

```typescript
export const appRoutes: Route[] = [
  { 
    path: '', 
    loadComponent: () => import('./layout/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      { path: 'armory', loadComponent: () => import('./features/catalog/catalog.component').then(m => m.CatalogComponent) },
      { path: 'arena', loadComponent: () => import('./features/community/community.component').then(m => m.CommunityComponent) }
    ]
  },
  { path: '**', loadComponent: () => import('./core/not-found/not-found.component').then(m => m.NotFoundComponent) } // Styled as a "Lost in the Woods" RPG page
];

```

---

## 5. API & Backend Integration

StrikeSoft is a dynamic platform connected to a live database.

* **Repository Pattern:** Do not inject `HttpClient` directly into components. `CatalogRepository`, `CommunityRepository`, and `OrderRepository` map data to typed models.
* **Hybrid backend:** `BackendStatusService` probes Supabase on boot and every 30 seconds. Live tables win when reachable; LocalStorage keeps the same UX when they are not.
* **Optimistic UI Updates:** Cart mutations update signals immediately, persist locally, then sync to Supabase for authenticated online sessions.

---

## 6. View Architecture & Component Roadmap

### Layout Components (`layout/`)

* **Epic Navbar:** Sticky header. Left side: StrikeSoft Logo. Center: Armory, Arena, Lore. Right: User Profile and a dynamic Cart Icon with a glowing badge when items are inside.

### Core Features (`features/`)

#### 1. The Armory (Catalog)

* **Weapon Grid:** Utilizes the `.arena-grid`.
* **Filter Sidebar:** Let users filter by Combat Role (Tank, Assassin, Skirmisher) which translates to weapon types (Tower Shields, Daggers, One-Handed).

#### 2. Weapon Detail Page (Product View)

* **Visualizer:** Large hero image of the weapon.
* **Stats Radar:** A radar chart showing Durability, Weight, Handling, and Range.
* **Lore Box:** A small, styled blockquote explaining the "mythical" backstory of the weapon design.

#### 3. The Arena (Community)

* **Event Feed:** A list of upcoming softcombat events.
* **Clan Boards:** Threads where teams can recruit fighters.

---

## 7. Data Model Example

### WeaponModel Definition (`core/models/weapon.model.ts`)

```typescript
export type WeaponClass = 'SWORD' | 'AXE' | 'MACE' | 'SHIELD' | 'POLEARM';

export interface WeaponModel {
  id: string;
  name: string;
  weaponClass: WeaponClass;
  price: number;
  stock: number;
  specs: {
    weightGrams: number;
    totalLengthCm: number;
    coreMaterial: string;
  };
  loreDescription: string;
  imageUrl: string;
}

```

---

## 8. Custom Scrollbar (Global CSS)

To match the "Forge & Arena" aesthetic, we replace the default browser scrollbar with a tactical, metallic look.

```css
/* Core Scrollbar Rule for the App */
html, body {
  overflow-y: scroll;
}

/* Custom Webkit Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

/* Forge Charcoal Track */
::-webkit-scrollbar-track {
  background: #181A1F; 
  border-left: 1px solid #2A2D34;
}

/* Armor Steel Thumb */
::-webkit-scrollbar-thumb {
  background: #2A2D34; 
  border-radius: 4px; 
}

/* Vitality Crimson on Hover (The Strike) */
::-webkit-scrollbar-thumb:hover {
  background: #D32F2F; 
}

```