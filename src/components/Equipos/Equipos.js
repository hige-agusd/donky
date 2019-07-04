import React from "react";
import { Container } from "react-bootstrap";
import { Carousel } from '3d-react-carousal';
import Card from '../Card/Card';
import './Equipos.css';

const equipo = props => {
    const slides = props.equipos.length ? props.equipos.filter(equipo => equipo.activo).map((equipo, i) => (
        <Card key={`eq${i}`} card={equipo} />
    )) : [];
    const carousel = slides.length ? 
            <Carousel slides={slides} /> : null;

    return (
        <Container fluid={true} className={`Equipos-wrapper`} >
            { carousel }
        </Container>
    );
};

export default equipo;
