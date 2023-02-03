import { Link } from 'react-router-dom'
import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Navlink from './Navlink';

function MyNavbar() {

  return (
    <Navbar bg="light" className="shadow d-flex" sticky="top">
      <Container>
        <Navbar.Brand>
          <Link to="/home" className='text-decoration-none text-dark'>
            <h4>Notes App</h4>
          </Link>
        </Navbar.Brand>
        <Navbar.Collapse style={{ marginRight: '20px' }}>
          <Navlink />
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default MyNavbar;
