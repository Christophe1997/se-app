import {CLOSE_SIDEBAR, OPEN_SIDEBAR} from "./actionTypes";

export default (state=false, action) => {
  switch (action.type) {

    case OPEN_SIDEBAR:
      return true;

    case CLOSE_SIDEBAR:
      return false;

    default:
      return state

  }
};