# Design Guidelines

This document outlines the design system for the **StrikeSoft** web platform. It follows a **Modern Forge & Epic Arena** aesthetic, blending the rugged, mythical feel of RPG roleplay with the sleek, high-performance nature of modern sports. We enforce a 60-30-10 color proportion rule to maximize product visibility, readability, and action-driven engagement.

## Color Palette

The palette enforces the 60-30-10 rule. The dominant dark charcoal creates an immersive, cinematic backdrop (the "Forge"), the armor steel anchors the UI components and cards, and the vitality crimson acts as the aggressive call-to-action for the sport.

| Usage | Color | Hex Code | Description |
| :--- | :--- | :--- | :--- |
| **60% Dominant** | Forge Charcoal | `#181A1F` | Main background, immersive canvas for shopping and community. |
| **30% Structural** | Armor Steel | `#2A2D34` | Product cards, navigation bars, dropdowns, and structural frames. |
| **10% Accent** | Vitality Crimson | `#D32F2F` | "Add to Cart" buttons, combat alerts, price tags, and active states. |
| **Text Primary** | Blade Silver | `#F0F0F0` | Primary typography for titles and essential reading. |
| **Text Secondary** | Chainmail Grey | `#9AA0A6` | Specs, secondary descriptions, and muted text. |
| **Surface Hover** | Forged Iron | `#3A3F47` | Hover states for product cards and structural surfaces. |
| **Epic Gold** | Champion Gold | `#E5A93C` | Reserved strictly for premium items, tournament badges, and achievements. |

## Typography

The typographic system is split into three roles: Epic display, athletic readability, and technical weapon specs.

- **Display Font:** 'Cinzel', serif. Used for branding, category headers (e.g., "Two-Handed Swords", "Shields"), and epic banners. Weight 700 to evoke a medieval, mythical feel.
- **Body Font:** 'Inter', sans-serif. Used for product descriptions, community forum posts, and general UI. Highly legible, modern, and clean for e-commerce.
- **Technical/Stats Font:** 'Rajdhani', sans-serif. Used for weapon statistics (weight, length, core material), pricing, and player stats. Gives a "gaming/tactical" HUD vibe.
- **Base Font Size:** `16px` (Default). All sizing must use `rem`.

## Layout and Spacing Rules

To maintain consistency in Angular, the following rules are **mandatory**:

1.  **Units:** Always use `rem` for font sizes, spacing, and dimensions.
2.  **Mobile-First Grid:** The platform is heavily used by players at events. CSS Grid must prioritize mobile viewports first, expanding to multi-column desktop grids for the catalog.
3.  **Spacing Strategy:** Use the `gap` property to separate product cards and community feed items. 
4.  **Padding:** Use generous `padding` to create breathing room around product imagery.
5.  **Visual Weight:** Weapon images must break out of their containers slightly (using negative margins or absolute positioning) to create a dynamic, "ready-for-battle" 3D effect.

## CSS Architecture (DRY Approach)

### Reusable Utility Classes

```css
/* Layout Utilities */
.arena-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.stat-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Rajdhani', sans-serif;
}

/* Spacing Utilities (increments of 0.5rem) */
.gap-strike { gap: 0.5rem; }
.gap-clash  { gap: 1rem; }
.gap-epic   { gap: 2rem; }

```

### Component Design Principles

* **Borders & Corners:** Ditch standard round corners. Use CSS `clip-path` to create angled, chamfered corners on buttons and cards (e.g., a 45-degree cut on the top-right and bottom-left) to simulate forged metal and aggressive sports dynamics.
* **Shadows:** Use deep, colored shadows to simulate glowing forge embers or energy. E.g., `box-shadow: 0 8px 16px rgba(211, 47, 47, 0.15)` for Crimson hover states.
* **Module Structure:** A dark `Armor Steel` card surface housing the product, with technical specs neatly aligned at the bottom, culminating in a `Vitality Crimson` action button.
* **Interactions:** Hover effects should feel like an "Impact". Slight scale-ups (`transform: scale(1.02)`) and quick transitions (`0.15s ease-out`) to emulate swift combat strikes.

## Angular Architecture and State Management

The application is an e-commerce and community hub.

1. **Data Models:**
* `WeaponModel` (id, name, class, weight, length, coreType, price, loreDescription).
* `BattleEventModel` (id, title, location, date, ruleset).


2. **Cart Service:** A global state service (`CartService`) managing the user's selected arsenal, persisting to LocalStorage and syncing with the backend.
3. **API Repository:** An `ApiRepository` service handling all REST/GraphQL HTTP requests to the backend (e.g., Node.js/Supabase). No mock data in production components.
4. **State Signals:** Extensive use of Angular Signals to manage real-time inventory updates and community notifications (e.g., "Only 2 longswords left in stock!").
5. **Notifications:** All user-facing alerts go through `NotificationService`. SweetAlert2 popups and toasts use Forge Charcoal, Armor Steel, Vitality Crimson, and Cinzel titles so they match the rest of the UI.

## PWA & Web Integration

Unlike desktop apps, StrikeSoft lives on the web and on mobile home screens:

* **Progressive Web App:** Must include a `manifest.json` and a Service Worker to allow users to install StrikeSoft on their phones and browse the catalog offline.
* **Performance:** Images of weapons must be heavily optimized (WebP format) to ensure lightning-fast load times even on poor mobile networks at outdoor tournament fields.

## Accessibility First

* Ensure contrast ratios: `Blade Silver` on `Forge Charcoal` provides a sleek but highly readable contrast.
* Use `aria-live="polite"` for cart updates so screen readers announce when a weapon is added to the arsenal.
* Focus states must be highly visible: Use a `2px solid` `Vitality Crimson` outline for keyboard navigation.

