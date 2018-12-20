import React from 'react';
import {view as Header} from './header'
import {view as Form} from './sideBar'

import { appName } from './config'

const App = () =>(
  <div>
    <Header appName={appName} />
    <Form/>
  </div>
);

export default App;
