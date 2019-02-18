import React, { Component } from 'react';

import staffStatic from "../../assets/images/staff_static_photo.png";
import { Container, Row, Col } from "react-bootstrap";
import './Staff.css';
import StaffMembers from '../../components/StaffMembers/StaffMembers';

class Staff extends Component {

  render() {
      const staffMembers = [{ 
        name: 'Bill Murray',
        job: 'Cazafantasma',
        bio: 'El fútbol femenino crece en Argentina y en el mundo. Francia, allí donde está el mejor equipo de Europa se dio un gusto este sábado en un amistoso internacional...',
        btn_label: 'Ver Mas',
        link: '/novedad',
        id: '123',
        image: 'https://www.fillmurray.com/160/160'
      },{ 
        name: 'Also Bill Murray',
        job: 'Futbol Femenino - 19/01/2019',
        bio: 'El fútbol femenino crece en Argentina y en el mundo. Francia, allí donde está el mejor equipo de Europa se dio un gusto este sábado en un amistoso internacional...',
        btn_label: 'Ver Nota',
        link: '/novedad',
        id: '321',
        image: 'https://www.fillmurray.com/160/159'
      }]
      return (
        <Container fluid={true} className={'Staff-section'}>
          <Row className={'Staff-row'}>
            <Col className={'col-xs-12 Staff-col Staff-static-image'}  md={6} style={{ backgroundImage: `url(${staffStatic})`}}></Col>
            <Col className={'col-xs-12 Staff-col'} md={6}><StaffMembers staffMembers={staffMembers} /></Col>
          </Row>
        </Container>
      );
  }

}

export default Staff;