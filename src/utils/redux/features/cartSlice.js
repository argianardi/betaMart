import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  cart: [],
  amount: 0,
  totalAmount: 0,
  totalPrice: 0,
};

// cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add to cart reducer
    addToCart: (state, action) => {
      const productId = action.payload;
      const productExists = state.cart.find(
        (product) =>
          product.id === productId.id &&
          product.size === productId.size &&
          product.color === productId.color
      );
      if (productExists) {
        productExists.amount++;
        productExists.totalPrice += productId.price;
        state.totalAmount++;
        state.totalPrice += productId.price;
      } else {
        state.cart.push({
          id: productId.id,
          price: productId.price,
          size: productId.size,
          amount: 1,
          img: productId.img,
          totalPrice: productId.price,
          name: productId.name,
          text: productId.text,
          color: productId.color,
        });
        state.totalAmount++;
        state.totalPrice += productId.price;
      }
    },

    // Remove from cart reducer
    removeFromCart(state, action) {
      const productId = action.payload;
      const productExists = state.cart.find(
        (product) =>
          product.id === productId.id &&
          product.size === productId.size &&
          product.color === productId.color
      );
      if (productExists.amount === 1) {
        state.cart = state.cart.filter(
          (product) =>
            product.id !== productId.id ||
            product.size !== productId.size ||
            product.color !== productId.color
        );
        state.totalAmount--;
        state.totalPrice -= productId.price;
      } else {
        productExists.amount--;
        productExists.totalAmount--;
        state.totalAmount--;
        state.totalPrice -= productId.price;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
