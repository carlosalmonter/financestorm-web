import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AccountsList from './AccountsList';
import withIsAuthToken from '../HOC/withAuthToken';
import { RaisedButton } from 'material-ui';
import { Link } from 'react-router-dom';
import './Accounts.css';
import config from '../../config/config';

class Accounts extends Component {

  static defaultProps = {
    accounts: [],
    accessToken: config.EMPTY_STRING,
  };

  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    accounts: PropTypes.arrayOf(PropTypes.object),
    accessToken: PropTypes.string,
  };

  componentDidMount() {
    if(this.props.accessToken) {
      this.props.getAccounts(this.props.accessToken, this.props.user.id);
    }
  }
  render() {
    const { accounts, isLoading, isError, accessToken } = this.props;
    return (
      <div className="accounts">
        <div className="accounts__container">
          <h1>Accounts</h1>
          <Link to="/accounts/create">
            <RaisedButton label={'Create Account'} />
          </Link>
          <AccountsList
            accountsData={accounts}
            isLoading={isLoading}
            isError={isError}
            accessToken={accessToken}
          />
        </div>
      </div>
    );
  }
}

export default withIsAuthToken(Accounts);
