import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LocaleContext from '../../../context/LocaleContext';

function BackButton({ isArchive }) {
  let path = '/archived';
  if (isArchive === false) {
    path = '/';
  }

  const { locale } = React.useContext(LocaleContext);

  return (
    <Link to={path}>
      <Button variant="outline-warning">
        {locale === 'id' ? 'Kembali' : 'Go Back '}
      </Button>
    </Link>
  );
}

BackButton.propTypes = {
  isArchive: PropTypes.bool.isRequired,
};

export default BackButton;
