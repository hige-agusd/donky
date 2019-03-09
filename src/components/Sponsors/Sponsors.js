import React from "react";

import birmutLogo from "../../assets/images/Birmut.png";
import warlordLogo from "../../assets/images/Warlord.png";
import mahauxLogo from "../../assets/images/MAHAUX.png";
import heroFactoryLogo from "../../assets/images/Hero_Factory.png";
import { Container, Row, Col } from "react-bootstrap";
import './Sponsors.css';

const sponsors = props => (
    <Container fluid={true} className={'Sponsors'}>
      <Row>
      <Col className={"Sponsors-Logo col-xs-12"} md={4} style={{ height: props.height }}>
        <img src={birmutLogo} alt="Birmut Cervecería" />
      </Col>
      <Col className={"Sponsors-Logo col-xs-12"} md={4} style={{ height: props.height }}>
        <img src={warlordLogo} alt="Warlord Creations" />
      </Col>
      <Col className={"Sponsors-Logo col-xs-12"} md={4} style={{ height: props.height }}>
        <img src={heroFactoryLogo} alt="J&T Hero Factory" />
      </Col>
    </Row>
  </Container>
);

export default sponsors;
