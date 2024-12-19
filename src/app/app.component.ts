import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CartEffects} from "./store/cart.effects";
import {EffectsModule} from "@ngrx/effects";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <header class="header">
      <nav class="nav">
        <a routerLink="/products" class="nav-link">Produits</a>
        <a routerLink="/cart" class="nav-link">Panier</a>
      </nav>
    </header>
    <main class="main">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .header {
      background-color: #f8f9fa;
      padding: 1rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .nav {
      display: flex;
      gap: 1rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .nav-link {
      text-decoration: none;
      color: #333;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background-color 0.3s;
    }

    .nav-link:hover {
      background-color: #e9ecef;
    }

    .main {
      max-width: 1200px;
      margin: 2rem auto;
      padding: 0 1rem;
    }
  `]
})
export class AppComponent {
  title = 'ngrx';
}
