import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { GROUP } from '../../core/config/group';
import { OrderRepository } from '../../core/repositories/order.repository';
import { CartService } from '../../core/services/cart.service';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-checkout',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutComponent {
  readonly cart = inject(CartService);
  private readonly orders = inject(OrderRepository);
  private readonly notify = inject(NotificationService);
  private readonly router = inject(Router);

  readonly group = GROUP;
  readonly placing = signal(false);

  async claim(): Promise<void> {
    if (!this.cart.lines().length) {
      return;
    }

    const confirmed = await this.notify.confirm(
      'Reserve this arsenal?',
      'This places a reservation with the workshop. Payment and handover happen in person at the field.',
      'Reserve',
    );

    if (!confirmed) {
      return;
    }

    this.placing.set(true);

    try {
      const order = await this.orders.place();
      if (!order) {
        await this.notify.error('Reservation failed', 'The ledger could not take the order.');
        return;
      }

      await this.notify.success('Reserved', 'Bring the reference to the next Sunday muster.');
      await this.router.navigateByUrl('/profile');
    } finally {
      this.placing.set(false);
    }
  }
}
