import React from 'react';
import { Container, Form, Navbar } from 'react-bootstrap';
import { useLocation } from 'react-router';
import PropTypes from 'prop-types';
import LocaleContext from '../../context/LocaleContext';

function SearchNote({ keyword, changeKeyword }) {
  const { locale } = React.useContext(LocaleContext);

  const currentPath = useLocation().pathname;

  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <h2>
            {currentPath === '/'
              ? locale === 'id'
                ? 'Catatan'
                : 'Active Notes'
              : locale === 'id'
              ? 'Arsip'
              : 'Archived Notes'}{' '}
          </h2>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder={locale === 'id' ? 'Cari Catatan' : 'Search Note'}
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
