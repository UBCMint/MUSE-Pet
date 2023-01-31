import './App.css';
import { BrainChart } from './Components/Charts/BrainChart';
import { PetNavBar } from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <PetNavBar />
      <header className="App-header">
        <div className="Chart">
          <BrainChart />
        </div>
      </header>
    </div>
  );
}

export default App;
