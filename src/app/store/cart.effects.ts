import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CartService } from '../services/cart.service';
import * as CartActions from './cart.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CartEffects {
  private actions$ = inject(Actions);
  private cartService = inject(CartService);

  saveCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.addToCart),
      mergeMap(() =>
        this.cartService.saveCart().pipe(
          map(() => CartActions.saveCartSuccess()),
          catchError((error) => of(CartActions.saveCartError({ error: error.message })))
        )
      )
    );
  });
}
