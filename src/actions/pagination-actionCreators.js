import { SET_PER_PAGE, SET_PAGE_COUNT, SET_ACTIVE_PAGE } from './pagination-actions';

export function setPerPage(perPage) {
  return {
    type: SET_PER_PAGE,
    perPage
  };
}

export function setPageCount(pageCount) {
  return {
    type: SET_PAGE_COUNT,
    pageCount
  };
}

export function setActivePage(activePage) {
  return {
    type: SET_ACTIVE_PAGE,
    activePage
  };
}
