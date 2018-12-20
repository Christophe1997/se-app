import {combineReducers, createStore} from "redux";
import header from "./header/reducer";
import {reducer as formReducer} from 'redux-form'

const reducer = combineReducers({
  header,
  form: formReducer
});

const store = createStore(reducer);

export default store