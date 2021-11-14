import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const navbar = (props) => (
    <Navbar className="rounded" expand="lg" bg="info" variant="light">
        <Navbar.Brand className="border border-4 rounded-pill fw-bold p-2">P-Orientales</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto fw-bold fs-4">
                <LinkContainer exact to="/">
                    <Nav.Link>Accueil</Nav.Link>                    
                </LinkContainer>
            </Nav>
            <Nav className="fw-bold fs-5">
                <LinkContainer exact to="/localisation">
                    <Nav.Link>Localisation</Nav.Link>                    
                </LinkContainer>
                <LinkContainer exact to="/contact">
                    <Nav.Link>Contact</Nav.Link>                    
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default navbar;