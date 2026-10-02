import { GROUP } from '../config/group';

export const LORE_COPY = {
  title: 'El deporte',
  intro: 'Lo que pregunta quien llega por primera vez, respondido en claro.',
  ask: '¿Todavía dudas? Pregunta antes del domingo.',
  answers: [
    {
      question: '¿Qué es el softcombat?',
      body: 'Un deporte de combate con réplicas de armas hechas de espuma sobre un núcleo flexible. El reglamento y la construcción del arma son lo que lo hace seguro: por eso se pelea sin armadura.',
    },
    {
      question: '¿Necesito equipo?',
      body: 'No para la primera sesión. Ven con ropa en la que puedas moverte y caer, y pregunta en el campo si puedes pedir prestada un arma.',
    },
    {
      question: '¿Hay que estar en forma o tener experiencia?',
      body: 'No. Los asaltos son cortos y el grupo se adapta a quien esté en el campo. La mayoría llega sin haber tomado nunca un boffer.',
    },
    {
      question: '¿Cómo los encuentro?',
      body: `Estamos en el campo todos los domingos a las ${GROUP.timeLabel} en ${GROUP.venue}, ${GROUP.city}. Escribe a ${GROUP.instagramHandle} si quieres que alguien te espere en la entrada.`,
    },
  ],
} as const;
