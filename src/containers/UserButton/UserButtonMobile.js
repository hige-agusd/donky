import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SignOutButton from '../SignOut';

import './UserButton.css';
import { NavLink } from 'react-router-dom';
import NavigationItem from '../../components/Navigation/NavigationItems/NavigationItem/NavigationItem';
import * as ROUTES from '../../constants/routes';

class UserButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasAccount: true,
            showMenu: false,
        }
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
            this.props.history.push(ROUTES.SIGN_IN); // Go to login
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <>
                <div className={'UserButton Mobile'}
                    onClick={this.clickedButton}></div>
                <div className={`UserMenu Mobile ${this.state.showMenu?'show':''}`}>
                    <ul>
                        <li>
                            <NavLink 
                                onClick={this.toggleMenu} 
                                to={ROUTES.ACCOUNT}>Mi Perfil
                            </NavLink>
                        </li>
                        <li onClick={this.toggleMenu}><SignOutButton /></li>
                    </ul>

                </div>
            </>
        );
    }

}

export default withRouter(UserButton);