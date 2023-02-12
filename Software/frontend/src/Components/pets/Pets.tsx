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
            {pets.map((pet, index) => {
                return <h1>r</h1>
            })}
        </div>
    )
}

export default Pets