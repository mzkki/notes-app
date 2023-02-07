import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BackButton from './button/BackButton';
import NoteArchiveButton from './button/NoteArchiveButton';
import NoteDeleteButton from './button/NoteDeleteButton';

function NoteFooterCard({ archived, onArchive, onDelete, id }) {
  return (
    <div className="note-item__footer">
      <Container fluid="sm" className="mt-4">
        <Row>
          <Col lg={4} className="mt-2">
            <NoteArchiveButton
              onArchive={onArchive}
              archived={archived}
              id={id}
            />
            <NoteDeleteButton onDelete={onDelete} id={id} />
          </Col>
          <Col lg={{ span: 4, offset: 4 }} className="mt-2">
            <BackButton />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NoteFooterCard;
