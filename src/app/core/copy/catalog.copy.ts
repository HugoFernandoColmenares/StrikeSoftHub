import { CombatRole, WeaponClass } from '../models/weapon.model';

export const CATALOG_COPY = {
  title: 'La forja',
  intro: 'Armas construidas en el taller del grupo, ordenadas por cómo pelean. Filtra por el rol que ocupas en la línea.',
  disclaimer:
    'Precios y existencias son indicativos mientras el taller cierra su lista. La fotografía está en curso: las piezas sin foto muestran su clase.',
  roleLegend: 'Rol de combate',
  classLegend: 'Clase',
  filtersAria: 'Filtros del catálogo',
  emptyTitle: 'Ningún arma coincide con ese cruce',
  emptyBody: 'El taller todavía no ha forjado esa combinación.',
  clearFilters: 'Limpiar filtros',
  reference: 'Pieza de referencia',
  tableAria: 'Catálogo de armas',
  columns: {
    weapon: 'Arma',
    role: 'Rol',
    weight: 'Peso',
    length: 'Largo',
    price: 'Precio',
    action: 'Acción',
  },
  add: 'Añadir',
  queued: 'En cola',
  role: {
    ALL: 'Todos',
    TANK: 'Tanque',
    ASSASSIN: 'Asesino',
    SKIRMISHER: 'Hostigador',
  } satisfies Record<CombatRole | 'ALL', string>,
  klass: {
    ALL: 'Todas',
    SWORD: 'Espada',
    AXE: 'Hacha',
    MACE: 'Maza',
    SHIELD: 'Escudo',
    POLEARM: 'Asta',
  } satisfies Record<WeaponClass | 'ALL', string>,
} as const;
