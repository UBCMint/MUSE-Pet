import {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import PetModel from '../../Models/PetModel';
import PetNavBar from '../navBar/NavBar';

const PetPage: React.FC<PetModel>= () => {
    
    const location = useLocation();
    const [pet] = useState<PetModel>(location.state);

    return (
        <div>
            <PetNavBar />
            <div>
                <h1>Pet Page</h1>
                <p> {pet.name}</p>
                <p>Focus Level: {pet.focusLevel}</p>
                <p>Happiness Level {pet.happinessLevel}</p>
                <p>is dead? {pet.isDead ? 'dead' : 'alive'}</p>
                <p> is sick? {pet.isSick ? 'sick' : 'healthy'}</p>
            </div>
        </div>
    )
}

export default PetPage