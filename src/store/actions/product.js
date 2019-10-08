import * as actionTypes from "./actionTypes";

export const getProductsStart = () => {
  return {
    type: actionTypes.GET_PRODUCTS_START
  };
};

export const getProductsSuccess = products => {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    products
  };
};

export const getProductsFail = error => {
  return {
    type: actionTypes.GET_PRODUCTS_FAIL,
    error
  };
};

export const getProducts = (token, userId) => {
  return dispatch => {
    dispatch(getProductsStart());

    //API CALL TO SERVER TO GET PRODUCTS

    // axios
    //   .get("/products")
    //   .then(res => {
    //     dispatch(getProductsSuccess(res.products));
    //   })
    //   .catch(err => {
    //     dispatch(getProductsFail(err));
    //   });
  };
};
