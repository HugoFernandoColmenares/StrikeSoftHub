import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type IconName = 'marker' | 'clock' | 'instagram' | 'github' | 'arrow' | 'bag' | 'user' | 'check';

const PATHS: Record<IconName, string> = {
  marker: 'M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M12 7.5V12l3 2',
  instagram:
    'M7 3.75h10A3.25 3.25 0 0 1 20.25 7v10A3.25 3.25 0 0 1 17 20.25H7A3.25 3.25 0 0 1 3.75 17V7A3.25 3.25 0 0 1 7 3.75Z M12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z M17 7.4h.01',
  github:
    'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22',
  arrow: 'M4 12h16 M13 5l7 7-7 7',
  bag: 'M4.5 7.5h15l-1.2 12.2a1 1 0 0 1-1 .8H6.7a1 1 0 0 1-1-.8L4.5 7.5Z M8.5 10V6.5a3.5 3.5 0 1 1 7 0V10',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z M4.5 20.5a7.5 7.5 0 0 1 15 0',
  check: 'M4.5 12.5 10 18 19.5 6.5',
};

@Component({
  selector: 'app-icon',
  template: `
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="square"
      stroke-linejoin="miter"
      aria-hidden="true"
      focusable="false"
      [style.width.rem]="size()"
      [style.height.rem]="size()"
    >
      @for (segment of segments(); track segment) {
        <path [attr.d]="segment"></path>
      }
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  readonly name = input.required<IconName>();
  readonly size = input(1.125);

  readonly segments = computed(() => PATHS[this.name()].trim().split(' M').map((part, index) => (index === 0 ? part : `M${part}`)));
}
