import { MDBCard } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/esm/Button';
import EditModal from '../editModal/EditModal';
import { FiEdit2 } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import './MainCard.css'

const MainCard = (props: {
    name: string;
    focusLevel: number;
    isDead: boolean;
    showModal: boolean;
    toggleModal: () => void;
    handleShow: () => void;
    changePetData: (name: string, status: boolean) => void;
}) => {
    var currentAnimationFrame = 1;

    useEffect(() => {
        const totalAnimationFrames = getTotalFrames(props.focusLevel)
        const t = setInterval(toggleAnimationFrames, 500, totalAnimationFrames);
    }, [])
    
    const toggleAnimationFrames = (totalFrames: number): void => {
        if (currentAnimationFrame < totalFrames) {
            currentAnimationFrame = currentAnimationFrame + 1
        } else {
            currentAnimationFrame = 1
        }
    }

    const getTotalFrames = (focusLevel: number): number => {
        let totalFrames = 0;

        switch(focusLevel) {
            case 1:
                totalFrames = 2;
                break;
            case 5:
                totalFrames = 3;
                break;
            default:
                totalFrames = 4;
                break;
        }

        return totalFrames;
    }

    return (
        <MDBCard className="mb-4">
            <div className="mainCard">
                <div className={`sprite focusLevel${props.focusLevel} step${currentAnimationFrame}`}></div>
                <div className="d-flex justify-content-center mt-2 mb-2">
                    <Button className="edit-btn" variant='info'
                        style={{ position: 'absolute', top: '10px', right: '10px' }}
                        onClick={props.handleShow}>
                        <FiEdit2 />
                    </Button>
                    <EditModal
                        isOpen={props.showModal}
                        toggle={props.toggleModal}
                        changePetData={props.changePetData}
                    />
                </div>
            </div>
        </MDBCard>
    )
}

export default MainCard