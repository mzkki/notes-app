import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

function Navlink() {
  const currentPath = useLocation().pathname;

  if (currentPath === '/' || currentPath === '/register') {
    return (
      <>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
        ></Nav>
        <Nav className="d-flex">
          <Button variant="link">Dark Mode</Button>
          <Button variant="link">Bahasa</Button>
        </Nav>
      </>
    );
  }

  return (
    <>
      <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
        <Nav.Link to="/home">
          <Link className="text-decoration-none text-black" to="/home">
            Home
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link className="text-decoration-none text-black" to="/archived">
            Archived
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link className="text-decoration-none text-black" to="/add">
            Add
          </Link>
        </Nav.Link>
      </Nav>
      <Nav className="d-flex">
        <Button variant="link">Dark Mode</Button>
        <Button variant="link">Bahasa</Button>
      </Nav>
    </>
  );
}

export default Navlink;
