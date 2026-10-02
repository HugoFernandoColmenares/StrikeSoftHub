import { GROUP } from '../config/group';

export const CHECKOUT_COPY = {
  title: 'Tu arsenal',
  empty: 'Todavía no hay nada reservado.',
  openArmory: 'Abrir la forja',
  each: 'c/u',
  qtyAria: 'Cantidad de',
  decrease: 'Disminuir',
  increase: 'Aumentar',
  remove: 'Quitar',
  total: 'Total',
  terms: `Los precios son indicativos. Las reservas se liquidan en persona en ${GROUP.venue} durante el encuentro del domingo.`,
  reserving: 'Reservando',
  reserve: 'Reservar con el taller',
} as const;
