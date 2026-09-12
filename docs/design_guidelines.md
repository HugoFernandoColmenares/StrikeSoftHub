# Design Guidelines

This document outlines the design system for the **StrikeSoft** web platform. It follows a **Biophilic Brutalism** aesthetic, blending the raw, heavy structural elements of brutalist architecture with organic elements (forest greens, cinematic grain overlays, and earthy battlegrounds) inspired by outdoor softcombat training and the epic heraldry of Armagedon. We enforce a responsive, high-performance design language to maximize product impact and action-driven engagement.

## Color Palette & Design Tokens

The palette moves into a sophisticated brutalist dark mode utilizing registered custom properties for smooth color-shifting transitions across sections.

| Usage | Color | Hex Code | Description |
| :--- | :--- | :--- | :--- |
| **60% Dominant** | Obsidian Forge | `#080808` | Main background, immersive canvas for shopping and community. |
| **30% Structural** | Elevated Carbon | `#111111` | Product cards, navigation bars, dropdowns, and structural frames. |
| **10% Accent** | Strike Crimson | `#FF2A2A` | "Add to Cart" buttons, combat alerts, price tags, and active states. |
| **Organic Nature** | Armagedon Green| `#10B981` | Success states, eco-armor indicators, and community highlights. |
| **Text Primary** | Blade Silver | `#F5F5F5` | Primary typography for titles and essential reading. |
| **Text Secondary** | Chainmail Grey| `#888888` | Specs, secondary descriptions, and muted text. |
| **Surface Hover** | Brutalist Iron | `#3A3F47` | Hover states for product cards and structural surfaces. |
| **Epic Gold** | Champion Gold | `#E5FF00` | Reserved strictly for premium items, tournament badges, and achievements. |

```css
@property --section-accent {
  syntax: '<color>';
  inherits: true;
  initial-value: #FF2A2A;
}

:root {
  --bg: #080808;
  --bg-elevated: #111111;
  --fg: #F5F5F5;
  --fg-dim: #888888;
  --fg-mute: #555555;
  --accent: #FF2A2A;
  --green: #10B981;
  --yellow: #E5FF00;
  --border: rgba(255, 255, 255, 0.08);
  --border-strong: rgba(255, 255, 255, 0.18);
  --section-accent: #FF2A2A;
}

```

## Typography

The typographic system is split into brutalist display headers, clean UI text, and technical weapon stats.

* **Display Font:** 'Bricolage Grotesque', sans-serif (with optical width variable settings). Used for branding, category headers, and epic banners. Heavy, brutal, and striking.
* **Body Font:** 'Space Grotesk' or 'Inter', sans-serif. Used for product descriptions, community forum posts, and general UI.
* **Technical/Stats Font:** 'JetBrains Mono', monospace. Used for weapon statistics (weight, length, core material), pricing, and player stats. Gives a tactile HUD vibe.
* **Base Font Size:** `16px` (Default). All sizing must use `rem`.

## Layout and Spacing Rules

To maintain consistency in Angular, the following rules are **mandatory**:

1. **Units:** Always use `rem` for font sizes, spacing, and dimensions.
2. **Mobile-First Grid:** The platform is heavily used by players at outdoor events. CSS Grid must prioritize mobile viewports first, expanding to multi-column desktop grids for the catalog.
3. **Spacing Strategy:** Use the `gap` property to separate product cards and community feed items.
4. **Padding:** Use generous `padding` to create breathing room around product imagery.
5. **Visual Weight & Cinematic Frames:** Weapon images and featured items sit inside `.cinematic-frame` containers with subtle pan animations and scanline overlays to create a dynamic, "ready-for-battle" atmosphere.

## CSS Architecture & Brutalist UI Components

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
  font-family: 'JetBrains Mono', monospace;
}

/* Brutalist Buttons */
.btn-primary {
  background: var(--section-accent);
  color: #000;
  padding: 0.875rem 1.5rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 0.8125rem;
  transition: all 0.25s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid var(--section-accent);
  cursor: pointer;
}
.btn-primary:hover {
  background: var(--fg);
  border-color: var(--fg);
  transform: translate(-2px, -2px);
  box-shadow: 4px 4px 0 var(--section-accent);
}

```

### Component Design Principles

* **Borders & Corners:** Marry brutalist hard edges with bio-organic contrast. Use crisp borders (`1px solid var(--border)`) and stark asymmetrical hover offsets rather than soft curves.
* **Film Grain & Textures:** A subtle animated film grain overlay (`body::before`) runs across the application to give it a cinematic, gritty medieval-tactical feel.
* **Module Structure:** A dark `Elevated Carbon` card surface housing the product, with technical specs neatly aligned at the bottom, culminating in a striking action button.
* **Interactions:** Hover effects feel like an impact. Sharp translations (`transform: translate(-2px, -2px)`) and hard drop shadows replace generic glows.

## Angular Architecture & State Management

The application is an e-commerce and community hub built on **Angular 22+**:

1. **Data Models:**
* `WeaponModel` (id, name, class, weight, length, coreType, price, loreDescription).
* `BattleEventModel` (id, title, location, date, ruleset).


2. **Cart Service:** A global state service (`CartService`) managing the user's selected arsenal, persisting to LocalStorage and syncing reactively via Signals.
3. **API Repository:** An `ApiRepository` service handling backend communication.
4. **State Signals:** Extensive use of Angular Signals (`signal`, `computed`, `effect`) to manage real-time inventory updates and community notifications instantly without lag.
5. **Notifications:** All alerts route through `NotificationService`, styling popups with brutalist dark frames and custom typography to match the identity.

## PWA & Web Integration

* **Progressive Web App:** Configured with a `manifest.json` and Service Worker so athletes can install StrikeSoft on their phones and check rules or inventory offline at muddy outdoor tournament fields.
* **Performance:** Weapon imagery optimized in WebP format with lazy loading.

## Accessibility First

* **Contrast Ratios:** Maintained with `Blade Silver` (`#F5F5F5`) on `Obsidian Forge` (`#080808`).
* **Motion Reduction:** Full support for `prefers-reduced-motion` to disable grain animations and complex panning for sensitive users.
* **Focus States:** High-visibility focus indicators using `2px solid var(--yellow)` outlines.