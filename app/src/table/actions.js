import {CHANGE_PAGE, CHANGE_PER_PAGE, CLICK_ONE, REQUEST_SORT, SELECT_ALL} from "./actionTypes";

export const requestSort = (event, property) => ({
  type: REQUEST_SORT,
  event,
  property
});

export const selectAll = event => ({
  type: SELECT_ALL,
  event
});

export const clickOne = (event, id) => ({
  type: CLICK_ONE,
  event,
  id
});

export const changePage = (event, page) => ({
  type: CHANGE_PAGE,
  page
});

export const changePerPage = (event) => ({
  type: CHANGE_PER_PAGE,
  event
});