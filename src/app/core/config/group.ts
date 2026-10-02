/** Confirmed facts about the physical group. Everything here is verified and binding. */
export const GROUP = {
  name: 'Armagedón Softcombat',
  platformName: 'StrikeSoft Hub',
  city: 'Bucaramanga',
  region: 'Santander, Colombia',
  venue: 'Parque La Flora',
  dayLabel: 'Todos los domingos',
  bio: 'Somos un grupo de Soft Combat que se reúne los domingos en el Parque La Flora. Ven a hacer amigos, y golpéalos con espadas.',
  timeLabel: '10:00',
  timeZoneLabel: 'COT (UTC-5)',
  instagramUrl: 'https://www.instagram.com/armagedonsoftcombat/',
  instagramHandle: '@armagedonsoftcombat',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Parque+La+Flora+Bucaramanga',
} as const;

/** Sunday 10:00 in Bogota is 15:00 UTC. Colombia does not observe daylight saving. */
export const MUSTER_UTC_HOUR = 15;
export const MUSTER_DURATION_HOURS = 3;
