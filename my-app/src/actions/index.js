import axios from 'axios';

export const UPDATE = "UPDATE";
export const FETCH_DATA = 'FETCH_DATA';
export const SET_INITIAL = 'SET_INITIAL';

export const update = (id) => {
    return {
        type: UPDATE,
        payload: id,
    }
}

export const setInitial = (list) => {
  return {
    type: SET_INITIAL,
    payload: list,
  }
}

export const fetchData = () => async (dispatch) => {
  try {
    const response = await axios.get('http://cozshopping.codestates-seb.link/api/v1/products');
    const products = response.data.map((item) => ({ ...item, bookMark: false }));
    dispatch({ type: FETCH_DATA, payload: products });
  } catch (error) {
    console.error(error);
  }
};