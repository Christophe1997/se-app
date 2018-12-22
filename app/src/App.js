import React from 'react';
import {view as SearchPage} from './searchPage'


const App = ({appName}) =>(
  <div>
    <SearchPage appName={appName} />
  </div>
);

export default App;
