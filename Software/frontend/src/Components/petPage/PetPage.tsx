import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import PetModel from '../../Models/PetModel';
import PetNavBar from '../navBar/NavBar';
import './PetPage.css'
import Button from 'react-bootstrap/Button';
// import {format, toDate} from 'date-fns';
import { BrainChart } from './charts/BrainChart';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';

const PetPage: React.FC<PetModel> = () => {

    const location = useLocation();
    const [pet, setPets] = useState<PetModel>(location.state);
    const [isDead, setIsDead] = useState<boolean>(pet.isDead);
    const [isSick, setIsSick] = useState<boolean>(pet.isSick);
    const [happinessLevel, setHappinessLevel] = useState<number>(pet.happinessLevel);
    const [focusLevel, setFocusLevel] = useState<number>(pet.focusLevel);
    const [birthDate, setBirthDate] = useState<string>(pet.birthDate);
    const [name, setName] = useState<string>(pet.name);

    const stringToDate = (dateString: string) => {
        // dateString is in the format of YYYY-MM-DDT09:12:38.005Z 
        const dateArray = dateString.split('-');
        const year = parseInt(dateArray[0]);
        const month = parseInt(dateArray[1]) - 1;
        const day = parseInt(dateArray[2]);
        return new Date(year, month, day);
    }

    return (
        <section style={{ backgroundColor: '#eee' }}>
            <PetNavBar />
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol>
                        <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                            <MDBBreadcrumbItem>
                                <Link to="/" style={{ color: '#32cec6' }}>Home</Link>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem>
                                <Link to="/pets" style={{ color: '#32cec6' }}>Pets</Link>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem active>{name}</MDBBreadcrumbItem>
                        </MDBBreadcrumb>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol lg="4">
                        <MDBCard className="mb-4">
                            <div className="text-center">
                                {/* // this where the pet animation will go
                                    will this be saved to the database?
                                    or will it be a random animation that the user can select from?
                                 */}
                                <img
                                    src="https://airnfts.s3.amazonaws.com/nft-images/20210623/Animal_Art_PandaNFT_1624459776108.png"
                                    alt="avatar"
                                    className="rounded-circle"
                                    style={{
                                        width: '250px',
                                        marginTop: '30px',
                                        border: isDead ? '3px solid red' : '3px solid rgb(36, 203, 56)'
                                    }}
                                />
                                <div className="d-flex justify-content-center mt-2 mb-2">
                                    <Button className="edit-btn" variant='info'>Edit</Button>
                                </div>
                            </div>
                        </MDBCard>

                    </MDBCol>

                    <MDBCol lg="8">
                        <MDBCard className="mb-4">
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Pet Name</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{name}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Age</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{
                                            Math.floor((new Date().getTime() - stringToDate(birthDate).getTime()) / 1000 / 60 / 60 / 24 / 365)
                                        }</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Birthday</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{
                                            stringToDate(birthDate).toLocaleDateString()
                                        }</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Status</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{
                                            isDead ? 'Dead' : 'Alive'
                                        }</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBRow>
                            <MDBCol md="6">
                                <MDBCard className="mb-4 mb-md-0">
                                    <MDBCardBody>
                                        <MDBCardText className="mb-4">Pet Status</MDBCardText>
                                        <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Focus</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={focusLevel} valuemin={0} valuemax={100} />
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Happiness</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={happinessLevel} valuemin={0} valuemax={100} />
                                        </MDBProgress>
                                    </MDBCardBody>
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