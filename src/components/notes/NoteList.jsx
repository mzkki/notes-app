import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NoteItemCard from './NoteItemCard';

function NoteList() {
  return (
    <Container>
      <Row>
        <Col sm={4} className="my-2">
          <NoteItemCard />
        </Col>
      </Row>
    </Container>
  );
}

export default NoteList;
