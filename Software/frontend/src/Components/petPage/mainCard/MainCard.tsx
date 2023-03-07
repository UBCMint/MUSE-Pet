import { MDBCard } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/esm/Button';
import EditModal from '../editModal/EditModal';
import { FiEdit2 } from 'react-icons/fi';
import './MainCard.css'
import { useState } from 'react';

const MainCard = (props: {
    name: string;
    focusLevel: number;
    isDead: boolean;
    handleShow: () => void;
    showModal: boolean;
    toggleModal: () => void;
    changePetData: (name: string, status: boolean) => void;
}) => {

    const [petFocusLevel, setPetFocusLevel] = useState<number>(1);
    const [petFocusLevelString, setPetFocusLevelString] = useState<string>('first');
    const [recordingInProgress, setRecordingInProgress] = useState<boolean>(false);
    let animationSet = 1;

    function playAnimations(animationSet: number) {
      let duration = 3000; 
      let endTime = new Date().getTime() + duration;
      
      while (new Date().getTime() < endTime) {
        switch(animationSet) {
          case 1:
            first.classList.toggle('step1');
            first.classList.toggle('step2');
            break;
          case 2:
            second.classList.toggle('step1');
            second.classList.toggle('step2');
            second.classList.toggle('step3');
            break;
          case 3:
            third.classList.toggle('step1');
            third.classList.toggle('step2');
            third.classList.toggle('step3');
            third.classList.toggle('step4');
            break;
          case 4:
            fourth.classList.toggle('step1');
            fourth.classList.toggle('step2');
            fourth.classList.toggle('step3');
            fourth.classList.toggle('step4');
            break;
          case 5:
            fifth.classList.toggle('step1');
            fifth.classList.toggle('step2');
            fifth.classList.toggle('step3');
            break;
          case 6:
            sixth.classList.toggle('step1');
            break;
          case 7:
            seventh.classList.toggle('step1');
            seventh.classList.toggle('step2');
            seventh.classList.toggle('step3');
            break;
          default:
            break;
        }
      }
      
      // stop animation if state changes and play new set
      if (animationSet !== currentAnimationSet) {
        clearTimeout(animationTimeout);
        playAnimations(currentAnimationSet);
      } else {
        // reset duration
        animationTimeout = setTimeout(() => {
          playAnimations(animationSet);
        }, duration);
      }
    }
    
    // playAnimations(animationSet);

    return (
        <MDBCard className="mb-4">
        <div className="text-center">
            {/* // this where the pet animation will go
                will this be saved to the database?
                or will it be a random animation that the user can select from?
             */}
            <div className={'sprite'  }></div>
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