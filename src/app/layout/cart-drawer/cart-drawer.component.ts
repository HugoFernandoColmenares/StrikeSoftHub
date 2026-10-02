import { CurrencyPipe, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, HostListener, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-cart-drawer',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './cart-drawer.component.html',
  styleUrl: './cart-drawer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartDrawerComponent {
  readonly cart = inject(CartService);
  private readonly document = inject(DOCUMENT);

  constructor() {
    effect((onCleanup) => {
      const open = this.cart.drawerOpen();
      this.document.body.classList.toggle('is-locked', open);
      onCleanup(() => this.document.body.classList.remove('is-locked'));
    });
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.cart.drawerOpen()) {
      this.cart.closeDrawer();
    }
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.cart.closeDrawer();
    }
  }
}
