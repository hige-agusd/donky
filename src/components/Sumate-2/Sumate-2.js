import React from "react";
import { Container } from "react-bootstrap";
import './Sumate-2.css';
import { NavLink } from 'react-router-dom';

const sumate2 = props => (
    <Container fluid={true} className={"Sumate-2"} >
        <div className={'Sumate-2-wrapper'}>
            <div className={'Sumate-2-titulo'} >SUMATE</div>
            <NavLink to={'/contacto'} className={'Sumate-2-btn Sumate-2-contacto-btn'} >REGISTRATE</NavLink>
        </div>
    </Container>
);

export default sumate2;
