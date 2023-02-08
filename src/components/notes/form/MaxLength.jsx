import React from 'react';
import { Form } from 'react-bootstrap';

function MaxLength({ number }) {
  return <Form.Text className="mb-3">Sisa Karangker : {number}</Form.Text>;
}

export default MaxLength;
