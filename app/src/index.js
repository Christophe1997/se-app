import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Provider } from 'react-redux'
import store from './store'
import {appName, theme} from './config'

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
  <Provider store={store}>
    <App appName={appName}/>
  </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
