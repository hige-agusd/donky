import React from "react";
import { Container } from "react-bootstrap";
import AdminNewJugadora from '../AdminNewJugadora/AdminNewJugadora';
// import Partido from './Partido';
import "./AdminJugadoras.css";

const adminJugadoras = props => {

    const jugadoraVacia = {
        nro_socio: '',
        equipo: '',
        foto: '',
        nivel: '',
        nombre: '',
        activa: true
    };

    const onClicked = jugadora => {
        const {nombre, equipo, foto, nivel, activa } = jugadora;
        const newJugadora = {
            key: jugadora.nro_socio,
            value: {
                nombre,
                equipo,
                foto,
                nivel,
                activa
            }
        }
        props.clicked(newJugadora);
    }

    const jugadoras = props.jugadoras && props.jugadoras.length ? 
        props.jugadoras.map( (jugadora, i) => 
            <AdminNewJugadora key={`anj${i}`} jugadora={jugadora} clicked={onClicked} />)  
            : null;

    return (
        <Container fluid={true} className={`Partido-wrapper NewJugadoras-grid ${props.even}`}>
            <AdminNewJugadora jugadora={jugadoraVacia} clicked={onClicked} />
            { jugadoras }
        </Container>
    );
};

export default adminJugadoras;
