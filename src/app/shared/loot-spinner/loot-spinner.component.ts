import { ChangeDetectionStrategy, Component } from '@angular/core';
import { COMMON_COPY } from '../../core/copy/common.copy';

@Component({
  selector: 'app-loot-spinner',
  template: `
    <div class="loading" role="status" aria-live="polite">
      <span class="bar" aria-hidden="true"></span>
      <span class="label">{{ copy.loading }}</span>
    </div>
  `,
  styles: `
    .loading {
      display: grid;
      gap: 0.75rem;
      padding: var(--step-4) 0;
    }

    .bar {
      display: block;
      height: 2px;
      background: var(--border);
      overflow: hidden;
      position: relative;
    }

    .bar::after {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--section-accent);
      transform-origin: left;
      animation: sweep 1.1s var(--ease-out) infinite;
    }

    @keyframes sweep {
      0% {
        transform: scaleX(0);
      }
      60% {
        transform: scaleX(1);
      }
      100% {
        transform: scaleX(1) translateX(100%);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .bar::after {
        animation: none;
        transform: scaleX(0.35);
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LootSpinnerComponent {
  readonly copy = COMMON_COPY;
}
