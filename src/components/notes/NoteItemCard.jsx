import React from 'react';
import { Card } from 'react-bootstrap';
import NoteBodyCard from './NoteBodyCard';
import NoteHeaderCard from './NoteHeaderCard';

function NoteItemCard() {
  return (
    <Card className="p-3 border-0 shadow">
      <NoteHeaderCard />
      <NoteBodyCard />
    </Card>
  );
}

export default NoteItemCard;
