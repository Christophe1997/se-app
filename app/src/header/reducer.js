import {TOGGLE_HEADER} from "./actionTypes";

export default (state=false, action) => {
  switch (action.type) {
    case TOGGLE_HEADER:
      return {
        headIsOpen: !state.headIsOpen
      };
    default:
      return state
  }
};