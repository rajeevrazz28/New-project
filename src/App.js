import React from 'react';
import ChipsSelector from './chipselector';
import { items } from './item';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <h1 className='pick'>Pick Users</h1>
     <ChipsSelector items={items} />
    </div>
  );
}

export default App;
