import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withAuthentication } from '../Session';

import Home from '../Home/Home';
import Torneo from '../Torneo/Torneo';
import Academia from '../Academia/Academia';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import TorneoEdit from '../TorneoEdit/Torneo';
import Admin from '../Admin';
import Layout from '../../hoc/Layout/Layout';
import * as ROUTES from '../../constants/routes';
import '../../assets/fonts/Donky_Fuente.ttf';
import './App.css';
import VerifyEmailPage from '../VerifyEmail';
import VerifyEmail from '../VerifyEmail';
import Account from '../Account';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/fixture" component={Torneo} />
            <Route path="/academia" component={Academia} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/signin" component={SignInPage} />
            <Route path={ROUTES.TORNEO_EDIT} component={TorneoEdit} />
            <Route path={ROUTES.VERIFY_MAIL} component={VerifyEmail} />
            <Route path={ROUTES.ADMIN} component={Admin} />
            <Route path={ROUTES.ACCOUNT} component={Account} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default withAuthentication(App);