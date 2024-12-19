import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product.model';

export const addToCart = createAction(
  '[Cart] Add Item',
  props<{ product: Product }>()
);

export const removeFromCart = createAction(
  '[Cart] Remove Item',
  props<{ productId: number }>()
);

export const updateQuantity = createAction(
  '[Cart] Update Quantity',
  props<{ productId: number; quantity: number }>()
);

export const saveCartSuccess = createAction('[Cart] Save Success');
export const saveCartError = createAction(
  '[Cart] Save Error',
  props<{ error: string }>()
);
