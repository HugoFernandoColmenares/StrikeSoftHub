import { GROUP } from '../config/group';

export const HOME_COPY = {
  kicker: 'Forja artesanal de softcombat',
  titleLead: 'Softcombat en',
  definition: `${GROUP.name} es un grupo de softcombat: combate de contacto con armas de espuma sobre un núcleo flexible, bajo un reglamento que no exige armadura. Entrenamos al aire libre y cualquiera puede entrar al campo.`,
  liveNow: 'Estamos en el campo ahora mismo',
  countdownLabel: 'El próximo encuentro empieza en',
  countdown: { days: 'd', hours: 'h', minutes: 'm', seconds: 's' },
  facts: {
    when: 'Cuándo',
    where: 'Dónde',
    next: 'Próxima fecha',
    cost: 'Costo',
    free: 'Entrada libre',
  },
  findField: 'Cómo llegar',
  fixturesTitle: 'Más allá del domingo',
  fixturesNote: 'Las fechas especiales se anuncian cuando el grupo las confirma. El domingo se mantiene.',
  fixturesEmpty: 'No hay fechas especiales anunciadas. El encuentro del domingo sigue en pie.',
  provisional: 'Por confirmar',
  openArena: 'Ver la arena',
  firstSundayTitle: 'Tu primer domingo',
  workshopTitle: 'Hecho en el taller',
  workshopBody:
    'Cada arma la construye el grupo, no se revende. Se mide y se asigna a un rol de combate, para que elijas por cómo pelea y no por la foto.',
  enterArmory: 'Entrar a la forja',
  instagramKicker: 'Desde Instagram',
  instagramTitle: 'Lo que se vive en el campo',
  instagramLead: `Crónicas tomadas de ${GROUP.instagramHandle}. El canal oficial sigue siendo Instagram.`,
  instagramCta: 'Ver en Instagram',
} as const;
