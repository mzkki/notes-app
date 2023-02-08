import React from 'react';
import { Container, Form, Card } from 'react-bootstrap';
import NoteFooterCard from './NoteFooterCard';
import parser from 'html-react-parser';
import PropTypes from 'prop-types';

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

NoteDetail.propTypes = {
  id: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteDetail;
