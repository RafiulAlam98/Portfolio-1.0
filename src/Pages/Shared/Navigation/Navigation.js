
import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
;

const Navigation = () => {
     return (
          <>
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container >
                      
                              <h2 className="text-white">Rafiul Alam</h2>
                              
                              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                              <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="me-auto">
                                   <Nav.Link as={HashLink} to='/home'>Home</Nav.Link>                         
                                   <Nav.Link as={HashLink} to='/about'>About Me</Nav.Link>                         
                                   <Nav.Link as={HashLink} to='/blogs'>Blogs</Nav.Link>                         
                                   <Nav.Link as={HashLink} to='/projects'>Projects</Nav.Link>                         
                              </Nav>
                              </Navbar.Collapse>
                       
                    </Container>
               </Navbar>
          </>
     );
};

export default Navigation;