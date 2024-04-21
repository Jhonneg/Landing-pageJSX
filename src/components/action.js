import {
  CHANGE_SEARCH_FIELD,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
} from "./constant";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});
export const requestRobots = () => (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data }))
    .catch((error) => dispatch({ type: FETCH_PRODUCTS_ERROR, payload: error }));
};
