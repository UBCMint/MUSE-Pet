import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BrainChart } from './Components/Charts/BrainChart';
import Main from './Components/main/Main'
import Pets from './Components/pets/Pets';
import AddPets from './Components/addPets/AddPets';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={< Main />} />
          <Route path='/pets' element={< Pets />} />
          <Route path='/addPets' element={< AddPets />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
