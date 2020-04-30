import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

export default function TextArea({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <>
      <textarea ref={inputRef} defaultValue={defaultValue} {...rest} />
      {error && <span>{error}</span>}
    </>
  );
}
TextArea.propTypes = {
  name: PropTypes.oneOf([PropTypes.string]).isRequired,
};
