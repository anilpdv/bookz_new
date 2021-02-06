import {
  FETCH_BOOKS_LIST,
  FETCH_LATEST_BOOKS,
} from '../../constants/action-types';

export const fetchBooksDataSuccess = (books) => ({
  type: FETCH_BOOKS_LIST,
  payload: books,
});

export const fetchLatestBooksDataSuccess = (books) => ({
  type: FETCH_LATEST_BOOKS,
  payload: books,
});
