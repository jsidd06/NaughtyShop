import React from "react";
import data from "../Data/Data";
import RattingScreen from "../RattingScreen/RattingScreen";
import {Link} from "react-router-dom"

function RedirectProductScreen(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div>
        <Link to='/'>Go Back Here</Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={`/${product.image}`} alt={product.name} />
        </div>
        <div className="col-1">
          <ul>
            <h2>{product.name}</h2>
            <li>
              <RattingScreen
                rating={product.rating}
                numReview={product.numReview}
              ></RattingScreen>
            </li>
            <li>price=${product.price}</li>
            <li>
              Description: <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>price</div>
                  <div className="price">${product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>status</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="error">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                  <button className="primary block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RedirectProductScreen;
