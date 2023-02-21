import React, { useState, useEffect } from 'react'
import PetNavBar from '../../NavBar/NavBar'
import './Pets.css'

const PetAnimations: React.FC<{}> = () => {

    const handlePrevClick = () => {
        
    }

    const handleNextClick = () => {
        
    }

    return (
        <div className="petAnimations">
            <PetNavBar />
            <div id="sprite"></div>
            <div>
                <button id="prev-row" onClick={handlePrevClick}>Previous Row</button>
                <button id="next-row" onClick={handleNextClick}>Next Row</button>
            </div>  
        </div>
    )
}

export default PetAnimations