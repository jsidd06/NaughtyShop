import React from "react";
import "../src/style.css";
import data from "./views/Data/Data";
import ProductScreen from "./views/ProductScreen/ProductScreen";
function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="">
            Naughty Shop
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.products.map((product) => (
            <ProductScreen key={product._id} product={product}></ProductScreen>
          ))}
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
