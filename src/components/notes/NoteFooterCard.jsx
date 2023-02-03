import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BackButton from './button/BackButton';
import NoteArchiveButton from './button/NoteArchiveButton';
import NoteDeleteButton from './button/NoteDeleteButton';

function NoteFooterCard() {
  return (
    <div className="note-item__footer">
      <Container fluid="sm" className="mt-4">
        <Row>
          <Col md={4} className="mt-2">
            <NoteArchiveButton />
            <NoteDeleteButton />
          </Col>
          <Col md={{ span: 4, offset: 4 }} className="mt-2">
            <BackButton />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NoteFooterCard;
