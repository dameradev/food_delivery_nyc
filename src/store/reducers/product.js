import * as actionTypes from "../actions/actionTypes";

const initialState = {
  products: [],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.products,
        loading: false
      };
    case actionTypes.GET_PRODUCTS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      };

    default:
      return state;
  }
};

export default reducer;
