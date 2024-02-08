import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/esm/NavLink';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import kapejan_logo from '../resources/kapejan_logo_smol.png';
import about_icon_smol from '../resources/about_icon_smol.png';
import menu_icon_smol from '../resources/menu_icon_smol.png';

import 'bootstrap/dist/css/bootstrap.min.css';

function HomeNavBar() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/"><Image src={kapejan_logo} alt="Logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
                <Nav.Link href="#menu">
                  <Image fluid src={menu_icon_smol} alt="Menu" />
                </Nav.Link>
                <Nav.Link href="#link">
                  <Image src={about_icon_smol} alt="about-us" />
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default HomeNavBar;