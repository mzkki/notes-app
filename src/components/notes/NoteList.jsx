import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { showFormattedDate } from '../../utils/api';
import NoteItemCard from './NoteItemCard';

function NoteList({ notes, query }) {
  const filteredQuery = notes.filter((note) =>
    note.title.toLowerCase().includes(query)
  );

  return (
    <Container>
      <Row>
        {filteredQuery.length > 0 ? (
          filteredQuery.map((note) => (
            <Col md={4} className="my-2" key={note.id}>
              <NoteItemCard
                {...note}
                createdAt={showFormattedDate(note.createdAt)}
              />
            </Col>
          ))
        ) : (
          <div className="note-list__empty">Tidak ada catatan.</div>
        )}
      </Row>
    </Container>
  );
}

export default NoteList;
