import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';


export const fetchData = () => async (dispatch) => {
    try {
      const response = await axios.get('http://cozshopping.codestates-seb.link/api/v1/products');
      const products = response.data.map((item) => ({ ...item, bookMark: false }));
      dispatch({ type: FETCH_DATA, payload: products });
    } catch (error) {
      console.error(error);
    }
  };