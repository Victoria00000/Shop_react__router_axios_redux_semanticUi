import { combineReducers } from "redux";
import { productReducer, productDetailsReducer } from "./productReducer";

export const reducerGroup = combineReducers({
    allProducts: productReducer,
    product: productDetailsReducer,
});

