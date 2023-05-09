import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistProducts: [],
  wishlistTotalQuantity: 0,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlistProducts.push(action.payload);
      state.wishlistTotalQuantity++;
    },
    removeFromWishlist: (state, action) => {
      state.wishlistProducts = state.wishlistProducts.filter(
        (product) => product.id !== action.payload
      );
      if (state.wishlistTotalQuantity > 0) {
        state.wishlistTotalQuantity--;
      }
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
