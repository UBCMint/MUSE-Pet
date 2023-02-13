import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrainChart } from './Components/Charts/BrainChart';
import { LineChart } from './Components/Charts/LineChart';

let exampleData: number[] = [10, 20, 30, 40, 50];

function App() {
  return (
    <div className="App">
    
      <header className="App-header">
        <div className="Chart">
          <LineChart
            data = {exampleData}
          />
          <BrainChart
            data = {exampleData}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
