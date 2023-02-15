import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrainChart } from './Components/Charts/BrainChart';
import { LineChart } from './Components/Charts/LineChart';
import { RadarChart } from './Components/Charts/RadarChart';

let exampleData: number[] = [10, 20, 30, 40, 50];

function App() {
  return (
    <div className="App">
    
      <header className="App-header">
        <div className="Chart">
          <RadarChart
            data = {exampleData}
          />
          {/* <LineChart
            data = {exampleData}
          /> 
           <BrainChart
            data = {exampleData}
          /> */}
        </div>
      </header>
    </div>
  );
}

export default App;
