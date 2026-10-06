import { Injectable, inject, signal } from '@angular/core';
import { STORAGE_KEYS } from '../config/storage-keys';
import { CATALOG_SEED } from '../data/catalog.seed';
import { WeaponModel } from '../models/weapon.model';
import { WeaponRow } from '../models/weapon-row.model';
import { BackendStatusService } from '../services/backend-status.service';
import { LocalStoreService } from '../services/local-store.service';
import { SupabaseClientService } from '../services/supabase-client.service';

@Injectable({ providedIn: 'root' })
export class CatalogRepository {
  private readonly store = inject(LocalStoreService);
  private readonly backend = inject(BackendStatusService);
  private readonly supabase = inject(SupabaseClientService);
  private readonly weapons = signal<WeaponModel[]>(this.store.read(STORAGE_KEYS.weapons, CATALOG_SEED));
  private readonly hydrated = signal(false);
  private inflight: Promise<WeaponModel[]> | null = null;

  readonly catalog = this.weapons.asReadonly();
  readonly ready = this.hydrated.asReadonly();

  constructor() {
    if (this.weapons().length === 0) {
      this.cache(CATALOG_SEED);
    }
  }

  async load(): Promise<WeaponModel[]> {
    if (this.hydrated()) {
      return this.weapons();
    }

    if (this.inflight) {
      return this.inflight;
    }

    this.inflight = this.refresh().finally(() => {
      this.inflight = null;
    });

    return this.inflight;
  }

  private async refresh(): Promise<WeaponModel[]> {
    if (this.backend.isOnline() && this.supabase.client) {
      const { data, error } = await this.supabase.client.from('weapons').select('*').order('name');

      if (!error && data?.length) {
        const mapped = (data as WeaponRow[]).map((row) => this.mapRow(row));
        this.cache(mapped);
        this.hydrated.set(true);
        return mapped;
      }
    }

    const local = this.store.read<WeaponModel[]>(STORAGE_KEYS.weapons, CATALOG_SEED);
    this.weapons.set(local.length ? local : CATALOG_SEED);
    if (!local.length) {
      this.cache(CATALOG_SEED);
    }

    this.hydrated.set(true);
    return this.weapons();
  }

  byId(id: string): WeaponModel | undefined {
    return this.weapons().find((weapon) => weapon.id === id);
  }

  private cache(weapons: WeaponModel[]): void {
    this.weapons.set(weapons);
    this.store.write(STORAGE_KEYS.weapons, weapons);
  }

  private mapRow(row: WeaponRow): WeaponModel {
    return {
      id: row.id,
      name: row.name,
      weaponClass: row.weapon_class,
      combatRole: row.combat_role,
      price: Number(row.price),
      stock: row.stock,
      specs: {
        weightGrams: row.weight_grams,
        totalLengthCm: row.total_length_cm,
        coreMaterial: row.core_material,
      },
      stats: {
        durability: row.durability,
        weight: Math.min(100, Math.round(row.weight_grams / 18)),
        handling: row.handling,
        range: row.range_score,
      },
      loreDescription: row.lore_description,
      imageUrl: row.image_url ?? undefined,
      isPremium: row.is_premium,
    };
  }
}
