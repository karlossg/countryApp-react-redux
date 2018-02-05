import { combineReducers } from 'redux';
import countriesReducer from './countries-reducer';
import paginationReducer from './pagination-reducer';

const reducers = combineReducers({
  countriesReducer,
  paginationReducer
});

export default reducers;