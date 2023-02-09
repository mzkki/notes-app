import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { showFormattedDate } from '../../utils/api';
import NoteItemCard from './NoteItemCard';
import PropTypes from 'prop-types';
import LocaleContext from '../../context/LocaleContext';

function NoteList({ notes, query }) {
  const { locale } = React.useContext(LocaleContext);

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
          <div className="note-list__empty">
            {locale === 'id' ? 'Tidak ada catatan' : 'No Note'}
          </div>
        )}
      </Row>
    </Container>
  );
}

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
  query: PropTypes.string.isRequired,
};

export default NoteList;
