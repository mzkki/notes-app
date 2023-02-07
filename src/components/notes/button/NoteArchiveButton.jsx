import React from 'react';
import { Button } from 'react-bootstrap';

function NoteArchiveButton({ archived, onArchive, id }) {
  return (
    <Button variant="outline-success" onClick={() => onArchive(id)}>
      {archived ? 'UnArchive' : 'Archive'}
    </Button>
  );
}

export default NoteArchiveButton;
