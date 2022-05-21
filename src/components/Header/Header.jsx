import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import NavLinkWrapper from '../utils/NavLinkWrapper';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header(props) {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/" className="logo__link">
                        Azeno
                    </Link>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <NavLinkWrapper to="/train">Train</NavLinkWrapper>
                    <NavLinkWrapper to="/profile">Profile</NavLinkWrapper>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
