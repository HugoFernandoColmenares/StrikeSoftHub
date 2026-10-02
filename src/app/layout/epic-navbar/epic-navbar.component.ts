import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LAYOUT_COPY } from '../../core/copy/layout.copy';
import { AuthService } from '../../core/services/auth.service';
import { BackendStatusService } from '../../core/services/backend-status.service';
import { CartService } from '../../core/services/cart.service';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-epic-navbar',
  imports: [RouterLink, RouterLinkActive, IconComponent],
  templateUrl: './epic-navbar.component.html',
  styleUrl: './epic-navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpicNavbarComponent {
  readonly cart = inject(CartService);
  readonly auth = inject(AuthService);
  readonly backend = inject(BackendStatusService);
  readonly copy = LAYOUT_COPY;
  readonly menuOpen = signal(false);
  readonly compactNav = signal(false);

  constructor() {
    if (typeof window === 'undefined') {
      return;
    }

    const media = window.matchMedia('(max-width: 1023.98px)');
    this.compactNav.set(media.matches);
    media.addEventListener('change', (event) => {
      this.compactNav.set(event.matches);
      if (!event.matches) {
        this.closeMenu();
      }
    });
  }

  toggleMenu(): void {
    const next = !this.menuOpen();
    this.menuOpen.set(next);
    if (next) {
      this.cart.closeDrawer();
    }
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  openCart(): void {
    this.closeMenu();
    this.cart.openDrawer();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

}
