import axios, { key } from "../../axios";

export const FETCH_PRODUCTS_BEGIN = "FETCH_PRODUCTS_BEGIN";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = () => {
  return dispatch => {
    axios
      .get(`trending/all/week?api_key=${key}&language=pl`)
      .then(response => {
        dispatch({
          type: FETCH_PRODUCTS_SUCCESS,
          payload: response.data.results
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});
