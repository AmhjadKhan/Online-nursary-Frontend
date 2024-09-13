import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/api";
import persistReducer  from "redux-persist";


const persistedCartReducer = persistReducer();

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: persistedCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);