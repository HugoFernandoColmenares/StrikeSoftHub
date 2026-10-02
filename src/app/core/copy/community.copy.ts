import { GROUP } from '../config/group';

export const COMMUNITY_COPY = {
  title: 'La arena',
  intro: 'El encuentro semanal es fijo. El resto de esta página se anuncia cuando el grupo lo confirma o lo publica en Instagram.',
  standing: 'Encuentro fijo',
  nextPrefix: 'Próximo:',
  findField: 'Cómo llegar',
  fixturesTitle: 'Fechas anunciadas',
  fixturesEmpty: `Aún no hay fechas especiales. Sigue ${GROUP.instagramHandle} para la próxima convocatoria.`,
  dateUnconfirmed: 'Fecha por confirmar',
  boardTitle: 'Del campo y de Instagram',
  boardNote: `Hilos y crónicas tomados de ${GROUP.instagramHandle}. El tablero de clanes aún no está migrado.`,
  boardEmpty: 'No hay convocatorias abiertas ahora.',
  fromInstagram: 'Desde Instagram',
} as const;
