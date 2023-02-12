import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PetModel from '../../Models/PetModel'
import './AddPets.css'
import PetListModel from '../../Models/PetListModel'
import { request } from 'http'
import { parseJsonText } from 'typescript'

const AddPets: React.FC<{}> = () => {
    const [name, setName]: [string, (name: string) => void] = useState("")
    const [tirednessLevel, setTirednessLevel]: [number, (tirednessLevel: number) => void] = useState(0)

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()  // prevent submitting default/empty form
        const request = await axios.post('http://localhost:9000/pet', { name: name, focusLevel: tirednessLevel })
    }

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const tempName = event.target.value;
        setName(tempName);
    }

    const handleTirednessLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const tempTirednessLevel = parseInt(event.target.value);
        setTirednessLevel(tempTirednessLevel);
    }

    return (
        <div className="addPets">
            <div className='form'>
                <h1>Create a New Pet</h1>
                <div className='formContent'>
                    <h3>Name</h3>
                    <input onChange={handleNameChange}></input>
                    <h3>Tiredness Level</h3>
                    <input onChange={handleTirednessLevelChange}></input>
                </div>
                <div className='formButtons'>
                    <Link to='/pets'>
                        <button id='cancelButton'>Back</button>
                    </Link>
                    <button id='createButton' onClick={handleSubmit}>Create</button>
                </div>
            </div>
        </div>
    )
}

export default AddPets