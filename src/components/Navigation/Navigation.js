import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <div className="navigation">
    <div className="navigation__logo">
      <h1>
        Finance Storm
      </h1>
    </div>
    <div className="navigation__links">
      <span>
        <Link to="/">Dashboard</Link>
      </span>
      <span>
        <Link to="/accounts">Accounts</Link>
      </span>
      <span>
        <Link to="/transactions">Transactions</Link>
      </span>
      <span>
        <Link to="/logout">Logout</Link>
      </span>
    </div>
  </div>
);

export default Navigation;
