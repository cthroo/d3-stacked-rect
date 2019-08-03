import React from 'react';
import Visualisation from './Visualisation';
import './App.css';

function App({data}) {
  return (
    <div className="App">
      <Visualisation data={data} />
    </div>
  );
}

export default App;
