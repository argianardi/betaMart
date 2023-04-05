import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  products: [],
  quantity: 0,
  totalQuantity: 0,
  grandTotal: 0,
};

// cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add to cart reducer
    addToCart: (state, action) => {
      const newProduct = action.payload;
      const existingProducts = state.products.find(
        (product) => product.id === newProduct.id
      );
      if (existingProducts) {
        existingProducts.quantity += newProduct.quantity;
        existingProducts.totalPricePerProduct +=
          newProduct.totalPricePerProduct;
        state.totalQuantity++;
        state.grandTotal += newProduct.totalPricePerProduct;
      } else {
        state.products.unshift({
          ...action.payload,
        });
        state.totalQuantity++;
        state.grandTotal += newProduct.totalPricePerProduct;
      }
    },

    // Remove from cart reducer
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.grandTotal -= action.payload.totalPricePerProduct;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
