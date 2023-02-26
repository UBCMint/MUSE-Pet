import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import PetModel from '../../Models/PetModel';
import PetNavBar from '../navBar/NavBar';
import PetInfo from './petInfo/PetInfo';
import './PetPage.css'
import { BrainChart } from './charts/BrainChart';
import { StatusChart } from './charts/StatusChart';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBProgress,
    MDBProgressBar
} from 'mdb-react-ui-kit';
import MainCard from './mainCard/MainCard';

const PetPage: React.FC<PetModel> = () => {

    const location = useLocation();
    const [pet, setPets] = useState<PetModel>(location.state); 
    const [isDead, setIsDead] = useState<boolean>(pet.isDead);
    const [isSick, setIsSick] = useState<boolean>(pet.isSick);
    const [happinessLevel, setHappinessLevel] = useState<number>(pet.happinessLevel);
    const [focusLevel, setFocusLevel] = useState<number>(pet.focusLevel);
    const [birthDate, setBirthDate] = useState<string>(pet.birthDate);
    const [name, setName] = useState<string>(pet.name);
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const toggleModal = () => setShowModal(!showModal);

    const changePetData = async (name: string, status: boolean) => {
        await axios.patch(`http://localhost:9000/pet/${pet._id}`, { name: name, isDead: status });
        setName(name);
        setIsDead(status);
        setPets({ ...pet, name: name, isDead: status });
    }

    return (
        <section style={{ backgroundColor: '#eee' }}>
            <PetNavBar />
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="4">
                        <MainCard
                            name={name}
                            isDead={isDead}
                            handleShow={handleShow}
                            showModal={showModal}
                            toggleModal={toggleModal}
                            changePetData={changePetData}
                        />
                    </MDBCol>
                    <MDBCol lg="8">
                        <PetInfo name={name} birthDate={birthDate} isDead={isDead} />
                        <MDBRow>
                            <MDBCol md="6">
                                <MDBCard className="mb-4 mb-md-0">
                                    <MDBCardBody>
                                        <StatusChart />
                                    </MDBCardBody>
                                    {/* <MDBCardBody>
                                        <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Focus</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={focusLevel} valuemin={0} valuemax={100} />
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Happiness</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={happinessLevel} valuemin={0} valuemax={100} />
                                        </MDBProgress>
                                    </MDBCardBody> */}
                                </MDBCard>
                            </MDBCol>

                            <MDBCol md="6">
                                <MDBCard className="mb-4 mb-md-0">
                                    <MDBCardBody>
                                        <BrainChart />
                                        
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