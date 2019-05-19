import React from "react";
import { Col } from "react-bootstrap";
import './Card.css';

const equipo = props => {
    const images = require.context('../../assets/images', true);
    const escudo = images(`./${props.equipo.escudo}`);
    const picEquipo = images(`./${props.equipo.pic_equipo}`);
    
    return (
        <div className={'Card'}>
            <div className={'Card-escudo'} style={{ backgroundImage: `url(${escudo}` }} ></div>
            <div className={'Card-imagen'} style={{ backgroundImage: `url(${picEquipo})` }} ></div>
            <span className={'Card-name'}>{props.equipo.nombre}</span>
        </div>
    );
};

export default equipo;
