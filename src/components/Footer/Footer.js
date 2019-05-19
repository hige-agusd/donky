/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css';

const footer = props => (
    <Container fluid={true} id="footer" className={"Footer"} >
        <Row className={'Footer-main-row'}>
            <Col className={'Footer-contacto col-xs-6'} xs={{order: 2}}  md={4} lg={{span:3, offset: 1}} >
                <div className={'Footer-wrapper'}>
                    <div className={'Footer-mail'} >donkyfutbol@gmail.com</div>
                    <div className={'Footer-phone'} >
                        <a className={'Footer-tel-link'} href="tel:+5491132613517"> +54 9 11 3261-3517</a>
                        <p className={'Footer-tel'} > +54 9 11 3261-3517</p>
                    </div>
                    <div className={'Footer-address'} >Av. Juan B. Justo 2002, Buenos Aires</div>
                </div>
            </Col>
            <Col className={'Footer-logo col-xs-6'} xs={{order: 1}} md={4}>
            </Col>
            <Col className={'Footer-social col-xs-6'} xs={{order: 3}}  md={3}>
                <div className={'Footer-social-title'} >Seguinos en:</div>
                <div className={'Footer-social-icons'}>
                    <a target="_blank" rel="noopener" href="https://www.instagram.com/donkyfutbol/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                    <a target="_blank" rel="noopener" href="https://www.facebook.com/donkyfutbol/"><FontAwesomeIcon className={'outline'} icon={['fab', 'facebook-f']} /></a>
                </div>
            </Col>
        </Row>
        <Row className={'Footer-second-row'}>
            <Col md={6} className={'col-xs-12'}>
                © 2018 DonkyFutbol
            </Col>
            {/* <Col md={6} className={'col-xs-12'}>
                Lorem ipsum dolor sit, amet consectetur.
            </Col> */}
        </Row>
    </Container>
);

export default footer;
