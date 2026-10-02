import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GROUP } from '../../core/config/group';
import { LORE_COPY } from '../../core/copy/lore.copy';
import { AccentZoneDirective } from '../../shared/accent-zone.directive';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-lore',
  imports: [IconComponent, AccentZoneDirective],
  templateUrl: './lore.component.html',
  styleUrl: './lore.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoreComponent {
  readonly group = GROUP;
  readonly copy = LORE_COPY;
}
