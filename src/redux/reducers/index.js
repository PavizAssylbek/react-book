import { combineReducers } from 'redux';

import filters from './filters';
import book from './book';
import cart from './cart';

const rootReducer = combineReducers({
  filters,
  book,
  cart,
});

export default rootReducer;
