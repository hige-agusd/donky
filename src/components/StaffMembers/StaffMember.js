import React from "react";

const staffMember = props => {
  const images = require.context('../../assets/images', true);
  const foto = props.foto.match(/^http/) ? props.foto : images(`./${props.foto}`);
  return (
    <div className={"StaffMember-wrapper"}>
      <img className={"StaffMember-image"} src={foto} alt={props.nombre}></img>
      <div className={'StaffMember-name'}>{props.nombre}</div>
      <div className={'StaffMember-job'}>{props.rol}</div>
      <div className={'StaffMember-bio'}>{props.bio}</div>
    </div>
  );
}

export default staffMember;
