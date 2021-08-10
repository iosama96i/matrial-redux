import { Fragment } from "react";
import Auth from "./component/Auth";
import Counter from "./component/Counter";
import Msg from "./component/Msg";
import Nav from "./component/Nav";
import Product from "./component/product";
import { useSelector } from "react-redux";
import AddItem from "./component/AddPost";
import Article from "./component/Article";
function App() {
  const isAuth = useSelector((state) => state.counter.showlogin);

  return (
    <Fragment>
      {isAuth && <Nav />}
      {!isAuth && <Auth />}
      {isAuth && <Msg />}
      {isAuth && <Counter />}
      {isAuth && <AddItem />}
      {isAuth && <Article />}
      {isAuth && <Product />}
    </Fragment>
  );
}

export default App;
