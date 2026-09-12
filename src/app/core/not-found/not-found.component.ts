import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EpicButtonComponent } from '../../shared/epic-button/epic-button.component';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, EpicButtonComponent],
  template: `
    <section class="woods">
      <p class="kicker">Lost in the Woods</p>
      <h1>The trail fades before the next clearing.</h1>
      <p>This path does not exist in the forge maps. Return to the armory before nightfall.</p>
      <a routerLink="/armory"><app-epic-button label="Back to the Armory" /></a>
    </section>
  `,
  styles: `
    .woods {
      min-height: 80dvh;
      display: grid;
      align-content: center;
      gap: 1rem;
      max-width: 40rem;
      padding: 2rem 1.25rem;
    }

    .kicker,
    p {
      color: var(--color-chain);
    }

    h1 {
      margin: 0;
      font-family: var(--font-display);
      font-size: clamp(2rem, 6vw, 3.4rem);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {}
