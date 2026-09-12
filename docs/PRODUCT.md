# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Existing codebase: Angular 22 standalone components with signals, lazy routes, Supabase as primary backend, LocalStorage as automatic fallback, SweetAlert2 for notifications, PWA manifest and service worker.

## Users

Two audiences, in this order. First, newcomers in Bucaramanga who found the group and want to know one thing: when and where they can show up and whether they need to bring anything. Second, active fighters and clan organizers who already train with the group and need the calendar, the rulesets, and gear.

They browse on phones, outdoors, in daylight, on intermittent connections.

## Product Purpose

StrikeSoft Hub is the home of Armagedon Softcombat, a real softcombat group in Bucaramanga, Santander, Colombia. The site answers where and when the group meets, explains what softcombat is to a first-time visitor, and carries the group's calendar, clan boards, and workshop-made weapon catalog.

## Positioning

This is an existing physical community with a fixed weekly ritual, not a storefront with a blog attached. The weapons are made in the group's own workshop, not resold, and each piece carries measured specifications (weight in grams, total length in centimeters, core material) and a combat role.

## Operating Context

Confirmed and binding: the group meets every Sunday at 10:00 a.m. at Parque La Flora, Bucaramanga, Santander, Colombia. Its public channel is Instagram, `@armagedonsoftcombat` (https://www.instagram.com/armagedonsoftcombat/), which is the contact path for anyone who wants to attend.

Use happens outdoors and on mobile: open fields, direct sun, intermittent connectivity. The application must stay usable when the backend is unreachable, which is why catalog, cart, and session state fall back to LocalStorage.

## Capabilities and Constraints

Confirmed: catalog browsing with combat-role and weapon-class filters, weapon detail with specs and lore, event feed, clan boards, cart, auth-guarded checkout and profile, hybrid Supabase/LocalStorage data path, PWA install and offline browsing.

Undecided: pricing, stock counts, special-event dates, and clan posts are not final. They are illustrative values pending real data and must be labeled as such on screen rather than presented as firm commercial claims. The weekly Sunday muster, the venue, and the Instagram handle are the only confirmed scheduling facts.

## Brand Commitments

Names: StrikeSoft Hub, for the platform; Armagedon Softcombat, for the group it belongs to. Creator: Hugo Colmenares (github.com/HugoFernandoColmenares). The design brief in `docs/design_guidelines.md` is binding: Biophilic Brutalism, the palette and token set it defines, and the typographic roles it names.

## Evidence on Hand

Real product photography of two finished swords with crimson-wrapped grips and brass guards, shot on green and black cloth: `public/assets/weapons/sword_muckup.jpeg`. This is the only real imagery available; every other weapon visual is a placeholder and must not be presented as a distinct finished product. No testimonials, customers, benchmarks, or press exist. Do not invent them.

## Product Principles

1. The Sunday muster comes first. A visitor who cannot find the group in the physical world has no use for the catalog.
2. Specifications are the sales argument. Weight, length, core, and role outrank adjectives.
3. Offline is a normal state, not an error. The interface tells the truth about its data source without making the visitor handle it.
4. Claims stay honest. Illustrative pricing and scheduling are marked, never dressed as confirmed.

## Accessibility & Inclusion

Outdoor daylight use demands high contrast. The brief requires `prefers-reduced-motion` support for grain and panning effects, and high-visibility focus indicators.
