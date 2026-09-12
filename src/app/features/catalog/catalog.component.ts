import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CombatRole, WeaponClass, WeaponModel } from '../../core/models/weapon.model';
import { CatalogRepository } from '../../core/repositories/catalog.repository';
import { LootSpinnerComponent } from '../../shared/loot-spinner/loot-spinner.component';
import { WeaponCardComponent } from '../../shared/weapon-card/weapon-card.component';

@Component({
  selector: 'app-catalog',
  imports: [WeaponCardComponent, LootSpinnerComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogComponent {
  private readonly catalog = inject(CatalogRepository);
  readonly loading = signal(true);
  readonly role = signal<CombatRole | 'ALL'>('ALL');
  readonly weaponClass = signal<WeaponClass | 'ALL'>('ALL');
  readonly roles: Array<CombatRole | 'ALL'> = ['ALL', 'TANK', 'ASSASSIN', 'SKIRMISHER'];
  readonly classes: Array<WeaponClass | 'ALL'> = ['ALL', 'SWORD', 'AXE', 'MACE', 'SHIELD', 'POLEARM'];

  readonly filtered = computed(() =>
    this.catalog.catalog().filter((weapon) => this.matches(weapon)),
  );

  constructor() {
    void this.catalog.load().finally(() => this.loading.set(false));
  }

  private matches(weapon: WeaponModel): boolean {
    const roleOk = this.role() === 'ALL' || weapon.combatRole === this.role();
    const classOk = this.weaponClass() === 'ALL' || weapon.weaponClass === this.weaponClass();
    return roleOk && classOk;
  }
}
