import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { items } from "../../data";
import axios from "axios";
export const fetchAllProducts = createAsyncThunk("products/all", async () => {
  const response = await axios("https://fakestoreapi.com/products");
  return response.data;
});

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartItem: {},
    message: "",
    products: [],
  },
  reducers: {
    increaseByQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      item.quantity += 1;
    },
    decreaseByQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      item.quantity = item.quantity <= 1 ? 1 : (item.quantity -= 1);
    },
    addToCart: (state, action) => {
      const itemId = action.payload;
      const itemToAdd = state.products.find((item) => item.id === itemId);

      if (itemToAdd) {
        // Check if item is already in cart
        const existingCartItem = state.cartItems.find(
          (item) => item.id === itemId
        );
        if (existingCartItem) {
          // If item is already in cart, update its quantity
          existingCartItem.quantity += 1;
        } else {
          // If item is not in cart, add it with quantity 1
          state.cartItems.push({ ...itemToAdd, quantity: 1 });
          // remove from product
          state.products = state.products.filter(
            (product) => product.id !== action.payload
          );

          state.message =
            state.products.length === 0
              ? "No products to add to cart"
              : "product added to cart";
        }
      }
    },

    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {
  increaseByQuantity,
  decreaseByQuantity,
  incrementByAmount,
  removeItem,
  addToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
