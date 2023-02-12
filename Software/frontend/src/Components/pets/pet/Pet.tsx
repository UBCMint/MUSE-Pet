import React from 'react'
import { Link } from 'react-router-dom'
import './Pet.css'

const Pet: React.FC<{}> = () => {
    return (
    <div className="pet">
        <Link to='/pet' style={{ textDecoration: 'none' }}>
            <h2>Tamagochi</h2>
        </Link>
        <progress value="10" max="50"></progress>
    </div>
    )
}

export default Pet