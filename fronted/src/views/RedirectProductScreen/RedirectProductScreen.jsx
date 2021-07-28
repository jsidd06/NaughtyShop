import React, { useEffect } from "react";
import RattingScreen from "../RattingScreen/RattingScreen";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../LoadingBox/LoadingBox";
import MessageBox from "../MessageBox/MessageBox";
import { detailsProduct } from "../../Redux/ProductAction/ProductAction";

function RedirectProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link to="/">Go Back Here</Link>
          <div className="row top">
            <div className="col-2">
              {console.log(product)}
              <img
                className="large"
                src={`/${product.image}`}
                alt={product.name}
              />
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
                          <span className="danger">Unavailable</span>
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
      )}
    </div>
  );
}

export default RedirectProductScreen;
