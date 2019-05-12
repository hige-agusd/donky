import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Posiciones.css';
import Spinner from "../UI/Spinner/Spinner";

const posiciones = props =>{
    // const images = require.context('../../assets/images', true);
    // const escudos = props.equipos.map(eq => ({
    //     nombre: eq.nombre, escudo: images('./'+eq.escudo)
    // }));
    return (
        props.posiciones.length > 0 ? 
    <Container fluid={true} className={"Tabla-wrapper"} >
        <Row className={'Tabla-Header'}>
            <Col md={1} className={'Tabla-col col-xs-2 '}>POS.</Col>
            <Col md={3} className={'Tabla-col col-xs-4 '}>EQUIPO.</Col>
            <Col className={'Tabla-col col-xs-1 '}>PJ</Col>
            <Col className={'Tabla-col col-xs-1 '}>PG</Col>
            <Col className={'Tabla-col col-xs-1 '}>PE</Col>
            <Col className={'Tabla-col col-xs-1 '}>PP</Col>
            <Col className={'Tabla-col col-xs-1 Tabla-goles'}>GF</Col>
            <Col className={'Tabla-col col-xs-1 Tabla-goles'}>GC</Col>
            <Col className={'Tabla-col col-xs-1 Tabla-puntos'}>PTS</Col>
            <Col className={'Tabla-col col-xs-1 Tabla-goles'}>GD</Col>
        </Row>
        { props.posiciones.sort((a,b)=>b.puntos - a.puntos).map((equipo, pos) => 
            <Row key={pos} className={`Tabla-Row ${pos%2===0?'':'even'}`}>
                <Col md={1} className={'Tabla-col col-xs-2 Tabla-pos-value'}>{pos + 1}</Col>
                <Col md={3} className={'Tabla-col col-xs-4 Tabla-equipo'}>
                    {/* <div className={'Tabla-escudo-wrapper'}>
                        <img src={escudos.find(esc => 
                            esc.nombre === equipo.nombre).escudo} alt={equipo.nombre}></img>
                    </div> */}
                    <div className={'Tabla-equipo-nombre'}>{equipo.nombre}</div>
                </Col>
                <Col className={'Tabla-col col-xs-1 '}>{equipo.pj}</Col>
                <Col className={'Tabla-col col-xs-1 '}>{equipo.pg}</Col>
                <Col className={'Tabla-col col-xs-1 '}>{equipo.pe}</Col>
                <Col className={'Tabla-col col-xs-1 '}>{equipo.pp}</Col>
                <Col className={'Tabla-col col-xs-1 Tabla-goles'}>{equipo.gf}</Col>
                <Col className={'Tabla-col col-xs-1 Tabla-goles'}>{equipo.gc}</Col>
                <Col className={'Tabla-col col-xs-1 Tabla-puntos'}>{equipo.puntos}</Col>
                <Col className={'Tabla-col col-xs-1 Tabla-goles'}>{equipo.gf - equipo.gc}</Col>
            </Row>
        )}
    </Container>
    : <Spinner />
)};

export default posiciones;
