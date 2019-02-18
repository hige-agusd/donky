import React from "react";
import { Container } from "react-bootstrap";
import './Frase.css';

const frase = props => (
    <Container fluid={true} className={"Frase-wrapper"} >
        <span className={'Frase'} >{props.frase}</span>
    </Container>
);

export default frase;
