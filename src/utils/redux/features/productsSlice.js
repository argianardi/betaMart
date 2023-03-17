import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../../assets/data/dummyData";

const initialState = {
  filteredProducts: [],
  singleProduct: [],
  products: storeData,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Filter Product Reducer
    filterProducts: (state, action) => {
      const filter = storeData.filter(
        (product) => product.type === action.payload
      );
      state.filteredProducts = filter;
    },
    // Single product Reducer
    singleProduct: (state, action) => {
      const oneProduct = storeData.filter(
        (product) => product.id === action.payload
      );
      state.singleProduct = oneProduct;
    },
  },
});

export const { filterProducts, singleProduct } = productsSlice.actions;
export default productsSlice.reducer;
