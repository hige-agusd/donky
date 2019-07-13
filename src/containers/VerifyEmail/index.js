import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";

import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import { withAuthorization } from "../Session";

class VerifyEmail extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  doVerifyEmail = event => {
    this.props.firebase.doVerifyMail()
      .then(() => {
        // Create a user in your Firebase realtime database
      })
      /* .then(() => {
        this.props.history.push(ROUTES.HOME);
      }) */
      .catch(error => {
        this.setState({ error });
      });
  };

  componentDidMount() {
    this.doVerifyEmail();
  }
  

  render() {
    const error = this.state.error;
    return (
      <div className={'VerifyEmail'}>
        <p>
          Se envió un mail a tu casilla para verificar tu cuenta.
          Si necesitás que se envíe nuevamente, hacé click <span onClick={this.doVerifyEmail}>acá</span>
        </p>
        {error && <p>{error.message}</p>}
      </div>
    );
  }
}

const condition = authUser =>
  authUser && !authUser.emailVerified

const VerifyEmailPage = compose(
  withRouter,
  withFirebase,
  withAuthorization(condition),
)(VerifyEmail);
export default VerifyEmailPage;
