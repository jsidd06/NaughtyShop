import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "../../Redux/CartReducer/CartReducer";
import {
  productDetailsReducer,
  productListReducer,
} from "../../Redux/ProductReducer/ProductReducer";
import { userSigninReducer } from "../../Redux/UserReducer/UserReducer";

const initialState = {
  userSignin : {
    userInfo: localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')):null
  },
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default Store;
