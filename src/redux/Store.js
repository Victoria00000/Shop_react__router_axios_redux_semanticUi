import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducerGroup } from "./reducers/combineReducers";

export const Store = createStore(reducerGroup, composeWithDevTools());