import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import sliderReducer from "../features/sliderSlice";
import productsReducer from "../features/productsSlice";
import cartReducer from "../features/cartSlice";

const persistConfig = {
  key: "betamart",
  version: 1,
  storage,
};

// New products reducer for persisted products state
const persistedProductsReducer = persistReducer(persistConfig, productsReducer);

// Redux store configuration
export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: persistedProductsReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Persistor
export const persistor = persistStore(store);
