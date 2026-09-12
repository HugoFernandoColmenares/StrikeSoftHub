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
  image_url text not null,
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
  description text not null
);

create table if not exists public.clan_posts (
  id text primary key,
  title text not null,
  clan_name text not null,
  body text not null,
  author_name text not null,
  created_at timestamptz not null default now()
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

insert into public.weapons (
  id, name, weapon_class, combat_role, price, stock, weight_grams, total_length_cm,
  core_material, lore_description, image_url, durability, handling, range_score, is_premium
) values
  ('emberbrand-longsword', 'Emberbrand Longsword', 'SWORD', 'SKIRMISHER', 189, 6, 420, 110, 'Fiberglass', 'Forged for dusk raids, Emberbrand keeps a crimson edge that never dulls on the training field.', 'assets/weapons/emberbrand.svg', 78, 82, 70, false),
  ('nightwhisper-dagger', 'Nightwhisper Dagger', 'SWORD', 'ASSASSIN', 74, 12, 180, 48, 'Carbon rod', 'A quiet companion for close work. The foam profile favors speed over ceremony.', 'assets/weapons/nightwhisper.svg', 60, 94, 32, false),
  ('bastion-tower-shield', 'Bastion Tower Shield', 'SHIELD', 'TANK', 240, 3, 1600, 120, 'Layered EVA', 'A moving wall for line holders. The chamfered rim is built to glance polearms aside.', 'assets/weapons/bastion.svg', 96, 40, 22, true),
  ('stormhook-polearm', 'Stormhook Polearm', 'POLEARM', 'SKIRMISHER', 210, 5, 690, 180, 'Tapered fiberglass', 'Reach with a hooking head. Designed for outdoor fields where the wind writes its own rules.', 'assets/weapons/stormhook.svg', 74, 68, 96, false),
  ('anvilbreaker-mace', 'Anvilbreaker Mace', 'MACE', 'TANK', 132, 8, 510, 82, 'Steel-sleeved foam', 'Short, honest, and loud. The head is balanced to announce every strike without bruising.', 'assets/weapons/anvilbreaker.svg', 88, 58, 44, false),
  ('wyrmfang-axe', 'Wyrmfang Axe', 'AXE', 'SKIRMISHER', 156, 2, 480, 92, 'Fiberglass', 'A hooked beard for binding blades. Only two remain from the last tournament batch.', 'assets/weapons/wyrmfang.svg', 80, 72, 52, false),
  ('ashen-spear', 'Ashen Spear', 'POLEARM', 'ASSASSIN', 168, 7, 390, 165, 'Carbon hybrid', 'Light enough for a sprint, long enough to keep a shield wall honest.', 'assets/weapons/ashen-spear.svg', 66, 80, 90, false),
  ('champion-heater', 'Champion''s Heater', 'SHIELD', 'SKIRMISHER', 198, 4, 980, 78, 'Composite foam', 'Tournament gold trim for fighters who already have the scars to match.', 'assets/weapons/heater.svg', 84, 64, 20, true)
on conflict (id) do nothing;

insert into public.battle_events (id, title, location, event_date, ruleset, description) values
  ('forge-open-2026', 'Forge Open 2026', 'Valencia Field Arena', '2026-10-04T10:00:00.000Z', 'Full Contact Soft, 1.3 kg cap', 'Open lists for sword and shield, polearm, and mixed melee.'),
  ('night-watch-skirmish', 'Night Watch Skirmish', 'Madrid Riverside Park', '2026-09-26T18:30:00.000Z', 'Low-light assassin lanes', 'Twilight bouts with limited visor lamps and dagger-legal sidearms.'),
  ('bastion-siege', 'Bastion Siege Weekend', 'Bilbao Hill Fort', '2026-11-14T09:00:00.000Z', 'Line battle, tower-shield legal', 'Two-day campaign with capture points and clan banners.')
on conflict (id) do nothing;

insert into public.clan_posts (id, title, clan_name, body, author_name, created_at) values
  ('iron-circle-recruit', 'Iron Circle seeks line holders', 'Iron Circle', 'We need two tanks who can hold a gate for ninety seconds. Weekend travel preferred.', 'Marshal Rios', '2026-09-08T12:00:00.000Z'),
  ('ash-wraiths', 'Ash Wraiths looking for a spear', 'Ash Wraiths', 'Assassin lane partner wanted. Must know the Night Watch ruleset and keep tempo.', 'Lina Voss', '2026-09-10T16:40:00.000Z')
on conflict (id) do nothing;
