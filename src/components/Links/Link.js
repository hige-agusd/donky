import React from "react";
import { NavLink } from 'react-router-dom';

const link = props => (
    <NavLink to={props.link} className={"Links-Link"}>
      {/* <img src={props.image} alt="props.label" /> */}
      <img className={'Links-overlay'} src={props.image} alt={props.label} />
      <span className={'Links-title'} >{props.label}</span>
    </NavLink>
);

export default link;
