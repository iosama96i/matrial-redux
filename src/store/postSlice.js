import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 
      id: "12",
      title: "load",
      discription: "ceat",
  
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postAdded: (state, action) => {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.discription = action.payload.discription;
    },
  },
});

export const { postAdded } = postSlice.actions;
export default postSlice.reducer;
