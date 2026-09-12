import { BattleEventModel } from '../models/battle-event.model';
import { ClanPostModel } from '../models/clan-post.model';

/**
 * Special fixtures beyond the weekly muster. Dates are working proposals until the
 * group confirms them, which the interface states on screen.
 */
export const EVENT_SEED: BattleEventModel[] = [
  {
    id: 'santander-open',
    title: 'Santander Open',
    location: 'Parque La Flora, Bucaramanga',
    date: '2026-10-04T15:00:00.000Z',
    ruleset: 'Open lists, single elimination',
    description: 'A full-day tournament on the regular field, open to visiting groups.',
    isProvisional: true,
  },
  {
    id: 'floridablanca-line-battle',
    title: 'Line Battle',
    location: 'Floridablanca',
    date: '2026-10-25T14:00:00.000Z',
    ruleset: 'Line battle, shields legal',
    description: 'Team formations with capture points and a shared respawn line.',
    isProvisional: true,
  },
  {
    id: 'newcomer-clinic',
    title: 'Newcomer Clinic',
    location: 'Parque La Flora, Bucaramanga',
    date: '2026-09-27T15:00:00.000Z',
    ruleset: 'Training, loaner weapons',
    description: 'A guided first session for visitors who have never held a boffer.',
    isProvisional: true,
  },
];

/** Placeholder threads. The real board is not migrated yet. */
export const CLAN_POST_SEED: ClanPostModel[] = [
  {
    id: 'sample-line-holders',
    title: 'Line holders wanted',
    clanName: 'Sample clan',
    body: 'Example thread showing how a recruitment post reads once the board goes live.',
    authorName: 'Placeholder author',
    createdAt: '2026-09-08T12:00:00.000Z',
    isSample: true,
  },
  {
    id: 'sample-spear-partner',
    title: 'Looking for a spear partner',
    clanName: 'Sample clan',
    body: 'Example thread showing how a pairing request reads once the board goes live.',
    authorName: 'Placeholder author',
    createdAt: '2026-09-10T16:40:00.000Z',
    isSample: true,
  },
];
