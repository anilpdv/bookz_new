// @flow

import {
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_BOOKS_LIST,
  SET_VIEW_BOOK_ID,
  FETCH_LATEST_BOOKS,
} from '../constants/action-types';

const initialState = {
  booksList: {},
  isLoading: false,
  error: false,
  error_msg: '',
  viewBookId: '66ce84c2a702ac21a2176aab3ab03247',
  latestBooks: {},
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_LIST: {
      return {
        isLoading: false,
        error: false,
        booksList: action.payload,
      };
    }
    case FETCH_LATEST_BOOKS: {
      return {
        isLoading: false,
        error: false,
        latestBooks: action.payload,
      };
    }
    case FETCH_DATA_REQUEST: {
      return {
        isLoading: true,
        error: false,
        booksList: {},
      };
    }
    case FETCH_DATA_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: true,
        error_msg: action.payload,
      };
    }
    case SET_VIEW_BOOK_ID: {
      return {
        viewBookId: action.payload,
        booksList: state.booksList,
      };
    }
    default: {
      return state;
    }
  }
};

export default booksReducer;
