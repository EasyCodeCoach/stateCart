import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/Cart/CartSlice";
import modalReducer from "../features/modal/modalSlice";
export default configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
