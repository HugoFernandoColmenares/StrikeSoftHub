import { CurrencyPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { OrderRepository } from '../../core/repositories/order.repository';
import { AuthService } from '../../core/services/auth.service';
import { EpicButtonComponent } from '../../shared/epic-button/epic-button.component';

@Component({
  selector: 'app-profile',
  imports: [CurrencyPipe, DatePipe, EpicButtonComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  readonly auth = inject(AuthService);
  readonly orders = inject(OrderRepository);
  private readonly router = inject(Router);

  async leave(): Promise<void> {
    await this.auth.logout();
    await this.router.navigateByUrl('/');
  }
}
