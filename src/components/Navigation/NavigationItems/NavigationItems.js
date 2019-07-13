import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import { AuthUserContext } from '../../../containers/Session';
import SignOutButton from '../../../containers/SignOut';
import * as ROUTES from '../../../constants/routes';
import * as ROLES from '../../../constants/roles';
import './NavigationItems.css';
import UserButton from '../../../containers/UserButton';

const navigationItems = () => (
    <ul className={'NavigationItems'}>
        <NavigationItem link={ROUTES.HOME} exact> Inicio</NavigationItem>
        <NavigationItem link={ROUTES.ACADEMIA}>Academia</NavigationItem>
        <NavigationItem link={ROUTES.FIXTURE}>Torneos</NavigationItem>
        {/* <NavigationItem link={ROUTES.BENEFICIOS}>Beneficios</NavigationItem> */}
        <a href="#footer" className={'NavigationItem'}>Contacto</a>
        {/* <NavigationItem link="#footer" class={'btn'}>Contacto</NavigationItem> */}
        {/* <SignOutButton /> */}
        <AuthUserContext.Consumer>
            {authUser =>
                <>
                    {authUser && !!authUser.roles[ROLES.ADMIN] &&  (
                        <NavigationItem link={ROUTES.ADMIN}>Admin</NavigationItem>
                    )}
                    <UserButton authUser={authUser}/>
                </>
            }
        </AuthUserContext.Consumer>
    </ul>
);

export default navigationItems;