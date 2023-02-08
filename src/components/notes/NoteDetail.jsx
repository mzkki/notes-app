import React from 'react';
import { Container, Form, Card } from 'react-bootstrap';
import NoteFooterCard from './NoteFooterCard';
import parser from 'html-react-parser';

function NoteDetail({
  id,
  body,
  title,
  createdAt,
  archived,
  onArchive,
  onDelete,
}) {
  return (
    <Container className="text-center">
      <Card className="shadow border-0 p-5">
        <h2>{title}</h2>
        <Form.Text muted>{createdAt}</Form.Text>
        <div>{parser(body)}</div>
        <NoteFooterCard
          onArchive={onArchive}
          archived={archived}
          onDelete={onDelete}
          id={id}
        />
      </Card>
    </Container>
  );
}

export default NoteDetail;
