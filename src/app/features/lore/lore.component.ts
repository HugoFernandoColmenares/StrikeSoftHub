import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GROUP } from '../../core/config/group';
import { AccentZoneDirective } from '../../shared/accent-zone.directive';
import { IconComponent } from '../../shared/icon/icon.component';
import { answers } from '../../core/data/loreComponent.seed';

@Component({
  selector: 'app-lore',
  imports: [IconComponent, AccentZoneDirective],
  templateUrl: './lore.component.html',
  styleUrl: './lore.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoreComponent {
  readonly group = GROUP;

  readonly answers = answers;
}
