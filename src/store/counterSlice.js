import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  showlogin:false
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
    show: (state) => {
      state.showlogin = !state.showlogin;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, reset, show } = counterSlice.actions;

export default counterSlice.reducer;
