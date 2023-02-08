import React from 'react';
import { Container, Form, Navbar } from 'react-bootstrap';
import { useLocation } from 'react-router';
import PropTypes from 'prop-types';

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
              onChange={(event) => changeKeyword(event.target.value)}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

SearchNote.propTypes = {
  keyword: PropTypes.string.isRequired,
  changeKeyword: PropTypes.func.isRequired,
};

export default SearchNote;
