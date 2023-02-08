import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function NoteArchiveButton({ archived, onArchive, id }) {
  return (
    <Button variant="outline-success" onClick={() => onArchive(id)}>
      {archived ? 'UnArchive' : 'Archive'}
    </Button>
  );
}

NoteArchiveButton.propTypes = {
  archived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default NoteArchiveButton;
