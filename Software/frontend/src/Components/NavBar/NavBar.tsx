import { useState, useEffect } from 'react'
import axios from 'axios'
import PetListModel from '../../Models/PetListModel';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const PetNavBar: React.FC<{}> = () => {
    const defaultPets: PetListModel[] = [];
    const [pets, setPets]: [PetListModel[], (pets: PetListModel[]) => void] = useState(defaultPets)

    const getPets = async () => {
        const response = await axios.get<PetListModel[]>('http://localhost:9000/pet')
        setPets(response.data)
        localStorage.setItem('pets', JSON.stringify(response.data))  // save to local storage
    }
    
    useEffect(() => {
        getPets()
    }, [])

    return (
        <Navbar bg="grey" expand="lg">
            <Container fluid>
                <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
                    <Navbar.Brand
                        style={{ color: 'white' }}
                    >Hello {
                            JSON.parse(localStorage.getItem('pets') || '[]')[0]?.name
                        } 👋
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        {/* <Nav.Link as={Link} to="/profile" style={{ color: 'grey'}}>Profile</Nav.Link> */}
                        <Nav.Link as={Link} to="/pets" style={{ color: 'grey'}}>My Pets</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                        <img
                            src='/images/mintLogoTransparent.png'
                            alt="Mint Logo"
                            width="35"
                            height="35"
                            className='d-inline-block align-middle'
                            style={{ marginLeft: '10px' }}
                        />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default PetNavBar