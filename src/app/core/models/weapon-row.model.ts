import { WeaponModel } from "./weapon.model";

export interface WeaponRow {
  id: string;
  name: string;
  weapon_class: WeaponModel['weaponClass'];
  combat_role: WeaponModel['combatRole'];
  price: number;
  stock: number;
  weight_grams: number;
  total_length_cm: number;
  core_material: string;
  lore_description: string;
  image_url: string | null;
  durability: number;
  handling: number;
  range_score: number;
  is_premium: boolean;
}