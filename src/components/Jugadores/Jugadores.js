import React from "react";
import { Container } from "react-bootstrap";
import { Carousel } from '3d-react-carousal';
import Card from '../Card/Card';
import './Jugadores.css';

const jugadores = props => {
    const slides = props.jugadores.length ? props.jugadores.map((jugador, i) => (
        <Card key={`ju${i}`} card={{...jugador, ala: true}} />
    )) : [];
    const carousel = slides.length ? 
            <Carousel slides={slides} /> : null;

    return (
        <Container fluid={true} className={`Jugadores-wrapper`} >
            { carousel }
        </Container>
    );
};

export default jugadores;
