import { WeaponStats } from '../models/weapon.model';

export const weaponStat = (stats: WeaponStats) => [
  { label: 'Durabilidad', value: stats.durability, note: 'Golpes antes de que el filo pida arreglo' },
  { label: 'Peso sentido', value: stats.weight, note: 'Peso que se siente en un asalto largo' },
  { label: 'Manejo', value: stats.handling, note: 'Velocidad de recuperación entre golpes' },
  { label: 'Alcance', value: stats.range, note: 'Distancia a la que mantiene al rival' },
];
