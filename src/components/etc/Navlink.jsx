import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { MdDarkMode } from 'react-icons/md';
import { HiLanguage } from 'react-icons/hi2';
import PropTypes, { string } from 'prop-types';
import LocaleContext from '../../context/LocaleContext';

function Navlink({ authed, logout }) {
  const { locale, toggleLocale } = React.useContext(LocaleContext);

  let inactiveClassName = 'text-decoration-none text-black m-2 text-muted';
  let activeClassName = 'text-decoration-none text-black m-2 ';

  if (authed === null) {
    return (
      <>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
        ></Nav>
        <Nav className="d-flex">
          <Button variant="link" className="text-decoration-none text-black">
            <MdDarkMode size={20} />
          </Button>
          <Button
            variant="link"
            onClick={toggleLocale}
            className="text-decoration-none text-black"
          >
            <HiLanguage size={20} />
          </Button>
        </Nav>
      </>
    );
  }

  return (
    <>
      <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
        <NavLink
          className={({ isActive }) =>
            isActive ? activeClassName : inactiveClassName
          }
          to="/"
        >
          {/* <FiHome size={20} /> */}
          {locale === 'id' ? 'Catatan' : 'Notes'}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? activeClassName : inactiveClassName
          }
          to="/archived"
        >
          {/* <FiPlusCircle size={20} /> */}
          {locale === 'id' ? 'Terarsip' : 'Archived'}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? activeClassName : inactiveClassName
          }
          to="/add"
        >
          {/* <BiArchive size={20} /> */}
          {locale === 'id' ? 'Tambah Catatan' : 'Add Note'}
        </NavLink>
      </Nav>
      <Nav className="d-flex">
        <Button variant="link" className="text-decoration-none text-black">
          <MdDarkMode size={20} />
        </Button>
        <Button
          variant="link"
          onClick={toggleLocale}
          className="text-decoration-none text-black"
        >
          <HiLanguage size={20} />
        </Button>
      </Nav>
      <Button
        variant="link"
        className="text-decoration-none text-black m-2"
        onClick={logout}
      >
        {/* <BiArchive size={20} /> */}
        {authed.name}
      </Button>
    </>
  );
}

Navlink.propTypes = {
  authed: PropTypes.objectOf(string),
  logout: PropTypes.func,
};

export default Navlink;
