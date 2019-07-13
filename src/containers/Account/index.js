import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import { withAuthorization } from '../Session';
import * as actions from '../../store/actions/index';
import * as ROLES from '../../constants/roles';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import './Account.css'

class AccountPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      nro_socio: '',
      isNew: true,
      user: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    
    this.props.firebase.user(this.props.firebase.auth.currentUser.uid).on("value", snapshot => {
      const userObject = snapshot.val();
      const newState = {
        ...this.state,
        user: userObject,
        loading: false
      };

      if(!!userObject && !!userObject.nro_socio) {
        newState.nro_socio = userObject.nro_socio;
        newState.isNew = false;
      }
      
      this.setState(newState);
    });
  }
  
  onChange = event => {
    this.setState({
        ...this.state,
        [event.target.name]: event.target.value,
    }/* , () => this.setState({
            ...this.state,
            isInvalid: !this.state.nombre
        }) */
    );
  }

  sendNroSocio = () => {
    this.props.firebase.user(this.props.firebase.auth.currentUser.uid).update({
      ...this.state.user,
      nro_socio: parseInt(this.state.nro_socio),
      socioVerified: false
    });
  }

  componentWillUnmount() {
    this.props.firebase.user().off();
    // this.listener();
  }

  render() {
    const { user, loading } = this.state;

    const nroSocio = this.state.isNew ? (
      <form>
        <input
            type="text"
            name='nro_socio'
            placeholder="n° de socia"
            value={this.state.nro_socio}
            onChange={this.onChange}
        />
        <button 
            onClick={this.sendNroSocio} 
            disabled={this.state.isInvalid} >
            Enviar
        </button>
      </form>
    ) : 
    <span>Nro de Socia {this.state.nro_socio}</span>;

    return (
      <div className={'AccountPage Form'}>
        <h1>Perfil</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
        {loading && <div>Loading ...</div>}

        {nroSocio}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

const condition = authUser =>
  authUser && !!authUser.emailVerified;

export default compose(
  connect( mapStateToProps, mapDispatchToProps ),
  withAuthorization(condition),
  withFirebase,
)(AccountPage);