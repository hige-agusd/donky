import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItem.css';

const navigationItem = ( props ) => {
    const classes = ['NavigationItem'];
    classes.push(props.class);
    return(
    <li className={classes.join(' ')}>
        <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName={'active'}>{props.children}</NavLink>
    </li>);
};

export default navigationItem;