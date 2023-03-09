import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import PetModel from '../../Models/PetModel';
import PetNavBar from '../navBar/NavBar';
import PetInfo from './petInfo/PetInfo';
import './PetPage.css'
import { BrainChart } from './charts/BrainChart';
import { StatusChart } from './charts/StatusChart';
import MainCard from './mainCard/MainCard';
import BrainData from '../../Models/BrainData';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
} from 'mdb-react-ui-kit';

const PetPage: React.FC<PetModel> = () => {
    const location = useLocation();
    const [recordingInProgress, setRecordingInProgress] = useState<boolean>(false);
    const [recordingButtonText, setRecordingButtonText] = useState<string>("start");
    const [intervalId, setIntervalId] = useState<number>(-1);
    const [pet, setPets] = useState<PetModel>(location.state as PetModel);
    const [brainData, setBrainData] = useState<BrainData>(location.state as BrainData);
    const [isDead, setIsDead] = useState<boolean>(pet.isDead);
    const [happinessLevel, setHappinessLevel] = useState<number>(pet.happinessLevel);
    const [tirednessLevel, setTirednessLevel] = useState<number>(pet.tirednessLevel);
    const [focusLevel, setFocusLevel] = useState<number>(pet.focusLevel);
    const [birthDate, setBirthDate] = useState<Date>(pet.birthDate);
    const [name, setName] = useState<string>(pet.name);
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const toggleModal = () => setShowModal(!showModal);

    const changePetData = async (name: string, status: boolean) => {
        await axios.patch(`http://localhost:9000/pet/${pet._id}`, 
        { name: name, isDead: status })
        setName(name)
        setIsDead(status)
        setPets({ ...pet, name: name, isDead: status })
    }

    const changeRecordingState = () => {
        setRecordingInProgress(!recordingInProgress)

        if (recordingInProgress) {
            clearInterval(intervalId)
            setRecordingButtonText("start")
        } else {
            const recordingInterval = setInterval(getBrainData, 2000)
            setIntervalId(recordingInterval)
            setRecordingButtonText("stop")
        }
    }

    const getBrainData = async (intervalId: number) => {
        const response = await axios.get<BrainData>('http://localhost:9000/brainData')
        setBrainData(response.data)

        if (brainData.focusLevel < 3 && tirednessLevel > 0) {
            if (brainData.focusLevel === 1) {
                setTirednessLevel(tirednessLevel - 0.2)
            } else {
                setTirednessLevel(tirednessLevel - 0.1)
            }
            setHappinessLevel(5 - tirednessLevel)
        } else if (brainData.focusLevel >= 3 && tirednessLevel < 5) {
            if (brainData.focusLevel === 3) {
                setTirednessLevel(tirednessLevel + 0.05)
            } else if (brainData.focusLevel === 4) {
                setTirednessLevel(tirednessLevel + 0.1)
            } else {
                setTirednessLevel(tirednessLevel + 0.2)
            }
            setHappinessLevel(5 - tirednessLevel)
        }
    }

    return (
        <section className='petPage'>
            <PetNavBar />
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="4">
                        <MainCard
                            name={name}
                            focusLevel={brainData.focusLevel}
                            isDead={isDead}
                            handleShow={handleShow}
                            showModal={showModal}
                            toggleModal={toggleModal}
                            changePetData={changePetData}
                        />
                        <button
                            id={recordingButtonText + 'Button'}
                            onClick={changeRecordingState}>
                            {recordingButtonText} recording
                        </button>
                    </MDBCol>
                    <MDBCol lg="8">
                        <PetInfo
                            name={name}
                            birthDate={birthDate}
                            isDead={isDead} 
                        />
                        <MDBRow>
                            <MDBCol md="6">
                                <MDBCard className="mb-4 mb-md-0">
                                    <MDBCardBody>
                                        <StatusChart
                                            focusLevel={brainData.focusLevel}
                                            tirednessLevel={tirednessLevel}
                                            happinessLevel={happinessLevel} 
                                        />
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>

                            <MDBCol md="6">
                                <MDBCard className="mb-4 mb-md-0">
                                    <MDBCardBody>
                                        <BrainChart {...brainData} />
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );

}

export default PetPage