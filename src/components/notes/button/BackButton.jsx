import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BackButton({ isArchive }) {
  let path = '/archived';
  if (isArchive === false) {
    path = '/';
  }

  return (
    <Link to={path}>
      <Button variant="outline-danger">Go Back !</Button>
    </Link>
  );
}

export default BackButton;
