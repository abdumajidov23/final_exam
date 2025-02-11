import { configureStore } from "@reduxjs/toolkit";
import { mainApi } from "./api";
import wishlistSlice from "./features/wishlist-slice";
import cartSlice from "./features/cart-slice";
import tokenSlice from "./features/token-slice";

export const store = configureStore({
  reducer: {
    token: tokenSlice,
    wishlist: wishlistSlice,
    cart: cartSlice,
    [mainApi.reducerPath]: mainApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
