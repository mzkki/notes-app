import { Link } from 'react-router-dom';
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Navlink from './Navlink';
import PropTypes, { string } from 'prop-types';

function MyNavbar({ logout, authed }) {
  return (
    <Navbar bg="light" className="shadow d-flex" sticky="top" expand="md">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none text-dark">
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

MyNavbar.propTypes = {
  logout: PropTypes.func,
  authed: PropTypes.objectOf(string),
};

export default MyNavbar;
