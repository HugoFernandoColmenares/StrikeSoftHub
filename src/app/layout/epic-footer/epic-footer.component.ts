import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-epic-footer',
  template: `
    <footer class="foot">
      <p>StrikeSoft Hub. Built for the field, not the throne room.</p>
      <p>
        Created by
        <a href="https://github.com/HugoFernandoColmenares" target="_blank" rel="noopener noreferrer"
          >Hugo Colmenares</a
        >
      </p>
    </footer>
  `,
  styles: `
    .foot {
      display: grid;
      gap: 0.35rem;
      padding: 2rem 1rem;
      border-top: 1px solid var(--color-iron);
      color: var(--color-chain);
      font-size: 0.9rem;
    }

    a {
      color: var(--color-blade);
    }

    @media (min-width: 56rem) {
      .foot {
        padding: 2rem;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpicFooterComponent {}
