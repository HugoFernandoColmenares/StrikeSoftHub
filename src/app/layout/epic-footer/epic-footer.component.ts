import { afterNextRender, ChangeDetectionStrategy, Component, DestroyRef, ElementRef, inject, signal, viewChild } from '@angular/core';
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
  private readonly destroyRef = inject(DestroyRef);
  private readonly full = viewChild<ElementRef<HTMLElement>>('full');

  readonly expanded = signal(false);
  readonly group = GROUP;
  readonly copy = LAYOUT_COPY;
  readonly year = new Date().getFullYear();

  constructor() {
    afterNextRender(() => {
      const root = document.getElementById('main');
      const target = this.full()?.nativeElement;
      if (!root || !target) {
        return;
      }

      const io = new IntersectionObserver(
        ([entry]) => this.expanded.set(entry.isIntersecting),
        { root, threshold: 0.18 },
      );
      io.observe(target);
      this.destroyRef.onDestroy(() => io.disconnect());
    });
  }
}
