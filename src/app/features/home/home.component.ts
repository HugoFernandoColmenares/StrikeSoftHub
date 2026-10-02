import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GROUP } from '../../core/config/group';
import { HOME_COPY } from '../../core/copy/home.copy';
import { INSTAGRAM_POST_SEED } from '../../core/data/instagram.seed';
import { steps } from '../../core/data/steps.seed';
import { CatalogRepository } from '../../core/repositories/catalog.repository';
import { CommunityRepository } from '../../core/repositories/community.repository';
import { MusterService } from '../../core/services/muster.service';
import { AccentZoneDirective } from '../../shared/accent-zone.directive';
import { EmberFieldComponent } from '../../shared/ember-field/ember-field.component';
import { IconComponent } from '../../shared/icon/icon.component';
import { WeaponCardComponent } from '../../shared/weapon-card/weapon-card.component';

@Component({
  selector: 'app-home',
  imports: [
    DatePipe,
    RouterLink,
    AccentZoneDirective,
    EmberFieldComponent,
    IconComponent,
    WeaponCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly catalog = inject(CatalogRepository);
  private readonly community = inject(CommunityRepository);

  readonly muster = inject(MusterService);
  readonly group = GROUP;
  readonly copy = HOME_COPY;
  readonly posts = INSTAGRAM_POST_SEED;
  readonly steps = steps;

  readonly featured = computed(() => this.catalog.catalog().find((weapon) => weapon.imageUrl));
  readonly fixtures = computed(() => this.community.eventFeed().slice(0, 3));
}
