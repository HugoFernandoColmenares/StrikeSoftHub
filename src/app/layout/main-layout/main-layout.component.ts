import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LAYOUT_COPY } from '../../core/copy/layout.copy';
import { CartDrawerComponent } from '../cart-drawer/cart-drawer.component';
import { EpicFooterComponent } from '../epic-footer/epic-footer.component';
import { EpicNavbarComponent } from '../epic-navbar/epic-navbar.component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, EpicNavbarComponent, EpicFooterComponent, CartDrawerComponent],
  template: `
    <div class="app-shell">
      <a class="skip" href="#main">{{ copy.skip }}</a>
      <app-epic-navbar />
      <main id="main" tabindex="-1">
        <router-outlet />
      </main>
      <app-epic-footer />
      <app-cart-drawer />
    </div>
  `,
  styles: `
    .app-shell {
      min-height: 100%;
      display: flex;
      flex-direction: column;
    }

    main {
      display: block;
      flex: 1;
      min-height: 60dvh;
    }

    main:focus {
      outline: none;
    }

    .skip {
      position: absolute;
      inset-inline-start: 1.6rem;
      inset-block-start: 1.6rem;
      z-index: 200;
      min-height: var(--touch);
      display: inline-flex;
      align-items: center;
      padding: 0.8rem 1.6rem;
      background: var(--color-gold);
      color: var(--color-ink);
      font-weight: 700;
      transform: translateY(-160%);
    }

    .skip:focus-visible {
      transform: none;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  readonly copy = LAYOUT_COPY;
}
