import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartSlice from './slices/cartSlice';
import productSlice from './slices/productSlice';
import userSlice from './slices/userSlice';

const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['items', 'total']
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartSlice);

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    products: productSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;