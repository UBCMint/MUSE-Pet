import React from 'react'
import { Link } from 'react-router-dom'
import './Pet.css'

const Pet: React.FC<{}> = () => {
    return (
    <div className="main">
        <h1>MINT Tamagochis</h1>
        <Link to='/pets'>
            <button>Get Started</button>
        </Link>
    </div>
    )
}

export default Pet