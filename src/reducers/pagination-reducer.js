import { SET_PER_PAGE, SET_PAGE_COUNT, SET_OFFSET } from '../actions/pagination-actions';

const initialState = {
  perPage: 5,
  offset: 0,
  pageCount: 0
};

const paginationReducer = function(state = initialState, action) {
  switch (action.type) {
    case SET_PER_PAGE:
      return Object.assign({}, state, { perPage: action.perPage });
    case SET_OFFSET:
      return Object.assign({}, state, { offset: action.offset });
    case SET_PAGE_COUNT:
      return Object.assign({}, state, { pageCount: action.pageCount });
    default:
      return state;
  }
};

export default paginationReducer;
