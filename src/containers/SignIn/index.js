import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { compose } from 'recompose';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignInPage = () => (
  <div className={`SignInForm`}>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        if (this.props.history.location.pathname === ROUTES.SIGN_IN) {
          this.props.history.push(ROUTES.HOME);
        }
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <form onSubmit={this.onSubmit} className={'SignInForm'}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="email"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="contraseña"
        />
        <button disabled={isInvalid} type="submit">
          Log in
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInLink = () => (
  <p>
    ¿Ya tenés cuenta? <Link to={ROUTES.SIGN_IN}>Ingresá acá</Link>
  </p>
);

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm, SignInLink };