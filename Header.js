import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Link to={''}style={{textDecoration:'none'}}><Navbar.Brand href="#home"style={{fontSize:40}}>EMS</Navbar.Brand></Link>  
          <Nav className="mr-auto">
          <Link to={''}style={{textDecoration:'none'}}><Nav.Link href="#home">Home</Nav.Link></Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header