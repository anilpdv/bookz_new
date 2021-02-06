import {fetchDataError} from './fetch-data/fetch-data-error';
import {
  fetchBooksDataSuccess,
  fetchLatestBooksDataSuccess,
} from './fetch-data/fetch-books-data-success';
import {
  fetchBooksDataRequest,
  fetchLatestBooksRequest,
} from '../services/http-books';
import {fetchDataRequest} from './fetch-data/fetch-data-request';

export const fetchBooksData = (query) => (dispatch) => {
  dispatch(fetchDataRequest());
  return fetchBooksDataRequest(query)
    .then((books) => dispatch(fetchBooksDataSuccess(books)))
    .catch((error) => dispatch(fetchDataError(error)));
};

export const fetchLatestBooksData = () => (dispatch) => {
  dispatch(fetchDataRequest());
  return fetchLatestBooksRequest()
    .then((books) => dispatch(fetchLatestBooksDataSuccess(books)))
    .catch((error) => dispatch(fetchDataError(error)));
};
