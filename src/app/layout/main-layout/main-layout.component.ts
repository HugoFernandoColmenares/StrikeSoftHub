import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EpicFooterComponent } from '../epic-footer/epic-footer.component';
import { EpicNavbarComponent } from '../epic-navbar/epic-navbar.component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, EpicNavbarComponent, EpicFooterComponent],
  template: `
    <a class="skip" href="#main">Skip to content</a>
    <app-epic-navbar />
    <main id="main" tabindex="-1">
      <router-outlet />
    </main>
    <app-epic-footer />
  `,
  styles: `
    main {
      display: block;
      min-height: 60dvh;
    }

    main:focus {
      outline: none;
    }

    .skip {
      position: absolute;
      left: -999px;
      top: 0;
      z-index: 60;
      padding: 0.75rem 1rem;
      background: var(--fg);
      color: #000;
      font-weight: 700;
    }

    .skip:focus {
      left: 0;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {}
