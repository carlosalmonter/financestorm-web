import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Main from './Main/Main';
import HomeContainer from '../containers/HomeContainer';
import LoginContainer from '../containers/LoginContainer';
import LogoutContainer from '../containers/LogoutContainer';
import RegisterContainer from '../containers/RegisterContainer';
import DashboardContainer from '../containers/DashboardContainer';
import AccountsContainer from '../containers/AccountsContainer';
import AccountCreateContainer from '../containers/AccountCreateContainer';
import store from '../store/createStore';

const App = () => (
  <Provider store={store}>
    <Main>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/dashboard" component={DashboardContainer} />
        <Route exact path="/accounts" component={AccountsContainer} />
        <Route exact path="/accounts/create" component={AccountCreateContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/register" component={RegisterContainer} />
        <Route exact path="/logout" component={LogoutContainer} />
      </Switch>
    </Main>
  </Provider>
);

export default App;
