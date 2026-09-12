import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { OrderRepository } from '../../core/repositories/order.repository';
import { CartService } from '../../core/services/cart.service';
import { NotificationService } from '../../core/services/notification.service';
import { EpicButtonComponent } from '../../shared/epic-button/epic-button.component';

@Component({
  selector: 'app-checkout',
  imports: [CurrencyPipe, RouterLink, EpicButtonComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutComponent {
  readonly cart = inject(CartService);
  private readonly orders = inject(OrderRepository);
  private readonly notify = inject(NotificationService);
  private readonly router = inject(Router);

  async claim(): Promise<void> {
    if (!this.cart.lines().length) {
      return;
    }

    const confirmed = await this.notify.confirm(
      'Claim this arsenal?',
      'The order is written to the live forge when it is reachable, otherwise it stays on this device.',
      'Claim gear',
    );

    if (!confirmed) {
      return;
    }

    const order = await this.orders.place();
    if (!order) {
      await this.notify.error('Claim failed', 'The ledger could not take the order.');
      return;
    }

    await this.notify.success('Arsenal claimed', `Order ${order.id} is on the book.`);
    await this.router.navigateByUrl('/profile');
  }
}
