import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GROUP } from '../../core/config/group';
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
  readonly group = GROUP;
  readonly menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
