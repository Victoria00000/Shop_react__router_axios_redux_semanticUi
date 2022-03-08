import { Constants_Type_Actions } from '../constants/Constants_Type_Actions';
// initial state
const initialState = {
    product: [],
};

// reducerCases
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Constants_Type_Actions.SET_PRODUCT: {
            return { ...state, product: payload };
        };
        default: return state;
    };
};