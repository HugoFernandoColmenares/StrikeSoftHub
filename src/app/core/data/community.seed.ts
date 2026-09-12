import { BattleEventModel } from '../models/battle-event.model';
import { ClanPostModel } from '../models/clan-post.model';

export const EVENT_SEED: BattleEventModel[] = [
  {
    id: 'forge-open-2026',
    title: 'Forge Open 2026',
    location: 'Valencia Field Arena',
    date: '2026-10-04T10:00:00.000Z',
    ruleset: 'Full Contact Soft, 1.3 kg cap',
    description: 'Open lists for sword and shield, polearm, and mixed melee.',
  },
  {
    id: 'night-watch-skirmish',
    title: 'Night Watch Skirmish',
    location: 'Madrid Riverside Park',
    date: '2026-09-26T18:30:00.000Z',
    ruleset: 'Low-light assassin lanes',
    description: 'Twilight bouts with limited visor lamps and dagger-legal sidearms.',
  },
  {
    id: 'bastion-siege',
    title: 'Bastion Siege Weekend',
    location: 'Bilbao Hill Fort',
    date: '2026-11-14T09:00:00.000Z',
    ruleset: 'Line battle, tower-shield legal',
    description: 'Two-day campaign with capture points and clan banners.',
  },
];

export const CLAN_POST_SEED: ClanPostModel[] = [
  {
    id: 'iron-circle-recruit',
    title: 'Iron Circle seeks line holders',
    clanName: 'Iron Circle',
    body: 'We need two tanks who can hold a gate for ninety seconds. Weekend travel preferred.',
    authorName: 'Marshal Rios',
    createdAt: '2026-09-08T12:00:00.000Z',
  },
  {
    id: 'ash-wraiths',
    title: 'Ash Wraiths looking for a spear',
    clanName: 'Ash Wraiths',
    body: 'Assassin lane partner wanted. Must know the Night Watch ruleset and keep tempo.',
    authorName: 'Lina Voss',
    createdAt: '2026-09-10T16:40:00.000Z',
  },
];
