import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import SignOutButton from '../../../containers/SignOut';

import './NavigationItems.css';

const navigationItems = () => (
    <ul className={'NavigationItems'}>
        <NavigationItem link="/" exact> Inicio</NavigationItem>
        <NavigationItem link="/academia">Academia</NavigationItem>
        <NavigationItem link="/fixture">Torneos</NavigationItem>
        <NavigationItem link="/beneficios">Beneficios</NavigationItem>
        <a href="#footer" className={'btn'}>Contacto</a>
        {/* <NavigationItem link="#footer" class={'btn'}>Contacto</NavigationItem> */}
        <SignOutButton />
    </ul>
);

export default navigationItems;