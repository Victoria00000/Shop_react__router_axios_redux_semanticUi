import { Constants_Type_Actions } from '../constants/Constants_Type_Actions';

export const setProducts = (product) => {
  return {
    type: Constants_Type_Actions.SET_PRODUCT,
    payload: product,
  };
};

export const selectedProduct = (product) => {
  return {
    type: Constants_Type_Actions.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: Constants_Type_Actions.REMOVE_SELECTED_PRODUCT,
  };
};