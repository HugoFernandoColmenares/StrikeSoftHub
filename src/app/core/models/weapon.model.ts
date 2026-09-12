export type WeaponClass = 'SWORD' | 'AXE' | 'MACE' | 'SHIELD' | 'POLEARM';

export type CombatRole = 'TANK' | 'ASSASSIN' | 'SKIRMISHER';

export interface WeaponSpecs {
  weightGrams: number;
  totalLengthCm: number;
  coreMaterial: string;
}

export interface WeaponStats {
  durability: number;
  weight: number;
  handling: number;
  range: number;
}

export interface WeaponModel {
  id: string;
  name: string;
  weaponClass: WeaponClass;
  combatRole: CombatRole;
  /** Indicative price in Colombian pesos while the workshop finalizes its list. */
  price: number;
  stock: number;
  specs: WeaponSpecs;
  stats: WeaponStats;
  loreDescription: string;
  /** Present only for pieces with real workshop photography. */
  imageUrl?: string;
  gallery?: string[];
  isPremium: boolean;
}
