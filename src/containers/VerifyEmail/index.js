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
    console.log('dve');
    this.props.firebase.doVerifyMail()
      .then(() => {
        // Create a user in your Firebase realtime database
        console.log('sentsent');
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
    console.log('dve');
    const error = this.state.error;
    return (
      <div className={'VerifyEmail'}>
        <p>
          Se envió un mail a tu casilla para verificar tu cuenta.
          Si necesitás que se envíe nuevamente, hacé click acá <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
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
