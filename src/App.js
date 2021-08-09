import { Fragment } from "react";
import Auth from "./component/Auth";
import Counter from "./component/Counter";
import Msg from "./component/Msg";
import Nav from "./component/Nav";
import Product from "./component/product";
import { useSelector } from "react-redux";
import AddItem from "./component/AddPost";

function App() {
  return (
    <Fragment>
      <Nav />
      <Auth />
      <Msg />
      <Counter />
      <AddItem/>
      <Product />
    </Fragment>
  );
}

export default App;
