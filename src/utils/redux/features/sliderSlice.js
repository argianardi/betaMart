import { createSlice } from "@reduxjs/toolkit";
import { sliderData } from "../../../assets/data/dummyData";

// initial state
const initialState = {
  value: 1,
  length: sliderData.length,
};

// create slice
export const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    nextSlide: (state, action) => {
      state.value = action.payload > state.length ? 1 : action.payload;
    },
    prevSlide: (state, action) => {
      state.value = action.payload < 1 ? state.length : action.payload;
    },
    dotSlide: (state, action) => {
      const slide = action.payload;
      state.value = slide;
    },
  },
});

export const { nextSlide, prevSlide, dotSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
