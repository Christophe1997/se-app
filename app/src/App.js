import React from 'react';
import {view as Header} from './header'


const App = ({appName}) =>(
  <div>
    <Header appName={appName} />
  </div>
);

export default App;
