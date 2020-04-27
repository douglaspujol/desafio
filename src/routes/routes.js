import React from 'react';
import { Route } from 'react-router-dom';

import PropTypes from 'prop-types';

/**
 * Default Layout
 */
import DefaultLayout from '../pages/_layouts/default/index';

export default function RouteWrapper({ component: Component, ...rest }) {
  const Layout = DefaultLayout;
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};
