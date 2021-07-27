import React, { useEffect} from "react";
import ProductScreen from "../ProductScreen/ProductScreen";
import LoadingBox from "../LoadingBox/LoadingBox";
import MessageBox from "../MessageBox/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/ProductAction/ProductAction";
function HomeScreen() {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const {loading,error,products} = productList;
  useEffect(() => {
    dispatch(listProduct())  
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <ProductScreen key={product._id} product={product}></ProductScreen>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
