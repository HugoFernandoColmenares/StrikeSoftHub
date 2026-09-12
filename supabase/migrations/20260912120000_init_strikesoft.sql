-- StrikeSoft Hub schema. Apply against a dedicated Supabase project.
-- Catalog tables are readable by anon. Cart and orders belong to authenticated users.

create table if not exists public.weapons (
  id text primary key,
  name text not null,
  weapon_class text not null,
  combat_role text not null,
  price numeric not null,
  stock integer not null default 0,
  weight_grams integer not null,
  total_length_cm integer not null,
  core_material text not null,
  lore_description text not null,
  -- Null until the piece has real photography. The interface shows its class instead.
  image_url text,
  durability integer not null,
  handling integer not null,
  range_score integer not null,
  is_premium boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.battle_events (
  id text primary key,
  title text not null,
  location text not null,
  event_date timestamptz not null,
  ruleset text not null,
  description text not null,
  -- True while the date is a working proposal rather than a confirmed fixture.
  is_provisional boolean not null default true
);

create table if not exists public.clan_posts (
  id text primary key,
  title text not null,
  clan_name text not null,
  body text not null,
  author_name text not null,
  created_at timestamptz not null default now(),
  -- True for placeholder threads shown before the real board is migrated.
  is_sample boolean not null default false
);

create table if not exists public.cart_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  weapon_id text not null references public.weapons (id) on delete cascade,
  quantity integer not null default 1,
  unique (user_id, weapon_id)
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  total numeric not null,
  status text not null default 'placed',
  created_at timestamptz not null default now()
);

create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders (id) on delete cascade,
  weapon_id text,
  name text not null,
  price numeric not null,
  quantity integer not null
);

alter table public.weapons enable row level security;
alter table public.battle_events enable row level security;
alter table public.clan_posts enable row level security;
alter table public.cart_items enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;

grant select on table public.weapons to anon, authenticated;
grant select on table public.battle_events to anon, authenticated;
grant select on table public.clan_posts to anon, authenticated;
grant select, insert, update, delete on table public.cart_items to authenticated;
grant select, insert on table public.orders to authenticated;
grant select, insert on table public.order_items to authenticated;

create policy "public read weapons"
  on public.weapons
  for select
  to anon, authenticated
  using (true);

create policy "public read events"
  on public.battle_events
  for select
  to anon, authenticated
  using (true);

create policy "public read clan posts"
  on public.clan_posts
  for select
  to anon, authenticated
  using (true);

create policy "owner read cart"
  on public.cart_items
  for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "owner insert cart"
  on public.cart_items
  for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

create policy "owner update cart"
  on public.cart_items
  for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create policy "owner delete cart"
  on public.cart_items
  for delete
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "owner read orders"
  on public.orders
  for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "owner insert orders"
  on public.orders
  for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

create policy "owner read order items"
  on public.order_items
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.orders
      where orders.id = order_items.order_id
        and orders.user_id = (select auth.uid())
    )
  );

create policy "owner insert order items"
  on public.order_items
  for insert
  to authenticated
  with check (
    exists (
      select 1
      from public.orders
      where orders.id = order_items.order_id
        and orders.user_id = (select auth.uid())
    )
  );

-- Seed data mirrors src/app/core/data. Prices are in Colombian pesos and remain
-- indicative until the workshop publishes its final list.
insert into public.weapons (
  id, name, weapon_class, combat_role, price, stock, weight_grams, total_length_cm,
  core_material, lore_description, image_url, durability, handling, range_score, is_premium
) values
  ('emberbrand-longsword', 'Emberbrand Longsword', 'SWORD', 'SKIRMISHER', 185000, 4, 420, 110, 'Fiberglass core', 'The workshop reference piece: fiberglass core, layered foam edge, crimson cord wrap over a brass-toned guard.', 'assets/weapons/sword-portrait.webp', 78, 82, 70, false),
  ('nightwhisper-dagger', 'Nightwhisper Dagger', 'SWORD', 'ASSASSIN', 78000, 9, 180, 48, 'Carbon rod', 'A short sidearm for close lanes. Built for speed over ceremony.', null, 60, 94, 32, false),
  ('bastion-tower-shield', 'Bastion Tower Shield', 'SHIELD', 'TANK', 230000, 2, 1600, 120, 'Layered EVA', 'A moving wall for line holders. The rim is built to glance polearms aside.', null, 96, 40, 22, true),
  ('stormhook-polearm', 'Stormhook Polearm', 'POLEARM', 'SKIRMISHER', 198000, 3, 690, 180, 'Tapered fiberglass', 'Reach with a hooking head, built for open ground and long lines.', null, 74, 68, 96, false),
  ('anvilbreaker-mace', 'Anvilbreaker Mace', 'MACE', 'TANK', 138000, 6, 510, 82, 'Sleeved foam', 'Short, honest, and loud. Balanced to announce a strike without bruising.', null, 88, 58, 44, false),
  ('wyrmfang-axe', 'Wyrmfang Axe', 'AXE', 'SKIRMISHER', 162000, 2, 480, 92, 'Fiberglass core', 'A hooked beard for binding blades, cut for one-handed work.', null, 80, 72, 52, false),
  ('ashen-spear', 'Ashen Spear', 'POLEARM', 'ASSASSIN', 172000, 5, 390, 165, 'Carbon hybrid', 'Light enough for a sprint, long enough to keep a shield wall honest.', null, 66, 80, 90, false),
  ('champion-heater', 'Champion''s Heater', 'SHIELD', 'SKIRMISHER', 205000, 3, 980, 78, 'Composite foam', 'A mid-size shield for fighters who move with the line instead of anchoring it.', null, 84, 64, 20, true)
on conflict (id) do nothing;

-- The weekly Sunday muster is not a row here: it is a standing fact in
-- src/app/core/config/group.ts. These are special fixtures only.
insert into public.battle_events (id, title, location, event_date, ruleset, description, is_provisional) values
  ('santander-open', 'Santander Open', 'Parque La Flora, Bucaramanga', '2026-10-04T15:00:00.000Z', 'Open lists, single elimination', 'A full-day tournament on the regular field, open to visiting groups.', true),
  ('floridablanca-line-battle', 'Line Battle', 'Floridablanca', '2026-10-25T14:00:00.000Z', 'Line battle, shields legal', 'Team formations with capture points and a shared respawn line.', true),
  ('newcomer-clinic', 'Newcomer Clinic', 'Parque La Flora, Bucaramanga', '2026-09-27T15:00:00.000Z', 'Training, loaner weapons', 'A guided first session for visitors who have never held a boffer.', true)
on conflict (id) do nothing;

-- Placeholder threads that demonstrate the board format. Replace them with real posts.
insert into public.clan_posts (id, title, clan_name, body, author_name, created_at, is_sample) values
  ('sample-line-holders', 'Line holders wanted', 'Sample clan', 'Example thread showing how a recruitment post reads once the board goes live.', 'Placeholder author', '2026-09-08T12:00:00.000Z', true),
  ('sample-spear-partner', 'Looking for a spear partner', 'Sample clan', 'Example thread showing how a pairing request reads once the board goes live.', 'Placeholder author', '2026-09-10T16:40:00.000Z', true)
on conflict (id) do nothing;
