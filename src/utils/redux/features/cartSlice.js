import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  products: [],
  totalQuantity: 0,
  grandTotal: 0,
};

// cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add to cart reducer
    addToCart: (state, action) => {
      const newProduct = action.payload;
      const existingProducts = state.products.find(
        (product) => product.id === newProduct.id
      );
      if (existingProducts) {
        existingProducts.quantity += newProduct.quantity;
        existingProducts.totalPricePerProduct +=
          newProduct.totalPricePerProduct;
        state.totalQuantity += newProduct.quantity;
        state.grandTotal += newProduct.totalPricePerProduct;
      } else {
        state.products.unshift({
          ...action.payload,
        });
        state.totalQuantity += newProduct.quantity;
        state.grandTotal += newProduct.totalPricePerProduct;
      }
    },

    // Remove from cart reducer
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.totalQuantity -= action.payload.quantity;
      state.grandTotal -= action.payload.totalPricePerProduct;
    },

    // Increase quantity reducer
    increaseQuantity: (state, action) => {
      const updatedProduct = state.products.find(
        (product) => product.id === action.payload
      );
      updatedProduct.quantity++;
      updatedProduct.totalPricePerProduct += updatedProduct.price;
      state.totalQuantity++;
      state.grandTotal += updatedProduct.price;
    },

    // Decrease quantity reducer
    decreaseQuantity: (state, action) => {
      const updatedProduct = state.products.find(
        (product) => product.id === action.payload
      );
      updatedProduct.quantity--;
      updatedProduct.totalPricePerProduct -= updatedProduct.price;
      state.totalQuantity--;
      state.grandTotal -= updatedProduct.price;
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
