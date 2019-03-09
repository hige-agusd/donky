import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './SectionHeader.css';

const sectionHeader = props => { 
    return (
    <Container fluid={true} className={`Section-Header-container ${props.clase}`} >
        <Row className={`Section-Header-wrapper ${props.next ? 'has-buttons' : ''}`} >
            {props.prev  ? 
            <Col className={'col-xs-1 Arrow-left-col'}>
                <button type="button" className={'Section-Header-arrow Section-Header-prev'} 
                        onClick={()=>props.prev()}>
                </button>
            </Col>:null}
            <Col className={`Section-Header-content ${props.next ? 'col-xs-10 has-buttons' : 'col-xs-12'}`} >
                <Col className={'col-xs-12 Section-Header'} lg={6} >{props.titulo}</Col>
                <Col className={'col-xs-12 Section-Header-ext'} lg={6} >
                    <Row>{props.torneo}</Row>
                    <Row className={'Section-Header-categoria'} >{props.categoria}</Row>
                </Col>
            </Col>
            {props.next  ? 
            <Col className={'col-xs-1 Arrow-right-col'}>
                <button type="button" className={'Section-Header-arrow Section-Header-next'} 
                        onClick={()=>props.next()}>
                </button>
            </Col>:null}
        </Row>
    </Container>
)};

export default sectionHeader;
