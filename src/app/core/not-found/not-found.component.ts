import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GROUP } from '../config/group';
import { NOT_FOUND_COPY } from '../copy/not-found.copy';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <section class="shell lost">
      <p class="code mono">404</p>
      <h1>{{ copy.title }}</h1>
      <p class="body">{{ copy.body(group.venue, group.dayLabel, group.timeLabel) }}</p>
      <div class="actions">
        <a routerLink="/" class="btn-primary">{{ copy.backMuster }}</a>
        <a routerLink="/armory" class="btn-ghost">{{ copy.openArmory }}</a>
      </div>
    </section>
  `,
  styles: `
    .lost {
      display: grid;
      align-content: center;
      gap: var(--step-2);
      justify-items: start;
      min-height: 70dvh;
    }

    .code {
      font-size: 0.75rem;
      color: var(--section-accent);
      letter-spacing: 0.3em;
    }

    h1 {
      font-size: clamp(2.5rem, 10vw, 5rem);
      text-transform: uppercase;
    }

    .body {
      color: var(--fg-dim);
      max-width: 44ch;
    }

    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: var(--step-2);
      margin-top: var(--step-2);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {
  readonly group = GROUP;
  readonly copy = NOT_FOUND_COPY;
}
