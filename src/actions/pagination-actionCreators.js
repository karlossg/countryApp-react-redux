import { SET_PER_PAGE, SET_OFFSET, SET_PAGE_COUNT } from './pagination-actions';

export function setPerPage(perPage) {
  return {
    type: SET_PER_PAGE,
    perPage
  };
}

export function setOffset(offset) {
  return {
    type: SET_OFFSET,
    offset
  };
}

export function setPageCount(pageCount) {
  return {
    type: SET_PAGE_COUNT,
    pageCount
  };
}
