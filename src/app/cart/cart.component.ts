import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {CartItem} from '../models/product.model';
import * as CartSelectors from '../store/cart.selectors';
import * as CartActions from '../store/cart.actions';
import {AsyncPipe, CurrencyPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CurrencyPipe,
    AsyncPipe,
    NgIf
  ],
  template: `
    <div class="cart">
      <h2>Panier</h2>

      @if ((cartItems$ | async)?.length === 0) {
        <div class="empty-cart">
          Votre panier est vide
        </div>
      }

      <div class="cart-items">
        @for (item of cartItems$ | async; track item.product.id) {
          <div class="cart-item">
            <div class="item-details">
              <h3>{{ item.product.name }}</h3>
              <p>Prix unitaire: {{ item.product.price | currency:'EUR' }}</p>
            </div>

            <div class="item-actions">
              <input type="number"
                     [value]="item.quantity"
                     min="1"
                     (change)="updateQuantity(item.product.id, $event)">
              <button (click)="removeFromCart(item.product.id)">
                Supprimer
              </button>
            </div>
          </div>
        }
      </div>

      @if ((cartItems$ | async)?.length) {
        <div class="cart-total">
          <h3>Total: {{ cartTotal$ | async | currency:'EUR' }}</h3>
        </div>
      }
    </div>
  `,
  styles: [`
    .cart {
      padding: 1rem;
    }

    .cart-items {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .cart-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    .item-actions {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .cart-total {
      margin-top: 2rem;
      text-align: right;
    }

    .empty-cart {
      text-align: center;
      padding: 2rem;
      color: #666;
    }

    input[type="number"] {
      width: 60px;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    button {
      padding: 0.5rem 1rem;
      background-color: #dc3545;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      background-color: #c82333;
    }
  `]
})
export class CartComponent {
  cartItems$: Observable<CartItem[]>;
  cartTotal$: Observable<number>;

  constructor(private store: Store) {
    this.cartItems$ = this.store.select(CartSelectors.selectCartItems);
    this.cartTotal$ = this.store.select(CartSelectors.selectCartTotal);
  }

  updateQuantity(productId: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    const quantity = parseInt(input.value);
    if (quantity > 0) {
      this.store.dispatch(CartActions.updateQuantity({productId, quantity}));
    }
  }

  removeFromCart(productId: number): void {
    this.store.dispatch(CartActions.removeFromCart({productId}));
  }
}
