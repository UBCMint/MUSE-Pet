import React, { useState, useEffect } from 'react'
import PetNavBar from '../../NavBar/NavBar'
import './PetAnimations.css'

const PetAnimations: React.FC<{}> = () => {
    const [petState, setPetState]: [number, (petState: number) => void] = useState(3)

    const handlePrevClick = () => {
        if (petState > 1) {
            setPetState(petState - 1)
        }
    }

    const handleNextClick = () => {
        if (petState < 5) {
            setPetState(petState + 1)
        }
    }

    return (
        <div className="petAnimations">
            <div id="sprite" style={{ animation: `playRow${petState} 3s steps(4) infinite` }}></div>
            <div>
                <button id="prev-row" onClick={handlePrevClick}>Previous Row</button>
                <button id="next-row" onClick={handleNextClick}>Next Row</button>
            </div>  
        </div>
    )
}

export default PetAnimations