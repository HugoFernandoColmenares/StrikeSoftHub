export const NOT_FOUND_COPY = {
  title: 'Fuera del campo',
  body: (venue: string, when: string, time: string) =>
    `Este camino no está en el mapa. El grupo sigue donde siempre: ${venue}, ${when} a las ${time}.`,
  backMuster: 'Volver al encuentro',
  openArmory: 'Abrir la forja',
} as const;
