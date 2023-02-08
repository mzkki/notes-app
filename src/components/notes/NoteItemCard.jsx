import React from 'react';
import { Card } from 'react-bootstrap';
import NoteBodyCard from './NoteBodyCard';
import NoteHeaderCard from './NoteHeaderCard';
import PropTypes from 'prop-types';

function NoteItemCard({ id, title, createdAt, body }) {
  return (
    <Card className="p-3 border-0 shadow">
      <NoteHeaderCard id={id} title={title} createdAt={createdAt} />
      <NoteBodyCard body={body} id={id} />
    </Card>
  );
}

NoteItemCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItemCard;
