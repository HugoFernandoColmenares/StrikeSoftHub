import { Injectable, inject, signal } from '@angular/core';
import { STORAGE_KEYS } from '../config/storage-keys';
import { OrderModel } from '../models/order.model';
import { AuthService } from '../services/auth.service';
import { BackendStatusService } from '../services/backend-status.service';
import { CartService } from '../services/cart.service';
import { createId } from '../services/crypto.util';
import { LocalStoreService } from '../services/local-store.service';
import { SupabaseClientService } from '../services/supabase-client.service';

@Injectable({ providedIn: 'root' })
export class OrderRepository {
  private readonly store = inject(LocalStoreService);
  private readonly cart = inject(CartService);
  private readonly auth = inject(AuthService);
  private readonly backend = inject(BackendStatusService);
  private readonly supabase = inject(SupabaseClientService);
  private readonly orders = signal<OrderModel[]>(this.store.read(STORAGE_KEYS.orders, []));

  readonly history = this.orders.asReadonly();

  async place(): Promise<OrderModel | null> {
    const user = this.auth.currentUser();
    const lines = this.cart.lines();
    if (!user || !lines.length) {
      return null;
    }

    const order: OrderModel = {
      id: createId('order'),
      userId: user.id,
      total: this.cart.total(),
      status: 'placed',
      createdAt: new Date().toISOString(),
      items: lines.map((line) => ({
        weaponId: line.weaponId,
        name: line.weapon.name,
        price: line.weapon.price,
        quantity: line.quantity,
      })),
    };

    if (this.backend.isOnline() && this.supabase.client && user.source === 'supabase') {
      const { data, error } = await this.supabase.client
        .from('orders')
        .insert({
          user_id: user.id,
          total: order.total,
          status: order.status,
        })
        .select('id')
        .single();

      if (!error && data) {
        order.id = data['id'] as string;
        await this.supabase.client.from('order_items').insert(
          order.items.map((item) => ({
            order_id: order.id,
            weapon_id: item.weaponId,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
        );
      }
    }

    const next = [order, ...this.orders()];
    this.orders.set(next);
    this.store.write(STORAGE_KEYS.orders, next);
    this.cart.clear();
    return order;
  }
}
