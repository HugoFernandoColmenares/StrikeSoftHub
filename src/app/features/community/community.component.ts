import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommunityRepository } from '../../core/repositories/community.repository';
import { LootSpinnerComponent } from '../../shared/loot-spinner/loot-spinner.component';

@Component({
  selector: 'app-community',
  imports: [DatePipe, LootSpinnerComponent],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunityComponent {
  readonly community = inject(CommunityRepository);
  readonly loading = signal(true);

  constructor() {
    void this.community.load().finally(() => this.loading.set(false));
  }
}
