import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Partido from './Partido';
import './Partido.css';

const partido = props => {
    // const images = require.context('../../assets/images', true);
    // const local = props.equipos.filter(eq => eq.nombre === props.local.nombre)[0];
    // const escudoLocal = local ? <img src={images('./'+local.escudo)} alt={props.local.nombre}></img>: null;
    // const visitante = props.equipos.filter(eq => eq.nombre === props.visitante.nombre)[0];
    // const escudoVisitante = local ? <img src={images('./'+visitante.escudo)} alt={props.local.nombre}></img>: null;
    const letras = ['A', 'B', 'C', 'D'];
    const even = props.num % 2 !== 0 ? 'odd' : '';
    let titulo;
    if(props.fec) {
        switch (props.fec.toLowerCase()) {
            case 'cuartos': titulo = `Partido ${letras[props.num]}`; break;
            case 'semi': titulo = `Partido ${props.num}`; break;
            case 'final': titulo = props.num === 0 ? 'Final Oro' : 'Final Plata'; break;
            default: titulo = '';
        }
    }
    const headerPartido = props.fec ? <Row className={'Partido-header'}>
        { titulo }
    </Row> : null;
    return (
        <>
            { headerPartido }
            <Container fluid={true} className={`Partido-wrapper ${even}`} >
                <span className={'Partido-VS'}>VS</span>
            <Row className={'Partido'} >
                    <Col className={'col-xs-4 col-md-offset-1 col-md-3 Partido-eq-local'}>{props.local.nombre}</Col>
                    <Col className={'col-xs-2'}>
                        <div className={'Partido-escudo-wrapper'} >
                        <div className='Partido-goles'>{props.pendiente ? '-' : props.local.goles}</div>
                        </div>
                    </Col>
                    <Col className={'col-xs-2'}>
                        <div className={'Partido-escudo-wrapper'} >
                        <div className='Partido-goles'>{props.pendiente ? '-' : props.visitante.goles}</div>
                        </div>
                    </Col>            
                    <Col className={'col-xs-4 col-md-3 Partido-eq-visitante'}>{props.visitante.nombre}</Col>
                </Row>
            </Container>
        </>
);
    };

export default partido;
