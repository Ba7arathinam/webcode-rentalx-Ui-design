import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./Reducers/Products.slice";


// ROOT REDUCER
// COMBINE REDUCER
export default configureStore({
  reducer: {
    food: ProductsSlice,
  },
});
