import { WeaponModel } from './weapon.model';

export interface CartItemModel {
  weaponId: string;
  quantity: number;
}

export interface CartLineModel extends CartItemModel {
  weapon: WeaponModel;
  lineTotal: number;
}
