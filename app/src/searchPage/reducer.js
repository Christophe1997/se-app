import {CLOSE_SIDEBAR, FETCH_FAILURE, FETCH_STARTED, FETCH_SUCCESS, OPEN_SIDEBAR} from "./actionTypes";
import {STATUS} from "./views/PatientList";

export default (state = {
  isSideBarOpen: false,
  status: STATUS.LOADING,
  data: [],
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

    default:
      return state

  }
};