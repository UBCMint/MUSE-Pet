import React, { useState } from 'react'
import PetAnimations from '../petAnimations/petAnimations'
import './PetDetails.css'

const PetDetails: React.FC<{}> = () => {
    return (
        <PetAnimations />
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