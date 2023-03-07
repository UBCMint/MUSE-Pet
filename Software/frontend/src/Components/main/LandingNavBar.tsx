import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub } from 'react-icons/fa';


export const LandingNavBar: React.FC<{}> = () => {

    return (
        <Navbar bg="grey" expand="lg" >
            <Container fluid>
                <Nav.Link as={Link} to="/" style={{ color: 'black', textDecoration: 'none' }}>
                    <Navbar.Brand>
                        <img 
                        src='/images/mintLogoTransparent.png'
                        alt="Mint Logo"
                        width="35"
                        height="35"
                        className='d-inline-block align-middle'
                        style={{ marginLeft: '10px' }}
                    />
                    </Navbar.Brand>
                </Nav.Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ml-right my-2 my-lg-0"
                        style={{ maxHeight: '100px', marginLeft: 'auto' }}
                        navbarScroll
                    >
                        <Nav.Link href='https://ubcmint.github.io/' style={{ color: 'grey'}}>UBC MINT</Nav.Link>                        
                        <Nav.Link href='https://github.com/UBCMint/MUSE-Pet' style={{ color: 'grey'}}>GitHub<FaGithub/>                     </Nav.Link>
                        <Nav.Link as={Link} to="/login"
                            style={{ color: 'grey' }}
                        >Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default LandingNavBar