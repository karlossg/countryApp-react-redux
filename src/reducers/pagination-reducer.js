import {
  SET_PER_PAGE, SET_PAGE_COUNT
} from '../actions/pagination-actions';

const initialState = {
  perPage: 5
};


const paginationReducer = function (state = initialState, action) {
  switch (action.type) {
    case SET_PAGE_COUNT:
      return Object.assign({}, state, { perPage: action.perPage });

    default:
      return state;
  }
};

export default paginationReducer;