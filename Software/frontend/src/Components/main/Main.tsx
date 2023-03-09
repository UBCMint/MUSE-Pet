import React from 'react'
import { Link } from 'react-router-dom'
import './Main.css'
import './Wave.css'
import Button from 'react-bootstrap/esm/Button'
import { LandingNavBar } from '../main/LandingNavBar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FcHeadset } from 'react-icons/fc';
import { FaBrain } from 'react-icons/fa';
import { GoGraph } from 'react-icons/go';
import { FaGithub, FaInstagram, FaYoutube} from 'react-icons/fa'

const Main: React.FC<{}> = () => {
    return (
        <>
            <LandingNavBar />
            <body>
                <header className="masthead">
                    <div className="main">
                        <h1>Muse Pet</h1>
                        <h2>UBC Multifaceted Innovation in NeuroTechnology
                            <br />
                            <a href='https://github.com/UBCMint/MUSE-Pet' className='text-white'><FaGithub /></a>
                            <span>  </span>
                            <a href="https://www.instagram.com/ubcmint/?hl=en" className='text-primary'><FaInstagram/></a>
                            <span>  </span>
                            <a href="https://www.youtube.com/@mintubc1309" className='text-danger'><FaYoutube/></a>
                        </h2>
                        <Link to='/login'>
                            <Button id='mainButton' variant='info'>Start</Button>
                        </Link>
                    </div>
                </header>
                <div className='bottom'>
                    <Container className="features-icons text-center">
                        <Row className='Row'>
                            <div className="col-lg-4">
                                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3 text-white">
                                    <div className="features-icons-icon d-flex"><i className="bi-window m-auto text-danger">
                                        <FaBrain />
                                    </i></div>
                                    <h3>Brain Signals</h3>
                                    <p className="lead mb-0 text-dark">Get instant feedback from your Pet's brain.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3 text-white">
                                    <div className="features-icons-icon d-flex"><i className="bi-layers m-auto text-primary">
                                        <FcHeadset />
                                    </i></div>
                                    <h3>EEG Compatible</h3>
                                    <p className="lead mb-0 text-dark">Featuring Compatible with the latest EEG technology.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="features-icons-item mx-auto mb-0 mb-lg-3 text-white">
                                    <div className="features-icons-icon d-flex">
                                        <i className="bi-terminal m-auto text-success">
                                            <GoGraph />
                                        </i></div>
                                    <h3>Analyze Progress</h3>
                                    <p className="lead mb-0 text-dark">Track Alpha, Beta and Gamma Signals.</p>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </div>
            </body>
            <footer>
                <div className="waves">
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave4"></div>
                </div>
            </footer>
        </>
    )
}

export default Main

