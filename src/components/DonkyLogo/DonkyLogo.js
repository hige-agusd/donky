import React from "react";

import donkyLogo from "../../assets/images/Donky_logo.png";
import { Container } from "react-bootstrap";
import './DonkyLogo.css';

const logo = props => (
  <Container fluid={true} className={'DonkyLogo'}>
    <div className={"DonkyLogo-Logo"} style={{ height: props.height }}>
      <img src={donkyLogo} alt="MyBurger" />
    </div>
  </Container>
);

export default logo;
