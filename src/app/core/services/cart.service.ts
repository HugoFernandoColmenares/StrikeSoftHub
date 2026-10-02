import { Injectable, computed, inject, signal } from '@angular/core';
import { STORAGE_KEYS } from '../config/storage-keys';
import { CartItemModel, CartLineModel } from '../models/cart-item.model';
import { CatalogRepository } from '../repositories/catalog.repository';
import { AuthService } from './auth.service';
import { BackendStatusService } from './backend-status.service';
import { LocalStoreService } from './local-store.service';
import { NotificationService } from './notification.service';
import { SupabaseClientService } from './supabase-client.service';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly store = inject(LocalStoreService);
  private readonly catalog = inject(CatalogRepository);
  private readonly notify = inject(NotificationService);
  private readonly auth = inject(AuthService);
  private readonly backend = inject(BackendStatusService);
  private readonly supabase = inject(SupabaseClientService);
  private readonly items = signal<CartItemModel[]>(this.store.read(STORAGE_KEYS.cart, []));

  readonly lines = computed<CartLineModel[]>(() =>
    this.items()
      .map((item) => {
        const weapon = this.catalog.byId(item.weaponId);
        if (!weapon) {
          return null;
        }

        return {
          ...item,
          weapon,
          lineTotal: weapon.price * item.quantity,
        };
      })
      .filter((line): line is CartLineModel => line !== null),
  );

  readonly count = computed(() => this.items().reduce((total, item) => total + item.quantity, 0));
  readonly total = computed(() => this.lines().reduce((sum, line) => sum + line.lineTotal, 0));
  readonly drawerOpen = signal(false);

  openDrawer(): void {
    this.drawerOpen.set(true);
  }

  closeDrawer(): void {
    this.drawerOpen.set(false);
  }

  toggleDrawer(): void {
    this.drawerOpen.update((open) => !open);
  }

  add(weaponId: string): void {
    const weapon = this.catalog.byId(weaponId);
    if (!weapon || weapon.stock < 1) {
      void this.notify.warning('Not available', 'This piece is still in the workshop queue.');
      return;
    }

    const current = this.items();
    const existing = current.find((item) => item.weaponId === weaponId);
    const nextQuantity = (existing?.quantity ?? 0) + 1;

    if (nextQuantity > weapon.stock) {
      void this.notify.warning('Rack limit', `Only ${weapon.stock} available right now.`);
      return;
    }

    const next = existing
      ? current.map((item) => (item.weaponId === weaponId ? { ...item, quantity: nextQuantity } : item))
      : [...current, { weaponId, quantity: 1 }];

    this.persist(next);
    void this.notify.toast(`${weapon.name} added`);
    void this.syncRemote(next);
  }

  update(weaponId: string, quantity: number): void {
    if (quantity < 1) {
      this.remove(weaponId);
      return;
    }

    this.persist(this.items().map((item) => (item.weaponId === weaponId ? { ...item, quantity } : item)));
  }

  remove(weaponId: string): void {
    this.persist(this.items().filter((item) => item.weaponId !== weaponId));
  }

  clear(): void {
    this.persist([]);
  }

  private persist(items: CartItemModel[]): void {
    this.items.set(items);
    this.store.write(STORAGE_KEYS.cart, items);
  }

  private async syncRemote(items: CartItemModel[]): Promise<void> {
    const user = this.auth.currentUser();
    if (!this.backend.isOnline() || !this.supabase.client || user?.source !== 'supabase') {
      return;
    }

    await this.supabase.client.from('cart_items').delete().eq('user_id', user.id);

    if (!items.length) {
      return;
    }

    await this.supabase.client.from('cart_items').insert(
      items.map((item) => ({
        user_id: user.id,
        weapon_id: item.weaponId,
        quantity: item.quantity,
      })),
    );
  }
}
