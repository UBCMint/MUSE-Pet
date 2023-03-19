import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExitModal from './ExitModal';

export const PetNavBar: React.FC<{}> = () => {

    const [showExitModal, setShowExitModal] = useState<boolean>(false);
    const toggleExitModal = () => setShowExitModal(!showExitModal);

    return (
        <><ExitModal 
        isOpen={showExitModal} 
        toggle={() => toggleExitModal()} 
        /><Navbar bg="grey" expand="lg">
            <Container fluid>
                <Link to="/pets" style={{ color: 'black', textDecoration: 'none' }}>
                    <Navbar.Brand
                        style={{ color: 'white' }}
                    >Hello {localStorage.getItem('token')} 👋
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/pets" style={{ color: 'grey' }}>My Pets</Nav.Link>
                        <Nav.Link onClick={() => toggleExitModal()} style={{ color: 'grey' }}>Sign Out</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search" />
                        <Button variant="outline-success">Search</Button>
                        <img
                            src='/images/mintLogoTransparent.png'
                            alt="Mint Logo"
                            width="35"
                            height="35"
                            className='d-inline-block align-middle'
                            style={{ marginLeft: '10px' }} />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar></>
    )
}

export default PetNavBar