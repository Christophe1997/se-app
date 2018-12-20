import React from 'react';
import {view as Header} from './header'
import {view as Form} from './sideBar'


const App = (appName) =>(
  <div>
    <Header appName={appName} />
    <Form/>
  </div>
);

export default App;
