import React from 'react'
import { Link } from 'react-router-dom'
import './AddPets.css'

const AddPets: React.FC<{}> = () => {
    return (
    <div className="addPets">
        <div className='createForm'>
            <h1>Create a New Pet</h1>
            <h3>Name</h3>
            <input></input>
            <h3>Tiredness Level</h3>
            <input></input>
            <div className='formButtons'>
                <Link to='/pets'>
                    <button id='cancelButton'>Get Started</button>
                </Link>
                <button id='createButton'>Create</button>
            </div>
        </div>
    </div>
    )
}

export default AddPets