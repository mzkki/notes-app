import React from 'react';
import { Link } from 'react-router-dom';

function NoteBodyCard() {
  return (
    <div className="note-item__content">
      <div className="note-item__body mt-2">
        <Link to="#" className="text-decoration-none text-black">
          body
        </Link>
      </div>
    </div>
  );
}

export default NoteBodyCard;
