import React from 'react';
import { Container, Form, Navbar } from 'react-bootstrap';
import { useLocation } from 'react-router';

function SearchNote({ keyword, changeKeyword }) {
  const currentPath = useLocation().pathname;
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <h2>{currentPath === '/' ? 'Catatan' : 'Arsip'} </h2>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 shadow border-0"
              value={keyword}
              onChange={changeKeyword}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SearchNote;
