import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { WeaponStats } from '../../core/models/weapon.model';
import { Meter } from '../../core/models/meter.model';
import { weaponStat } from '../../core/data/weapon-stats.seed';

@Component({
  selector: 'app-stats-profile',
  templateUrl: './stats-profile.component.html',
  styleUrl: './stats-profile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsProfileComponent {
  readonly stats = input.required<WeaponStats>();

  readonly meters = computed<Meter[]>(() => {
    const stats = this.stats();
    return weaponStat(stats);
  });
}
