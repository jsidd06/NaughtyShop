import React from 'react'
import data from '../Data/Data'
import ProductScreen from '../ProductScreen/ProductScreen'
function HomeScreen() {
    return (
        <div className="row center">
          {data.products.map((product) => (
            <ProductScreen key={product._id} product={product}></ProductScreen>
          ))}
        </div>
    )
}

export default HomeScreen
