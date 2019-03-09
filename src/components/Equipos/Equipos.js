import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Equipos.css';

const equipo = props => {
    const images = require.context('../../assets/images', true);
    const escudos = props.equipos.map(eq => ({
        nombre: eq.nombre, escudo: images('./'+eq.escudo)
    }));
    const picEquipos = props.equipos.map(eq => ({
        nombre: eq.nombre, equipo: images('./'+eq.pic_equipo)
    }));
    return (
    <Container fluid={true} className={`Equipos-wrapper`} >
        <Row className={'Equipos-row'}>
            {props.equipos.map(equipo => (
                <Col className={'col-xs-10 Equipo'} md={4} lg={3}>
                    <div className={'Equipo-escudo'} style={{backgroundImage: `url(${escudos.find(esc => 
                            esc.nombre === equipo.nombre).escudo}`}} ></div>
                    <div className={'Equipo-imagen'} style={{backgroundImage: `url(${picEquipos.find(esc => 
                            esc.nombre === equipo.nombre).equipo})`}} ></div>
                </Col>
            ))}
        </Row>
    </Container>
);
    };

export default equipo;
