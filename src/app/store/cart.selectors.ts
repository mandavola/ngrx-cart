import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';

export const selectCartState = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(
  selectCartState,
  state => state.items
);

export const selectCartTotal = createSelector(
  selectCartItems,
  items => items.reduce((total, item) =>
    total + (item.product.price * item.quantity), 0)
);

export const selectCartItemCount = createSelector(
  selectCartItems,
  items => items.reduce((count, item) => count + item.quantity, 0)
);
