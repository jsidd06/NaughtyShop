import React from 'react'
import RattingScreen from '../RattingScreen/RattingScreen';
import {Link} from 'react-router-dom'

function ProductScreen(props) {
    const {product} =props;
    return (
        <div key={product._id} className="card">
              <Link to={`/products/${product._id}`}>
                <img
                  className="medium"
                  src={product.image}
                  alt={product.name}
                />
              </Link>
              <div className="card-body">
              <Link href={`/products/${product._id}`}>
                  <h2>{product.name}</h2>
                </Link>
                <RattingScreen rating={product.rating} numReview={product.numReview} />
                <div className="price">${product.price}</div>
              </div>
            </div>
    )
}

export default ProductScreen

