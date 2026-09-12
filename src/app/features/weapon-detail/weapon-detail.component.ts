import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CatalogRepository } from '../../core/repositories/catalog.repository';
import { CartService } from '../../core/services/cart.service';
import { AccentZoneDirective } from '../../shared/accent-zone.directive';
import { IconComponent } from '../../shared/icon/icon.component';
import { StatsProfileComponent } from '../../shared/stats-profile/stats-profile.component';

@Component({
  selector: 'app-weapon-detail',
  imports: [CurrencyPipe, RouterLink, StatsProfileComponent, IconComponent, AccentZoneDirective],
  templateUrl: './weapon-detail.component.html',
  styleUrl: './weapon-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeaponDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly catalog = inject(CatalogRepository);
  private readonly cart = inject(CartService);

  readonly weapon = computed(() => this.catalog.byId(this.route.snapshot.paramMap.get('id') ?? ''));
  readonly gallery = computed(() => this.weapon()?.gallery ?? []);

  addToArsenal(): void {
    const weapon = this.weapon();
    if (weapon) {
      this.cart.add(weapon.id);
    }
  }
}
