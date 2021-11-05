import React from 'react';
import PropTypes from 'prop-types';

function Input({ info, handleChange }) {
  return (
    <input
      type="text"
      value={ info }
      onChange={ ({ target: { value } }) => handleChange(value) }
    />
  );
}

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  info: PropTypes.string.isRequired,
};

export default Input;
