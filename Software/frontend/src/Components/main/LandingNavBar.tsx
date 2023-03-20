import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export const LandingNavBar: React.FC<{}> = () => {
  return (
    <Navbar bg="grey" expand="lg">
      <Container fluid>
        <Nav.Link
          href="https://ubcmint.github.io/index.html"
          style={{ color: "black", textDecoration: "none" }}
        >
          <Navbar.Brand>
            <img
              src="/images/mintLogoTransparent.png"
              alt="Mint Logo"
              width="35"
              height="35"
              className="d-inline-block align-middle"
              style={{ marginLeft: "5px" }}
            />
          </Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto my-2 my-lg-0 gap-3 px-2"
            style={{ marginLeft: "auto" }}
            navbarScroll
          >
            <Nav.Link
              href="https://ubcmint.github.io/about.html"
              style={{ color: "grey" }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="https://github.com/UBCMint/MUSE-Pet"
              style={{ color: "grey" }}
            >
              Code
            </Nav.Link>
            <Link to="/login">
              <Button
                style={{
                  marginTop: "1px",
                }}
              >
                Sign In
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default LandingNavBar;
