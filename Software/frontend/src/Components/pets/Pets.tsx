import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Pet from './pet/Pet'
import './Pets.css'
import PetListModel from '../../Models/PetListModel'
import { PetNavBar } from '../NavBar/NavBar'


const Pets: React.FC<{}> = () => {
    const defaultPets: PetListModel[] = []
    const [pets, setPets]: [PetListModel[], (pets: PetListModel[]) => void] = useState(defaultPets)

    const getPets = async () => {
        const response = await axios.get<PetListModel[]>('http://localhost:9000/pet')
        setPets(response.data)
    }

    useEffect(() => {
        getPets()
    }, [])

    return (
        <div>
            <PetNavBar />
            <div className="pets">
                <div className='header'>
                    <h1>Tamagochis</h1>
                </div>
                {pets.map((pet) => {
                    return (
                        <Pet
                            _id={pet._id}
                            name={pet.name}
                            focusLevel={pet.focusLevel}
                        />
                    )
                })}
                <Link to='/addPets' style={{ textDecoration: 'none' }}>
                    <button>Create Pet</button>
                </Link>
            </div>
        </div>
    )
}

export default Pets