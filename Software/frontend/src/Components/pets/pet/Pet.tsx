import React from 'react'
import { Link } from 'react-router-dom'
import './Pet.css'
import PetListModel from '../../../Models/PetListModel'

const Pet: React.FC<PetListModel> = (props) => {
    return (
    <div className="pet">
        <Link to='/pet' style={{ textDecoration: 'none' }}>
            <h2>{props.name}</h2>
        </Link>
        <div className='focusLevel'>
            <h5>Focus Level: {props.focusLevel}</h5>
            <progress value={props.focusLevel} max="100"></progress>
        </div>
    </div>
    )
}

export default Pet