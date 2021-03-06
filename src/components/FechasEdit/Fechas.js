import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Partido from '../PartidosEdit/Partido';
import './Fechas.css';

const fechas = props => (
    <Container fluid={true} className={"Fechas-wrapper"} >
        <Row className={'Fecha-header'} >
            <Col className={'col-xs-3 Fecha-numero'} >{`Fecha ${props.num}`}</Col>
            <Col className={'col-xs-5 col-xs-offset-4 Fecha-dias'} >{`DEL ${props.fecha.desde} AL ${props.fecha.hasta}`}</Col>
        </Row>
        { props.fecha.partidos.map((partido, i) => 
            <Partido upd={props.upd} key={i} cat={props.cat} fecha={props.num - 1} num={i} {...partido} equipos={props.equipos} /> )}
    </Container>
);

export default fechas;