import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrainChart } from './Components/Charts/BrainChart';

function App() {
  return (
    <div className="App">
    
      <header className="App-header">
        <div className="Chart">
          <BrainChart />
        </div>
      </header>
    </div>
  );
}

export default App;
