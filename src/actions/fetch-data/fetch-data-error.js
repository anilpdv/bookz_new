import {FETCH_DATA_ERROR} from '../../constants/action-types';

export const fetchDataError = (error) => ({
  type: FETCH_DATA_ERROR,
  payload: error,
});
