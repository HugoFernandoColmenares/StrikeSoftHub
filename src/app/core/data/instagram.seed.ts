import { GROUP } from '../config/group';
import { InstagramPostModel } from '../models/instagram-post.model';

/**
 * Public posts transcribed from https://www.instagram.com/armagedonsoftcombat/
 * on 2026-10-02. Bodies are shortened captions / on-image text. Dates follow
 * Instagram's published timestamps. Link to the profile when a permalink is not stored.
 */
export const INSTAGRAM_POST_SEED: InstagramPostModel[] = [
  {
    id: 'ig-sakura-thanks',
    postedAt: '2026-09-14',
    title: 'Gracias a Sakura Fest',
    body: 'Armagedón agradece a Sakura Fest por patrocinar el primer torneo de espada larga. Esperamos seguir construyendo juntos más espacios para la comunidad, el deporte y la cultura.',
    sourceUrl: GROUP.instagramUrl,
  },
  {
    id: 'ig-sakura-torneo',
    postedAt: '2026-09-08',
    title: 'Primer torneo de espada larga',
    body: 'Sakura Fest 2026 en Neomundo, 12 y 13 de septiembre. Premio Ōdachi. El primer torneo de espada larga de Armagedón Softcombat.',
    sourceUrl: GROUP.instagramUrl,
  },
  {
    id: 'ig-bucara-geek',
    postedAt: '2026-08-16',
    title: 'Bucara Geek Fest',
    body: 'Nos vemos en el Bucara Geek Fest. 21, 22 y 23 de agosto en Neomundo.',
    sourceUrl: GROUP.instagramUrl,
  },
  {
    id: 'ig-domingo-flora',
    postedAt: '2026-08-11',
    title: 'Domingo en La Flora',
    body: 'Nos vemos este domingo en el Parque La Flora, 10:00 a.m. Haz amigos, y golpéalos con espadas.',
    sourceUrl: GROUP.instagramUrl,
  },
];
