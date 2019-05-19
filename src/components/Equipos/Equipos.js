import React from "react";
import { Container, Row } from "react-bootstrap";
import { Carousel } from '3d-react-carousal';
import Card from '../Card/Card';
import './Equipos.css';

const equipo = props => {
    const slides = props.equipos.length ? props.equipos.map((equipo, i) => (
        <Card key={`eq${i}`} equipo={equipo} />
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
