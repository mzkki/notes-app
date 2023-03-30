import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { HiLanguage } from 'react-icons/hi2';
import PropTypes, { string } from 'prop-types';
import LocaleContext from '../../context/LocaleContext';
import ModeContext from '../../context/ModeContext';
import Swal from 'sweetalert2';

function Navlink({ authed, logout }) {
  const { locale, toggleLocale } = React.useContext(LocaleContext);
  const { mode, toggleMode } = React.useContext(ModeContext);

  let inactiveClassName = `text-decoration-none ${
    mode === 'light' ? 'text-dark' : 'text-light'
  } m-2 text-muted`;
  let activeClassName = `text-decoration-none ${
    mode === 'light' ? 'text-dark' : 'text-light'
  } m-2 `;

  const html = document.querySelector('html');
  html.setAttribute('data-bs-theme', mode);

  function confirmLogout() {
    Swal.fire({
      title:
        locale === 'id' ? 'Yakin ingin keluar ? ' : 'Are you sure to logout ? ',
      text:
        locale === 'id'
          ? 'Kamu dapat masuk kembali nanti.'
          : 'You can log back in later.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: locale === 'id' ? 'Ya, Keluar!' : 'Yes, Log out!',
      cancelButtonText: locale === 'id' ? 'Tidak, Batalkan!' : 'No, cancel!',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        Swal.fire(
          locale === 'id' ? 'Berhasil Keluar' : 'Logged out!',
          locale === 'id'
            ? 'Kamu berhasil logout'
            : 'You have successfully logged out ',
          'success'
        );
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          locale === 'id' ? 'Dibatalkan' : 'Cancelled',
          locale === 'id' ? 'Kamu tidak jadi keluar!' : "You don't come out",
          'error'
        );
      }
    });
  }

  if (authed === null) {
    return (
      <>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
        ></Nav>
        <Nav className="d-flex">
          <Button
            variant="link"
            onClick={toggleMode}
            className="text-decoration-none text-black"
          >
            {mode === 'light' ? (
              <MdDarkMode size={20} color="black" />
            ) : (
              <MdLightMode size={20} color="white" />
            )}
          </Button>
          <Button
            variant="link"
            onClick={toggleLocale}
            className="text-decoration-none text-black"
          >
            <HiLanguage
              size={20}
              color={mode === 'light' ? 'black' : 'white'}
            />
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
        <Button
          variant="link"
          onClick={toggleMode}
          className="text-decoration-none text-black"
        >
          {mode === 'light' ? (
            <MdDarkMode size={20} />
          ) : (
            <MdLightMode size={20} color="white" />
          )}
        </Button>
        <Button
          variant="link"
          onClick={toggleLocale}
          className="text-decoration-none"
        >
          <HiLanguage size={20} color={mode === 'light' ? 'black' : 'white'} />
        </Button>
      </Nav>
      <Button
        variant="link"
        className={`text-decoration-none ${
          mode === 'light' ? 'text-dark' : 'text-light'
        } m-2`}
        onClick={confirmLogout}
      >
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
