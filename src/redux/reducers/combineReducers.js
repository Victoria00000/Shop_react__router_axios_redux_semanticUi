import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

export const reducerGroup = combineReducers({
    productReducer,
});

