import React from 'react'
import { Link } from 'react-router-dom'
import './Main.css'

const Main: React.FC<{}> = () => {
    return (
    <div className="main">
        <h1>MINT Tamagochis</h1>
        <Link to='/pets'>
            <button>Get Started</button>
        </Link>
    </div>
    )
}

export default Main

