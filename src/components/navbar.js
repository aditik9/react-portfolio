/*function Navbar(){
    return(
        <div class="navigation-bar">
            <nav id="navigation" class="navbar fixed-top navbar-expand-xl navbar-dark py-3 px-5" style={{backgroundColor: '#0E141B'}}>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item pe-3">
                        <a class="nav-link" href="#home">Home</a>
                    </li>
                    <li class="nav-item pe-3">
                        <a class="nav-link" href="#skills">Skills</a>
                    </li>
                    <li class="nav-item pe-3">
                        <a class="nav-link" href="#experience">Experience</a>
                    </li>
                    <li class="nav-item pe-3">
                        <a class="nav-link" href="#projects">Projects</a>
                    </li>
                    <li class="nav-item">
                        <button class="btn btn-outline-light" type="submit">Resume</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar
*/
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavBar() {
  return (
    <div class="nav">
      {['xl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar fixed-top navbar-expand-xl navbar-dark py-3 mb-3" style={{backgroundColor: '#0E141B'}}>
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{backgroundColor: '#0E141B'}}
            >
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#skills">Skills</Nav.Link>
                  <Nav.Link href="#experience">Experience</Nav.Link>
                  <Nav.Link href="#projects">Projects</Nav.Link>
                  <NavDropdown
                    title="Others"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                        <NavDropdown.Item  href="#events">Events</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
                  </NavDropdown>
                  <Button variant="outline-light">Resume</Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default NavBar;