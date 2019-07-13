import React from "react";

import Link from './Link';
import fixture from "../../assets/images/1-imagen-fixture.jpg";
import entrenamiento from "../../assets/images/2-imagen-entrenamiento.jpg";
import sumate from "../../assets/images/3-imagen-sumate.jpg";
import { Container, Row, Col } from "react-bootstrap";
import './Links.css';

const links = props => (
  <Container fluid={true} className={'Links-section'}>
    <Row className={'Links-row'}>
      <Col className={'col-xs-12 Links-col'} md={4}><Link link={'/fixture'} image={fixture} label={'Fixture'}/></Col>
      <Col className={'col-xs-12 Links-col'} md={4}><Link link={'/entrenamiento'} image={entrenamiento} label={'Entrenamiento'}/></Col>
    </Row>
  </Container>
);

export default links;
