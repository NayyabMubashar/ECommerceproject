
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productslic';
import cartReducer from './slices/counterslice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;