import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CHECKOUT_COPY } from '../../core/copy/checkout.copy';
import { NOTIFY_COPY } from '../../core/copy/notifications.copy';
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

  readonly copy = CHECKOUT_COPY;
  readonly placing = signal(false);

  async claim(): Promise<void> {
    if (!this.cart.lines().length) {
      return;
    }

    const confirmed = await this.notify.confirm(
      NOTIFY_COPY.reserveTitle,
      NOTIFY_COPY.reserveBody,
      NOTIFY_COPY.reserveConfirm,
    );

    if (!confirmed) {
      return;
    }

    this.placing.set(true);

    try {
      const order = await this.orders.place();
      if (!order) {
        await this.notify.error(NOTIFY_COPY.reserveFailed, NOTIFY_COPY.ledgerFailed);
        return;
      }

      await this.notify.success(NOTIFY_COPY.reserved, NOTIFY_COPY.bringRef);
      await this.router.navigateByUrl('/profile');
    } finally {
      this.placing.set(false);
    }
  }
}
