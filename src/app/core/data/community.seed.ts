import { GROUP } from '../config/group';
import { BattleEventModel } from '../models/battle-event.model';
import { ClanPostModel } from '../models/clan-post.model';

/**
 * Special fixtures beyond the weekly muster. Dates taken from public Instagram
 * announcements are labeled as such; future dates stay provisional until confirmed.
 */
export const EVENT_SEED: BattleEventModel[] = [
  {
    id: 'sakura-espada-larga-2026',
    title: 'Primer torneo de espada larga — Sakura Fest',
    location: 'Neomundo, Bucaramanga',
    date: '2026-09-12T15:00:00.000Z',
    ruleset: 'Espada larga, premio Ōdachi',
    description:
      'Anunciado en Instagram: 12 y 13 de septiembre de 2026, primer torneo de espada larga de Armagedón, con patrocinio de Sakura Fest.',
    isProvisional: false,
  },
  {
    id: 'bucara-geek-fest-2026',
    title: 'Bucara Geek Fest',
    location: 'Neomundo, Bucaramanga',
    date: '2026-08-21T15:00:00.000Z',
    ruleset: 'Presencia del grupo',
    description:
      'Convocatoria publicada en Instagram: 21, 22 y 23 de agosto de 2026 en Neomundo.',
    isProvisional: false,
  },
  {
    id: 'encuentro-domingo',
    title: 'Encuentro semanal',
    location: `${GROUP.venue}, ${GROUP.city}`,
    date: '2026-10-05T15:00:00.000Z',
    ruleset: 'Entrenamiento abierto, armas de préstamo',
    description:
      'Convocatoria habitual del grupo: domingo 10:00 en el Parque La Flora. Haz amigos, y golpéalos con espadas.',
    isProvisional: false,
  },
];

/** Field notes transcribed from the public Instagram, not a live clan board. */
export const CLAN_POST_SEED: ClanPostModel[] = [
  {
    id: 'ig-haz-amigos',
    title: 'Haz amigos, y golpéalos con espadas',
    clanName: GROUP.instagramHandle,
    body: 'Lema público del grupo. Las sesiones del domingo son abiertas: llega al Parque La Flora a las 10:00 y pregunta en el campo.',
    authorName: 'Armagedón Soft Combat',
    createdAt: '2026-08-11T15:00:00.000Z',
    isSample: false,
  },
  {
    id: 'ig-primer-torneo',
    title: 'Se cerró el primer torneo de espada larga',
    clanName: GROUP.instagramHandle,
    body: 'Sakura Fest patrocinó el primer torneo de Armagedón en Neomundo. El grupo agradece el espacio y busca seguir abriendo fechas para la comunidad.',
    authorName: 'Armagedón Soft Combat',
    createdAt: '2026-09-14T15:00:00.000Z',
    isSample: false,
  },
];
