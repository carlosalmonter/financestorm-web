import React from 'react';
import { CircularProgress } from 'material-ui';
import PropTypes from 'prop-types';
import colors from '../../config/colors';
import config from '../../config/config';

const withLoading = (WrappedComponent) => {
  const WithLoadingComponent = props => (
    <div>
      {props.isLoading && <CircularProgress color={colors.BLACK} />}
      {props.isError && config.LOADING_ERROR_MESSAGE}
      {!props.isLoading && <WrappedComponent {...props} />}
    </div>
  );

  WithLoadingComponent.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
  };

  return WithLoadingComponent;
};

export default withLoading;
