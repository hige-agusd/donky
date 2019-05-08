import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
// import Partido from './Partido';
import './Partido.css';

class Partido extends Component {
    constructor(props) {
        super(props);
        this.state = {
            local: this.props.local,
            visitante: this.props.visitante
        }
    }
    handleLocal = (goles) => {
        const local = this.state.local;
        local.goles = goles.target.value;
        this.setState({
            ...this.state,
            local
        });
    }
    handleVisit = (goles) => {
        const visitante = this.state.visitante;
        visitante.goles = goles.target.value;
        this.setState({
            ...this.state,
            visitante
        });
    }
    
   render() {
        return (
            <Container fluid={true} className={`Partido-wrapper ${this.props.even}`} >
                <span className={'Partido-VS'}>VS</span>
                <Row className={'Partido'} >
                    <Col className={'col-xs-4 col-md-offset-1 col-md-3 Partido-eq-local'}>{this.props.local.nombre}</Col>
                    <Col className={'col-xs-2'}>
                        <div className={'Partido-escudo-wrapper'} >
                            <div className='Partido-goles-edit'>
                                <input type="number" value={this.state.local.goles} onChange={this.handleLocal} />
                            </div>
                        </div>
                    </Col>
                    <Col className={'col-xs-2'}>
                        <div className={'Partido-escudo-wrapper'} >
                            <div className='Partido-goles-edit'>
                                <input type="number" value={this.state.visitante.goles} onChange={this.handleVisit} />
                            </div>
                        </div>
                    </Col>            
                    <Col className={'col-xs-4 col-md-3 Partido-eq-visitante'}>{this.props.visitante.nombre}</Col>
                </Row>
                    <button onClick={() => this.props.upd(this.props.cat, this.props.fecha, this.props.num, this.props.dia, this.state.local, this.state.visitante, false )}>Enviar</button>
            </Container>
        )
    };
};

export default Partido;
