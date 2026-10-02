import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartDrawerComponent } from '../cart-drawer/cart-drawer.component';
import { EpicFooterComponent } from '../epic-footer/epic-footer.component';
import { EpicNavbarComponent } from '../epic-navbar/epic-navbar.component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, EpicNavbarComponent, EpicFooterComponent, CartDrawerComponent],
  template: `
    <div class="app-shell">
      <a class="skip" href="#main">Skip to content</a>
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
      left: -999px;
      top: 0;
      z-index: 200;
      padding: 0.8rem 1.2rem;
      background: var(--color-gold);
      color: #19130e;
      font-weight: 700;
    }

    .skip:focus {
      left: 0;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {}
