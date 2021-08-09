import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    toggleCounter: (state) => {
      state.showTitle = !state.showTitle;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, reset, toggleCounter } =
  counterSlice.actions;

export default counterSlice.reducer;
