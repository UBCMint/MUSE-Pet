import React from 'react'
import { Link } from 'react-router-dom'
import './Pet.css'

const Pet: React.FC<{}> = () => {
    return (
    <div className="pet">
        <Link to='/pet' style={{ textDecoration: 'none' }}>
            <h2>Tamagochi</h2>
        </Link>
        <h5>Focus Level: {50}</h5>
        <progress value="50" max="100">10</progress>
    </div>
    )
}

export default Pet