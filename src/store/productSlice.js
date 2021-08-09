import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      title: "Bottle of water",
      img: "https://bulbulenglish.com/wp-content/uploads/2017/10/pp-hot-coffee-rf-istock-1-1024x768.jpg",
      dis: "this price will effect our community",
      price: 21,
    },
    {
      id: 2,
      title: "Bottle of water",
      img: "https://www.justonecookbook.com/wp-content/uploads/2020/04/Royal-Milk-Tea-4730-I-480x270.jpg",
      dis: "this price will effect our community",
      price: 21,
    },
    {
      id: 3,
      title: "cup of tea",
      img: "https://www.cityofpriorlake.com/home/showpublishedimage/1078/637384528077200000",
      dis: "we are intresting in adding this",
      price: 13,
    },
    {
      id: 4,
      title: "coffee",
      img: "https://img.freepik.com/free-photo/orange-juce-orange-old-wooden-table_38820-118.jpg?size=626&ext=jpg",
      dis: "a cup of coffee can multiple other ",
      price: 16,
    },
  ],
  wishList: null,
};

const PorductSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    clear: (state) => {
      state.items = [];
    },
    addToCart: (state) => {
      state.wishList += 1;
    },
    RemoveItem: (state, action) => {
      state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});
export const { clear, addToCart, RemoveItem } = PorductSlice.actions;

export default PorductSlice.reducer;
