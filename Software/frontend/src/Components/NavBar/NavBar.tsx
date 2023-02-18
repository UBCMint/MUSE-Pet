import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const PetNavBar = () => {
    return (
        <Navbar bg="grey" expand="lg">
            <Container fluid>
                <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
                    <Navbar.Brand
                        style={{ color: 'white' }}
                    >Hello Mint{
                            // name of user goes here, to be passed in as a prop
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
                        <Link to="/profile" style={{
                            color: 'white', textDecoration: 'none'
                        }}>Profile</Link>
                        <Link to="/pets" style={{
                            color: 'white', textDecoration: 'none'
                        }}>Pets</Link>
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
    );
};