import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={'NavigationItems'}>
        <NavigationItem link="/" exact> Inicio</NavigationItem>
        {/* <NavigationItem link="/academia">Academia</NavigationItem> */}
        <NavigationItem link="/fixture">Torneos</NavigationItem>
        {/* <NavigationItem link="/beneficios">Beneficios</NavigationItem> */}
        <a href="#footer" className={'btn'}>Contacto</a>
        {/* <NavigationItem link="#footer" class={'btn'}>Contacto</NavigationItem> */}
    </ul>
);

export default navigationItems;