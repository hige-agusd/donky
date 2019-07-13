import React, { Component } from 'react';

import Novedad from '../../components/Novedad/Novedad';
import amistoso from "../../assets/images/amistoso.png";
import { Container, Row, Col } from "react-bootstrap";
import './Novedades.css';

class Novedades extends Component {

  render() {
      console.log(this.props.novedades);
      const novedades = this.props.novedades && this.props.novedades.length ?
      (
      <Container fluid={true} className={'Novedades-section'}>
        <Row className={'Novedades-header'}>
          <h3 className={'Novedades-titulo'}>NOVEDADES</h3> <h6 className={'Novedades-subtitulo'}>FUTBOL FEMENINO</h6>
        </Row>
        <Row className={'Novedades-row'}>
          { this.props.novedades.map( (novedad, i) =>
            <Col className={'col-xs-12 Novedades-col'} md={4}><Novedad novedad={novedad}/></Col>
          )}
        </Row>
      </Container>)
      : null;
      // console.log(novedades);
      const novedad = { 
        content: {
          titulo: 'Amistoso Internacional',
          subtitulo: 'Futbol Femenino - 19/01/2019',
          descripcion: 'El fútbol femenino crece en Argentina y en el mundo. Francia, allí donde está el mejor equipo de Europa se dio un gusto este sábado en un amistoso internacional...',
          btn_label: 'Ver Nota'
        },
        link: '/novedad',
        id: '123',
        image: amistoso
      }
      return (
        novedades
      );
  }

}

export default Novedades;