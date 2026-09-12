import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { BackendStatusService } from '../../core/services/backend-status.service';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-epic-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './epic-navbar.component.html',
  styleUrl: './epic-navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpicNavbarComponent {
  readonly cart = inject(CartService);
  readonly auth = inject(AuthService);
  readonly backend = inject(BackendStatusService);
}
