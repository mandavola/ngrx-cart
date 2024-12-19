import {Component} from '@angular/core';
import {Product} from "../models/product.model";
import {Store} from "@ngrx/store";
import {CurrencyPipe, NgForOf} from "@angular/common";
import * as CartActions from '../store/cart.actions';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf
  ],
  template: `
    <div class="product-grid">
      <div class="product-card" *ngFor="let product of products">
        <h3>{{ product.name }}</h3>
        <p class="price">{{ product.price | currency:'EUR' }}</p>
        <button class="add-button" (click)="addToCart(product)">
          Ajouter au panier
        </button>
      </div>
    </div>
  `,
  styles: [`
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1.5rem;
      padding: 1rem;
    }

    .product-card {
      border: 1px solid #dee2e6;
      border-radius: 8px;
      padding: 1.5rem;
      text-align: center;
      transition: transform 0.2s;
    }

    .product-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .price {
      color: #495057;
      font-size: 1.25rem;
      margin: 1rem 0;
    }

    .add-button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .add-button:hover {
      background-color: #0056b3;
    }
  `]
})
export class ProductListComponent {
  products: Product[] = [
    {id: 1, name: 'Produit 1', price: 19.99},
    {id: 2, name: 'Produit 2', price: 29.99},
    {id: 3, name: 'Produit 3', price: 39.99}
  ];

  constructor(private store: Store) {
  }

  addToCart(product: Product): void {
    this.store.dispatch(CartActions.addToCart({product}));
  }
}
