import React from 'react';
import { Button } from 'react-bootstrap';

function NoteDeleteButton({ onDelete, id }) {
  return (
    <Button variant="danger" onClick={() => onDelete(id)} className="mx-2">
      Delete
    </Button>
  );
}

export default NoteDeleteButton;
