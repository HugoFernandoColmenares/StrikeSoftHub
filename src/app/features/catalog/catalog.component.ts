import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CATALOG_COPY } from '../../core/copy/catalog.copy';
import { CombatRole, WeaponClass, WeaponModel } from '../../core/models/weapon.model';
import { CatalogRepository } from '../../core/repositories/catalog.repository';
import { CartService } from '../../core/services/cart.service';
import { AccentZoneDirective } from '../../shared/accent-zone.directive';
import { LootSpinnerComponent } from '../../shared/loot-spinner/loot-spinner.component';
import { WeaponCardComponent } from '../../shared/weapon-card/weapon-card.component';

@Component({
  selector: 'app-catalog',
  imports: [ CurrencyPipe, RouterLink, WeaponCardComponent, LootSpinnerComponent, AccentZoneDirective, ],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogComponent {
  private readonly catalog = inject(CatalogRepository);
  private readonly cart = inject(CartService);

  readonly loading = signal(true);
  readonly role = signal<CombatRole | 'ALL'>('ALL');
  readonly copy = CATALOG_COPY;
  readonly weaponClass = signal<WeaponClass | 'ALL'>('ALL');
  readonly roles: Array<CombatRole | 'ALL'> = ['ALL', 'TANK', 'ASSASSIN', 'SKIRMISHER'];
  readonly classes: Array<WeaponClass | 'ALL'> = ['ALL', 'SWORD', 'AXE', 'MACE', 'SHIELD', 'POLEARM'];

  readonly filtered = computed(() => this.catalog.catalog().filter((weapon) => this.matches(weapon)));
  readonly featured = computed(() => this.filtered().find((weapon) => weapon.imageUrl));
  readonly rows = computed(() => this.filtered().filter((weapon) => weapon !== this.featured()));

  constructor() {
    void this.catalog.load().finally(() => this.loading.set(false));
  }

  addToArsenal(weapon: WeaponModel): void {
    this.cart.add(weapon.id);
  }

  reset(): void {
    this.role.set('ALL');
    this.weaponClass.set('ALL');
  }

  private matches(weapon: WeaponModel): boolean {
    const roleOk = this.role() === 'ALL' || weapon.combatRole === this.role();
    const classOk = this.weaponClass() === 'ALL' || weapon.weaponClass === this.weaponClass();
    return roleOk && classOk;
  }
}
