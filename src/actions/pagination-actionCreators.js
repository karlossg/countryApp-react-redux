import { SET_PER_PAGE, SET_OFFSET, SET_PAGE_COUNT } from './pagination-actions';

export function setPerPage(perPage) {
  return {
    type: SET_PER_PAGE,
    perPage
  }
}