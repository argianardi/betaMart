import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  products: [],
  amount: 0,
  totalAmount: 0,
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
        existingProducts.amount += newProduct.amount;
        existingProducts.totalPricePerProduct +=
          newProduct.totalPricePerProduct;
        state.totalAmount++;
        state.grandTotal += newProduct.totalPricePerProduct;
      } else {
        state.products.unshift({
          ...action.payload,
        });
        state.totalAmount++;
        state.grandTotal += newProduct.totalPricePerProduct;
      }
    },

    // Remove from cart reducer
    removeFromCart(state, action) {
      const newProduct = action.payload;
      const existingProducts = state.products.find(
        (product) =>
          product.id === newProduct.id &&
          product.size === newProduct.size &&
          product.color === newProduct.color
      );
      if (existingProducts.amount === 1) {
        state.cart = state.cart.filter(
          (product) =>
            product.id !== newProduct.id ||
            product.size !== newProduct.size ||
            product.color !== newProduct.color
        );
        state.totalAmount--;
        state.totalPrice -= newProduct.price;
      } else {
        existingProducts.amount--;
        existingProducts.totalAmount--;
        state.totalAmount--;
        state.totalPrice -= newProduct.price;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
