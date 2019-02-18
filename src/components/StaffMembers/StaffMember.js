import React from "react";
import { NavLink } from 'react-router-dom';

const staffMember = props => (
    <div className={"StaffMember-wrapper"}>
      <img className={"StaffMember-image"} src={props.image} alt={props.name}></img>
      <div className={'StaffMember-name'}>{props.name}</div>
      <div className={'StaffMember-job'}>{props.job}</div>
      <div className={'StaffMember-bio'}>{props.bio}</div>
      <NavLink to={`${props.link}/${props.id}`} className={'StaffMember-btn'} ><span>{props.btn_label}</span></NavLink>
    </div>
);

export default staffMember;
