import React from 'react';
import {view as Header} from './header'

import { appName, simpleItems, dropDownItems } from './config'

const App = () =>(
  <div>
    <Header appName={appName} simpleItems={simpleItems} dropDownItems={dropDownItems} />
  </div>
);

export default App;
