import './App.css';
import { BrainChart } from './Components/Charts/BrainChart';
import { PetNavBar } from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
    
      <header className="App-header">
        <div className="Navbar">
          <PetNavBar />
        </div>
        <div className="Chart">
          <BrainChart />
        </div>
      </header>
    </div>
  );
}

export default App;
