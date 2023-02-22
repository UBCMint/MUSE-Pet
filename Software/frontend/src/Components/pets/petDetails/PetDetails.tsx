import React, { useState } from 'react'
import PetNavBar from '../../NavBar/NavBar'
import PetAnimations from '../petAnimations/petAnimations'
import './PetDetails.css'

const PetDetails: React.FC<{}> = () => {
    return (
        <div className='petDetails'>
            <PetNavBar />
            <PetAnimations />
        </div>
    )
}

enum PetStates {
    ExtremelyFocused = 5,
    Focused = 4,
    Neutral = 3,
    Relaxed = 2,
    ExtremelyRelaxed = 1
}

export default PetDetails