import React from "react";
import "../src/style.css";
import {Link} from "react-router-dom"
import {BrowserRouter, Route} from "react-router-dom"
import HomeScreen from "./views/HomeScreen/HomeScreen";
import RedirectProductScreen from "./views/RedirectProductScreen/RedirectProductScreen";
import CartScreen from "./views/CartScreen/CartScreen";
import { useSelector } from "react-redux";
import SigninScreen from "./views/SigninScreen/SigninScreen";

function App() {
  const cart = useSelector((state) => state.cart)
  const {cartItems} = cart
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
          <Link to="/cart">Cart
          {
            cartItems.length>0 && (
              <span className="badge">{cartItems.length}</span>
            )}
          </Link>
          <Link to="/signin">Sign In</Link>
        </div>
      </header>
      <main>
        <Route path="/" exact component={HomeScreen}></Route>
        <Route path="/products/:id" component={RedirectProductScreen}></Route>
        <Route path="/cart/:id?" component={CartScreen}></Route>
        <Route path="/signin" component={SigninScreen}></Route>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
