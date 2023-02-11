import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BrainChart } from './Components/Charts/BrainChart';
import Main from './Components/main/Main'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={< Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
