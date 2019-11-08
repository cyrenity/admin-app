import React, { Fragment } from 'react';
import './App.css';
import Dashboard from "./containers/Dashboard/Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import SignIn from './containers/SignIn/SignIn';

import fakeAuth from './auth';
import Playbook from './containers/Playbook/Playbook';

const PrivateRoute = (props) => (
  <Fragment>
      { fakeAuth.isAuthenticated ? props.children : <Redirect to={{ pathname: "/signin" }} /> }
  </Fragment>
)

fakeAuth.isAuthenticated = true;

function App() {
  return (
    <Router>      
         <Switch>
         <Route exact path="/signin" component={SignIn} />
         <Route exact path="/playbook" component={Playbook} />
            <PrivateRoute>
              <Route path="/dashboard" component={Dashboard} />
              <Redirect exact path="/" to="/dashboard" />
            </PrivateRoute>
        </Switch>
    </Router>

  );
}

export default App;
