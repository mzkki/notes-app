import React from 'react';
import parser from 'html-react-parser';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ModeContext from '../../context/ModeContext';

function NoteBodyCard({ body, id }) {
  const { mode } = React.useContext(ModeContext);
  return (
    <div className="note-item__content">
      <div className="note-item__body mt-2">
        <Link
          to={`/note/${id}`}
          className={`text-decoration-none ${
            mode === 'light' ? 'text-dark' : 'text-light'
          }`}
        >
          {parser(body)}
        </Link>
      </div>
    </div>
  );
}

NoteBodyCard.propTypes = {
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default NoteBodyCard;
