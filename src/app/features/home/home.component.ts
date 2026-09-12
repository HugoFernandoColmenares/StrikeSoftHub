import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatalogRepository } from '../../core/repositories/catalog.repository';
import { EpicButtonComponent } from '../../shared/epic-button/epic-button.component';
import { WeaponCardComponent } from '../../shared/weapon-card/weapon-card.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, EpicButtonComponent, WeaponCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly catalog = inject(CatalogRepository);
  readonly featured = computed(() => this.catalog.catalog().slice(0, 3));
}
