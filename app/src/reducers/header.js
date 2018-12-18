import {TOGGLE_HEADER} from "../actions/ActionTypes";

const header = (state, action) => {
  switch (action.type) {
    case TOGGLE_HEADER:
      return {
        ...state,
        isOpen: !state.isOpen
      };
    default:
      return {
        ...state
      };
  }
};

export default header