import {combineReducers, createStore} from "redux";
import isSideBarOpen from "./searchPage/reducer";
import {reducer as formReducer} from 'redux-form';

const reducer = combineReducers({
  isSideBarOpen,
  form: formReducer
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store