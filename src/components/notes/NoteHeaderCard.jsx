import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ModeContext from '../../context/ModeContext';

function NoteHeaderCard({ title, id, createdAt }) {
  const { mode } = React.useContext(ModeContext);
  return (
    <div className="note-item__header">
      <h2 className="note-item__title">
        <Link
          to={`/note/${id}`}
          className={`text-decoration-none ${
            mode === 'light' ? 'text-dark' : 'text-light'
          }`}
        >
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
