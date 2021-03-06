import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// reducers
import {
  featuredProduct,
  streamInfo,
} from './broadcastReducers.jsx';
import { cart } from './cartReducers.jsx';
import {
  allProducts,
  merchantProducts,
  singleProduct,
} from './productReducers.jsx';
import {
  customerInfo,
  subscriptions,
  wishlist,
} from './customerReducers.jsx';
import {
  merchantInfo,
  allMerchants,
  channelInfo,
} from './merchantReducers.jsx';
import { streams } from './streamReducers.jsx';
import {
  allStreamsSearch,
  streamsSearch,
  allMerchantsSearch,
  merchantsSearch,
  allProductsSearch,
  productsSearch,
  searchMixed,
} from './searchReducers.jsx';

const tradehouseApp = combineReducers({
  allMerchants,
  allProducts,
  cart,
  merchantProducts,
  singleProduct,
  featuredProduct,
  form: formReducer,
  wishlist,
  subscriptions,
  customerInfo,
  channelInfo,
  merchantInfo,
  streamInfo,
  streams,
  allStreamsSearch,
  streamsSearch,
  allMerchantsSearch,
  merchantsSearch,
  allProductsSearch,
  productsSearch,
  searchMixed,
});

export default tradehouseApp;
