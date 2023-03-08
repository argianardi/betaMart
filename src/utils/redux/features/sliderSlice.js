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
      console.log("action", action);
      console.log("state", state);
      state.value = action.payload > state.length ? 1 : action.payload;
    },
    prevSlide: (state, action) => {
      state.value = action.payload < 1 ? state.length : action.payload;
    },
    dotSlide() {},
  },
});

export const { nextSlide, prevSlide, dotSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
