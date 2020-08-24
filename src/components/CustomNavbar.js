import React  from 'react'
import { Navbar, Nav } from 'react-bootstrap'
//import { Link, animateScroll as scroll } from "react-scroll";
//import logo from '../logo.svg';
import Scroll from 'react-scroll';




const CustomNavbar = () => {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'  >
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto smooth-scroll'>
            <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
              <Nav.Link href='/about' >About</Nav.Link>
              <Nav.Link href='/education'>Education</Nav.Link>
              <Nav.Link href='/skills'>Skills</Nav.Link>
              <Nav.Link href='/projects'>Projects</Nav.Link>

              
              
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  )

    
}

export default CustomNavbar;
