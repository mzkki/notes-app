import { Link } from 'react-router-dom'
import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Navlink from './NavLink';

function MyNavbar() {

  return (
    <Navbar bg="light" className="shadow" sticky="top">
      <Container>
        <Navbar.Brand>
          <Link to="/" className='text-decoration-none text-dark'>
            <h4>Notes App</h4>
          </Link>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end" style={{ marginRight: '20px' }}>
          <Navlink />
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default MyNavbar;