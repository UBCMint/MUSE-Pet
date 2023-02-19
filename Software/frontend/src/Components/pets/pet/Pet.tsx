import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Pet.css'
import PetListModel from '../../../Models/PetListModel'
import Button from 'react-bootstrap/Button'
import { BsFillTrashFill } from 'react-icons/bs'

const Pet: React.FC<PetListModel> = (props) => {

    const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        console.log(props._id)
        await axios.delete('http://localhost:9000/pet/' + props._id)
    }

    return (
    <div className="pet">
        <Link to='/pet' style={{ textDecoration: 'none' }}>
            <h2>{props.name}</h2>
        </Link>
        <div className='focusLevel'>
            <h5>Focus Level: {props.focusLevel}</h5>
            <progress value={props.focusLevel} max="100"></progress>
        </div>
        <Button onClick={handleDelete} variant="danger"><BsFillTrashFill /></Button>
    </div>
    )
}

export default Pet