import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NoteHeaderCard({ title, id, createdAt }) {
  return (
    <div className="note-item__header">
      <h2 className="note-item__title">
        <Link to={`/note/${id}`} className="text-decoration-none text-black">
          {title}
        </Link>
      </h2>
      <Form.Text muted className="note-item__date">
        {createdAt}
      </Form.Text>
    </div>
  );
}

NoteHeaderCard.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteHeaderCard;
