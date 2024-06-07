import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';  
function Navbar1() {  
  return (  
    <Navbar bg="black" expand="md">  
    <Container>  
      <Navbar.Brand href="/">Blood Bank</Navbar.Brand>  
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
      <Navbar.Collapse id="basic-navbar-nav">  
        <Nav className="me-auto">  
          <Nav.Link href="/" className='text-white'>Home</Nav.Link>  
          <Nav.Link href="/signup" className='text-white'>Signup</Nav.Link>  
          <Nav.Link href="/login" className='text-white'>Login</Nav.Link>  
          <Nav.Link href="/logout" className='text-white'>Logout</Nav.Link>  
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">  
            <NavDropdown.Item href="#action/3.1">Dropdown Item 1</NavDropdown.Item>  
            <NavDropdown.Item href="#action/3.2">Dropdown Item 2</NavDropdown.Item>  
            <NavDropdown.Item href="#action/3.3">Dropdown Item 3</NavDropdown.Item>  
            <NavDropdown.Divider />  
            <NavDropdown.Item href="#action/3.4">Another Item</NavDropdown.Item>  
          </NavDropdown>  
        </Nav>  
      </Navbar.Collapse>  
    </Container>  
  </Navbar>  
  );  
}  
export default Navbar1;  