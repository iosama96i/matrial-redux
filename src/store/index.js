import { createStore } from "redux";

const intialState = {
  count: 0,
  posts: [
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
  open: flase,
  QantityItems: null ,
};

const countReducer = (state = intialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      count: state.count - 1,
    };
  }
  if (action.type === "RESET") {
    return {
      count: 0,
    };
  }
  if (action.type === "ADD_TO_CART") {
    return { ...state, QantityItems: state.QantityItems + 1 };
  }
  if (action.type === "CLEAR") {
    return { ...state, posts: [], QantityItems: "" };
  }
  if (action.type == "REMOVE") {
    return {
      ...state,
      posts: state.posts.filter((post) => post.id !== action.payload.id),
    };
  }
  if (action.type === "SIGHIN") {
    return {
      ...state,
      open: !state.open,
    };
  }
  return state;
};

// const store = createStore(countReducer);

// export default store;
