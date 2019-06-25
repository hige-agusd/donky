import React from "react";
import { Container } from "react-bootstrap";
import AdminNewEquipo from '../AdminNewEquipo/AdminNewEquipo';
// import Partido from './Partido';
import "./AdminEquipos.css";

const adminEquipos = props => {

    const equipoVacia = {
        index: '',
        nombre: '',
        foto: '',
        escudo: '',
        categoria: '',
        link: '',
        interno: true,
        activo: true
    };

    const onClicked = equipo => {
        const {index, nombre, foto, escudo, categoria, link, interno, activo } = equipo;
        const newEquipo = {
            key: index ? index : props.equipos.length,
            value: {
                nombre,
                foto,
                escudo,
                categoria,
                link,
                interno,
                activo
            }
        }
        props.clicked(newEquipo);
    }

    const equipos = props.equipos && props.equipos.length ? 
        props.equipos.map( (equipo, i) => 
            <AdminNewEquipo key={`ane${i}`} equipo={equipo} clicked={onClicked} />)  
            : null;

    return (
        <Container fluid={true} className={`Partido-wrapper NewEquipos-grid ${props.even}`}>
            <AdminNewEquipo equipo={equipoVacia} clicked={onClicked} />
            { equipos }
        </Container>
    );
};

export default adminEquipos;
