import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrainChart } from './Components/Charts/BrainChart';
import { LineChart } from './Components/Charts/LineChart';
import { RadarChart } from './Components/Charts/RadarChart';

let exampleData: number[] = [10, 20, 30, 40, 50];
let cardProp: {
  Title: "title",
  Paragraph:"testttestset"
}



function App() {
  return (
    <div className="App">
         <br></br>
      <header className="App-header">
        <div className="Pocket">
        {/* <LineChart
              data = {exampleData}
            />  */}
        </div>
        <div className="Pocket">
        <RadarChart
              data = {exampleData}
            /> 
        </div>
      </header>
    </div>
  );
}

export default App;
