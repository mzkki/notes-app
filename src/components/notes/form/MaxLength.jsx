import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import LocaleContext from '../../../context/LocaleContext';

function MaxLength({ number }) {
  const { locale } = React.useContext(LocaleContext);

  return (
    <Form.Text className="mb-3">
      {locale === 'id' ? 'Sisa Karakter' : 'Character Left'} : {number}
    </Form.Text>
  );
}

MaxLength.propTypes = {
  number: PropTypes.number.isRequired,
};

export default MaxLength;
