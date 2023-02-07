import React from 'react';
import { Card } from 'react-bootstrap';
import NoteBodyCard from './NoteBodyCard';
import NoteHeaderCard from './NoteHeaderCard';

function NoteItemCard({ id, title, createdAt, body }) {
  return (
    <Card className="p-3 border-0 shadow">
      <NoteHeaderCard id={id} title={title} createdAt={createdAt} />
      <NoteBodyCard body={body} id={id} />
    </Card>
  );
}

export default NoteItemCard;
