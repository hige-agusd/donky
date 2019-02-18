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
      <Col className={"Sponsors-Logo col-xs-6"} md={3} style={{ height: props.height }}>
        <img src={birmutLogo} alt="MyBurger" />
      </Col>
      <Col className={"Sponsors-Logo col-xs-6"} md={3} style={{ height: props.height }}>
        <img src={warlordLogo} alt="MyBurger" />
      </Col>
      <Col className={"Sponsors-Logo col-xs-6"} md={3} style={{ height: props.height }}>
        <img src={mahauxLogo} alt="MyBurger" />
      </Col>
      <Col className={"Sponsors-Logo col-xs-6"} md={3} style={{ height: props.height }}>
        <img src={heroFactoryLogo} alt="MyBurger" />
      </Col>
    </Row>
  </Container>
);

export default sponsors;
