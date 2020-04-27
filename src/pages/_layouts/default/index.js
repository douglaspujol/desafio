import React from 'react';
import PropTypes from 'prop-types';

export default function DefaultLayout({ children }) {
  return (
    <>
      <h1>Default</h1>
      {children}
    </>
  );
}
DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
