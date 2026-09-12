import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-loot-spinner',
  template: `
    <div class="loot" role="status" aria-live="polite">
      <span class="ring"></span>
      <span class="label">Forging the racks...</span>
    </div>
  `,
  styles: `
    .loot {
      display: grid;
      justify-items: center;
      gap: 1rem;
      padding: 2rem 0;
      color: var(--color-chain);
      font-family: var(--font-stats);
    }

    .ring {
      width: 2.5rem;
      height: 2.5rem;
      border: 0.2rem solid var(--color-iron);
      border-top-color: var(--color-crimson);
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LootSpinnerComponent {}
