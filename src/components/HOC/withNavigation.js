import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation/Navigation';

const withNavigation = (WrappedComponent) => {
  const WithNavigationComponent = props => (
    <div>
      {props.accessToken && <Navigation />}
      <WrappedComponent {...props}/>
    </div>
  );

  WithNavigationComponent.propTypes = {
    accessToken: PropTypes.bool.isRequired,
  };

  return WithNavigationComponent;
};

export default withNavigation;
