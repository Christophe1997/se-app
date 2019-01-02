import {combineReducers, createStore, compose, applyMiddleware} from "redux";
import {searchPageReducer} from './containers'
import {reducer as formReducer} from 'redux-form';
import thunkMiddleware from 'redux-thunk';

const reducer = combineReducers({
  searchPage: searchPageReducer,
  form: formReducer
});

const middlewares = [thunkMiddleware];

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(reducer, {}, storeEnhancers);

export default store