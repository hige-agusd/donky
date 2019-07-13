import React, { Component } from 'react';
import SignOutButton from '../SignOut';
import { SignUpForm } from '../SignUp';
import { SignInForm } from '../SignIn';

import Modal from '../../components/UI/Modal/Modal';
import './UserButton.css';
import NavigationItem from '../../components/Navigation/NavigationItems/NavigationItem/NavigationItem';
import * as ROUTES from '../../constants/routes';

class UserButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasAccount: true,
            showModal: false,
            showMenu: false,
        }
    }

    toggleModal = () => {
        this.setState({
            ...this.state,
            showModal: !this.state.showModal
        })
    }

    toggleMenu = () => {
        this.setState({
            ...this.state,
            showMenu: !this.state.showMenu
        })
    }

    toggleHasAccount = () => {
        this.setState({
            ...this.state,
            hasAccount: !this.state.hasAccount
        })
    }

    clickedButton = () => {
        if (this.props.authUser) {  // If the user is logged
            this.toggleMenu();      // Toggle the user menu
        } else {                    // If not
            this.toggleModal();     // Toggle signin form modal
        }
    }

    componentDidMount() {
    }

    render() {
        const menu = 
            this.state.showModal ? <Modal classes={'Form'} show={this.state.showModal} modalClosed={this.toggleModal}>
                { this.state.hasAccount ? <SignInForm /> : <SignUpForm /> }
                <button onClick={this.toggleHasAccount}>{this.state.hasAccount ? 'Registrarme' : 'Ingresar' }</button>
            </Modal>
            : null;
        return (
            <>
                <div className={'UserButton Desktop'}
                    onClick={this.clickedButton}></div>
                <div className={`UserMenu ${this.state.showMenu?'show':''}`}>
                    <ul>
                        <li onClick={this.toggleMenu}><NavigationItem link={ROUTES.ACCOUNT}>Mi Perfil</NavigationItem></li>
                        <li onClick={this.toggleMenu}><SignOutButton /></li>
                    </ul>

                </div>
                    {menu}
            </>
        );
    }

}

export default UserButton;