import { Link } from 'react-router-dom';
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Navlink from './Navlink';

function MyNavbar({ logout, authed }) {
  return (
    <Navbar bg="light" className="shadow d-flex" sticky="top" expand="md">
      <Container>
        <Navbar.Brand>
          <Link to="/home" className="text-decoration-none text-dark">
            <h4>Notes App</h4>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse style={{ marginRight: '20px' }} id="basic-navbar-nav">
          <Navlink authed={authed} logout={logout} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
