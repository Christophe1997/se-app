import {CHANGE_PAGE, CHANGE_PER_PAGE, CLICK_ONE, REQUEST_SORT, SELECT_ALL} from "./actionTypes";

export default (state = {
  order: 'asc',
  orderBy: 'name',
  selected: [],
  data: [],
  page: 0,
  rowsPerPage: 5
}, action) => {
  switch (action.type) {
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
      const { selected } = state;
      const selectedIndex = selected.indexOf(action.id);
      let newSelected = [];
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected.slice(1));
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

    default:
      return {
        ...state
      };
  }
}