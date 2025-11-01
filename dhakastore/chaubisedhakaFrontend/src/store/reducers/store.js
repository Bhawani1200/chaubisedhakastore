import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./ProductReducer";
import { errorReducer } from "./erroReducer";

export const store = configureStore({
  reducer: {
    products: productReducer,
    error: errorReducer,
  },
  preloadedState: {},
});

export default store;
