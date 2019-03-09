import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Partido from './Partido';
import './Partido.css';

const partido = props => {
    const images = require.context('../../assets/images', true);
    const local = props.equipos.filter(eq => eq.nombre === props.local.nombre)[0];
    const escudoLocal = local ? <img src={images('./'+local.escudo)} alt={props.local.nombre}></img>: null;
    const visitante = props.equipos.filter(eq => eq.nombre === props.visitante.nombre)[0];
    const escudoVisitante = local ? <img src={images('./'+visitante.escudo)} alt={props.local.nombre}></img>: null;
    return (
    <Container fluid={true} className={`Partido-wrapper ${props.even}`} >
        <span className={'Partido-VS'}>VS</span>
       <Row className={'Partido'} >
            <Col className={'col-xs-4 col-md-offset-1 col-md-3 Partido-eq-local'}>{props.local.nombre}</Col>
            <Col className={'col-xs-2'}>
                <div className={'Partido-escudo-wrapper'} >
                    {escudoLocal}
                </div>
            </Col>
            <Col className={'col-xs-2'}>
                <div className={'Partido-escudo-wrapper'} >
                    {escudoVisitante}
                </div>
            </Col>            
            <Col className={'col-xs-4 col-md-3 Partido-eq-visitante'}>{props.visitante.nombre}</Col>
        </Row>
    </Container>
);
    };

export default partido;
