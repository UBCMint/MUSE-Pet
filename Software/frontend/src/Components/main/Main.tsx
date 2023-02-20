import React from 'react'
import { Link } from 'react-router-dom'
import './Main.css'
import Button from 'react-bootstrap/esm/Button'

const Main: React.FC<{}> = () => {
    return (
    <div className="main">
        <h1>MINT Tamagochis</h1>
        <Link to='/pets'>
            <Button id='mainButton' variant='info'>Start</Button>
        </Link>
    </div>
    )
}

export default Main

