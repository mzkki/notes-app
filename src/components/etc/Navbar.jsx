import { Link } from 'react-router-dom';
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Navlink from './Navlink';
import PropTypes, { string } from 'prop-types';
import LocaleContext from '../../context/LocaleContext';
import ModeContext from '../../context/ModeContext';

function MyNavbar({ logout, authed }) {
  const { locale } = React.useContext(LocaleContext);
  const { mode } = React.useContext(ModeContext);

  return (
    <Navbar
      bg={mode === 'light' ? 'light' : 'dark'}
      className="shadow d-flex"
      sticky="top"
      expand="md"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none text-dark">
            <h4>{locale === 'id' ? 'Aplikasi Catatan' : 'Notes App'}</h4>
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
