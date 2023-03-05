import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Components/main/Main'
import Pets from './Components/pets/Pets';
import AddPets from './Components/addPets/AddPets';
import { Profile } from './Components/profile/Profile';
import PetDetails from './Components/pets/petDetails/PetDetails';
import PetPage from './Components/petPage/PetPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={< Main />} />
          <Route path='/pets' element={< Pets />} />
          <Route path='/pet' element={< PetDetails />} />
          <Route path='/addPets' element={< AddPets />} />
          <Route path='/Profile' element={< Profile />} />
          <Route path='/pets/:id' element={< PetPage
            _id={'test'}
            name={'test'}
            birthDate={'test'}
            focusLevel={0}
            tirednessLevel={0}
            happinessLevel={5}
            isSick={false}
            isDead={false}
          />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
