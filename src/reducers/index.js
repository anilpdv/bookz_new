// @flow
import {combineReducers} from 'redux';
import booksReducer from './books-reducer';

// Root Reducer
const rootReducer = combineReducers({
  books: booksReducer,
});

export default rootReducer;
