import React from 'react';

import './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

        // <DrawerToggle clicked={props.drawerToggleClicked} />

const toolbar = ( props ) => (
    <header className={'Toolbar'}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={'Title'}>
            <span>DONKY FUTBOL</span>
        </div>
        <div className={'Social'}>
            <FontAwesomeIcon icon={['fab', 'instagram']} />
            <FontAwesomeIcon className={'outline'} icon={['fab', 'facebook-f']} />
        </div>
        <nav className={'DesktopOnly'}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;