import { configureStore ,combineReducers} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartSlice from './slices/cartSlice';
import productSlice from './slices/productSlice';
import userSlice from './slices/userSlice';

const rootReducer = combineReducers({
  cart: cartSlice,
  products: productSlice,
  user: userSlice,
});

const persistConfig = {
  key: 'root',
  storage,
  version: 1, // optional
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
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