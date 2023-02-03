import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BackButton() {
  return (
    <Link>
      <Button variant="outline-danger">Go Back !</Button>
    </Link>
  );
}

export default BackButton;
