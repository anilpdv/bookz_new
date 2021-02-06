import {SET_VIEW_BOOK_ID} from '../../constants/action-types';

export const setViewBookId = (id) => ({
  type: SET_VIEW_BOOK_ID,
  payload: id,
});
