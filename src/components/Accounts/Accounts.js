import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import AccountsList from './AccountsList';
import withNavigation from '../HOC/withNavigation';
import {CircularProgress, RaisedButton} from 'material-ui';
import { Link } from 'react-router-dom';
import './Accounts.css';
import config from "../../config/config";
import colors from "../../config/colors";

class Accounts extends Component {

  componentDidMount() {
    // console.log(this.props);
    // this.props.getAccounts(this.props.accessToken, this.props.user.id);
    this.props.getAccounts('$2y$10$IZY2fPpX.6AmeHqwQyo13.Xp6lSZHYDapdjdFobAacUE84xGvMtXm', 3);
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
          {isLoading && <CircularProgress color={colors.BLACK} />}
          {isError && config.LOADING_ERROR_MESSAGE}
          {!isLoading && <AccountsList accountsData={accounts} />}
        </div>
      </div>
    );
  }
}

export default withNavigation(Accounts);
