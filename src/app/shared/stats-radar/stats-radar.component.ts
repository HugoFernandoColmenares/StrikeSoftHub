import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { WeaponStats } from '../../core/models/weapon.model';

@Component({
  selector: 'app-stats-radar',
  templateUrl: './stats-radar.component.html',
  styleUrl: './stats-radar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsRadarComponent {
  readonly stats = input.required<WeaponStats>();

  readonly polygon = computed(() => {
    const values = [this.stats().durability, this.stats().weight, this.stats().handling, this.stats().range];
    const points = values.map((value, index) => {
      const angle = (Math.PI / 2) * index - Math.PI / 2;
      const radius = (value / 100) * 70;
      const x = 80 + Math.cos(angle) * radius;
      const y = 80 + Math.sin(angle) * radius;
      return `${x},${y}`;
    });

    return points.join(' ');
  });
}
