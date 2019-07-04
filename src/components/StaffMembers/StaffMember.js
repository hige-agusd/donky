import React from "react";
import donkyLogo from '../../assets/images/Donky_logo.png';

const staffMember = props => {
  const images = require.context('../../assets/images', true);
  let foto;
  let missing = '';
  if (props.foto.match(/^http/)) {
    foto = props.foto
  } else {
    try { foto = images(`./${props.foto}`);}
    catch(err) {
      // console.log(err);
      missing = 'missing-foto';
      foto = donkyLogo;
    }  
  }
        
  return (
    <div className={"StaffMember-wrapper"}>
      <img className={`StaffMember-image ${missing}`} src={foto} alt={`foto de ${props.nombre}`}></img>
      <div className={'StaffMember-name'}>{props.nombre}</div>
      <div className={'StaffMember-job'}>{props.rol}</div>
      <div className={'StaffMember-bio'}>{props.bio}</div>
    </div>
  );
}

export default staffMember;
