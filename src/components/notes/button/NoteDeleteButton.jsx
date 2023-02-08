import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function NoteDeleteButton({ onDelete, id }) {
  return (
    <Button variant="danger" onClick={() => onDelete(id)} className="mx-2">
      Delete
    </Button>
  );
}

NoteDeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default NoteDeleteButton;
