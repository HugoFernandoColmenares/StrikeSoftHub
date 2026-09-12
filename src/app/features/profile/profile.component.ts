import { CurrencyPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { OrderRepository } from '../../core/repositories/order.repository';
import { AuthService } from '../../core/services/auth.service';
import { MusterService } from '../../core/services/muster.service';

@Component({
  selector: 'app-profile',
  imports: [CurrencyPipe, DatePipe, RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  readonly auth = inject(AuthService);
  readonly orders = inject(OrderRepository);
  readonly muster = inject(MusterService);
  private readonly router = inject(Router);

  async leave(): Promise<void> {
    await this.auth.logout();
    await this.router.navigateByUrl('/');
  }
}
