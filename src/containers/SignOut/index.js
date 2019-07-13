import React from 'react';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <button type="button" className={'SignOut btn'} onClick={firebase.doSignOut}>
    Salir
  </button>
);

export default withFirebase(SignOutButton);