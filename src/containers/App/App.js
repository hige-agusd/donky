import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import { withFirebase } from '../Firebase';

import Home from '../Home/Home';
import Torneo from '../Torneo/Torneo';
import Academia from '../Academia/Academia';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import TorneoEdit from '../TorneoEdit/Torneo';
import Layout from '../../hoc/Layout/Layout';
import '../../assets/fonts/Donky_Fuente.ttf';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.props.setAuth(authUser)
        : this.props.setAuth();
    });
  }

  componentWillUnmount() {
    this.listener();
  }

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
            <Route path="/admin" component={TorneoEdit} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
      setAuth: (auth) => dispatch( actions.setAuth(auth) )
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )(withFirebase(App)) );
