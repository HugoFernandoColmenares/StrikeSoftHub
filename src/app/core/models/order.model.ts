export interface OrderItemModel {
  weaponId: string;
  name: string;
  price: number;
  quantity: number;
}

export interface OrderModel {
  id: string;
  userId: string;
  total: number;
  status: 'placed' | 'forging' | 'ready';
  createdAt: string;
  items: OrderItemModel[];
}
