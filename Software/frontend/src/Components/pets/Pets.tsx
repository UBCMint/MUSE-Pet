import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Pet from './pet/Pet'
import './Pets.css'
import PetListModel from '../../Models/PetListModel'
import PetNavBar from '../NavBar/NavBar'
import Button from 'react-bootstrap/Button'

const Pets: React.FC<{}> = () => {
    const defaultPets: PetListModel[] = []
    const [pets, setPets]: [PetListModel[], (pets: PetListModel[]) => void] = useState(defaultPets)

    const getPets = async () => {
        const response = await axios.get<PetListModel[]>('http://localhost:9000/pet')
        setPets(response.data)
    }

    const handleDelete = async (props: { _id: string }, event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        console.log(props._id)
        await axios.delete('http://localhost:9000/pet/' + props._id)
        getPets()
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
                {pets.map((pet) => (
                    <Pet 
                        _id={pet._id}
                        name={pet.name}
                        focusLevel={pet.focusLevel}
                        handleDelete={handleDelete}
                    />
                ))}
                <Link to='/addPets' style={{ textDecoration: 'none' }}>
                    <Button variant='info'>Create Pet</Button>
                </Link>
            </div>
        </div>
    )
}

export default Pets