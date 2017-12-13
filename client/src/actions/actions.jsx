import axios from 'axios';

export const CHANGE_VIDEO = 'CHANGE_VIDEO';
export const CHANGE_BROADCAST_MESSAGE = 'CHANGE_BROADCAST_MESSAGE';
export const SELECT_FEATURED_PRODUCT = 'SELECT_FEATURED_PRODUCT';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const FETCH_CUSTOMER_SUCCESS = 'FETCH_CUSTOMER_SUCCESS';
export const FETCH_CUSTOMER_FAILURE = 'FETCH_CUSTOMER_FAILURE';

export const changeVideo = video => ({
  type: CHANGE_VIDEO,
  video,
});

export const changeBroadcastMessage = broadcastMessage => ({
  type: CHANGE_BROADCAST_MESSAGE,
  broadcastMessage,
});

export const selectFeaturedProduct = product => ({
  type: SELECT_FEATURED_PRODUCT,
  product,
});

export const addProduct = product => (dispatch) => {
  axios.post('/api/products', product)
    .then(res => dispatch({
      type: ADD_PRODUCT_SUCCESS,
      product: res.data,
    }))
    .catch(err => dispatch({
      type: ADD_PRODUCT_FAILURE,
      error: err,
    }));
};

export const deleteProduct = (product) => {
  console.log(product);
  return (dispatch) => {
    axios.delete('/api/products', { data: product })
      .then(res => dispatch({
        type: DELETE_PRODUCT_SUCCESS,
        items: res.data,
      }))
      .catch(err => dispatch({
        type: DELETE_PRODUCT_FAILURE,
        error: err,
      }));
  };
};

export const fetchProducts = (url = '/api/products') => (dispatch) => {
  dispatch(fetchProductsLoading(true));
  axios.get(url)
    .then(res => dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      items: res.data,
    }))
    .catch(err => dispatch({
      type: FETCH_PRODUCTS_FAILURE,
      error: err,
    }));
};

export const fetchProductsLoading = bool => ({
  type: 'PRODUCTS_LOADING',
  isLoading: bool,
});

export const fetchCustomerLoading = bool => ({
  type: 'CUSTOMER_LOADING',
  isLoading: bool,
});

export const fetchCustomerInfo = ({ id }) => (dispatch) => {
  dispatch(fetchCustomerLoading(true));
  axios.get('/api/customers', {
    params: {
      id,
    },
  }).then(res => dispatch({
      type: FETCH_CUSTOMER_SUCCESS,
      items: res.data,
    }), err => dispatch({
      type: FETCH_CUSTOMER_FAILURE,
      error: err,
    }));
};
