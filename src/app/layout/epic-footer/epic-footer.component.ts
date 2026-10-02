import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GROUP } from '../../core/config/group';
import { LAYOUT_COPY } from '../../core/copy/layout.copy';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-epic-footer',
  imports: [IconComponent],
  templateUrl: './epic-footer.component.html',
  styleUrl: './epic-footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpicFooterComponent {
  readonly group = GROUP;
  readonly copy = LAYOUT_COPY;
  readonly year = new Date().getFullYear();
}
