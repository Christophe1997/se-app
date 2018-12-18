import React from 'react';
import HeadContainer from './containers/HeaderContainer'

import { appName, simpleItems, dropDownItems } from './config'

const App = () =>(
  <div>
    <HeadContainer appName={appName} simpleItems={simpleItems} dropDownItems={dropDownItems} />
  </div>
);

export default App;
