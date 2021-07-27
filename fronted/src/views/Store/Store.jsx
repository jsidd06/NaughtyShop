
import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import { productListReducer } from "../../Redux/ProductReducer/ProductReducer";

const initialState = {};
const reducer = combineReducers({
    productList : productListReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default Store