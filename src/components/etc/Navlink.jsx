import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { MdDarkMode } from 'react-icons/md';
import { RiEnglishInput } from 'react-icons/ri';

function Navlink({ name, logout }) {
  const currentPath = useLocation().pathname;

  if (currentPath === '/' || currentPath === '/register') {
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
        <Link className="text-decoration-none text-black m-2" to="/home">
          {/* <FiHome size={20} /> */}
          Home
        </Link>
        <Link className="text-decoration-none text-black m-2" to="/archived">
          {/* <FiPlusCircle size={20} /> */}
          Archived
        </Link>
        <Link className="text-decoration-none text-black m-2" to="/add">
          {/* <BiArchive size={20} /> */}
          Add
        </Link>
        <Button
          variant="link"
          className="text-decoration-none text-black m-2"
          onClick={logout}
        >
          {/* <BiArchive size={20} /> */}
          {{ name }}
        </Button>
      </Nav>
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

export default Navlink;
