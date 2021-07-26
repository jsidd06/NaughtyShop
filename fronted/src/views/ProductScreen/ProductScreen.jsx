import React from 'react'
import RattingScreen from '../RattingScreen/RattingScreen';

function ProductScreen(props) {
    const {product} =props;
    return (
        <div key={product._id} className="card">
              <a href={`/products/${product._id}`}>
                <img
                  className="medium"
                  src={product.image}
                  alt={product.name}
                />
              </a>
              <div className="card-body">
              <a href={`/products/${product._id}`}>
                  <h2>{product.name}</h2>
                </a>
                <RattingScreen rating={product.rating} numReview={product.numReview} />
                <div className="price">${product.price}</div>
              </div>
            </div>
    )
}

export default ProductScreen

