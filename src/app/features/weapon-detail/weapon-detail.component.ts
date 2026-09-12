import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CatalogRepository } from '../../core/repositories/catalog.repository';
import { CartService } from '../../core/services/cart.service';
import { EpicButtonComponent } from '../../shared/epic-button/epic-button.component';
import { StatsRadarComponent } from '../../shared/stats-radar/stats-radar.component';

@Component({
  selector: 'app-weapon-detail',
  imports: [CurrencyPipe, RouterLink, EpicButtonComponent, StatsRadarComponent],
  templateUrl: './weapon-detail.component.html',
  styleUrl: './weapon-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeaponDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly catalog = inject(CatalogRepository);
  private readonly cart = inject(CartService);

  readonly weapon = computed(() => this.catalog.byId(this.route.snapshot.paramMap.get('id') ?? ''));

  addToArsenal(): void {
    const weapon = this.weapon();
    if (weapon) {
      this.cart.add(weapon.id);
    }
  }
}
