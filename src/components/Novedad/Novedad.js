import React from "react";
import { NavLink } from 'react-router-dom';
import './Novedad.css';

const novedad = props => (
  <div className={"Novedad"} style={{ backgroundImage: `url(${props.image})` }}>
    {/* <img src={props.image} alt="props.label" /> */}
    <div className={'Novedad-content-wrapper'}>
      <div className={'Novedad-overlay'}>
      </div>
      <div className={'Novedad-content'}>
        <div className={'Novedad-content-title'} >{props.content.titulo}</div>
        <div className={'Novedad-content-subtitle'} >{props.content.subtitulo}</div>
        <div className={'Novedad-content-more'} >
          <span className={'Novedad-content-description'} >{props.content.descripcion}</span>
          <NavLink to={props.link} className={'Novedad-content-btn'} >{props.content.btn_label}</NavLink>
        </div>
      </div>
    </div>
  </div>
);

export default novedad;
