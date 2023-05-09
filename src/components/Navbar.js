import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './styles.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'react-bootstrap';

function Navbarcomponent() {
  const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav id='userName' >
            {
              isAuthenticated && <h4>Welcome {user.nickname}</h4>
            }
          </Nav>
          <Nav>
            {
              isAuthenticated?(
                
                <button className='log-Btn' style={{Color:"#8a2be2"}} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    <span>Log Out</span>
               </button>
          
              ):(
              <button className='log-Btn' onClick={() => loginWithRedirect()}><span>Log In</span></button>
              )
            }    
          </Nav>
        </Navbar.Collapse>w
      </Container>
    </Navbar>
  );
}

export default Navbarcomponent;