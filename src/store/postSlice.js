import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  title: null,
  discription: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postAdded: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { postAdded } = postSlice.actions;
export default postSlice.reducer;
