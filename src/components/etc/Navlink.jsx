import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { MdDarkMode } from 'react-icons/md';
import { HiLanguage } from 'react-icons/hi2';
import PropTypes, { string } from 'prop-types';
import LocaleContext from '../../context/LocaleContext';
import Swal from 'sweetalert2';

function Navlink({ authed, logout }) {
  const { locale, toggleLocale } = React.useContext(LocaleContext);

  let inactiveClassName = 'text-decoration-none text-black m-2 text-muted';
  let activeClassName = 'text-decoration-none text-black m-2 ';

  function confirmLogout() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: true,
    });

    swalWithBootstrapButtons
      .fire({
        title:
          locale === 'id'
            ? 'Yakin ingin keluar ? '
            : 'Are you sure to logout ? ',
        text:
          locale === 'id'
            ? 'Kamu dapat masuk kembali nanti.'
            : 'You can log back in later.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: locale === 'id' ? 'Ya, Keluar!' : 'Yes, Log out!',
        cancelButtonText: locale === 'id' ? 'Tidak, Batalkan!' : 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          logout();
          swalWithBootstrapButtons.fire(
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
          swalWithBootstrapButtons.fire(
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
        onClick={confirmLogout}
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
