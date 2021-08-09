import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import productReducer from "./productSlice";
import postReducer from "./postSlice";


export default configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
    post: postReducer,
  },
});
