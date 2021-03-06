import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Partido from '../Partidos/Partido';
import './Fechas.css';

const fechas = props => (
    <Container fluid={true} className={"Fechas-wrapper"} >
        <Row className={'Fecha-header'} >
            <Col className={'col-xs-3 Fecha-numero'} >{props.fecha.nombre ? props.fecha.nombre : `Fecha ${props.num}`}</Col>
            <Col className={'col-xs-5 col-xs-offset-4 Fecha-dias'} >{/*`DEL ${props.fecha.desde} AL ${props.fecha.hasta}`*/}</Col>
        </Row>
        { props.fecha.partidos.map((partido, i) => 
            <Partido key={i} num={i} fec={props.fecha.nombre ? props.fecha.nombre : null} {...partido} /> )}
    </Container>
);

export default fechas;