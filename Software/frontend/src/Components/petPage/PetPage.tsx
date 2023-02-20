import {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import PetListModel from '../../Models/PetListModel';
import PetNavBar from '../navBar/NavBar';

const PetPage: React.FC<PetListModel>= (props) => {
    
    const location = useLocation();
    const [pet, setPet] = useState<PetListModel>(location.state as PetListModel);

    return (
        <div>
            <PetNavBar />
            <div>
                <h1>Pet Page</h1>
                {pet.name}
            </div>
        </div>
    )
}

export default PetPage