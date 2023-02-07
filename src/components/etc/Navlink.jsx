import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdDarkMode } from 'react-icons/md';
import { RiEnglishInput } from 'react-icons/ri';

function Navlink({ authed, logout }) {
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
          <Button variant="link" className="text-decoration-none text-black">
            <RiEnglishInput size={20} />
          </Button>
        </Nav>
      </>
    );
  }

  return (
    <>
      <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
        <Link className="text-decoration-none text-black m-2" to="/">
          {/* <FiHome size={20} /> */}
          Notes
        </Link>
        <Link className="text-decoration-none text-black m-2" to="/archived">
          {/* <FiPlusCircle size={20} /> */}
          Archived
        </Link>
        <Link className="text-decoration-none text-black m-2" to="/add">
          {/* <BiArchive size={20} /> */}
          Add
        </Link>
      </Nav>
      <Nav className="d-flex">
        <Button variant="link" className="text-decoration-none text-black">
          <MdDarkMode size={20} />
        </Button>
        <Button variant="link" className="text-decoration-none text-black">
          <RiEnglishInput size={20} />
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

export default Navlink;
