import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WeaponModel } from '../../core/models/weapon.model';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-weapon-card',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './weapon-card.component.html',
  styleUrl: './weapon-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeaponCardComponent {
  private readonly cart = inject(CartService);
  readonly weapon = input.required<WeaponModel>();

  addToArsenal(): void {
    this.cart.add(this.weapon().id);
  }
}
