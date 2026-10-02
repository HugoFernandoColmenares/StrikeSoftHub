import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { GROUP } from '../../core/config/group';
import { COMMUNITY_COPY } from '../../core/copy/community.copy';
import { CommunityRepository } from '../../core/repositories/community.repository';
import { MusterService } from '../../core/services/muster.service';
import { AccentZoneDirective } from '../../shared/accent-zone.directive';
import { IconComponent } from '../../shared/icon/icon.component';
import { LootSpinnerComponent } from '../../shared/loot-spinner/loot-spinner.component';

@Component({
  selector: 'app-community',
  imports: [DatePipe, LootSpinnerComponent, IconComponent, AccentZoneDirective],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunityComponent {
  readonly community = inject(CommunityRepository);
  readonly muster = inject(MusterService);
  readonly group = GROUP;
  readonly copy = COMMUNITY_COPY;
  readonly loading = signal(true);

  constructor() {
    void this.community.load().finally(() => this.loading.set(false));
  }
}
