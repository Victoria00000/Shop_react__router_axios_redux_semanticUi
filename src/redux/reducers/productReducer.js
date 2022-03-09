import { Constants_Type_Actions } from '../constants/Constants_Type_Actions';
// initial state
const initialState = {
    product: [],
};

// reducer-Cases-setProduct
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Constants_Type_Actions.SET_PRODUCT: {
            return { ...state, product: payload };
        };
        default: return state;
    };
};
//reducer-Cases-selectedProduct(details)
export const productDetailsReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case Constants_Type_Actions.SELECTED_PRODUCT: {
            return { ...state, ...payload };
        };
        case Constants_Type_Actions.REMOVE_SELECTED_PRODUCT: {
            return {};
        }
        default: return state;
    };
};
