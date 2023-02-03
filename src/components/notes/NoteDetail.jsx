import React from 'react';
import { Container, Form, Card } from 'react-bootstrap';
import NoteFooterCard from './NoteFooterCard';

function NoteDetail() {
  return (
    <Container className="text-center">
      <Card className="shadow border-0 p-5">
        <h2>title</h2>
        <Form.Text muted>Created on</Form.Text>
        <div>body</div>
        <NoteFooterCard />
      </Card>
    </Container>
  );
}

export default NoteDetail;
