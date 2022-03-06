import { Constants_Type_Actions } from '../constants/Constants_Type_Actions';
// initial state
const initialState = {
    product: [{
        id: 1,
        title: 'mouse',
        category: 'tech',
    }],
};

// reducerCases
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Constants_Type_Actions.SET_PRODUCT: {
            return { state };
        };
        default: return state;
    };
};