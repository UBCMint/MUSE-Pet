import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrainChart } from './Components/Charts/BrainChart';

let exampleData: number[] = [10, 20, 30, 40, 50];

function App() {
  return (
    <div className="App">
    
      <header className="App-header">
        <div className="Chart">
          <BrainChart
            data = {exampleData}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
