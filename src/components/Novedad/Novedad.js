import React from "react";
import { NavLink } from 'react-router-dom';
import './Novedad.css';

const novedad = props => {
  const firstHash = props.novedad.caption.text.indexOf('#');
  const titulo = props.novedad.caption.text.substring(0, firstHash);
  const more = props.novedad.caption.text.substring(firstHash);
  return (
  <div className={"Novedad"} style={{ backgroundImage: `url(${props.novedad.images.standard_resolution.url})` }}>
    {/* <img src={props.image} alt="props.label" /> */}
    <div className={'Novedad-content-wrapper'}>
      <div className={'Novedad-overlay'}>
      </div>
      <div className={'Novedad-content'}>
        <div className={'Novedad-content-title'} >{titulo}</div>
        {/* <div className={'Novedad-content-subtitle'} >{props.content.subtitulo}</div> */}
        <div className={'Novedad-content-more'} >
          <span className={'Novedad-content-description'} >{more}</span>
        </div>
      </div>
    </div>
  </div>
)};

export default novedad;
