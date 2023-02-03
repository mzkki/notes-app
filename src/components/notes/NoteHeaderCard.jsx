import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NoteHeaderCard() {
  return (
    <div className="note-item__header">
      <h2 className="note-item__title">
        <Link to="#" className="text-decoration-none">
          Title
        </Link>
      </h2>
      <Form.Text muted className="note-item__date">
        createdAt
      </Form.Text>
    </div>
  );
}

export default NoteHeaderCard;
