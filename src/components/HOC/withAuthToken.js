import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation/Navigation';
import config from '../../config/config';

const withAuthToken = (WrappedComponent) => {
  const WithAuthTokenComponent = props => (
    props.accessToken ? (
      <div>
        <Navigation />
        <WrappedComponent {...props} />
      </div>
    ) : null
  );

  WithAuthTokenComponent.propTypes = {
    accessToken: PropTypes.string,
  };

  WithAuthTokenComponent.defaultProps = {
    accessToken: config.EMPTY_STRING,
  };

  return WithAuthTokenComponent;
};

export default withAuthToken;
