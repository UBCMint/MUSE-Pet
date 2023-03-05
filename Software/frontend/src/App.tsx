import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Components/main/Main'
import Pets from './Components/pets/Pets';
import AddPets from './Components/addPets/AddPets';
import { Profile } from './Components/profile/Profile';
import PetDetails from './Components/pets/petDetails/PetDetails';
import PetPage from './Components/petPage/PetPage';
import LoginPage from './Components/login/Login';

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Routes>
          <Route path='/' element={< Main />} />
          <Route path='/login' element={< LoginPage />} />
          <Route path='/pets' element={< Pets />} />
          <Route path='/pet' element={< PetDetails />} />
          <Route path='/addPets' element={< AddPets />} />
          <Route path='/Profile' element={< Profile />} />
          <Route path='/pets/:id' element={< PetPage
            _id={'test'}
            name={'test'}
            birthDate={new Date()}
            focusLevel={0}
            tirednessLevel={0}
            happinessLevel={5}
            isSick={false}
            isDead={false}
          />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
