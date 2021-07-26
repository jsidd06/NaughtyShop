import React from "react";
import "../src/style.css";
import {Link} from "react-router-dom"
import {BrowserRouter, Route} from "react-router-dom"
import HomeScreen from "./views/HomeScreen/HomeScreen";
import RedirectProductScreen from "./views/RedirectProductScreen/RedirectProductScreen";

function App() {
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
          <Link to="/cart">Cart</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      </header>
      <main>
        <Route path="/" exact component={HomeScreen}></Route>
        <Route path="/products/:id" component={RedirectProductScreen}></Route>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
