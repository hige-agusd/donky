import React from "react";
import { Container } from "react-bootstrap";
import './Sumate.css';
import { NavLink } from 'react-router-dom';

const sumate = props => (
    <Container fluid={true} className={"Sumate"} >
        <div className={'Sumate-wrapper'}>
            <div className={'Sumate-titulo'} >SUMATE AL EQUIPO</div>
            <div className={'Sumate-subtitulo'} >NO TE QUEDES SIN JUGAR</div>
            <NavLink to={'/contacto'} className={'Sumate-btn Sumate-contacto-btn'} >CONTACTO</NavLink>
        </div>
    </Container>
);

export default sumate;
