import React from "react";
import "../src/style.css";
import { Link } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./views/HomeScreen/HomeScreen";
import RedirectProductScreen from "./views/RedirectProductScreen/RedirectProductScreen";
import CartScreen from "./views/CartScreen/CartScreen";
import { useDispatch, useSelector } from "react-redux";
import SigninScreen from "./views/SigninScreen/SigninScreen";
import { signout } from "./Redux/UserAction/UserAction";
import RegisterScreen from "./views/RegisterScreen/RegisterScreen";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch()
  const signoutHandler = () =>{
    dispatch(signout()) 
}
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              Naughty Shop
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
              <Link to="#">{userInfo.name}<i className="fa fa-caret-down"></i>{' '}</Link>
              <ul className="dropdown-content">
                <Link to="#signout" onClick={signoutHandler}>Sign out</Link>
              </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
          </div>
        </header>
        <main>
          <Route path="/" exact component={HomeScreen}></Route>
          <Route path="/products/:id" component={RedirectProductScreen}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
