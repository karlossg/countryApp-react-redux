import { SET_PER_PAGE, SET_PAGE_COUNT, SET_ACTIVE_PAGE } from '../actions/pagination-actions';

const initialState = {
  perPage: 5,
  pageCount: 0,
  activePage: 0
};

const paginationReducer = function(state = initialState, action) {
  switch (action.type) {
    case SET_PER_PAGE:
      return Object.assign({}, state, { perPage: action.perPage });
    case SET_PAGE_COUNT:
      return Object.assign({}, state, { pageCount: action.pageCount });
    case SET_ACTIVE_PAGE:
      return Object.assign({}, state, { activePage: action.activePage });
    default:
      return state;
  }
};

export default paginationReducer;
