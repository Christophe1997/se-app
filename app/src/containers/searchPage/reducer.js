import {
  CLOSE_SIDEBAR,
  FETCH_FAILURE,
  FETCH_STARTED,
  FETCH_SUCCESS,
  OPEN_SIDEBAR,
  CHANGE_PAGE,
  CHANGE_PER_PAGE,
  CLICK_ONE,
  REQUEST_SORT,
  SELECT_ALL, SELECT_OPEN
} from "./actionTypes";
import {STATUS} from "./constants";

export default (state = {
  isSideBarOpen: true,
  status: STATUS.LOADING,
  data: [],
  order: 'asc',
  orderBy: 'name',
  selected: [],
  page: 0,
  rowsPerPage: 5,
  error: ''
}, action) => {
  switch (action.type) {

    case OPEN_SIDEBAR:
      return {
        ...state,
        isSideBarOpen: true
      };

    case CLOSE_SIDEBAR:
      return {
        ...state,
        isSideBarOpen: false
      };

    case FETCH_STARTED:
      return {
        ...state,
        status: STATUS.LOADING
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        status: STATUS.SUCCESS,
        data: action.result
      };

    case FETCH_FAILURE:
      return {
        ...state,
        status: FETCH_FAILURE,
        error: action.error
      };

    case REQUEST_SORT:
      const orderBy = action.property;
      let order = 'desc';
      if (state.orderBy === action.property && state.order === 'desc') {
        order = 'asc';
      }
      return {
        ...state,
        order,
        orderBy
      };

    case SELECT_ALL:
      if (action.event.target.checked) {
        return {
          ...state,
          selected: state.data.map(n => n.id)
        };
      }
      return {
        ...state,
        selected: []
      };

    case CLICK_ONE:
      const { selected }= state;
      const { id } = action;
      const selectedIndex = selected.indexOf(id);
      let newSelected = [];
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1))
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1))
      }
      return {
        ...state,
        selected: newSelected
      };

    case CHANGE_PAGE:
      return {
        ...state,
        page: action.page
      };

    case CHANGE_PER_PAGE:
      return {
        ...state,
        rowsPerPage: action.event.target.value
      };

    case SELECT_OPEN:
      let data = [];
      state.selected.forEach((_, idx) => {
        data.push(state.data[idx])
      });
      console.log(data);
      // TODO
      // Open in new page with select patient data
      return {
        ...state
      };

    default:
      return {
        ...state
      };
  }
};