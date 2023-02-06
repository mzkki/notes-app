import { Link } from 'react-router-dom';
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Navlink from './Navlink';

function MyNavbar({ name, logout }) {
  return (
    <Navbar bg="light" className="shadow d-flex" sticky="top" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/home" className="text-decoration-none text-dark">
            <h4>Notes App</h4>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse style={{ marginRight: '20px' }} id="basic-navbar-nav">
          <Navlink name={name} logout={logout} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
