import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EpicFooterComponent } from '../epic-footer/epic-footer.component';
import { EpicNavbarComponent } from '../epic-navbar/epic-navbar.component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, EpicNavbarComponent, EpicFooterComponent],
  template: `
    <app-epic-navbar />
    <main class="stage">
      <router-outlet />
    </main>
    <app-epic-footer />
  `,
  styles: `
    .stage {
      min-height: calc(100dvh - 10rem);
      padding: 1.25rem 1rem 3rem;
    }

    @media (min-width: 56rem) {
      .stage {
        padding: 2rem 2rem 4rem;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {}
