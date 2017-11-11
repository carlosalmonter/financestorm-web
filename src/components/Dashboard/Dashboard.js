import React, { Component } from 'react';
import withIsAuthToken from '../HOC/withAuthToken';

class Dashboard extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div className="dashboard__container">
          dashboard
        </div>
      </div>
    );
  }
}

export default withIsAuthToken(Dashboard);
