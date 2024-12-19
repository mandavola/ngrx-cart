import { provideState } from '@ngrx/store';
import { cartReducer } from './cart.reducer';
import { provideEffects } from '@ngrx/effects';
import { CartEffects } from './cart.effects';

export const storeConfig = [
  provideState('cart', cartReducer),
  provideEffects(CartEffects)
];
