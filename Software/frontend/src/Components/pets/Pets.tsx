import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Pet from './pet/Pet'
import './Pets.css'

const Pets: React.FC<{}> = () => {
    const [pets, setPets] = useState([])

    const getPets = async () => {
        const response = await axios.get('http://localhost:9000/pet')
        setPets(response.data)
    }

    useEffect(() => {
        getPets()
    }, [])

    return (
        <div className="pets">
            <div className='header'>
                <h1>Tamagochis</h1>
                <button>+ Create Pet</button>
            </div>
            {pets.map((pet, index) => {
                return (
                    <Pet />
                )
            })}
        </div>
    )
}

export default Pets