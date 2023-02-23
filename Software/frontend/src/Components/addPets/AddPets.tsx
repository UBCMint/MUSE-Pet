import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { PetNavBar } from '../navBar/NavBar'
import './AddPets.css'

const AddPets: React.FC<{}> = () => {

    const navigate = useNavigate()

    const [name, setName]: [string, (name: string) => void] = useState("")

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()  // prevent submitting default/empty form
        const request = await axios.post('http://localhost:9000/pet', { name: name })
        console.log(request)    
        navigate('/pets')
    }

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const tempName = event.target.value;
        setName(tempName);
    }

    return (
        <div>
            <PetNavBar />
        <div className="addPets">
            <div className='form'>
                <h1>Create a New Pet</h1>
                <div className='formContent'>
                    <h3>Name</h3>
                    <input onChange={handleNameChange}></input>
                </div>
                <div className='formButtons'>
                    <Link to='/pets'>
                        <button id='cancelButton'>Back</button>
                    </Link>
                    <button id='createButton' onClick={handleSubmit}>Create</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AddPets